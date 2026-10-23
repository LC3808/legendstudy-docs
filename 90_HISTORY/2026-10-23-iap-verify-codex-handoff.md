# Codex 이관 패키지 — iOS IAP 검증(verify-iap-purchase) 복구

작성: Claude(UI/UX·IAP 지원) → 담당: Codex(APP·WEB·IAP 최종 통합)
작성일: 2026-10-23 · 우선순위: **P0 (실구매 Credit 미지급 복구)**

---

## 0. 한 줄 요약
실제 Apple 구매 1건이 **verify-iap-purchase에서 계속 503 → Credit 미지급**. 근본원인은
**Apple 라이브러리(`@apple/app-store-server-library`)가 Supabase Edge(Deno) 런타임과 비호환**(서명·검증 둘 다 Node 전용 API 의존).
→ Apple 경로를 **Web Crypto 기반으로 재구현**해야 함(서명 + JWS/x509 검증 모두). 그러면 저장된 키·시크릿 그대로 복구됨.
**금지: 수동 Credit 지급, 신규 실제 구매, 검증 약화, 샌드박스 지급, 시크릿/토큰/거래ID 원문 로깅.**

---

## 1. 복구 대상(실거래)
- 상품: `com.legendstudy.essay.credit1` (논술 첨삭권 1 = ₩4,900, Consumable)
- Apple 거래 시각: 2026-10-22 21:04 KST, 당시 Apple 상태 "대기 중"
- 기대 결과: **구매 Credit 정확히 1 지급, 중복 0, 기존 잔액(현재 `구매 0 · 가입무료 0 · 기타 9`)의 "기타 9" 보존.**
- 지급 경로: **기존 verify 경로로만**(앱 재실행 시 `restorePurchases`가 미완료 거래 재전달 → verify-iap-purchase 자동 호출). 수동 지급 금지.

## 2. 시스템 / 위치
- Supabase 프로젝트(Production): `stlhijzpjfgwwdgunlsd`.
- Edge Function: `verify-iap-purchase` (현재 **version 17, ACTIVE**). 소스 3파일: `index.ts`, `core.ts`, `stores.ts`.
- 리포 경로(권장 수정 위치): `supabase/functions/verify-iap-purchase/`.
- 앱: Flutter `in_app_purchase`. 클라이언트 흐름은 정상(구매→purchaseStream→verify invoke→잔액 재조회). **앱(Flutter)은 건드릴 필요 없음.**

## 3. 비밀값(env) — **값은 전부 검증 완료, 정상**
다음 8개 모두 digest 대조로 값 정확 확인함(값은 비공개 유지):
`IAP_APPLE_PRIVATE_KEY`(In-App Purchase .p8, EC P-256), `IAP_APPLE_KEY_ID`(=`49AZHFNK24`), `IAP_APPLE_ISSUER_ID`,
`IAP_APPLE_BUNDLE_ID`(=`com.legendstudy.app`), `IAP_APPLE_APP_ID`(=`6820826957`), `IAP_APPLE_ENVIRONMENT`(=`Production`),
`IAP_APPLE_ROOT_CERTIFICATES_BASE64`(Apple 루트 CA들의 base64 JSON 배열), `IAP_ENABLED`(=`true`).
- 주의: `IAP_APPLE_PRIVATE_KEY`가 "유효한 EC 키로 서명 가능한지"는 **라이브러리 서명이 먼저 터져서 최종 확인 못 함**. Web Crypto `importKey('pkcs8')`로 바꾸면 키 자체 문제면 거기서 명확한 예외가 남(아래 §6 진단 참고). 지금까지의 실패는 키가 아니라 런타임 비호환일 가능성이 큼.

## 4. 근본원인 (2계층, 관측·외부근거로 확정)
**(계층1) 서명 실패** — 진단 로그가 반복적으로 `{"stage":"Error","appleHttpStatus":null,"appleApiError":null}`.
= Apple 요청 **전에** 일반 Error → 라이브러리 `AppStoreServerAPIClient`의 **jsonwebtoken ES256 서명이 Supabase Deno에서 실패**.
키 형식 정규화(v17)로도 동일 실패 → 키 재입력으로 해결 불가.
**(계층2) 검증도 실패 예상** — 서명을 Web Crypto로 고쳐도, 다음 단계 `SignedDataVerifier.verifyAndDecodeTransaction`이
`node:crypto` `X509Certificate.verify`/`.publicKey` + `jsonwebtoken.verify`에 의존 → **Supabase Edge에서 미구현/깨짐**.
근거: Supabase edge-runtime#480, apple/app-store-server-library-node#224("Node 전용"). → 서명만 고치면 503이 검증으로 이동할 뿐.
**대조**: 같은 함수의 **Google 경로는 이미 `crypto.subtle` 직접 서명이라 정상.** Apple만 라이브러리에 묶여 있었음.

## 5. 외부 코드리뷰(Grok) 판정 = **보류**, 승인 조건 3가지
1. **호스트 교체**: `api.storekit.itunes.apple.com`(구 도메인) → **`api.storekit.apple.com`**, Sandbox **`api.storekit-sandbox.apple.com`**(2026-05-05 changelog).
2. **404만 거부**: `404`(TransactionIdNotFound)만 `Rejected`(422). **410 포함 그 외(400/401/429/5xx)는 `STORE_UNAVAILABLE`→503.** (410을 영구무효로 묶지 말 것)
3. **검증을 Web Crypto로 교체(또는 동일 런타임 통과 증명)**: `SignedDataVerifier` 대신 JWS(x5c) 직접 검증.

### Grok 확인 사항(그대로 채택 가능)
- JWT 클레임 **정확**: header `{alg:ES256, kid, typ:JWT}`, payload `{iss, iat, exp:iat+1200, aud:"appstoreconnect-v1", bid:<bundle>}`.
  In-App Purchase 키라 `bid` 필수 ✔, `exp−iat ≤ 3600s` ✔, `nonce`는 선택(넣으면 `crypto.randomUUID()`).
- ES256 서명형식 **정확**: `crypto.subtle.sign({name:'ECDSA',hash:'SHA-256'})` = IEEE P1363 **raw R‖S(64B)** = JOSE ES256. (DER 아님) → 길이 64 assert 권장.
- 키 임포트 **정확**: `.p8`=PKCS#8 EC P-256 → `importKey('pkcs8', ...)`. 단 정규화 주의(아래 버그 참고).
- 신뢰 경계 **약화 안 됨**: 수동 생성은 "우리→Apple 요청용 Bearer"뿐. 지급 입력은 여전히 Apple 서명 JWS를 검증한 값. 상위 게이트 불변.

### Grok 지적 버그/리스크 (수정 반영)
- **[치명]** `verifyAndDecodeTransaction` Node X509 의존 → **검증도 Web Crypto로 재구현**하거나, 배포 전 **동일 Edge 런타임에서 실제 Apple JWS 1건이 통과함을 로그로 증명**. 증거 없으면 승인 불가.
- **[높음]** host 구 도메인 → 현재 도메인(위 1).
- **[높음]** `json()` 410→Rejected → 404만 거부(위 2).
- **[중간]** `applePkcs8Der` 정규식: 리터럴 `\n`/`\r`뿐 아니라 **실제 개행·이스케이프 `\n` 두 글자 모두 제거**, base64url(`-`/`_`)이면 표준 base64로 변환 후 `atob`. 실패 로그에 키 재료 금지(마커 유무/본문 길이 mod 4/예외 이름만).
- **[중간]** `b64`가 `node:buffer` 경유 → 이 런타임 Node 비호환 → **`btoa` 기반 base64url**로 교체, JWT에 `=` 패딩 금지.
- **[중간]** 오류 분기: 401(JWT 거절)과 verifier 실패를 **분리 로깅**(401은 `appleHttpStatus`만, 검증 실패는 `VerificationStatus`만; 토큰/키/거래ID 금지). 안 그러면 v17 진단 공백 재발.
- **[낮음]** `nonce` 없음(선택), `JSON.stringify` 키 순서(현재 안정).

## 6. 요구 구현 (Apple 경로 재작성 명세)
`stores.ts`의 `verifyStore` **Apple 분기**를 Web Crypto로 전면 재구현:
1. **API 토큰(JWT) 서명**: `crypto.subtle` ECDSA P-256. 헤더/페이로드는 §5 "확인 사항"대로. 서명 64B assert.
2. **거래 조회**: `GET https://api.storekit.apple.com/inApps/v1/transactions/{transactionId}` (Env=Production). 응답 `signedTransactionInfo`(JWS compact) 추출. 상태코드 매핑: 404→Rejected, 그 외 비정상→STORE_UNAVAILABLE. 401 상태코드 로깅(서명 성공여부 구분).
3. **JWS/x509 검증(핵심)**: `signedTransactionInfo`의 `x5c`(leaf·intermediate·root) 추출 →
   - 루트가 **핀된 Apple 루트(`IAP_APPLE_ROOT_CERTIFICATES_BASE64`)와 일치**하는지,
   - intermediate가 root로, leaf가 intermediate로 **서명 체인 검증**,
   - **유효기간**, (권장) Apple IAP OID 확장 확인,
   - leaf 공개키로 **JWS ES256 서명 검증** → payload(거래정보) 신뢰.
   - 구현 수단: Deno 호환 `jose`(JWS/compactVerify, Web Crypto) + `@peculiar/x509`(체인·SPKI, Web Crypto) 권장. **Node 전용 API 금지.**
4. 디코드된 거래로 기존 반환형 구성(아래 §7 불변식 체크 유지).
5. **진단 로그 처리**: 복구 확인까지 분리 진단 로그 유지 가능하나, **최종본은 시크릿/토큰/거래ID 원문 미기록 상태로 정리**(기존 승인 STEP 10).

## 7. 보안 불변식 (core.ts — 유지, 절대 약화 금지)
`verifyStore` 반환값을 핸들러가 재검증 후에만 지급:
- `accountId(=appAccountToken.toLowerCase()) === 로그인 사용자 id`, `productId/platform/transactionId`가 요청과 일치, `revoked=false`.
- `environment !== 'Production'` → 지급 안 함(pending). 샌드박스 실Credit 금지.
- `purchasedAt > now+60s` → 거부.
- 거래 유효성: `type==='Consumable' && quantity===1 && inAppOwnershipType==='PURCHASED'` 등.
- 지급은 `iap_post_verified_purchase` RPC로만. **멱등**: `external_reference='iap/apple/'||sha256(transaction_id)` + advisory lock → 중복 차단(`already_processed`).
- 실패는 **fail-closed**: 예외→503 pending(미지급), 무효→422 rejected.

## 8. 현재 프로덕션 상태(인수 시점)
- `verify-iap-purchase` **v17 ACTIVE**: (a) `stores.ts`에 키 정규화(`normalizeApplePrivateKey`) 추가됨, (b) `core.ts` catch에 **진단 로그**(`IAP_VERIFY_FAIL`, 시각/stage/appleHttpStatus/appleApiError) 추가됨. **둘 다 임시 — 최종본에서 정리 대상.**
- 여전히 503, apple 지급 0. `IAP_ENABLED=true`, env Production.
- Ledger 베이스라인: `credit_grants`에 `external_reference like 'iap/%'` 0건. (지급 성공 시 apple 1건이어야 함)

## 9. 완료 기준(DoD)
1. Apple 경로 Web Crypto 재구현(서명+조회+JWS/x509 검증), Node 전용 API 제거.
2. Grok 조건 3가지 충족(호스트·404only·검증 Web Crypto). 가능하면 Grok 재리뷰.
3. **동일 Supabase Edge 런타임에서 실제 Apple JWS가 검증 통과함을 증명**(로그).
4. 앱 재실행 1회로 실거래 verify가 **200 + 지급** → Ledger **apple 1 / 중복 0 / 기타 9 보존** 확인.
5. 진단/임시 로그 정리한 최종본 배포. Owner가 iPhone에서 잔액 확인.
6. 실패 시 **임의 지급 없이** 정확한 단계·오류 보고.

## 10. 참고 산출물(Claude 작성)
- Grok 리뷰 지시서: `90_HISTORY/REVIEWS/2026-10-23-grok-code-review-iap-verify.md` (변경 전/후 코드 포함).
- 로컬 검증 사실: Web Crypto ECDSA 수동 서명은 Apple API에 정상 도달(임시키 401 확인). 라이브러리 서명/검증은 런타임 비호환.

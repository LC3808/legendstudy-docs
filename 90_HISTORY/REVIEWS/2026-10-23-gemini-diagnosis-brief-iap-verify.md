# 진단 의뢰서 (Gemini) — Apple IAP 검증 503 / Credit 미지급

## 0. 의뢰 목적
Supabase Edge Function `verify-iap-purchase`가 실제 Apple 구매를 검증하지 못하고 **HTTP 503**을 반복 → Credit 미지급.
아래 **증상·오류 로그·재현 결과·코드**만으로 **독립적으로 근본원인과 수정안**을 판정해 주세요. 이 문서가 전부이며,
추측이 필요하면 "확인 필요"로 표시하세요. (서버 코드 리뷰 + 로그 해석)

---

## 1. 환경
- **런타임**: Supabase Edge Functions = **Deno** + `npm:` 호환 레이어(Node API 일부만 polyfill). 브라우저/Node와 동작 차이 가능.
- **함수**: `verify-iap-purchase` (3파일: `index.ts` 인증·지급RPC, `core.ts` HTTP 핸들러·보안 게이트, `stores.ts` Apple/Google 실검증).
- **라이브러리**: `npm:@apple/app-store-server-library@2.0.0` (Apple 공식, **Node 전용 설계**).
- **앱**: Flutter `in_app_purchase`. 소비성 상품 `com.legendstudy.essay.credit1`(₩4,900) 구매 → 서버 검증 후 Credit 1 지급.
- **env(값 전부 검증 정상, 비공개)**: `IAP_APPLE_PRIVATE_KEY`(.p8, EC P-256, In-App Purchase 키), `IAP_APPLE_KEY_ID`(=49AZHFNK24),
  `IAP_APPLE_ISSUER_ID`, `IAP_APPLE_BUNDLE_ID`(=com.legendstudy.app), `IAP_APPLE_APP_ID`(=6820826957),
  `IAP_APPLE_ENVIRONMENT`(=Production), `IAP_APPLE_ROOT_CERTIFICATES_BASE64`(Apple 루트 CA base64 JSON 배열), `IAP_ENABLED`(=true).

## 2. 증상 (관측)
- 앱에서 구매 완료되나 Credit 미충전. 앱 재실행 시 `restorePurchases`로 미완료 거래가 재전달 → verify 호출 발생 → **매번 503**.
- Credit 원장(`credit_grants`)에 `external_reference like 'iap/apple/%'` **0건** (지급 안 됨). 기존 "기타 9"만 존재.
- 앱 화면 메시지: 초기 "스토어 연결을 확인하지 못했어요" → 이후 "구매가 확인되면 Credit이 자동으로 충전돼요"(= 서버 pending/503 그대로).

## 3. 오류 로그 (실측)
### 3-1. 게이트웨이(function_edge_logs) — 전부 503
```
POST | 503 | .../verify-iap-purchase   2026-10-22T12:04:48  (IAP_ENABLED 설정 전)
POST | 503 | ...                         13:11:15 / 13:23:21 / 13:24:07  (IAP_ENABLED=true 설정 13:21:33 후 포함)
POST | 503 | ...                         13:31:00 / 13:36:05 / 13:48:11
POST | 503 | ...                         14:04:58 x2   (진단로그 버전 v11)
POST | 503 | ...                         14:11:04 x2
POST | 503 | ...                         14:14:32 x2 / 14:16:24 x2   (동일코드 재배포 v14 = env 강제갱신 후)
POST | 503 | ...                         14:20:22 x2
POST | 503 | ...                         14:39:18 x2   (키 정규화 버전 v17 후)
```
### 3-2. 함수 콘솔(function_logs) — catch 진단 로그, **모두 동일**
```
IAP_VERIFY_FAIL {"at":"2026-10-22T14:04:58.890Z","stage":"Error","appleHttpStatus":null,"appleApiError":null}
IAP_VERIFY_FAIL {"...14:11:04...","stage":"Error","appleHttpStatus":null,"appleApiError":null}
IAP_VERIFY_FAIL {"...14:14:32...","stage":"Error","appleHttpStatus":null,"appleApiError":null}
IAP_VERIFY_FAIL {"...14:16:24...","stage":"Error","appleHttpStatus":null,"appleApiError":null}
IAP_VERIFY_FAIL {"...14:39:18...","stage":"Error","appleHttpStatus":null,"appleApiError":null}
```
> 진단 로그 필드 정의: `stage`=예외의 알려진 센티넬 메시지이거나 없으면 `error.name`. `appleHttpStatus`=`error.httpStatusCode`(숫자일 때). `appleApiError`=`error.apiError`.
> 해석: `appleHttpStatus:null` = **Apple 서버 응답 전에** 실패. `stage:"Error"` = 일반 `Error`(APIException/VerificationException/우리 센티넬 아님). → **JWT 서명 단계 실패**로 지목됨.

## 4. 코드 (현재 배포본 v17 핵심)
### 4-1. core.ts 핸들러 게이트(발췌) — 503이 나오는 지점
```ts
try { user = await ports.authenticate(token); } catch { return reply('pending', 503); }
if (!user) return reply('rejected', 401);
if (!enabled) return reply('pending', 503);            // IAP_ENABLED=true 확인됨 → 여기 아님
try {
  // ...본문 파싱/검증...
  const v = await ports.verify(p);                     // ← stores.verifyStore (Apple)
  if (!v) return reply('pending');
  // ...accountId/product/transaction 일치·Production·purchasedAt 검증...
  return reply(await ports.grant(user, v));
} catch (e) {
  // 진단 로그(시각/stage/appleHttpStatus/appleApiError)
  if (e instanceof Rejected || e instanceof SyntaxError) return reply('rejected', 422);
  return reply('pending', 503);                        // ← 503 (fail-closed)
}
```
### 4-2. stores.ts Apple 경로(발췌) — 실패 지점
```ts
const environment = env('IAP_APPLE_ENVIRONMENT') === 'Production' ? Environment.PRODUCTION : Environment.SANDBOX;
const bundle = env('IAP_APPLE_BUNDLE_ID');
const appId = Number(env('IAP_APPLE_APP_ID'));
const api = new AppStoreServerAPIClient(
  normalizeApplePrivateKey(env('IAP_APPLE_PRIVATE_KEY')),   // 정규화: 헤더/공백/\n escape 제거 후 PEM 재구성
  env('IAP_APPLE_KEY_ID'), env('IAP_APPLE_ISSUER_ID'), bundle, environment);
const transaction = await api.getTransactionInfo(p.transaction_id);  // ← 여기서 서명 전 throw (503)
// 이후: SignedDataVerifier(roots, true, env, bundle, appId).verifyAndDecodeTransaction(...)
```
> 참고: 같은 파일의 **Google 경로는 `crypto.subtle`(Web Crypto)로 직접 RS256 서명** → **정상 동작**. Apple만 라이브러리에 의존.

## 5. 로컬 재현 결과 (macOS, Deno 2.9.6)
라이브러리 `AppStoreServerAPIClient.getTransactionInfo`를 임시 키로 호출:
- **정상 EC P-256 키** → 서명 성공, Apple 도달, `httpStatusCode=401`(임시키라 인증만 거부). 즉 로컬에선 서명 됨.
- **손상 키 변형**(헤더없음 / 한줄 / 리터럴 `\n` / 줄끝 공백) → `name="Error"`, `httpStatusCode=null`,
  메시지 `secretOrPrivateKey must be an asymmetric key when using ES256`. (CRLF 변형은 정상)
- **키 정규화 적용 시** → 위 모든 변형이 서명 성공(Apple 도달).
- **그런데 프로덕션 v17(정규화 포함)은 여전히 `stage:"Error", httpStatus:null`** → 로컬과 결과 상이.
- **수동 `crypto.subtle` ECDSA P-256 서명 + 직접 fetch** → Apple 도달(401) 확인(라이브러리 우회 시 서명 가능).

## 6. 배제된 것 (검증 완료)
- `IAP_ENABLED` = `true` 정확(디제스트 대조). 활성화 게이트 아님.
- env 8개 값 전부 정확(APP_ID·BUNDLE_ID·ENVIRONMENT·KEY_ID·ISSUER_ID·ROOT·PRIVATE_KEY 존재·ENABLED).
- 웜 인스턴스 미반영: 동일코드 재배포(v14)로 새 워커 강제 후에도 동일 실패 → 배제.
- 샌드박스 환경: 그 경우 200 pending이지 503 아님 → 배제. 거래 미존재(404): 그 경우 422 → 배제.
- 즉 503은 **catch(예외)** 경로이며, 로그상 **Apple 호출 전 서명 단계 예외**.

## 7. 현재까지의 가설 (검증 바람)
- **(계층1) 서명**: 라이브러리의 jsonwebtoken ES256 서명이 **Supabase Deno 런타임에서 실패**(로컬 Deno에선 성공) → `stage:"Error", httpStatus:null`와 일치.
- **(계층2) 검증**: 설령 서명을 Web Crypto로 우회해도, 다음 단계 `SignedDataVerifier.verifyAndDecodeTransaction`이
  `node:crypto` `X509Certificate.verify`/`.publicKey` + `jsonwebtoken.verify`에 의존 → **같은 런타임에서 실패 가능**
  (관련: supabase/edge-runtime#480, apple/app-store-server-library-node#224 "Node 전용"). → 미검증 리스크.

## 8. Gemini에게 묻는 것
1. 로그 지문(`stage:"Error", appleHttpStatus:null`, 모든 버전 동일)으로 볼 때 **실패 단계는 서명이 맞는가?** 다른 가능성은?
2. 로컬 Deno(2.9.6)에선 라이브러리 서명이 되는데 **Supabase Edge Deno에선 안 되는** 구체적 메커니즘은?(node:crypto EC KeyObject / jsonwebtoken 의존성) 재현/확인 방법은?
3. 정규화(v17) 이후에도 동일 실패 → **키 값 문제 vs 런타임 문제** 중 무엇으로 판단되는가? 구분할 결정적 진단은?
4. 해결책으로 **Web Crypto 전면 재구현(서명 + JWS/x509 검증)** 이 타당한가? 더 단순/안전한 대안은?
5. **(계층2)** `SignedDataVerifier`가 이 런타임에서 동작하는지, 아니면 반드시 교체해야 하는지 — 확정 의견.
6. 배포 전 **동일 Edge 런타임에서 검증까지 통과함을 증명할 최소 테스트**는?

## 9. 제약 (해결안이 지켜야 함)
- 신뢰 경계 유지: 클라이언트 데이터 불신, **Apple 서명(signedTransactionInfo) 검증값만** 지급 입력.
- 상위 게이트 불변: accountId(appAccountToken) 바인딩, product/transaction 일치, revoked=false, **Production만 지급**, purchasedAt 미래 거부.
- 멱등: `external_reference='iap/apple/'||sha256(transaction_id)` + advisory lock(중복 지급 차단).
- 실패는 fail-closed(503, 미지급). **수동 Credit 지급·신규 실제 구매·시크릿/토큰/거래ID 원문 로깅 금지.**

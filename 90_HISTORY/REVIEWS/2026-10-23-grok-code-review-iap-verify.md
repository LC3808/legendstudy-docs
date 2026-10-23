# 코드 리뷰 지시서 — Apple IAP 검증(verify-iap-purchase) Edge Function

## 0. 리뷰어에게 (역할)
당신은 결제 백엔드/암호서명 보안 리뷰어입니다. 아래 **프로덕션 변경(diff)**을 검토하고,
**정확성 · 보안 · Apple 규격 준수 · 런타임 호환성** 관점에서 승인/보류를 판정하세요.
이 문서만으로 독립 판단이 가능하도록 전부 담았습니다. 추측이 필요하면 "확인 필요"로 표시하세요.

---

## 1. 시스템 맥락
- **런타임**: Supabase Edge Function (Deno, `npm:` 호환 레이어). Node 전용 라이브러리의 `node:crypto` 동작이 브라우저/Deno와 다를 수 있음.
- **앱**: Flutter `in_app_purchase`. 소비성(Consumable) 상품 "논술 첨삭권"(`com.legendstudy.essay.credit1` 등) 구매 → 서버가 Apple App Store Server API로 검증 후 Credit 원장(ledger)에 1회 지급.
- **함수 구조(3파일)**: `index.ts`(포트 주입·인증·지급 RPC), `core.ts`(HTTP 핸들러·보안 게이트), `stores.ts`(Apple/Google 실검증). **이번 변경은 `stores.ts`의 Apple 경로 한정.**
- **비밀값(env, 값 비공개)**: `IAP_APPLE_PRIVATE_KEY`(In-App Purchase용 .p8, EC P-256), `IAP_APPLE_KEY_ID`, `IAP_APPLE_ISSUER_ID`, `IAP_APPLE_BUNDLE_ID`(=`com.legendstudy.app`), `IAP_APPLE_APP_ID`(숫자 App Store ID), `IAP_APPLE_ENVIRONMENT`(=`Production`), `IAP_APPLE_ROOT_CERTIFICATES_BASE64`(JSON 배열), `IAP_ENABLED`(=`true`).

## 2. 증상과 근본원인(관측 사실)
- 실제 프로덕션 구매 1건이 검증 실패로 Credit 미지급. verify 호출이 반복적으로 **HTTP 503**.
- 함수 catch에 추가한 진단 로그 결과(반복 동일): `{"stage":"Error","appleHttpStatus":null,"appleApiError":null}`.
  → **Apple 서버 요청 전에** 일반 `Error`로 실패 = JWT **서명 단계** 실패.
- 로컬 재현(임시 EC 키): 라이브러리 `@apple/app-store-server-library@2.0.0`의 `AppStoreServerAPIClient.getTransactionInfo`는
  - 로컬 Deno 2.9.6에선 서명 성공(Apple 도달, 401),
  - 메시지 `secretOrPrivateKey must be an asymmetric key when using ES256`가 키 손상 변형에서 재현됨.
- 키 형식 정규화(헤더/공백/escape 제거 후 PEM 재구성)를 넣어 배포(v17)했으나 **프로덕션에선 여전히 서명 전 동일 실패**.
  → 키 재입력·정규화로도 안 됨. **결론: 이 라이브러리의 jsonwebtoken 기반 ES256 서명이 Supabase Deno 런타임에서 동작하지 않음**(로컬과 상이).
- 대조: 같은 함수의 **Google 경로는 이미 `crypto.subtle`로 직접 서명**하며 정상.

## 3. 제안 변경 (핵심)
`stores.ts`의 Apple 경로에서 **라이브러리의 토큰 생성/HTTP 호출(`AppStoreServerAPIClient.getTransactionInfo`)을
Web Crypto(`crypto.subtle`, ECDSA P-256) 수동 JWT + 직접 `fetch`로 교체**.
**서명 검증은 그대로 `SignedDataVerifier.verifyAndDecodeTransaction` 사용.**

### 3-1. 변경 전 (v17, 라이브러리 기반) — 발췌
```ts
import { AppStoreServerAPIClient, Environment, SignedDataVerifier } from 'npm:@apple/app-store-server-library@2.0.0';
// ...
const api = new AppStoreServerAPIClient(
  normalizeApplePrivateKey(env('IAP_APPLE_PRIVATE_KEY')),
  env('IAP_APPLE_KEY_ID'), env('IAP_APPLE_ISSUER_ID'), bundle, environment);
const transaction = await api.getTransactionInfo(p.transaction_id);   // ← 여기서 서명 실패(503)
if (!transaction.signedTransactionInfo) throw Error('STORE_UNAVAILABLE');
const verifier = new SignedDataVerifier(roots.map(r => Buffer.from(r,'base64')), true, environment, bundle, appId);
const t = await verifier.verifyAndDecodeTransaction(transaction.signedTransactionInfo);
```

### 3-2. 변경 후 (제안) — stores.ts 전체
```ts
import { Environment, SignedDataVerifier } from 'npm:@apple/app-store-server-library@2.0.0';
import { Buffer } from 'node:buffer';
import { Rejected, type Purchase, type VerifiedPurchase } from './core.ts';
type Env = (name: string) => string;
const json = async (response: Response) => { if (!response.ok) { if (response.status === 404 || response.status === 410) throw new Rejected(); throw Error('STORE_UNAVAILABLE'); } return await response.json(); };
const b64 = (v: Uint8Array) => Buffer.from(v).toString('base64url');

export async function googleAccessToken(env: Env): Promise<string> { /* 변경 없음: crypto.subtle RS256 */ }
export function googlePurchase(p: Purchase, data: Record<string, unknown>): VerifiedPurchase | null { /* 변경 없음 */ }

// Apple App Store Server API JWT via Web Crypto ECDSA P-256 (ES256).
// 라이브러리의 jsonwebtoken 서명이 이 Deno 런타임에서 실패 → crypto.subtle로 직접 서명 (Google 경로와 동일 패턴).
function applePkcs8Der(raw: string): ArrayBuffer {
  const body = raw
    .replace(/\\r/g, '').replace(/\\n/g, '')
    .replace(/-----BEGIN [A-Z0-9 ]+-----/g, '')
    .replace(/-----END [A-Z0-9 ]+-----/g, '')
    .replace(/\s+/g, '');
  const bin = atob(body);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out.buffer;
}
async function appleApiToken(env: Env): Promise<string> {
  const key = await crypto.subtle.importKey('pkcs8', applePkcs8Der(env('IAP_APPLE_PRIVATE_KEY')), { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const now = Math.floor(Date.now() / 1000);
  const signingInput = b64(new TextEncoder().encode(JSON.stringify({ alg: 'ES256', kid: env('IAP_APPLE_KEY_ID'), typ: 'JWT' }))) + '.' +
    b64(new TextEncoder().encode(JSON.stringify({ iss: env('IAP_APPLE_ISSUER_ID'), iat: now, exp: now + 1200, aud: 'appstoreconnect-v1', bid: env('IAP_APPLE_BUNDLE_ID') })));
  const sig = new Uint8Array(await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, new TextEncoder().encode(signingInput)));
  return signingInput + '.' + b64(sig);
}

export async function verifyStore(p: Purchase, env: Env): Promise<VerifiedPurchase | null> {
  if (p.platform === 'google') { /* 변경 없음 */ }
  const environment = env('IAP_APPLE_ENVIRONMENT') === 'Production' ? Environment.PRODUCTION : Environment.SANDBOX;
  const bundle = env('IAP_APPLE_BUNDLE_ID');
  const appId = Number(env('IAP_APPLE_APP_ID'));
  if (!Number.isSafeInteger(appId) || appId <= 0) throw Error('STORE_UNCONFIGURED');
  const token = await appleApiToken(env);
  const host = environment === Environment.PRODUCTION ? 'https://api.storekit.itunes.apple.com' : 'https://api.storekit-sandbox.itunes.apple.com';
  const data = await json(await fetch(`${host}/inApps/v1/transactions/${encodeURIComponent(p.transaction_id)}`, { headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(15000) }));
  const signed = data.signedTransactionInfo;
  if (typeof signed !== 'string') throw Error('STORE_UNAVAILABLE');
  const roots = JSON.parse(env('IAP_APPLE_ROOT_CERTIFICATES_BASE64')) as string[];
  if (!Array.isArray(roots) || !roots.length) throw Error('STORE_UNCONFIGURED');
  const verifier = new SignedDataVerifier(roots.map(r => Buffer.from(r, 'base64')), true, environment, bundle, appId);
  const t = await verifier.verifyAndDecodeTransaction(signed);
  if (t.type !== 'Consumable' || t.quantity !== 1 || !t.appAccountToken || !t.purchaseDate || !t.transactionId || !t.productId || t.inAppOwnershipType !== 'PURCHASED') throw new Rejected();
  return { platform: 'apple', productId: t.productId, transactionId: t.transactionId,
    accountId: t.appAccountToken.toLowerCase(), purchasedAt: new Date(t.purchaseDate).toISOString(),
    environment: t.environment === 'Production' ? 'Production' : 'Sandbox', revoked: t.revocationDate !== undefined };
}
```

## 4. 상위 보안 게이트 (core.ts — 변경 없음, 불변식 참고)
`verifyStore` 반환값은 핸들러가 재검증 후에만 지급합니다:
- `accountId === 로그인 사용자 id` (appAccountToken 바인딩), `productId`/`platform`/`transactionId`가 클라이언트 요청과 일치, `revoked=false`.
- `environment !== 'Production'`이면 **지급 안 함(pending)**. 샌드박스는 실Credit 금지.
- `purchasedAt`가 미래(>now+60s)면 거부.
- 지급은 `iap_post_verified_purchase` RPC로만. **멱등성**: `external_reference = 'iap/apple/' || sha256(transaction_id)` + advisory lock으로 중복 지급 차단(`already_processed`).
- 실패는 **fail-closed**: 예외 시 503 pending(지급 안 함), 무효 거래는 422 rejected.

## 5. 리뷰에서 반드시 답할 질문
1. **JWT 규격**: header `{alg:ES256, kid, typ:JWT}` / payload `{iss, iat, exp(+1200s), aud:"appstoreconnect-v1", bid:<bundle>}` 가 App Store Server API(특히 **In-App Purchase 키** 사용 시 `bid` 필수) 규격에 **정확히** 맞는가? exp ≤ 3600s 제약 준수?
2. **ES256 서명 형식**: `crypto.subtle.sign('ECDSA', SHA-256)` 출력이 **JOSE raw R||S(64바이트)** 인가? (DER가 아니라) Apple이 요구하는 형식과 일치하는가?
3. **키 임포트**: Apple .p8(PKCS#8, EC P-256)를 `importKey('pkcs8', ...)`로 처리하는 게 맞는가? `applePkcs8Der`의 정규화가 정상 키를 훼손할 여지는 없는가?
4. **엔드포인트/환경**: Production host `api.storekit.itunes.apple.com`, 경로 `/inApps/v1/transactions/{id}` 정확한가? 404/410→거부 매핑 적절한가?
5. **검증 유지**: 서명만 수동으로 바꾸고 `SignedDataVerifier`로 JWS(x5c 체인 + 서명)를 계속 검증 → **신뢰 경계가 약화되지 않는가?** (클라이언트 데이터 불신, Apple 서명만 신뢰)
6. **런타임 리스크**: `SignedDataVerifier.verifyAndDecodeTransaction`(라이브러리의 JWS/x509 검증)이 **동일 Deno 런타임에서 동작**하는가? (서명 문제는 우회했지만 검증 경로는 미검증 — 가장 큰 잔존 리스크)
7. **오류/타임아웃/멱등성**: 네트워크 타임아웃(15s), 예외 시 fail-closed(503, 미지급), 중복 호출 시 멱등 — 회귀 없는가?
8. **대안 비교**: 라이브러리 유지가 가능한 다른 방법(예: 서명만 주입 가능한 API, 다른 버전)이 더 나은가, 아니면 수동 서명이 Deno/Edge에서 정석인가?

## 6. 제약(반드시 준수)
- 프로덕션 비밀값(키/토큰/거래ID 원문) 로그·출력 금지. 멱등·중복방지 계약 유지. 샌드박스 지급 금지.
- 기존 Credit 수동 지급·신규 실제 구매 금지. 변경은 `stores.ts` Apple 서명/조회 경로로 국한.

## 7. 요청 산출물(리뷰 결과 형식)
- 판정: **승인 / 조건부 승인 / 보류** + 사유.
- 위 질문 1~8 각각에 대한 근거 있는 답.
- 발견한 버그/리스크를 `[심각도] 파일:위치 — 문제 — 실패 시나리오 — 수정안` 형식으로.
- 특히 **질문 2(R||S vs DER)와 질문 6(verifier 런타임 호환)** 은 반드시 확정 의견을 낼 것.

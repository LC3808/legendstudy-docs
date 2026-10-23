# IAP recovery — verified evidence and local implementation

Status: PARTIAL; no Production deployment or financial mutation by this task.
Canonical implementation/evidence: [APP recovery branch](https://github.com/LC3808/legendstudy-app/tree/codex/payment-credit-recovery-20261023),
[full investigation](https://github.com/LC3808/legendstudy-app/blob/codex/payment-credit-recovery-20261023/wiki/iap-production-read-only-20261023.md).

## Android

Read-only Play Console and Google API checks identify the reported Oct23 orders
as TEST purchases, now REFUNDED; purchaseState1/purchaseType0, ACK0/consumption0.
Order matching and account-binding presence verified. No raw order/token/identity
is retained here. These orders must not receive spendable Production Credit.
Current state1 explains current rejection; it does not retroactively prove the
cause of the historical422 before refund. That cause remains unobserved because
the deployed logger retained only a generic Error.

Initial missing Google settings were confirmed. Owner registered them and later
corrected the package setting; latest digest matches the published app identifier.
The existing credential was reused for OAuth and GET-only order/product reads.
No key creation, new purchase, acknowledge/consume, refund or grant occurred.

## Apple and diagnostics

[Claude handoff](2026-10-23-iap-verify-codex-handoff.md) and
[Grok review brief](REVIEWS/2026-10-23-grok-code-review-iap-verify.md) incorporated.
Local Apple verifier replaces Node signing/X509 with WebCrypto, preserving pinned
chain, Apple OIDs, dates, JWS, signed/fresh issuer/delegated OCSP, identity/product/
transaction/environment/revocation checks and existing Ledger RPC.
Google diagnostic reasons separate OAuth/network/key import from purchase-state,
order/binding and404/410 rejection without sensitive payload logging.

Validation:23 local tests PASS; EC/RSA and delegated OCSP integration suites PASS
in isolated Edge1.74.3. Actual Apple-signed transaction and device balance NOT_VERIFIED.
Captured Productionv20 rollback has unchanged source hash versus priorv17/v19;
JWT verification stays enabled. Local package builder separates Google-only
instrumentation and combined Apple repair, preserving deployed entrypoint.
No DB migration, shared Essay Worker or assessment code changes.

Owner-supplied Gemini review agrees with WebCrypto direction. Its stronger claims
are not adopted as verified facts: generic Error/null HTTP does not prove the
exact signing instruction; dummy-key401 does not certify the actual private key.
An arbitrary dummy JWS must fail; tests use valid synthetic PKI and negative cases.

## Before Production changes

Review exact package and rollback, obtain Owner approval, and verify any recoverable
existing Apple transaction via the authorized secure path. Never replay refunded
Google TEST orders to issue Production Credit. Historical422 may remain unresolvable;
new bounded diagnostics are necessary to identify any future failure precisely.
Source review, synthetic tests and presence of secrets are not Production E2E PASS.

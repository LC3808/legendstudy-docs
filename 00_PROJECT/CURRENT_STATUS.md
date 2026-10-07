<!--
DOCUMENT_STATUS: CANONICAL
SCOPE: PROJECT
LAST_VERIFIED: 2026-10-04 (PRICING-UX-CLEANUP-1D: legendstudy-lab feat/pricing-ux-cleanup @ f84b81e merged into main 3370dad and released to Production, PRODUCTION_VERIFIED on the live site; Math LAB consumer MATH-RELEASE-CLOSEOUT-1 (MATH-3B…7B) @ 6dec4f98887cee2e7c661996e083289b853054b3 local-verified 405 tests, PRODUCTION_NOT_APPLIED; all other domains retain their cited verification unchanged)
VERIFICATION_BASIS: PRICING-UX-CLEANUP-1D Production release legendstudy-lab main @ 3370dad08ad4042046d158f56fd1d38f778c9e26 (merge of f84b81e; lint/typecheck/137 tests/boundary audit/static-export build PASS before push; live /pricing/ HTTP200 with all sections in order, 4 disabled 구매하기 buttons, comparison table and shared footer absent, desktop/360/320/200% no horizontal overflow; no Payment/Toss/Supabase/Credit change); PRICING-UX-CLEANUP-1D LAB pricing closeout legendstudy-lab @ f84b81ec19009e77b63a6fe22811ecf820eaf7bb (lint/typecheck/137 tests/boundary audit/static-export build PASS; desktop/360/320/200% no horizontal overflow; read-only — no Payment/Toss/Supabase/Credit change, no Production write); MATH-2E APP @ cd215a6d88c0f72e59d06478bf4727ed676ca5f9 (L01–L40/63 learning +131 Math +37 runtime +102 Humanities/HQP PASS; C14/D8/E10 installation checks; NOT_APPLIED); MATH-2D APP @ 17e528b6b58b4c910c3f16f73be5fb1638a8bbdc (C01–C30 +131 Math +102 legacy PASS;8 runtime/14 base installation checks; NOT_APPLIED); MATH-2C APP @ 015b800aa501c93b54fcce65ebd3ef3dabdb56de (131 Math +102 legacy +14 installation/rollback checks PASS; R21 Storage runtime NOT_ASSESSABLE; Production NOT_APPLIED); MATH-2R APP @ 104f3ef97b043b861c1b4133f9a2d2ae2196c45b (shared integration contract complete; no implementation or DB connection); MATH-2B APP @ a6a696fe1f8990b2c36746377731c5814b968bb9 (documentation review; read-only catalog ledger23/no Math collisions; ACCEPT_WITH_CORRECTIONS; no implementation); ADR-2D APP @ 59e14eb76e24dd178d042c8eddeca14bd670f1b5 (non-superuser local apply/rollback;112 lifecycle+17 ownership;105 HQP;48 Deno;7 Flutter PASS; failed Owner attempt FULLY_ROLLED_BACK; NOT_APPLIED); historical ADR-2C APP @ 3ae802edfd3ab539587854059b9da07137caa7ee (111 isolated SQL;48 mocked Deno;7 Flutter; rollback/analyze PASS; read-only ledger23/ADR-2 absent; Production NOT_APPLIED); historical ADR-2 APP @ 4f92b58c967895de3769236e0cc5c2698d2b509b (97 isolated SQL assertions;21 mocked Deno;7 Flutter; rollback/analyze PASS; Production NOT_APPLIED); HQP gateway @ cbd80c90f5b104dc50e9d1a961f73d48849ce52e (actual JWT boundary PASS; Owner reports applied/tracked23; successful write NOT_ASSESSABLE); HQP-3 @ 9f78dc66bd4cc75efed45ec8d928af2abc297acb (105 isolated PG17 checks PASS; Production NOT_APPLIED); HQP-2 APP canonical review @ 38ebbf6ee511bb5ef343af82e90d14acf71b6ffc (historical review; E1/E2 subsequently resolved for HQP-3); UWA-1B bottom-up audit (legendstudy-app @ 2ebec8d); LSA-2 / LSA-2C Quality authorization closeout 2026-10-01; day_targets correction (migration 20260930000100); LEC-1/2/3 LAB Quality Console v0 closeout 2026-10-01 (legendstudy-lab claude/quality-console-v0 @ 325a112, PUBLIC; local lint/typecheck/test/build PASS; Production detail runtime NOT_ASSESSABLE); HQP-1 Human Quality persistence design 2026-10-01 (legendstudy-lab claude/quality-console-v0 @ b9cff1b, PUBLIC; design/plan only — no SQL/migration/Production change); HQR-1 Human Review Console v1 2026-10-01 (legendstudy-lab claude/quality-console-v0 @ ce9d04e, PUBLIC; write/read UI consuming 20261001000200; 160 tests + lint/typecheck/boundary/static-export PASS; Production operator write NOT_ASSESSABLE; no backend change)
BOOTSTRAP_INSPECTED_REFS: legendstudy-app main @ d07671e (local, read-only); legendstudy-lab claude/intelligence-school-architecture @ 94d5d61 (LOCAL_ONLY / REMOTE_UNAVAILABLE; read-only)
CORRECTION_REFS: APP codex/essay-scaffolding-vnext @ 2ebec8d (PUBLIC); docs main baseline @ 0dce101; LAB proposal @ 94d5d61 (LOCAL_ONLY / REMOTE_UNAVAILABLE)
CORRECTION_BASIS: Owner-approved UWA-2D following UWA-2C independent review; APP canonical evidence @ 2ebec8d
SUPERSEDES: —
SUPERSEDED_BY: —
-->

# CURRENT_STATUS — LegendStudy+ (as of 2026-10-05)

> **This document holds current facts only.** It is *not* an append-only log — see the [Daily history](../90_HISTORY/DAILY/) for how we got here.
> Status axes are defined in [`AI_CONTEXT.md` §7](AI_CONTEXT.md#7-status-vocabulary). `NOT_ASSESSABLE ≠ PASS`.

## Overnight Phase A — verified signup (2026-10-07)

**PARTIAL.** Existing canonical +3 ledger/benefit pipeline reused. Source eligibility
formerly checked only signup cohort time; a minimal guard adds verified email to
`credit_signup_eligible` while retaining installation cutoff, OID/owner/ACL and all
ledger idempotency/locks. APP RC-based `codex/overnight-verified-signup` contains
migration `20261007150000` + 11 local PostgreSQL/PGlite assertions PASS and Wiki checks.
No APP main promotion: APP main is not backend authority. No Production apply,
backfill, transaction, credential issuance or deletion/Payment architecture change.
Hosted migration ledger/function/activation reads and new-user grant E2E BLOCKED:
no DB/admin credential or relevant connector in this environment. Email confirmation
ON is the verified public setting; deployed guard presence is not inferred.
[Backend evidence](https://github.com/LC3808/legendstudy-app/blob/codex/overnight-verified-signup/wiki/verified-signup-overnight.md).
Owner supplied full Overnight plan; prior missing-plan gate resolved. Proceed to
MY, then Admin/QL; only blocked credentials/Production writes are deferred.

## LAB visual follow-up / direct checkout — 2026-10-07

Owner approved the prior IA/copy and requested subtle visual depth, centered score
LAB heroes and direct Pricing checkout. LAB main `3a1c69f99812321778bb166aa4376a0013b88462`
implements warm neutral canvas, white surfaces/borders/shadows, shared centered
내신/모의·수능 hero cards and Essay surface harmony. No repeated diagram, new imagery,
Home copy/IA change, or MY redesign. Brand `#ffac14` retained.

**CHECKOUT_DIRECT: PASS (frontend contract/browser).** Pricing embeds the existing
PaymentCheckout controller: SKU selection → existing order API → existing official
Toss SDK request. No second checkout-selection page. The old checkout route remains
for direct links/fallback. Buyer session, server authorization, per-SKU idempotency,
stale-order retry, server amount/customer/success/failure URLs preserved. Login returns
to Pricing with selected SKU; no automatic purchase after login. Double clicks guarded.

Local lint/typecheck, 313 tests/28 files (20 focused checkout tests), boundary/static
build/readiness/secret/link audits PASS. 96 responsive public checks PASS. Intercepted
browser direct checkout at 1440/1280/390/360 ×100%/200% text and guest login/SKU flow
PASS; no external order/payment. Production 12 pages ×4 widths ×100%/200% text =96 PASS, HTTP200 and no horizontal
overflow; new surface/centered hero confirmed live. Actual deployed bundle direct
entry + guest SKU flow also PASS with Auth/orders/SDK fully intercepted. No new
Production payment or signup transaction. Deployment ID unavailable from GitHub APIs.
No new real Toss transaction or authenticated reviewer acceptance is claimed.

**PAYMENT_BACKEND_CHANGED: NO. DB_CHANGED: NONE.** Functions/payment runtime/mode/
keys/finance/confirm/cancel/signing/schema/migrations unchanged. Credit/deletion
and Admin/QL implementations preserved. Detail:
[LAB visual follow-up](https://github.com/LC3808/legendstudy-lab/blob/main/docs/VISUAL_FOLLOWUP_2026-10-07.md).

Owner now directs continuation to Overnight AUTH/CREDIT → MY → ADMIN/QL; this
supersedes the previous task's STOP routing. **Detailed Overnight authority is missing
from the supplied follow-up and Wiki** (MY six section names are known; feature/data
contracts and phase acceptance are not). Requested the referenced detailed plan.
Existing Admin branch inspected read-only: includes independent finance JWT signing
and unapplied backend migrations, so it cannot be blindly merged under frozen
Payment/signing constraints. Hosted bonus definitions/activation still cannot be read
with available public credentials. No backend policy, provisional MY dashboard or
Admin write path was invented while those requirements/access remain unresolved.

## LAB frontend reconciliation — 2026-10-07

**LAB_FRONTEND_RECONCILIATION: PARTIAL** — UI implemented, main pushed and live shell
verified; Production bonus timing/idempotency read-only verification remains unavailable.
LAB implementation `65aa9571de6b2a6674274cee66f48c57a77d6481`; final main
`f7f05f56c0c79d117d8416ddf106ccb45e2bd00f` adds verified Auth/publication notes.
Existing Git-connected Production serves the new shell at https://lab.legendstudy.com.
Cloudflare deployment ID/status is not exposed by the available GitHub APIs; live
content is verified, not inferred from push. No Cloudflare configuration changed.

Same public Header before/after login: 내신 LAB / 모의·수능 LAB / 논술 LAB / 이용 안내;
brand is Home. Credit uses existing `useCreditSummary`, no loading-as-zero or invented
entitlement. Home typography/wrapping/duplicate CTAs and graphic cleaned; concise
login/signup and APP-authority LAB copy; new `/exam-analysis/`; footer email purposes.
Pricing: 판매 상품 → 학교 단체 이용 / 이벤트 프로모션 → 구매 안내. Existing checkout,
Essay Credit and lifecycle preserved. Auth soft-navigation `next` / duplicate redirect
and initial hydration fixed without backend policy changes. Legacy guide redirects
resolve in one hop. Examples remain clearly examples, no new evaluation capability.

Verification: lint/typecheck, 307 tests (28 files), boundary audit, static build,
GitHub-readiness/static-secret scan PASS. Local 96 public responsive conditions plus
40 intercepted signed-in/out conditions PASS, including mobile MY/Credit/logout and
login→account. Production 12 routes ×1440/1280/390/360 ×100%/200% text =96 PASS,
HTTP200/no horizontal overflow. Home/Login/Pricing screenshots reviewed; no broken
Korean desktop words. Live Home CTA preserves `next=/account/`, form enabled, no
page errors; Pricing order and four legacy redirects PASS. Actual signed-in Production
was not tested (no supplied account); local fixture is not a live-account claim.

Production Auth public settings read-only: `mailer_autoconfirm=false` (Email
confirmation ON), `disable_signup=false`. New email/password signup should return
no session and pre-confirm password login requires confirmation under this setting;
no new Production signup/login was executed. Bonus current deployment/activation and
exactly-once enforcement remain **NOT_ASSESSABLE** without privileged read access.
Source APP final RC `7d1c036`: +3 profile/claim path in `20260929000300`, superseded
when lifecycle enabled by confirmed-email worker/benefit recovery in `20261001000300`.
Source idempotency: `credit_signup_once_per_account`, external ref/transaction keys,
`benefit_claims`/`benefit_delivery` and locks. Do not infer deployed state from source.

Read-only branch reconciliation: home-simplification and lab-ui-reconciliation fully
included in baseline main; privacy patch files identical to main despite different
ancestry; admin-console (5 unique commits) and quality-console (4 unique) left intact,
not merged/cherry-picked. Full evidence:
[LAB closeout](https://github.com/LC3808/legendstudy-lab/blob/main/docs/FRONTEND_RECONCILIATION_2026-10-07.md).

**PAYMENT_CHANGED: NONE. DB_CHANGED: NONE.** Toss/finance/Functions, Credit schema,
account deletion lifecycle and Admin/QL untouched. No payment transactions, live
activation, new wallet/coupon/signup bonus/Application backend. Stop this task here.
Next Owner queue: **AUTH/CREDIT/MY → ADMIN → APPLICATION/COUPON/ESSAY/GROWTH**;
this routing does not authorize starting them. Read deployed Auth/Credit authority first.

## APP final Store RC — verified 2026-10-07

APP base `73a2a35` (`origin/claude/app-release-blocker-closeout-1`), closeout branch
`codex/final-store-rc-1`. Owner full test **+967 ~2 PASS** supersedes older936/CI-pending
APP claims below. Fresh Flutter3.47.6/Dart3.13.5 analyze **PASS**, unsigned Android AAB,
iOS release and Xcode archive **PASS**. SDK wrapper corrected3.47.5→3.47.6; no app feature
or dependency change. Native personalization/LAB/notification implementations retained;
Manus logos optional/deferred. Standard Android build regenerates release registrant;
`--no-pub` after pub get failed on dev-only integration_test, no source workaround needed.

**Owner release defines CONFIRMED:** deletion, essay writes and evaluation all true.
APP tool/store-release preserves other production values and shares flags across Android/iOS.
Android existing upload-key binding prepared; no feature-code changes. Opus independent
audit P0=0/P1=2 was cross-check evidence; both define P1s resolved.
**Store NOT READY:** upload/distribution signing, recovery redirect verification, external-web-link policy review, device
smoke and Console/reviewer/screenshots/build-number inputs. Physical iPhone detected but
not installed/tested; no Android connected. Required public policy/support/deletion URLs
HTTP200. Oct06 destructive deletion authority preserved, not rerun. Report +25-item smoke
checklist: APP `wiki/final-store-rc-1.md`. No Production mutation, upload or Toss work.

## Toss REVIEW confirm closeout 2 — 2026-10-07

LAB main/Production `e1adc86`, successful deployment `52e432a9` includes bounded
REVIEW RPC401 diagnostics and canonical completion/failure UI; latest HOME changes
9691ef3 preserved. 264 tests, lint/typecheck/boundary PASS; direct Node22 build PASS
(pnpm fallback build hit a local port sandbox limit). Local223/live12 assets secret
scan PASS. TEST completion says test confirmation only; LIVE completion requires
PAID/POSTED. Failure retains manual retry/account link and never claims success.

**Finance JWT binding restored (Owner), runtime401 resolved.** Previous deployed
failure was CONFIRM_HTTP_401 [FINANCE_RPC:PGRST301]. After Owner re-registered the
existing PAYMENT_FINANCE_TOKEN, same-order confirm now returns409, not401. DB verifies
old order expired at2026-10-07 10:36:59UTC; remains TEST/ORDER_CREATED/NONE/grant NULL.
Latest successful Production deployment d1ee4a58 at main6584e25 includes e1adc86;
parallel Pricing changes preserved. No new token/signing/schema/code change here.

**TOSS CONFIRM CLOSEOUT 2: COMPLETE.** Owner fresh3-Credit TEST payment verified
2026-10-07 10:56:27UTC: PAID / TEST_RECORDED / grant_id NULL / CONFIRM SUCCEEDED
(exactly1 successful confirm). Reviewer payment-linked grants remain0: payment-
attributable spendable Credit delta0. Real charge:NO (TEST). Actual success page
shows “결제가 완료되었습니다.” and “3 Credits 상품의 테스트 결제가 정상적으로
확인되었습니다.” with /essay-lab/ and /account/ links. HTTP401 blocker resolved by
Owner restoration of existing finance Secret binding; no new JWT/provisioning,
schema, architecture or LIVE change. No further Owner payment retest needed for
this closeout. External card approval and email sending are separate; no email sent.

Owner-requested final DB recheck: same latest order and all success assertions PASS;
public runtime REVIEW/TEST confirms LIVE_PAYMENT_ENABLED:NO. CARD_REVIEW_READY:YES
(TEST technical evidence), TOSS_EMAIL_READY:YES (evidence ready, not sent).
Known-good payment runtime frozen: no further transactions/backend/env/key changes.
Success-page presentation polish main9827a9f uses existing brand tokens, confirmed
order quantity/price, responsive completion card and two CTAs; POSTED guard unchanged.
No balance fabricated; authoritative balance absent from current response.278tests,
lint/typecheck/boundary/Node22 build and static secret scan PASS.

## Launch target

**2026-10-10 — before the 연세대 논술.** This is a target, not a guaranteed release date. This supersedes any earlier "mid-October" style dates in historical docs.

## RELEASE CLOSEOUT — 2026-10-04 latest operational truth

> This block supersedes older domain bullets below where they conflict. Older cited evidence remains historical context.

| Area | Current state | What is actually left |
|---|---|---|
| Payment | **IMPLEMENTATION COMPLETE / TEST E2E COMPLETE / LIVE OFF.** LIVE/TEST server paths, canonical Credit Ledger, confirm/cancel/refund/reconciliation implemented. | Paid launch only: Production payment activation/config, Toss/card approval, small LIVE smoke. Free launch may keep LIVE payment off. |
| Pricing | **PRODUCTION_VERIFIED** — LAB main `3370dad`; approved 1/3/5/10 products/IA live; CTA disabled. | Connect/enable CTA only after payment activation. |
| APP Release | APP closeout `0570099`: **936 Flutter PASS**, analyze PASS; Android AAB + iOS unsigned release compile PASS; feature/data/reviewer packages prepared. Deletion-blocker code complete (`0b0b562`): Apple revoke + Email/Google/Apple/Kakao reauth + cancel-UI wiring; privacy wording reconciled (`legendstudy-lab 8c951cb`). Owner credential/flag/migration gated. | P0 code: deletion runtime activation, final integration. Owner: signed builds/build number/reviewer/device/Console. |
| Math | **2026-10-05 BLOCKED / MATH_RELEASE_CANDIDATE NO.** Existing extraction JWT re-registered with Owner approval; no issuance. Hosted upload/read/admission now PASS, two synthetic artifacts PRESENT. SQL evaluation remains OFF. LAB `e4d8ce9` deployed; focused tests/typecheck PASS. | Canonical Credit funding still blocked: current session lacks essay_finance, no existing Production finance credential located. OpenAI extraction reached provider but returned HTTP400; JSON input-message correction deployed, Hosted retest pending. Evaluations0; Credit -1/reevaluation0 and erasure unverified. No new infrastructure/accounts/JWTs or Payment changes. |
| Account deletion | **[2026-10-06] PRODUCTION-ACTIVE — worker ON, destructive E2E PASS, web LIVE (see activation note at right).** ADR SQL applied; app request/status/cancel/restriction/local purge implemented. **Deletion-blocker code complete** (`legendstudy-app claude/app-release-blocker-closeout-1 @ 0b0b562`, 53 deno tests PASS): Apple revoke chain + Email/Google/Apple/**Kakao** reauth + cancel-UI provider wiring (reauth chosen from verified `app_metadata` provider). Additive worker-only migration `20261005000100` **APPLIED + VERIFIED in Production (2026-10-05, ledger-tracked)** — `account_private.provider_revocation_material` (RLS on, worker-only) + `account_store_apple_revocation`/`account_provider_material` (SECURITY DEFINER, empty search_path, EXECUTE only to `account_lifecycle_worker`); ADR-2 lifecycle `20261001000300` confirmed already applied (schema/`fenced`/role enrolled). **Privacy correction LIVE in Production (2026-10-05):** cherry-picked `8c951cb` into LAB `main @ ed8a1ca` + deployed; lab.legendstudy.com/privacy/ no longer claims answers/scores/school/grade aren't server-stored (corrected to shared-backend storage + de-identified improvement use). **Deletion Edge functions DEPLOYED (fail-closed/disabled):** `delete-account` (401 without auth) and `account-deletion-worker` (503 until secrets) are live in Production and will auto-activate when secrets are set. | **ACTIVATION COMPLETE + destructive E2E PASS (2026-10-06).** Worker secrets all set (`ACCOUNT_LIFECYCLE_ENABLED`/`ACCOUNT_FINANCE_REVIEWED`/`ACCOUNT_EMAIL_REAUTH_ENABLED`=true; `ACCOUNT_RESTORE_CHECKPOINT_URL`/`ACCOUNT_NOTIFICATION_URL`→`account-ops-sink`; `ACCOUNT_OPERATIONS_TOKEN`; dispatch secret synced Edge+Vault `account_dispatch_secret`). Dispatch pg_cron runs every minute; `dispatch_health.enabled=true` (dispatch itself runs `account_deletion_maintenance`, so no separate watchdog cron). **Three fixes (app `d95b983` + migration `20261006000100`):** (1) worker RPC/GoTrue auth switched to the existing `SUPABASE_SERVICE_ROLE_KEY` (EXECUTE granted to only the 22 `account_*` RPCs the worker calls) — the project migrated to ES256 asymmetric JWT signing and rejected the custom `account_lifecycle_worker` HS256 token; (2) `account-ops-sink` `const URL`→`SB_URL` (it shadowed the global `URL` constructor, so `/checkpoint` threw 500 and blocked every dispatch before `claim`); (3) `math_attempts.student_id` FK RESTRICT→CASCADE (ADR-2 predates Math; RESTRICT blocked the `auth.users`→`profiles` cascade, so the GoTrue admin user-delete returned 500 / `AUTH_UNAVAILABLE`). **Synthetic test1@ E2E:** REQUEST→CANCEL+email reauth→RE-REQUEST→deadline-accel (test1 row only; 336h constant + policy untouched — shifted `requested_at` & `scheduled_deletion_at` together to keep the `=requested_at+336h` CHECK)→destructive worker→`ERASED`/`DONE`. **Verified:** auth user + profile + 7 `math_attempts`/7 `math_evaluations` (and all CASCADE children) erased; other users' Math untouched; credit account de-identified (`user_id`→NULL, grants/txns retained = intended financial retention via the FINANCE phase); request `subject_id`→NULL; 30-day (720h) ERASED receipt. **Web deletion LIVE:** LAB `main @ b0bde4e` + Cloudflare `NEXT_PUBLIC_ACCOUNT_DELETION_ENABLED=true`; https://lab.legendstudy.com/account-deletion/ shows the login-gated request/status flow via the `delete-account` Edge function. **Storage byte-erasure:** mechanism applied, but test1 used typed Math input → Storage objects were **0 before and 0 orphans after**; **no existing-byte 1→0 destructive evidence in this synthetic case**. Minor copy follow-up (non-blocking): the /account-deletion "삭제와 보존 범위" paragraph still says the request feature is not enabled (now stale). Non-blocking perf: the worker writes a checkpoint receipt every dispatch even with an empty manifest → `account_private.ops_log` grows ~1,440 rows/day; add a TTL/conditional checkpoint later. |
| Privacy/data | Owner authority: APP and LAB are connected surfaces sharing backend/data; integrated privacy framework is target. | Replace contradictory no-server-storage public wording with implementation-aligned integrated policy before Store submission. |
| Release target | **Final RC / Store standby** | Finish only P0 above; Community/admissions/subscription/goods are out of scope. |
| Admin console | **DESIGNED / PLANNED — read+audit+plan only, no implementation.** Owner set the release-operations P0 IA (Dashboard · Members · Credit · Payment · Essay/Math Ops · AI Quality) and confirmed the existing `/ql` Quality Console is **reused as the AI Quality module**. The backend foundation already exists (191 RPCs, two operator allowlists `quality_operators`/`admin_users`, full credit/payment/essay/math/quality schema) but there is **no operator-scoped read RPC** and **no console UI**. Plan: 3 phases — A shell+gate+dashboard+member lookup incl. credit read (no Owner dependency); B credit grant + payment ops (Owner-blocked on a Production `essay_finance` credential); C essay/math ops + `/ql` merge. Canonical ledger is `legendstudy-app claude/app-release-blocker-closeout-1 @ 0b0b562` (32 migrations); **APP `origin/main` holds only 1 migration and is not backend truth.** |
| Web / Store QA (2026-10-05) | **Production routes PASS; Store inputs still blocked.** All 8 required public routes HTTP200 with zero horizontal overflow at desktop and 390px, no broken internal links, correct sitemap/robots. **W-1 (RESOLVED 2026-10-05):** `/privacy/` reconciliation merged + deployed (`8c951cb`→LAB `ed8a1ca`); live copy no longer denies server storage. **W-2 (RESOLVED 2026-10-06):** `/account-deletion/` now serves a functional login-gated request/status flow (LAB `b0bde4e` + Cloudflare `NEXT_PUBLIC_ACCOUNT_DELETION_ENABLED=true`), a usable Google deletion URL; backend destructive E2E PASS. **W-3 (MEDIUM):** the 404 page publishes internal dev vocabulary. **W-4 (LOW-MEDIUM):** `/essay-lab/*` foundation pages carry internal vocabulary but are `noindex`, robots-disallowed, unlinked and absent from the sitemap. Apple/Google answer drafts READY; privacy URL, deletion URL, reviewer account, signing/build number and screenshots remain blocked. |

### Canonical handoff refs

- APP latest Math/Production activation evidence: `35d237607f2ccbb70a15f09a420035a65636f9fa`.
- APP release closeout evidence: `0570099c98929b27f8e484210efc14fe061e8476`.
- LAB account-deletion implementation: `e512974`.
- LAB Production pricing/main: `3370dad08ad4042046d158f56fd1d38f778c9e26`.
- Math LAB consumer closeout: `6dec4f98887cee2e7c661996e083289b853054b3`; verify the later Codex Math activation branch HEAD before editing.
- Unified Wiki authority: `main`; verify HEAD before work.

### Handoff completion rule

Every task ends with: code/runtime result → Daily append → CURRENT_STATUS update if facts changed → AI_CONTEXT routing update if next gate changed → commit/push. **Daily-only logging is not a complete handoff.** Another AI must be able to resume without reconstructing chat history.

---
## Critical path (fact vs plan)

| Step | State |
|---|---|
| Unified Wiki P0 (this repo) | Bootstrap complete; **UWA-2D FREEZE CANDIDATE — UWA-2E pending** |
| LAB Essay canonical contract mapping | **IMPLEMENTED / LOCAL_VERIFIED** (LEC-1) — LAB consumes deployed `ql-read-v1` as a pure consumer |
| Quality Console v0 | **IMPLEMENTED / LOCAL_VERIFIED** (LEC-2/3) — operator-only `/ql`; Production detail runtime `NOT_ASSESSABLE` (no legitimate case) |
| Human Quality persistence design | **DESIGNED / CANONICAL_DB_REVIEW: PASS** — final E1/E2 implemented; Owner SQL/tracking applied |
| Human Quality persistence implementation | **IMPLEMENTED / ISOLATED_VERIFIED**; Owner SQL/tracking APPLIED; actual gateway authorization PASS; normal INSERT NOT_ASSESSABLE |
| Human Review write UI (HQR-1) | **IMPLEMENTED / LOCAL_VERIFIED** — operator `/ql` consumes HQP RPCs; Production operator write `NOT_ASSESSABLE` (no legitimate case) |
| Math Essay LAB consumer (MATH-3B…7B + RELEASE-CLOSEOUT-1) | **IMPLEMENTED / LOCAL_VERIFIED** — LAB consumes deployed MATH-2C/2D/2E RPC surface; `claude/math-vision-input-3b @ 6dec4f9`; `PRODUCTION_NOT_APPLIED`; no live provider; R21 Storage / ADR-2 erasure / worker-gateway / provider path remain **EXTERNAL_GATES** |
| Payment / commercial launch work | **TEST implementation + E2E preparation verified locally; Hosted setup and merchant E2E pending** |
| LAB public pricing page (PRICING-UX-CLEANUP-1D) | **PRODUCTION_VERIFIED** — main `3370dad`; released and verified live at `lab.legendstudy.com/pricing/` |
| Release / store readiness | **planned** |

> The ordering above is the current working plan; it is not a new Owner-approved reprioritization.

## Domain status

Each domain: `STATUS` · `PRODUCTION_STATE` · `CANONICAL_SOURCE` · `NEXT_GATE` · `KNOWN_LIMITATION`.

### PROJECT
- **STATUS:** active, pre-launch · **PRODUCTION_STATE:** backend live; no real-student Essay traffic yet
- **CANONICAL_SOURCE:** this hub (`legendstudy-docs`) for project-level state
- **NEXT_GATE:** CODEX UWA-2E FINAL READ-ONLY FREEZE CHECK, then Owner acceptance; no product implementation authorized by this closeout.
- **KNOWN_LIMITATION:** two user surfaces (APP/LAB) + one shared backend must stay reconciled via Daily Closeout

### APP
- **MOBILE APP:** `PRIMARY_STATUS: IMPLEMENTED` · `PRE_RELEASE` (Flutter).
- **BACKEND USED BY APP:** Production components exist; this is not a mobile store release claim.
- **OWNER DEVICE ACCEPTANCE:** scope-specific acceptance exists; remaining checks are separate.
- **STORE RELEASE:** PENDING / NOT YET RELEASED; Store/release gates INCOMPLETE / REMAINING.
- **CANONICAL_SOURCE:** [APP current status](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/current-status.md); [Owner acceptance](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/auth-native-owner-acceptance.md).
- **NEXT_GATE:** remaining store/release readiness under Owner-approved scope.
- **KNOWN_LIMITATION:** local `main` is not necessarily the current task branch; verify the task ref.

### LAB
- **STATUS:** `PRODUCTION_APPLIED` for public landing/auth; Quality Console (read + Human Review write UI) `IMPLEMENTED / LOCAL_VERIFIED` (not yet Production-verified)
- **CANONICAL_SOURCE:** `legendstudy-lab` (`claude/quality-console-v0 @ ce9d04e`); mappings in `docs/architecture/LEC-1_CANONICAL_ESSAY_MAPPING.md` + `HQR-1_HUMAN_REVIEW_CONTRACT_MAPPING.md`
- **NEXT_GATE:** LAB deployment / operator availability → first legitimate evaluation → first Production Human Review write E2E (currently `NOT_ASSESSABLE`)
- **KNOWN_LIMITATION:** a single LAB branch does not represent all current truth — architecture docs and product branches can diverge; verify per task. The LAB `ql-read-v1` TypeScript types are a consumer representation, not DB authority.

### SHARED BACKEND
- **STATUS:** `PRODUCTION_APPLIED` / partly `PRODUCTION_VERIFIED` · **PRODUCTION_STATE:** Supabase live
- **CANONICAL_SOURCE:** migration ledger + live DB, physically in `legendstudy-app/supabase/migrations`
- **NEXT_GATE:** HQP applied/tracked by Owner; actual gateway authorization PASS. Next is separately authorized Human Review write UI. Existing LAB mapping is delivered. Separate-tracking debt remains recorded; it is not authorization to repair the ledger or run a broad db push.
- **KNOWN_LIMITATION:** physically hosted in APP repo but **jointly owned** — not "APP-only"

### ESSAY
- **STATUS:** schema `PRODUCTION_APPLIED`; pre-launch (no real-student traffic)
- **CANONICAL_SOURCE:** `legendstudy-app` (essay schema/RPC/engine)
- **NEXT_GATE:** none blocking from LAB — contract mapping delivered (LEC-1); LAB consumes the deployed `ql-read-v1` RPC surface only
- **KNOWN_LIMITATION:** LAB mock is **not** the canonical Production Essay consumer; LAB reads no Essay tables directly

### MATHEMATICAL ESSAY
- **LEARNING RUNTIME:** MATH-2E `IMPLEMENTED / LOCAL_VERIFIED`; server hint/solution reveal, immutable resolve, included reevaluation and bounded history. [Exact MATH-5B/6B consumer contract](https://github.com/LC3808/legendstudy-app/blob/cd215a6d88c0f72e59d06478bf4727ed676ca5f9/supabase/verification/math_essay/learning/contract.md), [Owner package](https://github.com/LC3808/legendstudy-app/blob/cd215a6d88c0f72e59d06478bf4727ed676ca5f9/supabase/verification/math_essay/learning/README.md). L01–L40 plus concurrency/failure/security/rollback PASS; no hidden hint preload, separate reveal charge or automatic paid fallback. Claude concurrent MATH-5B work is not certified here.
- **RUNTIME CONSUMER:** MATH-2D `IMPLEMENTED / LOCAL_VERIFIED`; named, versioned student/extraction/evaluation/QLM RPCs, deterministic confirmation/readiness, owner history. [Physical binding contract](https://github.com/LC3808/legendstudy-app/blob/17e528b6b58b4c910c3f16f73be5fb1638a8bbdc/supabase/verification/math_essay/runtime/README.md). Ready for Claude MATH-3B binding; LAB work is separate and not certified by this closeout.
- **IMPLEMENTATION:** `IMPLEMENTED / LOCAL_VERIFIED` (isolated PG17); MATH-2C canonical persistence, shared HQ-A and existing-ledger Math billing binding complete. [Canonical implementation](https://github.com/LC3808/legendstudy-app/blob/015b800aa501c93b54fcce65ebd3ef3dabdb56de/wiki/math-essay-persistence-implementation.md). [Owner package](https://github.com/LC3808/legendstudy-app/blob/015b800aa501c93b54fcce65ebd3ef3dabdb56de/supabase/verification/math_essay/README.md).
- **MIGRATION:** `20261002000100` + runtime `20261002000200` + learning `20261002000300` · `READY_NOT_APPLIED`. **PRODUCTION:** `OFF / NOT_APPLIED`. No worker/Storage deployment, provider/Vision call or Math activation. Legacy Humanities/ql-read-v1/hq-read-v1 preserved in isolated regression.
- **RUNTIME VALIDATION:** C01–C30 PASS;131 Math +102 Humanities/HQP regression PASS;8 runtime ownership/failure/rollback checks PASS. Base MATH-2C hash unchanged. No Production gateway/Storage proof.
- **VALIDATION:** non-superuser ownership topology, 131 Math checks, 102 legacy assertions and14 installation/failure/rollback checks PASS. R01–R20/R22–R24 PASS; R21 actual Storage cleanup runtime `NOT_ASSESSABLE`, metadata safeguards PASS. No Production gateway proof claimed.
- **POLICY:** four leaf response formats; immutable re-solve lineage; STEP_RETRY downstream NOT_REASSESSED; one initial +one eligible same-lineage reevaluation within initial completion+336h. Official reference+hash; raw evidence finite+erasable with duration deferred. E1 evaluation CASCADE and E2 reviewer SET NULL remain distinct. No Commerce pricing policy embedded.
- **LAB CONSUMER (Claude):** `IMPLEMENTED / LOCAL_VERIFIED` on `legendstudy-lab` `claude/math-vision-input-3b @ f1d489423fa1c8688389fa8eae1743b6357e0b1e` (COMMITTED + PUSHED; `PRODUCTION_NOT_APPLIED`). LAB is a pure consumer of the deployed MATH-2C/2D/2E RPC surface (`math_input`/`math_extraction`/`math_evaluation`/`math_learning`/`qlm_quality`); it adds no schema, no migration, no privileged key, no live/paid provider call. Scope implemented: MATH-3B Vision/input pipeline + MATH-3B-R runtime binding (APP `17e528b`, migration `20261002000200`) + MATH-3C-1 bake-off harness prep (no winner); MATH-4B evaluation engine consumer (worker-only surface, `LIVE_PROVIDER_CALLS=0`); MATH-5B CORE/hint/solution-reveal + MATH-5B-R learning runtime binding (APP `cd215a6`, migration `20261002000300`, `math-learning-v1`); MATH-6B re-solve/included-reevaluation/learning-history (included reeval = 1 within 336h, server authority); MATH-7B Math Quality Console (`hq-math-rubric-v1`; HQ reviews AI quality, not the student). Local gate PASS: 400 tests / 39 files + typecheck + lint + boundary audit + static-export build. Humanities `ql-read-v1`/`hq-read-v1` and `src/lib/quality/*` untouched. Canonical LAB docs under `legendstudy-lab/docs/architecture/`: `MATH-3B_VISION_INPUT_IMPLEMENTATION.md`, `MATH-4B_EVALUATION_ENGINE_IMPLEMENTATION.md`, `MATH-5B_CORE_HINT_IMPLEMENTATION.md`, `MATH-6B_RESOLVE_REEVALUATION_IMPLEMENTATION.md`, `MATH-7B_QUALITY_CONSOLE_IMPLEMENTATION.md`, `MATH-2C_PHYSICAL_RECONCILIATION.md`. **This LAB closeout does not certify APP MATH-2x (Codex authority above) and applies nothing to Production.**
- **LAB RELEASE CLOSEOUT (Claude):** MATH-RELEASE-CLOSEOUT-1 on `claude/math-vision-input-3b @ 6dec4f98887cee2e7c661996e083289b853054b3` (COMMITTED + PUSHED). Added a cross-module consumer end-user journey test (`src/lib/math-release/journey.test.ts`): input → extraction → confirmation → **provider evaluation path** (adapter → `validateMathEval` fail-closed → finalize) → learning (hint/solution/re-solve/included reevaluation) → history, asserting R21 upload-unavailable (no fake URL), malformed-output FAILED (no partial publish), included reevaluation `additional_credit=0`, oldest-first history, and ADR-2 erasure consumer denial on every surface. Release-copy audit PASS (no internal term in student-visible text); Quality Console stays operator-only; browser carries no privileged key. Gate: **405 tests / 40 files** + typecheck + lint + boundary audit + static-export build PASS. **Honest gate classification** (see `legendstudy-lab/docs/architecture/MATH-RELEASE-CLOSEOUT-1.md`): consumer contracts for R21 Storage / ADR-2 erasure / worker-gateway / provider path are verified in isolation, but their Production runtime is **EXTERNAL_GATE** (backend+Owner); controlled real-model bake-off `NOT_RUN` (needs approved provider env/secret); no student-facing `/math` route wired yet. `MATH_RELEASE_CANDIDATE` from LAB = consumer-ready, pending external activation.
- **HOSTED REAL-MODEL SMOKE (Claude, 2026-10-05) — `MATH_RELEASE_CANDIDATE: YES`:** End-to-end Production hosted smoke on `legendstudy-lab-math-test.pages.dev` (Production project `stlhijzpjfgwwdgunlsd`) with the real provider **OpenAI `gpt-5.6-sol`**. Fixes deployed on `codex/math-production-activation-1` (`8b64485` step status/kind enums; `5594df8` sanitized diagnostics; `34bfab5` error-category + ROOT-materiality) — root cause: the provider instructions omitted step `status`/`kind` and error `category` enums and `physicalFinalize` passes steps through raw, so the model's out-of-enum values hit the DB `math_solution_steps_status_check` / validator `UNKNOWN_ERROR_CATEGORY` (materiality was already mapped). Synthetic account `test1@legendstudy.com`: profile via normal authenticated RLS path, canonical **+3 signup_bonus** (no admin grant / no direct ledger write). Verified live: initial eval `5518c8ce` COMPLETED (CORE 1 / hints 3 / errors 2), **Credit −1** (3→2); L1 hint + verified reference solution revealed; re-solve → **included reevaluation** `d98a231c` COMPLETED, **additional Credit 0** (balance 2), delta = root error resolved; ordered 2-attempt history with exposed-hint/solution context; coherent output (correct sign-error diagnosis), no malformed DTO. **Kill switch:** OFF→evaluation-denied verified, then **restored `evaluations_enabled=false` (read-back) → Production Math runtime OFF.** **Storage:** `math-private` private bucket + owner-scoped RLS (owner read/insert, worker read, anon + restrictive deny) + erasure fns (`math_account_erasure`, byte-absence gate) applied; owner upload/read hosted-verified; FOREIGN_OWNER denied by construction. **Byte-erasure / Math-erasure runtime is the immediately-following Account Deletion Production E2E** (reuses `test1@` + its Math data), per "no account-deletion activation in this task". No new infra/account/JWT/provider key; Payment/Pricing untouched; `test1@` preserved. Minor: two early status-crash evals remain PROCESSING holding 2 Credit reservations (balance 2) — cleared by the deletion E2E or worker recovery.
- **NEXT_GATE:** Owner/ChatGPT review → **Account Deletion Production E2E** (same `test1@`; executes Math Storage byte-erasure + ADR-2 Math erasure runtime) → optional wider controlled bake-off → separately authorized real-student pilot. Math migrations `20261002000100/200/300` + Storage/erasure are **applied** in Production and the real-model path is live-verified, but **evaluations stay gated OFF** (kill switch) until a separate activation decision.
- **REMOTE SNAPSHOT:** MATH-2E read-only 2026-10-02 ledger/function catalog: ledger23, no E function collisions, ADR-2/C/D/E absent; provider005/day_targets tracking separate. No Production writes. MATH-2B/2R design history and ADR-2D/HQR-1 closeouts remain preserved.

### QUALITY
- **STATUS:** **Quality Authorization = `PRODUCTION_VERIFIED`** (unchanged); Quality Console = `IMPLEMENTED / LOCAL_VERIFIED` (web consumer)
- **PRODUCTION_STATE:** authorization enforced in Production (see Quality Authorization block); console reads via browser session → `ql_*` RPCs; no privileged service key, no new server runtime
- **CANONICAL_SOURCE:** `legendstudy-app` (`quality_operators` + `ql_*` RPCs, migration `20261001000100`) for the contract; `legendstudy-lab` for the web consumer
- **NEXT_GATE:** LAB deployment + first legitimate evaluation → first Production Human Review write E2E; HQP gateway boundary PASS, normal operator write NOT_ASSESSABLE
- **KNOWN_LIMITATION:** full-answer operator live retrieval = `NOT_ASSESSABLE` (no legitimate evaluation case exists yet); console + Human Review write UI implemented/local-verified ≠ Production-verified with a real case (operator write `NOT_ASSESSABLE`)

### AUTH
- **AUTH FOUNDATION:** Supabase Auth is in Production use.
- **APP PROVIDER AUTH / LAB BROWSER AUTH / SHARED IDENTITY:** Owner acceptance exists. Kakao shared identity Owner PASS and historical Apple/Google acceptance are recorded; these are Owner-reported evidence, not a new independent provider re-test.
- **QUALITY AUTHORIZATION:** independently Production verified through actual JWT/PostgREST gateway checks; this closes only the narrow Quality authorization scope.
- **AUTH LIFECYCLE / OPERATIONS:** The deletion-blocker code is **complete** (`legendstudy-app claude/app-release-blocker-closeout-1 @ 0b0b562`, 53 deno tests PASS): Apple revoke chain (client authorizationCode → server exchange → worker revoke adapter), Email/Google/Apple/**Kakao** reauthentication (Kakao via existing OAuth + recent same-owner session attestation, amr/auth_time not iat), and cancel-UI provider wiring (reauth chosen from verified `app_metadata`). Gated behind the Owner Apple `.p8`/Key ID/Team ID/Services ID, `ACCOUNT_SOCIAL_REAUTH_ENABLED`, and apply of additive worker-only migration `20261005000100` (READY, NOT applied). Remaining gates: ADR-2 activation/deployment + full restricted UX, worker activation + synthetic deletion E2E, credential renewal/rotation, Flutter test under the project SDK (CI), and remaining Store/release operational gates. Login acceptance does not close them.
- **CANONICAL_SOURCE:** [Auth acceptance](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/auth-native-owner-acceptance.md) · [Deletion/privacy gates](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/account-deletion-privacy.md) · [Quality verification](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-worker-provider-l2.md).
- **NEXT_GATE:** separately authorized completion/verification of those remaining gates.
- **KNOWN_LIMITATION:** Owner acceptance ≠ independent gateway verification; authenticated EXECUTE ≠ authorized data access.

### CREDIT / BILLING
- **STATUS:** schema `PRODUCTION_APPLIED` · **PRODUCTION_STATE:** live schema; commercial flow pre-launch
- **CANONICAL_SOURCE:** `legendstudy-app` (`credit_*`, `essay_billing_decisions`)
- **NEXT_GATE:** payment / commercial launch work
- **KNOWN_LIMITATION:** billing decision logic present; paid commercial launch not yet active

### ACADEMIC
- **STATUS:** `FUTURE` / source-gated · **PRODUCTION_STATE:** none
- **CANONICAL_SOURCE:** none yet (no canonical Academic Transcript foundation exists)
- **NEXT_GATE:** source definition before any build
- **KNOWN_LIMITATION:** must not be presented as existing

### ADMISSION
- **EXISTING FOUNDATION:** `universities` / `student_target_universities` support university identity and personal targets.
- **FUTURE CAPABILITY:** official admission facts, official conversion formula, LegendStudy analysis/prediction; PHASED + SOURCE_GATED, not implemented.
- **CANONICAL_SOURCE:** [Academic/Admission roadmap](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/roadmap-academic-analytics.md).
- **NEXT_GATE:** obtain sources and design under Owner-approved phasing; reuse existing university identity.
- **KNOWN_LIMITATION:** official formula ≠ LegendStudy analysis model.

### SCHOOL / B2B
- **EXISTING:** APP personal school preference / NEIS integration.
- **FUTURE:** verified Organization/School Membership and B2B authorization; `LIFECYCLE: NOT_STARTED`.
- **CANONICAL_SOURCE:** [School/NEIS](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/day-7-neis.md) · [Product boundaries](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/product-architecture.md).
- **NEXT_GATE:** separately approved future B2B design.
- **KNOWN_LIMITATION:** school preference ≠ organization membership; profile school never grants B2B authorization.

### ANALYTICS
- **CURRENT:** design/data-readiness work; `PRIMARY_STATUS: DESIGNED`. Canonical domain facts already exist.
- **FUTURE:** product analytics pipeline/consumers; no full APP/LAB analytics pipeline is claimed live.
- **CANONICAL_SOURCE:** [Analytics P0](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/analytics-p0-launch-contract.md).
- **NEXT_GATE:** scoped implementation only after authorization.
- **KNOWN_LIMITATION:** analytics consumes canonical facts; it does not become their authority.

### COMMERCIAL
- **STATUS:** PAYMENT-E2E-CLOUDFLARE-ISOLATION-1 COMPLETE on dedicated TEST Pages; Hosted bootstrap and Finance Gateway COMPLETE. **Production payment OFF; Production migration NOT_APPLIED.**
- **CANONICAL PAYMENT CANDIDATE:** APP `3b3b869297a0884bfb908c87977fa14519f72d91`; `20261003000100_payment_foundation.sql`; SHA-256 `77b460bf2bf437a8d6dd03d78454ece17c6c4143fe50d7f28b6ea30a51509c75`. Old e4836eda/be808d96… SUPERSEDED_PRE_APPLY; one candidate only.
- **APP EVIDENCE:** `codex/essay-scaffolding-vnext @ c5573dfc2d980b3bf1dc93d281c04b55beee20ee` — [actual Hosted TEST evidence](https://github.com/LC3808/legendstudy-app/blob/c5573dfc2d980b3bf1dc93d281c04b55beee20ee/supabase/verification/payments/hosted-test/hosted-validation.json). Canonical24-file hashes unchanged; local regressions preserved.
- **LAB:** `codex/payment-2-toss-test @ ac2913288ec84a95cd9ac3fe5677343223732eb5` — [consumer/config authority](https://github.com/LC3808/legendstudy-lab/blob/ac2913288ec84a95cd9ac3fe5677343223732eb5/docs/PAYMENT_2_TOSS_INTEGRATION_HANDOFF.md); exact approved Preview Auth pair + manual redirect rejection;186 tests,8 real-workerd scenarios, typecheck/lint/boundary/static build PASS. Feature branch only; main not merged.
- **PROVIDER PROOF:** official documentation/Sandbox TEST proof PASS in prior LAB evidence; `leglabn24k` merchant E2E NOT_RUN. TEST records never grant spendable Credits; LIVE NOT_AUTHORIZED.
- **HOSTED-1 DB:** COMPLETE. Fresh identity/empty-state/platform preflight PASS; exact24 files installed sequentially as postgres. Canonical postflight and114 function owner/security/search_path/ACL inventory PASS; schema ACL, RLS, roles/memberships PASS; unexpected grants NONE. Public owner/grantor remains pg_database_owner. Payment orders/operations/events, Credit accounts/grants/transactions and Auth users all0; spendable delta0; TEST mode.
- **COMPATIBILITY:** PASS. Removed PREP-1 local public-owner normalization; reproduced observed pg_database_owner owner/ACL grantor, managed roles/memberships and schema/default ACL. Same24 hashes and per-file function owner/security/config/ACL inventory preserved. Canonical migration change required: NO. Six failure injections and exact empty rollback PASS; Credit static7 also PASS.
- **CLOUDFLARE RUNTIME:** dedicated `legendstudy-lab-payment-test.pages.dev`; trusted branch `codex/payment-2-toss-test`, automatic Preview branches disabled. Owner configured this isolated project's Production scope only; original LAB Production/Math Preview unchanged. Latest deployment `7555fda8-8ff5-449e-b75f-850c99db451c`, successful 2026-10-04 12:43 KST, commit `ac2913288ec84a95cd9ac3fe5677343223732eb5` independently verified. Server/browser Auth targets the independent TEST Supabase project.
- **RUNTIME EVIDENCE:** existing synthetic buyer login/session restore/logout PASS; real buyer JWT identity, own profile and foreign-profile RLS PASS. Four canonical SKU orders (1/3/5/10 Credits, 4,900/11,900/17,900/29,900 KRW), server UUID/order identity, canonical checkout values, duplicate create/same identity, changed duplicate409, status and no-operation finance reconciliation PASS. Unauthenticated401, foreign-origin403, unsupported SKU/client amount/forged owner422. No confirm/cancel/provider request executed.
- **SECRET/LINEAGE:** 7 HTML + 12 referenced JS assets scanned, finance JWT/Toss secret absent. Production project literal occurs only in canonical Auth denial/comparison guard, not runtime configuration. Post-check purchase grants/payment operations/provider links/payment-linked postings/LIVE orders/unexplained postings all0; payment-attributable spendable delta0. Existing signup+6 remains canonical and unchanged. Owner-approved optional24h TEST finance token expires 2026-10-05 11:53:56 KST; default1h remains. [Offline signer change](https://github.com/LC3808/legendstudy-app/commit/a5afe71). Secret values and synthetic identities omitted.
- **MERCHANT CONFIGURATION:** PAYMENT-E2E-TOSS-MERCHANT-1 COMPLETE, Owner-assisted dashboard verification. Owner selected company merchant MID `leglabn24k`, registered its TEST API individual integration key pair, corrected client binding and redeployed. Independent Cloudflare check now confirms `test_ck_` client format, encrypted secret binding, expected MID, TEST mode/origin/DB and successful feature-branch deployment. Pair provenance rests on Owner confirmation; no provider authentication or payment was attempted. Prefix alone is not merchant identity evidence. Repeated 7 HTML/12 JS scan PASS, browser Toss secret/finance JWT ABSENT in scanned assets.
- **NEXT_GATE:** PAYMENT-E2E-TOSS-1R-FAST COMPLETE; full requested merchant TEST matrix PASS. Root cause was exact TEST identity mismatch: Toss authenticated Payment response `tleglabn24k` versus configured `leglabn24k`; same order independently found in official selected leglabn24k TEST dashboard. LAB fix5b132b2 uses only that verified exact TEST mapping, preserving all other merchant/amount/owner/mode checks. Dedicated deploy bd062d3b-9d2d-4a91-b875-28971c0609cb succeeded. Original transaction retained as provider-expired/local pending UNKNOWN. Exactly one authorized replacement1c4900 transaction completed: server PAID/TEST_RECORDED; duplicate confirm200, conflicting identity409, amount mismatch422; full and duplicate cancel200; final reconciliation CANCELLED/REVOKED. Toss dashboard independently confirms cancellation; provider balance0 is checked before local cancel_finish. Exactly one successful CONFIRM and CANCEL operation for replacement. Payment spendable delta/purchase grants/LIVE/unexplained delta all0; signup6 unchanged.191 tests/typecheck/lint/boundary PASS, Cloudflare build PASS,7HTML/12JS secret scan PASS. No Production access/write, no LIVE, no main merge. Existing synthetic gateway normal Auth login completed; foreign-owner status/confirm/cancel each returned404 without order disclosure. Final lineage unchanged. `READY_FOR_PAYMENT_NEXT_GATE:YES` for Owner review; LIVE/Production exposure remains unapproved. [Runtime handoff](https://github.com/LC3808/legendstudy-lab/blob/codex/payment-2-toss-test/docs/PAYMENT_2_TOSS_INTEGRATION_HANDOFF.md).
- **LIMITATIONS:** Initial zero-total-delta BLOCKED history preserved; signup policy/ledger unchanged, no cleanup. Existing gateway profile/bonus retained; future gateway needs Auth identity only. Historical [Finance lineage evidence](https://github.com/LC3808/legendstudy-app/blob/4dae27563b9f86cda2faa6d88ed057ab826320e5/supabase/verification/payments/hosted-test/finance-lineage-validation.json); current runtime evidence in [Daily Handoff](../90_HISTORY/DAILY/2026-10-04.md#payment-e2e-cloudflare-isolation-1--runtime-complete). Provider checkout/confirmation/cancellation are outside this closeout.

### PRICING (LAB public /pricing/)

- **STATUS:** Owner `FINAL_APPROVED` (2026-10-04) and **released**; `PRIMARY_STATUS: PRODUCTION_VERIFIED` (live-site verification)
- **PRODUCTION_STATE:** `PRODUCTION_APPLIED` — `lab.legendstudy.com/pricing/` serves the approved page from main `3370dad08ad4042046d158f56fd1d38f778c9e26` (HTTP200, verified live 2026-10-04)
- **CANONICAL_SOURCE:** `legendstudy-lab` `feat/pricing-ux-cleanup @ f84b81ec19009e77b63a6fe22811ecf820eaf7bb` (COMMITTED + PUSHED, remote-synced 0/0); working copy `src/lib/pricing.ts` (prices, policy, `purchaseCta`) and `src/app/pricing/page.tsx`; released to Production via the `main` merge `3370dad` (merge of `f84b81e`, 5 files, no Payment file)
- **FINAL IA:** Hero → 신규 가입 3 Credits 무료 → Credit 판매 상품 → 학교 단체 이용 / 이벤트 프로모션 → 1 Credit 이용 범위 → 이용 방법 → Credit 이용 조건 → 자주 묻는 질문 → 결제 및 환불 안내 → 레전드스터디 랩 고객센터 → 정책 링크 → 사업자정보. The `Credit 상세 비교` table is `REMOVED` (every pack gives the same service scope, so it repeated the cards row for row)
- **PRODUCT / PRICE:** 1/3/5/10 Credits at 4,900 / 11,900 / 17,900 / 29,900 KRW, each card labelled `첨삭권 1/3/5/10개`; no 20-Credit pack; `답안 N개` and `팩` wording removed
- **REEVALUATION:** `최초 첨삭 결과 제공일로부터 14일` / 1 included reevaluation / additional Credit not deducted — canonical `pricingPolicy` authority unchanged; "첨삭권 사용 후 14일" is NOT the basis
- **CREDIT VALIDITY:** paid Credit 3 months from payment date; free signup Credit has no expiry and is not cash-refundable — unchanged
- **PURCHASE_CTA:** `PRESENT_DISABLED` on all four cards as deployed (`<button type="button" disabled>`, no href, no build/release-state label). Enabling it is **not** authorized by the pricing release; the same CTA is wired to the real checkout after payment activation
- **FOOTER:** the shared footer stays omitted on `/pricing/` only; the page body publishes 고객센터, the four policy links and 사업자정보 itself. `/account-deletion/` is not added to the pricing policy strip
- **NEXT_GATE:** pricing UI release is complete; the only remaining pricing gate is `PURCHASE_CTA` activation, owned by Codex `PAYMENT-PRODUCTION-READINESS-1` / Production activation
- **KNOWN_LIMITATION:** the released page is a LAB commercial-information surface only — it is not a payment runtime, not a Credit grant authority and not a payment activation claim. 구매하기 stays disabled, no Payment/Toss/Supabase/Credit/billing file, migration or environment was changed by this work, and no Production financial write occurred

### RELEASE
- **STATUS:** pre-launch · **PRODUCTION_STATE:** backend live; store release pending. Owner-reported RELEASE-1 public LAB `https://lab.legendstudy.com` at main `16e155b71817ebe371196150a4c21e45510160f2`; main ref confirmed in PREP-1, public deployment not re-certified here. Payment feature remains unmerged.
- **STORE_LAUNCH_PACKAGE:** COMPLETE. **APPLE_PREP / GOOGLE_PREP:** READY — APP-RELEASE-1 및 일부 Owner 입력 대기. **STORE_SUBMISSION:** BLOCKED. **APP_RELEASE_1_DEPENDENCY:** WAITING.
- **OWNER BRAND / ENTITY:** APP_NAME `레전드스터디+`; 발음 `레전드스터디 플러스`; 공식 영문 브랜드 **LegendStudy Plus**; PRIMARY_CATEGORY `Education`; COPYRIGHT `2026 주식회사 코파카바나`; DEVELOPER_ENTITY `주식회사 코파카바나`; DEVELOPER_ACCOUNT_TYPE `ORGANIZATION`. 새 문서의 공식 영문 브랜드는 LegendStudy Plus로 표기한다.
- **ACCOUNT READINESS:** DUNS `VERIFIED / COMPLETE`; NEW_DEVELOPER_ACCOUNT_REQUIRED `NO`; NEW_DUNS_REQUIRED `NO`; GOOGLE_PERSONAL_ACCOUNT_12_TESTERS_14_DAYS `NOT_APPLICABLE`. 신규 D-U-N-S, 신규 Organization 계정, 개인계정12명×14일 Closed Testing은 critical path에서 제외.
- **CRITICAL BLOCKERS:** (1) APP-RELEASE-1 account deletion lifecycle, (2) Google Data deletion web request path, (3) APP SDK/data inventory, (4) Apple App Privacy, (5) Google Data Safety, (6) reviewer account, (7) release signing/build verification.
- **LAUNCH:** FREE_LAUNCH `CONDITIONAL`; PAID_LAUNCH `WAITING_FOR_STORE_PAYMENT`; MARKETING_LANDING `NOT_STARTED`; `home.legendstudy.com` `NOT_CREATED`.
- **CANONICAL_SOURCE:** Manus **STORE-LAUNCH-PACKAGE-1 최종 정정 보고 / CROSS_AGENT_HANDOFF**, Owner-confirmed ingest. [Owner 정정 수신 기록](../90_HISTORY/DAILY/2026-10-03.md#store-launch-package-1--owner-final-correction-ingest). Manus READ-ONLY 조사 결과로 repository 문서 URL/경로 없음 (`FILES_CHANGED: 0`, `UNIFIED_WIKI_CHANGED: NO`는 Manus 작업 기준). 이번 Owner-confirmed 정정 및 CROSS_AGENT_HANDOFF 요약만 상태 근거로 기록하며, 별도 Store 문서를 생성하거나 상세 내용을 복제하지 않는다.
- **NEXT_GATE:** 위7개 blocker 해소와 남은 Owner 입력. 패키지 COMPLETE는 Store 제출/출시 완료를 의미하지 않는다.

### NOTIFICATION CENTER

LegendStudy 앱과 LAB이 **같은 알림 행과 같은 읽음 상태**를 공유한다. 어느
클라이언트에서 확인했는지는 사용자에게 중요하지 않다.

- 모델: `public.user_notifications` (RLS on, 클라이언트 롤 테이블 권한 없음),
  단일 생산자 `notification_private.emit` (클라이언트 실행 권한 없음)
- 소비자 RPC: `user_notifications_list` / `user_notifications_unread_count` /
  `user_notification_mark_read` / `user_notifications_mark_all_read`
- 생산자: 문의 답변 트리거, Credit 지급 트리거, 첨삭 완료 트리거,
  결제·수리논술 서버 진입점, 일일 스케줄러(만료 전용)
- **Credit 부족은 상태가 아니라 진입이다.** 3 이하로 내려오는 순간 1회
  (`low_credit_notification`). 매일 반복 잔액 알림은 폐기.
  5→4 없음 · 4→3 1회 · 3→2→1→0 없음 · 회복 후 재진입은 새 cycle.
  예약/해제는 원장 잔액을 움직이지 않으므로 재시도가 알림을 되살리지 않음.
- LAB: `/notifications/` + 헤더 종 배지 (noindex, sitemap 제외)
- 앱: **연결 완료(코드, consumer-only)** — `legendstudy-app claude/app-release-blocker-closeout-1 @ 6736167` (`lib/features/notifications/*`). Home 종 배지(서버 unread 권위) + `/notifications` 받은함, notification-v1 RPC 4개, target allowlist(`inquiry→/my/feedback`, essay/math/credit/payment/essay_lab→`/lab`, unknown→무시), 로컬 unread/영구 local DB 금지. 포커스+UI 테스트 작성(`test/notification_center_test.dart`). **검증 갱신 2026-10-07:** APP73a2a35 Owner967~2 PASS; Flutter3.47.6 fresh analyze PASS. 계약: `legendstudy-app/docs/APP_NOTIFICATION_HANDOFF.md`

검증(격리 PostgreSQL, 표준 체인): CANONICAL_CHAIN=OK,
ADMIN_CONSOLE_CHECKS 158/158, ADMIN_P0B_CHECKS 351/351,
NOTIFICATION_CENTER_CHECKS 70/70. LAB: 208 tests, lint, typecheck,
boundary audit, static export, 320px·200% overflow 0.

커밋: LAB `ec79032` · APP `e2b9b61` (branch `manus/admin-console-p0-a`)
Production 반영: **없음** (main merge 없음)

---
## ADMIN CONSOLE
- **STATUS:** `DESIGNED` · `LIFECYCLE: PLANNED` — **READ + AUDIT + PLAN ONLY. No implementation, no Production mutation, no deploy, no migration apply.** Owner authority (2026-10-05): this is the integrated **release-operations** console, not a Quality Console replacement.
- **P0 IA:** 대시보드 · 회원 관리 · Credit 관리 · 결제 관리 · 논술 운영 · AI 품질. Target: ordinary post-launch operations without opening the SQL Editor. No ERP, no new wallet, no new analytics DB, no new Auth system, no new TEST DB/Supabase/Cloudflare project.
- **QUALITY CONSOLE REUSE:** `/ql` (Quality Console + Human Review write UI) is **not** discarded and becomes the `AI 품질` module. It exists only on `legendstudy-lab claude/quality-console-v0 @ 253867b` and is **NOT on `main` or Production** (`/ql/` = HTTP404 live).
- **ALREADY_IMPLEMENTED / REUSABLE:** 191 RPCs on the canonical ledger; `public.quality_operators` + `is_quality_operator()` (Quality Authorization `PRODUCTION_VERIFIED`) and `public.admin_users` + `is_feedback_admin()` as an existing second allowlist; `public.essay_admin_grant`, `credit_summary`, `payment_order/process/support/compensate`, `ql_*`/`qlm_*` and the account-deletion RPC family; the `/ql` fail-closed DTO client pattern (`ql-read-v1`, `hq-write-v1`) as the console client skeleton.
- **MISSING_P0:** an ops-operator gate over `admin_users`; **no operator-scoped read RPC exists** for members, dashboard aggregates or payment order lists; `/admin` shell + nav; the six views; a server boundary for finance-gated writes.
- **CREDIT ADMIN:** canonical path is `public.essay_admin_grant(uuid,integer,text,uuid,text,timestamptz)` with the bounded reason vocabulary (`admin_grant/test_account|manual_support`, `promotion/operational_promotion`, `compensation/customer_compensation`, `b2b_program/program_allocation`). It is granted to **`essay_finance` only**, so the browser must never hold a finance credential; reuse the existing Cloudflare Pages Function pattern (`functions/api/payments/[[path]].ts`, `PAYMENT_FINANCE_TOKEN`) with one new admin route. **Runtime BLOCKED:** no Production `essay_finance` credential is provisioned — the same blocker holding Math's synthetic Credit funding. No direct ledger write, role escalation, JWT minting or TEST-credential reuse is permitted.
- **PAYMENT ADMIN:** `IMPLEMENTATION COMPLETE / TEST E2E COMPLETE / LIVE OFF`. The existing bounded `payment_support` contract (`inspect|cancel|reconcile`, `operator_id`+`request_key` idempotency, immutable `payment_private.support_audit`) is judged **sufficient** for cancel/reconcile — no new action RPC. Payment tiles must render the true `LIVE OFF` state, never fake rows.
- **ANALYTICS:** SoT stays Postgres/Supabase; GA4 is not the admin SoT. All P0 tiles derive from existing facts. `profiles` stores school **codes**, not school names, so school distribution is by code. Math is a separate table family and must render as `OFF`.
- **CANONICAL_SOURCE:** `legendstudy-app claude/app-release-blocker-closeout-1 @ 0b0b562` (32 migrations) for the backend; `legendstudy-lab` for the console web surface. **APP `origin/main @ d07671e` holds 1 migration — not backend truth.**
- **NEXT_GATE:** Owner approval of the P0 scope/phases → `ADMIN-P0-A` (no Owner dependency) can start immediately; `ADMIN-P0-B` waits on the Production finance credential; `ADMIN-P0-C` runs in parallel via `/ql` reuse.
- **KNOWN_LIMITATION:** nothing in this section is implemented. `admin_users` must not be widened into the verified `quality_operators` scope, and the console must not read answer bodies, tokens or provider secrets.

## ADMIN CONSOLE — ADMIN-P0-A implemented, not deployed (2026-10-05)

| Item | State |
|---|---|
| Backend | `legendstudy-app manus/admin-console-p0-a @ 625903d` — `20261005000200_admin_console_read.sql` |
| Front end | `legendstudy-lab manus/admin-console-p0-a @ 1244916` — `/admin/`, `/admin/members/`, `/admin/credit/` |
| Authorization | `admin_operator()` fail-closed on `public.admin_users`; separate from `quality_operators`, neither widened |
| Read surface | `admin_dashboard`, `admin_member_search`, `admin_member_detail`, `admin_member_credit` |
| Internal helpers | `admin_count`, `admin_account_state`, `admin_credit_snapshot` — revoked from anon/authenticated/service_role |
| Write authority | **NONE.** No grant, balance update, transaction insert or payment action |
| Pending subsystems | deletion/Math/payment absent -> `installed=false`, counts JSON null, never a fake 0; Math `RUNTIME_OFF`, payment `LIVE_OFF` |
| Verification | isolated PostgreSQL harness, **126 checks / 0 failed**; lint, typecheck, 175 tests, boundary audit, static export PASS |
| Accessibility | no console-owned axe violation; the only finding is the pre-existing shared header accent button |
| Production | **NOT applied, NOT deployed, NOT merged to `main`** |
| Next gate | Phase **B** Credit grant + Payment ops — **BLOCKED** on a Production `essay_finance` credential |
| Activation gate | when the payment runtime lands, `admin_credit_snapshot` must adopt the `CANCEL_PENDING` grant fence or it will drift above `credit_summary` during a cancellation window |

## ADMIN CONSOLE — ADMIN-P0-B / P0-C implemented, not deployed (2026-10-06)
**Branch:** backend `legendstudy-app manus/admin-console-p0-a @ 49c02de`; front end `legendstudy-lab manus/admin-console-p0-a @ bbc23cb`. **NOT merged to `main`, NOT applied to Production.**

| Item | State |
|---|---|
| Migration number collision | **RESOLVED.** ADMIN-P0-A/B/C were renumbered out of `2026100500xx` to **`20261007000400_admin_console_p0c.sql`** (plus the earlier P0-B file in the same band), so the other agent's `20261005000200_account_ops_sink` no longer collides. A migration-version guard in the harness now fails if this workstream re-enters that band. |
| P0-B read surface | `admin_payment_orders`, `admin_inquiry_list`, `admin_inquiry_detail`, `admin_support_metrics` |
| P0-B write surface | `inquiry_submit` (member), `inquiry_reply` / `inquiry_set_status` (operator) — idempotent by `request_key`, operator-scoped |
| P0-C read surface | `admin_essay_operations`, `admin_math_operations`, `admin_operations_summary` |
| P0-C deployment honesty | `essay_private.admin_relation_ready` separates **NOT_INSTALLED** from **SCHEMA_INCOMPLETE**, so a partially deployed Math schema is reported as undeployed instead of raising or reading as zero |
| Answer text | **never returned** by any operations read; the boundary guard fails the build if `answer_text` / `submission_body` / `question_text` reach the console view |
| Quality Console | `/ql/` imported **unchanged** from `claude/quality-console-v0` into the branch and reached as an `AI 품질` nav link. `quality_operators` is **not** merged into `admin_users`; `/ql` is now noindex + robots-disallowed + sitemap-absent |
| Verification | isolated PostgreSQL harness: P0-A **167**, P0-B **360**, notifications **70**, P0-C **170** checks, all 0 failed. LAB: lint, typecheck, **324 tests**, boundary audit, static export PASS |
| Accessibility | no console-owned axe violation; the only finding remains the pre-existing shared header accent button |
| Production | **NOT applied, NOT deployed, NOT merged to `main`.** `/admin/*` and `/ql/` are absent from Production, and the console backend migration must be reconciled with the account-ops work before any Production apply |

## Quality Authorization (verified detail)

**`PRODUCTION_VERIFIED`** as of 2026-10-01:

- migration `20261001000100` **applied**
- migration **tracking applied** (`APPLIED_TRACKED`)
- Quality operator **registered**
- actual Production JWT: **operator ALLOW** → PASS
- authenticated **non-operator DENY** → PASS
- **anon DENY** → PASS
- **forged identity DENY** → PASS
- existing Essay RLS/ACL **preserved**
- full-answer operator Production retrieval → **`NOT_ASSESSABLE`** (no legitimate evaluation case exists yet) — **not** a PASS

Dependent items (do not confuse with the above):

- **Quality Console UI:** `IMPLEMENTED / LOCAL_VERIFIED` (operator-only `/ql`; Production detail runtime `NOT_ASSESSABLE`)
- **LAB Essay canonical adapter:** `IMPLEMENTED / LOCAL_VERIFIED` (`ql-read-v1` consumer; fail-closed on unsupported DTO; no mock Production fallback)
- **Human Quality persistence:** `PRIMARY_STATUS: DESIGNED` · `LIFECYCLE: ACTIVE` · `CANONICAL_DB_REVIEW: PASS` · `IMPLEMENTATION: IMPLEMENTED / ISOLATED_VERIFIED` · `PRODUCTION_SQL: APPLIED` · `MIGRATION: APPLIED_TRACKED` (Owner report); `GATEWAY_AUTHORIZATION: PASS`, normal write NOT_ASSESSABLE
- **Human Review write UI:** `IMPLEMENTED / LOCAL_VERIFIED` (HQR-1; operator `/ql` consumes HQP RPCs; Production operator write `NOT_ASSESSABLE`)

Shared Backend: **NO CHANGE** by this LAB work (LEC closeout or HQP-1: no new RPC/table/RLS/migration/grant/privileged key/gateway). The Quality list index remains a separate, deferred launch decision. Owner has applied/tracked HQP-3 for two Human Quality tables and three gated RPCs. 105 isolated PG17 checks PASS; existing ql-read-v1, Quality authorization, Essay RLS/ACL and Credit/Billing preserved. The gateway verification made no application-data or schema/ledger writes.

## Human Quality

- **PILOT HUMAN REVIEW:** existing Owner review evidence includes accepted/PASS original-answer and strong-answer cases; see [latest Owner update](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-model-bakeoff-l2-b.md). Historical receipts remain historical.
- **SYSTEMATIC HUMAN QUALITY PERSISTENCE:** `DESIGNED` · `CANONICAL_DB_REVIEW: PASS` · `IMPLEMENTATION: IMPLEMENTED / ISOLATED_VERIFIED` · `PRODUCTION_SQL: APPLIED` / tracking APPLIED (Owner report); gateway authorization PASS. [HQP-3 canonical implementation](https://github.com/LC3808/legendstudy-app/blob/9f78dc66bd4cc75efed45ec8d928af2abc297acb/wiki/human-quality-persistence-implementation.md) and [Owner package](https://github.com/LC3808/legendstudy-app/blob/9f78dc66bd4cc75efed45ec8d928af2abc297acb/supabase/verification/human_quality/README.md); migration `20261001000200` applied/tracked by Owner. [Actual gateway closeout](https://github.com/LC3808/legendstudy-app/blob/cbd80c90f5b104dc50e9d1a961f73d48849ce52e/wiki/human-quality-persistence-implementation.md#production-gateway-closeout--2026-10-01): operator empty read/missing-case gate PASS; student/anon RPC, direct tables and forged identity DENY PASS. Normal operator INSERT **NOT_ASSESSABLE**; write UI readiness YES for a separate task. Missing case returns **P0002/HTTP500**, not404. Existing read-v1 gateway behavior PASS; exact live function-body/ACL catalog equality **NOT_RECHECKED**. No agent application-data writes or automatic Pilot backfill.
- **HUMAN REVIEW WRITE UI (HQR-1):** `IMPLEMENTED / LOCAL_VERIFIED`. LAB `/ql` consumes the canonical HQP RPCs (`ql_submit_human_judgment` / `ql_review_state` / `ql_list_human_judgments`) via the authenticated browser session — review-state badges, judgment history, rubric v1 submission, findings, correction/supersession, deleted-reviewer rendering, idempotent submit. `ql-read-v1` and the static export unchanged; no backend change. Verified with synthetic fixtures + mocked RPCs; **Production operator write `NOT_ASSESSABLE`** (no legitimate case; none created). See [`legendstudy-lab` `docs/architecture/HQR-1_HUMAN_REVIEW_CONSOLE.md` @ `ce9d04e`](https://github.com/LC3808/legendstudy-lab/blob/ce9d04efa1293b9958435835c77e35a6c0e2ec7a/docs/architecture/HQR-1_HUMAN_REVIEW_CONSOLE.md).
- **OWNER POLICY:** D1–D5 and E1/E2 final. Student evaluation hard erasure cascades QA judgments/findings; invalidation/supersession preserve history. Reviewer deletion nulls direct identity and preserves QA of existing subjects; no reviewer email/name snapshot.
- **ACCOUNT DELETION (ADR-2D):** `IMPLEMENTED / ISOLATED_VERIFIED`; same migration20261001000300 `READY_NOT_APPLIED`, Owner package READY. Owner ADR-2C Production attempt failed on function ownership and FULLY_ROLLED_BACK; no objects/tracking remain. Approved temporary ownership bridges are now locally verified with non-superuser postgres; original function ownership/security and temporary privileges restored. Production retry requires new-hash review. P-01 restore/cancellation resolved; P-02 trusted reauth/admission adapters locally verified, provider runtime remains EXTERNAL_GATE; P-03 privacy-first capture resolved. No global signup-benefit hold: unavailable historical marker never delays erasure; later normal eligibility may grant again under accepted bounded risk. Current eligibility outage still allows account creation but defers the free grant. Fixed336h, explicit reauth cancellation, HQP E1/E2 and30day receipt preserved. Production lifecycle NOT_ACTIVE; secrets, provider/finance/Storage/backup, scheduler/notification and consumer UX gates remain. [Canonical correction](https://github.com/LC3808/legendstudy-app/blob/59e14eb76e24dd178d042c8eddeca14bd670f1b5/wiki/account-deletion-ownership-compatibility.md) · [Owner package](https://github.com/LC3808/legendstudy-app/blob/59e14eb76e24dd178d042c8eddeca14bd670f1b5/supabase/verification/account_deletion/README.md). No agent Production writes/deploy/ledger change or LAB/HQR-1 modification.
- **ANALYTICS RETENTION:** **SEPARATE_FUTURE_DESIGN**; deletion-pending data is not analytics, no archive/copy-before-delete/pseudonymization pipeline implemented.
- **REAL-STUDENT PILOT:** not yet authorized; no real-student Essay traffic.
- **FULL_ANSWER_LIVE_RETRIEVAL:** NOT_ASSESSABLE is technical coverage, not Human Quality judgment.

## AI / model

- **PROCESSING FOUNDATION:** `essay_ai_processing_runs` and existing processing persistence/tooling exist; [canonical worker/provider record](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-worker-provider-l2.md).
- **PRODUCTION_AI:** `OFF`
- **PRIMARY_MODEL:** `NOT_SELECTED`
- **GPT:** `PRIMARY_CANDIDATE` only (candidate ≠ selected)
- `provider005`: `PRESERVED_NOT_APPLIED`

## Migration ledger

- **Remote tracked migrations:** **23** (independently read-only rechecked for ADR-2D on2026-10-01; ADR-2 absent; prior HQP/LSA-2C evidence preserved)
- `20261001000100_quality_read_authorization`: SQL applied · tracking applied · Production authorization **verified** → `APPLIED_TRACKED`
- `20260930000100_day_targets_least_privilege`: Production ACL effect **verified**, but migration **tracking remains separate/unregistered** → `SEPARATE_TRACKING_DEBT` (SQL effect ≠ ledger state)
- `provider005`: `PRESERVED_NOT_APPLIED` → `READY_NOT_APPLIED`. This is not an automatic next migration; no unfiltered db push or tracking repair is authorized by this status.

- `20261001000200_human_quality_persistence`: **APPLIED_TRACKED** (Owner-confirmed); actual gateway authorization PASS. Do not replay SQL or tracking; no agent ledger write occurred.

- `20261001000300_account_deletion_lifecycle`: **READY_NOT_APPLIED**; ADR-2D ownership-corrected local candidate; canonical SHA-256 `38c86fd79554225fbc6a5a30be791c860e6c89dcaa64ad7e229e3710b9a29d94`. Previous attempted hash is SUPERSEDED_PRE_APPLY_FAILED_ATTEMPT; fully rolled back, never tracked. Remote ledger unchanged by this task; no scheduler/secret provisioning or broad migration replay. Next account gate: Owner/ChatGPT review → exact migration review → external activation gates → separately authorized Owner apply/verification.

## Stale-checkout warning

A local checkout sitting on `main` and fully synced with `origin/main` **can still not be the current canonical task truth.** Observed generalized case: a local APP checkout was on `main` while the canonical Shared-Backend / Essay task work lived on a feature branch. Always verify your checkout against the latest Handoff `VERIFIED_COMMITS` before trusting it, and never auto-pull/reset/rebase/merge to paper over a mismatch — STOP and find the correct ref. See [`AI_CONTEXT.md` §6](AI_CONTEXT.md#6-how-to-determine-current-branch--worktree).

## Current pointers (branch-sensitive)

These are **current** pointers, not pinned evidence (which uses commit SHAs — see [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md)):

- APP code/backend: [`legendstudy-app`](https://github.com/LC3808/legendstudy-app) — confirm the active task branch per [`AI_CONTEXT.md` §6](AI_CONTEXT.md#6-how-to-determine-current-branch--worktree); do **not** assume `main`
- LAB code: [`legendstudy-lab`](https://github.com/LC3808/legendstudy-lab)
- Project docs: this repo (`legendstudy-docs`)


## Release closeout checkpoint — 2026-10-05 late

- **Development authority:** 빠르게 · 가볍게 · 정확하게 · 사용자 관점의 가치. Agent ownership is interchangeable: Claude / Manus / Codex / Owner 중 현재 작업을 가장 빠르고 정확하게 끝낼 수 있는 주체를 사용한다. Existing infra/credentials first; Owner가 1–2분 직접 실행하는 것이 더 빠르면 exact command 방식으로 넘긴다. 검증/보안 절차는 위험에 비례시키고 출시 가치보다 커지지 않게 한다.
- **Brand/product authority:** COPACABANA의 현재 주력 서비스는 **Muselry + LegendStudy+**. LegendStudy+ 대외 포지셔닝은 **“내신 관리부터 수능, 논술 준비까지. 데이터가 쌓일수록 나의 가능성은 더 선명해집니다.”** 대외 headline에서 기출·AI를 전면에 내세우지 않는다. **LegendStudy LAB은 논술 LAB의 동의어가 아니라 상위 체계**이며 LegendStudy LAB → 내신 LAB / 수능 LAB / 논술 LAB으로 구분한다.
- **Math:** MATH_RELEASE_CANDIDATE=YES, 실제 OpenAI gpt-5.6-sol Hosted 학습 루프 PASS, 최초 평가 Credit −1 / 포함 재평가 0, runtime kill switch는 **OFF로 복구·read-back 확인**. 실제 Math Storage byte erasure + metadata erasure는 동일 synthetic subject의 Account Deletion destructive E2E에서 최종 확인한다.
- **Privacy:** LAB Production 개인정보처리방침 correction **LIVE PASS** (legendstudy-lab main @ ed8a1ca). Shared-backend 저장 사실과 일치하며 기존 “답안/성적/학교·학년 서버 미저장” 오표현은 제거됐다.
- **Admin Console:** P0-A + P0-B는 **구현/격리 검증 완료, Production 미배포/main 미통합**. P0-A = dashboard/member/Credit read. P0-B = Credit canonical grant boundary + Payment ops + 1:1 문의(접수/운영자 조회·답변·상태/Resend). ADMIN-P0-C(논술/Math ops + 기존 /ql AI 품질 통합)는 남음.
- **Shared Notification Center:** backend + LAB **CODE COMPLETE / NOT DEPLOYED**; **Flutter consumer integration CODE COMPLETE (2026-10-06, app `6736167`)** — Home bell + badge + `/notifications` inbox + mark read/all via notification-v1 RPCs, Owner full967~2 PASS + fresh Flutter3.47.6 analyze PASS (2026-10-07). APP/Web 동일 user_notifications/read state. 저잔액은 매일/매 사용 알림 금지: 원장 잔액이 3 이하로 진입할 때 cycle당 1회, 3→2→1→0은 추가 알림 없음, 3 초과 회복 후 재진입 시 새 1회. Credit expiry는 D-30/D-14/D-7/D-3. Push(APNs/FCM)는 이번 release 범위 밖.
- **Account Deletion Production activation — IN PROGRESS:** migration 20261005000100 applied/verified; delete-account + account-deletion-worker deployed fail-closed; privacy live. Minimal durable ops sink migration 20261005000200 account_ops_sink applied and account-ops-sink deployed; receipt stores hash+size only, not raw manifest/PII. ACCOUNT_OPERATIONS_TOKEN, restore/notification sink URLs, ACCOUNT_FINANCE_REVIEWED=true set. Edge/Vault ACCOUNT_DISPATCH_SECRET re-synchronized by Owner; secret value not recorded. Worker authentication was simplified to reuse existing server-side SUPABASE_SERVICE_ROLE_KEY; Owner applied exact EXECUTE grants to the **22 RPCs actually called by the worker** (22/22), not a broad account_* grant. Local worker auth patch exists but, at this checkpoint, Claude has not yet reported commit/push/redeploy/runtime verification. Lifecycle global enable remains OFF until worker/scheduler/watchdog are ready.
- **Deletion E2E remaining:** worker auth patch verify→commit/push→redeploy; dispatch scheduler + watchdog; lifecycle enable; test1 synthetic account request→email reauth cancel→re-request; Owner-approved test1 current request only deadline move to past (global 336h unchanged); canonical destructive worker; verify Math byte/metadata erasure, stale reservation cleanup, Auth deletion; activate public web deletion page; Store deletion blocker verdict.
- **Migration namespace warning:** Production now uses 20261005000200 for **account_ops_sink**, while Manus ADMIN-P0-A branch previously used the same version for 20261005000200_admin_console_read.sql. **Resolve/renumber the Admin migration before branch integration or Production apply. Do not replay or overwrite the Production version.**
- **Store/Final RC remaining:** ADMIN-P0-C; merge/deploy Admin + notification backend code after migration-number reconciliation; `/account-deletion` scope-copy cleanup + 404/foundation copy; final APP/LAB branch integration; signed build number, physical-device smoke, reviewer account, Apple/Google Console declarations/screenshots. **Done since:** web deletion activation (LIVE), account-deletion destructive E2E, Flutter notification-center consumer integration (code). Payment LIVE remains separately OFF and does not block a free launch.


## APP first-run personalization — Release P0 authority (2026-10-06)

- **APP-FIRST-RUN-PERSONALIZATION-1 CODE COMPLETE (2026-10-06, app `ff338b4` on `claude/app-release-blocker-closeout-1`).** Flow: concise 3-screen brand intro (내신·수능·논술 LAB positioning; no 기출/AI headline) → status → grade+school → **관심 대학** → **희망 전공** → Home, reusing the existing onboarding gate / NEIS school search / design system. 관심 대학 reuses the existing `universities` catalog (public RLS) + `student_target_universities` (`status='interested'`, `source='onboarding'/'my'`, owner RLS) — **interest, not application** (distinct from `'planned'` and any future application model); **0–5 (optional/skippable), ~3 recommended** (Owner correction 2026-10-06: min 1→0; universities-step CTA becomes "나중에 설정할게요" when none selected), selected rises to an emphasized card, initial-letter logo fallback (no external logo scraping). 희망 전공 = minimal broad-field taxonomy + explicit undecided, stored in an additive **`profiles.intended_major`** column kept DECOUPLED/fail-safe from the core profile projection. My Page (학교·학년 설정) now also edits 관심 대학 + 희망 전공; Settings adds "앱 사용 안내 다시 보기" (brand replay, no personalization reset). No new auth/catalog/scraping. **University catalog release seed (2026-10-06): `public.universities` active 5 → 50** (Release Core 50: 서울/수도권/거점국립/과기원/지역 국립·사립; idempotent upsert on unique `slug`; existing 5 + synthetic row preserved; schema/RLS unchanged; no ranking/score stored). **Owner migration pending:** additive `profiles.intended_major text` (version `20261006000200`) must be applied before this build reaches prod (desired-major persistence degrades to unset until then). **CI validation pending** (local Flutter 3.32.0 < required >=3.47.3). Final APP RC also needs this feature's CI analyze/test.
- Scope: brand onboarding + school + grade + interested universities + desired major/interest field. Interested universities = **0–5 (optional/skippable), ~3 recommended**, and are explicitly informational/personalization data rather than actual application schools. Desired major must support undecided users.
- School/university selection UX: search candidates → unselected candidates remain visually secondary → selected name + available logo/symbol comes forward and is emphasized. Reuse existing profile/NEIS identity where applicable.
- Product connection: the resulting personalization profile becomes common context for **내신 LAB / 수능 LAB / 논술 LAB** and future admissions-information surfaces, supporting the product promise that students can manage admissions preparation in one place. Actual application schools/history remain a separate future data model.
- User can edit school, grade, interested universities and desired major later in My Page. Do not make onboarding a mandatory account-signup wall.

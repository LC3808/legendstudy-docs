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

# CURRENT_STATUS — LegendStudy+ (as of 2026-10-04)

> **This document holds current facts only.** It is *not* an append-only log — see the [Daily history](../90_HISTORY/DAILY/) for how we got here.
> Status axes are defined in [`AI_CONTEXT.md` §7](AI_CONTEXT.md#7-status-vocabulary). `NOT_ASSESSABLE ≠ PASS`.

## Launch target

**2026-10-10 — before the 연세대 논술.** This is a target, not a guaranteed release date. This supersedes any earlier "mid-October" style dates in historical docs.

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
- **NEXT_GATE:** Owner/ChatGPT review → Production activation package (Math migrations apply; private Storage + R21 byte cleanup; ADR-2 Math erasure CASCADE deploy; worker/gateway + JWT + provider secret; controlled real-model bake-off) → wire the LAB 수리논술 student route over the activated RPC surface → first legitimate E2E + smoke/rollback → separately authorized real-student pilot. Production apply readiness `NO`; no live provider.
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
- **AUTH LIFECYCLE / OPERATIONS:** remaining gates include ADR-2 activation/deployment and full restricted UX, Apple revoke and credential renewal, Google credential rotation, and remaining Store/release operational gates. Login acceptance does not close them.
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

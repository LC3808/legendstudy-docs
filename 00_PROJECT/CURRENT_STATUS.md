<!--
DOCUMENT_STATUS: CANONICAL
SCOPE: PROJECT
LAST_VERIFIED: 2026-10-01
VERIFICATION_BASIS: HQP gateway @ cbd80c90f5b104dc50e9d1a961f73d48849ce52e (actual JWT boundary PASS; Owner reports applied/tracked23; successful write NOT_ASSESSABLE); HQP-3 @ 9f78dc66bd4cc75efed45ec8d928af2abc297acb (105 isolated PG17 checks PASS; Production NOT_APPLIED); HQP-2 APP canonical review @ 38ebbf6ee511bb5ef343af82e90d14acf71b6ffc (historical review; E1/E2 subsequently resolved for HQP-3); UWA-1B bottom-up audit (legendstudy-app @ 2ebec8d); LSA-2 / LSA-2C Quality authorization closeout 2026-10-01; day_targets correction (migration 20260930000100); LEC-1/2/3 LAB Quality Console v0 closeout 2026-10-01 (legendstudy-lab claude/quality-console-v0 @ 325a112, PUBLIC; local lint/typecheck/test/build PASS; Production detail runtime NOT_ASSESSABLE); HQP-1 Human Quality persistence design 2026-10-01 (legendstudy-lab claude/quality-console-v0 @ b9cff1b, PUBLIC; design/plan only — no SQL/migration/Production change); HQR-1 Human Review Console v1 2026-10-01 (legendstudy-lab claude/quality-console-v0 @ ce9d04e, PUBLIC; write/read UI consuming 20261001000200; 160 tests + lint/typecheck/boundary/static-export PASS; Production operator write NOT_ASSESSABLE; no backend change)
BOOTSTRAP_INSPECTED_REFS: legendstudy-app main @ d07671e (local, read-only); legendstudy-lab claude/intelligence-school-architecture @ 94d5d61 (LOCAL_ONLY / REMOTE_UNAVAILABLE; read-only)
CORRECTION_REFS: APP codex/essay-scaffolding-vnext @ 2ebec8d (PUBLIC); docs main baseline @ 0dce101; LAB proposal @ 94d5d61 (LOCAL_ONLY / REMOTE_UNAVAILABLE)
CORRECTION_BASIS: Owner-approved UWA-2D following UWA-2C independent review; APP canonical evidence @ 2ebec8d
SUPERSEDES: —
SUPERSEDED_BY: —
-->

# CURRENT_STATUS — LegendStudy+ (as of 2026-10-01)

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
| Payment / commercial launch work | **planned** |
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
- **AUTH LIFECYCLE / OPERATIONS:** remaining gates include account deletion lifecycle/deployment, Apple revoke and credential renewal, Google credential rotation, and remaining Store/release operational gates. Login acceptance does not close them.
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
- **STATUS:** `NOT_STARTED` (payment/commercial) · **PRODUCTION_STATE:** off
- **CANONICAL_SOURCE:** TBD (will build on Credit/Billing)
- **NEXT_GATE:** payment integration
- **KNOWN_LIMITATION:** no payment in Production

### RELEASE
- **STATUS:** pre-launch · **PRODUCTION_STATE:** backend live; store release pending
- **CANONICAL_SOURCE:** `legendstudy-app` (APP release), `legendstudy-lab` (LAB web)
- **NEXT_GATE:** release / store readiness for 2026-10-10
- **KNOWN_LIMITATION:** Store/release gates are INCOMPLETE / REMAINING; existing preparation and acceptance do not establish store release.

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
- **ACCOUNT DELETION:** request → **14-day grace → automatic personal-data erasure**. Automation/pending-access lifecycle: **SEPARATE_IMPLEMENTATION_REQUIRED** (existing handler is immediate-delete candidate). Admin deletion notice: **FOLLOW_UP_REQUIRED**. HQP implements only dependency erasure.
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

- **Remote tracked migrations:** **23** (Owner-confirmed HQP postflight; not independently queried in this gateway task; previous verified LSA-2C snapshot22)
- `20261001000100_quality_read_authorization`: SQL applied · tracking applied · Production authorization **verified** → `APPLIED_TRACKED`
- `20260930000100_day_targets_least_privilege`: Production ACL effect **verified**, but migration **tracking remains separate/unregistered** → `SEPARATE_TRACKING_DEBT` (SQL effect ≠ ledger state)
- `provider005`: `PRESERVED_NOT_APPLIED` → `READY_NOT_APPLIED`. This is not an automatic next migration; no unfiltered db push or tracking repair is authorized by this status.

- `20261001000200_human_quality_persistence`: **APPLIED_TRACKED** (Owner-confirmed); actual gateway authorization PASS. Do not replay SQL or tracking; no agent ledger write occurred.

## Stale-checkout warning

A local checkout sitting on `main` and fully synced with `origin/main` **can still not be the current canonical task truth.** Observed generalized case: a local APP checkout was on `main` while the canonical Shared-Backend / Essay task work lived on a feature branch. Always verify your checkout against the latest Handoff `VERIFIED_COMMITS` before trusting it, and never auto-pull/reset/rebase/merge to paper over a mismatch — STOP and find the correct ref. See [`AI_CONTEXT.md` §6](AI_CONTEXT.md#6-how-to-determine-current-branch--worktree).

## Current pointers (branch-sensitive)

These are **current** pointers, not pinned evidence (which uses commit SHAs — see [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md)):

- APP code/backend: [`legendstudy-app`](https://github.com/LC3808/legendstudy-app) — confirm the active task branch per [`AI_CONTEXT.md` §6](AI_CONTEXT.md#6-how-to-determine-current-branch--worktree); do **not** assume `main`
- LAB code: [`legendstudy-lab`](https://github.com/LC3808/legendstudy-lab)
- Project docs: this repo (`legendstudy-docs`)

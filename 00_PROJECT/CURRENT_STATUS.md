<!--
DOCUMENT_STATUS: CANONICAL
SCOPE: PROJECT
LAST_VERIFIED: 2026-10-01
VERIFICATION_BASIS: UWA-1B bottom-up audit (legendstudy-app @ 2ebec8d); LSA-2 / LSA-2C Quality authorization closeout 2026-10-01; day_targets correction (migration 20260930000100)
INSPECTED_REFS: legendstudy-app main @ d07671e (local, read-only); legendstudy-lab claude/intelligence-school-architecture @ 94d5d61 (local, read-only)
SUPERSEDES: —
SUPERSEDED_BY: —
-->

# CURRENT_STATUS — LegendStudy+ (as of 2026-10-01)

> **This document holds current facts only.** It is *not* an append-only log — see the [Daily history](../90_HISTORY/DAILY/) for how we got here.
> Status axes are defined in [`AI_CONTEXT.md` §7](AI_CONTEXT.md#7-status-vocabulary). `NOT_ASSESSABLE ≠ PASS`.

## Launch target

**2026-10-10 — before the 연세대 논술.** This supersedes any earlier "mid-October" style dates in historical docs.

## Critical path (fact vs plan)

| Step | State |
|---|---|
| Unified Wiki P0 (this repo) | **DONE (fact)** — bootstrapped 2026-10-01 |
| LAB Essay canonical contract mapping | **NOT_STARTED (plan)** |
| Quality Console v0 | **NOT_STARTED (plan)** |
| Human Quality persistence design | **NOT_STARTED (plan)** — design required before real-student Pilot |
| Payment / commercial launch work | **planned** |
| Release / store readiness | **planned** |

> The ordering above is the current working plan; it is not a new Owner-approved reprioritization.

## Domain status

Each domain: `STATUS` · `PRODUCTION_STATE` · `CANONICAL_SOURCE` · `NEXT_GATE` · `KNOWN_LIMITATION`.

### PROJECT
- **STATUS:** active, pre-launch · **PRODUCTION_STATE:** backend live; no real-student Essay traffic yet
- **CANONICAL_SOURCE:** this hub (`legendstudy-docs`) for project-level state
- **NEXT_GATE:** LAB Essay canonical contract mapping
- **KNOWN_LIMITATION:** two user surfaces (APP/LAB) + one shared backend must stay reconciled via Daily Closeout

### APP
- **STATUS:** `PRODUCTION_APPLIED` (Flutter app in active development) · **PRODUCTION_STATE:** live backend-connected
- **CANONICAL_SOURCE:** `legendstudy-app`
- **NEXT_GATE:** store readiness
- **KNOWN_LIMITATION:** local `main` checkout is **not** necessarily the current task branch — verify (see Stale-checkout warning)

### LAB
- **STATUS:** `PRODUCTION_APPLIED` for public landing/auth; essay/quality web surfaces `NOT_STARTED`
- **CANONICAL_SOURCE:** `legendstudy-lab`
- **NEXT_GATE:** LAB Essay canonical contract mapping → Quality Console v0
- **KNOWN_LIMITATION:** a single LAB branch does not represent all current truth — architecture docs and product branches can diverge; verify per task

### SHARED BACKEND
- **STATUS:** `PRODUCTION_APPLIED` / partly `PRODUCTION_VERIFIED` · **PRODUCTION_STATE:** Supabase live
- **CANONICAL_SOURCE:** migration ledger + live DB, physically in `legendstudy-app/supabase/migrations`
- **NEXT_GATE:** reconcile separate-tracking debt (see Migration ledger)
- **KNOWN_LIMITATION:** physically hosted in APP repo but **jointly owned** — not "APP-only"

### ESSAY
- **STATUS:** schema `PRODUCTION_APPLIED`; pre-launch (no real-student traffic)
- **CANONICAL_SOURCE:** `legendstudy-app` (essay schema/RPC/engine)
- **NEXT_GATE:** LAB Essay canonical contract mapping
- **KNOWN_LIMITATION:** LAB mock is **not** the canonical Production Essay consumer

### QUALITY
- **STATUS:** **Quality Authorization = `PRODUCTION_VERIFIED`**; Quality Console = `NOT_STARTED`
- **PRODUCTION_STATE:** authorization enforced in Production (see Quality Authorization block)
- **CANONICAL_SOURCE:** `legendstudy-app` (`quality_operators` + `ql_*` RPCs, migration `20261001000100`)
- **NEXT_GATE:** Quality Console v0 (web consumer)
- **KNOWN_LIMITATION:** full-answer operator live retrieval = `NOT_ASSESSABLE` (no legitimate evaluation case exists yet)

### AUTH
- **STATUS:** `PRODUCTION_VERIFIED` · **PRODUCTION_STATE:** live
- **CANONICAL_SOURCE:** Supabase Auth + `legendstudy-app` (LSA-1 server authorization design)
- **NEXT_GATE:** none pending at project level
- **KNOWN_LIMITATION:** authenticated EXECUTE ≠ authorized data access (authorization is enforced separately)

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
- **STATUS:** `FUTURE` · **PRODUCTION_STATE:** none
- **CANONICAL_SOURCE:** none yet
- **NEXT_GATE:** design (post-launch)
- **KNOWN_LIMITATION:** not implemented

### SCHOOL / B2B
- **STATUS:** `FUTURE` (e.g. future `school.legendstudy.com` surface) · **PRODUCTION_STATE:** none
- **CANONICAL_SOURCE:** none yet
- **NEXT_GATE:** design (post-launch)
- **KNOWN_LIMITATION:** not implemented; architecture reserves room for it under Shared Backend

### ANALYTICS
- **STATUS:** `PARTIAL` · **PRODUCTION_STATE:** product analytics as consumer only
- **CANONICAL_SOURCE:** consuming repos (never a source of truth itself)
- **NEXT_GATE:** define canonical event contracts
- **KNOWN_LIMITATION:** analytics is a **consumer**, never a canonical source

### COMMERCIAL
- **STATUS:** `NOT_STARTED` (payment/commercial) · **PRODUCTION_STATE:** off
- **CANONICAL_SOURCE:** TBD (will build on Credit/Billing)
- **NEXT_GATE:** payment integration
- **KNOWN_LIMITATION:** no payment in Production

### RELEASE
- **STATUS:** pre-launch · **PRODUCTION_STATE:** backend live; store release pending
- **CANONICAL_SOURCE:** `legendstudy-app` (APP release), `legendstudy-lab` (LAB web)
- **NEXT_GATE:** release / store readiness for 2026-10-10
- **KNOWN_LIMITATION:** store readiness work not yet started

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

- **Quality Console UI:** `NOT_STARTED`
- **LAB Essay canonical adapter:** `NOT_STARTED`
- **Human Quality persistence:** `NOT_STARTED` / design before real-student Pilot

## AI / model

- **PRODUCTION_AI:** `OFF`
- **PRIMARY_MODEL:** `NOT_SELECTED`
- **GPT:** `PRIMARY_CANDIDATE` only (candidate ≠ selected)
- `provider005`: `PRESERVED_NOT_APPLIED`

## Migration ledger

- **Remote tracked migrations:** **22** (as of the verified 2026-10-01 snapshot, after LSA-2C)
- `20261001000100_quality_read_authorization`: SQL applied · tracking applied · Production authorization **verified** → `APPLIED_TRACKED`
- `20260930000100_day_targets_least_privilege`: Production ACL effect **verified**, but migration **tracking remains separate/unregistered** → `SEPARATE_TRACKING_DEBT` (SQL effect ≠ ledger state)
- `provider005`: `PRESERVED_NOT_APPLIED` → `READY_NOT_APPLIED`

## Stale-checkout warning

A local checkout sitting on `main` and fully synced with `origin/main` **can still not be the current canonical task truth.** Observed generalized case: a local APP checkout was on `main` while the canonical Shared-Backend / Essay task work lived on a feature branch. Always verify your checkout against the latest Handoff `VERIFIED_COMMITS` before trusting it, and never auto-pull/reset/rebase/merge to paper over a mismatch — STOP and find the correct ref. See [`AI_CONTEXT.md` §6](AI_CONTEXT.md#6-how-to-determine-current-branch--worktree).

## Current pointers (branch-sensitive)

These are **current** pointers, not pinned evidence (which uses commit SHAs — see [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md)):

- APP code/backend: [`legendstudy-app`](https://github.com/LC3808/legendstudy-app) — confirm the active task branch per [`AI_CONTEXT.md` §6](AI_CONTEXT.md#6-how-to-determine-current-branch--worktree); do **not** assume `main`
- LAB code: [`legendstudy-lab`](https://github.com/LC3808/legendstudy-lab)
- Project docs: this repo (`legendstudy-docs`)

<!--
DOCUMENT_STATUS: CANONICAL
SCOPE: PROJECT
LAST_VERIFIED: 2026-10-01
VERIFICATION_BASIS: UWA-1B bottom-up audit 21-capability registry (legendstudy-app @ 2ebec8d, branch codex/essay-scaffolding-vnext); LSA-2 / LSA-2C Quality authorization closeout 2026-10-01
BOOTSTRAP_INSPECTED_REFS: legendstudy-app main @ d07671e (local, read-only); legendstudy-lab claude/intelligence-school-architecture @ 94d5d61 (LOCAL_ONLY / REMOTE_UNAVAILABLE; read-only)
CORRECTION_REFS: APP codex/essay-scaffolding-vnext @ 2ebec8d (PUBLIC); docs main baseline @ 0dce101; LAB proposal @ 94d5d61 (LOCAL_ONLY / REMOTE_UNAVAILABLE)
CORRECTION_BASIS: Owner-approved UWA-2D following UWA-2C independent review; APP canonical evidence @ 2ebec8d
SUPERSEDES: —
SUPERSEDED_BY: —
-->

# SOURCE_OF_TRUTH — Capability registry

> One capability = **one** canonical source. Consumers (dashboards, DTOs, analytics, mocks) are never sources.
> **Link, don't copy** — this registry points to canonical records; it does not reproduce them.
> Status axes: [`AI_CONTEXT.md` §7](AI_CONTEXT.md#7-status-vocabulary). `NOT_ASSESSABLE ≠ PASS`. `FUTURE` capabilities must not be presented as existing.

**Pointer convention:** `CURRENT_STATUS` and this registry use **reviewed canonical document pointers pinned to public APP evidence at `2ebec8d`**; discover later task state by checking the correct branch, not by assuming these snapshots always remain latest. Historical/pinned evidence uses **commit SHAs** (see [Pinned evidence](#pinned-evidence) and the [Daily](../90_HISTORY/DAILY/)).

| # | Capability | Canonical fact | Physical source | Canonical document / record | Current consumer | Future consumer | Status | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | Identity | `auth.users.id` | Supabase; APP/LAB auth clients | [Auth acceptance](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/auth-native-owner-acceptance.md) | APP, LAB | future surfaces | Foundation in Production use; Owner acceptance recorded | Owner shared-identity PASS ≠ independently re-tested whole Auth lifecycle. |
| 2 | Profile | `profiles`; personal targets in `student_target_universities` | legendstudy-app | [Profile](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/personalization-onboarding.md) | APP | LAB | PRIMARY_STATUS: PRODUCTION_APPLIED | One profile experience ≠ one profiles table; not organization membership. |
| 3 | Content | `source_posts` / `exams` / `resources` / `subjects` | legendstudy-app | [Content/data](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/database.md) | APP | LAB live consumer | PRIMARY_STATUS: PRODUCTION_APPLIED | Preserve source/raw labels; LAB reviewed fixtures are not a live canonical backend. |
| 4 | D-Day | `public.day_targets` | legendstudy-app | [D-Day](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/day-7-dday-storage-proposal.md) | APP Home/MY | — | PRIMARY_STATUS: PRODUCTION_APPLIED | ACL effect VERIFIED; 20260930000100 tracking remains separate/unregistered; see [migration state](CURRENT_STATUS.md#migration-ledger). |
| 5 | Study Timer | `study_sessions` | legendstudy-app | [Study](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/study-v1.md) | APP Study | learning analytics | Persistence implemented; existing acceptance | APP client consumes the persistent session fact. |
| 6 | Mock Scoring | Self-entered answers / calculated results | legendstudy-app | [Scoring](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/mock-exam-scoring-v1.md) | APP scoring | — | PRIMARY_STATUS: IMPLEMENTED | Self-scoring ≠ official transcript; LAB mock is not Production Essay consumer. |
| 7 | Essay Source | University/question/official evidence mapping and versions | legendstudy-app | [Evidence foundation](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-data-foundation.md) | APP Essay / Pilot tooling | LAB live adapter | Schema PRODUCTION_APPLIED; pre-launch | Evidence package version is not a claim of complete university/archive coverage. |
| 8 | Essay Attempt | `essay_attempts` / `essay_practice_sessions` | legendstudy-app | [Essay product](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-product-v1.md) | APP L1 / Quality RPC | LAB live adapter | Schema PRODUCTION_APPLIED; pre-launch | Student rewrite = subsequent immutable student attempt; generated rewrite is separate. No real-student traffic. |
| 9 | Essay Evaluation | `essay_evaluations` (+ dimensions/evidence) | legendstudy-app | [Evaluation persistence](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-scaffolding-persistence.md) | APP mapping / Quality RPC | Quality Console | Schema PRODUCTION_APPLIED; pre-launch | Pilot Owner PASS cases exist; systematic Production Human Quality persistence is missing. |
| 10 | Essay Progress | `essay_improvement_items` / `essay_improvement_progress` | legendstudy-app | [Progress/history](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-scaffolding-persistence.md) | APP / Quality RPC | LAB live adapter | PRIMARY_STATUS: PRODUCTION_APPLIED | Canonical previous_progress_id chain; analytics events are not its authority. |
| 11 | CORE / Sentence | `essay_improvement_progress.scaffolding_observation` | legendstudy-app | [Scaffolding mapping](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-scaffolding-persistence.md) | APP mapping / ql_case_detail | LAB | Persistence PRODUCTION_APPLIED | Versioned JSON: active progress core_focus determines CORE membership; progress priority determines canonical CORE order; sentences live in JSON. No missing separate sentence table. Legacy/unavailable ≠ empty list; CORE=[] valid. |
| 12 | AI Processing | `essay_ai_processing_runs` | legendstudy-app | [Worker/provider](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-worker-provider-l2.md) | Existing persistence/tooling; Quality selected-run read | Production AI runtime / LAB | Foundation exists; PRODUCTION_AI: OFF | provider005 pending; additional telemetry not assumed applied; actual cost NULL ≠ 0. Model NOT_SELECTED; GPT candidate only. |
| 13 | Credit | `credit_accounts` / `credit_grants` / `credit_transactions` | legendstudy-app | [Credit/commercial](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/roadmap-monetization-and-in-app-learning.md) | Essay server / APP | LAB | PRIMARY_STATUS: PRODUCTION_APPLIED | Coupon/Institution provisioning reuses ledger; no parallel wallet. |
| 14 | Billing Decision | `essay_billing_decisions` | legendstudy-app | [Billing transactions](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-server-transactions.md) | Shared backend / APP | LAB | PRIMARY_STATUS: PRODUCTION_APPLIED | Server-authoritative paid/included decision; commercial launch pre-launch. |
| 15 | Quality Authorization | `quality_operators` / `is_quality_operator` / `ql_*` RPCs | legendstudy-app | [Verified package](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/supabase/verification/quality_authorization/README.md) | authorization gateway | Quality Console | PRIMARY_STATUS: PRODUCTION_VERIFIED; MIGRATION_STATUS: APPLIED_TRACKED | Operator ALLOW / non-operator, anon, forged DENY PASS. FULL_ANSWER_LIVE_RETRIEVAL: NOT_ASSESSABLE (no legitimate case); technical coverage, not Human Quality. |
| 16 | Quality Console | Operator web surface | legendstudy-lab (future) | [Quality boundary](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-worker-provider-l2.md) | — | operators | LIFECYCLE: NOT_STARTED | Authorization backend ready; web consumer not built. |
| 17 | Human Quality Judgment | Pilot Owner judgment exists; systematic persistence missing | Pilot closeout in legendstudy-app; no Production review store | [Pilot Owner review](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-model-bakeoff-l2-b.md) | Owner Pilot review | Quality Console | Systematic persistence: NOT_IMPLEMENTED | Original/strong-answer accepted PASS cases recorded. Design required before real-student Pilot, which is not yet authorized. |
| 18 | Academic Transcript | Official school/term/subject record | No canonical transcript foundation yet | [Academic roadmap](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/roadmap-academic-analytics.md) | — | Academic surface | FUTURE / SOURCE_GATED | PHASED after Essay/CSAT then January expansion; mock scores are not official transcripts. |
| 19 | Admission | Existing `universities` / `student_target_universities` | legendstudy-app existing foundation | [Admission strategy](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/longitudinal-learning-admissions-data-strategy.md) | APP personal targets | Admission Intelligence | Foundation exists; Intelligence FUTURE / SOURCE_GATED | Official admission facts/conversion/LS analysis/prediction future. Official formula ≠ LS model. |
| 20 | School Membership | Verified B2B membership not built; personal school preference exists | APP school/NEIS existing; no B2B membership foundation | [School/NEIS](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/day-7-neis.md) | APP personal school setting only | B2B school surface | Membership FUTURE | School preference ≠ organization membership; no B2B authorization from profile school. |
| 21 | Product Analytics | Design/data-readiness; domain facts remain authority | Existing domain facts in source repos | [Analytics P0](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/analytics-p0-launch-contract.md) | No full product analytics pipeline implemented | APP/LAB analytics consumers | PRIMARY_STATUS: DESIGNED | Analytics is a consumer, never canonical domain truth; no full pipeline live claim. |

## Key distinctions enforced by this registry

- **Quality Authorization** (#15) is `PRODUCTION_VERIFIED`, but **Quality Console** (#16) is `NOT_STARTED` and **Human Quality persistence** (#17) is `MISSING`. These are separate capabilities — do not merge their statuses.
- Full-answer operator live retrieval is `NOT_ASSESSABLE` (no legitimate evaluation case exists). `NOT_ASSESSABLE ≠ PASS`.
- **AI Processing** (#12): `PRODUCTION_AI: OFF`, `PRIMARY_MODEL: NOT_SELECTED`, GPT is a candidate only.
- **Academic Transcript / Admission Intelligence / verified School Membership** are future. Existing university/target and personal school/NEIS foundations remain reusable; they do not establish those future capabilities.
- **LAB mock** is not the canonical Production Essay consumer (#6).
- **Product Analytics** (#21) is a consumer, never a canonical source.

## Pinned evidence

Source material for this registry and the current-state snapshot (branch + full/short SHA; these are pinned references, not current pointers):

- **UWA-1B bottom-up audit** — `legendstudy-app`, branch `codex/essay-scaffolding-vnext` @ `2ebec8d`:
  - `wiki/unified-wiki-bottom-up-audit-v1.md`
  - `wiki/reviews/unified-wiki-audit-v1/documentation-inventory.md`
  - [Public UWA-1B source registry](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/reviews/unified-wiki-audit-v1/source-of-truth-draft.md)
- **UWA-1 top-down proposal** — `legendstudy-lab`, branch `claude/intelligence-school-architecture` @ `94d5d61` — **LOCAL_ONLY / REMOTE_UNAVAILABLE** (public HTTP404 at UWA-2C review):
  - `docs/architecture/UNIFIED_WIKI_IA_V1_PROPOSAL.md`
- **Quality authorization** — migration `20261001000100_quality_read_authorization` (APPLIED_TRACKED, Production verified 2026-10-01)
- **day_targets least-privilege** — migration `20260930000100_day_targets_least_privilege` (Production ACL effect verified; tracking separate/unregistered → tracking debt)

> Repository links: [`legendstudy-app`](https://github.com/LC3808/legendstudy-app) · [`legendstudy-lab`](https://github.com/LC3808/legendstudy-lab). Only publicly available refs are external evidence links. LAB `94d5d61` is local-only, not a retrievable GitHub source; do not substitute remote baseline silently. Public APP UWA-1B is the fallback. Branch tips may advance; preserve evidence SHA and verify the current task branch separately.

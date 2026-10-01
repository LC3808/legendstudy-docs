<!--
DOCUMENT_STATUS: CANONICAL
SCOPE: PROJECT
LAST_VERIFIED: 2026-10-01
VERIFICATION_BASIS: UWA-1B bottom-up audit 21-capability registry (legendstudy-app @ 2ebec8d, branch codex/essay-scaffolding-vnext); LSA-2 / LSA-2C Quality authorization closeout 2026-10-01
INSPECTED_REFS: legendstudy-app main @ d07671e (local, read-only); legendstudy-lab claude/intelligence-school-architecture @ 94d5d61 (local, read-only)
SUPERSEDES: —
SUPERSEDED_BY: —
-->

# SOURCE_OF_TRUTH — Capability registry

> One capability = **one** canonical source. Consumers (dashboards, DTOs, analytics, mocks) are never sources.
> **Link, don't copy** — this registry points to canonical records; it does not reproduce them.
> Status axes: [`AI_CONTEXT.md` §7](AI_CONTEXT.md#7-status-vocabulary). `NOT_ASSESSABLE ≠ PASS`. `FUTURE` capabilities must not be presented as existing.

**Pointer convention:** `CURRENT_STATUS` and this registry use **current canonical pointers** (repo + branch/path — sensitive to branch drift). Historical/pinned evidence uses **commit SHAs** (see [Pinned evidence](#pinned-evidence) and the [Daily](../90_HISTORY/DAILY/)).

| # | Capability | Canonical fact | Physical source | Canonical document / record | Current consumer | Future consumer | Status | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | Identity | `auth.users` | Supabase (ledger in `legendstudy-app`) | Supabase Auth + migration ledger | APP, LAB | future surfaces | `PRIMARY: PRODUCTION_VERIFIED` | Single identity across both surfaces |
| 2 | Profile | `profiles` | `legendstudy-app` | migration ledger | APP | LAB | `PRIMARY: PRODUCTION_APPLIED` | — |
| 3 | Content | study content / materials | `legendstudy-app` | migration ledger | APP | LAB | `PRIMARY: PRODUCTION_APPLIED` | — |
| 4 | D-Day | D-Day countdown | `legendstudy-app` | APP code | APP | — | `PRIMARY: PRODUCTION_APPLIED` | APP client feature |
| 5 | Study Timer | study timer | `legendstudy-app` | APP code | APP | — | `PRIMARY: IMPLEMENTED` | APP client feature |
| 6 | Mock Scoring | mock exam scoring | `legendstudy-app` | APP code / ledger | APP | — | `PRIMARY: IMPLEMENTED` | **LAB mock is NOT the canonical Production Essay consumer** |
| 7 | Essay Source | essay prompts / source material | `legendstudy-app` | essay schema (ledger) | Essay engine | LAB | `PRIMARY: PRODUCTION_APPLIED` · pre-launch | — |
| 8 | Essay Attempt | `essay_attempts` | `legendstudy-app` | essay schema (ledger) | Essay engine | LAB | `PRIMARY: PRODUCTION_APPLIED` · pre-launch | No real-student traffic yet |
| 9 | Essay Evaluation | `essay_evaluations` (+ dims / evidence) | `legendstudy-app` | essay schema (ledger) | Essay engine | Quality Console | `PRIMARY: PRODUCTION_APPLIED` · pre-launch | `HUMAN_QUALITY: NOT_RUN` |
| 10 | Essay Progress | `essay_improvement_progress` | `legendstudy-app` | essay schema (ledger) | Learning | LAB | `PRIMARY: PRODUCTION_APPLIED` | — |
| 11 | CORE / Sentence | CORE / sentence-level essay logic | `legendstudy-app` | essay engine | Essay engine | LAB | `PRIMARY: IMPLEMENTED` · pre-launch | — |
| 12 | AI Processing | essay AI processing | `legendstudy-app` | essay engine | (none in Prod) | APP, LAB | `PRIMARY: DESIGNED` · `PRODUCTION_AI: OFF` | `PRIMARY_MODEL: NOT_SELECTED`; GPT = PRIMARY_CANDIDATE only |
| 13 | Credit | `credit_accounts` / `grants` / `transactions` | `legendstudy-app` | migration ledger | Billing | LAB | `PRIMARY: PRODUCTION_APPLIED` | — |
| 14 | Billing Decision | `essay_billing_decisions` | `legendstudy-app` | migration ledger | Billing | LAB | `PRIMARY: PRODUCTION_APPLIED` | Commercial launch pre-launch |
| 15 | Quality Authorization | `quality_operators` + `ql_*` RPCs | `legendstudy-app` | migration `20261001000100` | authorization gateway | Quality Console | `PRIMARY: PRODUCTION_VERIFIED` · `MIGRATION: APPLIED_TRACKED` | operator ALLOW / non-operator DENY / anon DENY / forged DENY = PASS; full-answer live retrieval `HUMAN_QUALITY: NOT_ASSESSABLE` |
| 16 | Quality Console | operator web console | `legendstudy-lab` (future) | — (not built) | — | operators | `PRIMARY: NOT_STARTED` | Authorization backend ready; **web consumer NOT_STARTED** |
| 17 | Human Quality Judgment | human quality persistence | — (not built) | — | — | Quality Console | `PRIMARY: NOT_STARTED` · `HUMAN_QUALITY: NOT_APPLICABLE` yet | **MISSING** — design required before real-student Pilot |
| 18 | Academic Transcript | academic record | — (none yet) | — | — | Academic surface | `FUTURE` · source-gated | **No canonical foundation exists**; do not present as existing |
| 19 | Admission | admission intelligence | — (none yet) | — | — | Admission surface | `FUTURE` | Not implemented |
| 20 | School Membership | school / B2B membership | — (none yet) | — | — | school surface | `FUTURE` | Not implemented |
| 21 | Product Analytics | product analytics | consuming repos | — | APP, LAB (as consumers) | — | `PRIMARY: PARTIAL` | **Consumer, never a source** |

## Key distinctions enforced by this registry

- **Quality Authorization** (#15) is `PRODUCTION_VERIFIED`, but **Quality Console** (#16) is `NOT_STARTED` and **Human Quality persistence** (#17) is `MISSING`. These are separate capabilities — do not merge their statuses.
- Full-answer operator live retrieval is `NOT_ASSESSABLE` (no legitimate evaluation case exists). `NOT_ASSESSABLE ≠ PASS`.
- **AI Processing** (#12): `PRODUCTION_AI: OFF`, `PRIMARY_MODEL: NOT_SELECTED`, GPT is a candidate only.
- **Academic Transcript / Admission / School Membership** (#18–20) are `FUTURE` — no foundation is to be implied.
- **LAB mock** is not the canonical Production Essay consumer (#6).
- **Product Analytics** (#21) is a consumer, never a canonical source.

## Pinned evidence

Source material for this registry and the current-state snapshot (branch + full/short SHA; these are pinned references, not current pointers):

- **UWA-1B bottom-up audit** — `legendstudy-app`, branch `codex/essay-scaffolding-vnext` @ `2ebec8d`:
  - `wiki/unified-wiki-bottom-up-audit-v1.md`
  - `wiki/reviews/unified-wiki-audit-v1/documentation-inventory.md`
  - `wiki/reviews/unified-wiki-audit-v1/source-of-truth-draft.md`
- **UWA-1 top-down proposal** — `legendstudy-lab`, branch `claude/intelligence-school-architecture` @ `94d5d61`:
  - `docs/architecture/UNIFIED_WIKI_IA_V1_PROPOSAL.md`
- **Quality authorization** — migration `20261001000100_quality_read_authorization` (APPLIED_TRACKED, Production verified 2026-10-01)
- **day_targets least-privilege** — migration `20260930000100_day_targets_least_privilege` (Production ACL effect verified; tracking separate/unregistered → tracking debt)

> Repository links: [`legendstudy-app`](https://github.com/LC3808/legendstudy-app) · [`legendstudy-lab`](https://github.com/LC3808/legendstudy-lab). To reach a pinned file on GitHub, open the repo, switch to the listed branch (or commit), and navigate to the path. Branch tips may have advanced since these SHAs — the SHA is the evidence.

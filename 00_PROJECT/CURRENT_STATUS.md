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

## Oct11 Demand data integration — COMPLETE / LIVE

Recovered44 university/campus research rows and linked all42 existing Catalog IDs.
Source workbook itself marks every statistic officially unverified; no draft count
or rate is exposed as official. Separate Owner22 sequence now replaces the unknown
alphabetical fallback: Gachon→Cau→SKKU. Korea Sejong/Yonsei Mirae records remain
separate; no campus sums.42/49,30 preparation,22 focus and existing UI preserved.
Source provenance, verification state and current policy are recorded in APP631eb65.
Production source2f22fe6 / Pagesff21b878 succeeded2026-10-11T03:10:03.465758Z;
LAB closeout ad4ea67.117 WEB files/1041 PASS,1 optional skip; lint/types/build/audits
PASS. Live42/Owner22/tail2/search/filters/detail/mobile verified. Public AI HOLD and
config/allowlist unchanged; no DB/Provider/Credit operations. Rollback28e4c1ff/00106fb.
[Canonical source and release record](https://github.com/LC3808/legendstudy-app/blob/631eb65/wiki/essay-full-service-implementation-20261011.md#oct11-demand-data-integration--owner-policy-correction).

## Oct11 Catalog sorting correction — LIVE / statistics unavailable

Default service-priority groups preserve fixed22 ahead of additional/future cohorts;
Kangnam/Eulji last, all42/49 retained. Four sort options/search/filters verified live.
Verified2027 applicant/rate totals remain absent: unknowns sort alphabetically within
groups. Exact Gachon→Cau→SKKU numeric ranking is NOT claimed. Public AI HOLD;
Production flags/allowlist unchanged.1034 WEB PASS/1 optional skip, lint/types/build,
6 widths and local200% text simulation verified. Source00106fb, Pages28e4c1ff
success2026-10-11T03:01:04.376194Z; rollback997c9086/2fa8af7. APP Wiki e52c122,
LAB closeout e4ea542. No DB/Credit/Provider/device operations.
[Canonical policy and release limits](https://github.com/LC3808/legendstudy-app/blob/e52c122/wiki/essay-full-service-implementation-20261011.md#oct11-catalog-sorting-correction--live--statistics-unavailable).

## Oct11 university visual fidelity — UI DEPLOYED / logo1 pending

Owner target image applied to catalog/detail: official logo/region top row, colored
essay types, three icon status rows, black CTA and aligned search/filter controls.
41/42 official assets verified with source URL/date/hash; Sogang temporary monogram.
Original logo variants and source-backed labels take precedence over mockup details.
42/49 public,30 preparation,22 focus retained; no invented applicant/rate sorting.

Deployment LAB `2fa8af7f0794f9f0a2e13225f42b8ede9d6db8c9`, Pages
`997c9086-0147-4fd4-9cac-a7d56990e85c`, successful2026-10-11T02:47:15.580263Z.
Live domain and reference-versus-actual screenshots verified;360–1440px4/2/1 and
200% text-size simulation no overflow.1026 WEB +5 Python PASS,1 optional skip;
lint/types/build/audits PASS. Allowlist/env maps unchanged; no DB/Credit/Provider
transaction, no mobile debugging. General AI **HOLD**. Overall PARTIAL for one logo
only; UI implementation/deployment complete. No Owner action needed for this release.
APP `819cf13`, LAB docs `0a5a30a` closeout; rollback previous `437bd406`/`d39cb5b`.
[Canonical reference, logo policy and full evidence](https://github.com/LC3808/legendstudy-app/blob/819cf13/wiki/essay-full-service-implementation-20261011.md#oct11-university-catalog-visual-fidelity--ui-live--logo1-pending).

## Oct11 Catalog/detail UX final refinement — COMPLETE / PRODUCTION VERIFIED

Owner final policy: public42 universities/49 offerings, retained30 preparation,
fixed22 focus universities,GroupA4/B18.22+Seoul optionalview32; no verified applicant
counts/rates, so no fabricated8000 threshold or statistical ranking. Default name order.
Existing source IDs/campuses/year scopes,27 UUIDs/15 nulls and original dates retained.

Cards/detail now use structured admissions facts, distinct question/source sections,
Navy CTA, truthful disabled state, responsive4/2/1 grid. Existing52 Master records and
10 Manus research entries/27 official reference links reused. Unresolved source notes
are excluded from public facts; private originals and Evidence Packages preserved.

Production source LAB `d39cb5b29565ae48ccd31188402d347e72145388`, Pages
`437bd406-9afe-4a5c-80da-98d098802ac9` successful2026-10-11T02:10:07.770175Z.
Live catalog/search/filters/Konkuk/Eulji/mobile verified;6 widths and200% text simulation
checked. WEB1022 + Python5 PASS,1 optional skip; lint/types/build/boundary/audit PASS.
Exact env maps unchanged, no DB/Provider/Credit transaction. Public AI **HOLD**.
Rollback prior UI `9d802cb2-13c8-42b1-8909-6c2bcccde573`/`35fd8f9`.
APP `54cbfef` and LAB documentation `2fc7d15` closeout; no native UI/device work.

[Canonical full release evidence and verification limits](https://github.com/LC3808/legendstudy-app/blob/54cbfef388adf69b4ebf85c113ac2293d74f2be0/wiki/essay-full-service-implementation-20261011.md#oct11-catalogdetail-ux-final-refinement--complete).
[Named22 policy and preserved30 readiness matrix](https://github.com/LC3808/legendstudy-app/blob/54cbfef388adf69b4ebf85c113ac2293d74f2be0/wiki/roadmap-essay-lab.md#2026-10-11-owner-final-policy--22-focus--30-retained--42-public).
UI release needs no Owner action. Official Humanities runtime remains PARTIAL;
metadata/recovery migration approval and Wiki PR#1 remain unchanged separate gates.
Prior checkpoints below are historical and do not override this Owner22 policy.

## Prior Oct11 scope correction + Catalog release — historical

Latest Owner decision supersedes the historical10–15 Core size: **service preparation
minimum20, metropolitan minimum15, Pusan and Kyungpook mandatory; no upper cap**.
Existing Manus30-university inventory restored in full, not an invented top20 list.
Previous11 was10 deeply researched entries + Pusan, an incorrect planning reduction;
no11-entry code filter existed. All11 preserved and19 omitted candidates restored.
Current30 =28 unique metropolitan + Pusan/Kyungpook. Seoul offerings21 and
Gyeonggi/Incheon offerings11 overlap at4 universities. Gangnam/Eulji special-format
deferral and all42 Public Catalog universities/49 offerings remain intact.

[Canonical30-university A–H readiness matrix, sources/types and correction rationale](https://github.com/LC3808/legendstudy-app/blob/00d877f522ea472f88a3c47980b632c5fd36e8c6/wiki/roadmap-essay-lab.md#2026-10-11-owner-scope-correction--current-service-preparation-scope).
Available records did not contain the complete earlier expanded named approval list;
no retrospective approval is fabricated. Current Owner correction is authoritative.
A-stage scope is independent of official source, question, rubric, package, Worker,
Provider and public activation stages. Missing evidence never removes an A-stage row.
All30 have preserved official admissions links;10 detailed research records;5 scoped
inner-content/rubric findings;3 retained historical private packages. SKKU2025 alone
has the currently wired local3-question/9-criterion package; Q1 first runtime target,
Q2/Q3 graph-blocked. Actual official Humanities production Worker/Provider-ready0;
existing historical pilots and Math E2E are preserved, not relabelled as new proof.

**Production deployed** https://lab.legendstudy.com/essay-lab/ : Pages
`9d802cb2-13c8-42b1-8909-6c2bcccde573`, source
`35fd8f97aa791aeb2bdc855c8c06a3ab7a22f867`, success2026-10-11T01:30:33Z.
Live42 distinct universities/4 pages, search, region/type/admission-year filters,
campus-preserving common detail, official source hrefs and accurate question empty
states verified. Math19/economics0 follow verified public mappings, no inferred engine.
6 live widths360/375/390/768/1280/1440 no overflow (catalog/Pusan detail); separate
built-copy200% text simulation passes catalog/Kyungpook detail at all6 widths.
WEB1016 PASS/1 optional private-fixture skip; lint/types/boundary/audit/webpack build PASS.

Production environment/allowlist exactly unchanged before/after. Math flags false;
reviewed-runtime/recovery flags unset. Read-only postflight Math8 COMPLETED/1 FAILED,
general questions/evaluations0. No Provider/Credit/DB/native-device work. Anonymous
command-line admission request was Cloudflare403 before app code, not application E2E.
Default-closed behavior supported by unchanged configuration, UI and regression tests.
No migration needed: optional quality metadata accepts legacy RPC/cursor responses.
Pending metadata/recovery migrations and Wiki PR#1 remain unapproved/unmerged.
The earlier deployment hold is superseded only for this Owner-authorized migration-free
Catalog release. **General AI public activation HOLD.** Payment/Toss/IAP/Credit preserved.

Checkpoints: APP [00d877f](https://github.com/LC3808/legendstudy-app/commit/00d877f522ea472f88a3c47980b632c5fd36e8c6),
LAB [11421ab](https://github.com/LC3808/legendstudy-lab/commit/11421ab6ff719f61130107d7202eaed765316400)
(documentation closeout after deployed35fd8f9). Both pushed and exact remote SHA verified;
all repos remain `codex/essay-full-service-implementation`. No main merge or force push.
Rollback target Pagesa2e09fea/501d272, no DB rollback needed; not executed.
[Release evidence](https://github.com/LC3808/legendstudy-app/blob/00d877f522ea472f88a3c47980b632c5fd36e8c6/wiki/essay-full-service-implementation-20261011.md).

## Historical pre-release Oct11 runtime/catalog checkpoint — PARTIAL

Verified continuation checkpoints (not permanent HEAD definitions):
APP [8aee844](https://github.com/LC3808/legendstudy-app/commit/8aee844249dbbeac8b680d527771656f6405b45d),
LAB [3744171](https://github.com/LC3808/legendstudy-lab/commit/37441710d7061fe2bfc4a0bdea40dece6e17f9fd).
Both pushed; exact `git ls-remote` SHA matched. Existing working branches preserved.
[UI/runtime/catalog evidence](https://github.com/LC3808/legendstudy-app/blob/8aee844249dbbeac8b680d527771656f6405b45d/wiki/essay-full-service-implementation-20261011.md)
and [activation impact/rollback packet](https://github.com/LC3808/legendstudy-app/blob/8aee844249dbbeac8b680d527771656f6405b45d/supabase/verification/essay_service/runtime-integration-review.md).

Continuing `codex/essay-full-service-implementation` in APP/LAB/DOCS; no restart or
reimplementation of QA metadata/native UI. Source checkpoints at start were
APP9081ee8/LABa942aa7/DOCSc50d6d4, re-fetched and verified.

- Existing reviewed Python worker now has private WSGI admission/evaluate adapter
  and Pages HTTPS/service-binding transport. Rights/graph/provider/reviewer/journal
  preflight fails closed before reservations; durable finalize replay avoids repeats.
  Actual host dependency composition, deployment and Auth/PostgREST proof are pending.
- Sep28 APP f153c43/ebbc43c UX mapped to WEB:42:58, mobile tabs, approved result order,
  five-level status/star/details, direct rewrite, collapsed differentiated examples.
  Shared MY results compare only actual previous evaluation with identical pins.
  In-page official passages/figures and real Provider feedback quality remain pending.
- 42-university public read model from retained Manus V2,49 verified offerings after
  LSL27-052 quarantine;27 exact existing DB UUID matches/15 null. Source IDs and
  campus offerings retained, no duplicate DB catalog/WEB identity or CORE promotion.
  Five sample discovery list removed; search/region/type/admission-year/pagination
  and common details connected.2027 admissions never become invented2027 exam content.
- Read-only actual state: general questions/evaluations0; Math COMPLETED8/FAILED1.
  Anonymous PostgREST question read200/0, active verified exams200/21. Existing Math
  remains separate. Localhost Auth boundary intentionally closed, not bypassed.
- Cloudflare current Production501d272/deploymenta2e09fea; Math gatesfalse, general
  runtime/recovery unset, allowlist retained. Worker secret opaque; JWT validity not
  confirmed. No production deployment while paired QA metadata migration is pending.
- Python26 synthetic-transport tests PASS; full WEB1014 PASS +1 optional source skip,
  lint/typecheck/boundaries/Node22 build PASS. Catalog/detail6 widths no overflow;
  catalog/detail200% root-font simulation passes. Authenticated result visual E2E pending.
- No new Provider call, Credit transaction, DB apply, device QA, main merge or store
  release. General public HOLD. Existing QA metadata/recovery migrations and Wiki
  PR#1/#2 remain held; PR#3 remains stacked. Current APP Wiki records UI correspondence
  and `supabase/verification/essay_service/runtime-integration-review.md` gives
  activation prerequisites, impacts and rollback. Production and real E2E are NOT PASS.

## Essay full service — 2026-10-11 — PARTIAL

Owner's Oct10 full-service directive continues past V2 preview; safe implementation
committed and remote verified on separate `codex/essay-full-service-implementation`.
APP `9081ee85e849c05b884a9a64e0743ae0429598a0`; LAB `a942aa7f828979a1225b566bbb88ff57b194f9c5`.
Production apply/public activation are not authorized by this implementation result.

- Reused frozen SKKU2025 인문1:3 questions,9 numbered official dimensions,21 source
  excerpts/34 per-question mappings,1 package; exact source PDF/hash/locator preserved.
  Transactional isolated import, immutable conflicts rejected, publication false.
- General runtime Production catalog still0 questions/criteria/evidence (read-only
  verified). Previous8 Math evaluations/4 pairs are separate preserved data.
- Existing WEB catalog + authenticated Draft/CAS/Submit/result/history/direct rewrite
  connected. Private server worker admission default CLOSED; only confirmed failed,
  no-Credit-consumed requests get a new retry key. Same-key unknown retry preserved.
- Hosted worker service binding is not implemented/provisioned. Student passages/
  figures are not published; Q2/Q3 graph input is rejected by current text-worker
  adapter. No official-content real Provider E2E for any new type is claimed.
- Recovery gateway uses existing single-job RPC. Bounded batch migration prepared,
  backup/ACL/dependency/fingerprint/rollback reviewed; Cron not installed. No Ledger
  policy, RLS, Auth, Payment/Toss/IAP, QA metadata or existing output modification.
- Validation: isolated PG19 content +21 recovery assertions; WEB96 PASS/1 optional
  privateV2 bundle skip; lint/typecheck/boundary audit/Webpack export PASS. Guest
  browser360/390/768/1280 no overflow. No authenticated browser E2E/200% acceptance.
- Real Provider calls0; Production Credit transactions0; Production writes0;
  deployments0; native/device work0. HOLD and current allowlist remain unchanged.

The source-independent next work is hosted reviewed-worker integration with durable
checkpoint/reviewer boundaries. It cannot be enabled until verified provider policy
and source rights exist. Then controlled question import/delivery and private real
initial+reevaluation E2E across WEB/APP; each supported type needs real evidence.
[Complete evidence, preservation and next steps](../90_HISTORY/DAILY/2026-10-11.md).

Prior QA metadata was completed in APP4de2125/LABc977493; older sections below that
call its code missing are historical. Its Production migration and WikiPR#1 remain
approval-held. WikiPR#2 preserves overnightV2; this update is a separate stacked PR,
with no merge or rewrite of either existing PR.

## Quality traceability refinement — 2026-10-10 — PARTIAL

Owner-approved continuation on independent `codex/quality-traceability-refinement`.
Verified checkpoints: APP1e4d92fe0c8d1d3c905201014b5555239cabd1fa and
LAB501d272100b78032400bb82a8da0bfa963c10e31 pushed/remote verified; originals preserved.
Production Pages `a2e09fea-6472-407b-b0f9-036642a6ed69` SUCCESS with LAB501d272.
Actual operator browser confirmed4 independent answer processes containing8 existing
Math evaluations (4 initial/4 reevaluations), stored feedback/answer comparison,
empty human-review history and disabled save before required deliberate inputs.
360/390/768/1280/1440px console has no horizontal overflow. No production review write.

QA structure: existing canonical problem/profile/rubric groups and explicit prior
edges only. Missing parent/foreign leaf/cycle does not merge unrelated submissions.
Literal answer-line changes are separated from AI advice and rubric deltas; no
student satisfaction or causal learning effect is invented. Existing Human Review
history/submit contract reused (hash pinning,11 dimensions,conditional NA,idempotent
retry,server reviewer identity); new read-to-write privileges were NOT added.
Read-only SQL confirms8 evaluations/1 student/4 lineages/4 valid same-owner edges,
all8 source/hash-bound. RLS true/direct authenticated SELECT+INSERT false and anon
RPC execute false verified; role tests are mocks plus deployed ACL/definition audit.

**Metadata blocker / Owner approval required:** current qlm list/detail omit student
reference/lineage and exam/university projection. UI therefore states user unconfirmed
and problem information unlinked. It cannot provide complete pseudonymous user or
university/year grouping yet. Minimal proposal is an additive operator-only read
projection with stable purpose-scoped student pseudonym, lineage/root and verified
exam/university/year metadata; retain current DTO fields/cursors/auth/lifecycle/ACL,
no new table/grant/data rewrite. SQL migration must be separately approved before
implementation/application. Acceptance:1 pseudonym/4 independent roots/4 correct
pairs for these8 records, unrelated fixtures separate, nonoperators denied.
[Detailed read-contract proposal](https://github.com/LC3808/legendstudy-lab/blob/codex/quality-traceability-refinement/docs/PRODUCTION_ACTIVATION_2026-10-08.md#quality-traceability-refinement--2026-10-10).

WEB service audit: Math catalog/detail/answer/upload/extraction/evaluation/Credit/
reevaluation/History are IMPLEMENTED; prior actual E2E retained, not repeated. Current
active Math content is1 synthetic smoke problem (2026,review), NOT official exam
content. General published questions0/criteria0/evaluations0. Humanities canonical
contracts/provider foundation are PARTIAL; Econ mixed-component and Science schema/
adapter/persistence candidates are PARTIAL and need reviewed official content,
production binding and real acceptance. No new speculative engine was added.
Approved catalog read/evaluation permission separation and existing GATE maintained.
This round's backend tests are contracts/mocks, not fresh Provider E2E.

APP: school selection remains draft until Save; school/student identity save and
Profile invalidation correct stale retaker state, explicit grade save sets student,
nonstudent status clears grade and reloads GradePage state. No existing profiles
reset. MY 희망대학·학과 appears below LAB/above materials, reusing canonical targets,
intended_major and stored applications-v1 read; application labels shown only with
actual stored records, no interest-to-application inference. Existing management
screen reused. Shared top-up visual minimum28dp/padding4dp each side, text-sized
width, standard padded>=48dp touch area, navy/gray/IAP route retained;360dp100/200% PASS.
Existing onboarding status160ms/grade140ms animation and Reduce Motion work in tests;
school-selection animation was never implemented (prior Wiki explicitly deferred).
No new animation or artificial delay. APP behavior awaits future Owner device QA.

Validation: Flutter3.47.6 analyze0 issues; full1034 PASS/2 opt-in skips. WEB180 related
quality/runtime/provider-contract tests PASS; full lint/typecheck/static build PASS.
APP Wiki handoff PASS (11705 bytes current-status). Android/iOS builds not required.
Mobile debugging and physical tests: NOT PERFORMED — OWNER DIRECTIVE.
Production postcheck: Math evaluation count8/human review count0 unchanged, DB
runtime evaluations_enabled=false; CF3 flagsfalse, allowlist1; anonymous availability
allfalse. No new migration, privileges, Provider call, Credit transaction or public
activation. APP main/store untouched. PUBLIC_ACTIVATION: HOLD.
Encrypted CF Worker bindings are masked, so expiry was not freshly decoded; last
verified expiryOct16 18:57:41KST. Existing dedicated signer/encrypted-binding renewal
procedure is recorded; no global Auth rotation/service-role fallback.

## Admin quality and LAB preview — 2026-10-10 — COMPLETE

Continued the completed UX branch without rebuilding the earlier feature work.
LAB `bf424528ffe33eadba27eb3341fc90c423309bfd` is pushed and remotely verified.
Canonical Pages deployment `6d55736d-8954-4153-bed0-3f58dc8376e1` is SUCCESS
with this exact source SHA; production browser verification completed.

Empty-list cause: the existing Quality Console read `ql_list_cases` /
`ql_case_detail` from general `essay_evaluations` (0 records). Math stores its
results separately: 8 COMPLETED evaluations, comprising 4 initial and 4 linked
reevaluations. Existing `qlm_quality` list/detail/review_state RPCs already expose
these records; no separate Quality Case registration or DB migration is needed.
The new Math selector consumes the verified flat runtime DTO, leaving general
review behavior intact. Stored answers, rubric results, strengths, missing-feedback
states, initial/revised comparison and UNREVIEWED state were verified in the actual
production operator UI. Current Math human judgments: 0. Math UI is read-only;
existing review history is preserved. University/admission-year metadata is not in
this read projection and was not invented; no new review-write system was added.

Existing operator membership, verified JWT/account lifecycle checks and RLS remain.
Direct anon/authenticated SELECT on protected Math/review/operator tables is denied;
RPC execution still requires the existing operator gate. No permissions were expanded.
Back uses safe same-origin history or `/admin/` fallback; direct entry and return
from admin navigation were checked with the authenticated session preserved.
Both 내신 LAB and 수능 LAB now reuse one gray disabled 서비스 준비 중 button,
with no href or active hover transform, while keeping service descriptions.

Validation: 151 tests / 14 suites PASS; full ESLint, TypeScript and production
static build PASS. Actual console/detail and both preview routes at
360/390/768/1280/1440px have no horizontal overflow; console stacks on mobile and
retains two columns on desktop. Read-only UI checks confirmed both submitted answers,
filter and next-unreviewed navigation. No new Provider call, submission, review write,
Credit transaction, migration, RLS or Payment/Toss/IAP change. CF Math flags remain
false, DB evaluations_enabled=false and existing single-account allowlist retained.
Public activation HOLD. APP stays at verified UX closeout1bb8569; no APP main merge
or store submission. OWNER_ACTION_REQUIRED: NO for these two completed UI tasks.
Earlier OAuth/clean-install/orphan-recovery and Worker-expiry follow-ups remain separate.

## APP WEB UX cleanup — 2026-10-10

Owner-approved UI cleanup on `codex/app-web-ux-cleanup`, based on APP938b02b
and LABc652133 (latest remote refs verified before independent worktrees).
Login hero uses the existing section-title token, two centered lines; policy links
follow Guest at the SafeArea footer. Shared primary buttons are navy/white and
secondary buttons white/gray/navy; destructive and provider brand styles remain.
MY has three divided LAB rows and a compact canonical Credit balance/IAP top-up.
LAB home removes balance categories. Display labels are 논술 LAB / 내신 LAB / 수능 LAB;
settings removes only LAB 이용 안내. Submit buttons are 첨삭 진행 / 재첨삭, with
1 Credit + included same-answer reevaluation within14 days still visible before submit.
WEB guide removes the requested redundant purchase/promo copy; refund copy and
responsive wrapping are corrected without changing amounts, periods or legal rights.

Availability cause: production has0 published general essay_questions but1 ACTIVE
Math problem/set. The existing APP catalog and WEB entry depended on evaluation
availability, so switching evaluation OFF also hid approved Math questions.
Availability now adds `catalog.math` after the existing authenticated allowlist check,
separately from `types.math` (unchanged evaluation meaning). The APP reads this field
with a backward-compatible fallback. Approved accounts can browse while evaluation
is OFF; other/anonymous accounts cannot gain access. UI evaluation actions stay
disabled and the APP rechecks availability before any submission mutation. Existing
server Provider/Worker/DB GATE remains authoritative. No migration/RLS/Storage,
Auth/Profile/Payment/Toss/IAP verification/Ledger or evaluation contract redesign.
No Provider call, new submission, reevaluation or Credit debit was performed for UI QA.

Checks: Flutter3.47.6 analyze PASS (0 issues); full regression1019 PASS/2 opt-in skips;
latest focused31 PASS plus2 Android/iOS login render tests. New widget cases cover
360/375/430dp and100/200% text for hero/footer/compact Credit, plus CTA colors and
catalog-open/evaluation-closed behavior. WEB81 related tests PASS; final copy/gate
subset53 PASS; full ESLint, TypeScript and static production build PASS.
Android debug APK and iOS Simulator builds PASS with existing public configuration.
WEB pricing/refund six viewport widths360/375/390/768/1280/1440 at100% and200%
zoom have no horizontal overflow after the scoped minimum-width correction.
Widget render captures use test fonts: they establish geometry, not Korean visual QA.

Public activation remains HOLD; Math flags and DB evaluation switch stay OFF,
existing single-account allowlist retained. No APP main merge or store submission.
Prior actual Math E2E evidence and its unresolved OAuth/first-install/orphan recovery
and Worker-expiry follow-ups remain in the preceding section, outside this UI task.

APP implementation `d8a7e7f` and LAB `015f6e9` pushed on independent
`codex/app-web-ux-cleanup` branches, remote SHA verified. Production LAB source015f6e9
is canonical deploymentf03197c5-b040-481d-ae62-c77c7173ca88, SUCCESS.
Browser confirms deployed guide/refund/naming. Anonymous availability HTTP200
returns catalog.math=false and all types=false. CF three flags=false, DB
evaluations_enabled=false, existing allowlist1 unchanged.
Android SM-G950N visually confirms exact hero, navy Login and bottom legal links.
iOS Simulator MY confirms live credit_summary11 and divided LAB rows.
Fresh Owner re-login subsequently verified on Android: approved Math entry and actual
catalog/problem text display while evaluation remains OFF and submission disabled.
This closes the previous stale-session gap. APP UX closeout1bb8569 pushed/verified.
APP WEB UX CLEANUP: COMPLETE; no new Provider call or Credit transaction.

## Google Auth / Essay user flow — Oct10 — PARTIAL, real Math UI verified

APP `codex/essay-production-user-flow` (implementation56f1635, base6b003888)
and LAB branch of the same name (implementationb4df1936 + credit-refresh9c66fe2,
base8991b51) are pushed. Fetch latest refs before continuing; APP main untouched.
Native Math reuses existing catalog/input/learning/evaluation contracts and WEB
Provider gateway. No new AI engine, schema, Payment/Toss/IAP or Ledger policy.
Device-local introduction is separate from Auth, exits to login choice, supports
Guest without anonymous Auth, and preserves returning Profile/Home routing.
BrandGate paints official symbol and wordmark before routing, without fixed delay.

Validation: Flutter3.47.6 analyze PASS; **1019 tests PASS / 2 opt-in skips / 0 failures**;
Android debug APK, iOS Simulator and signed iPhone debug builds PASS. LAB16 relevant
UI tests, TypeScript, targeted lint and static build PASS. Mock tests are separate
from the following actual Production UI evidence:

- Android SM-G950N: missing Android OAuth client was the configuration cause.
  Owner registered the verified com.legendstudy.app/debug SHA-1 pair; real Google
  chooser → Supabase session → new-user Profile setup/Skip → Home → cold relaunch
  session/Profile persistence PASS. Review-account existing Profile goes straight
  Home. Release SHA unavailable because release signing material is absent.
- WEB, physical Android and physical iPhone each completed an actual Math initial
  evaluation and included reevaluation through their UI, using the same approved
  Auth UID, existing OpenAI/gpt-5.6-sol Provider and canonical backend.
  WEB evaluation prefixes2c6af9ee/4a35ac2b; iPhone0ffeb194/a9e65551;
  Android7432ad79/07512c6f. All six are COMPLETED; no mocked result insertion.
- Actual Credit4→3→2→1: three consume transactions total−3; three included
  reevaluations add no debit. One earlier Android requestce4d77dd timed out after
  entering PROCESSING. Existing math_recover_evaluation after lease expiry marked
  FAILED/TIMEOUT and released its reservation. Four reserves, three consumes,
  one release net reserved0. No direct ledger edits or duplicate charge.
  The original upstream/finalization failure cause remains undetermined; reliable
  automatic orphan recovery needs follow-up before public activation.
- WEB→Android History and APP→WEB History/report/comparison verified. Final WEB,
  Android and iPhone UI balances all1. WEB persistent header could become stale
  after another device spent Credit; route/focus/visibility canonical reload fixes
  this without changing billing. Existing Oct09 records remain intact.
- WEB actual PNG upload → private Storage → actual extraction → confirm four
  regions → evaluation-ready PASS. This uploaded attempt was not evaluated or
  charged; PDF upload and native image/voice submission are not claimed.
- Final post-essay cold relaunch on both physical devices restored Review Home
  directly, with no login/introduction/Profile setup repeat.
- Fresh isolated iOS Simulator Next/Start → login choice → Guest Home → relaunch
  Home PASS; Skip covered by unit tests. Both physical devices used update installs
  to preserve data. Physical clean-install/brand cold-start capture, populated
  school/grade/targets restoration and provider-switching matrix remain limited.
  iPhone Apple button present; Android absent. iPhone Google/Kakao/Apple and Android
  Kakao actual provider login acceptance remain pending Owner-assisted QA.

Production deployed source9c66fe2 via existing Pages procedure; canonical deployment
`92f79bf7-7bb5-4fce-867f-735a6b4b8b99` SUCCESS. Final MATH_ENABLED,
MATH_PROVIDER_CALLS_ENABLED and NEXT_PUBLIC_MATH_ENABLED=false; DB evaluations=false.
One existing approved UID remains allowlisted; no public widening. Public availability
HTTP200 reports all four types false; signed-in UI has no available evaluation entry.
**PUBLIC_ACTIVATION: HOLD.** Humanities/Econ-Business/Science actual Provider QA
not performed and remain unavailable. Worker JWT expiry2026-10-16 18:57:41 KST:
renew using existing dedicated authority before expiry. Migration010 not reapplied;
Target005 HOLD; worker bindings, RLS/private Storage and existing Math E2E preserved.
No APP main merge, Store submission or release-signing change.

Next: finish remaining physical OAuth/first-install/Profile matrix, investigate
orphan evaluation recovery and renew Worker credentials before a separately
approved public release. No further evaluation activation is authorized by this
closeout. Owner-assisted remaining device authentication QA is requested.


## Local APP integration — Oct10 — COMPLETE

APP `codex/local-app-integration` at `6b003888a8cebd58adf6d7e4e34f630328947688` is committed, pushed and
remote-SHA verified. Latest fetched base8e89dfc + essay-growthb0facde +
Claude loginc11fc84 integrated in that order, without conflicts or reimplementation.
Flutter3.47.6 analyze PASS; final **1015 tests PASS / 2 existing opt-in skips / 0 failures**;
Android debug APK and iOS simulator build PASS. Four obsolete baseline search-policy
assertions were reproduced on8e89dfc and corrected in tests only. Backend contracts,
Payment/Toss/Credit Ledger, IAP and existing native features are preserved.
No APP main merge, Store submission or Production deployment.

Next APP starting branch is `codex/local-app-integration` (fetch before use).
Android Google OAuth console/device acceptance, signed Splash/first-run and iPhone
physical QA remain separate. Device-once pre-login onboarding and full native Math
submission/rewrite remain existing gaps. APP voice absent; Math voice excluded from
first release, humanities/economics in scope, science gated. IAP sandbox/refund gates
remain. Owner actions concern subsequent OAuth/device/release acceptance, not this merge.
[Canonical integration evidence](https://github.com/LC3808/legendstudy-app/blob/6b003888a8cebd58adf6d7e4e34f630328947688/wiki/production-integration-2026-10-09.md#local-app-branch-integration--2026-10-10);
[closeout history](../90_HISTORY/DAILY/2026-10-09.md#local-app-branch-integration--2026-10-10).

## Essay voice feedback — Owner policy update — 2026-10-09

- Math voice feedback is **OUT OF SCOPE for the first release**. Hide the entire
  voice UI on Math evaluations. Do not develop additional Math TTS in this scope.
- Preserve Math text evaluations, strengths/weaknesses, reevaluation comparison
  and growth visualization unchanged. Existing evaluation data and Credit policy
  remain unchanged. No Provider, Ledger or DB migration changes.
- Humanities and economics/business voice feedback remain in development scope.
- Science voice feedback stays undecided/gated pending formula/symbol handling
  review. Unknown types do not opt into voice automatically.
- Future Math formula-to-speech conversion and high-quality voice may be reviewed
  as a separate update; they are not a first-release acceptance gap.

This supersedes the earlier general voice scope in the Evaluation & Growth UX
record. APP has no active Math TTS to remove. WEB explicitly allows voice only
for humanities_social/business_economics; existing Humanities consumer opts in.
The Math report path remains text-only, including first/revised evaluations.

## Latest Evaluation & Growth UX — Oct09 — PARTIAL

LAB main `f838911794f3a651645f089fc9f722ec41b92048` and APP isolated
`codex/essay-growth-ux` `b0facde42c5df7ee38969b72b89ed2228a2a4c48` add canonical
stored-result reports and pinned rubric comparison. Analysis no longer includes
Credit or usage metrics; joint History provides filters, separate usage counts and
Credit summary. Local-only WEB voice controls have no external Provider or Credit
cost. No Provider prompt, result rewrite, migration, financial or public-switch change.
Real approved-user Production browsing verifies both Math evaluations, three unchanged
dimensions and unchanged balance4/transaction digest. Android debug build PASS. Public activation remains HOLD.
APP native implementation is pushed, not store-released; physical-device/audio QA,
missing legacy feedback and historical metadata remain limitations.
[Full verification and deployment evidence](../90_HISTORY/DAILY/2026-10-09.md#evaluation-and-growth-ux--oct09).


## Latest Math final unblock — Oct09

Existing-key dedicated Worker JWT reissuance and real approved-user login resolved
both blockers without signing-key changes. Real typed Math Provider E2E PASS:
initial5→4 Credits, included rewrite/re-evaluation4→4, results/History persisted.
No mock, new runtime or schema changes. General release HOLD; seven-day worker
credentials expire2026-10-16 18:57:41 KST. Existing signer exposure remains a separate
incident; no rotation/revocation permitted without Owner approval. [Full evidence and final gate state](../90_HISTORY/DAILY/2026-10-09.md).


## Latest JWT safety authority — Oct09

Owner prohibits any Rotate/Revoke or standby deactivation without separate approval.
Do not execute the earlier ES256 key import/status-changing recovery sequence.
New ES256 key necessity is unproven; reuse the original dedicated-role JWT contract.
HS256 anon probe reaches DB42501 (authorization), so the prior blanket HS256-rejection
claim is not justified. Worker token validity remains unverified; Production worker
bindings absent, original math-test encrypted bindings present. See [Oct09 review](../90_HISTORY/DAILY/2026-10-09.md).
No keys/runtime/DB changed; Provider/Credit E2E still blocked.


## Latest Web Essay/Credit UX — Oct09

LAB `f9512aa` (main / codex/essay-credit-ux) refines navigation, analysis summary and
user-only Credit history. Admin/financial contracts unchanged; Math branch6bcd0a6
and its unresolved signer/E2E status remain separate. See the [Oct09 daily record](../90_HISTORY/DAILY/2026-10-09.md)
for exact deployment and verification evidence. No new Math activation is implied.


## Math Production configuration recovery — PARTIAL — Oct09 17:25 KST

LAB `codex/math-configuration-recovery` **9ae2715** adds only a safe configuration
script and recovered Owner instructions. Existing runtime/source `2cd74ed` unchanged.
Same-commit Production redeploy **feef6f7d-113e-4193-9f59-3288c6449610 SUCCESS**.
Nine non-secret Math bindings installed, correct Production origin/shared project,
all three activation flags=false; unrelated variables/secret bindings/Preview preserved.
No test allowlist blindly copied. All four availability types remain false.

**Current test JWT now Auth200**, approved allowlist identity confirmed, own Credit
and Math History reads200. Supersedes the prior expired-token blocker for this session.
Still no actual Provider/evaluation/debit/rewrite/re-evaluation this task.

Original secrets were not recovered: absent in mounted local configurations, Supabase
Edge secret names and Vault Math names; GitHub Actions Secrets403 means unknown.
Cloudflare encrypted math-test values cannot be exported. Oct05 evidence establishes
reuse/re-registration of a local JWT, not its initial signing recipe. Oct06 lifecycle
HS256 rejection after ES256 migration is recorded; current JWKS advertises ES256.
Do not infer Math token algorithm/expiry or copy lifecycle service-role architecture.
Math dedicated roles/own-RPC permission verified; cross-worker denial preserved.
Worker issuer/audience/TTL/signer location **NOT_FOUND**, no speculative JWT minting.

Exact Owner input steps in one block:
[recovery instructions](https://github.com/LC3808/legendstudy-lab/blob/9ae2715/docs/MATH_PRODUCTION_SECRET_RECOVERY.md).
Provider original key may be reused; only if truly lost obtain a new key in the existing
OpenAI project without revoking the test key. Existing worker JWT/signing source must
be recovered before claiming renewal instructions. No secrets in chat/log/Git.
No Payment/Toss/IAP, Ledger, Signup,005 or010 changes. No provider billing evidence,
no top-up request, no new test server. Actual Production E2E remains BLOCKED on secrets.

## Production integration — PARTIAL — 2026-10-09

APP **8e89dfc** `codex/production-integration` pushed/remote SHA verified. Merges latest
Claude Release/IAP + Codex Account/Data + existing runtime. LAB **2cd74ed** unchanged.
This supersedes older SDK-missing/server-absent/ingestion-blocked restore notes only;
it does not promote historical tests to current Production acceptance.

- **IMPLEMENTED:** native shared Essay/Math History read surface, account-scoped billing
  lifecycle/recovery, server Store account/SKU verification, active published-date search,
  all-active-year facets, immediate brand while Auth initializes, real policy links.
- **PRODUCTION_APPLIED / VERIFIED:** existing ingestion pipeline publishes missing posts
  1713–1719 (7 active items,78 active resources;11 advisory quarantine rows). Original
  titles/dates preserved. Public recent/2026 search HTTP200 returns actual new rows.
- IAP additive migration **20261009000200**, service-only `iap_post_verified_purchase`,
  canonical ledger reuse, transaction hash idempotency, UTC calendar3-month expiry.
  Edge `verify-iap-purchase` **v1 ACTIVE / verify_jwt=true**, anonymous401 actual.
  **IAP_ENABLED=false; actual grants0**. No real Store purchase or Provider evaluation.
- **TESTED:** Flutter3.47.6 analyze PASS, Android debug compile PASS (no Production
  dart-defines). Full integration984 PASS/2skip/7 outdated-policy fixture failures;
  all failed groups corrected/rerun PASS. Final related21, billing/lifetime18,
  search/discovery26 (overlapping; do not sum), Deno13, isolated canonical ledger
  role/account/replay/expiry/atomic rollback assertions PASS. These are not live E2E.
- **BLOCKED:** Math test session expired; main Pages lacks3 Math provider/worker
  secrets. math-test bindings cannot be exported. OpenAI/gpt-5.6-sol configured;
  current provider billing/balance/rate/cost unknown. Four Essay types stay GATED.
- **NOT COMPLETE:** full native Math upload/submission/rewrite flow, post-grant IAP
  refund/revocation reconciliation, real Store/sandbox acceptance and policy review,
  authenticated APP/Web History/Credit equality. iOS/Xcode and device QA unavailable.
- **PRESERVED:** Migration010 already applied/not rerun; Target005 HOLD; Payment/Toss,
  Signup policy, canonical Credit/RLS/private storage and LAB MY/Admin unchanged.
  Earlier Owner Admin grant acceptance preserved; no repeat grant test.

Detailed code/config/one-batch settings:
[APP integration](https://github.com/LC3808/legendstudy-app/blob/8e89dfce2ce3b2f2af4beca28f068c0bc668ce4e/wiki/production-integration-2026-10-09.md),
[IAP activation gates](https://github.com/LC3808/legendstudy-app/blob/8e89dfce2ce3b2f2af4beca28f068c0bc668ce4e/supabase/verification/iap/README.md).

## Credit history display — COMPLETE — 2026-10-09

LAB2cd74ed PRODUCTION_DEPLOYED (23d2723b);9 Production-asset fixture checks PASS.
Shared type/reason/actor formatter consumed by Admin member detail,
Credit overview, MY history and Essay dashboard. Raw reasons preserved; no inferred
compensation. Unknown types/actors have Korean fallbacks; actor UUID never displayed.
85 relevant tests + lint/typecheck/boundary/build PASS;9 Chromium fixture screens.
No migration, grant repetition, Ledger/balance/RLS/authorization/Payment change.
Owner separately confirmed real Admin grant and correct history/balance:
OWNER_VERIFIED; earlier zero-grant/unverified snapshot is historical.

## Admin manual Credit / Go-Live — PARTIAL — 2026-10-09

LAB343bd1e PRODUCTION_DEPLOYED (f150ba03, HTTP200); APP4c87231 (codebc91805) backend branch. New migration
20261009000100 PRODUCTION_APPLIED: Admin-only1–100 grant RPC reuses canonical
Ledger; reason/operator/target/key recorded, no new wallet/finance credential.
Postflight ACL/RLS PASS; actual anonymous grant denied401. Dialog/retry/refresh
implemented;864 tests + lint/typecheck/boundary/build and Chromium fixtures PASS.
Actual grant/history/balance OWNER_VERIFIED in the subsequent display directive.
Prior Codex zero-grant snapshot is historical; no repeated actual grant requested.
Test user Auth now403 session_not_found then expired bad_jwt, superseding earlier
Auth200 evidence. Secure ADMIN_TEST_ACCESS_TOKEN requirement saved in draft;
MATH_TEST_ACCESS_TOKEN needs a fresh approved active session. No SQL/terminal needed.

Go-Live BLOCKED: real Provider/Credit/reevaluation/History E2E0. Math-test bindings
present; primary LAB Math bindings absent. Billing/balance/cost unverified, not a
funding diagnosis. Published Essay questions/criteria0; Math set/profile1. All four
GATED; no public activation before real verification + Owner final approval.
010 unchanged;005 HOLD; Payment/Toss/IAP/Signup/Claude APP UI/Manus preserved.
See latest Daily + evidence2026-10-09-admin-grant-golive.json for acceptance details.

Prior integrated work: LAB6e09f38 Production MY LAB/report/print. APP418d957
(codef200cba) profile/onboarding/Google error mapping/sort fallback candidate remains
unmerged into Claude RC, Flutter unverified. Materials sync/full-catalog ordering,
Google device root cause and native Math History remain open; see earlier Daily.

## Essay activation resumed — PARTIAL — 2026-10-09

Supersedes earlier ACCESS_BLOCKED findings below: Supabase and Cloudflare management
now authenticate (HTTP200); database writes run as postgres. Verified original010
SHA256 cc911a6d7ad90c768b388e52520a7e72c40ebb885b4d862c0e07231b34e49734
applied with ledger in one transaction. Postflight owner/postgres, SECURITY DEFINER,
empty search_path, authenticated EXECUTE only (anon/service_role denied) PASS.
Function body MD5 3b9c9a83bdc8363b9fab5d99dc5ab410; DB evaluation switch remains false.

Existing math-test Pages has provider/worker bindings (OPENAI/gpt-5.6-sol), but their
operational validity is unverified. Main LAB has no Math provider/worker bindings.
Actual provider-backed E2E0: test token absent; math-test hostname blocked by current
cloud network policy. Network addition + scoped MATH_TEST_ACCESS_TOKEN requirement
saved as environment draft, requires publication/value. No auth bypass/token issuance.
LAB anonymous probes also received Cloudflare403/1010, not application-auth results.
Credit/rewrite/History live acceptance remains unverified; all four types GATED.
No code/provider/deployment/Payment/Toss/IAP/Signup/Target005/visual change.
See latest Daily and [postflight evidence](../90_HISTORY/EVIDENCE/2026-10-09-essay010-production-postflight.json).

## Essay runtime activation — PARTIAL — 2026-10-09

[Owner activation directive](../90_HISTORY/OWNER_DIRECTIVES/2026-10-09-essay-runtime-activation.md).
Primary goal (one real provider-backed authenticated evaluation): BLOCKED; completed0.
No type enabled. Previous foundation evidence below remains historical.

- APP2657952: canonical component persistence candidate, NOT_APPLIED and outside the
  migration ledger. One parent claim/finalizer/charge, transactional component extension,
  optional owner read. No core function/ACL/unique constraint/Credit policy replacement.
-38 real isolated PG17 checks PASS: non-superuser install + interrupted-install rollback,
  original function/ACL preservation, concurrent finalization/replay, initial1Credit,
  included rewrite0, forced result insert failure rolls back charge/parent completion,
  owner History, foreign/anonymous deny, failure/no consumption, pending-deletion deny,
  canonical essay erasure and account FK cascade. Synthetic content/provider only.
- LAB server bridge: student ownership before worker claim, frozen reviewed manifest,
  durable checkpoint before commit, replay without provider re-execution. Existing
  evaluation History identity reused; account-switch safety and legacy-null/error split.
  Quantitative feedback excludes unrevealed hints/generated solution/source internals.
- Science/mixed still require real reviewed content and a valid canonical1.3 parent output.
  No automatic scientific-verdict→level conversion; artifact/submission linkage remains
  unverified. No real science/mixed exam or rubric published.
-854 LAB tests + lint/typecheck/boundary/build PASS; Python70 PASS/29 private-fixture
  skips; Math canonical SQL↔Web16 PASS; unchanged010 projection10 PASS (stubbed lifecycle).
-010=BLOCKED_NO_PRIVILEGE. Earlier DB successes used Owner Mac Supabase CLI/SQL Editor;
  current cloud has no such credentials/path. Supabase management401; Cloudflare
  management400/code9106; both repos Actions workflows0. Git/Cloudflare Git deploy works.
- Existing reviewed Humanities manifests found, accepted full private packages absent.
  Last Owner count0 published questions/criteria is not a new privileged DB observation.
- Environment draft saved ONLY three existing-access requirements (no values):
  SUPABASE_ACCESS_TOKEN, CLOUDFLARE_API_TOKEN, MATH_TEST_ACCESS_TOKEN. Requires secure
  environment-settings review/save/publish; not current runtime access. No new credential
  issuance, Owner SQL/terminal/login request, provider call or Production DB write.
- All four GATED; Target005 HOLD; Payment/Toss/IAP/Signup/Credit policy untouched.
  Claude APP release85aefb1 and MY/Admin + Manus visual changes preserved.


Production closeout: LAB `1da1bb00575a417c1bc9ce1d3abcce7c02ef23f0`, Cloudflare
`e99edc89-742c-469b-9bc1-e8f0c6c370a4` SUCCESS. APP candidate
`26579523cea3c85f759bf7ec74af23765adc2586` branch pushed; no DB/worker apply.
Post-deploy browser4 checks at390/1440px: Essay/Math HTTP200, no page errors or evaluation
control. Availability200/all four false; anonymous upload409/extract409/evaluate503.
Production authentication/provider/private-storage E2E remain NOT_VERIFIED. No ordinary
user Credit consumed. Evidence: `90_HISTORY/EVIDENCE/2026-10-09-essay-activation.json`.

## Essay runtime completion follow-up — PARTIAL — 2026-10-09 KST

[Owner continuation](../90_HISTORY/OWNER_DIRECTIVES/2026-10-09-essay-runtime-completion.md).
APP `23d4555`, LAB `390ac39` on codex/essay-web-runtime. Preserves current LAB main
`c2b2f14` and all Claude MY/Admin + Manus visual changes. Prior activation evidence below
remains historical; this follow-up is NOT a four-type live launch.

- Math: INVALIDATED/unavailable result admission fixed;16 isolated PG17→LAB wire checks
  verify initial1Credit/included0,14-day boundary,replay,owner denial,history,failure.
  Actual SQL+TypeScript, synthetic provider: NOT Production authenticated E2E.
- Humanities: allowlisted transport/released-failure retry; reviewed job-scoped worker
  reuses current v3 prompt, frozen snapshots, signed review and checkpoint replay.
  No deployed worker/provider/real content connection established.
- Mixed: one-parent orchestration/result contract with reviewed capability coverage,
  bounded components and partial/unknown failure handling tested. Canonical parent
  persistence mapping remains absent; single-credit Production claim NOT verified.
- Science: reviewed rubric/evidence validator and private artifact candidate adapter
  tested. Real approved rubric, persistent runtime/history and provider E2E absent.
-848 LAB tests PASS; lint/typecheck/boundary/build PASS. Python70 PASS/29 SKIPPED
  (private evidence fixtures unavailable);16 SQL/Web checks PASS. No paid provider call.
- All types GATED.010 still BLOCKED/unapplied; unchanged candidate SHA256
  `cc911a6d7ad90c768b388e52520a7e72c40ebb885b4d862c0e07231b34e49734`.
  Cloud environment has Git deploy but no DB/management/worker/provider credential
  or safe authenticated test session. No Owner SQL/terminal/login request made.
- Remaining engineering: mixed/science canonical persistence; reviewed real content
  and existing provider-bound claim/hosting integration. Interfaces alone are not COMPLETE.
- Signup frozen; Target005 HELD; Payment/Toss/IAP/Credit architecture/visual unchanged.


Production follow-up: LAB `390ac3951b521a1dc58eff0404e868851c6a8aff`, Cloudflare
`f4811c21-b30d-4655-9a13-5aa824f7f394` SUCCESS. Post-deploy anonymous browser:
`/essay-lab/` and `/math/`,390/1440px,4 checks PASS (HTTP200,no page errors,no evaluation
controls). Availability200/all four false; anonymous upload409/extract409/evaluate503.
No authenticated evaluation, provider execution or Production Credit mutation.
Automatic review initially rejected main push for insufficient deployment authorization;
re-review accepted the uploaded Owner directive §18 explicitly authorizing verified
non-destructive runtime deployment. No outstanding approval block and no workaround.

OWNER_ACTION_REQUIRED (consolidated, no manual operator instructions): existing
privileged deployment/provider bindings and an approved authenticated test context must
be made accessible before010 and actual E2E can proceed; actual reviewed content/reviewer
packages are also absent. Mixed/science persistence remains implementation work, not
something Owner approval alone resolves. No credential generation requested/performed.

## Essay Web runtime activation — PARTIAL — 2026-10-08

[Owner authority / unattended override](../90_HISTORY/OWNER_DIRECTIVES/2026-10-08-essay-web-runtime-activation.md).
APP candidate361880b; LAB implementationea144bc (preserves Manuse251c7c).
Existing Math consumer/private upload/extraction/evaluation/learning restored from
34bfab5; authenticated server availability fails closed. Humanities canonical RPC
adapter is fixture-tested, not a live worker/editor integration. New010 read projection
LOCAL_VERIFIED only; no DB migration applied. No privileged Supabase/Cloudflare binding
exists in the current cloud environment, including config metadata. Git deployment is
separate from DB/provider activation. No Owner operator request under away override.

- Production inventory: published Humanities questions0,criteria0; Math set/problem/
  leaf/profile1 each, bucket private20MiB. Counts do not establish reviewed content.
- Humanities blocked by content/worker; mixed blocked by reviewed capability binding
  and atomic orchestration; science blocked by evaluator/rubric/fixtures. Math remains
  narrowly allowlisted and unavailable until trusted config/DB/content admission passes.
-824 LAB tests, lint/typecheck/boundary/build PASS;31 Python contract/worker tests;
  existing PG17 Math/learning/legacy/install regressions PASS;010 projection10 checks
  with a stubbed lifecycle fixture PASS. These are NOT four successful live E2Es.
- Local browser4 route/viewport checks PASS, anonymous evaluation controls absent.
  Provider calls0; no Credit, payment, private artifact or student data mutation.
-005 HOLD; Signup frozen; MY/Admin frontend, Payment/Toss/IAP and Manus visuals unchanged.

Production release: LAB `ea144bc0c19d64c916fb4485b8bd7b175a465154`, Cloudflare
`2e7b5c14-953b-497c-b873-88567c521442` SUCCESS. Actual anonymous `/essay-lab/` and
`/math/` at390/1440px:4 browser checks PASS, HTTP200/no page errors/no evaluation
controls. Availability200/all types false; upload/extract409/evaluate503 with no
credentials, answers or artifacts. Authenticated evaluation/Credit E2E NOT_VERIFIED.

## Admin Member Management / Essay Mixed-mode — FOUNDATION COMPLETE — 2026-10-08

[Owner execution authority](../90_HISTORY/OWNER_DIRECTIVES/2026-10-08-admin-members-essay-foundation.md)
permits proceeding despite predecessor authenticated acceptance pending. Do not
rebuild006 Application+Events/007 Study/008 Student360.005 remains HELD.

- Track A IMPLEMENTED/LOCAL_VERIFIED: APP9b8f75a, LABe7810c2, both on
  codex/admin-members-essay-foundation.009 adds admin_member_list,25/page max50,
  source total/filtered total, literal email/name + exact UUID search, lifecycle/
  academic status/grade/school filters, deterministic newest/oldest. Existing
  Member Detail/Student360 reused. Credit remains in detail; recent activity omitted.
- School names: existing NEIS proxy verified J10/7530932 진접고등학교,
  R10/8750182 순심고등학교. Small private2-entry display cache joined by code;
  list external NEIS calls0, missing-vs-unresolved distinct. No profile/master rewrite.
-009 PRODUCTION_APPLIED: Owner returned20261008000900/admin_member_directory. Exact preparation package,
 13395bytes SHA256cc2a6f4a3e0b7f7f1624b7220e9070d3b675d5bf0ff62a2693b842c3ecd0d2cd.
  No005, no replay006–008, no Essay migration. Actual anonymous admin_member_list returns401/42501. Owner postflight PASS: RPC MD5 4ad4a5be429a5b43788b23502ca863e7, postgres/SECDEF/empty search_path, anonymous execute denied; cache RLS/direct CRUD denial and both school names match. LAB e7810c2 Production deployment9e2dc6f2-af55-4210-9953-e64a092ae11a; live member route/new RPC bundle/anonymous login gate verified. Main bfc20c0 adds Owner-requested result ordinals; concurrent brand0847170 preserved. Ordinal Production deployment0494a6f8-c82d-40af-8722-f59f2f519d43 succeeded.
- Track B ANALYZED + OFFLINE FOUNDATION IMPLEMENTED: [gap/mapping/contract](https://github.com/LC3808/legendstudy-app/blob/9b8f75a89877c2b284fbf6e22c0869fed4d248d0/wiki/essay-mixed-mode-foundation.md).
  Current Production50 active universities/21 active exams,0 registered questions/
  criteria within those21. All21 mapped conservatively:8 humanities_social label
  proposals,7 math label proposals,6 UNRESOLVED; no classification backfill.
  Math C/D/E+Storage applied,5 function hashes match, math-private public=false.
  Runtime readiness/Math content counts/provider E2E not inferred from those facts.
- Owner four service categories adopted: humanities_social/business_economics/math/
  science, distinct from question requirements/evaluator bindings. Existing Math
  mixed input/ordered artifacts and Humanities learning/Credit reused conceptually.
  Typed offline planner rejects spoofing/context/rubric mismatch; no runtime/API
  integration or new science evaluator. No AI quality completion claim.
- Tests: LAB539, lint/typecheck/boundary/build PASS; browser8 role/viewport cases
  with page/detail/Student360 and0 list NEIS calls PASS. SQL directory tests and
  PG17 NOSUPERUSER exact activation/grants/denial/collision/rollback PASS. Essay8
  contract tests PASS; existing Math learning/C-D, legacy Humanities102 and14
  installation checks PASS. Flutter NOT_RUN (pinned SDK unavailable); APP UI unchanged.

Full details: [Admin contract](https://github.com/LC3808/legendstudy-app/blob/9b8f75a89877c2b284fbf6e22c0869fed4d248d0/wiki/admin-member-directory.md).
Payment/Toss/Signup/IAP/Manus/Claude APP UI unchanged. Owner authenticated directory acceptance: all requested checks PASS. Follow-up ordinals implemented/local verified in bfc20c0. Larger Essay runtime/content QA requires
separate approval; stop after foundation closeout.

## Shared MY foundation — PARTIAL — 2026-10-08

Signup predecessor stays CLOSED separately; no Credit worker/ledger changes.
School flow LAB `3c432cd` is PRODUCTION_DEPLOYED (Cloudflare `a0ce8879-f129-4e9c-977b-d60b9e22522c`) and OWNER_VERIFIED: school auto-student, optional grade, grade save, reload all “잘됨”.
APP candidate `35ab994eb9702124da5aa1697d32e14817fd760c` on `codex/my-data-student360`, based on Store RC `ca60d73`; LAB implementation `6434fe1`, reconciled with latest Manus `13fc77c` as `1a215d4` on the same task branch. Owner has now confirmed Production ledger entries006/007/008 (Application/Study/Student360); DB activation is PRODUCTION_APPLIED. Owner postflight8 function hashes/grants and2 table RLS/direct-DML denial match; authenticated Production runtime remains pending.

- Target005: one-step university/division, existing year/free text preserved, normalized exact duplicate blocked, same university different division SQL tests PASS. Existing Production unique replacement is HELD under Owner §74. APP source uses row-ID select/delete and no composite ON CONFLICT; Flutter runtime regression NOT_RUN because pinned3.47.6 SDK is unavailable and official download host blocked. Environment draft adds only storage.googleapis.com while preserving existing rules; requires Publish.
- Foundation006–008: additive Application + immutable events/supersession/revision/idempotency/own RLS; same profile/Auth deletion cascade (AUTH phase); no deletion worker change. Shared APP completed Study interval union -> KST today/Monday week/30d/7d; no Web timer DB. Admin Student360 uses existing allowlist, rejects quality-only, supplies shared Study/Application/Essay facts without answer bodies. No invented academic performance or period entitlement.
- Owner read-only preflight: no005+ ledger rows; new schema/tables absent; existing allowed/lock/Admin/deletion function hashes, owners and empty search_path match tested package. Payment body hashes also match source; no Payment mutation.
- Tests: LAB537 PASS, lint/typecheck/boundary/static build PASS; synthetic browser1440/390 one-step Target/Application create/outcome/correction/reload and Study totals PASS. Four PGlite suites plus PostgreSQL17 NOSUPERUSER migration owner/eight-way concurrent idempotency/authorization/Auth cascade/exact activation ledger/replay guard PASS. These do not replace authenticated Production checks.
- Owner applied package006–008:42,673 bytes; SHA256 `bc6a888fbef4bc8c6a069fdc900191a7942f023e72cfe44b7fac376e9a604ee6`. Returned all three ledger versions/names. Do not reapply. Read-only postflight PASS; Target005 remains excluded.
- Independent LAB release candidate `507ed7b` on `codex/my-foundation-activation` retains existing Target behavior until §74/APP checks clear. Preserves latest Manus typography main `857ec9c`. Merged release lint/typecheck/536 tests/boundary/static build PASS; Application/Study browser fixture1440/390 PASS. Now LAB main507ed7b, Cloudflare60564c64-3fe4-49fe-8075-d117f4f24865 SUCCESS; live domain serves new adapters. Actual anonymous read RPC denial401/42501 PASS.

Contracts: [APP shared foundation](https://github.com/LC3808/legendstudy-app/blob/35ab994eb9702124da5aa1697d32e14817fd760c/wiki/my-shared-foundation.md), [LAB MY/Student360](https://github.com/LC3808/legendstudy-lab/blob/6434fe1dea48092d3ae4822b7feaa127a6fb71cb/docs/MY_STUDENT_360_CONTRACT.md).
Admissions Catalog/School Admin/cohort insight/report engine remain BACKLOG. Future division_id preserves year-specific free-text facts. Essay growth remains same-context1–5 only; operator reevaluations excluded.

Read-only audit70B: alleged webhook caller path is not used by canonical Cloudflare; buyer and existing finance contexts are separate. Provider HTTP vs deletion request atomicity gap is CONFIRMED in source; LIVE final grant fence prevents posting, provider success may require refund reconciliation. No live race test, Payment/deletion fix or new finance credential was performed. [Scoped audit](https://github.com/LC3808/legendstudy-lab/blob/6434fe1dea48092d3ae4822b7feaa127a6fb71cb/docs/MY_FOUNDATION_PAYMENT_READONLY_AUDIT.md).
Manus public/MY visuals (including latest typography857ec9c), Payment/Toss and IAP preserved. APP docs-only closeout136e7dc; implementation/package35ab994 unchanged. Continue from Owner authenticated acceptance and Target §74 gate, not historical signup blockers.



## Signup Credit closeout — OWNER_VERIFIED — 2026-10-08

Predecessor task is CLOSED for the affected verified account: canonical grant1,
Credit3, delivery relation, no expiry, and Owner confirms MY plus Essay Header
display. No manual Credit issuance. Missing benefit key and nested helper EXECUTE
were corrected; migration20261008000400 recorded, temporary bridge absent, Workerv22.
Hosted duplicate stress and all social-provider signup E2E were not performed;
local canonical duplicate/concurrency tests PASS. This limited runtime closeout
is separate from the newly authorized MY Data / Application / Study Time /
Student360 work. Existing signup/worker authority is frozen for that next task.


## Signup bonus Production ledger verified — 2026-10-08

Owner read-only result for the affected verified test account confirms exactly1
signup_bonus grant, balance3, benefit_delivery linked to that signup grant, and0
signup grants with expiry. Missing ACCOUNT_BENEFIT_KEYS was provisioned with explicit
Owner approval; missing nested postgres EXECUTE was fixed by recorded migration
20261008000400. Temporary role bridge absent. Existing worker recovery now delivered
through canonical authority; no manual grant or replacement wallet. Diagnostic
Worker remains v22. This verifies actual Production delivery/ledger for one account,
not both queued accounts, a new complete signup E2E, or a hosted duplicate-attempt
test. Local duplicate/concurrency checks passed. MY and Essay Header display still
await Owner confirmation; no authenticated browser credit_summary response supplied
in this final check. No Payment/Toss or Public/MY visual change.


## Signup grant ACL correction — 2026-10-08

**Root cause confirmed; Production correction PENDING.** Owner diagnostic Worker v22
returns CLAIM_HTTP_403_42501 for both pending accounts. Catalog confirms the postgres
definer cannot execute essay_executor-owned credit_post_grant; other helper/schema
permissions pass. APP candidate [3b366ba](https://github.com/LC3808/legendstudy-app/commit/3b366baba40aac8d2a13e1afc70894dd22e18831)
adds migration20261008000400, EXECUTE for postgres on that exact helper only, using
the prior temporary SET bridge with exact membership restoration. No direct
service_role/browser grant, helper body/schema change or manual Credit mutation.
Real local PG17 NOSUPERUSER reproduces the error;118 lifecycle/ACL checks PASS,
including canonical3/no expiry, duplicate/concurrent protection, injected failure
rollback and atomic migration ledger recording. Earlier runtime harness restored
superuser after migration checks and masked the missing nested call permission;
the new regression exercises the production-like owner during benefit calls.
Owner SQL Editor apply bundle is ready, not applied by cloud. Actual grant and
MY/Essay credit summary cross-surface verification remain pending.


## Signup benefit runtime — 2026-10-08 diagnostic candidate

**PARTIAL.** Owner explicitly approved and registered the first benefit HMAC key
(v1); prior missing-secret blocker is resolved. Values were never shared. There
were zero prior marker versions/deliveries and2 eligible candidates; subsequent
read still showed no credit account/grant. Canonical grant policy is unchanged.
Cron targets the expected /dispatch; pg_net reports200 processed0/retryable0. These
are deletion counters, not benefit results. Gateway/three RPC ACLs and reviewed
deployed source hashes checked; hidden individual benefit failure remains unlocated.
APP candidate [ec2b560](https://github.com/LC3808/legendstudy-app/commit/ec2b560096f9f2716804d0585e875577111c98c9)
adds only sanitized aggregate AUTH/MARKERS/CLAIM diagnostics.66 Deno tests/typecheck
and production-file lint PASS. Owner deployment helper retains current files/JWT
gate and stops on concurrent changes. **Diagnostic Production deployment PENDING;
actual signup3 NOT_VERIFIED.** No manual grants, new finance credentials, DB/SQL,
Payment/Toss, deletion architecture or Public/MY visual changes.

## Signup worker configuration blocker — 2026-10-08

Owner targeted live read: verified/profile/service allowed/eligible=true and
in both next20/100 candidates; credit account/delivery/grant absent, posted0.
Thus shared profile initialization is now confirmed for this test user, but
MY edit/persistence acceptance remains a separate Owner check.
Owner Supabase secret-name inventory: ACCOUNT_BENEFIT_KEYS NOT_LISTED;
ACCOUNT_LIFECYCLE_ENABLED and ACCOUNT_WORKER_JWT PRESENT (values not inspected).
Canonical worker defaults missing benefit keys to empty map; markers() rejects
empty map and scheduled benefit catches failure, so heartbeat can remain healthy
with no grant. This is a concrete missing prerequisite, not Credit ledger redesign.
No secret generated/rotated, restore/finance credential reuse, manual credit grant,
lifecycle toggle or DB mutation performed. Next read existing benefit key versions/
marker counts and bounded pending queue to distinguish lost historical key from
first provisioning. No marker values or credentials requested. If no existing
authorized key can be restored, new secret provisioning requires Owner authorization
under the explicit stop condition. Other completed Admin/School work remains intact.

## School aggregate Production activation — 2026-10-08

Owner applied20261008000300 and returned ledger/owner/ACL plus both added-field
checks true. DB function response extended; no table/column/RLS or profile mutation.
LAB main `63abe32` includes school-display candidate and preserves Manus MY
commit013a1ef. Integrated519 tests/lint/typecheck/boundary/static build PASS.
Cloudflare `e0635cd3-d1a8-427a-b1ab-c12ec0d09ea1` SUCCESS; actual Production
Admin JS contains school-name aggregate and unset labels. Authenticated actual
Dashboard school-label spot-check remains Owner-side; no session inferred from assets.
School-name source remains NEIS exact office/school pair, max20 group lookups/cache,
no per-user request; missing name does not display numeric code as label.

Owner reports signup Credit still0 after4de6dfa. Do NOT mark signup verified.
Next targeted read checks profile, service gate, eligibility, worker20/100 candidate
inclusion, credit account, delivery, grant and transactions. Heartbeat alone is
insufficient; no manual grant, worker activation or finance-key change performed.
New-user MY full runtime checklist remains unanswered separately.

## Admin school display / MY contract candidate — 2026-10-08

IN_PROGRESS / NOT_PRODUCTION_DEPLOYED. LAB candidate `0c2b266` on
`codex/admin-school-display`, APP backend `757f8e9` on existing activation branch.
20261008000300 additive dashboard response: top20 office+school identities and
unset count, old field untouched. Exact previous function hash/OID/owner/ACL gates.
Owner live migration-ledger/collision check still required before apply.
Names use existing NEIS proxy per aggregate identity (max20, concurrency4, bounded
public-name cache); no per-user request, new master/profile write/role or MY visual.
Known/unresolved/unset distinguished, counts unchanged, numeric codes hidden in
Dashboard labels. Existing member detail school-name resolver preserved.
Local SQL402+54, LAB513 tests/lint/typecheck/boundary/build and9role-route browser
checks PASS, with aggregate-name/count/unknown/unset checks. These use local SQL
and intercepted browser fixtures, not hosted authorization/DB-apply evidence.

Manus/Student360 contract: profiles display_name, Auth email, school pair/status/grade,
major/interested university/division, canonical Credit states, period entitlementnull.
Essay attempt count unavailable until actual attempts fetched; no evaluation-count
substitution. Conservative 1–5 comparison gate requires full matching criterion/version/
question/regime/evidence context and distinct ordered attempts; no trend shipped.
[Contract](https://github.com/LC3808/legendstudy-lab/blob/codex/admin-school-display/docs/MY_STUDENT_360_CONTRACT.md).
New-web-account MY runtime and +3 actual delivery after4de6dfa still awaiting Owner.
No manual bonus, finance write, application schema or Student360 page created.

## Shared APP/Web profile initialization gap — 2026-10-08

LAB main `4de6dfa`; Cloudflare `025826b1-3966-4760-ada5-2c470fb76179`
SUCCESS, actual Production JS contains school editor. Lint/typecheck/507 tests/
boundary/build PASS; browser32 fixture scenarios PASS including missing-profile
initialization, goals and school/status writes, account isolation. Actual new-user
profile/bonus verification is pending Owner re-entry; no Production success inferred.

Owner test confirmed email verified + eligible but profiles row absent, no benefit
delivery and zero signup grants. Earlier MY persistence PASS was for an existing
profile and did not cover brand-new Web-only accounts. Shared DB/RLS remains the
authority; no separate Web profile, school table or wallet is introduced.
LAB now creates a missing authenticated non-recovery user's own profiles row with
only id and ON CONFLICT DO NOTHING; existing and concurrently-created APP data
are preserved. MY writes retry initialization. This unblocks existing FK/profile
updates and existing benefit-worker candidate discovery; not a manual Credit grant.
Actual +3 delivery remains pending Owner verification.
School/grade/status edits reuse existing APP NEIS and student/retaker/other contract.
No invented school-admin/parent authorization role. Confirmation return uses an
existing login URL, shows completion/continue, and original signup tab reacts to
cross-tab login. No window-close workaround or unverified bonus-success notice.
MY visual redesign belongs to Manus. Application entry remains separate backlog.
No Production SQL/migration, payment/finance or account-deletion logic changes.

## MY actual runtime and saved-goal follow-up — 2026-10-08

Owner confirmed five Production MY checks PASS: Credit read, target/major/division
save, reload, logout/login persistence and account switch isolation. Owner also
confirmed general/review Admin/QL access denied. These supersede earlier pending
MY and general-user denial notes. Admin reads were already Owner-confirmed.

Cloudflare deployment `057b8fcd-1690-4625-b3fe-77f5c872d319` SUCCESS;
actual /account/ JS contains updated school/status and saved-goal UI.
LAB main `dd1d6a1` implements subsequent Owner-requested MY changes: APP canonical
profiles school NEIS pair/academic status/grade read, school-name lookup, saved
major/target summaries with Change/Delete and edit-only forms, separate university
addition area, PC three-column/mobile one-column target cards. No DB mutation or
Payment/Public shell visual change. MY-specific CSS explicitly requested by Owner.
Lint/typecheck/502 tests/boundary/static build PASS; browser32 responsive scenarios
at1440/1280/390/360 and1×/2× include school/status, 3/1columns, save transitions,
ledger/history, logout isolation. Browser tests use synthetic intercepted data,
distinct from Owner's preceding actual Production persistence checks.

Overall activation remains PARTIAL: signup actual confirmed +3/retry E2E and
worker runtime still need verification. Finance writes remain blocked by unverified
existing finance credential/audit-safe reuse; no test grant or refund performed.


## Owner-assisted activation — 2026-10-08 (in progress)

School member-detail change LAB main `afc4f79`: Cloudflare deployment
`71393dd3-4a4d-44c2-b103-12d58d82c371` SUCCESS; live member route HTTP200
and deployed JS contains school-name lookup. Existing public NEIS exact-pair
request HTTP200 returned the matching school name. Lint/typecheck/500 tests/
boundary/static build PASS (fresh build after sandbox Turbopack cache failure).
Actual Admin member school-name rendering still awaits Owner spot-check.
Post-activation real anonymous API calls admin_operator/admin_dashboard/
is_quality_operator/credit_summary each HTTP401 code42501, confirming denial.
General authenticated user denial and MY/signup E2E still pending.


Six migrations Production-applied by Owner, ledger results returned: signup
20261007150000, MY20261008000200, Admin20261007000100/200/400 +20261008000100.
All17 Admin function bodies match source including corrective; anon execute
denied; internal helpers denied to client roles; Inquiry RLS enabled/direct
policies absent by design. Signup cutoff/owner/ACL preserved; major column
UPDATE=true, table UPDATE=false, owner/lifecycle RLS retained. Owner reports
actual admin session Header, Dashboard, Members/review Credit/Ledger, Payment
reads, Ops, Inquiries and /ql all working. This is read verification only.
Normal-user/anonymous browser denial, MY actual writes/isolation, signup actual
E2E remain pending. Finance grant/refund/cancel stay disabled; no TEST grant.
Admin uses multi-member admin_users; QL uses independent quality_operators.
No role inferred from email and no new admin boolean.

Future/P1 backlog ONLY (not implemented): Super Admin (Owner, full service and
Admin Management); Service Admin (scoped Support/Credit/Essay Ops/Quality/Finance
read); Super-Admin-only Admin Management with role/status/permissions/created date
and add administrator. Permission candidates: Members, Credit, Payment Read,
Finance Write, Essay Ops, Math Ops, Inquiries, AI Quality, Admin Management.
Future organization/school memberships, staff/teacher roles, student membership,
scoped admin/reporting, school entitlement/Credit/analytics. Cross-school access
must be denied; no profiles.is_school_admin boolean. Not a launch blocker.

School display follow-up reuses existing APP NEIS public proxy in Admin member
detail, no DB/new credential/Public visual/Payment change. Overall closeout
remains PARTIAL until remaining runtime verification.



# CURRENT_STATUS — LegendStudy+ (as of 2026-10-05)

> **This document holds current facts only.** It is *not* an append-only log — see the [Daily history](../90_HISTORY/DAILY/) for how we got here.
> Status axes are defined in [`AI_CONTEXT.md` §7](AI_CONTEXT.md#7-status-vocabulary). `NOT_ASSESSABLE ≠ PASS`.

## Production activation closeout — 2026-10-08

**PRODUCTION_ACTIVATION_STATUS: PARTIAL. DB_PRODUCTION_APPLIED: NONE.**
Owner separates Codex function/data/backend authority from Manus public visual
ownership. Codex preserved Manus main371e30a/ae44317 unchanged and shipped only
conditional Admin navigation plus existing member-detail data fields.

LAB main `63f8dc37484eebff533b7b84caaec2753f5a1972` on latest mainae44317.
Cloudflare Production46948063-e9a9-41cb-a234-e582785d8a30 SUCCESS.
Header [관리자] appears only after existing admin_operator returns boolean true;
anonymous, normal user, recovery, missing/error RPC, account switch/logout fail closed.
No email-based admin flag or new role. Existing Admin IA and /ql remain intact.
Members add only existing verified-email/provider/major/interested university fields.
No CSS/Home/LAB/Pricing visual edits by Codex.

Backend candidate `codex/production-activation-closeout` at `afada0d` (APP canonical
final Store RC7d1c036 + verified-signup guardba1f875). Original Admin candidates
20261007000100/200/400 retained byte-for-byte; additive20261008000100 fixes canonical
CANCEL_PENDING exclusion (spendable/reserved/expiry), inquiry Auth UUID→credit account
mapping, and bounded member fields. Exact body/security property preflight rejects
unknown live definitions; OID/owner/ACL preserved. No old migration history rewritten.

A real MY SQL defect was found: profiles.intended_major had no authenticated UPDATE
column privilege. Additive20261008000200 fixes only that column with exact existing
owner-RLS checks and rejection of extra permissive user-write policies. Target/major
save and other-owner denial verified locally, not on a hosted member.
Signup20261007150000 remains the existing verified-email guard: canonical once,+3,
no intrinsic expiry, existing lifecycle/ledger/idempotency unchanged. No worker or
Auth setting activation, new wallet, signup backfill or general-user mutation.

Tests: LAB496/44 files, lint/typecheck/boundary/build/readiness PASS. Local browser9
role/route functional checks PASS (intercepted data). Original402 Admin SQL checks
+46 correction/signup/MY RLS assertions PASS in PGlite. Real local PostgreSQL17.11
reran402 checks plus8 concurrent signup connections: one grant,one transaction,+3,
no expiry; pre-confirm denied and relogin retry same grant. Existing full lifecycle
suite with signup guard:112 checks plus ownership/rollback PASS, including synthetic
local erase/grant race. No hosted/destructive/general-user test data used.
Actual Production assets passed the same9 intercepted functional role/route checks.
13 relevant routes returned HTTP200; Admin/QL noindex retained. No visual audit or
real authenticated data write was claimed.

Fresh Production public probes: Auth confirmation ON, signup enabled;
admin_operator/admin_dashboard PGRST202; is_quality_operator and credit_summary deny
anon (42501). Payment read-only runtime: REVIEW/TEST, consumer_purchase=false. Config
presence does not establish finance JWT subject/role/expiry or Admin audit-safe reuse;
essay_admin_grant derives actor from signed finance subject. No new signer/token or
finance server is introduced. Credit grant/cancel/refund remain closed.

**Verification axes:** ROUTE verified as below. AUTHORIZATION: Production anon QL/
Credit denial verified; real normal/admin/quality-operator session NOT_ASSESSABLE.
DATA: hosted authenticated Admin/MY NOT_ASSESSABLE. WRITE: hosted NOT_RUN.
CROSS_SURFACE: actual Admin grant→ledger→summary→MY→Essay header NOT_RUN.
No real test/review grant: accountnone,quantity0,origin/reasonnot recorded.
Existing admin@legendstudy.com account/allowlists remain Owner/Claude evidence,
not independently re-read. No new Admin account or password lookup.

Blocking prerequisites remain absent: existing hosted DB/Supabase management access,
real safe admin/reviewer sessions, verified reuse of existing finance authority.
No migration ledger/function activation/worker state could be read or applied.
Safe preflight/apply/rollback instructions are in the backend candidate; no broad
migration push, history repair or inferred Production success. Runtime-not-assessable
MY implementation is retained. User was asked only about secure environment binding,
never to paste credentials. No new secret/credential issued.

PAYMENT_TOSS_CHANGED: NO. PUBLIC_FRONTEND_VISUAL_CHANGED_BY_CODEX: NO (approved
conditional navigation only). DESTRUCTIVE_PRODUCTION_ACTIONS: NONE.
NEXT: APPLICATION / COUPON / ESSAY RUNTIME / GROWTH — not started. STOP.
[LAB details](https://github.com/LC3808/legendstudy-lab/blob/main/docs/PRODUCTION_ACTIVATION_2026-10-08.md).
[Backend candidates and verification](https://github.com/LC3808/legendstudy-app/blob/codex/production-activation-closeout/wiki/production-activation-closeout.md).

## Overnight Phase C / final closeout — 2026-10-07

**OVERNIGHT_STATUS: PARTIAL. AUTH_SIGNUP_CREDIT: PARTIAL. MY_DASHBOARD: PARTIAL.
ADMIN_QL: PARTIAL.** Independent implementation, main/Production release and Wiki
closeout complete; unavailable hosted credentials and migration discrepancies remain.

LAB main `b79e9baf3b02a6ed3ed0c7f53cbb3f4fb89a0dab`; Cloudflare Production
`984fa6fe-608d-452d-9312-ae5accd29109` SUCCESS (GitHub check). Prior MY deployment
`f2719534-9362-457a-b418-d6e2869e174a` also succeeded. Existing Admin/QL consumers
selectively reused, preserving current public UI, Auth, Credit, Payment and deletion.
Internal IA: `/admin/`, members, credit, payment, operations, inquiries; AI Quality
links to existing `/ql/`, with separate operator authorization. No public nav link,
noindex/robots excluded. Account switch/logout unmounts prior user data.

485 tests/43 files, lint/typecheck/boundary/build/readiness PASS. Browser fixture:
168 Admin/QL conditions (7 routes ×4 widths ×100%/200% ×3 Auth states) PASS; ordinary
members do not request operational data, logout clears member data, finance grant
button disabled. Production unauthenticated HTTP200 for all17 tested public/MY/Admin/QL
routes; internal noindex verified. Actual Production assets also passed the same168 intercepted browser conditions,
with zero browser errors and no horizontal overflow.
MY prior actual-bundle fixture32 checks PASS. These intercepted checks prove frontend
behavior, not real operator access or hosted data mutation.

Hosted read-only probes: admin_operator/admin_dashboard PGRST202; is_quality_operator
42501 to anon. Existing admin@legendstudy.com membership is Owner/Claude evidence,
not independently re-read. No new account or privileged credential. Finance server
from old branch not imported because it independently mints a JWT. Credit grant and
payment finance writes remain closed; no TEST/REVIEW grant performed (quantity0,
ledger/MY/Essay-header grant-chain E2E NOT_RUN).

Admin migrations20261007000100/200/400 NOT_APPLIED. No live migration ledger/ownership/
ACL connection available, and old SQL must not be applied unchanged: Admin balance
calculations omit canonical Payment CANCEL_PENDING spendability exclusion, and P0B
inquiry detail passes Auth UUID to a helper requiring credit-account UUID. Reconcile
Admin reads against canonical credit_summary, verify distinct identities and current
ledger/collisions/rollback before apply. Payment itself remains frozen.

Phase A APP branch `codex/overnight-verified-signup` at `ba1f875` retains minimal
verified-email eligibility guard20261007150000 (implementation066fa90), local11
PostgreSQL/PGlite assertions and Wiki checker PASS. No APP main promotion or hosted
apply: canonical base is final Store RC, not old APP main. Existing +3 once-per-account
idempotency remains source authority; deployed bonus timing/activation/verified-email
behavior are NOT_ASSESSABLE. Public Auth email confirmation ON. No signup policy
setting changed, backfill, general-user credit, actual payment or deletion occurred.

DB_APPLIED: NONE. PAYMENT_TOSS_CHANGED: NO. DESTRUCTIVE_ACTIONS: NONE.
NEXT (Owner queue, not started): APPLICATION / COUPON / ESSAY RUNTIME / GROWTH.
STOP after this closeout. Remaining prerequisites: existing secure hosted DB binding,
real review/operator session, existing finance credential reuse (never mint/rotate).
[Admin source/reconciliation details](https://github.com/LC3808/legendstudy-lab/blob/main/docs/OVERNIGHT_ADMIN_QL_2026-10-07.md).

## Overnight Phase B — MY Dashboard (2026-10-07)

**PARTIAL (implemented/deployed; hosted member-data acceptance unavailable).**
LAB main `f0e612df4eda57d04695e440cd17b4a99a1638e7`; Cloudflare Production
`f2719534-9362-457a-b418-d6e2869e174a` SUCCESS. MY final six-section IA,
canonical Credit usage/history, shared profile/target edit, actual Essay records /
1–5 dimensions, other LABs and account/support links. No Application schema, coupon,
new ledger, fake score or Payment change. Account switch/logout clears private state.
320 tests/30 files, lint/typecheck/boundary/build/static secret scan PASS. Local and
actual deployed bundle 32 responsive conditions, goal edits, history, dimensions and
logout PASS using intercepted fixtures only. Hosted unauthenticated routes HTTP200
with login gate (release query distinguished stale proxy-cached old responses).
No real user mutation or real authenticated-data acceptance; no credentials provided.
[Details](https://github.com/LC3808/legendstudy-lab/blob/main/docs/OVERNIGHT_MY_2026-10-07.md).
Phase C closeout is recorded above. Read-only anonymous Production probe: admin_operator/admin_dashboard
PGRST202 (not in schema cache), is_quality_operator 42501 (exists, anon denied).
Existing operator membership retained from Owner/Claude verified evidence, not re-read.

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
Owner supplied full Overnight plan; prior missing-plan gate resolved. MY/Admin UI
now deployed (closeout above); blocked hosted operations remain deferred.

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


Owner authenticated acceptance: all requested Admin directory checks passed (immediate list/count, search/filter/sort/pagination where applicable, school names, Member Detail/Student360, tested denial boundaries). Owner requested ordinal numbers; bfc20c0 implements display-only server offset + position +1. No claim of extra test accounts or >25 Production members created.

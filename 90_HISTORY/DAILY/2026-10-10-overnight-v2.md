# Essay LAB overnight V2 — morning review

**OVERNIGHT_ESSAY_PROGRESS: COMPLETE (approved offline/local scope).**
Production service readiness remains PARTIAL. No publication, DB application or real
evaluation is included in this completion claim. V2 ZIP instructions supersede V1.

## Implemented and verified

- Existing APP4de2125/LABc977493 metadata work retained, no SQL/rollback changes or
  repeat963-test suite. Independent APP/LAB/DOCS branch `codex/essay-research-overnight-v2`.
- Original12 files SHA256/size match. Master CSV/JSON, regional subsets, Offering/Track
  IDs and scope links validate:53 rows /42 universities /27+26 /50 offerings /101 tracks /
  10 evidence universities. CSV BOM, True/true and pipe/list encodings handled as
  transport formats. No fact coercion or numerical sum across campuses/offerings.
- Research source claim134 posts/30 normalized universities/1635 attachment labels is
  not a fresh inventory verification: original134-row CSV and PDF bodies were absent.
- New read-only local server adapter, typed/validated preview DTO, offline converter,
  import-candidate validator and synthetic tests. Existing university and year routes
  reused; missing `/essay-lab/universities/` index added with existing public fallback.
- Real local UI:42 university search/Seoul filter →2027 → campus/offerings/tracks →
  original source rows/numbers/date/status → official links → missing question state /
  disabled evaluation. Browser checked search1 university/2 separate Korea campuses,
  actual year route, disabled CTA,1280px no horizontal overflow.
- Preview requires development mode AND explicit LEGENDSTUDY_ESSAY_PREVIEW=1;
  ignored `.local` data is not imported in production. Production export343 files
  checked with preview flag set:0 candidate markers. No public backend/API introduced.
- Existing evidence_manifest role/visibility verifier reused for candidate readiness.
  Official question/scoring mappings need verified origin, locator and source hash;
  rights remain independently required, evaluator/publication remain disabled.

## Findings and held items

1. V2 Manifest's instructions entry still records V1 size/hash. All12 research originals
   match; V2 instructions followed as Owner directed. Actual hashes recorded, original
   Manifest not edited. This is a packaging warning, not silent correction.
2. Master LSL27-052 retrospectively mentions2027-08-27 after2026-09-18 research date.
   Original text preserved and the related offering quarantined in the local UI.
3.53→50 source aggregation is explicit (CAU023+024, Korea050+051, PNU048+049). Each
   row remains independently inspectable. No new campus/track/question association.
4. All101 evaluator routing statuses held. UNKNOWN/NOT PUBLISHED/REVIEW_REQUIRED and
   provisional problem/answer/input evidence levels retained. Humanities/MATH_REASONING
   combinations are source provisional labels, not verified question formats.
5. Three HTTP official source URLs preserved, not silently upgraded. Current external
   URL availability was not re-researched; links remain dated source citations.
6. Technical Tier A is not Owner CORE. All candidates remain Owner UNDECIDED. No
   admission probabilities, fit/risk recommendations or invented aggregate metrics.
7. Full research and converted records remain local. No PDF bodies, student/accepted
   answer content, keys or large binaries were committed.

## Reuse / data model / evidence

Read existing APP data foundation, evidence-package-v1, roadmap and longitudinal
strategy before implementation. Current schema catalog read confirms universities,
essay_exams, essay_exam_resources, essay_questions and Math problem_sets/problems/
subproblems; essay_offerings/essay_tracks tables do not exist. Existing metadata and
exam context do not justify treating50 offerings/101 tracks as existing DB identities.
Future persistence needs separate schema/identity review; no schema was created.

Keep2027 admission metadata separate from historical exam kind/year/session and rubric
version. Source `skku` needs explicit reconciliation with canonical `sungkyunkwan`,
not automatic UUID inference. Detailed correspondence/seven preservation answers:
[APP handoff](https://github.com/LC3808/legendstudy-app/blob/1fd87f55cd755df51cf07ac605559ba163aef613/wiki/essay-lab-manus-handoff-20261010.md).

Reused SKKU2025, Hanyang2024 afternoon2 and Sookmyung2025 source-bound packages. Existing
hashes/pages/role bindings/versions preserved through metadata references. Afternoon1
Hanyang mismatch remains distinct. No PDF download/package duplication or new Provider
call.10 research candidates fail missing question/year/exam/PDF locator/hash and rights
gates; candidate completeness is not permission. Existing private PDFs were not freshly
rehash-validated. Required originals/rights/Owner CORE selection remain future inputs.

## Credit recovery / QA / approval boundaries

Prior real timeout recovery is documented in existing Wiki. Read-only inspection of
math_recover_evaluation confirms attempt/evaluation locks, active-account guard,
expired PROCESSING or REQUESTED older than5min check, existing release_billing and
FAILED/TIMEOUT update. Other states return false; anonymous/authenticated execute false.
No function call or transaction was made. Deployed wrapper is not found by name in
current migration sources, so deployment provenance and scheduled orphan recovery are
open follow-ups. No reproducible local defect found; V2 conditional scope therefore
caused no Credit patch or new recovery contract test. Original upstream failure cause
and unattended recovery reliability remain unresolved, not reported fixed.

Admin QA migration20261010134235 and34 isolated tests are previous completed work,
unchanged. **PRODUCTION_APPLIED=NO.** LABc977493-dependent metadata is not deployed.
Wiki PR#1 remains OPEN at e7b254f; no edit/extension/merge. New docs use this new daily
file + README link only. PR#1 changes CURRENT_STATUS/AI_CONTEXT/Oct09 daily, so touched
file overlap is0. Separate PR submitted; neither PR is merged by this task.

## Tests / execution

| Check | Result |
|---|---|
| Offline converter + evidence validator |10 PASS including actual V2 package, source tamper/orphan, determinism, verified-role/hash gates |
| New WEB adapter/UI |13 PASS including actual local converted bundle, search, disabled CTA, duplicate/foreign IDs, unsafe URL and production exclusion |
| Existing public catalog regressions |3 PASS |
| Typecheck / changed-scope ESLint / production static build |PASS |
| APP Wiki handoff / diff checks |PASS, current status below12KB |
| Local UI browser |PASS as scoped above; screenshot retained locally |
| Full963 unrelated WEB tests / APP build/devices |NOT RUN (explicitly excluded/redundant) |
| Actual Provider / Credit E2E / source PDF retrieval |NOT RUN |

Turbopack rejected shared node_modules symlink; existing Webpack mode worked. No SDK
or dependency reinstall, production deploy, authentication change or device debugging.

## Git / restore

All repositories: `codex/essay-research-overnight-v2`.
- APP `1fd87f55cd755df51cf07ac605559ba163aef613`: pushed, remote SHA matched.
- LAB `a5f7f17` (full verified SHA is in final response / branch): pushed, remote matched.
- DOCS: this report and README pointer, independently committed/pushed; exact resulting
  commit and separate PR reported in final response. main unchanged.
- Prior branches and developer checkouts preserved. No reset/clean/force push/deletion.

[Per-file SHA/count evidence](https://github.com/LC3808/legendstudy-app/tree/1fd87f55cd755df51cf07ac605559ba163aef613/tool/essay_lab/evidence/overnight-20261010).
[Local preview setup](https://github.com/LC3808/legendstudy-lab/blob/codex/essay-research-overnight-v2/docs/ESSAY_RESEARCH_PREVIEW.md).
Original ZIP remains in Owner Downloads; this run extracted `/private/tmp/legendstudy-manus-v2`.
Generated catalogs/import candidates are in LAB worktree `.local/essay-research/`.

**Public state HOLD. Production DB changes0; Provider calls0; Credit transactions0.**
Owner/data follow-up: research-date anomaly, original inventory/PDF and rights review,
CORE choice, explicit DB/QuestionSet mappings and separate publication/evaluator
approval; prior QA migration and Wiki PR#1 approvals remain independent. No request
for immediate Owner intervention was needed to complete this bounded local work.

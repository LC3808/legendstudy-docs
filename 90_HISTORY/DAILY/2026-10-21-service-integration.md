# Integrated service readiness — 2026-10-21

Scope: local WEB only; no Production writes/deployments, Provider or Credit calls. APP unchanged.

## Confirmed authority
LAB baseline54f40e18 includes Codex d20ccd9 and Claude54f40e18; no duplicate integration.
Wiki baseline dc38864ae951774a299f65dc29b8360cc9fb10e1.
APP baaf2bc8969bf14598fac62e831476d8085d7f19 remote matched; main d07671e985929ad1aa4ba2c811919cc592a37b34. Not modified.
Cloudflare latest deployment labelled Production:433141d6-b33b-4473-993c-7069697f3b75, reported source8518db6 (local object8518db67e80973b96e0bd5abaa738460bbc2d7a6). Deployment metadata is not an attestation of uploaded working-tree contents. Custom domain byte equality not tested. Claude54f40e18 inclusion in hosted artifact NOT_ASSESSABLE.

## DB selector — PARTIAL
Production read-only verification: Gachon17/166, Korea10/30, Kookmin0/0; published questions0 for all three. Existing RLS requires active+verified exams and published questions. No RLS changes.
The current essay_registered_questions RPC enumerates an old fixed question-ID set; it does not represent the97 newly registered exams. Static Source Registry must not be called DB truth.
Local patch reuses existing operator-authorized essay_material_list/detail RPCs, maps only canonical IDs and labels into existing SourceExamSelection, does not expose paths/evidence/review bodies in selector DTO. Full originals remain in existing admin UI. New selection does not invoke admission/Provider, permits browser-only draft and remains HOLD.
Ordinary users cannot browse unpublished materials under existing RLS. Enabling that requires separate narrowly scoped metadata-read approval; do not publish question content or enable AI to solve a metadata problem.
Existing published DB path and saved draft/submit bridge preserved. New operator-only path tested locally; no hosted claim.

## Image adapter blocker — PARTIAL
Verified Production math_attempts.leaf_id FK points to math_subproblems, not essay_questions. Math has1 problem set/1 leaf, with0 matching essay question IDs. Exam-level relation exists in math_problem_sets; it does not establish a unique question/leaf relation.
Current essay_exam submission accepts text/revision only and retains strict unknown-field rejection. Existing Math read_input has student ownership, selected confirmed extraction, ordered artifact metadata and confirmed regions. Converting a client-provided confirmed_run_id to arbitrary essay text would erase provenance and cannot safely bind question identity, replay and frozen History.
Minimum change proposal (NOT EXECUTED): reviewed canonical essay_question→Math leaf mapping with unique/FK constraints in APP migration authority; extend existing exam reservation/snapshot RPC to resolve and freeze owned confirmed input atomically, check exact question/leaf/attempt/selected extraction and all PRESENT artifacts1..6 in order, retain existing idempotency/Credit transaction and same question-set14-day rewrite contract. Worker adapter consumes frozen confirmed content through existing evaluator. No new Storage, evaluator or ledger. Exact SQL requires canonical mapping design approval first. No fabricated mapping or migrated data.
Until mapping/snapshot support is approved, do not remove image rejection or launch Provider E2E.

## Preserved pending review
Existing97exams382questions150PDF2484evidence links untouched.
Existing material review states:97 NEEDS_REVIEW,1 VERIFIED (whole review table count, not newly approved AI).
Reused11college phase1 summary/error inventories; not another canonical duplicate. Existing admin materials screen remains source for item-level review.
Pending WEB: Sookmyung6exams16questions17PDF; Soongsil11/30/13; KAU5/10/5. Total22/56/35. No browser retry/re-registration; API results do not imply PDF renderPASS.

## Approval sequence
1. Review local selector patch; separate Production deployment approval.
2. Approve minimal DB metadata projection and Math identity/frozen-input migration design if student browsing/image integration is required.
3. Only after local adapter, permission and replay tests pass: separately approve scoped synthetic Provider testing. Public release remains HOLD.

## Verification result
Node22 + pnpm11.24 used. Typecheck/Lint/Build/Boundary PASS. Related46test files348tests PASS (mock/isolated tests only). Includes exam admission/HOLD, reservation identity/ambiguous retry, image rejection,6-image ordering/input and existing Math ownership/retry/History tests. New8regressions cover projection privacy/integrity/operator access and selector/local draft/HOLD/logout/empty Kookmin.
Browser: local exported Gachon page actually opened in IAB; header,official admission-page link,login link,empty selectors and error handling visible. Static server has no Pages Functions; catalog failure explicitly shown. Authenticated local browser E2E and Production E2E NOT_ASSESSABLE, not a service PASS. Existing360px/200% results preserved, not reattested for new authenticated metadata flow.
Final overall PARTIAL. Production deployment not requested until mapping/rights/readiness blockers are resolved.

LAB implementation commit4a886065777e7b4a965db95ae36085783829a8db pushed to codex/gachon-official-page-20261020; remote SHA matched. No main merge. Tests/source changes only; no raw documents, secrets or student data included.


## Owner GO: service DB/Backend contracts (local implementation)

Two canonical APP migrations prepared on `codex/essay-service-contracts-20261021`.
1. `essay_browse_catalog(text)`: explicit42Catalog metadata-only anonymous/authenticated
   projection, fixed IDs, no private PDF/evidence/body or evaluation readiness. Existing
   base grants/RLS unchanged. LAB existing selection merges published and review-pending
   exams; published draft behavior preserved; pending submission stays disabled.
2. Nullable unique `math_subproblems.essay_question_id` FK + same-exam/used-identity
   guard. No mapping backfill. Existing submit/cycle resolves owned completed confirmed
   input, latest candidate,1–6PRESENT ordered images, freezes body+provenance into existing
   journal. Raw URLs/client body override rejected. Existing reservation/finish logic
   untouched; replay/History retained. No new evaluator/storage/table.

Local PG17:19 checks PASS, including role privacy, ownership,6/7image bounds, incomplete
upload, immutable mapping, HOLD, retry-after-OCR, one reservation, one synthetic local
consumption, History and guarded rollback. Synthetic package/model fixtures only.
Existing Math upload/confirmation UI reused; typed confirmed-reference handoff prepared,
but no manufactured mapping or unreviewed image activation. Actual mapping/content
approval, final input-flow handoff and live E2E are NOT claimed complete.

Separate Owner approvals: Production migrations, WEB deployment, reviewed mapping and
runtime activation, scoped Provider E2E, public release. None executed.97/382/150/2484
registration preserved; existing WEB render backlog22/56/35 remains unchanged.


Final local verification: Typecheck/Lint/Build/Boundary PASS;36related test files,
235tests PASS;19isolated PG17 checks PASS. Sandbox build stalled; identical build
outside sandbox completed135static pages. Production browser/Provider E2E not run.

Pushed and remote SHA matched:
- APP `codex/essay-service-contracts-20261021`:81104927833bec9644daf07db672be87f5ada488
- LAB `codex/gachon-official-page-20261020`:29a8b2d35d48956f091f59166d1a7dd854afbe1e

Local contract verification PASS; overall operating service remains PARTIAL. Production
migration/deployment need separate approval; existing image input handoff and reviewed
canonical mapping/readiness must be verified before any live E2E or activation.
No secrets, private PDFs or student data committed. No main merge or release build change.


## Production Migration preflight — read-only, Oct21 07:48–07:53UTC

APP8110492 exact two SQL files unchanged. Live submit/cycle bodies equal canonical
rollback baseline; owner postgres NOSUPERUSER/BYPASSRLS, only essay_worker EXECUTE.
42Catalog identity matches PASS. New objects/column/migration versions absent.
Live total193exams616questions152documents;11college cohort97/382/150PDF/2484mappings,
all97 NEEDS_REVIEW, active0/published0. Existing FK constraints valid. Data/function/
policy fingerprints recorded without student content in APP verification artifacts.

Current RLS PASS: anon originals0; active non-operator reads only previously approved
Hanyang question-only1PDF, other originals0. Private documents/reviews schema access
denied. Existing exception intentionally preserved; not a new grant or internal evidence
exposure. Metadata function is an explicit bounded SECURITY DEFINER capability; postgres
bypasses underlying row policies inside it. Approve that exact projection, not a claim
that SECURITY INVOKER RLS applies. No base grants or RLS policy modifications proposed.

Order:20261021071701 then20261021071702. One nullable FK/index/trigger +private helpers,
two submit replacements; no data backfill/new table. Existing1Math leaf12attempts
remain unmapped; used identity cannot be reassigned. Re-run M2 aborts atomically;
migration ledger and exact objects govern resume. M1-only failure needs M1-only rollback;
combined rollback only after both and before any mapping/input snapshot use.

Production readiness PARTIAL: recent backup/PITR recovery point NOT_ASSESSABLE with
available tools; must be confirmed before separately approved execution. Guarded rollback,
read-only postflight SQL, lock/time limits, ACL/count/hash expectations and stop conditions
are in APP supabase/verification/essay_service_contracts/production-plan.md.
Existing tests reused; no Provider, Credit, DB migration, deployment or auth-key changes.

## UI-only Production preparation — Oct21

Owner authorized UI-only deployment conditional on unchanged Backend. Candidate
codex/claude-ui-production-20261021 isolates Claude d3b7da8/54f40e1 from displayed
Production8518db6; component conflicts resolved without importing newer DB/submit APIs.
Typecheck/Lint/Boundary/135-route static build PASS;25unique related UI tests PASS.
Local browser42cards and2/4 detail/list/back restoration PASS; Production QA not run.
Deployment NOT_EXECUTED: current known-good433141d6 is manual, labelled8518db6,
while neighbouring same-SHA deployments mention gateway14e7612/DTO corrections.
Need actual uploaded backend source/artifact parity, not just metadata SHA. Preserve
known-good; no DB/Provider/Credit/auth mutation. Direct OAuth extraction/API attempt
was auto-review rejected and not executed. Existing Dashboard/Wrangler reads work.
Candidate evidence: LAB docs/reviews/ui-production-20261021/README.md (local only).

## Owner-approved exact Claude UI Production promotion — Oct21

Supersedes the preceding deployment blocker after Owner explicitly identified approved
backend gateway14e7612 and authorized exact54f40e18ec3811cd5d9db23a8fb68db1a57a5876.
Dashboard preflight matched Production8518db6 /433141d6-b33b-4473-993c-7069697f3b75.
Direct Pages Production deployment (branch selector main; no Git merge) completed:
7e15bfa5-76de-439e-92da-5d0315b820d9, source54f40e1. Actual custom domain checked.

Gateway functions/api/essay/exam.ts SHA256 in14e7612 and54f40e1 matches:
d0640668a83904f966d98dd1da584734c09cad0fe4f12c7b72d3dba83a9020ab.
No executable functions/src/server/runtime-server difference; one test-only change.
No new DB contracts/Migrations included or applied. Exact target clean detached build,
Node22, frozen pnpm11 dependencies, existing public Production variables.
Typecheck/Lint/Build135routes/Boundary/GitHubReady PASS;8related files48tests PASS.
These are local automated checks, not actual Provider evaluation.

Official Wrangler config download before/after is semantically identical. Dashboard
Pages has30plain+9secret variables and1service binding (earlier36 count stale).
Worker10variables, ESSAY_EXECUTION_ENABLED=false, existing version41eb3165 unchanged.
Math/exam/continuous OFF; no config, Worker, payment, auth or Credit change.
Empty unauthenticated same-origin POST /api/essay/exam before/after returned503
EVALUATION_UNAVAILABLE; source OFF guard precedes auth/body/worker. NoProvider call.

Production browser PASS:42cards/all-page toggle;2/4→Dongguk→list and browserBack2/4;
search/name-sort/major-filter restored; year/type/track/question/writer displayed;
Hanyang2024admission humanities sole question enters writer without redundant selector;
existing draft preserved, submit disabled. Local-only6image previews loaded; swap1/2
and deletion verified; QA images removed. Extension file chooser lacked local-file
permission; existing native chooser completed test without changing permissions.
No remote image upload or submission.360px list/writer no horizontal overflow; Chrome
confirmed200% zoom writer no horizontal overflow; zoom/viewport restored.

UI promotion PASS within this scope. Private storage/evidence RLS retained by unchanged
backend/config and zero DB writes; fresh anonymous private-resource penetration test
was not performed in this UI deployment. Actual AI/credit/history E2E remains HOLD.
Rollback target433141d6 retained; no rollback necessary. New DB metadata/mapping work
is not part of this deployment.

## Backend activation / recovery preparation — PARTIAL

Current authority Wiki410c4e62 and Claude54f40e18 remote SHA confirmed; ProductionUI
unchanged. APP8110492/b950512 implementations reused. Current DB193exams616questions.
Existing11college97/382 and private materials are not re-ingested.

Official CLI logical backup plus current managed schemas and private Storage captured
in owner-only local folder, outside Git. Isolated PG17 schema/data restore succeeds.
133tables:131live fingerprints match;2scheduled ops logs changed after snapshot.
Business/ID/history/Credit/payment match.132RLS policies identical after normalizing
search_path. Storage157files77,510,456bytes paths/sizes match, including152PDFs whose
SHA256 equals stored content-address names. Math3/avatar2 included; no contents published.

Full recovery gate remains PARTIAL: Vault ciphertext2 and cron definitions2 backed up,
but key-dependent Vault restore and cron restore not validated. Standard CLI excludes
extension table data; do not equate successful business-table restore with whole-project
recoverability. Isolated container stopped. No Production migration applied.
M1/M2 approved hashes unchanged; live mapping column absent. Metadata/RLS postflight
for new contracts therefore NOT_EXECUTED. Existing Production RLS unchanged.

Konkuk representative question NOT_SELECTED: existing2026natural7math-related records
remain extraction review HOLD; no verified complete official/formula package established.
NaturalQ1 candidate (not approval): exam25dc068b-4672-56e1-b8df-08ee8800e2f6,
questioncea40cf3-dc05-507a-a6eb-fd5e1e1847bb. Reuse IDs; no Production mapping write.
Image bridge preparation retains owned completed+student-confirmed input,1–6ordered
PRESENT images, same-exam unique leaf mapping, immutable snapshot and server journal
idempotency. Existing19PGchecks and235WEBtests reused; no new implementation or test
claim. CurrentProduction54f40e18UI does not deploy newer bridge backend automatically.

No Provider, Credit transaction, auth/payment change, public activation or WEB deployment.
Next: finish full recovery validation; only then apply exact M1→M2 and non-destructive
postflight. Review Konkuk original package before mapping/Provider approval. No request
for duplicate migration approval; existing conditional authorization remains valid.

## 2026-10-21 residual recovery verification and Konkuk selection

Prior business-data/132-policy/157-object/152-PDF verification reused, not repeated.
Cron recovery PASS for definitions/configuration: both feedback notification and account
 deletion dispatch jobs restored locally with exact IDs, names, schedules and command
hashes; intentionally inactive in isolation. Live settings unchanged; no job executed.
Vault live metadata confirms two secrets and two decryptable values (values not read).
Ciphertext COPY restores two records locally, but decrypt-count query fails with
`pgsodium_crypto_aead_det_decrypt_by_id: invalid ciphertext`. Therefore portable Vault
recovery is NOT verified. Both scheduled services depend on Vault. Production Vault
works; this is a disaster-recovery gap, not an observed Production outage.
A verified key-preserving project restore or authorized recovery/re-provisioning source
for these secrets is required. Current logical ciphertext alone is insufficient in the
tested isolated environment. No root key extraction, credential reset or setting change.
Full recovery gate PARTIAL; migrations 20261021071701 and 20261021071702 NOT_APPLIED.
New metadata RPC/mapping postflight NOT_EXECUTED. Existing conditional approval remains
valid but its recovery condition is unmet; no duplicate approval is required.

Representative selected: Konkuk2026 수시 자연 Q1 (official maximum17).
Existing exam25dc068b-4672-56e1-b8df-08ee8800e2f6;
questioncea40cf3-dc05-507a-a6eb-fd5e1e1847bb. Live membership verified.
Original separate problem PDF p1 and solution PDF p5 visually checked; supplied official
2026 선행학습영향평가 report physical PDF pp91(problem),95(intent),97(explanation),
98(rubric),99(model solution) visually checked. Formula/diagram and answer correspondence
PASS for this one question. No full dataset recheck. Original references retained in
private 건국대/fast-load/question-evidence.csv; no source contents or images in Git.
Rubric supplies grade bands and total17, not numeric points per band: do not invent them.
External source/usage-rights follow-up remains separate. Extraction review HOLD retained;
original visual verification does not repair stored extracted text or activate evaluation.
Live Math set lookup for this exam returns zero rows. Existing same-exam hierarchy and
unique essay-question leaf contract can be used after migration and separately scoped
mapping preparation; mapping is not created or claimed complete. No new engine/schema.
Provider E2E, Credit and AI activation remain unexecuted/HOLD. No Production writes.

## Oct21 Owner correction: reuse proven paths before migrations

Latest Owner correction prohibits all Production DB writes and both migrations for this
step. Provider/Credit/public activation remain prohibited. No successful tests rerun.

Hanyang: Oct14 Production2024 admission humanities afternoon2 Q1,
question4cbe8b69-2ccc-5c4e-9e77-0644f90e2cde, reviewed Package17. Text-only QA initial
run5b636cda-9915-42e1-b209-9934c7c0fcb1 completed17:30:54KST; two real OpenAI calls
(evaluator+independent reviewer). POST /api/essay/exam -> essay_exam_submit -> existing
Worker/checkpoints/finalize. Exactly1Credit consumed. Included revision
414a207b-2c51-48e6-97ea-2ddf49b77c9e completed20:28KST, two calls,0additionalCredit.
WEB stored results/History/comparison verified; Owner initial Native result view verified.
Evidence: APP wiki/essay-runtime-completion.md, Oct14 paid/free E2E sections. No inference
that humanities text success proves Math or uploaded-image evaluation success.

Sookmyung:2025 mock humanities Q1-1. Sep28 private blind RunA at09:09:41KST used
ChatGPT-authenticated Codex CLI (requested gpt-6-astra), original image answer and three
image assets; raw output/hash receipt frozen locally. Not WEB submission API or DB History.
Sep30 OpenAI Responses gpt-5.6-sol original-answer/calibration structural and Owner
quality acceptance recorded (Contract1.3/scaffolding-1.3-v3). Private local result storage,
not Production Credit/History. Sep28 rewrite generation PASS is generated sample quality,
explicitly no re-evaluation: do not describe it as deployed free-reassessment success.
Evidence: APP wiki/essay-lab-evaluation-pilot-2025.md,
essay-lab-model-bakeoff-l2-b.md, essay-lab-rewrite-pilot-v1.md. No new calls.

Konkuk2026 admission natural Q1/17points original verification retained. Existing exam
25dc068b-4672-56e1-b8df-08ee8800e2f6 and question
cea40cf3-dc05-507a-a6eb-fd5e1e1847bb preserved. Live read confirms Math problem_sets0
for this exam. Humanities essay execution accepts humanities/business only, including
prepared migration71702; changing IDs or applying it does not create Math evaluation.
Existing Math path: math_input -> owned attempt/confirmed extraction -> math evaluation
worker via /api/math/evaluate -> math_learning/history and existing commercial journal.
Existing tables already support problem_set.essay_exam_id -> problems -> leaves,
source_artifacts, scoring_criteria, evaluation_profiles and canonical_solutions. Reuse
that hierarchy for a reviewed representative package; do not invent an engine or History.
Math-only route need not depend on the two new migrations. However an exact generic
essay_question FK/snapshot bridge is absent today; do not claim an existing FK or infer
leaf identity from display order/labels. Local explicit reviewed identity adapter and
content package need preparation before claiming selector-to-Math E2E. Any Production
content registration/activation remains separately approved. Official qualitative bands
must not be turned into invented numeric grade weights.

Verdict: existing services REUSABLE, direct humanities-path substitution NO; no new
migration justified solely to run Math. Konkuk-specific Mock E2E NOT_RUN: no reviewed
Math package/leaf binding yet. Existing generic mock tests and previous real Math path
evidence reused, not relabeled as Konkuk. No code/DB/Provider/Credit/History mutation.

In-progress content inventory preserved privately:36current PDFs,32new filenames and
4known files; previous report/admission-guide paths absent in current source folder.
Existing Production Konkuk6exams18questions all inactive/unpublished. No new registration.
Latest correction takes priority for contract comparison; expansion specification pending.


## Konkuk expansion approved and applied; service remains PARTIAL

Owner approval received in chat:15new exams40upper questions32privatePDF,288review links(240new+48existingmock supplement). Reused guarded source registration and material review transactions. Fifteen metadata batches and18review batches succeeded.32Storage objects30,773,381bytes match local upload plan; document hash/page/size guard passed. Old193exams616questions and98reviews digests unchanged. New inactive/review, unpublished questions; private bucket and anon/authenticated schema denial retained. No Migration/Provider/Credit/payment/auth/production-code change.

2024admission4/12,2024mock3/8,2025admission4/10,2025mock4/10 newly registered; existing2026admission3/10 and2026mock3/8 preserved. FinalKonkuk21exams58DBquestion rows. Existing2026integrated subquestion row granularity retained. Source section links NEEDS_REVIEW, not assessment-ready. Official year corroboration remains for2024naturalA/B and2025natural/free-major. Detailed nested subquestion count not asserted.

Local PG17 metadata register/replay/oldfixture preservation/RLS/write denial/rollback restoration PASS. WEB admin21/58 visible;2024naturalA4questions24links and F03PDF renderer inspected.31remainingPDF render checks pending; not conflated with Storage success. Extracted question body empty in review UI; package/evaluation readiness not claimed.

LAB local selector now separates admission/mock before track while preserving a sole type without an extra click.6targeted tests,Typecheck,changed-fileLint,Boundary PASS. First build failed from external node_modules symlink; physical dependency install corrected. Sandboxed Turbopack stall stopped; local escalated build succeeded, then explicit Node22.23.2 +pnpm11 build passed (bundled wrapper otherwise usesNode24). No deployment. Existing broader tests reused.

Next authorized local work remains: reviewed official evaluation input and Math content/leaf binding, Konkuk-specific Mock E2E, Native APP connection/build preparation. Do not claim service complete. Provider/Credit/Production code/store upload/public activation require separate scoped approval. New data registration approval is already used; do not re-request it.


## 건국대 대표 서비스 연결 — LOCAL PARTIAL

### 운영 보존

Production 조회만 수행. 건국대21시험58문항 재확인, 자연2026시험 Math세트0. 신규 DRAFT 후보14ID 모두 기존행 없음. 기존자료/학생답안/History/Storage/RLS/권한 및 HOLD 변경 없음. 두71701/02 미적용 유지.

### 대표 입력

인문2026수시인문2번60점: 공식 보고서 문제60, 제시문60–64, 의도64, 해설69–70, 기준71–72, 예시73. 공식5개 기준 private cache로 기존 Worker 연결. 채점표의 가산 요소를 필수감점 기준으로 변경하지 않음. 문제1 도표와 분리. 운영권리/검수/Provider 승인 false.

수리2026수시자연1번17점: 기존문제·도형91/의도95/해설97/기준98/풀이99 검증 재사용. 기존 Math8테이블14행 DRAFT (세트1·문제1·leaf1·출처4·profile1·criterion1·solution1·step4), 공식 등급표 점수 임의 생성 없음. 논술question ID 보존, leaf 후보 대응명세이며 새FK 설치 아님.

### 코드 및 검증

- WEB/Native Math 요청leaf 고정. 승인catalog에 없으면 fallback/제출 차단. 기존availability/auth/Credit/History 유지.
- Native 기존 AnswerImagesInput 재사용: 최대6장, 순서변경/미리보기/삭제, freeze후 같은attempt/artifact로 실패업로드만 재시도. 별도Storage 없음.
- 실제SQL검증에서 도출한 WEB physical step enum CALCULATION/COMPUTATION 불일치 최소 변환 수정. 기존평가엔진/SQL 변경 없음.
- WEB15관련테스트 PASS: 수리 UI합성6장→판독/확정→재첨삭/History, private Worker contract, 물리변환, 순서업로드, 인문 canonical-ID 합성 제출→결과→1/0Quote→History변환.
- 기존 인문Worker + private 공식5기준 입력 Mock2회/재작성체크포인트재실행 PASS. 실제Provider0.
- 격리PG17의 정확한DRAFT등록SQL2회/미사용롤백/재등록, private ACL/초안제출차단, 최초1/재첨삭0 테스트Credit, 소유권/중복/lineage/결과조회 포함27검증 PASS.
- Flutter8tests/analyze PASS. AndroiddebugAPK/iOSsimulator Runner.app(build2026102101) PASS. 기기실측·TestFlight·Store업로드 아님.
- WEB Node22/pnpm11 Typecheck/변경Lint/Build/Boundary/Ready PASS. Production배포 없음.

별개 UI/Worker/DB 검증을 하나의 실제 브라우저→운영DB→Provider E2E PASS로 표현하지 않는다. Mock평가 품질과 실제품질 구분. 대표문항 서비스 전체 PARTIAL.

### 다음 승인 및 BLOCKER

1. 수리DRAFT14행 비공개등록 Owner승인 요청. 정확한SQL/복구계획 private production-preparation.md. 기존시험/문항/Storage/스키마 변경 없음. 한 트랜잭션, 재실행 동일내용 확인, 불일치롤백. 미사용·이번생성ID에 한해복구. 등록만으로평가활성화 금지.
2. 인문 reviewed cache/criterion·evidence binding·검수/권리·Provider regime 운영설치 범위 확정 필요.
3. 일반사용자 메타데이터조회와 목록→승인Mathleaf연결, WEB/APP교차E2E 미완료. admin조회 PASS와 구분.
4. 실제Provider 승인 요청 전 실제계정/allowlist/모델·토큰/비용상한/Credit·History범위 확정. 추정 비용 제시하지 않음. Provider/실제Credit/공개/WEB배포/스토어승인 별도.

private outputs: `~/development/legendstudy-materials/essay-validation-2026-10/건국대/service-20261021/`. Wiki에는 원문/평가본문/개인정보/백업키 미포함. APP 상세 `wiki/konkuk-service-20261021.md`.


이번 코드 Push/remote 확인:
- LAB `codex/konkuk-service-20261021`: `27f1106946264ea45c32caa9df152bfc25a82414`.
- APP `codex/essay-service-contracts-20261021`: `8c52f0cfaad39d250a5efe62b3255e8dd04e0264`.
- 로컬 HEAD와 원격 SHA 동일 확인. 기존 untracked supabase/.temp 및 실행 __pycache__ 미포함.

## 2026-10-21 — 건국대 Math DRAFT 등록 승인 적용 PASS

Owner 별도 승인 범위14행만 Production 적용: 세트1·문제1·소문항1·출처4·profile1·criterion1·solution1·step4. 기존 자연2026시험/문항 ID 보존. 상태열4개 DRAFT, 시험inactive·문항unpublished 유지. 동일내용 검증 포함 단일 트랜잭션 성공. 신규ID 중복없음.

기존 Math/논술 시험·문항/답안·평가/시험History/Credit·결제/Storage/근거/runtime control 및 RLS·ACL 등31개 비교 항목 건수·전체행해시 전후 동일. 정책132개 유지. 대상8테이블 anon/authenticated 직접SELECT 차단. 합성subject catalog조회는 ACCOUNT_RESTRICTED; 실제회원 조회PASS는 아님.

DRAFT등록 PASS와 실제서비스 PARTIAL을 구분. Migration/Provider/실제Credit/WEB·APP배포/공개활성화 없음. 다음: 인문 운영입력 binding·검수/권리, 실제Provider 실행범위 준비. 비공개 근거 `essay-validation-2026-10/건국대/service-20261021/production-draft-postflight.json`.

## 2026-10-21 — 건국대 실제 Provider 실행 준비 PARTIAL

기존 DRAFT14행 등록과 코드·격리DB 테스트 결과 재사용. 이번에는 운영 조회와 실행계획 작성만 수행; Production 쓰기·Provider·실제Credit·배포0.

- 인문2026수시2번: 기존 `/api/essay/exam` → ReviewedRuntimeWorker 경로 재사용. 실제 runtime_policy 없음, review NEEDS_REVIEW, 운영package 없음. 기존 provider_policy는 Hanyang만 지원. 공식 입력 패키지 검수·권리 및 건국대 한정 binding 준비가 필요하며 임의 활성화하지 않음.
- 수리2026수시자연1번17점: 기존 Math 이미지/판독/확정/평가 경로 재사용. 운영 resolve_profile은 set/problem/profile ACTIVE를 요구하므로 DRAFT 유지 상태의 운영 제출은 차단되는 것이 정상. 차단 우회나 새 Migration 없음.
- 기존 승인 테스트 계정과 과거 성공run 관계 확인. 실제 로그인 세션은 미검증. 공개 availability는 모든 유형false, AI HOLD 유지. 계정정보·잔액·UUID는 비공개 실행계획에만 보관.
- 권장 승인안: 격리환경 실제 Provider 품질·계약 검증. 인문 최초/재첨삭 평가+독립검수4회, 수리 최초/재첨삭 판독+평가4회, 최대8회. 운영 Credit0, 운영 DRAFT/HOLD/History 불변. 운영 WEB/APP E2E로 판정하지 않음.
- gpt-5.6-sol Standard 공식가격 입력$4/출력$20 per1M 기준, 각 호출 총입력30k 이하(이미지환산 포함)·출력12k 이하일 때 총추산$2.88, 승인예산안US$4. 입력 상한·기존 안전한 자격증명 접근·모델/가격 확인 불가 시 실행 중단. 실패/타임아웃도 호출한도 포함, 자동 추가호출 없음. 가격 근거: https://developers.openai.com/api/docs/models/gpt-5.6-sol
- 결과/History는 격리DB·비공개 산출물에 저장. 기존 run/lease/checkpoint/receipt 복구 재사용; 불명확 응답에서 새requestKey·임의환불 금지. 향후 운영 두 문항 최초평가는 합계2Credit, 재첨삭 추가0이나 이번 범위에서 실행하지 않음.

실제 Provider 실행은 Owner 별도 승인 대기. 운영 E2E는 패키지/정책·DRAFT 조건으로 HOLD. 비공개 상세: `essay-validation-2026-10/건국대/service-20261021/provider-e2e-execution-plan.md`.

## 2026-10-21 — 건국대 Provider 품질 확대 승인 / 실행 대기

Owner 승인은 기존8회/$4를 대체하여 인문15회·수리20회·합계35회, 총US$30이다. 기존 승인분 실제 실행 기록0회/$0; 이번에도 Provider호출0, Production쓰기/Credit0. 재승인 요청이 아닌 기존키의 안전한 로컬 접근 경로 확인 대기. 환경의 Provider키 변수 및 해당 작업폴더 설정파일이 없고, 기존 성공은 Cloudflare secret binding에 의존한다. 운영Secret 추출·설정변경으로 우회하지 않는다.

기존 공식입력·Worker/Math 계약 재사용. 비공개12사례 검증표 준비: 인문5수준(평가+독립검수10호출), 수리7유형(판독+평가14호출), 기본24호출 및 필요 시 잔여11호출 범위. 재작성은 실제 피드백 후 작성한다. 인문 항상성은 가산요소, 수리 등급별 숫자점수 미확정은 임의 배분하지 않는다. 손글씨 실측과 합성 이미지 테스트를 구분한다.

gpt-5.6-sol 공식 Standard 단가 입력$4/출력$20 per1M 재확인. 호출당 총입력30k(이미지포함)/출력12k 검증 조건에서35회 추산$12.60, 승인상한$30. 아직 입력별 토큰 검증·실행transport 연결은 미완료. 호출·사용량·비용 ledger는 비공개 경로에 준비; 미확인 비용은0으로 간주하지 않는다. 실제 품질·재첨삭·History NOT_ASSESSABLE, 서비스 PARTIAL/HOLD. 기존 Mock PASS를 대체하지 않는다.

비공개 산출물: `essay-validation-2026-10/건국대/service-20261021/quality-20261021/manifest.json`, `call-ledger.json`. 원문/답안/계정정보/키는 Wiki에 포함하지 않음. 다음: 승인된 Provider 자격증명 접근 경로 확인 후 제한된 실제 호출 시작. Production 패키지/binding 및 Math DRAFT 제약은 기존대로 유지.

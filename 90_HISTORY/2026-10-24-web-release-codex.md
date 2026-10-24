# WEB release execution — Codex, 2026-10-24

Previous release state: **WEB PRODUCTION DEPLOYED / OWNER ACCEPTANCE PENDING**. New Owner corrections are IN PROGRESS; see the final section below. The preparation snapshot below is historical; the final postflight section supersedes its pending gate and unchanged-Production claims.

Owner latest authority: Codex alone integrates/deploys WEB; preserve Claude work. APP edits wait for Owner WEB acceptance. Store submission requires later final Owner approval. No new engine/profile/Provider quality work; no Production SQL, DB writes, Worker/Registry/Secret/Ledger changes.

- Latest inspected DOCS main: `82419b5`, superseding earlier `cdf31bc` snapshot.
- WEB PR #5 now includes selective PR #2/#3 and PR #4 report styling on actual Production lineage. Candidate `625a739`; release branch `codex/web-app-release-20261024`.
- Canonical implementation/report: [WEB release record](https://github.com/LC3808/legendstudy-lab/blob/codex/web-app-release-20261024/docs/WEB_RELEASE_2026-10-24.md).
- Actual Production metadata rechecked: successful `e67a0d37-0d1f-4042-b480-7ffd7ba18b5b`, source `f1a9e27a7d1e8d9882339398b4c0cbc86aa43616`; Pages label main does not make Git main the deployment source.
- Preview [2a09bfef](https://2a09bfef.legendstudy-lab.pages.dev) deployed; university cards/source/schedule placement visually verified. Production remains unchanged.
- Typecheck, Lint, Boundary, Production build PASS; related tests116 PASS/2 skipped; full1213 PASS/6 pre-existing failures/4 skipped plus prior empty suite. No new failing assertion. Lockfile unchanged.
- Full Preview authenticated acceptance BLOCKED: current browser Auth explicitly rejects Production Supabase on preview origins, and Preview lacks essay runtime bindings. Security boundary and Secrets preserved. Owner choice requested: approved connected Preview, or explicitly allow Production with the documented Preview limitation and immediate postflight/rollback.
- Readiness is now a fail-closed projection of existing Worker admission + Math availability + canonical university IDs. Old UI card-count assertions are not public-question-count evidence. Historical public12 has NOT been re-certified from current DB in this run.
- Draft keys, report data/provenance, existing submission/payment/ledger behavior preserved. No Provider, purchase or financial write. Existing Android/iOS payment success is Owner-reported; no repeat purchase.
- APP unchanged; Android/iOS build/device/store work NOT_STARTED pending WEB acceptance.
- Rollback target is the existing `e67a0d37` deployment, not older pre-pending-key-fix deployment by default.

This record supersedes the initial PR #5 build-environment limitation and the claim that catalog cards prove general-public question availability. [Initial integration history](2026-10-24-web-production-integration.md) remains dated evidence.

## Final postflight — 2026-10-24

Owner decision: “Preview 화면·로컬 검증 후 Production 배포 허용”. The existing Preview auth/secret limitations were accepted; no boundary was bypassed.

- Production source: `a21642cf384adc69fa5c6ec6180c3ea7c4987cd2`; canonical successful deployment: `6b69acb3-f497-48e4-8f79-559fc82a7b95`. Final Preview [4a11baa7](https://4a11baa7.legendstudy-lab.pages.dev). WEB documentation follow-up `86e33ff` changes documentation only. Release and PR #5 head branches pushed and verified.
- First source625a739 deployment5a572e76 rendered stored results/credit but disabled all university CTAs. Immediately rolled back to e67a0d37. Direct essay_exams RLS hides registered unpublished exams; existing public browse RPC is the correct metadata source. Source76ca473 / deployment32461d27 resolved this without DB/Worker/Secret changes.
- Final sourcea21642c also fixes MY falsely showing no history by reusing the same current exam/math/essay read and count functions as History. Admin labels clarify that legacy aggregate coverage is unverified for current exam history and replace visible AI quality labels.
- Actual browser checks: administrator dashboard, MY, university/exam/question choices, PDF page2/6, preserved 1,476-character draft, stored result, criterion evidence, unchanged growth0/3, rewrite entry and previous-answer controls. Student account Credit107 / History7 evaluated,5 rewritten,3 reevaluated; administrator account Credit95 / History10 evaluated,8 rewritten,5 reevaluated and11 credit-history entries. Different accounts, not a balance change. No user-content edits, submissions, paid calls or purchases performed.
- Typecheck/Lint/Boundary/build135 pages PASS; admin/MY/status tests221 PASS/2 skipped; focused catalog/status tests24 PASS. Six pre-existing full-suite assertions and empty suite remain reported in WEB record; not called PASS. APP wiki handoff check PASS (11,126 bytes / 1,725 links).
- Public scope is9 exams,20 metadata questions, but **11 live UI admitted question tabs** across4 universities. Matrix: Konkuk2026 admission Q2;2026 mock Q1/Q2;2025 admission humanitiesI Q2. Seoul Women's2026 Q1/Q2. Sungkyunkwan2026 session1 Q1/session2 Q1. Soongsil2027 mock Q1/2026 admission Q1/2024 admission Q1. Other question tabs displayed preparing. This differs from historical12; no hardcoding or policy expansion used to conceal it.
- Remaining GAPs: historical12/current11 admission discrepancy; administrator summary returns zero essay evaluations despite current exam History, so aggregate scope explicitly labeled unverified. No new SQL or backend work authorized/applied.
- Rollback target remains `e67a0d37-0d1f-4042-b480-7ffd7ba18b5b` / f1a9e27. APP untouched; APP changes, Android/iOS builds, devices and stores NOT_STARTED until Owner WEB acceptance. Prior Android/iOS purchase PASS is Owner-reported and preserved.

[Full release evidence and question matrix](https://github.com/LC3808/legendstudy-lab/blob/codex/web-app-release-20261024/docs/WEB_RELEASE_2026-10-24.md). Owner reviews [Production WEB](https://lab.legendstudy.com/) before APP phase.

## Owner correction task — ongoing, no partial release

Owner reaffirmed original session-based1Credit/zero-cost saved drafts/free rewrite0, explicit partial-answer consent and no added charge for retries. No arbitrary staged release or waiting for general MY review. WEB changes cover saved-answer collection/confirmation, missing member fields, operational dashboard ordering, bounded real payment filters, History grouping/search/growth, result hierarchy/evidence/voice/comparison. No completion claim: Credit aggregate and current Registry definitions require Owner read-only SQL evidence; Worker has explicit len(questions)==1 and whole-run failure finalization, and Math/image remain separate. Worker scope clarification requested. A gateway protection blocks unsupported multi-question reservation before any Credit posting while the contract is unresolved. [Full itemized status and exact read-only SQL](https://github.com/LC3808/legendstudy-lab/blob/codex/web-app-release-20261024/docs/owner-review-20261024/README.md).

Validation: related257 tests PASS/2 skipped plus2 payment-filter tests PASS; existing real local PostgreSQL Ledger14 checks PASS; Typecheck/Lint/Boundary/Production build PASS. No Provider or Production DB writes. Local built LAB browsing checked; authenticated result/admin visual validation remains pending. The earlier historical12/current11 discrepancy is resolved by reading the canonical APP handoff:12=Essay11+Math1. This is a documentation correction, not new public activation. Current Production and rollback baseline both remain6b69acb3/a21642c. APP code and existing uncommitted files preserved; local wiki current/log/decision updated and handoff PASS11951bytes/1726links.

WEB review checkpoint `1226cfb` is on the release branch only; PR #5 deployment head is not advanced by this incomplete checkpoint. Production remains unchanged.

### Owner policy / server contract follow-up

Owner confirmed exam ID vs submission-round ID, omitted questions later = new paid round1Credit; free rewrite retains the initial question set. Narrow session execution/retry Worker changes authorized. Actual Production reserve/finish already charge1 per round and0 included rewrite. Owner applied additive admin report and retry SQL and returned expected role/search_path verification. Local canonical PG18 Ledger checks, eight-concurrent retry idempotency, successful checkpoint preservation, unknown replay refusal, erasure/Ledger preservation PASS. WEB261 tests/2skip and Production build PASS; no new Worker/WEB deployment yet. Whole correction remains IN_PROGRESS, with image/Math integration and authenticated screen/runtime acceptance still open. [Canonical decision](https://github.com/LC3808/legendstudy-app/blob/codex/material-service-app-20261022/wiki/decisions.md#2026-10-24--시험-회차-첨삭-단위-복원).

### 2026-10-25 Preview checkpoint
WEB b9fd103fdaf743ee4ee1e939a21b1fe6dedc1129 Preview [8e9b0f07](https://8e9b0f07.legendstudy-lab.pages.dev) uploaded; public LAB browser rendering verified. Production/Worker unchanged. APP d258d30d149239f568a453e682a473f3b625eeaf remote verified. Full suite observed1232PASS/7FAIL/4skip plus empty suite; consent-modal journey failure corrected and targeted PASS, remaining6 catalog baseline failures/empty suite recorded. Full request still IN_PROGRESS; Math/image authoritative contract lookup pending.

### 2026-10-25 MY 추가 지시 접수

[Owner 원문](2026-10-25-web-my-owner-directive.md)을 보존했다. 선행 수정 전체 완료 후 WEB MY와 나의 논술 LAB을 함께 개선한다. 프로필→이용 현황→LAB→성장→학습시간→목표→대학 지원→계정·지원 순서, 크레딧 명칭, 실제 만료 수량, 동일 기준 성장 그래프, 대학/학과 동시 입력, 안전한 뒤로가기, 대표 주소 복사 및 개인정보 제외 로컬 성장 이미지 저장이 포함된다. PDF와 기존 공통 데이터 계약은 유지한다. 구현 미착수이며 완료/배포로 보고하지 않는다. WEB 원격2e20e81098213ddbc68421aefd0ec167aa24aca2 확인, 작업 트리 clean. 기존 Math 계약 조회 결과 대기와 미완료 항목을 유지한다.

## 2026-10-25 Math session SQL — Owner applied, WEB integration in progress

Owner supplied actual financial functions and public admission/catalog/storage/ownership boundaries, then applied the exact Math session package. Reported verification: all four RPCs authenticated-only with fixed search_path; RLS/tables installed; temporary CREATE removed; original binding UNIQUE, owners/ACLs and installed definition hashes preserved. [Owner evidence and package SHA256](https://github.com/LC3808/legendstudy-lab/blob/codex/web-app-release-20261024/docs/owner-review-20261024/math-session-owner-verification.json). Existing Ledger rows/IDs/evaluator/Registry/public leaf preserved. Local synthetic1/2/4-question single-credit, free0, failed-only retries, eight concurrent submits, extraction confirmation, lifecycle release, old APP learning compatibility and131 legacy Math checks PASS. Actual public Math admission remains one existing leaf.

WEB saved drafts→confirmation→one financial submit, old Math single-leaf entry and owner History grouping implemented locally. Success results remain visible during a partially completed round; partial completion never increments completed-round counts. History resumes only REQUESTED children and explicit retry uses the same key on ambiguous response. Related22 tests PASS plus MY regression123 PASS/2skipped (overlapping suites, do not sum). Typecheck/lint checked separately. New WEB deployment/PC-mobile/authenticated acceptance pending. Production still6b69acb3/a21642c; Worker c3fb54be unchanged. No additional live Provider/Credit transactions. MY redesign start prerequisite remains unmet; no claim of whole correction completion.

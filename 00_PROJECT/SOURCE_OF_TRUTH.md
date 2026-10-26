2026-10-26 후속: WEB `0704f33` / Production `069e9c29-c2a6-48c5-89d1-7a3c046b077e` success. 미제공 회차 하단 비활성 ‘첨삭 서비스 제공 예정’ 표시, 조회오류/확인중은 별도 유지. 고려 자연 운영조회는 오류가 관찰돼 실제 미제공 버튼 확인과 구분. Canonical `wiki/essay-web-studio-ui-20261026.md` 참조.

## 2026-10-26 — 문항 토글·입력 메뉴 배포

WEB `8cb9342`, Production `3909b32a-faa2-4d75-b9d8-a72c5c66005a` success. 첫문항 펼침/나머지접힘, 저장 후 다음 미작성 문항·사용자 토글 우선, TEXT/문항별Math 입력 구분. 운영 한양2027상경 기존 텍스트/사진 복원·CTA 확인, 실제 제출/Provider0. 관련17검사·typecheck/build PASS, lint 기존경고2. 건국자연1번 실제 Math 최초/재첨삭·합성인쇄이미지 성공은 재사용; 다문항 자연계/타대학 공식시험 성공은 확정하지 않음. APP·DB·Worker·Credit 계약 불변.

[Canonical UI·기존 Math 증거·복구](https://github.com/LC3808/legendstudy-app/blob/f4aa989f9a58e9268873a9606cad6000a5a63ab9/wiki/essay-web-studio-ui-20261026.md). UI 롤백은 Pages `bb120a6a-c50c-4ced-80ed-d11860fec1f0`. 아래는 이전 배포 기록이다.

## 2026-10-26 — 완료 결과 화면 통합 배포

최신 WEB `ce433f8`, Production `bb120a6a-c50c-4ced-80ed-d11860fec1f0` success. 작성 화면 하단 결과 제거, 완료/History 동일 결과 전용 URL·컴포넌트 사용. 전체 문항 완료 시만 자동 이동, 4단계 표시 삭제, 비교 없는 성장 영역 숨김. 기존 한양 완료 결과와 무료 재작성 0Credit UI 확인. Typecheck·lint(기존경고2)·관련UI·build 확인, Provider/추가차감0. APP·DB·Worker·Secret 불변.

[Canonical 구현·운영 확인·복구](https://github.com/LC3808/legendstudy-app/blob/31ad1a90dd484f51fb7d69a50c4a97b13dc1573b/wiki/essay-web-studio-ui-20261026.md). 롤백은 Pages `93aaf61c-13f3-463e-8257-099c6178a028`만 대상. 아래 기록은 이전 배포 시점이다.

## 2026-10-26 — WEB 작성·진행 UI Production 반영

네이비 대학 히어로·전체 문항 카드·저장/사진 확인·회차 제출·실제 상태 진행 모달·History 목록 표현 변경. 결과 상세·Flutter APP·DB·평가 Worker·Secret 불변. Pages `93aaf61c-13f3-463e-8257-099c6178a028` production/success, 소스 `894180c`, WEB 최종 `376e6b2`는 후속 테스트만 추가. Typecheck/build/UI 검사 PASS, lint 오류0/기존경고2. 일반계정 입력·부분제출 모달·PDF 확인, 최종평가 제출0/Provider0/추가차감0. 실제 진행은 합성 상태로 검사했으며 새 평가 E2E로 보고하지 않는다.

[Canonical UI·검사·제한·복구](https://github.com/LC3808/legendstudy-app/blob/07b356823675a92af17a330e66acec34b1a0acca/wiki/essay-web-studio-ui-20261026.md). 이전 고려·상경 기록은 해당 시점의 증거로 보존한다. UI 롤백은 Pages `758c9a18-f1a2-49b3-87f9-bd0b9e52b8ba`; DB/Worker 복구 불필요.

## 2026-10-26 — 고려4회차 STANDBY·서강 예약 해제 완료

Owner 승인SQL 사전18/사후7 true. 고려 인문4회차8문항은 일반계정 WEB에서 PDF·전체 문항 표시·입력 자동저장·첨삭 버튼 활성화 확인. 기존2025오후Q2 예외 보존. 실제 평가 미제출/OWNER QA PENDING. Worker `65fd5977-fbac-460a-bfc9-a38d836f6357`, WEB `758c9a18-f1a2-49b3-87f9-bd0b9e52b8ba` / `225cc2d`. 공개 scope147, Secret·Credit·History 계약 보존. 서강 실패 요청은 승인에 따라 release1/consume0 완료. 한양은 사진내용 확인0으로 제출 차단/예약0, Owner 확인 필요. 추가 Provider0. 잘못된 파일 확인 모달은 제안만 기록, UI 미변경.

[Canonical 결과·미완료·복구](https://github.com/LC3808/legendstudy-app/blob/a01ebf34deed59fe3757282950bbe66163a53008/wiki/commerce-korea-20261026.md). 아래 승인대기 기록은 이전 시점이다.

## 2026-10-26 — 상경 정책·고려 연결 준비 / 승인 대기

Worker `c2766277-c063-4ef8-8ea9-af7c841f33a9` 상경 정책 선택 모듈 반영, 기존 Essay/Math·정산·History 보존. WEB `c244b76f`/`2fbde34` 및 진행 직후 UI 불변. 고려인문4회차8문항 SQL준비·사전18true/승인대기, 신규STANDBY0, 기존오후Q2 보존. 자연5회차 Math연결 미완료. 한양사진 Owner확인대기/예약0. 서강2025모의경제경영2차 대표평가 독립검수실패, 예약1/확정0/해제승인대기. Provider2회/27,930tokens/금액NULL. 성공E2E로 보고하지 않는다.

[Canonical 실제 결과·SQL·요청ID·재개순서·복구](https://github.com/LC3808/legendstudy-app/blob/178213c82ef79484df68ae20507702cff902d971/wiki/commerce-korea-20261026.md).

## 2026-10-26 — 서강·고려 카드 활성화 및 우선 배치

운영 일반계정에서 서강→고려 순서와 첨삭 시작 링크 확인. 고려는 Owner 명시 승인으로 2025수시 인문오후 문제2만 예외 공개하며 전체회차 완료 수에 포함하지 않는다. WEB `c244b76f-aafa-4301-bdb7-70b922b4cc3c` / `2fbde34`, Worker `57dfa6c1-6bc8-4616-8dbe-78e516df727c`, 공개 scope143. 기존 DB 승인·Secret·Credit·History·Ledger 보존, SQL쓰기/Provider/평가제출0. 한양 사진확인 대기 상태 유지.

[Canonical 범위·Owner 예외 결정·복구](https://github.com/LC3808/legendstudy-app/blob/c6b2c12521d2c5b2e34d687862b3a91493d1507e/wiki/essay-standby-expansion-20261026.md).

## 2026-10-26 — 한양2027 모의 상경 사진 확인 경로 수정

실제 운영 조사: Q1 Essay/Q2 Math child 연결이며 시험 전체 Math 전환 아님. 사진 추출 COMPLETED/학생확인0, 평가·회차·Credit예약0. 해당 시험의 기존 사진 입력을 자동 복원하는 최소 WEB 수정 반영(`2737bf18-b6f7-453f-b784-48bdd2ae0d04`, source `d861586`). Worker `a99a7cfc`·DB·Secret·Credit/History/Ledger 그대로. 일반계정 재진입 시 기존 내용·‘이 내용으로 확인’ 자동 표시 확인. 실제 학생 확인 이후 제출/평가는 Owner 대기이며 E2E PASS 아님. 새 Provider/OCR 호출0.

[Canonical 장애 원인·기존 계약·Owner 다음 순서·복구](https://github.com/LC3808/legendstudy-app/blob/87810aa4f499bff3be00cda27513af8c90c6d6e9/wiki/hanyang-mixed-incident-20261026.md). 앞선 신규54 및 기존82 STANDBY 범위는 보존한다.

## 2026-10-26 최신 — 외대·건국·서강 신규 54회차 STANDBY

한국외대 대상20/신규20/보류0, 건국 대상14/신규12/기존1/보류1, 서강 대상23/신규22/기존1/보류0. **일반계정 Production WEB에서 전체 답안 입력·저장·PDF·서버 1 Credit 안내창까지 확인**, 최종 제출 취소. STANDBY / OWNER QA PENDING이며 E2E PASS 아님. Provider·신규평가·차감0. 기존 중앙21·경희24·성균16·한양21=82회차 보존. 고려대 변경0, APP UI/빌드/스토어 작업0.

건국2026수시 인문1회차는 기존 제출 처리 상태 확인 안내로 서버 안내창 확인을 보류했다. 기존 답안·제출키·History를 지우지 않는다. WEB `aedbf200-98f1-46c9-b565-a94bb9d3fddf` / source `c01caf0`, Worker `a99a7cfc-022d-4408-84b5-cc9c44f967dd` 100%. 기존91정책·금융/조회5함수·기존ID 보존 확인. 공개 ID142는 STANDBY 완료 수와 구분한다. Worker/Pages Secret 보존.

[Canonical 전체 회차 목록·SQL 적용/재실행 금지·Owner QA·복구·후속 순서](https://github.com/LC3808/legendstudy-app/blob/8aaf6fe83abd678635e89bb867d7b362b1acdc6e/wiki/essay-standby-expansion-20261026.md). APP/Worker/Wiki branch `codex/material-service-app-20261022`, WEB branch `codex/web-app-release-20261024`. 기존82회차 마감은 아래 역사 기록으로 보존한다. 이번 추가 개발 종료, 다음은 Owner 실제 답안 검수와 지정 오류 수정이다.

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

## 2026-10-26 최신 마감 — 4대학 WEB STANDBY 82회차

중앙21·경희24·성균16·한양21, 신규21회차(한양상경8/중앙11/경희2). 한양2025모의 인문·상경2회차는 공식자료 부족으로 미완료. **STANDBY / OWNER QA PENDING**, 실제 Provider 평가/E2E PASS 아님. Provider·신규run·차감0, 일반계정 잔액10. WEB `a8f3ba51-4c00-4bd7-8896-72f233d17817`/source `a6accdf`, Worker `5fe85e6c-2ba4-4562-8943-b2d2ead9eb6b`100%. Native 혼합 제출/결과 호환 GAP; APP빌드·스토어 작업 없음.

[Canonical 인수인계: 범위·실측·SQL 재실행 금지·Owner QA·롤백](https://github.com/LC3808/legendstudy-app/blob/839b156d643226fd255c959baf76712c81c9377c/wiki/essay-handoff-20261025-final.md#2026-10-26-최종-추가-작업--standby-82회차). 아래 이전 시점 보류/승인 대기 기록보다 이 마감과 canonical 기록을 먼저 읽는다. 새로운 개발은 종료했으며 다음은 Owner 실제 답안 검수다. 기존 Credit/History/Ledger/Secret 보존.



## 2026-10-25 최신 Owner 정책 — 전체 대학 STANDBY

[전체 대학 공통 개발 원칙](https://github.com/LC3808/legendstudy-app/blob/7419d631355a2d59ba8b9e80770747cf26b94589/wiki/essay-batch-service-20261023.md#2026-10-25--전체-대학-standby-공통-정책). 실제 Provider 평가·가상답안·문항별 품질 검수는 STANDBY의 선행조건이 아니다. 전체 회차의 문항/PDF/입력·저장/Registry/공식근거/기존Worker·승인 연결만 완료하고 **STANDBY / OWNER QA PENDING**으로 구분한다. E2E PASS나 Owner검수완료로 표시하지 않는다. 기존 인증·공개승인·Credit·History·Ledger를 보존하며 버튼 강제활성화 금지.

중앙인문10회차·30문항 WEB STANDBY(기존 연결증거 재사용) → Owner확인 → 중앙경영경제 → 경희 → 성균. 다른 대학은 지정 시 진행. 모든유형 공통원칙이며 일괄 공개승인이 아니다. 기존 운영Worker3e31db73/WEB2cc8cd0a 유지, APP수정·빌드·스토어 중단. 이번정책반영 Provider/DB/코드/배포변경0.


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

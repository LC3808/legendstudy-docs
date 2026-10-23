## 2026-10-23 21:11 KST 최신 — 현재 Production Secret5개 빈 값 확정

기존 WEB을 교체하지 않는 Production 빌드 전용 진단0cc2b617에서 Essay Registry JWT/Service Token, Math Evaluation JWT/Extraction JWT/Provider key 모두 **EMPTY_VALUE** 확인. 변수 미주입과 구분했다. 인증 HTTP 미전송(401 아님), Provider0/DB변경0. 진단 exit73으로 새 배포 차단, 정상a8796fb4 및 pnpm build 복원·보존. Owner에게 확인된5개만 기존값 복원 요청; 카카오·토스·결제 변경 제외. 이전9개 전체복원 요구는 이 범위로 정정한다. 복원 후 인증 재검증·서울여 E2E·전체512연결은 미완료. [실행증거·복구절차](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md#current-project-secret-diagnosis--2026-10-23-2111-kst).

## 2026-10-23 최신 — 전체512 일반계정 기본 / 배포 복구 대기

Owner 지시: 일반계정 공개 기본, 기존 Essay/Math와 대학별 프로필 재사용, 전체512문항을 묶음 검증·활성화. Production SQL은 Owner 직접 실행. 512ID와 상속423 재대조PASS,89미상속 유지. 기존5대학7문항E2E/공개3 보존. 서울여 SQL사후15true·입력조립PASS이나 실제운영1/0Credit·신규History·WEB/APP 미완료. [전수 대학별 표·분류 한계](../90_HISTORY/REVIEWS/2026-10-23-essay-batch-service.md).

**복구 필요:** agent의 Pages 설정 PATCH가 마스킹된 Secret값을 재전송했고 신규배포에서503 WORKER_UNAVAILABLE 발생. 이전 a8796fb4로 롤백해 기존 성균 첨삭 버튼 활성 복구 확인. 다음 배포 전 Production Secret9개 기존값 복원 필요, Owner 확인 대기. 결제/Auth 전체 재검증은 미완료이며 설정 보존을 주장하지 않는다. 이번 Provider0/DB변경0; 기존 격리143호출·추산USD11.763768 유지. [오류 원인·영향·복구·필요조치](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md#swu-public-configuration-incident-and-rollback--2026-10-23).

아래는 과거 체크포인트이며 위 최신 상태를 우선한다.

## 2026-10-23 최신 — 11대학 연결 후속 / 서울여대 Owner SQL 사후검증 PASS

성균 일반계정1/0Credit·WEB/GalaxyS8 History와 기존 UI 배포 완료를 재사용한다. UI 추가 수정 없음. 운영E2E5대학7문항/일반공개3문항, 프로필423/512·미상속89 유지. 서울여·숭실 미검증 재작성/대안 실제Provider·독립8항목PASS. 서울여Q1 Worker80e1badb 배포/설정보존PASS·격리SQL11검사/운영사전10true, **Owner 적용·독립 사후15true**. 신규 운영 History 자동반영·1/0Credit·WEB/APP는 적용 이후 미완료다. 경희 대안의 의미과잉진단·항공 인용범위 실패는 v16격리후보 재검증PASS, 회귀/운영승격은 미완료로 운영v15 유지. 이번16호출/추정USD1.276760, 격리누적143호출(142완료/1미확정)/USD11.763768, 실청구미확인·운영Credit0. [11대학표·최신비용·Owner SQL·배포·실패](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md).

아래는 날짜별 과거 체크포인트이며, 이전 공개2/상속387·125/운영5·6 수치를 현재 값으로 사용하지 않는다.

## 2026-10-23 최신 — History 자동갱신·저장된 평가 근거 표시 수정 PASS

성균 Q1 일반계정 실제1/0Credit·WEB/APP History PASS 유지. 복귀/재활성화/주기 History 갱신, 기준별 저장판단·근거참조 표시 수정. WEB a8796fb4/ca6022b·GalaxyS8 build2026102303 실제표시PASS. WEB4·Native26검사·빌드PASS. 기존정책/ID/평가기록·Ledger 보존검증PASS. 추가Provider/Credit0·SQL없음. [상세·검증범위·복구](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md).

## 2026-10-23 최신 — 고려 대표 운영 E2E PASS

## P0 direct execution — Oct23 in progress
Payment UI integrated (APP e40fb38); Flutter3.47.6/Dart3.13.5. Android/iOS Production builds and existing-app physical update installations PASS; actual physical E2E pending. Owner confirms SKKU PDF service-use rights. New7-university quality/SQL/public rollout ongoing; existing4universities6E2E/public2questions unchanged. [Evidence and open failures](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md).

고려2025수시 인문2 Owner SQL 적용 후 DB전체사후검증 PASS(revision2·단일문항·v12·기존ID/다른정책/submit 보존). WEB 최초/무료재첨삭 completed·독립검수8항목PASS, Credit1/0·잔액97→96, Native iOS Simulator History/결과/4→5비교 PASS. 새실패0, Provider4회/추산USD0.292664(기존격리59회와별도). 기존423/89·공개2 유지, 운영E2E5→6. 문항명/상세근거 표시 잔여 및 실기기 미검증. [실행ID·Ledger·품질·증거](../90_HISTORY/REVIEWS/2026-10-23-korea-operating-owner-sql.md).

## 2026-10-23 공식 예시답안 품질 검증 진행 — PARTIAL

기존 원본113개 해시대조, 숙명/서강/고려 공식 답안·변형 답안 실제 Provider 검증. 숙명 문장 관측 누락·고려 의미 과잉 해석을 v10 격리 후보에서 보완. 기존 runtime명시 binding만 허용, 회귀62개PASS. 부모 snapshot 고정/무료 재첨삭 보호 후보는 격리 PostgreSQL PASS, 운영 미적용. 고려 v11 공식대안 회귀 실패로 HOLD. 실제 Provider41회·추산USD3.378784, 실청구 미확인. 새 Production 변경/운영 E2E/Credit0, 전체11대학 미완료. [품질 결과·실패·비용 체크포인트](../90_HISTORY/REVIEWS/2026-10-23-official-answer-quality.md).

<!--

## 최신 체크포인트 — 2026-10-23 프로필 대표3문항 운영 E2E

숙명2025모의1-1 APP 실제 최초·무료재첨삭→WEB, 숙명2026수시1/서강2026모의 경제경영 WEB 실제 최초·무료재첨삭→APP PASS. Credit 각1/0·실패3건0, 관리자잔액97. Worker `6b7593a4`, APP `b1d5b1c`; WEB source ad6ffec 및 config배포17244d3b. 신규3문항 일반공개 확대 없음; Android/iPhone 신규코드 미검증. 전체11대학 PARTIAL, 387상속/125보완 유지. [실제 실행·장애·비용·대학별 범위](../90_HISTORY/REVIEWS/2026-10-23-university-profile-production-e2e.md). 아래 날짜별 상태는 과거 근거이며 이 최신 체크포인트와 구분한다.

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

## 대학별 평가 프로필 — 2026-10-23 설계 Authority

[Owner 전략](../90_HISTORY/REVIEWS/2026-10-23-university-evaluation-profile-strategy.md) 및 [PHASE1 표준](../90_HISTORY/REVIEWS/2026-10-23-university-evaluation-profile-phase1.md). 대학프로필은검수된공통방향, 문항별공식근거가최우선이다. 새물리DB source를만든것이아니며 기존Registry/reviews/revisions/Math profiles가 구현후보. 현재운영계약/성공2문항은보존, PHASE2 Owner검수대기.


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

## 2026-10-23 — PHASE 3 실제 운영 체크포인트

최신 Owner 통합 실행 승인 적용. 건국 인문2번 실제 APP 최초 첨삭→WEB 무료 재첨삭→APP History 교차조회 PASS(iOS Simulator), Credit1/0. 운영10 Provider 호출·보수비용USD0.972644. 전체11개 대학 서비스는 PARTIAL/공개HOLD. Math 전역OFF, 테스트 계정/leaf 한시 DB 예외 준비; 기존 Worker 인증 유효성 확인 필요. 과거 “Production 변경0/Provider 미실행”은 이전 체크포인트다. [최신 증거·정확한 변경·복구](../90_HISTORY/REVIEWS/2026-10-22-phase3-service-connection.md).

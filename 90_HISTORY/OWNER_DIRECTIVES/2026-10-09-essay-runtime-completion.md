# WORKING PRINCIPLE

빠르게.
가볍게.
정확하게.
사용자 중심.

에이전트가 할 수 있는 일은 Owner에게 넘기지 말고 직접 끝까지 수행한다.
중간 질문·수동 SQL·터미널 작업을 Owner에게 요구하지 않는다.

Owner intervention이 정말 필요한 항목만 BLOCKED로 기록하고,
그와 독립적인 작업은 계속 진행한다.

# LEGENDSTUDY LAB — ESSAY RUNTIME COMPLETION
## CODEX CONTINUE
## Owner 승인: 2026-10-08

==================================================
0. 현재 상태
==================================================

직전 결과:

ESSAY_WEB_RUNTIME: PARTIAL

완료:

- Humanities Web adapter
- Math Web runtime reuse
- private storage / ownership boundary
- Credit/idempotency/failure recovery contract reuse
- rewrite / reevaluation / history regression PASS
- anonymous gateway denial verified
- LAB 824 PASS
- Python 31 PASS
- PostgreSQL 신규/회귀 10 PASS
- lint/typecheck/boundary/build PASS
- Production code deployed
- Wiki updated

미완료:

- authenticated real evaluation E2E
- Humanities real problem/rubric/provider connection
- Economics/Business mixed orchestration
- Science evaluator/rubric/fixture
- 010 Production apply

Target 005:
HOLD

Payment/Toss/IAP:
FROZEN

==================================================
1. 목표
==================================================

이번 작업의 목표는
"foundation이 있다"가 아니라

학생이 실제 Web에서 논술 첨삭을 실행할 수 있는
최소 Production-ready runtime을 완성하는 것이다.

새 evaluation architecture를 만들지 않는다.

현재 존재하는:

Essay
Math
Credit
Entitlement
Storage
Worker
History
Rewrite/Reevaluation

를 최대한 재사용한다.

==================================================
2. 우선순위
==================================================

순서:

P1. 수리 논술 authenticated E2E 완성

P2. 인문·사회 실제 evaluation 연결

P3. 경제·경영 mixed runtime

P4. 과학 논술 runtime

앞 단계가 막혀도
독립적으로 진행 가능한 다음 단계는 계속한다.

==================================================
3. 수리 논술
==================================================

현재 가장 완성도가 높은 Math runtime부터 닫는다.

실제 flow:

문제 선택
→ 답안 작성/이미지 업로드
→ private storage
→ 제출
→ entitlement/Credit 검증
→ 평가
→ 결과 저장
→ 결과 조회
→ 재작성
→ 재첨삭
→ History

전체 contract 확인.

실제 인증 테스트가 가능한 안전한 test account/path가 있으면
Codex가 직접 수행.

Owner에게 로그인/SQL/터미널 조작을 요구하지 않는다.

==================================================
4. 수리 Credit
==================================================

실제 E2E에서 반드시 확인:

최초 평가:
1 Credit contract

재첨삭:
동일 답안 14일 정책

idempotent retry:
중복 차감 없음

evaluation failure:
잘못된 Credit 소진 없음

provider retry:
중복 evaluation/grant 없음

현재 Credit architecture 변경 금지.

==================================================
5. 인문·사회
==================================================

기존 Humanities Web adapter를
실제 평가 가능한 상태로 연결.

필요:

- 실제 공개 가능한 문제
- 실제 evaluation rubric
- evaluator/worker
- evaluation persistence
- user result
- rewrite
- reevaluation
- history

현재 repository/DB/Storage에서
기존 authority를 먼저 찾는다.

없는 것을 새 architecture로 과도하게 만들지 않는다.

==================================================
6. 인문 평가 기준
==================================================

대학별 평가 기준이 존재하면
canonical rubric을 재사용.

없는 대학/문항에 대해
가짜 대학 rubric을 생성하지 않는다.

테스트용 synthetic fixture는
명확하게 test fixture로만 사용.

Production user-facing에서
실제 대학 기출처럼 노출 금지.

==================================================
7. 경제·경영 mixed
==================================================

경제·경영은 단순 Humanities alias가 아니다.

Exam Type:

ECON_BUSINESS

Question Capability:

TEXT_REASONING
QUANTITATIVE
또는 필요한 기존 capability 조합

으로 분리.

한 시험/답안 안에서:

인문형 평가
+
정량/수리형 평가

가 공존할 수 있어야 한다.

==================================================
8. Mixed Evaluation
==================================================

경제·경영에서:

문항별 capability에 따라
적절한 evaluator를 호출하되,

사용자 관점에서는
하나의 Essay submission/evaluation experience로 보여야 한다.

내부 evaluator가 여러 개라는 이유로
Credit을 여러 번 차감하지 않는다.

==================================================
9. Mixed Credit
==================================================

경제·경영 mixed evaluation의 핵심:

한 학생 답안 evaluation에 대해
Product Credit contract는 하나.

내부에서:

Humanities evaluator
Math/quantitative evaluator

둘을 호출하더라도
중복 Credit 차감 금지.

부분 evaluator 실패 시
과금/결과 상태가 모순되지 않도록 한다.

현재 ledger/idempotency contract 재사용.

==================================================
10. Mixed Result
==================================================

결과는 사용자에게:

인문 평가 결과
수리/정량 평가 결과

를 내부 pipeline 이름으로 보여주지 않는다.

최종 사용자-facing evaluation 구조 안에서
통합 가능해야 한다.

Frontend redesign은 Claude/Manus 범위이므로
Codex는 result contract까지만.

==================================================
11. 과학 논술
==================================================

현재 비활성인 이유를 구체적으로 해소.

필요:

- science question capability
- validated rubric
- evaluator
- artifact/image support if required
- fixture
- persistence
- rewrite/reevaluation compatibility

기존 Math artifact/private-storage infrastructure를
재사용할 수 있는지 우선 검토.

==================================================
12. 과학 안전성
==================================================

과학 문항에 이미지/도표/수식이 있다면
public storage로 바꾸지 않는다.

private artifact contract 유지.

==================================================
13. 010 Migration
==================================================

직전 검증된 additive 010 후보를 다시 확인.

non-destructive이고
현재 Production deployment authority로
Codex가 직접 적용 가능한 경우:

직접 apply
→ hash
→ ACL
→ RLS
→ authenticated/anonymous behavior

까지 검증.

Owner에게 SQL Editor 실행을 요구하지 않는다.

실제 privileged 권한이 없으면
010만 BLOCKED로 기록하고
나머지 runtime 작업 계속.

==================================================
14. Provider
==================================================

현재 실제 evaluator/provider configuration을 확인.

credential을 코드/로그/보고서에 노출 금지.

Provider가 설정되지 않아 실제 evaluation을 호출할 수 없다면:

PROVIDER_BLOCKED

로 정확히 기록.

그 상태에서도:

request construction
validation
persistence boundary
failure handling
mock/fixture integration

은 가능한 범위까지 완료.

==================================================
15. Authenticated E2E
==================================================

Production credential을 임의 생성하지 않는다.

이미 승인된 safe test/review account 또는
test environment path가 존재하면 사용.

실제 권한이 없으면
Owner에게 중간 로그인 조작을 요구하지 않는다.

AUTH_E2E_BLOCKED

로 남기고 나머지 진행.

==================================================
16. Activation Gate
==================================================

각 유형별로 독립 상태 관리.

HUMANITIES:
ACTIVE / GATED

ECON_BUSINESS:
ACTIVE / GATED

MATH:
ACTIVE / GATED

SCIENCE:
ACTIVE / GATED

실제 E2E를 통과하지 않은 유형을
사용 가능으로 노출하지 않는다.

==================================================
17. Frontend Boundary
==================================================

Claude가 MY/Admin을 작업 중.

Manus가 Header/Icon/Favicon 작업 중.

Codex는:

MY
Admin visual
Header
Favicon
Global visual redesign

건드리지 않는다.

Essay Web runtime 연결에 반드시 필요한
최소 UI wiring만 허용.

==================================================
18. Production
==================================================

검증된 non-destructive runtime code는
기존 workflow로 직접 배포 가능.

다음은 Owner 승인 없이 금지:

- destructive migration
- Target 005
- Payment architecture
- Toss
- IAP
- Credit policy 변경

==================================================
19. Test Matrix
==================================================

최소:

Humanities:
submit / evaluate / fail / retry / rewrite / reevaluate / history

Math:
same

Economics/Business:
text-only
quantitative-only
mixed
partial evaluator failure
retry
single Credit

Science:
text
formula/artifact if supported
failure
retry
history

RLS:
A user cannot read B data

Storage:
private

Anonymous:
evaluation denied

==================================================
20. 완료 기준
==================================================

ESSAY_RUNTIME_COMPLETION은
유형별로 따로 판정.

Foundation 존재만으로 COMPLETE 금지.

실제 실행 가능한 유형만 COMPLETE.

==================================================
21. 완료 보고
==================================================

ESSAY_RUNTIME_COMPLETION:
COMPLETE / PARTIAL / BLOCKED

MATH:
- runtime:
- authenticated E2E:
- Credit:
- rewrite:
- reevaluation:
- history:
- activation:

HUMANITIES:
- problem:
- rubric:
- evaluator:
- authenticated E2E:
- rewrite:
- history:
- activation:

ECON_BUSINESS:
- mixed orchestration:
- text evaluator:
- quantitative evaluator:
- single Credit:
- partial failure:
- authenticated E2E:
- activation:

SCIENCE:
- capability:
- rubric:
- evaluator:
- artifact:
- authenticated E2E:
- activation:

MIGRATION_010:
- applied:
- verify:
- owner action:

CREDIT:
- architecture changed: NO
- duplicate consumption:
- failure recovery:

RLS:
...

STORAGE:
...

PROVIDER:
...

TESTS:
...

PRODUCTION:
...

OWNER_ACTION_REQUIRED:
YES / NO

If YES:
한 번에 모아서 마지막에만 작성.

PAYMENT_CHANGED:
NO

TOSS_CHANGED:
NO

IAP_CHANGED:
NO

TARGET_005:
HOLD

MY_ADMIN_CHANGED:
NO

MANUS_VISUAL_CHANGED:
NO

WIKI:
...

완료 후 STOP.

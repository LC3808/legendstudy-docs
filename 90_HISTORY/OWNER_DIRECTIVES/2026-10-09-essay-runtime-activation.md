# LEGENDSTUDY LAB — ESSAY RUNTIME ACTIVATION
# CODEX IMPLEMENT GO
# 2026-10-09

==================================================
WORKING PRINCIPLE
==================================================

빠르게.
가볍게.
정확하게.
사용자 중심.

Owner를 SQL 실행자나 터미널 작업자로 사용하지 않는다.

기존에 연결된 권한과 배포 경로를 최대한 재사용한다.

중간 질문 없이 독립적으로 가능한 작업을 진행한다.

권한이 실제로 없는 작업은 BLOCKED로 기록하고
나머지 작업은 계속 진행한다.

==================================================
1. 현재 기준
==================================================

직전 보고:

ESSAY_RUNTIME_COMPLETION: PARTIAL

LAB main:
390ac39

APP candidate:
23d4555

Wiki:
36da4d5

Migration 010:
Production 미적용

Target 005:
HOLD

위 SHA는 이전 작업의 기준이다.

시작 시 최신 remote와 Wiki를 다시 확인한다.

==================================================
2. 현재 유형별 상태
==================================================

MATH:
Runtime 및 SQL↔Web 검증 완료.
실제 인증/provider E2E 미완료.

HUMANITIES:
학생 RPC와 worker adapter 구현.
실제 문항/rubric/provider 연결 필요.

ECON_BUSINESS:
Mixed orchestration 구현.
Canonical DB persistence 및 실제 단일 과금 검증 필요.

SCIENCE:
Rubric/evidence/artifact adapter 구현.
실제 콘텐츠/저장/History/E2E 필요.

네 유형 모두 GATED.

==================================================
3. 오늘의 최우선 목표
==================================================

실제 평가 1건을 성공시킨다.

우선 MATH부터 진행한다.

학생 인증
→ 문제 선택
→ 답안 작성/업로드
→ 제출
→ Credit 확인
→ 평가 실행
→ 결과 저장
→ 결과 조회
→ 재작성
→ 재첨삭
→ History

이 흐름을 실제 연결된 환경에서 검증한다.

실제 Provider 호출과 DB 결과가 없으면
E2E COMPLETE로 보고하지 않는다.

==================================================
4. 기존 권한 확인
==================================================

어제 Codex는 Production DB 적용 권한이 없다고 보고했다.

하지만 이전 작업에서는
Production migration 적용이 가능했던 기록이 있다.

따라서 먼저:

- 이전 migration 적용 방식
- 현재 실행 환경
- Supabase 연결 상태
- Cloudflare deployment 경로
- 기존 CI/CD
- service_role 접근 방식

을 확인한다.

새 credential 발급부터 요구하지 않는다.

기존 검증된 배포 경로가 있다면 재사용한다.

실제 권한이 없으면
권한 부재를 구체적으로 기록한다.

==================================================
5. Migration 010
==================================================

기존 additive 010 후보를 확인한다.

Production 적용 권한이 있다면:

migration diff 검증
→ apply
→ function hash
→ ACL
→ RLS
→ anonymous denial
→ authenticated behavior

까지 수행한다.

권한이 없으면:

MIGRATION_010:
BLOCKED_NO_PRIVILEGE

로 기록.

Owner에게 SQL Editor 실행을 요청하지 않는다.

010이 없어도 가능한 독립 작업은 계속 진행한다.

==================================================
6. Provider / Worker
==================================================

현재 기존 provider/worker 연결을 조사한다.

확인:

- 실제 provider adapter
- worker deployment
- environment configuration
- secret reference
- evaluation request
- callback/result handling
- retry
- timeout
- persistence

Secret 값을 출력하거나 저장하지 않는다.

현재 연결된 credential을 임의 변경하지 않는다.

Provider가 미설정이면
코드 연결과 테스트를 가능한 범위까지 완성하고
운영 설정만 BLOCKED로 남긴다.

==================================================
7. 인증 E2E
==================================================

기존 승인된 테스트 계정 또는
안전한 인증 테스트 경로가 있는지 확인한다.

가능하면 Codex가 직접 실행한다.

실제 Production 사용자의
Credit을 임의 소모하지 않는다.

테스트 전용 환경/계정을 우선한다.

인증 경로가 없다면
AUTH_E2E_BLOCKED로 기록한다.

중간에 Owner 로그인을 요구하지 않는다.

==================================================
8. MATH
==================================================

수리 논술을 우선 완성한다.

필수 검증:

- 최초 평가 1 Credit
- 동일 답안 재첨삭 1회 포함
- 14일 경계
- 중복 요청 차감 방지
- 평가 실패 복구
- 결과 저장
- History 조회
- 타인 데이터 접근 거부
- private artifact

실제 연결 가능한 항목은 E2E 수행.

==================================================
9. HUMANITIES
==================================================

기존 학생 RPC와 worker adapter를 사용한다.

실제 공개 가능한 문제와 rubric을 찾는다.

검토된 콘텐츠만 사용한다.

가짜 대학 기출/평가기준 생성 금지.

평가 결과 저장과
재작성/재첨삭/History 연결을 완성한다.

==================================================
10. ECON_BUSINESS
==================================================

경제·경영은 독립 유형으로 유지한다.

Exam Type:
ECON_BUSINESS

Question Capabilities:
TEXT_REASONING
QUANTITATIVE

기존 mixed orchestration을 재사용한다.

이번 작업에서 특히:

canonical DB persistence
single parent evaluation
single Credit consumption
partial failure recovery
retry idempotency

를 완성한다.

내부 evaluator가 2개여도
학생에게 Credit을 2번 차감하지 않는다.

==================================================
11. SCIENCE
==================================================

기존 rubric/evidence/artifact adapter 재사용.

검증된 콘텐츠가 존재하는지 확인한다.

없는 rubric을 임의 생성하지 않는다.

가능한 범위:

- canonical persistence
- History
- rewrite
- reevaluation
- private artifact
- failure handling

까지 구현한다.

==================================================
12. Activation Gate
==================================================

실제 검증이 완료되지 않은 유형은
GATED 유지.

유형별 독립 판정:

MATH
HUMANITIES
ECON_BUSINESS
SCIENCE

하나의 유형이 완료됐다고
다른 유형까지 활성화하지 않는다.

==================================================
13. Production
==================================================

검증된 비파괴적 코드 변경은
기존 승인된 workflow로 직접 배포 가능.

단 실제 평가 활성화는
해당 유형의 E2E 통과 후 진행한다.

금지:

- Payment 변경
- Toss 변경
- IAP 변경
- Signup Credit 변경
- Credit 정책 변경
- Target 005 적용
- destructive migration

==================================================
14. 병렬 작업 보호
==================================================

Claude:
APP 출시 준비 또는 별도 UI 작업

Manus:
Copacabana 홈페이지

Codex:
Essay Runtime

MY/Admin frontend를 다시 수정하지 않는다.

Header/Favicon/Brand asset 수정 금지.

==================================================
15. 검증
==================================================

최소:

lint
typecheck
full tests
boundary
build

추가:

SQL integration
RLS
Credit idempotency
private storage
worker/provider integration
authenticated E2E

실행하지 못한 테스트는 PASS로 보고하지 않는다.

==================================================
16. Wiki
==================================================

완료된 사실과 미완료 상태를 구분해 기록한다.

Foundation 완료와
실제 Production 평가 활성화를 혼동하지 않는다.

==================================================
17. 완료 보고
==================================================

ESSAY_ACTIVATION:
COMPLETE / PARTIAL / BLOCKED

MATH:
- authenticated E2E:
- provider:
- Credit:
- rewrite:
- history:
- activation:

HUMANITIES:
- problem:
- rubric:
- provider:
- persistence:
- activation:

ECON_BUSINESS:
- mixed:
- canonical persistence:
- single Credit:
- retry:
- activation:

SCIENCE:
- content:
- evaluator:
- artifact:
- persistence:
- history:
- activation:

MIGRATION_010:
- status:
- apply method:
- blocker:

PROVIDER_WORKER:
...

AUTH_E2E:
...

TESTS:
...

PRODUCTION:
...

WIKI:
...

OWNER_ACTION_REQUIRED:
YES / NO

필요한 경우 마지막 보고서에
Owner 작업을 한 번에 모아서 작성한다.

DB_CHANGED:
...

PAYMENT_CHANGED:
NO

TOSS_CHANGED:
NO

IAP_CHANGED:
NO

TARGET_005:
HOLD

완료 후 STOP.

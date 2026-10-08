# EXECUTION AUTHORITY UPDATE — 2026-10-08

Owner latest override; applies before the original directive below.

## PREDECESSOR CLOSEOUT

MY_DATA_APPLICATION_STUDENT360: PARTIAL, next foundation explicitly permitted.
Production006/007/008 applied; function hash/ACL/RLS PASS; LAB main507ed7b deployed;
actual anonymous RPC denial verified;536 tests/lint/typecheck/boundary/build PASS;
Wiki d3c5b20. Manus visual preserved; Payment/Toss/IAP unchanged.

## REMAINING ACCEPTANCE — DO NOT REDESIGN

Owner authenticated Application save/reload and APP Timer/Web MY time match remain
pending. Reuse architecture; update acceptance status only when results arrive.
Target multi-division005 remains HELD: existing uniqueness replacement and pinned
Flutter/APP runtime compatibility require separate Owner approval. Never bundle005
with the next migration or infer approval from this directive.

## CURRENT AUTHORITY

Reuse the existing Application, events, Study and Student360 foundation. No new
Application/Web Timer/Student360 database. Latest APP/LAB/DOCS fetch is required;
newer-than-d3c5b20 authority wins. Signup Credit CLOSED/FROZEN, Payment/Toss FROZEN,
IAP out of scope, Manus visual preserved.

Implementation clarification (verified migration files, not a changed product policy):
006 owns Application **and Events**;007 owns Study summary;008 owns Student360/Essay
summary. Owner update's Events007/Study008 prose numbering does not authorize
renumbering or rebuilding the applied functions.

## NEXT WORK

Track A: Admin entire-member list, server pagination/search/filter/sort, school name,
existing detail→Student360. Track B: Humanities/Social, Economics/Business, Math,
Science; read-only inventory→gap analysis→minimal additive foundation. No large
runtime rewrite. Original COMPLETE-only start condition is superseded by this
explicit permission to proceed with predecessor PARTIAL.

---

# LEGENDSTUDY+ — ADMIN MEMBER MANAGEMENT + ESSAY PLATFORM NEXT FOUNDATION
## CODEX NEXT IMPLEMENT / DESIGN GO
## Owner 승인: 2026-10-08
## 실행 조건: 현재 진행 중인 작업 COMPLETE 후 시작

==================================================
0. 실행 조건
==================================================

현재 진행 중인 Codex 작업을 먼저 완전히 close한다.

현재 작업과 이 지시서를 섞지 않는다.

완료 보고
→ latest Git/Wiki/Production authority 재확인
→ 이 지시서 시작.

==================================================
1. 이번 단계의 두 축
==================================================

TRACK A
ADMIN MEMBER MANAGEMENT / STUDENT 360

TRACK B
ESSAY PLATFORM MIXED-MODE FOUNDATION

두 작업은 서로 다른 영역이다.

동일 코드/DB를 억지로 연결하지 않는다.

==================================================
2. 작업 원칙
==================================================

FAST
MINIMUM ADDITIVE CHANGE
REUSE EXISTING AUTHORITY
NO BIG-BANG REFACTOR

특히 Essay는 기존:

Humanities Essay
Math Essay

구현을 버리지 않는다.

새 시스템을 처음부터 다시 만들지 않는다.

==================================================
3. 최신 authority
==================================================

반드시:

git fetch origin

APP
LAB
DOCS

최신 remote 확인.

Unified Wiki:

AI_CONTEXT
CURRENT_STATUS
latest DAILY
Essay 관련 design/history

확인.

Production Supabase도 필요한 범위에서
READ-ONLY inventory.

==================================================
PART A — ADMIN MEMBER MANAGEMENT
==================================================

==================================================
4. 현재 Admin 회원 관리 문제
==================================================

현재 `/admin/members/`는:

email
또는
UUID

를 알아야만 회원을 찾을 수 있다.

운영 UX로 부적절하다.

Admin 진입 즉시
회원 전체 목록을 볼 수 있어야 한다.

==================================================
5. 기본 회원 목록
==================================================

`/admin/members/`

진입:

전체 회원의 paginated list 표시.

상단:

회원 관리
전체 N명

[검색]
[필터]

목록.

==================================================
6. 목록 최소 정보
==================================================

Desktop 기준 후보:

회원
계정 상태
학교·학년 / 현재 상태
희망 전공
첨삭권
최근 활동
가입일

실제 authority가 없는 field는
가짜 값으로 만들지 않는다.

==================================================
7. 회원 identity
==================================================

display_name/nickname authority가 있으면:

display name
email

순.

없으면:

email

primary.

UUID는 기본 column에서 숨긴다.

UUID 검색 capability는 유지 가능.

==================================================
8. 학교 표시
==================================================

DB:

school_code

canonical.

Admin display:

school_name.

숫자 NEIS code를
primary UI에 노출하지 않는다.

예:

상명고등학교 · 고1

==================================================
9. 회원 검색
==================================================

최소:

email
display name if canonical
UUID

지원.

Essay answer body
자유 서술
학생 작성 내용

full-text 검색 금지.

==================================================
10. 필터
==================================================

실제 authority 범위에서:

계정 상태
학생 상태
학년
학교

지원.

추후 확장 가능:

활성
Credit
지원대학
이용권

하지만 P0를 과도하게 키우지 않는다.

==================================================
11. Sorting
==================================================

최소:

최근 가입순
오래된 가입순

canonical recent activity가 있으면
최근 활동순 추가 가능.

==================================================
12. Pagination
==================================================

전체 auth.users를 browser에 내려
client filtering하는 구조 금지.

Server-side pagination.

20~50/page 수준에서
기존 Admin style에 맞게 결정.

==================================================
13. N+1 금지
==================================================

회원 한 명마다:

Credit RPC
NEIS API
Essay RPC
Study RPC

호출 금지.

bounded Admin list query/RPC 사용.

==================================================
14. Member Detail
==================================================

row click:

기존 Member Detail
→ 향후 Student 360

으로 연결.

새 상세페이지를 중복 생성하지 않는다.

==================================================
15. Student 360
==================================================

기존 foundation을 이어간다.

최종적으로:

기본정보
이용현황
학습시간
성적
논술
지원현황

을 한 학생 기준으로 연결.

이번 단계에서는
기존 authority가 있는 데이터만 표시.

==================================================
16. Admin 회원 목록 보안
==================================================

일반 authenticated user:

DENY.

Admin:

ALLOW.

Quality-only operator:

Admin allowlist에 없으면 DENY.

PII 최소화.

Essay answer 전문은 목록에 절대 포함하지 않는다.

==================================================
PART B — ESSAY PLATFORM PRODUCT TAXONOMY
==================================================

==================================================
17. Owner 신규 제품 결정
==================================================

논술 LAB의 사용자-facing 시험 유형을
단순 Humanities / Math로만 보지 않는다.

최종 방향:

1. 인문·사회 논술
2. 경제·경영 논술
3. 수리 논술
4. 과학 논술

경제·경영 논술을
일반 인문논술에 완전히 묻지 않는다.

==================================================
18. 경제·경영 논술을 별도로 보는 이유
==================================================

상경계열 논술은 대학에 따라:

제시문 독해
논증
경제 개념
통계/자료 해석
표/그래프
계산
수학 문제

가 한 시험에 혼합될 수 있다.

따라서:

Humanities-only evaluation

으로 처리하면 부족할 수 있다.

반대로:

Math-only evaluation

으로 처리해도 잘못된다.

==================================================
19. 핵심 Architecture 결정
==================================================

사용자-facing taxonomy와
evaluation runtime을 분리한다.

USER-FACING EXAM TYPE:

humanities_social
business_economics
math
science

정확한 internal enum/code는
기존 naming authority를 확인 후 결정.

하지만 개념은 이 4분류.

==================================================
20. 새 엔진 4개를 만들지 않는다
==================================================

중요.

경제·경영용 evaluation engine을
처음부터 별도로 만들지 않는다.

과학도 무조건 독립 monolithic engine으로 만들지 않는다.

기존 capability를 조합한다.

==================================================
21. Mixed-mode Evaluation
==================================================

목표:

Exam
→ Question
→ Required Capability
→ Evaluation Pipeline(s)

구조.

예:

경제·경영 시험

Q1
humanities

Q2
humanities + quantitative/data

Q3
math

처럼 문항별로 다르게 처리 가능해야 한다.

==================================================
22. Exam type와 Question capability 분리
==================================================

매우 중요.

Exam:

연세대학교
2027학년도
경제·경영 논술

이라고 해도

모든 문항이 같은 평가유형일 필요는 없다.

따라서:

exam_type

과

question evaluation capability

를 동일 field 하나로 처리하지 않는다.

==================================================
23. Capability 후보
==================================================

기존 runtime을 먼저 조사한 뒤
최소 taxonomy를 제안한다.

개념 예:

humanities_reasoning
quantitative_reasoning
math_solution
science_reasoning
data_interpretation

그러나 이번 지시서의 이름을 그대로
새 enum으로 무작정 만들지 않는다.

기존 schema/runtime과 대조 후
최소한의 capability model을 설계한다.

==================================================
24. 경제·경영
==================================================

경제·경영은 예를 들어:

Humanities reasoning
+
Data interpretation
+
Quantitative/Math

capability를 문항별로 조합.

대학/시험마다 다를 수 있다.

==================================================
25. 과학논술
==================================================

과학논술도 단순 text essay가 아니다.

가능한 입력:

과학 서술
수식
계산
그래프
표
도식
화학식
반응식

따라서 필요 시:

Science reasoning
+
Math
+
Image/artifact understanding

조합 가능해야 한다.

==================================================
26. 기존 Humanities Runtime 재사용
==================================================

현재:

Essay session
attempt
evaluation
dimensions
progress

등 existing authority를 최대한 재사용.

새 Essay History DB 금지.

==================================================
27. 기존 Math Runtime 재사용
==================================================

기존:

private storage
artifact
runtime RPC
Math evaluation

구조를 재사용.

Math를 별도 제품 silo로만 두지 않고
Essay Platform에서 사용할 수 있는 capability로
확장 가능한지 분석한다.

==================================================
28. Big-bang migration 금지
==================================================

이번 단계에서:

Humanities DB 전면 재설계
Math DB 전면 재설계
Evaluation 전체 rewrite

금지.

먼저 Gap Analysis.

==================================================
29. Essay Platform 공통 Flow
==================================================

장기 목표:

University
→ Academic Year
→ Exam
→ Question
→ Answer
→ Evaluation
→ Rewrite
→ Re-evaluation
→ Growth

모든 논술 유형이
이 공통 learning loop를 공유한다.

==================================================
30. Answer Input
==================================================

유형별로 입력을 분리된 제품으로 만들지 않는다.

공통 Answer submission platform에서:

Text input
Image upload

지원.

필요한 유형에서 image를 활성화.

==================================================
31. 인문·사회
==================================================

Text:
중요.

Image:
지원 가능.

주요 평가:

독해
논제 이해
논증
제시문 활용
구성

실제 rubric authority에 따라 결정.

==================================================
32. 경제·경영
==================================================

Text
+
Image

둘 다 중요.

이미지에는:

수식
계산 과정
표
그래프

등이 포함될 수 있다.

==================================================
33. 수리
==================================================

Image 중심.

풀이과정
수식
증명

평가.

Text input도 보조적으로 허용 가능.

==================================================
34. 과학
==================================================

Image + Text 혼합 가능.

과학식/도식/그래프/서술을
하나의 단순 OCR text로만 축약하지 않도록
기존 capability를 검토한다.

==================================================
35. Artifact
==================================================

기존 Math private artifact infrastructure를 조사.

가능하면 Answer Artifact를
공통 Essay submission에서 재사용.

단 Math security boundary를
인문/과학 때문에 느슨하게 만들지 않는다.

==================================================
36. Storage
==================================================

학생 답안 이미지:

private.

public bucket 금지.

Owner validation
signed URL
expiry
deletion

기존 policy 재사용.

==================================================
37. Evaluation Orchestrator
==================================================

필요하다면 최소 orchestration layer를 설계한다.

역할:

Question metadata 확인
→ 필요한 capability 선택
→ 기존 evaluator 호출
→ 결과 저장

새로운 거대한 AI framework를 만들지 않는다.

==================================================
38. Rubric
==================================================

대학별/시험별/문항별
평가기준을 유지.

같은 경제·경영 유형이라고
모든 대학에 같은 rubric을 적용하지 않는다.

==================================================
39. Evaluation 결과
==================================================

Growth에서는 실제 existing:

level_1_to_5

authority를 우선 사용.

임의 100점 환산 금지.

Math/Science 결과가
동일 dimension을 갖지 않는다면
억지로 한 chart에 합치지 않는다.

==================================================
40. Mixed Question 결과
==================================================

하나의 시험에:

Humanities Question
Math Question

이 섞여 있을 경우

각 문항의 실제 평가 결과를 보존하고
시험 전체 summary는
근거가 있을 때만 aggregate.

무작정 평균 금지.

==================================================
41. UI Taxonomy
==================================================

향후 논술 LAB 사용자-facing 분류:

인문·사회
경제·경영
수리
과학

사용.

단 대학을 선택했을 때
실제로 존재하는 유형만 노출.

빈 탭을 4개 모두 강제로 보여주지 않는다.

==================================================
42. 경제·경영 명칭
==================================================

사용자-facing 기본:

경제·경영 논술

권장.

대학 공식 자료가:

상경계열
사회계열
경영경제계열

등으로 표기하면
official raw label은 별도 보존.

서비스 taxonomy와
대학 공식 명칭을 혼동하지 않는다.

==================================================
43. Exam Catalog
==================================================

향후 Essay Exam catalog에:

university
academic_year
official exam label
service taxonomy
official source URL

관계를 명확히 한다.

==================================================
44. 기존 21개 시험
==================================================

현재 Production Essay catalog의
기존 활성 시험을 조사한다.

각 시험을:

인문·사회
경제·경영
수리
과학

중 어디에 분류할 수 있는지
READ-ONLY mapping report 작성.

근거 없는 분류 금지.

==================================================
45. 기존 공개 문항 / Rubric
==================================================

현재 최신 Production authority에서:

questions
evaluation criteria
rubrics

상태 재확인.

과거 Gap Analysis의
0개 상태를 최신 상태라고 가정하지 않는다.

==================================================
46. 실제 구현 전에 Gap Analysis
==================================================

이번 Essay track의 첫 결과는:

ESSAY_MIXED_MODE_GAP_ANALYSIS

이어야 한다.

보고:

EXISTING:
...

REUSABLE:
...

MISSING:
...

SCHEMA_CHANGE_REQUIRED:
...

RUNTIME_CHANGE_REQUIRED:
...

UI_CHANGE_REQUIRED:
...

MIGRATION_RISK:
...

==================================================
47. 구현 허용 범위
==================================================

Gap Analysis 결과에서
명백히 additive하고 작은 foundation은
같은 작업에서 구현 가능.

예:

exam taxonomy metadata
question capability metadata
adapter/interface

등.

하지만:

기존 runtime을 갈아엎어야 하는 변경
대형 migration
Evaluation rewrite

는 Owner 승인 전 STOP.

==================================================
48. Golden Test 전략
==================================================

향후 QA를 4개 유형으로 분리한다.

A. 인문·사회
B. 경제·경영
C. 수리
D. 과학

==================================================
49. 경제·경영 Golden Set
==================================================

반드시 mixed-mode sample 포함.

예:

한 시험에서

서술형 문항
+
자료해석
+
수학/계산

이 함께 있는 사례.

==================================================
50. 수리 Golden Set
==================================================

검증:

수식
풀이과정
증명
이미지 품질
부분 답안
오답
정답이지만 과정 부족

==================================================
51. 과학 Golden Set
==================================================

검증:

물리식
화학식
반응식
그래프
도식
생명과학 서술
계산

등 대표 입력.

==================================================
52. Golden Test 목적
==================================================

PASS 기준은:

"AI가 답변을 생성했다"

가 아니다.

검증:

rubric grounding
question matching
good/bad differentiation
hallucination
stability
image interpretation
failure/retry
Credit
rewrite
history

==================================================
53. QL 연계
==================================================

기존:

/ql/
Human Review
AI Quality

authority를 재사용.

새 Quality system 금지.

4유형 Golden Set을
기존 Quality workflow와 연결할 수 있는지 검토.

==================================================
54. Credit
==================================================

Essay taxonomy 변경 때문에
새 Credit system을 만들지 않는다.

기존:

1 Credit
→ 최초 첨삭
→ 동일 답안 첫 재첨삭

정책 authority 유지.

Mixed-mode 문항이라고
임의로 여러 Credit을 차감하지 않는다.

정책 변경은 별도 Owner 결정.

==================================================
55. Rewrite
==================================================

모든 유형에서 가능하면:

첫 제출
→ Evaluation
→ Rewrite
→ Re-evaluation

learning loop 유지.

수리/과학에서는:

재작성
대신
재풀이/재제출

이라는 UI 표현을 검토할 수 있으나
canonical attempt model은 공유.

==================================================
56. Growth
==================================================

Growth는 유형별 의미가 다를 수 있다.

인문:

논증/제시문 활용 등.

수리:

풀이 논리/정확성 등.

과학:

개념/근거/계산 등.

하나의 universal score를
억지로 만들지 않는다.

==================================================
57. Report
==================================================

향후 학생/관리자 Report에서도:

시험 유형
문항 capability
평가 기준

을 고려.

인문 dimension과 Math dimension을
근거 없이 하나의 추세선으로 합치지 않는다.

==================================================
58. Marketing
==================================================

이번 Codex 작업에서
Marketing copy 변경 금지.

향후 marketing에서는:

"대학별 평가 기준에 맞춰"

정도의 표현 유지.

내부 mixed-mode pipeline을
마케팅에 장황하게 설명하지 않는다.

==================================================
59. 저작권
==================================================

기존 Owner policy 유지.

기출 PDF를
LegendStudy가 기본 flow에서 재배포하지 않는다.

Official university source link
→ answer submission

기본.

내부 evaluation context 사용과
public redistribution을 구분.

==================================================
60. Admin Essay View
==================================================

Student 360에서
향후 유형별 Essay history를 볼 수 있어야 한다.

예:

인문·사회
경제·경영
수리
과학

필터 가능성을 고려한다.

이번 Admin Member List 작업에서
Essay UI까지 크게 구현하지 않는다.

Student 360 data contract가
4개 Essay taxonomy를 수용할 수 있게 한다.

==================================================
61. Admin Member List와 Essay Data 분리
==================================================

회원 전체 목록에는
Essay 상세 결과를 넣지 않는다.

회원 목록:

- identity
- 상태
- 학교/학년
- 희망 전공
- Credit
- 최근 활동
- 가입일

정도.

회원 클릭:

Member Detail / Student 360

에서 Essay 정보를 확인.

회원 목록 query가
Essay evaluation 전체를 join해서
무거워지는 구조 금지.

==================================================
62. Student 360 Essay Summary
==================================================

Student 360에서는 향후 최소:

논술 유형
대학
시험
첨삭 횟수
최근 평가
최근 활동

정도의 summary를 표시할 수 있게 한다.

예:

경제·경영 논술
연세대학교
2027학년도
첨삭 3회
최근 평가 2026.10.08

실제 데이터가 있을 때만.

==================================================
63. Mixed-mode Essay 표시
==================================================

경제·경영 시험처럼
한 시험 안에 여러 capability가 있어도

Student 360의 상위 분류는:

경제·경영 논술

로 표시 가능.

상세로 들어가면:

문항 1 — 인문 reasoning
문항 2 — 자료해석
문항 3 — 수리

등 실제 capability를 확인할 수 있는 구조를 고려.

==================================================
64. Essay taxonomy 저장 위치
==================================================

다음 중 어디가 authority가 되어야 하는지
기존 schema를 먼저 검토한다.

- essay_exams
- essay_questions
- 별도 mapping table
- metadata/additive relation

중복 taxonomy source 금지.

Exam에는:

service-facing exam category

Question에는:

evaluation capability

가 필요하다는 개념을 유지.

==================================================
65. Official raw label 보존
==================================================

대학 공식 명칭을 버리지 않는다.

예:

대학 공식:
상경계열

LegendStudy 서비스 분류:
경제·경영 논술

둘을 분리.

official/raw label을
service taxonomy로 overwrite 금지.

==================================================
66. Academic Year
==================================================

Essay catalog도 학년도별 사실을 보존.

같은 대학이라도
연도별 시험 구성과 문항 유형이 달라질 수 있다.

2026 경제·경영 시험이 mixed-mode라고 해서
2027도 동일하다고 자동 가정하지 않는다.

==================================================
67. Question Capability Versioning
==================================================

향후 capability classification이 수정될 수 있다.

가능하면:

classification source
verified_at
version 또는 equivalent auditability

를 고려.

하지만 이번 P0에서
대형 version registry를 만들지는 않는다.

==================================================
68. Evaluation Routing은 Server Authority
==================================================

클라이언트가:

"이 문항은 math evaluator로 보내라"

를 최종 결정하면 안 된다.

Client는 question/exam identity를 전달.

Server가 canonical question metadata를 확인하고
필요한 evaluation capability를 결정.

==================================================
69. Capability Spoofing 방지
==================================================

사용자가 request payload에서:

question_type=math
capability=humanities

등을 바꿔
다른 evaluator를 임의 호출할 수 없어야 한다.

Question identity
→ canonical metadata
→ evaluator selection

순.

==================================================
70. Evaluation Context
==================================================

평가 context는:

University
Academic Year
Exam
Question
Rubric
Capability

가 서로 일치해야 한다.

Question A에
Question B rubric이 붙는 경로는
출시 blocker로 취급.

==================================================
71. Evaluation Failure
==================================================

Mixed-mode orchestration 도입 시
일부 capability만 성공하고
일부가 실패할 수 있다.

예:

humanities PASS
math FAIL

이 경우:

전체 평가를 성공으로 가장하지 않는다.

상태 모델이:

pending
partial/failure
retry
complete

를 안전하게 표현할 수 있는지 검토.

기존 evaluation state를 우선 재사용.

==================================================
72. Credit와 Partial Failure
==================================================

평가 중 일부 evaluator가 실패했다고
Credit을 반복 차감하면 안 된다.

기존 billing decision/idempotency authority를 유지.

Retry:

same attempt/evaluation operation

에서 중복 차감 금지.

==================================================
73. Image Processing
==================================================

경제·경영/수리/과학에서
이미지 답안이 중요하다.

검토:

- multiple pages
- image orientation
- compression
- resolution
- upload failure
- extraction failure
- formula/graph loss

이번 단계에서 OCR 전체를 새로 만들지 않는다.

기존 Math artifact/extraction capability를 먼저 재사용.

==================================================
74. Multiple Image Pages
==================================================

실제 논술 답안은 여러 장일 수 있다.

현재 Math artifact가
single-image만 지원하는지 확인.

향후:

Attempt
→ ordered artifacts/pages

구조를 지원할 필요가 있는지 Gap Analysis에 포함.

이번에 무리한 migration 금지.

==================================================
75. Text + Image Mixed Answer
==================================================

경제·경영/과학에서는:

텍스트 설명
+
손글씨 계산/그래프 이미지

가 함께 있을 수 있다.

Answer model이
둘 중 하나만 강제하는 구조인지 확인.

향후 mixed submission을
수용할 수 있는 최소 설계를 제안.

==================================================
76. Math Result 재사용
==================================================

기존 Math evaluation 결과를
Humanities evaluation schema에 억지로 끼워 넣지 않는다.

공통으로 묶을 수 있는:

attempt
evaluation status
summary
feedback

와

유형별 result

를 구분한다.

==================================================
77. Science Foundation
==================================================

현재 과학논술 runtime이 없다면
있는 것처럼 구현 완료 처리하지 않는다.

이번 단계에서는:

REUSABLE
MISSING
NEW_CAPABILITY_REQUIRED

를 명확히 보고.

과학 evaluator 구현은
별도 Owner 승인 후 진행 가능.

==================================================
78. Economics / Business Foundation
==================================================

경제·경영은 기존 Humanities + Math를
조합할 가능성이 가장 높다.

먼저 실제 대학 시험 사례와
현재 catalog/question structure를 대조.

단:

"상경계열 = 항상 수학 포함"

으로 hardcode하지 않는다.

문항별 metadata가 authority.

==================================================
79. 사용자 UI
==================================================

향후 논술 LAB에서:

대학 선택
→ 학년도
→ 실제 존재하는 시험/유형
→ 문제

흐름.

또는 현재 UX가:

대학
→ 시험

중심이라면 불필요하게 탭을 강제하지 않는다.

4개 taxonomy는
정보 구조이지 반드시 첫 화면에
항상 4개의 고정 탭을 만들라는 의미는 아니다.

==================================================
80. URL / Deep Link
==================================================

향후 대학별 marketing deep link가:

대학
시험
문항

으로 연결될 수 있다.

taxonomy 변경 때문에
기존 URL을 무작정 깨뜨리지 않는다.

필요하면 additive query/path contract 제안.

이번 작업에서 Marketing/Tistory 변경 금지.

==================================================
81. Admissions Catalog와 Essay Catalog 구분
==================================================

앞서 결정한:

Admissions Catalog
(대학 → 학년도 → 모집단위)

와

Essay Exam Catalog
(대학 → 학년도 → 논술시험 → 문항)

는 다른 데이터다.

둘을 한 테이블로 합치지 않는다.

다만 University / Academic Year authority는
가능하면 일관되게 재사용.

==================================================
82. Target/Application과 Essay 연결
==================================================

학생이 특정 대학/모집단위를 희망하거나
실제로 지원했다고 해서

그 대학 Essay 기록을
자동으로 Application에 종속시키지 않는다.

Essay → University:
canonical.

Essay → Application:
optional.

기존 Owner 결정 유지.

==================================================
83. Admin Member List 구현 우선순위
==================================================

TRACK A는 바로 구현 가능 범위다.

우선:

1. 전체 회원 paginated list
2. search
3. filters
4. school name
5. member detail navigation

완료.

Student 360의 새로운 대형 기능 때문에
회원 목록 개선을 늦추지 않는다.

==================================================
84. Essay Track 작업 방식
==================================================

TRACK B는 다음 순서:

STEP 1
READ-ONLY inventory

STEP 2
Gap Analysis

STEP 3
small additive foundation only

STEP 4
STOP / Owner report

대형 Runtime 구현까지
자동으로 진행하지 않는다.

==================================================
85. Essay Gap Analysis 필수 항목
==================================================

반드시 확인:

1. 현재 Essay exam taxonomy
2. 현재 question metadata
3. Humanities runtime
4. Math runtime
5. artifact/storage
6. evaluation tables
7. rubric
8. billing
9. rewrite/re-evaluation
10. progress/history
11. QL/Human Review
12. Production content state

==================================================
86. Production Content Inventory
==================================================

개별 학생 답안을 읽지 않는다.

Catalog metadata만 조회.

최소:

active universities
active exams
exam official labels
academic years
question count
rubric count
official source URLs

확인.

학생 PII/답안은 이 inventory에 필요 없다.

==================================================
87. 기존 Math Branch
==================================================

Math 구현이 main/RC와 다른 branch에 존재한다면:

branch
commit
migration
runtime
storage

정확히 기록.

"과거에 구현했다"

는 기억만으로 재사용했다고 판단하지 않는다.

==================================================
88. Schema 변경 기준
==================================================

허용 후보:

- additive exam taxonomy field/relation
- additive question capability relation
- verified metadata

조건:

기존 APP/LAB query를 깨지 않음.
기존 row 의미를 바꾸지 않음.
rollback 가능.

==================================================
89. Schema 변경 금지 사례
==================================================

이번 승인 없이 금지:

- essay_exams 전체 재구축
- essay_questions ID 변경
- 기존 evaluation 삭제/변환
- Math tables 강제 merge
- 기존 history migration
- Credit schema 변경

==================================================
90. Admin Member List DB 변경
==================================================

Admin 회원목록용 RPC가 필요하면
최소 additive migration 허용.

반드시:

Admin authorization
server pagination
bounded result
PII minimization

포함.

==================================================
91. Admin Search
==================================================

검색은 가능하면:

email prefix/contains
display name
UUID exact

정도.

답안 본문 검색 금지.

학교명 검색/필터는
canonical school resolution authority를 사용.

==================================================
92. Admin 전체 회원 수
==================================================

`전체 N명`

은 실제 canonical member count.

현재 page row count를
전체 회원 수로 표시하지 않는다.

==================================================
93. Admin Recent Activity
==================================================

최근 활동 column을 넣으려면
무엇을 activity로 정의하는지 먼저 확인.

후보:

last sign-in
latest learning activity
latest service event

임의로 섞지 않는다.

authority가 불명확하면
column을 이번 P0에서 제외.

==================================================
94. Admin Credit
==================================================

목록의 첨삭권 표시는
canonical Credit authority 사용.

회원마다 `credit_summary()`를
일반 사용자 context로 반복 호출 금지.

Admin-safe bounded aggregation 필요.

복잡하면 이번 P0에서
상세로 이동시켜도 된다.

==================================================
95. Admin Visual
==================================================

Codex는 기능적 table/list shell까지만.

현재 Admin 전체 visual redesign 금지.

향후 Manus:

ADMIN / STUDENT 360 VISUAL FINAL

에서:

table density
filter bar
responsive
member detail

다듬는다.

==================================================
96. 테스트 — Admin Member List
==================================================

필수:

Admin list PASS
Normal user DENY
Quality-only DENY
pagination
total count
email search
UUID search
school filter
status filter
grade filter if implemented
sorting
empty DB
no results
error
member detail navigation

==================================================
97. 테스트 — Admin Privacy
==================================================

목록 payload에 기본 포함 금지:

Essay answer
Math artifact
전화번호
민감 자유 텍스트
불필요한 UUID
payment credential

확인.

==================================================
98. 테스트 — Essay Metadata
==================================================

foundation을 구현한다면:

exam taxonomy
question capability
ownership
canonical routing

테스트.

Client spoofed capability가
routing authority가 되지 않는지 확인.

==================================================
99. 테스트 — Mixed Mode
==================================================

최소 synthetic fixture로:

Humanities-only question
Math-only question
Mixed economics exam

metadata routing 검증.

실제 AI 평가를 실행하지 않아도
routing contract를 검증할 수 있다.

==================================================
100. 테스트 — Regression
==================================================

기존:

Humanities
Math
Credit
Admin
APP

tests를 깨지 않는다.

전체 canonical test suite 실행.

==================================================
101. Payment
==================================================

FROZEN.

이번 작업에서:

Toss
Payment
Finance
LIVE

수정 금지.

Grok audit의 webhook finding도
이 작업에서 수정하지 않는다.

별도 READ-ONLY confirmation만
이미 승인된 경우 수행.

==================================================
102. Signup Credit
==================================================

현재 작업이 끝난 뒤 시작하는 지시서다.

Signup Credit의 최종 closeout 결과를
authority로 사용.

Essay/Admin 작업 때문에
Signup bonus를 다시 설계하지 않는다.

==================================================
103. Study Time / Application
==================================================

직전 Codex 작업에서 구현된:

Study Time
Application
Student 360 foundation

이 있다면 재사용.

이번 작업에서 다시 만들지 않는다.

Admin Member Detail에서 연결할 수 있는
contract만 활용.

==================================================
104. Manus 작업 보존
==================================================

MY visual
Public visual

Manus authority 보존.

Codex가 Admin 작업을 하면서
MY CSS/global CSS를 불필요하게 수정하지 않는다.

==================================================
105. Claude APP 작업 보존
==================================================

APP Store RC / Brand / CTA / Onboarding은
Claude authority.

Essay schema 때문에
APP UI를 임의 변경하지 않는다.

APP client 변경이 반드시 필요하다면
이번 작업에서는 contract만 보고하고 STOP.

==================================================
106. Grok Audit
==================================================

기존 Grok Foundation Audit 결과를 참고.

하지만 Grok이 리뷰한 SHA보다
최신 코드가 authority.

오래된 finding을
현재 코드에 기계적으로 적용하지 않는다.

==================================================
107. Wiki
==================================================

작업 결과를 Unified Wiki에 기록.

반드시 구분:

ADMIN MEMBER LIST:
IMPLEMENTED 여부

ESSAY MIXED MODE:
ANALYZED
FOUNDATION IMPLEMENTED
NOT IMPLEMENTED

를 명확히 구분.

"설계 완료"를
"실제 평가 작동"으로 쓰지 않는다.

==================================================
108. Essay Product Decision 기록
==================================================

Wiki에 Owner 결정 기록:

사용자-facing Essay taxonomy:

- 인문·사회 논술
- 경제·경영 논술
- 수리 논술
- 과학 논술

그리고:

경제·경영은 mixed-mode 가능.
과학도 mixed capability 가능.

Exam type와
Question capability는 분리.

==================================================
109. 완료 조건 — Track A
==================================================

ADMIN MEMBER LIST:

전체 목록
pagination
search
filters
member detail link
authorization

Production까지 가능하면 배포/검증.

==================================================
110. 완료 조건 — Track B
==================================================

ESSAY:

Gap Analysis 완료.

기존 Humanities/Math 재사용 구조 확인.

4개 taxonomy contract 확정.

question capability model 제안.

작고 안전한 additive foundation만
승인 범위에서 구현.

대형 runtime 변경은 STOP.

==================================================
111. 완료 보고
==================================================

NEXT_FOUNDATION_STATUS:
COMPLETE / PARTIAL

========================
ADMIN MEMBER MANAGEMENT
========================

ADMIN_MEMBER_LIST:
COMPLETE / PARTIAL

TOTAL_COUNT:
...

PAGINATION:
...

SEARCH:
- email:
- display name:
- UUID:

FILTER:
- status:
- school:
- grade:

SORT:
...

LIST_COLUMNS:
...

SCHOOL_NAME:
...

CREDIT:
...

RECENT_ACTIVITY:
...

MEMBER_DETAIL:
...

AUTHORIZATION:
...

N_PLUS_ONE:
...

PRODUCTION:
- migration:
- LAB commit:
- deployment:

========================
ESSAY MIXED MODE
========================

ESSAY_MIXED_MODE_GAP_ANALYSIS:
COMPLETE / PARTIAL

CURRENT_HUMANITIES:
...

CURRENT_MATH:
...

CURRENT_SCIENCE:
...

CURRENT_ECONOMICS_BUSINESS:
...

PRODUCTION_CATALOG:
- universities:
- exams:
- questions:
- rubrics:

USER_TAXONOMY:
- humanities_social
- business_economics
- math
- science

EXAM_TYPE_MODEL:
...

QUESTION_CAPABILITY_MODEL:
...

REUSABLE:
...

MISSING:
...

SCHEMA_CHANGE:
...

RUNTIME_CHANGE:
...

ARTIFACT:
...

STORAGE:
...

CREDIT_COMPATIBILITY:
...

REWRITE:
...

GROWTH:
...

QL_GOLDEN_TEST:
...

IMPLEMENTED_FOUNDATION:
...

OWNER_APPROVAL_REQUIRED:
...

========================
SAFETY
========================

PAYMENT_CHANGED:
NO

TOSS_CHANGED:
NO

SIGNUP_CREDIT_REDESIGNED:
NO

MANUS_VISUAL_CHANGED:
NO

CLAUDE_APP_UI_CHANGED:
NO

DESTRUCTIVE_CHANGE:
NONE

WIKI:
- commit:

NEXT_RECOMMENDED:
Essay Runtime implementation
→ Content/Rubric preparation
→ Humanities/Economics/Math/Science Golden QA
→ Manus Admin/Student 360 visual polish

완료 후 STOP.

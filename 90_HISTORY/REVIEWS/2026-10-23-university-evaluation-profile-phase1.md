# University Evaluation Profile — PHASE 1 분석·표준 설계

작성 2026-10-23 · 설계 PASS / 구현 NOT_STARTED / Owner PHASE 2 검수 대기.
Authority: [Owner 전략](2026-10-23-university-evaluation-profile-strategy.md), 원본 브랜치 `strategy/university-evaluation-profiles-20261023`, commit `18d5b70ccab52a960e22b476e64158a836223e47`.

## 1. 결론과 Authority 정합성

**공통 UX · 대학별 평가 · 문항별 근거.** 대학·유형별 프로필을 재사용하고, 기존 검수 패키지를 만들 때 해당 문항의 공식 근거와 합성한다. 기존 Essay/Math 엔진과 학생 제출·Credit·History 계약을 유지한다. 새 테이블·RPC·Worker를 기본안으로 제안하지 않는다.

기존 구현은 모든 대학에 동일한 공식 기준을 강제하는 구조가 아니다. Essay는 가변 criteria/evidence를, Math는 기존 profile/criteria/solution을 받는다. 반복 비용의 원인은 검수 패키지 작성·문항 식별·정책 연결이다. 따라서 **프로필 선택과 입력 조립을 공통화**하며, 문항 근거 검수와 실행 권한 검사를 제거하지 않는다. 대학 프로필만으로 512문항을 일괄 활성화하지 않는다.

기존 Wiki의 ‘다른10대학 운영 연결 계속’ 실행 순서는 이번 분석 전용 지시로 중지된다. 기존 건국대 인문/수리 활성2문항은 유지한다. 과거 ‘전체 AI HOLD’ 문구는 과거 체크포인트이며 현재 활성2문항과 구분한다. 최신 명시 지시가 APP 로컬 Wiki/과거 단계 순서보다 우선한다. 제품 North Star와 권한·개인정보·immutable History 원칙은 충돌 없다.

이번 작업: 문서 편집, Git fetch/push, 로컬 코드/기존 검수 산출물 및 운영 스키마·함수 ACL SELECT만 수행. Production 데이터/설정/배포/Provider/Credit 변경0. PHASE 2 코드 구현 없음.

## 2. 확인 근거와 기존 성공 범위

코드 검토 기준: APP `1d4aadeaa72333d1e2e562059c47c809b6ec4e14`, LAB `ad6ffec28b7ae17d385f3917630cf4da420713a2`. 성공 근거는 [기존 운영 기록](2026-10-22-phase3-service-connection.md). 실제 성공을 재호출하지 않았다.

| 사례 | 재사용 자산 | 확인된 성공 | 확대하면 안 되는 주장 |
|---|---|---|---|
| 한양 2024수시 인문 오후2 Q1 | 기존 exam 제출/Essay Worker, 공식 이미지·근거, regime | Oct14 실제 Provider·최초1/재첨삭0·WEB History | 전체 한양/수리/APP 성공 아님 |
| 건국 2026수시 인문 Q2 | 공식근거9·기준5의 검수 패키지, independent review, Worker | 실제 평가·재첨삭·Credit1/0·WEB/APP 교차조회 | APP은 기존 iOS Simulator 범위, 모든 시험 성공 아님 |
| 건국 2026수시 자연 Q1 17점 | Math profile/leaf/official solution, 이미지 판독·확정 | 실제 평가·재첨삭·History·Credit1/0·양방향조회 | 합성 인쇄이미지 성공을 일반 손글씨 정확도로 확대 금지; 숫자 부분점수 산출 PASS 아님 |
| 숙명 2025모의 인문1-1 | accepted_source_runtime, 공식 문제·의도·기준/이미지 | 기존 이미지 품질 검증, 공식자산 해시 재사용 | 운영 History/Credit/공개 성공 아님; 우수답안은 내부 품질 비교, 자동 정답/공식기준 아님 |

숙명 기존7개 항목은 **진단 축**이다. 공식 채점기준으로 이름을 바꾸지 않는다. 원문 구성요소3+내용요건3을 사용한 별도 로컬 후보가 존재한다. 원문/우수답안/합성학생답안/Provider 결과는 이 Wiki에 복사하지 않는다.

### 실제 시스템 구조

| 경계 | 현재 코드/DB | 프로필 도입 시 유지/최소 연결 |
|---|---|---|
| Canonical 식별 | APP `supabase/reviews/essay-source-registration/manifest.json`; `tool/essay_lab/package_registry.py` | Catalog slug→기존 university UUID→exam UUID→question UUID 확인. 프로필은 식별자를 교체하지 않음 |
| Essay 입력 | `tool/essay_lab/material_runtime.py`, `package_registry.py`, `live_worker.py` | `reviewed_material_question` 이전에 검수된 프로필/예외를 합성. 기존 criteria/evidence/cache pin으로 출력 |
| Essay 실행 | `tool/cloudflare_essay/entry.py`, `tool/essay_lab/cloudflare_runtime.py`, `reviewed_runtime.py` | 기존 preflight→claim→package→Provider→독립검수→finish. 정책·모델·권리 승인과 프로필을 분리 |
| 검수 저장 | `essay_material_private.reviews.body`, append-only `revisions.body` | 프로필 선택 근거와 합성 manifest를 기존 private JSON에 보존; 형식검사 통과 여부를 PHASE2에서 확인 |
| 실행 정책 | `essay_exam_private.runtime_policy(uuid)`, `essay_private.provider_policy(text)` | 지금은 exam/regime별 핀. 한 프로필 도입으로 이 실행 승인까지 자동 생성/우회하지 않음 |
| Math 입력 | `public.math_evaluation_profiles`, `math_scoring_criteria`, `math_canonical_solutions`, `math_source_artifacts` | 기존 LEAF/PROBLEM/EXAM scope로 대학 공통 설정을 구체화. 문항 기준과 정답은 기존 leaf에 연결 |
| Math 실행 | LAB `src/lib/math-eval/runtime/physical-contract.ts`, `src/lib/math-release/server/provider.ts`, `functions/api/math/evaluate.ts` | 기존 context/profile/criteria/solution pins를 재사용; 이미지 추출·학생 확인 그대로 |
| WEB | LAB `src/lib/essay-runtime/client.ts`의 EssayRuntimeClient 및 기존 exam Gateway | 학생이 profile/model/weights를 선택·전송하지 않음; 기존 답안/상태/결과 API 유지 |
| Native | APP `lib/features/essay/essay_live_gateway.dart`, `math_gateway.dart` | 동일 서버 결정과 canonical ID 사용. 프로필 별 화면/엔진/데이터 없음 |
| History/Credit | `essay_evaluations.input_snapshot`, Math `profile_id`/source·criterion pins, 기존 Ledger | 당시 버전 재현, 최초1/14일내포함재첨삭0 유지. 결과 구조 및 거래 코드 무변경 |

2026-10-23 운영 read-only schema 확인: 위 reviews/revisions JSONB, Essay input_snapshot, Math logical_id/version/scope/profile_id 존재. `essay_material_runtime_package(uuid,text)` SECURITY DEFINER, postgres/service_role/essay_worker 실행권한이며 일반 사용자에게 제공하지 않는다. runtime_policy/provider_policy는 postgres 실행권한이다. 소스 파일 존재를 운영 적용 근거로 대신하지 않았다.

Math scope enum은 `LEAF|PROBLEM|EXAM|COMMON_MATH_RUBRIC`이며 UNIVERSITY는 없다. scope별 ACTIVE unique index가 있으므로 임의 UNIVERSITY 값 추가·동일 scope 이중 ACTIVE 금지. 대학별 논리 프로필을 기존 물리 scope로 조립하는 방식이 기본안이다.

## 3. 프로필 표준 v1 — 논리 명세, 아직 구현된 DTO 아님

| 필수 항목 | 키/타입 | 규칙 |
|---|---|---|
| 대학ID | university_id: UUID, catalog_id: string | 기존 UUID가 canonical; slug는 조회용 alias. 불일치 HOLD |
| 대학명 | university_name: string | Catalog 표기; 평가내용 분기키로 사용 금지 |
| 논술유형 | essay_type: enum + subtype | humanities/business/math/special, 필요한 세부유형 분리; 혼합시험은 문항별 route |
| 프로필ID | profile_id: stable string | `uep/<catalog>/<subtype>` 논리ID. 기존 Math row UUID와 별도 필드로 명확히 구분 |
| 버전 | version: positive integer, content_sha256 | published revision 불변; 내용수정은 새버전. 의미없는 날짜만 바꿔 digest 변동 금지 |
| 적용학년도 | applicable_years: integer[] | 검수된 명시 목록; null/빈목록=적용없음. 미래연도 자동확장 없음 |
| 시험유형 | admission_types: admission/mock[] | 동일연도라도 분리; 학년도와 시행일 구분 |
| 핵심역량 | competencies: Rule[] | 공식 근거 있는 역량만 official 분류; 내부 진단축은 internal로 구분 |
| 평가요소 | evaluation_elements: Rule[] | stable key, label, source_refs, applicability; 임의 공통7축 강제 없음 |
| 배점/가중치 | official_points, official_weights | 숫자 또는 null, source_ref·단위·문항/시험 scope 필수. null은0/동일비중 아님 |
| 감점요소 | deductions: Rule[] | 조건/감점량/상한/공식근거. 확인 안 된 값은 null, 엔진이 추정 금지 |
| 부분점수 | partial_credit: Rule[] | 적용단계/인정조건/공식점수 또는 정성 기준. 정답이면무조건만점 금지 |
| 답안구성 | answer_structure: Rule[] | 논제별 구조를 덮어쓰지 않음. 정해지지 않은 서론본론결론 강제 금지 |
| 분량·표현 | length_expression: Rule[] | 문자수/공백/원고지/허용범위/감점 각각 별도 unknown 허용 |
| 피드백 | feedback_style: object | 근거 인용→강점→우선개선→재작성 행동. 점수규칙 아님; 기존 결과스키마 범위 |
| 공식출처 | sources: SourceRef[] | 기존 source hash/locator/page/crop/공식URL/검수일. 문항 ID 및 사용권리 별도 확인 |
| 검수상태 | review.status + reviewer_ref/reviewed_at | DRAFT/REVIEWED/ACTIVE 논리상태. ACTIVE만으로 서비스 공개 권한 발생 안 함 |
| 최종수정 | updated_at: ISO8601 | created_at/supersedes_version/change_reason 함께 보존 |

`Rule`: key, value/text, provenance(`OFFICIAL`,`INTERNAL_GUIDANCE`), source_refs, scope, review_status. 내부 안내는 공식 점수/감점/정답을 만들 수 없다. `SourceRef`: source_hash, locator, applicable_exam_ids/question_ids, verified_at, rights_ref. 전체 PDF/해설 문자열은 비공개 자산에 유지한다. 프로필은 인증·학생정보·비밀키·Provider 모델/가격/사용권한을 포함하지 않는다.

추가 연결 metadata: engine_route, resolution_version, profile_digest, exception_refs, question_package_ref/digest, resolved_manifest_digest. 이것은 논리 계약이며 기존 API에 임의 필드를 추가한다는 뜻이 아니다.

## 4. 입력 조립·우선순위·실패 규칙

1. 서버가 canonical exam/question/leaf와 실제 학년도·유형을 읽는다. 학생이 제출한 profile_id/가중치로 선택하지 않는다.
2. 검수 완료된 대학·유형 프로필에서 명시 연도/시험 scope가 정확히 맞는 후보를 하나 찾는다. 0개면 신규경로 HOLD, 2개 이상이면 AMBIGUOUS_PROFILE. ‘최신버전’ 임의선택 금지.
3. 우선순위: **문항 공식기준 > 해당연도·전형 공식예외 > 대학프로필 > 공통계약의 출력/진단 규칙**. 같은 계층끼리 충돌하면 HOLD. 기준값과 그 근거를 함께 대체하고 승자/배제사유를 기록한다. null로 상위공식값을 지우지 않는다.
4. 학년도·유형별 범위에 맞는 공식 출처만 사용한다. 다른대학/다른문항 정답·해설의 fallback 금지. 예시답안은 유일 정답이 아니며 대안풀이를 배제하지 않는다.
5. 프로필 공통원칙과 문항 공식근거를 기존 평가 cache/context로 변환하고 기존 validator를 통과시킨다. 증거 없음·수식불명·기준ID불일치·rights미확인 문항만 HOLD.
6. profile/version/digest + exceptions + question package/version/digest + engine contract + resolver version의 결정 결과를 고정한다. 같은 입력은 같은 manifest digest여야 한다. Python canonical JSON hash와 Postgres jsonb digest를 동일하다고 가정하지 않는다.
7. 기존 claim/pin/권리/preflight/소유권/중복요청/독립검수/입력확정 검사를 통과한 후에만 기존 엔진 실행. 기존 활성2문항은 새 resolver 실패 시 비활성화하지 않고 승인된 legacy pin 경로 유지(문항 근거를 다른 것으로 대체하는 fallback 아님).

한 시험이 인문·수리를 섞으면 각 문항의 명시된 engine_route를 사용한다. 현 Essay Worker의 `len(questions)==1` 제한을 프로필로 해소했다고 주장하지 않는다. 복수문항 동시합성은 별도 기존 계약의 검증 과제이며 이번 기본안은 한 문항 요청이다.

## 5. 저장·Registry·History·연도 예외

- **저장 권고:** 기존 비공개 검수 자산 경로에 프로필 revision JSON과 근거를 저장하고, 기존 Registry 준비 단계에서 선택 manifest를 만든다. 공개 Git에는 표준/validator/비민감 hash·ID만. 새 public bucket/서비스/RPC/테이블 없음.
- Essay: 기존 reviews.body/package의 private 합성 metadata와 revisions에 프로필 참조를 보존. 실제 Provider에는 기존 evidence/criteria 구조로 투영. 임의 top-level 필드를 snapshot에 넣지 않는다. 기존 엄격한 input shape 검증과 충돌 여부를 PHASE2 첫 격리검사로 확정한다.
- 최소 추적안: 기존 evidence/criterion version과 package digest→immutable private manifest(profile ID/version/digest)의 대응을 보존. History UI는 기존 결과 그대로 읽는다. 사용자가 프로필명을 보는 UI는 이번 필수범위가 아니다. 기존 읽기 계약으로 추적 불가능한 필드가 확인된 경우에만 별도 최소변경 제안.
- Math: 논리 profile revision을 기존 math_evaluation_profiles의 logical_id/version 및 LEAF/PROBLEM/EXAM row로 구체화한다. profile_id는 기존 evaluation FK로 고정된다. 공식점수는 기존 math_scoring_criteria.official_points(없으면null), 정답/공식풀이는 기존 source/solution pins. 공통루브릭 row를 특정대학 내용으로 덮어쓰지 않는다.
- 현재 Math 결과는 criterion의 SATISFIED/PARTIALLY_SATISFIED 등의 정성 판정이며 Provider prompt는 invented numeric points를 금지한다. 공식 총17점 존재≠현재17점 만점 숫자채점 구현. 숫자점수 계산/표시를 새로 넣는 것은 기본안 제외, 필요 시 별도 요구·검증.
- 실행정책은 프로필의 교육적 기준과 별개다. 동일 모델·prompt·계약이면 기존 승인 binding/regime을 재사용한다. 문항별 모델 정책을 새로 복제하지 않는다. 현재 exam별 package pin 등록은 남는다. 자동화는 검수된 manifest를 이용한 기존 정책 갱신 후보 생성까지이며 승인 없이 활성화하지 않는다.
- 연도 차이 확인 안 됨은 ‘변화없음’이 아니다. 예: profile v1 years=[2026]을 자동2024~2027로 확장 금지. 동일기준이 공식 자료로 확인된 연도만 목록추가한 새revision. 본질적 변화는 v2, 이전 revision 폐기/UPDATE 없음.
- 무료 재첨삭은 원평가의 profile/package/regime pin을 사용해 비교가능성을 유지하고 기존 14일/1회/0Credit 판정을 따른다. 중대 오류로 원버전 사용불가 시 이전 결과 보존, 명시적 HOLD/기존 보상절차 검토; 몰래 새버전이나 유료 새cycle로 전환 금지.
- 롤백: 새 resolver/대상scope만 중단, legacy2문항 기존 pin 유지. 학생답안·결과·Ledger·원본을 삭제하지 않는다. 이번에는 rollback 실행 없음.

## 6. 예시 — 검수 범위를 넓히지 않는 인문·수리 프로필

아래는 설계 예시이며 Production에 등록한 새프로필이 아니다. 학년도 일반화에 필요한 자료 검수는 미완료다.

| 항목 | 건국 인문 draft v1 | 건국 수리 draft v1 |
|---|---|---|
| profile_id | uep/konkuk/humanities | uep/konkuk/math |
| university_id | 77fe30b2-f693-4612-a6d3-50e8be5c8f6c | 동일 기존UUID |
| 적용 | [2026], admission, 인문, 검증된Q2만 | [2026], admission, 자연, 검증된Q1만 |
| question_id | 1f980d57-683e-5d49-b2ed-4bbb554b967b | cea40cf3-dc05-507a-a6eb-fd5e1e1847bb |
| 기존 핀 | exam1033e20b-9a20-5622-a67b-c288ace2734f, 공식기준5 | leaf3bab07d3-c047-53c2-89ad-9fa20ec7b3f3, profile4e28fd58-26f1-539d-a383-eb691c05c82f |
| 평가방향 | 제시문 개념 이해·문항이 요구한 연결·논지·표현; 근거는 기존 공식기준 참조 | 풀이과정/정당화·계산과개념오류 구분; 기존 required/optional dimensions 그대로 |
| 문항 공식우선 | 타자 지향성/여닫개 등 구체적 논점은 Q2 근거에만 저장, 대학공통규칙으로 전파 금지 | 공식풀이·허용대안·채점요소는 Q1/leaf 근거로 저장, 다른자연문항에 재사용 금지 |
| 배점 | 문항총60점, 개별요소가중치 미확인=null | 문항총17점, 세부배점은 실제기준핀의 값만; 예시에서 분배 생성 안 함 |
| 분량·감점·부분점수 | 기존 검수 입력값 참조; 불명확한 산정방식·숫자감점 null | 근거부족/부분풀이를 기존 정성criteria 판정; 숫자부분점수추정 금지 |
| 출처 | 기존 humanities-private source SHA74884de…a4d988 및 official page locators | 기존 Math source/solution/criterion IDs와 SHA; 원본 재추출 없음 |
| 상태 | DRAFT_PROFILE / 기존 question E2E PASS 별도 | DRAFT_PROFILE / 기존 question E2E PASS 별도 |
| feedback | 공식근거→장점→고칠논리→재작성행동, 실제결과필드만 | 판독불확실성 먼저확인→오류위치/근거→다음풀이행동 |

한양 기존성공은 legacy pin 회귀 대조군, 숙명 이미지는 evidence/media 처리 대조군으로 쓴다. 공식우수답안을 학습자 제출로 섞거나 판정 정답으로 자동 승격하지 않는다.

## 7. 11개 대학 설계표

아래 profile 수는 **설계 후보 분리 수**이지 공식 확정/구현/활성 수가 아니다. 평가체계 동일성이 확인되면 같은 프로필의 scope로 합치고, 차이가 확인되면 새버전/유형으로 분리한다. 실제DB 기존157시험512문항 및 기존 등록/페이지검수 결과 재사용. 현재 자료 전체를 재검수하거나 웹에서 새공식자료를 수집하지 않았다.

‘페이지 n/N’은 평가자료 페이지연결 문항/등록 문항이며, 공식 텍스트·점수의 정밀검수 완료를 뜻하지 않는다. Engine H=기존 Essay, M=기존Math, ?=문항별계약확인필요. 공통으로 부족한것: 정확한문항 근거본문·연도/유형scope·권리·검수완료핀.

| 대학 | A/B 유형·프로필 후보 | C/D 기존자료·재사용 기준 | E 학년도별 차이/확인 범위 | F 문항별 추가근거 | G/H 엔진·추가검수 |
|---|---|---|---|---|---|
| 가천 | 국어약술/수학약술 **2**, 의·한의·약학 별도체계 확인 시+1이상 | 페이지166/166; 기초text136문항, verified판정 아님 | 등록2024~2027, A/B형과의약학을같은기준으로단정금지 | 단답/풀이요구·단계별정답·세부배점 | H?/M SHORT_ANSWER·SHORT_REASONING 후보; 국어장문rubric강제금지, 특수후순위유지 |
| 건국 | 인문/상경·통합/수리 **3** | 페이지58/58; 인문Q2 공식5기준·자연Q1 기존성공 | 2024~2026; 인문사회I/II·자유전공·통합의변경이력 검수 | 다른문항의독립논점·해설·채점, 총점과요소점수분리 | H/M 대표성공; 통합은 문항별route, 전체58자동승격금지 |
| 경희 | 인문·체육/사회/자연/의약학 **4** | 페이지31/38; 기존문제·출제의도·해설·기준 페이지 | 2021사회모의/2022자연모의/2026수시/2027모의; 공통연도범위미확정 | 사회수리·의약학 문항별내용과평가요소 | H/M/? 과학논증이면Math단정금지; 추가자료보강HOLD |
| 고려 | 인문/자연 **2** | 페이지30/30; 공식문항·해설·기준연결 재사용 | 등록2025~2026 수시·2025모의; 연도동일성미검수 | 공통능력과문항별평가요소분리, 배점근거 | H/M 후보; 과목·수식·공식기준검수 |
| 동국 | 인문I/인문II/자연 **3** | 페이지30/48; 기존2025~2027 공식자료연결 | 과거2022~2024 DB mock표기와Owner파일명우선충돌 기록; 이번정정/보강금지 | 연도확정, 공식오류문항제외, 의도·단계별기준 | H/M 후보; 2025수시자연2 공식오류·전원정답기록/HOLD유지 |
| 서강 | 인문사회/경제경영/자연 **3** | 페이지13/28; 기존시험별문제·해설·기준 | 2023~2025모의/2026수시·모의/2027모의; 2027인문통합 재사용범위검수 | 보강14문항 등 문제PDF만있는항목의평가기준 | H/M, 경제경영수리문항별route; 시험label만으로합치지않음 |
| 성균관 | 언어/수리 **2** | 페이지21/27; 공식해설·기준 및문제PDF | 2023자연모의/2025언어/2026수시/2027모의; 유형변화 검수 | 언어문항간요구차이, 수리교시·부분점수 | H/M; 수식12문항검수와PDF권리HOLD 별도유지 |
| 숙명 | 인문/자연일반/약학 **3** | 페이지18/22 + 2025인문1-1 accepted공식4근거·공식6요건 후보 | 2025모의/2026수시/2027모의; 일반·약학 동등성미확인 | 나머지문항채점기준, 분량/0점조건의정확한scope | H/M; 내부7진단축≠공식점수; 우수답안권리/개인정보분리 |
| 숭실 | 인문/경상/자연 **3** | 페이지40/42; 기존출제의도·채점페이지 | 2022인문/2024~2026수시/2025·2027모의 | 경상문항별인문/수리근거, 독립해설미확정1건 | H/M; 수식24·글자수병기1 검수잔여 |
| 서울여 | 인문사회/자연 **2** | 페이지5/23; 기존2026근거, 보강2023~2025문제PDF | 2023~2026수시; 공식기준공통성미확정 | 보강18문항 의도·해설·기준, 13소문항구조보존 | H/M/? 자연과학서술과수학분리, 수식3문항검수 |
| 한국항공 | 사회/공학/이학 **3** | 페이지18/30; 2024~2026평가자료,2022~2023문제PDF | 2022~2026수시; 공학·이학프로필병합근거없음 | 보강12문항기준/해설, 기존소문항배점 | H/M/? 사회내수리문항route검수; 수식12·특수문자1 검수 |

기본 후보30개 + 가천특수등 검수 후 추가/병합 가능. 확정된 ‘공통 연도 범위’는 아직 없다. 대학명만으로 2024~2027 동일 프로필을 선정하지 않는다. 표의 연도는 보유자료 inventory이지 프로필 적용 승인 범위가 아니다.

## 8. PHASE 2 최소 변경 계획 및 파일

PHASE1 Owner 확인 이후 착수. 먼저 로컬·격리 데이터로 두 대표문항을 기존경로와 비교하고 운영변경은 그때의 승인범위/복구조건을 확인한다.

| 순서 | 최소 대상 | 변경 내용 / 완료 증거 |
|---|---|---|
| 1 | APP `tool/essay_lab/university_profile.py` (얇은조립모듈 후보1개), 비공개 profile revision JSON | 정확scope선택·우선순위·충돌·digest·provenance. 새엔진/서버 아님 |
| 2 | APP `tool/essay_lab/material_runtime.py`, `package_registry.py` | 기존reviewed package를 만들 때 profile참조/결정근거투영. 기존profile미지정legacy출력불변 |
| 3 | APP `tool/essay_lab/accepted_source_runtime.py`, 기존 검수패키지 준비 도구 | 한양/건국/숙명 성공자산으로초기profile 작성; 공식/내부축구분 |
| 4 | 기존 `essay_material_private.reviews/revisions.body`, Registry asset 생성 경로 | 기존exam/question IDs·형제문항보존, revision append, 동일재실행안전. 본문validator가 metadata거부하면 별도private manifest pin안 우선 |
| 5 | APP 기존 Math profile/source/criteria 준비 SQL, LAB `src/lib/math-eval/runtime/physical-contract.ts` | 기존 scope/profile_id projection과manifest추적; **현계약으로 충분하면LAB파일무변경** |
| 6 | APP `tool/cloudflare_essay/entry.py`, `cloudflare_runtime.py`; 기존runtime/provider policy | 기존host로profile조립결과소비. config/registry만으로충분하면Worker코드변경없음. 권한확대는별도검증 |
| 7 | APP `tool/test_material_runtime.py`, `tool/test_essay_package_registry.py`, 조립모듈 단위test; LAB physical-contract.test.ts | 아래회귀행렬; 운영호출은이번단계미실행 |
| 8 | 기존 WEB EssayRuntimeClient/Native gateways/결과·History UI | 기본안 **변경0**. profile추적값전달이필수일때만기존DTO최소보완, 학생선택UI신설금지 |

새테이블·새RPC·새Worker·71702는 기본안 제외. 기존 JSON 저장·해시·검증 shape에 대한 **로컬 실증 전 ‘Migration 영구불필요’ 단정 금지**. Math에 대학scope enum추가 없이 기존EXAM/LEAF로구체화하는 비용은 남는다. 기존 SQL function의정책pin갱신이필요하면DDL변경으로명시하고 별도승인/rollback을갖춘다.

### PHASE 2 수용 테스트

- legacy profile없음→기존 input/cache 및결과핀불변(한양·건국 인문/수리 성공fixture 재사용).
- 해당연도1개선택/다른연도거부/같은범위중복거부/혼합시험문항route정확성.
- 문항60/17점 우선, 미확인세부점수null; 내부진단축을공식배점으로해석하면FAIL.
- 문항공식기준>연도예외>profile, 같은계층충돌HOLD, 다른대학근거섞임거부.
- sourcehash변경/수식누락/기준ID틀림/rights미확인→해당문항만HOLD.
- 리뷰revision/프로필버전바꿔도과거History재현; 무료재첨삭original핀/0Credit, 동일key중복0.
- 비공개자료anon/auth차단, 클라이언트profile권한우회거부, Worker별역할기존유지.
- 기존Math短答유형에불필요한풀이감점금지, 대안풀이·부분풀이·판독불확실성구분.
- mock/fixture PASS와 실제Provider/WEB/APP/기기E2E별도기록. PHASE2에서실제호출승인이있을때만영향사례재검증.

## 9. 위험·실패 처리

| 위험 | 탐지 / 최소 대응 |
|---|---|
| PROFILE_SCOPE_AMBIGUOUS | 두후보가같은문항에매치→자동최신선택금지, 해당scope검수 |
| YEAR_EVIDENCE_MISSING | 같은대학이라는이유로연도확장→그연도HOLD, 기존활성경로유지 |
| OFFICIAL_INTERNAL_MIX | 숙명7축/일반Math차원을공식배점으로표시→provenance분리, 숫자출력차단 |
| QUESTION_EVIDENCE_MISSING | profile로정답/해설대체→차단, 기존실패명세에원본/page/qid연결 |
| PACKAGE_SHAPE_OR_PIN_DRIFT | 임의metadata필드/서로다른hash규약→기존validator·jsonb대조, 별도manifest대응 |
| HISTORY_PROFILE_MUTATION | 과거profile/source/criteria UPDATE→금지, 새revision/pin, 원본보존 |
| REGIME_CREDIT_DRIFT | 새profile버전이재첨삭유료cycle변경→기존원핀재사용, Ledger테스트실패시출시금지 |
| MATH_SCOPE_COLLISION | 동일scope ACTIVE중복/대학전역fallback→기존unique검사, 명시EXAM/LEAF투영 |
| RIGHTS_OR_EXTRACTION_HOLD | 성균관권리/수식손상/동국오류등→해당문항공개보류, profile승격으로면제금지 |
| PUBLICATION_CONFUSION | REVIEWED profile을전체서비스활성으로간주→콘텐츠/프로필/실행scope/E2E를분리 |

실패는 기존 `phase3-20261022/*-evaluation-holds.md`의 university/year/exam/question IDs·원인·시도·재검증 양식을 재사용한다. 이번설계는실패문항을해결했다고갱신하지않는다.

### 보존 검토 7항

1. 발생사실은 profile revision과당시평가결과, 생성/검수/적용시점분리.
2. immutable profile·원본SHA·문항패키지·resolver버전으로재현.
3. 새revision append; 학생결과와기존profile UPDATE 금지.
4. 기존auth.uid/student ID 보존; 프로필에학생식별정보없음.
5. Learning평가자료이며합격/Outcome사실아님.
6. 비공개출처·평가자료는기존권한/retention 유지, 학생답안외부재사용없음.
7. 합성평가기준/Provider결과는derived, 공식원문과구분; 출처/불확실성표시.

## 10. Owner 확인 사항 및 완료 판정

이번전략은이미확정되었으므로재승인요청하지않는다. **PHASE2 착수 검수**에서 다음권고안을 확인한다.

1. 프로필은 private versioned JSON + 기존검수manifest/Math profile projection으로 저장(새테이블없음).
2. 초기로컬샘플은 건국인문/수리, 한양legacy회귀, 숙명이미지/공식기준구분. 30후보는공식검수후확정하며즉시전체작성/활성화하지않음.
3. 무료재첨삭은원평가버전고정. 수치부분점수신설·프로필관리새UI는기본범위제외.

PHASE1: A구조분석/B표준/C예시/D11대학표/E저장재사용/F연도예외/GWorker조립/H파일목록/I위험/J검수항목 **문서화 완료**. 공식프로필30개검수완료·구현·운영E2E로해석금지. PHASE2는Owner확인전시작하지않는다.

# Essay-first UX — Owner 결정 (2026-10-11)

**상태:** OWNER APPROVED · 제품 방향의 최상위 UX 원칙 · 2026-10-12 Phase 1 메인 화면 배포 완료, Phase 2 이후 대기
**범위:** LegendStudy LAB 웹 대학 상세/기출 선택/답안 작성/첨삭 결과 및 앱의 동등한 흐름  
**최초 결정(2026-10-11):** 정책 기록만. 이후 별도 승인된 Phase 1 구현·배포 결과는 아래에 기록한다. 일반 사용자 AI 평가 공개는 계속 HOLD.

## 제품 정의
레전드스터디 논술 LAB은 **논술전형 정보 포털이 아니라 기출 답안의 AI 첨삭과 재작성·성장을 돕는 학습 서비스**다. 이미 논술에 지원한 학생이 대학 기출을 풀고 첨삭받기 위해 방문한다는 사용 맥락을 최우선으로 한다.

**가치:** 쉽고 · 간단하고 · 빠르고 · 정확하게, 학생에게 실질적인 학습 가치를 제공한다.

## 기본 사용자 흐름
**대학 선택 → 학년도 선택 → 논술 유형/계열 선택 → 문항 선택 → 답안 작성 → [답안 제출] → AI 첨삭 → 강점/보완점/구체적 개선 → 다시 써보기 → 재첨삭 → 성장 비교**

- 연도·계열·문항은 실제 등록된 데이터에 연동하는 간결한 드롭다운/선택 UI로 제공한다. 기출문항을 길게 나열하지 않는다.
- 문항 선택 후 답안 입력을 즉시 시작할 수 있게 한다. 기존 승인 Desktop 문제 42%/답안 58%, Mobile 문제↔답안 전환, Draft/History 계약은 보존한다.
- 상단에는 대학별 공식 입학처 기출 자료실의 **검증된 대표 링크 하나**를 우선 배치한다. 필요하면 상세 원문 출처는 접힌 영역에서 제공하되 중복 링크를 나열하지 않는다.
- 전형 안내, 모집인원, 일정, 수능최저, 학생부 반영, 대학별 특징 등은 **기본 접힘(드롭다운/아코디언)** 상태의 보조 정보로 둔다. 기존 조사 데이터는 삭제하지 않는다.
- 기본 화면에서 정보 카드가 답안 작성/첨삭 CTA를 밀어내지 않게 한다. 준비되지 않은 문항은 실제로 제출/평가할 수 없으며 정직한 상태를 표시한다.
- 제출 전 실제 Credit 차감이 발생한다면 필수 가격/차감 정보를 명확히 알린다. 반복적·과도한 안내 문구는 제거한다.
- AI 피드백은 대학별 공식 Rubric과 실제 답안을 근거로 교사처럼 친근하고 구체적으로 작성한다. 강점, 부족한 점, 수정 행동, 최초/재첨삭 비교를 명확히 구분한다.

## 현재 UI에서 바꿀 것
현재 대학 상세의 '전형 안내 → 논술 특징 → 모집·일정 → 긴 기출문항 나열 → 공식 자료' 중심 구조는 제품 목적에 맞지 않는다. **대학명/공식 기출 링크 → 연도·유형·문항 선택 → 답안 입력/제출** 중심으로 재구성한다. 입시정보는 보조 영역으로 축소한다. 화면을 정보로 채워 실제 기능이 있는 것처럼 보이게 하는 설계는 금지한다.

## 보존 및 안전
- 전체 Catalog 42개 대학/49개 전형, Owner 우선 개발 22개 대학, 기존 준비 대상 30개 및 공식 출처·연구자료 보존.
- Group A(가천·삼육·경북·부산)와 Group B(나머지 18개)의 실제 대학별 문항 유형/Rubric 차이를 존중한다.
- 기존 Auth/Guest, Worker, Credit Ledger, Payment/Toss/IAP, History, QA Console, RLS 유지.
- 일반 사용자 AI 평가 **HOLD**, 검증된 문항만 실행. 본 정책 기록 자체는 배포 승인이나 Production Migration 승인이 아니다.

## 다음 Codex 작업 시 필수
1. 작업 시작 전 Unified Wiki의 이 문서와 최신 Owner 결정, 기존 승인 UI, 실제 코드/데이터 상태를 읽는다.
2. 현재 대학 상세 페이지의 불필요한 정보 노출을 접힌 영역으로 이동하고, 선택→작성→첨삭 흐름을 첫 화면에 둔다.
3. 기존 기능을 재사용하며 문항/평가 미준비 상태를 속이지 않는다.
4. WEB/APP 일관성, 반응형, 접근성, 실제 제출/차감 보호를 테스트한다.
5. **Owner가 다음 작업을 승인할 때까지 구현·배포를 시작하지 않는다.**

## Codex 전달용 한 줄
> **Essay-first UX가 최우선입니다. 논술 LAB은 입시정보 포털이 아니라 첨삭 서비스입니다. 대학 선택 → 연도·계열·문항 드롭다운 → 답안 입력 → 제출/첨삭을 최단 경로로 배치하고, 전형·모집 정보는 기본 접힌 보조 영역으로 이동하세요. 기존 데이터와 안전 GATE는 보존하고, 다음 Owner 구현 승인 전에는 코드/배포를 변경하지 마세요.**

---

## 2026-10-12 재확인 및 Grok 코드 리뷰 연계 (정책 변경 아님)

2026-10-12 Owner가 위 Essay-first 원칙을 **재확인**했다. 구현 목표 흐름은 동일하다:
**대학 선택 → 시험 연도 → 계열/논술 유형 → 기출문항 표시 → 답안 입력 → [답안 제출] → 실제 서비스 상태·권한에 맞는 첨삭 → 결과 확인 → (필요 시) 재첨삭.**
이미 선택한 대학·연도·계열을 반복 입력하게 하지 말고, 불필요한 페이지 이동·중복 클릭을 줄인다.
첨삭이 불가능한 상태면 **가짜 결과를 보여주지 않고** 정확한 상태와 다음 가능한 행동을 안내한다.
일반 사용자 AI 평가 공개 **HOLD**는 별도 Owner 승인 전까지 유지하며, **이 기록은 공개 승인이 아니다.**

이날 Grok 코드 리뷰(LAB #1 / APP #9)가 함께 기록되었다 → [리뷰 기록](../90_HISTORY/REVIEWS/2026-10-12-grok-code-review.md).

### 정책 충돌 해결 기준 (2026-10-12 Owner 정정 반영)
리뷰가 드러낸 정책 관련 항목은 다음 기준으로 처리한다:
- **준비 중 대학:** 동일 Catalog에 유지하고 실제 이용 가능 상태에 따라 해당 동작만 비활성화한다. 준비 상태와 개발 우선순위·목록 내 순서는 별개다. **강남대·을지대의 서비스 후순위 정책은 유지**하며 Catalog에서 삭제하지 않는다.
- **대학 정렬 지표:** 핵심 수요 지표는 **2027학년도 논술전형 지원자 수**, 경쟁률은 **보조 지표**다. 공식 검증 전까지 현재 Owner 확정 순서를 유지하고, 공식 검증 완료 후 지원자 수 내림차순을 적용한다. 미검증 수치를 공식 확정값으로 표시하지 않는다.
- **Owner Priority 22:** 기존 확정 상위 22개 대학과 순서를 유지한다. 강남대·을지대는 해당 22개에 추가하지 않고 서비스 후순위로 유지한다. 코드의 대학 목록 중복 정의는 정책 미결정이 아니라 **향후 기술적 수정 과제**다.
- 다음 개념을 하나의 규칙으로 뭉뚱그리지 않는다: 기본 노출 순서 · 정렬 지표 · 준비 중 대학의 목록 내 위치 · 준비 중 대학의 비활성화 · 실제 첨삭 기능 상태.
- 검증되지 않은 **2027 지원자 수·경쟁률 미노출**, **캠퍼스 임의 합산 금지**는 유지한다.

### 정책 정정과 기술 과제의 경계

2026-10-12 Owner 정정으로 정렬 지표와 우선 대학 정책은 확정되었다. 기존 순서:
가천·중앙·성균관·경희·한양·한국외국어·고려·국민·건국·서강·이화여자·숭실·인하·동국·세종·연세·홍익·아주·삼육·경북·경기·부산.
전체 42개 대학/49개 전형, 기존 준비 대상 30개를 보존한다.

Owner Priority 22 중복 정의, Catalog 정렬 기준 불일치, `admission.ts` Context 전달,
Worker HTTP 402/422 오류 매핑, APP/LAB Catalog 정책 일치는 **미해결 기술 과제**로 남긴다.
정책 확정은 코드 수정·검증 완료를 의미하지 않는다. Essay-first UX 원칙은 그대로 유지한다.
이번 작업은 Wiki 문서 정정만 승인하며 APP/LAB 코드 수정·브랜치 병합·Production 배포는 하지 않는다.
구현·배포는 다음 Owner 지시를 기다리고 일반 사용자 AI 첨삭 공개 **HOLD**를 유지한다.


## Phase 1 — 논술 LAB 메인 화면 (2026-10-12, 별도 Owner 승인으로 배포 완료)

- 대상은 `/essay-lab/` 메인만. Hero: **대학별 평가 기준에 맞춰 / 내 답안을 점검하고, 직접 다시 써보세요.**
- 대학 검색 제목: `UNIVERSITY SEARCH / 대학 찾기`. 검색 아이콘·부분 대학명 검색·전체/주요 대학 보기·정렬·페이지네이션 재사용.
- 지역/유형/전형 학년도 필터는 메인 UI에서만 숨긴다. 원본 데이터·필터 함수와 별도 대학 목록 경로는 보존.
- 메인 카드: 기존 공식 로고(서강대는 이후 Owner 제공 이미지로 교체) → 대학명 → **첨삭 시작하기 →**. 지역·캠퍼스·학년도·유형·준비 상태 표시는 메인 카드에서만 제거.
- CTA는 기존 대학 상세로 가는 **Navigation**이다. 평가 실행이나 Credit 차감이 아니다. 대학 상세의 준비 상태와 실제 실행 GATE는 그대로 유지.
- 흰색 카드/그림자/곡률/검은 CTA/키보드 Focus 유지. 축소된 카드, 행별 동일 높이와 CTA 하단 정렬. Desktop 4열 / Tablet 2열 / Mobile 1열.
- 42개 대학·49개 전형 / Owner 순서 22개 / 기존 준비 대상 30개 / 강남·을지 후순위 보존. 대학 ID·캠퍼스 데이터·전형/기출 학년도 계약 불변.
- Credit 요약 및 내 논술 분석·나의 첨삭 기록·첨삭권 구매 경로 보존. 상세 페이지·캠퍼스 선택·Runtime·결제 변경은 이번 범위 밖.
- 배포: LAB `codex/essay-first-web-phase1` @ `b6c784e7458cbc54c3e28fffafd7f349b0474544`, Production Pages `262ca551-64d2-4f3a-ba5e-07edbbb92bfe` SUCCESS. 운영 화면에서 확인.
- 검증 및 배포 근거: [당일 Phase 1 기록](../90_HISTORY/DAILY/2026-10-12.md#essay-first-web-phase-1--implemented-and-production-verified).
- **다음 단계는 Owner의 Phase 2 지시 대기.** Grok 리뷰의 기존 미해결 기술 과제는 이번 UI 작업으로 해결되었다고 간주하지 않는다. APP 코드·DB·Credit/Payment/Toss/IAP·Math/Essay 평가·History·QA·Allowlist 불변, 일반 공개 HOLD.


### Phase 1 Owner 화면 피드백 반영 (2026-10-12)

메인 Credit 영역 아래의 `수리논술 문항 보기`는 기존 EssayRuntimeEntry의 로그인 후 Math 전용 바로가기였다.
Owner 지적에 따라 메인에서 해당 entry를 제거한다. 대학 선택 → 기존 상세 진입으로 흐름을 통일하며,
기존 Math workspace/인증/평가 GATE 자체는 변경하지 않는다. 메인 카드 테두리는 검은 CTA와 같은
`#171717` 1px로 맞춘다. 기존 흰 배경·그림자·곡률·Focus 유지.


### 성균관대 로고 표시 보정 (2026-10-12)

공식 PNG518×97의 실제 알파 영역은 x171..365/y25..71(195×47)이다.
전체 캔버스를112px로 제한하면서 실제 로고가 약42px로 축소되었다.
기존 공식 파일·출처·해시는 보존하고, 해당 자산의 표시 프레임에서 투명 여백만 제외한다.
실제 로고는 다른 가로형 로고와 동일한 Desktop112px/Mobile104px 폭으로 표시한다.


### 서강대 로고 교체 (2026-10-12)

Owner가 제공한 `sogang.jpeg` 원본을 기존 모노그램 대신 연결한다. 원본을 변형하지 않고 공통 로고 크기로 표시한다. manifest에는 Owner 제공 출처와 SHA-256을 기록하며, 별도 공식 사이트 검증을 했다고 표기하지 않는다.


## Phase 2 — 대학 상세 Essay-first / 시험 단위 정책 (2026-10-12)

Owner Phase 2 및 Credit Unit 추가 지시가 Phase 1의 상세 화면 보류를 대체한다.
대학명 → 상단 공식 자료 링크 → 2027학년도 논술 일정(기본 접힘) → 논술 첨삭 시작 → 실제 기출 학년도·계열·문항 선택 → 답안 작성·저장 순서로 재구성한다. 2026-10-12 Owner 후속 요청에 따라 일정 영역을 첨삭 시작 위에 둔다.
2027학년도 논술 일정은 기본 접힘. 전형 안내·모집인원·학생부/논술 반영·수능최저·특징은 기본 화면에서 제거하고 원본 데이터는 보존한다.
캠퍼스/시험 회차는 실제 등록된 문항이 있고 선택 구분이 필요한 경우만 제공한다. 전형 학년도와 기출 학년도는 별개이다.
공식 기출 링크가 없는 경우 기존 공식 입학처 링크의 실제 성격을 정직하게 표시한다. 확인되지 않은 시험 시작 시간을 만들지 않는다.
Desktop 문제42%/답안58%, Mobile 문제/답안 탭, 기존 owner-scoped Draft/CAS 및 History·결과 UI 재사용.

### 인문·경제경영 Credit 단위 — Phase 3 적용 대기

- 실제 동일 대학·학년도·계열의 **시험 1회차**가 첨삭 단위이며, 캠퍼스/회차가 다른 시험을 합치지 않는다.
- 문항별로 직접 답안을 작성하고 전체 또는 일부 문항을 선택한다. 최초 제출한 문항 집합을 확정하며 이후 새 문항을 추가하지 않는다.
- 최초 성공 첨삭 1 Credit, 같은 문항 집합에 대해 14일 이내 재첨삭 1회 추가 차감 없음.
- 결과는 문항별 분석과 시험 전체 종합 분석을 구분하고, 재첨삭에서는 문항별 개선·유지·하락과 근거를 제시한다.
- **수리논술 기존 문항별 Credit 계약은 그대로 유지**한다.
- Phase 2는 선택·작성 UI 및 영향 분석만 반영한다. 신규 상세의 답안 제출은 비활성 상태이며, legacy 문항별 평가 RPC 반복 호출로 묶음 평가를 구현하지 않는다.
- 기존 Math/Worker/Ledger/History/결제/Allowlist 계약과 일반 공개 HOLD는 유지한다.

### 검증된 현황과 Phase 3 계약 영향

2026-10-12 Production read-only 점검: `essay_exams` 공개 조회21건, `essay_questions` 테이블 실제 등록0건.
익명 RLS 때문에 빈 결과라고 추정하지 않고 DB count/join으로 확인했다. 기존 Math 별도 문항/평가 기록과 혼동하지 않는다.
따라서 실제 선택·작성·Provider E2E는 완료가 아니며, UI 흐름은 합성 fixture 및 자동화 테스트로 검증했다.
기존 `essay_open_session`은 question ID, `essay_submit_attempt`는 session/revision/body hash, `essay_request_evaluation`은 attempt ID를 받는다.
세션/평가/billing decision은 문항·attempt 중심이며 시험 묶음 원자성 계약이 없다. 기존 unbilled composition adapter만으로 운영 계약 완성을 주장할 수 없다.

Phase 3 최소 설계 검토 항목(아직 SQL/Migration 적용 승인 요청 또는 운영 적용 아님):
1. owner + 실제 exam ID + campus/track + immutable question-set으로 시험 진행 과정을 식별한다. 기존 ID를 재사용한다.
2. 최초 제출 snapshot에 문항별 draft revision/body hash 및 검증된 Rubric/Evidence version을 고정한다. 빈 답안/타인 문항/다른 시험 혼합을 차단한다.
3. 문항별 결과를 하나의 parent evaluation에 연결하고 기존 Ledger 원칙에 따라 단 한 번 예약·성공 확정한다. 확정 실패는 복구, 불명확한 Provider 상태는 조정 절차로 해결한다.
4. idempotency key와 request hash는 시험/문항 집합/답안 revision을 포함하고 재시도는 동일 예약을 재사용한다. 동시 요청은 서버 트랜잭션 잠금으로 차단한다.
5. 최초 확정과 연결된 포함 재첨삭1회/14일 조건을 원자적으로 검사한다. 새 문항 추가·교차 계정/시험 연결은 거부한다.
6. 문항별 결과와 시험 종합 결과, 최초/재첨삭 비교를 공통 WEB/APP History read model에 추가하되 과거 단일 문항 기록을 수정·추정 backfill하지 않는다.
7. additive schema/RPC 및 권한 영향, rollback, 중복 요청·부분 Provider 실패·예약 복구·14일 경계·동시 재첨삭 테스트를 먼저 제출한 뒤 별도 Owner 승인으로 적용한다.
8. 기존 문항별 Math, Human Review, RLS 및 private storage 계약은 유지한다. 일반 공개 HOLD.


## Essay material ingestion — 2026-10-12 — PHASE A/B/C PARTIAL

Owner 추가 지시: A 전체 인벤토리/문항·자료 연결 → B 시험 단위 Runtime/Credit → C 자동화·Math 회귀·운영 영향 검토.
운영 Migration·실제 Credit 거래는 별도 승인 전 금지. 원본 ZIP/PDF는 수정·삭제·Git 업로드 금지.
자료 범위2001학년도 이후. 수시/모의는 별도 시험이며 대학·캠퍼스·학년도·원본 계열·회차를 유지한다.
SHORT/LONG/MATH/SCIENCE 등 문항별 실제 형식은 자료로 판정한다. 300자나 대학 GROUP A/B로 평가 엔진을 결정하지 않는다.

### 자료와 구조화 현황

- 실제 확인된 Mac 바탕화면 `완료` 폴더의20 ZIP, PDF1,030개/고유SHA1,030개/동일 바이너리 중복0.
- 분석 전후 ZIP20개 SHA 동일. 파싱 페이지9,027. 기존 Catalog21개 대학 ID 연결, 미매핑0.
- 파일명 학년도 후보2020–2027. 이 입력에2001–2019가 포함됐다고 주장하지 않는다.
- 파일명 유형 후보: 모의418/명시적 수시41/미확정571 PDF. 이는 시험 개수가 아니다.
- 검토 상태: 본문 검토854, 낮은 텍스트량·시각/OCR 검토173, 손상/읽기 실패2, 구술면접 범위 밖1.
- 아주대2021 모의 인문/의학과 예시답안2개는 pypdf와PDFium 양쪽에서 읽기 실패. 원본 보존.
- 581개 자료 연결 후보에 페이지별 문제 표제·의도·기준·해설·예시 위치를 기록. **검증된 시험 또는 Evaluation Package가 아니다.**
- 신규 검증 완료 Exam/Question/Package는0. 이름/표제만으로 문항 수와 ID를 생성하지 않음. 의미적 중복 검토 미완료.
- SKKU2025 언어형1교시 PDF SHA `43371e05adaecbd324cadd2e28895d2b76e7d1598c9e857d1bd75aaa34d53e0d` 기존 자료와 동일.
  기존 Exam `e15a43a8-5a50-501a-8a60-a632316240e8`, package version
  `v1-sha256:bac7afbcbc2d11c18360d464d687065abf32a242d2a8545ad8fb3b1935576fd4`,3문항 구조·21근거항목 재사용.
  원문 페이지1/7/9/14/17 시각 대조. 문항2 도표/문항3 앞 문항 참조를 보존해야 하며, 일부 답안 제출이 공유 문제 근거 제거를 뜻하지 않는다.
- 원문·추출문·개별 inventory/CSV/연결 후보/기존 manifest/HTML 검토보고서는 로컬 비공개 `essay-materials-private` 폴더에만 저장.
  Git에는 도구·집계 메타데이터만 포함. 내부 분석 승인과 외부 Provider 전송 권한은 별개이며 후자는 미확인.

### DB/Runtime 검증과 구현 한계

운영 DB read-only: essay_exams22(검증된 Catalog21+Math 합성1), essay_questions0.
essay_practice_sessions.question_id 및 essay_evaluations.question_id/attempt_id/session_id는 NOT NULL.
기존 billing decision은 기존 평가 FK에 묶이며 평가 단위는 여전히 문항이다. 문항 RPC 반복으로 시험 묶음을 과금하지 않는다.

LAB exam-unit 계약 후보 구현: 검증 catalog의 owner/exam/kind/year/track/session/campus 및 문항/Rubric/Evidence 버전 고정,
전체/일부 문항 snapshot과 정렬된 요청 hash, 재첨삭 문항 추가 차단, 수정하지 않은 답안 유지,
revision후퇴/교차 사용자·시험/기간 초과/이미 사용한 포함 재첨삭 차단, 동일 Rubric의 개선·유지·하락 비교.
**HTTP/DB 예약에 연결하지 않았으며 실제 Credit 구현 완료가 아니다.** 기존 단일문항 Math 계약 변경 없음.

SQL: `scripts/essay-materials/sql/exam-unit-storage.draft.sql`은 세 private 저장 테이블의 로컬 설계 초안이며 마지막 ROLLBACK으로 종료한다.
기존 Ledger/평가/History 원본을 변경하지 않고 직접 접근은 전부 차단한다. 정식 APP migration 경로에 등록하지 않음.
아직 완성된 운영 Migration이 아니므로 이 초안의 운영 적용 승인을 요청하지 않는다.
`rollback-empty-draft.sql`은 비어 있는 초안 객체만 제거하며, 데이터가 있으면 거부한다.

정식 변경 전 추가 구현/검증:
1. 원본 문항 ID·시험 membership·snapshot immutability와 lifecycle guard.
2. account→cycle→grant 잠금, 최초1Credit·동일집합14일 포함재첨삭1회를 원자적으로 처리하는 RPC.
3. idempotency/fence, 부분 Provider 실패의 전체 결과 미게시, 확정 실패 release와 불명확 상태 reconcile.
4. 문항 결과 + 시험 종합 결과를 하나의 완료 트랜잭션으로 게시. 기존 unbilled composition 재사용; 문항별 과금 금지.
5. 과거 단일문항 History/QLM/Human Review 계약을 보존하는 additive 읽기 투영. 미존재 결과를 생성하지 않음.
6. 실제 전체 schema에서 동시 요청/권한/Worker/복구 테스트 후 APP 정식 migration 및 전체 rollback 제출.

운영 영향/복귀: 사전 승인 전 모든 기능 binding OFF. 승인된 적용 시에도 자료 등록과 평가 활성화 별도 검증.
복귀 시 신규 요청 차단→진행 중 예약 조정→필요한 audit/history 보존→이전 앱/Worker 복귀.
거래가 있는 테이블을 DROP하거나 소비 내역을 삭제해서 되돌리지 않는다. 신규 예약이 없다면 빈 객체 rollback만 허용.

### Grok 및 검증

현재 admission.ts는 reviewedWorkerBinding→readReviewedAdmission 직접 호출로, 과거 callEssayGateway(ctx) 경로가 없다.
Context 누락을 확인 없이 고쳤다고 주장하지 않으며 과거 리뷰와 현 HEAD의 차이를 기록한다.
예약 RPC HTTP402/PT402 및422/PT422 일치 시 안전한 오류 코드 반환 구현. 원문DB진단 노출 없음.
예약 이후 Worker402/422/timeout은202+evaluation ID 상태조회 유지; 함부로 재예약·release하지 않는다.
Math 공통 transport/Worker/Ledger는 수정하지 않음. 나머지 Grok 정책 이슈는 별도 미해결 상태 유지.

검증: Node22.23.2 전체Vitest120파일/1,062PASS/1 optional private fixture SKIP, Python7PASS,
Lint/Typecheck/webpack Build/Boundary/secret audit PASS.
격리PG17에서 의존성stub으로 저장 초안 실행/자동rollback,3개 forcedRLS,9개 직접역할 조회거부,
누락 JSON identity 거부,빈 객체rollback,비어있지 않은rollback 거부 PASS.
이 SQL테스트는 실제 lifecycle/동시 Credit/운영 RLS 통합 검증이 아니다.
실제 Provider E2E·Credit 거래·Production Migration·배포 없음. 기존 Phase2 운영 상태 및 공개 HOLD 유지.

## Full essay service connection — 2026-10-12 — PARTIAL

Owner의 최신 FULL ESSAY SERVICE COMPLETION 지시를 적용했다. 이 절의 결과는 선택·작성 UI 연결이며 전체 첨삭 서비스 완료가 아니다.
LAB `codex/essay-full-service-connection` @ `89dcbe737245e3063503dafcdf4c7dabe7dd3cdb`, Push/remote 일치.

### 실제 연결과 검증 범위

- 기존 20 ZIP/1,030 PDF/581 후보를 재사용. 21대학의 **77 시험·과목 선택 레코드 / 237 답안 입력 항목**을 공개 metadata read model에 연결했다. 전체 시험의 하위 문항·해설·Rubric 검증 완료 수로 해석하지 않는다.
- 기존 DB 질문 조회를 먼저 사용하고, 대학에 등록 문항이 없거나 비로그인인 경우 source registry로 선택·작성을 제공한다. 운영 `essay_questions=0` 자체를 변경한 것은 아니다. 신규 canonical question UUID를 만들지 않았으며 DB ID가 확인된 시험은 재사용했다.
- 학년도 → 수시/모의 → 계열 → 실제 복수 회차 시 캠퍼스·회차 → 문항 탭 → 개별 답안 작성. 단일 값은 자동 선택. Desktop42:58 / Mobile 문제·답안 전환 유지.
- Draft는 기존 browser storage adapter 재사용. 계정/guest/시험/문항별 분리, 재진입 복원, 저장 실패와 다른 창 충돌 시 덮어쓰기 차단. **계정 간·WEB/APP 동기화 Draft가 아니다.**
- 인문·경제경영 화면의 전체/일부 문항 선택과 시험1Credit/14일 동일집합 재첨삭 정책을 보존했다. 실제 제출은 `첨삭 준비 중` disabled. 표시용 계열 판별을 Provider 라우팅이나 정산 근거로 사용하지 않는다.
- 2027 일정은 최신 지시대로 작성 영역 아래, 기본 접힘. 기존42대학/49전형/22우선/30준비 대상 및 공식 출처 보존.
- 원본PDF/ZIP/추출문/개별 검토 기록은 private local 폴더만 사용. Git에는 선택 metadata·해시·nullable canonical ID와 코드만 반영.

### 검토 상태와 자료 대조

581 후보 그룹의 보수적 상태: VERIFIED9 / NEEDS_REVIEW572 / UNRESOLVED0.
여기서 VERIFIED도 시험 정체성과 답안 입력 라벨 범위다. 79개 후보 그룹이 공개 선택 레코드와 연결되지만, 나머지 source의 해설/평가자료 관계가 미완성인 그룹은 NEEDS_REVIEW로 남겼다.
77개 선택 레코드와 581개 검토 그룹은 서로 다른 단위이며, 77개 Evaluation Package 완성을 뜻하지 않는다.

- 연세2027 “수시 논술전형 … 모의 문항”을 수시 실전으로 오인하지 않고 MOCK으로 정정.
- 한양2024 모의 자연 `[문제 2번]` 누락 방지. 인하 오후는 별도 회차.
- 숙명2025 인문1/2 자료는 계열1/2가 아니라 동일 시험의1-1/1-2/2-1/2-2 답안 항목. 광운2022 자연1/2도 문항 파트로 연결.
- 서강2024 1차 경제경영의 번호 없는 단일 문항에 임의 번호를 표시하지 않는다.
- 홍익2025 세종은 Owner 이미지PDF를 공식2025 영향평가 보고서 표지·동일 인쇄면93–107과 대조. [공식 자료](https://www.hongik.ac.kr/kr/admission/notice-admission.do?articleNo=134109&mode=view), 원문 확인일을 임의로 과거 연구자료에 덮어쓰지 않았다.

| 대학 | 시험·과목 선택 레코드 | 답안 입력 항목 |
|---|---:|---:|
| 아주대학교 | 6 | 12 |
| 가톨릭대학교 | 1 | 3 |
| 중앙대학교 | 24 | 75 |
| 동국대학교 | 6 | 18 |
| 이화여자대학교 | 1 | 3 |
| 한양대학교 | 3 | 5 |
| 홍익대학교 | 1 | 7 |
| 한국외국어대학교 | 1 | 3 |
| 인하대학교 | 3 | 9 |
| 경북대학교 | 1 | 3 |
| 건국대학교 | 3 | 8 |
| 광운대학교 | 1 | 2 |
| 경희대학교 | 2 | 7 |
| 부산대학교 | 2 | 6 |
| 세종대학교 | 3 | 9 |
| 성균관대학교 | 2 | 6 |
| 서강대학교 | 1 | 1 |
| 숙명여자대학교 | 1 | 4 |
| 숭실대학교 | 1 | 2 |
| 서울시립대학교 | 1 | 4 |
| 연세대학교 | 13 | 50 |

### 기존 Humanities 평가의 실제 상태

APP `codex/essay-full-service-implementation` 및 기존 `essay-scaffolding-vnext` wiki/tool을 읽어 한양2024오후2·숙명2025모의 근거를 추적했다.
기존 실행은 ChatGPT 인증 Codex CLI 실제 모델 호출이며 execution PASS / quality PARTIAL이었다. 운영 Provider API + 시험Credit + History 성공의 증거로 재분류하지 않는다.
기존 prompt/rubric/schema/evidence 재사용 가능하나 source 권한 확인과 private package 주입, canonical 질문 등록 및 시험 단위 atomic reservation/finalization이 남아 있다.

이번 registry의 평가 활성 시험 **0**. 실제 Provider 호출/실제 Credit 거래 없음.
기존 per-question session/evaluation의 question_id NOT NULL 및 billing 관계 때문에 다중 문항을 기존 RPC 반복으로 처리하면 시험1Credit을 보장하지 못한다.
앞선 저장 SQL 초안은 billing/History/QA 연결을 구현한 정식 Migration이 아니므로 운영 적용 대상으로 제출하지 않는다.
남은 작업: 전체 후보 본문·시각 검토, 하위문항/분량/해설/공식Rubric·권한 확정 → canonical 등록 및 원자적 시험 정산/부분실패 복구/동시성 검증 → History/관리자QA adapter → 정확한SQL·Rollback과 검증결과 제출 → 별도 운영 승인 → 승인계정 Provider E2E.

### 검증 / 배포

- Node22 전체 Vitest1,068PASS/1SKIP 후 저장실패·다른창 충돌2개 추가PASS; 최종 관련11PASS. Python7PASS. Lint/Typecheck/Next webpack Build/PDF·secret/boundary audit PASS.
- 실제 Chrome local: 21대학 진입,77선택 레코드의 모든237라벨 확인, 숙명 문항별 저장/복원·분리, disabled gate 확인. 360/375/390/768/1280/1440 및 각200% 글자 확대에서 가로overflow0. 실제 screenshot 육안확인.
- Production Pages `1110b09e-d4ec-4f58-9a94-58997c743daa`, SHA `89dcbe737245e3063503dafcdf4c7dabe7dd3cdb`, 배포SUCCESS.
- 운영 env/deployment configs 전후 동일. DB Migration/권한/Allowlist/평가GATE/Math/Credit/Payment/Toss/IAP 변경 없음. 일반 사용자 평가 HOLD.
- Rollback point: Pages `29a34f22-4a1e-477b-a65b-f11ebb876be7`, SHA `f6de765871d6e72ef7a085c249be2ae3784291e8`. UI 배포 롤백만으로 이전 화면 복구 가능; DB 롤백 없음.
- 운영 도메인 Live QA PASS: 21대학/77시험·과목 선택과237답안 항목, Draft 복원·문항 분리·disabled GATE,6폭×100/200% overflow0 확인. 실제 Provider E2E는 미실행.


## Shared APP WEB image input — 2026-10-12 — PARTIAL

Owner mandatory APP integration and image-first addendum are reflected in both clients. Existing21-university WEB selection work was reused, not restarted.
- APP branch `codex/essay-shared-app-integration`: implementation5428748; final docs handoff `cb65be0356a235cbc7a135f3547203de5b86c169`.
- LAB same branch: `9a288560df32a2e91b825e2626538fb243e01acc`. Both pushed/remote verified; APP main unchanged.
- One public metadata endpoint `/api/essay/catalog` serves existing source registry and university IDs. Native APP's actual Dart client read the deployed endpoint and compared every exam/question metadata field against WEB source:21 universities/77 exam-subject selections/237 answer inputs, exact match. No duplicate APP dataset or invented UUIDs.
- Native cascading year/admission-mock/track/campus-session choices, per-question writing, official source link, whole/subset humanities selection and existing History entry are connected. WEB42/49 Catalog, Owner22/retained30 and existing UI remain.
- Input preference:133 photo-first natural/math/science slots;104 text-first humanities/business slots. This is presentation preference, not verified evaluator classification or a scientific/Math billing mapping. Actual mixed/science question routing still requires official packages.
- WEB and APP camera/gallery controls precede optional supplemental text. Existing WEB Math photo/PDF pipeline remains; APP now reuses `math_input` register/read/confirm, existing `/api/math/upload` and `/extract`, then existing evaluation/reevaluation/History. No new evaluator/ledger.
- Local draft restoration is per owner/question: WEB text localStorage and photos IndexedDB; APP private atomic files, text revisions, OS backup exclusion. Account-deletion cleanup includes drafts. Guest data is not silently transferred. **Cross-device cloud Draft sync remains unimplemented.** Local image drafts are not evaluation artifacts or immutable History.

### Verification and release

APP Flutter3.47.6 analyze PASS, relevant75PASS/1SKIP; Android Debug APK/iOS Simulator builds PASS. Native360dp/100-200% widget selection/photo controls/text draft restore PASS. Actual camera/gallery hardware and Android lost-picker recovery NOT verified; no physical device testing or store release.
WEB relevant169PASS; lint/typecheck/build/boundary/readiness audit PASS. Actual Chrome local and Production21university/77selection paths and237question labels, text/photo reload persistence and question isolation PASS.360/375/390/768/1280/1440 at100/200% no horizontal overflow; mobile/desktop screenshots inspected. These checks used synthetic local answer drafts and did not invoke actual Provider or Credit.
Production Pages `ed6e37f9-5f84-42ab-acc2-a2cb67d43d0b` SUCCESS, deployment source SHA `9a288560df32a2e91b825e2626538fb243e01acc`; live domain QA PASS. Deployment configuration unchanged. Rollback:Pages `1110b09e-d4ec-4f58-9a94-58997c743daa`,source89dcbe737245e3063503dafcdf4c7dabe7dd3cdb; UI/Functions rollback, no DB rollback.

### Remaining work — not a completed full service

Source metadata is not a complete Evaluation Package inventory. Prior581candidate review limitations remain9reviewed groups/572additional review; no claims that all1030PDFs' questions/rubrics are resolved.
New source evaluation-ready count remains0. Canonical question registration/package rights, atomic exam1Credit reservation/finalization/failure recovery, remote Draft, exam reevaluation/History/growth/QA integration still require development and isolated verification. Existing per-question RPC must not be called repeatedly to bill an exam bundle.
Existing Math per-question Credit preserved; humanities/business policy remains initial selected exam-question set1Credit and same frozen set reevaluation once within14days at0additionalCredit. Actual new exam Credit/reevaluation/shared evaluation consistency E2E NOT executed.
No production migration/DB writes/permission changes/actual Credit/provider transactions. General AI activation HOLD. A new production migration must first have complete SQL/rollback/authorization/concurrency evidence and then separate Owner approval; this turn does not provide an executable production migration or claim its readiness.


## Overnight exam contract continuation — 2026-10-12 — LOCAL PARTIAL

Owner continuation preserved the deployed21-university/77 exam-subject/237-input
Native+WEB UI. No repeat ingestion or original ZIP/PDF modification/upload.
Private581-group review remains9 whole-group metadata verified/572 needing review;
this turn adds no newly verified source package. Input metadata readiness is not
Rubric, materials-rights or Provider readiness.

### Implemented locally

- APP `50632eeffc5af76d766f40822645277c26873eb4`: private atomic exam billing
  candidate using the actual existing Credit Ledger tables/triggers. One selected
  bundle reserves/settles1, partial failure cannot settle, release idempotent,
  one successful included rewrite within14 days, frozen question/version set.
  Initial/independent runs retain separate lineage. No ledger schema changes.
- Existing `ReviewedRuntimeWorker` reused through a question-output staging adapter:
  no child success invokes per-question financial finalization; only the full exam
  checkpoints and finalizes. Unknown outcomes do not automatically refund/retry.
  Current prompt/Provider identity/independent review remain required.
- Native exam snapshot +14-day rewrite contract added. LAB
  `d0b812bad5863800c56c002c97be32e1fda78b59` strips extraneous answer fields and
  verifies the same ordered JSON and SHA-256 fixture as Native. Contracts are
  unmounted; no claim that disabled submit buttons are now enabled.
- Both remain on `codex/essay-shared-app-integration`; Commit/Push/remote SHA verified.

### Validation and actual service state

PostgreSQL17 disposable Unix-socket DB, actual canonical legacy prerequisites,
12 scenario groups PASS. Includes8 concurrent same-key retries, different-key
last-credit race, late transaction rollback, incomplete result, immutable history,
failed rewrite retry, expired/foreign-account denial, empty rollback and nonempty
rollback refusal. API roles anon/authenticated/service_role cannot invoke helpers.
This used a local superuser: production owner/ACL/lifecycle topology is NOT proven.
Python15 PASS (7 new exam cases +8 existing ReviewedRuntimeWorker cases), fake
Provider transport only. Native12 tests PASS; WEB12 contract/reservation tests
PASS. Flutter analyze, Android debug APK, iOS Simulator, WEB lint/typecheck/build,
boundary/secret audit PASS. No physical-device debugging or real Provider E2E.

Read-only live Catalog recheck:21 universities/77 selections/237 inputs,
evaluationReady0. Existing Pages deployment ed6e37f9 at LAB9a28856 preserved;
no new WEB deployment for the unmounted development contracts. No production DB
migration, real Credit transaction, public activation, store release or main merge.

### Remaining development versus approval holds

**Development still required:** authoritative canonical exam/question mapping and
initial Rubric/evidence/rights checks; Auth/Allowlist/lifecycle and deployer role
integration; durable Worker lease/journal and interrupted-child recovery;
reviewed exam-wide synthesis; shared server Draft; new exam owner History,
existing admin Quality Console and privacy erasure adapters; mounted APP/WEB
submission and result routes. This is not merely awaiting approval.

Candidate and rollback are under APP `supabase/candidates/essay_exam_unit/`.
The historical LAB storage rehearsal is retained as historical design, not a
second deployable schema. Candidate rollback refuses any nonempty run table;
never delete learning records or ledger entries to force rollback.

**Separate Owner approval later:** only after the above development, production
fingerprint/ownership review and a formal migration package are ready, request
production migration/test-account Credit E2E authorization. The present candidate
must NOT be applied. Public evaluation stays HOLD. Existing Math, Credit History,
Payment/Toss/IAP and source corpus remain unchanged.

## Oct13 canonical Draft and registration continuation — PARTIAL

Owner full-service continuation preserved all existing21 source universities,
77 exam/subject selection records and237 answer slots, source IDs,42/49 Public
Catalog,30 retained and22 priority universities. Original ZIP/PDF untouched and
not committed. The1030-PDF/581-candidate corpus is not fully verified: prior9 whole
groups reviewed/572 remain; this continuation adds no approved Evaluation Package.

### Implemented and verified

- APP `98b235fe1509e3848ae228f19fab7450b6058056`, LAB
  `146727f7c6db6ba94e96a92e81ffa4ea38613258`, existing branch
  `codex/essay-shared-app-integration`, pushed and remote SHA matched.
- Native and WEB source writers reuse existing `essay_open_session` and
  `essay_save_draft` for canonical question UUIDs and the same account/question
  default session identity. Restore/save with revision checks, local-first
  persistence and conflict protection. Different nonempty answers are preserved
  for comparison, never silently overwritten. Guest/source-only drafts stay local.
  Native saves after canonical open; WEB uses explicit account-save. 20,000-character
  server limit is enforced without truncating30,000-character local drafts.
- Text-first questions can attach an optional image; natural/math remains image-first.
  Current image Draft is one per question, local only, not cross-device evidence.
- Public Catalog joins exact published source question keys to canonical UUIDs,
  using anonymous RLS and only the existing project publishable key. Cross-project,
  ambiguous or inconsistent exam/year/university mappings fail closed. Worker/user
  credentials are not sent. This does not infer evaluation readiness.
- Read-only Production baseline:51 DB university rows (includes nonpublic rows),
  22 exams,0 general questions. These counts differ from the42-university Public Catalog.
- LAB registration review:76 exam/subject records (74new,2preserved),234question
  metadata rows; Yonsei2025 additional-natural1exam/3questions held. The extracted
  body does not disambiguate the existing additional exam; no filename-only merge.
  Stable candidate UUIDs do not change source keys or existing DB IDs.
- Exact registration/rollback SQL and manifest are under
  `scripts/essay-materials/sql/registration-review/`. Unpublished/inactive DML only,
  no new tables/grants/RLS/Credit changes. NOT applied or promoted to production
  migration. Registration alone does not authorize publication, Draft or evaluation.
  Owner apply package still requires source/provenance/rights review and the canonical
  APP migration procedure. Never apply these files as service activation.

### Tests

WEB full suite1080PASS/1conditional SKIP, plus2 added anonymous transport-boundary
checks PASS; lint/typecheck/boundary/static build PASS. Flutter3.47.6 analyze PASS,
46 related tests PASS, Android debug APK and iOS Simulator PASS. Three registration
generator tests PASS. Disposable PostgreSQL17 with actual15 legacy prerequisites:
registration replay, unpublished state, edited rollback refusal and exact22-exam
baseline restoration PASS. Test fixtures are local, not operating student data.
Prior exam billing12SQL/15Worker tests remain local synthetic evidence, not real E2E.

### Deployment and limits

Pages Production `dd8a45d0-564f-47ea-978e-12cb802429bc` SUCCESS at LAB146727f;
Cloudflare deployment configuration exactly unchanged. Rollback deployment
`ed6e37f9-5f84-42ab-acc2-a2cb67d43d0b` at9a28856. No Git main merge, APP store release,
Production DB migration, actual Credit transaction or new Provider evaluation.

Live browser QA PASS: all21 source university routes,77 exam/subject selectors,
237 question tabs; text/photo restore and question isolation; disabled submission
GATE;360/375/390/768/1280/1440px at100%/200% no horizontal overflow. Mobile screenshots
visually inspected for humanities and photo-first math. Read-only live API confirms
21/77/237, canonicalQuestions0, evaluationReady0. Guest/local Draft tests only;
no Provider/Credit calls or physical device QA.

Live cross-device Draft is NOT verified: production canonical questions remain0.
EvaluationReady0; new-source submission stays disabled. Current implementation is
not full essay service completion. Remaining development: full source/Rubric/evidence
and rights verification; Yonsei identity reconciliation; exam runtime lifecycle,
least-privilege authorization, durable journal/recovery and reviewed whole-exam
synthesis; mounted exam submit/result/reevaluation; shared exam History/growth,
admin QA and erasure adapters; photo cloud Draft. These are not approval-only gaps.

Separate approval holds: production registration/migration only after complete
review package, approved-account actual Provider/Credit E2E, public activation and
store submission. No broad approval is requested as a substitute for unfinished
implementation. Math, existing Ledger/History/QA, Payment/Toss/IAP remain unchanged.
Public AI evaluation remains HOLD.

## Oct13 P0 connection — private registration APPLIED / service PARTIAL

Owner explicitly approved74new private exams,2existing exam identities reused,
234unpublished questions; Yonsei unconfirmed1/3 excluded. Applied named migration
`essay_source_registration_76_234`, hosted version20261012212352. Read-back:
96total exams/74new/234questions/0published/0active new exams. Exact234-ID set MD5
f5c1407ffbf7c735e22d587aaff27fbd equals approved manifest. Existing RLS expression
hashes and ACLs unchanged. No Credit posting, Provider call or public activation.
CLI draft version20261012211746 was renamed to hosted version without changing SQL
SHA256127473bcf490aa9ecf2e5fa5f6b6b3fd9d449e13419d2a609d695d2d0e5d3bed.
APP package: supabase/reviews/essay-source-registration (SQL, rollback, postflight,
manifest, hashes and verification). Rollback tested locally only, never on live rows.

APP b0aa1ee72835a0cda80efd566169c6a1330aa0af / LAB a8bb3c82e0cae422702bac6923a258bde5285775,
branch codex/essay-shared-app-integration, pushed and remote verified.

Existing reviewed SKKU private evidence3questions/9criteria is bound to registered
IDs through exact exam/PDF hash/unique labels. Source text/evidence/criterion IDs
preserved; private CLI generates bound plan without uploading source text. Actual
private package + local canonical DB/RPC19checks PASS, including owner Draft,
submission, Worker frozen evidence, stale/foreign rejection and failure reservation
release. Binding3tests PASS; Worker/durable journal34tests PASS; existing exam
Ledger12local scenarios PASS. Durable pending marker and atomic/fsync checkpoint
prevent blind Provider redispatch after process loss. Single persistent host only;
distributed lease and retention integration remain deployment requirements.
Registration migration replay/RLS client denial/security drift/Rollback PASS.
No actual Provider/Credit E2E or new Native UI build claimed in this continuation.

Verified runtime gaps:
- Read-only current Production Pages config contains no ESSAY_* worker settings.
  Current Pages deployment remains dd8a45d0 at146727f. No test-only commit redeploy.
- Hanyang existing quality2025 package is2025mock Humanities. Registered Hanyang
  source subset is2024mock natural/business and2024admission Humanities afternoon2;
  do not cross-bind different exams because the university matches.
- Sookmyung2025mock existing package covers1-1/1-2, not2-1/2-2. Do not label the
  entire exam package verified from this subset.
- SKKU2/3 require a figure; existing text-only Worker gate retained.
- Source public API still21/77/237, published canonical IDs0,evaluationReady0 after
  private registration. Existing published-question RLS and Draft RPCs unchanged.

Full service NOT complete: exact remaining package mappings/rights, production
Worker composition, exam lifecycle/least-privilege backend, mounted exam submit,
reevaluation/shared History/growth/admin QA/erasure remain development work. The
existing atomic Ledger candidate is not a deployed exam service. This is not a
claim that another generic Owner approval alone completes all remaining work.
General AI activation HOLD, Math/payment/Toss/IAP/History preserved.


## Oct13 universal service — approved registry read, production UI, runtime PARTIAL

최신 Owner 정책은 **범용 평가 Runtime + 시험별 독립 평가자료**다. 한양대·숙명여대는
검증 사례이며 적용 범위의 상한이 아니다. 전체21대학을 유지한다. 기존42대학/49전형,
Owner22/준비30 정책과 Native/WEB 승인 결과 UI를 보존한다. 인문·경제경영 시험묶음1Credit,
동일 문항집합14일1회 무료 재첨삭, Math 문항별 계약을 유지한다.

### 실제 운영 적용과 배포

- 명시적 Owner 승인에 따라 `essay_registered_questions(uuid)` 적용: hosted migration
  `20261012215054`. 기존 private 등록 `20261012212352` 재적용하지 않음.
- 운영 함수 직접 조회234문항/76시험, Manifest ID MD5
  `f5c1407ffbf7c735e22d587aaff27fbd` 일치. 전부 unpublished; RLS/테이블 권한/평가/Credit 불변.
- EXECUTE 기존 essay_worker만 허용; anon/authenticated/service_role 거부 확인.
  DB owner read-back이며 실제 앱JWT 인증 검증과 구분한다.
- WEB Production `b95c09d6-f388-47ed-81a9-8f68376231f4`, source
  `96d6572f392c6f79e09f6083d5270fdac7f16dc1`, 배포 SUCCESS 및 설정 불변 확인.
  Rollback point `dd8a45d0-564f-47ea-978e-12cb802429bc`.
- Live21대학/77선택/237입력 유지. 운영 제외 Yonsei1시험/3문항은 검수 대기.
  검색→숙명대→문항 선택, 문항별Draft, 다중사진 복원/삭제,6폭360–1440 및200% no overflow 확인.
  evaluationReady0/평가 버튼 차단. Public activation **HOLD**.

### 구현 및 재사용

- WEB/APP 동일 인증 POST Registry 경로. 기존 online Auth/allowlist 뒤 narrow worker RPC.
  GET은 공개 메타데이터. private ID 조회로 Draft/평가 권한을 임의 부여하지 않는다.
- 두 플랫폼 문항별 사진 최대6장, 순서·미리보기·삭제·기기 내 저장/복원·저장 실패 재시도.
  Native 기존 카메라/갤러리 및 private atomic files, WEB 기존 IndexedDB 재사용.
  사진은 아직 **기기 내 저장**이다. 업로드/서버사진Draft/기기 간 사진 동기화 완료가 아니다.
- 공통 package adapter는 대학·연도·유형·계열·회차·캠퍼스·문항·원본해시·cache digest를 검사.
  text Runtime에 Math/science package를 넣지 않는다. DB 승인 regime을 입력받으며
  Python JSON hash로 DB jsonb 정책 해시를 임의 생성하지 않는다.
- 기존 검증된 한양2024수시 오후2문항1, 숙명2025모의1-1 입력자료를 해당 Registry ID에 연결.
  과거 학생 답안/사진을 제외한다. 한양2025 예시와 연도가 다르다는 과거 포괄적 장애 설명은
  정정한다. 일치하는2024자료가 실제 존재하며 공통 Runtime 적용 범위는21개 전체다.
- 기존 SKKU3문항 package 보존. 새로운 전송권한/운영 콘텐츠 연결을 자동 승인하지 않는다.
- 기존 ReviewedRuntimeWorker에 공식 자료 이미지의 해시/참조검증 및 기존 Responses image
  transport 연결. 새 평가 엔진 없음. 기존 prompt/review/store:false 정책 유지.
- 시험 adapter는 exact frozen-claim hash로 완료 child를 복원한다. 불확실/pending 요청은
  재호출/임의환불 없이 reconciling 유지. 운영 journal/store 연결 완료와는 구분한다.

### 21개 대학 자료 범위

20ZIP/1030PDF/581후보를 다시 수집하지 않고 기존 추출·그룹을 재사용했다.
등록76시험의 모든 원본 해시가 inventory와 일치. 같은 기존 검토그룹의 별도 해설·답안
자료76건(시험별 연결 건수)을 후보로 연결했다.56시험에 평가기준 페이지 후보가 존재한다.
**56개 검증 Rubric 또는 실제 평가 가능한 package라는 의미가 아니다.** 문항별 관계·근거
검수가 필요하며 부족한 항목은 private manifest에 기록했다. 원본/PDF/비공개 평가내용은
Git·공개Storage에 올리지 않았다. 아래 수치는 Source selection/등록 및 후보 수다.

| 대학 | 운영 시험 | 운영 문항 | 평가기준 페이지 후보 시험 |
|---|---:|---:|---:|
| 건국대학교 | 3 | 8 | 3 |
| 경희대학교 | 2 | 7 | 0 |
| 중앙대학교 | 24 | 75 | 23 |
| 가톨릭대학교 | 1 | 3 | 1 |
| 연세대학교 | 12 | 47 | 1 |
| 동국대학교 | 6 | 18 | 6 |
| 부산대학교 | 2 | 6 | 2 |
| 성균관대학교 | 2 | 6 | 2 |
| 세종대학교 | 3 | 9 | 3 |
| 아주대학교 | 6 | 12 | 5 |
| 인하대학교 | 3 | 9 | 3 |
| 한양대학교 | 3 | 5 | 1 |
| 숙명여자대학교 | 1 | 4 | 1 |
| 서울시립대학교 | 1 | 4 | 0 |
| 경북대학교 | 1 | 3 | 1 |
| 이화여자대학교 | 1 | 3 | 0 |
| 서강대학교 | 1 | 1 | 1 |
| 한국외국어대학교 | 1 | 3 | 1 |
| 숭실대학교 | 1 | 2 | 1 |
| 광운대학교 | 1 | 2 | 1 |
| 홍익대학교 | 1 | 7 | 0 |

### 검증과 미완료 — 승인만 받으면 끝나는 상태가 아님

PASS: private RPC 로컬7체크/rollback, runtime/package37(모의 Provider), WEB172관련,
Native11, Flutter analyze, WEB lint/typecheck/boundary/secret audit/build,
Android debug/iOS Simulator build, 실제 브라우저 local/live 사진 및 반응형 QA.
실기기 디버깅/실제 Provider/운영 Credit 거래는 실행하지 않았다.

운영 읽기 확인: `essay_private.provider_policy`, `provider_binding_valid`,
`essay_record_provider_telemetry`가 아직 존재하지 않는다. Git의 기존 migration 존재와
운영 적용을 혼동하지 않는다. 기존 essay_worker 서버 인증 설정도 현재 없다.

남은 구현: 문항별 자료/Rubric 검수와 전송권한 확인, production runtime 배치,
시험묶음 lifecycle/lease/whole-exam synthesis/원자적 Credit 운영 연결,
공유 서버Draft 및 사진 업로드, 기존 canonical History/성장/관리자QA 연결,
Native/WEB 실제 제출·재첨삭 경로. 기존 결과 UI를 새로 만들지 않는다.

Owner 사항: 기존 worker credential을 서버 Secret으로 공급해야 한다(채팅에 전송 금지).
새 운영 SQL은 구현·영향·rollback 검증 완료 후 별도 적용 승인; 실제 Credit 거래도
정확한 테스트 범위를 제시한 뒤 별도 승인. 현재 미완성 시험 SQL을 배포용으로 제출하지 않는다.
기존 approved registry read는 적용 완료이므로 반복 승인받지 않는다.

GIT: 같은 `codex/essay-shared-app-integration` 보존.
APP `63309b2797c50170deb995a163a14d88f093bbcb` (구현0b99cdd, 후속 배포증거63309b2),
LAB `96d6572f392c6f79e09f6083d5270fdac7f16dc1`; Push/Remote SHA 일치 확인.
APP main 병합/스토어 제출 없음. **UNIVERSAL_ESSAY_SERVICE: PARTIAL**.


## Oct13 durable runtime and Worker Secret correction

기존 범위/우선순위/UI/Catalog/Registry/Math/Ledger/Payment/IAP 유지.
`codex/essay-shared-app-integration`에서 이어서 작업했다.

### 구현 및 로컬 검증 완료

- Existing ReviewedRuntimeWorker + ExamQuestionChannel + DurableJournal를 시험
  단위 복구 경로로 연결했다. 최초 run/owner/exam/claim digest 고정, 문항별 실행 의도,
  독립 검수 결과, 시험 종합 평가 의도/결과, 최종 정산 checkpoint를 보존한다.
- 완료 문항은 재호출하지 않고, 불명확한 Provider/종합 평가 실행은 재실행·임의 환불하지
  않는다.8개 경쟁 프로세스가 동일 시험을 요청해도 문항2회/종합1회만 실행했다.
- 실제 임시 PostgreSQL의 기존 Ledger + 후보 시험 SQL 연결 검증: 정산 commit 후
  응답 유실→정확한 재시도, 중복 차감/Provider 재호출0, 최초1 Credit/재첨삭0.
  Provider와 검수 입력은 합성 fixture다. 실제 Provider E2E PASS가 아니다.
- WEB/APP 공통 private catalog gateway에 Worker JWT 설정 사전 검사 추가:
  malformed/wrong role/expired/near-expiry 설정이면 호출 전503. 서명 검증 대체 아님;
  학생 온라인 Auth/allowlist와 Supabase 서명/ACL 검증은 그대로 유지한다.
- Python45, local PG14 scenarios, WEB142 관련 테스트 PASS. lint/typecheck/경계/
  secret audit/Node22 webpack static build133 pages PASS. 신규 Flutter 변경 없음.
  Android/iOS 빌드는 직전 결과 유지이며 이번에 재실행했다고 주장하지 않는다.

### 운영 확인 및 배포

운영 읽기: 등록76시험/234문항/공개0. DB 변경·운영 Credit·Provider 호출 없음.
Pages `9cd0d891-06e3-4454-b7fe-9a2b44853be5`, Production SUCCESS,
LAB `2b295fdddf33bd02f361b0101a53c58eebb8a485`; 환경 설정 전후 동일.
Live GET21대학/77선택레코드/237입력항목, evaluationReady0. 이 공개 source view 수와
실제 등록76/234를 혼동하지 않는다. Private POST503/private,no-store: Secret 미설정.
실제 브라우저 숙명여대2025모의/인문 문항4개 선택·입력 화면, 평가 비활성 확인.
Rollback point `b95c09d6-f388-47ed-81a9-8f68376231f4`.

### Owner Action — 정확한 설정 절차

[기존 Registry review의 Owner runbook](https://github.com/LC3808/legendstudy-app/blob/codex/essay-shared-app-integration/supabase/reviews/essay-private-registry/README.md#owner-action--worker-authentication-correction-2026-10-13)을 단일 상세 절차로 유지한다.

1. Supabase LegendStudy(stlhijzpjfgwwdgunlsd) → SQL Editor에서 읽기 전용 ACL 확인;
   Settings → JWT Signing Keys에서 신뢰 키/기존 발급 담당자의 보관 키 확인.
2. 기존 JWT가 있다고 단정하지 않는다. role만 존재, 발급기는 미배포이며 scoped local
   확인에서 자격증명 미발견. Cloudflare Production/Preview에도 ESSAY Secret 없음.
3. `authenticator → essay_worker` membership가 FALSE이므로 JWT만 넣어도 동작하지 않는다.
   이 역할에는 기존 finalize/claim 등 권한도 있어 새 권한 부여는 별도 검토·승인 대상.
   운영키 도입/회전도 자동 실행하지 않는다. 미검증 키나 API key를 JWT로 대체하지 않는다.
4. 승인된 발급자가 해당 프로젝트가 신뢰하는 키로 role=essay_worker/exp JWT를 확보한 뒤,
   Cloudflare → Workers & Pages → legendstudy-lab → Settings → Variables and Secrets
   → Production → Add → ESSAY_REGISTRY_WORKER_JWT → Secret/Encrypt → Save → 재배포.
   값은 JWT만, Bearer 접두사 없음. 키/JWT를 채팅·로그·Git에 출력/저장하지 않는다.
5. 배포 SHA 성공, 승인 계정 private POST와 canonical76/234 ID 일치, 미승인 차단,
   no-store/HOLD 보존을 확인한다. 검증은 조회만 하며 Credit 거래가 필요하지 않다.
   단기 JWT 만료 전 갱신 체계는 별도 운영 전제다.

일반 테스트 계정 JWT는 학생 인증용일 뿐 Worker 권한이 아니다. Publishable/anon,
secret/service_role, Math Worker 자격증명도 대체 불가. 해당 Registry RPC EXECUTE는
essay_worker만 true, 나머지 API roles false로 재확인했다.

### 구현 미완료 / 승인 대기 / 실제 검증 구분

구현 미완료:21개 대학 문항별 자료/권리 검수(56개는 후보), server Draft/사진 공유,
production lifecycle/lease/retention 및 시험 submit·History·growth·QA 통합,
검수된 whole-exam synthesis/Worker 운영 배치. 현재 후보 SQL은 배포 준비 완료가 아니다.
승인/Owner 설정: issuer와 role 권한 결정, 직접 Secret 설정, 완성된 SQL 별도 승인,
명시적 운영 Credit E2E 범위 승인. 일반 공개/Store 배포는 계속 HOLD.
실제 서비스 검증: Registry DB/공개 selection UI/배포 확인만 완료.
새 시험의 실제 Provider·Credit 및 WEB↔APP 전체 E2E는 미완료다.

APP `76408fa53ba095fb37210c29f4fef977a2148549` / LAB `2b295fdddf33bd02f361b0101a53c58eebb8a485`
Push/remote SHA 일치. APP main 병합/스토어 제출 없음.
**UNIVERSAL_ESSAY_SERVICE: PARTIAL.**


## Oct13 university-by-university materials delivery — PARTIAL

Owner 최신 결정: 공통 Runtime을 유지하며 시험별 검수→Package→실제 E2E로 확장한다.
학생 문제 PDF 뷰어는 신규 승인 범위다. 앞선 원문 링크만 제공 정책을 이 범위에서
대체하되, 문제 전용 안전 자산·학생 표시 권한 검증 전에는 기존 링크를 유지한다.
42/49 Catalog, Owner22, 기존21대학/Registry76시험234문항은 변경하지 않는다.
첫 대상은 정확히 일치하는 한양2024수시 인문 오후2 문항이며, 숙명/성균관→20대학
→30~40대학 확장은 검수 단위로 진행한다. 특정 대학의 기준을 다른 시험에 적용하지 않는다.

### 구현 및 검증

LAB 보호 경로 `/admin/materials/` 구현: 기존 quality operator 서버 검사, 대학/
학년도/유형/계열/상태 검색, Owner22 순서, 대학별 진행률, PDF 원본과 매핑 검수,
17항목 체크, 권한별 상태, 서버 수정본 저장/충돌 보존, 이력, Package 승인 요청.
아직 운영 검수 DB 미적용이므로 Owner가 실제 자료를 저장하는 운영 URL은 제공 전이다.

WEB PDF.js와 Flutter Native pdfrx를 기존 작성 UI에 연결했다. 문제 전용 DTO의
question ID/자산 SHA256/검수/학생 표시 권한을 모두 확인하며, 원본 통합 PDF를
페이지 숨김으로 학생에게 전달하지 않는다. Desktop42:58 가변 폭, mobile 전환,
페이지/확대/오류재시도/위치 복원. 학생용 자산의 실제 생성·서버 발행은 미완료다.

로컬 분석은 PDF 원본 수정 없이 역할/페이지 후보를 생성한다. 한양 오후2 PDF2개
분석, 모두 NEEDS_REVIEW, 공개0. 기존21대학 검토 자료는 보존하며 전체 검수 완료로
취급하지 않는다. 문항별 version/digest manifest는 구현했으나 완성된 Runtime용
Evaluation Package 생성/승인/활성화로 보고하지 않는다.

검증: 신규WEB9, 관련 source/Math57, Python4, 로컬PG 권한/동시성/재실행/Rollback,
Flutter analyze/관련10 tests, Android debug/iOS simulator build PASS. WEB134페이지
build PASS. 실제 브라우저 합성 PDF 페이지 이동/복원,360/375/390/768/1280/1440,
360px200% 글자 확대 no-overflow. 합성 QA route/PDF는 배포 산출물에서 제거했다.
실제 Provider/Credit/WEB↔APP 첨삭 E2E는 수행하지 않았다.

### 운영 승인과 남은 작업

[APP 후보 SQL/runbook](https://github.com/LC3808/legendstudy-app/tree/codex/essay-shared-app-integration/supabase/candidates/essay_material_review):
private schema3개 table + operator RPC5개 + private original bucket. 기존Registry/
RLS membership/Ledger/평가 활성화는 변경하지 않는다. 운영 미적용; 별도 승인 요청.
Rollback은 접근을 차단하고 원본/검수 이력을 보존한다. 실제 API/Storage 권한 검증은
승인 후 수행한다. DBfixture테스트는 운영 E2E가 아니다.

**Secret 정정:** Owner가1년 essay_worker JWT를 Cloudflare Production Secret으로
설정했고 Pages aec0f8af-8a01-4b62-b690-f2c71e007816 성공이 확인됐다. 이전 절의
‘Secret 없음/Owner 설정 필요’는 설정 전 기록이다. 비밀값은 출력·저장하지 않았다.
JWT 사전 형식/만료 검사는 통과하지만 `authenticator→essay_worker` membership는
여전히 false다. 따라서 실제 Worker DB 인증 성공은 미확인. 기존 role의 claim/
finalize 권한 때문에 단순 조회 권한처럼 확대하면 안 된다. 별도 최소권한 검토 유지.

남은 항목: 운영 검수 저장, 원본의 상세 자동 분류/시각 분석, 안전한 학생 자산,
최종Package 승인/기존Runtime 연결, Worker 권한, 시험Credit/서버Draft/사진 공유의
운영 연결, 실제 Provider·History·재첨삭·QA·WEB/APP E2E. 일반 공개 HOLD.
이번 변경은 운영배포/DB변경/실제Credit/Provider/Store 제출을 수행하지 않았다.


### Owner 승인 후 운영 연결 — Oct13

검수용 비공개 DB와 관리자 웹 연결 추가 승인 수신. 적용된 migration:
20261013032726_essay_material_review_private /
20261013033132_essay_material_package_generation. 실제 DB에서3개 private RLS
table,비공개32MiB PDF bucket,익명 차단 RPC5개 확인. 기존234문항 유지.
DROP은 새 검수 정책2개의 재생성뿐이며 학생/Registry/Ledger/History 삭제 없음.

서버 Evaluation Package 생성 추가: 검수한 텍스트/문항/페이지/출처/권한과
canonical ID,version,digest 저장. 기존 평가결과를 소급 변경하지 않는다.
Package는 runtime_ready=false이며 생성 자체가 평가 활성화는 아니다.

관리자 URL: https://lab.legendstudy.com/admin/materials/
기존 관리자 로그인→논술 자료 검수→대학/시험 선택→기존 문서 또는 PDF 등록
→자동 분석 초안→문항/역할/페이지/추출 근거 수정→저장→체크리스트 검수 완료
→Evaluation Package 생성. 기존 문서는SHA256으로 중복 방지한다.
권한은 기존quality operator이며 새 관리자 계정이나 권한을 만들지 않았다.

LAB e4644774732e56c0f603a2a612b8a73173c58b95 / Pages
5987e864-8cbf-413b-806d-9fa497d9d3f8 Production 성공 및 실도메인 로그인 차단
화면 확인. 기존 Auth/운영 환경 유지. Rollback 배포점은
aec0f8af-8a01-4b62-b690-f2c71e007816; DB rollback은 접근만 차단하며 검수 이력
보존. 로그인된 관리자 세션이 없어 실제 upload/save/reload 검증은 Owner 로그인
대기. 로컬 테스트를 운영 E2E로 보고하지 않는다. 실제 Provider/Credit 호출0.

현재의 운영 미적용/웹 미배포/Package 생성 미구현 문구는 위 승인 전 기록이다.
일반 사용자 AI 공개 HOLD, 학생 PDF와 전체 Universal E2E는 여전히 PARTIAL.


### Oct13 관리자 대학별 검수 목록 UX — 운영 반영

Owner 보완 반영: 전체/대학별 가로 스크롤 탭, 기존 Priority22 순서, 대학별
검수 완료/전체 시험 수. 실제 등록 대학만 표시하며 탭 숫자는 검색 필터에 따라
줄어들지 않는다. 데스크톱은 학년도/시험 유형/계열·회차/문항 수/검수 상태/작업
테이블, 900px 미만은 간결한 목록. 시험은 학년도 최신순이다.
기존 검색·필터 유지 및 초기화 지원. 검수 화면 진입/복귀에도 필터를 보존한다.
서버 저장 성공 결과로 목록 상태와 완료 수를 즉시 갱신하며 검수 완료 후 해당
대학 탭으로 복귀한다. 저장 실패 시 입력 유지와 기존 오류 처리를 보존한다.

LAB `321d34bbdb35f71c9e918eb4f6b815fe4a47d8b6`, 기존 브랜치 Push/Remote 확인.
Pages `0bd29d65-2a20-4dc1-af8f-32c7add517b5` Production 성공/소스 SHA 확인.
Rollback WEB 배포점: `5987e864-8cbf-413b-806d-9fa497d9d3f8`. DB 변경 없음.
관련 7개 테스트, 타입 검사, 변경 영역 lint, boundary/secrets audit, WEB build PASS.
실제 관리자 로그인 후 76시험 목록, 한양대0/3 범위, 검색·상세 진입·복귀 확인.
1280px 테이블/360px 목록 시각 확인; 360/768px 문서 가로 overflow 없음.
완료 후 상태 갱신은 mocked server 응답의 UI 테스트로 검증했고 운영 자료를
임의 VERIFIED 처리하지 않았다. 실제 PDF 업로드/저장·복원은 계속 미완료이다.
이번 UX 배포는 Provider/Credit 호출, 권한 변경, 학생 공개를 수행하지 않았다.
관리자 URL https://lab.legendstudy.com/admin/materials/ ; 일반 AI 공개 HOLD.


### Oct13 Hanyang first exam extraction and review — PARTIAL

**Reuse A:** Owner-uploaded question3pages and integrated evidence8pages already
private-stored; exact SHA256 matches local Downloads. No reupload/recollection.
Exam345d3caa-3438-58c3-8f80-62a6242179ec; question4cbe8b69-2ccc-5c4e-9e77-0644f90e2cde.
Integrated pages1–4 belong to afternoon1 and are excluded; target pages5–8.
Question/passages on PDF2–3. Official5criteria include10/25/25/30/10percent; no
model answer in these two documents. Table reading order still needs human review.

Codex analyzed actual PDF text and rendered criteria page, generated14 mappings
and7 interpretation/missing-source notes. Source quotations and AI judgment remain
separate. Imported via authenticated admin UI after hash/exam/quote validation;
server revision1 NEEDS_REVIEW saved and browser reload restored. All14 mappings
unverified; no Owner checks or rights approved by Codex. This is not a live external
Provider extraction E2E. PDF/image contents and private JSON are not committed.

WEB adds administrator-only same-origin AI extraction endpoint, existing Provider
transport reuse, saved-document/revision/rights checks and exact quotation rejection.
Owner-approved Provider transmission per document is required; endpoint not called
against a live Provider this turn. Scanned PDFs with no usable text still need visual
analysis; automatic visual-provider fallback is not implemented.

Review UI now shows exact exam, question/type tabs, source-page jump, PDF on left,
large editable text on right, one evidence item at a time and5 grouped human checks.
Existing17 backend conditions remain intact. Save conflict preserves edits. Connected
documents/upload/analysis controls collapse to keep review primary. No DB migration.

Owner: https://lab.legendstudy.com/admin/materials/ → 한양대학교 → 2024 수시
인문계열 오후2 검수하기. Review the extracted14 evidence entries using tabs and
근거 selector; correct only mistakes and mark 원문·문항 연결 확인. Check5 closing
items, record actual rights basis under 자료별 이용권한, save, then 검수 완료.
Return to the same exam and generate Evaluation Package. Approval does not activate
student evaluation. No file reupload or manual initial extraction required.

Existing Runtime adapter in APP d97a7e4 accepts trusted server package/pinned
digest and verifies exact canonical identity, source key, version, human review and
Provider rights. Uses package_registry/HostedQuestion; no new engine. It is not
mounted in production. Existing four-role Runtime does not yet forward separate
explanation/model-answer/image roles; unsupported roles explicitly reported.

Validation:17 related WEB tests, lint/typecheck/boundary/secret audit/build PASS;
3 adapter unit tests PASS. Production admin revision1 restore and evidence page6
selection verified. Desktop1440 and mobile390 visually inspected,390px no document
overflow. No new Flutter build (Native code unchanged). Actual Provider/Credit,
WEB→APP results, paid1/free14day rewrite, History/growth/QA E2E NOT PASS.

Read-only production audit: authenticator→essay_worker membership FALSE, public
essay_record_provider_telemetry absent while current Worker calls it. Existing
essay_claim dispatches v1.3 scaffold, so runtime/DB contract is only partially aligned.
Do not apply grant-only fix and claim service completion. Provider policy/telemetry,
production host and exam Credit/shared Draft/History/QA remain implementation and
deployment work, not merely Owner approval. No operational SQL applied this turn.

LAB f7c97b7 deployed Production0590ec46-9cbf-49af-99c0-84dc9c5ce5c2.
Rollback WEB to prior321d34b deployment0bd29d65; saved private review remains intact.
APP adapter rollback is code-only. Public evaluation HOLD; no Provider/Credit call,
no payment/Auth/RLS changes. First exam remains incomplete pending human review
and actual Runtime/Credit integration; do not expand activation before first E2E.


### Oct13 Owner-generated Package v12 verification

DB verified revision12/VERIFIED, approval_requested=true; version12 digest
978b4c6f07432b75055eff63baa415bb9061adf2b5ebbeb17c95dbecce323543 recomputes
correctly.17 mappings stored. The list's approval-pending label is a saved request,
not an implemented separate approval action or runtime-ready status. No automatic
activation; runtime_ready=false and rights_status empty.

Production package exported privately (not Git) and fed to new existing-RuntimeHost
loader using canonical registration manifest. It correctly returns no enabled
question: original question text now intent; added question text empty and on
evaluation PDF6 instead of question PDF2. Owner correction confirmation requested,
other human-reviewed mappings untouched. Empty optional image/model-answer entries
mean no content, not a mandate to invent evidence. Two source Provider rights need
actual basis recorded by Owner. Existing Package version is preserved.

Owner next: correct just question mapping (or authorize Codex to prepare correction),
record actual Provider transmission permission for the two PDFs, then regenerate a
new Package version after reviewing changes. Full prior review need not be repeated.
Runtime operating SQL and actual Credit require separately scoped approval; no grant
or transaction performed here. Telemetry RPC/role/policy/host, selected-set Credit,
History/QA and cross-device E2E are remaining implementation/deployment gaps.

APP9bfa44d6 local tests; LAB178d4bf18 related tests/typecheck/lint/build check.
No Provider call or actual Credit. Revert these code commits to roll back; reviewed
DB package untouched. Current first-exam service status remains PARTIAL.

Production deploy4aa528c7-0f65-4655-9172-8b2b2e9a12f7 source178d4bf verified.
Live admin shows revision12 VERIFIED, Package v12 preserved, empty-question
warning and generation disabled. No review data changed. Remote LAB178d4bf/
APP9bfa44d verified. Rollback WEB to0590ec46 if needed.


Oct13 Owner-authorized question-only correction: saved revision13 NEEDS_REVIEW
through existing administrator UI. Original question text218chars restored to
question role at question PDF2; empty erroneous question mapping on criteria PDF6
removed. Remaining15 mappings keep human verification; all closing checks unchanged.
No rights approval or runtime activation; Provider/Credit not called. Owner needs
to reconfirm only corrected question mapping and regenerate reviewed Package.


### Oct13 final Owner review → Package v16

DB revision15 VERIFIED/all16 mappings confirmed. Package missing after ordinary
save, so generated using existing approved admin action; revision16 VERIFIED,
approval_requested true, package16. Digest recomputed valid:
09b50772b37f69ec7544a752ba88f5cde6c8de555ab17339a13eb6ef4fdcf106.
Exact canonical binding succeeds: question4cbe8b69-2ccc-5c4e-9e77-0644f90e2cde,
13 existing-runtime evidence inputs and5criteria. Question identity/content blocker
resolved. Owner review not repeated; no text or verification changes.

APP f0ea749 adds worker RPC fetch into existing loader; candidate read-only package
RPC validated in temporary PG17 (role denial, rights denial, digest, content, replay,
rollback), adapter7 tests PASS. Existing material private schema reused; no new
table/engine. Owner approval requested for one RPC EXECUTE grant to essay_worker,
not authenticator membership. SQL/rollback in existing essay_material_review folder.
Not applied. Per-document Provider rights remain empty. No real Provider/Credit.
Current status PARTIAL: role switching, Provider policy/telemetry, operational host,
exam Credit/History shared E2E remain implementation/deployment gaps. HOLD maintained.


### Oct13 Package read RPC production applied

Owner explicitly approved only Package read RPC. Migration20261013115731 applied
to stlhijzpjfgwwdgunlsd. Worker EXECUTE=true; anon/authenticated=false,
authenticator membership remains false; registered questions234. Current Hanyang
v16 read fails PROVIDER_RIGHTS_REQUIRED as expected; rights not fabricated.
SQL-admin cannot SET ROLE essay_worker, so actual Worker JWT path NOT verified.
No membership changes, Provider calls, Credit, publication or student-data changes.
Rollback: revoke this function's Worker EXECUTE using existing worker_read_rollback.sql.
Remaining: source transmission permission, Worker authentication, Provider policy/
telemetry, runtime hosting and Credit/History E2E; overall service PARTIAL/HOLD.


### Oct13 Owner viewer policy — implementation partial

WEB2c4eebf: retain existing writer, PC window/new-tab attempt, mobile full-screen
modal/close, existing renderer and page persistence. No forced PDF split; no
download/print/share controls. Native e957602: pdfrx full-screen route with close,
underlying text/photo Draft retained; no WebView. Same gated student_question DTO.
Private evaluation PDFs are not passed to student renderer. No student asset
publication or rights change. Viewer changes currently committed, not deployed.

WEB2 interaction tests, types/lint; Native analyze/3 related tests PASS. Real local
mobile browser error-state viewer opened/closed with answer retained. PC popup
not observable in IAB; approved PDF display and fresh native platform builds are
unverified. Temporary QA route removed. Actual end-to-end viewer QA still needed.

First-exam priority unchanged: Hanyang Package16 already mapped correctly; no PDF
reanalysis or Owner-review repetition. No Provider or Credit call. Worker package
RPC applied, but role membership/Provider policy/telemetry/host/settlement remain
incomplete. Rights still unset. Public HOLD. Source review alone does not authorize
Provider transmission. No additional operating SQL requested in this viewer change.

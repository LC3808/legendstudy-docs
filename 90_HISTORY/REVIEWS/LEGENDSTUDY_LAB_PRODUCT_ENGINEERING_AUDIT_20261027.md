<!--
DOCUMENT_STATUS: HISTORY / REVIEW (independent pre-launch audit)
SCOPE: 레전드스터디 LAB 출시 전 종합 제품·엔지니어링 독립 검토
COMPILED: 2026-10-27
REVIEW_TYPE: READ-ONLY (코드·DB·Production 무변경)
INSPECTED_REFS:
  - docs: review 브랜치 claude/legendstudy-lab-pre-launch-review-512841 / main 04db7d3
  - lab: origin/main 8991b51 · 운영후보 origin/codex/web-app-release-20261024 @ 91c19ea (main 대비 +173 commit)
  - app: origin/main d07671e9 · essay/credit 작업 origin/codex/payment-credit-recovery-20261023 @ c603059 등 feature 브랜치
PRIMARY_POLICY: 00_PROJECT/CURRENT_STATUS.md · 90_HISTORY/2026-10-27-essay-beta-launch-24-universities-schedule.md
-->

# 레전드스터디 LAB 출시 전 제품·엔지니어링 독립 감사 — 2026-10-27

작성: Claude (Opus 4.8) · 검토 방식: 읽기 전용 · 코드/DB/Production 무변경

> **공개 저장소 규칙**: Secret·토큰·PII·학생 답안 원문 비포함. 파일·함수·commit·구조만 기록.
> **근거 태그**: `[사실]` 소스코드/문서로 직접 확인 · `[로그검증필요]` 런타임·DB·배포 로그로만 확정 가능 ·
> `[추정]` 합리적 추정(확정 아님) · `[개선]` 권고. **추정을 사실로 기록하지 않는다.**
> 이 감사는 기능 유무가 아니라 **학생에게 전달되는 실제 학습 가치**를 기준으로 판단한다.

---

## 1. Executive Summary

레전드스터디 LAB의 **핵심 학습 흐름(문제 선택 → 답안 작성 → 첨삭 → 코칭 → 재작성 → 재첨삭 → 성장 확인)은
설계·코드·백엔드 계약 수준에서 일관되게 구현되어 있다.** 특히 Credit·Ledger 원장, 성장 비교(동일 답안 한정),
답안 인용 기반 피드백 계약은 품질이 높고 안전하게 설계되어 있다. 이는 보존해야 할 자산이다.

그러나 **"출시 준비 완료"로 보고할 수 없는 두 가지 구조적 공백**이 있다.

1. **실제 평가 활성화 상태가 코드에서 확인 불가(= Production 런타임/Secret 의존).** WEB 평가는
   `ESSAY_REVIEWED_RUNTIME_ENABLED==='true'` + Worker 바인딩 + Secret에 전적으로 게이트되어 있고
   `[사실]`, Wiki 기준 최근까지 `PUBLIC_ACTIVATION: HOLD` / "신규 Worker·WEB 배포 미완료" `[사실]`.
   이 플래그·Worker·Secret가 Production에서 실제로 켜져 있고 24개 대학 회차가 DB에 연결되어 있는지는
   **이번 읽기 전용 검토 범위로 확정 불가** `[로그검증필요]`. → 출시 차단 여부의 최대 변수.
2. **24개 대학 "준비 완료"는 코드로 입증되지 않는다.** 정적 공개 카탈로그는 `asOf 2026-09-18`로
   오래됐고 문항·평가기준을 담지 않으며(`evaluationRouting = "QUESTION_RUNTIME_ONLY"`) `[사실]`,
   코드의 대학 정책 상수는 **2026-10-27 24개 목록이 아니라 2026-10-11 결정**을 반영한다 `[사실]`.

**가장 중요한 학습 가치 결함(P1)**: Owner가 §4.C에서 명시한 **"[수정된 문장 보기]"(수정된 문장 예시,
기본 접힘)** 가 학생 화면에 **구현되어 있지 않다.** 데이터 계약에는 존재하나(`example`,
`sentences[].example`) 어떤 학생용 컴포넌트도 이를 렌더링하지 않으며, 오히려 "첨삭을 반영한 예시 답안"이
**표시되지 않음을 강제하는 테스트가 존재한다** `[사실]`. 즉 의도적 미표시다.

**독립 의견(§15 요약)**: 현재 상태는 **"제한적 베타 조건부 가능, 정식 유료 출시 불가"**. 베타는
①평가 런타임 실제 활성 확인 ②검수된 대표 회차만 공개 ③Credit 정산 무변경을 전제로 가능. 정식 출시는
Owner 품질 게이트(실제 E2E·코칭 품질) 통과 전까지 날짜(11월 2주)보다 **품질 우선** 원칙을 유지해야 한다.

---

## 2. 현재 서비스 구현 수준 (A/B/C/D 단계)

- A=설계만, B=코드 구현, C=운영 연결, D=실제 사용자 가치 확인.

| 기능 | 단계 | 근거 |
|---|---|---|
| 인문·사회 논술 평가 계약(루브릭·강약점·근거 인용·재작성 체크리스트) | **B/C** | `src/lib/my/evaluation-report.ts` `humanReport`, `src/lib/my/exam-history.ts` `[사실]` |
| 문장 단위 코칭(원문→문제점→수정 방향) | **B** (운영 경로 한정) | `exam-history.ts:55` `sentence_feedback`, `evaluation-report.tsx:23` `[사실]` |
| 수정된 문장 **예시** 보기 (§4.C) | **A** (데이터만 존재, UI 미표시) | `report.example` 미렌더, `human-evaluation-report.test.tsx:13` `[사실]` |
| 재작성 → 무료 재첨삭 → 성장 비교 | **B/C** | `essay-dashboard.tsx`, `essay_v2_included_once` 인덱스 `[사실]` |
| 성장 그래프(동일 답안 한정, 비합산) | **B/C** | `essay-history-growth.tsx`, `compareReports` `[사실]` |
| Credit·Ledger(예약·확정·해제·환불·멱등) | **C** | `20260929000300_essay_credit_commercial_core.sql` `[사실]` |
| 베타 일일 2 Credit / 피드백 보상 2 Credit | **A** (양 저장소 미구현) | grep 결과 관련 RPC·마이그레이션 부재 `[사실]` |
| 상경 Essay+Math 혼합형(1 시험·1 History·1 Credit) | **B** | `functions/api/essay/math-session.ts`, `math-release` `[사실]` / 실제 품질 `[로그검증필요]` |
| 실제 평가 실행(Provider 호출) | **C 게이트됨** | 런타임 플래그·Worker·Secret 의존 `[로그검증필요]` |
| 24개 대학 회차/문항/공식 평가자료 연결 | **?** | 정적 카탈로그는 runtime-only, DB 의존 `[로그검증필요]` |

> **D(실제 사용자 가치 확인)은 이번 검토에서 어떤 기능에 대해서도 독립적으로 확인하지 못했다.** D는
> 실제 학생 답안으로 실제 Provider 평가를 돌려야 하며, 이는 읽기 전용·무호출 원칙상 수행 불가. Wiki의
> 과거 E2E 성공 기록(10/09~10/10)은 **인용**하되 현재 Production 상태로 승격하지 않는다 `[사실]`.

---

## 3. 사용자 가치 평가 (제품 철학)

Owner §3의 7개 질문에 대한 독립 답변:

1. **채점 중심인가, 성장 중심인가** → **성장 중심 설계가 명확하다.** 점수(별)에는 "대학 공식 점수·합격
   가능성이 아니다"라는 경고가 반복되고(`evaluation-report.tsx`), 성장 비교는 등급 변화만으로 원인을
   단정하지 않는다는 주석을 UI에 노출한다 `[사실]`. 철학은 올바르게 구현됨.
2. **무엇을 고쳐야 하는지 이해 가능한가** → 부분적. 루브릭별 설명 + 보완점(제목·설명·수정 방향) +
   우선 수정 과제 + 재작성 체크리스트가 제공됨 `[사실]`. 단, **"어떻게 고친 문장이 좋은 문장인가"의
   구체적 예시(수정된 문장 예시)가 빠져** 추상 수준에 머물 위험이 있다(§4 참조).
3. **부족한 부분을 구체적으로 확인 가능한가** → 운영(university-exam) 경로에서는 `sentence_feedback`로
   **학생 원문을 인덱스 단위로 정확히 인용**해 문제점을 짚는다(`exam-history.ts:55`의 start/end 검증) `[사실]`.
   구체성은 양호. 단 경로에 따라 이 섹션이 아예 없다(§6 일관성 결함).
4. **재작성을 유도하는가** → 유도함. 대시보드·결과 레이아웃에 "재작성 안내", "직접 다시 써보세요" CTA와
   무료 재첨삭 버튼이 있음 `[사실]`.
5. **재첨삭에서 무엇이 개선됐는지 보여주는가** → 보여줌. `EvaluationComparison`이 항목별 등급 전후·변화
   라벨·성장 요약을 제공 `[사실]`.
6. **성장 데이터가 실제 학습 변화와 연결되는가** → 동일 답안·동일 루브릭 핀이 일치할 때만 비교(허위 비교
   차단). 과장된 인과 주장 없음 `[사실]`. 건전함.
7. **불필요한 복잡성이 흐름을 방해하는가** → 평가 경로가 `exam`/`essay`/`math` 3종으로 분기하고 결과
   렌더가 경로별로 달라(§6) 사용자 가치 전달이 **경로에 의존**하는 복잡성이 있음 `[개선]`.

---

## 4. 인문·사회논술 첨삭 품질 (최우선 상용화 대상)

### 4.1 구현된 코칭 계약 — 양호 `[사실]`
`humanReport`/`exam-history.ts`가 산출하는 학생용 리포트는 다음을 포함한다:
- **종합 평가**(overall_summary) + 음성 피드백(인문·상경 한정, 수학 text-only — 10/09 정책 일치)
- **평가 기준별 결과**: 대학 평가 항목 라벨 + 1~5단계 별점 + 항목별 설명(접힘 `<details>`)
- **잘한 점/보완할 점**: 제목·설명·**학생 원문 인용(evidence, `answer.includes` 검증)**·수정 방향
- **평가 근거(evidenceLabels)**: "문제 요구 / 제시문 / 대학 공식 출제 의도 / 대학 공식 평가 기준"으로
  **공식 자료 연결을 명시** `[사실]` — 추상 평가가 아니라 근거 기반임을 뒷받침.
- **재작성 체크리스트(rewrite_checklist)**

### 4.2 Owner §4.B "실제 답안 기반 코칭" — 대체로 충족 `[사실]`
운영 경로의 "문장 다듬기"(`evaluation-report.tsx:23`)는 **학생 원문(quote) → 평가(diagnosis) →
수정 방향(direction)** 을 제공한다. 원문 인용은 `exam-history.ts:55`에서 **answer 본문의 start/end
인덱스와 정확히 일치**해야만 채택되어 허위 인용을 차단한다. 이 부분은 설계가 우수.

### 4.3 Owner §4.C "[수정된 문장 보기]" — **미구현 (핵심 GAP)** `[사실]`
- 문제: **"학생 원문 → 문제점 → 수정 방향 → 수정된 문장 예시 → 개선 이유"** 중 뒤의 **두 단계(수정된 문장
  예시·개선 이유)가 학생 화면에 없다.**
- 데이터 계약에는 존재한다: `evaluation-report.ts:4`의 `sentences?:{quote;diagnosis;direction;example?}[]`,
  그리고 `humanReport`의 `example`(AI 생성 재작성 본문). 그러나:
  - `evaluation-report.tsx`의 "문장 다듬기" 섹션은 `s.example`을 **렌더링하지 않음** `[사실]`.
  - `report.example`(전체 모범 재작성)은 **어떤 학생용 컴포넌트도 렌더링하지 않음**(grep 확인) `[사실]`.
  - `human-evaluation-report.test.tsx:13`이 `"첨삭을 반영한 예시 답안"`의 **부재를 단언** → 의도적 제거/보류.
- 관리자 품질 콘솔에서는 `generated_rewrite.body`·`sentence_feedback`를 운영자에게 **표시**한다
  (`quality-case-detail.tsx:240,250`) `[사실]`. 즉 데이터는 생성되지만 **학생에게만 가려져 있다.**
- 사용자 영향: 학생이 "그래서 이 문장을 어떻게 고쳐야 더 좋은가"의 구체적 예시를 보지 못해, Owner가
  강조한 "구체적 코칭"의 마지막 한 단계가 빠진다. 다만 전체 모범답안 제공은 표절·베껴쓰기 우려가 있어
  **의도적 결정일 가능성**이 높다 `[추정]`.
- 권고(§14): 전체 모범답안 노출이 아니라, **문장 단위 `example` + 개선 이유(why)**를 `[수정된 문장 보기]`
  접힘 토글로 노출하는 방안을 Owner가 결정. (전체답안 베껴쓰기 방지와 Owner 요구를 양립시키는 절충.)

### 4.4 추상 평가(§4.A) 위험 — 구조적으로는 방어됨 `[사실]`
"논리적 연결이 부족합니다" 류의 공허한 문구를 막는 장치가 있다: 보완점은 원문 인용(evidence)과 결합되고,
근거 라벨로 공식 자료에 연결된다. 다만 실제 Provider 출력 문구 자체의 품질은 `[로그검증필요]`.

---

## 5. 재작성·재첨삭·성장 시스템 (핵심 차별화)

- **기존 답안 보존 + 수정 답안 저장 + 최초·재첨삭 연결**: `essay_billing_decisions.included_by_decision_id`,
  `essay_generated_rewrites`, `predecessor_id`/`prior_evaluation_id` 체계로 구현 `[사실]`.
- **14일 무료 재첨삭**: 원장에 **`essay_v2_included_once` 유니크 인덱스**로 "포함 재평가 1회" 보장
  (`20260929000300_...sql:27`). 무료 재평가 판정은 `included_revision`(부모 결정에 이미 포함 자식이
  없으면 amount=0, 동 파일 :123-128) `[사실]`.
  - **주의 `[로그검증필요]`**: 검토한 함수에서 "14일" 경과 시간 경계 조건을 **발견하지 못했다**(인접
    함수들의 `interval`은 처리 리스(15분)·재작성 창(15분)일 뿐). 무료 재첨삭이 "부모당 1회"로만 제한되고
    **14일 시간창이 다른 곳에서 강제되는지 확인 필요**. (만약 미강제라면 정책보다 관대 — 과금 안전성에는
    문제 없으나 정책 정합성 확인 권고.)
- **평가요소별 변화 + 성장 그래프 + 성장 요약**: `EvaluationComparison`/`GrowthBars`/`EssayGrowth`
  — 등급 전후·향상/동일/하락/비교불가 집계, 항목별 막대 `[사실]`.
- **대학별 평가기준 무리한 합산 금지**: `EssayGrowth`가 "서로 다른 대학·문항의 단계는 합산하지 않습니다"를
  명시하고, 비교는 동일 session/question/rubric 핀 일치 시에만 수행(`compareReports` 가드) `[사실]`. **우수.**
- History 표시: `/my/essays/` 단일 라우트로 대시보드·기록 공유 `[사실]`.

---

## 6. 학생 UI/UX

### 6.1 공개 데모 vs 실제 평가의 구조 분리 `[사실]`
`/essay-lab/evaluation/[attemptId]`는 **정적 Mock 데모**다(`mockEvaluation`, `MockNotice`,
"연습 예시", `dynamicParams=false`). 실제 평가·History는 **owner-gated `/my`·`/account` + Cloudflare
Functions + Worker** 경로에서 동작한다. 검토자/QA가 `/essay-lab` 데모 화면을 실제 평가로 오인하지 않도록
주의. (정적 export 아키텍처상 합리적 설계.)

### 6.2 결과 렌더링 **경로 간 비일관성 (P1)** `[사실]`
동일한 "첨삭 결과"가 데이터 출처(`row.source`)에 따라 다른 컴포넌트로 렌더된다(`essay-dashboard.tsx:38`):
- `exam`(대학 시험 운영 경로) → `ExamResultLayout` → `voiceType="humanities_social"` → **문장 다듬기 포함**.
- `essay`(구 연습 경로) → `HumanDetail` → `humanReport`는 **`sentences` 미생성 → 문장 다듬기 섹션 없음** `[사실]`.
- `math`/기본 → 제네릭 `<article>` 분기 → **문장 다듬기 섹션 자체가 코드에 없음** `[사실]`.
- 사용자 영향: 어떤 기록은 문장 단위 코칭이 보이고 어떤 기록은 안 보인다. §6 "첨삭 결과와 History가 동일
  결과 컴포넌트를 재사용하는가"에 대한 답은 **"부분적으로만"**. `EvaluationReport`는 공유하나 분기 로직이
  출처별로 달라 가치 전달이 불균일.

### 6.3 기타 관찰 `[사실]`
- 접힘/펼침·시각 위계: `<details>` 기반 접힘(제출 답안·평가 항목·비교)로 정보 밀도 관리 양호.
- 별점 경고 문구·공식 점수 아님 주석 반복 — 신뢰 설계 양호.
- 모바일/반응형·오버플로우는 Wiki에 다수 뷰포트 검증 기록이 있으나, 이번 검토에서 **실 브라우저 렌더링은
  미수행** `[로그검증필요]`.

---

## 7. 상경·수리논술

- 상경 혼합형: `functions/api/essay/math-session.ts` + `math-release` 서버 브리지로 **1 시험·1 제출·
  1 History·1 Credit** 계약을 지향(`exam-bridge.ts`가 `mathReport` 사용) `[사실]`. 기존 MATH-4/5/6
  재사용 방향과 일치 `[사실]`.
- 수학 리포트(`mathReport`)는 steps/core/errors → 강점·보완·next_action으로 변환하며 **힌트·생성 풀이는
  의도적으로 미포함**("No hints/generated solutions" 주석) — 학습 런타임에서 별도 관리 `[사실]`.
- 이미지 추출·원본 보존·학생 수식 확인·교정: `functions/api/math/{upload,extract,evaluate,recover}.ts` +
  `lib/math-input`(confirmation/ordered-upload/orchestration) 구현 존재 `[사실]`. 실제 판독 품질 `[로그검증필요]`.
- 자연계 수리논술: Owner 정책대로 **정식 유료 공개 보류** 대상. 코드 존재 ≠ 운영 공개로 구분 필요 `[사실]`.
- 수학 음성: 1차 릴리스 제외(10/09 정책 + lab main "Exclude Math voice feedback" 커밋) `[사실]`.

---

## 8. 대학별 Registry 및 STANDBY (24개 대학)

**코드로 "24개 대학 준비 완료"를 입증할 수 없다. 등록 ≠ 공개 가능.**

- 정적 공개 카탈로그 `src/data/essay-public-catalog.json`: **`asOf 2026-09-18`**, 대학 42개 엔트리,
  offering 49개, **문항 수 0**, `evaluationRouting = "QUESTION_RUNTIME_ONLY"` `[사실]`. 즉 **문항·평가기준·
  라우팅은 전부 런타임(DB) 해석** → 정적 파일은 준비도의 권위가 아님.
- 코드 대학 정책 상수(`essay-runtime/catalog-policy.ts`)는 **2026-10-11 결정 기준**이며 2026-10-27
  24개 목록과 불일치 `[사실]`:
  - `priorityUniversityIds`(22개)에 **연세·홍익**이 포함 — 2026-10-27 24개 목록에는 없음(연세·홍익은
    `servicePreparingUniversityIds` "출시 보류"에도 동시에 존재).
  - `servicePreparingUniversityIds`("Owner launch hold")에 **duksung(덕성여대)** 포함 — 그런데 덕성여대는
    2026-10-27 **장문형 21개 출시 대상** → **상태 충돌**.
  - 광운대·한국항공대·서울여대·숙명여대 등 신규 출시 대상이 `priorityUniversityIds`에 부재.
- 정적 카탈로그에서 **덕성여자대학교·서울여자대학교·한국항공대학교 등은 `canonicalSlug`가 비어 있음(none)** —
  정적 셸에서 테마/슬러그 미연결 `[사실]`. (런타임 연결 여부는 별도.)
- 단답형 시범 3개(가천·국민·경북): 가천·국민·경북 모두 카탈로그 엔트리 존재, 코드에 `gachon`/`kookmin`/
  `knu`(kyungpook는 정적 카탈로그상 `kyungpook`) `[사실]`. 실제 회차 검수·공개 `[로그검증필요]`.

**권고**: 24개 대학별로 (등록 / 전체 문항 연결 / 공식 평가자료 연결 / STANDBY / 실제 E2E / Owner 검수 /
베타 공개)를 **각각 별도 상태**로 가진 표를 DB 기준으로 작성해야 하며, 코드 정책 상수를 2026-10-27
목록으로 **동기화**해야 한다(§14). 현 시점 "24개 준비됨" 보고는 **근거 없음**.

---

## 9. Credit·Ledger·결제

### 9.1 원장 설계 — **견고, 보존 권장** `[사실]`
`20260929000300_essay_credit_commercial_core.sql`:
- 거래유형별 불변식(reserve: balance_delta=0 & reserved_delta>0 & decision_id 필수; consume:
  balance_delta<0 & reserved_delta=balance_delta; release/refund/expiration 각각) — CHECK로 강제.
- **멱등성**: `credit_transactions.idempotency_key`, `essay_evaluations.idempotency_key`, `unique_violation
  → PT409` 처리. 재시도 안전.
- **중복 차감 방지**: 신규가입 보너스 `credit_signup_once_per_account` 유니크; 무료 포함 재평가
  `essay_v2_included_once` 유니크. reserve→consume가 정확히 상쇄.
- **실패 복구**: 프록시(`reservation.ts`)가 402/422 + SQL 코드(PT402/PT422) 동시 충족 시에만 확정 거절,
  그 외는 `RESERVATION_STATUS_UNKNOWN`으로 두어 **Credit 해제를 함부로 가정하지 않음**(fail-safe) `[사실]`.

### 9.2 베타 Credit 정책 — **미구현(설계만)** `[사실]`
Owner 정책의 **당일 첫 접속 2 Credit·자정 만료·다음날 재지급** 및 **피드백 보상 2 Credit**에 해당하는
RPC·마이그레이션을 **lab·app 양 저장소에서 발견하지 못했다**(grep: beta/daily/일일/당일/grant_daily 부재).
`credit_summary()`의 버킷은 free/paid/other이며 "other"가 베타 Credit의 수납처가 될 수는 있으나 **지급·만료
로직 자체가 없음**. → 10/30 베타는 신규가입 무료 3 + 유료 Credit로는 가능하나 **Owner가 설계한 베타 메커니즘은
현재 작동하지 않음.** 구현 시 **중복 지급·자정 경계·실패 복구·Ledger 우선순위(베타→가입무료→유료)** 재검증 필수.

### 9.3 결제(Toss/IAP) — 범위 밖, 동결 유지 `[사실]`
Toss 엔진·IAP는 이번 검토에서 변경·호출 없음. Wiki 기준 Apple Paid Apps 계약 미활성(StoreKit 0 product)
블로커가 **APP 스토어 출시**를 막고 있음 — 단, WEB 베타는 IAP 비의존 `[사실]`.

---

## 10. WEB / APP 아키텍처

- **공통 Backend 확인됨** `[사실]`: APP(Flutter)의 `lib/features/essay/essay_live_gateway.dart`가 WEB과
  동일한 `essay_request_evaluation` RPC를 호출. 평가 엔진·원장·History 계약을 공유.
- 그러나 **essay 구현은 app `main`(d07671e9)에 없음** — feature 브랜치(codex/essay-shared-app-integration,
  payment-credit-recovery-20261023 등)에만 존재 `[사실]`. "WEB 기능이 APP main에 자동 반영"으로 가정 금지.
- WEB(정적 Next export + CF Functions/Worker) vs APP(Native + 동일 RPC): 데이터·평가·Credit 잔액은 공유,
  **UI는 각자 구현**. APP 네이티브 Math 전체 업로드/재작성 흐름은 Wiki상 "기존 공백"으로 남아 있음 `[사실]`.
- **배포 SHA 구분**: lab `main`(8991b51)은 운영후보(`web-app-release-20261024` @ 91c19ea, +173)와 크게
  벌어져 있어, **main 병합/도크 PR이 운영 코드를 반영하지 않는다.** 스토어/배포 전 실제 통합 브랜치·배포
  SHA를 반드시 재확인(§12·§14). Production 배포 SHA는 Wiki 기준 `a21642c`(10/24) `[사실]` — CF 접근 없이
  직접 검증 불가 `[로그검증필요]`.

---

## 11. 운영 안정성 / 기술 품질

- **Fail-safe 설계 다수** `[사실]`: 평가 예약 상태 불명 시 Credit 미해제, Worker 미바인딩 시 503
  (`evaluate.ts`), 처리 리스(15분)·재작성 창(15분) 경계로 좀비 작업 방지.
- **권한/RLS**: Wiki에 광범위한 RLS·연산자 게이트·anon 거부 검증 기록 `[사실]`. 이번 검토에서 SQL 재실행
  없이 재확인 불가 `[로그검증필요]`.
- **코드 중복/복잡성** `[개선]`: (a) 결과 렌더 경로 3분기(§6.2) (b) 대학 정책 상수와 24개 목록 이원화(§8)
  (c) `humanReport` vs `exam-history` 리포트 빌더 이원화 — `sentences`를 한쪽만 생성. 통합 여지 있음.
- **테스트 커버리지** `[사실]`: 단위 테스트가 광범위(계약·멱등·비교·접힘 순서 등). 단 **실제 Provider
  E2E는 테스트가 아님** — mock/contract 중심. "Flutter/WEB 테스트 통과"를 "실제 평가 품질 통과"로
  승격하지 말 것(과거 Wiki에도 동일 경고).
- **로그/장애 추적·API 비용**: 코드상 telemetry 마이그레이션 존재(`..._provider_provenance_telemetry.sql`).
  실제 비용/실패율 모니터링은 `[로그검증필요]`.

---

## 12. 베타 출시 준비도 (목표: 10/30 베타, 11/9~15 정식)

| 게이트 | 상태 | 판단 |
|---|---|---|
| 평가 런타임 Production 활성(플래그+Worker+Secret) | `[로그검증필요]` | **최대 블로커 후보** |
| 24개 대학 회차/공식자료 DB 연결·검수 | `[로그검증필요]` | 코드 미입증, 대표 회차만 공개 원칙 |
| 실제 첨삭 성공 사례(현 Production) | `[로그검증필요]` | 과거 성공은 인용만 |
| 코칭 품질(수정된 문장 예시) | **미표시(P1)** | 학습 가치 결함 |
| 결과 렌더 일관성 | **부분 결함(P1)** | 경로별 상이 |
| 베타 Credit 메커니즘 | **미구현** | 설계만 |
| Credit 원장 안전성 | **양호** | 보존 |
| WEB 사용성 | 양호(실렌더 미검증) | `[로그검증필요]` |
| APP 스토어 준비 | 블로커(Apple Paid Apps) | WEB 베타엔 비해당 |
| 결제 LIVE | 범위 밖/동결 | — |

---

## 13. P0 / P1 / P2 문제 목록

### P0 — 출시 차단 (확정 아님, 런타임 확인 필요)
- **P0-1 평가 런타임 활성 미확인** `[로그검증필요]`: `ESSAY_REVIEWED_RUNTIME_ENABLED` /
  `ESSAY_EXAM_RUNTIME_ENABLED` / Worker 바인딩 / Secret가 Production에서 실제 `true`·연결인지.
  → 미충족 시 **실제 첨삭 불가 = 출시 차단**. 파일: `functions/api/essay/{evaluate,exam,admission}.ts`.
- **P0-2 24개 대학 실제 서비스 가능 여부 미입증** `[로그검증필요]`: DB에 24개 대학 회차·문항·공식 평가기준
  연결 + 대표 회차 E2E 성공 + Owner 검수가 있는지. 코드·정적 카탈로그로는 불가. → "24개 준비" 보고 금지.

### P1 — 베타 중 개선 (학습 효과 직접 영향 → 디자인보다 상위)
- **P1-1 수정된 문장 예시 미표시(§4.C Owner 요구 불충족)** `[사실]`: `report.example`/`sentences[].example`
  미렌더, 부재 강제 테스트 존재. → Owner 결정 후 문장 단위 예시+이유 접힘 노출.
- **P1-2 결과 렌더 경로 비일관(§6.2)** `[사실]`: `essay`/`math` 경로에 문장 다듬기 부재. → 리포트 빌더
  통합(`humanReport`도 `sentences` 생성) 또는 운영 경로로 일원화.
- **P1-3 대학 정책 상수 구버전(§8)** `[사실]`: `catalog-policy.ts`의 priority/preparing 목록이 2026-10-11
  기준(덕성여대 상태 충돌 등). → 2026-10-27 24개 목록으로 동기화.
- **P1-4 베타 Credit 미구현(§9.2)** `[사실]`: Owner 베타 메커니즘 부재. → 최소 구현 + 중복/자정/복구 검증.

### P2 — 정식 출시 후 개선
- P2-1 14일 무료 재첨삭 시간창 강제 위치 확인/명문화 `[로그검증필요]`.
- P2-2 리포트 빌더 이원화·결과 렌더 3분기 리팩터링(품질 중립) `[개선]`.
- P2-3 정적 공개 카탈로그(`asOf 2026-09-18`) 최신화 또는 런타임 전면 전환 명확화 `[개선]`.
- P2-4 고급 성장 시각화·음성 품질 고도화 등(기존 백로그).

---

## 14. 최소 수정 권고안 (각 항목: 현재→수정 방향→예상 범위→출시 차단 여부)

1. **평가 런타임 상태 점검(P0-1)**: Owner/운영자가 Production 플래그·Worker·Secret·대표 회차 1건
   실제 E2E를 확인. → **코드 변경 아님(운영 확인)**. 출시 차단: **예(미확인 시)**.
2. **24개 대학 상태표 작성(P0-2)**: DB 기준 7개 상태 컬럼 표 + 코드 상수 동기화. → `catalog-policy.ts`
   상수 1파일 수정 + 문서. 예상 범위 소(small). 출시 차단: **예(보고 정확성)**.
3. **수정된 문장 예시 노출(P1-1)**: "문장 다듬기"에 `s.example`+개선 이유를 `[수정된 문장 보기]` 접힘
   토글로 추가(전체 모범답안이 아닌 **문장 단위**). → `evaluation-report.tsx` + 빌더 1~2파일. 범위 소~중.
   **Owner 정책 결정 선행**(표절 우려 vs §4.C 요구). 출시 차단: 아니오(베타 중 개선).
4. **결과 렌더 일관화(P1-2)**: `humanReport`도 `sentence_feedback`를 생성하도록 통합하거나, essay 경로를
   exam 경로로 수렴. → `evaluation-report.ts`/`exam-history.ts` 통합. 범위 중. 출시 차단: 아니오.
5. **베타 Credit 최소 구현(P1-4)**: 일일 2 Credit 지급·자정 만료 RPC + 멱등·복구. → app 마이그레이션 +
   lab 상태표시. 범위 중. 출시 차단: 아니오(단, Owner 베타 설계 전제 시 필요).

> 모든 권고는 **기존 성공 자산(원장·성장 비교·근거 인용 계약) 무변경**을 전제. 개발은 Owner 우선순위 확정 후
> 별도 지시로 진행하며, 본 감사는 **코드·DB·Production 무변경**.

---

## 15. 출시 가능 여부 — 독립 의견

- **정식 유료 출시(11월 2주): 현재 근거로는 불가.** 실제 평가 활성(P0-1)·24개 대학 실서비스(P0-2)가
  런타임으로 입증되지 않았고, 핵심 학습 가치(수정된 문장 예시)가 미표시다. Owner의 "날짜보다 게이트 우선"
  원칙이 정확하며 이를 지켜야 한다.
- **제한적 무료 베타(10/30): 조건부 가능.** 전제: ①대표 회차 실제 E2E 1건 이상 Production 성공 확인
  ②검수된 회차만 공개(미검수 비활성) ③Credit 정산 무변경 ④"24개 준비"가 아니라 "검수 완료 N개" 표기.
- **보존할 강점**: Credit 원장 안전성, 성장 비교의 학문적 정직성(비합산·인과 비단정), 근거·원문 인용 계약,
  정적 데모/런타임 실평가 분리. 이들은 재작성하지 말 것.
- **가장 시급한 학습 가치 개선 1순위**: §4.C 수정된 문장 예시(+이유)를 학생에게 돌려주는 것. 이것이
  "채점이 아니라 성장"이라는 제품 철학의 **마지막 연결 고리**다.

---

## 부록 A. 저장소 / SHA 상태 (읽기 전용 확인)

| 저장소 | main | 운영/작업 브랜치 | 비고 |
|---|---|---|---|
| legendstudy-lab | `8991b51` | `codex/web-app-release-20261024` @ `91c19ea` (+173) | 운영후보; main 크게 뒤처짐 |
| legendstudy-app | `d07671e9` | `codex/payment-credit-recovery-20261023` @ `c603059`, `codex/essay-shared-app-integration` @ `f62b1ee`, `codex/material-service-app-20261022` @ `edc37f3` | essay/credit은 main 부재 |
| legendstudy-docs | `04db7d3` | `claude/legendstudy-lab-pre-launch-review-512841` (본 감사) | 본 보고서 기록처 |

- Production 배포 SHA: Wiki 기준 `a21642c`(2026-10-24 WEB Owner review 시점) `[사실/인용]`. CF 직접 검증 불가 `[로그검증필요]`.
- 로컬 체크아웃은 무관 브랜치(app: `claude/android-google-login-final`, lab: `claude/my-admin-experience`)에
  있었으므로 **원격 운영후보 브랜치를 별도 읽기 전용 워크트리로 검토**했다(사용자 작업 보존).

## 부록 B. 검토 방법·한계
- 방법: 원격 운영후보 브랜치의 읽기 전용 워크트리 + `git show`/`grep` 정적 분석, 정적 데이터(JSON) 파싱,
  Wiki 정책 대조. **Provider 호출·DB 쿼리·배포·브라우저 실렌더 없음.**
- 한계: D단계(실사용 가치), Production 플래그/Secret/Worker 상태, 24개 대학 DB 연결, 실제 코칭 문구 품질,
  14일 창 강제는 **모두 런타임·운영 확인 필요**(`[로그검증필요]`). 추정은 사실로 승격하지 않았다.

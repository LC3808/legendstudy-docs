<!--
DOCUMENT_STATUS: HISTORY / RESEARCH (read-only technical research)
SCOPE: 수리·상경·과학논술 첨삭 — 수학적 추론 및 스캐폴딩 아키텍처 기술 연구
COMPILED: 2026-10-27
REVIEW_TYPE: READ-ONLY (Production·DB·Worker·Credit 무변경, 코드 수정 없음)
INSPECTED_REFS:
  - lab 운영후보: /Users/.../legendstudy-release-20261024 @ codex/web-app-release-20261024 99bd4fc
  - lab 로컬 체크아웃(참고): claude/my-admin-experience c2b2f14 (운영후보 아님)
  - app: claude/android-google-login-final c11fc84 (로컬) · MATH 물리 권위: APP MATH-2C 20261002000100 / MATH-2D 20261002000200 (코드 헤더 인용)
PRIMARY_CODE:
  - src/lib/math-input/* (MATH-3 추출), src/lib/math-eval/* (MATH-4 평가), src/lib/math-learning/* (MATH-5 코칭/힌트)
  - src/components/math-release/student-route.tsx (학생 결과 렌더), functions/api/math/* (런타임 게이트)
-->

# 레전드스터디 LAB — 수학적 추론·스캐폴딩 아키텍처 기술 연구 (2026-10-27)

작성: Claude (Opus 4.8) · 검토 방식: 읽기 전용 · Production/DB/Worker/Credit 무변경

> **공개 저장소 규칙**: Secret·토큰·PII·학생 답안 원문 비포함. 파일·함수·구조만 기록.
> **근거 태그**: `[사실]` 소스코드로 직접 확인 · `[로그검증필요]` 런타임·DB·배포 로그로만 확정 · `[추정]` 합리적 추정 · `[개선]` 권고.
> **판단 기준**: 기능 유무가 아니라 **학생에게 전달되는 실제 학습 가치**. 기존 MATH-4·5·6을 무조건 유지/폐기하지 않고 실제 품질로 판단한다.

---

## 0. 핵심 결론 (Executive Summary)

이번 연구의 가장 중요한 발견은, **Owner가 인식한 "학생 풀이를 단순 텍스트로 나열하는 한계"는 평가 엔진의 한계가 아니라 '표시(렌더링)·스캐폴딩 계층'의 한계**라는 점이다 `[사실]`.

- **엔진(추출·평가·힌트)은 상용 수준에 근접한 구조적 품질을 이미 갖추고 있다** `[사실]`. 정규화 바운딩박스·역할·신뢰도 밴드를 가진 비전 추출, 2-provider 교차검증 병합, 풀이 단계 DAG, ROOT/PROPAGATED 오류 분류와 인과 체인, 정답 누설 방지 L0/L1/L2 힌트, 재평가 성장 델타, 내부 품질(HQ) 채점 차원까지 설계·구현되어 있다.
- **그러나 학생 결과 화면은 이 풍부한 구조를 버리고 `representation / explanation` 텍스트 목록으로 평탄화한다** `[사실]`. `src/components/math-release/student-route.tsx:216`:
  ```tsx
  {result?.steps?.map(step => <article key={step.id}><p>{step.representation}</p><p>{step.explanation}</p></article>)}
  ```
  단계 DAG의 연결(연쇄 오류), 오류 분류, 인과(root→consequence), 원본 이미지 근거, 루브릭, 풀이 경로 비교가 **렌더링되지 않는다**. 코어(핵심 보완점)도 `core[0]` 하나만 읽는다(`student-route.tsx:170`).
- **원본 이미지는 입력만 되고 결과에 다시 표시되지 않는다** `[사실]`. `src/components/my/exam-result-layout.tsx:54`는 "원본 사진 미리보기는 이 결과 조회 경로에서 제공되지 않습니다"라고 명시한다. 추출 영역에 정규화 바운딩박스(`NormalizedBoundingBox`)가 있으나 이미지 위 오버레이 렌더러가 없다.
- **실제 추출/평가 provider는 OpenAI로 런타임에 배선되어 있다** `[사실]` — `functions/api/math/evaluate.ts:7`가 `MATH_PROVIDER==='OPENAI'` + `MATH_PROVIDER_CALLS_ENABLED==='true'` 등에 게이트. 다만 TS 라이브러리의 provider 벤치마크(바이크오프)는 **mock에만** 실행되며, 실제 OpenAI provider의 벤치마크 정확도 수치는 **측정된 바 없다** `[사실/로그검증필요]`.

**상용화 판단 요약**: 신규 엔진을 처음부터 만드는 과제가 아니라, **(1) 기존 엔진 출력의 시각적 스캐폴딩 렌더링, (2) 실제 provider 벤치마크 측정·교정, (3) 과학논술용 평가 축(단위·유효숫자·차원) 추가** 세 가지에 집중하면 단계적 상용화가 가능하다. 가장 큰 사용자 가치 상승은 (1)에서 나오며, 엔진 재작성이 아니라 재사용이 정답이다.

---

## 1. 기존 시스템 기술적 한계

| # | 한계 | 근거 | 사용자 영향 |
|---|------|------|------------|
| L1 | **결과 렌더 평탄화**: 단계 DAG·오류분류·인과·루브릭·경로가 학생 화면에 미표시, `representation/explanation`만 나열 | `student-route.tsx:216`, `:170` `[사실]` | "채점 결과 나열"처럼 보임. 연쇄 오류·최초 오류 위치가 전달 안 됨 → 성장 코칭 가치 저하 |
| L2 | **원본 이미지 결과 미표시 / 위치 오버레이 없음** | `exam-result-layout.tsx:54`, 바운딩박스는 `types.ts:79` 존재하나 렌더러 부재 `[사실]` | 학생이 "내 풀이 어디가 틀렸는지"를 이미지에서 보지 못함 |
| L3 | **확인(confirmation) UI도 텍스트 전용**: 추출 영역을 이미지 없이 텍스트로만 확인 | `math-input-flow.tsx:46-77` (주석: "renders no MATH-4 result") `[사실]` | 오인식 수정이 어렵고, 원문 대조 불가 |
| L4 | **실제 provider 품질 미측정**: 바이크오프 하네스는 mock provider에만 적용, 실 OpenAI 정확도/안전도 수치 없음 | `bakeoff/providers.ts:5` 주석, `bakeoff/types.ts:149` "real provider pricing… null otherwise" `[사실]` | 상경/과학 확대 시 정확도 리스크를 데이터로 관리 불가 |
| L5 | **단일 provider 하드코딩**: 런타임이 `MATH_PROVIDER==='OPENAI'`만 허용 | `functions/api/math/evaluate.ts:7` `[사실]` | TS 계층은 provider-independent인데 운영은 단일 공급자. fallback 교차검증의 운영 이점을 못 살림 |
| L6 | **수학 검증 도구(CAS/수치) 부재**: 설계가 명시적으로 "no CAS" | `types.ts:89` (MATH-3A §14) `[사실]` | 계산 오류·등가성 판정이 LLM 자체 추론에만 의존 → 환각/오판 가능 |
| L7 | **과학논술 축 부재**: 오류 taxonomy·단계 kind에 단위/유효숫자/차원/실험조건 없음 | `math-eval/types.ts:32-46`, `physical-contract.ts:63` `[사실]` | 물리·화학 논술로 바로 확장 불가 |
| L8 | **런타임/DB 활성 상태 코드 확인 불가** | 게이트 플래그 다수 `[사실]`, 실제 ON 여부 `[로그검증필요]` | "출시 준비됨" 보고의 최대 불확실성 |

> **중요**: L1~L3은 "엔진은 좋은데 학생이 그 가치를 못 받는" 구조이며, **본 연구의 최우선 개선 대상**이다.

---

## 2. 경쟁 서비스 기술 분석 (공개 확인 vs 추정 구분)

### 2.1 콴다(QANDA)/매스프레소 — `[사실]` 중심
- **3단 OCR 구조**: (1) 수식·텍스트 영역 검출 → (2) Expression OCR(수식) → (3) Text Recognition OCR(텍스트), 결과를 **LaTeX 등 웹표준으로 변환** `[사실]`([매스프레소 공식 자료](https://mathpresso.notion.site/QANDA-s-AI-Digital-Textbook-b2b1d04ae24e4a429e623a347943abb9)).
- **한국어+수식 동시 인식, 손글씨 지원** `[사실]`([이종흔 대표 소개](https://saic.sisain.co.kr/2020/speaker05.html)).
- **검색형 풀이**: 사진 인식 후 **DB에 저장된 풀이를 검색·제시**하는 방식이 핵심(단계별 생성 해설과 다름). 회사 측 약 95% 정확도 주장(독립검증 아님) `[사실/추정]`([디지털타임스](https://www.dt.co.kr/article/11644373), [thewiki](https://thewiki.kr/w/콴다)).
- **단계별 해설**은 '수식 계산기' 기능에서, 최근 텍스트 질의형 AI 풀이 추가 `[사실]`.
- **내부구현 추정**: 수리논술형 "미완성 풀이 코칭/오류 위치 지적"은 공개 확인 안 됨 → 콴다는 **문제검색·정답제공**에 최적화, **답안 첨삭·스캐폴딩은 LAB의 차별화 영역** `[추정]`.

### 2.2 스쿨작 / 수작 — `[로그검증필요/추정]`
- **공개 검색으로 '스쿨작'·'수작'의 수리논술 첨삭 기능을 특정하지 못했다** `[사실]`(여러 검색어 시도, 공식 소개·앱스토어 설명 미발견). 기능 비교는 **추정 금지** 대상이며, 확인하려면 공식 사이트/앱스토어 직접 확인 필요.
- Owner가 "스쿨작 심층 조사"를 지목했으므로, **정확한 서비스 식별자(URL·앱 패키지명)를 제공해 주면 재조사**하는 것을 권고 `[개선]`.

### 2.3 직접 카테고리 경쟁자: 아이티센엔텍 "AI 논술 코치" — `[사실]`
- 2026-10-15 출시. 2027 논술전형 대상, **대학별 정보 확인 + 실전 연습 + AI 첨삭을 한 서비스로** 제공. 문항은 기출 그대로가 아니라 자체 집필 `[사실]`([디지털데일리](https://www.ddaily.co.kr/page/view/2026101511434079294), [아이티데일리](https://www.itdaily.kr/news/articleView.html?idxno=242212)).
- **시사점**: LAB의 "대학별 실제 기출 + 답안 근거 기반 단계 코칭"은 자체집필·일반첨삭 대비 차별점이나, **출시 속도 경쟁**이 시작됐다.

### 2.4 일반 수학 OCR 기준선 — Mathpix / Photomath — `[사실/추정]`
- **Mathpix**: STEM 손글씨 OCR을 best-in-class로 마케팅(AWS Textract/Google Vision/Azure 대비 선택됐다 주장), LaTeX 출력. 서드파티 가격 예시 ~$0.002/이미지·$0.0035/PDF 페이지(공식 아님) `[사실/추정]`([Mathpix handwriting](https://mathpix.com/handwriting-recognition), [fitgap](https://us.fitgap.com/products/mathpix)). → **수식 전사 전용 보조 OCR 후보**.
- **Photomath**: 카메라 인식 + **규칙/CAS 기반 단계 풀이**(LLM 환각이 적은 결정론적 단계) `[추정, 일반지식]`. → §3 옵션 D(검증도구)의 참고 모델.

**경쟁 종합**: 콴다=문제검색/정답, 아이티센엔텍=일반 논술첨삭, Mathpix=수식 OCR, Photomath=CAS 단계풀이. **"대학별 수리논술 답안의 오류 위치·연쇄·스캐폴딩 코칭"을 정면으로 하는 서비스는 공개적으로 드물며, 이것이 LAB의 방어가능한 차별점** `[추정]`.

---

## 3. 재사용 가능한 기존 자산 (높은 가치, 보존)

모두 `[사실]` — 운영후보 99bd4fc 코드에서 직접 확인.

1. **비전 추출 계약 (MATH-3)** `src/lib/math-input/types.ts`
   - `VisionRegion`: 정규화 바운딩박스(이미지 리사이즈 불변), `role`(FINAL_ANSWER/EXPONENT/INEQUALITY_DIRECTION/GRAPH/DIAGRAM/TABLE …), `confidence`(HIGH…UNREADABLE), 하이브리드 수식(`normalizedMath` LaTeX호환 + `rawText` + `structuralHints`).
   - **원본 이미지 권위 유지**(추출은 파생), 바이너리 비포함·authorized `evidenceRef`만.
2. **안전한 추출 병합 (MATH-3B)** `orchestration.ts`
   - typed→primary→**임계/불확실 영역만 targeted fallback**→병합. **임계 영역에서 "신뢰도 최대값 승리"를 금지**하고, 불일치 시 학생 확인/휴먼리뷰로 보냄(`mergeRegion`). 재추출은 append-only 버전(`extractionVersion`).
3. **평가 출력 모델 (MATH-4)** `math-eval/types.ts`
   - 단계 DAG(`steps`+`edges`), 오류(`ROOT`/`PROPAGATED` + 14종 taxonomy), **인과(`causes: root→consequence`)=연쇄 오류**, 핵심 보완(`core: diagnosis/why/next_action`), 루브릭, 경로(`OFFICIAL_PATH_MATCH`/`ALTERNATIVE_VALID_PATH`), **성장(`progression`)**, 생성 풀이(출처 태그).
   - fail-closed worker 평가(`worker-client.ts`): 학생은 자기 평가를 finalize 불가, 무효 출력은 부분 공개 없이 FAIL.
4. **정답 누설 방지 스캐폴딩 (MATH-5)** `math-learning/hints.ts`
   - L0=무엇을 고칠지(평가와 함께), L1=SAFE_DIRECTION(요청시), L2=CONCEPT_REVEAL(L1 선행 필수). **SOLUTION_REVEAL 영구 금지**, SHORT_ANSWER 정답 포함 차단, 힌트는 core→error/step에 **grounding 검증**(fail-closed). → §4 요구사항을 이미 충족.
5. **벤치마크 하네스 (MATH-3C)** `bakeoff/types.ts`
   - 20개 카테고리(손글씨·지수/첨자·분수·근호·부등식·적분한계·행렬·다중페이지 순서·그래프/도형·교정표시·증명 …), **임계영역 가중 채점**: `qualityScore/safetyScore/calibrationScore`, `criticalFalseConfidenceCount`, `missedCritical`, `fallbackUsefulness`, provider 미터(latency/token/cost). → 실 provider만 연결하면 즉시 정량 비교 가능.
6. **내부 품질(HQ) 채점** `components/quality/math-review-history.tsx`
   - extraction_fidelity·step_reasoning·hint_quality·progression·generated_solution 등 차원으로 평가 자체를 사후 채점. → 상용 품질 게이트로 재사용.
7. **이미지 입력 파이프라인** `student-route.tsx` (`AnswerImagesInput`, `uploadOrderedPages`, `registerEvidence`, gateway `upload`/`extract`). → 입력단은 작동.

---

## 4. 신규 도입이 필요한 기술

1. **[최우선] 시각적 스캐폴딩 렌더러** `[개선]`
   - 엔진 출력(steps/edges/errors/causes/core/paths/rubric)을 **읽기 전용으로 렌더**: 단계 타임라인, 연쇄 오류 화살표(edges), 최초 오류 강조(ROOT), core 다건 표시, 루브릭 레이더/막대.
   - **원본 이미지 + 바운딩박스 오버레이**(정확한 위치 근거가 있을 때만; §5 규칙). 학생 원본 불변, 수정 풀이는 별도 렌더.
2. **실 provider 벤치마크 어댑터 (MATH-3C-2)** `[개선]`: OpenAI(및 대안: Gemini/Claude multimodal, Mathpix 전사 보조)를 바이크오프 하네스에 연결해 **카테고리별 정확도·임계 오판율·비용·지연 측정**.
3. **수학 검증 도구(옵션 D)** `[개선]`: 수치 대입/CAS(SymPy류)로 **계산·등가성 교차검증**. LLM 판정과 불일치 시 임계영역 플래그. (경계: 서버/Worker 내 격리 실행, Credit·DB 무영향.)
4. **과학논술 평가 축** `[개선]`: 단위(dimensional analysis)·유효숫자·실험조건·그래프 해석 오류 taxonomy와 단계 kind 추가, 단위/수치 검증 도구.
5. **멀티 provider 운영 스위치** `[개선]`: `MATH_PROVIDER` 단일 하드코딩 완화, primary+fallback를 운영에서 실제 교차검증으로.

---

## 5. 권장 아키텍처

### 5.1 기술 대안 비교 (§3 A/B/C/D)

| 방식 | 정확성 | 비용 | 처리시간 | 구현난이도 | 평가 |
|------|--------|------|----------|-----------|------|
| **A. OCR·텍스트 중심** | 중(수식 전사 강, 추론 약) | 저 | 빠름 | 낮음 | 전사만, 코칭 불가 → 부적합 |
| **B. 원본 이미지 직접 분석(multimodal LLM)** | 중~상(추론 가능, 전사 흔들림) | 중 | 중 | 낮음 | **현재 런타임이 여기(OpenAI)** |
| **C. 이미지+구조화 수식+공식 해설** | 상 | 중 | 중 | 중 | **LAB의 현 설계 지점** (하이브리드 normalizedMath+rawText+근거) |
| **D. C + 수학 검증 도구(CAS/수치)** | 최상(계산·등가성 결정론 보강) | 중+ | 중+ | 상 | **권장 목표** — 환각 억제 |

> LAB은 이미 **C에 도달**해 있고(타입·병합·근거 설계), fallback 2-provider 교차검증으로 **D의 일부**를 구현했으나 **CAS/수치 검증 도구는 없음**(`types.ts:89` "no CAS"). → **권장: C 유지 + D의 검증도구를 선택적으로 추가**.

### 5.2 코칭 아키텍처 (§4)
- **추출 단계**: 풀이 단계·사용 개념·계산/논리 오류·**최초 오류 위치(ROOT)**·**연쇄 오류(causes)**·누락 조건·막힌 지점·다음 행동 → **이미 `MathEvalOutput`이 모두 모델링** `[사실]`. 신규 작업은 **이 출력을 렌더**하는 것.
- **힌트**: MATH-5 L0/L1/L2 그대로 활용(정답 누설 방지 이미 보장). 개선점은 **L1→L2 진행 UX와 "막힌 지점" 연결 표시** `[개선]`.

### 5.3 시각적 첨삭 (§5)
- 원본 이미지 위 **바운딩박스 오버레이는 `role=FINAL_ANSWER/임계영역`이고 `confidence≥MEDIUM`이며 `evidenceRef` 존재 시에만** 표시(위치 근거 없으면 텍스트 설명만) `[개선]`.
- 학생 원본 불변 / **수정 풀이는 별도 패널**(에세이 §4.C "[수정된 문장 보기]"와 동일 원칙). 생성 풀이는 `origin=AI_GENERATED` 태그 유지.

### 5.4 과학논술 확장 (§6)
- **공통 재사용**: 비전 추출(그래프/도형/표 region 이미 존재), 단계 DAG, 오류 인과, 힌트 스캐폴딩, HQ 채점.
- **별도 모듈 필요**: 단위·유효숫자·차원 분석, 실험조건·측정오차 평가 기준, 물리/화학 개념 taxonomy, 단위 포함 수치 검증 도구. → **엔진은 공유, "평가 축(dimension)+검증도구"만 과목별 플러그인** `[개선]`.

---

## 6. PoC 설계

- **PoC-1 (렌더러, 1.5~2주)**: 저장된 `MathEvalOutput` 1~2건을 읽어 **단계 타임라인+연쇄 오류+최초 오류 강조+원본 이미지 오버레이**를 렌더하는 읽기 전용 화면. **신규 평가 호출/DB 쓰기 없음**(기존 `read_result` 재사용). 성공기준: 학생 사용성 테스트에서 "어디가·왜 틀렸는지" 이해율↑.
- **PoC-2 (provider 벤치마크, 1주)**: 기존 바이크오프 하네스에 OpenAI 등 실 어댑터 연결, 20개 카테고리 **합성 fixture**로 정확도/임계오판/비용/지연 측정(학생 데이터 미사용). 성공기준: 카테고리별 safetyScore·criticalFalseConfidenceCount 테이블 산출.
- **PoC-3 (검증도구, 1~1.5주)**: SHORT_ANSWER/계산 스텝에 수치/CAS 교차검증을 붙여 LLM 판정과 **불일치율** 측정. 성공기준: 오판 사례에서 검증도구가 플래그.
- **PoC-4 (과학 축, 2주)**: 단위·유효숫자 평가 축과 단위검증 도구를 물리 1문항에 적용. 성공기준: 단위 오류를 ROOT로 정확 분류.

> 모든 PoC는 **읽기/합성 데이터** 기반, Production·Credit·실 provider 과금은 승인 후 별도 단계.

---

## 7. 예상 비용 `[추정]`

- **추론 비용(런타임)**: 현재 B/C(multimodal LLM 1~수 콜/평가). 바이크오프 미터(token/latency)로만 측정됐을 뿐 **실 provider 단가 미연결** `[사실]`. 정량 비용은 PoC-2 측정 전까지 **추정 보류**.
- **보조 OCR(선택)**: Mathpix류 ~$0.002/이미지 수준 서드파티 예시(공식 아님). 수식 전사 품질이 임계이면 멀티모달+전사 보조 조합.
- **검증도구(CAS/수치)**: 자체 호스팅 시 **API 과금 없음**, 연산 비용만(경량).
- **개발 비용(인월)**: 렌더러 0.5~1 MM, 벤치마크 0.25 MM, 검증도구 0.5 MM, 과학 축 1~1.5 MM `[추정]`.

---

## 8. 구현 난이도

| 항목 | 난이도 | 근거 |
|------|--------|------|
| 시각적 렌더러 | **낮음~중** | 출력 데이터 이미 존재, 읽기 전용. 이미지 오버레이 좌표계만 주의 `[사실]` |
| provider 벤치마크 연결 | **낮음** | 하네스·점수체계 완비, 어댑터만 추가 `[사실]` |
| 멀티 provider 운영 | **중** | functions 게이트·Secret·fallback 운영 정합성 |
| 수학 검증 도구 | **중~상** | CAS 격리 실행, 등가성 경계값 처리 |
| 과학 축 + 단위검증 | **상** | 신규 taxonomy·루브릭·물리 검증 |

---

## 9. 개발 우선순위

1. **P0 — 시각적 스캐폴딩 렌더러(PoC-1)**: 사용자 가치 최대, 난이도 낮음, 기존 엔진 재사용. "단순 텍스트 나열" 문제의 직접 해법.
2. **P0 — 원본 이미지 결과 표시 + 오버레이**: 위치 근거 기반, 학생 신뢰·이해 핵심.
3. **P1 — 실 provider 벤치마크(PoC-2)**: 상경/과학 확대 전 정확도 리스크 계량화.
4. **P1 — 수학 검증 도구(PoC-3)**: 계산·등가성 환각 억제.
5. **P2 — 과학논술 축(PoC-4)** 및 멀티 provider 운영화.

---

## 10. 상용화 가능성 평가

- **결론: 상용화 가능. 단, "신규 엔진 구축"이 아니라 "기존 엔진의 가치 전달 계층 완성"으로 범위를 재정의할 때.** `[추정, 근거: §3 자산]`
- **강점(방어가능)**: 안전한 추출 병합(임계영역 신뢰도-최대 금지), 정답 누설 방지 L0/L1/L2, 성장 비교, 내부 HQ 채점, 20카테고리 벤치마크 — 경쟁사 공개정보에서 보기 드문 조합 `[사실/추정]`.
- **리스크**: (1) 실 provider 정확도 미측정 `[사실]`, (2) 런타임/DB 활성·대학 회차 연결 상태는 코드로 미확정 `[로그검증필요]`, (3) 수식 전사 흔들림(B 방식 특성) → 보조 OCR/검증도구로 완화.
- **권고**: 수리논술은 **P0 렌더러 완성 후 제한 베타**로 실제 학습가치를 검증하고, 상경·과학은 **벤치마크 수치 확보 후** 순차 확장. 엔진 재작성 금지 — 재사용·렌더·검증 보강이 최단 경로.

---

## 부록 A. 핵심 근거 파일

| 주제 | 파일·위치 |
|------|-----------|
| 비전 추출 타입·바운딩박스 | `src/lib/math-input/types.ts:79-105` |
| 안전 병합(임계영역 신뢰도-최대 금지) | `src/lib/math-input/orchestration.ts:173-222` |
| 평가 출력 모델(DAG·오류·인과·성장) | `src/lib/math-eval/types.ts:77-174` |
| 물리(SQL) 계약·단계 kind | `src/lib/math-eval/runtime/physical-contract.ts:47-88` |
| 누설 방지 힌트 L0/L1/L2 | `src/lib/math-learning/hints.ts:20-100` |
| 학생 결과 렌더 평탄화 | `src/components/math-release/student-route.tsx:170,216` |
| 원본 사진 미표시 명시 | `src/components/my/exam-result-layout.tsx:54` |
| 벤치마크 카테고리·점수 | `src/lib/math-input/bakeoff/types.ts:12-160` |
| 런타임 provider 게이트(OpenAI) | `functions/api/math/evaluate.ts:7` |

## 부록 B. 방법·한계

- **검토 범위**: 운영후보 `legendstudy-release-20261024 @ 99bd4fc` 정적 코드. Production/DB/Worker/Credit **무변경**, 신규 SQL·provider 호출 없음.
- **미확정(로그검증필요)**: 런타임 플래그 실제 ON 여부, 대학 회차 DB 연결, 실 provider 정확도/비용 수치.
- **경쟁 조사 한계**: '스쿨작'·'수작'은 공개 검색으로 서비스 식별 실패 → 기능 비교는 추정으로도 기록하지 않음. 정확한 URL/앱 식별자 제공 시 재조사.
- **원천**: QANDA/매스프레소·Mathpix·아이티센엔텍 공개 자료(본문 링크). 회사 주장 수치는 독립검증 아님.

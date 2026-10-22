# 대학별 프로필 PHASE2 — 2026-10-23 체크포인트

Owner가 [PHASE1](2026-10-23-university-evaluation-profile-phase1.md) 승인. 상태 **PARTIAL**, 전체완료아님.

기존 material_runtime loader에선택적 profile조립을연결했다. 기존미지정경로무변경, 문항기준>연도예외>프로필, 정확scope/hash·과거version핀·동일계층충돌검사. 새엔진/테이블/RPC/Worker없음. Math는기존physical profile/context를대조해그대로반환하는로컬adapter.

11대학30후보·60immutable revision을비공개저장. 건국인문/수리·숙명인문 **문항한정검수3개**, 나머지27개DRAFT. 조립입력3문항. 1730기존평가페이지연결을미배정근거inventory로재사용했다. 509문항은프로필범위·공식기준검수미완료, 실패/보완명세기록. 대학별공통기준이확정된30프로필이라고보고하지않는다.

| 대학 | 후보 | 문항한정검수 | DRAFT | 조립 |
|---|---:|---:|---:|---:|
| 가천 |2|0|2|0|
| 건국 |3|2|1|2|
| 경희 |4|0|4|0|
| 고려 |2|0|2|0|
| 동국 |3|0|3|0|
| 서강 |3|0|3|0|
| 성균관 |2|0|2|0|
| 숙명 |3|1|2|1|
| 숭실 |3|0|3|0|
| 서울여 |2|0|2|0|
| 한국항공 |3|0|3|0|

41관련단위검사·Python compile·Wiki handoff PASS. 실제기존 건국/숙명 cache전후동일, Math context동일, 한양accepted hash/공식이미지5개보존. 재실행파일동일. Provider입력이불필요하게변하지않아추가호출하지않음: **0회/US$0**. 이는새프로필실제품질E2E PASS가아니다. 기존 WEB/APP/History/Credit의새운영E2E 미실행.

ProductionDB/Storage/Worker/Gateway/배포/Credit거래변경0. 기존활성2문항보존. 신규일반공개0,PHASE3미착수. 실사용프로필전체완성에남은작업은27개공식공통기준·학년도검수,새입력발생시기존검수package/digest/policy연결및영향사례검증이다. 자동화만으로공식검수승격하지않는다.

상세코드·한계·검증: [APP handoff](https://github.com/LC3808/legendstudy-app/blob/codex/material-service-app-20261022/wiki/university-evaluation-profile-phase2.md).

비공개산출물: `~/development/legendstudy-materials/essay-validation-2026-10/university-profiles-20261023/`의profiles/compiled/report.json/legacy-parity.json/failures.json. 원문/JSON내용 Git업로드없음.


## Owner P0 후속 검수 — 2026-10-23

**PHASE2 PARTIAL 유지. 30은 최종 확정 수가 아니라 재검토 중 후보 수다.** 공통 문장이 같다는 이유로 동국 인문I/II 전체 평가체계를 병합하지 않았다. 가천 혼합 단답형, 경희 의학의 과학 과목별 차이는 추가 분리 검수 필요다. 전체 대학·학년도에 재사용 가능한 완성 프로필은 아직 확정하지 못했다.

최신 후보 상태: 공통 조항/프레임 일부 검수9, 공식 답안 형식만 검수4, 기존 문항 연결만 검수1, DRAFT16. 이14개를 완성 프로필로 세지 않는다. 숙명 인문은2025모의·2026수시·2027모의의 특정7문항에 공통3요소를 확인했고, 실제 입력 조립은2문항만 검수했다. 서강은 결과/과정 등급 구조만 확인한 부분검수다.

### 전수 대조

512문항 전수 목록/기존 연결 명세 대조. 평가 페이지 매핑430, 미확인82(원본 부재라는 뜻 아님). 부분 공통 기준 또는 기존 문항 pin 범위65, 전체 입력 검수·조립4(기존3+숙명2026수시1). 나머지508개는 입력 검수 미완료이며 조립 실패와 구분한다. 범위 밖447문항을 자동 확대하지 않았다.

| 대학 | 전체 | 기존 평가 매핑 | 부분 근거/기존 pin 범위 | 검수 조립 |
|---|---:|---:|---:|---:|
| dongguk | 48 | 30 | 9 | 0 |
| gachon | 166 | 166 | 0 | 0 |
| kau | 30 | 18 | 10 | 0 |
| konkuk | 58 | 58 | 14 | 2 |
| korea | 30 | 30 | 8 | 0 |
| kyunghee | 38 | 31 | 3 | 0 |
| skku | 27 | 21 | 2 | 0 |
| sogang | 28 | 13 | 5 | 0 |
| sookmyung | 22 | 18 | 7 | 2 |
| soongsil | 42 | 40 | 2 | 0 |
| swu | 23 | 5 | 5 | 0 |

범위65에는 형식만 확인한 문항과 기존 건국 수리v2의2026 pin도 포함한다. 전체 점수·감점·학년도 정책 검수 완료 수가 아니다. revision을 무조건 최신으로 바꾸지 않고 기존2026 pin을 보존했다.

### 확인·수정한 오류

- 공통 공식 조항을 기존 scoring evidence로 전달하되 별도 배점/감점 기준을 만들지 않음. 해당 question IDs만 적용, 문항 공식 기준 우선, 내용 변경 시 기존 package 재검수 gate 유지.
- 숙명 실제 평가에서 학생의 타당한 조건부 진술을 잘못된 부정으로 확대하는 오류 발견. 기존 scaffolding-v8 격리 후보로 최소 보완. Production v7 무변경.
- `300±30자`를 기존 분량 parser가 놓쳐 ±만 추가. 원고지 자동계수·임의 감점은 추가하지 않음.
- 경희2026인문 원본 해시 동일하지만 pypdf17페이지/PDFium18페이지. 근거9→10,16→17을 실제 렌더로 확인해 새v4에 수정. v3 원본 보존. 텍스트 추출 페이지를 실제 PDF 페이지로 단정하면 안 됨.
- 현재 부분 프로필의57개 공통 근거 연결은 PDFium 페이지 텍스트와 모두 일치. 이는 모든 문항의 수식/전체 기준 시각 검수 PASS가 아니다.
- 임시 원본 경로를 해시로 복구. 여전히1개 해시/10문항 로컬 원본 위치 미확인. 채점기준 PUA 글리프196문항은 시각 검수 필요(원본 손상으로 판정하지 않음).

### 실제 Provider 품질

기존 엔진과 gpt-5.6-sol, 합성 답안, 격리 저장만 사용. **11호출, 사용량 기반 비용 상한 추정 US$4.117810**(청구서 확정 아님). 실패·수정 전 호출도 포함. 숙명2025모의 약한 답안/재작성 답안,2026수시 그래프 포함 답안의 최종3사례 독립 검수 PASS. 초기 오류와 재검증을 모두 보존한다. 재작성 답안 품질 비교이며 실제 History·무료재첨삭 거래 E2E 신규 PASS가 아니다. 다른10대학/수리 신규 품질 PASS로 확대하지 않음.

2026 그래프의 최초 독립 검수 harness가 base64를 텍스트로 전송해 비용이 증가했다. 그 판정을 시각 검수 근거로 사용하지 않고 기존 `SemanticReview` 이미지 adapter로 검수만1회 재실행해 PASS. 장문 context 할증을 합산한 비용으로 정정했다. 새 평가엔진 개발 없음.

### 산출물·검증·남은 일

비공개 기준 폴더: `~/development/legendstudy-materials/essay-validation-2026-10/university-profiles-20261023/`

- `question-readiness-512.json`, `readiness-summary.json`:512문항별 정확한 ID/역할/원본경로/해시/미완료 사유.
- `failures-detail.md`, `profile-review-details.md`:문항 및 유형별 보완 명세.
- `visual-reference-audit.json`, `review/`:실제 페이지 대조 및 시각 증거.
- `merge-review.json`:병합 보류 근거.
- `provider-review/usage-summary.json`,각 사례의 평가·독립 검수/원본 ledger:호출·비용·실패와 수정 근거. 원문/답안/키는Git제외.

관련43 unittest PASS. 기존 한양/건국 성공 경로·활성2문항·Production DB/Storage/Worker/Gateway/Credit/UI 변경0.

남은 핵심은16DRAFT와 부분검수13후보의 공식 공통체계·예외 확정,508문항 입력 경계/Math physical binding 검수, 대학별 대표 실제 품질 검증이다. PHASE3 신규 대학 일반 활성화 가능하다고 판정하지 않는다. 숙명 검수2문항은 후속 격리 통합 검증 후보이며 운영 등록/공개 완료가 아니다. 경희·동국 추가자료 보강 HOLD 유지.

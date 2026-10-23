# 고려대 v12 Owner 적용 및 운영 E2E — 2026-10-23

## Owner 적용 후 운영 검증 — 2026-10-23 18:11–18:15 KST

**고려2025수시 인문2 대표 운영 E2E PASS**. 기존 관리자 계정의 Production WEB 제출 → 기존 iOS26.5 Simulator Native 조회 범위. 일반 공개나 실기기 전체 검증을 뜻하지 않는다.

Owner가 project `stlhijzpjfgwwdgunlsd`에 SQL을 직접 적용했다. 에이전트는 read-only 사후검증과 정상 서비스 제출만 수행했다. review revision1/2 모두 보존, 현재2/NEEDS_REVIEW 및 문제2만 runtimeApproval APPROVED. selected_questions1, v12 binding/digest 일치. review의 package/runtimeApproval 외 필드가 revision1과 동일. 시험237/문항700 ID 해시·다른 시험 정책·공통 submit 함수의 기존 해시 모두 일치. 사후 SQL은 여러 SELECT 중 마지막 결과만 반환하는 도구 특성을 확인해 각 SELECT를 별도 실행하여 전부 확인했다. 적용 SQL SHA256 `dd97364df187b3b1d6ae7e171856f85ff9f04c662a6dc7722f55aad3b4c9118a`.

| 항목 | 최초 | 재첨삭 |
|---|---|---|
| run | `dcd17104-c417-4645-b791-9a0ce8d9bd73` | `7b8afd49-c438-4a52-8d47-97d2737356d2` |
| 입력 | 공식 반대 예시답안 E 원문 | 실제 최초 피드백에 따른 합성 재작성732자 |
| 저장 상태 | completed | completed, 최초 run을 parent로 유지 |
| 독립 검수 | 8항목 pass | 8항목 pass |
| 내부 기준 충족 단계 | 4/5 | 5/5 |
| Credit | required1, settled, balance delta−1 | required0, included_revision, settled, 거래0 |
| reserved delta | 0 | 0 |

최초 답안 SHA256 `59767de8a828d85384104b8edb65352b0e977e910ad31d6f43918940055fa278`가 기존 공식 E 입력과 정확히 일치. 최초 평가에서 ①·③·④의 논지와 ④의 제삼자 피해 논증을 인정하고, ①의 번영 개념 연결 및 ③의 일반화 범위를 두 과제로 제시했다. 재작성은 비판 입장/근거를 유지하고 두 연결만 보완한 합성 테스트 답안이며 대학 공식 답안으로 표시하지 않는다. 기존 과제2개 모두 resolved, 새 핵심과제0. 내부1–5는 대학 공식 배점/합격예측이 아니다. 첫 결과의 개선안에는 여전히 “비도덕적”이라는 축약 표현이 있으나 설명은 행위 동기의 도덕적 가치와 모든 거래로의 일반화를 구분한다. 모든 답안에 대한 오류 소멸을 주장하지 않는다.

WEB History에서 최초·무료재첨삭2건과 각 결과,4→5 비교를 확인. 기존 로그인 Native 앱1.0.0(2026102201), Device Hub의 LegendStudy First Run QA/iOS26.5에서 같은2건, 최초4/5·재첨삭5/5 및 해결과제/성장비교를 실제 렌더 확인. 양쪽잔액96(최초 전97), 재첨삭 추가차감0. 기존 건국인문/숙명2/서강의 성공8개 run도 completed 상태와 기존 완료시각 유지. 기존 건국수리 성공은 재실행하지 않았다.

이번 실패0, 재시도0, 새 코드/Worker 재배포/DDL/Credit정책/Ledger구조 수정0. 웹 선택 옵션의 AX disabled 표시는 실제 선택이 가능했고 설정 수정 불필요. 결과 직후 기존 목록은 새로 조회하여 재첨삭을 확인했다. APP의 문항명은 “문항 정보 확인 중”, WEB의 상세 근거는 “연결된 근거 표시가 없습니다”로 표시되는 메타데이터/근거 표시 잔여가 있다. 실제 평가 입력의 공식 근거와 package pin은 확인됐으며 이 표시 제한을 입력 누락으로 해석하지 않는다. 결과·비교·History 검증과 이 표시 보완을 구분한다.

Provider 영수증4개(평가2/독립검수2), input38,241/output6,985 tokens. [공식 단가](https://developers.openai.com/api/docs/models/gpt-5.6-sol) input4/output20 USD per1M으로 기록분 추산 **USD0.292664**; input5 cache-write 보수기준 USD0.330905, 실청구 미확인. 기존 격리품질59회/USD4.854720와 별도 집계하며 이전 전체 운영 비용과 혼동하지 않는다. 기존423/89 유지, 실제 운영 E2E5→6문항(고려1추가), 일반공개건국2 유지. 11대학 전체는 PARTIAL.

비공개 증거: `official-answer-quality-20261023/korea-operating-e2e.private.json`(run/result/검수/usage/사후검증), `korea-operating-rewrite.txt`, `korea-operating-{app-history,app-comparison,web-comparison}.png`. 정상 서비스만 호출했으며 비공개 원문·답안·자격증명은 Git에 넣지 않는다. 기존 복구 SQL은 실행 차단용이고 생성된 결과·권리를 삭제하는 복구가 아니다.


## 과거 사전 검토 이력

# 고려대 v12 운영 SQL 사전 검토 — 2026-10-23

**LOCAL_VERIFIED / DB_NOT_APPLIED / WORKER_V12_DEPLOYED_VERIFIED**.
Owner가 Production SQL 직접 실행을 명시했다. Worker 준비 완료. Owner precheck 재확인 후 직접 적용; 에이전트 DB 변경0.

- Project `stlhijzpjfgwwdgunlsd`, 고려2025수시 인문2 exam `942c1c43-914f-5b99-9a30-e6474c363f6f`, question `c1f90870-3ad9-59f8-afe3-c26d665f292f`만.
- 실제 DB: revision1/NEEDS_REVIEW, policy null, run0. 후보는 revision2 append·문항1 package·v12 binding·해당 exam policy case만 추가. 기존237시험/700문항 ID·다른 정책·submit/Ledger/History 보존.
- Production read-only precheck10 true. 로더/프로필/입력/배포자산49검사 PASS, 격리Postgres8검사와 실제입력조립 PASS. 공식 해설 전달 확인.
- Worker2413fe3d-226d-4181-92a8-0eda81e2309e 100%, deployment0a6ca294-d504-4a0f-984f-dea6093a6166 실측. SDK 누락 검증거부 후 pywrangler 패키징 해결. 실제 v12 asset/loader 일치·기존79 Registry/설정 보존 + 고려 추가80. 직전복구Worker6b7593a4. DB precheck10 재확인true.
- 전체 적용·사전·사후·복구 SQL은 공식 근거를 포함하므로 private `official-answer-quality-20261023/korea-operating-{candidate.private,precheck,verify,rollback}.sql`에 보존. 공개 Git에는 원문 미포함.
- rollback은 새 고려 정책 case만 제거, binding/revision/과거평가·답안·Ledger 보존. 해당 문항 재첨삭도 일시 차단되므로 동일정책 복구로 권리 재개 필요.
- 서강 기존 응답/원문 재사용: 고정 작성순서 요구의 공식성 검토 필요, 최종 calibration PARTIAL. 숭실2022인문2문항의 기존 원본 해설/예시를 발견했지만 기준표의 제시문기호/기준개수 불일치 확인, 자동상속 금지.
- 추가Provider2/추산USD0.163360, 품질원장59회·추산USD4.854720, 미확정0. 서강A 동일입력v12 계약/독립검수PASS이나 ordinal [4,3,4,2]·단정 및 순서 해석 문제 남아 calibration PARTIAL. 기존28체계/423상속/89잔여/운영5/공개건국2 유지. 신규E2E0. 결제·Credit·MY UI 변경0.

[APP 상세 및 보존7항](https://github.com/LC3808/legendstudy-app/blob/codex/material-service-app-20261022/wiki/korea-operating-owner-sql-20261023.md) · [기존 품질/423 기준](2026-10-23-official-answer-quality.md) · [인수인계](../HANDOFF/2026-10-23-essay-lab-codex-handoff.md).

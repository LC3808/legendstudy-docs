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

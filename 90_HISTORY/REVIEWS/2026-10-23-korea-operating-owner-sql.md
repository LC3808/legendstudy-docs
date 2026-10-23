# 고려대 v12 운영 SQL 사전 검토 — 2026-10-23

**LOCAL_VERIFIED / PRODUCTION_NOT_APPLIED / WORKER_V12_NOT_DEPLOYED**.
Owner가 Production SQL 직접 실행을 명시했다. SQL은 아직 실행하지 않는다.

- Project `stlhijzpjfgwwdgunlsd`, 고려2025수시 인문2 exam `942c1c43-914f-5b99-9a30-e6474c363f6f`, question `c1f90870-3ad9-59f8-afe3-c26d665f292f`만.
- 실제 DB: revision1/NEEDS_REVIEW, policy null, run0. 후보는 revision2 append·문항1 package·v12 binding·해당 exam policy case만 추가. 기존237시험/700문항 ID·다른 정책·submit/Ledger/History 보존.
- Production read-only precheck10 true. 로더/프로필/입력/배포자산49검사 PASS, 격리Postgres8검사와 실제입력조립 PASS. 공식 해설 전달 확인.
- Wrangler 실제 조회 Worker6b7593a4-5c0c-4b0f-9f37-f812f6a51a3d 100%. **v12 운영 미배포**. 과거 임시 stage 없음. 배포 재구성/실제binding 확인 후 Owner 적용.
- 전체 적용·사전·사후·복구 SQL은 공식 근거를 포함하므로 private `official-answer-quality-20261023/korea-operating-{candidate.private,precheck,verify,rollback}.sql`에 보존. 공개 Git에는 원문 미포함.
- rollback은 새 고려 정책 case만 제거, binding/revision/과거평가·답안·Ledger 보존. 해당 문항 재첨삭도 일시 차단되므로 동일정책 복구로 권리 재개 필요.
- 서강 기존 응답/원문 재사용: 고정 작성순서 요구의 공식성 검토 필요, 최종 calibration PARTIAL. 숭실2022인문2문항의 기존 원본 해설/예시를 발견했지만 기준표의 제시문기호/기준개수 불일치 확인, 자동상속 금지.
- 추가Provider0/비용0, 품질원장57회·추산USD4.691360 유지. 기존28체계/423상속/89잔여/운영5/공개건국2 유지. 신규E2E0. 결제·Credit·MY UI 변경0.

[APP 상세 및 보존7항](https://github.com/LC3808/legendstudy-app/blob/codex/material-service-app-20261022/wiki/korea-operating-owner-sql-20261023.md) · [기존 품질/423 기준](2026-10-23-official-answer-quality.md) · [인수인계](../HANDOFF/2026-10-23-essay-lab-codex-handoff.md).

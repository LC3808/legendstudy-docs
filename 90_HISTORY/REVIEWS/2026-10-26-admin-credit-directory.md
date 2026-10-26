# 관리자 Credit P0 운영 반영 / P1 검토

2026-10-26. 이 기록은 관리자 Credit 변경만 다룬다. 대학 STANDBY 완료 범위를 확대하지 않는다.

정본: [APP 로컬 Wiki 상세](https://github.com/LC3808/legendstudy-app/blob/codex/material-service-app-20261022/wiki/admin-credit-directory-20261026.md).

- Owner 승인 조회RPC 1개 Production 적용, 격리 권한/잔액/페이지 검사 및 사후7true. apply.sql 재실행 금지.
- WEB584a9142ef6d9fd7bf6815be72cf8091d0b82aca / Pages89246b7e-c283-499b-a849-5e1f1e6dbb3d production success.
- 상단 서버회원목록·10/20/50·검색·잔액/최근활동정렬·기존상세/지급폼 연결. 운영13회원 페이지이동/검색/정렬/상세/지급폼 열기닫기 확인. 실제 지급/회수/취소/Provider0.
- UI/API48검사·Typecheck·Lint오류0·Build PASS. 모바일 실기기 및 대규모회원 성능은 미확인.
- Ledger90행/잔액변동합338 및 기존 잔액·지급 함수 보존. History/학생답안 쓰기0.
- P1: 관리자 회수는 grant별 미사용·미예약 한도, 권한·잠금·멱등키·감사 필수의 최소RPC 검토. 미구현.
- 부분환불은 운영 payment_process/기존Toss어댑터 재사용 가능. 결제금액-순사용량×4900, 예약차단, CANCEL_PENDING→Provider확인→잔여grant회수. 불명응답은 대기/재조회, 확정거절만 원상태. 실제취소0, TEST/LIVE동결유지.
- APP Wiki/SQL commit fd942b4. WEB복구는 기존Pages1061ae14/WEB e669cbc, 필요시 새조회RPC만rollback. 학생원장복구 불필요.

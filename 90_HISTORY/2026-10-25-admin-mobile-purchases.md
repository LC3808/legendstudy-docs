# 2026-10-25 관리자 모바일 구매 집계·스토어 업데이트 준비

Owner는 관리자 결제/원장 목록5개, 모바일 구매누락과 예약행 조사 후 DB·스토어 준비를 요청했다. [통합 배포](2026-10-25-integrated-release-closeout.md)와 [IAP 과거 장애 인수인계](2026-10-23-iap-verify-codex-handoff.md)를 확인했다. 과거v17/미지급 기록을 현재상태로 사용하지 않았다.

현재 운영 verify-iap-purchase v23 ACTIVE. 개인정보/답안/거래ID 원문 없이 집계한 구매는 Google1건/1크레딧+Apple2건/4크레딧=3건/5크레딧이다. 사용1후 현재구매잔액4. 기존 관리자 payment_orders는 Toss만 집계했으므로 모바일이누락됐다. Toss TEST 완료3건47,700KRW는 실제매출이 아니다. IAP원장에는 실제금액/통화/환경이없으므로 매출추정/하드코딩하지 않는다.

Owner가 additive admin_mobile_purchase_report 읽기RPC 적용·권한사후검증 전부true. 기존Ledger/지급함수/결제설정 불변. 해당00:28~00:30의 동일decision은 예약+1→consume잔액-1/예약-1, 합계잔액-1/예약0이며 중복차감아님.

WEB source8261d17d1d379feff16e247267583ea4a165f86b / Production7ff387f2-4625-40e2-b557-61b71c1dbd64 canonicalAPI 성공확인. 실제관리자 모바일합계3건5·구매잔액4·결제/원장5행·다음페이지5행 확인. rollback은이전WEB f73a03d0-6fa7-4969-9e93-d099fb513a1c. Worker변경0.

검증: WEB관리자102PASS13파일/typecheck/수정lint/boundary/buildPASS, 로컬PG 집계/필터/역할/rollbackPASS, APP구매·Credit12PASS. 기존전체suite실패와실기기미검증은별도다.

스토어: 기존IAP작업의ignoredproductionconfig로양플랫폼wrapper설정검사PASS. 현재APPAndroid서명설정존재/iOSAuth.local.xcconfig부재. Apple로그인·Play기존개발자계정전환대기. 최신콘솔버전/심사상태/중복없는빌드번호 확인 후 RC서명빌드·실기기검증·업로드를이어간다. 이번에새구매/수동지급/Secret변경/스토어제출없음. 신규대학공개없음.

[SQL package, preservation review, implementation and evidence](https://github.com/LC3808/legendstudy-lab/blob/codex/web-app-release-20261024/docs/admin-purchases-20261025/README.md).

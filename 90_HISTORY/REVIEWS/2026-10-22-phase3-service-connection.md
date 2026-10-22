# 2026-10-22 PHASE 3 — 기존 Essay/Math 연결

Owner iPhone 최신시험·PDF 확인 후 PHASE3 승인. 기존 WEB1638d9c / APP96830e22 자료연결을 보존하고 로컬 연결만 보완. Production DB·Storage·배포·실Credit·IAP·일반공개 변경 없음.71702 미적용.

## 11개 대학 실행 준비 현황

| 대학 | 시험 | 문항 | 평가 페이지 연결 문항 | 연결 건수 | 실제 평가 서비스 |
|---|---:|---:|---:|---:|---|
| 가천대 | 17 | 166 | 166 | 1158 | HOLD |
| 건국대 | 21 | 58 | 58 | 378 | HOLD |
| 경희대 | 10 | 38 | 31 | 171 | HOLD |
| 고려대 | 10 | 30 | 30 | 180 | HOLD |
| 동국대 | 16 | 48 | 30 | 180 | HOLD |
| 서강대 | 24 | 28 | 13 | 78 | HOLD |
| 성균관대 | 9 | 27 | 21 | 126 | HOLD |
| 숙명여대 | 8 | 22 | 18 | 124 | HOLD |
| 숭실대 | 16 | 42 | 40 | 239 | HOLD |
| 서울여대 | 11 | 23 | 5 | 30 | HOLD |
| 한국항공대 | 15 | 30 | 18 | 108 | HOLD |

512문항 중430문항2772페이지연결 보존.82문항은 현행 private review의 평가 연결부터 보완해야 한다. 전체157시험의 검수된 runtime package/policy는0. public evidence/criteria0을 원본 평가자료 없음으로 오해하지 않는다. 건국대표 인문공식cache/MathDRAFT14행은 재사용 가능한 예외 자산이며, 페이지 연결·평가검수·운영활성화는 별개다. 한양대 Production 성공은11개대학외 기존 사례로 보존.

## 기존 코드 재사용 및 최소 변경

- APP 승인PDF문항→기존Native작성UI/기기초안. 검수문항 계정쓰기·평가요청은차단. 성균관권리HOLD/후순위16대학보존.
- WEB기존시험submit→ownerHistory조회 연결.100초 이후재제출 없이기록확인. WEB/APP정직한대기안내, 가짜진행률없음.
- 기존서비스브랜치의Mathleaf고정/물리CALCULATION→COMPUTATION변환/개념오류분류/75초Provider를최신PDFUI브랜치에선택재사용. 클라이언트Math100초. 신규서버/테이블/이미지Storage 없음.
- 기존v6기본prompt유지; 격리v7후보로공식근거교정·미확정분량안내강화. 실제재작성에서기준UUID오기가나와기존validator가차단했고,기준/근거ID enum고정최소수정. 임의ID치환/결과수리 없음.

## 테스트와 실제 Provider 범위

Flutter58관련tests/analyze, Python35기존Worker계약, WEB23관련UI/History/업로드 및 Math22관련계약tests PASS(중복포함,합산금지). 건국인문공식입력Worker Mock2회PASS, Provider0인 별도검사.

Owner6회/$5격리승인 후 실제5회: 미흡·논점이탈 두사례 평가/독립검수8항목PASS, 재작성은기준ID오기로계약FAIL. 이전실패원인과공식지문직접대조. 사용량비용상한$0.455232(캐시할인미반영,실청구미검증). Owner 총7회/$5 변경승인 후 수정사례 평가+독립검수8항목PASS. 총7회/$0.6167 사용량 보수비용으로종료. 기존25회합산32회/$3.2377406 보수추산(실청구미검증). 이전25회/보수비용$2.6210406 별도유지; 전체호출기록합산.

실제Provider응답→운영WEB/APP제출·History온라인E2E는아직미완료. 단순응답/Mock/빌드로서비스PASS처리하지않음.

## 실패 명세 및 비공개 근거

`~/development/legendstudy-materials/essay-validation-2026-10/phase3-20261022/`

- question/review/mapping-audit.json: 읽기전용 운영증거.
- evaluation-holds.json 및 대학별*-evaluation-holds.md:512문항기존ID/원인/수정방향/Owner확인.
- readiness-summary.md:대학별집계.
- provider-approval-plan.md/approved-call-ledger.json:승인범위·호출비용·오류checkpoint.
- 개별output/reviewJSON은격리비공개. 원본/합성답안/비공개평가자료/키는Git업로드하지않음.

## 남은 BLOCKER와 다음 순서

1. 기존공식페이지에서평가기준/문제/출제의도패키지검수. 불명확기준생성금지. 가천유형적합성별도.
2. 문항별package/policy 및MathDRAFT실행범위준비 후Owner정확한운영변경승인. 불필요한Migration금지.
3. 실손글씨/6장판독·학생확정·WEBAPP교차결과·재첨삭·운영History/Credit은별도검증.
4. WEB배포/Store/일반공개는별도승인. 경희·동국보강HOLD, IAP는Claude담당유지.

현재판정PARTIAL, 일반사용자서비스가능0(공개HOLD 기준). 기존자료조회성공은보존.

## 최종 로컬 검증

WEB Typecheck/Lint/Build PASS. Flutter analyze·Android debug APK·iOS Simulator build PASS. 로그인 iOS Simulator 실제71701 건국인문2번→기존Native 작성화면 PASS; 평가/계정쓰기없음. 테스트 후 정상앱 삭제없이복원. iPhone새코드·운영WEBAPP첨삭History E2E는미검증. 새두호출과누적7회증거는비공개 `approved-repair-call-ledger.json`, 이전5회원장보존. 일반AI HOLD 및Production변경0.

## 구현 Commit

APP `b44ca2f` / LAB `042ee8e`. 각 기존 codex 작업브랜치에만 기록하며 Production 배포 아님.

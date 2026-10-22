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

## Owner P0 실제 연결 후속

운영읽기전용으로한양대정책보존/건국미설정확인. Worker prompt파일패키징·신규시험Registry누락·단일prompt정책충돌을로컬보완. 서버snapshot+배포exact allowlist일치때만기존prompt선택; 미승인모델거부. 21계약PASS. 기존공식cache9연결/5기준 투영PASS, 운영digest/권리/동일시험다른문항검수보존은준비중. 비공개`phase3-20261022/operating-connection-plan.md`에최소운영변경·복구·E2E순서기록. Provider/Credit/Production변경0. 대학별실제AI가능수는위표모두HOLD, 서비스완료아님.

후속 APP/Worker 후보 Commit `93dca6d2548f125ac0fc1db1579bb43c26cd29b1` 원격일치확인. LAB은기존후보 `042ee8e`, Production은기존 `1638d9c` 유지(이번배포없음).

## 2026-10-23 운영 E2E 체크포인트 — 인문 교차조회 PASS, 전체 PARTIAL

Owner 통합 실행 승인에 따라 실제 테스트 계정으로 수행했다. 과거 격리 품질 성공을 반복하지 않고 기존 Essay Worker·Registry·검수 패키지·Credit·History를 재사용했다.

- 건국대 2026 수시 인문 2번: iOS Simulator Native 앱 최초 제출 → 실제 Provider 평가 → 결과 저장 PASS. 최초 run `8673c80d-902c-46d4-9697-08e4c7702c29`.
- 같은 결과를 Production WEB History에서 조회하고, WEB에서 재작성·무료 재첨삭 → 결과 저장 PASS. rewrite `d1f6dcba-c6f7-45f6-ba1d-8ec13c45963a`. APP History를 다시 열어 같은 재첨삭 결과와 비교를 실제 렌더했다. 독립검수 8항목 PASS.
- Ledger 확인: 최초 balance_delta -1 / reserved_delta 0, 재첨삭 0 / 0. 앞선 실패 3건은 각각 reserve1/release1로 순차감0. 결제 테스트·상품 변경 없음.
- 이번 운영 Provider 10호출(평가5/독립검수5). 사용량 기반 보수 추산 USD0.972644, 캐시 할인 미반영·실청구 미확인. 이전 격리7회/USD0.6167와 별도 기록. 성공 사례를 다시 호출하지 않는다.
- 실패 원인: 내부 1~5 척도 설명 누락, 공식 분량의 런타임 전달 누락을 최소 수정. 세 번째 실패는 독립검수 통과 후 최종 계약 차단으로 당시 정확한 원인 미기록; 원인을 확정하지 않는다. 이후 명시적 local issue 목록과 안전한 symbolic failure code 기록을 보강했다. 다음 최초/재첨삭은 실제 성공했다.
- WEB 재작성 화면이 정적 Registry에 없는 시험을 거부하던 문제를 수정했다. 기존71701을 먼저 조회하고 정확한 exam/question ID를 확인하며, legacy 조회는 fallback이다. 관련2 tests·Typecheck·Lint·Build·Boundary PASS. LAB `26f0c2a29b4eeef23a0d522c6488276da4076842` 배포, APP/Worker `d675a84511b5a43bac6a7d0d721dc4b570a6ce32`. Worker version `c180f7e1-8620-4ef0-ab17-4e8545fe2f3e`.
- 첫 WEB 배포의 공개 빌드 환경 누락은 즉시 기존1638d9c로 복구한 후 기존 환경으로 재빌드하여 해결했다. 이후 로그인·실제 재첨삭으로 복구 확인. 비밀값은 기록하지 않는다.

### Math 운영 준비와 남은 인증 확인

기존 건국 자연1번 Math14행 중 set/problem/profile/canonical solution 4행만 DRAFT→ACTIVE로 변경했다. 상태·수정시각 외 원본 JSON 동등성4/4 PASS, ID·공식내용 보존. 기존 evaluation_admission 함수에 **기존 테스트 계정·정확한 leaf·자기 attempt·2026-10-24 00:00 KST 이전** 조건의 예외만 적용했다. 전역 evaluations_enabled=false 및 함수ACL postgres-only를 재확인했다. 기존 다른 문항은 계속 차단한다. 별도 테이블/71702 적용 없음.

Math Pages Provider/runtime flags는 여전히 false다. 마지막 확인 Worker JWT 만료는10월16일이며 현재 secret은 마스킹되어 갱신 여부를 확인하지 못했다. 기존 안전한 발급/갱신 경로 확인 중이며, 키 회전·service_role 대체·권한 우회 없음. Math 실제 Provider/Credit 실행은 아직0. 기존 SQL 백업·원복은 비공개 `phase3-20261022/math-operating-backup.private.json`, `math-operating-rollback.sql`. 복구는 gate 원복으로 차단하며 기존 학생답안/결과를 삭제하지 않는다.

### 판정과 범위

건국 인문1문항의 테스트 계정 WEB↔iOS Simulator 평가·재첨삭·History PASS. Android/iPhone의 이번 실제 첨삭은 미검증. 나머지11개 대학 문항을 서비스PASS로 확대하지 않는다. 일반 공개0/HOLD, 건국대 외10개 대학 E2E 검증문항0. Math 및 손글씨·6장 판독은 PARTIAL/미실행. 자료157시험512문항 및 기존PDF는 보존했다. 기존 readiness 표의 페이지 연결 수는 운영 가능 문항 수가 아니다.

증거: 비공개 `phase3-20261022/operating-provider-usage-current.json`, 로컬 `/private/tmp/legendstudy-app-evaluation-success.png`, `/private/tmp/legendstudy-app-cross-rewrite-success.png`. 원문·답안·키는 Git에 포함하지 않는다. 경희·동국 보강HOLD, IAP는Claude담당 유지.

운영 배포 목록 재확인: Production `917b22de-95ad-48b8-8995-acbd2af31c91`, source `26f0c2a`. Wrangler 기존 OAuth refresh 후 읽기 성공(직접 API의 일시적401은 토큰 갱신으로 해소). 추가 Native 화면 확인 시 Mac 잠금으로 중단했으며, 앞서 저장한 실제 성공 증거는 유지한다. Math 인증 경로와 기기 잠금 해제 후 잔여 검증 필요.

## 2026-10-23 Math 인증 경로 재확인 (읽기 전용)

기존 경로 FOUND. Unified Wiki commit `67bf37d230a09a624aa39c0c521d658c17f17398`의 Oct09 Daily와 `90_HISTORY/EVIDENCE/2026-10-09-math-final-unblock.json`을 대조했다. 당시 기존 Management `GET /v1/projects/{ref}/postgrest` 경로에서 기존 서명 재료를 메모리로만 사용하고 기존 서명을 확인한 뒤, 정확히 math_extraction_worker/math_evaluation_worker 역할의 HS256 JWT(iss=supabase,iat,7일exp)를 발급했다. 새 서명키·회전·폐기 없이 기존 Pages의 두 encrypted binding만 갱신했다. 자체 null-DTO400/22023·교차역할403/42501, 실제 Math 최초1Credit/재첨삭0Credit 성공 증거가 있다. 발급 스크립트 자체는 해당 Git commit에 포함되지 않았으며 절차와 비밀을 제거한 실행 증거가 남아 있다.

현재 Production `917b22de-95ad-48b8-8995-acbd2af31c91`/`26f0c2a`: 두 Worker JWT와 Provider API key binding 모두 secret_text로 존재한다. 따라서 Secret 등록 누락이 아니다. Math Enabled/Provider Calls 모두false. 익명 빈 요청 evaluate503/extract409는 현행 gate/입력 차단이며 JWT 만료의 증거가 아니다. 최근24시간 Supabase 로그 집계에서 JWT expired 및 두전용역할 문자열 발견0; 로그 부재는 인증성공 증거도 아니다.

마지막 확인 exp는2026-10-16 18:57:41KST. 현재 설치 Secret의 claims/서명과 역할RPC acceptance는 마스킹 때문에 아직 미확인. **갱신 방식 부재 → 현재 설치 credential 유효성 미확인**으로 BLOCKER를 정정한다. 갱신을 위해 새 인증키나 새 권한이 필요하다는 근거는 없다. 기존 키 노출 이력은 별도 미해결이며 노출 키를 대화에서 재사용하지 않는다.

이번 확인에서 서명 재료 조회/토큰 발급/Secret 교체/설정 변경/Provider/Credit 실행 없음. 다음은 기존 전용 역할 인증의 안전한 유효성 검증 및 필요 시 기존 절차의 제한적 credential 갱신이다. 키 생성·회전·service_role 대체·검증 우회는 하지 않는다. 기존 인문 실제 교차조회 성공을 반복하지 않는다.

비공개 메타데이터 근거: `phase3-20261022/math-auth-readonly-20261023.json`(키·JWT 원문 없음).

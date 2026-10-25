# Owner 1-A 전환 — 2026-10-25

APP MY Native 복원 및 양기기 재설치 기존완료증거를확인했다. 첨삭결과UI는Owner문제보고/회귀여부미확정으로미완료기록. 추가APP UI·빌드·스토어작업중단. WEB Production·기존결제/Credit/History보존.

Owner지정중앙·성균·경희,2022이후인문/언어·수리·혼합형의전체시험회차를연결한다. 최초회차1Credit/기존무료0Credit,당시Owner추가승인으로Codex SQL직접실행. 현재는Owner복귀후SQL개별승인원칙복원.

READ-ONLY 기준중앙22시험69문항,성균15시험27문항,경희17시험35문항. 합계54시험131문항이며빈시험14. 적용전 전체문항실행승인시험0,기존성균2시험각1문항부분승인보존. 중앙resources후보139개는존재하지만현재시험자료/review실행경로와미연결. 성균·경희15시험의기존자료107링크재사용. 후속 성균2회차 전체6문항 revision3 적용·사후13true. 일반계정 전체시험 공개완료는 아직0.

[정확한ID 명세·회차별보류·재개순서·APP보류](https://github.com/LC3808/legendstudy-app/blob/codex/material-service-app-20261022/wiki/essay-group-1a-20261025.md). 기존성공E2E를새로반복하지않는다. 부분연결이나테스트PASS를시험전체서비스완료로보고하지않는다.

## 후속 실행 상태

- WEB `3bf73923212adcf83b8eb8c856d203584d549c2c`, Production `b08beb10-18a3-4564-a304-477af690837f`: 기존성균 Q2/Q3 PDF4행연결. PDF/catalog14PASS·buildPASS.
- Worker `e6ffbdb4-5024-4420-b335-d3c146022564`: 큐 delivery당 새문항1개로 나눔. 기존bindings/runtime설정 정확보존,13testsPASS. APP UI/build/스토어 변경없음.
- 언어2교시3문항 run `b2cbc55f-edc7-423d-bfdc-f5d039b215e5`: Q1완료,Q3독립검수차단,Q2검수시작pending. admin계정검증이며 일반계정PASS 아님. 최초1Credit reserved,미정산. 무료재첨삭/전체E2E 미완료.
- 실제영수증5회(생성3/독립검수2),87,785입력/9,992출력tokens,비용NULL 미확정. 성공결과/예약/History 보존. 새유료제출로우회금지.
- 첫Worker실행subrequests50 확인. 중단된pending을임의삭제/탈취하지않고 감사가능한실패확정·동일run재처리 경로부터 보완. Worker새배포는이미pending인작업을자동복구하지않음.
- 대학별 대상/전체문항연결/실제공개검증: 중앙22/0/0,성균15/2/0,경희17/0/0. 전체완료아님. 원본자료재사용·나머지회차연결계속.
- 기존SQL두회차적용완료,재실행금지. 정확한 SQL경로/좁은복구/APP중단영역은 연결된APP Wiki 기준.


## 최신 — 승인 복구 완료 및 실제 무료 재첨삭

Owner가 복구 SQL/동일요청 재개를 명시 승인. Production 사전8/사후6PASS, 원본 checkpoint·snapshot·성공Q1을 보존하고 미완료Q3/Q2만 재처리. 기존 run b2cbc55f-edc7-423d-bfdc-f5d039b215e5 completed/3문항저장/1Credit settled. 예약1·consume1, 추가예약0. rollback 해제는 미승인·미실행. 재적용 금지.

무료 재첨삭 0e9714ed-c2b3-4919-8bff-6582e499864b completed/3문항/0Credit settled/Ledger행0. WEB History 두건 자동반영, 근거·성장3→5/4→5 확인. 관리자계정 실제 E2E이며 테스트답안 사용. 일반계정은 Owner로그인 후2교시 전체3문항·PDF·1Credit견적 확인, 추가 Provider 제출없이 잔액11보존. 일반계정 실평가PASS로 과장하지 않는다. 완료결과 옆 이전타임아웃 경고가남는WEB표시문제 별도기록.

성균15시험 중DB전체연결2, 실제회차E2E1(관리자최초+무료), 일반접근확인1, 나머지14공개확인보류. 중앙22시험44기존PDF/428페이지 추출·17시험56문항명시위치확인(실행입력PASS아님). 경희17시험 중9시험35문항초안재조립·프로필29. 중앙/경희 운영공개0, 전체서비스 미완료.

이번 추가 Provider10회(복구4+무료6),195,970입력/19,588출력tokens, 비용NULL미확정. 중단전포함15회. 큐/재개13tests·기존Ledger격리18checks·복구SQL보존/중복차단PASS. 신규Production활성화SQL없음. APP UI/빌드/스토어 및WEB/Worker재배포없음. WEB3bf7392/b08beb10,Workere6ffbdb4 유지. 다음: 경희근거구간교정·중앙전용공식평가체계연결 후 승인용시험묶음SQL.

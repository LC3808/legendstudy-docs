# Owner 1-A 전환 — 2026-10-25

## 중앙 인문사회 실행 장애 — Owner 조치 대기

중앙10회차 기존연결재사용,경영경제는인문완료후Owner확인전착수금지. 현재중앙runs0/Provider0/차감0. Worker CPU30초설정요청이HTTP400/100328(Free plan은CPU설정불가)으로거절돼Free플랜확정. Workers Free10ms제약과실제자원초과/초기화오류확인. 새version/배포변경0,WEB2cc8cd0a/Worker53d20942 유지. Owner에게Workers Paid전환요청(비용계정작업직접실행). 이후기존소스/Secret보존CPU설정·최소실행경로확인. 아직실서비스완료아님. [근거·재개](https://github.com/LC3808/legendstudy-app/blob/fab0234/wiki/essay-group-1a-20261025.md#2026-10-25-중앙대-인문사회-실서비스--실행-한도-장애-확인).


## 2026-10-25 대학 카드 상태 안정화

WEB b3a1c6d / Production ad522cdf-1bbf-4961-827d-be1a1253b40f. 카드조회를Python평가Worker에서분리하여기존서버공개목록+공개metadata로1회응답. 확인중/공개/준비중/조회오류구분, focus중복요청제거·이전응답무시. 기존제출승인·Credit·History·Registry·공개22시험목록불변. 41tests/typecheck/buildPASS,일반계정새로고침3회·페이지왕복2회6대학동일활성/1-A3대학보존·잔액11. Provider0/SQL쓰기0/APP변경0. Worker자원초과3·예외4집계와ErrnoError관찰,평가Worker안정성은별도잔여이며카드복구를엔진완치로보고하지않음.

[원인·수정·복구·검증범위](https://github.com/LC3808/legendstudy-app/blob/codex/material-service-app-20261022/wiki/essay-group-1a-20261025.md#2026-10-25-대학-카드-공개-상태-안정화).


## 2026-10-25 승인 묶음 적용 후 현재 상태

Owner 승인 중앙10회차30문항 Production 적용: 사전11/사후8true, 기존ID·다른정책·Credit·History·Ledger보존. 문제PDF10개만 로그인SELECT, 해설비공개. 이전 경희2/성균1묶음도 적용·공개확인 완료. 이미 적용한SQL재실행금지.

|대학|대상|전체연결|일반WEB공개경로 확인|미완료|
|---|---:|---:|---:|---:|
|중앙|22|10|10|12|
|성균관|15|3|3|12|
|경희|17|2|2|15|

일반계정 전체문항 입력·PDF연결·1Credit 요청경로 총15회차 확인. 신규 Provider0/평가비용0; 실제 회차 최초1/무료0·History·성장비교는 기존성균언어2교시 성공근거 재사용. 새로운15회차 실평가E2E를 주장하지 않는다. 남은39회차는 빈Registry/공식자료·답안단위연결/수리·혼합회차계약 미완료.

WEB `6a9b716`, Production `497ea786-6dc8-42a9-aeeb-7db20a1d9fa0`; Worker `53d20942-24cd-4286-b18b-ff6e254a6e2f`100%. 중앙2027 admission의 Pyodide초기화오류를 동일70모듈·bindings·runtime설정 재배포와 WEB목록순차조회로 복구. 31tests PASS·두2027일반계정경로 회복. Cloudflare원천버그/다중사용자부하해결 판정 아님. 재발하면 기존요청/예약보존 후 tail확인, 무조건재제출금지. Secret변경0.

APP UI/빌드/스토어 중단. 기존앱 정적PDF목록에 중앙10/성균2027없음, 이미지회차제출차단으로 수리·혼합 호환GAP. WEB공개와 APP완료를 구분한다.

복구: 중앙확대전 WEB1455ed8b/Workerc9470a54 및 중앙10개공개목록만복원. DB central-owner-sql/rollback.sql은 신규실행case·정확PDF정책만복구하고 평가/revision/ID/기록보존. 추가SQL/권한변경은Owner승인범위 준수.

[APP 최신 근거·실행파일·복구](https://github.com/LC3808/legendstudy-app/blob/4a9ef9d/wiki/essay-group-1a-20261025.md#2026-10-25-최신--승인-묶음-적용회차-서비스-확대). APP문서/도구 commit4a9ef9d; 모바일앱배포를 뜻하지 않는다.


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


## 2026-10-25 최신 — Manus 구조 대조·인문 회차 확대 후보

Owner 제공 Manus 자료는 **시험 구조 보조자료**다. 실제 평가 근거는 각 시험의 기존 공식 문제·출제의도·채점기준으로 제한한다. 2027 안내/모의를 2024–26 실제 기출에 소급하지 않는다. 27/33대학 전체 연결로 범위를 넓히지 않는다. [기존 1-A 결정](../../00_PROJECT/CURRENT_STATUS.md)과 회차1/무료0Credit·APP중단 원칙을 유지한다.

### 조사와 Registry의 분모

Production READ-ONLY 재조회: 1-A 54시험131문항 유지. 조사 ZIP2의 실제기출 35행을 **38회차**로 펼쳤다(성균 언어형 한 행에 1·2교시). 2027안내는 별도 보존. 첨부 XLSX2개·보고서2개·ZIP2개의 SHA256은 `supabase/reviews/essay-group-1a/manus-attachment-sha256.json`, 재현 도구는 `tool/essay_lab/manus_structure_compare.py`다. 원본을 덮어쓰지 않았다.

|대학|Manus 실제 조사 회차(2024–26)|Registry 시험(2022+)|동일 시험 식별|문항 수 일치만 확인|구조 불일치·미확인|시험 부재 후보|문항 0인 기존 시험|
|---|---:|---:|---:|---:|---:|---:|---:|
|중앙|12|22|6|6|6|6|0|
|성균|14|15|10|3|11|4|4|
|경희|12|17|8|1|11|4|4|

‘문항 수 일치’는 공식 근거·입력·공개 완료 판정이 아니다. 구조 불일치·미확인은 시험 부재/빈 문항/소문항 또는 선택과목 표현 차이를 포함한다. 실제 오류 확정과 구분한다. 조사에 없는 2022–23/모의 Registry 시험을 잘못된 시험으로 분류하지 않는다. 자세한 기존ID/조사회차/실패분류는 `supabase/reviews/essay-group-1a/manus-structure-comparison-20261025.json`.

### 공식 자료와 대조해 좁힌 수정 범위

- 중앙2024/25/26 수시 자연1·2교시 6시험은 Registry에는 없지만 **기존 resources에 정확한 문제/해설12개**가 있다. 재수집·재업로드·새ID생성 없이 resource ID 쌍을 정리했다. `manus-structure/central-missing-exam-resource-joins.json`. 각4대문항·7답안단위라는 조사 결과는 PDF 전체 검증 후 등록 후보로 승격한다. 기존 모의 자연시험을 수시로 바꾸지 않는다.
- 성균2026수리1: 공식 문제 PDF2–4페이지에서 3대문항·9소문항(각ⅰ/ⅱ/ⅲ) 확인. Registry3개는 부모 문항이다. 6문항 누락으로 단정하거나 기존ID를9개로 교체하지 않는다. 각 부모 안의 답안단위·공식근거 연결을 보완한다.
- 경희2026자연: 공식 문제1–2페이지에서 3대논제·6답안단위 확인. 경희2026사회: 공식12–13페이지의 논제Ⅲ(1)/(2)(a)/(2)(b) 확인. 장문Ⅰ/Ⅱ와 합쳐5답안단위다. 수식 추출의 private-use glyph는 텍스트로 추측하지 않고 원본 이미지 경로로 처리해야 한다.
- 경희 의약학: Registry8개는 수학·물리·화학·생명과학의 부모 논제 목록이다. 조사4대문항/8답안이라는 응시 조합과 숫자만 비교해 누락/중복 확정 금지. 선택과목별 조합과 답안단위·근거 연결을 확인하기 전 공개 보류.
- 2027 경희 사회형2논제 안내, 중앙 일반/창의형 및 자연/의약학 변경은 `guidance_2027`로 별도 유지. 실제 모의 PDF와 확정 요강도 서로 대체하지 않는다. 과거 시험 변경0.

### 정상 인문 시험 후보와 SQL 승인 대기

경희2026수시 인문체육2문항, 경희2027모의 인문체육2문항, 성균2027모의 언어3문항: **3시험 전체7문항**을 공식 자료로 조립하고 기존 입력 계약 PASS. 경희v7프로필 재사용, 성균v5는 보존하고 해당2027공식 공통기준에 근거한v6후보로 조립했다. 성균 자료4·5페이지 그림과 공식 배점의 가변 적용 안내도 포함했다. 조사 문구를 채점기준으로 사용하지 않는다.

중앙 인문10시험30문항은 기존 공식 자료만으로 구조적 입력 PASS 초안. 중앙2026인문은 전체제시문3–8페이지, 발문8페이지, 문항별 출제의도1페이지로 범위를 좁혔다. **전체 의미검수/일반 PDF 전달 연결/운영승인 미완료**, 다른 대학 프로필로 대체하지 않았으며 공개 수에 포함하지 않는다. 기존 중앙 문제 PDF의 hash 객체는 현재 essay-material-originals에 없어 기존 resource 전달 경로를 연결해야 한다.

로컬 기준 경로: `/Users/woojinchang/development/legendstudy-materials/essay-validation-2026-10/group-1a-20261025/`.

- `manus-structure/`: 원본 해시, 3대학 조사 추출, XLSX 행/셀 위치, 최신 Registry, 대조표, 공식 수리/혼합 구조 확인.
- `text-expansion/`: 3시험7문항 packages/registry, 성균v6후보, 중앙10시험 초안/검증, 재생성 스크립트.
- `text-expansion/worker-registry.private.json`: 기존 운영87시험을 그대로 두고 신규3시험을 추가한90시험 후보. 원본87시험 내용 불변. Production 배포 아님.
- `text-expansion/owner-sql/OWNER-README.md`: 프로젝트 stlhijzpjfgwwdgunlsd, 사전검사→적용→사후검증→복구. 기존검수3건 revision1→2, 실행case3개, 성균2027문제PDF한 개에 좁은 로그인SELECT만 추가. 중앙대/Math/Credit/History/인증 함수 변경 없음.

검증: 격리PostgreSQL17 사전10/사후12 PASS, 진행중·중복적용 차단, 다른 정책·기록보존, 롤백멱등 및 조회보존 PASS. 운영 사전10개 모두true(READ-ONLY). PostgreSQL digest로 기존 운영 소스의 입력 검사3시험7문항 PASS. **Owner 승인 미수신·Production 적용0·신규 공개0**. SQL적용만으로 공개완료 처리하지 않는다. 이후 Worker Registry·Pages/Worker 공개목록·WEB성균PDF메타데이터 연결과 일반계정 실제 열람/제출 경로 확인이 남았다.

### 보존과 다음 실행

보존7항목: (1) 조사회차/조사일과 운영확인시점 분리, (2) 첨부SHA256·공식자료hash·기존ID로 재현, (3) 학생답안/평가/History/원장 UPDATE·삭제없음, (4) auth identity 불변, (5) 자료구조 메타데이터와 학습/금융 사실 분리, (6) 신규 개인정보수집·권한 확대없음(승인대기SQL의 문제PDF SELECT만 명시), (7) 문항 수 일치·초안PASS·일반공개를 별도 상태로 보존.

현재 공개 성과는 이전과 동일: 중앙0/22, 성균 일반접근 검증1/15(2교시), 경희0/17. 성균 DB전체연결2시험·6문항과 회차실평가1시험을 구분한다. 기존최초1/무료0Credit·History·성장비교 결과 재사용. 이 후속작업 Provider0회/추가비용0, 과거 비용NULL은 미확정 유지. 운영WEB b08beb10/Worker e6ffbdb4 보존, 새배포·Secret변경·APP빌드0.

다음: 승인된3시험SQL만 적용→기존소스/설정보존 배포→일반계정공개검증. 중앙 인문 전체 의미/전달 연결과 누락자연6회차의 기존자료 조립은 병행 가능한 독립작업. 수리/혼합형은 부모ID보존·답안단위별근거·단일회차1Credit 계약을 먼저 연결하며 두 평가엔진에 각각Credit을 예약하지 않는다.

### 중앙대 실제 회차 평가 완료 — Paid 반영 후

중앙2026수시 인문사회 `23b818bd-03c0-4226-9dbf-79f1447328c8` 전체3문항 completed, 13:08:02→13:10:55UTC. 최초공식예시답안 재사용, 가상답안생성/평가품질반복0. 일반계정WEB에서 저장·3문항제출·1Credit확인창·종합평가/평가기준/근거·History완료기록·다시써보기/무료재첨삭요청 진입 확인. reserve1→consume1,잔여예약0,가용11→10. 기존ID/정산/기록변경없음.

Provider영수증6(평가3+기존독립검수3), 입력51324/출력6510tokens. cost_amount는6건모두NULL이므로 실제비용미확정이며0으로보고하지않음. 무료재첨삭의신규Provider실행은없다. 기존성균회차무료0/성장비교 성공계약을재사용했고이번중앙은무료재작성자격/진입까지확인했다. 중앙재첨삭E2E신규PASS로표시하지않는다.

기존10회차/30문항 전체연결·PDFhash/접근증거재사용. 이번2026수시 및 이전장애2027일반/창의 모두일반계정Worker승인복구. 전체10회차실평가를반복하지않음. 신규실제평가성공은1회차/3문항. WEBProduction2cc8cd0a(code1c6339b)불변. APP빌드/스토어0. Worker error tail 관찰중추가오류출력없음(장기무장애보장은아님).

잔여표시문제: 평가결과는자동표시됐으나앞서노출된‘평가완료를아직확인하지못했어요’안내문구가함께남았다. History에는정상완료이며정산/결과저장실패아님. 별도최소표시수정대상으로기록,이번에UI/WEB재배포확대안함. Owner화면확인전경영경제작업금지.

복구: 기존Worker53d20942버전으로deployment전환가능하나이전실행한도장애재현가능. 정상3e31db73유지우선. SQL재실행·Secret변경·기존요청새예약우회금지. evidence: text-expansion/central-cpu-limit-candidate.json.

## 2026-10-25 최신 Owner 정책 — 전체 대학 STANDBY

[전체 대학 공통 개발 원칙](https://github.com/LC3808/legendstudy-app/blob/7419d631355a2d59ba8b9e80770747cf26b94589/wiki/essay-batch-service-20261023.md#2026-10-25--전체-대학-standby-공통-정책). 실제 Provider 평가·가상답안·문항별 품질 검수는 STANDBY의 선행조건이 아니다. 전체 회차의 문항/PDF/입력·저장/Registry/공식근거/기존Worker·승인 연결만 완료하고 **STANDBY / OWNER QA PENDING**으로 구분한다. E2E PASS나 Owner검수완료로 표시하지 않는다. 기존 인증·공개승인·Credit·History·Ledger를 보존하며 버튼 강제활성화 금지.

중앙인문10회차·30문항 WEB STANDBY(기존 연결증거 재사용) → Owner확인 → 중앙경영경제 → 경희 → 성균. 다른 대학은 지정 시 진행. 모든유형 공통원칙이며 일괄 공개승인이 아니다. 기존 운영Worker3e31db73/WEB2cc8cd0a 유지, APP수정·빌드·스토어 중단. 이번정책반영 Provider/DB/코드/배포변경0.

## 중앙2026모의 누락 계열 등록 복구

Owner가인문/상경누락지적. 운영resources에는정확문제/해설4개가있으나Registry에자연만존재. 초기등록대상누락으로기존22시험/인문10회차범위에서도빠졌다. 인문대상최소11(기존10STANDBY+모의1미연결)로정정. Owner별도승인후등록SQL2시험/6문항추가, 사전4/사후4true. WEB일반계정2026모의에3계열·두신규계열각3문항입력표시확인. PDF·Worker연결은미완료이며계열복구를STANDBY완료로보고하지않음. 기존정책/Credit/History/자료보존, Provider0. 후보경로: APP supabase/candidates/cau_2026_mock_missing_tracks/.


## 연속 연결 — 경희 Registry 일괄 적용

Owner 승인 후 경희 신규16시험+기존무문항4시험의51문항 등록. 사전2true→apply성공→사후exact_question_sets=true. 기존ID·공개정책·Credit·History·Ledger 변경0. 재실행 금지. 준비자료: 인문·체육11회차/사회13회차. 기존공개인문2회차 보존, 신규STANDBY0. 공식자료 입력 패키지5회차10문항은 준비됐으나 운영 미반영. 중앙경영경제10회차는 기존 Essay/Math의 개별 유료 제출을 단순 결합하지 않고 단일 예약으로 연결하는 계약 보완이 필요하다. 신규Provider/APP빌드/운영배포0.

APP b08a4652d0efd0d557b6396b4f47312cbd2dc447 push/remote 일치. WEB code1c6339b/deployment2cc8cd0a, Worker3e31db73 유지. [후속 SQL·공식자료·보류 원인](https://github.com/LC3808/legendstudy-app/blob/b08a4652d0efd0d557b6396b4f47312cbd2dc447/wiki/essay-group-1a-20261025.md#연속-연결--중앙경영경제경희인문사회).

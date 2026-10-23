## 2026-10-23 22:19 KST 최신 — Service Token 실제 인증 및 서울여 기술 경로 확인

## 2026-10-23 23:40 KST — 일괄512 조립 / 다대학 Owner SQL 대기

157시험512문항/154묶음 초안, 상속423·미상속89, Essay입력22PASS+과거Math1 보존. FULL23/DIAGNOSTIC0/REVIEW489는 중간검수범위. 건국·성균·숭실6시험7문항 pre11/post14 격리PASS·운영pre11true, Owner적용대기. Worker d1036134 준비배포/WEB ff327e92 ca6022b 보존; 신규공개0. SWUrevision3 보존, Q2 pending key 충돌로 제출전차단/차감0. 신규Provider35회 추정USD6.717716·불명1, 누적199회 추정USD20.490748·불명2. 전체서비스 미완료. [전수표·파일·실패명세](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md#일괄-조립다대학-적용-패키지--2026-10-23-2340-kst). 아래 과거 체크포인트보다 이 검증을 우선한다.

Owner4Secret복원 후 기존WEBca6022b를ff327e92로 동일소스 배포. 실제Pages→Worker 인증PASS; 서울여Q1 최초/재첨삭 completed·1/0Credit settled,110→109→109. WEB PDF·평가근거·성장비교·새로고침 없는 History 복귀 확인. GalaxyS8 두기록·4→5성장비교 직접확인, 평가근거Owner확인. 최초부분답안의 소문항(2)누락 미지적은 v17후보6답안 재검증PASS. Q1보완+Q2묶음 revision3 Owner적용·독립사후10true·조회함수일치 확인. READER_BASELINE_CHANGED는 이미 적용된 상태에서 확인됐으며 재실행/롤백 불필요. Q2운영E2E는 다음 작업. Worker3922d417는 기존정책 유지+v17추가. 기존Worker/정책/ID/기록·롤백a8796fb4보존; 운영SQL실행0. 전체Registry237시험700문항, 기존512 중요청연도509·2021경희3보존. 182PDF/154묶음 검사,114추출통과는 운영PASS가 아니다. 전체서비스연결 미완료. [증거](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md#service-token-recovery-and-swu-operating-runs).

아래 항목은 이전 시점의 기록이다.

## 2026-10-23 21:46 KST 최신 — Provider 키 인증 복구 확인

Owner 키 등록 후 배포차단 진단82c2e39f에서 OpenAI 모델목록 HTTP200, JWT3종 인증 재확인PASS. 이전Provider EMPTY_VALUE는 해소됐다. Service Token 실제Worker 인증과 모델별 평가/E2E는 미완료. 정상WEBa8796fb4·pnpm build 보존, Worker/DB/Credit/History 변경·Provider생성0. [근거](../90_HISTORY/REVIEWS/2026-10-23-essay-jwt-lifecycle-review.md#provider-registration-recheck).

## 2026-10-23 21:41 KST 최신 — JWT3개 인증 복구 확인

Owner30일 복구 승인·JWT3/Service Token 등록, Provider 키 유지 보고. 배포 차단 진단7c06ee59에서 Registry200·Math2종400/22023 인증PASS. Service Token은 비어 있지 않으나 실제Worker 인증미검증. **현재 프로젝트 Provider key는 여전히EMPTY_VALUE**; 현재 정상WEB의 별도 바인딩 실패를 뜻하지 않는다. 정상a8796fb4·pnpm build 보존, 신규WEB승격/Worker/DB/Credit/History 변경0·Provider생성0. 서울여/전체512연결은 미완료. [독립검사·잔여범위](../90_HISTORY/REVIEWS/2026-10-23-essay-jwt-lifecycle-review.md#owner-registration-recheck).

아래는 이전 체크포인트이며 위 사후검사 결과를 우선한다.

## 2026-10-23 최신 — JWT30일 복구 후보·갱신 설계 검토

운영 성공로그 기준 Math2종 만료2026-10-30 00:30:23KST, Essay2027-10-14 14:05:09KST. 기존역할/issuer/audience/HS256 유지한30일은 코드상 호환후보, 실제발급·운영acceptance 미실행. eyJ는 토큰이며 서명키가 아니다. 기존 로컬 도구30일 명시옵션/5검사PASS. 만료7일 전 갱신·독립감시·실패알림·신구중첩/롤백은 설계만, 자동화미설치. 현재5Secret빈값 복구와 구분. 정상WEB/키/DB/Credit/History 변경0. [검토·Owner 절차](../90_HISTORY/REVIEWS/2026-10-23-essay-jwt-lifecycle-review.md).

## 2026-10-23 최신 — Owner 기존 서명키 JWT 복구 절차 준비

기존 로컬 발급 도구 재사용: Essay essay_worker/HS256/iss·aud생략/365일, Math 두 전용역할/HS256/iss=supabase/aud생략/7일 유지. 숨김 입력·메모리 서명·읽기 인증 PASS 후 클립보드 복사, Owner가 Pages Production 직접 등록. 합성검사4PASS, 실제 발급/등록0·DB/Credit/History/Provider0. Service Token은 Owner 원문 유지; Math Provider key는 별도 기존값 필요. [Owner 실행 명령](https://github.com/LC3808/legendstudy-app/blob/codex/material-service-app-20261022/tool/cloudflare_essay/OWNER_JWT_RECOVERY.md).

## 2026-10-23 21:11 KST 최신 — 현재 Production Secret5개 빈 값 확정

기존 WEB을 교체하지 않는 Production 빌드 전용 진단0cc2b617에서 Essay Registry JWT/Service Token, Math Evaluation JWT/Extraction JWT/Provider key 모두 **EMPTY_VALUE** 확인. 변수 미주입과 구분했다. 인증 HTTP 미전송(401 아님), Provider0/DB변경0. 진단 exit73으로 새 배포 차단, 정상a8796fb4 및 pnpm build 복원·보존. Owner에게 확인된5개만 기존값 복원 요청; 카카오·토스·결제 변경 제외. 이전9개 전체복원 요구는 이 범위로 정정한다. 복원 후 인증 재검증·서울여 E2E·전체512연결은 미완료. [실행증거·복구절차](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md#current-project-secret-diagnosis--2026-10-23-2111-kst).

## 2026-10-23 최신 — 전체512 일반계정 기본 / 배포 복구 대기

Owner 지시: 일반계정 공개 기본, 기존 Essay/Math와 대학별 프로필 재사용, 전체512문항을 묶음 검증·활성화. Production SQL은 Owner 직접 실행. 512ID와 상속423 재대조PASS,89미상속 유지. 기존5대학7문항E2E/공개3 보존. 서울여 SQL사후15true·입력조립PASS이나 실제운영1/0Credit·신규History·WEB/APP 미완료. [전수 대학별 표·분류 한계](../90_HISTORY/REVIEWS/2026-10-23-essay-batch-service.md).

**복구 필요:** agent의 Pages 설정 PATCH가 마스킹된 Secret값을 재전송했고 신규배포에서503 WORKER_UNAVAILABLE 발생. 이전 a8796fb4로 롤백해 기존 성균 첨삭 버튼 활성 복구 확인. 다음 배포 전 Production Secret9개 기존값 복원 필요, Owner 확인 대기. 결제/Auth 전체 재검증은 미완료이며 설정 보존을 주장하지 않는다. 이번 Provider0/DB변경0; 기존 격리143호출·추산USD11.763768 유지. [오류 원인·영향·복구·필요조치](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md#swu-public-configuration-incident-and-rollback--2026-10-23).

아래는 과거 체크포인트이며 위 최신 상태를 우선한다.

## 2026-10-23 최신 — 11대학 연결 후속 / 서울여대 Owner SQL 사후검증 PASS

성균 일반계정1/0Credit·WEB/GalaxyS8 History와 기존 UI 배포 완료를 재사용한다. UI 추가 수정 없음. 운영E2E5대학7문항/일반공개3문항, 프로필423/512·미상속89 유지. 서울여·숭실 미검증 재작성/대안 실제Provider·독립8항목PASS. 서울여Q1 Worker80e1badb 배포/설정보존PASS·격리SQL11검사/운영사전10true, **Owner 적용·독립 사후15true**. 신규 운영 History 자동반영·1/0Credit·WEB/APP는 적용 이후 미완료다. 경희 대안의 의미과잉진단·항공 인용범위 실패는 v16격리후보 재검증PASS, 회귀/운영승격은 미완료로 운영v15 유지. 이번16호출/추정USD1.276760, 격리누적143호출(142완료/1미확정)/USD11.763768, 실청구미확인·운영Credit0. [11대학표·최신비용·Owner SQL·배포·실패](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md).

아래는 날짜별 과거 체크포인트이며, 이전 공개2/상속387·125/운영5·6 수치를 현재 값으로 사용하지 않는다.

## 2026-10-23 최신 — History 자동갱신·저장된 평가 근거 표시 수정 PASS

성균 Q1 일반계정 실제1/0Credit·WEB/APP History PASS 유지. 복귀/재활성화/주기 History 갱신, 기준별 저장판단·근거참조 표시 수정. WEB a8796fb4/ca6022b·GalaxyS8 build2026102303 실제표시PASS. WEB4·Native26검사·빌드PASS. 기존정책/ID/평가기록·Ledger 보존검증PASS. 추가Provider/Credit0·SQL없음. [상세·검증범위·복구](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md).

## 2026-10-23 최신 — 고려 대표 운영 E2E PASS

## P0 direct execution — Oct23 in progress
Payment UI integrated (APP e40fb38); Flutter3.47.6/Dart3.13.5. Android/iOS Production builds and existing-app physical update installations PASS; actual physical E2E pending. Owner confirms SKKU PDF service-use rights. New7-university quality/SQL/public rollout ongoing; existing4universities6E2E/public2questions unchanged. [Evidence and open failures](../90_HISTORY/REVIEWS/2026-10-23-essay-p0-direct-execution.md).

고려2025수시 인문2 Owner SQL 적용 후 DB전체사후검증 PASS(revision2·단일문항·v12·기존ID/다른정책/submit 보존). WEB 최초/무료재첨삭 completed·독립검수8항목PASS, Credit1/0·잔액97→96, Native iOS Simulator History/결과/4→5비교 PASS. 새실패0, Provider4회/추산USD0.292664(기존격리59회와별도). 기존423/89·공개2 유지, 운영E2E5→6. 문항명/상세근거 표시 잔여 및 실기기 미검증. [실행ID·Ledger·품질·증거](../90_HISTORY/REVIEWS/2026-10-23-korea-operating-owner-sql.md).

## 2026-10-23 공식 평가자료 연결 후속 — PARTIAL

28개 기본체계 유지, 기존387 보존·36추가로423/512상속(미상속89). Production512문항 ID·시험·학년도·유형 대조 일치. 고려 공식해설 전달 누락을 로컬 조립에서 보완하고 v12로 공식반대/재작성2사례 독립검수 PASS; 운영 미적용. 서강2023모의 인문 공식5기준 입력·실제 품질 PASS, 수준 calibration은 별도. 관련44검사PASS. 품질 원장57회·추산USD4.691360(이번16회·USD1.312576), 실청구 미확인. 운영 변경/Credit0, 기존5 E2E·공개 건국2 보존. 문항별 근거·운영확대 미완료. [상세·89문항 실패명세](../90_HISTORY/REVIEWS/2026-10-23-official-answer-quality.md).


## 2026-10-23 현재 — 프로필 PHASE2 PARTIAL

## 최신 체크포인트 — 2026-10-23 프로필 대표3문항 운영 E2E

숙명2025모의1-1 APP 실제 최초·무료재첨삭→WEB, 숙명2026수시1/서강2026모의 경제경영 WEB 실제 최초·무료재첨삭→APP PASS. Credit 각1/0·실패3건0, 관리자잔액97. Worker `6b7593a4`, APP `b1d5b1c`; WEB source ad6ffec 및 config배포17244d3b. 신규3문항 일반공개 확대 없음; Android/iPhone 신규코드 미검증. 전체11대학 PARTIAL, 387상속/125보완 유지. [실제 실행·장애·비용·대학별 범위](../90_HISTORY/REVIEWS/2026-10-23-university-profile-production-e2e.md). 아래 날짜별 상태는 과거 근거이며 이 최신 체크포인트와 구분한다.


기본 진단체계28개 검수(공식 파생 방향과 내부 가이드 분리), 기존150보존·237추가로387/512상속. 미상속125=평가자료 참조누락78+학년도/유형범위47. 문항별 전체 근거·조립5(기존4+서강경제경영1), 최신 기본체계 Essay4입력PASS. 49계약검사PASS, 새Provider/Production변경0. 기본체계 검수와 실제 문항평가 가능은 별개; 전체 PHASE2 PARTIAL. 기존 건국 운영2·UI/Credit/History보존. [범위·실패·검증](../90_HISTORY/REVIEWS/2026-10-23-university-evaluation-profile-phase2.md).


Owner 확정 확대 순서: 누적 **11→22→30→35개 이상**. 현재11대학 PHASE2 우선 완료, 기존 작업 재수행 없이 프로필 재사용·신규 대학 평가체계 추가. 대학별 대표 실제E2E 후 정상 문항부터 반영. [로드맵](../90_HISTORY/REVIEWS/2026-10-23-university-evaluation-profile-strategy.md).

## 2026-10-23 — 대학별 첨삭 프로필 PHASE 1 설계 완료

Owner 전략18d5b70을 기존 서비스계약과 대조. 기존Essay 가변criteria, Math 버전profile/기존scope 재사용. private revision JSON→문항공식근거우선합성→기존검수package/Math context가 권고안. 새테이블/RPC/Worker 기본제안없음; 프로필후보30+는공식검수확정수가아님. 적용학년도자동확장/숫자부분점수추정금지.

[전체 명세·예시·11대학표·파일목록·위험](../90_HISTORY/REVIEWS/2026-10-23-university-evaluation-profile-phase1.md). PHASE1문서PASS, 구현/운영검증은이번범위아님. Production schema/ACL SELECT만 수행, 배포/Provider/Credit/DB쓰기0. 기존활성2문항보존. Owner검수전PHASE2진행금지.


## 2026-10-23 E2E 통과 건국대 2문항 공개 연결 — 전체 PARTIAL

Owner P0 실행 승인에 따라 기존 성공 E2E를 반복하지 않고 건국 인문2번/자연1번만 일반 로그인 사용자 실행 범위로 연결했다. 나머지 문항은 HOLD. 서버 Auth·문항별 정책·소유권·Credit/History 계약을 유지한다.

- WEB 실제 Production: `ad6ffec`, Pages `eda6c546-e618-492f-b4cf-3527824736c9`. Worker `9df2da12-f9d9-4dd1-ad18-c0f0fd3ed90a`. 인문 q2 제출 버튼·q1 HOLD, 자연q1→기존Math입력/문제/History 화면 실제 확인.
- 서버 설정은 정확한 인문 exam/Math leaf만 공개 허용. Math catalog/admission 기존 함수와 runtime_control만 최소 갱신. 71702/새 테이블/RLS 변경 없음. 시험237/문항700/Ledger45/Math답안14의 ID해시·133RLS·함수ACL 보존. 원복 SQL은 APP `supabase/candidates/math_konkuk_public_release/rollback.sql`; 원복은 실행 OFF/함수복구이며 답안·결과 삭제 없음.
- WEB 선택17·서버71·Worker11·APP6 관련검사 및 Typecheck/Lint/Boundary/WEB Build/Flutter analyze/iOS Simulator Build PASS. WEB과 Simulator에서 대학→동일 canonical 문항→기존Math 화면 진입 PASS. 새APP 물리기기/Android 설치 검증은 미완료. 로그인 검증계정 API 실측을 별도 신규 일반계정 E2E로 확대하지 않음.
- 이번 활성화 변경의 Provider 추가호출0/Credit추가거래0. 기존 운영 인문10호출/보수USD0.972644, 수리3호출/보수USD0.181868 재사용. 실청구액과 구분. 최초1/재첨삭0·양방향History 성공 근거는 앞선 기록 유지.
- 숙명2025모의 인문1-1 기존 accepted_source_runtime 준비기를 재사용하여 공식근거4/내부진단축7/공식이미지2를 해시대조했다. 기존 학생답안/이미지는 새입력에 포함하지 않음. 아직 Provider권리/운영policy/package 연결·E2E 미완료이므로 공개0.
- 다른10대학 검수된 운영평가패키지·대표실제E2E 미완료. 페이지 연결만으로 공식기준검수/첨삭가능을 PASS 처리하지 않는다. 경희/동국 추가자료 HOLD, 결제/IAP/스토어 변경 없음.

증거(비공개): `phase3-20261022/activation-20261023/` readiness/config/rollback, `/private/tmp/konkuk-web-canonical-math-entry.png`, `/private/tmp/konkuk-app-canonical-math-entry.png`. 실제 E2E는 기존 검증계정·WEB/iOS Simulator 범위. 전체11대학 서비스는 PARTIAL.
## 2026-10-22 — iPhone12 Pro Max 불일치 해결 / Owner 실측 PASS

## 2026-10-22 PHASE 3 — 연결 PARTIAL / 일반 AI HOLD

Owner APP 실기기확인 후 기존Essay/Math로 로컬연결.512문항중430문항2772평가페이지연결보존,82문항연결보완필요. 검수된운영패키지·정책미설정으로신규11대학실제운영평가는HOLD. Native기기초안/WEBHistory상태조회/Math기존수정재사용. Owner 총7회/$5 승인 후 실제7회/$0.6167로3품질사례PASS(실청구미검증), 재작성ID오류는입력enum최소수정후재검증PASS. 최종검증은 [상세기록](../90_HISTORY/REVIEWS/2026-10-22-phase3-service-connection.md). Production/실Credit/배포불변.

- 설치 앱0.1.0(1)과 검증 Simulator1.0.0(2026102201) 불일치. 현 로컬 실기기 build에서 Supabase URL/key·REVIEW_READ_ONLY dart-define 누락 확인. 설치 전 바이너리 소스SHA는 미내장으로 미확정, RLS오류로 추정하지 않음.
- 제품코드96830e22 그대로 검증설정/버전 명시해 iphoneos 빌드, 동일Bundle ID·서명으로 삭제 없이 업데이트. 설치1.0.0(2026102201) 확인. Owner “최신 시험과 PDF 모두 표시됨” 회신 PASS. Native6/6·3/3페이지 렌더로그 확인; 전체512문항 물리기기검증으로 확대하지 않음.
- 결제/Provider/DB/Storage/Store 업로드 없음, AI HOLD. HTTP 상태·세션 진단은 실기기 연결종료 전 수집 못했으므로 별도 PASS 주장 없음. 재발 방지: 기존 local define 파일과명시version을 사용하고 bare flutter build/run 금지.
- APP 상세 `wiki/native-material-pdf-20261022.md#iphone-mismatch-investigation-owner-p0`; 비공개 증거 `app-connection-20261022/iphone-mismatch/`.

## 2026-10-22 — Flutter Native 자료·PDF 연결 / Owner APP 검수 대기

- Owner가 KAU WEB `1638d9c` 검증 수용, APP 단계 승인. 경희·동국 WEB 추가보강은 보류하며 정상자료 보존.
- APP 후보 `96830e2`: 기존71701·SourceCatalog·pdfrx·인증 Storage 재사용.11대학157시험512문항 실제 metadata와 WEB ID 일치, 승인485문항153PDF 연결. 성균관27문항 권리HOLD.42 Catalog 및 서비스준비16후순위/서울우선/가나다순 유지.
- 관련35tests·Flutter analyze·Android APK/iOS Simulator 빌드 PASS. Android emulator와 iOS Simulator 각각11대학 최신시험/계열/문항 선택,10대표 PDF 실제 렌더·시작페이지·다음페이지 PASS. 플랫폼별10캡처 시각확인.512문항 전수렌더/물리기기검증으로 확대하지 않음.
- 검증 앱1.0.0+2026102201은 REVIEW_READ_ONLY=true. 기존 로그인 세션 재사용, Provider·DB쓰기·Credit 차단. 초기 테스트 도구 기본버전 downgrade 및 종료시 uninstall로 Android 로컬로그인 초기화2회; Owner 재로그인 후 fixed prebuilt/keep-app-running으로 해결. 정상 앱 복원, 운영 데이터 변경없음.
- Production WEB/DB/Storage/RLS/71702/결제/인증/AI상태 변경0, Store18 보존. APK 및 Simulator zip 생성, Store/TestFlight 업로드 없음. iOS Simulator zip은 실제 iPhone 설치파일이 아님.
- Owner 실제 APP 검수 전 AI 연결 금지. 후속 WEB HOLD: 경희2021·2022수시/2023~2025수시·모의/2026모의, 동국2022~2024수시/2025모의(파일명우선·기존ID정정 필요).
- 상세 APP wiki `wiki/native-material-pdf-20261022.md`. 비공개 증거/빌드: `~/development/legendstudy-materials/essay-validation-2026-10/app-connection-20261022/`. 원본·화면·키·학생정보 GitHub 미업로드.

## 2026-10-22 — 한국항공대 승인 WEB 배포 / 신규12문항 실제 렌더 PASS

- Owner 배포 승인 후 WEB `1638d9ceb17dedfae5263d40a6e501652591ca01` Production 승격. 실제 Pages ID `08cd3e51-79ff-4017-bdac-8f97f21f1f1d`; 직전 `ca7dd361`/`289bdef5-bf30-4137-af9a-8dc672dbf4cd` 복구 지점 보존.
- 한국항공대 2022·2023 수시 공학·사회·이학 6시험12문항 모두 로그인 운영 Chrome에서 선택→정확한 문항ID→문제 보기→PDF 시작페이지 실제 렌더 확인. 12개 화면 및 contact2장 시각 확인 PASS. 28페이지 전체 운영 스크롤 검증으로 확대하지 않음; 기존 로컬 전체페이지 검수 재사용.
- 기존 항공대2024~2026 9시험18문항 보존, 현재 전체15시험30문항. 신규6PDF 해시검증 및 exact authenticated policy153파일 유지. Backend/Cloudflare 전체 설정 전후 동일, AI버튼12개 비활성. Provider/Credit/APP/71702 미실행.
- 관련17tests·Typecheck·Lint·Build·Boundary·GitHubReady PASS. 기존500개 WEB 매핑 보존, 신규12개만 추가.
- 후속 Owner 결정: 한국항공대 운영 검증 수용, APP 자료 연결 승인. 경희대·동국대 WEB 보강은 보류. AI 단계는 Owner APP 확인 전 금지.
- 비공개 증거: `~/development/legendstudy-materials/essay-validation-2026-10/expansion-20261022/kau/production-web/`. PDF원본·학생정보·설정값 GitHub 미업로드.

## 2026-10-22 — Owner 서울여대·서강대 PASS / 한국항공대 승인 등록

- Owner가 서울여대·서강대 Production WEB 검수 PASS 확인. 기존 정상 자료 재처리하지 않음.
- 한국항공대 2022·2023 수시 6시험12문항·학생용6PDF(28페이지/3.20MB) 지정 승인 후 시험별 등록·Storage 업로드 및 다운로드 해시 확인 PASS. 기존 전체231시험688문항 및 Credit35건의 행 해시 보존. 기존 항공대9시험18문항 보존.
- private bucket 및 기존 account_service_allowed 조건 유지. 기존 authenticated SELECT 파일147→153개만 확장. 정책 총133개 유지. 격리 권한검증 authenticated153/blocked0/anon0. Production anon 목록15시험30문항 확인; API PASS를 WEB 렌더 PASS로 간주하지 않음.
- WEB 후보 `1638d9c`: 기존500문항 PDF매핑 보존, 신규12문항만 추가. 관련17tests/Typecheck/Lint/Build/Boundary/GitHubReady PASS. 기존 로컬12문항 뷰어·28페이지 검증 재사용. Production은 `ca7dd361`; 신규 WEB 배포 별도 승인 대기.
- 동국대는 Owner 지시에 따라 파일명 학년도 우선. 새2025모의 원본이 기존2026모의2시험6문항과 동일하므로 기존ID 보존 학년도정정 명세 준비; 아직 Production 수정하지 않음. 경희대 요청 연도 보강 준비 계속.
- APP·AI·Provider·Credit·71702 미착수. AI HOLD 및 성균관대 권리 HOLD 유지.
- 비공개 상세: `~/development/legendstudy-materials/essay-validation-2026-10/expansion-20261022/kau/production-result.md`, baseline/transfer/local SQL/뷰어 증거. 원본·학생정보·키는 업로드하지 않음.

## 2026-10-22 — 승인된 1차 WEB 보강 배포 및 운영 검증

- Owner 승인 후 WEB `ca7dd361367a09408ee7972e54e1cfbd28c46374`를 Production 배포. Pages ID `289bdef5-bf30-4137-af9a-8dc672dbf4cd`; 이전 known-good `f1478612` / `a3d5a58e-3de1-433e-90bb-486f6590808e` 보존.
- 범위: 서울여대 2023~2025 수시 9시험18문항9PDF, 서강대 2023~2025 모의 14시험14문항14PDF의 기존 승인 등록분 WEB 매핑; 서울 소재·가나다순·준비 대학 후순위 기본 정렬. DB/Storage 재등록 없음.
- 로그인된 실제 Production Chrome에서 23시험32문항 각각 선택, textarea 문항 ID 대조, 문제 보기, 정확한 시작 페이지 및 PDF 내용 렌더 확인. 32개 첨삭 버튼 비활성. 실제 운영 페이지 전부 스크롤 재검사는 아님; 84페이지 기존 로컬 시각 검수 재사용.
- 서강대 첫 자동 캡처는 PDF 문서 로드와 canvas 실제 그리기 시점 차이로 빈 화면을 조기 저장. PASS 근거에서 제외하고 실제 내용 픽셀 및 화면 시각 확인 후 14개 증거 교체. 제품 코드 수정 없음.
- Production 대학 전체보기 42개, 첫 건국/경희/고려, 마지막 준비 대학 홍익 확인. Credit 표시 9 유지(거래 실행 없음). Backend/Gateway diff 0; Gateway SHA256 `d0640668a83904f966d98dd1da584734c09cad0fe4f12c7b72d3dba83a9020ab`. Cloudflare 배포 전후 전체 설정 동일.
- 기존 41 관련 테스트/Typecheck/Lint/Build/GitHubReady PASS 재사용. 코드 변경 없이 승인된 동일 빌드 배포. Provider·Credit·APP·71702 실행 없음. 성균관대 권리 HOLD 유지.
- 비공개 증거: `~/development/legendstudy-materials/essay-validation-2026-10/expansion-20261022/production-web-20261022/`의 results.json, 문항별 화면, contact-0~3.jpg, catalog.png. 원본/학생정보/키는 Wiki에 첨부하지 않음.
- 이번 1차 배포·32문항 운영 시작 페이지 렌더 PASS. 전체 보강 사업은 PARTIAL; 나머지 대학 준비 계속. Owner WEB 확인 전 APP·AI 단계 금지.

## 2026-10-22 — 누락 보강 1차: 서울여대·서강대 승인 등록 / WEB 후보 검증

Owner 승인 신규23시험32문항23PDF 등록·해시검증 완료. 기존 데이터/ID/AI HOLD 유지. WEB 후보에 PDF연결과 서울·가나다순 기본정렬 반영, 관련41tests·Typecheck·Lint·Build·GitHubReady PASS. 현재 Production은 f1478612이며 새 후보 미배포. 전체 추가보강은 PARTIAL, 나머지 대학 명세 준비중. OwnerWEB검수 전 APP·AI 미착수. [세부·근거](../90_HISTORY/REVIEWS/2026-10-22-student-problem-pdf.md).

## 2026-10-22 — 학생용 PDF 승인 범위 Production 연결 완료

Owner 승인 범위인 10개 대학 441문항·124PDF를 Production에 연결했다. 기존 51파일 재사용, 문제 전용 73파일 업로드. 로그인 WEB에서 441문항 각각 PDF 열기·정확한 시작 페이지 확인 PASS. 성균관대 27문항·9PDF는 권리 확인 전 공개 HOLD이며, 실제 화면 차단도 확인했다. 전체 판정 PARTIAL, Owner 최종 WEB 검수 대기.

- 현재 WEB 소스 `f1478612b09f91978be089d5f48954f843c9208e`, Pages deployment `a3d5a58e-3de1-433e-90bb-486f6590808e`.
- 기존 시험·문항 ID, 비공개 자료 정책, Backend/Gateway, 운영 설정 및 AI HOLD 보존. APP·첨삭 단계 미착수.
- 전체 468문항 시작 페이지 매핑, 로컬 133PDF·691페이지 검증 완료. 운영 441문항 시작 화면 검증과 모든 페이지의 운영 시각 검사는 구분한다.
- 초기 배포의 공개 빌드 환경변수 누락을 실제 화면에서 발견해 88a4c6b로 복구했다. 기존 운영 공개 변수로 재빌드 후 위 최종 배포 및 전수 검증 완료. 운영 환경변수·바인딩 자체 변경 없음.
- [대학별 결과·검증 범위·복구 이력](../90_HISTORY/REVIEWS/2026-10-22-student-problem-pdf.md).

## 2026-10-22 — 추가 원본 확인: 468문항 PDF 후보 준비

원본 미확인12문항의4파일 SHA-256 일치 확인, 기존 ID로 연결. 468문항/133PDF 로컬 준비 및 문항별 로딩 확인. 원본 미확인0; 전체 페이지·서비스 통합 검증 및 Production 반영은 미완료. AI/권리 HOLD 유지. [상세](../90_HISTORY/REVIEWS/2026-10-22-student-problem-pdf.md#추가-원본-4개-확인--누락-12문항-해결).

## 2026-10-22 — 11개 대학 문제 PDF 로컬 준비 PARTIAL

468문항 중456문항/129 PDF 연결 후보 준비. 기존 WEB 뷰어 로컬456문항 로딩 및129 PDF 첫 화면 시각 확인. 전체 페이지 브라우저·운영 렌더 PASS 아님. 원본 미확인12문항 별도 명세. 공개·Storage 승인 게이트 전부 PENDING, 성균관대 권리 HOLD. Production88a4c6b·기존 데이터·AI HOLD 유지, DB/Storage/배포/APP 변경 없음. 관련18tests·Typecheck·Lint·Build·Boundary PASS. [상세 및 비공개 검수 위치](../90_HISTORY/REVIEWS/2026-10-22-student-problem-pdf.md).


## 2026-10-22 — Owner 승인 WEB 복원 후보 Production 배포

Owner가88a4c6b 배포 후 검수를 승인했다. 배포 전 실제 Pages Production28c9dbb/8c234d9e-0129-4944-bafa-2771c3e95b5f 확인. 기존 직접 Pages 경로로 out+Functions 배포, Git main 병합 없음.

- 소스 SHA: `88a4c6ba5ffaf2abefa5da9782828f5ed087c25b`.
- 실제 Production deployment: `643fc68f-823a-4dfd-a440-dca8ca43e93e` (Pages deployment list의 Production/main/source88a4c6b 확인).
- https://lab.legendstudy.com 실제 새 학년도·시험 UI 확인. 기존69tests/Node22 Typecheck/Lint/Build/Boundary/GitHubReady 결과 재사용, 불필요한 재실행 없음.
- Wrangler config download 배포 전후 전체 구조·값 동일. 이전 known-good 설정과도 동일. Runtime/바인딩/인증/AI HOLD 유지. Secret 값 출력/변경 없음.
- Backend/Gateway 변경 없음. DB/Storage/71702/Provider/Credit/Payment/IAP/JWT/APP 변경 없음. 이번에는 답안 제출 요청 자체를 실행하지 않았으며503 재호출 PASS를 새로 주장하지 않음.

### 실제 운영 브라우저 결과

|대학|확인 학년도·시험|guest / 기존 로그인|문항·작성 진입|원문|
|---|---|---|---|---|
|한양|2024수시·모의|PASS / PASS|수시 인문 오후2 단일문항 PASS|승인 PDF2·3페이지 실제 렌더 PASS|
|건국|2026·2025·2024수시·모의|PASS / PASS|guest자연4문항 / 로그인인문2문항 PASS|공식 자료 링크, 내부 원문 PARTIAL|
|숙명|2027모의·2026수시·2025모의|PASS / PASS|2027모의인문2상위문항 PASS|공식 자료 링크, 내부 원문 PARTIAL|
|성균관|2027모의·2026수시·2025수시·2023모의|PASS / PASS|2027모의수리3문항 PASS|공식 자료 링크, 내부 원문 PARTIAL|
|경희|2027모의·2026수시·2022모의·2021모의|PASS / PASS|2027모의사회2문항 PASS|공식 자료 링크, 내부 원문 PARTIAL|
|서울여|2026수시|PASS / PASS|인문2문항·1→2전환 PASS|공식 자료 링크, 내부 원문 PARTIAL|

로그인 검증은 기존 Owner 세션이며 신규 일반 학생 계정/권한을 생성하지 않았다. 기존 한양대 로컬 답안이 보존되어 표시됨을 확인했으며 내용은 변경·기록·업로드하지 않았다. 모든대표경로 첨삭 서비스 준비 중 비활성. 상단 공식링크만 유지, 기출선택이 일정 앞에 위치. 42개 대학 전체보기, 페이지보기 복귀,2/4→동국대→목록→2/4 실제PASS. UI 자동화의 전체보기 checkbox 선택은DOM button이라 실패 후 실제button으로확인, 제품오류아님.

11개전체128시험468문항 및 과거등록 포함25대학188시험656문항의 전수선택은 앞선 snapshot component 증거이며, 이번 새배포 브라우저는 대표6대학 실측이다. 360px/200% 기존 증거 재사용, 이번 재실측 없음. 전체 원문·자료연결 완료 또는 서비스E2E PASS로 확대하지 않음.

판정: 배포 PASS, 대표6대학 운영선택/작성UI PASS, 한양대 승인PDF PASS, 전체 신규원문 PARTIAL, 실제첨삭 HOLD. Owner WEB 직접검수 대기. Owner확인 전 APP/첨삭 작업 금지. 복구대상8c234d9e 보존, 롤백실행 없음. 비공개 로컬증거 `/private/tmp/legendstudy-ui-deploy-88a4c6b/` (설정파일 포함하므로 GitHub 업로드 금지).


## 2026-10-22 — Claude P0 WEB 복원 후보 / 배포 승인 대기

Owner의 최신 PHASE1 지시만 수행. 한양대 운영 로그인 화면에서 기존 승인 PDF·작성 UI가 사라진 현상을 확인했다. 한양대 Catalog UUID는 정상이며, 로그인 전용 published 필터/별도 선택기가 승인 PDF descriptor를 버린 것이 원인이다. 기존 SourceExamSelection·SourceExamWriter를 guest/login 공통으로 재사용했다. exact 시험 UUID+문항 UUID 집합이 일치할 때만 기존 승인 콘텐츠를 결합한다.

- 서울여대·한국항공대 Catalog의 null UUID만 71701 실측 ID로 보완. DB 변경 없음.
- 학년도·시험 통합(단일 선택도 수시/모의 명시), 기출 선택을 일정 앞에 배치, 중복 공식 버튼·장문 검수 안내 삭제, 첨삭 서비스 준비 중 회색 비활성 유지.
- 한양대 상단 링크를 실제 브라우저에서 확인한 공식 연도별 기출 목록으로 변경. 기존 특정 2025모의 게시글 출처는 보존. 2024·2025·2026 수시 기출이 목록에 있음을 확인.
- 42 Catalog/order 유지. 공개 71701 실측 25대학188시험656문항(11대학128/468 포함). 기존 과거 등록분도 동일 선택 경로 사용. 기존 20개 문항 없는 시험은 RPC 결과 제외 상태이며 삭제 아님.
- 전체188시험656문항 선택 snapshot 테스트 포함50개, 기존 writer/discovery/materials 등19개 PASS. 링크 수정 후 영향12개 재확인. Node22 Typecheck/Lint/Build, Boundary/GitHub Ready PASS.
- 실제 로컬 브라우저: 한양대2024수시인문오후2 문제 보기 버튼·작성 진입·합성 답안 로컬 저장·비활성 CTA 확인. 로컬 API는 공개 응답 캡처 fixture이며 liveRPC/auth/PDF 렌더 검증이 아니다. 운영 로그인 PDF 렌더·대표6대학 변경 UI 실측은 배포 승인 후 확인해야 한다.
- 운영 Production은 기존28c9dbb/8c234d9e-0129-4944-bafa-2771c3e95b5f 유지. 후보88a4c6b, branch codex/material-browse-release-20261022. functions/src/server 변경0, 승인Gateway 해시 동일. DB/Storage/71702/Provider/Credit/Payment/IAP/JWT/APP 변경0. AI HOLD 유지.

### 범위별 판정

11개 대학의 기존 운영 메타데이터 화면 실측은 직전 기록을 재사용한다. 이번 새 UI는 로컬 테스트 PASS / 운영 미배포다. 한양대 승인 PDF의 실제 로그인 렌더는 아직 미검증이다. 신규 전체 문제 원문은 여전히 PARTIAL: 공개 승인된 본문/PDF가 없으면 상단 공식 자료실로 안내하며, 모든 문항에 대응하는 원문을 확인했다는 의미가 아니다. 기존 대량 자료5,664 archive entries/134분류 게시글 조사 재사용; 원본↔DB UUID 전체 대조는 미완료이며 미등록 총수를 추정하지 않는다. 데모/Mock 경로는 기존 명시 상태로 분리 유지, 대학 선택 경로에는 연결하지 않는다.

다음: 후보 WEB 배포 별도 Owner 승인 → 기존 환경/Backend 보존하여 배포 → guest/login 대표6대학·한양대 승인 PDF 실측 → Owner WEB 직접 검수. 회귀 시 직전 배포8c234d9e로 복구하며 데이터는 변경하지 않는다. Owner 확인 전 APP/첨삭 단계 금지.

## 2026-10-22 — 후순위16 대학 CTA 로컬 완료

WEB/Flutter 서비스 준비중 회색·비활성, 기존 자료/공식링크/42 Catalog/순서 유지. 관련 WEB35/Flutter8 테스트PASS. Production·스토어 미반영, 기존 AI HOLD 유지. 다음 서비스 완성 작업은 계획만 기록했으며 실행하지 않음. [상세/다음 계획](../90_HISTORY/DAILY/2026-10-21-service-integration.md#owner-후순위-대학-cta--2026-10-22-실행--10-21-지시).

## 2026-10-21 — 건국대 실제 Provider 품질 검증 PARTIAL

기존 OpenAI/Reviewed Worker/Math 경로로 실제25회(인문15·수리10) 실행. 완료23건 usage요율 추산$2.0007006, timeout2건 최대예약$0.62034 별도; 청구총액 미확인. 승인35회/$30 안에서 인문15회 세부한도 도달로 중단. 키체인키는 메모리만 사용, 원문/답안/키/응답은 Git미포함.

인문: 우수답안 타당성 인정, 보통답안 수정후 독립검수8항목PASS. 미흡/논점이탈에서 사건순서·기억상실 과장 발견, 재작성은 이력계약PASS이나 분량불확실성 안내 검수FAIL. 전체품질PASS 아님. 실제 발견한 level0→기존1~5계약 불일치 및 Provider 답안해시 오복사에 대해 transport schema 범위/ID고정. 기존v3 보존, 로컬후보v6/독립검수2에 인용정확성·사건순서·resolved이력 연결 명시. Production미적용.

수리: 정상·정답만·계산오류·부분풀이·개념오류·재작성 구분. 개념미분오류 CALCULATION 오분류는 최소prompt보완 후 CONCEPT_SELECTION 확인. 40초timeout2건은5분lease안75초로 로컬조정 후 영향사례만 성공. 합성인쇄이미지8영역 판독은 확인했지만 실제손글씨/6장실측PASS 아님. 반환된 실제수리최초/재첨삭 결과의 격리PG17 기존SQL 재생25체크PASS(저장·조회·lineage·테스트Credit1/0·중복방지·타인차단). 온라인연속E2E와 구분. 초기구버전SQL harness실패 후 기존runtime/learning SQL을 격리에 포함해 해결.

Python34/WEB50 관련테스트·Typecheck·변경Lint PASS. Production쓰기·배포·Credit0, DRAFT/공개HOLD 유지. 남은BLOCKER: 인문사실정확성/분량안내, 실제손글씨·이미지확정연속흐름, 인문SQL History/WEB·APP 운영E2E, 운영package/policy 및 DRAFT제약. 유료서비스 준비PARTIAL/HOLD.

비공개근거: `essay-validation-2026-10/건국대/service-20261021/quality-20261021/quality-report.md`, `call-ledger.json`, `math-actual-output-history.json`. Provider대시보드 청구액 검증 전 실제총비용확정 주장 금지.

## 2026-10-21 — 건국대 Provider 품질 확대 승인 / 실행 대기

Owner 승인은 기존8회/$4를 대체하여 인문15회·수리20회·합계35회, 총US$30이다. 기존 승인분 실제 실행 기록0회/$0; 이번에도 Provider호출0, Production쓰기/Credit0. 재승인 요청이 아닌 기존키의 안전한 로컬 접근 경로 확인 대기. 환경의 Provider키 변수 및 해당 작업폴더 설정파일이 없고, 기존 성공은 Cloudflare secret binding에 의존한다. 운영Secret 추출·설정변경으로 우회하지 않는다.

기존 공식입력·Worker/Math 계약 재사용. 비공개12사례 검증표 준비: 인문5수준(평가+독립검수10호출), 수리7유형(판독+평가14호출), 기본24호출 및 필요 시 잔여11호출 범위. 재작성은 실제 피드백 후 작성한다. 인문 항상성은 가산요소, 수리 등급별 숫자점수 미확정은 임의 배분하지 않는다. 손글씨 실측과 합성 이미지 테스트를 구분한다.

gpt-5.6-sol 공식 Standard 단가 입력$4/출력$20 per1M 재확인. 호출당 총입력30k(이미지포함)/출력12k 검증 조건에서35회 추산$12.60, 승인상한$30. 아직 입력별 토큰 검증·실행transport 연결은 미완료. 호출·사용량·비용 ledger는 비공개 경로에 준비; 미확인 비용은0으로 간주하지 않는다. 실제 품질·재첨삭·History NOT_ASSESSABLE, 서비스 PARTIAL/HOLD. 기존 Mock PASS를 대체하지 않는다.

비공개 산출물: `essay-validation-2026-10/건국대/service-20261021/quality-20261021/manifest.json`, `call-ledger.json`. 원문/답안/계정정보/키는 Wiki에 포함하지 않음. 다음: 승인된 Provider 자격증명 접근 경로 확인 후 제한된 실제 호출 시작. Production 패키지/binding 및 Math DRAFT 제약은 기존대로 유지.

## 2026-10-21 — 건국대 실제 Provider 실행 준비 PARTIAL

기존 DRAFT14행 등록과 코드·격리DB 테스트 결과 재사용. 이번에는 운영 조회와 실행계획 작성만 수행; Production 쓰기·Provider·실제Credit·배포0.

- 인문2026수시2번: 기존 `/api/essay/exam` → ReviewedRuntimeWorker 경로 재사용. 실제 runtime_policy 없음, review NEEDS_REVIEW, 운영package 없음. 기존 provider_policy는 Hanyang만 지원. 공식 입력 패키지 검수·권리 및 건국대 한정 binding 준비가 필요하며 임의 활성화하지 않음.
- 수리2026수시자연1번17점: 기존 Math 이미지/판독/확정/평가 경로 재사용. 운영 resolve_profile은 set/problem/profile ACTIVE를 요구하므로 DRAFT 유지 상태의 운영 제출은 차단되는 것이 정상. 차단 우회나 새 Migration 없음.
- 기존 승인 테스트 계정과 과거 성공run 관계 확인. 실제 로그인 세션은 미검증. 공개 availability는 모든 유형false, AI HOLD 유지. 계정정보·잔액·UUID는 비공개 실행계획에만 보관.
- 권장 승인안: 격리환경 실제 Provider 품질·계약 검증. 인문 최초/재첨삭 평가+독립검수4회, 수리 최초/재첨삭 판독+평가4회, 최대8회. 운영 Credit0, 운영 DRAFT/HOLD/History 불변. 운영 WEB/APP E2E로 판정하지 않음.
- gpt-5.6-sol Standard 공식가격 입력$4/출력$20 per1M 기준, 각 호출 총입력30k 이하(이미지환산 포함)·출력12k 이하일 때 총추산$2.88, 승인예산안US$4. 입력 상한·기존 안전한 자격증명 접근·모델/가격 확인 불가 시 실행 중단. 실패/타임아웃도 호출한도 포함, 자동 추가호출 없음. 가격 근거: https://developers.openai.com/api/docs/models/gpt-5.6-sol
- 결과/History는 격리DB·비공개 산출물에 저장. 기존 run/lease/checkpoint/receipt 복구 재사용; 불명확 응답에서 새requestKey·임의환불 금지. 향후 운영 두 문항 최초평가는 합계2Credit, 재첨삭 추가0이나 이번 범위에서 실행하지 않음.

실제 Provider 실행은 Owner 별도 승인 대기. 운영 E2E는 패키지/정책·DRAFT 조건으로 HOLD. 비공개 상세: `essay-validation-2026-10/건국대/service-20261021/provider-e2e-execution-plan.md`.

## 2026-10-21 — 건국대 Math DRAFT 등록 승인 적용 PASS

Owner 별도 승인 범위14행만 Production 적용: 세트1·문제1·소문항1·출처4·profile1·criterion1·solution1·step4. 기존 자연2026시험/문항 ID 보존. 상태열4개 DRAFT, 시험inactive·문항unpublished 유지. 동일내용 검증 포함 단일 트랜잭션 성공. 신규ID 중복없음.

기존 Math/논술 시험·문항/답안·평가/시험History/Credit·결제/Storage/근거/runtime control 및 RLS·ACL 등31개 비교 항목 건수·전체행해시 전후 동일. 정책132개 유지. 대상8테이블 anon/authenticated 직접SELECT 차단. 합성subject catalog조회는 ACCOUNT_RESTRICTED; 실제회원 조회PASS는 아님.

DRAFT등록 PASS와 실제서비스 PARTIAL을 구분. Migration/Provider/실제Credit/WEB·APP배포/공개활성화 없음. 다음: 인문 운영입력 binding·검수/권리, 실제Provider 실행범위 준비. 비공개 근거 `essay-validation-2026-10/건국대/service-20261021/production-draft-postflight.json`.

## 2026-10-21 건국대 대표 서비스 연결 — LOCAL PARTIAL

운영 READ-ONLY: 건국대21시험58문항 유지, 대표 자연시험 Math세트0. 자료 재등록 없음. 인문2026수시2번(60점) 공식5기준 private cache, 수리2026수시자연1번(17점) 기존 Math DRAFT14행 연결 후보를 준비했다. 원문은 비공개 로컬 산출물에만 보존한다.

기존 한양대 Worker/제출/History, 기존 Math SQL/서버/Native UI 재사용. WEB·APP 지정leaf가 승인catalog에 없으면 다른 문항으로 대체하지 않도록 수정. APP6장·순서·삭제·부분업로드 재시도 연결. WEB 출력 CALCULATION→기존DB COMPUTATION 변환 결함 수정, 알 수 없는 종류 차단.

WEB 관련15테스트/Typecheck/Lint/Build/Boundary/Ready PASS. 인문 공식입력 Worker Mock2회 및 재실행 PASS. Math 정확한DRAFT SQL 재실행/롤백+기존SQL 권한·Credit·History 등27검증 PASS. Flutter8테스트/analyze/Androiddebug/iOSsimulator 빌드 PASS. 개별 Mock·격리DB 검증은 실제 Provider/실기기/운영교차History PASS가 아니다.

다음: Math 비공개DRAFT14행 등록 별도 Owner 승인 요청. 인문 운영reviewed cache/권리/binding, 일반사용자 탐색→제출, 실제 Provider 계정·모델·비용/Credit 범위 확정 필요. Production·두Migration·Provider·실제Credit·WEB배포·스토어 변경 없음, 전체AI HOLD. [상세](../90_HISTORY/DAILY/2026-10-21-service-integration.md#건국대-대표-서비스-연결--local-partial).

## 2026-10-21 건국대 최근 3개년 보완 등록 — PARTIAL

Owner가 신규15시험40상위문항·32PDF·288근거를 검수 상태 등록 승인. Production 적용 완료:15시험40문항,32PDF/30,773,381bytes,18검수/288근거. 기존193시험616문항/98검수 전체행 digest 전후 동일. 기존2026모의3시험8문항은 ID 재사용·48근거 보완. 건국대 전체21시험58DB문항. 신규active0/published0, AI HOLD·private bucket·일반사용자 private schema 접근차단 유지.

WEB 관리자 목록21시험58문항 실측,2024수시자연A4문항24근거 및 PDF1개 렌더 확인. 잔여31PDF 렌더 미검증. 페이지 근거 연결과 평가 본문 준비는 별개: 추출 본문/공식출처·이용권한/수식·소문항 검수 미완료. 일반 사용자/APP/Provider E2E PASS 아님.

LAB `codex/konkuk-service-20261021`에서 기존 선택 UI에 수시/모의 구분 추가(동일 학년도 혼합 방지, 유형 변경 시 이전 답안 선택 초기화). 관련6테스트,Typecheck,변경파일Lint,Boundary,Node22/pnpm11 정적빌드 PASS. UI 로컬 변경만;Production 배포 없음. 기존 성공 Math/인문 경로 재사용 방침 유지. 건국대 Math 콘텐츠 패키지/leaf binding 및 공식 평가 입력 준비는 여전히 미완료. Migration/Provider/Credit/APP업로드 미실행.

상세: [통합 일지](../90_HISTORY/DAILY/2026-10-21-service-integration.md). 비공개 산출물은 `essay-validation-2026-10/건국대/expansion-20261021/`; 원본·답안·PDF를 Wiki/Git에 포함하지 않음.

## Oct21 existing-success-path correction

Hanyang Oct14 real Production humanities text initial/rewrite/History/Credit success
reused. Sookmyung Sep28–30 real private image/model-quality experiments are not deployed
WEB/History/re-evaluation success. Konkuk math Q1 needs existing Math content/leaf/profile
binding (live problem_sets0); no new engine/History. Math-only route can reuse existing
schema; generic essay-question bridge remains separate. Both migrations and all Production
writes prohibited by latest Owner correction. Konkuk Mock E2E not yet run; AI HOLD.

# Oct21 Production Migration 사전 검증
기존 조건부 적용 승인 유지. 서비스 데이터·Storage 복구 검증 재사용, 예약 작업 2개 정의 복구 PASS(격리 비활성). Vault 암호문은 격리 복호화 실패로 전체 복구 PARTIAL; Migration 2개 미적용. 운영 Vault 정상. 건국대 2026 수시 자연 1번 원본·해설·기준·수식 확인 완료, 대표 선정. 해당 시험 Math 연결 레코드 없음; 실제 연결/E2E 미완료. [근거](../90_HISTORY/DAILY/2026-10-21-service-integration.md).

# Oct21 서비스 DB 계약 — 로컬 구현 / Production 미적용
- Catalog42개 범위의 메타데이터 전용 조회 및 기존 WEB 선택 연결 준비.
- 기존 Math 확정 입력→시험 제출 snapshot 계약 및 문항 FK 준비. 매핑 자동 생성 없음.
- 격리 PG17 19검증 PASS. Provider·실제 Credit·Production 변경 없음; 일반 사용자 HOLD.
- 실제 이미지 입력 handoff/E2E 및 운영 적용은 미완료. [상세](../90_HISTORY/DAILY/2026-10-21-service-integration.md).

# 한국항공대 Production 사후 검증 — PARTIAL (WEB 잔여)
2026-10-21 Owner 승인 범위 적용.
- 비활성 kau 대학 1행, 신규 9시험·18상위문항, PDF 9개 4,090,775bytes, 평가자료108건 및 검수9건 등록 확인.
- 9개 시험별 트랜잭션 성공. 2027 모집요강 제외. Storage 비공개. 신규 active/published 모두0, NEEDS_REVIEW9건/approval_requested=false.
- 기존184시험 전체행해시 cc15fe5458230ba41e44e1c40ce0e2a6, 기존598문항 해시 0bd01941acb2d13db3e394d18e00ebf0 전후 동일. 전체 RLS정책해시 f3dd6e80283ef821a9054cbdae15a07c 동일.
- 기존 대학ID·Catalog42개·순위 코드 변경 없음. 기존 학생답안/History 수정 SQL 없음.
- WEB 목록9시험 확인. 상세:2026공학/사회/이학 및2025공학 4시험8문항 선택·근거 연결, 해당4PDF 실제 렌더 확인. 검수완료/Evaluation Package 비활성.
- 잔여5시험10문항/5PDF:2025사회·이학,2024공학·사회·이학. 브라우저 다중 검증 호출 시간초과로 결과 확보 못함. 완료 추정 금지, 재등록 불필요.
- 문제 본문 추출 입력란 비어 있음 경고는 기존 검수 상태. 페이지근거 연결과 AI 평가 가능 상태는 다름.
- 수리12·사회1 추출이상 및 공식출처·이용권한 후속. 원본 수정 없음. Provider/Credit/Payment/IAP/JWT/스토어 변경 없음.

# 11개 대학 Phase 1 집계 — DB/Storage 완료, WEB 잔여

|대학|신규 시험|신규 문항|비공개 PDF|평가 연결|DB/Storage|WEB 상세/PDF|검수 필요|AI|
|---|---:|---:|---:|---:|---|---|---|---|
|가천대|17|166|39|1158|PASS|PASS(기존 결과 재사용)|공식오류 5문항 및 기존 검수|HOLD|
|건국대|3|10|5|90|PASS|PASS(기존 결과 재사용)|수학 추출 7문항|HOLD|
|경희대|8|31|18|171|PASS|PASS(기존 결과 재사용)|수식 20문항·채점표 번호 1건|HOLD|
|고려대|10|30|4|180|PASS|PASS(기존 결과 재사용)|기존 검수·출처 후속|HOLD|
|동국대|10|30|14|180|PASS|PASS(기존 결과 재사용)|수식 12문항·공식 오류·모의 학년도|HOLD|
|서강대|9|13|9|78|PASS|PASS(기존 결과 재사용)|기존 추출·검수 후속|HOLD|
|성균관대|7|21|14|126|PASS|PASS(기존 결과 재사용)|수리 추출 12문항|HOLD|
|숙명여대|7|18|20|124|PASS|PARTIAL: 잔여6시험16문항/17PDF|수리 12문항|HOLD|
|숭실대|15|40|16|239|PASS|PARTIAL: 잔여11시험30문항/13PDF|수식24·글자수1·해설미확정1|HOLD|
|서울여대|2|5|2|30|PASS|PASS(기존 결과 재사용)|수식3·출처/권리|HOLD|
|한국항공대|9|18|9|108|PASS|PARTIAL: 확인4시험8문항/4PDF, 잔여5시험10문항/5PDF|수리12·사회특수문자1·출처/권리|HOLD|

총 [97, 382, 150, 2484] (시험/상위문항/PDF/평가자료 연결). PDF 수는 대학별 등록 문서 수 합계. 기존 완료 대학의 검증 결과 재사용; 이번 실측은 한국항공대만.

WEB 잔여 합계22시험56문항35PDF. Phase1 전체 WEB PASS는 아직 아님. 전체 AI HOLD. Phase2 이후 Production 변경/Provider/공개 별도 승인.

## 2026-10-21 서울여대 Production 기본 탑재 — PASS

## 2026-10-21 한국항공대 등록 준비 — 승인 대기
- 2024~2026 수시 공학·사회·이학: 신규 9시험·18상위문항, 비공개 PDF 9개(4,090,775 bytes), 평가자료 연결 108건. 2027 모집요강 1개 제외.
- 기존 Production 대학/시험 일치 레코드 조회 0건. Catalog kau 식별자에 맞춘 비활성 대학 1행 추가 승인 필요.
- 수리 12문항 및 사회 특수문자 1문항 추출 이상, 공식 출처/이용권한 확인 후속. 전체 NEEDS_REVIEW·AI HOLD.
- 로컬 PG17 등록·재실행·RLS·실패 롤백·기존 fixture 보존 PASS. Production 미변경. WEB 미실행.
- 산출물: 로컬 essay-validation-2026-10/한국항공대/fast-load. 원본/문항 본문/비공개 평가자료 Git 업로드 없음.



- 승인 범위 비활성 대학1행(swu),2026수시 인문사회 오전/자연 오후2시험5상위문항, 비공개2PDF1,214,006bytes, 평가자료30건 등록·실측 확인.
- 소문항은 원본과 페이지근거 내 인문4+자연9=13개 보존. 별도13행이나 수학13개를 생성하지 않음. 원본 수정 없음.
- 기존182시험593문항 전체행 해시 및RLS정책 해시 전후 동일. 기존대학ID·42대학 탐색목록·노출순서 코드 변경 없음. swu 중복0→비활성1행. 신규문항공개0/시험inactive·review/검수NEEDS_REVIEW 유지.
- 실제WEB2시험5문항 선택·근거 조회 및PDF2개 실제 렌더 PASS. 검수 완료/Evaluation Package 비활성. 자연3문항 수식추출불량·본문추출·공식출처·권리는 후속검수; 정밀검수/AI품질PASS 아님.
- 비공개Storage 유지. Provider/Credit/결제/Auth/스토어/학생답안/History 변경 없음. 일반사용자AI HOLD.
- 누적 신규88시험364문항 등록. 숙명6시험16문항17PDF/숭실11시험30문항13PDF WEB대기 유지.
- 한국항공대 기존10PDF 조사·해시 재사용으로 준비 시작. 별도 Production 승인 전 쓰기 금지.

## 2026-10-21 서울여대 등록 준비 — OWNER_APPROVAL_PENDING

- 기존2PDF 조사/해시 재사용. 2026수시 인문사회 오전1시험2상위문항, 자연 오후1시험3상위문항: 신규2시험5상위문항(13소문항 포함). 비공개2PDF1,214,006bytes/평가자료30건 준비.
- Production read-only 대학/시험/문서해시 중복0. 서울여대 대학행 부재, 탐색Catalog swu universityId=null 확인. 기존스키마에 비활성 대학1행 추가를 승인범위에 포함. 기존42대학 목록/ID/우선순위 변경 없음.
- 자연3문항 수식추출불량 NEEDS_REVIEW, 공식게시글·이용권한/정밀검수 후속. 대표 도표·수식·채점표 원본렌더 확인. AI HOLD 유지.
- 로컬PG17 등록/재실행/기존fixture보존/anon·authenticated 비노출·쓰기차단/RLS불변/실패배치rollback/메타데이터복구 PASS. 30근거 페이지·중복검사 PASS. 실제Production/WEB검증과 구분.
- 시험별2트랜잭션 및 상태·참조guard 복구안 준비. 성공분 보존·미완료만재개, 대학행/연결PDF 자동삭제 금지. Production 변경·Provider·Credit 실행 없음. Owner 승인 대기.
- 숙명여대6시험16문항17PDF/숭실대11시험30문항13PDF WEB대기 유지. 한국항공대 미착수.

## 2026-10-21 숭실대 Production 등록 — PARTIAL (WEB 잔여)

- Owner 승인15시험40문항, 비공개16PDF8,790,496bytes, 평가자료239건/검수15건 실제 저장 확인. 시험별15트랜잭션 성공, 합본/가이드북5개 제외.
- 기존167시험553문항 전체 행 및132 RLS정책 해시 전후 동일. 기존2022수시1시험2문항/ID 보존. bucket 비공개·신규공개문항0·전체AI HOLD 유지.
- WEB 신규15시험 목록 확인. 상세4시험10문항(2027모의3계열 및2026수시경상) 선택·근거 조회, PDF3개 실제 렌더 PASS. 남은11시험30문항/13PDF는 별도 대기. LAB홈 화면 전환으로 반복 조작 중단; DB/Storage 재등록 불필요.
- 수식추출24문항/글자수병기1건/독립해설미확정1건 검수 필요 유지. 본문 추출 입력란 비어 있음 경고는 PHASE2/3 후속; 페이지 근거 연결과 평가 가능 상태를 구분. 검수 완료/Evaluation Package 비활성.
- 서울여대 기존2PDF 조사·해시 재사용으로 준비 시작(2026수시 인문사회 오전/자연 오후 후보). 등록 수·중복·명세 확정 후 별도 승인, Production 미실행.
- 숙명여대 WEB대기6시험16문항/17PDF 유지, 성균관대 잔여 없음. Provider/Credit/Payment/IAP/JWT/스토어 변경 없음. 원본·비공개 평가자료 Git 업로드 없음.

## 2026-10-21 숭실대 등록 준비 — OWNER_APPROVAL_PENDING

- 기존21PDF 조사/해시 재사용. 2024·2025·2026수시 및2025·2027모의 각3시험8상위문항: 신규15시험40문항. 기존2022수시 인문1시험2문항·ID 보존(read-only 확인).
- 비공개16PDF8,790,496bytes, 평가자료239페이지연결. 합본/가이드북5파일 재수록 제외. 2027가이드북을2027수시시험으로 생성하지 않음. 신규ID/문서해시 중복0.
- 수식추출불량24문항,2025모의인문2 글자수병기,2024수시인문1 독립해설 미확정(해설1연결보류). 전체 NEEDS_REVIEW/AI HOLD, 원문변경 없음.
- 로컬PG17 등록/재실행/기존fixture보존/anon·authenticated 비노출·쓰기차단/RLS불변/실패배치rollback/메타데이터baseline복구 PASS. 근거239건 ID·페이지·중복검사 PASS. 원문 정밀검수·운영WEB검증과 구분.
- 시험별15transaction 및 참조guard 복구안 준비. 성공배치·파일 보존, 검수연결 후 자동삭제 금지. Production 등록은 별도Owner승인 대기. 원본·추출문·PDF는 Git에 포함하지 않음.
- 숙명여대 WEB대기6시험16문항/17PDF 유지. 성균관대 WEB잔여없음. Provider/Credit/결제/인증/스토어 변경 없음.

## 2026-10-21 WEB 검증 병목 분리 및 숭실대 준비

- Owner 지시에 따라 브라우저 연결 재시도 중단. 숙명여대 WEB 잔여6시험16문항·17PDF는 별도 로컬 체크리스트로 관리. 실제 WEB 완료 판정은 PARTIAL 유지.
- 성균관대는 기존 사후 보고와14개 렌더 증거 확인:7시험21문항/14PDF 완료. 잔여 없음, 재검증하지 않음.
- 숙명여대 read-only DB:7시험18문항/검수7건/평가자료124건/Storage20PDF8,622,774bytes 확인. 전체 신규시험 inactive·review, 공개문항0. 비공개bucket 유지.
- HTTP 비인증 RPC401, 공개URL20개400으로 파일 미반환. 인증된 전체 RPC 상세/파일 다운로드 E2E는 NOT_ASSESSABLE; SQL 조회나 비인증 차단을 API/WEB 렌더 PASS로 대체하지 않음. 신규 인증키·권한 우회 없음.
- 숭실대 등록 명세 준비 착수:21PDF 기존조사·해시·추출문 재사용, 분류초안 생성. 기존2022수시 인문1시험2문항 확인·보존. 신규 등록 건수/중복제외/복구안 아직 미확정, Production 별도승인 필요.
- 기존 DB/파일 변경·재등록·Provider/Credit/Payment/IAP/JWT 작업 없음. AI HOLD 유지.

<!--
DOCUMENT_STATUS: CANONICAL
SCOPE: PROJECT
LAST_VERIFIED: 2026-10-04 (PRICING-UX-CLEANUP-1D: legendstudy-lab feat/pricing-ux-cleanup @ f84b81e merged into main 3370dad and released to Production, PRODUCTION_VERIFIED on the live site; Math LAB consumer MATH-RELEASE-CLOSEOUT-1 (MATH-3B…7B) @ 6dec4f98887cee2e7c661996e083289b853054b3 local-verified 405 tests, PRODUCTION_NOT_APPLIED; all other domains retain their cited verification unchanged)
VERIFICATION_BASIS: PRICING-UX-CLEANUP-1D Production release legendstudy-lab main @ 3370dad08ad4042046d158f56fd1d38f778c9e26 (merge of f84b81e; lint/typecheck/137 tests/boundary audit/static-export build PASS before push; live /pricing/ HTTP200 with all sections in order, 4 disabled 구매하기 buttons, comparison table and shared footer absent, desktop/360/320/200% no horizontal overflow; no Payment/Toss/Supabase/Credit change); PRICING-UX-CLEANUP-1D LAB pricing closeout legendstudy-lab @ f84b81ec19009e77b63a6fe22811ecf820eaf7bb (lint/typecheck/137 tests/boundary audit/static-export build PASS; desktop/360/320/200% no horizontal overflow; read-only — no Payment/Toss/Supabase/Credit change, no Production write); MATH-2E APP @ cd215a6d88c0f72e59d06478bf4727ed676ca5f9 (L01–L40/63 learning +131 Math +37 runtime +102 Humanities/HQP PASS; C14/D8/E10 installation checks; NOT_APPLIED); MATH-2D APP @ 17e528b6b58b4c910c3f16f73be5fb1638a8bbdc (C01–C30 +131 Math +102 legacy PASS;8 runtime/14 base installation checks; NOT_APPLIED); MATH-2C APP @ 015b800aa501c93b54fcce65ebd3ef3dabdb56de (131 Math +102 legacy +14 installation/rollback checks PASS; R21 Storage runtime NOT_ASSESSABLE; Production NOT_APPLIED); MATH-2R APP @ 104f3ef97b043b861c1b4133f9a2d2ae2196c45b (shared integration contract complete; no implementation or DB connection); MATH-2B APP @ a6a696fe1f8990b2c36746377731c5814b968bb9 (documentation review; read-only catalog ledger23/no Math collisions; ACCEPT_WITH_CORRECTIONS; no implementation); ADR-2D APP @ 59e14eb76e24dd178d042c8eddeca14bd670f1b5 (non-superuser local apply/rollback;112 lifecycle+17 ownership;105 HQP;48 Deno;7 Flutter PASS; failed Owner attempt FULLY_ROLLED_BACK; NOT_APPLIED); historical ADR-2C APP @ 3ae802edfd3ab539587854059b9da07137caa7ee (111 isolated SQL;48 mocked Deno;7 Flutter; rollback/analyze PASS; read-only ledger23/ADR-2 absent; Production NOT_APPLIED); historical ADR-2 APP @ 4f92b58c967895de3769236e0cc5c2698d2b509b (97 isolated SQL assertions;21 mocked Deno;7 Flutter; rollback/analyze PASS; Production NOT_APPLIED); HQP gateway @ cbd80c90f5b104dc50e9d1a961f73d48849ce52e (actual JWT boundary PASS; Owner reports applied/tracked23; successful write NOT_ASSESSABLE); HQP-3 @ 9f78dc66bd4cc75efed45ec8d928af2abc297acb (105 isolated PG17 checks PASS; Production NOT_APPLIED); HQP-2 APP canonical review @ 38ebbf6ee511bb5ef343af82e90d14acf71b6ffc (historical review; E1/E2 subsequently resolved for HQP-3); UWA-1B bottom-up audit (legendstudy-app @ 2ebec8d); LSA-2 / LSA-2C Quality authorization closeout 2026-10-01; day_targets correction (migration 20260930000100); LEC-1/2/3 LAB Quality Console v0 closeout 2026-10-01 (legendstudy-lab claude/quality-console-v0 @ 325a112, PUBLIC; local lint/typecheck/test/build PASS; Production detail runtime NOT_ASSESSABLE); HQP-1 Human Quality persistence design 2026-10-01 (legendstudy-lab claude/quality-console-v0 @ b9cff1b, PUBLIC; design/plan only — no SQL/migration/Production change); HQR-1 Human Review Console v1 2026-10-01 (legendstudy-lab claude/quality-console-v0 @ ce9d04e, PUBLIC; write/read UI consuming 20261001000200; 160 tests + lint/typecheck/boundary/static-export PASS; Production operator write NOT_ASSESSABLE; no backend change)
BOOTSTRAP_INSPECTED_REFS: legendstudy-app main @ d07671e (local, read-only); legendstudy-lab claude/intelligence-school-architecture @ 94d5d61 (LOCAL_ONLY / REMOTE_UNAVAILABLE; read-only)
CORRECTION_REFS: APP codex/essay-scaffolding-vnext @ 2ebec8d (PUBLIC); docs main baseline @ 0dce101; LAB proposal @ 94d5d61 (LOCAL_ONLY / REMOTE_UNAVAILABLE)
CORRECTION_BASIS: Owner-approved UWA-2D following UWA-2C independent review; APP canonical evidence @ 2ebec8d
SUPERSEDES: —
SUPERSEDED_BY: —
-->

## 2026-10-21 숙명여대 Production 등록 — PARTIAL (WEB 잔여 검증)

- Owner 승인 범위 신규7시험18상위문항(36소문항 포함), 비공개PDF20개8,622,774bytes, 평가자료124건/검수7건 실제 저장 확인. 시험별7트랜잭션 성공, 합본1개 중복 제외.
- 기존160시험535문항 및132 RLS 정책 해시 전후 동일. 기존숙명2025모의1시험4문항/ID 보존. 비공개bucket public=false, 신규공개문항0, 검수7건 NEEDS_REVIEW/승인요청false. 수리12문항 검수필요 및 AI HOLD 유지.
- 실제 WEB 신규7시험 목록 노출 확인. 2027모의 인문2문항 선택·근거 조회 확인. 문제PDF(SM12) 3/4쪽 실제 렌더 PASS. 추가로 해설PDF(SM14) 11/14쪽 및 총평PDF(SM09) 2/3쪽 실제 렌더 PASS. 누적 PDF3/20개 PASS, 나머지6시험16문항/17PDF 실제검증 미완료.
- Chrome 탭 전환 및 전용탭 연결 시간초과로 검증 중단. Owner에게 LAB검수탭 유지 요청. 기본탑재 PASS 미선언, 숭실대 미착수. 검수 완료/Evaluation Package 생성 비활성 확인.
- DB 재등록/재업로드 불필요. Provider/Credit/Payment/IAP/JWT/기존학생답안/History 변경 없음. 원본 변경·GitHub 업로드 없음.

## 2026-10-21 숙명여대 등록 준비 — OWNER_APPROVAL_PENDING

- 기존21PDF 조사/해시 재사용. 신규2026수시4시험10상위문항,2027모의3시험8상위문항: 총7시험18상위문항(36소문항 포함). 기존2025모의1시험4문항/ID 보존, 신규 시험 식별 및 문서SHA 중복0(read-only).
- 비공개20PDF8,622,774bytes, 평가자료124페이지연결 준비. 인문합본1개 중복 제외(40쪽 텍스트/렌더 픽셀 일치). 총평·우수답안을 공식 채점기준과 구분하여 추가 연결.
- 자연12문항 수식추출불량 NEEDS_REVIEW. 공식게시글/권리 및 정밀 내용검수 후속. 미공개/AI HOLD 유지.
- 로컬PG17 등록2회·기존fixture보존·anon/auth 차단·RLS불변·rollback복구 PASS. 시험별7트랜잭션/상태·참조guard 복구안 준비. Production 쓰기·업로드 미실행, Owner 별도승인 대기.

## 2026-10-21 성균관대 Production 기본 탑재 — PASS

- 승인 범위 7시험·21문항, 비공개 PDF 14개(8,604,459 bytes), 평가자료 126건/검수 7건 저장 확인. 합본 2개 중복 제외.
- 기존 153시험·514문항 및 132 RLS 정책 해시 전후 동일. 기존 DB 사후 검증 결과 재사용. 이번 잔여 검증에서는 DB/검수 상태를 변경하지 않음.
- 기존 WEB 2시험·6문항/PDF 3개 증거를 보존하고, 잔여 5시험·15문항 및 PDF 11개의 실제 조회·렌더 완료. 누적 7시험·21문항 조회 PASS / PDF 14개 렌더 PASS. 각 파일의 연결 페이지 표시를 확인했으며 PDF 전 페이지 정밀 내용 검증을 의미하지 않음.
- NEEDS_REVIEW/승인요청 false/신규 21문항 unpublished 유지. 검수 완료 및 Evaluation Package 생성 비활성 확인. 수리 12문항 수식 추출 불량, 본문 추출 미연결 및 공식 출처·권리 대조는 PHASE 2/3 후속. AI 품질 PASS 아님.
- Provider/Credit/Payment/IAP/JWT/학생답안/History 변경 없음. 일반 사용자 AI 첨삭 HOLD 유지.
- PHASE 1 누적 7개 대학 64시험·301문항 기본 탑재 PASS. 숙명여대 기존 21PDF 조사 재사용으로 등록 명세 준비 시작. 숙명여대 Production 등록은 별도 Owner 승인 필요.

## 2026-10-21 성균관대 등록 준비 — OWNER_APPROVAL_PENDING

- 기존16PDF 조사/해시 재사용. 2026수시 수리1·2·3/언어1·2교시5시험15문항, 2027모의 수리/언어2시험6문항. 신규7시험21상위문항, 비공개14PDF8,604,459bytes, 평가자료126페이지연결.
- 문제합본25페이지/평가보고서83페이지가 개별파일과 동일하여 중복2PDF 제외. 보고서 과학인재 면접은 논술범위 제외. Production 기존8시험6문항/ID 보존 대상, 신규 동년·유형 및문서SHA중복0.
- 수리12문항 수식추출불량 NEEDS_REVIEW. 기존2025 시험 문항수 메타데이터와 실제행 차이는 후속조사. 원본 권리제한/공식게시글 대조 필요 유지. 정밀검수/AI품질 PASS 아님.
- 로컬PG17 등록2회/기존fixture보존/anon·authenticated차단/RLS불변 PASS. 7개 시험별SQL·상태/참조guard 복구안 준비. Production 쓰기·업로드 미실행, Owner 별도승인 대기. AI HOLD, Provider/Credit/결제/인증 변경 없음. 숙명여대 미착수.

## 2026-10-21 Claude 대학 목록 UX 통합 — PASS (미배포)

- LAB 기존 codex/gachon-official-page-20261020의 d20ccd9에서 Claude 54f40e18ec3811cd5d9db23a8fb68db1a57a5876으로 fast-forward. d3b7da8 포함, 충돌0/재작성0, 원본 커밋 보존.
- 전체보기/페이지 보기 및 상세 복귀 시 검색·필터·정렬·페이지 상태 복원 구현 사용. UI 재설계 없음. 변경7파일은 기존 Claude UX/테스트에 한정; 서버·권한·Credit 및 이미지6장 계약 보존.
- Node22.23.2/pnpm11.25.0, frozen-lockfile offline 의존성 확인. Typecheck/Lint PASS, 144 test files/1,150 tests PASS·3 SKIP(2 files), Boundary PASS, Production static Build PASS. sandbox compile 대기 중단 후 동일코드 일반 로컬 실행에서 성공.
- 이번 검증은 자동 테스트/정적 빌드이며 실제 브라우저 E2E 신규 실행으로 보고하지 않는다. 이전 실측 증거와 구분. Production 적용은 별도 Owner 승인 필요.
- main 병합/Production 배포/DB/Provider/Credit 변경 없음. 일반 사용자 AI HOLD. 서강대 PDF9개/78연결 등록 완료, WEB 최종검증 대기 상태 및 자료 탑재 순서 유지.

## 2026-10-21 서강대 Production 기본 탑재 — PASS

- 승인 신규9시험13문항, 비공개PDF9개(2,815,556bytes), 검수9건/평가자료 페이지연결78건 실제 저장 확인.
- 기존144시험501문항 행·ID 및RLS 해시 보존. 신규공개문항0, NEEDS_REVIEW/승인요청0, 일반사용자 AI HOLD.
- 로그인된 Production WEB 검수 화면에서 신규9시험 및13문항 선택·근거조회, PDF9개 실제 렌더 확인. 검수 완료/Evaluation Package 생성 차단 유지. 비공개 화면 증빙은 로컬에만 보관.
- 본문추출 미연결13문항, 자연계6문항 수식검수 등은 PHASE2/3 후속. 기본탑재 PASS이며 정밀검수/AI품질 PASS가 아님. 학생답안·History 쓰기 및 Provider/Credit/결제/인증 변경 없음.
- PHASE1 누적6개대학57시험280문항 기본 탑재 PASS. 성균관대 기존16PDF 조사·해시 재사용 준비 IN_PROGRESS, 시험/문항수 미확정, Production 별도승인. 11개대학 완료 후 DB 선택 UI 연결 일정 유지.

## 2026-10-21 Owner 후속 지시 — DB 선택 UI 연결 (PHASE 1 완료 후 우선)

- 현재 대학별 신속 탑재를 계속하며, 11개 대학 기본 탑재 완료 후 우선 조사·보완한다. 서강대 등록 승인 대기 상태는 변경 없음.
- Owner 보고: 가천대·고려대·국민대 등 일부 대학에서 학년도·유형·계열·문항 선택 UI 연결 문제. 원인/영향 범위는 아직 실측 미완료이며 확인된 코드 결함으로 단정하지 않는다.
- 실제 Production DB와 기존 WEB 선택 컴포넌트의 조회 계약을 대조하고 Source Registry/DB의 역할을 구분한다. 등록된 시험·문항을 기존 UI에 연결하며 새로운 선택 화면은 만들지 않는다.
- 선택·조회 가능 상태와 AI 첨삭 가능 상태를 분리한다. 기존 데이터·ID·평가 권한 및 일반 사용자 AI HOLD 유지.
- 변경 전 Claude WEB UX 최신 브랜치·수정 파일을 확인해 충돌을 방지한다. Production 변경은 별도 Owner 승인 후 진행한다. 이번 기록으로 코드/DB/배포 변경은 하지 않는다.

## 2026-10-21 서강대 등록 준비 — OWNER_APPROVAL_PENDING

- 기존13PDF 조사/해시 재사용. 최신 후보9시험13상위문항: 2026모의3/3, 2026수시4/8(자연1·2차 분리), 2027모의2/2. PDF9개2,815,556bytes, 평가근거78페이지연결.
- 실제 DB 기존2024모의1시험1문항 및 ID 보존 대상, 신규 중복0. 보고서/가이드북 재수록2026수시4시험8문항 중복 생성 제외. 모집요강2개 제외. 가이드북2024/2025수시8시험16상위문항은 11개대학 기본탑재 후 과거자료 연결 대상으로 분리.
- 수식 추출 불량6문항 NEEDS_REVIEW. 전수 정밀검수/AI품질 PASS 아님. 로컬PG17 2회 적용·기존행 보존·RLS/anon/authenticated 보호 PASS. Production 쓰기/업로드/WEB 사후검증 미실행.
- 시험별 트랜잭션·실패배치 롤백/성공배치 보존·참조 확인 복구 계획 준비. Owner9시험13문항/9PDF/78연결 승인 대기. 모든 신규AI HOLD, Provider/Credit/결제/인증 변경 없음. 비공개 근거는 로컬 검증 폴더에만 보관.

## 2026-10-21 동국대 Production 기본 탑재 — PASS

- Owner 승인10시험30문항, 비공개14PDF(5,323,192bytes), 평가자료 페이지연결180건 등록 완료. 시험별transaction 및 검수body10/10 승인명세 일치.
- 기존 동국대6시험18문항 포함 전체134시험471문항 ID·행 해시 보존. 기존68문서/39검수/55이력 및132 RLS정책 해시 전후 일치. 신규 활성시험0/공개문항0/anon조회0.
- WEB10시험30문항 직접 선택·페이지근거 조회, PDF14종 canvas렌더 확인. NEEDS_REVIEW 및 Evaluation Package 생성 차단10/10 확인.
- 자연계12문항 수식추출불량, 2025수시자연2 공식시험오류·전원정답처리·수정본 기록 유지. 모의학년도 공식게시글 대조 미완료 유지. 본문추출·정밀검수·AI품질 PASS 아님. 전체 AI HOLD.
- Provider/Credit/Payment/Toss/IAP/JWT/스토어빌드 변경 없음. 학생답안/History 쓰기 없음.
- PHASE1 누적5개대학48시험267문항 기본 탑재 PASS. 서강대13PDF 기존조사 재사용 준비 IN_PROGRESS, 신규건수 미확정·Production 별도승인.

## 2026-10-21 동국대 등록 준비 — OWNER_APPROVAL_PENDING

- 기존14PDF 조사 재사용. 2025수시3시험9문항, 2026수시3시험9문항, 2026/2027모의 각2시험6문항: 합계10시험30문항. 비공개14PDF5,323,192bytes, 페이지근거180건.
- 기존Production2022~2024모의6시험18문항/ID 보존. 신규연도·유형 및PDF SHA중복0. 모의해설 재수록12문항은 별도 생성하지 않음.
- 자연계12문항 수식추출불량. 이 중2025수시자연2는 공식자료가 실제시험오류·전원정답처리/용어수정본임을 명시하여 별도 기록. 모의학년도 공식게시글 및출처웹페이지 검증보류. 전수정밀검수 PASS 아님.
- 로컬PG17 등록/재실행/기존fixture/RLS/권한 PASS. Owner승인 후10시험별transaction/실패배치rollback/기존행보존 및 WEB조회검증 예정.
- Production DB/Storage 쓰기 없음. 모든문항 NEEDS_REVIEW/AI HOLD. Provider/Credit/Payment/IAP/JWT/스토어빌드 변경 없음.



> 아래 기록은 최신순입니다. 이전 승인대기·준비 상태는 이력이며 가장 최근 대학별 결과를 우선합니다.

## 2026-10-21 고려대 Production 기본 탑재 — PASS

- Owner 승인 10시험·30문항, 비공개 PDF 4개(5,554,897 bytes), 평가자료 페이지 연결 180건 등록 완료. 시험별 10개 트랜잭션 성공, 검수 body 10/10 승인 명세 일치.
- 기존124시험441문항 전체행 해시·ID 보존. 기존문서64/검수29/이력45 전체행 해시 및132 RLS정책 해시 전후 일치. 신규시험 inactive/review, 문항 unpublished, anon조회0.
- PDF 4개 SHA 식별자·페이지수(8/12/129/143)·Storage크기 일치 및 private bucket 유지. WEB 10시험30문항 직접 선택/근거조회, PDF4종 canvas렌더 확인. NEEDS_REVIEW 및 Evaluation Package 생성 차단 확인.
- 자연계20문항 수식추출 불량, 모의학년도 공식게시글 대조 미완료 기록 보존. 정밀검수·AI품질 PASS 아님. 일반사용자 AI HOLD.
- Provider/Credit/Payment/Toss/IAP/JWT/스토어빌드 변경 없음. 학생답안/History 테이블 쓰기 없음.
- 동국대 준비 IN_PROGRESS: 기존14PDF 조사 재사용 시작. 2025/2026수시 계열별 합본6개, 2026/2027모의 문제·해설8개. 시험·문항 및 DB 중복 확정은 진행 예정, Production 등록 별도 승인.



## 2026-10-21 Owner 로드맵 확정 — PHASE 1 진행 중

- 11개 대학 기본 탑재 → 전체 오류/Owner 검수 → 기존 Shared Backend 첨삭 연결 → WEB/APP 최종 UX → 실제 서비스 E2E → 추가 약10개 대학 확장 순서로 진행.
- 가천대·건국대·경희대 기본 탑재 PASS 보존. 고려대 10시험30문항/비공개4PDF/근거180건 등록 준비 완료, 별도 Production 승인 대기. 로드맵 자체를 등록 승인으로 해석하지 않음.
- PHASE 2–6 완료 미선언. 기존 완료 작업은 재사용하며 오류를 분리 기록. 일반사용자 AI HOLD 및 기존 개별 승인 경계 유지.
- 상세: [Owner 로드맵](../90_HISTORY/OWNER_DIRECTIVES/2026-10-21-essay-lab-completion-expansion-roadmap.md).



## 2026-10-21 고려대 등록 준비 — OWNER_APPROVAL_PENDING
- 기존8PDF 조사 재사용, 동일SHA중복1/참고3 제외. 신규10시험30대논제: 2025모의2/6, 2025수시4/12, 2026수시4/12. 비공개4PDF5,554,897bytes, 근거180건.
- Production 기존고려시험0/문항0, 파일hash중복0. 로컬PG17 재실행/기존fixture/RLS/권한 PASS.
- 자연계20문항 추출불량 및 모의학년도 공식게시글 대조 미완료 기록. 정밀검수/AI품질 PASS 아님. 모든문항 NEEDS_REVIEW/AI HOLD.
- Production 쓰기 전 Owner승인 대기. 기존원본·Provider·Credit·Payment·IAP·JWT 변경 없음.


## 2026-10-21 경희대 Production 기본 탑재 — PASS

- Owner 승인8시험31문항·비공개PDF18개5,282,571bytes·근거171건 등록 완료. 검수body8/8 및 파일메타18/18 일치.
- 기존116시험410문항 전체행 해시/ID 및 RLS·private bucket 설정 전후 일치. 신규31문항 중복0/공개0, anon 조회0.
- 실제 Owner WEB8시험31문항 및 PDF18종 렌더 확인. NEEDS_REVIEW/오류메모 표시, 검수완료·Evaluation Package 생성 비활성.
- 합본3개 추출기 페이지 누락 발견: 실패 제목배치 rollback 후 PDFium/WEB 실제 페이지 기준 연결보정. 원본 수정 없음.
- 수식추출20문항·채점표번호불일치1건 검수 유지. 평가용 본문/권리/정밀검수 미완료이며 AI품질 PASS 아님. 일반사용자 AI HOLD.
- Provider/Credit/Payment/Toss/IAP/JWT/스토어빌드 변경 없음.
- 고려대 준비 IN_PROGRESS: 기존8PDF 조사 재사용 시작. Production 등록 별도승인.


## 2026-10-21 경희대 등록 준비 — OWNER_APPROVAL_PENDING

- 기존18PDF 조사 재사용. 2026수시4시험16문항 + 2027모의4시험15문항 = 8시험31대논제 후보. 의약학은 과목명을 붙여 번호중복 방지(8개는 전체 자료 논제 수, 개인 필수응시 수 아님).
- 비공개PDF18개5,282,571bytes, 물리페이지 근거171건. 채점표 번호불일치1건/PUA추출불량20문항 검수기록 유지. 모든문항 NEEDS_REVIEW/AI HOLD.
- 현재Production 읽기: 기존 경희대10시험7문항, 대상2026/2027중복0, 문서SHA중복0. 기존ID 보존.
- 로컬PG17 8시험31문항 등록·재실행·기존행보존·RLS/권한 PASS. 운영 등록과 WEB조회는 미실행.
- 8시험별 트랜잭션/실패배치rollback/성공배치보존 및 재실행. Storage 단독성공 파일은 비공개유지, 임의삭제 없음.
- 승인명세: 로컬 essay-validation-2026-10/경희대/fast-load/registration-plan.md. Production 등록 전 Owner 승인 필요. 원본/추출본문은 Git에 포함하지 않음.


## 2026-10-21 건국대 Production 기본 탑재 — PASS

- Owner 승인3시험10문항 등록, 인문2/자연4/통합4. 비공개PDF5개2,598,185bytes, private review3개NEEDS_REVIEW/revision1, 근거90건 승인명세와 일치.
- 기존113시험400문항 전체행 해시 일치. 기존 건국모의3시험8문항/ID 보존. 기존 문서/검수기록/RLS 해시 일치.
- 실제 Owner WEB 신규10문항 선택 및 근거조회, PDF5종 렌더, 추가검토 상태 확인. 검수완료/Evaluation Package 생성 비활성. 모든신규문항 AI HOLD.
- 수학7문항 추출텍스트 오류 보존. 정밀검수/이용권한/공식웹페이지 검증은 후속이며 AI첨삭품질 PASS 아님.
- Provider/Credit/Payment/Toss/IAP/JWT/스토어빌드 변경 없음. 일반공개 HOLD.
- 경희대 준비 IN_PROGRESS: 기존18PDF 조사 재사용, 2026수시합본4 + 2027모의 문제·해설7쌍14. 시험/문항수 미확정, Production 쓰기 별도승인.

## 2026-10-21 건국대 신속 탑재 준비 — OWNER_APPROVAL_PENDING

- 원본6PDF 확인. 2026 수시 인문2/자연4/통합4: 신규3시험10문항 명세. 기존 모의3시험8문항 보존.
- 문제4PDF와 영향평가보고서1PDF, 합계2,598,185bytes 비공개 업로드 후보. 2027 모집요강은 참고자료로 보존하고 시험/업로드 제외.
- 보고서 재수록10문항은 중복 생성 제외; 출제의도/해설/채점기준 등90개 페이지 근거 연결. 수학7문항 텍스트추출 깨짐 HOLD, 원본PDF 보존. 전수 정밀검수 PASS 아님.
- 로컬PG17 등록/재실행/기존행보존/RLS/비공개권한 PASS. Production 읽기조회에서 후보ID·문서hash 기존충돌0. 운영113시험400문항 기준.
- Production DB/Storage 쓰기·Provider·Credit·배포 없음. Owner 등록 승인 후에만3배치 및 실제 WEB 조회. 모든신규문항 AI HOLD, 이용권한 확인 전 학생공개/다운로드/Provider전송 금지.
- 명세: 로컬 essay-validation-2026-10/건국대/fast-load/registration-plan.md. 공식웹페이지 검증 보류.

## 2026-10-20 가천대 Production 기본 탑재 — PASS (정밀 검수/AI 첨삭 PARTIAL·HOLD)

- Owner 승인 범위로 17시험·166문항 등록. 17개 시험별 transaction, 기존 스키마/ID 보존. 활성 시험 0, 공개 문항 0.
- 비공개 Storage PDF 39개/23,009,287 bytes 업로드. 31개 PDF 및 기존 한컴 변환 PDF 8개이며 HWP 원본은 변경하지 않음. SHA 키·페이지 수·파일 크기 39개 모두 승인 명세 일치. 기존 문서 2개 보존.
- private review 17개 revision 1, NEEDS_REVIEW, 근거 연결 1,158건. 승인 명세 body 17/17 정확 일치. reviewer NULL(자동 등록), 승인 요청 false. 검수 완료/Provider 권한으로 승격하지 않음.
- 오류 5문항 보존: 2024 수시 인문1/자연3, 2025 수시 의예6/자연7, 2027 모의 한의예·약학4. 검수 메모에 원본·페이지·오류 사유 유지.
- 기존 96시험·234문항 전체 행 해시 변경 전후 일치. 중복 신규 ID 없음. 기존 학생 답안·History 테이블 쓰기 없음.
- 실제 Owner WEB `/admin/materials/`: 가천대 17시험·166문항 조회, 문항 전환/원본 PDF 렌더/페이지 근거/HOLD 메모 확인. 검수 완료·Evaluation Package 생성 비활성. 비인증 공개 Storage URL은 HTTP400 NoSuchBucket으로 차단.
- 기본 탑재 PASS는 첨삭 품질 PASS가 아님. 본문 추출 입력칸은 비어 있고 원본 PDF로 검수 가능. 77개 역할 연결 항목은 미완료 메모 유지. 정밀 원본 대조·이용권한·평가 품질 검증과 실제 첨삭 활성화는 별도 승인.
- 건국대 준비 착수: 기존 6 PDF 조사 결과 재사용. Production 등록/Storage 업로드 미실행. 등록 명세와 건수 확정 후 별도 승인 필요.
- Provider/Credit/Payment/Toss/IAP/JWT/앱 제출 빌드 변경 없음. 일반 공개 및 AI 평가 HOLD 유지.
- 상세 명세·실행 SQL·원본 근거는 로컬 `essay-validation-2026-10/가천대/fast-load/`에만 보관. 저작권 원문 및 학생정보를 Wiki에 추가하지 않음.

## Apple IAP / iOS release prep — 2026-10-18 — PARTIAL (release blockers open)
Owner-directed release-readiness snapshot (target 2026-10-25). Claude owns Apple
Sandbox/StoreKit, IAP refund notifications, iOS signing/Archive/TestFlight, splash/
release config; Codex owns APP·WEB·IAP final integration + 논술 LAB. Claude APP
branch `claude/app-release-readiness-eab636 @ 2684cee` (NOT merged). Codex APP
`origin/codex/essay-shared-app-integration @ f62b1ee`. No overlapping file edits.

A. Google Play IAP — **PASS** (Codex-verified; Production activation HOLD): TEST
   purchase E2E / Google server verify / Credit +1 / Ledger idempotency / acknowledge
   / consume / relaunch-balance all PASS (Codex APP 4c532ab→f62b1ee).
B. Apple IAP — **PARTIAL / BLOCKER**: StoreKit client; App Store Server API 7 secrets
   registered + digest-verified; Sandbox tester; Copacabana Co. (VUKFS69GB4) signing;
   TEST iPhone build+install PASS; TEST email login + credit_summary (balance 4) PASS.
   BLOCKER — StoreKit product query returns 0 → buy buttons disabled → real Apple
   purchase E2E NOT done.
C. Refund/cancel — **PARTIAL** (local-verified; deploy pending): Toss engine
   unchanged. IAP refund migration `20261016120000_iap_refund_recovery` applied to
   TEST; `iap_revoke_refunded_purchase` + `iap_refund_events` locally verified
   (unused-only recovery, shortfall, other-paid/free protected, idempotency, reversal,
   Google grant preserved). Apple ASSN V2 + Google RTDN edge `iap-refund-notifications`
   implemented, core tests 10/10. NOT done — TEST edge deploy, real store-notification E2E.
D. 논술 LAB — **PASS** (Codex-verified; 추가 첨삭 OFF, public HOLD): 최초/무료 재/추가
   유료 첨삭, WEB·APP history/result/Credit balance 일치 — PASS (Codex).
E. iOS release prep — **PARTIAL**: Team Copacabana Co. (VUKFS69GB4), Bundle
   `com.legendstudy.app`, dev signing PASS, splash brand improvement,
   `ITSAppUsesNonExemptEncryption=false`, Info.plist lint PASS. BLOCKER — final Archive
   NOT done: app version 0.1.0 vs ASC 1.0 mismatch + no Apple Distribution cert yet;
   TestFlight upload NOT done (Owner-approval-gated).
F. App Store Connect — **PARTIAL / BLOCKER**: app registered, iOS 1.0 created,
   metadata / age 4+ / KR·EU compliance / Program License Agreement (2026-10-18) done.
   BLOCKER — **Paid Applications agreement absent** (only Free Apps active) = root cause
   of B's 0-product StoreKit query. Screenshots, support URL (Codex LAB site), review
   account, final build — NOT done.

Apple Sandbox BLOCKER: StoreKit returns products only when the Paid Applications
agreement is active; product IDs (credit1/3/5/10), signing, and Apple secrets are all
verified correct, and the products exist ("제출 준비 중"), so the missing Paid Apps
agreement is the single remaining cause. Minimal fix = Owner (Account Holder) activates
the Paid Apps agreement (banking/tax/contact); no app code change. Actual notFoundIDs
device-log capture pending. Approvals still pending (HOLD): TEST edge deploy, real Apple
Sandbox purchase (1×credit1), real refund, Production migration/IAP, TestFlight, Store
submission, public release.

UI/UX (Claude, APP `claude/app-release-readiness-eab636` @ be51e98): splash wordmark `+` enlarged 0.5x->0.9x (~1.8x), brand orange/position/Pretendard/1.8s kept; analyze+brand tests PASS. READ-ONLY analysis — onboarding is already a step-based (Toss-style) flow (`_StepProgress total 4`); APP has no university-logo image assets (name/text display; logos are remote/LAB); personalization data exists today (`study_sessions`, `day_target`/`day_event` D-Day, essay records) so rule-based messages need no new table (peer-comparison excluded — no real stats). Full input-UX rework / bulk logos / personalization system await Owner approval.

UI/UX 2 (Claude, APP @ c3ac6ec): onboarding step transitions (AnimatedSwitcher fade+slide 300ms, Reduce-Motion aware), per-step ambient background glow (<=10% alpha, AnimatedAlign, no infinite loop, decorative), and fast-double-tap guards with value retention (State/providers) — copy/steps/save/backend unchanged; analyze + onboarding/brand tests + Android/iOS builds PASS. University-logo authority reconciled: Codex RC codex/release-candidate-20261018 already ships assets/university-logos/ (42, incl. 성균관/서울시립) — Claude does NOT duplicate. Personalization DESIGN only (no impl): rule-based messages from existing study_sessions / day_target / day_event / essay records (e.g. weekly hours, vs last week, hours-to-goal, D-Day, essay-logic trend); no new table; peer/grade comparison excluded until real stats exist; card impl awaits Owner approval.

## Grok code review (LAB #1 / APP #9) + Essay-first reaffirmation — 2026-10-12 — RECORDED (documentation only)

Recorded the Grok code review of the Essay full-service implementation and reaffirmed
the Owner Essay-first product principle. **No code/DB/Provider/Production/public-activation
change.** Review findings are **proposals, not verified fixes** — none are "fixed on main."

Current remote state re-verified read-only 2026-10-12 (`git ls-remote`):
- **LAB** review branch `codex/essay-full-service-implementation` @ `ad4ea678538009c698a39041b8be0d9d5c2348af`;
  `refs/heads/main` still `8991b510d2c9702ecfb05315fe21363ab6df7012` → **review branch NOT merged**, main behind.
- **APP** review branch `codex/essay-full-service-implementation` @ `631eb65efe8a24f971aee3890226c6c26dd185d8`;
  `refs/heads/main` `d07671e985929ad1aa4ba2c811919cc592a37b34` → **Essay implementation NOT in APP main.**
- Consequence: merging a docs/wiki PR does **not** integrate app/web code; verify the real integration branch before any store build.

Kept-by-review designs (do not change): Worker fail-closed when Provider unbound; Credit
balance from server response; unverified 2027 applicant/competition figures not shown;
no arbitrary per-campus summation; general-user AI feedback **HOLD**; APP `service-role`
key not observed in the reviewed SHA (scoped observation, not a whole-repo absence proof).

Review-proposed fixes (unimplemented/unverified): sort-metric inconsistency (projection by
competition vs logic/UI/button by applicant count); Owner Priority 22 duplicated in
`catalog-policy.ts` vs `university-discovery.tsx` with differing 강남대 inclusion; admission
`ctx` not passed to `callEssayGateway`; legacy "준비 중 = separate low-priority group"
logic conflicting with the Owner decision (keep in same list, disable action only); Worker
`evaluate.ts` 402/422 mapping gap; APP/LAB catalog-policy parity; native essay flow
completion must distinguish gateway wiring from screen state (no fake results); confirm
main's security changes reach the integration/store build; do not record Flutter tests as
passing without actual runs.

**OWNER_ACTION_REQUIRED (not decided here):** (1) final single sort metric — applicant
count vs competition — across projection/logic/UI/button copy; (2) Owner Priority 22 single
source + whether 강남대 is included. Both left to Owner; no arbitrary policy chosen.

Distinct concepts kept separate (not merged into one sort rule): default list exposure order ·
applicant-vs-competition metric · in-list position of 준비 중 universities (Owner: keep in list) ·
their disabled-action state · actual available feedback status (GATED/HOLD, no fake results).

Detail: [Grok review record](../90_HISTORY/REVIEWS/2026-10-12-grok-code-review.md) ·
[Essay-first policy](ESSAY_FIRST_UX_OWNER_POLICY_2026-10-11.md) ·
[daily](../90_HISTORY/DAILY/2026-10-12.md).

## Quality traceability refinement — 2026-10-10 — PARTIAL

Owner-approved continuation on independent `codex/quality-traceability-refinement`.
Verified checkpoints: APP1e4d92fe0c8d1d3c905201014b5555239cabd1fa and
LAB501d272100b78032400bb82a8da0bfa963c10e31 pushed/remote verified; originals preserved.
Production Pages `a2e09fea-6472-407b-b0f9-036642a6ed69` SUCCESS with LAB501d272.
Actual operator browser confirmed4 independent answer processes containing8 existing
Math evaluations (4 initial/4 reevaluations), stored feedback/answer comparison,
empty human-review history and disabled save before required deliberate inputs.
360/390/768/1280/1440px console has no horizontal overflow. No production review write.

QA structure: existing canonical problem/profile/rubric groups and explicit prior
edges only. Missing parent/foreign leaf/cycle does not merge unrelated submissions.
Literal answer-line changes are separated from AI advice and rubric deltas; no
student satisfaction or causal learning effect is invented. Existing Human Review
history/submit contract reused (hash pinning,11 dimensions,conditional NA,idempotent
retry,server reviewer identity); new read-to-write privileges were NOT added.
Read-only SQL confirms8 evaluations/1 student/4 lineages/4 valid same-owner edges,
all8 source/hash-bound. RLS true/direct authenticated SELECT+INSERT false and anon
RPC execute false verified; role tests are mocks plus deployed ACL/definition audit.

**Metadata blocker / Owner approval required:** current qlm list/detail omit student
reference/lineage and exam/university projection. UI therefore states user unconfirmed
and problem information unlinked. It cannot provide complete pseudonymous user or
university/year grouping yet. Minimal proposal is an additive operator-only read
projection with stable purpose-scoped student pseudonym, lineage/root and verified
exam/university/year metadata; retain current DTO fields/cursors/auth/lifecycle/ACL,
no new table/grant/data rewrite. SQL migration must be separately approved before
implementation/application. Acceptance:1 pseudonym/4 independent roots/4 correct
pairs for these8 records, unrelated fixtures separate, nonoperators denied.
[Detailed read-contract proposal](https://github.com/LC3808/legendstudy-lab/blob/codex/quality-traceability-refinement/docs/PRODUCTION_ACTIVATION_2026-10-08.md#quality-traceability-refinement--2026-10-10).

WEB service audit: Math catalog/detail/answer/upload/extraction/evaluation/Credit/
reevaluation/History are IMPLEMENTED; prior actual E2E retained, not repeated. Current
active Math content is1 synthetic smoke problem (2026,review), NOT official exam
content. General published questions0/criteria0/evaluations0. Humanities canonical
contracts/provider foundation are PARTIAL; Econ mixed-component and Science schema/
adapter/persistence candidates are PARTIAL and need reviewed official content,
production binding and real acceptance. No new speculative engine was added.
Approved catalog read/evaluation permission separation and existing GATE maintained.
This round's backend tests are contracts/mocks, not fresh Provider E2E.

APP: school selection remains draft until Save; school/student identity save and
Profile invalidation correct stale retaker state, explicit grade save sets student,
nonstudent status clears grade and reloads GradePage state. No existing profiles
reset. MY 희망대학·학과 appears below LAB/above materials, reusing canonical targets,
intended_major and stored applications-v1 read; application labels shown only with
actual stored records, no interest-to-application inference. Existing management
screen reused. Shared top-up visual minimum28dp/padding4dp each side, text-sized
width, standard padded>=48dp touch area, navy/gray/IAP route retained;360dp100/200% PASS.
Existing onboarding status160ms/grade140ms animation and Reduce Motion work in tests;
school-selection animation was never implemented (prior Wiki explicitly deferred).
No new animation or artificial delay. APP behavior awaits future Owner device QA.

Validation: Flutter3.47.6 analyze0 issues; full1034 PASS/2 opt-in skips. WEB180 related
quality/runtime/provider-contract tests PASS; full lint/typecheck/static build PASS.
APP Wiki handoff PASS (11705 bytes current-status). Android/iOS builds not required.
Mobile debugging and physical tests: NOT PERFORMED — OWNER DIRECTIVE.
Production postcheck: Math evaluation count8/human review count0 unchanged, DB
runtime evaluations_enabled=false; CF3 flagsfalse, allowlist1; anonymous availability
allfalse. No new migration, privileges, Provider call, Credit transaction or public
activation. APP main/store untouched. PUBLIC_ACTIVATION: HOLD.
Encrypted CF Worker bindings are masked, so expiry was not freshly decoded; last
verified expiryOct16 18:57:41KST. Existing dedicated signer/encrypted-binding renewal
procedure is recorded; no global Auth rotation/service-role fallback.

## Admin quality and LAB preview — 2026-10-10 — COMPLETE

Continued the completed UX branch without rebuilding the earlier feature work.
LAB `bf424528ffe33eadba27eb3341fc90c423309bfd` is pushed and remotely verified.
Canonical Pages deployment `6d55736d-8954-4153-bed0-3f58dc8376e1` is SUCCESS
with this exact source SHA; production browser verification completed.

Empty-list cause: the existing Quality Console read `ql_list_cases` /
`ql_case_detail` from general `essay_evaluations` (0 records). Math stores its
results separately: 8 COMPLETED evaluations, comprising 4 initial and 4 linked
reevaluations. Existing `qlm_quality` list/detail/review_state RPCs already expose
these records; no separate Quality Case registration or DB migration is needed.
The new Math selector consumes the verified flat runtime DTO, leaving general
review behavior intact. Stored answers, rubric results, strengths, missing-feedback
states, initial/revised comparison and UNREVIEWED state were verified in the actual
production operator UI. Current Math human judgments: 0. Math UI is read-only;
existing review history is preserved. University/admission-year metadata is not in
this read projection and was not invented; no new review-write system was added.

Existing operator membership, verified JWT/account lifecycle checks and RLS remain.
Direct anon/authenticated SELECT on protected Math/review/operator tables is denied;
RPC execution still requires the existing operator gate. No permissions were expanded.
Back uses safe same-origin history or `/admin/` fallback; direct entry and return
from admin navigation were checked with the authenticated session preserved.
Both 내신 LAB and 수능 LAB now reuse one gray disabled 서비스 준비 중 button,
with no href or active hover transform, while keeping service descriptions.

Validation: 151 tests / 14 suites PASS; full ESLint, TypeScript and production
static build PASS. Actual console/detail and both preview routes at
360/390/768/1280/1440px have no horizontal overflow; console stacks on mobile and
retains two columns on desktop. Read-only UI checks confirmed both submitted answers,
filter and next-unreviewed navigation. No new Provider call, submission, review write,
Credit transaction, migration, RLS or Payment/Toss/IAP change. CF Math flags remain
false, DB evaluations_enabled=false and existing single-account allowlist retained.
Public activation HOLD. APP stays at verified UX closeout1bb8569; no APP main merge
or store submission. OWNER_ACTION_REQUIRED: NO for these two completed UI tasks.
Earlier OAuth/clean-install/orphan-recovery and Worker-expiry follow-ups remain separate.

## APP WEB UX cleanup — 2026-10-10

Owner-approved UI cleanup on `codex/app-web-ux-cleanup`, based on APP938b02b
and LABc652133 (latest remote refs verified before independent worktrees).
Login hero uses the existing section-title token, two centered lines; policy links
follow Guest at the SafeArea footer. Shared primary buttons are navy/white and
secondary buttons white/gray/navy; destructive and provider brand styles remain.
MY has three divided LAB rows and a compact canonical Credit balance/IAP top-up.
LAB home removes balance categories. Display labels are 논술 LAB / 내신 LAB / 수능 LAB;
settings removes only LAB 이용 안내. Submit buttons are 첨삭 진행 / 재첨삭, with
1 Credit + included same-answer reevaluation within14 days still visible before submit.
WEB guide removes the requested redundant purchase/promo copy; refund copy and
responsive wrapping are corrected without changing amounts, periods or legal rights.

Availability cause: production has0 published general essay_questions but1 ACTIVE
Math problem/set. The existing APP catalog and WEB entry depended on evaluation
availability, so switching evaluation OFF also hid approved Math questions.
Availability now adds `catalog.math` after the existing authenticated allowlist check,
separately from `types.math` (unchanged evaluation meaning). The APP reads this field
with a backward-compatible fallback. Approved accounts can browse while evaluation
is OFF; other/anonymous accounts cannot gain access. UI evaluation actions stay
disabled and the APP rechecks availability before any submission mutation. Existing
server Provider/Worker/DB GATE remains authoritative. No migration/RLS/Storage,
Auth/Profile/Payment/Toss/IAP verification/Ledger or evaluation contract redesign.
No Provider call, new submission, reevaluation or Credit debit was performed for UI QA.

Checks: Flutter3.47.6 analyze PASS (0 issues); full regression1019 PASS/2 opt-in skips;
latest focused31 PASS plus2 Android/iOS login render tests. New widget cases cover
360/375/430dp and100/200% text for hero/footer/compact Credit, plus CTA colors and
catalog-open/evaluation-closed behavior. WEB81 related tests PASS; final copy/gate
subset53 PASS; full ESLint, TypeScript and static production build PASS.
Android debug APK and iOS Simulator builds PASS with existing public configuration.
WEB pricing/refund six viewport widths360/375/390/768/1280/1440 at100% and200%
zoom have no horizontal overflow after the scoped minimum-width correction.
Widget render captures use test fonts: they establish geometry, not Korean visual QA.

Public activation remains HOLD; Math flags and DB evaluation switch stay OFF,
existing single-account allowlist retained. No APP main merge or store submission.
Prior actual Math E2E evidence and its unresolved OAuth/first-install/orphan recovery
and Worker-expiry follow-ups remain in the preceding section, outside this UI task.

APP implementation `d8a7e7f` and LAB `015f6e9` pushed on independent
`codex/app-web-ux-cleanup` branches, remote SHA verified. Production LAB source015f6e9
is canonical deploymentf03197c5-b040-481d-ae62-c77c7173ca88, SUCCESS.
Browser confirms deployed guide/refund/naming. Anonymous availability HTTP200
returns catalog.math=false and all types=false. CF three flags=false, DB
evaluations_enabled=false, existing allowlist1 unchanged.
Android SM-G950N visually confirms exact hero, navy Login and bottom legal links.
iOS Simulator MY confirms live credit_summary11 and divided LAB rows.
Fresh Owner re-login subsequently verified on Android: approved Math entry and actual
catalog/problem text display while evaluation remains OFF and submission disabled.
This closes the previous stale-session gap. APP UX closeout1bb8569 pushed/verified.
APP WEB UX CLEANUP: COMPLETE; no new Provider call or Credit transaction.

## Google Auth / Essay user flow — Oct10 — PARTIAL, real Math UI verified

APP `codex/essay-production-user-flow` (implementation56f1635, base6b003888)
and LAB branch of the same name (implementationb4df1936 + credit-refresh9c66fe2,
base8991b51) are pushed. Fetch latest refs before continuing; APP main untouched.
Native Math reuses existing catalog/input/learning/evaluation contracts and WEB
Provider gateway. No new AI engine, schema, Payment/Toss/IAP or Ledger policy.
Device-local introduction is separate from Auth, exits to login choice, supports
Guest without anonymous Auth, and preserves returning Profile/Home routing.
BrandGate paints official symbol and wordmark before routing, without fixed delay.

Validation: Flutter3.47.6 analyze PASS; **1019 tests PASS / 2 opt-in skips / 0 failures**;
Android debug APK, iOS Simulator and signed iPhone debug builds PASS. LAB16 relevant
UI tests, TypeScript, targeted lint and static build PASS. Mock tests are separate
from the following actual Production UI evidence:

- Android SM-G950N: missing Android OAuth client was the configuration cause.
  Owner registered the verified com.legendstudy.app/debug SHA-1 pair; real Google
  chooser → Supabase session → new-user Profile setup/Skip → Home → cold relaunch
  session/Profile persistence PASS. Review-account existing Profile goes straight
  Home. Release SHA unavailable because release signing material is absent.
- WEB, physical Android and physical iPhone each completed an actual Math initial
  evaluation and included reevaluation through their UI, using the same approved
  Auth UID, existing OpenAI/gpt-5.6-sol Provider and canonical backend.
  WEB evaluation prefixes2c6af9ee/4a35ac2b; iPhone0ffeb194/a9e65551;
  Android7432ad79/07512c6f. All six are COMPLETED; no mocked result insertion.
- Actual Credit4→3→2→1: three consume transactions total−3; three included
  reevaluations add no debit. One earlier Android requestce4d77dd timed out after
  entering PROCESSING. Existing math_recover_evaluation after lease expiry marked
  FAILED/TIMEOUT and released its reservation. Four reserves, three consumes,
  one release net reserved0. No direct ledger edits or duplicate charge.
  The original upstream/finalization failure cause remains undetermined; reliable
  automatic orphan recovery needs follow-up before public activation.
- WEB→Android History and APP→WEB History/report/comparison verified. Final WEB,
  Android and iPhone UI balances all1. WEB persistent header could become stale
  after another device spent Credit; route/focus/visibility canonical reload fixes
  this without changing billing. Existing Oct09 records remain intact.
- WEB actual PNG upload → private Storage → actual extraction → confirm four
  regions → evaluation-ready PASS. This uploaded attempt was not evaluated or
  charged; PDF upload and native image/voice submission are not claimed.
- Final post-essay cold relaunch on both physical devices restored Review Home
  directly, with no login/introduction/Profile setup repeat.
- Fresh isolated iOS Simulator Next/Start → login choice → Guest Home → relaunch
  Home PASS; Skip covered by unit tests. Both physical devices used update installs
  to preserve data. Physical clean-install/brand cold-start capture, populated
  school/grade/targets restoration and provider-switching matrix remain limited.
  iPhone Apple button present; Android absent. iPhone Google/Kakao/Apple and Android
  Kakao actual provider login acceptance remain pending Owner-assisted QA.

Production deployed source9c66fe2 via existing Pages procedure; canonical deployment
`92f79bf7-7bb5-4fce-867f-735a6b4b8b99` SUCCESS. Final MATH_ENABLED,
MATH_PROVIDER_CALLS_ENABLED and NEXT_PUBLIC_MATH_ENABLED=false; DB evaluations=false.
One existing approved UID remains allowlisted; no public widening. Public availability
HTTP200 reports all four types false; signed-in UI has no available evaluation entry.
**PUBLIC_ACTIVATION: HOLD.** Humanities/Econ-Business/Science actual Provider QA
not performed and remain unavailable. Worker JWT expiry2026-10-16 18:57:41 KST:
renew using existing dedicated authority before expiry. Migration010 not reapplied;
Target005 HOLD; worker bindings, RLS/private Storage and existing Math E2E preserved.
No APP main merge, Store submission or release-signing change.

Next: finish remaining physical OAuth/first-install/Profile matrix, investigate
orphan evaluation recovery and renew Worker credentials before a separately
approved public release. No further evaluation activation is authorized by this
closeout. Owner-assisted remaining device authentication QA is requested.


## Local APP integration — Oct10 — COMPLETE

APP `codex/local-app-integration` at `6b003888a8cebd58adf6d7e4e34f630328947688` is committed, pushed and
remote-SHA verified. Latest fetched base8e89dfc + essay-growthb0facde +
Claude loginc11fc84 integrated in that order, without conflicts or reimplementation.
Flutter3.47.6 analyze PASS; final **1015 tests PASS / 2 existing opt-in skips / 0 failures**;
Android debug APK and iOS simulator build PASS. Four obsolete baseline search-policy
assertions were reproduced on8e89dfc and corrected in tests only. Backend contracts,
Payment/Toss/Credit Ledger, IAP and existing native features are preserved.
No APP main merge, Store submission or Production deployment.

Next APP starting branch is `codex/local-app-integration` (fetch before use).
Android Google OAuth console/device acceptance, signed Splash/first-run and iPhone
physical QA remain separate. Device-once pre-login onboarding and full native Math
submission/rewrite remain existing gaps. APP voice absent; Math voice excluded from
first release, humanities/economics in scope, science gated. IAP sandbox/refund gates
remain. Owner actions concern subsequent OAuth/device/release acceptance, not this merge.
[Canonical integration evidence](https://github.com/LC3808/legendstudy-app/blob/6b003888a8cebd58adf6d7e4e34f630328947688/wiki/production-integration-2026-10-09.md#local-app-branch-integration--2026-10-10);
[closeout history](../90_HISTORY/DAILY/2026-10-09.md#local-app-branch-integration--2026-10-10).

## Essay voice feedback — Owner policy update — 2026-10-09

- Math voice feedback is **OUT OF SCOPE for the first release**. Hide the entire
  voice UI on Math evaluations. Do not develop additional Math TTS in this scope.
- Preserve Math text evaluations, strengths/weaknesses, reevaluation comparison
  and growth visualization unchanged. Existing evaluation data and Credit policy
  remain unchanged. No Provider, Ledger or DB migration changes.
- Humanities and economics/business voice feedback remain in development scope.
- Science voice feedback stays undecided/gated pending formula/symbol handling
  review. Unknown types do not opt into voice automatically.
- Future Math formula-to-speech conversion and high-quality voice may be reviewed
  as a separate update; they are not a first-release acceptance gap.

This supersedes the earlier general voice scope in the Evaluation & Growth UX
record. APP has no active Math TTS to remove. WEB explicitly allows voice only
for humanities_social/business_economics; existing Humanities consumer opts in.
The Math report path remains text-only, including first/revised evaluations.

## Latest Evaluation & Growth UX — Oct09 — PARTIAL

LAB main `f838911794f3a651645f089fc9f722ec41b92048` and APP isolated
`codex/essay-growth-ux` `b0facde42c5df7ee38969b72b89ed2228a2a4c48` add canonical
stored-result reports and pinned rubric comparison. Analysis no longer includes
Credit or usage metrics; joint History provides filters, separate usage counts and
Credit summary. Local-only WEB voice controls have no external Provider or Credit
cost. No Provider prompt, result rewrite, migration, financial or public-switch change.
Real approved-user Production browsing verifies both Math evaluations, three unchanged
dimensions and unchanged balance4/transaction digest. Android debug build PASS. Public activation remains HOLD.
APP native implementation is pushed, not store-released; physical-device/audio QA,
missing legacy feedback and historical metadata remain limitations.
[Full verification and deployment evidence](../90_HISTORY/DAILY/2026-10-09.md#evaluation-and-growth-ux--oct09).


## Latest Math final unblock — Oct09

Existing-key dedicated Worker JWT reissuance and real approved-user login resolved
both blockers without signing-key changes. Real typed Math Provider E2E PASS:
initial5→4 Credits, included rewrite/re-evaluation4→4, results/History persisted.
No mock, new runtime or schema changes. General release HOLD; seven-day worker
credentials expire2026-10-16 18:57:41 KST. Existing signer exposure remains a separate
incident; no rotation/revocation permitted without Owner approval. [Full evidence and final gate state](../90_HISTORY/DAILY/2026-10-09.md).


## Latest JWT safety authority — Oct09

Owner prohibits any Rotate/Revoke or standby deactivation without separate approval.
Do not execute the earlier ES256 key import/status-changing recovery sequence.
New ES256 key necessity is unproven; reuse the original dedicated-role JWT contract.
HS256 anon probe reaches DB42501 (authorization), so the prior blanket HS256-rejection
claim is not justified. Worker token validity remains unverified; Production worker
bindings absent, original math-test encrypted bindings present. See [Oct09 review](../90_HISTORY/DAILY/2026-10-09.md).
No keys/runtime/DB changed; Provider/Credit E2E still blocked.


## Latest Web Essay/Credit UX — Oct09

LAB `f9512aa` (main / codex/essay-credit-ux) refines navigation, analysis summary and
user-only Credit history. Admin/financial contracts unchanged; Math branch6bcd0a6
and its unresolved signer/E2E status remain separate. See the [Oct09 daily record](../90_HISTORY/DAILY/2026-10-09.md)
for exact deployment and verification evidence. No new Math activation is implied.


## Math Production configuration recovery — PARTIAL — Oct09 17:25 KST

LAB `codex/math-configuration-recovery` **9ae2715** adds only a safe configuration
script and recovered Owner instructions. Existing runtime/source `2cd74ed` unchanged.
Same-commit Production redeploy **feef6f7d-113e-4193-9f59-3288c6449610 SUCCESS**.
Nine non-secret Math bindings installed, correct Production origin/shared project,
all three activation flags=false; unrelated variables/secret bindings/Preview preserved.
No test allowlist blindly copied. All four availability types remain false.

**Current test JWT now Auth200**, approved allowlist identity confirmed, own Credit
and Math History reads200. Supersedes the prior expired-token blocker for this session.
Still no actual Provider/evaluation/debit/rewrite/re-evaluation this task.

Original secrets were not recovered: absent in mounted local configurations, Supabase
Edge secret names and Vault Math names; GitHub Actions Secrets403 means unknown.
Cloudflare encrypted math-test values cannot be exported. Oct05 evidence establishes
reuse/re-registration of a local JWT, not its initial signing recipe. Oct06 lifecycle
HS256 rejection after ES256 migration is recorded; current JWKS advertises ES256.
Do not infer Math token algorithm/expiry or copy lifecycle service-role architecture.
Math dedicated roles/own-RPC permission verified; cross-worker denial preserved.
Worker issuer/audience/TTL/signer location **NOT_FOUND**, no speculative JWT minting.

Exact Owner input steps in one block:
[recovery instructions](https://github.com/LC3808/legendstudy-lab/blob/9ae2715/docs/MATH_PRODUCTION_SECRET_RECOVERY.md).
Provider original key may be reused; only if truly lost obtain a new key in the existing
OpenAI project without revoking the test key. Existing worker JWT/signing source must
be recovered before claiming renewal instructions. No secrets in chat/log/Git.
No Payment/Toss/IAP, Ledger, Signup,005 or010 changes. No provider billing evidence,
no top-up request, no new test server. Actual Production E2E remains BLOCKED on secrets.

## Production integration — PARTIAL — 2026-10-09

APP **8e89dfc** `codex/production-integration` pushed/remote SHA verified. Merges latest
Claude Release/IAP + Codex Account/Data + existing runtime. LAB **2cd74ed** unchanged.
This supersedes older SDK-missing/server-absent/ingestion-blocked restore notes only;
it does not promote historical tests to current Production acceptance.

- **IMPLEMENTED:** native shared Essay/Math History read surface, account-scoped billing
  lifecycle/recovery, server Store account/SKU verification, active published-date search,
  all-active-year facets, immediate brand while Auth initializes, real policy links.
- **PRODUCTION_APPLIED / VERIFIED:** existing ingestion pipeline publishes missing posts
  1713–1719 (7 active items,78 active resources;11 advisory quarantine rows). Original
  titles/dates preserved. Public recent/2026 search HTTP200 returns actual new rows.
- IAP additive migration **20261009000200**, service-only `iap_post_verified_purchase`,
  canonical ledger reuse, transaction hash idempotency, UTC calendar3-month expiry.
  Edge `verify-iap-purchase` **v1 ACTIVE / verify_jwt=true**, anonymous401 actual.
  **IAP_ENABLED=false; actual grants0**. No real Store purchase or Provider evaluation.
- **TESTED:** Flutter3.47.6 analyze PASS, Android debug compile PASS (no Production
  dart-defines). Full integration984 PASS/2skip/7 outdated-policy fixture failures;
  all failed groups corrected/rerun PASS. Final related21, billing/lifetime18,
  search/discovery26 (overlapping; do not sum), Deno13, isolated canonical ledger
  role/account/replay/expiry/atomic rollback assertions PASS. These are not live E2E.
- **BLOCKED:** Math test session expired; main Pages lacks3 Math provider/worker
  secrets. math-test bindings cannot be exported. OpenAI/gpt-5.6-sol configured;
  current provider billing/balance/rate/cost unknown. Four Essay types stay GATED.
- **NOT COMPLETE:** full native Math upload/submission/rewrite flow, post-grant IAP
  refund/revocation reconciliation, real Store/sandbox acceptance and policy review,
  authenticated APP/Web History/Credit equality. iOS/Xcode and device QA unavailable.
- **PRESERVED:** Migration010 already applied/not rerun; Target005 HOLD; Payment/Toss,
  Signup policy, canonical Credit/RLS/private storage and LAB MY/Admin unchanged.
  Earlier Owner Admin grant acceptance preserved; no repeat grant test.

Detailed code/config/one-batch settings:
[APP integration](https://github.com/LC3808/legendstudy-app/blob/8e89dfce2ce3b2f2af4beca28f068c0bc668ce4e/wiki/production-integration-2026-10-09.md),
[IAP activation gates](https://github.com/LC3808/legendstudy-app/blob/8e89dfce2ce3b2f2af4beca28f068c0bc668ce4e/supabase/verification/iap/README.md).

## Credit history display — COMPLETE — 2026-10-09

LAB2cd74ed PRODUCTION_DEPLOYED (23d2723b);9 Production-asset fixture checks PASS.
Shared type/reason/actor formatter consumed by Admin member detail,
Credit overview, MY history and Essay dashboard. Raw reasons preserved; no inferred
compensation. Unknown types/actors have Korean fallbacks; actor UUID never displayed.
85 relevant tests + lint/typecheck/boundary/build PASS;9 Chromium fixture screens.
No migration, grant repetition, Ledger/balance/RLS/authorization/Payment change.
Owner separately confirmed real Admin grant and correct history/balance:
OWNER_VERIFIED; earlier zero-grant/unverified snapshot is historical.

## Admin manual Credit / Go-Live — PARTIAL — 2026-10-09

LAB343bd1e PRODUCTION_DEPLOYED (f150ba03, HTTP200); APP4c87231 (codebc91805) backend branch. New migration
20261009000100 PRODUCTION_APPLIED: Admin-only1–100 grant RPC reuses canonical
Ledger; reason/operator/target/key recorded, no new wallet/finance credential.
Postflight ACL/RLS PASS; actual anonymous grant denied401. Dialog/retry/refresh
implemented;864 tests + lint/typecheck/boundary/build and Chromium fixtures PASS.
Actual grant/history/balance OWNER_VERIFIED in the subsequent display directive.
Prior Codex zero-grant snapshot is historical; no repeated actual grant requested.
Test user Auth now403 session_not_found then expired bad_jwt, superseding earlier
Auth200 evidence. Secure ADMIN_TEST_ACCESS_TOKEN requirement saved in draft;
MATH_TEST_ACCESS_TOKEN needs a fresh approved active session. No SQL/terminal needed.

Go-Live BLOCKED: real Provider/Credit/reevaluation/History E2E0. Math-test bindings
present; primary LAB Math bindings absent. Billing/balance/cost unverified, not a
funding diagnosis. Published Essay questions/criteria0; Math set/profile1. All four
GATED; no public activation before real verification + Owner final approval.
010 unchanged;005 HOLD; Payment/Toss/IAP/Signup/Claude APP UI/Manus preserved.
See latest Daily + evidence2026-10-09-admin-grant-golive.json for acceptance details.

Prior integrated work: LAB6e09f38 Production MY LAB/report/print. APP418d957
(codef200cba) profile/onboarding/Google error mapping/sort fallback candidate remains
unmerged into Claude RC, Flutter unverified. Materials sync/full-catalog ordering,
Google device root cause and native Math History remain open; see earlier Daily.

## Essay activation resumed — PARTIAL — 2026-10-09

Supersedes earlier ACCESS_BLOCKED findings below: Supabase and Cloudflare management
now authenticate (HTTP200); database writes run as postgres. Verified original010
SHA256 cc911a6d7ad90c768b388e52520a7e72c40ebb885b4d862c0e07231b34e49734
applied with ledger in one transaction. Postflight owner/postgres, SECURITY DEFINER,
empty search_path, authenticated EXECUTE only (anon/service_role denied) PASS.
Function body MD5 3b9c9a83bdc8363b9fab5d99dc5ab410; DB evaluation switch remains false.

Existing math-test Pages has provider/worker bindings (OPENAI/gpt-5.6-sol), but their
operational validity is unverified. Main LAB has no Math provider/worker bindings.
Actual provider-backed E2E0: test token absent; math-test hostname blocked by current
cloud network policy. Network addition + scoped MATH_TEST_ACCESS_TOKEN requirement
saved as environment draft, requires publication/value. No auth bypass/token issuance.
LAB anonymous probes also received Cloudflare403/1010, not application-auth results.
Credit/rewrite/History live acceptance remains unverified; all four types GATED.
No code/provider/deployment/Payment/Toss/IAP/Signup/Target005/visual change.
See latest Daily and [postflight evidence](../90_HISTORY/EVIDENCE/2026-10-09-essay010-production-postflight.json).

## Essay runtime activation — PARTIAL — 2026-10-09

[Owner activation directive](../90_HISTORY/OWNER_DIRECTIVES/2026-10-09-essay-runtime-activation.md).
Primary goal (one real provider-backed authenticated evaluation): BLOCKED; completed0.
No type enabled. Previous foundation evidence below remains historical.

- APP2657952: canonical component persistence candidate, NOT_APPLIED and outside the
  migration ledger. One parent claim/finalizer/charge, transactional component extension,
  optional owner read. No core function/ACL/unique constraint/Credit policy replacement.
-38 real isolated PG17 checks PASS: non-superuser install + interrupted-install rollback,
  original function/ACL preservation, concurrent finalization/replay, initial1Credit,
  included rewrite0, forced result insert failure rolls back charge/parent completion,
  owner History, foreign/anonymous deny, failure/no consumption, pending-deletion deny,
  canonical essay erasure and account FK cascade. Synthetic content/provider only.
- LAB server bridge: student ownership before worker claim, frozen reviewed manifest,
  durable checkpoint before commit, replay without provider re-execution. Existing
  evaluation History identity reused; account-switch safety and legacy-null/error split.
  Quantitative feedback excludes unrevealed hints/generated solution/source internals.
- Science/mixed still require real reviewed content and a valid canonical1.3 parent output.
  No automatic scientific-verdict→level conversion; artifact/submission linkage remains
  unverified. No real science/mixed exam or rubric published.
-854 LAB tests + lint/typecheck/boundary/build PASS; Python70 PASS/29 private-fixture
  skips; Math canonical SQL↔Web16 PASS; unchanged010 projection10 PASS (stubbed lifecycle).
-010=BLOCKED_NO_PRIVILEGE. Earlier DB successes used Owner Mac Supabase CLI/SQL Editor;
  current cloud has no such credentials/path. Supabase management401; Cloudflare
  management400/code9106; both repos Actions workflows0. Git/Cloudflare Git deploy works.
- Existing reviewed Humanities manifests found, accepted full private packages absent.
  Last Owner count0 published questions/criteria is not a new privileged DB observation.
- Environment draft saved ONLY three existing-access requirements (no values):
  SUPABASE_ACCESS_TOKEN, CLOUDFLARE_API_TOKEN, MATH_TEST_ACCESS_TOKEN. Requires secure
  environment-settings review/save/publish; not current runtime access. No new credential
  issuance, Owner SQL/terminal/login request, provider call or Production DB write.
- All four GATED; Target005 HOLD; Payment/Toss/IAP/Signup/Credit policy untouched.
  Claude APP release85aefb1 and MY/Admin + Manus visual changes preserved.


Production closeout: LAB `1da1bb00575a417c1bc9ce1d3abcce7c02ef23f0`, Cloudflare
`e99edc89-742c-469b-9bc1-e8f0c6c370a4` SUCCESS. APP candidate
`26579523cea3c85f759bf7ec74af23765adc2586` branch pushed; no DB/worker apply.
Post-deploy browser4 checks at390/1440px: Essay/Math HTTP200, no page errors or evaluation
control. Availability200/all four false; anonymous upload409/extract409/evaluate503.
Production authentication/provider/private-storage E2E remain NOT_VERIFIED. No ordinary
user Credit consumed. Evidence: `90_HISTORY/EVIDENCE/2026-10-09-essay-activation.json`.

## Essay runtime completion follow-up — PARTIAL — 2026-10-09 KST

[Owner continuation](../90_HISTORY/OWNER_DIRECTIVES/2026-10-09-essay-runtime-completion.md).
APP `23d4555`, LAB `390ac39` on codex/essay-web-runtime. Preserves current LAB main
`c2b2f14` and all Claude MY/Admin + Manus visual changes. Prior activation evidence below
remains historical; this follow-up is NOT a four-type live launch.

- Math: INVALIDATED/unavailable result admission fixed;16 isolated PG17→LAB wire checks
  verify initial1Credit/included0,14-day boundary,replay,owner denial,history,failure.
  Actual SQL+TypeScript, synthetic provider: NOT Production authenticated E2E.
- Humanities: allowlisted transport/released-failure retry; reviewed job-scoped worker
  reuses current v3 prompt, frozen snapshots, signed review and checkpoint replay.
  No deployed worker/provider/real content connection established.
- Mixed: one-parent orchestration/result contract with reviewed capability coverage,
  bounded components and partial/unknown failure handling tested. Canonical parent
  persistence mapping remains absent; single-credit Production claim NOT verified.
- Science: reviewed rubric/evidence validator and private artifact candidate adapter
  tested. Real approved rubric, persistent runtime/history and provider E2E absent.
-848 LAB tests PASS; lint/typecheck/boundary/build PASS. Python70 PASS/29 SKIPPED
  (private evidence fixtures unavailable);16 SQL/Web checks PASS. No paid provider call.
- All types GATED.010 still BLOCKED/unapplied; unchanged candidate SHA256
  `cc911a6d7ad90c768b388e52520a7e72c40ebb885b4d862c0e07231b34e49734`.
  Cloud environment has Git deploy but no DB/management/worker/provider credential
  or safe authenticated test session. No Owner SQL/terminal/login request made.
- Remaining engineering: mixed/science canonical persistence; reviewed real content
  and existing provider-bound claim/hosting integration. Interfaces alone are not COMPLETE.
- Signup frozen; Target005 HELD; Payment/Toss/IAP/Credit architecture/visual unchanged.


Production follow-up: LAB `390ac3951b521a1dc58eff0404e868851c6a8aff`, Cloudflare
`f4811c21-b30d-4655-9a13-5aa824f7f394` SUCCESS. Post-deploy anonymous browser:
`/essay-lab/` and `/math/`,390/1440px,4 checks PASS (HTTP200,no page errors,no evaluation
controls). Availability200/all four false; anonymous upload409/extract409/evaluate503.
No authenticated evaluation, provider execution or Production Credit mutation.
Automatic review initially rejected main push for insufficient deployment authorization;
re-review accepted the uploaded Owner directive §18 explicitly authorizing verified
non-destructive runtime deployment. No outstanding approval block and no workaround.

OWNER_ACTION_REQUIRED (consolidated, no manual operator instructions): existing
privileged deployment/provider bindings and an approved authenticated test context must
be made accessible before010 and actual E2E can proceed; actual reviewed content/reviewer
packages are also absent. Mixed/science persistence remains implementation work, not
something Owner approval alone resolves. No credential generation requested/performed.

## Essay Web runtime activation — PARTIAL — 2026-10-08

[Owner authority / unattended override](../90_HISTORY/OWNER_DIRECTIVES/2026-10-08-essay-web-runtime-activation.md).
APP candidate361880b; LAB implementationea144bc (preserves Manuse251c7c).
Existing Math consumer/private upload/extraction/evaluation/learning restored from
34bfab5; authenticated server availability fails closed. Humanities canonical RPC
adapter is fixture-tested, not a live worker/editor integration. New010 read projection
LOCAL_VERIFIED only; no DB migration applied. No privileged Supabase/Cloudflare binding
exists in the current cloud environment, including config metadata. Git deployment is
separate from DB/provider activation. No Owner operator request under away override.

- Production inventory: published Humanities questions0,criteria0; Math set/problem/
  leaf/profile1 each, bucket private20MiB. Counts do not establish reviewed content.
- Humanities blocked by content/worker; mixed blocked by reviewed capability binding
  and atomic orchestration; science blocked by evaluator/rubric/fixtures. Math remains
  narrowly allowlisted and unavailable until trusted config/DB/content admission passes.
-824 LAB tests, lint/typecheck/boundary/build PASS;31 Python contract/worker tests;
  existing PG17 Math/learning/legacy/install regressions PASS;010 projection10 checks
  with a stubbed lifecycle fixture PASS. These are NOT four successful live E2Es.
- Local browser4 route/viewport checks PASS, anonymous evaluation controls absent.
  Provider calls0; no Credit, payment, private artifact or student data mutation.
-005 HOLD; Signup frozen; MY/Admin frontend, Payment/Toss/IAP and Manus visuals unchanged.

Production release: LAB `ea144bc0c19d64c916fb4485b8bd7b175a465154`, Cloudflare
`2e7b5c14-953b-497c-b873-88567c521442` SUCCESS. Actual anonymous `/essay-lab/` and
`/math/` at390/1440px:4 browser checks PASS, HTTP200/no page errors/no evaluation
controls. Availability200/all types false; upload/extract409/evaluate503 with no
credentials, answers or artifacts. Authenticated evaluation/Credit E2E NOT_VERIFIED.

## Admin Member Management / Essay Mixed-mode — FOUNDATION COMPLETE — 2026-10-08

[Owner execution authority](../90_HISTORY/OWNER_DIRECTIVES/2026-10-08-admin-members-essay-foundation.md)
permits proceeding despite predecessor authenticated acceptance pending. Do not
rebuild006 Application+Events/007 Study/008 Student360.005 remains HELD.

- Track A IMPLEMENTED/LOCAL_VERIFIED: APP9b8f75a, LABe7810c2, both on
  codex/admin-members-essay-foundation.009 adds admin_member_list,25/page max50,
  source total/filtered total, literal email/name + exact UUID search, lifecycle/
  academic status/grade/school filters, deterministic newest/oldest. Existing
  Member Detail/Student360 reused. Credit remains in detail; recent activity omitted.
- School names: existing NEIS proxy verified J10/7530932 진접고등학교,
  R10/8750182 순심고등학교. Small private2-entry display cache joined by code;
  list external NEIS calls0, missing-vs-unresolved distinct. No profile/master rewrite.
-009 PRODUCTION_APPLIED: Owner returned20261008000900/admin_member_directory. Exact preparation package,
 13395bytes SHA256cc2a6f4a3e0b7f7f1624b7220e9070d3b675d5bf0ff62a2693b842c3ecd0d2cd.
  No005, no replay006–008, no Essay migration. Actual anonymous admin_member_list returns401/42501. Owner postflight PASS: RPC MD5 4ad4a5be429a5b43788b23502ca863e7, postgres/SECDEF/empty search_path, anonymous execute denied; cache RLS/direct CRUD denial and both school names match. LAB e7810c2 Production deployment9e2dc6f2-af55-4210-9953-e64a092ae11a; live member route/new RPC bundle/anonymous login gate verified. Main bfc20c0 adds Owner-requested result ordinals; concurrent brand0847170 preserved. Ordinal Production deployment0494a6f8-c82d-40af-8722-f59f2f519d43 succeeded.
- Track B ANALYZED + OFFLINE FOUNDATION IMPLEMENTED: [gap/mapping/contract](https://github.com/LC3808/legendstudy-app/blob/9b8f75a89877c2b284fbf6e22c0869fed4d248d0/wiki/essay-mixed-mode-foundation.md).
  Current Production50 active universities/21 active exams,0 registered questions/
  criteria within those21. All21 mapped conservatively:8 humanities_social label
  proposals,7 math label proposals,6 UNRESOLVED; no classification backfill.
  Math C/D/E+Storage applied,5 function hashes match, math-private public=false.
  Runtime readiness/Math content counts/provider E2E not inferred from those facts.
- Owner four service categories adopted: humanities_social/business_economics/math/
  science, distinct from question requirements/evaluator bindings. Existing Math
  mixed input/ordered artifacts and Humanities learning/Credit reused conceptually.
  Typed offline planner rejects spoofing/context/rubric mismatch; no runtime/API
  integration or new science evaluator. No AI quality completion claim.
- Tests: LAB539, lint/typecheck/boundary/build PASS; browser8 role/viewport cases
  with page/detail/Student360 and0 list NEIS calls PASS. SQL directory tests and
  PG17 NOSUPERUSER exact activation/grants/denial/collision/rollback PASS. Essay8
  contract tests PASS; existing Math learning/C-D, legacy Humanities102 and14
  installation checks PASS. Flutter NOT_RUN (pinned SDK unavailable); APP UI unchanged.

Full details: [Admin contract](https://github.com/LC3808/legendstudy-app/blob/9b8f75a89877c2b284fbf6e22c0869fed4d248d0/wiki/admin-member-directory.md).
Payment/Toss/Signup/IAP/Manus/Claude APP UI unchanged. Owner authenticated directory acceptance: all requested checks PASS. Follow-up ordinals implemented/local verified in bfc20c0. Larger Essay runtime/content QA requires
separate approval; stop after foundation closeout.

## Shared MY foundation — PARTIAL — 2026-10-08

Signup predecessor stays CLOSED separately; no Credit worker/ledger changes.
School flow LAB `3c432cd` is PRODUCTION_DEPLOYED (Cloudflare `a0ce8879-f129-4e9c-977b-d60b9e22522c`) and OWNER_VERIFIED: school auto-student, optional grade, grade save, reload all “잘됨”.
APP candidate `35ab994eb9702124da5aa1697d32e14817fd760c` on `codex/my-data-student360`, based on Store RC `ca60d73`; LAB implementation `6434fe1`, reconciled with latest Manus `13fc77c` as `1a215d4` on the same task branch. Owner has now confirmed Production ledger entries006/007/008 (Application/Study/Student360); DB activation is PRODUCTION_APPLIED. Owner postflight8 function hashes/grants and2 table RLS/direct-DML denial match; authenticated Production runtime remains pending.

- Target005: one-step university/division, existing year/free text preserved, normalized exact duplicate blocked, same university different division SQL tests PASS. Existing Production unique replacement is HELD under Owner §74. APP source uses row-ID select/delete and no composite ON CONFLICT; Flutter runtime regression NOT_RUN because pinned3.47.6 SDK is unavailable and official download host blocked. Environment draft adds only storage.googleapis.com while preserving existing rules; requires Publish.
- Foundation006–008: additive Application + immutable events/supersession/revision/idempotency/own RLS; same profile/Auth deletion cascade (AUTH phase); no deletion worker change. Shared APP completed Study interval union -> KST today/Monday week/30d/7d; no Web timer DB. Admin Student360 uses existing allowlist, rejects quality-only, supplies shared Study/Application/Essay facts without answer bodies. No invented academic performance or period entitlement.
- Owner read-only preflight: no005+ ledger rows; new schema/tables absent; existing allowed/lock/Admin/deletion function hashes, owners and empty search_path match tested package. Payment body hashes also match source; no Payment mutation.
- Tests: LAB537 PASS, lint/typecheck/boundary/static build PASS; synthetic browser1440/390 one-step Target/Application create/outcome/correction/reload and Study totals PASS. Four PGlite suites plus PostgreSQL17 NOSUPERUSER migration owner/eight-way concurrent idempotency/authorization/Auth cascade/exact activation ledger/replay guard PASS. These do not replace authenticated Production checks.
- Owner applied package006–008:42,673 bytes; SHA256 `bc6a888fbef4bc8c6a069fdc900191a7942f023e72cfe44b7fac376e9a604ee6`. Returned all three ledger versions/names. Do not reapply. Read-only postflight PASS; Target005 remains excluded.
- Independent LAB release candidate `507ed7b` on `codex/my-foundation-activation` retains existing Target behavior until §74/APP checks clear. Preserves latest Manus typography main `857ec9c`. Merged release lint/typecheck/536 tests/boundary/static build PASS; Application/Study browser fixture1440/390 PASS. Now LAB main507ed7b, Cloudflare60564c64-3fe4-49fe-8075-d117f4f24865 SUCCESS; live domain serves new adapters. Actual anonymous read RPC denial401/42501 PASS.

Contracts: [APP shared foundation](https://github.com/LC3808/legendstudy-app/blob/35ab994eb9702124da5aa1697d32e14817fd760c/wiki/my-shared-foundation.md), [LAB MY/Student360](https://github.com/LC3808/legendstudy-lab/blob/6434fe1dea48092d3ae4822b7feaa127a6fb71cb/docs/MY_STUDENT_360_CONTRACT.md).
Admissions Catalog/School Admin/cohort insight/report engine remain BACKLOG. Future division_id preserves year-specific free-text facts. Essay growth remains same-context1–5 only; operator reevaluations excluded.

Read-only audit70B: alleged webhook caller path is not used by canonical Cloudflare; buyer and existing finance contexts are separate. Provider HTTP vs deletion request atomicity gap is CONFIRMED in source; LIVE final grant fence prevents posting, provider success may require refund reconciliation. No live race test, Payment/deletion fix or new finance credential was performed. [Scoped audit](https://github.com/LC3808/legendstudy-lab/blob/6434fe1dea48092d3ae4822b7feaa127a6fb71cb/docs/MY_FOUNDATION_PAYMENT_READONLY_AUDIT.md).
Manus public/MY visuals (including latest typography857ec9c), Payment/Toss and IAP preserved. APP docs-only closeout136e7dc; implementation/package35ab994 unchanged. Continue from Owner authenticated acceptance and Target §74 gate, not historical signup blockers.



## Signup Credit closeout — OWNER_VERIFIED — 2026-10-08

Predecessor task is CLOSED for the affected verified account: canonical grant1,
Credit3, delivery relation, no expiry, and Owner confirms MY plus Essay Header
display. No manual Credit issuance. Missing benefit key and nested helper EXECUTE
were corrected; migration20261008000400 recorded, temporary bridge absent, Workerv22.
Hosted duplicate stress and all social-provider signup E2E were not performed;
local canonical duplicate/concurrency tests PASS. This limited runtime closeout
is separate from the newly authorized MY Data / Application / Study Time /
Student360 work. Existing signup/worker authority is frozen for that next task.


## Signup bonus Production ledger verified — 2026-10-08

Owner read-only result for the affected verified test account confirms exactly1
signup_bonus grant, balance3, benefit_delivery linked to that signup grant, and0
signup grants with expiry. Missing ACCOUNT_BENEFIT_KEYS was provisioned with explicit
Owner approval; missing nested postgres EXECUTE was fixed by recorded migration
20261008000400. Temporary role bridge absent. Existing worker recovery now delivered
through canonical authority; no manual grant or replacement wallet. Diagnostic
Worker remains v22. This verifies actual Production delivery/ledger for one account,
not both queued accounts, a new complete signup E2E, or a hosted duplicate-attempt
test. Local duplicate/concurrency checks passed. MY and Essay Header display still
await Owner confirmation; no authenticated browser credit_summary response supplied
in this final check. No Payment/Toss or Public/MY visual change.


## Signup grant ACL correction — 2026-10-08

**Root cause confirmed; Production correction PENDING.** Owner diagnostic Worker v22
returns CLAIM_HTTP_403_42501 for both pending accounts. Catalog confirms the postgres
definer cannot execute essay_executor-owned credit_post_grant; other helper/schema
permissions pass. APP candidate [3b366ba](https://github.com/LC3808/legendstudy-app/commit/3b366baba40aac8d2a13e1afc70894dd22e18831)
adds migration20261008000400, EXECUTE for postgres on that exact helper only, using
the prior temporary SET bridge with exact membership restoration. No direct
service_role/browser grant, helper body/schema change or manual Credit mutation.
Real local PG17 NOSUPERUSER reproduces the error;118 lifecycle/ACL checks PASS,
including canonical3/no expiry, duplicate/concurrent protection, injected failure
rollback and atomic migration ledger recording. Earlier runtime harness restored
superuser after migration checks and masked the missing nested call permission;
the new regression exercises the production-like owner during benefit calls.
Owner SQL Editor apply bundle is ready, not applied by cloud. Actual grant and
MY/Essay credit summary cross-surface verification remain pending.


## Signup benefit runtime — 2026-10-08 diagnostic candidate

**PARTIAL.** Owner explicitly approved and registered the first benefit HMAC key
(v1); prior missing-secret blocker is resolved. Values were never shared. There
were zero prior marker versions/deliveries and2 eligible candidates; subsequent
read still showed no credit account/grant. Canonical grant policy is unchanged.
Cron targets the expected /dispatch; pg_net reports200 processed0/retryable0. These
are deletion counters, not benefit results. Gateway/three RPC ACLs and reviewed
deployed source hashes checked; hidden individual benefit failure remains unlocated.
APP candidate [ec2b560](https://github.com/LC3808/legendstudy-app/commit/ec2b560096f9f2716804d0585e875577111c98c9)
adds only sanitized aggregate AUTH/MARKERS/CLAIM diagnostics.66 Deno tests/typecheck
and production-file lint PASS. Owner deployment helper retains current files/JWT
gate and stops on concurrent changes. **Diagnostic Production deployment PENDING;
actual signup3 NOT_VERIFIED.** No manual grants, new finance credentials, DB/SQL,
Payment/Toss, deletion architecture or Public/MY visual changes.

## Signup worker configuration blocker — 2026-10-08

Owner targeted live read: verified/profile/service allowed/eligible=true and
in both next20/100 candidates; credit account/delivery/grant absent, posted0.
Thus shared profile initialization is now confirmed for this test user, but
MY edit/persistence acceptance remains a separate Owner check.
Owner Supabase secret-name inventory: ACCOUNT_BENEFIT_KEYS NOT_LISTED;
ACCOUNT_LIFECYCLE_ENABLED and ACCOUNT_WORKER_JWT PRESENT (values not inspected).
Canonical worker defaults missing benefit keys to empty map; markers() rejects
empty map and scheduled benefit catches failure, so heartbeat can remain healthy
with no grant. This is a concrete missing prerequisite, not Credit ledger redesign.
No secret generated/rotated, restore/finance credential reuse, manual credit grant,
lifecycle toggle or DB mutation performed. Next read existing benefit key versions/
marker counts and bounded pending queue to distinguish lost historical key from
first provisioning. No marker values or credentials requested. If no existing
authorized key can be restored, new secret provisioning requires Owner authorization
under the explicit stop condition. Other completed Admin/School work remains intact.

## School aggregate Production activation — 2026-10-08

Owner applied20261008000300 and returned ledger/owner/ACL plus both added-field
checks true. DB function response extended; no table/column/RLS or profile mutation.
LAB main `63abe32` includes school-display candidate and preserves Manus MY
commit013a1ef. Integrated519 tests/lint/typecheck/boundary/static build PASS.
Cloudflare `e0635cd3-d1a8-427a-b1ab-c12ec0d09ea1` SUCCESS; actual Production
Admin JS contains school-name aggregate and unset labels. Authenticated actual
Dashboard school-label spot-check remains Owner-side; no session inferred from assets.
School-name source remains NEIS exact office/school pair, max20 group lookups/cache,
no per-user request; missing name does not display numeric code as label.

Owner reports signup Credit still0 after4de6dfa. Do NOT mark signup verified.
Next targeted read checks profile, service gate, eligibility, worker20/100 candidate
inclusion, credit account, delivery, grant and transactions. Heartbeat alone is
insufficient; no manual grant, worker activation or finance-key change performed.
New-user MY full runtime checklist remains unanswered separately.

## Admin school display / MY contract candidate — 2026-10-08

IN_PROGRESS / NOT_PRODUCTION_DEPLOYED. LAB candidate `0c2b266` on
`codex/admin-school-display`, APP backend `757f8e9` on existing activation branch.
20261008000300 additive dashboard response: top20 office+school identities and
unset count, old field untouched. Exact previous function hash/OID/owner/ACL gates.
Owner live migration-ledger/collision check still required before apply.
Names use existing NEIS proxy per aggregate identity (max20, concurrency4, bounded
public-name cache); no per-user request, new master/profile write/role or MY visual.
Known/unresolved/unset distinguished, counts unchanged, numeric codes hidden in
Dashboard labels. Existing member detail school-name resolver preserved.
Local SQL402+54, LAB513 tests/lint/typecheck/boundary/build and9role-route browser
checks PASS, with aggregate-name/count/unknown/unset checks. These use local SQL
and intercepted browser fixtures, not hosted authorization/DB-apply evidence.

Manus/Student360 contract: profiles display_name, Auth email, school pair/status/grade,
major/interested university/division, canonical Credit states, period entitlementnull.
Essay attempt count unavailable until actual attempts fetched; no evaluation-count
substitution. Conservative 1–5 comparison gate requires full matching criterion/version/
question/regime/evidence context and distinct ordered attempts; no trend shipped.
[Contract](https://github.com/LC3808/legendstudy-lab/blob/codex/admin-school-display/docs/MY_STUDENT_360_CONTRACT.md).
New-web-account MY runtime and +3 actual delivery after4de6dfa still awaiting Owner.
No manual bonus, finance write, application schema or Student360 page created.

## Shared APP/Web profile initialization gap — 2026-10-08

LAB main `4de6dfa`; Cloudflare `025826b1-3966-4760-ada5-2c470fb76179`
SUCCESS, actual Production JS contains school editor. Lint/typecheck/507 tests/
boundary/build PASS; browser32 fixture scenarios PASS including missing-profile
initialization, goals and school/status writes, account isolation. Actual new-user
profile/bonus verification is pending Owner re-entry; no Production success inferred.

Owner test confirmed email verified + eligible but profiles row absent, no benefit
delivery and zero signup grants. Earlier MY persistence PASS was for an existing
profile and did not cover brand-new Web-only accounts. Shared DB/RLS remains the
authority; no separate Web profile, school table or wallet is introduced.
LAB now creates a missing authenticated non-recovery user's own profiles row with
only id and ON CONFLICT DO NOTHING; existing and concurrently-created APP data
are preserved. MY writes retry initialization. This unblocks existing FK/profile
updates and existing benefit-worker candidate discovery; not a manual Credit grant.
Actual +3 delivery remains pending Owner verification.
School/grade/status edits reuse existing APP NEIS and student/retaker/other contract.
No invented school-admin/parent authorization role. Confirmation return uses an
existing login URL, shows completion/continue, and original signup tab reacts to
cross-tab login. No window-close workaround or unverified bonus-success notice.
MY visual redesign belongs to Manus. Application entry remains separate backlog.
No Production SQL/migration, payment/finance or account-deletion logic changes.

## MY actual runtime and saved-goal follow-up — 2026-10-08

Owner confirmed five Production MY checks PASS: Credit read, target/major/division
save, reload, logout/login persistence and account switch isolation. Owner also
confirmed general/review Admin/QL access denied. These supersede earlier pending
MY and general-user denial notes. Admin reads were already Owner-confirmed.

Cloudflare deployment `057b8fcd-1690-4625-b3fe-77f5c872d319` SUCCESS;
actual /account/ JS contains updated school/status and saved-goal UI.
LAB main `dd1d6a1` implements subsequent Owner-requested MY changes: APP canonical
profiles school NEIS pair/academic status/grade read, school-name lookup, saved
major/target summaries with Change/Delete and edit-only forms, separate university
addition area, PC three-column/mobile one-column target cards. No DB mutation or
Payment/Public shell visual change. MY-specific CSS explicitly requested by Owner.
Lint/typecheck/502 tests/boundary/static build PASS; browser32 responsive scenarios
at1440/1280/390/360 and1×/2× include school/status, 3/1columns, save transitions,
ledger/history, logout isolation. Browser tests use synthetic intercepted data,
distinct from Owner's preceding actual Production persistence checks.

Overall activation remains PARTIAL: signup actual confirmed +3/retry E2E and
worker runtime still need verification. Finance writes remain blocked by unverified
existing finance credential/audit-safe reuse; no test grant or refund performed.


## Owner-assisted activation — 2026-10-08 (in progress)

School member-detail change LAB main `afc4f79`: Cloudflare deployment
`71393dd3-4a4d-44c2-b103-12d58d82c371` SUCCESS; live member route HTTP200
and deployed JS contains school-name lookup. Existing public NEIS exact-pair
request HTTP200 returned the matching school name. Lint/typecheck/500 tests/
boundary/static build PASS (fresh build after sandbox Turbopack cache failure).
Actual Admin member school-name rendering still awaits Owner spot-check.
Post-activation real anonymous API calls admin_operator/admin_dashboard/
is_quality_operator/credit_summary each HTTP401 code42501, confirming denial.
General authenticated user denial and MY/signup E2E still pending.


Six migrations Production-applied by Owner, ledger results returned: signup
20261007150000, MY20261008000200, Admin20261007000100/200/400 +20261008000100.
All17 Admin function bodies match source including corrective; anon execute
denied; internal helpers denied to client roles; Inquiry RLS enabled/direct
policies absent by design. Signup cutoff/owner/ACL preserved; major column
UPDATE=true, table UPDATE=false, owner/lifecycle RLS retained. Owner reports
actual admin session Header, Dashboard, Members/review Credit/Ledger, Payment
reads, Ops, Inquiries and /ql all working. This is read verification only.
Normal-user/anonymous browser denial, MY actual writes/isolation, signup actual
E2E remain pending. Finance grant/refund/cancel stay disabled; no TEST grant.
Admin uses multi-member admin_users; QL uses independent quality_operators.
No role inferred from email and no new admin boolean.

Future/P1 backlog ONLY (not implemented): Super Admin (Owner, full service and
Admin Management); Service Admin (scoped Support/Credit/Essay Ops/Quality/Finance
read); Super-Admin-only Admin Management with role/status/permissions/created date
and add administrator. Permission candidates: Members, Credit, Payment Read,
Finance Write, Essay Ops, Math Ops, Inquiries, AI Quality, Admin Management.
Future organization/school memberships, staff/teacher roles, student membership,
scoped admin/reporting, school entitlement/Credit/analytics. Cross-school access
must be denied; no profiles.is_school_admin boolean. Not a launch blocker.

School display follow-up reuses existing APP NEIS public proxy in Admin member
detail, no DB/new credential/Public visual/Payment change. Overall closeout
remains PARTIAL until remaining runtime verification.



# CURRENT_STATUS — LegendStudy+ (as of 2026-10-05)

> **This document holds current facts only.** It is *not* an append-only log — see the [Daily history](../90_HISTORY/DAILY/) for how we got here.
> Status axes are defined in [`AI_CONTEXT.md` §7](AI_CONTEXT.md#7-status-vocabulary). `NOT_ASSESSABLE ≠ PASS`.

## Production activation closeout — 2026-10-08

**PRODUCTION_ACTIVATION_STATUS: PARTIAL. DB_PRODUCTION_APPLIED: NONE.**
Owner separates Codex function/data/backend authority from Manus public visual
ownership. Codex preserved Manus main371e30a/ae44317 unchanged and shipped only
conditional Admin navigation plus existing member-detail data fields.

LAB main `63f8dc37484eebff533b7b84caaec2753f5a1972` on latest mainae44317.
Cloudflare Production46948063-e9a9-41cb-a234-e582785d8a30 SUCCESS.
Header [관리자] appears only after existing admin_operator returns boolean true;
anonymous, normal user, recovery, missing/error RPC, account switch/logout fail closed.
No email-based admin flag or new role. Existing Admin IA and /ql remain intact.
Members add only existing verified-email/provider/major/interested university fields.
No CSS/Home/LAB/Pricing visual edits by Codex.

Backend candidate `codex/production-activation-closeout` at `afada0d` (APP canonical
final Store RC7d1c036 + verified-signup guardba1f875). Original Admin candidates
20261007000100/200/400 retained byte-for-byte; additive20261008000100 fixes canonical
CANCEL_PENDING exclusion (spendable/reserved/expiry), inquiry Auth UUID→credit account
mapping, and bounded member fields. Exact body/security property preflight rejects
unknown live definitions; OID/owner/ACL preserved. No old migration history rewritten.

A real MY SQL defect was found: profiles.intended_major had no authenticated UPDATE
column privilege. Additive20261008000200 fixes only that column with exact existing
owner-RLS checks and rejection of extra permissive user-write policies. Target/major
save and other-owner denial verified locally, not on a hosted member.
Signup20261007150000 remains the existing verified-email guard: canonical once,+3,
no intrinsic expiry, existing lifecycle/ledger/idempotency unchanged. No worker or
Auth setting activation, new wallet, signup backfill or general-user mutation.

Tests: LAB496/44 files, lint/typecheck/boundary/build/readiness PASS. Local browser9
role/route functional checks PASS (intercepted data). Original402 Admin SQL checks
+46 correction/signup/MY RLS assertions PASS in PGlite. Real local PostgreSQL17.11
reran402 checks plus8 concurrent signup connections: one grant,one transaction,+3,
no expiry; pre-confirm denied and relogin retry same grant. Existing full lifecycle
suite with signup guard:112 checks plus ownership/rollback PASS, including synthetic
local erase/grant race. No hosted/destructive/general-user test data used.
Actual Production assets passed the same9 intercepted functional role/route checks.
13 relevant routes returned HTTP200; Admin/QL noindex retained. No visual audit or
real authenticated data write was claimed.

Fresh Production public probes: Auth confirmation ON, signup enabled;
admin_operator/admin_dashboard PGRST202; is_quality_operator and credit_summary deny
anon (42501). Payment read-only runtime: REVIEW/TEST, consumer_purchase=false. Config
presence does not establish finance JWT subject/role/expiry or Admin audit-safe reuse;
essay_admin_grant derives actor from signed finance subject. No new signer/token or
finance server is introduced. Credit grant/cancel/refund remain closed.

**Verification axes:** ROUTE verified as below. AUTHORIZATION: Production anon QL/
Credit denial verified; real normal/admin/quality-operator session NOT_ASSESSABLE.
DATA: hosted authenticated Admin/MY NOT_ASSESSABLE. WRITE: hosted NOT_RUN.
CROSS_SURFACE: actual Admin grant→ledger→summary→MY→Essay header NOT_RUN.
No real test/review grant: accountnone,quantity0,origin/reasonnot recorded.
Existing admin@legendstudy.com account/allowlists remain Owner/Claude evidence,
not independently re-read. No new Admin account or password lookup.

Blocking prerequisites remain absent: existing hosted DB/Supabase management access,
real safe admin/reviewer sessions, verified reuse of existing finance authority.
No migration ledger/function activation/worker state could be read or applied.
Safe preflight/apply/rollback instructions are in the backend candidate; no broad
migration push, history repair or inferred Production success. Runtime-not-assessable
MY implementation is retained. User was asked only about secure environment binding,
never to paste credentials. No new secret/credential issued.

PAYMENT_TOSS_CHANGED: NO. PUBLIC_FRONTEND_VISUAL_CHANGED_BY_CODEX: NO (approved
conditional navigation only). DESTRUCTIVE_PRODUCTION_ACTIONS: NONE.
NEXT: APPLICATION / COUPON / ESSAY RUNTIME / GROWTH — not started. STOP.
[LAB details](https://github.com/LC3808/legendstudy-lab/blob/main/docs/PRODUCTION_ACTIVATION_2026-10-08.md).
[Backend candidates and verification](https://github.com/LC3808/legendstudy-app/blob/codex/production-activation-closeout/wiki/production-activation-closeout.md).

## Overnight Phase C / final closeout — 2026-10-07

**OVERNIGHT_STATUS: PARTIAL. AUTH_SIGNUP_CREDIT: PARTIAL. MY_DASHBOARD: PARTIAL.
ADMIN_QL: PARTIAL.** Independent implementation, main/Production release and Wiki
closeout complete; unavailable hosted credentials and migration discrepancies remain.

LAB main `b79e9baf3b02a6ed3ed0c7f53cbb3f4fb89a0dab`; Cloudflare Production
`984fa6fe-608d-452d-9312-ae5accd29109` SUCCESS (GitHub check). Prior MY deployment
`f2719534-9362-457a-b418-d6e2869e174a` also succeeded. Existing Admin/QL consumers
selectively reused, preserving current public UI, Auth, Credit, Payment and deletion.
Internal IA: `/admin/`, members, credit, payment, operations, inquiries; AI Quality
links to existing `/ql/`, with separate operator authorization. No public nav link,
noindex/robots excluded. Account switch/logout unmounts prior user data.

485 tests/43 files, lint/typecheck/boundary/build/readiness PASS. Browser fixture:
168 Admin/QL conditions (7 routes ×4 widths ×100%/200% ×3 Auth states) PASS; ordinary
members do not request operational data, logout clears member data, finance grant
button disabled. Production unauthenticated HTTP200 for all17 tested public/MY/Admin/QL
routes; internal noindex verified. Actual Production assets also passed the same168 intercepted browser conditions,
with zero browser errors and no horizontal overflow.
MY prior actual-bundle fixture32 checks PASS. These intercepted checks prove frontend
behavior, not real operator access or hosted data mutation.

Hosted read-only probes: admin_operator/admin_dashboard PGRST202; is_quality_operator
42501 to anon. Existing admin@legendstudy.com membership is Owner/Claude evidence,
not independently re-read. No new account or privileged credential. Finance server
from old branch not imported because it independently mints a JWT. Credit grant and
payment finance writes remain closed; no TEST/REVIEW grant performed (quantity0,
ledger/MY/Essay-header grant-chain E2E NOT_RUN).

Admin migrations20261007000100/200/400 NOT_APPLIED. No live migration ledger/ownership/
ACL connection available, and old SQL must not be applied unchanged: Admin balance
calculations omit canonical Payment CANCEL_PENDING spendability exclusion, and P0B
inquiry detail passes Auth UUID to a helper requiring credit-account UUID. Reconcile
Admin reads against canonical credit_summary, verify distinct identities and current
ledger/collisions/rollback before apply. Payment itself remains frozen.

Phase A APP branch `codex/overnight-verified-signup` at `ba1f875` retains minimal
verified-email eligibility guard20261007150000 (implementation066fa90), local11
PostgreSQL/PGlite assertions and Wiki checker PASS. No APP main promotion or hosted
apply: canonical base is final Store RC, not old APP main. Existing +3 once-per-account
idempotency remains source authority; deployed bonus timing/activation/verified-email
behavior are NOT_ASSESSABLE. Public Auth email confirmation ON. No signup policy
setting changed, backfill, general-user credit, actual payment or deletion occurred.

DB_APPLIED: NONE. PAYMENT_TOSS_CHANGED: NO. DESTRUCTIVE_ACTIONS: NONE.
NEXT (Owner queue, not started): APPLICATION / COUPON / ESSAY RUNTIME / GROWTH.
STOP after this closeout. Remaining prerequisites: existing secure hosted DB binding,
real review/operator session, existing finance credential reuse (never mint/rotate).
[Admin source/reconciliation details](https://github.com/LC3808/legendstudy-lab/blob/main/docs/OVERNIGHT_ADMIN_QL_2026-10-07.md).

## Overnight Phase B — MY Dashboard (2026-10-07)

**PARTIAL (implemented/deployed; hosted member-data acceptance unavailable).**
LAB main `f0e612df4eda57d04695e440cd17b4a99a1638e7`; Cloudflare Production
`f2719534-9362-457a-b418-d6e2869e174a` SUCCESS. MY final six-section IA,
canonical Credit usage/history, shared profile/target edit, actual Essay records /
1–5 dimensions, other LABs and account/support links. No Application schema, coupon,
new ledger, fake score or Payment change. Account switch/logout clears private state.
320 tests/30 files, lint/typecheck/boundary/build/static secret scan PASS. Local and
actual deployed bundle 32 responsive conditions, goal edits, history, dimensions and
logout PASS using intercepted fixtures only. Hosted unauthenticated routes HTTP200
with login gate (release query distinguished stale proxy-cached old responses).
No real user mutation or real authenticated-data acceptance; no credentials provided.
[Details](https://github.com/LC3808/legendstudy-lab/blob/main/docs/OVERNIGHT_MY_2026-10-07.md).
Phase C closeout is recorded above. Read-only anonymous Production probe: admin_operator/admin_dashboard
PGRST202 (not in schema cache), is_quality_operator 42501 (exists, anon denied).
Existing operator membership retained from Owner/Claude verified evidence, not re-read.

## Overnight Phase A — verified signup (2026-10-07)

**PARTIAL.** Existing canonical +3 ledger/benefit pipeline reused. Source eligibility
formerly checked only signup cohort time; a minimal guard adds verified email to
`credit_signup_eligible` while retaining installation cutoff, OID/owner/ACL and all
ledger idempotency/locks. APP RC-based `codex/overnight-verified-signup` contains
migration `20261007150000` + 11 local PostgreSQL/PGlite assertions PASS and Wiki checks.
No APP main promotion: APP main is not backend authority. No Production apply,
backfill, transaction, credential issuance or deletion/Payment architecture change.
Hosted migration ledger/function/activation reads and new-user grant E2E BLOCKED:
no DB/admin credential or relevant connector in this environment. Email confirmation
ON is the verified public setting; deployed guard presence is not inferred.
[Backend evidence](https://github.com/LC3808/legendstudy-app/blob/codex/overnight-verified-signup/wiki/verified-signup-overnight.md).
Owner supplied full Overnight plan; prior missing-plan gate resolved. MY/Admin UI
now deployed (closeout above); blocked hosted operations remain deferred.

## LAB visual follow-up / direct checkout — 2026-10-07

Owner approved the prior IA/copy and requested subtle visual depth, centered score
LAB heroes and direct Pricing checkout. LAB main `3a1c69f99812321778bb166aa4376a0013b88462`
implements warm neutral canvas, white surfaces/borders/shadows, shared centered
내신/모의·수능 hero cards and Essay surface harmony. No repeated diagram, new imagery,
Home copy/IA change, or MY redesign. Brand `#ffac14` retained.

**CHECKOUT_DIRECT: PASS (frontend contract/browser).** Pricing embeds the existing
PaymentCheckout controller: SKU selection → existing order API → existing official
Toss SDK request. No second checkout-selection page. The old checkout route remains
for direct links/fallback. Buyer session, server authorization, per-SKU idempotency,
stale-order retry, server amount/customer/success/failure URLs preserved. Login returns
to Pricing with selected SKU; no automatic purchase after login. Double clicks guarded.

Local lint/typecheck, 313 tests/28 files (20 focused checkout tests), boundary/static
build/readiness/secret/link audits PASS. 96 responsive public checks PASS. Intercepted
browser direct checkout at 1440/1280/390/360 ×100%/200% text and guest login/SKU flow
PASS; no external order/payment. Production 12 pages ×4 widths ×100%/200% text =96 PASS, HTTP200 and no horizontal
overflow; new surface/centered hero confirmed live. Actual deployed bundle direct
entry + guest SKU flow also PASS with Auth/orders/SDK fully intercepted. No new
Production payment or signup transaction. Deployment ID unavailable from GitHub APIs.
No new real Toss transaction or authenticated reviewer acceptance is claimed.

**PAYMENT_BACKEND_CHANGED: NO. DB_CHANGED: NONE.** Functions/payment runtime/mode/
keys/finance/confirm/cancel/signing/schema/migrations unchanged. Credit/deletion
and Admin/QL implementations preserved. Detail:
[LAB visual follow-up](https://github.com/LC3808/legendstudy-lab/blob/main/docs/VISUAL_FOLLOWUP_2026-10-07.md).

Owner now directs continuation to Overnight AUTH/CREDIT → MY → ADMIN/QL; this
supersedes the previous task's STOP routing. **Detailed Overnight authority is missing
from the supplied follow-up and Wiki** (MY six section names are known; feature/data
contracts and phase acceptance are not). Requested the referenced detailed plan.
Existing Admin branch inspected read-only: includes independent finance JWT signing
and unapplied backend migrations, so it cannot be blindly merged under frozen
Payment/signing constraints. Hosted bonus definitions/activation still cannot be read
with available public credentials. No backend policy, provisional MY dashboard or
Admin write path was invented while those requirements/access remain unresolved.

## LAB frontend reconciliation — 2026-10-07

**LAB_FRONTEND_RECONCILIATION: PARTIAL** — UI implemented, main pushed and live shell
verified; Production bonus timing/idempotency read-only verification remains unavailable.
LAB implementation `65aa9571de6b2a6674274cee66f48c57a77d6481`; final main
`f7f05f56c0c79d117d8416ddf106ccb45e2bd00f` adds verified Auth/publication notes.
Existing Git-connected Production serves the new shell at https://lab.legendstudy.com.
Cloudflare deployment ID/status is not exposed by the available GitHub APIs; live
content is verified, not inferred from push. No Cloudflare configuration changed.

Same public Header before/after login: 내신 LAB / 모의·수능 LAB / 논술 LAB / 이용 안내;
brand is Home. Credit uses existing `useCreditSummary`, no loading-as-zero or invented
entitlement. Home typography/wrapping/duplicate CTAs and graphic cleaned; concise
login/signup and APP-authority LAB copy; new `/exam-analysis/`; footer email purposes.
Pricing: 판매 상품 → 학교 단체 이용 / 이벤트 프로모션 → 구매 안내. Existing checkout,
Essay Credit and lifecycle preserved. Auth soft-navigation `next` / duplicate redirect
and initial hydration fixed without backend policy changes. Legacy guide redirects
resolve in one hop. Examples remain clearly examples, no new evaluation capability.

Verification: lint/typecheck, 307 tests (28 files), boundary audit, static build,
GitHub-readiness/static-secret scan PASS. Local 96 public responsive conditions plus
40 intercepted signed-in/out conditions PASS, including mobile MY/Credit/logout and
login→account. Production 12 routes ×1440/1280/390/360 ×100%/200% text =96 PASS,
HTTP200/no horizontal overflow. Home/Login/Pricing screenshots reviewed; no broken
Korean desktop words. Live Home CTA preserves `next=/account/`, form enabled, no
page errors; Pricing order and four legacy redirects PASS. Actual signed-in Production
was not tested (no supplied account); local fixture is not a live-account claim.

Production Auth public settings read-only: `mailer_autoconfirm=false` (Email
confirmation ON), `disable_signup=false`. New email/password signup should return
no session and pre-confirm password login requires confirmation under this setting;
no new Production signup/login was executed. Bonus current deployment/activation and
exactly-once enforcement remain **NOT_ASSESSABLE** without privileged read access.
Source APP final RC `7d1c036`: +3 profile/claim path in `20260929000300`, superseded
when lifecycle enabled by confirmed-email worker/benefit recovery in `20261001000300`.
Source idempotency: `credit_signup_once_per_account`, external ref/transaction keys,
`benefit_claims`/`benefit_delivery` and locks. Do not infer deployed state from source.

Read-only branch reconciliation: home-simplification and lab-ui-reconciliation fully
included in baseline main; privacy patch files identical to main despite different
ancestry; admin-console (5 unique commits) and quality-console (4 unique) left intact,
not merged/cherry-picked. Full evidence:
[LAB closeout](https://github.com/LC3808/legendstudy-lab/blob/main/docs/FRONTEND_RECONCILIATION_2026-10-07.md).

**PAYMENT_CHANGED: NONE. DB_CHANGED: NONE.** Toss/finance/Functions, Credit schema,
account deletion lifecycle and Admin/QL untouched. No payment transactions, live
activation, new wallet/coupon/signup bonus/Application backend. Stop this task here.
Next Owner queue: **AUTH/CREDIT/MY → ADMIN → APPLICATION/COUPON/ESSAY/GROWTH**;
this routing does not authorize starting them. Read deployed Auth/Credit authority first.

## APP final Store RC — verified 2026-10-07

APP base `73a2a35` (`origin/claude/app-release-blocker-closeout-1`), closeout branch
`codex/final-store-rc-1`. Owner full test **+967 ~2 PASS** supersedes older936/CI-pending
APP claims below. Fresh Flutter3.47.6/Dart3.13.5 analyze **PASS**, unsigned Android AAB,
iOS release and Xcode archive **PASS**. SDK wrapper corrected3.47.5→3.47.6; no app feature
or dependency change. Native personalization/LAB/notification implementations retained;
Manus logos optional/deferred. Standard Android build regenerates release registrant;
`--no-pub` after pub get failed on dev-only integration_test, no source workaround needed.

**Owner release defines CONFIRMED:** deletion, essay writes and evaluation all true.
APP tool/store-release preserves other production values and shares flags across Android/iOS.
Android existing upload-key binding prepared; no feature-code changes. Opus independent
audit P0=0/P1=2 was cross-check evidence; both define P1s resolved.
**Store NOT READY:** upload/distribution signing, recovery redirect verification, external-web-link policy review, device
smoke and Console/reviewer/screenshots/build-number inputs. Physical iPhone detected but
not installed/tested; no Android connected. Required public policy/support/deletion URLs
HTTP200. Oct06 destructive deletion authority preserved, not rerun. Report +25-item smoke
checklist: APP `wiki/final-store-rc-1.md`. No Production mutation, upload or Toss work.

## Toss REVIEW confirm closeout 2 — 2026-10-07

LAB main/Production `e1adc86`, successful deployment `52e432a9` includes bounded
REVIEW RPC401 diagnostics and canonical completion/failure UI; latest HOME changes
9691ef3 preserved. 264 tests, lint/typecheck/boundary PASS; direct Node22 build PASS
(pnpm fallback build hit a local port sandbox limit). Local223/live12 assets secret
scan PASS. TEST completion says test confirmation only; LIVE completion requires
PAID/POSTED. Failure retains manual retry/account link and never claims success.

**Finance JWT binding restored (Owner), runtime401 resolved.** Previous deployed
failure was CONFIRM_HTTP_401 [FINANCE_RPC:PGRST301]. After Owner re-registered the
existing PAYMENT_FINANCE_TOKEN, same-order confirm now returns409, not401. DB verifies
old order expired at2026-10-07 10:36:59UTC; remains TEST/ORDER_CREATED/NONE/grant NULL.
Latest successful Production deployment d1ee4a58 at main6584e25 includes e1adc86;
parallel Pricing changes preserved. No new token/signing/schema/code change here.

**TOSS CONFIRM CLOSEOUT 2: COMPLETE.** Owner fresh3-Credit TEST payment verified
2026-10-07 10:56:27UTC: PAID / TEST_RECORDED / grant_id NULL / CONFIRM SUCCEEDED
(exactly1 successful confirm). Reviewer payment-linked grants remain0: payment-
attributable spendable Credit delta0. Real charge:NO (TEST). Actual success page
shows “결제가 완료되었습니다.” and “3 Credits 상품의 테스트 결제가 정상적으로
확인되었습니다.” with /essay-lab/ and /account/ links. HTTP401 blocker resolved by
Owner restoration of existing finance Secret binding; no new JWT/provisioning,
schema, architecture or LIVE change. No further Owner payment retest needed for
this closeout. External card approval and email sending are separate; no email sent.

Owner-requested final DB recheck: same latest order and all success assertions PASS;
public runtime REVIEW/TEST confirms LIVE_PAYMENT_ENABLED:NO. CARD_REVIEW_READY:YES
(TEST technical evidence), TOSS_EMAIL_READY:YES (evidence ready, not sent).
Known-good payment runtime frozen: no further transactions/backend/env/key changes.
Success-page presentation polish main9827a9f uses existing brand tokens, confirmed
order quantity/price, responsive completion card and two CTAs; POSTED guard unchanged.
No balance fabricated; authoritative balance absent from current response.278tests,
lint/typecheck/boundary/Node22 build and static secret scan PASS.

## Launch target

**2026-10-10 — before the 연세대 논술.** This is a target, not a guaranteed release date. This supersedes any earlier "mid-October" style dates in historical docs.

## RELEASE CLOSEOUT — 2026-10-04 latest operational truth

> This block supersedes older domain bullets below where they conflict. Older cited evidence remains historical context.

| Area | Current state | What is actually left |
|---|---|---|
| Payment | **IMPLEMENTATION COMPLETE / TEST E2E COMPLETE / LIVE OFF.** LIVE/TEST server paths, canonical Credit Ledger, confirm/cancel/refund/reconciliation implemented. | Paid launch only: Production payment activation/config, Toss/card approval, small LIVE smoke. Free launch may keep LIVE payment off. |
| Pricing | **PRODUCTION_VERIFIED** — LAB main `3370dad`; approved 1/3/5/10 products/IA live; CTA disabled. | Connect/enable CTA only after payment activation. |
| APP Release | APP closeout `0570099`: **936 Flutter PASS**, analyze PASS; Android AAB + iOS unsigned release compile PASS; feature/data/reviewer packages prepared. Deletion-blocker code complete (`0b0b562`): Apple revoke + Email/Google/Apple/Kakao reauth + cancel-UI wiring; privacy wording reconciled (`legendstudy-lab 8c951cb`). Owner credential/flag/migration gated. | P0 code: deletion runtime activation, final integration. Owner: signed builds/build number/reviewer/device/Console. |
| Math | **2026-10-05 BLOCKED / MATH_RELEASE_CANDIDATE NO.** Existing extraction JWT re-registered with Owner approval; no issuance. Hosted upload/read/admission now PASS, two synthetic artifacts PRESENT. SQL evaluation remains OFF. LAB `e4d8ce9` deployed; focused tests/typecheck PASS. | Canonical Credit funding still blocked: current session lacks essay_finance, no existing Production finance credential located. OpenAI extraction reached provider but returned HTTP400; JSON input-message correction deployed, Hosted retest pending. Evaluations0; Credit -1/reevaluation0 and erasure unverified. No new infrastructure/accounts/JWTs or Payment changes. |
| Account deletion | **[2026-10-06] PRODUCTION-ACTIVE — worker ON, destructive E2E PASS, web LIVE (see activation note at right).** ADR SQL applied; app request/status/cancel/restriction/local purge implemented. **Deletion-blocker code complete** (`legendstudy-app claude/app-release-blocker-closeout-1 @ 0b0b562`, 53 deno tests PASS): Apple revoke chain + Email/Google/Apple/**Kakao** reauth + cancel-UI provider wiring (reauth chosen from verified `app_metadata` provider). Additive worker-only migration `20261005000100` **APPLIED + VERIFIED in Production (2026-10-05, ledger-tracked)** — `account_private.provider_revocation_material` (RLS on, worker-only) + `account_store_apple_revocation`/`account_provider_material` (SECURITY DEFINER, empty search_path, EXECUTE only to `account_lifecycle_worker`); ADR-2 lifecycle `20261001000300` confirmed already applied (schema/`fenced`/role enrolled). **Privacy correction LIVE in Production (2026-10-05):** cherry-picked `8c951cb` into LAB `main @ ed8a1ca` + deployed; lab.legendstudy.com/privacy/ no longer claims answers/scores/school/grade aren't server-stored (corrected to shared-backend storage + de-identified improvement use). **Deletion Edge functions DEPLOYED (fail-closed/disabled):** `delete-account` (401 without auth) and `account-deletion-worker` (503 until secrets) are live in Production and will auto-activate when secrets are set. | **ACTIVATION COMPLETE + destructive E2E PASS (2026-10-06).** Worker secrets all set (`ACCOUNT_LIFECYCLE_ENABLED`/`ACCOUNT_FINANCE_REVIEWED`/`ACCOUNT_EMAIL_REAUTH_ENABLED`=true; `ACCOUNT_RESTORE_CHECKPOINT_URL`/`ACCOUNT_NOTIFICATION_URL`→`account-ops-sink`; `ACCOUNT_OPERATIONS_TOKEN`; dispatch secret synced Edge+Vault `account_dispatch_secret`). Dispatch pg_cron runs every minute; `dispatch_health.enabled=true` (dispatch itself runs `account_deletion_maintenance`, so no separate watchdog cron). **Three fixes (app `d95b983` + migration `20261006000100`):** (1) worker RPC/GoTrue auth switched to the existing `SUPABASE_SERVICE_ROLE_KEY` (EXECUTE granted to only the 22 `account_*` RPCs the worker calls) — the project migrated to ES256 asymmetric JWT signing and rejected the custom `account_lifecycle_worker` HS256 token; (2) `account-ops-sink` `const URL`→`SB_URL` (it shadowed the global `URL` constructor, so `/checkpoint` threw 500 and blocked every dispatch before `claim`); (3) `math_attempts.student_id` FK RESTRICT→CASCADE (ADR-2 predates Math; RESTRICT blocked the `auth.users`→`profiles` cascade, so the GoTrue admin user-delete returned 500 / `AUTH_UNAVAILABLE`). **Synthetic test1@ E2E:** REQUEST→CANCEL+email reauth→RE-REQUEST→deadline-accel (test1 row only; 336h constant + policy untouched — shifted `requested_at` & `scheduled_deletion_at` together to keep the `=requested_at+336h` CHECK)→destructive worker→`ERASED`/`DONE`. **Verified:** auth user + profile + 7 `math_attempts`/7 `math_evaluations` (and all CASCADE children) erased; other users' Math untouched; credit account de-identified (`user_id`→NULL, grants/txns retained = intended financial retention via the FINANCE phase); request `subject_id`→NULL; 30-day (720h) ERASED receipt. **Web deletion LIVE:** LAB `main @ b0bde4e` + Cloudflare `NEXT_PUBLIC_ACCOUNT_DELETION_ENABLED=true`; https://lab.legendstudy.com/account-deletion/ shows the login-gated request/status flow via the `delete-account` Edge function. **Storage byte-erasure:** mechanism applied, but test1 used typed Math input → Storage objects were **0 before and 0 orphans after**; **no existing-byte 1→0 destructive evidence in this synthetic case**. Minor copy follow-up (non-blocking): the /account-deletion "삭제와 보존 범위" paragraph still says the request feature is not enabled (now stale). Non-blocking perf: the worker writes a checkpoint receipt every dispatch even with an empty manifest → `account_private.ops_log` grows ~1,440 rows/day; add a TTL/conditional checkpoint later. |
| Privacy/data | Owner authority: APP and LAB are connected surfaces sharing backend/data; integrated privacy framework is target. | Replace contradictory no-server-storage public wording with implementation-aligned integrated policy before Store submission. |
| Release target | **Final RC / Store standby** | Finish only P0 above; Community/admissions/subscription/goods are out of scope. |
| Admin console | **DESIGNED / PLANNED — read+audit+plan only, no implementation.** Owner set the release-operations P0 IA (Dashboard · Members · Credit · Payment · Essay/Math Ops · AI Quality) and confirmed the existing `/ql` Quality Console is **reused as the AI Quality module**. The backend foundation already exists (191 RPCs, two operator allowlists `quality_operators`/`admin_users`, full credit/payment/essay/math/quality schema) but there is **no operator-scoped read RPC** and **no console UI**. Plan: 3 phases — A shell+gate+dashboard+member lookup incl. credit read (no Owner dependency); B credit grant + payment ops (Owner-blocked on a Production `essay_finance` credential); C essay/math ops + `/ql` merge. Canonical ledger is `legendstudy-app claude/app-release-blocker-closeout-1 @ 0b0b562` (32 migrations); **APP `origin/main` holds only 1 migration and is not backend truth.** |
| Web / Store QA (2026-10-05) | **Production routes PASS; Store inputs still blocked.** All 8 required public routes HTTP200 with zero horizontal overflow at desktop and 390px, no broken internal links, correct sitemap/robots. **W-1 (RESOLVED 2026-10-05):** `/privacy/` reconciliation merged + deployed (`8c951cb`→LAB `ed8a1ca`); live copy no longer denies server storage. **W-2 (RESOLVED 2026-10-06):** `/account-deletion/` now serves a functional login-gated request/status flow (LAB `b0bde4e` + Cloudflare `NEXT_PUBLIC_ACCOUNT_DELETION_ENABLED=true`), a usable Google deletion URL; backend destructive E2E PASS. **W-3 (MEDIUM):** the 404 page publishes internal dev vocabulary. **W-4 (LOW-MEDIUM):** `/essay-lab/*` foundation pages carry internal vocabulary but are `noindex`, robots-disallowed, unlinked and absent from the sitemap. Apple/Google answer drafts READY; privacy URL, deletion URL, reviewer account, signing/build number and screenshots remain blocked. |

### Canonical handoff refs

- APP latest Math/Production activation evidence: `35d237607f2ccbb70a15f09a420035a65636f9fa`.
- APP release closeout evidence: `0570099c98929b27f8e484210efc14fe061e8476`.
- LAB account-deletion implementation: `e512974`.
- LAB Production pricing/main: `3370dad08ad4042046d158f56fd1d38f778c9e26`.
- Math LAB consumer closeout: `6dec4f98887cee2e7c661996e083289b853054b3`; verify the later Codex Math activation branch HEAD before editing.
- Unified Wiki authority: `main`; verify HEAD before work.

### Handoff completion rule

Every task ends with: code/runtime result → Daily append → CURRENT_STATUS update if facts changed → AI_CONTEXT routing update if next gate changed → commit/push. **Daily-only logging is not a complete handoff.** Another AI must be able to resume without reconstructing chat history.

---
## Critical path (fact vs plan)

| Step | State |
|---|---|
| Unified Wiki P0 (this repo) | Bootstrap complete; **UWA-2D FREEZE CANDIDATE — UWA-2E pending** |
| LAB Essay canonical contract mapping | **IMPLEMENTED / LOCAL_VERIFIED** (LEC-1) — LAB consumes deployed `ql-read-v1` as a pure consumer |
| Quality Console v0 | **IMPLEMENTED / LOCAL_VERIFIED** (LEC-2/3) — operator-only `/ql`; Production detail runtime `NOT_ASSESSABLE` (no legitimate case) |
| Human Quality persistence design | **DESIGNED / CANONICAL_DB_REVIEW: PASS** — final E1/E2 implemented; Owner SQL/tracking applied |
| Human Quality persistence implementation | **IMPLEMENTED / ISOLATED_VERIFIED**; Owner SQL/tracking APPLIED; actual gateway authorization PASS; normal INSERT NOT_ASSESSABLE |
| Human Review write UI (HQR-1) | **IMPLEMENTED / LOCAL_VERIFIED** — operator `/ql` consumes HQP RPCs; Production operator write `NOT_ASSESSABLE` (no legitimate case) |
| Math Essay LAB consumer (MATH-3B…7B + RELEASE-CLOSEOUT-1) | **IMPLEMENTED / LOCAL_VERIFIED** — LAB consumes deployed MATH-2C/2D/2E RPC surface; `claude/math-vision-input-3b @ 6dec4f9`; `PRODUCTION_NOT_APPLIED`; no live provider; R21 Storage / ADR-2 erasure / worker-gateway / provider path remain **EXTERNAL_GATES** |
| Payment / commercial launch work | **TEST implementation + E2E preparation verified locally; Hosted setup and merchant E2E pending** |
| LAB public pricing page (PRICING-UX-CLEANUP-1D) | **PRODUCTION_VERIFIED** — main `3370dad`; released and verified live at `lab.legendstudy.com/pricing/` |
| Release / store readiness | **planned** |

> The ordering above is the current working plan; it is not a new Owner-approved reprioritization.

## Domain status

Each domain: `STATUS` · `PRODUCTION_STATE` · `CANONICAL_SOURCE` · `NEXT_GATE` · `KNOWN_LIMITATION`.

### PROJECT
- **STATUS:** active, pre-launch · **PRODUCTION_STATE:** backend live; no real-student Essay traffic yet
- **CANONICAL_SOURCE:** this hub (`legendstudy-docs`) for project-level state
- **NEXT_GATE:** CODEX UWA-2E FINAL READ-ONLY FREEZE CHECK, then Owner acceptance; no product implementation authorized by this closeout.
- **KNOWN_LIMITATION:** two user surfaces (APP/LAB) + one shared backend must stay reconciled via Daily Closeout

### APP
- **MOBILE APP:** `PRIMARY_STATUS: IMPLEMENTED` · `PRE_RELEASE` (Flutter).
- **BACKEND USED BY APP:** Production components exist; this is not a mobile store release claim.
- **OWNER DEVICE ACCEPTANCE:** scope-specific acceptance exists; remaining checks are separate.
- **STORE RELEASE:** PENDING / NOT YET RELEASED; Store/release gates INCOMPLETE / REMAINING.
- **CANONICAL_SOURCE:** [APP current status](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/current-status.md); [Owner acceptance](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/auth-native-owner-acceptance.md).
- **NEXT_GATE:** remaining store/release readiness under Owner-approved scope.
- **KNOWN_LIMITATION:** local `main` is not necessarily the current task branch; verify the task ref.

### LAB
- **STATUS:** `PRODUCTION_APPLIED` for public landing/auth; Quality Console (read + Human Review write UI) `IMPLEMENTED / LOCAL_VERIFIED` (not yet Production-verified)
- **CANONICAL_SOURCE:** `legendstudy-lab` (`claude/quality-console-v0 @ ce9d04e`); mappings in `docs/architecture/LEC-1_CANONICAL_ESSAY_MAPPING.md` + `HQR-1_HUMAN_REVIEW_CONTRACT_MAPPING.md`
- **NEXT_GATE:** LAB deployment / operator availability → first legitimate evaluation → first Production Human Review write E2E (currently `NOT_ASSESSABLE`)
- **KNOWN_LIMITATION:** a single LAB branch does not represent all current truth — architecture docs and product branches can diverge; verify per task. The LAB `ql-read-v1` TypeScript types are a consumer representation, not DB authority.

### SHARED BACKEND
- **STATUS:** `PRODUCTION_APPLIED` / partly `PRODUCTION_VERIFIED` · **PRODUCTION_STATE:** Supabase live
- **CANONICAL_SOURCE:** migration ledger + live DB, physically in `legendstudy-app/supabase/migrations`
- **NEXT_GATE:** HQP applied/tracked by Owner; actual gateway authorization PASS. Next is separately authorized Human Review write UI. Existing LAB mapping is delivered. Separate-tracking debt remains recorded; it is not authorization to repair the ledger or run a broad db push.
- **KNOWN_LIMITATION:** physically hosted in APP repo but **jointly owned** — not "APP-only"

### ESSAY
- **STATUS:** schema `PRODUCTION_APPLIED`; pre-launch (no real-student traffic)
- **CANONICAL_SOURCE:** `legendstudy-app` (essay schema/RPC/engine)
- **NEXT_GATE:** none blocking from LAB — contract mapping delivered (LEC-1); LAB consumes the deployed `ql-read-v1` RPC surface only
- **KNOWN_LIMITATION:** LAB mock is **not** the canonical Production Essay consumer; LAB reads no Essay tables directly

### MATHEMATICAL ESSAY
- **LEARNING RUNTIME:** MATH-2E `IMPLEMENTED / LOCAL_VERIFIED`; server hint/solution reveal, immutable resolve, included reevaluation and bounded history. [Exact MATH-5B/6B consumer contract](https://github.com/LC3808/legendstudy-app/blob/cd215a6d88c0f72e59d06478bf4727ed676ca5f9/supabase/verification/math_essay/learning/contract.md), [Owner package](https://github.com/LC3808/legendstudy-app/blob/cd215a6d88c0f72e59d06478bf4727ed676ca5f9/supabase/verification/math_essay/learning/README.md). L01–L40 plus concurrency/failure/security/rollback PASS; no hidden hint preload, separate reveal charge or automatic paid fallback. Claude concurrent MATH-5B work is not certified here.
- **RUNTIME CONSUMER:** MATH-2D `IMPLEMENTED / LOCAL_VERIFIED`; named, versioned student/extraction/evaluation/QLM RPCs, deterministic confirmation/readiness, owner history. [Physical binding contract](https://github.com/LC3808/legendstudy-app/blob/17e528b6b58b4c910c3f16f73be5fb1638a8bbdc/supabase/verification/math_essay/runtime/README.md). Ready for Claude MATH-3B binding; LAB work is separate and not certified by this closeout.
- **IMPLEMENTATION:** `IMPLEMENTED / LOCAL_VERIFIED` (isolated PG17); MATH-2C canonical persistence, shared HQ-A and existing-ledger Math billing binding complete. [Canonical implementation](https://github.com/LC3808/legendstudy-app/blob/015b800aa501c93b54fcce65ebd3ef3dabdb56de/wiki/math-essay-persistence-implementation.md). [Owner package](https://github.com/LC3808/legendstudy-app/blob/015b800aa501c93b54fcce65ebd3ef3dabdb56de/supabase/verification/math_essay/README.md).
- **MIGRATION:** `20261002000100` + runtime `20261002000200` + learning `20261002000300` · `READY_NOT_APPLIED`. **PRODUCTION:** `OFF / NOT_APPLIED`. No worker/Storage deployment, provider/Vision call or Math activation. Legacy Humanities/ql-read-v1/hq-read-v1 preserved in isolated regression.
- **RUNTIME VALIDATION:** C01–C30 PASS;131 Math +102 Humanities/HQP regression PASS;8 runtime ownership/failure/rollback checks PASS. Base MATH-2C hash unchanged. No Production gateway/Storage proof.
- **VALIDATION:** non-superuser ownership topology, 131 Math checks, 102 legacy assertions and14 installation/failure/rollback checks PASS. R01–R20/R22–R24 PASS; R21 actual Storage cleanup runtime `NOT_ASSESSABLE`, metadata safeguards PASS. No Production gateway proof claimed.
- **POLICY:** four leaf response formats; immutable re-solve lineage; STEP_RETRY downstream NOT_REASSESSED; one initial +one eligible same-lineage reevaluation within initial completion+336h. Official reference+hash; raw evidence finite+erasable with duration deferred. E1 evaluation CASCADE and E2 reviewer SET NULL remain distinct. No Commerce pricing policy embedded.
- **LAB CONSUMER (Claude):** `IMPLEMENTED / LOCAL_VERIFIED` on `legendstudy-lab` `claude/math-vision-input-3b @ f1d489423fa1c8688389fa8eae1743b6357e0b1e` (COMMITTED + PUSHED; `PRODUCTION_NOT_APPLIED`). LAB is a pure consumer of the deployed MATH-2C/2D/2E RPC surface (`math_input`/`math_extraction`/`math_evaluation`/`math_learning`/`qlm_quality`); it adds no schema, no migration, no privileged key, no live/paid provider call. Scope implemented: MATH-3B Vision/input pipeline + MATH-3B-R runtime binding (APP `17e528b`, migration `20261002000200`) + MATH-3C-1 bake-off harness prep (no winner); MATH-4B evaluation engine consumer (worker-only surface, `LIVE_PROVIDER_CALLS=0`); MATH-5B CORE/hint/solution-reveal + MATH-5B-R learning runtime binding (APP `cd215a6`, migration `20261002000300`, `math-learning-v1`); MATH-6B re-solve/included-reevaluation/learning-history (included reeval = 1 within 336h, server authority); MATH-7B Math Quality Console (`hq-math-rubric-v1`; HQ reviews AI quality, not the student). Local gate PASS: 400 tests / 39 files + typecheck + lint + boundary audit + static-export build. Humanities `ql-read-v1`/`hq-read-v1` and `src/lib/quality/*` untouched. Canonical LAB docs under `legendstudy-lab/docs/architecture/`: `MATH-3B_VISION_INPUT_IMPLEMENTATION.md`, `MATH-4B_EVALUATION_ENGINE_IMPLEMENTATION.md`, `MATH-5B_CORE_HINT_IMPLEMENTATION.md`, `MATH-6B_RESOLVE_REEVALUATION_IMPLEMENTATION.md`, `MATH-7B_QUALITY_CONSOLE_IMPLEMENTATION.md`, `MATH-2C_PHYSICAL_RECONCILIATION.md`. **This LAB closeout does not certify APP MATH-2x (Codex authority above) and applies nothing to Production.**
- **LAB RELEASE CLOSEOUT (Claude):** MATH-RELEASE-CLOSEOUT-1 on `claude/math-vision-input-3b @ 6dec4f98887cee2e7c661996e083289b853054b3` (COMMITTED + PUSHED). Added a cross-module consumer end-user journey test (`src/lib/math-release/journey.test.ts`): input → extraction → confirmation → **provider evaluation path** (adapter → `validateMathEval` fail-closed → finalize) → learning (hint/solution/re-solve/included reevaluation) → history, asserting R21 upload-unavailable (no fake URL), malformed-output FAILED (no partial publish), included reevaluation `additional_credit=0`, oldest-first history, and ADR-2 erasure consumer denial on every surface. Release-copy audit PASS (no internal term in student-visible text); Quality Console stays operator-only; browser carries no privileged key. Gate: **405 tests / 40 files** + typecheck + lint + boundary audit + static-export build PASS. **Honest gate classification** (see `legendstudy-lab/docs/architecture/MATH-RELEASE-CLOSEOUT-1.md`): consumer contracts for R21 Storage / ADR-2 erasure / worker-gateway / provider path are verified in isolation, but their Production runtime is **EXTERNAL_GATE** (backend+Owner); controlled real-model bake-off `NOT_RUN` (needs approved provider env/secret); no student-facing `/math` route wired yet. `MATH_RELEASE_CANDIDATE` from LAB = consumer-ready, pending external activation.
- **HOSTED REAL-MODEL SMOKE (Claude, 2026-10-05) — `MATH_RELEASE_CANDIDATE: YES`:** End-to-end Production hosted smoke on `legendstudy-lab-math-test.pages.dev` (Production project `stlhijzpjfgwwdgunlsd`) with the real provider **OpenAI `gpt-5.6-sol`**. Fixes deployed on `codex/math-production-activation-1` (`8b64485` step status/kind enums; `5594df8` sanitized diagnostics; `34bfab5` error-category + ROOT-materiality) — root cause: the provider instructions omitted step `status`/`kind` and error `category` enums and `physicalFinalize` passes steps through raw, so the model's out-of-enum values hit the DB `math_solution_steps_status_check` / validator `UNKNOWN_ERROR_CATEGORY` (materiality was already mapped). Synthetic account `test1@legendstudy.com`: profile via normal authenticated RLS path, canonical **+3 signup_bonus** (no admin grant / no direct ledger write). Verified live: initial eval `5518c8ce` COMPLETED (CORE 1 / hints 3 / errors 2), **Credit −1** (3→2); L1 hint + verified reference solution revealed; re-solve → **included reevaluation** `d98a231c` COMPLETED, **additional Credit 0** (balance 2), delta = root error resolved; ordered 2-attempt history with exposed-hint/solution context; coherent output (correct sign-error diagnosis), no malformed DTO. **Kill switch:** OFF→evaluation-denied verified, then **restored `evaluations_enabled=false` (read-back) → Production Math runtime OFF.** **Storage:** `math-private` private bucket + owner-scoped RLS (owner read/insert, worker read, anon + restrictive deny) + erasure fns (`math_account_erasure`, byte-absence gate) applied; owner upload/read hosted-verified; FOREIGN_OWNER denied by construction. **Byte-erasure / Math-erasure runtime is the immediately-following Account Deletion Production E2E** (reuses `test1@` + its Math data), per "no account-deletion activation in this task". No new infra/account/JWT/provider key; Payment/Pricing untouched; `test1@` preserved. Minor: two early status-crash evals remain PROCESSING holding 2 Credit reservations (balance 2) — cleared by the deletion E2E or worker recovery.
- **NEXT_GATE:** Owner/ChatGPT review → **Account Deletion Production E2E** (same `test1@`; executes Math Storage byte-erasure + ADR-2 Math erasure runtime) → optional wider controlled bake-off → separately authorized real-student pilot. Math migrations `20261002000100/200/300` + Storage/erasure are **applied** in Production and the real-model path is live-verified, but **evaluations stay gated OFF** (kill switch) until a separate activation decision.
- **REMOTE SNAPSHOT:** MATH-2E read-only 2026-10-02 ledger/function catalog: ledger23, no E function collisions, ADR-2/C/D/E absent; provider005/day_targets tracking separate. No Production writes. MATH-2B/2R design history and ADR-2D/HQR-1 closeouts remain preserved.

### QUALITY
- **STATUS:** **Quality Authorization = `PRODUCTION_VERIFIED`** (unchanged); Quality Console = `IMPLEMENTED / LOCAL_VERIFIED` (web consumer)
- **PRODUCTION_STATE:** authorization enforced in Production (see Quality Authorization block); console reads via browser session → `ql_*` RPCs; no privileged service key, no new server runtime
- **CANONICAL_SOURCE:** `legendstudy-app` (`quality_operators` + `ql_*` RPCs, migration `20261001000100`) for the contract; `legendstudy-lab` for the web consumer
- **NEXT_GATE:** LAB deployment + first legitimate evaluation → first Production Human Review write E2E; HQP gateway boundary PASS, normal operator write NOT_ASSESSABLE
- **KNOWN_LIMITATION:** full-answer operator live retrieval = `NOT_ASSESSABLE` (no legitimate evaluation case exists yet); console + Human Review write UI implemented/local-verified ≠ Production-verified with a real case (operator write `NOT_ASSESSABLE`)

### AUTH
- **AUTH FOUNDATION:** Supabase Auth is in Production use.
- **APP PROVIDER AUTH / LAB BROWSER AUTH / SHARED IDENTITY:** Owner acceptance exists. Kakao shared identity Owner PASS and historical Apple/Google acceptance are recorded; these are Owner-reported evidence, not a new independent provider re-test.
- **QUALITY AUTHORIZATION:** independently Production verified through actual JWT/PostgREST gateway checks; this closes only the narrow Quality authorization scope.
- **AUTH LIFECYCLE / OPERATIONS:** The deletion-blocker code is **complete** (`legendstudy-app claude/app-release-blocker-closeout-1 @ 0b0b562`, 53 deno tests PASS): Apple revoke chain (client authorizationCode → server exchange → worker revoke adapter), Email/Google/Apple/**Kakao** reauthentication (Kakao via existing OAuth + recent same-owner session attestation, amr/auth_time not iat), and cancel-UI provider wiring (reauth chosen from verified `app_metadata`). Gated behind the Owner Apple `.p8`/Key ID/Team ID/Services ID, `ACCOUNT_SOCIAL_REAUTH_ENABLED`, and apply of additive worker-only migration `20261005000100` (READY, NOT applied). Remaining gates: ADR-2 activation/deployment + full restricted UX, worker activation + synthetic deletion E2E, credential renewal/rotation, Flutter test under the project SDK (CI), and remaining Store/release operational gates. Login acceptance does not close them.
- **CANONICAL_SOURCE:** [Auth acceptance](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/auth-native-owner-acceptance.md) · [Deletion/privacy gates](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/account-deletion-privacy.md) · [Quality verification](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-worker-provider-l2.md).
- **NEXT_GATE:** separately authorized completion/verification of those remaining gates.
- **KNOWN_LIMITATION:** Owner acceptance ≠ independent gateway verification; authenticated EXECUTE ≠ authorized data access.

### CREDIT / BILLING
- **STATUS:** schema `PRODUCTION_APPLIED` · **PRODUCTION_STATE:** live schema; commercial flow pre-launch
- **CANONICAL_SOURCE:** `legendstudy-app` (`credit_*`, `essay_billing_decisions`)
- **NEXT_GATE:** payment / commercial launch work
- **KNOWN_LIMITATION:** billing decision logic present; paid commercial launch not yet active

### ACADEMIC
- **STATUS:** `FUTURE` / source-gated · **PRODUCTION_STATE:** none
- **CANONICAL_SOURCE:** none yet (no canonical Academic Transcript foundation exists)
- **NEXT_GATE:** source definition before any build
- **KNOWN_LIMITATION:** must not be presented as existing

### ADMISSION
- **EXISTING FOUNDATION:** `universities` / `student_target_universities` support university identity and personal targets.
- **FUTURE CAPABILITY:** official admission facts, official conversion formula, LegendStudy analysis/prediction; PHASED + SOURCE_GATED, not implemented.
- **CANONICAL_SOURCE:** [Academic/Admission roadmap](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/roadmap-academic-analytics.md).
- **NEXT_GATE:** obtain sources and design under Owner-approved phasing; reuse existing university identity.
- **KNOWN_LIMITATION:** official formula ≠ LegendStudy analysis model.

### SCHOOL / B2B
- **EXISTING:** APP personal school preference / NEIS integration.
- **FUTURE:** verified Organization/School Membership and B2B authorization; `LIFECYCLE: NOT_STARTED`.
- **CANONICAL_SOURCE:** [School/NEIS](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/day-7-neis.md) · [Product boundaries](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/product-architecture.md).
- **NEXT_GATE:** separately approved future B2B design.
- **KNOWN_LIMITATION:** school preference ≠ organization membership; profile school never grants B2B authorization.

### ANALYTICS
- **CURRENT:** design/data-readiness work; `PRIMARY_STATUS: DESIGNED`. Canonical domain facts already exist.
- **FUTURE:** product analytics pipeline/consumers; no full APP/LAB analytics pipeline is claimed live.
- **CANONICAL_SOURCE:** [Analytics P0](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/analytics-p0-launch-contract.md).
- **NEXT_GATE:** scoped implementation only after authorization.
- **KNOWN_LIMITATION:** analytics consumes canonical facts; it does not become their authority.

### COMMERCIAL
- **STATUS:** PAYMENT-E2E-CLOUDFLARE-ISOLATION-1 COMPLETE on dedicated TEST Pages; Hosted bootstrap and Finance Gateway COMPLETE. **Production payment OFF; Production migration NOT_APPLIED.**
- **CANONICAL PAYMENT CANDIDATE:** APP `3b3b869297a0884bfb908c87977fa14519f72d91`; `20261003000100_payment_foundation.sql`; SHA-256 `77b460bf2bf437a8d6dd03d78454ece17c6c4143fe50d7f28b6ea30a51509c75`. Old e4836eda/be808d96… SUPERSEDED_PRE_APPLY; one candidate only.
- **APP EVIDENCE:** `codex/essay-scaffolding-vnext @ c5573dfc2d980b3bf1dc93d281c04b55beee20ee` — [actual Hosted TEST evidence](https://github.com/LC3808/legendstudy-app/blob/c5573dfc2d980b3bf1dc93d281c04b55beee20ee/supabase/verification/payments/hosted-test/hosted-validation.json). Canonical24-file hashes unchanged; local regressions preserved.
- **LAB:** `codex/payment-2-toss-test @ ac2913288ec84a95cd9ac3fe5677343223732eb5` — [consumer/config authority](https://github.com/LC3808/legendstudy-lab/blob/ac2913288ec84a95cd9ac3fe5677343223732eb5/docs/PAYMENT_2_TOSS_INTEGRATION_HANDOFF.md); exact approved Preview Auth pair + manual redirect rejection;186 tests,8 real-workerd scenarios, typecheck/lint/boundary/static build PASS. Feature branch only; main not merged.
- **PROVIDER PROOF:** official documentation/Sandbox TEST proof PASS in prior LAB evidence; `leglabn24k` merchant E2E NOT_RUN. TEST records never grant spendable Credits; LIVE NOT_AUTHORIZED.
- **HOSTED-1 DB:** COMPLETE. Fresh identity/empty-state/platform preflight PASS; exact24 files installed sequentially as postgres. Canonical postflight and114 function owner/security/search_path/ACL inventory PASS; schema ACL, RLS, roles/memberships PASS; unexpected grants NONE. Public owner/grantor remains pg_database_owner. Payment orders/operations/events, Credit accounts/grants/transactions and Auth users all0; spendable delta0; TEST mode.
- **COMPATIBILITY:** PASS. Removed PREP-1 local public-owner normalization; reproduced observed pg_database_owner owner/ACL grantor, managed roles/memberships and schema/default ACL. Same24 hashes and per-file function owner/security/config/ACL inventory preserved. Canonical migration change required: NO. Six failure injections and exact empty rollback PASS; Credit static7 also PASS.
- **CLOUDFLARE RUNTIME:** dedicated `legendstudy-lab-payment-test.pages.dev`; trusted branch `codex/payment-2-toss-test`, automatic Preview branches disabled. Owner configured this isolated project's Production scope only; original LAB Production/Math Preview unchanged. Latest deployment `7555fda8-8ff5-449e-b75f-850c99db451c`, successful 2026-10-04 12:43 KST, commit `ac2913288ec84a95cd9ac3fe5677343223732eb5` independently verified. Server/browser Auth targets the independent TEST Supabase project.
- **RUNTIME EVIDENCE:** existing synthetic buyer login/session restore/logout PASS; real buyer JWT identity, own profile and foreign-profile RLS PASS. Four canonical SKU orders (1/3/5/10 Credits, 4,900/11,900/17,900/29,900 KRW), server UUID/order identity, canonical checkout values, duplicate create/same identity, changed duplicate409, status and no-operation finance reconciliation PASS. Unauthenticated401, foreign-origin403, unsupported SKU/client amount/forged owner422. No confirm/cancel/provider request executed.
- **SECRET/LINEAGE:** 7 HTML + 12 referenced JS assets scanned, finance JWT/Toss secret absent. Production project literal occurs only in canonical Auth denial/comparison guard, not runtime configuration. Post-check purchase grants/payment operations/provider links/payment-linked postings/LIVE orders/unexplained postings all0; payment-attributable spendable delta0. Existing signup+6 remains canonical and unchanged. Owner-approved optional24h TEST finance token expires 2026-10-05 11:53:56 KST; default1h remains. [Offline signer change](https://github.com/LC3808/legendstudy-app/commit/a5afe71). Secret values and synthetic identities omitted.
- **MERCHANT CONFIGURATION:** PAYMENT-E2E-TOSS-MERCHANT-1 COMPLETE, Owner-assisted dashboard verification. Owner selected company merchant MID `leglabn24k`, registered its TEST API individual integration key pair, corrected client binding and redeployed. Independent Cloudflare check now confirms `test_ck_` client format, encrypted secret binding, expected MID, TEST mode/origin/DB and successful feature-branch deployment. Pair provenance rests on Owner confirmation; no provider authentication or payment was attempted. Prefix alone is not merchant identity evidence. Repeated 7 HTML/12 JS scan PASS, browser Toss secret/finance JWT ABSENT in scanned assets.
- **NEXT_GATE:** PAYMENT-E2E-TOSS-1R-FAST COMPLETE; full requested merchant TEST matrix PASS. Root cause was exact TEST identity mismatch: Toss authenticated Payment response `tleglabn24k` versus configured `leglabn24k`; same order independently found in official selected leglabn24k TEST dashboard. LAB fix5b132b2 uses only that verified exact TEST mapping, preserving all other merchant/amount/owner/mode checks. Dedicated deploy bd062d3b-9d2d-4a91-b875-28971c0609cb succeeded. Original transaction retained as provider-expired/local pending UNKNOWN. Exactly one authorized replacement1c4900 transaction completed: server PAID/TEST_RECORDED; duplicate confirm200, conflicting identity409, amount mismatch422; full and duplicate cancel200; final reconciliation CANCELLED/REVOKED. Toss dashboard independently confirms cancellation; provider balance0 is checked before local cancel_finish. Exactly one successful CONFIRM and CANCEL operation for replacement. Payment spendable delta/purchase grants/LIVE/unexplained delta all0; signup6 unchanged.191 tests/typecheck/lint/boundary PASS, Cloudflare build PASS,7HTML/12JS secret scan PASS. No Production access/write, no LIVE, no main merge. Existing synthetic gateway normal Auth login completed; foreign-owner status/confirm/cancel each returned404 without order disclosure. Final lineage unchanged. `READY_FOR_PAYMENT_NEXT_GATE:YES` for Owner review; LIVE/Production exposure remains unapproved. [Runtime handoff](https://github.com/LC3808/legendstudy-lab/blob/codex/payment-2-toss-test/docs/PAYMENT_2_TOSS_INTEGRATION_HANDOFF.md).
- **LIMITATIONS:** Initial zero-total-delta BLOCKED history preserved; signup policy/ledger unchanged, no cleanup. Existing gateway profile/bonus retained; future gateway needs Auth identity only. Historical [Finance lineage evidence](https://github.com/LC3808/legendstudy-app/blob/4dae27563b9f86cda2faa6d88ed057ab826320e5/supabase/verification/payments/hosted-test/finance-lineage-validation.json); current runtime evidence in [Daily Handoff](../90_HISTORY/DAILY/2026-10-04.md#payment-e2e-cloudflare-isolation-1--runtime-complete). Provider checkout/confirmation/cancellation are outside this closeout.

### PRICING (LAB public /pricing/)

- **STATUS:** Owner `FINAL_APPROVED` (2026-10-04) and **released**; `PRIMARY_STATUS: PRODUCTION_VERIFIED` (live-site verification)
- **PRODUCTION_STATE:** `PRODUCTION_APPLIED` — `lab.legendstudy.com/pricing/` serves the approved page from main `3370dad08ad4042046d158f56fd1d38f778c9e26` (HTTP200, verified live 2026-10-04)
- **CANONICAL_SOURCE:** `legendstudy-lab` `feat/pricing-ux-cleanup @ f84b81ec19009e77b63a6fe22811ecf820eaf7bb` (COMMITTED + PUSHED, remote-synced 0/0); working copy `src/lib/pricing.ts` (prices, policy, `purchaseCta`) and `src/app/pricing/page.tsx`; released to Production via the `main` merge `3370dad` (merge of `f84b81e`, 5 files, no Payment file)
- **FINAL IA:** Hero → 신규 가입 3 Credits 무료 → Credit 판매 상품 → 학교 단체 이용 / 이벤트 프로모션 → 1 Credit 이용 범위 → 이용 방법 → Credit 이용 조건 → 자주 묻는 질문 → 결제 및 환불 안내 → 레전드스터디 랩 고객센터 → 정책 링크 → 사업자정보. The `Credit 상세 비교` table is `REMOVED` (every pack gives the same service scope, so it repeated the cards row for row)
- **PRODUCT / PRICE:** 1/3/5/10 Credits at 4,900 / 11,900 / 17,900 / 29,900 KRW, each card labelled `첨삭권 1/3/5/10개`; no 20-Credit pack; `답안 N개` and `팩` wording removed
- **REEVALUATION:** `최초 첨삭 결과 제공일로부터 14일` / 1 included reevaluation / additional Credit not deducted — canonical `pricingPolicy` authority unchanged; "첨삭권 사용 후 14일" is NOT the basis
- **CREDIT VALIDITY:** paid Credit 3 months from payment date; free signup Credit has no expiry and is not cash-refundable — unchanged
- **PURCHASE_CTA:** `PRESENT_DISABLED` on all four cards as deployed (`<button type="button" disabled>`, no href, no build/release-state label). Enabling it is **not** authorized by the pricing release; the same CTA is wired to the real checkout after payment activation
- **FOOTER:** the shared footer stays omitted on `/pricing/` only; the page body publishes 고객센터, the four policy links and 사업자정보 itself. `/account-deletion/` is not added to the pricing policy strip
- **NEXT_GATE:** pricing UI release is complete; the only remaining pricing gate is `PURCHASE_CTA` activation, owned by Codex `PAYMENT-PRODUCTION-READINESS-1` / Production activation
- **KNOWN_LIMITATION:** the released page is a LAB commercial-information surface only — it is not a payment runtime, not a Credit grant authority and not a payment activation claim. 구매하기 stays disabled, no Payment/Toss/Supabase/Credit/billing file, migration or environment was changed by this work, and no Production financial write occurred

### RELEASE
- **STATUS:** pre-launch · **PRODUCTION_STATE:** backend live; store release pending. Owner-reported RELEASE-1 public LAB `https://lab.legendstudy.com` at main `16e155b71817ebe371196150a4c21e45510160f2`; main ref confirmed in PREP-1, public deployment not re-certified here. Payment feature remains unmerged.
- **STORE_LAUNCH_PACKAGE:** COMPLETE. **APPLE_PREP / GOOGLE_PREP:** READY — APP-RELEASE-1 및 일부 Owner 입력 대기. **STORE_SUBMISSION:** BLOCKED. **APP_RELEASE_1_DEPENDENCY:** WAITING.
- **OWNER BRAND / ENTITY:** APP_NAME `레전드스터디+`; 발음 `레전드스터디 플러스`; 공식 영문 브랜드 **LegendStudy Plus**; PRIMARY_CATEGORY `Education`; COPYRIGHT `2026 주식회사 코파카바나`; DEVELOPER_ENTITY `주식회사 코파카바나`; DEVELOPER_ACCOUNT_TYPE `ORGANIZATION`. 새 문서의 공식 영문 브랜드는 LegendStudy Plus로 표기한다.
- **ACCOUNT READINESS:** DUNS `VERIFIED / COMPLETE`; NEW_DEVELOPER_ACCOUNT_REQUIRED `NO`; NEW_DUNS_REQUIRED `NO`; GOOGLE_PERSONAL_ACCOUNT_12_TESTERS_14_DAYS `NOT_APPLICABLE`. 신규 D-U-N-S, 신규 Organization 계정, 개인계정12명×14일 Closed Testing은 critical path에서 제외.
- **CRITICAL BLOCKERS:** (1) APP-RELEASE-1 account deletion lifecycle, (2) Google Data deletion web request path, (3) APP SDK/data inventory, (4) Apple App Privacy, (5) Google Data Safety, (6) reviewer account, (7) release signing/build verification.
- **LAUNCH:** FREE_LAUNCH `CONDITIONAL`; PAID_LAUNCH `WAITING_FOR_STORE_PAYMENT`; MARKETING_LANDING `NOT_STARTED`; `home.legendstudy.com` `NOT_CREATED`.
- **CANONICAL_SOURCE:** Manus **STORE-LAUNCH-PACKAGE-1 최종 정정 보고 / CROSS_AGENT_HANDOFF**, Owner-confirmed ingest. [Owner 정정 수신 기록](../90_HISTORY/DAILY/2026-10-03.md#store-launch-package-1--owner-final-correction-ingest). Manus READ-ONLY 조사 결과로 repository 문서 URL/경로 없음 (`FILES_CHANGED: 0`, `UNIFIED_WIKI_CHANGED: NO`는 Manus 작업 기준). 이번 Owner-confirmed 정정 및 CROSS_AGENT_HANDOFF 요약만 상태 근거로 기록하며, 별도 Store 문서를 생성하거나 상세 내용을 복제하지 않는다.
- **NEXT_GATE:** 위7개 blocker 해소와 남은 Owner 입력. 패키지 COMPLETE는 Store 제출/출시 완료를 의미하지 않는다.

### NOTIFICATION CENTER

LegendStudy 앱과 LAB이 **같은 알림 행과 같은 읽음 상태**를 공유한다. 어느
클라이언트에서 확인했는지는 사용자에게 중요하지 않다.

- 모델: `public.user_notifications` (RLS on, 클라이언트 롤 테이블 권한 없음),
  단일 생산자 `notification_private.emit` (클라이언트 실행 권한 없음)
- 소비자 RPC: `user_notifications_list` / `user_notifications_unread_count` /
  `user_notification_mark_read` / `user_notifications_mark_all_read`
- 생산자: 문의 답변 트리거, Credit 지급 트리거, 첨삭 완료 트리거,
  결제·수리논술 서버 진입점, 일일 스케줄러(만료 전용)
- **Credit 부족은 상태가 아니라 진입이다.** 3 이하로 내려오는 순간 1회
  (`low_credit_notification`). 매일 반복 잔액 알림은 폐기.
  5→4 없음 · 4→3 1회 · 3→2→1→0 없음 · 회복 후 재진입은 새 cycle.
  예약/해제는 원장 잔액을 움직이지 않으므로 재시도가 알림을 되살리지 않음.
- LAB: `/notifications/` + 헤더 종 배지 (noindex, sitemap 제외)
- 앱: **연결 완료(코드, consumer-only)** — `legendstudy-app claude/app-release-blocker-closeout-1 @ 6736167` (`lib/features/notifications/*`). Home 종 배지(서버 unread 권위) + `/notifications` 받은함, notification-v1 RPC 4개, target allowlist(`inquiry→/my/feedback`, essay/math/credit/payment/essay_lab→`/lab`, unknown→무시), 로컬 unread/영구 local DB 금지. 포커스+UI 테스트 작성(`test/notification_center_test.dart`). **검증 갱신 2026-10-07:** APP73a2a35 Owner967~2 PASS; Flutter3.47.6 fresh analyze PASS. 계약: `legendstudy-app/docs/APP_NOTIFICATION_HANDOFF.md`

검증(격리 PostgreSQL, 표준 체인): CANONICAL_CHAIN=OK,
ADMIN_CONSOLE_CHECKS 158/158, ADMIN_P0B_CHECKS 351/351,
NOTIFICATION_CENTER_CHECKS 70/70. LAB: 208 tests, lint, typecheck,
boundary audit, static export, 320px·200% overflow 0.

커밋: LAB `ec79032` · APP `e2b9b61` (branch `manus/admin-console-p0-a`)
Production 반영: **없음** (main merge 없음)

---
## ADMIN CONSOLE
- **STATUS:** `DESIGNED` · `LIFECYCLE: PLANNED` — **READ + AUDIT + PLAN ONLY. No implementation, no Production mutation, no deploy, no migration apply.** Owner authority (2026-10-05): this is the integrated **release-operations** console, not a Quality Console replacement.
- **P0 IA:** 대시보드 · 회원 관리 · Credit 관리 · 결제 관리 · 논술 운영 · AI 품질. Target: ordinary post-launch operations without opening the SQL Editor. No ERP, no new wallet, no new analytics DB, no new Auth system, no new TEST DB/Supabase/Cloudflare project.
- **QUALITY CONSOLE REUSE:** `/ql` (Quality Console + Human Review write UI) is **not** discarded and becomes the `AI 품질` module. It exists only on `legendstudy-lab claude/quality-console-v0 @ 253867b` and is **NOT on `main` or Production** (`/ql/` = HTTP404 live).
- **ALREADY_IMPLEMENTED / REUSABLE:** 191 RPCs on the canonical ledger; `public.quality_operators` + `is_quality_operator()` (Quality Authorization `PRODUCTION_VERIFIED`) and `public.admin_users` + `is_feedback_admin()` as an existing second allowlist; `public.essay_admin_grant`, `credit_summary`, `payment_order/process/support/compensate`, `ql_*`/`qlm_*` and the account-deletion RPC family; the `/ql` fail-closed DTO client pattern (`ql-read-v1`, `hq-write-v1`) as the console client skeleton.
- **MISSING_P0:** an ops-operator gate over `admin_users`; **no operator-scoped read RPC exists** for members, dashboard aggregates or payment order lists; `/admin` shell + nav; the six views; a server boundary for finance-gated writes.
- **CREDIT ADMIN:** canonical path is `public.essay_admin_grant(uuid,integer,text,uuid,text,timestamptz)` with the bounded reason vocabulary (`admin_grant/test_account|manual_support`, `promotion/operational_promotion`, `compensation/customer_compensation`, `b2b_program/program_allocation`). It is granted to **`essay_finance` only**, so the browser must never hold a finance credential; reuse the existing Cloudflare Pages Function pattern (`functions/api/payments/[[path]].ts`, `PAYMENT_FINANCE_TOKEN`) with one new admin route. **Runtime BLOCKED:** no Production `essay_finance` credential is provisioned — the same blocker holding Math's synthetic Credit funding. No direct ledger write, role escalation, JWT minting or TEST-credential reuse is permitted.
- **PAYMENT ADMIN:** `IMPLEMENTATION COMPLETE / TEST E2E COMPLETE / LIVE OFF`. The existing bounded `payment_support` contract (`inspect|cancel|reconcile`, `operator_id`+`request_key` idempotency, immutable `payment_private.support_audit`) is judged **sufficient** for cancel/reconcile — no new action RPC. Payment tiles must render the true `LIVE OFF` state, never fake rows.
- **ANALYTICS:** SoT stays Postgres/Supabase; GA4 is not the admin SoT. All P0 tiles derive from existing facts. `profiles` stores school **codes**, not school names, so school distribution is by code. Math is a separate table family and must render as `OFF`.
- **CANONICAL_SOURCE:** `legendstudy-app claude/app-release-blocker-closeout-1 @ 0b0b562` (32 migrations) for the backend; `legendstudy-lab` for the console web surface. **APP `origin/main @ d07671e` holds 1 migration — not backend truth.**
- **NEXT_GATE:** Owner approval of the P0 scope/phases → `ADMIN-P0-A` (no Owner dependency) can start immediately; `ADMIN-P0-B` waits on the Production finance credential; `ADMIN-P0-C` runs in parallel via `/ql` reuse.
- **KNOWN_LIMITATION:** nothing in this section is implemented. `admin_users` must not be widened into the verified `quality_operators` scope, and the console must not read answer bodies, tokens or provider secrets.

## ADMIN CONSOLE — ADMIN-P0-A implemented, not deployed (2026-10-05)

| Item | State |
|---|---|
| Backend | `legendstudy-app manus/admin-console-p0-a @ 625903d` — `20261005000200_admin_console_read.sql` |
| Front end | `legendstudy-lab manus/admin-console-p0-a @ 1244916` — `/admin/`, `/admin/members/`, `/admin/credit/` |
| Authorization | `admin_operator()` fail-closed on `public.admin_users`; separate from `quality_operators`, neither widened |
| Read surface | `admin_dashboard`, `admin_member_search`, `admin_member_detail`, `admin_member_credit` |
| Internal helpers | `admin_count`, `admin_account_state`, `admin_credit_snapshot` — revoked from anon/authenticated/service_role |
| Write authority | **NONE.** No grant, balance update, transaction insert or payment action |
| Pending subsystems | deletion/Math/payment absent -> `installed=false`, counts JSON null, never a fake 0; Math `RUNTIME_OFF`, payment `LIVE_OFF` |
| Verification | isolated PostgreSQL harness, **126 checks / 0 failed**; lint, typecheck, 175 tests, boundary audit, static export PASS |
| Accessibility | no console-owned axe violation; the only finding is the pre-existing shared header accent button |
| Production | **NOT applied, NOT deployed, NOT merged to `main`** |
| Next gate | Phase **B** Credit grant + Payment ops — **BLOCKED** on a Production `essay_finance` credential |
| Activation gate | when the payment runtime lands, `admin_credit_snapshot` must adopt the `CANCEL_PENDING` grant fence or it will drift above `credit_summary` during a cancellation window |

## ADMIN CONSOLE — ADMIN-P0-B / P0-C implemented, not deployed (2026-10-06)
**Branch:** backend `legendstudy-app manus/admin-console-p0-a @ 49c02de`; front end `legendstudy-lab manus/admin-console-p0-a @ bbc23cb`. **NOT merged to `main`, NOT applied to Production.**

| Item | State |
|---|---|
| Migration number collision | **RESOLVED.** ADMIN-P0-A/B/C were renumbered out of `2026100500xx` to **`20261007000400_admin_console_p0c.sql`** (plus the earlier P0-B file in the same band), so the other agent's `20261005000200_account_ops_sink` no longer collides. A migration-version guard in the harness now fails if this workstream re-enters that band. |
| P0-B read surface | `admin_payment_orders`, `admin_inquiry_list`, `admin_inquiry_detail`, `admin_support_metrics` |
| P0-B write surface | `inquiry_submit` (member), `inquiry_reply` / `inquiry_set_status` (operator) — idempotent by `request_key`, operator-scoped |
| P0-C read surface | `admin_essay_operations`, `admin_math_operations`, `admin_operations_summary` |
| P0-C deployment honesty | `essay_private.admin_relation_ready` separates **NOT_INSTALLED** from **SCHEMA_INCOMPLETE**, so a partially deployed Math schema is reported as undeployed instead of raising or reading as zero |
| Answer text | **never returned** by any operations read; the boundary guard fails the build if `answer_text` / `submission_body` / `question_text` reach the console view |
| Quality Console | `/ql/` imported **unchanged** from `claude/quality-console-v0` into the branch and reached as an `AI 품질` nav link. `quality_operators` is **not** merged into `admin_users`; `/ql` is now noindex + robots-disallowed + sitemap-absent |
| Verification | isolated PostgreSQL harness: P0-A **167**, P0-B **360**, notifications **70**, P0-C **170** checks, all 0 failed. LAB: lint, typecheck, **324 tests**, boundary audit, static export PASS |
| Accessibility | no console-owned axe violation; the only finding remains the pre-existing shared header accent button |
| Production | **NOT applied, NOT deployed, NOT merged to `main`.** `/admin/*` and `/ql/` are absent from Production, and the console backend migration must be reconciled with the account-ops work before any Production apply |

## Quality Authorization (verified detail)

**`PRODUCTION_VERIFIED`** as of 2026-10-01:

- migration `20261001000100` **applied**
- migration **tracking applied** (`APPLIED_TRACKED`)
- Quality operator **registered**
- actual Production JWT: **operator ALLOW** → PASS
- authenticated **non-operator DENY** → PASS
- **anon DENY** → PASS
- **forged identity DENY** → PASS
- existing Essay RLS/ACL **preserved**
- full-answer operator Production retrieval → **`NOT_ASSESSABLE`** (no legitimate evaluation case exists yet) — **not** a PASS

Dependent items (do not confuse with the above):

- **Quality Console UI:** `IMPLEMENTED / LOCAL_VERIFIED` (operator-only `/ql`; Production detail runtime `NOT_ASSESSABLE`)
- **LAB Essay canonical adapter:** `IMPLEMENTED / LOCAL_VERIFIED` (`ql-read-v1` consumer; fail-closed on unsupported DTO; no mock Production fallback)
- **Human Quality persistence:** `PRIMARY_STATUS: DESIGNED` · `LIFECYCLE: ACTIVE` · `CANONICAL_DB_REVIEW: PASS` · `IMPLEMENTATION: IMPLEMENTED / ISOLATED_VERIFIED` · `PRODUCTION_SQL: APPLIED` · `MIGRATION: APPLIED_TRACKED` (Owner report); `GATEWAY_AUTHORIZATION: PASS`, normal write NOT_ASSESSABLE
- **Human Review write UI:** `IMPLEMENTED / LOCAL_VERIFIED` (HQR-1; operator `/ql` consumes HQP RPCs; Production operator write `NOT_ASSESSABLE`)

Shared Backend: **NO CHANGE** by this LAB work (LEC closeout or HQP-1: no new RPC/table/RLS/migration/grant/privileged key/gateway). The Quality list index remains a separate, deferred launch decision. Owner has applied/tracked HQP-3 for two Human Quality tables and three gated RPCs. 105 isolated PG17 checks PASS; existing ql-read-v1, Quality authorization, Essay RLS/ACL and Credit/Billing preserved. The gateway verification made no application-data or schema/ledger writes.

## Human Quality

- **PILOT HUMAN REVIEW:** existing Owner review evidence includes accepted/PASS original-answer and strong-answer cases; see [latest Owner update](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-model-bakeoff-l2-b.md). Historical receipts remain historical.
- **SYSTEMATIC HUMAN QUALITY PERSISTENCE:** `DESIGNED` · `CANONICAL_DB_REVIEW: PASS` · `IMPLEMENTATION: IMPLEMENTED / ISOLATED_VERIFIED` · `PRODUCTION_SQL: APPLIED` / tracking APPLIED (Owner report); gateway authorization PASS. [HQP-3 canonical implementation](https://github.com/LC3808/legendstudy-app/blob/9f78dc66bd4cc75efed45ec8d928af2abc297acb/wiki/human-quality-persistence-implementation.md) and [Owner package](https://github.com/LC3808/legendstudy-app/blob/9f78dc66bd4cc75efed45ec8d928af2abc297acb/supabase/verification/human_quality/README.md); migration `20261001000200` applied/tracked by Owner. [Actual gateway closeout](https://github.com/LC3808/legendstudy-app/blob/cbd80c90f5b104dc50e9d1a961f73d48849ce52e/wiki/human-quality-persistence-implementation.md#production-gateway-closeout--2026-10-01): operator empty read/missing-case gate PASS; student/anon RPC, direct tables and forged identity DENY PASS. Normal operator INSERT **NOT_ASSESSABLE**; write UI readiness YES for a separate task. Missing case returns **P0002/HTTP500**, not404. Existing read-v1 gateway behavior PASS; exact live function-body/ACL catalog equality **NOT_RECHECKED**. No agent application-data writes or automatic Pilot backfill.
- **HUMAN REVIEW WRITE UI (HQR-1):** `IMPLEMENTED / LOCAL_VERIFIED`. LAB `/ql` consumes the canonical HQP RPCs (`ql_submit_human_judgment` / `ql_review_state` / `ql_list_human_judgments`) via the authenticated browser session — review-state badges, judgment history, rubric v1 submission, findings, correction/supersession, deleted-reviewer rendering, idempotent submit. `ql-read-v1` and the static export unchanged; no backend change. Verified with synthetic fixtures + mocked RPCs; **Production operator write `NOT_ASSESSABLE`** (no legitimate case; none created). See [`legendstudy-lab` `docs/architecture/HQR-1_HUMAN_REVIEW_CONSOLE.md` @ `ce9d04e`](https://github.com/LC3808/legendstudy-lab/blob/ce9d04efa1293b9958435835c77e35a6c0e2ec7a/docs/architecture/HQR-1_HUMAN_REVIEW_CONSOLE.md).
- **OWNER POLICY:** D1–D5 and E1/E2 final. Student evaluation hard erasure cascades QA judgments/findings; invalidation/supersession preserve history. Reviewer deletion nulls direct identity and preserves QA of existing subjects; no reviewer email/name snapshot.
- **ACCOUNT DELETION (ADR-2D):** `IMPLEMENTED / ISOLATED_VERIFIED`; same migration20261001000300 `READY_NOT_APPLIED`, Owner package READY. Owner ADR-2C Production attempt failed on function ownership and FULLY_ROLLED_BACK; no objects/tracking remain. Approved temporary ownership bridges are now locally verified with non-superuser postgres; original function ownership/security and temporary privileges restored. Production retry requires new-hash review. P-01 restore/cancellation resolved; P-02 trusted reauth/admission adapters locally verified, provider runtime remains EXTERNAL_GATE; P-03 privacy-first capture resolved. No global signup-benefit hold: unavailable historical marker never delays erasure; later normal eligibility may grant again under accepted bounded risk. Current eligibility outage still allows account creation but defers the free grant. Fixed336h, explicit reauth cancellation, HQP E1/E2 and30day receipt preserved. Production lifecycle NOT_ACTIVE; secrets, provider/finance/Storage/backup, scheduler/notification and consumer UX gates remain. [Canonical correction](https://github.com/LC3808/legendstudy-app/blob/59e14eb76e24dd178d042c8eddeca14bd670f1b5/wiki/account-deletion-ownership-compatibility.md) · [Owner package](https://github.com/LC3808/legendstudy-app/blob/59e14eb76e24dd178d042c8eddeca14bd670f1b5/supabase/verification/account_deletion/README.md). No agent Production writes/deploy/ledger change or LAB/HQR-1 modification.
- **ANALYTICS RETENTION:** **SEPARATE_FUTURE_DESIGN**; deletion-pending data is not analytics, no archive/copy-before-delete/pseudonymization pipeline implemented.
- **REAL-STUDENT PILOT:** not yet authorized; no real-student Essay traffic.
- **FULL_ANSWER_LIVE_RETRIEVAL:** NOT_ASSESSABLE is technical coverage, not Human Quality judgment.

## AI / model

- **PROCESSING FOUNDATION:** `essay_ai_processing_runs` and existing processing persistence/tooling exist; [canonical worker/provider record](https://github.com/LC3808/legendstudy-app/blob/2ebec8de5f1b055fc35efc3779d32a48f93e5440/wiki/essay-lab-worker-provider-l2.md).
- **PRODUCTION_AI:** `OFF`
- **PRIMARY_MODEL:** `NOT_SELECTED`
- **GPT:** `PRIMARY_CANDIDATE` only (candidate ≠ selected)
- `provider005`: `PRESERVED_NOT_APPLIED`

## Migration ledger

- **Remote tracked migrations:** **23** (independently read-only rechecked for ADR-2D on2026-10-01; ADR-2 absent; prior HQP/LSA-2C evidence preserved)
- `20261001000100_quality_read_authorization`: SQL applied · tracking applied · Production authorization **verified** → `APPLIED_TRACKED`
- `20260930000100_day_targets_least_privilege`: Production ACL effect **verified**, but migration **tracking remains separate/unregistered** → `SEPARATE_TRACKING_DEBT` (SQL effect ≠ ledger state)
- `provider005`: `PRESERVED_NOT_APPLIED` → `READY_NOT_APPLIED`. This is not an automatic next migration; no unfiltered db push or tracking repair is authorized by this status.

- `20261001000200_human_quality_persistence`: **APPLIED_TRACKED** (Owner-confirmed); actual gateway authorization PASS. Do not replay SQL or tracking; no agent ledger write occurred.

- `20261001000300_account_deletion_lifecycle`: **READY_NOT_APPLIED**; ADR-2D ownership-corrected local candidate; canonical SHA-256 `38c86fd79554225fbc6a5a30be791c860e6c89dcaa64ad7e229e3710b9a29d94`. Previous attempted hash is SUPERSEDED_PRE_APPLY_FAILED_ATTEMPT; fully rolled back, never tracked. Remote ledger unchanged by this task; no scheduler/secret provisioning or broad migration replay. Next account gate: Owner/ChatGPT review → exact migration review → external activation gates → separately authorized Owner apply/verification.

## Stale-checkout warning

A local checkout sitting on `main` and fully synced with `origin/main` **can still not be the current canonical task truth.** Observed generalized case: a local APP checkout was on `main` while the canonical Shared-Backend / Essay task work lived on a feature branch. Always verify your checkout against the latest Handoff `VERIFIED_COMMITS` before trusting it, and never auto-pull/reset/rebase/merge to paper over a mismatch — STOP and find the correct ref. See [`AI_CONTEXT.md` §6](AI_CONTEXT.md#6-how-to-determine-current-branch--worktree).

## Current pointers (branch-sensitive)

These are **current** pointers, not pinned evidence (which uses commit SHAs — see [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md)):

- APP code/backend: [`legendstudy-app`](https://github.com/LC3808/legendstudy-app) — confirm the active task branch per [`AI_CONTEXT.md` §6](AI_CONTEXT.md#6-how-to-determine-current-branch--worktree); do **not** assume `main`
- LAB code: [`legendstudy-lab`](https://github.com/LC3808/legendstudy-lab)
- Project docs: this repo (`legendstudy-docs`)


## Release closeout checkpoint — 2026-10-05 late

- **Development authority:** 빠르게 · 가볍게 · 정확하게 · 사용자 관점의 가치. Agent ownership is interchangeable: Claude / Manus / Codex / Owner 중 현재 작업을 가장 빠르고 정확하게 끝낼 수 있는 주체를 사용한다. Existing infra/credentials first; Owner가 1–2분 직접 실행하는 것이 더 빠르면 exact command 방식으로 넘긴다. 검증/보안 절차는 위험에 비례시키고 출시 가치보다 커지지 않게 한다.
- **Brand/product authority:** COPACABANA의 현재 주력 서비스는 **Muselry + LegendStudy+**. LegendStudy+ 대외 포지셔닝은 **“내신 관리부터 수능, 논술 준비까지. 데이터가 쌓일수록 나의 가능성은 더 선명해집니다.”** 대외 headline에서 기출·AI를 전면에 내세우지 않는다. **LegendStudy LAB은 논술 LAB의 동의어가 아니라 상위 체계**이며 LegendStudy LAB → 내신 LAB / 수능 LAB / 논술 LAB으로 구분한다.
- **Math:** MATH_RELEASE_CANDIDATE=YES, 실제 OpenAI gpt-5.6-sol Hosted 학습 루프 PASS, 최초 평가 Credit −1 / 포함 재평가 0, runtime kill switch는 **OFF로 복구·read-back 확인**. 실제 Math Storage byte erasure + metadata erasure는 동일 synthetic subject의 Account Deletion destructive E2E에서 최종 확인한다.
- **Privacy:** LAB Production 개인정보처리방침 correction **LIVE PASS** (legendstudy-lab main @ ed8a1ca). Shared-backend 저장 사실과 일치하며 기존 “답안/성적/학교·학년 서버 미저장” 오표현은 제거됐다.
- **Admin Console:** P0-A + P0-B는 **구현/격리 검증 완료, Production 미배포/main 미통합**. P0-A = dashboard/member/Credit read. P0-B = Credit canonical grant boundary + Payment ops + 1:1 문의(접수/운영자 조회·답변·상태/Resend). ADMIN-P0-C(논술/Math ops + 기존 /ql AI 품질 통합)는 남음.
- **Shared Notification Center:** backend + LAB **CODE COMPLETE / NOT DEPLOYED**; **Flutter consumer integration CODE COMPLETE (2026-10-06, app `6736167`)** — Home bell + badge + `/notifications` inbox + mark read/all via notification-v1 RPCs, Owner full967~2 PASS + fresh Flutter3.47.6 analyze PASS (2026-10-07). APP/Web 동일 user_notifications/read state. 저잔액은 매일/매 사용 알림 금지: 원장 잔액이 3 이하로 진입할 때 cycle당 1회, 3→2→1→0은 추가 알림 없음, 3 초과 회복 후 재진입 시 새 1회. Credit expiry는 D-30/D-14/D-7/D-3. Push(APNs/FCM)는 이번 release 범위 밖.
- **Account Deletion Production activation — IN PROGRESS:** migration 20261005000100 applied/verified; delete-account + account-deletion-worker deployed fail-closed; privacy live. Minimal durable ops sink migration 20261005000200 account_ops_sink applied and account-ops-sink deployed; receipt stores hash+size only, not raw manifest/PII. ACCOUNT_OPERATIONS_TOKEN, restore/notification sink URLs, ACCOUNT_FINANCE_REVIEWED=true set. Edge/Vault ACCOUNT_DISPATCH_SECRET re-synchronized by Owner; secret value not recorded. Worker authentication was simplified to reuse existing server-side SUPABASE_SERVICE_ROLE_KEY; Owner applied exact EXECUTE grants to the **22 RPCs actually called by the worker** (22/22), not a broad account_* grant. Local worker auth patch exists but, at this checkpoint, Claude has not yet reported commit/push/redeploy/runtime verification. Lifecycle global enable remains OFF until worker/scheduler/watchdog are ready.
- **Deletion E2E remaining:** worker auth patch verify→commit/push→redeploy; dispatch scheduler + watchdog; lifecycle enable; test1 synthetic account request→email reauth cancel→re-request; Owner-approved test1 current request only deadline move to past (global 336h unchanged); canonical destructive worker; verify Math byte/metadata erasure, stale reservation cleanup, Auth deletion; activate public web deletion page; Store deletion blocker verdict.
- **Migration namespace warning:** Production now uses 20261005000200 for **account_ops_sink**, while Manus ADMIN-P0-A branch previously used the same version for 20261005000200_admin_console_read.sql. **Resolve/renumber the Admin migration before branch integration or Production apply. Do not replay or overwrite the Production version.**
- **Store/Final RC remaining:** ADMIN-P0-C; merge/deploy Admin + notification backend code after migration-number reconciliation; `/account-deletion` scope-copy cleanup + 404/foundation copy; final APP/LAB branch integration; signed build number, physical-device smoke, reviewer account, Apple/Google Console declarations/screenshots. **Done since:** web deletion activation (LIVE), account-deletion destructive E2E, Flutter notification-center consumer integration (code). Payment LIVE remains separately OFF and does not block a free launch.


## APP first-run personalization — Release P0 authority (2026-10-06)

- **APP-FIRST-RUN-PERSONALIZATION-1 CODE COMPLETE (2026-10-06, app `ff338b4` on `claude/app-release-blocker-closeout-1`).** Flow: concise 3-screen brand intro (내신·수능·논술 LAB positioning; no 기출/AI headline) → status → grade+school → **관심 대학** → **희망 전공** → Home, reusing the existing onboarding gate / NEIS school search / design system. 관심 대학 reuses the existing `universities` catalog (public RLS) + `student_target_universities` (`status='interested'`, `source='onboarding'/'my'`, owner RLS) — **interest, not application** (distinct from `'planned'` and any future application model); **0–5 (optional/skippable), ~3 recommended** (Owner correction 2026-10-06: min 1→0; universities-step CTA becomes "나중에 설정할게요" when none selected), selected rises to an emphasized card, initial-letter logo fallback (no external logo scraping). 희망 전공 = minimal broad-field taxonomy + explicit undecided, stored in an additive **`profiles.intended_major`** column kept DECOUPLED/fail-safe from the core profile projection. My Page (학교·학년 설정) now also edits 관심 대학 + 희망 전공; Settings adds "앱 사용 안내 다시 보기" (brand replay, no personalization reset). No new auth/catalog/scraping. **University catalog release seed (2026-10-06): `public.universities` active 5 → 50** (Release Core 50: 서울/수도권/거점국립/과기원/지역 국립·사립; idempotent upsert on unique `slug`; existing 5 + synthetic row preserved; schema/RLS unchanged; no ranking/score stored). **Owner migration pending:** additive `profiles.intended_major text` (version `20261006000200`) must be applied before this build reaches prod (desired-major persistence degrades to unset until then). **CI validation pending** (local Flutter 3.32.0 < required >=3.47.3). Final APP RC also needs this feature's CI analyze/test.
- Scope: brand onboarding + school + grade + interested universities + desired major/interest field. Interested universities = **0–5 (optional/skippable), ~3 recommended**, and are explicitly informational/personalization data rather than actual application schools. Desired major must support undecided users.
- School/university selection UX: search candidates → unselected candidates remain visually secondary → selected name + available logo/symbol comes forward and is emphasized. Reuse existing profile/NEIS identity where applicable.
- Product connection: the resulting personalization profile becomes common context for **내신 LAB / 수능 LAB / 논술 LAB** and future admissions-information surfaces, supporting the product promise that students can manage admissions preparation in one place. Actual application schools/history remain a separate future data model.
- User can edit school, grade, interested universities and desired major later in My Page. Do not make onboarding a mandatory account-signup wall.


Owner authenticated acceptance: all requested Admin directory checks passed (immediate list/count, search/filter/sort/pagination where applicable, school names, Member Detail/Student360, tested denial boundaries). Owner requested ordinal numbers; bfc20c0 implements display-only server offset + position +1. No claim of extra test accounts or >25 Production members created.


## 2026-10-20 — Owner sequential source-registration directive / Gachon IN_PROGRESS

Latest Owner instruction supersedes the earlier cross-university parallel audit scope for material registration. Process Gachon only, then require university-specific registration approval, post-registration QA and next-university approval. Remaining ten universities NOT_STARTED for this sequential project. Existing catalog/priority order unchanged.

- Source integrity: Gachon 39 originals (31 PDF / 8 HWP) listed and SHA-256 rechecked; originals unchanged. Readable page extraction totals 921 pages including converted HWP and reference guides. Extraction is not full visual validation.
- Working candidate mapping: 17 exams / 166 questions, NOT approved registration totals. Individual problem/answer sections linked as candidates; shared passages, exact formulas and scoring boundaries still require review.
- 2027 guidebook reprints 2026 admission exams. Its 134 corresponding pages match individual-file Korean/Latin prose after normalization; formula glyphs excluded from this check, so mathematical/visual equivalence remains pending. No extra 2027 admission exam inferred.
- Production read-only snapshot: Gachon has 0 existing exams and 0 questions. No Production writes, migration, provider calls or credit transactions.
- HWP: eight Hancom conversions retained separately. Full native-original versus converted-page comparison NOT complete; do not mark PASS.
- Official-source verification impeded: admissions site returned explicit web-firewall blocking response. No bypass attempted. Search index alone is not attachment identity proof.
- Private local artifacts: Gachon file inventory, exam mapping, question evidence, registration plan, validation report and unexecuted postflight in Owner-designated materials validation folder. No source documents or extracted copyrighted text included in Wiki/Git.
- Current verdict PARTIAL / IN_PROGRESS. Registration approval gate NOT ready. WEB/APP registration QA NOT_EXECUTED. Public AI activation HOLD and store-submitted builds unchanged.

Sequential project order: Gachon IN_PROGRESS; Konkuk, Kyung Hee, Korea, Dongguk, Sogang, Seoul Women's, Sungkyunkwan, Sookmyung Women's, Soongsil, Korea Aerospace NOT_STARTED.

- Owner supplied official guide URL: https://admission.gachon.ac.kr/admission/html/rolling/susi_guide.asp . This establishes the supplied source pointer; direct attachment comparison remains pending (web fetch 502).
- Additional DB check: 22 Gachon-named resources already exist for earlier material; preserve all resource IDs. Zero essay exams/questions does not mean no existing material resources. Production identity/FK/check constraints inspected read-only and align with the existing canonical relationships.


## 2026-10-20 — Gachon registration + WEB evaluation integration scope
- Owner expanded university completion to independent A–J gates: originals, question links, criteria, registration, official webpage, WEB reads, submit, real quality, rewrite, History. No gate auto-passes from registration. Gachon remains IN_PROGRESS; other universities NOT_STARTED.
- Official guide page now verified in actual browser: https://admission.gachon.ac.kr/admission/html/rolling/susi_guide.asp ; page identifies 2026 humanities/natural/medicine questions and answers. Prior HTTP-fetch failures do not represent the subsequent browser result. Attachment identity still separately unverified.
- Production Gachon button still points directly to BBS0021 PDF. Prepared local-only researchSources entry uses official guide webpage; all prior PDF/source records and other universities unchanged. Actual localhost render href verified. Deployment requires Owner approval.
- Verified code gaps: ordinary DB selection route keeps submit disabled; single-question automatic selection absent; existing exam-submit endpoint rejects image answers. Reuse existing gated gateway; no new engine and no silent image dropping.
- Local contract tests: 4 suites / 27 tests passed. These mocks do not establish real evaluation quality or Production authorization. No Provider/credit/DB write performed.
- Local integration plan specifies test-environment verification, approved synthetic answers, existing Human Quality procedure, scoped initial/rewrite requests and History checks. Environment/account scope, exact question IDs, invocation cap/cost and credit impact must be verified before requesting actual-test approval. No approval is inferred from this planning directive.
- STEP1/3 remains incomplete. STEP4 DB registration, STEP7 actual evaluation and Production deployment are separate approvals. General evaluation/public HOLD and submitted app builds preserved.

- Prepared LAB patch: local branch `codex/gachon-official-page-20261020`, commit `9610d8798be332fea9df44662a9fc0fd62cd3c09`; not a Production deployment.

### Gachon follow-up verification and WEB path plan (2026-10-20)
- No repeat of 39-file inventory/hash verification. Additional full visual review of 2027 medical mock problem4/solution10 pages confirmed 4 question/evidence links. Global 17 exams/166 questions still candidates; HWP full native comparison and other questions incomplete. Gachon PARTIAL; no next university.
- Root cause refined: DB selection mounts draftOnly workspace (no submit/admission) plus hard-disabled parent CTA; source-registry route separately mounts existing exam submit consumer. Connecting validated IDs and saved draft revisions is required, not forcing the button on.
- Image gap: shared local input supports six images, but existing Math student route uploads one artifact at position1. Math storage/admission/confirmation exists; exam text DTO cannot accept image references without verified canonical linkage. Prepared minimal reuse plan in private audit artifacts, no new storage/schema/engine.
- Local security regression commit `368431a` (on top of preserved link patch `9610d87`): unsupported artifact/image/confirmed input fields and foreign origins rejected before Credit/worker. Five suites/33 tests PASS (mock). Mobile integrated upload and real quality NOT_ASSESSABLE.
- No deployment, Production writes, extraction/evaluation Provider calls, Credit transactions, public activation or store build changes. Source-validation and integration completion still pending; DB/evaluation approval gates not yet requested.

### Gachon local implementation GO — PARTIAL
- LAB local commit `7e069df`: authenticated VERIFIED registry/DB identity adapter connects saved Draft body/revision to existing exam submission consumer; unsaved answers blocked, single-question auto-selection, existing worker admission/quote/idempotency/History retained.
- Existing Math route extended to six ordered images through existing registration/upload services; artifact identities and completed uploads retained for partial retries. Preview/reorder/delete UI added; existing extraction confirmation reused. No Provider invoked.
- Text exam API remains closed to image payloads. Canonical essay exam/question to Math confirmed input linkage is still unresolved; do not report integrated image essay E2E complete. No migration/deployment/production data or credit changes.
- Related local regression: 43 files / 269 tests PASS (mock). Full tsc fails on missing pdfjs-dist and materials review-editor implicit-any; no full build PASS. Mobile browser QA pending.
- G38 problem pages1–4 visually inspected; answer pairing pending. Existing four G36/G37 question linkage checks preserved. 17 exams/166 questions remain candidates; HWP comparison incomplete. Other universities not started.

### Gachon focused follow-up — local checks recovered (2026-10-20)
- LAB local commit `d20ccd9`: identity-bound reviewed metadata removes stale-exam submission immediately; sole-question selection derives safely and permits explicit exclusion. Existing submission/readiness/ownership/HOLD retained.
- Full Typecheck and Lint PASS. Existing frozen lock install under Node22 restored missing pdfjs-dist; no package/lock changes or type-check bypass. Full local suite 144 files PASS / 2 skipped, 1,147 tests PASS / 3 skipped. Two new UI regressions cover stale identity and sole-question exclusion. These are not Provider or real-device results.
- Image essay server adapter remains incomplete: inspected essay RPC accepts humanities/business text snapshots only; Math problem sets link exams but inspected leaf schema has no verified essay-question mapping. No image rejection removed, new Credit/storage path, migration or activation. Canonical mapping and snapshot/worker compatibility must be established before an adapter can safely submit images. Repository findings are not a fresh Production schema assertion.
- Additional G38/G39 full-page visual comparison links 4 candidate questions to solutions/intents/scoring. Together with preserved medical4, local evidence links8/166 reviewed. 17 exams/166 questions remain candidates. G39 p9 prose/graph scoring sign discrepancy recorded for review, not silently fixed. HWP whole-source comparison and external file identity remain incomplete.
- Gachon PARTIAL; DB registration specification not final. Mobile authenticated submission and actual AI E2E NOT_ASSESSABLE. No next university, deployment, Provider, Credit transaction, production data or store build change.
- Private existing validation artifacts updated; copyrighted originals and full solutions excluded from Wiki. Push/remote status must be reported separately from these local commits.

## Integrated LAB service — 2026-10-21 local follow-up (PARTIAL)

- Claude54f40e18 and Codexd20ccd9 already included in LAB working branch; preserved without reintegration. APP untouched.
- Existing reviewer RPCs now feed canonical DB exam/question metadata into the existing selector in local code. Operator only; no RLS/publication change, no admission call for review-required exams, local draft only. Gachon/Korea unpublished and Kookmin empty confirmed read-only.
- Math question-to-leaf and owned confirmed-input snapshot bridge remains BLOCKED on separately approved DB contract work; no image rejection or Credit path relaxed.
- Related348tests, Typecheck/Lint/Build/Boundary PASS; mock/local checks are not Provider/Production PASS. Browser local static page smoke only; authenticated E2E pending.
- Existing11college97/382/150/2484 registration preserved. WEB pending22exams56questions35PDF remains separate. No Provider, deployment, DB write or Credit transaction.
- [Evidence, minimum approval scope and retained review queue](../90_HISTORY/DAILY/2026-10-21-service-integration.md).

## WEB UI Production promotion — 2026-10-21

- Exact Owner-approved Claude UI54f40e1 deployed to lab.legendstudy.com; Pages deployment7e15bfa5-76de-439e-92da-5d0315b820d9. No main merge.
- Approved gateway14e7612 byte parity PASS. Pages config before/after identical; Worker/Math/Continuous OFF, AI HOLD and503 retained. No DB migration/Provider/Credit/auth/payment changes.
- Typecheck/Lint/135-route build/Boundary/GitHubReady and48related tests PASS. Production42-university navigation/state restore, sole-question writer,6local images order/preview/delete,360px and200% checks PASS.
- New DB contracts and actual AI E2E remain separate; private-resource live security retest not performed. Previous backend-parity deployment blocker resolved by explicit Owner gateway authority.
- Detailed scope and evidence:90_HISTORY/DAILY/2026-10-21-service-integration.md.

## Backend activation preparation — 2026-10-21 PARTIAL

- DB logical backup,157Storage files and isolated service-data restore verified;132RLS policies match. Private backup stays outside Git.
- Full-project recovery pending Vault key-dependent restore and cron restore validation. Two approved Production migrations remain NOT_APPLIED under Owner backup gate.
- Konkuk representative math question not yet qualified; existing formula review HOLD retained. Existing mock/contract tests reused, no actual Provider/Credit/UI changes.
- Details:90_HISTORY/DAILY/2026-10-21-service-integration.md.


## 2026-10-22 사용자 자료 연결 — PARTIAL

운영208시험/656문항·anon21/0·메타데이터RPC 미적용 확인. 11대학 비로그인 WEB 누락 실측. APP 공통조회/WEB 정확한 ID 콘텐츠 병합 로컬검증, 운영변경0. [결과 및 승인 경계](../90_HISTORY/REVIEWS/2026-10-22-material-service-connection.md).


## 2026-10-22 71701 Production 적용 완료

Owner 조건부 승인·물리백업/Vault 동일프로젝트 복구+논리/Storage 보완 확인 후71701만 적용. anon11대학128시험468문항·건국guest HTTP21/58·RLS132 보존 PASS.71702/WEB배포/Provider/Credit/AI활성화 없음. 운영 전체 UI 실측은 별도. [상세](../90_HISTORY/REVIEWS/2026-10-22-material-service-connection.md). 이전 미적용 기록을 이 현재결과로 갱신.

## 2026-10-22 학생 자료 조회 UI 후속
71701 완료 재사용. 운영11대학 비로그인 UI는 아직 Registry 일부/로그인 요구/준비중으로 누락 확인. WEB 학생용 원문 미연결 안내·공식 자료 페이지 및 APP canonical 링크 최소 수정, 테스트/검증용 빌드 완료. 일반 사용자/Native 전체 PASS 아님. UI-only 배포 후보 분리, 배포 승인 대기. [상세](../90_HISTORY/REVIEWS/2026-10-22-material-service-connection.md).

## 2026-10-22 Owner 검수 게이트 — WEB 우선
PHASE1만 진행. 후보28c9dbb: 실제71701 응답128시험468문항 선택 컴포넌트 검증, 문항별 공식 자료 접근/문제탭 우선/단일 선택 개선. 영향30tests·typecheck/lint/build PASS. 배포 승인 및 Owner WEB 확인 대기, 내부 문제 원문 미연결은 별도 한계. Owner 확인 전 PHASE2 APP 및 PHASE3 첨삭 진행 금지. [상세](../90_HISTORY/REVIEWS/2026-10-22-material-service-connection.md).


## 2026-10-22 PHASE 1 WEB Production 반영 / Owner 검수 대기
Owner 승인 후보28c9dbb를 기존 Pages 직접 경로로 배포. 실제 Production8c234d9e-0129-4944-bafa-2771c3e95b5f/source28c9dbb 확인.11대학 최신 학년도·유형·계열·대표 문항을 비로그인/기존 로그인 사용자 화면에서 확인. 운영 설정 전후 동일, Backend/Gateway 동일,503/AI HOLD 유지. 기존30tests 재사용·운영 공개설정 재빌드PASS. 신규 자료 내부 원문 미연결/공식 페이지 문항별 대응은 PARTIAL이며 조회 PASS와 구분한다. Owner WEB 확인 전 APP/첨삭 진행 금지. [배포·대학별 검증 범위](../90_HISTORY/REVIEWS/2026-10-22-material-service-connection.md).

## 2026-10-23 — PHASE 3 실제 운영 체크포인트

최신 Owner 통합 실행 승인 적용. 건국 인문2번 실제 APP 최초 첨삭→WEB 무료 재첨삭→APP History 교차조회 PASS(iOS Simulator), Credit1/0. 운영10 Provider 호출·보수비용USD0.972644. 전체11개 대학 서비스는 PARTIAL/공개HOLD. Math 전역OFF, 테스트 계정/leaf 한시 DB 예외 준비; 기존 Worker 인증 유효성 확인 필요. 과거 “Production 변경0/Provider 미실행”은 이전 체크포인트다. [최신 증거·정확한 변경·복구](../90_HISTORY/REVIEWS/2026-10-22-phase3-service-connection.md).

## 2026-10-23 Math 인증 복구·실제 평가
두 전용 JWT의 실제 만료를 확인하고 기존 키로7일 갱신, 설치 후 역할 인증PASS. WEB 건국 자연1번 이미지판독·확정·실제평가·저장PASS, 최초1Credit/예약0, APP Simulator 같은결과조회PASS. Native History→Math 화면이 뒤에 열리는 문제 최소수정·회귀테스트PASS. APP 합성답안 입력 대기, 무료재첨삭/APP→WEB는 미완료이므로 전체PARTIAL. 대기 중 Math실행flagsOFF·한시DBgate/status예외원복, JWT/답안/결과보존. 기존 인문성공반복없음. [상세](../90_HISTORY/REVIEWS/2026-10-22-phase3-service-connection.md).

## 2026-10-23 수리 재첨삭 완료
Device Hub Send Clipboard로입력해결. 건국자연1번 APP무료재첨삭→실제Provider→결과/History→WEB교차조회PASS(iOS Simulator). 최초1/재첨삭0Credit·예약0보존. Math누적3호출/보수USD0.181868. 검증종료후Math flagsOFF·DB한시예외원복,일반공개HOLD. 실기기/다른대학전체PASS아님. 상세 phase3-service-20261022 기록참조.

### 2026-10-23 PHASE2 후속 검수
30후보의 전체완성은PARTIAL. 512문항대조/부분범위65/검수조립4. 숙명3최종합성사례 실제품질PASS,11호출·추정$4.117810. 43tests PASS,Production0. [상세와 미완료 명세](../90_HISTORY/REVIEWS/2026-10-23-university-evaluation-profile-phase2.md#owner-p0-후속-검수--2026-10-23).

### Owner 전략 명확화: 기본체계 우선
문항별체계 제작을중단하고 대학·유형기본→상속→예외 순서로진행. 숙명인문 기본진단1/10문항상속,47tests PASS. 기존65부분근거/4조립보존,Production0. [상태분리·11대학기본체계 작업단위](../90_HISTORY/REVIEWS/2026-10-23-university-evaluation-profile-phase2.md).

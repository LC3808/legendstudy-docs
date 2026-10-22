# 2026-10-22 자료 사용자 조회 연결 — PARTIAL

> 최신 상태: 71701 및 WEB 후보28c9dbb Production 반영 완료. 11대학 비로그인/기존 로그인 사용자 화면의 대표 문항 선택 확인. 내부 문제 원문 미연결은 PARTIAL, Owner WEB 검수 대기. 아래 최초 진단·미배포 상태는 이력이며 문서 하단의 최신 배포 결과를 우선한다.

## 최초 진단 / 공통 원인

Production read-only SQL: 전체 208시험/656문항. essay_browse_catalog(text) 미존재. 656문항 모두 is_published=false. anon 역할 트랜잭션 조회는 21시험/0문항. Source Registry 공개 API는 기존 77시험/237문항이며 운영 DB 전체를 대체하지 않는다. 관리자 검수 권한을 일반 사용자 권한으로 간주하지 않는다.

기존 71701 메타데이터 전용 함수가 미적용이고 APP은 기존 Registry만 읽었다. 기존 함수 계약을 재사용하는 APP 선택 연결과 WEB의 기존 검증 콘텐츠 보존 병합을 로컬 구현했다. 대학별 중복 수정 없음. 정확히 같은 시험/문항 UUID 집합에 한해서 기존 승인 콘텐츠를 보존하고, 신규 메타데이터는 검수 중/AI HOLD로 표시한다. 비공개 PDF·해설·평가기준을 학생 콘텐츠로 투영하지 않는다.

## 11개 대학 실측

DB 수치는 기존+신규 누적이며 최초 97/382 등록 배치와 다르다. WEB은 실제 비로그인 Production 대학 상세 화면의 관찰이다. 전부 신규 등록 자료 전체 연결은 FAIL, 기존 일부 표시만 PARTIAL이다. 로그인 일반 계정/APP 전체 대학 실측은 아직 NOT_ASSESSABLE이다.

| 대학 | DB 시험/문항 | 실제 비로그인 WEB 표시 | 전체 연결 |
|---|---:|---|---|
| 가천 |17/166|로그인 안내, 신규 학년도 선택 없음|FAIL|
| 건국 |21/58|2026 모의만|PARTIAL|
| 경희 |18/38|2022·2021만|PARTIAL|
| 고려 |10/30|로그인 안내, 신규 학년도 선택 없음|FAIL|
| 동국 |16/48|2024·2023·2022만|PARTIAL|
| 서강 |10/14|2024 모의만|PARTIAL|
| 성균관 |15/27|2025·2023만|PARTIAL|
| 숙명 |8/22|2025 모의 인문만|PARTIAL|
| 숭실 |16/42|2022 수시 인문만|PARTIAL|
| 서울여 |2/5|기출 준비 중|FAIL|
| 한국항공 |9/18|기출 준비 중|FAIL|

위 화면은 https://lab.legendstudy.com/essay-lab/universities/{slug}/ 에서 확인했다. 등록 메타데이터 조회와 공개 승인 문제 본문 제공은 별도다. 공개 PDF·본문 전체 제공, 실제 첨삭/History는 미검증/HOLD이며 PASS가 아니다.

## 과거 대량 자료 대조 (예비 조사)

기존 Downloads의 `3.논술 자료.zip` 보존 확인. __MACOSX/디렉터리 제외 5,664 archive entries: PDF 4,572, HWP 689, JPG 213, ZIP 108, PNG 68, 기타 14. 중복 포함 파일 항목 수이며 고유 원본·시험·문항 수로 해석하지 않는다. 원본 내용 전수 재검수/업로드하지 않았다.

기존 `legendstudy-essay-lab-inventory.csv` 134개 게시글 조사 행 재발견. Production essay_exam_resources 134연결/21시험/44 resource ID/활성134 확인. CSV 134게시글과 DB 134연결은 다른 단위이며 1:1로 확인되지 않았다. 전체 archive→분류→시험 UUID 대응은 미완료. 따라서 미등록/중복/HOLD 총수를 추정하지 않는다. 이번 신규 등록/재등록 0, 운영 신규 연결 0. PHASE 1 승인 대기 중 독립적인 예비 목록 대조만 실시, PHASE 3 완료 아님.

## 숙명/한양: 기존 조사 재사용

- 숙명 DB: 2027 모의 3시험/8문항, 2026 수시 4/10, 2025 모의 1/4. CSV 2019~2026 8게시글, 2024·2025 수시/모의 및 우수답안 언급. 원본을 다시 요청하기 전에 이 자료와 UUID 대응 필요. 2026 수시는 이미 있으므로 누락으로 단정하지 않는다.
- 한양 DB: 2024 수시 1/1, 2024 모의 2/4, 2025 모의 1/0. CSV 2019~2025 8게시글. 2025 모의 DB 시험에 문항 없음 확인. 2025 수시/2026 자료는 이 CSV에 없음; 전체 보관 원본 검사가 끝나지 않아 미보유로 단정하지 않는다.
- 기존 한양 2026-10-14 Production 인문 최초1/재첨삭0 Credit E2E, 숙명 로컬 이미지 품질, 건국 Provider 25회 기록 재사용. 재호출 없음. Math/History/Credit 재개발 없음.

## 로컬 변경 및 안전

APP: source_catalog.dart, source_catalog_page.dart 및 테스트. 대학 선택 시 동일 Supabase essay_browse_catalog 호출, ID 검증/허용 필드 투영/조회 실패 안내/REVIEW_REQUIRED 작성 차단.
LAB: registered-material-catalog.ts, source-exam-selection.tsx 및 테스트. DB ID가 정확히 일치하는 기존 Source Registry 콘텐츠만 보존.
42 Catalog, 후순위16 HOLD, Claude UX, 기존 인증·이미지6장·History 경로 보존. 서버/평가 엔진/결제/인증 설정 변경 없음.

검증: WEB 관련13테스트, typecheck/lint/build/Boundary PASS. APP 관련12테스트(360dp/200% 기존 회귀 포함), 변경 영역 analyze PASS, Android debug APK PASS. iOS Simulator debug build PASS. 실제 Native 화면 제어 도구가 Simulator 앱을 연결하지 못해 APP 화면 실측은 NOT_ASSESSABLE. Production 설정을 사용하는 실행 준비와 실제 사용자 화면 검증은 구분한다. Mock/Widget PASS를 운영 APP PASS로 기록하지 않는다.

## 승인 대상 / 복구

1. 기존 APP migration `20261021071701_essay_browse_metadata.sql` 하나의 적용 여부 결정. 함수 1개 및 실행권한만, 신규 테이블/정책/ID 변경 없음. 71702는 자료 조회에 불필요하므로 제외. 기존 백업/Vault 복구 미해결 조건을 해소하기 전 실행 금지. 승인만으로 복구 조건을 PASS로 바꾸지 않는다.
2. 적용 후 anon/auth 역할로 대학별 메타데이터/권한 확인, private Storage/evidence 차단 검증. 실패 시 후속 배포 중단. 신규 함수만 존재했던 경우 해당 함수 제거로 복구; 기존 함수가 생겼다면 적용 직전 정의/ACL 백업 복원. 기존 데이터 수정 없음.
3. WEB 변경은 배포 후보 전체와 실제 Production SHA를 대조한 최소 변경 패키지 확정 후 별도 배포 승인. 현재 신규 브랜치 전체 배포 승인을 요청하지 않는다. APP는 검증용 빌드만, 스토어 제출 없음.
4. 공개 문제 본문이 없는 자료는 권리/본문 승인 후 연결 필요. 비공개 자료를 공개해서 해결하지 않는다.

Production DB/Storage 쓰기·Migration·WEB 배포·APP 업로드·Provider·Credit 모두 0. 기존 데이터 변경 없음. 실제 Production SHA는 이번 조회에서 검증하지 못했으므로 과거 known-good SHA를 현재 SHA로 단정하지 않는다. 일반 사용자 AI HOLD 유지.

## 다음 단계

STEP 1 진단 완료, STEP 2 로컬 연결 준비, STEP 3 운영 전체 조회 BLOCKED. 이후 전체 자료 UUID 대조/숙명·한양 보완 확정/평가 연결/100초 대기 UX는 아직 미완료이며 이번 단계 완료로 보고하지 않는다. 최종 서비스 준비 PARTIAL/HOLD.

## Git handoff

- LAB `codex/material-service-lab-20261022`: 0d633ff (origin Push 및 일치 확인).
- APP `codex/material-service-app-20261022`: 415e4aff28ba97236c809bedb173247909f82a63 (origin 일치 확인).
- Wiki `codex/material-service-docs-20261022`: 이 보고서 포함, Push 후 원격 확인.
- 71701만의 조건부 적용 승인을 Owner에게 요청했다. 복구 게이트 미충족이면 실행하지 않음.

## 2026-10-22 71701 적용 결과

Owner의 71701-only 조건부 승인에 따라 복구 게이트 확인 후 적용. 원문 SHA256 불변. 기존 단일 트랜잭션 executor 패턴(소유자/충돌 guard,5s lock/60s statement timeout,canonical ledger 기록,PostgREST schema reload) 재사용. Function1개/comment/ACL 및 migration ledger71701만 변경.71702 미적용.

사후: anon11대학128시험/468문항 메타데이터, 모두evaluationReady=false. 문항 없는 기존14시험은 함수의 기존 필터에 따라 반환되지 않음(경희8,성균관6); 시험 삭제 아님. 건국 비로그인 HTTP200,21시험58문항. authenticated 역할21시험,unknown ID빈배열. anon/authenticated privateStorage 조회0,private evidence schema접근불가. 함수 execute anon/auth=true,service_role=false.132RLS hash e0b124ac537d8b45f1ef523095176ffd 전후 동일.133테이블 중131지문 동일; 변경2개는 기존 예약작업 account_private.ops_log/dispatch_health. 기존ID·학생답안·History·Credit·결제·Storage 메타데이터 지문 유지.

DB계약 PASS. 실제 WEB/APP 전체화면 PASS는 아님; 별도 배포/앱 실측 필요. Provider/Credit거래/WEB배포/APP업로드/AI활성화 없음. 복구의 실제전체실행은 하지 않았으며 supported physical restore+추가논리백업/Storage 복구경로 확인과 구분한다.

복구 근거: 2026-10-22 01:04:24KST 동일프로젝트 물리백업/Restore 권한 확인(실행취소), 공식Vault문서 key portability의 동일프로젝트 키 보존 확인. 최신133테이블 논리백업 추가, Storage 기존157+추가32 로컬바이트 보존. 백업파일/키는 Git에 없음. 기존 격리 복구와 cron 정의 복구 증거 재사용. https://supabase.com/docs/guides/database/vault#key-portability-and-migration

## 2026-10-22 사용자 조회 후속 — PARTIAL

기존 71701/DB/RLS 검증 재사용, 재적용 없음. 실제 운영 비로그인 대학 상세 11곳을 다시 확인: 가천/고려 로그인 안내, 서울여/한국항공 기출 준비 중. 성균관 2025·2023, 경희 2022·2021, 건국 2026, 서강 2024, 숭실 2022, 동국 2024·2023·2022, 숙명 2025만 선택 화면에 표시. 이는 신규 DB 전체와 불일치하며 위 운영 표의 PARTIAL/FAIL 유지. 일반 로그인 계정/Native 실기기 검증은 미완료.

공통 UI 변경: 학생 화면의 관리자 검수 링크 제거, 공개 문제 원문 미연결 이유 명시, 로그인 DB 선택 화면에도 같은 안내. 기존 ID/공개 승인 PDF 예외/검수 HOLD 보존. 공식 원본 PDF를 공개하거나 문제 본문을 생성하지 않음.

공식 입학처 웹페이지를 canonical catalog에 연결: [고려 기출](https://oku.korea.ac.kr/oku/cms/FR_CON/index.do?CONTENTS_NO=4&MENU_ID=720), [숭실 기출](https://iphak.ssu.ac.kr/board/exam_list.asp?flag2=1&keyword=&page=1&page_no=1_2_7&srchoption=), [항공 기출](https://ibhak.kau.ac.kr/admission/html/rolling/previous_in_exam.asp). 항공은 2024/2025/2026 기출 목록 실제 확인. 기존 PDF URL은 내부 source에 보존. 서강 공식 사이트 접근 실패 및 서울여 논술 자료실 미확인으로 대체 URL을 추측하지 않고 링크 확인 중으로 표시. 나머지 기존 reviewed links 재사용; 모든 학년도별 공식 원문 대조 PASS는 아님.

APP는 LAB canonical catalog에서 동일 표시 데이터를 재생성, 42 ID·순서 유지. 11대학 reviewed officialSourceUrl이 원격 Registry의 오래된 PDF URL로 덮어써지지 않도록 최소 수정. 기존 Flutter Native/History/Credit/Math 유지.

검증: 개발 LAB 관련44 tests PASS, typecheck/lint/build/Boundary/GitHub-ready PASS(최종 문구 추가는 후속 조회 tests 포함). APP13 tests PASS, analyze PASS, Android debug build19 APK 및 iOS Simulator debug19 build PASS. 기존 store18 보존, 업로드 없음. 실제 APP 화면/로그인 학생 화면/WEB 360px·200% 이번 영향 실측은 미완료. Flutter Widget 360dp/200% 회귀는 PASS이며 실기기 결과와 구분.

로컬 WEB 브라우저에서 Production RPC를 호출하려 했으나 기존 auth-config의 origin whitelist가 localhost에서 client를 생성하지 않아 조회 불가. 보안 제한을 완화하지 않았다. 로컬 UI/API PASS를 Production PASS로 기록하지 않는다.

배포 후보는 known-good54f40e18에서 별도 codex/material-browse-release-20261022로 조회 UI·HOLD 정책만 선별. 개발 브랜치의 Gateway/Math provider/image-submit backend 변경은 제외. Functions/server diff0을 확인. 배포 및 운영 환경변수 일치 확인은 별도 승인/실행 단계. 원격 Push는 배포 아님.

남은 순서: 최소 WEB 후보 배포 승인→기존 Production 설정으로 빌드·배포→일반 계정/비로그인11대학 조회·공식 자료·확대 실측. Native 실기기 실행→동일 ID 검증. 승인된 문제 본문이 없는 문항은 계속 누락/준비중. 이후 과거 archive 전체 UUID 대응 및 숙명/한양 누락 확정. 현재 예비 조사 수치는 위 기록 재사용, 신규 등록/재등록0.

Production DB/Storage/71702/Provider/Credit/배포/AI활성화 변경0. 전체 서비스 PARTIAL/HOLD.

### 배포 후보 및 Git 후속
- LAB 개발 e0667cb / codex/material-service-lab-20261022.
- APP 9d3bae8 / codex/material-service-app-20261022.
- UI-only 배포 후보 7b836a2 / codex/material-browse-release-20261022, base54f40e18. 17files, Backend/Functions diff0. Gateway SHA256 d0640668a83904f966d98dd1da584734c09cad0fe4f12c7b72d3dba83a9020ab 동일.
- 후보41관련tests/typecheck/lint/build/Boundary/GitHub-ready PASS. Production 설정 전체 대조 후 동일 설정으로 재빌드해야 하며 이번 빌드는 컴파일 검증이다. Owner 배포 승인 전 실행 금지.
- Android APK/iOS Simulator build19 검증용 산출물만 생성. store18/Production 설정 미변경.

## Owner 단계별 검수 전환 — PHASE 1만

현재 후보 28c9dbbd961d33a22d97eca7022eccce3e766b17 (`codex/material-browse-release-20261022`), 7b836a2 보존 후 보완. Owner WEB 확인 전 APP 진행 금지, APP 설치 확인 전 첨삭 연결 진행 금지. 이번 후속 APP 변경/빌드0, 엔진/제출 계약 변경0.

선택 문항 바로 옆에 학년도·수시/모의·계열·문항 정보 및 공식 입학처 링크 표시. 모바일 문제 탭 우선. 로그인 경로 단일 학년도/계열/회차 자동 선택, 유형 변경 시 이전 문항 초기화 검증. 기존 공개 승인 PDF 뷰어 유지. 비공개 원본/해설/채점기준 공개0.

공식 웹페이지 추가 확인: [서울여 기출 자료실](https://admission.swu.ac.kr/bbs/board.php?bo_table=dataroom&wr_9=gichul&sca=%EC%88%98%EC%8B%9C)에서 2026 인문 오전/자연 오후 문제 및 해설 첨부 확인. [서강 모의논술 자료실](https://admission.sogang.ac.kr/enter/html/rolling/data.asp)에서2027/2026/2025/2024 모의 목록, [서강 입시책자](https://admission.sogang.ac.kr/enter/html/counsel/book.asp)에서2027 논술가이드북 확인. 검색 엔진 실패를 자료 없음으로 판정하지 않고 실제 브라우저로 확인. 모든 선택 문항과 해당 외부 PDF의 원문 대조 완료를 뜻하지 않음.

71701 공개 응답을 로컬 QA snapshot으로 사용하여11대학128시험468문항 전부 선택하는 DOM 컴포넌트 검증 PASS. snapshot은 Git 밖, 인증키 없음. 영향 테스트30 PASS, typecheck/lint/build/Boundary/GitHub-ready PASS. 시험·문항 ID 중복/변경 없음. 해당 결과는 운영 브라우저 또는 Owner E2E PASS가 아니다. 기존 정적 목록/토글은 신규 성과로 계산하지 않음.

중요한 잔여 한계: 공개 승인된 문제 원문이 없는 항목은 공식 입학처 웹페이지로 연결하며 LAB 내부 원문 표시 완료가 아님. 모든 문항 직접 PDF 제공 또는 권리 승인 없이 원문 공개하지 않는다. PHASE1 PARTIAL, 배포 및 Owner 실제 확인 전 완료 선언 금지.

배포 승인 요청 범위: WEB28c9dbb만, Production 설정/현재known-good 확인 후 동일 설정 재빌드 및 배포, 회귀 시 직전 배포 복구. Backend/Functions는54f40e18과 동일, DB/71702/Provider/Credit/AI공개/APP 변경 제외.


## PHASE 1 승인된 WEB Production 배포 — 2026-10-22

Owner가 후보28c9dbb 배포 후 직접 검수를 승인했다. Dashboard에서 이전 Production54f40e18 /7e15bfa5-76de-439e-92da-5d0315b820d9 확인 후 기존 직접 Pages 경로로 배포했다. Production branch selector main 사용은 Git main 병합이 아니다.

- 배포 소스: `28c9dbbd961d33a22d97eca7022eccce3e766b17`, `codex/material-browse-release-20261022`.
- 실제 Production 배포: `8c234d9e-0129-4944-bafa-2771c3e95b5f`; Dashboard Production/source SHA와 https://lab.legendstudy.com 실측 확인.
- 복구 대상: 직전 `7e15bfa5-76de-439e-92da-5d0315b820d9` 보존. 회귀 롤백 실행은 없었다.
- Backend/Functions/server diff0, Gateway SHA256 `d0640668a83904f966d98dd1da584734c09cad0fe4f12c7b72d3dba83a9020ab` 동일.
- 기존 영향30tests/typecheck/lint/Boundary/GitHub-ready PASS 재사용. 실제 Production NEXT_PUBLIC 설정으로 Node22 재빌드 PASS. 공개 인증 provider 목록 등 기존 설정 유지.
- 공식 Wrangler config download의 배포 전후 구조/값 일치. Math/Provider/Exam/Continuous OFF 및 서비스 바인딩 보존. Secret 값을 조회/출력/변경하지 않음.
- 배포 전후 비인증 빈 요청에 기존503 `EVALUATION_UNAVAILABLE` 확인. 최초 Python UA는Cloudflare403, 일반UA 재확인503. 실제 평가/Provider/Credit 호출0.

### 실제 사용자 화면 확인 범위

비로그인 IAB 및 기존 로그인 Chrome의 **사용자 대학 상세 화면**에서 아래 각 대학의 최신 학년도→유형→계열→대표 문항을 확인했다. 관리자 검수 화면이 아니다. 기존 로그인 계정은 Owner 세션이며 별도 일반 학생 계정 생성/권한 변경은 하지 않았다. 모든128시험468문항 전체 선택은 이전 컴포넌트 테스트 결과이고, 이번 운영 실측은 대학별 대표 경로이다.

| 대학 | 71701 시험/문항 (기존 확인 재사용) | 화면 학년도 | 실제 대표 경로 | guest/로그인 화면 | 원문·AI 상태 |
|---|---:|---|---|---|---|
| 가천 |17/166|2027·2026·2025·2024|2027모의 A형1번|PASS/PASS|내부 원문 미연결·HOLD|
| 건국 |21/58|2026·2025·2024|2026수시 자연1/4번, 모의 인문1번|PASS/PASS|내부 원문 미연결·HOLD|
| 경희 |10/38|2027·2026·2022·2021|2027모의 사회 논제Ⅰ|PASS/PASS|내부 원문 미연결·HOLD|
| 고려 |10/30|2026·2025|2026수시 인문 오전1번|PASS/PASS|내부 원문 미연결·HOLD|
| 동국 |16/48|2027·2026·2025·2024·2023·2022|2027모의 인문1번|PASS/PASS|내부 원문 미연결·HOLD|
| 서강 |10/14|2027·2026·2024|2027모의 인문 단일문항|PASS/PASS|내부 원문 미연결·HOLD|
| 성균관 |9/27|2027·2026·2025·2023|2027모의 수리1번|PASS/PASS|내부 원문 미연결·HOLD|
| 숙명 |8/22|2027·2026·2025|2027모의 인문 문항1|PASS/PASS|내부 원문 미연결·HOLD|
| 숭실 |16/42|2027·2026·2025·2024·2022|2027모의 경상1번|PASS/PASS|내부 원문 미연결·HOLD|
| 서울여 |2/5|2026|2026수시 인문사회1번|PASS/PASS|내부 원문 미연결·HOLD|
| 한국항공 |9/18|2026·2025·2024|2026수시 공학1번|PASS/PASS|내부 원문 미연결·HOLD|

42개 전체보기 실제42링크 유지. 건국 문항1→4 전환에 선택 문항명/안내/답안ID 동기화 확인. 모든 대표 경로 공식자료 링크 및 첨삭 준비중 비활성 표시. 단일문항 서강은 불필요한 문항 탭 없이 표시된다. 건국 공식 자료실 실제 페이지에2024~2027 KU논술가이드북 목록 확인. 다른 대학 공식페이지 확인은 기존 증거 재사용이며 모든 링크/학년도별 원문 대조를 새 PASS로 처리하지 않음.

**문제 원문 제공은 PARTIAL**: 신규 자료의 내부 본문/PDF는 공개 승인 없이 표시하지 않으며, 링크는 공식 자료 페이지이지 해당 문항 직접 원문 보장이 아니다. 특히 가천2027모의에 기존2026기출 자료 페이지가 안내되는 범위 등 문항별 원문 대응은 후속 검수 필요. 숙명 등 기존 참고 링크에는 기출 직접 자료가 아닌 안내성 게시글도 포함되어 있어 전체 원문 접근 PASS로 간주하지 않는다. 기존 승인 PDF 예외/뷰어는 코드 보존, 이번 모든PDF 렌더 재검증 없음. 360px/200% 기존 결과 재사용, 이번 운영 재실측 없음.

이번 변경은 WEB 배포만. DB/Storage/Migration71702/Provider/Credit/Payment/IAP/JWT/APP 변경0. 기존 ID·RLS·비공개 정책은 변경하지 않았으며 기존 DB 보존 검증을 재실행하지 않음. 배포 PASS, 대표 메타데이터 UI 조회 PASS, 전체 원문/서비스 PARTIAL/HOLD. Owner가 실제 WEB를 확인하기 전 PHASE2 APP 및 PHASE3 첨삭 작업 금지.

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

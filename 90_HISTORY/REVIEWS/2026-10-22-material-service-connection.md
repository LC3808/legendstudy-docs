# 2026-10-22 자료 사용자 조회 연결 — PARTIAL

> 최신 상태: 71701 Production 적용 완료. 아래 최초 미적용 진단은 이력이며, 현재 UI는 미배포 상태다. 2026-10-22 사용자 조회 후속 결과는 문서 하단 참조.

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

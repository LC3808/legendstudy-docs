# 2026-10-25 Native APP release candidate

상태: MY 복원본 자동검증·Android/iOS Release 빌드 완료, 양 기기 교체·실행 완료. 실기기 상세 검수/스토어 제출 미완료.

## Authority

[10/25 인수인계](https://github.com/LC3808/legendstudy-docs/blob/main/90_HISTORY/2026-10-25-next-session-essay-release-handoff.md), [서비스 원칙](OWNER_DIRECTIVES/2026-10-24-essay-service-principle-and-execution.md), [모바일 구매 조사](2026-10-25-admin-mobile-purchases.md) 및 Owner APP release 1~40 지시 재사용. Owner가 새 iPhone 12 Pro Max 화면을 확인한 후 MY UI/UX를 기존으로 되돌리도록 명시: APP MY 재설계 철회, WEB MY 변경은 유지.

## 변경

Flutter Native 유지. 기존 MY 화면·프로필 편집·목표·학습·LAB 구성 복원. Credit reserve/release 사용자 내역 숨김, consume 동일 decision 합산, 실제 만료 수량. 관리자 Ledger/정산/상품/Secret 불변. APP 관리자 메뉴 제거(WEB 전용).

기존 Math 회차 API를 사용하는 텍스트/이미지·판독 확인·부분 제출·부모 무료회차·실패 문항만 재처리 연결. durable request/attempt/retry key로 응답 유실·재시도 멱등성 유지. 성공 결과 재실행 없음. History 회차 그룹/legacy 중복 방지. 결과 세로 성장막대는 같은 기준만 비교, 실제 기준명 보존. 대표 음성, 상위 비교 접힘, 로컬 PNG/PDF·대표주소 공유. 내부 근거 개수·생성 예시 사용자 노출 제거, 원본 보존.

## WEB / 운영

WEB SHA `e9f1d4a1def74beb85e643f386bc5622b3aedb97`, Production `e6af7b54-5199-4af9-94f1-1ee8fd909420` canonical success. 고객 사용내역 reserve/release 숨김·consume -1, 관리자 원장 원본·5행 페이지 실제 확인. Typecheck/Lint/boundary/build/관련80 PASS(2skip). branch remote 일치 확인. Rollback SHA `8261d17d1d379feff16e247267583ea4a165f86b`, deployment `7ff387f2-4625-40e2-b557-61b71c1dbd64`.

Essay Worker `17b3bd65-8d90-4e8e-8ff6-a696e9575588` 유지. Math Pages Functions 유지. SQL/Secret/Provider 신규 실행 없음. IAP Edge v23 ACTIVE(WebCrypto) 확인. APP checkout의 오래된 Edge IAP source를 재배포하지 않는다.

## 검증

MY 복원 후 Flutter Analyze No issues, 전체1123 PASS/7skip/0FAIL. Math 부분동의·응답유실/remount·성공 재실행 방지, Credit projection/예약 반영, PDF/PNG·한국어 PDF 렌더 검증 포함. Wiki 링크/복구 검사 PASS.

MY 복원 전 Android AAB/APK1.0.1(2026102501), iOS IPA1.0.1(20) 빌드 성공, 양 실기기 데이터 보존 설치·실행 성공. Owner iPhone 확인 후 MY 원복 요청. 복원 후 Android AAB/APK·iOS IPA 재빌드도 PASS. iPhone·Android 복원본 데이터 보존 재설치·실행 PASS. Device Hub는 해당 iOS26.6.1 화면 공유 미지원(iOS27 필요), 직접 기기 화면 검수 BLOCKED.

## 미완료와 금지

인문 이미지 API는 text-only: Math text+image 혼합을 교차 엔진/인문 이미지 지원으로 보고하지 않는다. 제출 전 사진 타기기 draft 동기화 기존 계약 없음. 새로운 MY 지원 현황 UI 등은 Owner 철회 후 이번 APP 출시 기능 아님. 실제 새 빌드 구매 완료·OAuth 재로그인·쓰기 동기화·전체 회차 운영 정산 미확인은 NOT TESTED. 과거 IAP 성공으로 새 빌드 결제 PASS 처리하지 않는다. Play 지급계정 알림 Owner 조치 항목.

스토어는 Android18/iOS19 기존 출시 유지. 후보는 빌드·기기 검증 보고 후 Owner 최종 승인 전 제출 금지. 앱 기본 ID/서명/상품/기존 API 보존. 롤백은 기존 스토어 출시 유지 및 APP baseline c3e93d9; DB rollback 없음.

## 코드 checkpoint

APP `8fb30a230fbe7976a2f8ce2e529ce584141232a6` (`codex/material-service-app-20261022`). WEB `e9f1d4a1def74beb85e643f386bc5622b3aedb97` (`codex/web-app-release-20261024`). 신규 SQL/Provider 호출/스토어 제출 없음. 상세 artifact SHA256 및 로컬 테스트 증거는 [APP release 기록](https://github.com/LC3808/legendstudy-app/blob/codex/material-service-app-20261022/wiki/app-release-20261025.md)에 보존.

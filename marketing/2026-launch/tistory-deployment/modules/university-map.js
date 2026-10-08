/* =========================================================
   LEGENDSTUDY MARKETING — university-map.js
   LegendStudy.com (Tistory) 논술 기출 게시물 → 대학 식별 맵
   ---------------------------------------------------------
   · 게시물 title / category 텍스트에서 대학을 식별한다.
   · HTML 곳곳에 if/else를 복붙하지 않고 이 한 곳에서만 관리한다.
   · destination:''  → 전역 설정의 fallback(LAB main)을 사용.
   · active:false    → 그 대학 전용 LIVE CTA는 아직 켜지 않음(안전 기본값).
   ---------------------------------------------------------
   활성화 게이트(대학별 active:true 로 바꾸기 전 모두 충족 — DEPLOYMENT.md 참조):
     1) destination route 존재 2) 대학↔route 매핑 정확 3) 실제 서비스 가능
     4) 평가 context 준비 5) CTA 약속 행동 가능 6) 모바일 route 정상 7) 로그인 정상
   현재 최신 개발 authority(2026-10-08): 공개 Essay web runtime 미검증, 대학별
   route 미확인 → 모든 대학 active:false, destination:'' (fallback) 로 출시.
   ========================================================= */
(function (root) {
  // 각 항목: key, name(짧은 표기), aliases(게시물에서 등장하는 표기들),
  //          destination(''=fallback), campaign, active(false)
  // aliases는 긴 표기를 앞에 둔다(부분일치 우선순위).
  var UNIVERSITIES = [
    { key: 'GACHON',   name: '가천대',   aliases: ['가천대학교', '가천대'],                 destination: '', campaign: 'u_gachon',   active: false },
    { key: 'GANGNAM',  name: '가톨릭대', aliases: ['가톨릭대학교', '가톨릭대'],             destination: '', campaign: 'u_catholic',  active: false },
    { key: 'KONKUK',   name: '건국대',   aliases: ['건국대학교', '건국대'],                 destination: '', campaign: 'u_konkuk',   active: false },
    { key: 'KYONGGI',  name: '경기대',   aliases: ['경기대학교', '경기대'],                 destination: '', campaign: 'u_kyonggi',  active: false },
    { key: 'KNU',      name: '경북대',   aliases: ['경북대학교', '경북대'],                 destination: '', campaign: 'u_knu',      active: false },
    { key: 'PNU',      name: '부산대',   aliases: ['부산대학교', '부산대'],                 destination: '', campaign: 'u_pnu',      active: false },
    { key: 'KHU',      name: '경희대',   aliases: ['경희대학교', '경희대'],                 destination: '', campaign: 'u_khu',      active: false },
    { key: 'KW',       name: '광운대',   aliases: ['광운대학교', '광운대'],                 destination: '', campaign: 'u_kw',       active: false },
    { key: 'DANKOOK',  name: '단국대',   aliases: ['단국대학교', '단국대'],                 destination: '', campaign: 'u_dankook',  active: false },
    { key: 'DUKSUNG',  name: '덕성여대', aliases: ['덕성여자대학교', '덕성여대'],           destination: '', campaign: 'u_duksung',  active: false },
    { key: 'SWU',      name: '서울여대', aliases: ['서울여자대학교', '서울여대'],           destination: '', campaign: 'u_swu',      active: false },
    { key: 'SSWU',     name: '성신여대', aliases: ['성신여자대학교', '성신여대'],           destination: '', campaign: 'u_sswu',     active: false },
    { key: 'SOOKMYUNG',name: '숙명여대', aliases: ['숙명여자대학교', '숙명여대'],           destination: '', campaign: 'u_sookmyung',active: false },
    { key: 'EWHA',     name: '이화여대', aliases: ['이화여자대학교', '이화여대'],           destination: '', campaign: 'u_ewha',     active: false },
    { key: 'DONGGUK',  name: '동국대',   aliases: ['동국대학교', '동국대'],                 destination: '', campaign: 'u_dongguk',  active: false },
    { key: 'UOS',      name: '서울시립대',aliases: ['서울시립대학교', '서울시립대'],         destination: '', campaign: 'u_uos',      active: false },
    { key: 'SOGANG',   name: '서강대',   aliases: ['서강대학교', '서강대'],                 destination: '', campaign: 'u_sogang',   active: false },
    { key: 'SKKU',     name: '성균관대', aliases: ['성균관대학교', '성균관대'],             destination: '', campaign: 'u_skku',     active: false },
    { key: 'SEOULTECH',name: '서울과기대',aliases: ['서울과학기술대학교', '서울과기대'],     destination: '', campaign: 'u_seoultech',active: false },
    { key: 'SSU',      name: '숭실대',   aliases: ['숭실대학교', '숭실대'],                 destination: '', campaign: 'u_ssu',      active: false },
    { key: 'AJOU',     name: '아주대',   aliases: ['아주대학교', '아주대'],                 destination: '', campaign: 'u_ajou',     active: false },
    { key: 'INHA',     name: '인하대',   aliases: ['인하대학교', '인하대'],                 destination: '', campaign: 'u_inha',     active: false },
    { key: 'YONSEI',   name: '연세대',   aliases: ['연세대학교', '연세대'],                 destination: '', campaign: 'u_yonsei',   active: false },
    { key: 'KOREA',    name: '고려대',   aliases: ['고려대학교', '고려대'],                 destination: '', campaign: 'u_korea',    active: false },
    { key: 'CAU',      name: '중앙대',   aliases: ['중앙대학교', '중앙대'],                 destination: '', campaign: 'u_cau',      active: false },
    { key: 'HUFS',     name: '한국외대', aliases: ['한국외국어대학교', '한국외대'],         destination: '', campaign: 'u_hufs',     active: false },
    { key: 'KOREATECH',name: '한국기술교육대', aliases: ['한국기술교육대학교', '한국기술교육대'], destination: '', campaign: 'u_koreatech', active: false },
    { key: 'KAU',      name: '항공대',   aliases: ['한국항공대학교', '항공대'],             destination: '', campaign: 'u_kau',      active: false },
    { key: 'HANYANG',  name: '한양대',   aliases: ['한양대학교', '한양대'],                 destination: '', campaign: 'u_hanyang',  active: false },
    { key: 'HONGIK',   name: '홍익대',   aliases: ['홍익대학교', '홍익대'],                 destination: '', campaign: 'u_hongik',   active: false },
    { key: 'SEJONG',   name: '세종대',   aliases: ['세종대학교', '세종대'],                 destination: '', campaign: 'u_sejong',   active: false },
    { key: 'SANGMYUNG',name: '상명대',   aliases: ['상명대학교', '상명대'],                 destination: '', campaign: 'u_sangmyung',active: false },
    { key: 'SKUNIV',   name: '서경대',   aliases: ['서경대학교', '서경대'],                 destination: '', campaign: 'u_skuniv',   active: false },
    { key: 'EULJI',    name: '을지대',   aliases: ['을지대학교', '을지대'],                 destination: '', campaign: 'u_eulji',    active: false }
  ];

  root.LS_MKT_UNIVERSITIES = UNIVERSITIES;
})(typeof window !== 'undefined' ? window : this);

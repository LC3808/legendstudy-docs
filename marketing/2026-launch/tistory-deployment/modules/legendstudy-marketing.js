/* =========================================================
   LEGENDSTUDY MARKETING — legendstudy-marketing.js
   LegendStudy.com (Tistory) 마케팅 레이어 — 메인 슬라이드 + 논술 게시물 CTA
   ---------------------------------------------------------
   원칙(브리프/최신 Wiki authority 2026-10-08 반영):
   · 기존 스킨/슬라이더/광고/검색/SEO를 건드리지 않는다. 추가만 한다.
   · 모든 기능은 기본 OFF. 게이트 통과 시 config 한 줄로 켠다.
   · dead link 금지: Store URL/대학 route가 없으면 해당 CTA를 아예 넣지 않는다.
   · 합격/예측/채점 표현 금지. LAB Web이 primary(앱 설치 강제 아님).
   · 반드시 university-map.js(LS_MKT_UNIVERSITIES)보다 뒤에 로드.
   ========================================================= */
(function (w, d) {
  'use strict';

  /* ===== 1. 설정 (여기만 편집) ===================================== */
  var CONFIG = {
    /* --- 전역 기능 플래그 (기본 false = 아무것도 노출 안 함) --- */
    APP_BANNER_ENABLED:        false, // 실제 Store URL 확정 후 true (DD-2)
    ESSAY_SLIDE_ENABLED:       false, // Essay 공개 runtime 검증 후 true (DD-4)
    ARTICLE_ESSAY_CTA_ENABLED: false, // 위와 동일 (DD-4) — 게시물 CTA
    SHOW_SIGNUP_BONUS:         false, // 신규가입 +3 실사용 E2E 확인 후 true (DD-3)

    /* --- 목적지 (실제 route 확인 후 채움) --- */
    LAB_HOME:       'https://lab.legendstudy.com',
    ESSAY_LAB_MAIN: 'https://lab.legendstudy.com', // 공개 essay 진입 route 확인 후 교체
    STORE_URL_IOS:     '', // App Store URL (DD-2) — 비어 있으면 APP 배너 미노출
    STORE_URL_ANDROID: '', // Google Play URL (DD-2)
    QR_IMAGE_URL:      '', // (선택) PC 슬라이드 QR 이미지 URL

    /* --- 대학별 route 미확정 시 동작 --- */
    UNIVERSITY_FALLBACK: 'lab_main', // 'lab_main'(LAB 메인으로) | 'disable'(CTA 미노출)

    /* --- 분석 --- */
    ANALYTICS_ENABLED: true,         // window.ga 있으면 이벤트 전송(없으면 조용히 skip)
    UTM_SOURCE: 'legendstudy_com'
  };

  var UNIS = w.LS_MKT_UNIVERSITIES || [];

  /* ===== 2. 유틸 =================================================== */
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}

  function addUTM(url, medium, content, campaign){
    if(!url) return url;
    try{
      var sep = url.indexOf('?') === -1 ? '?' : '&';
      var q = 'utm_source=' + encodeURIComponent(CONFIG.UTM_SOURCE)
            + '&utm_medium=' + encodeURIComponent(medium)
            + '&utm_campaign=' + encodeURIComponent(campaign || 'essay_lab_2026')
            + (content ? '&utm_content=' + encodeURIComponent(content) : '');
      return url + sep + q; // PII는 넣지 않는다 (대학 key / placement 만)
    }catch(e){ return url; }
  }

  function track(action, label){
    if(!CONFIG.ANALYTICS_ENABLED) return;
    try{ if(typeof w.ga === 'function'){ w.ga('send','event','legendstudy_marketing',action,label); } }catch(e){}
  }

  function isEssayText(t){ return /논술|모의논술/.test(t || ''); }

  // 제목(우선) + 카테고리에서 대학 식별
  function detectUniversity(title, category){
    var hay = (title || '') + ' ' + (category || '');
    for(var i=0;i<UNIS.length;i++){
      var u = UNIS[i];
      for(var j=0;j<u.aliases.length;j++){
        if(hay.indexOf(u.aliases[j]) > -1) return u;
      }
    }
    return null;
  }

  // 대학 → 목적지 + 활성 여부 결정 (게이트 반영)
  // 반환: {href, label, active} 또는 null(=CTA 미노출)
  function resolveDestination(uni){
    // 대학을 특정하지 못하면 일반 논술 LAB
    if(!uni){
      return { href: CONFIG.ESSAY_LAB_MAIN, label: '논술 LAB', active: true, campaign: 'essay_general' };
    }
    if(uni.active && uni.destination){
      return { href: uni.destination, label: uni.name + ' 논술 LAB', active: true, campaign: uni.campaign };
    }
    // 대학 전용 route 미확정
    if(CONFIG.UNIVERSITY_FALLBACK === 'disable') return null;
    // 'lab_main': 대학명은 안내하되 목적지는 LAB 메인(dead link 아님)
    return { href: CONFIG.ESSAY_LAB_MAIN, label: '논술 LAB', active: true, campaign: uni.campaign };
  }

  /* ===== 3. 메인 슬라이드 준비 (home) ============================== */
  // 정적 .ls-slide--mkt 블록을, 플래그 OFF거나 dead-link이면 initSlider 전에 제거.
  // (이 스크립트는 기존 랜딩 IIFE보다 먼저 로드되어 DOMContentLoaded가 먼저 실행됨)
  function prepareHomeSlides(){
    var track = d.querySelector('#slider .ls-slider__track');
    if(!track) return;

    // APP 슬라이드
    var appSlide = track.querySelector('[data-mkt="app"]');
    if(appSlide){
      var hasStore = CONFIG.STORE_URL_IOS || CONFIG.STORE_URL_ANDROID;
      if(!CONFIG.APP_BANNER_ENABLED || !hasStore){
        appSlide.parentNode.removeChild(appSlide); // dead link 방지
      }else{
        wireAppSlide(appSlide);
      }
    }

    // Essay LAB 슬라이드
    var essaySlide = track.querySelector('[data-mkt="essay"]');
    if(essaySlide){
      if(!CONFIG.ESSAY_SLIDE_ENABLED){
        essaySlide.parentNode.removeChild(essaySlide);
      }else{
        wireEssaySlide(essaySlide);
      }
    }
  }

  function wireAppSlide(slide){
    var ios = slide.querySelector('[data-store="ios"]');
    var and = slide.querySelector('[data-store="android"]');
    if(ios){ if(CONFIG.STORE_URL_IOS){ ios.setAttribute('href', CONFIG.STORE_URL_IOS); ios.addEventListener('click',function(){track('app_store_click','ios');}); } else { ios.style.display='none'; } }
    if(and){ if(CONFIG.STORE_URL_ANDROID){ and.setAttribute('href', CONFIG.STORE_URL_ANDROID); and.addEventListener('click',function(){track('app_store_click','android');}); } else { and.style.display='none'; } }
    var qr = slide.querySelector('[data-qr]');
    if(qr){ if(CONFIG.QR_IMAGE_URL){ qr.innerHTML = '<img src="'+esc(CONFIG.QR_IMAGE_URL)+'" alt="앱 설치 QR" width="112" height="112">'; } else { qr.style.display='none'; } }
  }

  function wireEssaySlide(slide){
    var cta = slide.querySelector('[data-cta]');
    if(cta){ cta.setAttribute('href', addUTM(CONFIG.ESSAY_LAB_MAIN,'home_slider','essay_slide','essay_lab_2026')); cta.addEventListener('click',function(){track('slide_cta_click','essay_lab');}); }
    var bonus = slide.querySelector('[data-bonus]');
    if(bonus && !CONFIG.SHOW_SIGNUP_BONUS){ bonus.style.display='none'; } // 가입 보너스 게이트
  }

  /* ===== 4. 논술 게시물 CTA 주입 (article) ========================= */
  function injectArticleCTA(){
    if(!CONFIG.ARTICLE_ESSAY_CTA_ENABLED) return;

    var article = d.querySelector('#jbTistoryContent .jbArticle');
    var titleEl = d.querySelector('#jbTistoryContent .jbArticleTitle');
    if(!article || !titleEl) return; // 글 페이지가 아님

    var title = (titleEl.textContent || '').replace(/\s+/g,' ').trim();
    var catEl = d.querySelector('#jbTistoryContent .jbArticleInfo a');
    var category = catEl ? (catEl.textContent || '').trim() : '';

    if(!isEssayText(title) && !isEssayText(category)) return; // 논술 글만

    var uni = detectUniversity(title, category);
    var dest = resolveDestination(uni);
    if(!dest) return; // disable fallback

    var uniName = uni ? uni.name : null;
    var campaign = dest.campaign || 'essay_general';

    // --- 상단 CTA (인지, 작게) — 제목 아래 / 본문 위 ---
    var infoEl = d.querySelector('#jbTistoryContent .jbArticleInfo');
    var top = d.createElement('div');
    top.className = 'ls-mkt-cta ls-mkt-cta--top';
    top.setAttribute('role','complementary');
    top.innerHTML =
      '<p class="ls-mkt-cta__lead">' + esc(uniName ? (uniName + ' 논술 준비 중인가요?') : '논술 준비 중인가요?') + '</p>' +
      '<p class="ls-mkt-cta__desc">대학별 평가·채점 기준에 맞춰 내 답안을 점검하고 다시 써보세요.</p>' +
      '<a class="ls-mkt-cta__btn ls-mkt-cta__btn--ghost" data-top href="' +
        esc(addUTM(dest.href,'article_top',(uni?uni.key:'general'),campaign)) +
        '" target="_blank" rel="noopener">' + esc(dest.label) + ' <span aria-hidden="true">→</span></a>';
    if(infoEl && infoEl.parentNode){ infoEl.parentNode.insertBefore(top, infoEl.nextSibling); }
    else { article.parentNode.insertBefore(top, article); }

    // --- 하단 CTA (전환, 핵심) — 본문 뒤 ---
    var bottom = d.createElement('div');
    bottom.className = 'ls-mkt-cta ls-mkt-cta--bottom';
    bottom.setAttribute('role','complementary');
    var bonusLine = CONFIG.SHOW_SIGNUP_BONUS
      ? '<p class="ls-mkt-cta__bonus">신규 가입 시 첨삭권 3회 제공</p>' : '';
    bottom.innerHTML =
      '<p class="ls-mkt-cta__lead">기출을 찾았다면, 이제 직접 풀어보세요.</p>' +
      '<p class="ls-mkt-cta__desc">' +
        esc((uniName ? (uniName + ' ') : '') + '논술 LAB에서 답안을 작성하고, 첨삭 → 재작성 → 변화 확인까지.') +
      '</p>' + bonusLine +
      '<a class="ls-mkt-cta__btn" data-bottom href="' +
        esc(addUTM(dest.href,'article_after',(uni?uni.key:'general'),campaign)) +
        '" target="_blank" rel="noopener">이 문제로 첨삭 시작하기 <span aria-hidden="true">→</span></a>';
    if(article.nextSibling){ article.parentNode.insertBefore(bottom, article.nextSibling); }
    else { article.parentNode.appendChild(bottom); }

    // 클릭 추적
    var tb = top.querySelector('[data-top]'); if(tb) tb.addEventListener('click',function(){track('article_cta_top', (uni?uni.key:'general'));});
    var bb = bottom.querySelector('[data-bottom]'); if(bb) bb.addEventListener('click',function(){track('article_cta_bottom', (uni?uni.key:'general'));});
  }

  /* ===== 5. 부팅 =================================================== */
  // 슬라이드 준비는 기존 initSlider보다 먼저 실행되어야 하므로 이 스크립트를
  // 기존 랜딩 스크립트보다 "앞"에 두어 DOMContentLoaded 리스너가 먼저 등록되게 한다.
  function onReady(){
    try{ prepareHomeSlides(); }catch(e){}
    try{ injectArticleCTA(); }catch(e){}
  }
  if(d.readyState === 'loading'){ d.addEventListener('DOMContentLoaded', onReady); }
  else { onReady(); }

  // 디버그/프리뷰용 노출
  w.LS_MKT = { config: CONFIG, prepareHomeSlides: prepareHomeSlides, injectArticleCTA: injectArticleCTA };
})(window, document);

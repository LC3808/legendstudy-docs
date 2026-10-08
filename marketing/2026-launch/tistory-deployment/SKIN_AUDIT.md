<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH (no product/Production change)
CREATED: 2026-10-08
SKIN_SOURCE: Owner-provided CustomSkin(2026-10-08) — skin.html (sha256 4a45241…), style.css (sha256 e12c4ce…)
-->

# SKIN AUDIT — LegendStudy.com Tistory

Read-only analysis of the **actual Production skin** (not a guessed generic Tistory skin). All insertions are built to fit this exact structure.

## SKIN_ARCHITECTURE

- **Framework:** Bootstrap 3.1.1 grid (`container` / `row` / `col-sm-9` + `col-sm-3`), Font Awesome 4.0.3, Pretendard (jsDelivr), jQuery 1.11.0. Custom landing design system `.ls-*` already present.
- **Brand accent:** CSS var `--primary:#ffa400` (dark `--primary-dark:#e08c00`, light `--primary-light:#fff4de`). *(Note: the marketing brand doc cited `#ffac14`; the live skin uses `#ffa400`. The deployment layer reuses `var(--primary)`, so it matches the site exactly — no hardcoded hex. Aligning the SVG assets' `#ffac14` to `#ffa400` is a minor later Owner call.)*
- **Main container:** `#jbMainArea.container > .row > #jbContent.col-sm-9` (content) + `#jbSidebarRight.col-sm-3` (sidebar).
- **Main slider:** `#slider.ls-slider > .ls-slider__track > .ls-slide.ls-slide--text` (text slides). Driven by `initSlider()` — autoplay 5s, arrows, dots generated per slide, touch swipe, pause on hover, `prefers-reduced-motion` aware. **Reused as-is.** Currently 2 site slides (free-download, 합격 기원).
- **Home gating:** `#lsLanding` is `display:none` by default; the landing IIFE shows it only when `isHome` (`path==='/'` and no `page=`). On non-home it stays hidden and Tistory's `#jbTistoryContent` shows.
- **Article container:** `s_article_rep > .jbArticleList`:
  - Title: `.jbArticleTitle > a[href="[##_article_rep_link_##]"]` → text usable for university/essay detection.
  - **Category (accessible):** `.jbArticleInfo > span > a[href="[##_article_rep_category_link_##]"]` = `[##_article_rep_category_##]`.
  - Body wrapper: `.jbArticle` = `[##_article_rep_desc_##]`.
  - Tags: `s_tag_label` → `[##_tag_label_rep_##]`.
- **Category/Title access:** category text + post title are both readable from the rendered DOM after Tistory substitution → **auto-detection of 논술 posts and university is feasible** with a small DOM-reading script (no server, no API).
- **Mobile breakpoint:** `767px` (and `1023px` for the card grid). Sidebar becomes a right drawer (`.ls-burger`).
- **Existing JS:** (1) jQuery `ready` (Tistory DOM cleanup), (2) landing IIFE (menu/popular/sections/slider/search/drawer). Both independent.
- **Existing marketing/ads:** Google AdSense (`ca-pub-9982087108968257`, several `ins.adsbygoogle` slots — home top/bottom, list, sidebar), one commented Smartstore event banner.
- **Analytics/verification (all public identifiers):** GA Universal `UA-47366112-1`; Naver wcs `b93c6dfbf0aed8`; `google-site-verification`, `naver-site-verification` metas; Kakao plus-friend ID in footer.
- **Tistory replacers present:** `[##_article_rep_title_##]`, `[##_article_rep_category_##]`, `[##_article_rep_category_link_##]`, `[##_article_rep_link_##]`, `[##_rp_popular_rep_*_##]`, list/paging/comment families.

## Safe insertion points (used)

1. **Main slides** → inside `.ls-slider__track`, after the last existing `.ls-slide` (before the commented image-slide example). `initSlider()` counts them automatically. Our marketing slides carry `data-mkt` and are removed before `initSlider()` runs when their flag is OFF or a URL is missing (so dot count stays correct and no dead link appears).
2. **Marketing script** → immediately **before** the `<!-- ===== 커스텀 랜딩/사이드바 스크립트 ===== -->` block, so its `DOMContentLoaded` listener registers (and runs) **before** the landing IIFE's — guaranteeing `prepareHomeSlides()` executes before `initSlider()`. **No edit to the existing IIFE.**
3. **Article CTAs** → injected at runtime by the same script, only on 논술 article pages: top CTA after `.jbArticleInfo`, bottom CTA after `.jbArticle`. Uses `<div role="complementary">` (not headings) so the article's heading hierarchy / SEO is untouched.
4. **Marketing CSS** → appended to the end of `style.css`, reusing existing CSS variables.

## Risk areas (and how they are handled)

- **Slider dot count drift** → marketing slides removed before `initSlider()` via the before-IIFE script placement. Verified.
- **Dead links** (no Store URL / no university route) → APP slide auto-removed if no Store URL; article CTA falls back to LAB main (configurable to disable); all flags default OFF.
- **AdSense / GA / Naver** → not touched, moved, or duplicated. No new ad slots.
- **SEO** → no change to title/meta/structured-data/article DOM/headings; CTAs are non-heading complementary blocks placed around (not inside) the article content.
- **Performance** → no new library; reuses the existing slider; ~12 KB JS + ~3.7 KB CSS added, no render-blocking (inline, executes on `DOMContentLoaded`). Korean `word-break:keep-all` + `overflow-wrap:anywhere` prevents the long-string overflow class of bug.
- **Brand color mismatch (#ffac14 vs #ffa400)** → avoided by using `var(--primary)`.

## SECRETS_FOUND: NO
Only public identifiers exist in the skin (GA/AdSense/Naver IDs, site-verification metas, Kakao plus-friend ID, the Tistory `[##_rp_input_is_secret_##]` template replacer). No API keys, tokens, `service_role`, or private credentials. Safe to commit.

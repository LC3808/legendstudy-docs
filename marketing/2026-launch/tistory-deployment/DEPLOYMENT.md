<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
CREATED: 2026-10-08
-->

# DEPLOYMENT — LegendStudy.com Tistory Marketing Layer

Claude does **not** touch the Tistory Production site. Owner applies this package. Everything ships **OFF by default** — nothing is visible until Owner flips a flag after its gate clears.

## What this adds (all additive, marker-wrapped)

- Two optional main slides in the **existing** slider: `레전드스터디+ APP`, `논술 LAB`.
- Auto-injected CTAs on **논술** 기출 posts: a small top CTA (awareness) + a bottom CTA (conversion).
- A config block controlling all of it + a per-university map.

## Apply options

You can apply **inline** (simplest for Tistory) or via **separate files**. Inline is recommended.

### Option A — Inline (recommended)

Tistory admin → 꾸미기 → 스킨 편집 → **HTML / CSS 편집**.

- **STEP 1 — Backup.** Copy the current `HTML` and `CSS` out and save them (or keep `original/skin.html` + `original/style.css` from this package; they are byte-exact).
- **STEP 2 — HTML.** Open `inline/paste-into-skin-html.html`. It has two blocks:
  - **Block [1] (slides):** paste inside the slider track `<div class="ls-slider__track"> … </div>`, right after the last existing `<div class="ls-slide …">…</div>`.
  - **Block [2] (script):** paste **immediately before** the line `<!-- ===== 커스텀 랜딩/사이드바 스크립트 ===== -->`. (Order matters — it must be before that block.)
- **STEP 3 — CSS.** Paste the whole `inline/paste-into-style-css.css` at the **end** of the CSS editor.
- **STEP 4 — Assets.** None required for the HTML/CSS CTAs (text-based). Optional: a QR image for the APP slide (set `QR_IMAGE_URL`), and official App Store / Google Play badge art if you later replace the text store buttons.
- **STEP 5 — Config.** In Block [2], edit the `CONFIG` object (see **Flags** below) and the per-university `active`/`destination` in the map.
- **STEP 6 — Preview.** Use Tistory's 미리보기. Temporarily set the flags you want to test to `true` to see the slides/CTA; set back to the gated values before applying.
- **STEP 7 — Smoke (PC + mobile).** See **Smoke checklist**.
- **STEP 8 — Apply (적용).**

### Option B — Separate files

Upload `modules/legendstudy-marketing.css`, `modules/university-map.js`, `modules/legendstudy-marketing.js` as skin files, then in `skin.html` add `<link>`/`<script>` tags (university-map **before** legendstudy-marketing, both **before** the landing IIFE) and the slides block. Inline is simpler on Tistory, so prefer Option A unless you maintain skin files already.

## Flags (the one place you turn things on)

In `CONFIG` (Block [2] / `legendstudy-marketing.js`):

| Flag | Default | Turn ON when (gate) |
|---|---|---|
| `APP_BANNER_ENABLED` | `false` | Real Store URLs exist (**DD-2**) — AND set `STORE_URL_IOS` / `STORE_URL_ANDROID`. If enabled with no URL, the slide auto-removes itself (no dead link). |
| `ESSAY_SLIDE_ENABLED` | `false` | 논술 Essay public web runtime verified on LAB Web (**DD-4**); confirm `ESSAY_LAB_MAIN` route resolves (PC+mobile+login). |
| `ARTICLE_ESSAY_CTA_ENABLED` | `false` | Same as DD-4 — enables the post CTAs. |
| `SHOW_SIGNUP_BONUS` | `false` | Signup `+3` real-user E2E confirmed in Production (**DD-3** — migration `20261007150000` is now Production-applied as of 2026-10-08; the real-user +3 E2E is the remaining confirmation). |
| `STORE_URL_IOS` / `STORE_URL_ANDROID` | `''` | Paste the real store URLs when issued (DD-2). |
| `ESSAY_LAB_MAIN` | `lab.legendstudy.com` | Replace with the confirmed public essay-entry route if different. |
| `UNIVERSITY_FALLBACK` | `'lab_main'` | `'lab_main'` = unconfirmed universities point to LAB main (safe, no dead link). `'disable'` = no CTA until that university is `active`. |

### Per-university activation

In the university map, a university's CTA points to its own LAB only when **both** `active:true` **and** `destination` is set. Until then it uses the fallback. Flip `active:true` + set `destination` only after the per-university gate (SKIN_AUDIT / university-template.md): route exists, mapping correct, service usable, evaluation context ready, action possible, mobile OK, login OK.

## Recommended launch sequence

1. **Now:** apply the package with all flags `false`. Nothing shows; site unchanged to visitors. (Lets you verify no regression.)
2. **When DD-4 clears:** `ESSAY_SLIDE_ENABLED=true`, `ARTICLE_ESSAY_CTA_ENABLED=true`, confirm `ESSAY_LAB_MAIN`. Universities stay on `lab_main` fallback.
3. **When DD-3 confirmed:** `SHOW_SIGNUP_BONUS=true`.
4. **When DD-2 clears:** set store URLs + `APP_BANNER_ENABLED=true`.
5. **Per university, as each gate clears:** `active:true` + real `destination`.

## Smoke checklist (PC + mobile)

- [ ] Home loads; existing slider works; **dot count matches visible slides** (no empty dot).
- [ ] With flags off: site looks identical to before (no marketing elements).
- [ ] With essay flag on: 논술 slide shows, CTA → `ESSAY_LAB_MAIN` (opens, not dead).
- [ ] Open a 논술 post (e.g. 중앙대): top + bottom CTA appear, correct university name, link resolves.
- [ ] Open a non-논술 post (e.g. 수능): **no** CTA injected.
- [ ] 320 / 360 / 390 / 768 / 1280 / 1440 widths + 200% text: no horizontal overflow, Korean wraps cleanly.
- [ ] AdSense still renders; GA/Naver still fire; search + sidebar drawer still work.
- [ ] Keyboard: CTAs focusable with visible focus ring; `prefers-reduced-motion` respected.

## Analytics

CTA links carry UTM (`utm_source=legendstudy_com`, `utm_medium=article_top|article_after|home_slider`, `utm_campaign`, `utm_content=<university_key>`), no PII. If `window.ga` exists, click events fire to the existing GA (category `legendstudy_marketing`). No new analytics system is created — reconcile campaign/UTM naming with the existing Analytics contract (**DD-7**) before scaling.

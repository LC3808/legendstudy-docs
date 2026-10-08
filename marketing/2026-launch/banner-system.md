<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
CREATED: 2026-10-08
-->

# BANNER DESIGN SYSTEM — 2026 Launch

Shared rules so every asset reads as one calm, trustworthy education service — not an ad. All provided SVG assets in `assets/marketing/2026-launch/` follow this system.

## 1. Design tokens

| Token | Value | Use |
|---|---|---|
| `--brand-accent` | `#ffac14` | CTA fill, single accent only |
| `--brand-accent-ink` | `#1f1300` | text on accent |
| `--ink` | `#1a1a1a` | headline |
| `--ink-soft` | `#4a4a4a` | body/sub |
| `--ink-muted` | `#8a8a8a` | fine print |
| `--bg` | `#ffffff` | primary background |
| `--bg-soft` | `#f7f8fa` | panel background |
| `--line` | `#e6e8ec` | hairlines, card borders |
| `--badge-live` | `#1e9e6a` | "이용 가능" badge |
| `--badge-soon` | `#8a8a8a` | "준비 중" badge (text label, not color-only) |

- **One accent.** `#ffac14` appears on the CTA (and at most a thin headline underline). Never flood the banner with orange.
- Typography: system Korean sans (Pretendard/Apple SD Gothic/Noto Sans KR fallback). Headline bold, sub regular. Generous line height (≥1.4) for Korean readability.
- Status badges use a **text label** ("이용 가능" / "준비 중"), never color alone (accessibility).

## 2. Hierarchy (every banner)

1. Eyebrow/label (small): e.g. "레전드스터디 LAB · 논술 LAB"
2. Headline (largest): the hook
3. Sub (one line): the benefit
4. Benefit chip (optional): "신규 가입 첨삭권 3회"
5. CTA (accent): one primary action
6. Replaceable zone (optional): QR / Store badges — placeholder layer

## 3. Dimensions (confirm against real Tistory width before final export)

> **Placeholder dimensions** — Owner/operator must confirm the Tistory skin content width and insertion method, then lock these. Common Tistory content widths are ~720–900px; assets are authored at 2× for crispness.

| Asset | Canvas (authoring) | Aspect | Notes |
|---|---|---|---|
| PC wide slider | 1200 × 480 | 5:2 | main carousel |
| PC wide university banner | 1200 × 360 | 10:3 | in-article wide |
| Mobile slider / banner | 720 × 600 | 6:5 | responsive, single CTA |
| Compact article CTA | 960 × 220 | ~4.4:1 | inline card |
| App internal banner | 1080 × 420 | ~2.6:1 | app home card |
| Signup 3-Credits promo | 1080 × 1080 | 1:1 | square, social/app |

Safe text area: keep ≥ 48px (PC) / ≥ 24px (mobile) padding from all edges; keep headline out of the right 1/3 where a QR/badge or responsive crop may sit.

## 4. Responsive / crop rules

- Author PC and mobile separately (do not just scale PC down).
- Headline + CTA must survive a center crop to square.
- Mobile: stack vertically (label → headline → sub → chip → CTA); never rely on side-by-side.

## 5. University variable area

A reserved block the master template swaps per campaign — see `university-template.md`. Only text (university name/short, exam year/type, CTA label) and destination change; layout/colors are fixed.

## 6. QR / Store badge area (replaceable layer)

- A clearly-labeled placeholder rectangle marked `QR_PLACEHOLDER` and `STORE_BADGE_PLACEHOLDER`.
- **No fake QR image, no fake URL, no fake release date** is baked in. The operator drops in the real QR/badges once DD-2 clears.
- Store badges must be the official Apple/Google badge art per their brand guidelines (operator-sourced), not redrawn.

## 7. Legal / trust guardrails (visual)

- Never imitate a university's official design, colors, crest, or an "official admissions" look.
- University logos are **optional and off by default** — a name-centric layout must work alone (gate: rights review).
- No stock imagery that implies a real exam/campus affiliation.
- Calm > loud. White space, hairlines, one accent.

## 8. Asset inventory (this package)

| File | Package item | State |
|---|---|---|
| `assets/.../app-main/app-slider-pc.svg` | A · Slider 1 (APP) PC | READY_AFTER_URL |
| `assets/.../app-main/app-slider-mobile.svg` | A · Slider 1 (APP) mobile | READY_AFTER_URL |
| `assets/.../essay-lab-main/essay-slider-pc.svg` | B · Slider 2 (Essay LAB) PC | READY_AFTER_FEATURE |
| `assets/.../essay-lab-main/essay-slider-mobile.svg` | B · Slider 2 (Essay LAB) mobile | READY_AFTER_FEATURE |
| `assets/.../university-template/university-wide-pc.svg` | C · University wide master | READY_AFTER_FEATURE |
| `assets/.../university-template/university-mobile.svg` | D · University mobile master | READY_AFTER_FEATURE |
| `assets/.../compact-cta/compact-article-cta.svg` | E · Compact article CTA | READY_AFTER_FEATURE |
| `assets/.../app-internal/app-internal-essay-lab.svg` | G · App internal Essay LAB | READY_AFTER_FEATURE |
| `assets/.../free-3-credit/free-3-credits.svg` | H · Signup 3-Credits promo | READY_AFTER_FEATURE |

(F · Text CTA is text-only — see `university-template.md`.) States per `qa-checklist.md`: `READY` / `READY_AFTER_URL` / `READY_AFTER_FEATURE` / `HOLD`.

<!--
DOCUMENT_STATUS: MARKETING_WORKING
SCOPE: MARKETING / GROWTH
CREATED: 2026-10-08
-->

# LANDING / DEEP-LINK PLAN

## 1. Marketing landing URL (Owner decision — section 36)

`legendstudy.com` itself is the existing free-resource site. The APP marketing homepage URL may need to be separate. Two candidates compared; **Owner decides** (Claude does not fix it).

| Criterion | `home.legendstudy.com` (subdomain) | `legendstudy.com/home` (path) |
|---|---|---|
| SEO | New host; starts cold, clean separation | Inherits root domain authority |
| Existing Tistory impact | Isolated; low risk to current traffic | Shares surface with resource site; routing care needed |
| Management | Separate deploy target (Cloudflare Pages-style) | Lives inside the resource-site stack |
| Brand | Clean "home" brand surface | Fewer hosts to explain |
| App Store homepage URL | A dedicated marketing host reads well on store | Works, but mixes with resource site |
| Future expansion | Easiest to grow into a product site | Constrained by the resource-site structure |

**Recommendation (non-binding):** `home.legendstudy.com` — cleanest separation from the resource site, best as the App Store "homepage" URL, room to grow. **Current state: `home.legendstudy.com` NOT_CREATED, `MARKETING_LANDING: NOT_STARTED`.** Until a landing exists, use `lab.legendstudy.com` as the live destination.

`lab.legendstudy.com` stays as the LAB web surface (unchanged).

## 2. Deep-link priority (section 19)

Preferred target order on **LAB Web**, **only if the route actually resolves**:
1. Specific 문항 LAB (per-problem)
2. The university's 논술 LAB
3. 논술 LAB main

Never ship a deep link that doesn't work. The default destination for the essay funnel is LAB Web (not the App Store); app install is never forced.

## 3. Route classification (confirm with LAB/APP — DD-6)

| Target | Route (to confirm) | Classification |
|---|---|---|
| LAB web home | `lab.legendstudy.com` | **CONFIRMED** (Production live) |
| LAB pricing | `lab.legendstudy.com/pricing/` | **CONFIRMED** (Production live) |
| LAB account-deletion | `lab.legendstudy.com/account-deletion/` | **CONFIRMED** (Production live) |
| LAB Web essay LAB (primary marketing destination) | `lab.legendstudy.com` essay entry | **PARTIAL / verify** — full-service surface shell is live, but public Essay E2E not yet Production-verified (ESSAY RUNTIME next, not started — DD-4). Confirm public route + login + mobile web before using as a LIVE CTA |
| APP 논술 LAB (peer surface, in-app) | APP's own 논술 LAB | **CONFIRMED** (in-app only, shared backend) — used inside the app, not a web marketing URL |
| Per-university essay deep link (web) | per-university route | **NOT_AVAILABLE until confirmed** (DD-4/DD-6) — do not build a university CTA link until this resolves |
| Per-problem deep link | per-문항 route | **NOT_AVAILABLE until confirmed** (DD-6) |
| APP Store (Apple) | — | **NOT_AVAILABLE** (DD-2) — placeholder only |
| Google Play | — | **NOT_AVAILABLE** (DD-2) — placeholder only |

## 4. App ↔ Web continuity (peer surfaces, shared backend)
- Web is a complete surface on its own — a web user can do the full essay loop on LAB Web without installing anything.
- Web → "앱에서도 이어서 학습할 수 있습니다." (soft, optional; Store link gated DD-2)
- App → "논술 LAB에서 답안을 점검해보세요." → the app's own 논술 LAB surface
- Never force a web user to the App Store.

## 5. Go-live rule
A CTA's destination must be a **CONFIRMED** route at the moment it goes LIVE. `PLANNED`/`NOT_AVAILABLE` destinations stay HOLD even if the asset is finished.

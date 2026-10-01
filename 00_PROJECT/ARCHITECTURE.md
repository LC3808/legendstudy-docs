<!--
DOCUMENT_STATUS: CANONICAL
SCOPE: PROJECT
LAST_VERIFIED: 2026-10-01
VERIFICATION_BASIS: UWA-1 proposal §2 (legendstudy-lab @ 94d5d61); UWA-1B bottom-up audit (legendstudy-app @ 2ebec8d)
SUPERSEDES: —
SUPERSEDED_BY: —
-->

# ARCHITECTURE — LegendStudy+ (top level)

> Top-level architecture only. No DB schema dumps here — per-capability canonical sources are in [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md), and schema/RPC detail lives in its canonical repository.

## One product, two surfaces, one backend

```
                         LegendStudy+  (ONE product)
                              │
                ┌─────────────┴─────────────┐
                │                           │
              APP                          LAB
         Mobile / Flutter              Web / Next.js
         (user touchpoint)            (user touchpoint)
                │                           │
                └─────────────┬─────────────┘
                              │
                       SHARED BACKEND
                   (jointly-owned, not a 3rd product)
                              │
                           Supabase
                              │
          ┌───────────┬───────┼────────┬─────────────┐
          │           │       │        │             │
       Identity      Auth    Essay    Credit      Contracts
                                      /Billing    /Authorization
```

- **APP** and **LAB** are two **user/operator touchpoints** of the same product — not independent products.
- The **Shared Backend** is the canonical backend/data/contract layer that both touchpoints use. It is **not** a third product and **not** "APP's backend."

## Logical vs physical ownership

The product's *logical* boundaries do not match where code *physically* lives today. Keep the two separate:

| Concern | Logical owner | Physical location (today) |
|---|---|---|
| APP UI / code | APP surface | `legendstudy-app` |
| LAB UI / code | LAB surface | `legendstudy-lab` |
| Shared DB migrations | Shared Backend | `legendstudy-app/supabase/migrations` |
| Shared Essay / Credit / Authorization | Shared Backend | currently mostly `legendstudy-app` |
| Project-level docs | Project | `legendstudy-docs` (this repo) |

**Consequence:** the Shared Backend being physically hosted in the APP repo does **not** make it APP-only. It is jointly owned by the product and consumed by both APP and LAB. (See the do-not-infer rules in [`AI_CONTEXT.md` §13](AI_CONTEXT.md#13-do-not-infer-rules): *physical repo ≠ logical product boundary*.)

## Extensibility

The model is designed so new surfaces attach **under the Shared Backend** without breaking the structure:

```
LegendStudy+
   → User / Operator Surfaces   (APP, LAB, + future: school.legendstudy.com,
                                   teacher/admin portal, institution dashboard)
   → Shared Backend             (Identity · Auth · Essay · Credit/Billing ·
                                   Quality Authorization · Contracts)
```

A future surface such as `school.legendstudy.com` is added as a **new touchpoint over the same Shared Backend**, not as a new independent backend. Documentation for such surfaces is **not** created in this P0 — the architecture only reserves room for them (future sections `10_APP/`, `20_LAB/`, `30_SHARED_BACKEND/`, `40_FUTURE/`, `50_OPERATIONS/`, `90_HISTORY/`).

## Where to go for detail

- Which repository owns which capability → [`SOURCE_OF_TRUTH.md`](SOURCE_OF_TRUTH.md)
- Current Production/implementation state per domain → [`CURRENT_STATUS.md`](CURRENT_STATUS.md)
- Actual schema / RPC / code → the capability's canonical repository (linked from the source-map)

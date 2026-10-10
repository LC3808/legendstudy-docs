# LegendStudy+ — Unified Documentation Hub

> **START HERE → [`00_PROJECT/AI_CONTEXT.md`](00_PROJECT/AI_CONTEXT.md)**
> Every human and every external AI (GPT / Claude / Codex / Gemini / Astra / …) begins there.

**LegendStudy+** is **one product** reached through **two user touchpoints** over **one Shared Backend**:

- **APP** — Mobile / Flutter (`LC3808/legendstudy-app`)
- **LAB** — Web / Next.js (`LC3808/legendstudy-lab`)
- **Shared Backend** — Supabase (Identity · Auth · Essay · Credit/Billing · Quality Authorization · Contracts)

APP and LAB are **not** two independent products — they are two surfaces of the same product. The Shared Backend is **not** a third product; it is the canonical backend/data/contract layer that APP and LAB jointly use.

## What this repository is

This repo (`LC3808/legendstudy-docs`) is the **project-level documentation hub** — a **Single Entry Point + Source-of-Truth map** for the whole LegendStudy+ project. It holds:

- the canonical entry point for onboarding (`AI_CONTEXT.md`)
- the current cross-repo project state (`CURRENT_STATUS.md`)
- the top-level architecture (`ARCHITECTURE.md`)
- the capability → canonical-source registry (`SOURCE_OF_TRUTH.md`)
- the daily development history / handoff log (`90_HISTORY/DAILY/`)

## What this repository is **not**

- It is **not** the source-code authority.
- It is **not** the database/migration authority.
- It does **not** copy APP/LAB code, docs, or migrations here.

Canonical facts live in their canonical repository; this hub **links** to them. See [`SOURCE_OF_TRUTH.md`](00_PROJECT/SOURCE_OF_TRUTH.md).

## Repository map

| Repository | Role |
|---|---|
| [`LC3808/legendstudy-app`](https://github.com/LC3808/legendstudy-app) | Flutter mobile APP · **canonical Supabase migration ledger** · most Shared-Backend schema/RPC/Essay/Credit/Authorization implementation · APP wiki & validation artifacts |
| [`LC3808/legendstudy-lab`](https://github.com/LC3808/legendstudy-lab) | Next.js LAB Web · public landing/auth/web UI · future Essay/Quality/Academic/Admission web surfaces · LAB architecture history |
| [`LC3808/legendstudy-docs`](https://github.com/LC3808/legendstudy-docs) | **This repo** — project-level docs hub, Single Entry Point, cross-repo CURRENT_STATUS, Source-of-Truth registry, daily handoff |

## Where to go next

1. [`00_PROJECT/AI_CONTEXT.md`](00_PROJECT/AI_CONTEXT.md) — **start here**
2. [`00_PROJECT/CURRENT_STATUS.md`](00_PROJECT/CURRENT_STATUS.md) — what is true right now
3. [`00_PROJECT/ARCHITECTURE.md`](00_PROJECT/ARCHITECTURE.md) — top-level architecture
4. [`00_PROJECT/SOURCE_OF_TRUTH.md`](00_PROJECT/SOURCE_OF_TRUTH.md) — where each fact canonically lives
5. [`90_HISTORY/DAILY/`](90_HISTORY/DAILY/) — how we got here (latest day = most recent)

## Public repository — security rule

This repository is **PUBLIC**. It contains **only sanitized** architecture, status, public repo links, commit/migration IDs, and abstract contracts. It must **never** contain passwords, JWTs, access/refresh tokens, `service_role` keys, API keys, credential-file contents, student answer text, student PII, private calibration/reviewer artifacts, or raw provider payloads with private data. See the Security section of [`AI_CONTEXT.md`](00_PROJECT/AI_CONTEXT.md#12-security--privacy-rules).

## Pending local Essay research V2 review

[2026-10-10 overnight implementation and morning report](90_HISTORY/DAILY/2026-10-10-overnight-v2.md). Separate review from unmerged QA metadata PR#1; no production application/publication.

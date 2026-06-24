# CLAUDE.md — Agent Operating Guide

This file orients any Claude/agent working in this repository. Read it fully before acting.

## What this project is

The website + booking platform for **Honey Root Coffee Co.**, a **mobile espresso bar and
barista catering** service for events. It is a **bookings-and-events** business, **not retail**.
The conversion goal is always **"book an event"** or **"request a quote"** — never "add to cart."

See [`README.md`](README.md) for the full brief and [`plan/`](plan/) for the roadmap and live status.

## The stack (decided — do not re-open this debate)

- **Wix** — website, Wix Bookings, Wix Invoices, Wix Blog, Instagram feed. Custom logic = **Velo by Wix** (JavaScript).
- **Square** — payments + in-field POS + event inventory source-of-truth. Connected to Wix as the **payment provider**.
- Keep all money flowing into the **existing Square account**. Do **not** propose a second processor (Stripe, PayPal as primary, etc.).

## Golden rules

1. **Config over code.** Wix is low-code. If a task can be done in the Wix editor/dashboard,
   write or update a **runbook in `/docs/runbooks/`** — do not write code for it. Reserve
   `/velo` for genuine gaps (custom quote logic, integrations, automations).
2. **Protect visual cleanliness.** This is a hospitality brand. Default to whitespace, few fonts,
   restrained color, consistent photography. Wix makes clutter easy — resist it.
3. **Mobile-first.** Assume the visitor is on a phone. Specify and verify mobile layouts first.
4. **Be honest about inventory.** Neither Wix nor Square does par-level consumable tracking well.
   Never imply it's solved — point to [`docs/runbooks/05-inventory-approach.md`](docs/runbooks/05-inventory-approach.md).
5. **Never commit secrets.** Square/Wix API keys, tokens, and client secrets stay in Wix Secrets
   Manager or environment config — never in this repo. `.gitignore` guards the common cases.
6. **Don't invent business facts.** Real location, pricing, service-area radius, package details,
   and team bios come from the owner. Use clearly-labeled `TODO(owner)` placeholders; don't fabricate.

## Repository map (where things go)

| Path | Put here | Don't put here |
| --- | --- | --- |
| `docs/` | Site map, IA, booking design, **runbooks** for Wix/Square config | Velo code, marketing copy |
| `velo/` | Version-controlled Velo JS (backend `.jsw`/`.js`, page code, public modules) | Things doable in the editor |
| `content/` | Page copy (Markdown), drink-menu data (JSON), service descriptions | Code, config |
| `assets/` | Branding organization + `manifest.json` (no large binaries committed) | Code |
| `plan/` | Phased plan + tracking checklist | Implementation detail |

## MCP servers (project-scoped — see `.mcp.json`)

| Server | Use it for |
| --- | --- |
| **Wix** (`mcp.wix.com`) | Searching Wix/Velo API + SDK docs, inspecting site data (products, bookings services, blog posts), validating Velo code against current APIs. |
| **Canva** (`mcp.canva.com`) | Generating/editing brand assets, social graphics, menu cards, flyers consistent with the brand kit. |
| **Notion** (`mcp.notion.com`) | Project tracker, content calendar, the **consumables par sheet** (interim inventory approximation), runbook mirrors for the owner. |

Each is a remote OAuth server — you'll be prompted to authenticate on first use per server.
Prefer the **Wix MCP docs search** before hand-writing Velo against APIs from memory.

## Workflow conventions

- **Branch:** develop on the assigned feature branch; never push elsewhere without explicit permission.
- **Commits:** clear, descriptive, imperative mood ("Add quote-form schema", not "changes").
- **Velo code** must note, in a header comment, which Wix element IDs / collections / page it binds to.
- **Runbooks** are step-by-step and dashboard-oriented: numbered steps, exact menu paths, and a
  "verify it worked" check at the end. Assume the reader is the owner, not an engineer.
- **Content** files carry frontmatter (`page:`, `status:`, `last_reviewed:`) and mark unfinished
  copy with `TODO(owner)` or `TODO(copy)`.

## The two booking paths (core of the product)

1. **Instant self-serve booking** (Wix Bookings) — small/standard gigs, fixed packages, deposit via Square.
2. **Custom quote / inquiry** (lead form → Velo → owner → Wix Invoice, deposit to Square) — large/variable events.

Full data-capture design: [`docs/booking-paths.md`](docs/booking-paths.md). Don't collapse these
into one form — they serve different buyers.

## Current gate

🛑 Phase 0 ends with an **owner review** of the IA + plan **before** Velo code or final copy is
written. If you're early in the project, your job is structure and runbooks, not implementation.
Check [`plan/checklist.md`](plan/checklist.md) for what's unlocked.

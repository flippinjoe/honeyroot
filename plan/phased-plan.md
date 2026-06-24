# Phased Rollout Plan

Ship value early (a credible, lead-capturing brochure) and layer capability without ever breaking
the events-first, single-processor (Square) principles.

```
Phase 0  Foundations          → repo, IA, plan, accounts, Square connected   ◀ REVIEW GATE
Phase 1  Brochure + Quote     → site live, quote form capturing leads
Phase 2  Booking + Invoicing  → instant self-serve booking + automated invoices/receipts
Phase 3  Inventory + Blog + IG→ online items, inventory approximation, blog, Instagram
Phase 4  Polish / SEO / Launch→ mobile QA, cleanliness, SEO, analytics, launch
```

---

## Phase 0 — Foundations  🔵 *(in progress)*
**Goal:** structure + decisions locked; platforms ready.
- Repo scaffold (`/docs`, `/velo`, `/content`, `/assets`, `/plan`) + README + CLAUDE.md. ✅
- Site map / IA, service→page mapping, booking-path design. ✅ (in `/docs`)
- Phased plan + checklist. ✅
- Project-scoped MCP (Wix, Canva, Notion) in `.mcp.json`. ✅
- Agent skills (`.claude/skills`). ✅
- Wix account/plan + domain ([runbook 01](../docs/runbooks/01-wix-initial-setup.md)). ⬜ owner
- **Square connected as Wix payment provider** ([runbook 02](../docs/runbooks/02-square-payment-provider.md)). ⬜ owner
- Brand kit (palette/fonts/logo) captured in `assets/manifest.json`. ⬜ owner
- Notion project tracker / content calendar. ⬜
> **EXIT GATE:** owner reviews IA + plan and approves moving to build. 🛑

## Phase 1 — Brochure + Quote (lead capture)
**Goal:** a credible site that looks great on mobile and **captures quote leads** — value before
the heavier booking/payment work.
- Build pages: Home, Services, Menus, About, Contact, Gallery (static), Quote.
- Finalize Phase-1 copy (`/content/pages`) + menu data + service data.
- Quote lead form live (Velo `quoteRequests` + `QuoteRequests` collection + owner notification).
- Mobile-first layout pass; cleanliness check.
> **EXIT:** a visitor on a phone can understand the offering and submit a quote request that
> reaches the owner.

## Phase 2 — Instant Booking + Invoicing
**Goal:** self-serve booking + money, all through Square.
- Wix Bookings packages + deposit via Square ([runbook 03](../docs/runbooks/03-wix-bookings-setup.md)).
- /book page with widget + escape hatch to /quote.
- Automated receipts + branded invoice template; quote→invoice→deposit flow
  ([runbook 04](../docs/runbooks/04-invoices-and-receipts.md)).
- Confirmation/thank-you pages for both paths.
> **EXIT:** a standard event can be booked + deposit paid (settling in Square) end-to-end; quoted
> events can be invoiced and paid.

## Phase 3 — Inventory + Blog + Instagram
**Goal:** the remaining content + commerce surfaces.
- Wix Stores mirror of **online-sellable** items only (gift cards/prepaid/merch), reconciled with
  Square ([runbook 02 Part C](../docs/runbooks/02-square-payment-provider.md)).
- Consumables approximation: Notion Par Sheet + per-event prep method
  ([runbook 05](../docs/runbooks/05-inventory-approach.md)) — with the limitation documented.
- Blog launch ([runbook 06](../docs/runbooks/06-blog-setup.md)).
- Instagram feed embed ([runbook 07](../docs/runbooks/07-instagram-feed.md)).
> **EXIT:** blog + IG live; tiny online catalog reconciled with Square; par sheet in use.

## Phase 4 — Polish / SEO / Launch
**Goal:** make it sharp and findable, then launch.
- Full mobile QA across pages + both booking paths.
- Visual cleanliness pass (whitespace, type, color, consistent imagery).
- SEO: titles/meta/slugs, alt text, sitemap, structured data; connect analytics.
- Performance pass (image sizes, lazy-load IG).
- Accessibility + legal pages (Privacy/Terms/Accessibility).
- Launch checklist + announce.
> **EXIT:** site is live, fast, clean, accessible, and converting.

---

## Guardrails (every phase)
- One processor: **Square**. Never add a second.
- Two clearly-labeled booking doors (Book vs Quote) — never merge.
- Config/runbooks over code; Velo only for real gaps.
- Be honest about consumable inventory.
- Mobile-first, clutter-free.

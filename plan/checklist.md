# Tracking Checklist

Live status. Update as work completes. `✅ done · 🔵 in progress · ⬜ todo · 👤 owner action`

## Phase 0 — Foundations
- [x] ✅ Repo scaffold (`/docs`, `/velo`, `/content`, `/assets`, `/plan`)
- [x] ✅ Top-level `README.md` (project + Wix/Square stack)
- [x] ✅ `CLAUDE.md` agent operating guide
- [x] ✅ Agent skills in `.claude/skills/`
- [x] ✅ `.mcp.json` — project-scoped MCP: Wix, Canva, Notion
- [x] ✅ Site map / IA (`docs/site-map.md`)
- [x] ✅ Service→page mapping (`docs/service-to-page-mapping.md`)
- [x] ✅ Booking-paths design + data capture (`docs/booking-paths.md`)
- [x] ✅ Architecture / Wix⇄Square (`docs/architecture.md`)
- [x] ✅ Runbooks drafted (01–07)
- [x] ✅ Phased plan + this checklist
- [ ] 🛑 **OWNER REVIEW of IA + plan — approve to build** ← we are here
- [ ] 👤 Wix account + plan + domain (runbook 01)
- [ ] 👤 Square connected as Wix payment provider (runbook 02)
- [ ] 👤 Brand kit (palette/fonts/logo) → `assets/manifest.json`
- [ ] ⬜ Notion project tracker + content calendar

## Phase 1 — Brochure + Quote
- [ ] ⬜ Build pages: Home, Services, Menus, About, Contact, Gallery (static), Quote
- [ ] ⬜ Finalize Phase-1 copy (`content/pages/*`)
- [ ] ⬜ Finalize menu data (`content/menus/drink-menu.json`) + service data
- [ ] ⬜ Create `QuoteRequests` collection (Wix Content Manager)
- [ ] ⬜ Implement Velo quote-form handler (`velo/backend/quoteRequests.jsw`)
- [ ] ⬜ Owner notification on new quote request
- [ ] ⬜ Mobile-first layout + cleanliness pass
- [ ] ⬜ **Exit:** quote lead reaches owner end-to-end on mobile

## Phase 2 — Booking + Invoicing
- [ ] ⬜ Wix Bookings packages (runbook 03) — names/caps/prices from owner
- [ ] ⬜ Deposit via Square at booking
- [ ] ⬜ /book page + escape hatch to /quote
- [ ] ⬜ Automated receipts + branded invoice template (runbook 04)
- [ ] ⬜ Quote → invoice → deposit (Square) flow
- [ ] ⬜ Confirmation / thank-you pages (both paths)
- [ ] ⬜ **Exit:** standard event booked + deposit paid into Square end-to-end

## Phase 3 — Inventory + Blog + Instagram
- [ ] ⬜ Wix Stores mirror of online items only (gift cards/prepaid/merch)
- [ ] ⬜ Reconciliation routine with Square (runbook 02 Part C)
- [ ] ⬜ Notion Par Sheet for consumables + per-event prep method (runbook 05)
- [ ] ⬜ Blog setup + categories + first posts (runbook 06)
- [ ] ⬜ Instagram feed embed + static fallback (runbook 07)
- [ ] ⬜ **Exit:** blog + IG live; online catalog reconciled; par sheet in use

## Phase 4 — Polish / SEO / Launch
- [ ] ⬜ Full mobile QA (all pages + both booking paths)
- [ ] ⬜ Visual cleanliness pass
- [ ] ⬜ SEO (titles/meta/slugs/alt/sitemap/structured data) + analytics
- [ ] ⬜ Performance pass (image sizes, lazy-load IG)
- [ ] ⬜ Accessibility + legal pages (Privacy/Terms/Accessibility)
- [ ] ⬜ Launch checklist + announce
- [ ] ⬜ **Exit:** live, fast, clean, accessible, converting

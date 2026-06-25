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

## Canva alignment pass (2026-06-25)
- [x] ✅ Extracted design from `honeyrootcoffeeco.my.canva.site` (palette, copy, packages, contact)
- [x] ✅ Applied to live Wix via API: business email + phone, business description
- [x] ✅ Applied to live Wix via API: Bookings mixed model — Custom Bottled Latte = live bookable appointment (visible, online booking, NO_FEE, owner staff); 2 full-event bars hidden/quote-only
- [x] ✅ Applied to live Wix via API: Business Owner working hours = every day 8am–5pm (booking calendar now shows slots)
- [ ] 👤 Bookings to finish: service price/photo, connect Square + Premium plan, confirm Booking page in nav, link CTA buttons (runbook 09 §3a/§4)
- [x] ✅ Repo: palette + contact in `assets/manifest.json`; Canva copy in `home`/`contact`; `serviceModels` in `packages.json`
- [x] ✅ Runbook `09-canva-visual-restyle.md` (editor steps for theme/fonts/layout + finishing services)
- [ ] 👤 In Wix Editor: apply palette/fonts/section order (runbook 09); fill font names in manifest
- [ ] 👤 Set service prices + photos, then unhide the 3 services (runbook 09 step 4)

## New pages requested (2026-06-25) — About / Instagram / Reviews / Shop
- [x] ✅ Page content drafted: `reviews.md`, `shop.md`, `instagram.md` (about.md already existed)
- [x] ✅ Decisions captured: Shop → link to **Square Online**; Reviews → **Wix Reviews** app
- [x] ✅ Runbook `10-content-pages.md` (editor build steps + nav placement for all four)
- [x] ✅ Site map updated (Reviews #11, Instagram #12, Shop = Square link)
- [ ] 👤 Build the 4 pages in the Wix Editor + place in overflow/footer nav (runbook 10)
- [ ] 👤 Provide: real About story/team, real reviews, Square Online store URL
- [ ] 👤 Add the Wix Reviews app + Instagram Feed element from the App Market (runbook 10)

## Phase 1 — Brochure + Quote
- [x] ✅ Draft Phase-1 copy (`content/pages/*`, status: review) — owner facts marked `TODO(owner)`
- [x] ✅ Drink-menu data classics + service data filled (`content/menus`, `content/services`)
- [x] ✅ Implement Velo quote flow (`velo/public/validation.js`, `backend/quoteRequests.jsw`, `pages/quote.page.js`)
- [x] ✅ Document `QuoteRequests` schema (`velo/README.md`)
- [x] ✅ Quote-form wiring + owner-email Automation runbook (`docs/runbooks/08-quote-form.md`)
- [ ] 👤 Provide owner facts to finalize copy (prices, radius, lead-time, deposit policy, team, signatures, contact) — see session notes
- [ ] 👤 Build pages in Wix editor: Home, Services, Menus, About, Contact, Gallery (static), Quote
- [ ] 👤 Create `QuoteRequests` collection + paste Velo + wire form IDs (runbook 08)
- [ ] 👤 Owner-notification Automation on new quote request (runbook 08)
- [ ] ⬜ Mobile-first layout + cleanliness pass (`brand-check`)
- [ ] ⬜ **Exit:** quote lead reaches owner end-to-end on mobile

## Phase 2 — Booking + Invoicing
- [x] ✅ Package definitions as data (`content/packages/packages.json`) — prices `TODO(owner)`
- [x] ✅ Book page + confirmation copy (`content/pages/book.md`, `confirmation.md`, status: review)
- [x] ✅ Booking-page guest-count helper (`velo/public/packages.js`, `pages/book.page.js`)
- [x] ✅ Runbook 03 updated (packages source, helper wiring, thank-you page)
- [ ] 👤 Create Wix Bookings services from packages.json + enter prices/deposits (runbook 03)
- [ ] 👤 Enable deposit via Square at booking (runbooks 02 + 03)
- [ ] 👤 Build /book page (widget + helper + escape hatch) + escape hatch to /quote
- [ ] 👤 Automated receipts + branded invoice template (runbook 04)
- [ ] 👤 Quote → invoice → deposit (Square) flow (runbook 04)
- [ ] ⬜ Confirmation / thank-you pages wired (both paths)
- [ ] ⬜ **Exit:** standard event booked + deposit paid into Square end-to-end

## Phase 3 — Inventory + Blog + Instagram
- [x] ✅ Par sheet template + per-event prep formula (`content/inventory/`)
- [x] ✅ Blog content calendar + topic bank (`content/blog/content-calendar.md`)
- [ ] 👤 Import par sheet to Notion + populate real values (runbook 05)
- [ ] 👤 Wix Stores mirror of online items only (gift cards/prepaid/merch)
- [ ] 👤 Reconciliation routine with Square (runbook 02 Part C)
- [ ] 👤 Blog setup + categories + first posts (runbook 06)
- [ ] 👤 Instagram feed embed + static fallback (runbook 07)
- [ ] ⬜ **Exit:** blog + IG live; online catalog reconciled; par sheet in use

## Phase 4 — Polish / SEO / Launch
- [x] ✅ Per-page SEO titles + meta drafted (`content/seo.md`)
- [x] ✅ Launch / QA checklist (`docs/launch-checklist.md`)
- [ ] ⬜ Full mobile QA (all pages + both booking paths)
- [ ] ⬜ Visual cleanliness pass
- [ ] ⬜ SEO (titles/meta/slugs/alt/sitemap/structured data) + analytics
- [ ] ⬜ Performance pass (image sizes, lazy-load IG)
- [ ] ⬜ Accessibility + legal pages (Privacy/Terms/Accessibility)
- [ ] ⬜ Launch checklist + announce
- [ ] ⬜ **Exit:** live, fast, clean, accessible, converting

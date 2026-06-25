# Site Map & Information Architecture

Mobile-first. The whole structure funnels toward two actions: **Book an Event** and
**Request a Quote**. Both CTAs are persistent in the header and repeated contextually.

## Primary navigation (header)

Keep the top nav short — 5 items max on mobile to protect cleanliness.

```
Home  |  Services  |  Menus  |  Gallery  |  About
                                                   [ Book ▸ ]   ← primary button, always visible
```

- **Book ▸** is a prominent button (not a plain nav link). On tap it offers the two paths:
  *"Book instantly"* (standard packages) and *"Request a custom quote"* (large/variable events).
- **Blog** and **Contact** live in the header overflow / footer to keep the bar uncluttered.
- **Shop / Gift Cards** appears in nav only once Phase 3 ships online-sellable items.

## Footer (every page)

- Quick links: Services · Menus · Book · Request a Quote · Reviews · Instagram · Blog · About · Contact
- Optional: a small **"Gift cards / Shop on Square"** footer link (free link-out; no Shop page)
- Service area + booking lead-time note · Instagram handle/icon · email · phone
- Legal: Privacy · Terms · Accessibility statement

---

## Page list & contents

### 1. Home `/`
The 10-second pitch. Hero → proof → services → menu peek → social → dual CTA.
- **Hero:** brand mark, one-line value prop (*mobile espresso bar for unforgettable events*),
  hero image, dual CTA buttons (Book / Get a Quote).
- **What we do:** 3–4 highlight tiles drawn from the services (mobile bar, pro baristas,
  custom menus, elevated guest experience).
- **How it works:** 3 steps — *Tell us about your event → We craft the menu & quote → We show up,
  set up, and pour.*
- **Social proof:** testimonials / logos / event-type chips (weddings · corporate · private).
- **Instagram strip:** latest posts (Phase 3).
- **Closing CTA band:** "Ready to elevate your event?" → Book / Quote.

### 2. Services `/services`
The full offering and the operational story. Anchor sections per service group (see
[service-to-page-mapping.md](service-to-page-mapping.md)).
- Mobile espresso bar · Professional barista service · Setup & breakdown
- Elevated guest experience · Personalized event branding
- "Good fit for" event types · service area + travel note
- Inline CTA to Book / Quote.

### 3. Menus `/menus`
What guests actually drink. Driven by [`content/menus/drink-menu.json`](../content/menus/drink-menu.json).
- Handcrafted espresso beverages (hot & iced)
- Milk & alternative-milk options
- Seasonal / signature drinks
- **Custom drink menus** explainer → "we'll build a menu for your event" → Quote CTA.

### 4. Book an Event `/book`  *(Wix Bookings — Path A, Phase 2)*
Instant self-serve booking for standard packages.
- Package cards (e.g. 2-hr / 3-hr / 4-hr small-event packages) — `TODO(owner)` pricing.
- Wix Bookings widget: service → date/time → details → **deposit via Square** → confirmation.
- Clear "Larger or non-standard event? Request a quote instead →" escape hatch.

### 5. Request a Quote `/quote`  *(Lead form — Path B, Phase 1)*
Custom inquiry for large/variable events. Powered by Velo quote-form logic.
- Structured lead form (see [booking-paths.md](booking-paths.md) for fields).
- Sets expectation: "We'll reply within X business hours with a custom quote."
- Confirmation / thank-you state.

### 6. Gallery `/gallery`
Visual proof of the experience.
- Curated event photography (bar setups, branding, drinks, crowds).
- **Instagram feed** embed (Phase 3).

### 7. Blog `/blog`  *(Wix Blog — Phase 3)*
SEO + storytelling: event recaps, drink features, planning tips, behind-the-scenes.

### 8. About `/about`
Trust + brand.
- Origin story · the baristas (professional barista service, human faces).
- What "elevated guest experience" means to Honey Root.
- Values / sourcing note (`TODO(owner)`).

### 9. Contact `/contact`
- Short contact form + email + phone + service area.
- Booking lead-time + FAQ accordion (deposits, travel, power/water needs, headcount limits).
- Nudge toward Book / Quote rather than open-ended email where possible.

### 10. Shop / Gift Cards — **removed (no dedicated page)**
Decision (2026-06-25): no Shop page. A native Wix Stores cart can't take payment on the Free plan
(needs Premium), and the owner doesn't want a paid upgrade for this. If selling is wanted later, the
free option is a **"Gift cards / Shop on Square" link in the footer** pointing to the existing Square
Online store (keeps all sales in Square; no Premium, no second processor). A native on-site cart
remains a future Wix Stores project only if a Premium plan is adopted.

### 11. Reviews `/reviews`
Social proof as its own page (overflow/footer nav). Driven by a free **`Reviews` CMS collection** +
repeater (schema in [`velo/README.md`](../velo/README.md)); real reviews only. Content:
[`content/pages/reviews.md`](../content/pages/reviews.md). Build: [runbook 10](runbooks/10-content-pages.md).

### 12. Instagram `/instagram`
Dedicated live **@honeyrootcoffeeco** feed page (overflow/footer nav), complementing the Gallery
strip. Content: [`content/pages/instagram.md`](../content/pages/instagram.md). Build:
[runbook 07](runbooks/07-instagram-feed.md) + [runbook 10](runbooks/10-content-pages.md).

### Utility / system pages
- **Thank-you / confirmation** pages for Book and Quote submissions.
- **FAQ** (can be a section on Contact or its own page).
- **Privacy**, **Terms**, **Accessibility** statement.
- **404**.

---

## IA principles

- **Two doors, clearly labeled.** Standard event → Book. Big/custom event → Quote. The site should
  never make a visitor guess which they are.
- **Every page ends in a CTA.** No dead ends.
- **Menus sell the experience, not a checkout.** Drinks build desire → route to booking.
- **Defer the Shop.** Don't let gift cards/merch dilute the events-first message; ship it last.

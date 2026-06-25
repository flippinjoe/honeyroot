# Runbook 09 — Match the Wix Site to the Canva Design

**Audience:** owner / site admin. **Phase:** 1–4 (visual polish). **Goal:** make the live Wix site
(Odeditor) look and read like the Canva mockup at `honeyrootcoffeeco.my.canva.site`.

> **Why this is a runbook, not code.** The visual layout, colors, and fonts of an existing Wix
> Odeditor site are edited in the Wix Editor, not through the API. The data-level changes from the
> Canva (contact info, business description, and the three service names/taglines/descriptions)
> were already applied to the site via the API on **2026-06-25** — this runbook covers the parts
> that must be done by hand in the editor. Brand source of truth:
> [`assets/manifest.json`](../../assets/manifest.json).

## Already applied via API (verify, don't redo)
- **Business Info → Contact:** email `honeyrootcoffeeco@gmail.com`, phone `(240) 818-8099`.
- **Business Info → Profile:** description = "A fully mobile espresso experience designed to elevate
  events through handcrafted drinks and genuine connection."
- **Bookings (mixed model, applied 2026-06-25):**
  - **Custom Bottled Latte Service** → live, online-bookable **Appointment** (visible, online booking
    on, 30-min slot, assigned to the *Business Owner* staff member, **NO_FEE** so no payment is
    required to book). **No price** and **no availability** yet — see step 4.
  - **Full Service Espresso Bar** and **Hosted Pop-Up Bar** → kept **hidden** (quote-only, Path B);
    route these to the Request-a-Quote form ([runbook 08](08-quote-form.md)).

Verify in **Dashboard → Settings → Business Info** and **Dashboard → Booking Services**.

## 1. Set the site color palette (theme)
1. In the **Wix Editor**, open the **Site Design / Theme** panel (left sidebar → **Site Design** →
   **Color**).
2. Set the theme colors to the Canva palette (from `assets/manifest.json`):

   | Role | Hex | Use for |
   | --- | --- | --- |
   | Primary (deep oxblood) | `#620000` | section backgrounds, footer |
   | Secondary (slate blue) | `#304254` | alternating sections, headings on cream |
   | Accent (sage) | `#c0bd90` | buttons, dividers, highlights |
   | Neutral (cream) | `#fff2e9` | body text on dark, light section backgrounds |
   | Slate (muted) | `#4e6d93` | optional supporting tone |
   | Off-white | `#fcf5f5` | near-white text/cards |

3. The Canva site is **cream text on a deep oxblood base** — set the dominant section background to
   `#620000` and default text to `#fff2e9` to match that mood.

## 2. Set the fonts
1. Open **Site Design → Text** and set two type styles only (brand rule: two fonts max).
2. Read the exact font families off the **Canva editor** (open the Canva design → click the
   "honeyroot" wordmark and the body text → note the font names), then record them in
   `assets/manifest.json` under `brand.fonts` so the repo stays the source of truth.
   - **Display:** the "honeyroot" wordmark face (rounded/elegant).
   - **Body:** the clean humanist sans used for paragraphs.

## 3. Lay out the Home page sections (match Canva order)
Rebuild the Home page to follow the Canva's single-scroll flow. Add/arrange sections top-to-bottom:

1. **Hero** — headline **"Your space, elevated."**, subhead "A fully mobile espresso experience
   designed to elevate events through handcrafted drinks and genuine connection.", wordmark, and a
   primary button. Keep the project's dual CTA: **Book an event** + **Request a quote** (the Canva's
   single "Tell me more" can become "Book an event").
2. **What we provide** — the nine items: Mobile espresso bar · Professional barista service ·
   Handcrafted espresso beverages · Hot & iced drink options · Milk & alternative milk options ·
   Custom drink menus · Set up & breakdown · Elevated guest experience · Personalized event branding.
3. **Brand values** — three columns: **Quality Ingredients · Intentional Service · Memorable
   Experiences**, with the supporting paragraph from [`content/pages/home.md`](../../content/pages/home.md).
4. **Our packages** — three cards from the service models below.
5. **Let's Chat** (contact) — email, phone, Instagram `@honeyrootcoffeeco`, and a contact/quote CTA.

> Keep it clean and mobile-first: lots of whitespace, one clear action per section, restrained color.
> Preview on a phone before publishing.

## 3a. Wire the CTA buttons (fixes "button does nothing")
Buttons placed by the template/Canva import have **no link set** — that's why a "Book event" button
does nothing. Buttons are editor elements (not API-settable), so link them by hand:

1. In the **Wix Editor**, click the button → click the **Link** (🔗) icon → **Link to**.
2. Choose the target and paste the address:

   | Button | Link to | Address (base = `https://joerdnr19.wixsite.com/honey-root-coffee-co`) |
   | --- | --- | --- |
   | Book / order bottled lattes | the bookable service | `…/booking-calendar/custom-bottled-latte-service-1` |
   | (or its detail page) | service page | `…/service-page/custom-bottled-latte-service-1` |
   | **Book an event** (full-event bars) | Request-a-Quote form page | the `/quote` page ([runbook 08](08-quote-form.md)) |
   | Request a quote | Request-a-Quote form page | the `/quote` page |

3. **Recommended routing** (mixed model): since the two full-event bars are quote-only, point a
   generic **"Book an event"** button at the **quote form**, and use a separate **"Order bottled
   lattes"** button for the bookable service. Don't leave one ambiguous button.
4. Prefer linking to **Pages** (so it's a clean internal link) over pasting the full web address when
   the editor offers the page in the list.
5. **Reminder:** the bottled-latte booking calendar shows **no open slots** until you set the staff
   member's working hours (see §4a).

## 4. Finish Bookings (mixed model)
The booking model is split (see [`content/packages/packages.json`](../../content/packages/packages.json)
→ `serviceModels`):

### 4a. Custom Bottled Latte Service — the online-bookable one (already live)
This is set up as a visible Appointment with online booking on. To make it actually take bookings:
1. **Set your availability.** In **Dashboard → Bookings → Staff** (or **Booking Calendar → Working
   Hours**), give the *Business Owner* staff member working hours. **Until you do this, the booking
   widget shows no open slots.** (Availability is intentionally left blank — I won't invent your hours.)
2. **Set the price.** It's currently **no-fee** (book without paying). In **Dashboard → Booking
   Services**, open the service and enter a price, or keep it no-fee and settle on pickup/delivery.
   Taking the money *online* additionally needs steps 4c–4d.
3. **Adjust the slot length / location** if 30 minutes or the default location isn't right (e.g. set
   pickup vs. delivery).
4. **Add a photo** (the Canva images weren't in the export — re-upload from Canva/media library).

### 4b. Full Service Espresso Bar & Hosted Pop-Up Bar — quote-only
These are **hidden** on purpose (variable, full-event services fit a quote better than fixed slots).
Point them at the Request-a-Quote form ([runbook 08](08-quote-form.md)). Only un-hide them as
Bookings services later if you decide to offer fixed, online-bookable versions.

### 4c. Connect Square (to collect deposits/payments)
Bookings can't take money online until **Square is connected as the payment provider** —
see [runbook 02](02-square-payment-provider.md).

### 4d. Upgrade to a Premium plan
The site is on the **Free** plan, which **cannot accept online payments**. A Wix **Premium** plan is
required before any service (or deposit) can be paid online.

### 4e. Confirm the Booking page is in the site menu
Make sure a **Booking / Services page** exists and is linked in the site navigation, so visitors can
reach the bookable service. Add it in the **Wix Editor** if it's missing.

## 5. Verify it worked
- [ ] Home page, on a **phone**, follows the Canva section order and uses the oxblood/cream palette.
- [ ] Only two fonts appear site-wide, matching the Canva.
- [ ] Footer/contact shows `honeyrootcoffeeco@gmail.com`, `(240) 818-8099`, and `@honeyrootcoffeeco`.
- [ ] *Custom Bottled Latte Service* shows open time slots (working hours set), has a photo, and a price (or is intentionally no-fee).
- [ ] The two full-event bars route to the **Request a Quote** form.
- [ ] Both CTAs (**Book an event**, **Request a quote**) are present and reachable from the hero.
- [ ] `assets/manifest.json` `brand.fonts` has the real font names filled in.

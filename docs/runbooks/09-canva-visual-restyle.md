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
- **Bookings services** renamed to the three Canva offerings (still **hidden** — see step 4):
  Full Service Espresso Bar · Hosted Pop-Up Bar · Custom Bottled Latte Service.

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

## 4. Finish the three Bookings services and make them visible
The three services exist and carry the Canva names/taglines/descriptions but are **hidden** and have
**placeholder pricing**. For each (definitions in
[`content/packages/packages.json`](../../content/packages/packages.json) → `serviceModels`):

| Service | Tagline | Price / duration |
| --- | --- | --- |
| Full Service Espresso Bar | Unlimited handcrafted drinks, fully hosted by you. | `TODO(owner)` |
| Hosted Pop-Up Bar | A full cafe experience brought directly to your space. | `TODO(owner)` |
| Custom Bottled Latte Service | Freshly bottled, ready when you are. | `TODO(owner)` |

1. In **Dashboard → Booking Services**, open each service.
2. Enter the real **price** (or set "Price varies" / custom and route to the quote form for variable
   events — see [runbook 08](08-quote-form.md)), and a sensible **duration**.
3. Add a **photo** for each (the Canva images aren't in the export — re-upload from Canva or your
   media library).
4. Toggle the service from **hidden** to **visible** once price + photo are set.
5. Confirm deposits route to **Square** (see [runbook 02](02-square-payment-provider.md)).

## 5. Verify it worked
- [ ] Home page, on a **phone**, follows the Canva section order and uses the oxblood/cream palette.
- [ ] Only two fonts appear site-wide, matching the Canva.
- [ ] Footer/contact shows `honeyrootcoffeeco@gmail.com`, `(240) 818-8099`, and `@honeyrootcoffeeco`.
- [ ] The three services are visible, priced, and each has a photo.
- [ ] Both CTAs (**Book an event**, **Request a quote**) are present and reachable from the hero.
- [ ] `assets/manifest.json` `brand.fonts` has the real font names filled in.

# Runbook 10 — Add the About, Instagram, Reviews, and Shop Pages

**Audience:** owner / site admin. **Phase:** 1–3. **Goal:** add four pages to the live Wix site:
**About**, **Instagram**, **Reviews**, and **Shop** (standard purchases via Square).

> **Why a runbook:** pages, their layout, and their place in the site menu are built in the **Wix
> Editor** — the API can't create editor pages. Each page's copy lives in `content/pages/` (the
> source of truth); this runbook is how you put it on the site. Keep it clean and mobile-first, and
> make sure every page ends in a **Book** or **Request a Quote** CTA.

## 0. Add the pages and menu (do once)
1. In the **Wix Editor**, open the **Pages** panel (**Menus & Pages**).
2. Add four blank pages: **About**, **Instagram**, **Reviews**, **Shop**.
3. Keep the top nav to ~5 items (cleanliness): **Home · Services · Menus · Gallery · About**.
   Put **Reviews**, **Instagram**, and **Shop** in the **header overflow ("More")** or the **footer**
   so the bar stays uncluttered (matches [`docs/site-map.md`](../site-map.md)).

---

## 1. About  →  copy in [`content/pages/about.md`](../../content/pages/about.md)
1. Build sections: **Our story**, **The baristas**, **What "elevated guest experience" means**,
   **Sourcing & values**, then a **Request a Quote** CTA.
2. `TODO(owner)`: fill the real story, team names/photos, and sourcing notes — don't ship the
   placeholders. This page is about trust, so real faces matter.

## 2. Instagram  →  copy in [`content/pages/instagram.md`](../../content/pages/instagram.md)
1. Add Wix's **Instagram Feed** element (App Market → "Instagram Feed") and connect
   **@honeyrootcoffeeco** (see [runbook 07](07-instagram-feed.md)).
2. Show 6–12 recent posts in a clean grid + a **Follow** button.
3. Lazy-load below the fold; add a static fallback grid in case the feed fails.

## 3. Reviews  →  copy in [`content/pages/reviews.md`](../../content/pages/reviews.md)
1. From the **Wix App Market**, add a reviews app. Recommended: the official **Wix Reviews** app
   (published by Wix). If you prefer to show reviews you already have on Google, a Google-reviews
   widget is a fine alternative.
   - *Note:* I didn't auto-install this via the API — several similarly named third-party apps exist,
     and picking the right one (and any billing) is safest from the editor where you can see the
     publisher. Add it there.
2. Configure an overall rating + a grid/carousel of individual reviews.
3. `TODO(owner)`: add 6–12 **real** reviews (clients, Google, DMs). Never use invented testimonials.
4. Optionally add a "write a review" prompt so happy clients can add more after their event.
5. **Fallback without an app:** if you'd rather not add an app, ask and I'll scaffold a **Reviews CMS
   collection** (author, rating, quote, event type, date) and you bind a repeater to it.

## 4. Shop (standard purchases → Square)  →  copy in [`content/pages/shop.md`](../../content/pages/shop.md)
Decision on record: purchases link out to **Square Online** (keeps every sale in Square, your single
processor — no second checkout, no duplicate inventory).
1. Build a short page: intro + the small list of online items (gift cards, prepaid, merch) from the
   content file.
2. Add a primary button **"Shop on Square"** linking to your Square Online store.
   - `TODO(owner)`: paste your **Square Online store URL** (Square Dashboard → Online → your site).
   - Set the button link to **open in a new tab**.
3. Keep it minimal so it never competes with **Book / Request a Quote**.

> If you ever want a native on-site cart instead of a link, that's a **Wix Stores** project (still
> paid via Square as the Wix payment provider) — say the word and we'll scope it.

---

## ✅ Verify it worked (on a phone)
- [ ] All four pages exist and are reachable (nav for About; overflow/footer for the others).
- [ ] **About** has the real story/team (no placeholder text).
- [ ] **Instagram** shows the live @honeyrootcoffeeco feed with a Follow button + fallback.
- [ ] **Reviews** shows real reviews via the chosen app; no invented quotes.
- [ ] **Shop** "Shop on Square" button opens the Square store in a new tab.
- [ ] Every page ends in a **Book** or **Request a Quote** CTA.

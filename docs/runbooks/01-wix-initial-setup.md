# Runbook 01 — Wix Initial Setup

**Audience:** owner / site admin. **Phase:** 0. **Goal:** a clean Wix site shell ready for content.

> Fill in every `TODO(owner)` as you go.

## 1. Account & plan
1. Sign in to Wix with the business Google/email account: `TODO(owner)`.
2. Create the site. Choose a **blank/clean template** or start from a coffee/catering template —
   then strip it back. Cleanliness beats pre-filled clutter.
3. Choose a **premium plan** that includes: Bookings, Invoices, Blog, accepting payments, and a
   connected custom domain. (A "Business" tier or higher is typically required for payments +
   Bookings.) `TODO(owner)` confirm plan.

## 2. Domain
1. Connect the custom domain `TODO(owner)` (e.g. honeyrootcoffee.co) or buy it through Wix.
2. Set up the branded mailbox (`hello@…`) `TODO(owner)`.
3. Confirm SSL/HTTPS is active (Wix does this automatically once the domain connects).

## 3. Brand kit (protect cleanliness)
1. In **Settings → Business Info**, set name, logo, contact, and service area.
2. In the **Site Design / Theme**, define:
   - **Colors:** primary, secondary, accent, neutral/background. `TODO(owner)` — pull from the
     Instagram palette (warm honey/amber + grounded earth tones). Keep to ~4 colors.
   - **Fonts:** one display + one body font. Two fonts max.
   - **Buttons:** one primary button style used for **Book / Get a Quote** everywhere.
3. Record the final palette + fonts in [`assets/manifest.json`](../../assets/manifest.json).

## 4. Page skeleton
Create the pages from [`site-map.md`](../site-map.md) as empty pages first, with correct URLs:
`/`, `/services`, `/menus`, `/book`, `/quote`, `/gallery`, `/blog`, `/about`, `/contact`
(+ `/shop` later). Set the **header nav** to: Home · Services · Menus · Gallery · About + a
prominent **Book ▸** button. Put Blog/Contact in the footer.

## 5. Mobile-first discipline
1. Build/verify the **mobile layout** of each page before the desktop layout.
2. Turn on the Wix mobile editor and check the header CTA is visible without scrolling.

## 6. Enable Velo (for later custom code)
1. In the top bar, enable **Dev Mode (Velo)**. This unlocks the code panel + data collections.
2. Custom code from [`/velo`](../../velo) will be pasted into the corresponding page/backend files.

## ✅ Verify it worked
- All nav pages exist and load on mobile and desktop.
- Header shows a single, obvious **Book ▸** action.
- Theme uses ≤4 colors and ≤2 fonts; palette recorded in the asset manifest.
- Dev Mode (Velo) is on.

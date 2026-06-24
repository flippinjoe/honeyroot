# Runbook 03 — Wix Bookings Setup (Path A: Instant Self-Serve)

**Audience:** owner / site admin. **Phase:** 2. **Goal:** clients can instantly book a standard
event package and pay a deposit via Square.

> Depends on [runbook 02](02-square-payment-provider.md) (Square connected).

## 1. Install & configure Wix Bookings
1. Add the **Wix Bookings** app from the Wix App Market.
2. Set business hours / availability windows that reflect when you can take gigs.
3. Set a **booking lead-time buffer** so clients can't book a date that's too soon (`TODO(owner)`,
   e.g. minimum 7–14 days out).

## 2. Create services = packages
Create one Bookings **service** per standard package. Definitions live in
[`content/packages/packages.json`](../../content/packages/packages.json) — that file is the source
of truth for names, durations, guest caps, inclusions, and add-ons (prices are `TODO(owner)`).
Enter the prices/deposits in Wix Bookings as you create each service.

| Service (package) | Duration | Guest cap | Deposit | Price |
| --- | --- | --- | --- | --- |
| Petite Bar | 2 hr | 50 | `TODO(owner)` | `TODO(owner)` |
| Signature Bar | 3 hr | 100 | `TODO(owner)` | `TODO(owner)` |
| Grand Bar | 4 hr | 150 | `TODO(owner)` | `TODO(owner)` |

> If you change a guest cap, also update `velo/public/packages.js` so the booking-page helper
> routes correctly.

For each service set:
- **Type:** appointment/class as appropriate (usually a single-session "appointment").
- **Location:** "client's location / on-site" (it's mobile).
- **Price & deposit:** enable taking a **deposit** at booking (paid via Square).
- **Buffer time** before/after for setup & breakdown.
- **Custom booking-form fields** (capture the Path A data from [booking-paths.md](../booking-paths.md)):
  event address + ZIP, guest count, indoor/outdoor, power/water available, add-ons, notes.

## 3. Add-ons
Model add-ons (extra hour, alt-milk pack, basic branding) as either service variants or
booking-form options. `TODO(owner)` finalize.

## 4. Place the booking widget + helper
1. On the **/book** page, add the Wix Bookings widget (service list / calendar).
2. *(Optional, recommended)* Above the widget, add the **"which package?" helper**: a number input
   `#guestCountHelper`, a `#recommendBtn` button, a hidden `#recommendResult` text, and a hidden
   `#quoteCallout` container linking to /quote. Paste
   [`velo/pages/book.page.js`](../../velo/pages/book.page.js) (uses
   [`velo/public/packages.js`](../../velo/public/packages.js)) into the page's code file. The helper
   recommends a package by guest count and routes oversized events to the quote.
3. Add an **escape hatch** banner: "Larger or custom event? **Request a quote →** /quote".
4. Set the Bookings **Thank-You page** copy from
   [`content/pages/confirmation.md`](../../content/pages/confirmation.md).

## 5. Confirmation & notifications
1. Enable automated **booking confirmation email** to the client (ties into
   [runbook 04](04-invoices-and-receipts.md) for the receipt).
2. Enable **owner notification** on every booking.
3. Optional (Velo): mirror the booking into Notion / a calendar hold.

## ✅ Verify it worked
- A test booking can be completed end-to-end on **mobile**.
- The deposit charge appears in **Square**.
- Client receives a confirmation + receipt; owner receives a notification.
- Guest-count cap and lead-time buffer are enforced.
- Oversized/custom requests are visibly directed to **/quote**.

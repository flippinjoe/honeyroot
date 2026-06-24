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
Create one Bookings **service** per standard package. Suggested starting set (`TODO(owner)` for
real names, durations, caps, prices):

| Service (package) | Duration | Guest cap | Deposit | Price |
| --- | --- | --- | --- | --- |
| Petite Bar | 2 hr | ~50 | `TODO` | `TODO` |
| Signature Bar | 3 hr | ~75 | `TODO` | `TODO` |
| Grand Bar | 4 hr | ~100 | `TODO` | `TODO` |

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

## 4. Place the booking widget
1. On the **/book** page, add the Wix Bookings widget (service list / calendar).
2. Add an **escape hatch** banner: "Larger or custom event? **Request a quote →** /quote".

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

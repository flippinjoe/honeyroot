# Runbook 04 — Invoices & Receipts (Wix Invoices, deposits → Square)

**Audience:** owner / site admin. **Phase:** 2. **Goal:** automated receipts for every payment, and
clean custom invoices for quoted events — all money settling in Square.

> Depends on [runbook 02](02-square-payment-provider.md).

## 1. Automated receipts
1. In **Wix dashboard → Settings → Email notifications** (and the Bookings/Invoices settings),
   enable automatic **payment receipt** emails to clients.
2. Brand the receipt: logo, colors, business info, support email. Keep it clean.
3. Confirm receipts fire for: Bookings deposits (Path A), Invoice payments (Path B), Store orders.

## 2. Invoice template (for Path B quotes)
1. Go to **Wix dashboard → Finance → Invoices**.
2. Edit the default **invoice template**: logo, brand colors, payment terms, deposit policy,
   cancellation policy (`TODO(owner)`), and a clear line-item structure (bar package, hours,
   guest count, add-ons, branding, travel).
3. Set the **"Pay now"** button on invoices to use **Square** (inherited from the payment-provider
   connection).

## 3. Quote → invoice flow (Path B)
1. A quote request arrives via the Velo lead form (stored in the `QuoteRequests` collection — see
   [`/velo`](../../velo)).
2. Owner reviews and builds a price.
3. Create a **Wix Invoice** (or a Price Quote that converts to an invoice) with a **deposit** line.
4. Send it; client pays the deposit → **Square** → automatic receipt.
5. Send the **balance invoice** before/after the event per your terms (`TODO(owner)`).

## 4. Recurring / repeat clients (optional)
- For recurring corporate clients, set up **recurring invoices** in Wix Invoices (`TODO(owner)`
  decide if needed).

## 5. Deposits policy (write it down)
Document and display the deposit %, due dates, and cancellation/refund terms (`TODO(owner)`). Put a
short version on **/contact** FAQ and the full version in invoice terms.

## ✅ Verify it worked
- A test invoice can be paid via Square; the payment shows in Square and a receipt is emailed.
- Receipt + invoice carry the brand (logo/colors/info) and read cleanly on mobile.
- Deposit and balance behave per the documented policy.

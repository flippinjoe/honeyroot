# Runbook 08 — Quote Form (Path B): Collection, Form Wiring & Owner Email

**Audience:** owner / site admin (with the developer's Velo files). **Phase:** 1.
**Goal:** the `/quote` lead form stores each request and emails the owner — using the Velo code in
[`/velo`](../../velo) plus a no-code Wix Automation for the email.

> Depends on Dev Mode (Velo) being on ([runbook 01](01-wix-initial-setup.md)). Field design:
> [`booking-paths.md`](../booking-paths.md). Code: [`velo/`](../../velo) + schema in
> [`velo/README.md`](../../velo/README.md).

## 1. Create the `QuoteRequests` collection
1. In the Wix dashboard: **Content Manager → + Create Collection** → name it `QuoteRequests`.
2. Add the fields exactly as listed in [`velo/README.md`](../../velo/README.md) (keys must match
   the code's `sanitize()`).
3. **Permissions:** set so the public **cannot** read entries (the backend module writes them).
   Form data is private lead info — keep it admin-only.

## 2. Add the Velo files
1. With Dev Mode on, in the code panel create:
   - `public/validation.js` → paste [`velo/public/validation.js`](../../velo/public/validation.js)
   - `backend/quoteRequests.jsw` → paste [`velo/backend/quoteRequests.jsw`](../../velo/backend/quoteRequests.jsw)
   - Open the **/quote page** code file → paste [`velo/pages/quote.page.js`](../../velo/pages/quote.page.js)
2. *(Recommended)* Validate the `wix-data` usage against the **Wix MCP** docs before publishing.

## 3. Build the form on the /quote page
Add input elements and **set each element's ID** to match the contract in `quote.page.js`
(e.g. `#eventType`, `#guestCount`, `#contactEmail`, `#consent`, `#submitBtn`, …). Also add:
- `#formGroup` — a container holding the inputs.
- `#thanksState` — a container with the confirmation copy (from
  [`content/pages/quote.md`](../../content/pages/quote.md)); set it **Hidden on load**.
- `#formError` — a text element for error messages; set it **Hidden on load**.

Mobile-first: lay out and test the form on the **mobile** canvas first.

## 4. Owner notification (no code — Wix Automation)
1. Go to **Automations → + New Automation**.
2. **Trigger:** *Content Manager → item created* in `QuoteRequests` (or "Form submitted" if you
   used a Wix Form element).
3. **Action:** *Send email* to the owner address (`TODO(owner)`), including the key fields
   (event type, dates, guest count, location, contact). Keep money/payments out of this step.
4. *(Optional, Phase 3)* Add a second action to push the request into **Notion** via the Notion MCP /
   an integration, for the project tracker.

## 5. Confirmation experience
The page code collapses `#formGroup` and expands `#thanksState` on success — confirm the
confirmation copy is friendly and sets the reply-time expectation (`TODO(owner)` business hours).

## ✅ Verify it worked
- Submitting the form on **mobile** creates a new `QuoteRequests` item with all fields populated.
- Invalid input (e.g. bad email, missing consent) shows an inline error and does **not** submit.
- The owner receives the notification email.
- On success the form is replaced by the thank-you state.
- No payment is requested anywhere in this flow.

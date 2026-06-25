# Velo Custom Code

Version-controlled **Velo by Wix** (JavaScript) for the genuine gaps that the Wix editor can't
cover. **Everything else is configuration — see [`/docs/runbooks`](../docs/runbooks).**

> ✅ **Status: Phase 1 implemented (in-repo).** The quote flow below is written and ready to paste
> into Wix once the `/quote` form is built in the editor and the `QuoteRequests` collection exists
> (see [runbook 08](../docs/runbooks/08-quote-form.md)). Validate against the **Wix MCP** before
> pasting — APIs evolve. Element IDs in `quote.page.js` are the contract the editor form must match.

## What belongs here

- **Quote-form handler** (Path B): validate → store in `QuoteRequests` collection → notify owner →
  optional Notion/calendar mirror. See [`docs/booking-paths.md`](../docs/booking-paths.md).
- **Integrations / glue**: pushing bookings or quotes into external tools (e.g. Notion).
- **Conditional routing** the editor can't express (e.g. guest-count thresholds steering Book vs Quote).

## What does NOT belong here

- Payment connection, Bookings services, Invoice templates, Blog, Instagram embed → **runbooks**.

## Layout

```
velo/
├── backend/      ← *.jsw (web modules) and *.js backend logic, secrets via Wix Secrets Manager
│   └── quoteRequests.jsw   submitQuoteRequest(): validate → insert QuoteRequests → return result
├── public/       ← shared client-side modules
│   ├── validation.js       validateQuotePayload() shared by client + backend
│   └── packages.js         booking packages + recommendPackage() (guest-count routing)
└── pages/        ← per-page client code (bind to Wix element IDs)
    ├── quote.page.js       wires the /quote form elements to the backend
    └── book.page.js        /book "which package?" helper → recommend or route to /quote
```

## `QuoteRequests` collection schema

Create this in the Wix **Content Manager** (runbook 08). Field keys must match
`sanitize()` in `backend/quoteRequests.jsw`. Permissions: form submits via the backend module,
so the collection can be **admin-read / no public read**; the backend insert runs with elevated
context. (Owner email is sent by a Wix Automation on new items — config, not code.)

| Field key | Type | Notes |
| --- | --- | --- |
| `eventType` | Text | wedding / corporate / private / activation / other |
| `eventDates` | Text | free text or date range |
| `dateFlexible` | Boolean | |
| `venueLocation` | Text | city + ZIP / venue |
| `guestCount` | Number | primary cost driver |
| `duration` | Text | desired service window |
| `drinkPreferences` | Tags/Text (array) | hot, iced, classics, signature |
| `milkOptions` | Tags/Text (array) | whole, oat, almond, … |
| `customMenuNotes` | Text | |
| `branding` | Tags/Text (array) | cups, signage, branded bar |
| `setupConstraints` | Text | indoor/outdoor, power, water, access |
| `budgetRange` | Text | optional, qualifies the lead |
| `referralSource` | Text | attribution |
| `contactName` | Text | required |
| `contactEmail` | Text | required, validated |
| `contactPhone` | Text | |
| `company` | Text | |
| `consent` | Boolean | required true |
| `status` | Text | set to `new` on insert; owner updates (quoted/won/lost) |
| `submittedAt` | Date and Time | set on insert |

## `Reviews` collection schema

Backs the **Reviews** page ([`content/pages/reviews.md`](../content/pages/reviews.md)) via a Wix
Content Manager collection + a repeater (no paid app required). Permissions: **public read**,
admin write (reviews are public testimonials; only the owner adds them). Wix auto-adds
`_id`, `_createdDate`, `_updatedDate`, `_owner`.

| Field key | Type | Notes |
| --- | --- | --- |
| `reviewerName` | Text | required; display name, e.g. "Sarah M." |
| `rating` | Number | 1–5 stars |
| `quote` | Text | the review text (multiline) |
| `eventType` | Text | wedding / corporate / private / activation / pop-up / other |
| `eventDate` | Date and Time | when the event happened (optional) |
| `location` | Text | city / venue (optional) |
| `photo` | Image | optional headshot or event photo |
| `source` | Text | client / google / instagram / referral (attribution) |
| `featured` | Boolean | show in the featured slot at the top |
| `displayOrder` | Number | manual sort (lower = first) |

> **All reviews must be real** (owner-supplied or imported from Google/clients). Never seed fabricated
> testimonials. Create the collection in the Content Manager (or via the Wix Data API) — see
> [runbook 10](../docs/runbooks/10-content-pages.md).

## Conventions

- Each file's header comment states the **page**, the **Wix element IDs**, and the **collections**
  it touches.
- **Never** hardcode secrets. Use **Wix Secrets Manager**; reference via `wix-secrets-backend`.
- Validate against current APIs using the **Wix MCP docs search** before finalizing.
- Data collections (e.g. `QuoteRequests`) are created in the Wix Content Manager; document their
  schema here when finalized.

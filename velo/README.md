# Velo Custom Code

Version-controlled **Velo by Wix** (JavaScript) for the genuine gaps that the Wix editor can't
cover. **Everything else is configuration — see [`/docs/runbooks`](../docs/runbooks).**

> 🛑 **Status: scaffold only.** Per the project gate, real Velo logic is **not** written until the
> IA + plan are reviewed. The files here are structural stubs showing intent, bindings, and
> contracts — not finished implementations. Don't paste stubs into the live site as-is.

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
│   └── quoteRequests.jsw   (STUB) submit/store/notify for the quote form
├── public/       ← shared client-side modules
│   └── validation.js       (STUB) shared form validation helpers
└── pages/        ← per-page client code (bind to Wix element IDs)
    └── quote.page.js       (STUB) wires the /quote form elements to the backend
```

## Conventions

- Each file's header comment states the **page**, the **Wix element IDs**, and the **collections**
  it touches.
- **Never** hardcode secrets. Use **Wix Secrets Manager**; reference via `wix-secrets-backend`.
- Validate against current APIs using the **Wix MCP docs search** before finalizing.
- Data collections (e.g. `QuoteRequests`) are created in the Wix Content Manager; document their
  schema here when finalized.

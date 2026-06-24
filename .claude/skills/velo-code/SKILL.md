---
name: velo-code
description: Write or modify Velo by Wix (JavaScript) custom code in /velo. Use only for genuine gaps the Wix editor can't cover — quote-form logic, the QuoteRequests collection handler, integrations (e.g. Notion mirror), and conditional routing. Enforces Velo conventions, secrets hygiene, and validating against current Wix APIs via the Wix MCP.
---

# Velo Code Authoring

Reserve Velo for real gaps. If the Wix editor can do it, write a runbook instead (`wix-runbook`).

## Before writing
- Confirm it can't be done in the editor (config over code).
- Use the **Wix MCP** (`mcp.wix.com`) to check the current Velo API/SDK for the modules you'll use
  (`wix-data`, `wix-secrets-backend`, automations, etc.) — APIs evolve; validate, don't guess.

## Conventions
- **File header comment** must state: the **page**, the **Wix element IDs** it binds to, the
  **collections** it reads/writes, and related docs.
- **No secrets in the repo.** Use **Wix Secrets Manager** via `wix-secrets-backend`. `.gitignore`
  guards `.env`/keys, but the rule is: secrets never touch git.
- Keep validation logic shared (`velo/public/validation.js`) so client + backend agree.
- Backend web modules are `*.jsw`; page code is `*.page.js`; shared client modules in `public/`.

## The quote flow (Path B) contract
- Payload shape = the Path B field list in `docs/booking-paths.md`.
- Flow: validate → insert `QuoteRequests` → notify owner → (optional) mirror to Notion → return a
  result the page renders as a clean "thanks, we'll reply in X hrs" state.
- **No payment** in this flow; deposits happen later via Wix Invoice → Square.

## After writing
- Note the matching Wix collection schema in `velo/README.md` if newly created.
- Update `plan/checklist.md`.

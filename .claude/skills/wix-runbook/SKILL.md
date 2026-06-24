---
name: wix-runbook
description: Write or update a step-by-step Wix/Square configuration runbook in docs/runbooks. Use when a task is done in the Wix editor or dashboard (not code) — e.g. setting up Bookings, Invoices, payment provider, Blog, Instagram, Stores. Produces owner-friendly, numbered, verifiable instructions consistent with the existing runbooks.
---

# Wix Runbook Authoring

Use this when the work lives in the Wix dashboard/editor rather than in code. Output a runbook
that the **owner** (non-engineer) can follow.

## Before writing
- Confirm the task truly belongs in a runbook, not `/velo` (config over code — see `CLAUDE.md`).
- Use the **Wix MCP** (`mcp.wix.com`) to confirm current menu paths / feature names before
  documenting them — Wix UI changes; don't rely on memory.

## Structure (match existing runbooks 01–07)
1. Header: `# Runbook NN — Title`, then **Audience**, **Phase**, **Goal**, and any **depends on**.
2. Numbered sections with exact dashboard paths (e.g. *Settings → Accept Payments → Square*).
3. Mark every business-specific value as `TODO(owner)` (prices, radius, account, policy).
4. End with a **✅ Verify it worked** section — concrete checks, ideally including a test
   transaction/booking and confirming it appears in **Square** where money is involved.
5. If there's a real limitation, **state it honestly** in a closing note.

## Cross-link
Link to related runbooks and to `docs/architecture.md`. Add the runbook to `docs/README.md`'s
table and to `plan/checklist.md` if it introduces a new tracked step.

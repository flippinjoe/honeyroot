# Honey Root Coffee Co. — Website & Booking Platform

This repository is the **source of truth for the Honey Root Coffee Co. website project**: a
mobile espresso bar and barista catering service for events (weddings, corporate gatherings,
private parties).

This is a **bookings-and-events business, not a retail/shipping business**. Every design and
content decision should push toward the core conversion action — *"book us for an event"* or
*"request a quote"* — never *"add to cart."*

---

## The Stack (decided — do not re-litigate)

| Concern | Platform | Notes |
| --- | --- | --- |
| Website, booking, invoicing, blog, Instagram feed | **Wix** | All-in-one hosted builder. Custom logic via **Velo by Wix** (JavaScript). |
| Payments, in-field POS, event inventory source-of-truth | **Square** | Already in use. Connected to Wix as the **payment provider**. |

**Rationale:** the owner prioritized an all-in-one (booking + invoicing + inventory) builder,
needs **both** instant self-serve booking **and** custom per-event quotes, and already runs
Square at events. Money keeps flowing into the existing Square account — we do **not** introduce
a second processor.

### Implementation surface

Wix is a hosted, low-code platform. This repo therefore favors **configuration runbooks over
source code**:

- Where work can be done in the Wix editor/dashboard → we write **runbooks** (`/docs`).
- Where genuine custom logic is needed → we write **Velo JavaScript** (`/velo`), version-controlled here.

---

## Repository Layout

```
honeyroot/
├── README.md            ← you are here
├── CLAUDE.md            ← agent operating guide (read this if you are Claude)
├── .mcp.json            ← project-scoped MCP servers (Wix, Canva, Notion)
├── .claude/skills/      ← repo-specific skills for the agent
├── docs/                ← platform setup runbooks, site map, IA, booking design
│   ├── site-map.md
│   ├── service-to-page-mapping.md
│   ├── booking-paths.md
│   ├── architecture.md
│   └── runbooks/        ← step-by-step Wix + Square config guides
├── velo/                ← custom Velo JavaScript (quote-form logic, integrations)
├── content/             ← site copy per page, drink-menu data, service descriptions
├── assets/              ← image/branding organization + manifest
└── plan/                ← phased task breakdown + tracking checklist
```

## Where to start

1. **Read the plan** → [`plan/phased-plan.md`](plan/phased-plan.md) and [`plan/checklist.md`](plan/checklist.md)
2. **Understand the site** → [`docs/site-map.md`](docs/site-map.md)
3. **Understand the money + data flow** → [`docs/architecture.md`](docs/architecture.md)
4. **Set up the platforms** → [`docs/runbooks/`](docs/runbooks/)

## Status

🟡 **Phase 0 — scaffolding.** Repo structure, IA, and phased plan are drafted and **awaiting
owner review** before Velo code and final page copy are written. See the checklist for live status.

## Brand principles (apply everywhere)

- **Hospitality brand — protect visual cleanliness.** Wix needs more discipline than Squarespace
  to avoid clutter. Generous whitespace, restrained type, few fonts, consistent imagery.
- **Mobile-first.** Clients browse and book from phones. Design and test mobile before desktop.
- **One clear action per screen.** Book, or request a quote. Don't bury the CTA.
- **Honest about limits.** Neither Wix nor Square does par-level consumable tracking well — we
  document the chosen approximation rather than pretend it's solved.

# Assets

Branding organization for the site. **Large binaries are not committed** to the repo — this folder
holds the **manifest** (the index of what exists and where it lives) plus small source files (e.g.
logo SVG, brand tokens). Photography/originals live in the owner's drive / Canva and are referenced
by the manifest.

## Layout

```
assets/
├── README.md
├── manifest.json     ← index of brand kit + image inventory (source of truth for "what we have")
├── brand/            ← logo, color tokens, font notes (small files OK)
├── photography/      ← (gitignored if large) event photos; reference via manifest
└── social/           ← Canva-generated graphics for IG/menus (reference via manifest)
```

## Rules

- Update `manifest.json` whenever an asset is added/replaced.
- Keep the palette + fonts in sync with the Wix theme ([runbook 01](../docs/runbooks/01-wix-initial-setup.md)).
- Generate social/menu graphics with **Canva** (via the Canva MCP) to stay on-brand.
- Favor a small, consistent photo set over volume — protects visual cleanliness.

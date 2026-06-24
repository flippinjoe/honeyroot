# Content

Source of truth for site copy and structured content. Page copy is Markdown with frontmatter;
menu and service data are JSON so they can drive Wix repeaters/collections or be hand-placed.

> 🛑 **Status: scaffold.** Final copy is written **after** IA + plan review. Files here are
> outlines + structured data with `TODO(owner)` / `TODO(copy)` markers. Don't ship as-is.

## Layout

```
content/
├── pages/      ← one .md per page (frontmatter + section outline)
│   ├── home.md  services.md  menus.md  about.md  contact.md
│   ├── book.md  quote.md
├── menus/
│   └── drink-menu.json      ← structured drink menu (drives the Menus page)
└── services/
    └── services.json        ← the 9 services as data (drives Services + mapping)
```

## Conventions

- **Frontmatter** on every page file: `page`, `route`, `status` (draft|review|final),
  `last_reviewed`, `primary_cta`.
- Mark gaps with `TODO(owner)` (a business fact only the owner has) or `TODO(copy)` (writing to do).
- Keep voice **warm, hospitable, confident** — premium but not stiff. Short sentences. Mobile-readable.
- Every page's copy must end by pointing at **Book** or **Request a Quote**.

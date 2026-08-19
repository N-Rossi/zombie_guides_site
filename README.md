# Zombies Archive

A community guide site for Treyarch CoD Zombies — easter eggs, high round strategies,
relics, and map guides. Every guide is a plain markdown file; the site is a static
[Astro](https://astro.build) build with no database and no server.

## Running it

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static site output in dist/
npm run preview  # serve the built site locally
```

Deploy `dist/` anywhere static hosting exists: Netlify, Vercel, GitHub Pages,
Cloudflare Pages. All of them auto-build Astro repos with zero config.

## How content works

Guides live at:

```
src/content/guides/<game>/<map>/<slug>.md
```

For example: `src/content/guides/bo3/der-eisendrache/easter-egg.md`.

Each file starts with frontmatter:

```markdown
---
title: "My Brother's Keeper — main quest"
game: bo3                # game id from src/data/games.ts
map: der-eisendrache     # map id from src/data/games.ts
type: easter-egg         # map-guide | easter-egg | high-round | relic
author: "YourName"
updated: 2026-08-19
summary: "One-line description shown on listing pages."
youtube:                 # optional — embedded at the top of the guide
  - "https://www.youtube.com/watch?v=XXXXXXXXXXX"
tags: ["solo-friendly"]  # optional
---

## Your guide content

Normal markdown from here down.
```

Frontmatter is validated at build time — a typo'd game or map id fails the build
with a clear error message instead of silently disappearing.

### Guide type rules

- **map-guide**, **easter-egg**, and **relic** — one canonical guide per map. Name
  the files `map-guide.md`, `easter-egg.md`, and `relic.md`. Updates to these come
  in as **change requests** (see below), which you apply as edits to the existing
  file — never as competing files.
- **high-round** — as many as people submit. One file per strategy, any slug.

### Adding a map or game

Edit `src/data/games.ts`. That file is the single source of truth — add the map
there and its page, empty-state slots, and submit-form option all appear
automatically.

## How submissions work

The `/submit` page is a form that generates a finished, valid markdown file.
Contributors fill it out and either:

1. **Open a pre-filled GitHub issue** containing the file (one click, needs a GitHub
   account), or
2. **Copy the markdown** and send it to you however you accept it (Discord, email…).

You review the submission, drop the file into `src/content/guides/`, and redeploy.
You stay the curator — nothing goes live without you committing it.

### Change requests

The `/submit` page has a second mode: **Change request**. It's for the canonical
guide types (easter egg, relic, map guide) — instead of writing a competing guide,
a reader says *"Step 3 is wrong, here's how it's actually done"*. The form generates
a structured request (map, guide, requester, description) that arrives the same two
ways: pre-filled GitHub issue or copy-paste. You make the edit, bump the `updated`
date, and redeploy. Every guide page and every canonical slot on map pages links
straight into this mode with the guide pre-selected.

**To enable the GitHub issue button:** push this project to a GitHub repo, then set
`repoUrl` in [`src/data/site.ts`](src/data/site.ts). The site name and tagline live
in the same file.

## Later, when you outgrow this

If submission volume ever justifies real accounts/moderation, the markdown corpus
ports cleanly into anything — that's the point of keeping guides as plain files.

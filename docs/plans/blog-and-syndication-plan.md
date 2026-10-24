# Plan: on-site blog + syndication (POSSE) for mnemonica.ai

Status: not started. Written as a handoff for an implementing agent.

Repo: `/Users/raulpino/repos/mia/mnemonica-ai` (Next.js 16.3.8 App Router, React 19, Tailwind 4, Node 26, yarn).
**Read `AGENTS.md` first**: this Next version has breaking changes. Read the relevant guides in
`node_modules/next/dist/docs/` before you write route, metadata or sitemap code (paths are listed below).

## Decision already made (do not reopen)

The team has three dormant external blogs:
- Substack: https://mnemonicaai.substack.com/
- dev.to: https://dev.to/mnemonicaai
- Medium: https://medium.com/@mnemonica-ai

Chosen approach: **POSSE**. mnemonica.ai is the canonical home of every new post, and the external blogs
receive copies that point back to it. The two existing posts are copied onto the site as the first posts (see step 0).

Also decided:
- **Every post is bilingual**: `en.md` and `es.md` are both required, and the build fails if one is missing.
- **Byline is the company**: the author is always the `mnemonica.ai` Organization, with no per-post author field.

| Platform | How a post gets there | Canonical back to mnemonica.ai |
|---|---|---|
| dev.to | Script that calls the Forem API (`POST/PUT https://dev.to/api/articles`, `api-key` header) | Yes, through `canonical_url` |
| Medium | Manual: Medium's "Import a story" tool (medium.com/p/import) | Yes, the import sets it automatically |
| Substack | Manual: a short newsletter post (excerpt + "read the full post on mnemonica.ai") | Not supported, so never paste the full text |

Medium's public API is not supported for new integrations (verify if in doubt) and Substack has no publishing API. Do not build automation for either.

## Current state

- Uncommitted: the Substack, dev.to and Medium blogs are now in the Organization `sameAs` (`profile: true` on
  their `articles` entries, read in `app/[lang]/layout.tsx`). Substack, dev.to and Medium cards were also added to the homepage "Writing" slider (EN + ES),
  in `app/_data.ts` (`articles`) and `app/_dict.ts` (`articles.items`). `tsc` and `eslint` pass, but nobody
  has checked them in a browser yet. They also feed `llms.txt` automatically through `app/_llms.ts`.
- Untracked: `docs/plans/future-development-plan.md` (moved there, since all plans live in `docs/plans/`).
  This blog is its **Phase 4: Content and SEO Depth**.
  Read the "Phase 4", "Internal Linking" and "Content Guidelines" sections there. Add a Blog checklist to its
  TODO section and tick items off as they land, following the style of the existing Phase 1 checklist.
- Ask the user before committing. They have not asked for commits yet.

## Patterns to copy (existing code)

- Localized subpage: `app/[lang]/[slug]/page.tsx`. It shows `dynamicParams = false` +
  `generateStaticParams`, a `resolve()` helper that 404s, `generateMetadata` with canonical + hreflang
  (+ `x-default`), reuse of `/${locale}/opengraph-image`, JSON-LD `@graph` with `BreadcrumbList`, and
  `GridFloor`/`Nav`/`LangSwitch`/`Contact`/`Footer` page chrome.
- A static segment `app/[lang]/blog/` takes precedence over the dynamic `app/[lang]/[slug]/`, so there is no conflict.
- Flat-file route handler: `app/llms.txt/route.ts` (`dynamic = "force-static"`).
- Sitemap: `app/sitemap.ts`. Its `entries()` helper builds per-locale alternates. It deliberately omits
  `lastModified`, but blog posts have real dates, so set it from the post's `updated ?? date`.
- `proxy.ts`: its matcher skips any path containing a dot, so `/en/feed.xml` is never redirected. Paths without
  a locale get redirected to `/{locale}/…`.
- `LangSwitch` takes `paths: Record<Locale, string>`. Every post is bilingual, so pass the two localized post paths.
- Code style: the "ponytail" convention applies. Use the fewest files and dependencies, and add a
  `// ponytail:` comment wherever a simplification is deliberate. Inline styles + a few CSS classes
  in `app/globals.css` are the norm. Copy lives in `app/_dict.ts`, data lives in `app/_data.ts`.

Next docs to read:
- `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-static-params.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md`
- `node_modules/next/dist/docs/01-app/02-guides/json-ld.md`
- `node_modules/next/dist/docs/01-app/02-guides/mdx.md` (only to confirm that MDX is unnecessary here)

## Implementation plan

### 0. First posts = the existing external posts

The same two posts exist on all three platforms (checked 2026-10-06):

| Date | Title | dev.to id | Other copies |
|---|---|---|---|
| 2026-02-28 | Introducing DeepPress: Access WordPress sites from your chatbot | 3296702 | [Substack](https://mnemonicaai.substack.com/p/introducing-deeppress-register-and), [Medium](https://mnemonica-ai.medium.com/introducing-deeppress-access-wordpress-sites-from-your-chatbot-856a39e3f09d) |
| 2025-09-30 | Introducing MetaPrompt: Write, Test, and Use Context in Cursor | 2880628 | [Substack](https://mnemonicaai.substack.com/p/introducing-metaprompt-write-test), [Medium](https://mnemonica-ai.medium.com/introducing-metaprompt-write-test-and-use-context-in-cursor-48cf6975d74e) |

Re-list the posts before you start, in case new ones appeared:
`curl -s 'https://dev.to/api/articles?username=mnemonicaai&per_page=100'`, plus the RSS feeds at
`https://mnemonicaai.substack.com/feed` and `https://medium.com/feed/@mnemonica-ai`.

Import steps:
- Get the source Markdown from the dev.to API: `GET https://dev.to/api/articles/<id>` → `body_markdown`.
  It is public and needs no key. The Substack and Medium copies are only for cross-checking.
- Download every image the post uses into `public/blog/<id>/` and point the Markdown at those copies, so the
  site doesn't depend on the dev.to CDN.
- Front matter: `date` = the original publish date above. Set `devto_id` in `en.md` to the existing dev.to id.
- Write a Spanish translation (`es.md`) with a localized slug. Keep it natural Spanish, not literal
  (see "Content Guidelines" in `docs/plans/future-development-plan.md`). The user does not need to review it.
- `app:` links: DeepPress → `DeepPress`. MetaPrompt → `Prompt`, because they are the same product (prompt.mnemonica.ai).
  Keep the MetaPrompt title and text as they are. Prompt will be retired soon, and the loader throws on an
  unknown `app:` name, so whoever removes it from `apps` must also drop that line from the post.
- **Point the old copies back at the site** once the site is deployed:
  - dev.to: run the step 5 script for each post. Because `devto_id` is already set, it updates the existing
    article (PUT) with `canonical_url` = the new mnemonica.ai URL.
  - Medium: in each story's settings, set the canonical link ("originally published elsewhere") to the
    mnemonica.ai URL. This is manual.
  - Substack: has no canonical setting, so leave those posts as they are.

### 1. Content model

```
content/blog/<id>/en.md
content/blog/<id>/es.md      # required: every post is bilingual
```

`<id>` is the stable key that pairs translations. Front matter is a flat `key: value` subset (no YAML dependency):

```
---
title: How to red-team an AI chatbot before launch
description: One-sentence summary (used for meta description, RSS, dev.to description, Substack excerpt).
slug: red-team-ai-chatbot        # localized slug, like the service slugs
date: 2026-10-10
updated: 2026-10-12              # optional
tags: ai, security, llm          # comma-separated; dev.to accepts max 4, lowercase alphanumerics
service: ai-red-teaming          # optional; EN slug of a service in app/_data.ts → "Related service" link
app: Le Confidant                # optional; name from `apps` → "Related work" link
draft: true                      # optional; drafts are excluded from build output
devto_id: 123456                 # written by the syndication script; do not hand-edit
---
Markdown body…
```

Validate at load time and **throw on bad input** so the build fails loudly. Required keys: title, description,
slug, date (ISO). Both `en.md` and `es.md` must exist for every `<id>`. Slugs must be unique per locale and must
not collide with service slugs.

### 2. Loader: `app/_blog.ts` (single module)

- `parseFrontMatter(src)` → `{ data, body }`. Pure function, no fs access. The dev.to script reuses it.
- `getPosts(locale)` reads `content/blog/*/<locale>.md` with `node:fs` at build time, drops drafts,
  sorts by date descending, and renders the body to HTML.
- `getPost(locale, slug)`, plus `translations(id)` → `Record<Locale, slug>` for hreflang and LangSwitch.
- Markdown → HTML: add **`marked`** (small, zero dependencies). This is the one justified new dependency.
  Do not hand-roll Markdown, and do not add MDX, a CMS, gray-matter, or a highlighter.
  `// ponytail:` note: raw HTML in Markdown passes through, which is fine because authors are repo committers.
- Leave one runnable check behind: `app/_blog.test.ts` using `node:test` + `node:assert`, run with
  `node --test app/_blog.test.ts` (Node 26 strips types natively). Cover parsing, the missing-key throw, the
  missing-translation throw, and tags splitting. Watch out: importing `./_blog.ts` with its extension may need `allowImportingTsExtensions`
  in tsconfig, or exclude the test from `tsc`. Pick whichever is smaller. Add a `"test"` script to package.json.

### 3. Routes

- `app/[lang]/blog/page.tsx` is the index: a list of posts (title, date, description). The two imported posts
  mean it never launches empty. Metadata includes canonical + hreflang + an RSS alternate (`alternates.types['application/rss+xml']`).
- `app/[lang]/blog/[slug]/page.tsx` is the post page. Use `dynamicParams = false` + `generateStaticParams` from
  `getPosts`. Metadata: title, description, canonical, hreflang for both locales (+ `x-default` → en), and `openGraph.type = "article"` with `publishedTime`/`modifiedTime`. Reuse the
  locale OG image the same way service pages do; per-post OG images come later.
  - JSON-LD `@graph`: `BlogPosting` (headline, description, datePublished, dateModified, inLanguage,
    author and publisher both the `mnemonica.ai` Organization, mainEntityOfPage, url) + `BreadcrumbList` (home → blog → post).
    Escape `<` as `<` in the stringified JSON, because post text is involved.
  - Footer of the article: link to the related service page (`service`) and the related app (`app`), then `<Contact>`.
    This internal linking is the SEO point of the whole exercise.
- `app/[lang]/feed.xml/route.ts` is an RSS 2.0 feed built as a string (no dependency), `force-static`,
  `generateStaticParams` over locales, XML-escaped, with `<atom:link rel="self">`. Items carry title, link,
  guid, pubDate and description.
- Prose styling: one `.prose` block in `app/globals.css` (h2/h3, p, ul/ol, a, blockquote, code, pre, img)
  that matches the existing palette (`#f3f1fa` text, `#b9b2cf` body, `#a78bfa` accent).
  Do not add `@tailwindcss/typography`.

### 4. Wire-up

- `app/sitemap.ts`: add the blog index per locale + each post (`lastModified` = updated ?? date, with both locale alternates).
- `app/_components/Nav.tsx` + `nav.links` in `_dict.ts`: add a "blog" link → `/${lang}/blog`.
- Homepage "Writing" slider: make the **first** card the on-site blog (`/${lang}/blog`). The slider currently
  forces `target="_blank"` on every card, so open internal links in the same tab.
- `app/_llms.ts`: list posts (or at least the blog index) under Articles.

### 5. dev.to syndication script: `scripts/syndicate-devto.ts`

Run with `node scripts/syndicate-devto.ts <id> [--publish]`, with the key in env `DEVTO_API_KEY`
(never commit it; document it in `docs/development.md`).

- Read `content/blog/<id>/en.md` and reuse `parseFrontMatter`. dev.to gets English only, since the ES version stays on
  mnemonica.ai.
- Rewrite relative links/images in the body to absolute `https://mnemonica.ai/...` URLs.
- Append a footer line: "Originally published at https://mnemonica.ai/en/blog/<slug>".
- Payload: `{ article: { title, body_markdown, published, description, tags (≤4), canonical_url } }`.
  Use `canonical_url` = the post URL. That is the requirement that matters.
- Use POST when `devto_id` is absent, and PUT `/api/articles/{devto_id}` when present. Write the returned id back into the
  front matter so reruns update the post instead of duplicating it.
- Default to `published: false` (a draft on dev.to), so the user can review it there. `--publish` sets it to true.
- Fail clearly on non-2xx and print the response body. Use stdlib `fetch` only, with no SDK.
- Only run against the real API when the user explicitly asks. It is outward-facing.

### 6. Publishing checklist: `docs/publishing.md` (short)

1. Write `content/blog/<id>/en.md` and `es.md` (both required), open a PR, and deploy.
2. `node scripts/syndicate-devto.ts <id>` → review the draft on dev.to → rerun with `--publish`.
3. Medium: medium.com/p/import → paste the mnemonica.ai URL → publish (canonical is set automatically).
4. Substack: new post with the title, the `description` as a 1–2 paragraph excerpt, and a "Read the full post" link. Send it as the newsletter.

Link this file from `docs/development.md`.

### 7. Verification

- `yarn lint`, `npx tsc --noEmit`, `node --test app/_blog.test.ts`, `yarn build`. Confirm the build lists the
  `/en/blog/...`, `/es/blog/...` and `/[lang]/feed.xml` routes as static.
- `yarn dev` and check in a browser at desktop and mobile widths: the blog index, both imported posts in EN and ES
  (images load from `public/blog/`), LangSwitch on a post, Nav, the slider's new first card, `/en/feed.xml`, `/sitemap.xml`, and a 404 for an unknown slug.
- Validate the post JSON-LD (Rich Results Test or schema.org validator) and the feed (W3C feed validator) if
  you have network access. Otherwise eyeball them.
- Visual QA of the existing slider and service pages is also still pending in `docs/plans/future-development-plan.md`. Do it in the same pass.

## Out of scope (skip and name it in the PR)

Tags/category pages, pagination, search, comments, syntax highlighting, per-post OG images, RSS
auto-import on dev.to (the script replaces it), and any Medium/Substack automation. Add them only when the post
count or the user asks for them.

## Open questions for the user

None. All decisions are recorded above.

## Suggested skills

- `ponytail:ponytail`: keep the implementation minimal, in line with the repo's existing `ponytail:` conventions.
- `run`: launch the dev server and check the pages in a browser (step 7).
- `code-review` (medium) and `security-review`: run them before handing back. The focus areas are JSON-LD/RSS escaping and the
  handling of the API key in the dev.to script.
- `to-issues`: only if the user wants this split into tracker issues instead of one PR.

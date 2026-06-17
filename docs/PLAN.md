# Build Plan — mnemonica.ai Landing Page

Source of truth: [docs/design/README.md](design/README.md). Stack as-found: Next 16 App Router (`app/`, no `src/`), React 19, Tailwind v4 (CSS-first `@theme` in `app/globals.css`). Dark-only, single route `/`.

**Decisions (ponytail):**
- **Skip shadcn/ui.** 3 pill buttons = plain `<a>` + Tailwind. Add only if a real shadcn primitive is needed later.
- **No new deps.** Fonts via `next/font/google` (built in), grid-floor via `useEffect` + rAF (no lib).
- **Data, not markup.** Apps / Services / People / Socials are arrays mapped in components — no copy-paste card blocks.
- `AGENTS.md`: this is **not stock Next** — read `node_modules/next/dist/docs/` for `next/font`, `Image`, metadata before using each.

File layout (lean — section components colocated, page composes them):
```
app/layout.tsx            fonts + metadata + html/body
app/globals.css           tokens, keyframes, base
app/page.tsx              composes sections
app/_components/          Nav, Hero, Apps, Services, About, Contact, Footer, Divider, GridFloor, Logo
app/_data.ts             apps[], services[], people[], socials[] + shared links
public/logo.jpg           moved from docs/design/assets/
```

---

## Phase 0 — Foundation
- [x] Move `docs/design/assets/logo.jpg` → `public/logo.jpg`
- [x] `app/_data.ts`: typeform URL const, apps[], services[], people[], socials[] (from README tables)
- [x] Read `node_modules/next/dist/docs/` for `next/font/google` + metadata API (not stock Next)

## Phase 1 — Tokens & global CSS ([globals.css](app/globals.css))
- [x] Replace CNA `:root` vars with design tokens (bg `#0a0612`, text/accent palette from Design Tokens)
- [x] `@theme` mappings for colors used as Tailwind utilities; keep raw hex where one-off
- [x] `body { background:#0a0612 }`, dark-only (drop `prefers-color-scheme` light branch)
- [x] `html { scroll-behavior:smooth }`
- [x] Keyframes: `gridMove`, `glowPulse`, `floatSlow`, `heroIn`
- [x] `@media (prefers-reduced-motion)` → disable `gridMove`/`glowPulse`/`floatSlow`

## Phase 2 — Layout & fonts ([layout.tsx](app/layout.tsx))
- [x] Swap Geist → `Space_Grotesk` (400/500/600/700), `DM_Sans` (400/500), `Space_Mono` (400/700) via `next/font/google`, expose as CSS vars
- [x] Wire font vars into `@theme` (`--font-sans`=DM Sans body, plus grotesk/mono)
- [x] Real metadata (title/description for mnemonica.ai)
- [x] `lang="en"`, dark body, content max-width 1140px + gutter `clamp(16px,4vw,40px)` as a shared wrapper class/util

## Phase 3 — Shared pieces
- [x] `Logo` component: img with `mix-blend-mode:screen` + radial-gradient mask, radius prop (nav 8 / hero 18 / footer 7), optional hero glow+animations
- [x] `Divider` component: neon gradient line (README §"Section Divider")
- [x] Wordmark helper: "mnemonica" + `.ai` in cyan `#38bdf8` (reused nav/hero/footer)

## Phase 4 — Sections (top → bottom)
- [x] **Nav** (client): fixed, blur bg, logo+wordmark, links (apps/services/about) + CTA; `<820px` hamburger toggling mobile panel (`menuOpen` state, link click closes)
- [x] **Hero**: large logo (float+glow), eyebrow, H1, subhead, 2 buttons; staggered `heroIn` entrance (0/.05/.12/.2s)
- [x] **Apps** `#apps`: `01 / PORTFOLIO` heading + `auto-fit minmax(290px,1fr)` grid; card maps `apps[]` with per-accent monogram/border/gradient/pills; whole card `<a target="_blank" rel="noopener">`
- [x] `<Divider/>`
- [x] **Services** `#services`: `02 / SERVICES` + intro + 3 cards from `services[]`
- [x] `<Divider/>`
- [x] **About** `#about`: `03 / ABOUT` + intro + 2 person `<a>` cards from `people[]` (gradient avatar initials)
- [x] `<Divider/>`
- [x] **Contact** `#contact`: `04 / CONTACT` H2 + paragraph + CTA + social row from `socials[]`
- [x] **Footer**: top border, small logo+wordmark, copyright mono line

## Phase 5 — Grid Floor (signature interaction)
- [x] `GridFloor` (client): fixed wrapper `z-0 pointer-events-none`, content `z-1`
- [x] Horizon line (always visible) + perspective grid layer (`perspective(340px) rotateX(64deg)`, 78px cells, downward fade mask, `gridMove`)
- [x] rAF loop in `useEffect`: `top=min(center, appsTop)`, `fade=clamp((top-64)/(center-64),0,1)`, BASE 0.6; update state only when `top` Δ>0.5px; `cancelAnimationFrame` on cleanup
- [x] Respect `prefers-reduced-motion`
- [x] **Skip** `showScanlines` / `glowIntensity` / `showGridFloor` toggles — prototype tweak props, YAGNI. Add if a real toggle UI is wanted.

## Phase 6 — Polish & verify
- [x] Hover states: card lift + border brighten, button glow brighten, ~150–200ms ease
- [x] All outbound links `target="_blank" rel="noopener"`; in-page anchors scroll smoothly
- [x] Responsive pass at 820px breakpoint (nav, grids reflow)
- [x] `yarn lint` clean
- [x] `yarn build` passes
- [x] Manual check `yarn dev`: nav blur, hero entrance, grid-floor scroll behavior, mobile menu, all links resolve

---

### Open questions (from README, don't block build)
- "Prompt" app copy is placeholder
- Both roles "Co-founder" pending real titles
- Consider transparent PNG/SVG logo later to drop the blend-mode hack

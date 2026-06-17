# Handoff: mnemonica.ai Landing Page

## Overview
Single-page marketing site for **mnemonica.ai**, a small indie AI lab run by two brothers (Raul & Jose Pino). The page presents a portfolio of shipped apps, three consulting verticals, an about section, and a contact CTA. Aesthetic: **refined vaporwave / synthwave** — dark indigo background, purple + cyan accents, a perspective "grid floor", subtle neon glows, and monospace accents — but kept clean and product-company-like (not a literal retro arcade).

## About the Design Files
The files in this bundle are **design references created in HTML** (a prototype showing intended look and behavior) — **not production code to copy directly**. The HTML uses a small in-house templating runtime (`*.dc.html` / `support.js`); ignore that machinery. Your task is to **recreate this design in a clean Next.js project** using its conventions: React function components, your chosen styling layer (Tailwind and/or CSS Modules), and (per the user's stated stack preference) **shadcn/ui** primitives where they fit (Button, etc.). Treat the HTML as the source of truth for layout, spacing, color, type and motion.

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, and interactions are final. Recreate the UI faithfully. Exact hex values, font sizes and the scroll behavior are specified below.

---

## Tech Recommendations (target: clean Next.js)
- **Next.js App Router**, single route `/` (one page). No backend needed — all CTAs are external links.
- **Fonts** via `next/font/google`: `Space_Grotesk` (headings/UI), `DM_Sans` (body), `Space_Mono` (labels/eyebrows/links). Load weights listed in Design Tokens.
- **shadcn/ui**: use the `Button` component for the "Work with us" / CTA buttons; everything else is plain layout.
- The page is **dark-only**. Set the page background to `#0a0612` globally.
- All outbound links open in a new tab (`target="_blank" rel="noopener"`).

---

## Screens / Views
There is **one screen** (a scrolling landing page). Sticky nav on top, then five stacked sections separated by neon dividers, then a footer. Max content width **1140px**, centered, with horizontal padding `clamp(16px, 4vw, 40px)`.

### 1. Sticky Nav
- **Position**: fixed top, full width, `z-index: 50`. Height ~62px.
- **Background**: `rgba(10,6,18,0.72)` + `backdrop-filter: blur(14px)`. Bottom border `1px solid rgba(167,139,250,0.14)`.
- **Padding**: `14px clamp(16px,4vw,40px)`. Flex row, space-between, `gap:16px`.
- **Left (logo lockup)**: logo image 34×34 + wordmark. Wordmark: Space Grotesk 700, 19px, letter-spacing −0.02em, color `#ece9f5`, with `.ai` in `#38bdf8`. See **Logo treatment** below.
- **Right (links)**: `apps`, `services`, `about` — Space Mono 13px, color `#b3acc6`, letter-spacing 0.02em, anchor to `#apps` / `#services` / `#about`. Then a **CTA button**: "Work with us" → `https://991taq00kun.typeform.com/to/HHCkae8e`. Button: Space Grotesk 600, 14px, text `#0a0612`, background `#38bdf8`, padding `9px 18px`, `border-radius:999px`, shadow `0 0 0 1px rgba(56,189,248,0.5), 0 6px 20px -8px rgba(56,189,248,0.8)`. Links row `gap:30px`.
- **Responsive**: below **820px**, hide the links row and show a hamburger button (40×40, `border-radius:10px`, bg `rgba(167,139,250,0.1)`, border `rgba(167,139,250,0.22)`, three 18×2px bars). Tapping toggles a mobile menu panel below the nav (`top:64px`, bg `rgba(12,8,22,0.96)`, blur, the same links stacked + CTA full-width). Clicking a link closes the menu.

### 2. Hero
- Centered column, text-align center, `max-width:980px`, padding `clamp(130px,18vh,200px) 24px clamp(80px,12vh,140px)`.
- **Logo** (large): `clamp(96px,16vw,140px)` square. Wrapper has `floatSlow` animation; image has glow + `glowPulse` animation. See **Logo treatment**.
- **Eyebrow**: "Indie AI Lab" — Space Mono 12px, letter-spacing 0.34em, uppercase, color `#8b80b0`, `margin-top:30px`.
- **H1**: "mnemonica.ai" (`.ai` in `#38bdf8`) — Space Grotesk 700, `clamp(46px,9vw,104px)`, line-height 0.96, letter-spacing −0.035em, color `#f3f1fa`.
- **Subhead**: "Small apps, big imagination. We design, ship and harden focused AI products — and help teams become AI-native." — `clamp(18px,2.4vw,23px)`, line-height 1.5, color `#c5bfd8`, `max-width:600px`, `text-wrap:pretty`.
- **Buttons** (flex, centered, `gap:14px`, `margin-top:38px`):
  - Primary "Explore our apps" → `#apps`. Same fill style as nav CTA but padding `14px 26px`, 15px.
  - Secondary "Work with us →" → typeform link. Text `#ece9f5`, bg `rgba(167,139,250,0.08)`, border `1px solid rgba(167,139,250,0.32)`, padding `14px 26px`, `border-radius:999px`.
- Entrance: each block fades/translates up (`heroIn`, see Animations), staggered 0 / 0.05 / 0.12 / 0.2s.

### 3. Apps (id `#apps`) — "01 / PORTFOLIO"
- Section heading row: an eyebrow `01 / PORTFOLIO` (Space Mono 12px, letter-spacing 0.22em, `#38bdf8`) on the same baseline as **H2** "Apps we've shipped" (Space Grotesk 700, `clamp(30px,5vw,50px)`, letter-spacing −0.03em, `#f3f1fa`). `gap:16px`, `flex-wrap`, `margin-bottom:36px`.
- **Card grid**: `display:grid; grid-template-columns: repeat(auto-fit, minmax(290px,1fr)); gap:20px`.
- Each card is an `<a>` (whole card clickable, new tab), `padding:26px`, `border-radius:18px`, vertical flex. Card has a per-app accent color used for: top-left **monogram chip** (46×46, `border-radius:12px`), the `↗ domain` label (always `#8b80b0`), the card background gradient `linear-gradient(180deg, <accent@0.07>, rgba(255,255,255,0.02))`, the border `1px solid <accent@0.22>`, and the tag pills.
- Card title: Space Grotesk 600, 21px, `#f3f1fa`, `margin-top:18px`. Body: 14.5px, line-height 1.55, `#b9b2cf`, `text-wrap:pretty`. Tag pills: Space Mono 11px, padding `4px 9px`, `border-radius:999px`, bg `<accent@0.1>`, border `<accent@0.25>`, accent text color; pill row `gap:8px`, `margin-top:18px`.

  | App | URL | Accent | Monogram | Tags | Copy |
  |---|---|---|---|---|---|
  | **Le Confidant** | https://leconfidant.ai/ | green `#34d399` (text `#6ee7b7`) | `Lc` | privacy-first · consumer · live | "Private, AI-powered insights from your WhatsApp chats — sentiment, engagement, relationship dynamics and red flags. Then chat with your Confidant to go deeper." |
  | **DeepPress** | https://deeppress.mnemonica.ai/ | cyan `#38bdf8` (text `#7dd3fc`) | `Dp` | mcp · infra · registry | "Talk to your sites. A public registry of WordPress, Ghost & Substack sites with Model Context Protocol support — connect AI agents and chatbots to your favorite publishing platforms." |
  | **Prompt** | https://prompt.mnemonica.ai/ | purple `#a78bfa` (text `#c4b5fd`) | `Pr` | llm · tooling | "A focused workspace for crafting, testing and managing prompts — iterate fast and keep your best prompts organized and reusable." |
  | **Oshepherd** | https://github.com/mnemonica-ai/oshepherd | amber `#fbbf24` (text `#fcd34d`) | `Os` | open source · python · llmops | "Open-source FastAPI service using Celery + Redis to orchestrate multiple Ollama servers as workers. Point any Ollama client at a single endpoint." |

  > Note: the **Prompt** copy is a placeholder pending confirmation of what that app does. Le Confidant's `↗` label reads `leconfidant.ai`, DeepPress `deeppress.mnemonica.ai`, Prompt `prompt.mnemonica.ai`, Oshepherd `github`.

### Section Divider (between every section below the Apps grid)
A standalone, reusable element: a full-width 1px horizontal neon line, centered (`max-width:1140px`, side padding `clamp(16px,4vw,40px)`, vertical padding `6px`). Line `background: linear-gradient(to right, transparent, rgba(56,189,248,0.4) 16%, rgba(167,139,250,0.6) 50%, rgba(56,189,248,0.4) 84%, transparent)` with `box-shadow: 0 0 16px 1px rgba(124,92,246,0.3)`. **No text, no markers.** Build as a `<Divider />` component; placed after Apps, after Services, and after About.

### 4. Services (id `#services`) — "02 / SERVICES"
- Eyebrow + H2 "How we work with you" (same heading pattern as Apps). Then an intro paragraph: "Three verticals, one team. We move from idea to production — and stay to harden it." (16px, `#b9b2cf`, `max-width:560px`, `margin-bottom:38px`).
- **Grid**: `repeat(auto-fit, minmax(280px,1fr)); gap:20px`. Three cards, each `padding:30px 26px`, `border-radius:18px`, bg `rgba(255,255,255,0.025)`, border `1px solid rgba(167,139,250,0.16)`, vertical flex.
- Card structure: a number (Space Mono 13px, `#38bdf8`), title (Space Grotesk 600, 22px, `#f3f1fa`, `margin-top:14px`), a mono kicker (Space Mono 12px, letter-spacing 0.04em, `#8b80b0`, uppercase), body (15px, line-height 1.6, `#b9b2cf`, `margin-top:16px`).

  | # | Title | Kicker | Body |
  |---|---|---|---|
  | 01 | AI Products | PRODUCT STRATEGY | "From idea to shipped product. We scope, prototype and launch focused AI apps that people actually use — like the ones in our portfolio." |
  | 02 | AI Cybersecurity | RED TEAMING | "We stress-test your models and AI systems — adversarial prompts, jailbreaks, data leakage and abuse paths — before someone else does." |
  | 03 | AI Integration | GO AI-NATIVE | "We help teams become AI-native: the workflows, tooling and culture that turn AI from a novelty into a daily multiplier across the company." |

### 5. About (id `#about`) — "03 / ABOUT"
- Eyebrow + H2 "Built by two brothers". Intro: "Mnemonica is a small indie lab — just us. We build the products we wish existed, ship them fast, and bring that same hands-on approach to client work." (16px, line-height 1.6, `#b9b2cf`, `max-width:600px`, `margin-bottom:38px`).
- **Grid**: `repeat(auto-fit, minmax(260px,1fr)); gap:20px`. Two person cards, each an `<a>` (new tab), flex row, `gap:18px`, `padding:22px`, `border-radius:18px`, bg `rgba(255,255,255,0.025)`, border `rgba(167,139,250,0.16)`.
  - Avatar: 60×60 circle, initials (Space Grotesk 700, 20px, text `#0a0612`), gradient fill.
  - Text column: name (Space Grotesk 600, 18px, `#f3f1fa`), role (14px, `#b9b2cf`), handle (Space Mono 12px, `#38bdf8`).

  | Initials | Name | Role | Handle | Link | Avatar gradient |
  |---|---|---|---|---|---|
  | RP | Raul Pino | Co-founder | `in/p1nox ↗` | https://www.linkedin.com/in/p1nox/ | `linear-gradient(135deg,#38bdf8,#a78bfa)` |
  | JP | Jose Pino | Co-founder | `in/jose-pino ↗` | https://www.linkedin.com/in/jos%C3%A9-pino-carrasquero/ | `linear-gradient(135deg,#a78bfa,#38bdf8)` |

  > Roles are both "Co-founder" pending confirmation of specific titles.

### 6. Contact (id `#contact`) — "04 / CONTACT"
- Centered, `max-width:900px`, `text-align:center`, padding `clamp(70px,11vh,130px) … clamp(40px,6vh,60px)`.
- Eyebrow `04 / CONTACT`. **H2** "Let's build something." — Space Grotesk 700, `clamp(34px,6vw,62px)`, line-height 1.0, letter-spacing −0.035em, `#f3f1fa`.
- Paragraph: "Have a product, an idea, or an AI system that needs hardening? Tell us about it — we read every message." (17px, line-height 1.6, `#c5bfd8`, `max-width:540px`, centered).
- **CTA button** "Start a conversation" → typeform link. Fill style, `padding:16px 32px`, 16px, shadow `0 0 0 1px rgba(56,189,248,0.5), 0 12px 40px -10px rgba(56,189,248,0.9)`, `margin-top:32px`.
- **Social row** (flex, centered, wrap, `gap:10px 26px`, `margin-top:44px`): Space Mono 13px, `#b3acc6`, new tab.
  - X / Twitter → https://x.com/mnemonica_ai
  - Instagram → https://www.instagram.com/mnemonica_ai
  - Discord → https://discord.com/invite/99xEZmZYt9
  - LinkedIn → https://www.linkedin.com/company/mnemonica-ai
  - GitHub → https://github.com/mnemonica-ai

### 7. Footer
- Top border `1px solid rgba(167,139,250,0.14)`, `max-width:1140px`, `padding:28px clamp(16px,4vw,40px)`, `margin-top:40px`. Flex row, space-between, wrap, `gap:14px`.
- Left: small logo (26×26) + wordmark (Space Grotesk 700, 15px, `.ai` cyan).
- Right: "© 2026 mnemonica.ai · built with ☕ & big imagination" — Space Mono 12px, `#6f6790`.

---

## Logo treatment (important)
The asset (`assets/logo.jpg`) is a vaporwave sun on a near-black square. To remove the visible square, render the `<img>` with **`mix-blend-mode: screen`** over the dark background **and** a circular **mask** so the edges dissolve:
```css
mix-blend-mode: screen;
-webkit-mask-image: radial-gradient(circle at 50% 50%, #000 56%, transparent 74%);
        mask-image: radial-gradient(circle at 50% 50%, #000 56%, transparent 74%);
border-radius: 8px; /* nav 8 / hero 18 / footer 7 */
```
The **hero** logo additionally has `filter: drop-shadow(0 0 26px rgba(124,92,246,0.6))` and the `glowPulse` animation; its wrapper has `floatSlow`. `mix-blend-mode: screen` only looks correct on the dark `#0a0612` background — keep the page dark.

---

## Signature element: the Grid Floor + clamped horizon
A fixed, full-width vaporwave perspective grid pinned behind the content (`z-index:0`, `pointer-events:none`, content sits at `z-index:1`). It has two parts inside a fixed wrapper:
1. **Horizon line** — a 1px gradient line (`linear-gradient(to right, transparent, rgba(56,189,248,0.7), rgba(167,92,246,0.7), transparent)`, `box-shadow: 0 0 22px 3px rgba(124,92,246,0.5)`) at the **top** of the wrapper. **Always visible.**
2. **Perspective grid** — below the line, a layer with `transform: perspective(340px) rotateX(64deg); transform-origin: top center`, two repeating-linear-gradients (39px… actually `78px` cell, line color `rgba(139,92,246,0.42)`), masked to fade downward (`linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 42%, transparent 88%)`), animated via `gridMove`. **This grid is the only part toggled by the `showGridFloor` flag** — when off, just the line shows.

### Scroll behavior (the key interaction)
The fixed wrapper's `top` and `opacity` are driven by scroll, via a `requestAnimationFrame` loop (robust regardless of which element scrolls):
```
const center = window.innerHeight * 0.52;   // resting position (~middle of hero)
const navH   = 64;
const appsTop = document.getElementById('apps').getBoundingClientRect().top; // viewport-relative
const top  = Math.min(center, appsTop);
const fade = clamp((top - navH) / (center - navH), 0, 1);
wrapper.style.top     = top + 'px';
wrapper.style.opacity = (BASE * fade);       // BASE = 0.6 (or 0.95 if "Strong" glow)
```
Effect: while the hero is in view the horizon sits at ~52vh (centered). As you scroll down, once the **top of the Apps section** rises above 52vh, the horizon **sticks to the top of the Apps section** and rides up with it, fading to 0 — so it never floats over the body content and never hurts readability. In React, implement with `useEffect` starting a rAF loop on mount and `cancelAnimationFrame` on cleanup; store `{top, opacity}` in state (only update when `top` changes by >0.5px to avoid churn). Recommend respecting `prefers-reduced-motion` by disabling `gridMove` / `glowPulse`.

Wrapper height `64vh`. Grid layer height `70vh`, `left:-100%; right:-100%` (overscan so the tilt fills width).

---

## Interactions & Behavior
- **Smooth scroll** for in-page anchors (`html { scroll-behavior: smooth }`).
- **Nav**: fixed, translucent, blurred. Mobile (<820px) hamburger toggles a dropdown menu; selecting an item closes it.
- **Grid floor**: rAF-driven clamped horizon described above.
- **Hover states** (add, matching the aesthetic — the prototype is mostly static): suggest lifting app/person cards slightly and brightening their border on hover; brightening button glow on hover. Keep transitions ~150–200ms ease.
- **Cards** are entirely clickable links opening in a new tab.
- No forms, no data fetching, no auth — every CTA is an external link.

## State Management
- `menuOpen: boolean` — mobile nav menu.
- `{ lineY: number|null, lineFade: number }` — grid-floor horizon position/opacity, updated each animation frame.
- `showGridFloor: boolean` (default true), `showScanlines: boolean` (default false), `glowIntensity: 'Subtle'|'Strong'` (default 'Subtle') — these were prototype "tweak" props. Optional in production; if you keep them, `glowIntensity` maps to grid base opacity 0.6 (Subtle) / 0.95 (Strong). `showScanlines` overlays `repeating-linear-gradient(to bottom, rgba(255,255,255,0.025) 0 1px, transparent 1px 3px)` with `mix-blend-mode:overlay` over the whole page at `z-index:40`.

## Design Tokens
**Colors**
- Background base: `#0a0612`; raised panel tints: `rgba(255,255,255,0.025)`.
- Text: primary `#f3f1fa`, body `#c5bfd8` / `#b9b2cf`, muted `#b3acc6`, dim `#8b80b0`, faint `#6f6790`; near-white `#ece9f5`.
- Cyan accent: `#38bdf8` (light `#7dd3fc`). Purple accents: `#a78bfa` / `#c4b5fd` / `#8b5cf6` / glow `#7c5cf6` (`rgba(124,92,246,*)`).
- Per-app accents: green `#34d399`/`#6ee7b7`, cyan `#38bdf8`/`#7dd3fc`, purple `#a78bfa`/`#c4b5fd`, amber `#fbbf24`/`#fcd34d`.
- Common borders: `rgba(167,139,250,0.14–0.16)`.

**Typography** — Space Grotesk (400/500/600/700) headings & UI; DM Sans (400/500) body; Space Mono (400/700) eyebrows, labels, links.
- H1 `clamp(46px,9vw,104px)`/0.96/−0.035em; Contact H2 `clamp(34px,6vw,62px)`/1.0; Section H2 `clamp(30px,5vw,50px)`/−0.03em; card title 21–22px; body 14.5–17px; eyebrow/label 11–13px with 0.04–0.34em tracking.

**Radius**: cards `18px`, chips/monograms `12px`, pills/buttons `999px`, nav logo `8px`, footer logo `7px`.
**Shadows / glow**: cyan button `0 6px 20px -8px rgba(56,189,248,0.8)` → up to `0 12px 40px -10px rgba(56,189,248,0.9)`; horizon line `0 0 22px 3px rgba(124,92,246,0.5)`; divider `0 0 16px 1px rgba(124,92,246,0.3)`.
**Layout**: content max-width `1140px`; gutters `clamp(16px,4vw,40px)`; grid gaps `20px`; breakpoint `820px`.

**Keyframes**
- `gridMove`: `background-position 0 0 → 0 80px`, 7s linear infinite.
- `glowPulse`: opacity 0.85↔1 & scale 1↔1.04, 5s ease-in-out infinite.
- `floatSlow`: translateY 0↔−8px, 6s ease-in-out infinite.
- `heroIn`: opacity 0→1 + translateY 18px→0, 0.7s ease (staggered).

## Assets
- `assets/logo.jpg` — the mnemonica.ai sun logo (vaporwave sun on dark square). Render with the screen-blend + circular-mask treatment above. This is the only image asset; everything else is CSS. Consider exporting a transparent PNG/SVG version later to drop the blend-mode hack.

## Files (in this bundle)
- `Mnemonica Landing.dc.html` — the full landing page prototype (all sections, nav, grid-floor logic).
- `Section Divider.dc.html` — the standalone neon divider component.
- `assets/logo.jpg` — logo asset.
- `support.js` — the prototype's templating runtime; **reference only, do not port.**

> The `.dc.html` files use `{{ }}` template holes and a `class Component extends DCLogic` block — these are prototype-runtime constructs. Read them for layout/values/logic intent; implement with idiomatic React/Next.

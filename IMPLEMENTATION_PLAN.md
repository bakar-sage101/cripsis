# Cripsis Website — Implementation Plan

**Status:** Awaiting approval · **Author:** Claude · **Date:** 2026-08-30

Goal: turn the approved static designs in `design/*.dc.html` into the real
**Next.js** marketing site in `apps/web`, using a proper App-Router structure,
reusable **React components**, and **Tailwind CSS** — plus fix the static image
handling and the failing GitHub Actions CI run.

Nothing in this document has been implemented yet. Implementation starts only
after you approve this file.

---

## 1. Objectives

1. Implement 6 marketing pages as real Next.js routes (Home, Platform, Pricing,
   About, Contact, Design Partners).
2. Follow idiomatic Next.js 15 App-Router structure with a clean component
   hierarchy (layout / ui primitives / page sections / content data).
3. Style everything with **Tailwind CSS**, driven by the existing brand tokens
   (no more page-length inline `style=""` blocks).
4. Fix static image handling — move `crt.png` into the app and serve it the
   Next.js way (`next/image`, from `public/`).
5. Make the site **responsive** (the current designs are desktop-only).
6. Fix the failing CI workflow so `main` goes green.
7. Keep `pnpm build`, `lint`, and `typecheck` passing at every step.

### Non-goals (out of scope for this pass)

- Wiring the site to the NestJS API (`apps/api`) — pages are static/marketing.
- A CMS, blog, or i18n.
- The legacy `Architecture.dc.html` / `Security.dc.html` drafts — per
  `design/README.md` their content was folded into Platform; we will **not**
  ship them as separate routes (Security stays as a footer link target we can
  add later).
- Real form submission on Contact (we'll build the UI; submission handler is a
  follow-up once the API contract exists).

---

## 2. Current-state analysis

| Area | Finding |
| --- | --- |
| `apps/web` | Next.js 15 (App Router), React 19. Only a placeholder `page.tsx`. `layout.tsx` already loads the 3 brand fonts via `next/font/google` as CSS variables (`--font-display/-sans/-mono`). `globals.css` already defines the brand tokens as CSS variables. |
| Styling today | **No Tailwind installed.** Designs use hand-written CSS classes (`.wrap`, `.tile`, `.btn`, `.kick`, …) + heavy inline styles. |
| Designs | 6 live pages, all standalone HTML authored on the Claude Design canvas. Each repeats its own nav + footer inline. Shared visual language across all pages (same tokens, same `.wrap` container = `max-width:1180px; padding:0 48px`). |
| Assets | **Exactly one image across all pages:** `design/crt.png` (820×711 RGBA, 185 KB), used only in the Home hero. Everything else (dots, rails, CRT glow, scanlines, gradients) is pure CSS. |
| Interactivity | All motion is **CSS-only** (keyframes: CRT flicker, blink cursor, halo pulse, rail "travel" light). No JS state needed → pages can be **Server Components**. The only client-side need is a **mobile nav toggle** we add for responsiveness. |
| Fonts | Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (mono). Already wired — Tailwind will just reference the existing CSS variables. |

### Reused visual patterns (→ these become components)

From class-frequency analysis across all 6 pages: `mono` (175×), `wrap` (57×),
`tile` (54×), `caret` (34×), `sub` (26×), `btn/btn-p/btn-g` (24×), `kick`
(23×), `card`, `fnum`, `node/nlabel/ndot/nsub/core` (the rail), `blink`,
`demo/demoh` (terminal cards). These map cleanly onto a small set of primitives.

---

## 3. Key decisions (please confirm in §11)

- **Tailwind v4** (current, CSS-first). It fits perfectly because our tokens are
  already CSS variables — we expose them to Tailwind via an `@theme` block in
  `globals.css` (e.g. `--color-bright`, `--color-bg-0`, `--font-display`), which
  makes `text-bright`, `bg-bg-0`, `font-display`, etc. real utilities. Uses
  `@tailwindcss/postcss` — no `tailwind.config.js` sprawl.
  - *Alternative if you prefer:* Tailwind v3 with a classic `tailwind.config.ts`.
    I recommend v4; say the word if you want v3.
- **Server Components by default.** Only `Header` (mobile menu) is a Client
  Component (`"use client"`).
- **Specialized animations stay in CSS** (`globals.css` under a Tailwind layer):
  CRT flicker, blink, halo, rail-travel. Porting these verbose keyframes into
  Tailwind config adds noise for no benefit. Tailwind handles layout, spacing,
  color, typography, hover states.
- **Content lives in typed data files** (`src/content/*`) so JSX stays about
  structure, not copy — feature tiles, FAQ, nav links, footer links, pricing
  tiers become arrays we map over.

---

## 4. Proposed folder structure

```
apps/web/
├─ public/
│  └─ images/
│     └─ crt.png                      # moved from design/, served statically
├─ postcss.config.mjs                 # NEW — @tailwindcss/postcss
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                   # fonts (exists) + <Header/> + <Footer/>
│  │  ├─ globals.css                  # tokens + @theme + Tailwind + keyframes
│  │  ├─ page.tsx                     # Home  (Main.dc.html)
│  │  ├─ platform/page.tsx            # Platform
│  │  ├─ pricing/page.tsx             # Pricing
│  │  ├─ about/page.tsx               # About
│  │  ├─ contact/page.tsx             # Contact
│  │  └─ design-partners/page.tsx     # Design Partners
│  │
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Header.tsx                # "use client" — top banner + nav + mobile menu
│  │  │  ├─ Footer.tsx
│  │  │  └─ Container.tsx             # the .wrap (max-w-[1180px])
│  │  ├─ ui/
│  │  │  ├─ Button.tsx                # variant: primary | ghost
│  │  │  ├─ Kicker.tsx                # "// the …" mono eyebrow
│  │  │  ├─ SectionHeading.tsx
│  │  │  ├─ Tile.tsx                  # numbered/plain feature card
│  │  │  ├─ Mono.tsx                  # mono-font inline text helper
│  │  │  └─ StatusLine.tsx            # "● system: nominal"
│  │  ├─ marketing/                   # reusable composite blocks
│  │  │  ├─ CRTMonitor.tsx            # crt.png + positioned live-terminal overlay
│  │  │  ├─ NodeRail.tsx              # the 5-node animated value rail
│  │  │  ├─ DemoCard.tsx              # terminal/"agent inquiry" cards
│  │  │  └─ Section.tsx               # <section> shell w/ bg + border variants
│  │  └─ sections/                    # page-specific composed sections
│  │     ├─ home/ (Hero, FeatureGrid, ThreePlanes, Learning, Contrast,
│  │     │        Economics, Faq, FinalCta)
│  │     ├─ platform/…
│  │     ├─ pricing/…
│  │     └─ …
│  ├─ content/
│  │  ├─ nav.ts                       # header + footer link data
│  │  ├─ home.ts                      # tiles, planes, faq copy
│  │  └─ pricing.ts                   # tiers, feature matrix
│  └─ lib/
│     └─ cn.ts                        # className merge helper (clsx/tailwind-merge)
```

Rationale: `layout/` = chrome, `ui/` = dumb primitives, `marketing/` = branded
composites reused across pages, `sections/` = page-specific arrangements,
`content/` = copy as data. This keeps each route file short and declarative.

---

## 5. Component inventory (design class → component)

| Design pattern | Component | Notes |
| --- | --- | --- |
| `.wrap` | `Container` | `mx-auto max-w-[1180px] px-12` |
| `.btn .btn-p` / `.btn-g` | `Button` | `variant="primary" \| "ghost"`, mono, hover glow |
| `.kick` | `Kicker` | mono eyebrow with `//` caret |
| `h2` + kicker block | `SectionHeading` | |
| `.tile` (+ `.fnum`) | `Tile` | optional number, hover lift |
| `.demo/.demoh` | `DemoCard` | terminal-style card w/ dot header |
| `.rail/.node/...` | `NodeRail` | data-driven 5 nodes, CSS animation |
| CRT hero | `CRTMonitor` | `next/image` + absolutely-positioned overlay |
| nav + banner | `Header` | sticky, responsive, mobile toggle |
| footer | `Footer` | link columns from `content/nav.ts` |

---

## 6. Routes (page-by-page)

| Route | Source | Sections |
| --- | --- | --- |
| `/` | `Main.dc.html` | Hero → NodeRail → 6 feature tiles → Three Planes → Active Learning → Contrast → Economics → FAQ → Final CTA |
| `/platform` | `Platform.dc.html` | port sections, reuse Tile/DemoCard/Section |
| `/pricing` | `Pricing.dc.html` | pricing tiers + feature matrix (data-driven) |
| `/about` | `About.dc.html` | |
| `/contact` | `Contact.dc.html` | form UI (no submit handler yet) |
| `/design-partners` | `DesignPartners.dc.html` | |

Nav/footer links currently point to `#`; they'll be wired to the real routes.

---

## 7. Design tokens → Tailwind

Tokens already exist in `globals.css`. Under Tailwind v4 we surface them via
`@theme` so they become utilities, single source of truth:

```css
@theme {
  --color-bg-0: #020608;  --color-bg-1: #040b10;  --color-bg-2: #07131a;
  --color-dim: #0c5f7d;   --color-mid: #16a9d6;    --color-bright: #68d8ff;
  --color-text-bright: #d9f5ff;
  --color-text-main: rgba(104,216,255,.88);
  --color-text-muted: #4fa9c8;
  --color-border: rgba(22,169,214,.22);
  --font-display: var(--font-display); /* from next/font */
  --font-sans:    var(--font-sans);
  --font-mono:    var(--font-mono);
}
```

→ enables `bg-bg-0`, `text-bright`, `text-muted`, `border-border`,
`font-display`, `font-mono`, etc. No hard-coded hexes in components.

---

## 8. Static images — the fix

**Problem today:** `crt.png` is referenced with a relative path inside
`design/`, so it only resolves when that file is opened in place. It is not part
of the app, and the preview showed it broken.

**Fix:**
1. Copy `design/crt.png` → `apps/web/public/images/crt.png` (public/ is served
   at the site root by Next).
2. Render it via **`next/image`** in `CRTMonitor` with explicit `width={820}
   height={711}`, `priority` (it's above the fold), and `alt="Cripsis running
   on a monitor"`. Next gives us automatic optimization, correct sizing, and no
   layout shift.
3. Keep the live-terminal overlay as an absolutely-positioned element on top,
   matching the original percentages (`top:11% left:17.5% right:17.5%
   bottom:33%`).
4. `crt.png` stays in `design/` too as the design source of truth (it's the
   only asset, 185 KB — no optimization needed beyond what Next does at serve
   time).

If any *future* raster assets are added, they follow the same rule:
`public/images/`, referenced via `next/image`.

---

## 9. Responsiveness

The designs are fixed desktop layouts (e.g. two-column hero, 3-col tile grids,
horizontal nav). Plan:
- Grids collapse: `grid-cols-3 md:` → `grid-cols-1` on mobile, `sm:grid-cols-2`
  at mid, full columns at `lg`.
- Hero two-column → single column stacked below `lg`.
- Header nav → hamburger menu under `md` (the one client component).
- Fluid type for the big `h1` (66px desktop → clamp down on small screens).
- The node rail becomes a vertical/wrapped list on narrow viewports.

This is an **enhancement** over the source (which had no mobile treatment); the
desktop rendering will match the designs.

---

## 10. CI fix (GitHub Actions)

`.github/workflows/ci.yml` currently fails at the pnpm setup step.

**Change 1 (required):** remove the version pin so `packageManager` is the only
source of truth.

```diff
       - name: Set up pnpm
         uses: pnpm/action-setup@v4
-        with:
-          version: 9
```

**Change 2 (recommended):** bump the project Node from 20 → **22 (LTS)** to stay
current and clear the deprecation noise. Touches `node-version: 22` in the
workflow, `.nvmrc` (`22`), and `engines.node` (`>=22`). *Optional — say if you'd
rather stay on 20.*

After this, `pnpm install --frozen-lockfile` works because the stray
`package-lock.json` is already removed and `pnpm-lock.yaml` is committed.

> This CI fix is independent of the website work. I can apply it **immediately**
> (separate small commit) so `main` goes green while the site is built — or roll
> it into the implementation. Your call in §11.

---

## 11. Open questions (need your answers before I start)

1. **Tailwind v4** (recommended) or v3? 
2. **Node 22** bump, or stay on 20?
3. **Fix CI now** as its own commit, or fold into the site work?
4. **crt.png**: keep the exact monitor asset as-is (just move it)? (Recommended
   — yes.)
5. **Commits**: one PR/branch for the whole site, or incremental commits
   straight to `main`? (I recommend a `feat/website` branch + PR so CI verifies
   it before merge.)

---

## 12. Execution phases (after approval)

1. **Tooling** — add Tailwind v4 + PostCSS to `apps/web`; wire tokens via
   `@theme`; port keyframes into `globals.css`. Verify build.
2. **Chrome** — `Container`, `Header` (responsive), `Footer`, `Button`, and the
   other `ui/` primitives. Verify build.
3. **Home** — move `crt.png`, build `CRTMonitor`, `NodeRail`, then compose all
   home sections. Visual-compare against `Main.dc.html`.
4. **Remaining pages** — Platform, Pricing, About, Contact, Design Partners.
   Wire nav/footer links to real routes.
5. **Polish** — responsive passes at mobile/tablet/desktop, hover/motion parity,
   `lint`/`typecheck`/`build` green, `metadata` per page (SEO titles).
6. **CI** — confirm the workflow passes end-to-end on the branch; open PR.

Verification at each phase: `pnpm --filter @cripsis/web build`, `pnpm lint`,
`pnpm typecheck`, plus a browser screenshot compared to the source `.dc.html`.

---

## 13. Dependencies to add (`apps/web`)

- `tailwindcss` (v4), `@tailwindcss/postcss`, `postcss` — dev deps.
- `clsx` + `tailwind-merge` (for the `cn()` helper) — small, standard.
- No other runtime deps. No UI kit — components are hand-built to match the
  bespoke design.

---

## 14. Risks & mitigations

| Risk | Mitigation |
| --- | --- |
| Pixel drift from the hand-tuned designs | Port exact token values; screenshot-compare each page against its `.dc.html`. |
| CRT overlay misaligns on the responsive image | Use percentage insets (as the original does) so it scales with the image. |
| CI also runs `pnpm test`; web has no tests | Fine — turbo skips packages without a `test` script; api's existing jest test still runs. |
| Scope creep into API wiring | Explicitly out of scope (§1). |

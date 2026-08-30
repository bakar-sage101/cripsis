# Cripsis Design Audit — learning from commandcode.ai

**Status:** Recommendations for review · **Date:** 2026-08-30
**Constraint:** keep the current color scheme (cyan `#68d8ff` accent on near-black `#020608/#040b10/#07131a`, IBM Plex + Space Grotesk).

This document (1) reverse-engineers what makes **commandcode.ai** feel designed,
(2) audits our current Cripsis site page by page, and (3) recommends concrete,
palette-preserving changes ranked by impact. Nothing here is implemented yet —
it's for your approval, same as `IMPLEMENTATION_PLAN.md`.

---

## 1. commandcode.ai — the design philosophy

Their aesthetic is **"engineering blueprint meets editorial brutalism."** It reads
like a precise technical drawing that happens to be a marketing page. Nine devices
do the heavy lifting:

| # | Device | What it is | Why it works |
| --- | --- | --- | --- |
| 1 | **Blueprint grid overlay** | Faint dashed vertical/horizontal guide lines running through the whole hero. | Signals precision/engineering; fills negative space without clutter. |
| 2 | **Registration / crop marks** | Small L-shaped corner brackets and `+` ticks at grid intersections. | The single most distinctive "this is a schematic" cue. Cheap, high-signal. |
| 3 | **Gapless bordered cells** | Content tiled edge-to-edge sharing hairline borders (logo wall, feature grid) — a control-panel matrix, not floating cards. | Feels like an instrument/dashboard, not a generic SaaS card deck. |
| 4 | **Oversized editorial type** | Huge, tight-tracked, heavy sans headlines; dramatic scale jumps between H1 and body. | Confidence and hierarchy; the page feels art-directed, not templated. |
| 5 | **Monospace as connective tissue** | `//comments`, `npx taste`, `~/project`, `[ PROMPT ]`, `[ LEARNED ]` labels everywhere as captions. | A consistent "system voice" that ties every section together. |
| 6 | **Terminal storytelling** | Animated terminal panels dramatize a narrative ("without taste" vs "with taste"). | Shows the product as a lived experience, not a feature list. |
| 7 | **Kinetic type & scroll reveals** | Vertically stacked letters (`t a s t e - 1`), scroll-triggered fades/slides. | Motion earns attention and rewards scrolling. |
| 8 | **Saturated accent, used as "signal blocks"** | Near-black canvas; a single saturated indigo appears only as glowing gradient rectangles in the grid. | Restraint makes the accent read as energy/data, not decoration. |
| 9 | **Dense, layered social proof** | Logo wall (bordered grid) + named quotes + big stat labels (`80% FEWER CORRECTIONS`). | Stacks credibility three ways in one scroll. |

**The transferable lesson:** the "wow" isn't the color — it's the **framing system**
(grid + crop marks + mono annotations + gapless cells) and the **scale/motion**.
All of that is palette-agnostic, so we can adopt it in cyan and keep our identity.

---

## 2. Cripsis today — honest audit

Our site is **clean, calm, and consistent** — a legitimate "control-plane" look.
But next to commandcode it reads **flat and evenly-weighted**: every section has the
same rhythm, the same rounded card, the same 92px padding, and little scale drama or
motion. It's competent SaaS; it isn't yet *arresting*.

### Global observations
- **One texture, one weight.** Sections alternate `bg-0/bg-1` and that's the only
  rhythm. No framing device, no focal moments.
- **Cards float and repeat.** `Tile` is always rounded + gap + hover-lift. Six pages
  of the same card. Nothing feels like an "instrument."
- **Type is safe.** H1 clamps to 66px at weight 600; H2 is a flat 40px everywhere.
  Little contrast between a section's title and its body.
- **Motion is ambient only.** CRT flicker / blink / rail-travel loop forever, but
  nothing responds to the reader (no scroll reveals).
- **Mono is under-used.** We have the `//` kicker and that's mostly it. commandcode
  makes mono a pervasive captioning system.
- **No social proof.** Pre-launch is fine, but there's no logo/partner band, no stat
  callouts — a big appeal lever left on the table.

### Page by page
- **Home (`/`).** Strongest page — CRT hero, node rail, contrast, economics chain.
  But the middle (features → planes → learning → contrast → economics → faq) is six
  near-identical "kicker + H2 + grid" blocks in a row. Reader fatigue sets in.
- **Platform (`/platform`).** Numbered blocks are good bones, but it's six stacked
  tile grids with the same texture — the most monotonous page. The numbering is tiny.
- **Pricing (`/pricing`).** Functional and clean. Tier cards are fine; the "Pro"
  highlight is subtle. Feels a touch generic; no framing personality.
- **About (`/about`).** Doctrine trio + principles + team. Team avatars are plain
  mono initials in a circle — the weakest visual moment.
- **Contact (`/contact`).** The real form is a genuine upgrade. Solid; could use a
  stronger left/right visual balance and a framing device around the brief.
- **Design Partners (`/design-partners`).** Best interior page (scanline hero,
  blockquote, numbered timeline). Closest in spirit to what all pages should feel like.

---

## 3. Recommendations (cyan-only, ranked by impact)

Everything below uses **only** existing tokens (`--color-accent`, `--color-line`,
`bg-0/1/2`, etc.). Ordered so the first few give the biggest visible lift.

### Tier A — the identity system (do these first; they touch every page)

**A1. Blueprint framing device.** Introduce a reusable `Blueprint` wrapper that draws,
in cyan at very low opacity:
  - a faint **dashed grid** (we already have the scanline technique — add vertical
    guides), and
  - **corner crop-marks** (L-brackets) at the corners of heroes and key sections.
  Apply to every `PageHero` and the home hero. *This is the highest-leverage change* —
  it instantly makes the whole site feel engineered, and it's pure CSS.

**A2. Mono annotation layer.** Add small mono "captions" as a system voice:
  - coordinate/section tags (e.g. `[ 01 / 06 ]`, `~/cripsis/platform`) in section
    corners,
  - bracketed labels `[ PRACTICE ]`, `[ LEARNED ]` (we already do this on one card —
    make it a pattern),
  - a thin left-aligned mono descriptor under each H2.
  Extend the existing `Kicker`/`Mono` primitives; no new color.

**A3. Editorial type pass.** Increase scale contrast and weight:
  - Hero H1 → heavier (Space Grotesk 700) and larger clamp (up to ~72–76px), tighter
    tracking.
  - Introduce **giant ghost numerals** behind numbered sections (Platform blocks,
    Design-Partners steps) — huge, `--color-line`-faint, in the corner.
  - Give section H2s a consistent, larger, more confident size and pair each with a
    one-line mono sub-caption.

**A4. Scroll-reveal motion.** A tiny `Reveal` client component (IntersectionObserver)
that fades/translates content in on first view, staggered per grid. Respect
`prefers-reduced-motion` (we already have the media query). Turns our static pages
kinetic without touching the palette.

### Tier B — component texture (breaks the "same card six times" feeling)

**B1. Gapless bordered grid variant.** Add a `GridPanel` layout: cells tiled
edge-to-edge sharing 1px `--color-line` borders (no gaps, no rounding), like a control
matrix. Use it for at least one grid per page (Home features, Platform memory grid,
Pricing "in every plan"). Instantly more "instrument," less "SaaS."

**B2. Signal blocks in heroes.** Replace empty hero negative space with a small
cluster of **cyan gradient rectangles** on the blueprint grid (our take on their indigo
blocks) — using `--color-accent`/`--color-accent-dim` gradients at low intensity. Great
for interior heroes that currently have plain gradient wash.

**B3. Tile hierarchy.** Not every tile should look identical. Introduce weight levels:
a "feature" tile (current), a "quiet" tile (borderless, for dense lists like About
principles), and a "highlight" tile (accent left-border or faint accent wash, like the
Contrast card) — so grids have a focal point.

### Tier C — content & credibility (appeal + trust)

**C1. Social-proof band.** Add a "trusted by / building with" band — even pre-launch,
a founding-design-partner logo grid (bordered cells, C-B1 style) or a stat row
(`DEFAULT-DENY`, `FAIL-CLOSED`, `RECEIPTS ON EVERY ACTION`) as big mono stat callouts.

**C2. Dramatize the Contrast section.** The home "Today vs Cripsis" is our best story —
render it as two **animated terminal panels** (reuse `DemoCard`/CRT styling) instead of
two plain cards, echoing commandcode's with/without narrative.

**C3. Team upgrade (About).** Replace plain initial-circles with framed portrait cells
(bordered, mono role tags, subtle accent on hover) so the founding team reads as a
deliberate moment, not a placeholder.

### Tier D — polish

- Sticky mini section-nav on long pages (Platform), mono, right-aligned.
- Footer: add the blueprint crop-marks + a status ticker row.
- Consistent hover language: standardize the accent glow so every interactive element
  shares one behavior.

---

## 4. Suggested sequencing

1. **A1 + A2 + A3** (blueprint frame, mono layer, type pass) — one PR; transforms the
   feel site-wide with almost no new components.
2. **A4 + B1 + B3** (motion + gapless grid + tile hierarchy) — second PR; adds texture
   and life.
3. **B2 + C1 + C2 + C3** (signal blocks, social proof, terminal contrast, team) —
   third PR; the "appeal" and credibility layer.
4. **D** polish as we go.

Everything stays on the current cyan/near-black palette — we're borrowing
commandcode's *framing, scale, and motion*, not its color.

---

## 5. Open questions
1. Adopt the **blueprint/crop-mark** identity site-wide (A1), or keep it to heroes only?
2. How much **motion** do you want — subtle reveals (recommended) or more kinetic
   (stacked/animated type like theirs)?
3. Add a **social-proof band** now with placeholder/founding-partner content, or wait
   until there are real logos?
4. Want me to start with **PR 1 (Tier A)** once you approve?

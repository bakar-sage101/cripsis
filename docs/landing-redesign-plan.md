# Landing Page Redesign v2 — make it stand out

**Status:** Plan for approval · **Date:** 2026-08-31
**Constraint:** keep the cyan / near-black palette. Borrow *energy, motion, and
format variety* from commandcode.ai — not its color.

Goal: fix the three things that keep our home page from grabbing the eye — a
**quiet half-empty hero**, a **faint blueprint that doesn't read**, and
**five near-identical sections in a row** — and give the page a **signature
visual** and **living motion**. All five approved moves (①–⑤) are covered.

---

## New home structure (before → after)

| # | Now | After |
| --- | --- | --- |
| 1 | Announcement banner | Banner **+ live signal ticker** (⑤) |
| 2 | Hero: static CRT, empty right side | **Alive hero**: animated terminal + cyan signal-block field + command chip + stronger blueprint (①) |
| 3 | — | **Credibility band** right after hero (⑤) |
| 4 | Node rail | Node rail (amplified travel light) |
| 5 | 6 feature tiles (rounded, floating) | **Gapless control-matrix + ghost numerals** (④) |
| 6 | — | **Full-bleed pull-quote** palette-cleanser (④) |
| 7 | Three Planes: stacked 3-row card | **Control-plane signature diagram** (②) |
| 8 | Active learning: static demo cards | Same, demo cards get subtle live typing |
| 9 | Contrast: 2 static cards | **Dueling live terminals** (③) |
| 10 | Economics chain (static) | **Animated flow** chain (④) |
| 11 | Trust StatBand | Keep |
| 12 | Final CTA | Keep (arrow motion polish) |

Crop-mark section dividers carried between the major bands so the schematic
identity reads throughout.

---

## The moves in detail

### ① Alive & full hero
- **`LiveTerminal`** (new client component) — types a looping sequence into the
  CRT screen: `observe → episode assembled → hypothesis → asks "…" → practice
  validated → receipt ▍`. Lines stream in with the blink cursor, hold, then
  reset. **Reduced-motion → renders the full static text** (today's behavior).
  Reused by move ③.
- **`SignalField`** (new) — a grid of cyan gradient rectangles (varying sizes,
  soft glow, a few slowly pulsing) tiled on the blueprint behind/around the CRT,
  filling the dead space on the right. Our answer to commandcode's block field.
- **`Blueprint` upgrade** — add a denser `hero` variant: higher grid opacity and
  `+` intersection ticks (not just corner L-brackets) so the device actually
  reads.
- **Command chip** — `❯ cripsis observe --live ▍` near the CTAs as a focal hook.
- Net effect: the hero reads as a live control plane, not a static poster.

### ② Three-Planes signature diagram
- **`ControlPlaneDiagram`** (new, inline SVG + CSS) replacing the stacked card.
  Shows the three planes and the **gated-action flow**:
  `proposal → CripsisAI (Thinks) → Kybernite (Knows) → Trilithium gate
  (allow / deny) → receipt`. Boundary lines between planes, a glowing **gate**
  node, labelled connectors. A "signal" dot travels the path on loop
  (reduced-motion → static). Cyan only.
- This is the page's memorable centerpiece and sells the control-plane thesis
  visually. Keeps the existing left-hand text column.

### ③ Dueling live terminals (Contrast)
- Two terminal panels via `LiveTerminal`:
  - **TODAY** (muted tone) — reactive script that stalls: *problem found late →
    context reconstructed → options guessed → set a reminder* → `interrupted`.
  - **CRIPSIS** (accent tone) — anticipatory script: *risk surfaced → context
    assembled → practice applied → decision routed* → `✓ monitoring continues`.
- Echoes commandcode's with/without narrative; reuses our terminal language.

### ④ Rhythm & format variety
- **Feature grid → gapless control-matrix**: the six capabilities as
  edge-to-edge hairline-bordered cells (like Pricing), each with a **giant faint
  ghost numeral** (01–06) — reads as an instrument panel, not a card deck.
- **`PullQuote`** (new) — a full-bleed editorial moment between dense sections:
  oversized statement, e.g. *"Repeated behavior is evidence — not truth."* with a
  mono kicker. A visual palette-cleanser (commandcode uses big statements this
  way).
- **Economics chain animation** — the `seconds saved → … → competitive
  advantage` strip gets a moving highlight / staggered reveal so it flows.

### ⑤ Blueprint amplification + credibility
- **`SignalTicker`** (new) — a slim scrolling bar of live system events
  (`● observing authorized activity`, `● practice validated`, `○ receipt
  recorded — trilithium`, …) under the banner. On-brand "liveness" without fake
  logos. Honest for pre-launch. (Alt: a bordered founding-partner slots band —
  say if you'd prefer that.)
- **Stronger section framing** — crop-mark dividers between bands so the
  schematic identity is consistent, not just on heroes.
- Keep the existing **trust StatBand** (guarantees).

---

## New components
`LiveTerminal` (client) · `SignalField` · `ControlPlaneDiagram` · `PullQuote` ·
`SignalTicker` · `Blueprint` gets a denser `hero` variant · a small gapless
`MatrixGrid` helper (or inline).

## Motion & performance
- Every animated component checks `prefers-reduced-motion` and renders a static
  equivalent. Animations are lightweight (CSS + a few timers/RAF); nothing
  janky, nothing autoplaying audio/video. Client components kept small and
  scoped so the page stays mostly static/SSR.

## Sequencing (one PR, staged commits)
1. Hero (① — `LiveTerminal`, `SignalField`, `Blueprint` upgrade, command chip).
2. Signature diagram (②).
3. Dueling terminals (③).
4. Rhythm + credibility (④ ⑤ — matrix, pull-quote, chain, ticker, dividers).
Verify build/lint/typecheck after each; screenshot each on an isolated dev port.

## Delivery
New branch `feat/landing-v2`, based on the current design-system + pricing work,
→ PR you merge. Palette unchanged — cyan tokens only.

## Open questions
1. Credibility band: **signal ticker** (recommended) or **founding-partner
   slots**?
2. Pull-quote line — use *"Repeated behavior is evidence — not truth."* or a
   founder/mission line you prefer?
3. Motion intensity for the hero terminal — continuous loop, or type once and
   hold? (Recommended: type once on view, then hold; loop feels busy.)

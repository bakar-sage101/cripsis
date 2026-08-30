# Platform Page Redesign — give each pillar its own visual

**Status:** Plan for approval · **Date:** 2026-08-31
**Constraint:** keep the cyan / near-black palette.

The /platform page is our least-evolved page. Audit (measured in-browser):

| Finding | Detail |
| --- | --- |
| **Flat backgrounds** | Only **1** blueprint grid on the page (the hero). All **6 blocks below sit on flat black** — no grid, no crop-marks, no signal energy. |
| **Weak hero** | Uses the **faint** grid (not dense), **no signal blocks**, and an **empty right side** — text-only. |
| **Monotony** | **26 near-identical floating rounded tiles** across **6 identically-structured blocks** (label → H2 → tile grid, six times). Nothing for the eye to latch onto. |

The fix has two halves: (1) carry the blueprint canvas + energy through the whole
page (as we just did on home), and (2) **give each of the six pillars its own
bespoke visual** instead of the same tile grid six times. Half (2) is the wow
factor and the variety.

---

## Design philosophy

The platform page *enumerates the six pillars of the product*. Right now every
pillar looks the same, so the page reads as one long list. Instead, each pillar
should get a treatment that **shows what it is** — a diagram, a terminal, a
matrix, a timeline — so scrolling the page feels like touring an instrument, not
reading a spec list. Consistent framing (blueprint canvas, crop-marks, mono
labels, ghost numerals) holds it together; the per-pillar visuals create rhythm
and surprise.

---

## Hero — make it a real hero

- **Dense blueprint** (visible grid + `+` ticks) like the home hero.
- **SignalField** blocks fill the empty right side.
- **A right-side visual**: a compact "platform stack" schematic — the three
  planes as stacked labelled layers with a data path — previewing the system.
  (Or a small live terminal; diagram preferred here.)
- The chip strip (`Three planes · Active learning · …`) becomes a **sticky pillar
  nav** that highlights the active pillar as you scroll and jumps to it.

---

## The six pillars — one bespoke treatment each

| # | Pillar | Today | New treatment |
| --- | --- | --- | --- |
| 01 | **Three planes** | 3 tiles | **Signature diagram** — reuse/adapt `ControlPlaneDiagram` (proposal → Thinks → Knows → Trilithium gate → receipt) as a two-column block. Ties platform to the home page's centerpiece. |
| 02 | **Active learning** | 4 tiles | **The learning loop** — a circular / connected flow `OBSERVE → HYPOTHESIZE → QUESTION → VALIDATE → (repeat)` with a travelling signal, plus a small live terminal showing a question being asked. |
| 03 | **Organizational memory** | 6 tiles | **Memory map** — the six memory types as a **gapless control-matrix** with ghost numerals and mono type-tags (`episodic`, `practices`, `provenance`…), reading like a labelled schematic, not cards. |
| 04 | **Trust & control** | 6 tiles | **Guarantee matrix** — gapless bordered cells + a row of by-construction **stat callouts** (`DEFAULT-DENY`, `FAIL-CLOSED`, `RECEIPTS`, `ISOLATED`) reused from the home `StatBand` language. |
| 05 | **Delegation** | 3 tiles | **Autonomy ramp** — a horizontal, ascending staged flow `OBSERVE→ASK · ASSIST→COMPRESS · DELEGATE→OPERATE` drawn as a rising ramp with gated steps (assistance before autonomy, visually). |
| 06 | **Deployment** | 4 tiles | **Numbered timeline** — `Install → Authorize → Observe → Expand` as a connected spine timeline (like the Design-Partners engagement), not a grid. |

Each block keeps its `NN · CATEGORY` label, H2, sub, and **giant ghost numeral**,
but the body becomes the bespoke visual above.

---

## Background & framing (page-wide)

- Convert the six blocks to the framed **`Section`** treatment (blueprint grid +
  corner crop-marks + relative content) so no block is flat black again.
- **Alternate `bg-0` / `bg-1`** down the page for rhythm; ambient `SignalField`
  on the larger blocks.
- **Sticky pillar nav** (from the hero chips) — mono, right- or top-aligned,
  highlights the current pillar on scroll.
- **CtaBand** at the end gets the same framing.

---

## Tiles & motion

- Where grids remain (03, 04), use the **gapless control-matrix** (edge-to-edge
  hairline cells + ghost numerals), not floating rounded tiles.
- Keep scroll-reveal; the new diagrams/terminals/ramps animate on view; all honor
  `prefers-reduced-motion`.

---

## Components

Reuse: `ControlPlaneDiagram`, `LiveTerminal`, `SignalField`, `Blueprint`,
`Section` (framed), `StatBand`, gapless-matrix pattern, the Design-Partners
timeline pattern.
New (small): `PillarNav` (sticky, scroll-spy), an `AutonomyRamp` visual, a
`LearningLoop` visual (02). Possibly a shared `PlaneStack` mini-diagram for the
hero.

## Sequencing (one PR, staged commits)
1. Hero (dense blueprint + signal field + plane-stack visual + sticky pillar nav).
2. Page-wide framing (blocks → `Section`, alternating tones, ambient signal).
3. Pillar visuals 01–02 (diagram, learning loop).
4. Pillar visuals 03–06 (memory matrix, guarantee matrix, autonomy ramp, timeline).
Verify build/lint/typecheck after each; screenshot on an isolated dev port.

## Delivery
New branch `feat/platform-v2` off current `main` → PR you merge. Palette unchanged.

## Open questions
1. **Scope:** full bespoke-per-pillar (recommended — the wow), or a lighter pass
   (framing + hero + gapless matrices, but keep grids)?
2. **Hero visual:** a plane-stack **diagram** (recommended) or a **live terminal**?
3. **Sticky pillar nav:** yes (recommended) or keep the static chip row?

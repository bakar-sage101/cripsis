# About Page Redesign — make the doctrine *felt*

**Status:** Plan for approval · **Date:** 2026-08-31
**Constraint:** keep the cyan / near-black palette.

Audit (measured in-browser):

| Finding | Detail |
| --- | --- |
| **Flat below the hero** | Only **1** blueprint grid on the page (the hero). Everything below is flat black; the page uses **zero framed `Section`s**. |
| **Weak hero** | Faint grid (not dense), **no signal blocks**, **empty right side** — text only. |
| **Plain blocks** | The doctrine trio is three plain text columns; principles + team are **9 floating tiles**. Nothing dramatizes the idea. |

The About page carries the **doctrine** — *"Intelligence should belong to the
enterprise that creates it."* Right now it *states* the doctrine but never *shows*
it. The redesign makes the thesis visual and gives the page the same framed,
alive treatment as home and platform.

---

## The big idea: visualize ownership

The whole thesis is **owned-and-walled vs surrendered-to-a-vendor**. That should
be the page's signature visual, not just a sentence.

- **`OwnershipBoundary`** (new) — a bounded "YOUR ENVIRONMENT · YOUR WALLS"
  enclosure holding the intelligence assets (`evidence · practices · provenance ·
  receipts`) with a sealed boundary and a `✗ never leaves` seal. It appears in the
  hero (right side) and anchors the doctrine at first glance.

---

## New page structure (before → after)

| Now | After |
| --- | --- |
| Hero (text only, faint grid, empty right) | **Alive hero**: dense blueprint + signal field + `OwnershipBoundary` visual |
| Doctrine trio (3 plain columns) | **The three tenets** — framed panels with big ghost numerals (01/02/03) on the grid |
| — | **The default vs Cripsis** — a framed contrast: *surrender* (muted) vs *ownership* (accent). The emotional centerpiece. |
| — | **Pull-quote** — "Your intelligence is infrastructure — and infrastructure should be owned." |
| Principles (6 floating tiles) | **The constitution** — gapless control-matrix, 6 principles with mono tags + ghost numerals |
| Team (3 tiles) | **Founding team** — premium framed portrait cells with mono `~/founders/…` signatures |
| CTA | Framed CtaBand |

Every block becomes a framed `Section` (grid + crop-marks, alternating tones,
ambient signal blocks) — no more flat black.

---

## Section detail

1. **Hero** — dense `Blueprint` + `SignalField` + `OwnershipBoundary`. Tag,
   kicker, the doctrine H1, subtitle, CTAs.
2. **Three tenets** — `OWNED / GOVERNED / COMPOUNDING` as three framed panels,
   each with a **giant ghost numeral**, a bold one-line claim, and the body. Reads
   as the founding principles, not a footnote.
3. **The default vs Cripsis** *(new)* — two panels: **"The default — surrender"**
   (your knowledge → a shared vendor model, muted, `✗`) vs **"Cripsis —
   ownership"** (your knowledge stays in your walls, accent, `✓`). Dramatizes the
   choice.
4. **Pull-quote** — full-bleed doctrine line (`PullQuote`).
5. **The constitution (principles)** — the six principles as a **gapless
   control-matrix**: mono principle-tag (`evidence`, `questions`, `authority`…),
   title, body, faint ghost numeral. A spec of beliefs, not cards.
6. **Founding team** — framed portrait cells: squared accent monogram, name,
   mono role tag, and a mono `~/founders/<name>` signature line; subtle accent on
   hover. Premium and deliberate (this is where trust is built).
7. **CtaBand** — "Own the control layer." (framed).

---

## New / reused components
New (small): `OwnershipBoundary` (hero + doctrine visual). Possibly reuse it or a
variant in the contrast section.
Reuse: `Section` (framed), `Blueprint` (dense), `SignalField`, `PullQuote`, the
gapless-matrix pattern, ghost numerals, `Reveal`.

## Motion
Ambient loops + scroll reveals only; the boundary "seal" can pulse subtly. All
honor `prefers-reduced-motion`.

## Sequencing (one PR, staged commits)
1. Hero (dense blueprint + signal field + `OwnershipBoundary`).
2. Page-wide framing (blocks → `Section`, alternating tones, ambient signal).
3. Three tenets + default-vs-Cripsis contrast + pull-quote.
4. Constitution matrix + premium team cells.
Verify build/lint/typecheck after each; screenshot on the isolated dev port
(`.next-verify`) so your `:3000` is never touched.

## Delivery
New branch `feat/about-v2` → PR you merge. Palette unchanged.

## Open questions
1. **Hero visual:** the `OwnershipBoundary` diagram (recommended), or signal
   blocks only?
2. **The "default vs Cripsis" contrast section:** add it (recommended — the
   emotional core), or keep the page tighter without it?
3. **Team treatment:** premium framed cells with `~/founders/…` signatures
   (recommended), or keep the current cards?

# Design templates

These are the source design references for the Cripsis website — the approved
dark "control-plane" direction. They are standalone HTML (authored on the Claude
Design canvas) and are **not** wired into the app yet; the next task is to
implement them inside `apps/web`.

## Current pages (the live set)

| File                    | Page           |
| ----------------------- | -------------- |
| `Main.dc.html`          | Home           |
| `Platform.dc.html`      | Platform       |
| `About.dc.html`         | About          |
| `Pricing.dc.html`       | Pricing        |
| `Contact.dc.html`       | Contact        |
| `DesignPartners.dc.html`| Design Partners|

- `canvas.json` — layout manifest for the design canvas.
- `canvas-preview.html` — the full published canvas (all artboards in one file).
- `crt.png` — the CRT monitor asset used in the hero (transparent PNG).
- `cripsis-design-prompt.md` — the original written design brief.

`Architecture.dc.html` and `Security.dc.html` are earlier drafts; their content
was folded into `Platform.dc.html`. Kept for reference only.

## Brand tokens

The palette and typography are already set up in
`apps/web/src/app/globals.css`:

- Backgrounds: `#020608` / `#040b10` / `#07131a`
- Blues: `#0c5f7d` / `#16a9d6` / `#68d8ff`
- Text: `#d9f5ff` (bright), bright-blue @ 88% (body), `#4fa9c8` (muted), white (relief)
- Fonts: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (mono/terminal)

## How to view

Open any `.dc.html` (or `canvas-preview.html`) directly in a browser. Fonts load
from Google Fonts; the CRT hero references `crt.png` in this folder.

# Cripsis — Website Design Prompt (for Claude Design)

> Paste this whole brief into Claude Design. It is self-contained: it carries the product context, the full visual system, every reusable component, and the exact copy for every page. Design first; the production stack (NestJS / Next.js monorepo) is a later, separate step and is not needed here.

---

## 0. Your task

You are designing the marketing website for **Cripsis** — enterprise-owned intelligence infrastructure. Produce a **multi-artboard design canvas**, one desktop artboard per page (1440px wide, dark), plus a small components artboard for the reusable "instrument" elements defined in §4. Design should read as **a running control plane, not a brochure**: dark, precise, engineered, calm. Every pixel should say *these are the people who would build the trust layer correctly.*

Priority order for fidelity: **Home** (flagship, most detail) → Architecture → Security & Trust → About → Pricing → Contact → Investors.

---

## 1. What Cripsis is (context for you, not copy to paste)

Cripsis gives an organization a dedicated AI operating environment that **learns how it actually works** — through observation, dialogue, correction, and validated outcomes — and **retains that intelligence as the customer's own asset, under the customer's control.** It is deliberately **industry-agnostic**: it works the same way across any operations-heavy business.

It is built as **three separated planes with clean boundaries**, and that separation is the whole credibility of the product:

- **CripsisAI** — *thinks.* The intelligent application layer: observes authorized events, keeps active work, assembles context, reasons, recommends, and asks when something is missing.
- **Kybernite** — *knows.* Durable, governed, **customer-owned** enterprise intelligence: evidence, provenance, validated practices, and how they evolve. Inspectable, not opaque.
- **Trilithium** — *allows.* The deterministic trust plane: identity, authority, policy, approvals, secrets, receipts. Default-deny, fail-closed.

Two motions sit on top: a **learning progression** (Cripsis learns bottom-up and *asks questions* when it detects uncertainty or conflict) and a **delegation curve** (assistance compounds into safely delegated work, releasing human capacity).

**Hard rules for this design — do not violate:**
- **No industry is named anywhere.** No freight, logistics, shipping, insurance, mortgage, etc. All examples stay abstract (operators, cases, exceptions, workflows, customers).
- **No company-stage disclosure.** No "pre-product," "beta," roadmap/"now-next-later," changelog, version numbers, funding badges, or launch dates. Speak only about *what the system is and guarantees*, never how far along the company is.
- **No new colors.** Use only the palette in §3. Monochromatic blue on near-black is the brand discipline.

---

## 2. Design philosophy (the north star)

**Restraint is the flex.** The terminal feel comes from precision and a few exact signals — never from costume. If a section could appear on any dark SaaS template, it's wrong. If removing an element loses nothing, remove it.

**Structure mirrors the architecture.** The reader should absorb the three-plane model and the learning progression *by scrolling*. Information architecture is the argument.

**Serious, never stage-revealing.** Enterprise-grade, declarative, quietly confident. Confidence about what it *is*; silence about how far along it is.

---

## 3. Visual system

### Canvas
The entire site lives in the dark. Light means signal. Layer three surface depths:
- `--bg-0` **#020608** — page ground (deepest)
- `--bg-1` **#040b10** — raised surfaces / sections
- `--bg-2` **#07131a** — cards, panels, instrument components

Apply a **very subtle noise / fine scanline texture** to the deepest surfaces so black reads as a screen, not paper. Keep it barely perceptible.

### Color = state (use blues to carry meaning, never as decoration)
| Role | Token | Value |
|---|---|---|
| Brightest — wordmark, hero emphasis | `--text-bright` | **#d9f5ff** |
| Live / active / accent | `--blue-bright` | **#68d8ff** |
| Primary structure, links, active borders | `--blue-mid` | **#16a9d6** |
| Quiet frames, dim structure | `--blue-dim` | **#0c5f7d** |
| Body text | `--text-main` | bright blue @ **88%** — `rgba(104,216,255,0.88)` |
| Secondary text / labels | `--text-muted` | **#4fa9c8** |
| Relief / rare highest-contrast moment | white | **#ffffff** |
| Borders & rules | — | the blues above at low alpha (mid @ 0.28–0.55, bright @ 0.72–0.92) |

White is a **deliberate relief accent** (a single stat, a key word, a CTA fill) — not a background, not a body color. Resist introducing any hue outside this set.

### Typography
Two voices in tension — this pairing *is* the terminal signature:
- **Sans** (headlines + body): a neutral technical grotesque — e.g. Geist, Inter Tight, or Söhne. Large, confident headlines; generous line-height on body; lots of air.
- **Monospace** (rationed, never body): commands, status lines, section tags, labels, numbers/metrics, and the instrument components. E.g. Geist Mono, JetBrains Mono, or IBM Plex Mono.

Mono must feel *earned* — used only where it carries system meaning. If mono creeps into paragraphs, pull it back.

### Section tagging (recurring device)
Label sections with **programming-comment / bracket tags** in muted mono:
- `// the infrastructure of cognition`
- `[ THE PROBLEM ]`, `[ THE SYSTEM ]`, `[ HOW IT LEARNS ]`
- numeric spec markers: `01 · OBSERVE`, `02 · …`

### Motion (annotate intent; represent statically on artboards)
Subtle only. A blinking caret (draw as a solid `▍`), a `●` "live" dot, scroll-reveals that feel like a system *rendering state* rather than content sliding. Nothing bouncy. Note animation intent as small annotations beside elements.

### Spacing & density
Generous. One idea per viewport. Big type, wide margins, quiet. Density appears **only inside instrument components** (records, tables), where it reads as data.

---

## 4. Signature components (design these on a dedicated components artboard, then reuse)

These make the site unmistakably Cripsis. All example content is **industry-neutral**.

**A. The three-plane split.** Three columns / rails — *thinks · knows · allows* — with the boundary between them drawn as a fine line, visually asserting separation. Reused on Home and Architecture.

**B. The learned-practice record.** A mono card — the product thesis made visible: inspectable, provenanced intelligence.
```
[ PRACTICE ]
Time-critical case at risk of a missed commitment
────────────────────────────────────────────
BEHAVIOR      Notify the customer proactively while
              recovery options are prepared
EVIDENCE      27 observed cases · 3 senior operators
CONFIRMED BY  Operations manager
EXCEPTIONS    Customer-specific instructions override
CONFIDENCE    High
LAST VALIDATED  ●
```

**C. The agent question.** An inline prompt showing agent-initiated inquiry:
```
Cripsis asks ▍
"I've seen two different ways this exception gets
 resolved. Does the right path depend on the customer,
 the service level, or operator preference?"
```

**D. The progression rail.** A horizontal mono spine, reusable:
`OBSERVE → HYPOTHESIZE → QUESTION → VALIDATE → LEARN → ASSIST → DELEGATE → OPERATE`

**E. The authority / receipt line.** A small mono confirmation dramatizing deterministic control:
`● decision: permitted · policy v— · receipt recorded`

---

## 5. Global elements

**Top nav (sticky, minimal):** wordmark `CRIPSIS` (in `--text-bright`) left; right: Architecture · Security · Pricing · About · Contact, plus a primary button **`Become a design partner →`**. Investors is **not** in the top nav (footer only). A thin low-alpha blue rule under the nav.

**Buttons:** primary = white or `--blue-bright` fill on dark, mono label with a trailing `→`. Secondary = ghost with low-alpha blue border. Keep them small and precise.

**Footer:** dark, quiet. Left: `CRIPSIS` + tagline `The Infrastructure of Cognition`. Columns: Product (Architecture, Security, Pricing), Company (About, Contact, Investors), Legal (Terms, Privacy). A mono status line for texture, e.g. `● system: nominal`. Copyright line.

---

## 6. Pages & exact copy

### 6.1 HOME (flagship long-scroll)

**Hero**
- Tag: `// the infrastructure of cognition`
- Headline: **Own the intelligence your business runs on.**
- Sub: Cripsis is a dedicated AI operating environment that learns how your organization actually works — then keeps that intelligence as your asset, under your control.
- CTAs: `Become a design partner →`  ·  `See the architecture ↓`
- Ambient: control-plane texture behind; a mono status line top-corner, e.g. `● cripsis.core / live`.

**The problem**
- Tag: `[ THE PROBLEM ]`
- Headline: **Enterprise intelligence is becoming infrastructure — owned by someone else.**
- Body: Your data, your workflows, your operating context, and the judgment of your best people increasingly create value that accrues outside your walls.
- Four-up cards:
  - **Dependence** — Critical reasoning increasingly lives outside the enterprise.
  - **Value leakage** — Your context strengthens external intelligence while you rent access.
  - **Fragmentation** — Best practices stay trapped across people, systems, and prior decisions.
  - **Repeated work** — People reconstruct context and repeat classes of decisions the company has already made.

**The system (three planes)**
- Tag: `[ THE SYSTEM ]`
- Headline: **One environment. Three planes. Clean boundaries.**
- Intro: Cripsis separates thinking, knowing, and allowing — so intelligence compounds without ever escaping your control.
- Use component **A**, three columns:
  - **CripsisAI — Thinks.** The intelligent application layer. Observes authorized events, keeps active work, assembles context, reasons, recommends, and asks when something is missing.
  - **Kybernite — Knows.** Enterprise intelligence, owned by you. Evidence, provenance, and validated practices — durable, inspectable, and how they evolve over time.
  - **Trilithium — Allows.** The deterministic trust plane. Identity, authority, policy, approvals, and receipts. Default-deny. Fail-closed.
- Doctrine line (mono, full width): `Models reason. Agents propose and coordinate. Kybernite preserves. Trilithium controls.`

**How it learns**
- Tag: `[ HOW IT LEARNS ]`
- Headline: **It doesn't just watch. It asks.**
- Body: Cripsis learns from the bottom up — observing how work is actually done, forming hypotheses, and raising a question the moment it detects uncertainty or conflict. Repeated behavior is evidence, not truth.
- Component **D** (progression rail) full width.
- Side by side: component **C** (agent question) and component **B** (learned-practice record).

**The economics**
- Tag: `[ THE ECONOMICS ]`
- Headline: **Saving seconds is just the start.**
- Body: As Cripsis learns, repeated steps collapse into delegated work. The unit of value shifts from time saved to human capacity released.
- Delegation curve (four steps, mono headers + one line each):
  - **ASSIST** — Retrieve, assemble, draft.
  - **COMPRESS** — Collapse repeated steps.
  - **DELEGATE** — Hand off bounded work.
  - **OPERATE** — Continue within explicit authority.
- Cascade strip (mono): `seconds saved → steps removed → tasks delegated → capacity released → talent redeployed → competitive advantage`
- Framing line (muted): Released capacity is not automatically cash. It is throughput, service, growth, and time for the decisions that matter.

**Control stays with you** (short trust teaser before CTA)
- Tag: `[ CONTROL ]`
- Headline: **Your intelligence. Your authority. Your walls.**
- Body: You control which systems and information Cripsis may access. Your intelligence stays segregated in your own environment and is never used to improve anyone else's. Every action passes through deterministic authority.
- Component **E** (receipt line) as accent. Link: `How trust works →` (to Security).

**Design-partner CTA (closing band)**
- Tag: `[ START ]`
- Headline: **Start with one workflow.**
- Body: Cripsis works with a small number of founding design partners. Choose the workflow that costs you the most when it fails. We baseline it, instrument it, and measure the delta.
- CTA: `Become a design partner →`

---

### 6.2 ARCHITECTURE

- Tag: `[ THE PLATFORM ]`
- Headline: **Thinking, knowing, and allowing — kept apart on purpose.**
- Intro: The separation is the point. Each plane owns its responsibility and nothing else, so intelligence compounds while authority stays deterministic.
- Full-width component **A**, then three deep sub-sections:

**CripsisAI — decides what should happen.** Observes authorized operational events, maintains active work that survives restarts, coordinates individual and organization-level agents, determines what deserves attention, assembles bounded context, invokes reasoning, generates recommendations, and asks questions when information is missing. *It does not own enterprise truth or authority.*

**Kybernite — owns what the enterprise knows.** Turns experience into durable, governed, reusable, customer-owned intelligence: evidence, provenance, decisions and outcomes, validated practices, contradictions, and history. Intelligence moves through a clear lifecycle — candidate → validated → disputed → superseded — and every belief is traceable to why Cripsis holds it. *This is your asset, in your environment.*

**Trilithium — decides what is allowed.** The deterministic trust plane. Answers one question on every action: *is this permitted, with this information, through this route, under this authority, right now?* Default-deny, deny-precedence, customer isolation, fail-closed. Produces a receipt for what happened. *Control failure never becomes implicit permission.*

- Closing doctrine band (mono): `CripsisAI decides what should happen · Kybernite owns what is known · Trilithium decides what is allowed.`

---

### 6.3 SECURITY & TRUST (weight this heavily)

- Tag: `[ TRUST ]`
- Headline: **Your intelligence becomes your asset — because you own the control layer.**
- Intro: Cripsis is built so the enterprise owns and controls its data and its intelligence. Cripsis owns the infrastructure that develops, governs, and operates it.
- Trust pillars (cards):
  - **Ownership** — The model, the data, and the learned intelligence stay yours. Not a black box you rent.
  - **Data never leaves** — Your intelligence stays segregated in your own environment and is never used to improve anyone else's.
  - **Deterministic authority** — Default-deny, fail-closed. Every action is evaluated against explicit policy before it happens.
  - **Provenance & receipts** — Every belief is traceable to its evidence. Every action produces a record.
  - **You set the boundary** — You authorize which systems and information Cripsis may access. Access and deletion terms are defined before deployment.
  - **Human authority preserved** — Learning how work is done does not authorize doing it. Humans keep authority where it matters.
- Component **B** and **E** as supporting visuals.
- CTA: `Become a design partner →`

---

### 6.4 ABOUT

- Tag: `[ THE DOCTRINE ]`
- Headline: **Intelligence should belong to the enterprise that creates it.**
- Body: Organizations are told they must surrender their operating knowledge to get the benefits of AI. Cripsis is built on the opposite premise: your intelligence is infrastructure, and infrastructure should be owned.
- Principles strip (mono headers, one line each): *Repeated behavior is evidence, not truth · Questions are first-class · Written procedure is evidence, not gospel · Learning does not confer authority · Your intelligence stays yours.*
- **Team** (three cards, neutral bios):
  - **Andrew Poinçot — Founder & CEO.** A decade-plus running demanding, time-critical operations. Founded Cripsis to give enterprises ownership of their own intelligence.
  - **Muhammad Abubakar Siddique — Founding Software Architect.** LLM systems, backend, and workflow architecture. Builds the intelligent application layer.
  - **Dominique Poinçot — Founding Hardware Architect.** Hardware systems and custom compute. Owns the Cripsis Node architecture.

---

### 6.5 PRICING (keep the current tiers, restyled into the dark system)

- Tag: `[ PRICING ]`
- Headline: **Deploy Cripsis on your terms.**
- Four tier cards + one enterprise band:
  - **Office** — up to 3 users — **$1,495/mo** — small teams getting started.
  - **Business** — up to 10 users — **$2,995/mo** — operational teams.
  - **Pro** — up to 20 users — **$4,995/mo** — broader use across the org.
  - **Pro+** — up to 30 users — **$6,995/mo** — multi-GPU deployment.
  - **Enterprise & Government** — custom — **Contact sales** — regulated and large-scale deployments.
- Keep it calm and legible; mono for the prices. No discount theater, no urgency.
- CTA under table: `Talk to us →`

---

### 6.6 CONTACT / DESIGN PARTNERS

- Tag: `[ START ]`
- Headline: **Tell us the workflow that costs you most when it fails.**
- Body: A member of the team replies with a tailored path — baseline, instrument, measure. Start narrow; expand once it's proven.
- Form (`cripsis.brief`): **Work email*** · **Organization** · **Role** · **What should Cripsis learn or take on?*** (textarea) · urgency radios `Exploring · This quarter · Priority`. Submit: `Send brief →`.
- Quiet note: We reply from a real person. Your information isn't shared.

---

### 6.7 INVESTORS (separate, quiet page — mirrors the investor brief; footer-linked only)

- Tag: `[ INVESTOR BRIEF ]`
- **Problem** — Headline: **Enterprise intelligence is infrastructure.** Enterprises depend on intelligence they neither own nor control, while the data, context, and institutional knowledge that make it valuable create value for someone else.
- **Solution** — Headline: **Own your intelligence.** Cripsis gives intelligence back to the enterprise — increasingly specific to how the organization operates — and converts it into measurable operating leverage. Progression (mono): `OBSERVE → LEARN → VALIDATE → SPREAD → DELEGATE → OPERATE`.
- **Why it compounds** — Every validated workflow adds institutional intelligence. Every integration deepens the position. Every delegated task moves more recurring work through Cripsis. Better models and hardware improve Cripsis rather than replace the control layer.
- **The opportunity** — a restrained metrics panel (mono): recurring contribution margin and modeled unit economics, kept sober and clearly labeled *modeled / illustrative*.
- **The round** — a quiet panel with the round summary and a single CTA: `Request the full brief →` (email). Risk/again-labeled-illustrative note at the bottom, small and muted.

---

## 7. Voice & copy rules
Declarative, spare, engineered. Short sentences. Nouns and verbs, few adjectives. State what the system *does* and *guarantees*. Rhythmic confidence in the infrastructure register (e.g. *"Observes. Reasons. Asks. Never acts without authority."*). Terminal vocabulary in labels; plain, exact English in the substance. Never playful, never salesy, never stage-revealing.

## 8. Deliverable
- One desktop artboard (1440px, dark) per page in §6, in the priority order given, plus one components artboard (§4).
- Consistent nav/footer across all.
- Annotate intended motion and any responsive intent as small notes.
- Absolute constraints restated: **no industry named · no company-stage disclosure · palette from §3 only · mono rationed.**

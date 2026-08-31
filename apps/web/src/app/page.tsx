import { Container } from '@/components/layout/Container';
import { Section } from '@/components/marketing/Section';
import { Button } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { TechTag } from '@/components/ui/TechTag';
import { PlaneGraph } from '@/components/marketing/PlaneGraph';
import { NodeRail } from '@/components/marketing/NodeRail';
import { Blueprint } from '@/components/marketing/Blueprint';
import { Reveal } from '@/components/marketing/Reveal';
import { StatBand } from '@/components/marketing/StatBand';
import { SignalTicker } from '@/components/marketing/SignalTicker';
import { LiveTerminal } from '@/components/marketing/LiveTerminal';
import { ControlPlaneDiagram } from '@/components/marketing/ControlPlaneDiagram';
import { ScrollProgress } from '@/components/marketing/ScrollProgress';
import { ChapterMark } from '@/components/marketing/ChapterMark';
import {
  railNodes,
  featureTiles,
  economics,
  economicsChain,
  faq,
  heroTerminal,
} from '@/content/home';

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <SignalTicker />

      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative flex min-h-[calc(100svh-150px)] items-center overflow-hidden border-b border-line bg-bg-0 py-16">
        <Blueprint dense />

        {/* cinematic depth — glows + a few intentional signal blocks */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute right-[6%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(22,169,214,0.20),transparent_68%)] blur-[36px]" />
          <div className="absolute -left-[8%] top-[6%] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(104,216,255,0.10),transparent_70%)] blur-[44px]" />
          <span className="signal-pulse absolute right-[3%] top-[14%] h-[16%] w-[9%] rounded-[3px] border border-[rgba(104,216,255,0.24)] bg-[linear-gradient(135deg,rgba(104,216,255,0.18),transparent)]" />
          <span
            className="signal-pulse absolute bottom-[16%] left-[4%] h-[13%] w-[6%] rounded-[3px] border border-line bg-[linear-gradient(135deg,rgba(22,169,214,0.12),transparent)]"
            style={{ animationDelay: '1.6s' }}
          />
          <span
            className="signal-pulse absolute bottom-[10%] right-[16%] h-[11%] w-[10%] rounded-[3px] border border-line bg-[linear-gradient(135deg,rgba(22,169,214,0.10),transparent)]"
            style={{ animationDelay: '2.4s' }}
          />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <TechTag className="mb-5 block">~/cripsis — the control plane</TechTag>
              <Kicker>the infrastructure of cognition</Kicker>
              <h1 className="mt-6 text-[clamp(46px,9.5vw,84px)] font-bold leading-[0.98] tracking-[-0.035em]">
                Own the intelligence{' '}
                <span className="text-muted">your business runs on.</span>
              </h1>
              <p className="mt-7 max-w-[520px] text-[18.5px] leading-[1.6] text-body">
                A dedicated AI operating environment that learns how your organization
                actually works — then keeps that intelligence as your asset, under your
                control.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Button
                  href="/design-partners"
                  className="shadow-[0_0_30px_rgba(104,216,255,0.30)]"
                >
                  Become a design partner →
                </Button>
                <a
                  href="#how"
                  className="font-mono text-[13.5px] text-muted hover:text-accent"
                >
                  see how it works ↓
                </a>
              </div>
              <div className="mt-7 inline-flex items-center gap-2 rounded-[3px] border border-line bg-[rgba(2,6,8,0.8)] px-4 py-2.5 font-mono text-[13px] text-body backdrop-blur-sm">
                <span className="text-accent">❯</span> cripsis observe --live
                <span className="blink">▍</span>
              </div>
            </div>

            {/* centerpiece — the three planes as a live node graph */}
            <div className="relative">
              <div className="floaty">
                <PlaneGraph />
              </div>
              <div className="mt-1 text-center font-mono text-[11.5px] text-muted">
                <span className="text-accent">●</span> one environment · three planes ·
                gated by construction
              </div>
            </div>
          </div>
        </Container>

        {/* scroll cue */}
        <a
          href="#how"
          aria-label="Scroll to how it works"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 font-mono text-[11px] tracking-[0.2em] text-muted hover:text-accent lg:flex"
        >
          SCROLL
          <span className="blink text-accent">↓</span>
        </a>
      </section>

      {/* ─────────────────── 01 · THE TENSION ─────────────────── */}
      <Section tone="bg-1" signal>
        <ChapterMark n="01" title="the tension" />
        <h2 className="mt-8 max-w-[900px] text-[clamp(28px,4.6vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-muted">
          Your operating intelligence is your edge.{' '}
          <span className="text-heading">
            Today it walks out the door with your people — or you rent it back from a
            vendor.
          </span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-3">
          {[
            ['Lost', 'The best way to handle a case lives in one operator’s head — and leaves when they do.'],
            ['Surrendered', 'Generic AI learns from your work to improve someone else’s product.'],
            ['Reactive', 'Problems are discovered while working the file — never before.'],
          ].map(([k, v]) => (
            <div key={k} className="border-t border-line pt-4">
              <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent">
                {k}
              </div>
              <p className="mt-2.5 text-[14.5px] text-body">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ──────────────────── 02 · THE SHIFT ──────────────────── */}
      <Section tone="bg-0">
        <ChapterMark n="02" title="the shift" />
        <h2 className="mt-8 max-w-[820px] text-[clamp(28px,4.6vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-muted">
          Not a chatbot. Not RPA.{' '}
          <span className="text-heading">
            A system that learns how your operation actually works — and keeps it.
          </span>
        </h2>
        <p className="mt-6 max-w-[680px] text-[17px] text-body">
          Cripsis observes authorized work, forms and validates practices, and
          progressively assists — while your business controls the intelligence and you
          determine the authority.
        </p>
        <div className="mt-14">
          <NodeRail nodes={railNodes} />
        </div>
      </Section>

      {/* ─────────────────── 03 · HOW IT WORKS ────────────────── */}
      <Section id="how" tone="bg-1" signal className="scroll-mt-[120px]">
        <ChapterMark n="03" title="how it works" />
        <h2 className="mt-8 max-w-[720px] text-[clamp(26px,4vw,36px)] font-semibold leading-[1.14] tracking-[-0.02em]">
          Watch it observe, ask, and remember.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* sticky terminal — the anchor that keeps focus */}
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <div className="crt-flicker overflow-hidden rounded-[6px] border border-line-strong bg-bg-2 shadow-[0_0_30px_rgba(104,216,255,0.06)]">
              <div className="flex items-center gap-[7px] border-b border-line bg-bg-0 px-4 py-3">
                <span className="h-[9px] w-[9px] rounded-full bg-accent" />
                <span className="h-[9px] w-[9px] rounded-full bg-accent-dim" />
                <span className="h-[9px] w-[9px] rounded-full bg-accent-dim" />
                <span className="ml-1 font-mono text-[11.5px] text-muted">
                  cripsis@enterprise ~ %
                </span>
              </div>
              <div className="relative p-5">
                <div className="scanlines pointer-events-none absolute inset-0" aria-hidden />
                <LiveTerminal
                  lines={heroTerminal}
                  loop
                  lineDelay={420}
                  className="relative text-[12px] leading-[1.85]"
                />
              </div>
            </div>
          </div>

          {/* the capability sequence — one focal beat at a time */}
          <div>
            {featureTiles.map((t) => (
              <Reveal
                key={t.num}
                className="border-t border-line py-7 first:border-t-0 first:pt-0"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[13px] tracking-[0.1em] text-accent">
                    {t.num}
                  </span>
                  <h3 className="text-[clamp(20px,2.6vw,24px)]">{t.title}</h3>
                </div>
                <p className="mt-2.5 pl-[36px] text-[15px] text-body">{t.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ──────────────────── 04 · THE SYSTEM ─────────────────── */}
      <Section tone="bg-0">
        <ChapterMark n="04" title="the system" />
        <div className="mt-8 grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[52px]">
          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <h2 className="text-[clamp(26px,4vw,36px)] font-semibold leading-[1.14] tracking-[-0.02em]">
              One environment. Three planes. Clean boundaries.
            </h2>
            <p className="mt-5 text-[17px] text-body">
              Cripsis separates thinking, knowing, and allowing — so intelligence
              compounds without ever escaping your control. Every action is proposed,
              checked, gated, and receipted.
            </p>
            <a href="/platform" className="mt-6 inline-block font-mono text-[13.5px]">
              See the full platform →
            </a>
          </div>
          <ControlPlaneDiagram />
        </div>
      </Section>

      {/* ────────────────── 05 · BY CONSTRUCTION ──────────────── */}
      <Section tone="bg-1" signal>
        <ChapterMark n="05" title="by construction" />
        <h2 className="mt-8 max-w-[760px] text-[clamp(28px,4.6vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-muted">
          Guarantees, <span className="text-heading">not promises.</span>
        </h2>
        <p className="mt-6 max-w-[680px] text-[17px] text-body">
          The control plane is deterministic. Authority is explicit, denials win, and
          every action leaves a receipt — by construction, not by policy you have to
          trust.
        </p>
        <div className="mt-11">
          <StatBand />
        </div>
      </Section>

      {/* ─────────────────── 06 · THE ECONOMICS ───────────────── */}
      <Section tone="bg-0">
        <ChapterMark n="06" title="the economics" />
        <h2 className="mt-8 max-w-[620px] text-[clamp(28px,4.6vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-muted">
          Saving seconds <span className="text-heading">is just the start.</span>
        </h2>
        <p className="mt-6 max-w-[720px] text-[17px] text-body">
          As Cripsis learns, repeated steps collapse into delegated work. The unit of
          value shifts from time saved to human capacity released.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          {economics.map((e) => (
            <div key={e.label} className="rounded-[4px] border border-line bg-bg-2 p-6">
              <span className="font-mono text-[13px] tracking-[0.1em] text-accent">
                {e.label}
              </span>
              <p className="mt-3 text-[14px] text-body">{e.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2.5 rounded-[3px] border border-dashed border-line-strong bg-bg-1 px-5 py-4 font-mono text-[13px] text-body">
          {economicsChain.map((step, i) => (
            <span key={step} className="flex items-center gap-2.5">
              <span className={i === economicsChain.length - 1 ? 'text-accent' : undefined}>
                {step}
              </span>
              {i < economicsChain.length - 1 ? (
                <span className="text-accent-dim">→</span>
              ) : null}
            </span>
          ))}
        </div>
      </Section>

      {/* ─────────────────────── THE CLOSE ────────────────────── */}
      <div className="relative overflow-hidden border-b border-line bg-[linear-gradient(180deg,var(--color-bg-1),var(--color-bg-0))]">
        <Blueprint />
        <Container className="relative z-10 py-[120px] text-center">
          <Kicker className="text-center">start with one workflow</Kicker>
          <h2 className="mx-auto mt-[18px] max-w-[820px] text-[clamp(34px,6vw,52px)] font-bold leading-[1.06] tracking-[-0.02em]">
            Choose the workflow that costs you the most when it fails.
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[18.5px] text-body">
            We baseline it, instrument it, and measure the delta. Give us 30 minutes to
            review it with you.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/design-partners">Become a design partner →</Button>
            <Button href="/contact" variant="ghost">
              Talk to us
            </Button>
          </div>
        </Container>
      </div>

      {/* ───────────────────────── FAQ ────────────────────────── */}
      <Section tone="bg-1">
        <ChapterMark n="—" title="questions, answered" />
        <div className="mt-9">
          {faq.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 gap-4 border-t border-line py-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8 ${i === faq.length - 1 ? 'border-b' : ''}`}
            >
              <h3 className="text-[18px]">{item.q}</h3>
              <p className="text-[15px] text-body">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

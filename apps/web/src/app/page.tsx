import { Container } from '@/components/layout/Container';
import { Section } from '@/components/marketing/Section';
import { Button } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { TechTag } from '@/components/ui/TechTag';
import { Tile } from '@/components/ui/Tile';
import { CRTMonitor } from '@/components/marketing/CRTMonitor';
import { NodeRail } from '@/components/marketing/NodeRail';
import { DemoCard } from '@/components/marketing/DemoCard';
import { Blueprint } from '@/components/marketing/Blueprint';
import { Reveal } from '@/components/marketing/Reveal';
import { StatBand } from '@/components/marketing/StatBand';
import { SignalTicker } from '@/components/marketing/SignalTicker';
import { SignalField } from '@/components/marketing/SignalField';
import { LiveTerminal } from '@/components/marketing/LiveTerminal';
import { ControlPlaneDiagram } from '@/components/marketing/ControlPlaneDiagram';
import { PullQuote } from '@/components/marketing/PullQuote';
import {
  railNodes,
  featureTiles,
  learningFlow,
  economics,
  economicsChain,
  faq,
  heroTerminal,
} from '@/content/home';

export default function HomePage() {
  return (
    <>
      <SignalTicker />

      {/* HERO */}
      <div className="relative overflow-hidden border-b border-line bg-[radial-gradient(1200px_560px_at_15%_-8%,rgba(22,169,214,0.12),transparent_60%)]">
        <Blueprint dense />
        <SignalField />
        <div className="scanlines pointer-events-none absolute inset-0 z-0" aria-hidden />
        <Container className="relative z-10 py-20 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <TechTag className="mb-5 block">~/cripsis — the control plane</TechTag>
              <Kicker>the infrastructure of cognition</Kicker>
              <h1 className="mt-5 text-[clamp(44px,9vw,76px)] font-bold tracking-[-0.03em]">
                Own the intelligence your business runs on.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18.5px] text-body">
                A dedicated AI operating environment that learns how your organization
                actually works — then keeps that intelligence as your asset, under your
                control.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="/design-partners">Become a design partner →</Button>
                <Button href="/platform" variant="ghost">
                  Explore the platform ↓
                </Button>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-[3px] border border-line bg-bg-0 px-4 py-2.5 font-mono text-[13px] text-body">
                <span className="text-accent">❯</span> cripsis observe --live
                <span className="blink">▍</span>
              </div>
            </div>

            <CRTMonitor>
              <LiveTerminal
                lines={heroTerminal}
                lineDelay={380}
                className="text-[11px] leading-[1.72]"
              />
            </CRTMonitor>
          </div>
        </Container>
      </div>

      {/* NODE RAIL */}
      <div className="relative overflow-hidden border-b border-line bg-bg-1">
        <Blueprint />
        <Container className="relative z-10 pb-14 pt-16">
          <NodeRail nodes={railNodes} />
        </Container>
      </div>

      {/* OVERVIEW / FEATURE MATRIX */}
      <Section tone="bg-0" signal>
        <Kicker>the operating environment</Kicker>
        <h2 className="mt-[18px] max-w-[680px] text-[40px]">
          Not a chatbot. Not RPA. A system that learns your operation.
        </h2>
        <p className="mt-5 max-w-[720px] text-[18.5px] text-body">
          Cripsis observes authorized work, forms and validates practices, and
          progressively assists — while your business controls the intelligence and you
          determine the authority.
        </p>
        <div className="mt-11 border-l border-t border-line">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featureTiles.map((t, i) => (
              <Reveal
                key={t.num}
                delay={(i % 3) * 80}
                className="relative overflow-hidden border-b border-r border-line p-6"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-1 -top-3 font-display text-[86px] font-bold leading-none tracking-[-0.04em] text-accent/[0.06]"
                >
                  {t.num}
                </span>
                <div className="relative">
                  <div className="font-mono text-[12px] tracking-[0.14em] text-muted">
                    {t.num}
                  </div>
                  <h3 className="mt-3 text-[18px] text-heading">{t.title}</h3>
                  <p className="mt-2.5 text-[14px] text-body">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* PULL-QUOTE */}
      <PullQuote kicker="the doctrine">
        Repeated behavior is evidence — not truth.
      </PullQuote>

      {/* THREE PLANES + SIGNATURE DIAGRAM */}
      <Section tone="bg-1" signal>
        <div className="grid grid-cols-1 items-center gap-13 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[52px]">
          <div>
            <Kicker>the system</Kicker>
            <h2 className="mt-[18px] text-[40px]">
              One environment. Three planes. Clean boundaries.
            </h2>
            <p className="mt-5 text-[18.5px] text-body">
              Cripsis separates thinking, knowing, and allowing — so intelligence
              compounds without ever escaping your control. Every action is proposed,
              checked, gated, and receipted.
            </p>
            <div className="mt-6 font-mono text-[13.5px] leading-[2.1] text-body">
              <div>
                <span className="text-accent">›</span> CripsisAI reasons and recommends.
              </div>
              <div>
                <span className="text-accent">›</span> Kybernite preserves what is known.
              </div>
              <div>
                <span className="text-accent">›</span>{' '}
                <span className="text-accent">Trilithium decides what is allowed.</span>
              </div>
            </div>
            <a href="/platform" className="mt-6 inline-block font-mono text-[13.5px]">
              See the architecture →
            </a>
          </div>

          <ControlPlaneDiagram />
        </div>
      </Section>

      {/* ACTIVE LEARNING */}
      <Section tone="bg-0">
        <div className="grid grid-cols-1 items-center gap-13 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[52px]">
          <div className="flex flex-col gap-4">
            <DemoCard label="agent inquiry">
              <div className="text-[13.5px] leading-[1.75] text-body">
                <span className="text-accent">
                  Cripsis asks <span className="blink">▍</span>
                </span>
                <br />
                “I’ve seen two different ways this exception gets resolved. Does the right
                path depend on the customer, the service level, or operator preference?”
              </div>
            </DemoCard>

            <DemoCard label="practice" labelBracketed>
              <div className="font-display text-[15.5px] text-heading">
                Time-critical case at risk of a missed commitment
              </div>
              <div className="mt-3.5 grid grid-cols-[120px_1fr] gap-y-[9px] text-[12.5px] text-body">
                <span className="text-muted">EVIDENCE</span>
                <span>27 cases · 3 senior operators</span>
                <span className="text-muted">CONFIRMED</span>
                <span>Operations manager</span>
                <span className="text-muted">CONFIDENCE</span>
                <span className="text-accent">High</span>
              </div>
            </DemoCard>
          </div>

          <div>
            <Kicker>active learning</Kicker>
            <h2 className="mt-[18px] text-[40px]">It doesn’t just watch. It asks.</h2>
            <p className="mt-5 text-[18.5px] text-body">
              Cripsis learns from the bottom up — observing how work is actually done,
              forming hypotheses, and validating them through dialogue.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-2 rounded-[3px] border border-line bg-bg-2 px-[18px] py-4">
              {learningFlow.map((step, i) => (
                <span key={step} className="flex items-center gap-2.5">
                  <span
                    className={
                      i === 0 || i === learningFlow.length - 1
                        ? 'font-mono text-[12px] text-accent'
                        : 'font-mono text-[12px] text-body'
                    }
                  >
                    {step}
                  </span>
                  {i < learningFlow.length - 1 ? (
                    <span className="font-mono text-accent-dim">→</span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ECONOMICS */}
      <Section tone="bg-0" signal>
        <Kicker>the economics</Kicker>
        <h2 className="mt-[18px] max-w-[560px] text-[40px]">
          Saving seconds is just the start.
        </h2>
        <p className="mt-5 max-w-[720px] text-[18.5px] text-body">
          As Cripsis learns, repeated steps collapse into delegated work. The unit of
          value shifts from time saved to human capacity released.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          {economics.map((e) => (
            <Tile key={e.label}>
              <span className="font-mono text-[13px] tracking-[0.1em] text-accent">
                {e.label}
              </span>
              <p className="mt-3 text-[14px] text-body">{e.body}</p>
            </Tile>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2.5 rounded-[3px] border border-dashed border-line-strong bg-bg-1 px-5 py-4 font-mono text-[13px] text-body">
          {economicsChain.map((step, i) => (
            <Reveal key={step} delay={i * 110}>
              <span className="flex items-center gap-2.5">
                <span className={i === economicsChain.length - 1 ? 'text-accent' : undefined}>
                  {step}
                </span>
                {i < economicsChain.length - 1 ? (
                  <span className="text-accent-dim">→</span>
                ) : null}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="bg-1">
        <Kicker>faq</Kicker>
        <h2 className="mt-[18px] text-[40px]">Questions, answered.</h2>
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

      {/* TRUST MATRIX */}
      <Section tone="bg-1">
        <Kicker>trust, by construction</Kicker>
        <h2 className="mt-[18px] max-w-[560px] text-[clamp(30px,5vw,40px)]">
          Guarantees, not promises.
        </h2>
        <p className="mt-5 max-w-[680px] text-[18.5px] text-body">
          The control plane is deterministic. Authority is explicit, denials win, and
          every action leaves a receipt — by construction, not by policy you have to
          trust.
        </p>
        <div className="mt-10">
          <StatBand />
        </div>
      </Section>

      {/* FINAL CTA */}
      <div className="relative overflow-hidden border-b border-line bg-[linear-gradient(180deg,var(--color-bg-1),var(--color-bg-0))]">
        <Blueprint />
        <Container className="relative z-10 py-[104px] text-center">
          <Kicker className="text-center">start with one workflow</Kicker>
          <h2 className="mt-[18px] text-[clamp(32px,6vw,46px)]">
            Choose the workflow that costs you
            <br className="hidden sm:block" /> the most when it fails.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[18.5px] text-body">
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
    </>
  );
}

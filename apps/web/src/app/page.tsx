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
import {
  railNodes,
  featureTiles,
  planes,
  learningFlow,
  contrastToday,
  contrastCripsis,
  economics,
  economicsChain,
  faq,
} from '@/content/home';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-line bg-[radial-gradient(1200px_560px_at_15%_-8%,rgba(22,169,214,0.12),transparent_60%)]">
        <Blueprint />
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
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/design-partners">Become a design partner →</Button>
                <Button href="/platform" variant="ghost">
                  Explore the platform ↓
                </Button>
              </div>
            </div>

            <CRTMonitor>
              <div className="text-[11px] leading-[1.72] text-body">
                <div>
                  <span className="text-muted">cripsis@enterprise ~ %</span>{' '}
                  <span className="text-heading">observe</span>
                </div>
                <div className="mt-[5px]">
                  <span className="text-accent">●</span> observing authorized activity —{' '}
                  <span className="text-muted">live</span>
                </div>
                <div>
                  <span className="text-accent">●</span> task episode assembled —{' '}
                  <span className="text-muted">7 events</span>
                </div>
                <div>
                  <span className="text-accent">●</span> hypothesis formed —{' '}
                  <span className="text-muted">recovery pattern</span>
                </div>
                <div className="mt-2 text-accent">
                  Cripsis asks <span className="blink">▍</span>
                </div>
                <div className="text-body">“does the path depend on service level?”</div>
                <div className="mt-2">
                  <span className="text-accent">●</span> practice validated —{' '}
                  <span className="text-accent">confidence: high</span>
                </div>
                <div>
                  <span className="text-accent-dim">○</span> receipt recorded —{' '}
                  <span className="text-muted">trilithium</span>
                </div>
                <div className="mt-2">
                  <span className="text-muted">cripsis@enterprise ~ %</span>{' '}
                  <span className="blink">▍</span>
                </div>
              </div>
            </CRTMonitor>
          </div>
        </Container>
      </div>

      {/* NODE RAIL */}
      <div className="border-b border-line bg-bg-1">
        <Container className="pb-14 pt-16">
          <NodeRail nodes={railNodes} />
        </Container>
      </div>

      {/* OVERVIEW / FEATURE TILES */}
      <Section tone="bg-0">
        <Kicker>the operating environment</Kicker>
        <h2 className="mt-[18px] max-w-[680px] text-[40px]">
          Not a chatbot. Not RPA. A system that learns your operation.
        </h2>
        <p className="mt-5 max-w-[720px] text-[18.5px] text-body">
          Cripsis observes authorized work, forms and validates practices, and
          progressively assists — while your business controls the intelligence and you
          determine the authority.
        </p>
        <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureTiles.map((t, i) => (
            <Reveal key={t.num} delay={(i % 3) * 80} className="h-full">
              <Tile num={t.num} title={t.title} body={t.body} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* THREE PLANES */}
      <Section tone="bg-1">
        <div className="grid grid-cols-1 items-center gap-13 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[52px]">
          <div>
            <Kicker>the system</Kicker>
            <h2 className="mt-[18px] text-[40px]">
              One environment. Three planes. Clean boundaries.
            </h2>
            <p className="mt-5 text-[18.5px] text-body">
              Cripsis separates thinking, knowing, and allowing — so intelligence
              compounds without ever escaping your control.
            </p>
            <div className="mt-6 font-mono text-[13.5px] leading-[2.1] text-body">
              <div>
                <span className="text-accent">›</span> Models reason.
              </div>
              <div>
                <span className="text-accent">›</span> Agents propose and coordinate.
              </div>
              <div>
                <span className="text-accent">›</span> Kybernite preserves.
              </div>
              <div>
                <span className="text-accent">›</span>{' '}
                <span className="text-accent">Trilithium controls.</span>
              </div>
            </div>
            <a href="/platform" className="mt-6 inline-block font-mono text-[13.5px]">
              See the architecture →
            </a>
          </div>

          <div className="overflow-hidden rounded-[5px] border border-line bg-bg-2">
            {planes.map((p, i) => (
              <div
                key={p.name}
                className={i < planes.length - 1 ? 'border-b border-line px-[26px] py-6' : 'px-[26px] py-6'}
              >
                <div className="font-mono text-[11.5px] tracking-[0.14em] text-muted">
                  {p.name.toUpperCase()} &nbsp;·&nbsp;{' '}
                  <span className="text-accent">{p.verb.toUpperCase()}</span>
                </div>
                <p className="mt-2.5 text-[14px] text-body">{p.body}</p>
              </div>
            ))}
          </div>
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
              forming hypotheses, and validating them through dialogue. Repeated behavior
              is evidence, not truth.
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

      {/* CONTRAST */}
      <Section tone="bg-1">
        <Kicker>from reactive to anticipatory</Kicker>
        <h2 className="mt-[18px] max-w-[560px] text-[40px]">
          Don’t wait for the work to fail.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-2">
          <div className="rounded-[4px] border border-line bg-bg-2 p-6">
            <div className="font-mono text-[12px] tracking-[0.14em] text-muted">
              TODAY &nbsp;·&nbsp; reactive · manual · person-dependent
            </div>
            <div className="mt-[18px] flex flex-col gap-3.5">
              {contrastToday.map((line, i) => (
                <div key={i} className="text-[14.5px] text-body">
                  <span className="font-mono text-accent-dim">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  &nbsp; {line}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[4px] border border-line-strong bg-[linear-gradient(180deg,rgba(22,169,214,0.05),var(--color-bg-2))] p-6">
            <div className="font-mono text-[12px] tracking-[0.14em] text-accent">
              CRIPSIS &nbsp;·&nbsp; anticipate · triage · recommend · delegate
            </div>
            <div className="mt-[18px] flex flex-col gap-3.5">
              {contrastCripsis.map((line, i) => (
                <div key={i} className="text-[14.5px] text-body">
                  <span className="font-mono text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  &nbsp; {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ECONOMICS */}
      <Section tone="bg-0">
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
      <div className="border-b border-line bg-[linear-gradient(180deg,var(--color-bg-1),var(--color-bg-0))]">
        <Container className="py-[104px] text-center">
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

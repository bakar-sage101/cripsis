import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/marketing/PageHero';
import { CtaBand } from '@/components/marketing/CtaBand';
import { Tile } from '@/components/ui/Tile';
import { Button } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { Reveal } from '@/components/marketing/Reveal';
import { proves, engagement, partnerReceives } from '@/content/design-partners';

export const metadata: Metadata = {
  title: 'Design Partners',
  description:
    'Cripsis is working with a small number of founding design partners to shape early production deployments — one high-value workflow, ninety days, measurable outcomes.',
};

export default function DesignPartnersPage() {
  return (
    <>
      <PageHero
        tag="~/cripsis/design-partners"
        kicker="founding design partners"
        title="Start with one workflow."
        subtitle="Cripsis is working with a small number of founding design partners to shape early production deployments. One high-value workflow, ninety days, measurable outcomes — then expand from a validated foundation."
        scanlines
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Send a brief →</Button>
          <Button href="/contact" variant="ghost">
            Talk to us
          </Button>
        </div>
      </PageHero>

      {/* THE OPERATING PROBLEM */}
      <Container className="pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Kicker>the operating problem</Kicker>
            <h2 className="mt-[18px] text-[clamp(26px,4vw,32px)]">
              Your best work shouldn’t depend on who’s at the desk.
            </h2>
          </div>
          <div>
            <p className="text-[17px] text-body">
              Experienced operators perform specific workflows extremely well. Those same
              workflows are often handled very differently across the rest of the team.
            </p>
            <div className="mt-5 border-l-2 border-accent bg-bg-1 px-[22px] py-5">
              <p className="text-[16px] text-heading">
                The experience shouldn’t depend on who happens to be working the case.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* WHAT THE ENGAGEMENT PROVES */}
      <div className="mt-16 border-y border-line bg-bg-1">
        <Container className="py-[68px]">
          <Kicker>what the engagement proves</Kicker>
          <h2 className="mt-4 text-[clamp(26px,4vw,32px)]">
            Cripsis learns from the bottom up.
          </h2>
          <Reveal className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3">
            {proves.map((p) => (
              <Tile key={p.label}>
                <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
                  {p.label}
                </div>
                <h3 className="mt-3 text-[17px]">{p.title}</h3>
                <p className="mt-2.5 text-[14px] text-body">{p.body}</p>
              </Tile>
            ))}
          </Reveal>
        </Container>
      </div>

      {/* THE 90-DAY ENGAGEMENT */}
      <Container className="pt-[72px]">
        <Kicker>the 90-day engagement</Kicker>
        <h2 className="mt-4 text-[clamp(26px,4vw,32px)]">What participation looks like.</h2>
        <p className="mt-4 max-w-[680px] text-[16.5px] text-body">
          The engagement starts with one high-value workflow. Broader coverage expands
          from that validated foundation.
        </p>
        <div className="mt-9 flex flex-col">
          {engagement.map((e, i) => (
            <Reveal
              key={e.step}
              delay={i * 60}
              className={`grid grid-cols-[56px_1fr] gap-6 border-t border-line py-[22px] sm:grid-cols-[92px_1fr] ${
                i === engagement.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="font-display text-[clamp(30px,5vw,42px)] font-bold leading-none tracking-[-0.03em] text-accent/80">
                {e.step}
              </div>
              <div>
                <h3 className="text-[18px]">{e.title}</h3>
                <p className="mt-2 text-[14.5px] text-body">{e.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* WHAT PARTNERS RECEIVE */}
      <div className="mt-16 border-y border-line bg-bg-1">
        <Container className="py-[68px]">
          <Kicker>what partners receive</Kicker>
          <h2 className="mt-4 text-[clamp(26px,4vw,32px)]">
            Founder-level access, on real capability.
          </h2>
          <Reveal className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerReceives.map((p) => (
              <Tile key={p.label}>
                <div className="font-mono text-[12px] uppercase text-accent">
                  {p.label}
                </div>
                <p className="mt-3 text-[14px] text-body">{p.body}</p>
              </Tile>
            ))}
          </Reveal>
        </Container>
      </div>

      {/* CONTROL CALLOUT */}
      <Container className="py-[72px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <Kicker>what learning means</Kicker>
            <h2 className="mt-4 text-[28px]">
              You control the intelligence. You determine the authority.
            </h2>
          </div>
          <p className="text-[16.5px] text-body">
            You control which systems and information Cripsis may access. Customer-specific
            intelligence stays segregated in your environment and is not used to improve
            another customer’s system. Access and deletion terms are defined before
            deployment.
          </p>
        </div>
      </Container>

      <CtaBand
        title="Give us thirty minutes."
        subtitle="Bring the workflow that costs you the most when it fails. We’ll review it with you."
        footnote={
          <>
            Text <span className="text-accent">1.760.802.4203</span> &nbsp;·&nbsp; Email{' '}
            <span className="text-accent">andrew@cripsis.com</span>
          </>
        }
      >
        <Button href="/contact">Send a brief →</Button>
      </CtaBand>
    </>
  );
}

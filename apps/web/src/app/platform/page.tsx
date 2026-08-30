import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/marketing/Section';
import { Blueprint } from '@/components/marketing/Blueprint';
import { SignalField } from '@/components/marketing/SignalField';
import { CtaBand } from '@/components/marketing/CtaBand';
import { Button } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { TechTag } from '@/components/ui/TechTag';
import { Reveal } from '@/components/marketing/Reveal';
import { PillarNav } from '@/components/marketing/PillarNav';
import { PlaneStack } from '@/components/marketing/PlaneStack';
import { ControlPlaneDiagram } from '@/components/marketing/ControlPlaneDiagram';
import { LearningLoop } from '@/components/marketing/LearningLoop';
import { AutonomyRamp } from '@/components/marketing/AutonomyRamp';
import { StatBand } from '@/components/marketing/StatBand';
import {
  pillars,
  platformChips,
  memoryTypes,
  trustPoints,
  trustStats,
  deploymentSteps,
  type Pillar,
} from '@/content/platform';

export const metadata: Metadata = {
  title: 'Platform',
  description:
    'One environment that observes, learns, remembers, governs, and operates — with clean boundaries between what thinks, what knows, and what is allowed.',
};

const byId = (id: string) => pillars.find((p) => p.id === id) as Pillar;

/** Ghost numeral + label + heading for a pillar. */
function PillarHeader({ pillar, className }: { pillar: Pillar; className?: string }) {
  return (
    <div className={className}>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 right-0 font-display text-[clamp(90px,13vw,150px)] font-bold leading-none tracking-[-0.04em] text-accent/[0.06]"
      >
        {pillar.index}
      </span>
      <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
        {pillar.index} · {pillar.category}
      </div>
      <h2 className="mt-3 max-w-[720px] text-[clamp(26px,4vw,32px)]">{pillar.title}</h2>
      <p className="mt-3.5 max-w-[680px] text-[16.5px] text-body">{pillar.sub}</p>
    </div>
  );
}

export default function PlatformPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-line bg-[radial-gradient(1000px_460px_at_20%_-10%,rgba(22,169,214,0.12),transparent_60%)]">
        <Blueprint dense />
        <SignalField />
        <Container className="relative z-10 py-20 sm:py-24">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <TechTag className="mb-5 block">~/cripsis/platform</TechTag>
              <Kicker>the platform</Kicker>
              <h1 className="mt-5 max-w-[640px] text-[clamp(38px,7vw,64px)] font-bold tracking-[-0.03em]">
                <span className="text-muted">Everything the enterprise needs to</span>{' '}
                own its intelligence.
              </h1>
              <p className="mt-6 max-w-[560px] text-[18px] text-body">
                One environment that observes, learns, remembers, governs, and operates —
                with clean boundaries between what thinks, what knows, and what is allowed.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/design-partners">Become a design partner →</Button>
                <Button href="#three-planes" variant="ghost">
                  Explore the six pillars ↓
                </Button>
              </div>
            </div>
            <PlaneStack />
          </div>
        </Container>
      </div>

      {/* STICKY PILLAR NAV */}
      <PillarNav items={platformChips} />

      {/* 01 — THREE PLANES */}
      <Section id="three-planes" tone="bg-1" signal className="scroll-mt-[168px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[52px]">
          <div className="relative">
            <PillarHeader pillar={byId('three-planes')} />
            <div className="mt-6 font-mono text-[13px] leading-[2] text-body">
              <div>
                <span className="text-accent">›</span> Each plane owns one responsibility.
              </div>
              <div>
                <span className="text-accent">›</span> Nothing crosses a boundary un-gated.
              </div>
              <div>
                <span className="text-accent">›</span> Every action ends in a receipt.
              </div>
            </div>
          </div>
          <ControlPlaneDiagram />
        </div>
      </Section>

      {/* 02 — ACTIVE LEARNING */}
      <Section id="active-learning" tone="bg-0" className="scroll-mt-[168px]">
        <div className="relative">
          <PillarHeader pillar={byId('active-learning')} />
        </div>
        <div className="mt-10">
          <LearningLoop />
        </div>
      </Section>

      {/* 03 — ORGANIZATIONAL MEMORY */}
      <Section id="organizational-memory" tone="bg-1" signal className="scroll-mt-[168px]">
        <div className="relative">
          <PillarHeader pillar={byId('organizational-memory')} />
        </div>
        <div className="mt-10 border-l border-t border-line">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {memoryTypes.map((m, i) => (
              <Reveal
                key={m.tag}
                delay={(i % 3) * 70}
                className="relative overflow-hidden border-b border-r border-line p-6"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-1 -top-2 font-display text-[64px] font-bold leading-none text-accent/[0.05]"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="relative">
                  <div className="font-mono text-[11px] text-accent">{m.tag}</div>
                  <h3 className="mt-2 text-[16px]">{m.title}</h3>
                  <p className="mt-2 text-[13px] text-body">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 04 — TRUST & CONTROL */}
      <Section id="trust-control" tone="bg-0" className="scroll-mt-[168px]">
        <div className="relative">
          <PillarHeader pillar={byId('trust-control')} />
        </div>
        <div className="mt-9">
          <StatBand stats={trustStats} />
        </div>
        <div className="mt-4 border-l border-t border-line">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((t, i) => (
              <Reveal
                key={t.title}
                delay={(i % 3) * 70}
                className="border-b border-r border-line p-6"
              >
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 font-mono text-accent">✓</span>
                  <div>
                    <h3 className="text-[15.5px]">{t.title}</h3>
                    <p className="mt-1.5 text-[13px] text-body">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 05 — DELEGATION */}
      <Section id="delegation" tone="bg-1" signal className="scroll-mt-[168px]">
        <div className="relative">
          <PillarHeader pillar={byId('delegation')} />
        </div>
        <div className="mt-10">
          <AutonomyRamp />
        </div>
      </Section>

      {/* 06 — DEPLOYMENT */}
      <Section id="deployment" tone="bg-0" className="scroll-mt-[168px]">
        <div className="relative">
          <PillarHeader pillar={byId('deployment')} />
        </div>
        <div className="mt-9 flex flex-col">
          {deploymentSteps.map((s, i) => (
            <Reveal
              key={s.step}
              delay={i * 60}
              className={`grid grid-cols-[56px_1fr] gap-6 border-t border-line py-[22px] sm:grid-cols-[92px_1fr] ${
                i === deploymentSteps.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="font-display text-[clamp(30px,5vw,42px)] font-bold leading-none tracking-[-0.03em] text-accent/80">
                {s.step}
              </div>
              <div>
                <h3 className="text-[18px]">{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-body">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title="Prove it on one workflow.">
        <Button href="/design-partners">Become a design partner →</Button>
      </CtaBand>
    </>
  );
}

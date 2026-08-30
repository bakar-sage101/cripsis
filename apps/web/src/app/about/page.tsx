import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/marketing/Section';
import { Blueprint } from '@/components/marketing/Blueprint';
import { SignalField } from '@/components/marketing/SignalField';
import { PullQuote } from '@/components/marketing/PullQuote';
import { CtaBand } from '@/components/marketing/CtaBand';
import { OwnershipBoundary } from '@/components/marketing/OwnershipBoundary';
import { Button } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { TechTag } from '@/components/ui/TechTag';
import { Reveal } from '@/components/marketing/Reveal';
import {
  doctrine,
  principles,
  team,
  surrenderPoints,
  ownershipPoints,
} from '@/content/about';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Intelligence should belong to the enterprise that creates it. Cripsis is built on the premise that your intelligence is infrastructure — and infrastructure should be owned.',
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-line bg-[radial-gradient(1000px_460px_at_22%_-10%,rgba(22,169,214,0.12),transparent_60%)]">
        <Blueprint dense />
        <SignalField />
        <Container className="relative z-10 py-20 sm:py-24">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <TechTag className="mb-5 block">~/cripsis/about</TechTag>
              <Kicker>the doctrine</Kicker>
              <h1 className="mt-5 max-w-[680px] text-[clamp(38px,7vw,60px)] font-bold tracking-[-0.03em]">
                Intelligence should belong to the enterprise that creates it.
              </h1>
              <p className="mt-6 max-w-[600px] text-[18px] text-body">
                Organizations are told they must surrender their operating knowledge to
                get the benefits of AI. Cripsis is built on the opposite premise: your
                intelligence is infrastructure, and infrastructure should be owned.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/design-partners">Become a design partner →</Button>
                <Button href="/platform" variant="ghost">
                  See the platform ↓
                </Button>
              </div>
            </div>
            <OwnershipBoundary />
          </div>
        </Container>
      </div>

      {/* THREE TENETS */}
      <Section tone="bg-1" signal>
        <Kicker>the tenets</Kicker>
        <h2 className="mt-[18px] text-[clamp(26px,4vw,32px)]">Three commitments.</h2>
        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3">
          {doctrine.map((d, i) => (
            <Reveal
              key={d.label}
              delay={i * 80}
              className="relative h-full overflow-hidden rounded-[6px] border border-line bg-bg-2 p-6"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-1 -top-3 font-display text-[80px] font-bold leading-none tracking-[-0.04em] text-accent/[0.06]"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="relative">
                <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
                  {d.label}
                </div>
                <h3 className="mt-3 text-[19px]">{d.title}</h3>
                <p className="mt-2.5 text-[14px] text-body">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DEFAULT vs CRIPSIS */}
      <Section tone="bg-0">
        <Kicker>the choice</Kicker>
        <h2 className="mt-[18px] max-w-[560px] text-[clamp(26px,4vw,32px)]">
          Surrender, or ownership.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-2">
          <div className="rounded-[6px] border border-line bg-bg-2 p-6">
            <div className="font-mono text-[12px] tracking-[0.14em] text-muted">
              THE DEFAULT &nbsp;·&nbsp; surrender
            </div>
            <div className="mt-5 flex flex-col gap-3.5">
              {surrenderPoints.map((p) => (
                <div key={p} className="flex items-start gap-2.5 text-[14.5px] text-muted">
                  <span className="mt-0.5 shrink-0 font-mono text-muted/70">✗</span>
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[6px] border border-line-strong bg-[linear-gradient(180deg,rgba(22,169,214,0.06),var(--color-bg-2))] p-6 shadow-[0_0_30px_rgba(104,216,255,0.06)]">
            <div className="font-mono text-[12px] tracking-[0.14em] text-accent">
              CRIPSIS &nbsp;·&nbsp; ownership
            </div>
            <div className="mt-5 flex flex-col gap-3.5">
              {ownershipPoints.map((p) => (
                <div key={p} className="flex items-start gap-2.5 text-[14.5px] text-body">
                  <span className="mt-0.5 shrink-0 font-mono text-accent">✓</span>
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PULL-QUOTE */}
      <PullQuote kicker="the doctrine">
        Your intelligence is infrastructure — and infrastructure should be owned.
      </PullQuote>

      {/* THE CONSTITUTION (principles) */}
      <Section tone="bg-1" signal>
        <Kicker>principles</Kicker>
        <h2 className="mt-[18px] text-[clamp(26px,4vw,32px)]">How Cripsis is built.</h2>
        <div className="mt-9 border-l border-t border-line">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal
                key={p.tag}
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
                  <div className="font-mono text-[11px] text-accent">{p.tag}</div>
                  <h3 className="mt-2 text-[16px]">{p.title}</h3>
                  <p className="mt-2 text-[13px] text-body">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* FOUNDING TEAM */}
      <Section tone="bg-0">
        <Kicker>founding team</Kicker>
        <h2 className="mt-[18px] text-[clamp(26px,4vw,32px)]">
          Built by operators and engineers.
        </h2>
        <div className="mt-9 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.slug} delay={i * 80} className="h-full">
              <div className="group flex h-full flex-col rounded-[6px] border border-line bg-bg-2 p-6 transition-[border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-[3px] hover:border-line-strong hover:shadow-[0_10px_30px_rgba(2,6,8,0.55)]">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[3px] border border-line-strong bg-[linear-gradient(160deg,rgba(22,169,214,0.10),var(--color-bg-1))] font-mono text-[15px] text-accent transition-colors duration-300 group-hover:border-accent">
                    {m.initials}
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-[18px] text-[18px]">{m.name}</h3>
                <div className="mt-1.5 font-mono text-[12px] text-muted">{m.role}</div>
                <p className="mt-3 text-[14px] text-body">{m.bio}</p>
                <div className="mt-auto border-t border-line pt-4 font-mono text-[11.5px] text-muted">
                  <span className="text-accent">❯</span> ~/founders/{m.slug}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title="Own the control layer.">
        <Button href="/design-partners">Become a design partner →</Button>
      </CtaBand>
    </>
  );
}

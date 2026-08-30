import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Blueprint } from '@/components/marketing/Blueprint';
import { SignalField } from '@/components/marketing/SignalField';
import { DocSection } from '@/components/marketing/DocSection';
import { OwnershipBoundary } from '@/components/marketing/OwnershipBoundary';
import { CtaBand } from '@/components/marketing/CtaBand';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/marketing/Reveal';
import { cn } from '@/lib/cn';
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
      {/* MASTHEAD */}
      <div className="relative overflow-hidden border-b border-line bg-[radial-gradient(1000px_460px_at_20%_-10%,rgba(22,169,214,0.12),transparent_60%)]">
        <Blueprint dense />
        <SignalField />
        <Container className="relative z-10 py-24 sm:py-28">
          <div className="font-mono text-[13px] uppercase tracking-[0.22em] text-muted">
            [ about ]
          </div>
          <h1 className="mt-6 max-w-[920px] text-[clamp(36px,6.5vw,64px)] font-bold leading-[1.06] tracking-[-0.03em] text-muted">
            Intelligence should belong to{' '}
            <span className="text-heading">the enterprise that creates it.</span>
          </h1>
          <div className="mt-8 inline-flex items-center gap-2 rounded-[3px] border border-line bg-bg-0 px-4 py-2.5 font-mono text-[12.5px] text-muted">
            <span className="text-accent">{'//'}</span> now selecting founding design
            partners
          </div>
        </Container>
      </div>

      {/* MISSION */}
      <DocSection label="mission" tone="bg-0">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <p className="text-[clamp(21px,3vw,30px)] font-medium leading-[1.32] tracking-[-0.01em] text-muted">
            Cripsis exists so intelligence{' '}
            <span className="text-heading">belongs to the enterprise that creates it.</span>{' '}
            We build the operating environment that{' '}
            <span className="text-heading">observes</span> real work,{' '}
            <span className="text-heading">learns</span> it,{' '}
            <span className="text-heading">governs</span> it, and{' '}
            <span className="text-heading">keeps</span> it — inside your walls, under your
            authority.
          </p>
          <OwnershipBoundary />
        </div>
      </DocSection>

      {/* TENETS */}
      <DocSection label="tenets" tone="bg-1" signal>
        {doctrine.map((d, i) => (
          <Reveal
            key={d.label}
            delay={i * 60}
            className={cn(
              'grid gap-3 py-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10',
              i > 0 && 'border-t border-line',
            )}
          >
            <div>
              <div className="font-mono text-[12px] text-accent">
                {'//'} {d.label.toLowerCase()}
              </div>
              <h3 className="mt-2 text-[clamp(20px,2.6vw,26px)]">{d.title}</h3>
            </div>
            <p className="self-center text-[15.5px] text-body">{d.body}</p>
          </Reveal>
        ))}
      </DocSection>

      {/* THE CHOICE */}
      <DocSection label="the choice" tone="bg-0">
        <h2 className="max-w-[600px] text-[clamp(24px,3.6vw,32px)] leading-[1.15] text-muted">
          <span className="text-heading">Surrender</span>, or{' '}
          <span className="text-heading">ownership</span>.
        </h2>
        <div className="mt-9 grid grid-cols-1 gap-[18px] md:grid-cols-2">
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
      </DocSection>

      {/* PRINCIPLES */}
      <DocSection label="principles" tone="bg-1" signal>
        {principles.map((p, i) => (
          <Reveal
            key={p.tag}
            delay={(i % 2) * 60}
            className={cn(
              'grid gap-3 py-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10',
              i > 0 && 'border-t border-line',
            )}
          >
            <div>
              <div className="font-mono text-[12px] text-accent">{'//'} {p.tag}</div>
              <h3 className="mt-2 text-[20px]">{p.title}</h3>
            </div>
            <p className="self-center text-[14.5px] text-body">{p.body}</p>
          </Reveal>
        ))}
      </DocSection>

      {/* TEAM */}
      <DocSection label="team" tone="bg-0">
        <p className="max-w-[560px] text-[16.5px] text-body">
          The team behind Cripsis. Operators and engineers building the control layer —
          high agency, ownership-first, shipping daily.
        </p>
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
      </DocSection>

      <CtaBand title="Own the control layer.">
        <Button href="/design-partners">Become a design partner →</Button>
      </CtaBand>
    </>
  );
}

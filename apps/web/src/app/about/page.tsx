import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/marketing/PageHero';
import { CtaBand } from '@/components/marketing/CtaBand';
import { Tile } from '@/components/ui/Tile';
import { Button } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { doctrine, principles, team } from '@/content/about';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Intelligence should belong to the enterprise that creates it. Cripsis is built on the premise that your intelligence is infrastructure — and infrastructure should be owned.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="the doctrine"
        title="Intelligence should belong to the enterprise that creates it."
        subtitle="Organizations are told they must surrender their operating knowledge to get the benefits of AI. Cripsis is built on the opposite premise: your intelligence is infrastructure, and infrastructure should be owned."
      />

      {/* DOCTRINE TRIO */}
      <Container className="pt-16">
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {doctrine.map((d) => (
            <div key={d.label}>
              <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
                {d.label}
              </div>
              <h3 className="mt-3 text-[20px]">{d.title}</h3>
              <p className="mt-3 text-[15px] text-body">{d.body}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* PRINCIPLES */}
      <div className="mt-14 border-y border-line bg-bg-1">
        <Container className="py-[68px]">
          <Kicker>principles</Kicker>
          <h2 className="mt-4 text-[30px]">How Cripsis is built.</h2>
          <div className="mt-9 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <Tile key={p.title} title={p.title} body={p.body} />
            ))}
          </div>
        </Container>
      </div>

      {/* TEAM */}
      <Container className="pt-[72px]">
        <Kicker>founding team</Kicker>
        <h2 className="mt-4 text-[30px]">Built by operators and engineers.</h2>
        <div className="mt-9 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <Tile key={m.initials}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong font-mono text-heading">
                {m.initials}
              </div>
              <h3 className="mt-[18px] text-[18px]">{m.name}</h3>
              <div className="mt-1.5 font-mono text-[12px] text-muted">{m.role}</div>
              <p className="mt-3 text-[14px] text-body">{m.bio}</p>
            </Tile>
          ))}
        </div>
      </Container>

      <div className="mt-14">
        <CtaBand title="Own the control layer.">
          <Button href="/design-partners">Become a design partner →</Button>
        </CtaBand>
      </div>
    </>
  );
}

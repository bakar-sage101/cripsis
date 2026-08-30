import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/marketing/PageHero';
import { CtaBand } from '@/components/marketing/CtaBand';
import { Tile } from '@/components/ui/Tile';
import { Button } from '@/components/ui/Button';
import { platformChips, platformBlocks } from '@/content/platform';

export const metadata: Metadata = {
  title: 'Platform',
  description:
    'One environment that observes, learns, remembers, governs, and operates — with clean boundaries between what thinks, what knows, and what is allowed.',
};

function Eyebrow({ text }: { text: string }) {
  const [head, tail] = text.split(' · ');
  return (
    <div className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-muted">
      {head}
      {tail ? (
        <>
          {' · '}
          <span className="text-accent">{tail}</span>
        </>
      ) : null}
    </div>
  );
}

export default function PlatformPage() {
  return (
    <>
      <PageHero
        kicker="the platform"
        title="Everything the enterprise needs to own its intelligence."
        subtitle="One environment that observes, learns, remembers, governs, and operates — with clean boundaries between what thinks, what knows, and what is allowed."
      >
        <div className="mt-9 flex flex-wrap gap-2.5">
          {platformChips.map((chip, i) => (
            <span
              key={chip}
              className={`rounded-[2px] border px-3 py-2 font-mono text-[12px] ${
                i === 0
                  ? 'border-line-strong text-heading'
                  : 'border-line text-muted'
              }`}
            >
              {chip}
            </span>
          ))}
        </div>
      </PageHero>

      <Container className="pb-20">
        {platformBlocks.map((block) => (
          <section
            key={block.index}
            className="border-t border-line py-14 first:border-t-0"
          >
            <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
              {block.index} · {block.category}
            </div>
            <h2 className="mt-3 text-[clamp(26px,4vw,32px)]">{block.title}</h2>
            <p className="mt-3.5 max-w-[680px] text-[16.5px] text-body">{block.sub}</p>
            <div
              className={`mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 ${
                block.cols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
              }`}
            >
              {block.items.map((item, i) => (
                <Tile key={i}>
                  {item.eyebrow ? <Eyebrow text={item.eyebrow} /> : null}
                  {item.title ? (
                    <h3 className={`text-[17px] text-heading ${item.eyebrow ? 'mt-3' : ''}`}>
                      {item.title}
                    </h3>
                  ) : null}
                  <p className="mt-2.5 text-[14px] text-body">{item.body}</p>
                </Tile>
              ))}
            </div>
          </section>
        ))}
      </Container>

      <CtaBand title="Prove it on one workflow.">
        <Button href="/design-partners">Become a design partner →</Button>
      </CtaBand>
    </>
  );
}

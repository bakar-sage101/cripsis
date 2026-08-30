import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/marketing/PageHero';
import { Button } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { Reveal } from '@/components/marketing/Reveal';
import { SpecTable } from '@/components/marketing/SpecTable';
import { cn } from '@/lib/cn';
import { tiers, inEveryPlan, pricingFaq } from '@/content/pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'A dedicated Cripsis environment for every team size — persistent enterprise AI without shared customer intelligence or commodity SaaS dependence.',
};

/** Terminal window dots. `live` tints the first dot (used on the Pro card). */
function Dots({ live }: { live?: boolean }) {
  return (
    <div className="flex items-center gap-[7px]">
      <span className={cn('h-[9px] w-[9px] rounded-full', live ? 'bg-accent' : 'bg-accent-dim')} />
      <span className="h-[9px] w-[9px] rounded-full bg-accent-dim" />
      <span className="h-[9px] w-[9px] rounded-full bg-accent-dim" />
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        tag="~/cripsis/pricing"
        kicker="pricing"
        title={
          <>
            <span className="text-muted">A dedicated environment for</span> every team
            size.
          </>
        }
        subtitle="Every plan is a dedicated Cripsis environment — your own resident AI, your own intelligence. Persistent enterprise AI without shared customer intelligence or commodity SaaS dependence."
      >
        <div className="mt-8 flex">
          <div className="inline-flex items-center gap-2 rounded-[3px] border border-line bg-bg-0 px-4 py-2.5 font-mono text-[13px] text-body">
            <span className="text-accent">❯</span> cripsis plans --dedicated
            <span className="blink">▍</span>
          </div>
        </div>
      </PageHero>

      {/* TIER CARDS — terminal spec cards */}
      <Container className="pt-11">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80} className="h-full">
              <div
                className={cn(
                  'flex h-full flex-col overflow-hidden rounded-[6px] border transition-[border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-[3px]',
                  tier.popular
                    ? 'crt-flicker border-line-strong shadow-[0_0_30px_rgba(104,216,255,0.08)]'
                    : 'border-line hover:border-line-strong hover:shadow-[0_10px_30px_rgba(2,6,8,0.55)]',
                )}
              >
                {/* titlebar */}
                <div className="flex items-center justify-between border-b border-line bg-bg-0 px-4 py-3">
                  <Dots live={tier.popular} />
                  <div className="flex items-center gap-2">
                    {tier.popular ? (
                      <span className="rounded-[2px] bg-accent px-1.5 py-px font-mono text-[9px] tracking-[0.06em] text-[#04121a]">
                        POPULAR
                      </span>
                    ) : null}
                    <span className="font-mono text-[11.5px] text-muted">~/{tier.slug}</span>
                  </div>
                </div>

                {/* body */}
                <div
                  className={cn(
                    'relative flex flex-1 flex-col p-6',
                    tier.popular &&
                      'bg-[linear-gradient(180deg,rgba(22,169,214,0.06),var(--color-bg-2))]',
                  )}
                >
                  {tier.popular ? (
                    <div className="scanlines pointer-events-none absolute inset-0" aria-hidden />
                  ) : null}

                  <div className="relative flex flex-1 flex-col">
                    <div className="font-mono text-[28px] leading-none tracking-[-0.01em] text-heading">
                      {tier.price}
                      <span className="ml-1 text-[14px] text-muted">/mo</span>
                    </div>
                    <div className="mt-2 font-mono text-[12px] text-accent">{tier.seats}</div>

                    <p className="mt-4 line-clamp-3 min-h-[58px] text-[13.5px] text-body">
                      {tier.blurb}
                    </p>

                    <div className="mt-5 font-mono text-[11px] tracking-[0.12em] text-muted">
                      INCLUDED
                    </div>
                    <div className="mt-3 flex flex-col gap-2.5">
                      {tier.included.map((inc) => (
                        <div
                          key={inc}
                          className="flex items-start gap-2.5 text-[13px] text-body"
                        >
                          <span className="shrink-0 font-mono text-accent">✓</span>
                          {inc}
                        </div>
                      ))}
                    </div>

                    {/* pinned bottom block — guarantees CTA alignment */}
                    <div className="mt-auto pt-6">
                      <div className="mb-2.5 font-mono text-[11.5px] text-muted">
                        <span className="text-accent">❯</span> deploy --plan={tier.slug}
                        <span className="blink">▍</span>
                      </div>
                      <Button
                        href="/contact"
                        variant={tier.popular ? 'primary' : 'ghost'}
                        className="w-full justify-center"
                      >
                        Get started →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* COMPARISON MATRIX */}
      <Container className="pt-16">
        <Kicker>compare tiers</Kicker>
        <h2 className="mt-3.5 text-[clamp(24px,4vw,28px)]">Every tier, side by side.</h2>
        <p className="mt-3.5 max-w-[680px] text-[15px] text-body">
          One dedicated environment at every size — capacity, concurrency, and support
          scale with the plan.
        </p>
        <Reveal className="mt-7">
          <SpecTable />
        </Reveal>
      </Container>

      {/* ENTERPRISE BAND — terminal callout */}
      <Container className="pt-5">
        <div className="overflow-hidden rounded-[6px] border border-line bg-bg-1">
          <div className="flex items-center gap-[7px] border-b border-line bg-bg-0 px-4 py-3">
            <Dots />
            <span className="ml-1 font-mono text-[11.5px] text-muted">
              enterprise@cripsis ~ %
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-5 p-8">
            <div className="max-w-[720px]">
              <div className="font-mono text-[12px] tracking-[0.14em] text-muted">
                ENTERPRISE &amp; GOV &nbsp;·&nbsp; CONTACT SALES
              </div>
              <h2 className="mt-3 text-[24px]">
                For regulated, private, or customer-hosted environments.
              </h2>
              <p className="mt-2.5 text-[14.5px] text-body">
                Larger organizations, government users, private infrastructure, advanced
                security requirements, custom integrations, or deployment requirements
                beyond standard plans.
              </p>
            </div>
            <Button href="/contact">
              <span className="text-[#04121a]">❯</span> contact sales →
            </Button>
          </div>
        </div>
      </Container>

      {/* WHAT'S IN EVERY PLAN — gapless matrix */}
      <div className="mt-10 border-y border-line bg-bg-1">
        <Container className="py-14">
          <Kicker>in every plan</Kicker>
          <h2 className="mt-3.5 text-[28px]">The full environment, dedicated to you.</h2>
          <div className="mt-7 border-l border-t border-line">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {inEveryPlan.map((item, i) => (
                <Reveal
                  key={item.name}
                  delay={i * 70}
                  className="border-b border-r border-line p-6"
                >
                  <div className="font-mono text-[12px] text-accent">
                    {item.name.toUpperCase()}
                  </div>
                  <p className="mt-2 text-[13.5px] text-body">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* SERVICES */}
      <Container className="pt-14">
        <Kicker>services</Kicker>
        <div className="mt-6 grid grid-cols-1 gap-[18px] md:grid-cols-2">
          <div className="rounded-[5px] border border-line bg-bg-2 p-[26px]">
            <h3 className="text-[19px]">Integrations & deployment</h3>
            <p className="mt-3 text-[14.5px] text-body">
              Cripsis integrates with authorized operational systems, data sources, and
              communications platforms — including system integration, workflow
              configuration, security policy setup, data-source onboarding, operational
              modeling, and deployment validation.
            </p>
          </div>
          <div className="rounded-[5px] border border-line bg-bg-2 p-[26px]">
            <h3 className="text-[19px]">Founding design partners</h3>
            <p className="mt-3 text-[14.5px] text-body">
              A limited number of organizations help shape early production deployments —
              working directly with Cripsis on high-value operational workflows and
              outcome measurement.
            </p>
            <Link
              href="/design-partners"
              className="mt-3.5 inline-block font-mono text-[13px]"
            >
              Become a design partner →
            </Link>
          </div>
        </div>
      </Container>

      {/* PRICING FAQ */}
      <Container className="py-12">
        <Kicker>pricing faq</Kicker>
        <div className="mt-6">
          {pricingFaq.map((item, i) => (
            <div
              key={i}
              className={cn(
                'grid grid-cols-1 gap-4 border-t border-line py-[22px] md:grid-cols-[0.9fr_1.1fr] md:gap-8',
                i === pricingFaq.length - 1 && 'border-b',
              )}
            >
              <h3 className="text-[17px]">{item.q}</h3>
              <p className="text-[14.5px] text-body">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

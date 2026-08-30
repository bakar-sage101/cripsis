import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/marketing/PageHero';
import { Button } from '@/components/ui/Button';
import { Kicker } from '@/components/ui/Kicker';
import { Reveal } from '@/components/marketing/Reveal';
import { cn } from '@/lib/cn';
import { tiers, inEveryPlan, pricingFaq } from '@/content/pricing';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'A dedicated Cripsis environment for every team size — persistent enterprise AI without shared customer intelligence or commodity SaaS dependence.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        tag="~/cripsis/pricing"
        kicker="pricing"
        title="A dedicated environment for every team size."
        subtitle="Every plan is a dedicated Cripsis environment — your own resident AI, your own intelligence. Persistent enterprise AI without shared customer intelligence or commodity SaaS dependence."
        align="center"
      />

      {/* TIER CARDS */}
      <Container className="pt-11">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80} className="h-full">
            <div
              className={cn(
                'flex h-full flex-col rounded-[5px] border bg-bg-2 p-6 transition-[border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-[3px] hover:border-line-strong hover:shadow-[0_10px_30px_rgba(2,6,8,0.55),0_0_22px_rgba(104,216,255,0.07)]',
                tier.popular
                  ? 'border-line-strong bg-[linear-gradient(180deg,rgba(22,169,214,0.06),var(--color-bg-2))]'
                  : 'border-line',
              )}
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[12px] tracking-[0.14em] text-muted">
                  {tier.name.toUpperCase()}
                </div>
                {tier.popular ? (
                  <span className="rounded-[2px] bg-accent px-2 py-[3px] font-mono text-[10px] tracking-[0.08em] text-[#04121a]">
                    POPULAR
                  </span>
                ) : null}
              </div>
              <div className="mt-4 font-display text-[28px] font-semibold tracking-[-0.02em] text-heading">
                {tier.price}
                <span className="font-mono text-[14px] text-muted">/mo</span>
              </div>
              <div className="mt-1.5 font-mono text-[12px] text-accent">{tier.seats}</div>
              <p className="mt-3.5 min-h-[76px] text-[13.5px] text-body">{tier.blurb}</p>
              <Button
                href="/contact"
                variant={tier.popular ? 'primary' : 'ghost'}
                className="mb-[18px] mt-1.5 w-full justify-center"
              >
                Get started
              </Button>
              <div
                className={cn(
                  'border-t pt-4 font-mono text-[11px] tracking-[0.12em] text-muted',
                  tier.popular ? 'border-line-strong' : 'border-line',
                )}
              >
                INCLUDED
              </div>
              <div className="mt-3.5 flex flex-col gap-2.5">
                {tier.included.map((inc) => (
                  <div key={inc} className="flex items-start gap-2.5 text-[13.5px] text-body">
                    <span className="shrink-0 text-accent">✓</span> {inc}
                  </div>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* ENTERPRISE BAND */}
      <Container className="pt-5">
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[5px] border border-line bg-bg-1 p-8">
          <div className="max-w-[720px]">
            <div className="font-mono text-[12px] tracking-[0.14em] text-muted">
              ENTERPRISE & GOV &nbsp;·&nbsp; CONTACT SALES
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
          <Button href="/contact">Contact sales →</Button>
        </div>
      </Container>

      {/* WHAT'S IN EVERY PLAN */}
      <div className="mt-10 border-y border-line bg-bg-1">
        <Container className="py-14">
          <Kicker>in every plan</Kicker>
          <h2 className="mt-3.5 text-[28px]">The full environment, dedicated to you.</h2>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inEveryPlan.map((item) => (
              <div key={item.name}>
                <div className="font-mono text-[12px] text-accent">
                  {item.name.toUpperCase()}
                </div>
                <p className="mt-2 text-[13.5px] text-body">{item.body}</p>
              </div>
            ))}
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

import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/marketing/PageHero';
import { ContactForm } from '@/components/marketing/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us the workflow that costs you most when it fails. A member of the team replies with a tailored path — baseline, instrument, measure.',
};

const options: { title: string; body: string; link: string; href: string }[] = [
  {
    title: 'Become a design partner',
    body: 'Shape early production deployments on one high-value workflow.',
    link: 'Start with one workflow →',
    href: '/design-partners',
  },
  {
    title: 'Talk to sales',
    body: 'Enterprise, government, or private-infrastructure deployments.',
    link: 'andrew@cripsis.com →',
    href: 'mailto:andrew@cripsis.com',
  },
  {
    title: 'General inquiry',
    body: 'Questions about the platform, security, or deployment.',
    link: 'cripsis.com →',
    href: '/',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="~/cripsis/contact"
        kicker="contact"
        title="Tell us the workflow that costs you most when it fails."
        subtitle="A member of the team replies with a tailored path — baseline, instrument, measure. Start narrow; expand once it’s proven."
      />

      <Container className="py-10">
        <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-[1.15fr_0.85fr]">
          <ContactForm />

          <div className="flex flex-col gap-3.5">
            {options.map((opt) => (
              <div
                key={opt.title}
                className="rounded-[4px] border border-line bg-bg-2 p-5 transition-[border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-[3px] hover:border-line-strong hover:shadow-[0_10px_30px_rgba(2,6,8,0.55),0_0_22px_rgba(104,216,255,0.07)]"
              >
                <h3 className="text-[17px]">{opt.title}</h3>
                <p className="mt-2 text-[14px] text-body">{opt.body}</p>
                <Link href={opt.href} className="mt-3 inline-block font-mono text-[13px]">
                  {opt.link}
                </Link>
              </div>
            ))}
            <div className="rounded-[4px] border border-line bg-bg-1 p-5">
              <div className="font-mono text-[11.5px] tracking-[0.12em] text-muted">
                DIRECT
              </div>
              <p className="mt-2.5 font-mono text-[13px] text-body">
                Text&nbsp; <span className="text-accent">1.760.802.4203</span>
              </p>
              <p className="mt-1.5 font-mono text-[13px] text-body">
                Email&nbsp; <span className="text-accent">andrew@cripsis.com</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

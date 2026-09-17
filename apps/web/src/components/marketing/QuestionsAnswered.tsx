import { faq } from '@/content/home';

import { ChapterMark } from './ChapterMark';
import { Section } from './Section';

export function QuestionsAnswered() {
  return (
    <Section
      id="questions"
      tone="bg-1"
      className="scroll-mt-[96px] py-[82px] sm:py-[96px]"
    >
      <ChapterMark n="—" title="questions, answered" />
      <dl className="mt-8 border-b border-line">
        {faq.map((item) => (
          <div
            key={item.q}
            className="group grid grid-cols-1 gap-3 border-t border-line py-6 transition-colors duration-200 hover:border-line-strong md:grid-cols-[0.78fr_1.22fr] md:gap-12 md:py-7"
          >
            <dt className="font-mono text-[15px] leading-[1.55] text-heading md:text-[16px]">
              {item.q}
            </dt>
            <dd className="m-0 max-w-[650px] font-mono text-[13px] leading-[1.65] text-body md:text-[14px]">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

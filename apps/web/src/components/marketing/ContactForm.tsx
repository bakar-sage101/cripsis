'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';

const urgencies = ['Exploring', 'This quarter', 'Priority'] as const;
type Urgency = (typeof urgencies)[number];

const fieldClass =
  'w-full rounded-[3px] border border-line bg-bg-0 px-3.5 py-3 font-mono text-[13px] text-heading placeholder:text-muted focus:border-line-strong focus:outline-none';
const labelClass = 'font-mono text-[11.5px] tracking-[0.1em] text-muted';

export function ContactForm() {
  const [urgency, setUrgency] = useState<Urgency>('This quarter');
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // No backend yet — the API contract is a follow-up. Acknowledge locally.
        setSent(true);
      }}
      className="rounded-[5px] border border-line-strong bg-bg-2 p-[30px]"
    >
      <div className="font-mono text-[11.5px] tracking-[0.14em] text-muted">
        CRIPSIS.BRIEF
      </div>

      <div className="mt-[22px] grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <div className={labelClass}>WORK EMAIL *</div>
          <input
            type="email"
            required
            placeholder="you@company.com"
            className={cn(fieldClass, 'mt-2')}
          />
        </label>
        <label className="block">
          <div className={labelClass}>ORGANIZATION</div>
          <input type="text" placeholder="Company" className={cn(fieldClass, 'mt-2')} />
        </label>
      </div>

      <label className="mt-4 block">
        <div className={labelClass}>ROLE</div>
        <input type="text" placeholder="Your role" className={cn(fieldClass, 'mt-2')} />
      </label>

      <label className="mt-4 block">
        <div className={labelClass}>WHAT SHOULD CRIPSIS LEARN OR TAKE ON? *</div>
        <textarea
          required
          rows={4}
          placeholder="The workflow that costs the most when it fails…"
          className={cn(fieldClass, 'mt-2 resize-none')}
        />
      </label>

      <div className="mt-[18px]">
        <div className={labelClass}>URGENCY</div>
        <div className="mt-2.5 flex flex-wrap gap-2.5">
          {urgencies.map((u) => {
            const active = u === urgency;
            return (
              <button
                key={u}
                type="button"
                onClick={() => setUrgency(u)}
                className={cn(
                  'rounded-[2px] border px-3.5 py-2 font-mono text-[12px] transition-colors',
                  active
                    ? 'border-line-strong text-heading'
                    : 'border-line text-body hover:border-line-strong',
                )}
              >
                <span className={active ? 'text-accent' : undefined}>
                  {active ? '●' : '○'}
                </span>{' '}
                {u}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[2px] border border-accent bg-accent px-[22px] py-[13px] font-mono text-[13.5px] font-semibold text-[#04121a] transition-[filter,box-shadow] duration-200 hover:shadow-[0_0_22px_rgba(104,216,255,0.45)] hover:brightness-105"
      >
        {sent ? 'Brief received ✓' : 'Send brief →'}
      </button>

      {sent ? (
        <p className="mt-3.5 font-mono text-[11.5px] text-accent">
          Thanks — this is a preview form, so nothing was sent yet. Wiring to the API is
          the next step.
        </p>
      ) : (
        <p className="mt-3.5 font-mono text-[11.5px] text-muted">
          A real person replies within one business day. Your information isn’t shared.
        </p>
      )}
    </form>
  );
}

import type { CSSProperties } from 'react';

import { economics, economicsChain } from '@/content/home';

const stagePositions = [
  { left: '15%', top: '432px' },
  { left: '37%', top: '392px' },
  { left: '59%', top: '342px' },
  { left: '81%', top: '284px' },
] as const;

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 12"
      className="h-3 w-6 shrink-0 text-accent-mid"
      fill="none"
    >
      <path d="M1 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export function EconomicsCurve() {
  return (
    <div className="mt-10">
      <div className="relative hidden h-[520px] lg:block">
        <svg
          aria-hidden="true"
          viewBox="0 0 1120 460"
          className="absolute inset-0 h-full w-full overflow-visible"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="economics-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="economics-line" x1="16" y1="304" x2="1070" y2="20">
              <stop stopColor="#68d8ff" stopOpacity="0.72" />
              <stop offset="0.7" stopColor="#d9f5ff" />
              <stop offset="1" stopColor="#68d8ff" />
            </linearGradient>
          </defs>

          <g opacity="0.22">
            {Array.from({ length: 16 }, (_, row) =>
              Array.from({ length: 34 }, (_, column) => (
                <circle
                  key={`${row}-${column}`}
                  cx={20 + column * 33}
                  cy={10 + row * 25}
                  r="0.7"
                  fill="#16a9d6"
                />
              )),
            )}
          </g>

          <path
            d="M12 306C142 290 232 272 326 244C466 204 565 178 660 132C786 72 914 31 1072 10"
            stroke="url(#economics-line)"
            strokeWidth="2"
            pathLength="1"
            filter="url(#economics-glow)"
            className="economics-draw"
          />
          <path
            d="M184 374H410V336H640V290H868V236H1104"
            stroke="#16a9d6"
            strokeWidth="1.25"
          />

          {[
            { x: 262, y: 264, railY: 374 },
            { x: 484, y: 198, railY: 336 },
            { x: 708, y: 108, railY: 290 },
            { x: 932, y: 28, railY: 236 },
          ].map((node, index) => (
            <g key={index}>
              <path
                d={`M${node.x} ${node.y}V${node.railY}`}
                stroke="#16a9d6"
                strokeWidth="1"
                strokeDasharray="4 5"
                opacity="0.65"
              />
              <circle cx={node.x} cy={node.y} r="12" stroke="#16a9d6" opacity="0.28" />
              <circle cx={node.x} cy={node.y} r="6" fill="#68d8ff" filter="url(#economics-glow)" />
              <circle cx={node.x} cy={node.railY} r="5" fill="#020608" stroke="#68d8ff" />
            </g>
          ))}

          <circle cx="12" cy="306" r="4" fill="#68d8ff" filter="url(#economics-glow)" />
          <circle cx="1072" cy="10" r="12" fill="#68d8ff" filter="url(#economics-glow)" />
          <circle cx="1072" cy="10" r="25" stroke="#16a9d6" opacity="0.25" />
          <path d="M1072 10h38m-7-6 7 6-7 6" stroke="#68d8ff" strokeWidth="1.4" />
        </svg>

        {economics.map((stage, index) => (
          <div
            key={stage.label}
            className="absolute w-[17%] font-mono"
            style={(stagePositions[index] ?? stagePositions[0]) as CSSProperties}
          >
            <div className="text-[15px] tracking-[0.08em] text-accent">
              {stage.label}
            </div>
            <p className="mt-2 max-w-[175px] text-[13px] leading-[1.55] text-body">
              {stage.body}
            </p>
          </div>
        ))}
      </div>

      <div className="relative border-l border-line-strong pl-8 lg:hidden">
        <span className="economics-travel absolute -left-[4px] top-0 h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(104,216,255,0.95)]" />
        {economics.map((stage, index) => (
          <div
            key={stage.label}
            className="relative border-t border-line py-7 first:border-t-0 first:pt-1"
          >
            <span className="absolute -left-[37px] top-[31px] h-2.5 w-2.5 rounded-full border border-accent bg-bg-0 first:top-1" />
            <div className="font-mono text-[14px] tracking-[0.1em] text-accent">
              {stage.label}
            </div>
            <p className="mt-2 text-[14px] text-body">{stage.body}</p>
            <div className="mt-3 font-mono text-[11px] tracking-[0.12em] text-muted">
              STAGE {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-1 max-w-[820px] text-center text-[15px] leading-relaxed text-body lg:mt-[-22px]">
        Released capacity is throughput, service, growth, and time for the decisions that
        matter.
      </p>

      <div className="relative mt-10 border-y border-line py-5">
        <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_rgba(104,216,255,0.8)]" />
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_rgba(104,216,255,0.8)]" />
        <div className="flex flex-col gap-3 px-5 font-mono text-[12px] text-body sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-4 lg:flex-nowrap lg:justify-between">
          {economicsChain.map((step, index) => (
            <span key={step} className="flex items-center gap-3 whitespace-nowrap">
              <span className={index === economicsChain.length - 1 ? 'text-accent' : ''}>
                {step}
              </span>
              {index < economicsChain.length - 1 ? <ArrowRight /> : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

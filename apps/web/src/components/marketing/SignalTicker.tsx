type Signal = { glyph: string; tone: 'accent' | 'dim'; text: string };

const signals: Signal[] = [
  { glyph: '●', tone: 'accent', text: 'observing authorized activity' },
  { glyph: '●', tone: 'accent', text: 'task episode assembled' },
  { glyph: '●', tone: 'accent', text: 'hypothesis formed' },
  { glyph: '❯', tone: 'accent', text: 'Cripsis asks — does the path depend on service level?' },
  { glyph: '●', tone: 'accent', text: 'practice validated · confidence high' },
  { glyph: '○', tone: 'dim', text: 'receipt recorded — trilithium' },
  { glyph: '●', tone: 'accent', text: 'action gated · default-deny' },
];

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {signals.map((s, i) => (
        <span key={i} className="flex items-center whitespace-nowrap px-6 font-mono text-[12px] text-muted">
          <span className={s.tone === 'accent' ? 'text-accent' : 'text-accent-dim'}>
            {s.glyph}
          </span>
          <span className="ml-2">{s.text}</span>
        </span>
      ))}
    </div>
  );
}

/** A slim, always-scrolling bar of live system events under the header — the
 *  "living control plane" signal. Two identical tracks give a seamless loop;
 *  reduced-motion halts it. */
export function SignalTicker() {
  return (
    <div className="overflow-hidden border-b border-line bg-bg-0">
      <div className="marquee-track flex w-max" aria-hidden>
        <Track />
        <Track />
      </div>
    </div>
  );
}

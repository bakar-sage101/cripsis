export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        padding: '48px',
      }}
    >
      <div style={{ maxWidth: 660 }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            letterSpacing: '0.14em',
            fontSize: 13,
          }}
        >
          // the infrastructure of cognition
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--text-bright)',
            fontSize: 52,
            lineHeight: 1.04,
            letterSpacing: '-0.015em',
            margin: '18px 0 0',
          }}
        >
          Cripsis
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, marginTop: 20 }}>
          Monorepo scaffold is ready. The marketing site in{' '}
          <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--blue-bright)' }}>
            /design
          </code>{' '}
          will be implemented in this app next.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            color: 'var(--text-muted)',
            marginTop: 28,
          }}
        >
          web · next.js &nbsp;·&nbsp; api · nestjs &nbsp;·&nbsp;{' '}
          <span style={{ color: 'var(--blue-bright)' }}>● scaffold nominal</span>
        </p>
      </div>
    </main>
  );
}

type GNode = { id: string; name: string; verb: string; sub: string; x: number; y: number };

const nodes: GNode[] = [
  { id: 'thinks', name: 'CripsisAI', verb: 'Thinks', sub: 'reasons · recommends', x: 50, y: 11 },
  { id: 'knows', name: 'Kybernite', verb: 'Knows', sub: 'evidence · memory', x: 13, y: 62 },
  { id: 'allows', name: 'Trilithium', verb: 'Allows', sub: 'policy · receipts', x: 87, y: 62 },
];

const edges: [GNode, GNode][] = [
  [nodes[0], nodes[1]],
  [nodes[0], nodes[2]],
  [nodes[1], nodes[2]],
];

const CENTER = { x: 50, y: 45 };

/** The hero centerpiece: the three planes as a live node graph — glowing nodes
 *  connected around a pulsing control-plane core, with signals travelling the
 *  edges. Motion (pulses / sonar / halos) is disabled under reduced-motion. */
export function PlaneGraph() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <filter id="pg-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="0.9" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* faint spokes to the core */}
        {nodes.map((n) => (
          <line
            key={`s-${n.id}`}
            x1={n.x}
            y1={n.y}
            x2={CENTER.x}
            y2={CENTER.y}
            stroke="rgba(104,216,255,0.12)"
            strokeWidth={0.4}
          />
        ))}

        {/* triangle edges */}
        {edges.map(([a, b], i) => (
          <line
            key={`e-${i}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="rgba(104,216,255,0.3)"
            strokeWidth={0.5}
            strokeLinecap="round"
          />
        ))}

        {/* signals travelling the edges */}
        {edges.map(([a, b], i) => (
          <circle key={`p-${i}`} r={1.2} fill="#68d8ff" filter="url(#pg-glow)" className="graph-pulse">
            <animateMotion
              dur={`${2.8 + i * 0.6}s`}
              repeatCount="indefinite"
              path={`M${a.x} ${a.y} L${b.x} ${b.y}`}
            />
          </circle>
        ))}

        {/* control-plane core + sonar pulse */}
        <circle cx={CENTER.x} cy={CENTER.y} r={2} fill="#68d8ff" opacity={0.65} filter="url(#pg-glow)" />
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={2}
          fill="none"
          stroke="rgba(104,216,255,0.5)"
          strokeWidth={0.4}
          className="graph-pulse"
        >
          <animate attributeName="r" values="2;9;2" dur="3.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3.4s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* node labels */}
      {nodes.map((n) => (
        <div
          key={n.id}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span className="halo relative flex h-4 w-4 items-center justify-center rounded-full border border-[rgba(104,216,255,0.5)] bg-[radial-gradient(circle,rgba(104,216,255,0.5),rgba(4,11,16,0.9))] shadow-[0_0_18px_rgba(104,216,255,0.5)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <div className="mt-2.5 whitespace-nowrap text-center">
            <div className="font-display text-[15px] font-semibold text-heading">{n.name}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
              {n.verb}
            </div>
            <div className="mt-0.5 font-mono text-[10px] text-muted">{n.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

import { cn } from '@/lib/cn';

type GNode = {
  id: string;
  name: string;
  verb: string;
  x: number;
  y: number;
  labelPos: 'above' | 'below';
};

const nodes: GNode[] = [
  { id: 'thinks', name: 'CripsisAI', verb: 'Thinks', x: 50, y: 18, labelPos: 'above' },
  { id: 'knows', name: 'Kybernite', verb: 'Knows', x: 16, y: 70, labelPos: 'below' },
  { id: 'allows', name: 'Trilithium', verb: 'Allows', x: 84, y: 70, labelPos: 'below' },
];

const edges: [GNode, GNode][] = [
  [nodes[0], nodes[1]],
  [nodes[0], nodes[2]],
  [nodes[1], nodes[2]],
];

const CENTER = { x: 50, y: 52 };

/** The hero centerpiece: the three planes as a live node graph — glowing nodes
 *  connected around a pulsing control-plane core, with signals travelling the
 *  edges. Motion (pulses / sonar / halos) is disabled under reduced-motion. */
export function PlaneGraph() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
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
        <circle cx={CENTER.x} cy={CENTER.y} r={1.9} fill="#68d8ff" opacity={0.7} filter="url(#pg-glow)" />
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

      {/* nodes — dot pinned to the vertex, label above (top) or below (bottom) */}
      {nodes.map((n) => (
        <div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span className="halo relative block h-3.5 w-3.5 rounded-full border border-[rgba(104,216,255,0.55)] bg-[rgba(104,216,255,0.14)] shadow-[0_0_14px_rgba(104,216,255,0.5)]">
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_6px_rgba(104,216,255,0.9)]" />
          </span>
          <div
            className={cn(
              'absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center',
              n.labelPos === 'above' ? 'bottom-[calc(100%+9px)]' : 'top-[calc(100%+9px)]',
            )}
          >
            <div className="font-display text-[15px] font-semibold leading-tight text-heading">
              {n.name}
            </div>
            <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              {n.verb}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

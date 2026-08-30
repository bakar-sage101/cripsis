export type Pillar = {
  id: string;
  index: string;
  category: string;
  title: string;
  sub: string;
};

export const pillars: Pillar[] = [
  {
    id: 'three-planes',
    index: '01',
    category: 'Three planes',
    title: 'Thinking, knowing, and allowing — kept apart.',
    sub: 'The separation is the point. Each plane owns its responsibility and nothing else.',
  },
  {
    id: 'active-learning',
    index: '02',
    category: 'Active learning',
    title: 'It learns from the bottom up — and asks.',
    sub: 'Repeated behavior is evidence, not truth. Written procedure is evidence, not gospel.',
  },
  {
    id: 'organizational-memory',
    index: '03',
    category: 'Organizational memory',
    title: 'More than conversation history.',
    sub: 'Memory is structured so a learned practice is inspectable — not opaque vectors.',
  },
  {
    id: 'trust-control',
    index: '04',
    category: 'Trust & control',
    title: 'Your intelligence. Your authority. Your walls.',
    sub: 'The enterprise owns and controls its intelligence. Cripsis owns the infrastructure that governs it.',
  },
  {
    id: 'delegation',
    index: '05',
    category: 'Delegation',
    title: 'A deliberately staged autonomy ramp.',
    sub: 'Assistance before autonomy. The agent proposes and learns; the control substrate decides.',
  },
  {
    id: 'deployment',
    index: '06',
    category: 'Deployment',
    title: 'Install, authorize, observe, expand.',
    sub: 'No six-month transformation project first. The mess is part of what Cripsis learns to navigate.',
  },
];

export const platformChips = pillars.map((p) => ({ id: p.id, label: p.category }));

/** 02 — the learning loop. */
export const learningStages: { step: string; title: string; body: string }[] = [
  {
    step: 'OBSERVE',
    title: 'Observe & correlate',
    body: 'Normalizes authorized activity and infers which actions belong to one piece of work.',
  },
  {
    step: 'HYPOTHESIZE',
    title: 'Hypothesize',
    body: 'Forms a candidate explanation of how work is normally performed — held tentatively.',
  },
  {
    step: 'QUESTION',
    title: 'Question',
    body: 'Initiates clarification on uncertainty, conflict, or an unexplained decision.',
  },
  {
    step: 'VALIDATE',
    title: 'Validate',
    body: 'Confirms with an authority, then records a practice with evidence and confidence.',
  },
];

/** 03 — the memory map. */
export const memoryTypes: { tag: string; title: string; body: string }[] = [
  { tag: 'episodic', title: 'Episodic memory', body: 'What happened in specific cases.' },
  { tag: 'operational', title: 'Operational knowledge', body: 'Known entities, systems, terms, and relationships.' },
  { tag: 'practices', title: 'Practices', body: 'How work is normally performed.' },
  { tag: 'policies', title: 'Rules & policies', body: 'Explicit organizational requirements.' },
  { tag: 'exceptions', title: 'Exceptions', body: 'Conditions under which a practice changes.' },
  { tag: 'provenance', title: 'Evidence & provenance', body: 'Why Cripsis believes something — traceable to source.' },
];

/** 04 — trust & control. */
export const trustPoints: { title: string; body: string }[] = [
  { title: 'Ownership', body: 'The model, the data, and the learned intelligence stay yours.' },
  { title: 'Data never leaves', body: 'Segregated in your environment; never used to improve anyone else’s.' },
  { title: 'Deterministic authority', body: 'Default-deny, fail-closed. Every action evaluated before it happens.' },
  { title: 'Provenance & receipts', body: 'Every belief traceable to evidence; every action produces a record.' },
  { title: 'You set the boundary', body: 'You authorize which systems and information Cripsis may access.' },
  { title: 'Human authority preserved', body: 'Learning how work is done does not authorize doing it.' },
];

export const trustStats: { value: string; caption: string }[] = [
  { value: 'DEFAULT-DENY', caption: 'every action evaluated before it happens' },
  { value: 'FAIL-CLOSED', caption: 'denials win — always' },
  { value: 'RECEIPTS', caption: 'every action produces a record' },
  { value: 'ISOLATED', caption: 'your intelligence never leaves your walls' },
];

/** 05 — the autonomy ramp. */
export const delegationStages: { from: string; to: string; body: string }[] = [
  { from: 'OBSERVE', to: 'ASK', body: 'Learn the workflow; question ambiguous or conflicting behavior.' },
  { from: 'ASSIST', to: 'COMPRESS', body: 'Retrieve context, summarize, prioritize, draft; automate repetitive preparation.' },
  { from: 'DELEGATE', to: 'OPERATE', body: 'Perform bounded approved actions; continue recurring work within authority.' },
];

/** 06 — deployment timeline. */
export const deploymentSteps: { step: string; title: string; body: string }[] = [
  { step: '01', title: 'Install', body: 'Stand up a dedicated environment on your hardware or cloud.' },
  { step: '02', title: 'Authorize', body: 'Designate users, one workflow, and a small number of sources.' },
  { step: '03', title: 'Observe & learn', body: 'Read-mostly at first; validated practice accumulates.' },
  { step: '04', title: 'Expand on proof', body: 'Broaden coverage and bounded write capability once value is shown.' },
];

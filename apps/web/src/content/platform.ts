export const platformChips = [
  'Three planes',
  'Active learning',
  'Organizational memory',
  'Trust & control',
  'Delegation',
  'Deployment',
];

export type PlatformItem = { eyebrow?: string; title: string; body: string };
export type PlatformBlock = {
  index: string;
  category: string;
  title: string;
  sub: string;
  cols: 3 | 4;
  items: PlatformItem[];
};

export const platformBlocks: PlatformBlock[] = [
  {
    index: '01',
    category: 'Three planes',
    title: 'Thinking, knowing, and allowing — kept apart.',
    sub: 'The separation is the point. Each plane owns its responsibility and nothing else.',
    cols: 3,
    items: [
      {
        eyebrow: 'CripsisAI · Thinks',
        title: 'Decides what should happen',
        body: 'Observes authorized events, keeps active work, assembles context, reasons, recommends, and asks when information is missing.',
      },
      {
        eyebrow: 'Kybernite · Knows',
        title: 'Owns what the enterprise knows',
        body: 'Evidence, provenance, decisions, outcomes, and validated practices — durable, inspectable, customer-owned.',
      },
      {
        eyebrow: 'Trilithium · Allows',
        title: 'Decides what is allowed',
        body: 'Identity, authority, policy, approvals, and receipts. Default-deny, deny-precedence, customer isolation, fail-closed.',
      },
    ],
  },
  {
    index: '02',
    category: 'Active learning',
    title: 'It learns from the bottom up — and asks.',
    sub: 'Repeated behavior is evidence, not truth. Written procedure is evidence, not gospel.',
    cols: 4,
    items: [
      { title: 'Observe & correlate', body: 'Normalizes authorized activity and infers which actions belong to one piece of work.' },
      { title: 'Hypothesize', body: 'Forms a candidate explanation of how work is normally performed — held tentatively.' },
      { title: 'Question', body: 'Initiates clarification on uncertainty, conflict, or an unexplained decision.' },
      { title: 'Validate', body: 'Confirms with an authority, then records a practice with evidence and confidence.' },
    ],
  },
  {
    index: '03',
    category: 'Organizational memory',
    title: 'More than conversation history.',
    sub: 'Memory is structured so a learned practice is inspectable — not opaque vectors.',
    cols: 3,
    items: [
      { title: 'Episodic memory', body: 'What happened in specific cases.' },
      { title: 'Operational knowledge', body: 'Known entities, systems, terms, and relationships.' },
      { title: 'Practices', body: 'How work is normally performed.' },
      { title: 'Rules & policies', body: 'Explicit organizational requirements.' },
      { title: 'Exceptions', body: 'Conditions under which a practice changes.' },
      { title: 'Evidence & provenance', body: 'Why Cripsis believes something — traceable to source.' },
    ],
  },
  {
    index: '04',
    category: 'Trust & control',
    title: 'Your intelligence. Your authority. Your walls.',
    sub: 'The enterprise owns and controls its intelligence. Cripsis owns the infrastructure that governs it.',
    cols: 3,
    items: [
      { title: 'Ownership', body: 'The model, the data, and the learned intelligence stay yours.' },
      { title: 'Data never leaves', body: 'Segregated in your environment; never used to improve anyone else’s.' },
      { title: 'Deterministic authority', body: 'Default-deny, fail-closed. Every action evaluated before it happens.' },
      { title: 'Provenance & receipts', body: 'Every belief traceable to evidence; every action produces a record.' },
      { title: 'You set the boundary', body: 'You authorize which systems and information Cripsis may access.' },
      { title: 'Human authority preserved', body: 'Learning how work is done does not authorize doing it.' },
    ],
  },
  {
    index: '05',
    category: 'Delegation',
    title: 'A deliberately staged autonomy ramp.',
    sub: 'Assistance before autonomy. The agent proposes and learns; the control substrate decides.',
    cols: 3,
    items: [
      { eyebrow: 'Observe → Ask', title: '', body: 'Learn the workflow; question ambiguous or conflicting behavior.' },
      { eyebrow: 'Assist → Compress', title: '', body: 'Retrieve context, summarize, prioritize, draft; automate repetitive preparation.' },
      { eyebrow: 'Delegate → Operate', title: '', body: 'Perform bounded approved actions; continue recurring work within authority.' },
    ],
  },
  {
    index: '06',
    category: 'Deployment',
    title: 'Install, authorize, observe, expand.',
    sub: 'No six-month transformation project first. The mess is part of what Cripsis learns to navigate.',
    cols: 4,
    items: [
      { eyebrow: '01', title: 'Install', body: 'Stand up a dedicated environment on your hardware or cloud.' },
      { eyebrow: '02', title: 'Authorize', body: 'Designate users, one workflow, and a small number of sources.' },
      { eyebrow: '03', title: 'Observe & learn', body: 'Read-mostly at first; validated practice accumulates.' },
      { eyebrow: '04', title: 'Expand on proof', body: 'Broaden coverage and bounded write capability once value is shown.' },
    ],
  },
];

import type { RailNode } from '@/components/marketing/NodeRail';

export const railNodes: RailNode[] = [
  { label: 'Owned by you', sub: 'your asset · your walls', active: true },
  { label: 'Deterministic control', sub: 'every action gated' },
  { label: 'Learns from the bottom up', sub: 'from real work' },
  { label: 'Compounding intelligence', sub: 'gets more specific' },
  { label: 'Deploys narrow', sub: 'expands on proof' },
];

export const featureTiles: { num: string; title: string; body: string }[] = [
  {
    num: '01',
    title: 'Observes',
    body: 'Turns authorized activity into a normalized stream and understands which actions belong to one piece of work.',
  },
  {
    num: '02',
    title: 'Asks',
    body: 'Raises a question the moment it detects uncertainty, conflict, or an unexplained decision. Questions are first-class.',
  },
  {
    num: '03',
    title: 'Remembers',
    body: 'Validated practices become durable, inspectable intelligence — with evidence, provenance, and confidence.',
  },
  {
    num: '04',
    title: 'Governs',
    body: 'Every action is evaluated against explicit policy before it happens. Default-deny. Fail-closed. Receipts recorded.',
  },
  {
    num: '05',
    title: 'Assists, then delegates',
    body: 'Retrieves context, drafts, and recommends — then performs bounded work once it is approved.',
  },
  {
    num: '06',
    title: 'Stays yours',
    body: 'Customer-specific intelligence is segregated in your environment and never used to improve anyone else’s.',
  },
];

export const planes: { name: string; verb: string; body: string }[] = [
  {
    name: 'CripsisAI',
    verb: 'Thinks',
    body: 'Observes, keeps active work, assembles context, reasons, recommends, and asks when something is missing.',
  },
  {
    name: 'Kybernite',
    verb: 'Knows',
    body: 'Enterprise intelligence, owned by you: evidence, provenance, and validated practices — durable and inspectable.',
  },
  {
    name: 'Trilithium',
    verb: 'Allows',
    body: 'The deterministic trust plane: identity, authority, policy, approvals, and receipts. Default-deny. Fail-closed.',
  },
];

export const learningFlow = [
  'OBSERVE',
  'HYPOTHESIZE',
  'QUESTION',
  'VALIDATE',
  'LEARN',
  'OPERATE',
];

export const contrastToday = [
  'The problem is discovered while working the file.',
  'Context is reconstructed across systems, email, and memory.',
  'Options are evaluated by hand; impact is guessed.',
  'Someone sets a reminder to check back later.',
];

export const contrastCripsis = [
  'Reasons across authorized signals to surface developing risk.',
  'Assembles context and comparable prior cases before failure.',
  'Applies validated practice and recommends courses of action.',
  'Surfaces decisions needing authority; monitoring continues.',
];

export const economics: { label: string; body: string }[] = [
  { label: 'ASSIST', body: 'Retrieve, assemble, draft.' },
  { label: 'COMPRESS', body: 'Collapse repeated steps.' },
  { label: 'DELEGATE', body: 'Hand off bounded work.' },
  { label: 'OPERATE', body: 'Continue within authority.' },
];

export const economicsChain = [
  'seconds saved',
  'steps removed',
  'tasks delegated',
  'capacity released',
  'talent redeployed',
  'competitive advantage',
];

export const faq: { q: string; a: string }[] = [
  {
    q: 'Is Cripsis specific to one industry?',
    a: 'No. Cripsis is an industry-agnostic learner. It reuses the same learning machinery, connectors, and capabilities across any operations-heavy business — the intelligence it forms is specific to your organization.',
  },
  {
    q: 'Who owns the intelligence it builds?',
    a: 'You do. Customer-specific intelligence stays segregated in your own environment and is never used to improve anyone else’s system. Access and deletion terms are defined before deployment.',
  },
  {
    q: 'Does it act on its own?',
    a: 'Only within explicit authority. Cripsis proposes and learns; the control plane decides whether an action is permitted, requires approval, or must be refused — and produces a receipt afterward.',
  },
  {
    q: 'How does a deployment start?',
    a: 'Narrow. One high-value workflow, one operating team, a small number of authorized sources. Observe, learn, demonstrate value, then expand — no six-month transformation project required first.',
  },
];

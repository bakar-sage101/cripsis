export type Tier = {
  name: string;
  price: string;
  seats: string;
  blurb: string;
  included: string[];
  popular?: boolean;
};

export const tiers: Tier[] = [
  {
    name: 'Office',
    price: '$1,495',
    seats: 'up to 3 operators',
    blurb:
      'Dedicated Cripsis environment for small teams that need persistent enterprise AI without shared customer intelligence.',
    included: [
      'Dedicated resident AI compute',
      'CripsisAI · Kybernite · Trilithium',
      'Deployment & monitoring',
      'Standard support',
    ],
  },
  {
    name: 'Business',
    price: '$2,995',
    seats: 'up to 10 operators',
    blurb:
      'For operational teams that need persistent organizational intelligence, proactive attention, multiple users, and integrations.',
    included: [
      'Dedicated high-performance compute',
      'Proactive Enterprise Agent attention',
      'Multiple users & integrations',
      'Deployment, monitoring, standard support',
    ],
  },
  {
    name: 'Pro',
    price: '$4,995',
    seats: 'up to 20 operators',
    popular: true,
    blurb:
      'Higher-capacity deployment for broader agent use, heavier concurrent workloads, more integrations, and background activity.',
    included: [
      'Expanded dedicated AI capacity',
      'Heavier concurrent workloads',
      'More integrations · background agents',
      'Priority support',
    ],
  },
  {
    name: 'Pro+',
    price: '$6,995',
    seats: 'up to 30 operators',
    blurb:
      'Multi-GPU dedicated deployment for greater concurrency, resilience, background reasoning capacity, and operational scale.',
    included: [
      'Multi-GPU dedicated deployment',
      'Greater concurrency & resilience',
      'Background reasoning capacity',
      'Priority support',
    ],
  },
];

export const inEveryPlan: { name: string; body: string }[] = [
  { name: 'CripsisAI', body: 'Agents, workbench, and proactive attention.' },
  { name: 'Kybernite', body: 'Durable, customer-owned enterprise intelligence.' },
  { name: 'Trilithium', body: 'Deterministic authority, approvals, and receipts.' },
  { name: 'Deployment', body: 'Setup, monitoring, and integration support.' },
];

export const pricingFaq: { q: string; a: string }[] = [
  {
    q: 'What does “dedicated” mean?',
    a: 'Each plan is its own Cripsis environment with its own resident AI compute. Your intelligence is never shared with or trained into another customer’s system.',
  },
  {
    q: 'How do I choose a tier?',
    a: 'By operators and concurrency. Office and Business suit small and operational teams; Pro and Pro+ add capacity, integrations, and background reasoning for heavier, multi-GPU workloads.',
  },
  {
    q: 'Can it run on our own infrastructure?',
    a: 'Yes — private infrastructure and customer-hosted systems are handled under Enterprise & Gov, alongside regulated-environment and advanced-security requirements.',
  },
];

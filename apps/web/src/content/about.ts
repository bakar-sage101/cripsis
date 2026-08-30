export const doctrine: { label: string; title: string; body: string }[] = [
  {
    label: 'Owned',
    title: 'Your intelligence stays yours',
    body: 'Customer-specific knowledge is segregated in your environment — not commoditized into someone else’s model.',
  },
  {
    label: 'Governed',
    title: 'Authority is deterministic',
    body: 'Learning does not confer authority. What Cripsis may do is decided by explicit policy, with a receipt for every action.',
  },
  {
    label: 'Compounding',
    title: 'It gets more specific over time',
    body: 'Every validated workflow adds institutional intelligence — increasingly specific to how your organization operates.',
  },
];

export const principles: { tag: string; title: string; body: string }[] = [
  { tag: 'evidence', title: 'Evidence, not truth', body: 'Seeing something five times is evidence — never automatically company policy.' },
  { tag: 'questions', title: 'Questions are first-class', body: 'Cripsis initiates clarification when it detects uncertainty, conflict, or missing information.' },
  { tag: 'procedure', title: 'Procedure is evidence', body: 'When practice diverges from the written SOP, Cripsis notices — and asks why.' },
  { tag: 'authority', title: 'Learning ≠ authority', body: 'Knowing how humans perform work does not authorize Cripsis to perform it.' },
  { tag: 'focus', title: 'Start with one workflow', body: 'Prove the learning mechanism deeply before chasing broad coverage.' },
  { tag: 'outcomes', title: 'Measure operating outcomes', body: 'Better prioritization, fewer missed exceptions, less effort, and safe delegation.' },
];

export const team: { initials: string; slug: string; name: string; role: string; bio: string }[] = [
  {
    initials: 'AP',
    slug: 'andrew',
    name: 'Andrew Poinçot',
    role: 'Founder & CEO',
    bio: 'A decade-plus running demanding, time-critical operations. Founded Cripsis to give enterprises ownership of their own intelligence.',
  },
  {
    initials: 'MS',
    slug: 'abubakar',
    name: 'Muhammad Abubakar Siddique',
    role: 'Founding Software Architect',
    bio: 'LLM systems, backend, and workflow architecture. Builds the intelligent application layer.',
  },
  {
    initials: 'DP',
    slug: 'dominique',
    name: 'Dominique Poinçot',
    role: 'Founding Hardware Architect',
    bio: 'Hardware systems and custom compute. Owns the Cripsis Node architecture.',
  },
];

/** The doctrine, dramatized: the default (surrender) vs Cripsis (ownership). */
export const surrenderPoints: string[] = [
  'Your operating knowledge is uploaded to a shared model.',
  'The vendor’s system improves from your data.',
  'Your advantage becomes everyone’s baseline.',
  'You rent intelligence you helped create.',
];

export const ownershipPoints: string[] = [
  'Your intelligence is segregated in your own environment.',
  'It is never used to improve anyone else’s system.',
  'Every belief is traceable; every action leaves a receipt.',
  'You own the model, the data, and what it learns.',
];

/** Assets held inside the ownership boundary (hero visual). */
export const ownedAssets: { tag: string; label: string }[] = [
  { tag: 'evidence', label: 'why it believes' },
  { tag: 'practices', label: 'how work is done' },
  { tag: 'provenance', label: 'traceable to source' },
  { tag: 'receipts', label: 'every action logged' },
];

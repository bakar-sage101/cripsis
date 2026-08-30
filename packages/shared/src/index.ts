/**
 * Shared types and contracts between the Cripsis web (Next.js) and api (NestJS)
 * apps. Keep this package free of runtime dependencies — it is the API contract.
 */

export type ServiceStatus = 'nominal' | 'degraded' | 'down';

export interface HealthStatus {
  status: ServiceStatus;
  service: string;
  timestamp: string;
}

export type BriefUrgency = 'exploring' | 'this_quarter' | 'priority';

/** Payload for the "Become a design partner" / cripsis.brief form. */
export interface DesignPartnerBrief {
  workEmail: string;
  organization?: string;
  role?: string;
  /** The workflow that costs the most when it fails. */
  workflow: string;
  urgency: BriefUrgency;
}

export interface DesignPartnerBriefResponse {
  received: true;
  reference: string;
}

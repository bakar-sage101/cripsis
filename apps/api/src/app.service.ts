import { Injectable } from '@nestjs/common';
import type { HealthStatus } from '@cripsis/shared';

@Injectable()
export class AppService {
  getHealth(): HealthStatus {
    return {
      status: 'nominal',
      service: 'cripsis-api',
      timestamp: new Date().toISOString(),
    };
  }
}

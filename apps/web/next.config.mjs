import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a self-contained server bundle (.next/standalone) so the Docker
  // image can run the site with a minimal set of files — no full node_modules.
  output: 'standalone',
  // Pin the workspace root (this monorepo) so Next ignores stray lockfiles
  // elsewhere on the machine.
  outputFileTracingRoot: join(__dirname, '../../'),
  // Allow an isolated build output via NEXT_DIST_DIR so a throwaway verification
  // server never collides with a `next start`/`next dev` already using `.next`.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // Proxy /api/* to the NestJS backend in development.
  async rewrites() {
    const apiUrl = process.env.API_URL ?? 'http://localhost:3001';
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;

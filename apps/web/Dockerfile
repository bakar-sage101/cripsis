# syntax=docker/dockerfile:1
#
# Container image for the Cripsis website (apps/web).
#
# IMPORTANT: build this from the REPO ROOT so the whole pnpm workspace is in
# scope, e.g.:  docker build -f apps/web/Dockerfile -t cripsis-web .
# The GitHub Actions pipeline does exactly that.

# ---- Base image with pnpm enabled ----------------------------------------
FROM node:22-alpine AS base
RUN corepack enable
WORKDIR /app

# ---- Install deps + build the web app ------------------------------------
FROM base AS builder
# Copy the entire monorepo (simple and reliable; .dockerignore trims the fat).
COPY . .
RUN pnpm install --frozen-lockfile
# Build the web app and anything it depends on (e.g. @cripsis/shared).
RUN pnpm turbo run build --filter=@cripsis/web

# ---- Minimal runtime image -----------------------------------------------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Next's standalone server must bind to all interfaces for Cloud Run to reach it.
ENV HOSTNAME=0.0.0.0
# Cloud Run injects PORT (defaults to 8080); the standalone server honors it.

# Run as a non-root user for safety.
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# The standalone output already contains a trimmed node_modules and server.js.
# Because outputFileTracingRoot is the monorepo root, paths are nested under apps/web.
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

USER nextjs
EXPOSE 8080
CMD ["node", "apps/web/server.js"]

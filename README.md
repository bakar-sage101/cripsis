# Cripsis

> The Infrastructure of Cognition.

A monorepo containing the Cripsis marketing website (**Next.js**) and its API
(**NestJS**), managed with **pnpm workspaces** + **Turborepo**.

## Structure

```
cripsis/
├── apps/
│   ├── web/                # Next.js 15 (App Router) — the website
│   └── api/                # NestJS 11 — the backend API
├── packages/
│   ├── shared/             # Shared TypeScript types / API contract (@cripsis/shared)
│   ├── typescript-config/  # Shared tsconfig bases (@cripsis/typescript-config)
│   └── eslint-config/      # Shared ESLint flat config (@cripsis/eslint-config)
├── design/                 # Source design templates (see design/README.md)
├── turbo.json              # Turborepo pipeline
├── pnpm-workspace.yaml     # Workspace definition
└── package.json            # Root scripts & dev tooling
```

## Prerequisites

- **Node.js** >= 20 (an `.nvmrc` pins 20 — run `nvm use`)
- **pnpm** 9 (`corepack enable` will provide the version pinned in `packageManager`)

## Getting started

```bash
# from the repo root
corepack enable          # makes the pinned pnpm available
pnpm install             # install all workspaces
pnpm build               # build shared package + apps (Turbo handles ordering)
pnpm dev                 # run web + api together
```

- Web: http://localhost:3000
- API: http://localhost:3001/api (health check: `GET /api/health`)

The web app proxies `/api/*` to the NestJS server in development (see
`apps/web/next.config.mjs`), so the frontend can call `/api/...` directly.

## Scripts (run from the root)

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `pnpm dev`        | Runs every app's `dev` task in parallel (Turbo)     |
| `pnpm build`      | Builds all packages and apps in dependency order    |
| `pnpm lint`       | Lints every workspace                               |
| `pnpm typecheck`  | Type-checks every workspace                         |
| `pnpm test`       | Runs unit tests (API)                               |
| `pnpm format`     | Formats the repo with Prettier                      |

Individual apps can be run with pnpm filters, e.g.:

```bash
pnpm --filter @cripsis/web dev
pnpm --filter @cripsis/api dev
```

## Conventions

- **Shared code** goes in `packages/shared` and is imported as `@cripsis/shared`.
  It is a compiled package (emits `dist/`), so Turbo builds it before the apps.
- **TypeScript** and **ESLint** settings are centralised in `packages/*-config`
  and extended by each app — change them in one place.
- **Environment variables**: copy each app's `.env.example` to `.env` (or
  `.env.local` for web) and adjust.

## Next steps

The design lives in `design/` as standalone HTML templates. The next task is to
implement those pages inside `apps/web` using the shared brand tokens already
wired up in `apps/web/src/app/globals.css`.

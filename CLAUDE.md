# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visao Geral

Stakei: app de gestao de apostas esportivas para o mercado brasileiro.
Monorepo Turborepo com pnpm. UI em portugues brasileiro.

## Estrutura do Repositorio

- `apps/web/` — Next.js 16 (App Router). Landing page + app futuro.
- `apps/api/` — Fastify + tRPC (placeholder, Phase 1).
- `packages/db/` — Drizzle ORM. Schemas em `src/schema/`, migrations em `migrations/`.
- `packages/shared/` — Zod validators e tipos compartilhados.
- `packages/ui/` — Componentes React compartilhados (placeholder, Phase 1).

## Comandos

```bash
pnpm install          # Instalar dependencias
pnpm dev              # Dev server (apps/web)
pnpm build            # Build de producao
pnpm lint             # ESLint em todos os pacotes
pnpm type-check       # TypeScript check em todos os pacotes
pnpm db:push          # Aplicar schema no banco (dev)
pnpm db:generate      # Gerar migracao
pnpm db:migrate       # Executar migracoes
pnpm db:studio        # Abrir Drizzle Studio
```

## Banco de Dados

- Supabase PostgreSQL: https://edbfzbdxgcvtjqwdszpn.supabase.co
- ORM: Drizzle com driver postgres-js
- Conexao pooled (Transaction mode) requer `prepare: false`
- Tabela `waitlist` ja existe — nao recriar via migracao

## Deploy

- Vercel: projeto `stakei`, team `trato`
- Root directory no Vercel: `apps/web`
- Variaveis de ambiente: SUPABASE_URL, SUPABASE_ANON_KEY
- Branch principal: `master`

## Convencoes

- Comentarios e docs em portugues
- Nomes de variaveis/funcoes em ingles
- Commits em ingles (conventional commits)
- Package names: `@stakei/web`, `@stakei/api`, `@stakei/db`, `@stakei/shared`, `@stakei/ui`

# Stakei

App de gestao de apostas esportivas para o mercado brasileiro.

## Estrutura

```
stakei/
├── apps/
│   ├── web/          # Next.js 16 (landing + app)
│   └── api/          # Fastify + tRPC (Phase 1)
├── packages/
│   ├── db/           # Drizzle ORM schemas + migrations
│   ├── shared/       # Zod validators, tipos compartilhados
│   └── ui/           # Componentes React compartilhados (Phase 1)
├── turbo.json
├── package.json
└── pnpm-workspace.yaml
```

## Desenvolvimento

```bash
pnpm install
pnpm dev          # Inicia apps/web em modo dev
pnpm build        # Build de producao
pnpm lint         # ESLint em todos os pacotes
pnpm type-check   # TypeScript check em todos os pacotes
```

## Banco de Dados

```bash
pnpm db:push      # Aplica schema no banco (dev)
pnpm db:generate  # Gera migracao
pnpm db:migrate   # Executa migracoes (producao)
pnpm db:studio    # Abre Drizzle Studio
```

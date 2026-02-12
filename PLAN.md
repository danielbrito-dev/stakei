# Stakei — Plano de Implementação

## Visão do Produto

App de gestão de apostas esportivas para o mercado brasileiro (25M+ apostadores).
Killer feature: calculadora de Imposto de Renda automática.
Modelo: Freemium (grátis com limites → Pro R$19,90/mês → Premium R$39,90/mês).

---

## Stack Técnica

| Camada | Tecnologia |
|--------|------------|
| Monorepo | Turborepo |
| Web | Next.js 15 (App Router) |
| Mobile | React Native (Expo SDK 52+) |
| API | Node.js + Fastify + tRPC |
| Banco de dados | PostgreSQL (Supabase) |
| Auth | Supabase Auth (email + Google + Apple) |
| Cache | Redis (Upstash) |
| OCR | Google Cloud Vision API |
| Push | Expo Notifications |
| Analytics | PostHog |
| Pagamento | Stripe (assinatura) |
| Deploy Web | Vercel |
| Deploy API | Railway ou Render |
| CI/CD | GitHub Actions |

---

## Fases de Implementação

### Fase 0 — Fundação (Semana 1-2)

**Objetivo**: Estrutura do monorepo, auth, e modelo de dados.

- [ ] 0.1 — Setup monorepo com Turborepo
  ```
  stakei/
  ├── apps/
  │   ├── web/          # Next.js (landing + app web)
  │   ├── mobile/       # Expo React Native
  │   └── api/          # Fastify + tRPC
  ├── packages/
  │   ├── db/           # Drizzle ORM schemas + migrations
  │   ├── shared/       # Types, utils, validators (Zod)
  │   └── ui/           # Componentes compartilhados
  └── turbo.json
  ```
- [ ] 0.2 — Schema do banco de dados (Drizzle ORM + PostgreSQL)
  ```sql
  users (id, email, name, avatar, created_at)
  bankrolls (id, user_id, name, house_name, initial_balance, current_balance, currency)
  bets (id, user_id, bankroll_id, type[single|parlay], stake, potential_return,
        odds_total, status[pending|won|lost|void|cashout], placed_at, settled_at)
  bet_legs (id, bet_id, event_name, sport, league, market, selection, odds,
            status[pending|won|lost|void], settled_at)
  transactions (id, user_id, bankroll_id, type[deposit|withdraw], amount, date, notes)
  tax_records (id, user_id, year, month, gross_profit, losses, net_profit,
               tax_due, exempt_amount)
  ```
- [ ] 0.3 — Supabase Auth (email/password, Google OAuth, Apple Sign-In)
- [ ] 0.4 — tRPC router base com procedures de auth
- [ ] 0.5 — CI/CD pipeline (lint, type-check, test, build)

---

### Fase 1 — MVP Core (Semana 3-5)

**Objetivo**: Registro de apostas + dashboard básico. Versão web funcional.

#### 1.1 — Registro de Apostas
- [ ] CRUD completo de apostas (simples e múltiplas)
- [ ] Formulário com campos: casa, esporte, liga, mercado, seleção, odd, valor
- [ ] Suporte a múltiplas legs (apostas múltiplas/parlay)
- [ ] Status: pendente → ganha/perdida/void/cashout
- [ ] Edição e exclusão de apostas
- [ ] Tags customizáveis (ex: "pré-jogo", "ao vivo", "tip do fulano")

#### 1.2 — Gestão de Banca
- [ ] CRUD de bancas (uma por casa de apostas)
- [ ] Registro de depósitos e saques
- [ ] Saldo atual calculado automaticamente (depósitos - saques + lucros - perdas)
- [ ] Stake recomendado (% fixo da banca configurável)
- [ ] Visão consolidada de todas as bancas

#### 1.3 — Dashboard
- [ ] Lucro/prejuízo (dia, semana, mês, personalizado)
- [ ] ROI geral e por filtro (esporte, liga, mercado, casa)
- [ ] Gráfico de evolução da banca (line chart)
- [ ] Win rate (% de apostas ganhas)
- [ ] Sequência atual (wins/losses streak)
- [ ] Top 5 ligas/mercados mais lucrativos

#### 1.4 — UI/UX Web
- [ ] Design system com Tailwind + shadcn/ui
- [ ] Dark mode (padrão) + light mode
- [ ] Layout responsivo (sidebar no desktop, bottom nav no mobile)
- [ ] Skeleton loaders e estados vazios

---

### Fase 2 — Calculadora de IR (Semana 6-7)

**Objetivo**: Diferencial competitivo — nenhum concorrente tem isso.

#### 2.1 — Motor de Cálculo Fiscal
- [ ] Regras do IR sobre apostas (Lei 14.790/2023):
  - Alíquota: 15% sobre lucro líquido
  - Isenção: até R$ 2.112,00/ano
  - Perdas acumuladas no ano podem ser deduzidas dos ganhos
  - Base de cálculo: (prêmios recebidos) - (valor apostado) - (perdas acumuladas)
- [ ] Cálculo mensal automático baseado nas apostas registradas
- [ ] Acumulado anual com projeção de imposto restante
- [ ] Alerta quando se aproximar do limite de isenção

#### 2.2 — Relatório Fiscal
- [ ] Resumo anual por mês (lucro bruto, perdas, lucro líquido, imposto)
- [ ] Exportação em PDF para o contador
- [ ] Formato compatível com declaração IRPF
- [ ] Detalhamento por casa de apostas (CNPJ/nome)

#### 2.3 — Alertas Fiscais
- [ ] Push notification quando acumular R$ 1.500+ em lucro (próximo da faixa)
- [ ] Lembrete mensal de conferência
- [ ] Lembrete no período de declaração (março-maio)

---

### Fase 3 — App Mobile (Semana 8-10)

**Objetivo**: App nativo para iOS e Android com Expo.

#### 3.1 — Setup Expo
- [ ] Expo SDK 52+ com Expo Router (file-based routing)
- [ ] NativeWind (Tailwind para React Native)
- [ ] Configuração EAS Build (iOS + Android)
- [ ] Publicação na App Store (conta developer Apple existente)
- [ ] Publicação na Google Play

#### 3.2 — Telas Mobile
- [ ] Home/Dashboard (gráfico, resumo do dia, acesso rápido)
- [ ] Lista de apostas (infinite scroll, filtros, busca)
- [ ] Nova aposta (formulário otimizado para mobile)
- [ ] Bancas (lista, detalhes, depósito/saque)
- [ ] Calculadora IR (resumo, relatório)
- [ ] Perfil/Configurações

#### 3.3 — Features Mobile-Específicas
- [ ] Registro rápido via foto (OCR do comprovante de aposta)
- [ ] Push notifications (alertas de IR, jogo responsável)
- [ ] Biometria (Face ID / Touch ID) para abrir o app
- [ ] Widget iOS (lucro do dia / saldo da banca)
- [ ] Offline mode (SQLite local + sync)

---

### Fase 4 — Jogo Responsável (Semana 11-12)

**Objetivo**: Diferencial ético + possível parceria com operadores.

- [ ] 4.1 — Limites auto-impostos
  - Limite diário de valor apostado
  - Limite semanal de perdas
  - Limite de tempo de sessão
- [ ] 4.2 — Alertas comportamentais
  - Sequência de X perdas consecutivas → alerta
  - Aumento repentino de stakes → alerta
  - Apostas em horários incomuns → alerta
- [ ] 4.3 — Cool-down timer
  - Pausa forçada configurável (ex: 24h sem poder registrar aposta)
- [ ] 4.4 — Resumo de comportamento
  - Score de saúde das apostas (baseado em padrões)
  - Comparação com o mês anterior
  - Dicas personalizadas

---

### Fase 5 — Monetização + Growth (Semana 13-16)

#### 5.1 — Planos de Assinatura
- [ ] **Free**: até 30 apostas/mês, 1 banca, dashboard básico
- [ ] **Pro (R$ 19,90/mês)**: apostas ilimitadas, bancas ilimitadas, calculadora IR, exportação PDF, filtros avançados
- [ ] **Premium (R$ 39,90/mês)**: tudo do Pro + OCR import, analytics por IA, widget iOS, suporte prioritário
- [ ] Stripe Checkout integrado (cartão + Pix via Stripe BR)
- [ ] Trial de 14 dias do Pro para novos usuários

#### 5.2 — Programa de Afiliados
- [ ] Link de indicação por usuário
- [ ] Recompensa: 1 mês grátis de Pro por cada amigo que assinar
- [ ] Dashboard de indicações

#### 5.3 — Afiliados de Casas de Apostas (receita adicional)
- [ ] Integração com programas de afiliados das principais casas .bet.br
- [ ] Sugestão contextual: "Abra conta na Betano" ao criar banca
- [ ] Revenue share: CPA por registro + depósito
- [ ] Divulgação transparente (badge "parceiro")

#### 5.4 — SEO + Content Marketing
- [ ] Blog integrado (Next.js MDX): "Como declarar apostas no IR", "Gestão de banca para iniciantes"
- [ ] Landing pages específicas: /calculadora-ir-apostas, /gestao-de-banca
- [ ] Schema markup (FAQ, HowTo) para Google
- [ ] Open Graph / Twitter Cards para compartilhamento

---

## Marcos e Métricas

| Marco | Semana | Métrica de Sucesso |
|-------|--------|-------------------|
| Landing page + waitlist | 0 (feito) | 500+ emails em 30 dias |
| MVP web funcional | 5 | 100 usuários beta |
| Calculadora de IR | 7 | Feature mais usada |
| App mobile publicado | 10 | 1.000 downloads |
| Primeira receita | 14 | 50 assinantes pagos |
| Product-market fit | 16 | 70%+ retenção semanal |

---

## Riscos e Mitigações

| Risco | Probabilidade | Mitigação |
|-------|---------------|-----------|
| OCR impreciso nos comprovantes | Alta | Fallback para input manual; melhorar modelo com dados reais |
| Baixa conversão free→pago | Média | Calculadora IR só no Pro (killer feature gate) |
| Mudança na lei do IR | Baixa | Motor de cálculo configurável, acompanhar legislação |
| Concorrente copiar IR feature | Média | Ser primeiro, construir marca, adicionar IA |
| App rejeitado na App Store | Baixa | Não oferecer apostas, apenas tracking financeiro |

---

## Decisões Técnicas Importantes

1. **tRPC sobre REST/GraphQL**: Type-safety end-to-end com zero code generation. O frontend infere tipos direto do router.
2. **Drizzle sobre Prisma**: Mais leve, SQL-like, melhor para queries complexas (relatórios fiscais).
3. **Supabase sobre Auth.js**: Auth + Postgres + Storage + Realtime em um só serviço. Free tier generoso.
4. **Expo sobre React Native CLI**: EAS Build simplifica publicação, OTA updates, push notifications out of the box.
5. **Turborepo sobre Nx**: Mais simples, zero config, integra perfeitamente com Vercel.
6. **shadcn/ui sobre Material/Ant**: Componentes copiados (não dependency), Tailwind nativo, totalmente customizável.

import { WaitlistForm } from "../components/WaitlistForm";

const stats = [
  { value: "25M+", label: "Apostadores ativos", desc: "no Brasil" },
  { value: "85%", label: "Não controlam", desc: "suas apostas" },
  { value: "15%", label: "Imposto de Renda", desc: "sobre lucros em apostas" },
  { value: "R$ 0", label: "Ferramentas de IR", desc: "para apostadores" },
];

const features = [
  {
    title: "Dashboard Inteligente",
    desc: "Lucro, prejuízo e ROI por esporte, liga e mercado. Saiba exatamente onde você ganha e onde perde.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l4-8 4 4 4-8" />
      </svg>
    ),
  },
  {
    title: "Gestão de Banca",
    desc: "Controle depósitos, saques e tenha stake recomendado. Uma banca organizada para cada casa de apostas.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 110-6h.75A2.25 2.25 0 0118 6v0a2.25 2.25 0 01-2.25 2.25H15M3 12a2.25 2.25 0 002.25 2.25H9a3 3 0 100 6h-.75A2.25 2.25 0 016 18v0a2.25 2.25 0 012.25-2.25H9" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="16.5" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Calculadora de IR",
    desc: "Calcule automaticamente quanto deve ao Leão. Relatório pronto para a declaração do IRPF.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path strokeLinecap="round" d="M8 6h8M8 10h3M13 10h3M8 14h3M13 14h3M8 18h8" />
      </svg>
    ),
  },
  {
    title: "Jogo Responsável",
    desc: "Defina limites de aposta, receba alertas de perda e aposte com consciência e controle.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Registre",
    desc: "Cadastre suas apostas manualmente ou importe via foto do comprovante.",
  },
  {
    num: "02",
    title: "Acompanhe",
    desc: "Dashboard mostra lucro, ROI e evolução da banca em tempo real.",
  },
  {
    num: "03",
    title: "Declare",
    desc: "Relatório fiscal pronto para seu contador ou para a declaração do IRPF.",
  },
];

const faqs = [
  {
    q: "O Stakei é gratuito?",
    a: "Sim! O plano básico será gratuito para sempre. Teremos planos premium com recursos avançados como import automático via foto e analytics por IA.",
  },
  {
    q: "Preciso conectar minha conta de apostas?",
    a: "Não. Você registra suas apostas manualmente ou importa via foto do comprovante. Seus dados de login das casas nunca são solicitados.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Seus dados são criptografados e armazenados em servidores no Brasil, em conformidade com a LGPD.",
  },
  {
    q: "Quando o app será lançado?",
    a: "Estamos em desenvolvimento ativo. Entre na lista de espera para ter acesso antecipado e 3 meses de premium grátis.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="text-xl font-bold tracking-tight text-white">
            stakei<span className="text-emerald-500">.</span>
          </span>
          <a
            href="#waitlist"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-gray-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            Entrar na lista
          </a>
        </div>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section className="hero-glow relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Em breve — entre na lista de espera
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pare de apostar{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                no escuro.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
              O primeiro app brasileiro que organiza suas apostas, mostra seu
              lucro real e calcula seu Imposto de Renda — tudo automático.
            </p>

            <div className="mt-10 flex justify-center" id="waitlist">
              <WaitlistForm />
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Grátis para sempre. Sem cartão de crédito.
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
        </section>

        {/* ── Problem / Stats ── */}
        <section className="border-t border-gray-800/50 bg-gray-900/30 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-emerald-500">
              O cenário
            </p>
            <h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl">
              O problema é claro
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
              Milhões de brasileiros apostam todos os dias, mas quase ninguém
              sabe se está ganhando ou perdendo dinheiro — muito menos quanto
              deve de imposto.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center transition-colors hover:border-gray-700"
                >
                  <p className="text-3xl font-bold text-emerald-400 sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-medium text-white">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="border-t border-gray-800/50 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-emerald-500">
              Funcionalidades
            </p>
            <h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl">
              Tudo que você precisa em um app
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
              Chega de planilhas, anotações soltas e surpresas na hora de
              declarar o imposto.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-all hover:border-emerald-500/30 hover:bg-gray-900"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="border-t border-gray-800/50 bg-gray-900/30 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-emerald-500">
              Simples assim
            </p>
            <h2 className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl">
              Como funciona
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.num} className="text-center">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-lg font-bold text-emerald-400">
                    {step.num}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="border-t border-gray-800/50 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-emerald-500">
              Dúvidas
            </p>
            <h2 className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl">
              Perguntas frequentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-gray-800 bg-gray-900/50 transition-colors open:border-gray-700"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-5">
                    <span className="font-medium text-white">{faq.q}</span>
                    <span className="faq-icon ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-transform duration-200">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="leading-relaxed text-gray-400">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="border-t border-gray-800/50 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-emerald-500/10 via-gray-900 to-cyan-500/10 border border-emerald-500/20 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Seja um dos primeiros.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-gray-400">
              Entre na lista de espera e garanta acesso antecipado + 3 meses de
              premium grátis.
            </p>
            <div className="mt-8 flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-800/50 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm font-bold tracking-tight text-gray-600">
            stakei<span className="text-emerald-500/50">.</span>
          </span>
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Stakei. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

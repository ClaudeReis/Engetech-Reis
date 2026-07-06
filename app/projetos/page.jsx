import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ChatBot from "@/components/ChatBot";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projetos";
import { SITE_URL } from "@/lib/config";

// Title completo (com "| EngeTech Reis") ≤60 caracteres — regra do Google.
const TITLE = "Portfólio: Sites para Negócios Locais no RJ";
const DESCRIPTION =
  "Projetos da EngeTech Reis: sites, landing pages e chatbots criados do zero para negócios locais no Rio de Janeiro. Veja o case de cada cliente.";

export const metadata = {
  title: `${TITLE} | EngeTech Reis`,
  description: DESCRIPTION,
  alternates: { canonical: "/projetos/" },
  openGraph: {
    title: `${TITLE} | EngeTech Reis`,
    description: DESCRIPTION,
    url: "/projetos/",
    siteName: "EngeTech Reis",
    type: "website",
    locale: "pt_BR",
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | EngeTech Reis`,
    description: DESCRIPTION,
    images: [`${SITE_URL}/og.png`],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>

      <Header />
      <main id="conteudo">
        <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-14">
          <div
            aria-hidden="true"
            className="glow-blob absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-cyan/40"
          />
          <div className="section-wrap relative">
            <Reveal>
              <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                Projetos que já colocamos no ar
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
                Sites, landing pages e chatbots criados do zero para negócios
                locais no Rio de Janeiro — identidade própria, código limpo,
                nenhum template. Clique em um projeto pra ver o case completo.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-16">
          <div className="section-wrap">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.id} project={p} screenshotHeight="h-48" fadeHeight="h-8" />
              ))}
            </div>
          </div>
        </section>

        {/* Como trabalhamos — conteúdo indexável do hub (a página só com os
            cards ficava com contagem de palavras baixa pra SEO) */}
        <section className="section-pad section-tint">
          <div className="section-wrap">
            <Reveal>
              <h2 className="max-w-2xl text-balance font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Como esses projetos são construídos
              </h2>
            </Reveal>
            <div className="mt-6 grid max-w-4xl gap-6 text-pretty leading-relaxed text-ink-muted lg:grid-cols-2">
              <Reveal delay={80}>
                <p>
                  Todo projeto da EngeTech Reis começa do zero: nada de template
                  comprado ou tema adaptado. A gente estuda o negócio, o bairro e
                  o cliente que ele quer atrair, e desenha uma identidade própria
                  — paleta, tipografia e estrutura pensadas pra aquele nicho. O
                  resultado é uma{" "}
                  <a href="/criar-landing-page/" className="text-brand-cyan underline-offset-4 hover:underline">
                    landing page
                  </a>{" "}
                  ou um{" "}
                  <a href="/site-institucional/" className="text-brand-cyan underline-offset-4 hover:underline">
                    site institucional
                  </a>{" "}
                  com a cara do negócio, não com a cara de site pronto.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Por baixo do design, cada página nasce com a base de SEO feita:
                  títulos e descrições dentro das regras do Google, dados
                  estruturados de negócio local, carregamento rápido e versão
                  mobile em primeiro lugar. E quando o projeto pede atendimento
                  automático, o{" "}
                  <a href="/chatbot-para-site/" className="text-brand-cyan underline-offset-4 hover:underline">
                    chatbot
                  </a>{" "}
                  responde o visitante na hora e entrega o lead qualificado no
                  WhatsApp do dono.
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
      <ChatBot />
    </>
  );
}

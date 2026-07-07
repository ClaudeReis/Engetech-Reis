import { ArrowRight, ChevronRight, Search, Route } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";
import ChatBot from "./ChatBot";
import Reveal from "./Reveal";
import CTAButton from "./CTAButton";
import { asset } from "@/lib/asset";
import { SITE_URL, INSTAGRAM_URL, waLink, WA_MESSAGES } from "@/lib/config";

// Página "Sobre" (/sobre) — dedicada à entidade Jonathan Reis + EngeTech Reis.
// Objetivo de SEO: ranquear a marca e desambiguar da colisão com engenharia
// civil. Entidade Person conectada por @id ao ProfessionalService (#business)
// declarado em JsonLd.jsx (evita entidade duplicada no grafo).
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#jonathan-reis`,
  name: "Jonathan Reis",
  jobTitle: "Fundador",
  worksFor: { "@id": `${SITE_URL}/#business` },
  url: `${SITE_URL}/sobre/`,
  image: `${SITE_URL}/founder.webp`,
  sameAs: [INSTAGRAM_URL],
  knowsAbout: [
    "Criação de sites",
    "Landing pages",
    "Otimização SEO",
    "Chatbot para site",
    "Automação de atendimento",
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Sobre", item: `${SITE_URL}/sobre/` },
  ],
};

export default function Sobre() {
  const waHref = waLink(WA_MESSAGES.sobre);

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Header />
      <main id="conteudo">
        {/* Hero + card do fundador */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div
            aria-hidden="true"
            className="glow-blob absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-cyan/40"
          />
          <div className="section-wrap relative">
            {/* Trilha Início › Sobre (2 níveis; o BreadcrumbList vai no JSON-LD) */}
            <nav aria-label="Trilha de navegação" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                <li>
                  <a
                    href="/"
                    className="rounded text-ink-muted transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
                  >
                    Início
                  </a>
                </li>
                <li aria-hidden="true">
                  <ChevronRight size={13} className="text-edge" />
                </li>
                <li aria-current="page" className="text-ink">Sobre</li>
              </ol>
            </nav>

            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
                Fundador · EngeTech Reis
              </p>
              <h1 className="mt-2 max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                Quem é Jonathan Reis, fundador da EngeTech Reis
              </h1>
            </Reveal>

            {/* Card: foto + bio principal */}
            <Reveal delay={120}>
              <div className="gradient-border mt-10">
                <div className="overflow-hidden rounded-[calc(1rem-1px)] bg-carbon">
                  <div className="flex flex-col sm:flex-row">
                    {/* Foto — rosto na metade direita da imagem */}
                    <div className="relative h-72 w-full shrink-0 sm:h-auto sm:w-72 lg:w-96">
                      <img
                        src={asset("/founder.webp")}
                        alt="Jonathan Reis, fundador da EngeTech Reis, agência de criação de sites e landing pages no Rio de Janeiro"
                        width={768}
                        height={768}
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ objectPosition: "85% center" }}
                      />
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-carbon to-transparent sm:hidden"
                        aria-hidden="true"
                      />
                      <div
                        className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-carbon to-transparent sm:block"
                        aria-hidden="true"
                      />
                    </div>
                    {/* Bio */}
                    <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 lg:p-10">
                      <p className="text-pretty leading-relaxed text-ink-muted lg:text-lg">
                        Sou Jonathan Reis, fundador da EngeTech Reis, agência de{" "}
                        <a
                          href="/criar-landing-page/"
                          className="rounded font-medium text-brand-cyan underline decoration-brand-cyan/40 underline-offset-2 transition-colors hover:decoration-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
                        >
                          criação de sites e landing pages
                        </a>{" "}
                        no Rio de Janeiro. Minha especialidade é construir páginas
                        profissionais com atendente virtual integrado, que respondem
                        visitantes, tiram dúvidas e capturam oportunidades em tempo real.
                      </p>
                      <p className="text-pretty leading-relaxed text-ink-muted lg:text-lg">
                        A EngeTech nasceu de uma percepção simples. Todo pequeno negócio
                        merece uma presença digital de alto nível. Não só uma página
                        bonita, mas um site que aparece no Google e trabalha pelo dono
                        todos os dias, mesmo quando ele não está online. Por isso uni três
                        coisas: engenharia, design e automação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Subseções */}
        <section className="section-pad section-tint">
          <div className="section-wrap grid gap-5 md:grid-cols-2">
            <Reveal>
              <article className="card-base accent-top flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-cyan ring-1 ring-inset ring-brand-cyan/30">
                    <Search size={22} aria-hidden="true" />
                  </span>
                  <h2 className="font-heading text-xl font-semibold tracking-tight text-ink">
                    Sites que aparecem no Google
                  </h2>
                </div>
                <p className="mt-5 text-pretty leading-relaxed text-ink-muted">
                  Além da criação, faço a otimização SEO do seu site, para que o seu
                  negócio seja encontrado por quem já está procurando o que você oferece.
                  Site bonito que ninguém acha não gera venda. Site otimizado aparece,
                  atrai e converte.
                </p>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article className="card-base accent-top flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-cyan ring-1 ring-inset ring-brand-cyan/30">
                    <Route size={22} aria-hidden="true" />
                  </span>
                  <h2 className="font-heading text-xl font-semibold tracking-tight text-ink">
                    Como eu trabalho
                  </h2>
                </div>
                <p className="mt-5 text-pretty leading-relaxed text-ink-muted">
                  O processo é direto: diagnóstico do seu negócio, briefing estruturado e
                  entrega completa, com site no ar, atendimento automático ativo e o Google
                  trabalhando a seu favor. Falo a sua língua, sem termos técnicos e sem
                  enrolação. Você me conta o objetivo, eu cuido da tecnologia.
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden section-pad">
          <div
            aria-hidden="true"
            className="glow-blob absolute -bottom-20 left-1/2 h-72 w-80 -translate-x-1/2 rounded-full bg-brand-violet/40"
          />
          <div className="section-wrap relative">
            <div className="max-w-2xl">
              <Reveal>
                <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Quer um site que realmente converte?
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8">
                  <CTAButton
                    href={waHref}
                    track="sobre_final"
                    pulse
                    ariaLabel="Fale comigo — abrir WhatsApp"
                    className="w-full sm:w-auto"
                  >
                    Fale comigo
                    <ArrowRight size={18} aria-hidden="true" />
                  </CTAButton>
                  <p className="mt-3 font-mono text-xs text-ink-muted">
                    Resposta em até 24h • Sem compromisso na primeira conversa
                  </p>
                </div>
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

import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";
import ChatBot from "./ChatBot";
import Breadcrumb from "./Breadcrumb";
import Reveal from "./Reveal";
import CTAButton from "./CTAButton";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { SITE_URL, waLink } from "@/lib/config";
import { PROJECTS } from "@/lib/projetos";
import { asset } from "@/lib/asset";

/**
 * Dados estruturados da página de case:
 * - BreadcrumbList: Início › Projetos › [case].
 * - WebPage sobre o projeto, com provider apontando pro negócio (@id da home).
 */
function CaseJsonLd({ project }) {
  const pageUrl = `${SITE_URL}/projetos/${project.id}/`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Projetos", item: `${SITE_URL}/projetos/` },
      { "@type": "ListItem", position: 3, name: project.name, item: pageUrl },
    ],
  };

  const caseLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: project.caso.titleTag,
    description: project.caso.metaDescription,
    url: pageUrl,
    about: {
      "@type": "CreativeWork",
      name: `Site ${project.name}`,
      creator: { "@id": `${SITE_URL}/#business` },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseLd) }} />
    </>
  );
}

/**
 * Template de página de case (portfólio). Recebe o objeto `project` de
 * lib/projetos.js (com o bloco `caso`) e monta: breadcrumb, hero, screenshot,
 * desafio, solução, entregas e CTA. Header/Footer/StickyCTA/ChatBot são
 * compartilhados com a home.
 */
export default function CasePage({ project }) {
  const { caso } = project;
  const waHref = waLink(
    `Olá! Vi o projeto ${project.name} no site da EngeTech Reis e quero um projeto assim pro meu negócio.`
  );
  const outros = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <CaseJsonLd project={project} />

      <Header />
      <main id="conteudo">
        {/* Hero do case */}
        <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div
            aria-hidden="true"
            className="glow-blob absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-cyan/40"
          />
          <div className="section-wrap relative">
            <Breadcrumb
              label={project.name}
              section={{ label: "Projetos", href: "/projetos/" }}
            />
            <Reveal>
              <p className="eyebrow mb-5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-glow" />
                {project.role} • {project.location}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                {caso.h1}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
                {caso.intro}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Screenshot em destaque */}
        <section className="pb-4">
          <div className="section-wrap">
            <Reveal>
              <figure className="overflow-hidden rounded-2xl border border-edge bg-carbon">
                <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-edge/60 bg-obsidian/70 px-3">
                  <span className="h-2 w-2 rounded-full bg-edge" aria-hidden="true" />
                  <span className="h-2 w-2 rounded-full bg-edge" aria-hidden="true" />
                  <span className="h-2 w-2 rounded-full bg-edge" aria-hidden="true" />
                  <span className="ml-2 flex h-4 flex-1 items-center overflow-hidden rounded-sm bg-edge/40 px-2 font-mono text-[10px] tracking-wide text-ink-muted/50">
                    {project.url}
                  </span>
                </div>
                <img
                  src={asset(project.screenshot)}
                  alt={`Home do site ${project.name}`}
                  loading="eager"
                  decoding="async"
                  className="w-full object-cover object-top"
                />
              </figure>
            </Reveal>
            {project.live && (
              <Reveal delay={80}>
                <p className="mt-4">
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded font-mono text-xs uppercase tracking-wider text-brand-cyan transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
                  >
                    Ver o site no ar
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </p>
              </Reveal>
            )}
          </div>
        </section>

        {/* Desafio + Solução */}
        <section className="section-pad">
          <div className="section-wrap grid gap-8 lg:grid-cols-2">
            <Reveal>
              <article className="card-base h-full p-6 sm:p-8">
                <h2 className="font-heading text-xl font-semibold text-ink">O desafio</h2>
                <p className="mt-4 text-pretty leading-relaxed text-ink-muted">
                  {caso.desafio}
                </p>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="card-base accent-top h-full p-6 sm:p-8">
                <h2 className="font-heading text-xl font-semibold text-ink">O que construímos</h2>
                <p className="mt-4 text-pretty leading-relaxed text-ink-muted">
                  {caso.solucao}
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        {/* Entregas */}
        <section className="section-pad section-tint">
          <div className="section-wrap">
            <SectionHeading title="O que esse projeto inclui" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {caso.entregas.map((item, i) => (
                <Reveal key={item} delay={i * 60}>
                  <li className="flex items-start gap-3 rounded-xl border border-edge bg-carbon/60 px-4 py-3.5">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-gradient-soft text-brand-cyan ring-1 ring-inset ring-brand-cyan/30">
                      <Check size={14} aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed text-ink-muted">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Outros projetos — internal linking entre cases */}
        <section className="section-pad">
          <div className="section-wrap">
            <SectionHeading title="Outros projetos" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {outros.map((p) => (
                <ProjectCard key={p.id} project={p} screenshotHeight="h-44" fadeHeight="h-8" />
              ))}
            </div>
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
                  Quer um projeto assim pro seu negócio?
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8">
                  <CTAButton
                    href={waHref}
                    track={`case_${project.id}_final`}
                    pulse
                    ariaLabel="Quero um projeto assim — falar no WhatsApp"
                    className="w-full sm:w-auto"
                  >
                    Quero um projeto assim
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

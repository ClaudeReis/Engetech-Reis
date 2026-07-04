import { ArrowRight, Check } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";
import ChatBot from "./ChatBot";
import Breadcrumb from "./Breadcrumb";
import ServiceJsonLd from "./ServiceJsonLd";
import Reveal from "./Reveal";
import CTAButton from "./CTAButton";
import Accordion from "./Accordion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { waLink, WA_MESSAGES } from "@/lib/config";
import { PROJECTS } from "@/lib/projetos";
import { getServico } from "@/lib/servicos";

/**
 * Template de página de serviço (hub-and-spoke). Recebe o objeto `servico`
 * de lib/servicos.js e monta: breadcrumb, hero, dor, o que inclui, prova
 * (portfólio filtrado), FAQ, outros serviços e CTA final. Header/Footer/
 * StickyCTA/ChatBot são compartilhados com a home.
 */
export default function ServicePage({ servico }) {
  const waHref = waLink(WA_MESSAGES[servico.hero.waMessageKey]);
  const relatedProjects = PROJECTS.filter((p) =>
    servico.projetosRelevantes.includes(p.id)
  );
  const outros = servico.outrosServicos
    .map((slug) => getServico(slug))
    .filter(Boolean);

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <ServiceJsonLd servico={servico} />

      <Header />
      <main id="conteudo">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div
            aria-hidden="true"
            className="glow-blob absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-cyan/40"
          />
          <div className="section-wrap relative">
            <Breadcrumb label={servico.breadcrumbLabel} />
            <Reveal>
              <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                {servico.hero.h1}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
                {servico.hero.subtitle}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8">
                <CTAButton
                  href={waHref}
                  track={`servico_${servico.slug}_hero`}
                  pulse
                  ariaLabel={`${servico.hero.cta} — abrir WhatsApp`}
                  className="w-full sm:w-auto"
                >
                  {servico.hero.cta}
                  <ArrowRight size={18} aria-hidden="true" />
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Dor */}
        <section className="section-pad section-tint">
          <div className="section-wrap">
            <SectionHeading title="Você se reconhece nisso?" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {servico.dor.map((frase, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="card-base p-5 text-pretty leading-relaxed text-ink-muted">
                    {frase}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* O que inclui */}
        <section className="section-pad">
          <div className="section-wrap">
            <SectionHeading title="O que você recebe" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {servico.inclui.map(({ title, desc }, i) => (
                <Reveal key={title} delay={i * 80}>
                  <article className="card-base accent-top flex h-full flex-col p-6">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient-soft text-brand-cyan ring-1 ring-inset ring-brand-cyan/30">
                        <Check size={18} aria-hidden="true" />
                      </span>
                      <h3 className="font-heading text-base font-semibold text-ink">{title}</h3>
                    </div>
                    <p className="mt-3 text-pretty leading-relaxed text-ink-muted">{desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Prova — portfólio filtrado (só renderiza se houver projetos) */}
        {relatedProjects.length > 0 && (
          <section className="section-pad section-tint">
            <div className="section-wrap">
              <SectionHeading title="Projetos que já colocamos no ar" />
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} screenshotHeight="h-44" fadeHeight="h-8" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ do serviço */}
        <section className="section-pad">
          <div className="section-wrap">
            <SectionHeading title="Perguntas frequentes" />
            <Reveal delay={120}>
              <div className="mt-10 max-w-3xl">
                <Accordion items={servico.faqs} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Outros serviços — cruza os spokes */}
        <section className="pb-4">
          <div className="section-wrap">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted/60">
              Também fazemos
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {outros.map((o) => (
                <a
                  key={o.slug}
                  href={`/${o.slug}/`}
                  className="inline-flex items-center gap-2 rounded-lg border border-edge bg-carbon/60 px-4 py-2.5 text-sm text-ink transition-colors hover:border-brand-cyan/60 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
                >
                  {o.breadcrumbLabel}
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
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
                  Vamos colocar o seu no ar?
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8">
                  <CTAButton
                    href={waHref}
                    track={`servico_${servico.slug}_final`}
                    pulse
                    ariaLabel={`${servico.hero.cta} — falar no WhatsApp`}
                    className="w-full sm:w-auto"
                  >
                    {servico.hero.cta}
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

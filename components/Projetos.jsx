import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/projetos";

export default function Projetos() {
  const featured = PROJECTS.find((p) => p.size === "featured");
  const medium = PROJECTS.filter((p) => p.size === "medium");
  const small = PROJECTS.filter((p) => p.size === "small");

  return (
    <section id="projetos" className="section-pad section-tint">
      <div className="section-wrap">
        {/* Heading próprio — maior que SectionHeading padrão para dar peso à seção */}
        <Reveal>
          <h2 className="text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Do briefing ao ar.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-[55ch] text-pretty text-base leading-relaxed text-ink-muted">
            Cada projeto construído do zero — identidade própria, código limpo, sem template.
          </p>
        </Reveal>

        <div className="mt-10 space-y-4">
          {/* Linha 1: featured largo + 2 médios à direita */}
          <div className="flex flex-col gap-4 lg:flex-row">
            {featured && (
              <div className="w-full lg:w-[58%]">
                <ProjectCard
                  project={featured}
                  screenshotHeight="h-64 lg:h-[320px]"
                  fadeHeight="h-8"
                />
              </div>
            )}
            {medium.length > 0 && (
              <div className="flex flex-col gap-4 lg:flex-1">
                {medium.map((p) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    screenshotHeight="h-40 lg:h-[148px]"
                    fadeHeight="h-8"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Linha 2: pequenos em grid */}
          {small.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {small.map((p) => (
                <ProjectCard key={p.id} project={p} screenshotHeight="h-40" fadeHeight="h-8" />
              ))}
            </div>
          )}
        </div>

        {/* Rodapé da seção — fecha o espaço e leva pro hub de cases */}
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted/40">
              {PROJECTS.length} projetos · todos do zero · nenhum template
            </p>
            <a
              href="/projetos/"
              className="inline-flex items-center gap-1.5 rounded font-mono text-xs uppercase tracking-wider text-brand-cyan transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
            >
              Ver todos os cases →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

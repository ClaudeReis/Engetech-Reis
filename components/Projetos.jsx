import Reveal from "./Reveal";

const PROJECTS = [
  {
    id: "adriana-lima",
    name: "Adriana Lima",
    role: "Biomédica Esteta",
    tags: ["Estética", "Harmonização"],
    location: "Penha, Rio de Janeiro",
    screenshot: "/projects/adriana-lima.webp",
    url: "adrianalima.com.br",
    live: false,
    size: "featured",
  },
  {
    id: "colosso-reformas",
    name: "Colosso",
    role: "Reformas & Construções",
    tags: ["Obras", "Construção"],
    location: "Rio de Janeiro, RJ",
    screenshot: "/projects/colosso-reformas.webp",
    url: "colossorc.com.br",
    live: false,
    size: "medium",
  },
  {
    id: "mcd-solucoes-eletricas",
    name: "MCD Soluções Elétricas",
    role: "Eletricista técnico",
    tags: ["Elétrica", "Serviços"],
    location: "Rio de Janeiro, RJ",
    screenshot: "/projects/mcd-solucoes-eletricas.webp",
    url: "mcd-solucoes-eletricas.vercel.app",
    live: true,
    size: "medium",
  },
  {
    id: "residencial-origem-west",
    name: "Residencial Origem West",
    role: "Condomínio de casas",
    tags: ["Imobiliária", "Lançamento"],
    location: "Campo Grande, RJ",
    screenshot: "/projects/residencial-origem-west.webp",
    url: "residencialorigemwest.com.br",
    live: false,
    size: "small",
  },
  {
    id: "larissa-nardi",
    name: "Larissa Nardi",
    role: "Estética facial & corporal",
    tags: ["Estética", "Dermato"],
    location: "Vila da Penha, RJ",
    screenshot: "/projects/larissa-nardi.webp",
    url: "larissanardi.com.br",
    live: false,
    size: "small",
  },
];

function BrowserFrame({ url }) {
  return (
    <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-edge/60 bg-obsidian/70 px-3">
      <span className="h-2 w-2 rounded-full bg-edge" aria-hidden="true" />
      <span className="h-2 w-2 rounded-full bg-edge" aria-hidden="true" />
      <span className="h-2 w-2 rounded-full bg-edge" aria-hidden="true" />
      <span className="ml-2 flex h-3.5 flex-1 items-center overflow-hidden rounded-sm bg-edge/40 px-2 font-mono text-[9px] tracking-wide text-ink-muted/50">
        {url}
      </span>
    </div>
  );
}

function ProjectCard({ project, screenshotHeight = "h-44", fadeHeight = "h-10" }) {
  const { name, role, tags, location, screenshot, url, live } = project;

  return (
    <Reveal className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-carbon transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-glow">
        <BrowserFrame url={url} />

        {/* Screenshot */}
        <div className={`relative w-full overflow-hidden ${screenshotHeight}`}>
          {screenshot ? (
            <>
              <img
                src={screenshot}
                alt={`Home do site ${name}`}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Inner ring sutil para separar screenshots escuros do card */}
              <div
                className="pointer-events-none absolute inset-0 rounded-none ring-1 ring-inset ring-white/[0.06]"
                aria-hidden="true"
              />
            </>
          ) : (
            <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-carbon to-obsidian">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-hud-grid bg-[size:28px_28px] opacity-[0.22]"
              />
              <p className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted/40">
                screenshot em breve
              </p>
            </div>
          )}

          {/* Fade inferior — mais suave para não cortar conteúdo */}
          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 ${fadeHeight} bg-gradient-to-t from-carbon to-transparent`}
            aria-hidden="true"
          />

          {/* Tags */}
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-edge/80 bg-carbon/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-muted/70 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {live && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/30 bg-carbon/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-cyan backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" aria-hidden="true" />
              No ar
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="font-heading text-sm font-semibold leading-tight text-ink">{name}</p>
          <p className="mt-0.5 font-mono text-[11px] text-ink-muted/60">{role} · {location}</p>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projetos() {
  const featured = PROJECTS.find((p) => p.size === "featured");
  const medium = PROJECTS.filter((p) => p.size === "medium");
  const small = PROJECTS.filter((p) => p.size === "small");

  return (
    <section className="section-pad section-tint">
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

        {/* Rodapé da seção — fecha o espaço e reforça a mensagem */}
        <Reveal delay={120}>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted/40">
            {PROJECTS.length} projetos · todos do zero · nenhum template
          </p>
        </Reveal>
      </div>
    </section>
  );
}

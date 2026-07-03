import Reveal from "./Reveal";
import { asset } from "@/lib/asset";

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

export default function ProjectCard({ project, screenshotHeight = "h-44", fadeHeight = "h-10" }) {
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
                src={asset(screenshot)}
                alt={`Home do site ${name}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
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

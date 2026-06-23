import Reveal from "./Reveal";

/**
 * Cabeçalho de seção: o título carrega a seção sozinho.
 * (Sem eyebrow/numeração — andaime que lia como template de IA.)
 */
export default function SectionHeading({ title, subtitle, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={80}>
          <p className="mt-4 max-w-[60ch] text-pretty text-base leading-relaxed text-ink-muted">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

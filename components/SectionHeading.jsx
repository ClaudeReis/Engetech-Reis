import Reveal from "./Reveal";

/**
 * Cabeçalho de seção: o título carrega a seção sozinho.
 * (Sem eyebrow/numeração — andaime que lia como template de IA.)
 */
// Três degraus. "pillar" para as seções que sustentam a página (oferta,
// portfólio), "support" para as de apoio (garantia, urgência). Sem prop = o
// tamanho de sempre, então nenhuma chamada existente muda.
const SIZES = {
  support: "text-2xl sm:text-3xl",
  section: "text-3xl sm:text-4xl",
  pillar: "text-4xl sm:text-5xl lg:text-6xl",
};

export default function SectionHeading({
  title,
  subtitle,
  center = false,
  size = "section",
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <h2
          className={`text-balance font-bold leading-[1.1] tracking-tight ${SIZES[size]}`}
        >
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

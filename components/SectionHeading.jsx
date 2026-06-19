import Reveal from "./Reveal";

/**
 * Cabeçalho de seção reutilizável (eyebrow opcional + título + subtítulo).
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  number,
  accent = "cyan",
}) {
  const accentText = {
    cyan: "text-brand-cyan",
    blue: "text-brand-blue",
    violet: "text-brand-violet",
  }[accent];

  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <p
            className={`eyebrow mb-3 ${accentText} ${
              center ? "justify-center" : ""
            }`}
          >
            {number && (
              <>
                <span className="font-mono text-ink-muted">{number}</span>
                <span className="text-ink-muted/50" aria-hidden="true">/</span>
              </>
            )}
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={120}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-ink-muted">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

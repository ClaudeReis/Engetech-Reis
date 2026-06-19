// ============================================================================
// LOGO — EngeTech Reis
// PLACEHOLDER em SVG (ícone "ER" com gradiente cyan→violet, estilo HUD/tech).
// TODO: quando o PNG oficial chegar, salve em /public/logo.png e troque o
// bloco do ícone por:  <Image src="/logo.png" alt="EngeTech Reis" .../>
// ============================================================================

export default function Logo({ withWordmark = true, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        role="img"
        aria-label="EngeTech Reis"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="er-grad" x1="0" y1="0" x2="34" y2="34">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="55%" stopColor="#2A72FF" />
            <stop offset="100%" stopColor="#7C4DFF" />
          </linearGradient>
        </defs>
        {/* moldura HUD com cantos */}
        <rect
          x="1"
          y="1"
          width="32"
          height="32"
          rx="8"
          stroke="url(#er-grad)"
          strokeWidth="1.4"
          fill="rgba(0,217,255,0.04)"
        />
        <path d="M5 9 L5 5 L9 5" stroke="#00D9FF" strokeWidth="1.2" fill="none" />
        <path d="M29 25 L29 29 L25 29" stroke="#7C4DFF" strokeWidth="1.2" fill="none" />
        {/* monograma ER em traços finos */}
        <text
          x="17"
          y="22"
          textAnchor="middle"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontSize="13"
          fontWeight="700"
          fill="url(#er-grad)"
        >
          ER
        </text>
      </svg>
      {withWordmark && (
        <span className="font-heading text-base font-semibold tracking-tight text-ink">
          EngeTech <span className="text-gradient">Reis</span>
        </span>
      )}
    </span>
  );
}

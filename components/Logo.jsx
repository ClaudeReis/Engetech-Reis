// ============================================================================
// LOGO — EngeTech Reis
// Selo redondo oficial (monograma ER + anel neon). A imagem é quadrada com
// cantos escuros; o `rounded-full` recorta no círculo do selo.
// - Header: selo sozinho (withWordmark={false}).
// - Footer/demais: selo + wordmark em texto ao lado (withWordmark padrão).
// ============================================================================

import { asset } from "@/lib/asset";

export default function Logo({ withWordmark = true, size = 40, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={asset("/logo.png")}
        alt="EngeTech Reis"
        width={size}
        height={size}
        className="shrink-0 rounded-full"
        style={{ width: size, height: size }}
      />
      {withWordmark && (
        <span className="font-heading text-base font-semibold tracking-tight text-ink">
          EngeTech <span className="text-gradient">Reis</span>
        </span>
      )}
    </span>
  );
}

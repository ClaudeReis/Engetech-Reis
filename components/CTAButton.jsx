"use client";

import { trackConversion } from "@/lib/config";

/**
 * Botão de CTA (link <a> para wa.me).
 * variant: "primary" (gradiente + glow) | "cta" | "secondary" (outline) | "ghost"
 * Dispara trackConversion() no clique quando `track` é fornecido.
 *
 * Sobre "cta": é o "primary" com o gradiente parando no azul, o que leva o texto
 * de 4.14:1 (reprova em AA) para 4.69:1. Entrou como variante separada para não
 * mudar as outras páginas de uma vez; a intenção é que vire o "primary" padrão.
 */
export default function CTAButton({
  href,
  children,
  variant = "primary",
  track,
  className = "",
  ariaLabel,
  pulse = false,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-heading font-semibold text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian";

  const variants = {
    primary:
      "bg-brand-gradient text-obsidian px-6 py-4 text-base shadow-glow hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    cta:
      "bg-cta-gradient text-[#04060B] px-6 py-4 text-base shadow-[0_8px_28px_-8px_rgba(0,150,255,0.55)] hover:shadow-[0_14px_36px_-10px_rgba(0,180,255,0.7)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    secondary:
      "border border-edge bg-carbon text-ink px-5 py-3 text-sm hover:border-brand-cyan/60 hover:bg-carbon/80",
    ghost:
      "text-ink-muted hover:text-ink px-3 py-2 text-sm",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => track && trackConversion(track)}
      className={`${base} ${variants[variant]} ${
        pulse ? "animate-glow-pulse" : ""
      } ${className}`}
    >
      {children}
    </a>
  );
}

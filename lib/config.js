// ============================================================================
// CONFIGURAÇÃO CENTRAL — EngeTech Reis
// Troque os valores aqui em um único lugar.
// ============================================================================

// URL pública canônica do site — domínio próprio na Hostgator.
export const SITE_URL = "https://engetechreis.com.br";

// Número de WhatsApp em formato internacional (55 = Brasil, 21 = Rio).
export const WHATSAPP_NUMBER = "5521979353374";

// TODO: trocar pelo @ real do Instagram da EngeTech Reis.
export const INSTAGRAM_URL = "https://instagram.com/engetechreis";

// Mensagens pré-preenchidas por CTA (mantém o lead segmentado por origem).
export const WA_MESSAGES = {
  hero:
    "Olá! Quero minha presença digital. Vim pela landing page da EngeTech Reis.",
  offer:
    "Olá! Quero começar com o Pacote Presença Digital Completa (R$500 de setup).",
  site:
    "Olá! Quero falar sobre um site institucional para o meu negócio.",
  final:
    "Olá! Quero começar agora com a EngeTech Reis.",
};

/**
 * Monta um link ESTÁTICO wa.me com a mensagem pré-preenchida.
 * IMPORTANTE: usamos wa.me (não api.whatsapp.com) — o segundo causou
 * ERR_BLOCKED_BY_RESPONSE em projeto anterior.
 */
export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ============================================================================
// TRACKING / CONVERSÃO
// ----------------------------------------------------------------------------
// Dispare aqui o evento de conversão no clique do CTA principal.
// Os scripts do Pixel Meta + GA4 ficam em app/layout.jsx (ver comentários lá).
// ============================================================================
export function trackConversion(label = "cta_principal") {
  if (typeof window === "undefined") return;

  // --- Meta Pixel ---
  // window.fbq && window.fbq("track", "Lead", { content_name: label });

  // --- Google Analytics 4 ---
  // window.gtag && window.gtag("event", "generate_lead", { method: label });

  // Log de desenvolvimento (remover em produção, se desejar):
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[tracking] conversão:", label);
  }
}

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

// Email comercial (domínio próprio, hospedado no Titan/Hostgator).
export const CONTACT_EMAIL = "reis@engetechreis.com.br";

// Google Analytics 4 — ID de medição (propriedade EngeTech Reis).
// Os scripts do gtag.js são carregados em app/layout.jsx.
export const GA_MEASUREMENT_ID = "G-0Q5T8R6SLP";

// ============================================================================
// PREÇOS — um único lugar; os componentes importam daqui.
// 25/11/2026: alinhado com a prospecção (R$497 de criação + R$130/mês de
// hospedagem e manutenção). Chatbot virou adicional. Sem vagas promocionais.
// ============================================================================
// Sem espaço entre "R$" e o número: em fonte mono o espaço é largo e abre
// um buraco visual ("R$  997"). Padrão do site inteiro: R$497.
export const PRICING = {
  // Site no nome do cliente (landing page)
  setupPromo: "R$497",
  setupFull: "R$1.397", // âncora: soma dos itens abaixo
  setupItems: [
    { label: "Site profissional sob medida, otimizado pro Google", value: "R$1.200" },
    { label: "Integração site + WhatsApp", value: "R$197" },
  ],
  monthly: "R$130/mês",
  monthlyItems: [
    { label: "Hospedagem e acompanhamento do site no ar", value: "incluso" },
    { label: "1 atualização de conteúdo por mês", value: "incluso" },
    { label: "Suporte direto pelo WhatsApp", value: "incluso" },
  ],
  // Adicional opcional
  chatbotMonthly: "R$347/mês",
  // Site Institucional
  institucionalFrom: "R$997",
  institucionalMonthly: "R$130/mês", // a partir de (varia com o escopo)
};


// Mensagens pré-preenchidas por CTA (mantém o lead segmentado por origem).
export const WA_MESSAGES = {
  hero:
    "Olá! Quero minha presença digital. Vim pela landing page da EngeTech Reis.",
  offer:
    "Olá! Quero o meu site por R$497 + R$130/mês. Vim pela página da EngeTech Reis.",
  site:
    "Olá! Quero falar sobre um site institucional para o meu negócio.",
  final:
    "Olá! Quero começar agora com a EngeTech Reis.",
  servicoLanding:
    "Olá! Quero uma landing page profissional pro meu negócio. Vim pela página de landing pages da EngeTech Reis.",
  servicoSite:
    "Olá! Quero falar sobre um site institucional pra minha empresa. Vim pela página de sites da EngeTech Reis.",
  servicoChatbot:
    "Olá! Quero um chatbot pro meu site. Vim pela página de chatbot da EngeTech Reis.",
  servicoEstetica:
    "Olá! Quero um site pra minha clínica de estética. Vim pela página de sites para estética da EngeTech Reis.",
  sobre:
    "Olá, Jonathan! Vi a página Sobre da EngeTech Reis e quero um site que converte.",
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

  // --- Google Analytics 4 ---
  if (window.gtag) {
    window.gtag("event", "generate_lead", { method: label });
  }

  // --- Meta Pixel (ativar quando houver Pixel ID) ---
  // window.fbq && window.fbq("track", "Lead", { content_name: label });

  // Log de desenvolvimento (remover em produção, se desejar):
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[tracking] conversão:", label);
  }
}

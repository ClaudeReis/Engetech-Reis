# EngeTech Reis — Landing Page

Landing page de alta conversão, single-page, mobile-first.
Stack: **Next.js (App Router) + React + Tailwind CSS + lucide-react**.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000 (teste prioritariamente em viewport 375–414px).

## Build de produção

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Suba o repositório no GitHub.
2. Em vercel.com, "New Project" → importe o repo.
3. Framework detectado automaticamente (Next.js). Deploy.

## Onde mexer

| O quê | Arquivo |
|---|---|
| Número de WhatsApp, Instagram, mensagens dos CTAs | `lib/config.js` |
| Logo (placeholder SVG → PNG oficial) | `components/Logo.jsx` + `public/` |
| Cores, fontes, gradientes | `tailwind.config.js` |
| Ordem das seções | `app/page.jsx` |
| Scripts Meta Pixel + GA4 | `app/layout.jsx` (comentados) |
| Evento de conversão dos CTAs | `lib/config.js` → `trackConversion()` |

## Placeholders a substituir (busque por `TODO`)

- **Logo** oficial em `public/logo.png`.
- **@ do Instagram** em `lib/config.js`.
- **Prova social**: números e depoimentos reais em `components/SocialProof.jsx`.
- **Pixel Meta + GA4**: IDs reais em `app/layout.jsx`.

## Tracking

- Os snippets de Meta Pixel e GA4 estão comentados em `app/layout.jsx`.
- O CTA principal dispara `trackConversion()` (`lib/config.js`) no clique —
  descomente as linhas `fbq`/`gtag` lá para registrar a conversão.

## Acessibilidade & performance

- Contraste do texto secundário (#A8B0BD sobre #07090F) passa WCAG AA.
- Accordions com `aria-expanded` / `aria-controls`; CTAs com `aria-label`.
- Animações respeitam `prefers-reduced-motion`.
- Fade-in on scroll via IntersectionObserver (sem libs extras).

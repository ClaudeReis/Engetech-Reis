# Páginas de Serviço para SEO — EngeTech Reis

**Data:** 2026-07-03
**Status:** Design aprovado, aguardando revisão da spec
**Escopo desta spec:** 3 páginas de serviço (o blog é projeto separado, vem depois)

## Objetivo

Fazer o `engetechreis.com.br` ranquear em buscas de **intenção de compra** (ex: "criar landing page Rio de Janeiro", "chatbot para Instagram"), não só pela marca. Hoje o site é single-page e só tende a ranquear para "EngeTech Reis". Cada página nova morde uma intenção específica, com conteúdo próprio e CTA de conversão (WhatsApp).

Abordagem escolhida: **páginas de conversão focadas** (profundidade média), reusando o design system e componentes da LP atual, no modelo hub-and-spoke (home = hub; 3 serviços = spokes). Não altera a estrutura da home, que já converte e está indexada.

## Fora de escopo (projetos futuros)

- **Blog** — infraestrutura + conteúdo contínuo. Próximo projeto, spec própria.
- **Páginas por bairro** — descartado por ora (risco de conteúdo raso).
- **OG image por serviço** — melhoria futura opcional; por ora todas reusam `og.png`.
- **Meta Pixel** — só quando houver campanha de anúncio.

## URLs e mapeamento de palavras-chave

Princípio: um tema/intenção por página, sem canibalizar a home (que mira "presença digital" / marca). Slug limpo por serviço; sinal geográfico ("Rio de Janeiro") entra no título, H1, conteúdo e no schema `LocalBusiness` já existente. Trailing slash (padrão do export estático).

| Serviço | URL | Palavra-chave primária | `<title>` (≈50-60 car.) |
|---|---|---|---|
| Landing Page | `/criar-landing-page/` | criar landing page profissional | Criação de Landing Page profissional no Rio de Janeiro |
| Site Institucional | `/site-institucional/` | criar site institucional / site para empresa | Site Institucional para empresas no Rio de Janeiro |
| Chatbot Instagram | `/chatbot-instagram/` | chatbot para Instagram / automação de atendimento | Chatbot para Instagram: atendimento automático 24h |

Meta description por página (≈120-160 car.), única, com a palavra-chave natural. Ex. (`/chatbot-instagram/`): "Chatbot para Instagram que responde clientes 24h, qualifica leads e envia pro WhatsApp. Automação de atendimento para negócios no Rio de Janeiro."

## Anatomia da página (de cima a baixo)

1. **Header** (compartilhado, atualizado — ver Navegação)
2. **Breadcrumb** — `Início › Serviços › [Serviço]` (componente novo; alimenta `BreadcrumbList`)
3. **Hero focado** — H1 do serviço + subtítulo + CTA WhatsApp com mensagem pré-preenchida específica. Hero enxuto (sem o `HeroVisual` pesado da home).
4. **A dor específica** — 2-3 frases do problema que o serviço resolve.
5. **O que inclui / como funciona** — cards com os entregáveis (estilo `Benefits`).
6. **Prova** — portfólio filtrado pelos projetos relevantes ao serviço (reusa `Projetos`).
7. **FAQ do serviço** — 3-5 perguntas específicas (reusa `Accordion`); alimenta o `FAQPage` da página.
8. **CTA final** (estilo `FinalCTA`) → WhatsApp.
9. **Footer** + **StickyCTA** + **ChatBot** (compartilhados).

Conteúdo real de ~500-800 palavras por página (evita conteúdo raso).

## Padrão de construção: template + config

Segue a filosofia config-driven do site (`lib/config.js`). O conteúdo mora em dados, não em JSX.

**Arquivos novos:**
- `lib/servicos.js` — array/objeto com a config dos 3 serviços. Cada serviço:
  ```
  {
    slug, titleTag, metaDescription, keyword,
    breadcrumbLabel,
    hero: { h1, subtitle, waMessageKey },
    dor: [ ...frases ],
    inclui: [ { title, desc } ... ],
    projetosRelevantes: [ ...ids de PROJECTS ],
    faqs: [ { q, a } ... ],
    outrosServicos: [ ...slugs dos outros 2 ],
  }
  ```
- `components/ServicePage.jsx` — template que recebe a config de um serviço e monta a anatomia acima reusando componentes existentes.
- `components/Breadcrumb.jsx` — trilha visual (novo).
- `components/ServiceJsonLd.jsx` — injeta `Service` + `BreadcrumbList` + `FAQPage` daquela página.
- `app/criar-landing-page/page.jsx`, `app/site-institucional/page.jsx`, `app/chatbot-instagram/page.jsx` — cada um curto: importa `ServicePage`, passa a config do serviço, e exporta seu próprio `metadata`.

**Mensagens WhatsApp:** adicionar chaves específicas em `WA_MESSAGES` (`lib/config.js`), uma por serviço (mantém o lead segmentado por origem).

**Componentes reaproveitados (sem alterar comportamento):** `Header`, `Footer`, `StickyCTA`, `ChatBot`, `CTAButton`, `Reveal`, `SectionHeading`, `Accordion`, e o estilo de `Benefits`/`Projetos`/`FinalCTA` (extraindo/adaptando o que for específico da home).

## Navegação e links internos (hub-and-spoke)

**Header** (`components/Header.jsx`) — trocar os links de âncora atuais (`#oferta`, `#projetos`, `#faq`) por links diretos aos 3 serviços:
`Landing Pages` → `/criar-landing-page/` · `Sites` → `/site-institucional/` · `Chatbot` → `/chatbot-instagram/`.
Isso coloca 3 links internos com âncora descritiva em TODAS as páginas. Logo continua voltando à home.

**Home → serviços:**
- Cards da seção `Solution` (Landing Page / Chatbot) ganham "Saiba mais →" pra página correspondente.
- `SecondaryOffer` (Site Institucional) linka pra `/site-institucional/`.

**Serviços → resto:**
- Breadcrumb volta à home.
- Cada página linka pras outras duas (bloco "Também fazemos").
- CTA sempre pro WhatsApp.

**Footer** (`components/Footer.jsx`) — adicionar coluna "Serviços" com os 3 links (global → reforça links internos em cada página).

Nenhuma página fica órfã; tudo a 1 clique com texto de âncora rico.

## SEO técnico

**Metadata por página:** `title` e `description` únicos (tabela acima); `canonical` auto-referente; OG/Twitter reusando `og.png`; `robots: index, follow`. Nenhuma mudança no `robots.txt` (o `Allow: /` já cobre; Cloudflare preserva).

**JSON-LD por página** (`ServiceJsonLd`):
- `Service` — com `provider` apontando pro `@id` do `ProfessionalService` da home (`${SITE_URL}/#business`) e `areaServed` = Rio de Janeiro.
- `BreadcrumbList` — Início › Serviços › [Serviço].
- `FAQPage` — as FAQs visíveis daquela página (regra do Google respeitada).
- Home mantém `ProfessionalService` + `FAQPage` intactos.

**Sitemap** (`app/sitemap.js`): adicionar as 3 URLs (fica com 4). Home priority 1.0; serviços 0.8; `changefreq: monthly`. Reenviar/deixar re-rastrear no Search Console após deploy.

**Sem duplicação:** intenção e conteúdo próprios por página; canonicals auto-referentes; sitemap limpo.

## Critério de sucesso

- 3 páginas no ar, indexáveis, cada uma com title/description/canonical/schema próprios e conteúdo ~500-800 palavras.
- Links internos: header (3 links globais), footer (coluna Serviços), home→serviços, serviços↔serviços, todos com âncora descritiva.
- Build estático (`npm run build`) gera `/criar-landing-page/index.html`, `/site-institucional/index.html`, `/chatbot-instagram/index.html`.
- Sitemap com 4 URLs; nenhuma página órfã.
- Validação no preview: cada página renderiza, CTAs disparam `trackConversion`, schema válido, sem erro de console.

## Lista de mudanças (arquivos)

**Novos:**
- `lib/servicos.js`
- `components/ServicePage.jsx`
- `components/Breadcrumb.jsx`
- `components/ServiceJsonLd.jsx`
- `app/criar-landing-page/page.jsx`
- `app/site-institucional/page.jsx`
- `app/chatbot-instagram/page.jsx`

**Alterados:**
- `lib/config.js` — novas chaves em `WA_MESSAGES`.
- `components/Header.jsx` — nav aponta pros 3 serviços.
- `components/Solution.jsx` — "Saiba mais" nos cards.
- `components/SecondaryOffer.jsx` — link pra `/site-institucional/`.
- `components/Footer.jsx` — coluna "Serviços".
- `app/sitemap.js` — 3 URLs novas.

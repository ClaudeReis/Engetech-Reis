# EngeTech Reis — Landing Page

LP de alta conversão da EngeTech Reis. Objetivo único: **gerar conversa no WhatsApp**
(clique no CTA com mensagem pré-preenchida). Contexto de produto, marca e princípios
de design em [PRODUCT.md](PRODUCT.md) — leia antes de mexer em copy ou layout.

## Stack
- Next.js 16 (App Router, JSX — não TypeScript) + React 19
- Tailwind CSS 3 + PostCSS
- `lucide-react` para ícones
- **Export 100% estático** (`output: "export"` → pasta `/out`). Não há servidor:
  sem rotas de API, sem `next/image` otimizado (`images.unoptimized`), sem SSR.

## Comandos
```bash
npm run dev      # localhost:3000
npm run build    # gera /out (estático)
npm run lint
```

## Estrutura
- `app/` — layout, page, `globals.css`, mais `robots.js` / `sitemap.js` (SEO)
- `components/` — seções da LP (Hero, PainPoints, Offer, Objections, FAQ, FinalCTA…).
  Cada seção tem um único trabalho e um próximo passo óbvio rumo ao WhatsApp.
- `lib/config.js` — fonte única de WhatsApp, textos e configs. **Mude dados aqui**, não nos componentes.
- `lib/asset.js` — prefixa assets com o basePath (ver Gotchas).

## Gotchas (importante)
- **basePath duplo de deploy.** Roda em dois lugares: Vercel/local (raiz) e GitHub Pages
  (`/Engetech-Reis/`). O build do Pages usa `GITHUB_PAGES=true` → aplica `basePath`/`assetPrefix`.
  No export estático o `src` **não** ganha o prefixo sozinho: sempre referencie imagens/assets
  via `lib/asset.js` (`NEXT_PUBLIC_BASE_PATH`), nunca caminho cru `/img/...`.
- `trailingSlash: true` → URLs viram `/pasta/index.html`.
- Repo GitHub: `ClaudeReis/Engetech-Reis`.

## Convenções
- **Mobile-first de verdade.** 80%+ do tráfego é celular; desenhe primeiro para 375px,
  CTA do WhatsApp sempre alcançável.
- **Voz da marca:** técnico, direto, sem jargão e sem "guru". Cliente final não é técnico.
- **Sem prova social fabricada** — nada de números/depoimentos inventados. Urgência só se for real.
- Acessibilidade meta **WCAG AA**: contraste verificado, `prefers-reduced-motion`,
  foco visível, alvos de toque ≥44px.
- Antes de `commit`/`push`, prefira gerar uma **prévia** para eu aprovar o visual.

## Comunicação com o Claude
- Não usar travessões (—) nas respostas de chat nem na copy do site.
- Não usar emojis nas respostas de chat nem na copy do site.

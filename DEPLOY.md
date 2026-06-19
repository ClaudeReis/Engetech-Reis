# Deploy — EngeTech Reis LP

O site é exportado como **HTML estático** (pasta `out/`), pronto pra qualquer
hospedagem. Gere/atualize com:

```bash
npm install      # primeira vez
npm run build    # gera a pasta out/  (HTML + CSS + JS)
```

A pasta `out/` é o site pronto. `out/index.html` é a página.

---

## Opção 1 — GitHub Pages (site estático)

### A) Domínio próprio OU site de usuário (`usuario.github.io`)
Funciona direto, sem ajustes.

1. Crie um repositório no GitHub e suba o projeto:
   ```bash
   git init
   git add .
   git commit -m "EngeTech Reis landing page"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
   git push -u origin main
   ```
2. No GitHub: **Settings → Pages**.
3. Em "Build and deployment", escolha **Deploy from a branch**, branch `main`,
   pasta `/ (root)` — só funciona se você publicar o conteúdo de `out/`.
   Para isso, o mais simples é publicar a pasta `out/` (veja B abaixo) ou usar
   GitHub Actions.

### B) Project site (`usuario.github.io/NOME-DO-REPO/`)
Os assets ficam num subcaminho, então **descomente e ajuste** em
`next.config.mjs`:

```js
basePath: "/NOME-DO-REPO",
assetPrefix: "/NOME-DO-REPO/",
```

Depois `npm run build` de novo. Publique o conteúdo de `out/` na branch que o
Pages serve. O arquivo `.nojekyll` (já incluído) garante que a pasta `_next/`
não seja ignorada.

---

## Opção 2 — Vercel (recomendado, mais simples)

1. Suba o projeto pro GitHub (passo 1 acima).
2. Em [vercel.com](https://vercel.com) → **New Project** → importe o repositório.
3. Framework **Next.js** é detectado automaticamente. Clique **Deploy**.
   Sem necessidade de `basePath`. Domínio próprio é fácil de plugar depois.

---

## Opção 3 — Netlify / Cloudflare Pages / qualquer host estático

Faça upload da pasta `out/` (ou aponte o build command `npm run build` e o
diretório de publicação `out`).

---

## Antes de publicar — checklist de conteúdo (busque por `TODO`)
- Logo oficial em `public/logo.png` (hoje é um SVG placeholder).
- `@` real do Instagram em `lib/config.js`.
- Depoimentos/números reais em `components/SocialProof.jsx`.
- IDs do Meta Pixel + GA4 em `app/layout.jsx`.

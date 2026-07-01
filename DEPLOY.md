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

## Opção 4 — Hostgator (hospedagem em uso — domínio engetechreis.com.br)

Hospedagem compartilhada cPanel. O site é 100% estático, então basta subir o
conteúdo da pasta `out/` — não precisa de Node rodando no servidor.

1. **Domínio**: registre `engetechreis.com.br` pelo próprio painel da Hostgator
   (Meu Painel → Domínios → Registrar Domínio) ou pelo Registro.br apontando
   os nameservers pra Hostgator depois. Se comprado direto na Hostgator, o DNS
   já vem apontado automaticamente pro seu plano de hospedagem — só aguardar
   propagação (algumas horas).
2. **Build local**: `npm run build` gera `out/` (sem `basePath`, pronto pra
   raiz do domínio).
3. **Upload**: cPanel → **Gerenciador de Arquivos** → pasta `public_html/`.
   Apague o `index.html` padrão da Hostgator se existir, e envie **todo o
   conteúdo de dentro de `out/`** (não a pasta `out` em si — os arquivos soltos
   `index.html`, `_next/`, `robots.txt`, `sitemap.xml`, `og.png` etc. direto
   dentro de `public_html/`). Alternativa: subir via FTP (dados em
   cPanel → Contas FTP).
4. **SSL**: cPanel → **SSL/TLS Status** → ativar **AutoSSL** (Let's Encrypt
   gratuito da Hostgator) pro domínio e o `www`. Sem isso o site abre sem
   cadeado.
5. **www vs raiz**: escolha um canônico (aqui está configurado sem `www`,
   `https://engetechreis.com.br`) e crie um redirect do outro pra ele em
   cPanel → **Redirects**, pra evitar conteúdo duplicado no Google.
6. Depois do ar, rode a skill `google-indexar` pra verificar propriedade no
   Search Console e enviar o sitemap novo (o antigo, do GitHub Pages, não
   serve mais).

---

## Antes de publicar — checklist de conteúdo (busque por `TODO`)
- Logo oficial em `public/logo.png` (hoje é um SVG placeholder).
- `@` real do Instagram em `lib/config.js`.
- Depoimentos/números reais em `components/SocialProof.jsx`.
- IDs do Meta Pixel + GA4 em `app/layout.jsx`.

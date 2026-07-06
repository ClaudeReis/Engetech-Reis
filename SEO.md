# SEO / Google — EngeTech Reis

- URL final: https://engetechreis.com.br
- Hospedagem: Cloudflare Pages (deploy automático via push no `main`, repo ClaudeReis/Engetech-Reis)
- Verificação Google: método **arquivo HTML** — `public/google3355b61bdfa034c6.html`
  (no ar em https://engetechreis.com.br/google3355b61bdfa034c6.html). Token vinculado à conta
  Google, vale para a propriedade do domínio novo sem gerar código novo.
- metadataBase + canonical: configurados em `app/layout.jsx` (aponta para `SITE_URL` = engetechreis.com.br)
- sitemap.xml: gerado por `app/sitemap.js`, lista 1 URL (home — LP de página única)
- robots.txt: gerado por `app/robots.js` (allow: /, aponta para o sitemap).
  Obs.: em produção a Cloudflare injeta o próprio robots.txt com "content signals" (bloqueia bots de
  treino de IA — GPTBot, ClaudeBot, Google-Extended). Googlebot de busca NÃO é bloqueado e o Sitemap
  segue apontado. Não atrapalha a indexação.
- Redirect www→sem-www: [x] ATIVO (2026-07-02) via Cloudflare Redirect Rule (wildcard https://www.* → https://${1}, 301).
  Verificado: www/ e www/caminho?query dão 301 pra engetechreis.com.br preservando path+query. Agora só existe 1 versão.
- Search Console: [x] propriedade verificada  [x] sitemap enviado (Processado, 1 página)  [x] indexação solicitada
  - Obs.: propriedade cadastrada foi a versão COM www (https://www.engetechreis.com.br/).
    Canonical e sitemap apontam pra versão SEM www, então a indexação ocorre na engetechreis.com.br.
    Melhoria futura de monitoramento: cadastrar propriedade tipo "Domínio" (TXT no DNS da Cloudflare)
    pra ver www + sem-www juntos. Opcional, não bloqueia indexação.
  - [x] INDEXADO (2026-07-02): Inspeção de URL confirma "O URL está no Google" + "A página está indexada".
  - [x] Propriedade "Domínio" `engetechreis.com.br` criada e verificada (TXT no DNS Cloudflare) — painel
    único que consolida www + sem-www. É NESSA que se acompanha a indexação (Indexação → Páginas).
  - [x] Sitemap `https://engetechreis.com.br/sitemap.xml` reenviado na propriedade Domínio (Processado, 1 página);
    sitemap antigo www removido. Setup final: 1 versão do site (sem www), 1 sitemap, 1 painel de monitoramento.
- Data: 2026-07-02

## Rodada 2026-07-06 — correções do diagnóstico de SEO

Origem: `Documents/1- Projeto Edit/01.1 - Engetech Reis/diagnostico-seo-engetech-reis.docx`.

- [x] Title da home invertido: termo de busca primeiro, marca no final
  ("Site e Chatbot para Negócio Local no Rio de Janeiro | EngeTech Reis") — `app/layout.jsx`.
- [x] Palavra-chave perto do H1: eyebrow do Hero agora é "Site e chatbot para negócio local •
  Rio de Janeiro" e a subheadline cita o termo completo. H1 emocional mantido — `components/Hero.jsx`.
- [x] Páginas de case DENTRO do domínio: hub `/projetos/` + 5 cases (`/projetos/<id>/`), conteúdo
  em `lib/projetos.js` (bloco `caso`), template `components/CasePage.jsx` com BreadcrumbList/WebPage
  JSON-LD. Cards do portfólio agora linkam pro case interno (antes só apontavam pra fora).
  Titles casam com as long-tails do diagnóstico (ex.: "Site para clínica de estética na Vila da
  Penha, RJ"). Sitemap atualizado: 10 URLs.
- [x] FAQ verificado: FALSO POSITIVO do diagnóstico — as respostas JÁ saem no HTML inicial
  (atributo `hidden` do accordion não remove o texto do DOM) e o schema FAQPage está presente.
  Nenhuma mudança necessária.
- [ ] Google Meu Negócio: criar ficha como "área de atendimento" (sem endereço público) — ação
  no painel do Google, fora do código.
- [ ] Backlinks: pedir aos clientes com site no ar o link "site desenvolvido por EngeTech Reis"
  no rodapé, apontando pro case correspondente em /projetos/.
- [ ] Longo prazo (diagnóstico): blog/conteúdo topo de funil ("quanto custa um chatbot para
  instagram"), diferenciação frente a SaaS de chatbot, colisão de nome "Engetech" nas buscas.
- Após deploy: reenviar sitemap na propriedade Domínio do Search Console e pedir indexação
  das 6 URLs novas (hub + 5 cases).

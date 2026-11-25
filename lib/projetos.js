// Dados dos projetos do portfólio. Usados na home (components/Projetos.jsx),
// nas páginas de serviço (components/ServicePage.jsx via lib/servicos.js) e
// nas páginas de case (/projetos/[slug] via components/CasePage.jsx).
//
// O bloco `caso` alimenta a página de case do cliente — conteúdo indexável
// dentro do próprio domínio (diagnóstico SEO 2026-07: os cards antes só
// linkavam pra fora). Títulos casam com as long-tails do diagnóstico
// ("site para esteticista Penha RJ / Vila da Penha" etc.). Conteúdo descreve
// só o ESCOPO real do projeto — nunca inventar métrica de resultado.
export const PROJECTS = [
  {
    id: "st-martin-joias",
    name: "St. Martin",
    role: "Alta Joalheria",
    tags: ["Joalheria", "Luxo"],
    location: "Copacabana, Rio de Janeiro",
    screenshot: "/projects/st-martin-joias.webp",
    url: "st-martin-joias.vercel.app",
    live: true,
    size: "featured",
    caso: {
      titleTag: "Site para Alta Joalheria em Copacabana, RJ",
      metaDescription:
        "Landing page para alta joalheria artesanal em Copacabana, Rio de Janeiro: identidade noir e dourada, acervo de peças e atendimento privado pelo WhatsApp.",
      h1: "Site para alta joalheria em Copacabana, Rio de Janeiro",
      intro:
        "Site criado do zero para a St. Martin, joalheria artesanal em Copacabana, Rio de Janeiro, com quase 40 anos de história. Identidade noir e dourada, acervo de peças em destaque e atendimento privado direto pelo WhatsApp.",
      desafio:
        "Alta joalheria vende por confiança e herança de marca, não só pela peça. Sem site próprio, a St. Martin dependia só do Instagram pra transmitir isso, e quem cuida das redes não tinha mais tempo pra manter a publicação em dia. Quem pesquisa uma peça de luxo no Google antes de visitar o ateliê encontrava um perfil de rede social, não uma vitrine no mesmo padrão das grandes maisons.",
      solucao:
        "Construímos um site editorial no mesmo padrão visual das grandes joalherias internacionais: paleta noir e dourada, tipografia clássica e um acervo com as peças organizadas por categoria, anéis e colares, cada uma com 'sob consulta' e um caminho direto pro WhatsApp. Seções de processo e história reforçam quase 40 anos de ofício, e a base técnica foi montada pra o Google indexar cada peça e cada página.",
      entregas: [
        "Design exclusivo inspirado em alta joalheria internacional",
        "Acervo de peças organizado por categoria, com CTA de WhatsApp",
        "SEO: dados estruturados de joalheria (JewelryStore) e indexação no Google",
        "Motion sutil: parallax, reveal em cortina e contadores animados",
        "Site no ar, com atendimento privado direto pelo WhatsApp",
      ],
    },
  },
  {
    id: "colosso-reformas",
    name: "Colosso",
    role: "Reformas & Construções",
    tags: ["Obras", "Construção"],
    location: "Rio de Janeiro, RJ",
    screenshot: "/projects/colosso-reformas.webp",
    url: "colossorc.com.br",
    live: false,
    size: "medium",
    caso: {
      titleTag: "Site para Empresa de Reformas no RJ",
      metaDescription:
        "Site institucional para empresa de reformas e construções no Rio de Janeiro: portfólio de obras, credibilidade e orçamento direto pelo WhatsApp.",
      h1: "Site para empresa de reformas e construções no Rio de Janeiro",
      intro:
        "Site criado do zero para a Colosso Reformas & Construções, no Rio de Janeiro. Estrutura pensada pra passar a solidez de uma construtora e transformar visita em pedido de orçamento.",
      desafio:
        "Reforma é compra de alto valor: o cliente pesquisa, compara e desconfia. Uma empresa de obras sem site próprio perde na primeira impressão pra qualquer concorrente que apareça no Google com portfólio organizado.",
      solucao:
        "Construímos um site com identidade própria, seção de serviços e portfólio de obras, e um caminho único até o orçamento pelo WhatsApp. A estrutura de títulos, dados estruturados e velocidade foi montada pra ranquear nas buscas de reforma na região.",
      entregas: [
        "Design exclusivo com identidade da marca",
        "Seções de serviços e portfólio de obras",
        "SEO on-page e dados estruturados de negócio local",
        "CTA de orçamento via WhatsApp",
        "Site publicado e indexado no Google",
      ],
    },
  },
  {
    id: "mcd-solucoes-eletricas",
    name: "MCD Soluções Elétricas",
    role: "Eletricista técnico",
    tags: ["Elétrica", "Serviços"],
    location: "Rio de Janeiro, RJ",
    screenshot: "/projects/mcd-solucoes-eletricas.webp",
    url: "mcd-solucoes-eletricas.vercel.app",
    live: true,
    size: "medium",
    caso: {
      titleTag: "Site para Eletricista no Rio de Janeiro",
      metaDescription:
        "Landing page para eletricista técnico no Rio de Janeiro: chamado direto pelo WhatsApp, credibilidade técnica e estrutura otimizada pro Google. No ar.",
      h1: "Site para eletricista técnico no Rio de Janeiro",
      intro:
        "Landing page criada do zero para a MCD Soluções Elétricas, do eletricista técnico Leandro, no Rio de Janeiro. Projeto no ar, com caminho direto do problema elétrico até o chamado no WhatsApp.",
      desafio:
        "Quem precisa de eletricista procura no Google na hora do problema — e liga pro primeiro que parecer confiável. Sem site, o profissional fica fora dessa busca e depende só de indicação.",
      solucao:
        "Montamos uma página que responde rápido as três perguntas de quem chega: o que ele faz, onde atende e como chamar agora. Serviços organizados por tipo de problema, prova de credencial técnica e botão de WhatsApp presente na tela o tempo todo.",
      entregas: [
        "Design exclusivo com identidade da marca",
        "Serviços organizados por tipo de chamado",
        "SEO on-page e dados estruturados de negócio local",
        "CTA de WhatsApp fixo pra chamado imediato",
        "Site no ar e acessível pelo link do projeto",
      ],
    },
  },
];

// Helper: busca um projeto pelo id/slug (páginas de case).
export function getProjeto(id) {
  return PROJECTS.find((p) => p.id === id);
}

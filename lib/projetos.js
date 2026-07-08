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
    id: "adriana-lima",
    name: "Adriana Lima",
    role: "Biomédica Esteta",
    tags: ["Estética", "Harmonização"],
    location: "Penha, Rio de Janeiro",
    screenshot: "/projects/adriana-lima.webp",
    url: "adrianalima.com.br",
    live: false,
    size: "small",
    caso: {
      // Titles de case: ≤60 chars JÁ CONTANDO o sufixo " | EngeTech Reis"
      // que a página acrescenta — nome do cliente fica no H1/conteúdo.
      titleTag: "Site para Biomédica Esteta na Penha RJ",
      metaDescription:
        "Landing page criada do zero para biomédica esteta na Penha, Rio de Janeiro: identidade visual própria, SEO on-page e agendamento direto pelo WhatsApp.",
      h1: "Site para biomédica esteta na Penha, Rio de Janeiro",
      intro:
        "Landing page criada do zero para a biomédica esteta Adriana Lima, na Penha, Zona Norte do Rio. Identidade visual exclusiva, foco em agendamento pelo WhatsApp e estrutura técnica montada pra aparecer no Google.",
      desafio:
        "Profissionais de estética costumam concentrar toda a presença digital no Instagram. Quem pesquisa o procedimento no Google não encontra o perfil — encontra o concorrente que tem site. Sem página própria, cada cliente novo depende do alcance do algoritmo.",
      solucao:
        "Criamos uma landing page com identidade própria: paleta, tipografia e seções organizadas em torno dos procedimentos de harmonização e estética. Cada bloco conduz a visitante pro botão de WhatsApp com mensagem pré-preenchida, e a base técnica (títulos, dados estruturados, velocidade) foi construída pra indexação.",
      entregas: [
        "Design exclusivo, sem template",
        "SEO on-page: títulos, meta tags e dados estruturados",
        "Mobile-first: pensada pra quem chega pelo celular",
        "CTA de WhatsApp com mensagem pré-preenchida",
        "Código estático leve, carregamento em ~1s",
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
  {
    id: "residencial-origem-west",
    name: "Residencial Origem West",
    role: "Condomínio de casas",
    tags: ["Imobiliária", "Lançamento"],
    location: "Campo Grande, RJ",
    screenshot: "/projects/residencial-origem-west.webp",
    url: "residencialorigemwest.com.br",
    live: false,
    size: "small",
    caso: {
      titleTag: "Landing Page Imobiliária em Campo Grande RJ",
      metaDescription:
        "Landing page para lançamento de condomínio de casas em Campo Grande, Rio de Janeiro: captação de leads pra equipe de vendas com contato direto pelo WhatsApp.",
      h1: "Landing page para lançamento imobiliário em Campo Grande, RJ",
      intro:
        "Landing page criada do zero para o Residencial Origem West, condomínio de casas em Campo Grande, Zona Oeste do Rio. Foco total em captar o interessado e entregar o lead quente pra equipe de vendas.",
      desafio:
        "Lançamento imobiliário tem janela curta: o anúncio roda, o interessado clica e precisa encontrar uma página que responda tudo — plantas, localização, condições — e capture o contato antes de ele fechar a aba.",
      solucao:
        "Estruturamos a página na ordem da decisão do comprador: proposta do condomínio, diferenciais, localização e chamada pra falar com o corretor no WhatsApp com mensagem pré-preenchida. Visual alinhado ao material do lançamento e carregamento rápido pra não perder clique de anúncio.",
      entregas: [
        "Design alinhado à identidade do lançamento",
        "Seções de diferenciais e localização do condomínio",
        "CTA de WhatsApp direto pra equipe de vendas",
        "Mobile-first: pensada pro clique vindo de anúncio",
        "SEO on-page e carregamento rápido",
      ],
    },
  },
  {
    id: "larissa-nardi",
    name: "Larissa Nardi",
    role: "Estética facial & corporal",
    tags: ["Estética", "Dermato"],
    location: "Vila da Penha, RJ",
    screenshot: "/projects/larissa-nardi.webp",
    url: "larissanardi.com.br",
    live: false,
    size: "small",
    caso: {
      // Long-tail exata do diagnóstico: "site para esteticista Penha RJ / Vila da Penha"
      titleTag: "Site para Esteticista na Vila da Penha RJ",
      metaDescription:
        "Landing page para clínica de estética facial e corporal na Vila da Penha, Rio de Janeiro: identidade própria, SEO local e agendamento pelo WhatsApp.",
      h1: "Site para clínica de estética na Vila da Penha, RJ",
      intro:
        "Landing page criada do zero para a clínica de estética facial e corporal Larissa Nardi, na Vila da Penha, Zona Norte do Rio. Identidade visual própria e agendamento direto pelo WhatsApp.",
      desafio:
        "Clínica de estética de bairro concorre com quem aparece primeiro no Google da região. Sem site, a clínica não entra nessa disputa — e o Instagram sozinho não responde quem pesquisa 'estética na Vila da Penha'.",
      solucao:
        "Criamos uma página com a cara da clínica: procedimentos faciais e corporais organizados por objetivo, prova de credibilidade e um caminho único até o agendamento no WhatsApp. Estrutura técnica de SEO local pra disputar as buscas do bairro.",
      entregas: [
        "Design exclusivo, sem template",
        "Procedimentos organizados por objetivo",
        "SEO local: títulos e dados estruturados com o bairro",
        "CTA de agendamento via WhatsApp",
        "Mobile-first e carregamento rápido",
      ],
    },
  },
];

// Helper: busca um projeto pelo id/slug (páginas de case).
export function getProjeto(id) {
  return PROJECTS.find((p) => p.id === id);
}

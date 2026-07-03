// ============================================================================
// SERVIÇOS — conteúdo das páginas de serviço (config-driven).
// Um objeto por serviço. O template components/ServicePage.jsx renderiza a
// partir daqui. Edite o conteúdo AQUI, não no JSX.
// - projetosRelevantes: ids de projetos em lib/projetos.js (seção de prova).
// - outrosServicos: slugs dos outros serviços (cross-links).
// - hero.waMessageKey: chave em WA_MESSAGES (lib/config.js).
// ============================================================================

export const SERVICOS = [
  {
    slug: "criar-landing-page",
    schemaName: "Criação de Landing Page",
    titleTag: "Criação de Landing Page profissional no Rio de Janeiro",
    metaDescription:
      "Criação de landing page profissional que aparece no Google, passa credibilidade e transforma visitante em cliente. Para negócios no Rio de Janeiro, pronta em até 7 dias.",
    keyword: "criar landing page profissional rio de janeiro",
    breadcrumbLabel: "Landing Page",
    hero: {
      h1: "Landing Page profissional que aparece no Google e vende",
      subtitle:
        "Uma página feita pra converter: rápida, otimizada pra busca e com um único caminho claro até o seu WhatsApp. Sem depender de stories, alcance ou algoritmo.",
      cta: "Quero minha landing page",
      waMessageKey: "servicoLanding",
    },
    dor: [
      "Você posta todo dia, mas quando o cliente procura pelo seu serviço no Google, quem aparece é o concorrente.",
      "Seu perfil no Instagram é bonito, mas não converte: a pessoa chega, não entende a oferta e vai embora.",
    ],
    inclui: [
      { title: "Aparece no Google", desc: "Estrutura otimizada pra busca (SEO técnico) pra você ser encontrado por quem procura seu serviço na sua região." },
      { title: "Carrega em 1 segundo", desc: "Código leve e enxuto — nada de site pesado que espanta o visitante antes de abrir." },
      { title: "Um caminho até a venda", desc: "Cada seção conduz o visitante pro botão de WhatsApp, com a mensagem já preenchida." },
      { title: "Feita do zero pra você", desc: "Identidade própria do seu negócio. Sem template genérico, sem cara de site pronto." },
    ],
    projetosRelevantes: ["adriana-lima", "larissa-nardi", "mcd-solucoes-eletricas"],
    faqs: [
      { q: "Quanto tempo leva pra minha landing page ficar pronta?", a: "Até 7 dias úteis após o briefing. Você acompanha o processo e aprova antes de ir pro ar." },
      { q: "A landing page aparece mesmo no Google?", a: "Sim. Ela é construída com as boas práticas de SEO técnico (títulos, estrutura, velocidade e dados estruturados) pra ser indexada e encontrada por quem busca seu serviço." },
      { q: "Preciso ter site ou domínio próprio?", a: "Não é obrigatório. A gente pode publicar num domínio próprio ou usar o que você já tem. Se já tiver, integramos." },
      { q: "Qual a diferença pra um site completo?", a: "A landing page é uma página única, focada em converter — ideal pra começar rápido e com investimento menor. O site institucional tem mais páginas e profundidade." },
      { q: "Quanto custa?", a: "O pacote de lançamento sai por R$497 de setup + R$497/mês (com chatbot, hospedagem e atualizações). Fale no WhatsApp pra ver as vagas promocionais." },
    ],
    outrosServicos: ["site-institucional", "chatbot-instagram"],
  },
  {
    slug: "site-institucional",
    schemaName: "Desenvolvimento de Site Institucional",
    titleTag: "Site Institucional para empresas no Rio de Janeiro",
    metaDescription:
      "Criação de site institucional profissional para empresas no Rio de Janeiro. Várias páginas, otimizado pro Google, com identidade própria. Orçamento sob consulta.",
    keyword: "criar site institucional",
    breadcrumbLabel: "Site Institucional",
    hero: {
      h1: "Site institucional que dá credibilidade à sua empresa",
      subtitle:
        "Mais que um cartão de visita: um site com várias páginas, estruturado pra ser encontrado no Google e passar a seriedade que o seu negócio merece.",
      cta: "Falar sobre meu site",
      waMessageKey: "servicoSite",
    },
    dor: [
      "Sua empresa é sólida, mas na internet ela parece pequena — ou nem aparece.",
      "Um perfil de rede social não passa a mesma confiança de um site próprio, com domínio e endereço seu.",
    ],
    inclui: [
      { title: "Várias páginas", desc: "Início, sobre, serviços, contato e o que mais o seu negócio precisar — estrutura pensada pra sua área." },
      { title: "Encontrado no Google", desc: "Cada página otimizada pra busca, com dados estruturados e desempenho rápido." },
      { title: "Identidade própria", desc: "Design exclusivo, com a cara da sua empresa. Nada de template revendido." },
      { title: "Fácil de manter", desc: "Com o plano de manutenção, a gente cuida de hospedagem, atualizações e suporte técnico." },
    ],
    projetosRelevantes: ["colosso-reformas", "residencial-origem-west"],
    faqs: [
      { q: "Quanto custa um site institucional?", a: "A partir de R$997 de desenvolvimento, com manutenção a partir de R$497/mês. O valor final depende do número de páginas, integrações e personalização — por isso fazemos um orçamento sob consulta, sem custo escondido." },
      { q: "Qual a diferença entre site institucional e landing page?", a: "A landing page é uma página única focada em converter. O site institucional tem várias páginas e mais profundidade — ideal pra empresas que precisam apresentar estrutura, serviços e história." },
      { q: "Vocês fazem a manutenção depois?", a: "Sim. O plano mensal cobre hospedagem, atualização de conteúdo e suporte técnico, pra você não precisar se preocupar com nada." },
      { q: "Quanto tempo leva?", a: "Projetos de 5 a 8 páginas costumam ficar prontos em 15 a 30 dias úteis após o briefing, dependendo do feedback. No início a gente define o escopo e te passa um prazo específico pro seu projeto." },
    ],
    outrosServicos: ["criar-landing-page", "chatbot-instagram"],
  },
  {
    slug: "chatbot-instagram",
    schemaName: "Chatbot para Instagram",
    titleTag: "Chatbot para Instagram: atendimento automático 24h",
    metaDescription:
      "Chatbot para Instagram que responde clientes na hora, qualifica leads e envia pro WhatsApp. Automação de atendimento 24h para negócios no Rio de Janeiro.",
    keyword: "chatbot para instagram",
    breadcrumbLabel: "Chatbot Instagram",
    hero: {
      h1: "Chatbot para Instagram que responde na hora, 24h por dia",
      subtitle:
        "Automação que responde as dúvidas de sempre, qualifica o lead e manda pro seu WhatsApp — mesmo de madrugada, mesmo quando você está ocupado atendendo.",
      cta: "Quero meu chatbot",
      waMessageKey: "servicoChatbot",
    },
    dor: [
      "A pessoa manda mensagem às 23h, você só vê no dia seguinte — e ela já fechou com outro.",
      "Você perde horas todo dia respondendo as mesmas perguntas: preço, horário, endereço.",
    ],
    inclui: [
      { title: "Responde em 0,8s", desc: "O cliente recebe resposta na hora, a qualquer hora — nunca mais um lead esfria esperando." },
      { title: "Qualifica o lead", desc: "O bot faz as perguntas certas e já entende o que a pessoa quer antes de chegar em você." },
      { title: "Manda pro WhatsApp", desc: "Direciona o cliente pronto pro seu WhatsApp ou agenda, com o contexto já coletado." },
      { title: "Ajustado ao seu negócio", desc: "Fluxo de conversa feito sob medida pras dúvidas e ofertas do seu ramo." },
    ],
    projetosRelevantes: [],
    faqs: [
      { q: "O chatbot funciona no Instagram e no WhatsApp?", a: "O foco é o Instagram (Direct), qualificando o lead e direcionando pro seu WhatsApp com a conversa já encaminhada. Dá pra adaptar conforme o seu fluxo." },
      { q: "Vou perder o contato humano com o cliente?", a: "Não. O bot cuida do começo — dúvidas repetidas e triagem — e passa pra você a pessoa já pronta pra fechar. Você entra na hora que importa." },
      { q: "Preciso configurar alguma coisa?", a: "Não. A gente monta o fluxo, conecta na sua conta e deixa rodando. Você só recebe os leads qualificados." },
      { q: "Quanto custa?", a: "O chatbot faz parte do pacote de R$497/mês (com a landing page inclusa no setup de R$497). Fale no WhatsApp pra ver as vagas de lançamento." },
    ],
    outrosServicos: ["criar-landing-page", "site-institucional"],
  },
];

// Helper: busca um serviço pelo slug.
export function getServico(slug) {
  return SERVICOS.find((s) => s.slug === slug);
}

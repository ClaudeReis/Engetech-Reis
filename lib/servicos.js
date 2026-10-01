// ============================================================================
// SERVIÇOS — conteúdo das páginas de serviço (config-driven).
// Um objeto por serviço. O template components/ServicePage.jsx renderiza a
// partir daqui. Edite o conteúdo AQUI, não no JSX.
// - projetosRelevantes: ids de projetos em lib/projetos.js (seção de prova).
// - outrosServicos: slugs dos outros serviços (cross-links).
// - postsRelacionados: slugs de posts em lib/blog.js. Cada post do blog precisa
//   receber link de pelo menos uma página de serviço, senão fica dependendo só
//   do sitemap pra ser descoberto e não indexa.
// - hero.waMessageKey: chave em WA_MESSAGES (lib/config.js).
// ============================================================================

import { PRICING } from "./config";

// `secoes` (opcional): conteúdo aprofundado da página. Cada bloco aceita
// { title, paragraphs: [html], items: [html], ordered: bool }. Só afirme aqui
// o que já está nos preços do config, nos FAQs ou nos cases: nada inventado.

export const SERVICOS = [
  {
    slug: "criar-landing-page",
    schemaName: "Criação de Landing Page",
    titleTag: "Criação de Landing Page profissional no Rio de Janeiro",
    metaDescription:
      "Criação de landing page profissional que aparece no Google e transforma visitante em cliente. Para negócios no Rio de Janeiro, pronta em até 7 dias.",
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
    secoes: [
      {
        title: "Como funciona, do briefing até a página no ar",
        paragraphs: [
          "O processo é curto e você participa só do que importa. Você responde um briefing sobre o seu negócio, o público que quer atrair e o que o visitante deve fazer ao chegar. A partir daí a página é construída do zero, com identidade própria, e o prazo é de até 7 dias úteis depois do briefing.",
        ],
        ordered: true,
        items: [
          "<strong>Briefing.</strong> Serviços, bairro ou região de atendimento, diferenciais, contato e referências visuais que você gosta.",
          "<strong>Construção.</strong> Texto, design e estrutura técnica de SEO montados em torno de uma única ação: chamar você no WhatsApp.",
          "<strong>Aprovação.</strong> Você acompanha, pede os ajustes que quiser e só vai pro ar depois de aprovar.",
          "<strong>Publicação.</strong> A página sai no ar com a base técnica pronta: títulos, descrição, dados estruturados e carregamento rápido no celular.",
        ],
      },
      {
        title: "O que uma landing page profissional precisa ter pra aparecer no Google",
        paragraphs: [
          "Estar no ar não é o mesmo que ser encontrado. Uma landing page que ranqueia precisa de uma base técnica que o Google consiga ler e de um texto que fale a língua de quem pesquisa. O que cuidamos em cada página:",
        ],
        items: [
          "<strong>Título e descrição da página</strong> com o seu serviço e a sua região, escritos pra convencer quem vê o resultado na busca a clicar.",
          "<strong>Um objetivo só.</strong> Sem menu cheio de saídas: cada seção conduz ao botão de WhatsApp, com a mensagem já preenchida.",
          "<strong>Velocidade e mobile primeiro.</strong> A maior parte da busca local acontece no celular, e página lenta perde o clique e a posição.",
          "<strong>Dados estruturados de negócio local</strong>, que dizem ao Google quem você é, onde atende e como falar com você.",
        ],
      },
      {
        title: "Para quem a landing page faz mais sentido",
        paragraphs: [
          "Funciona melhor para quem vende um serviço fechado por contato direto: profissionais de estética, eletricistas, empresas de reforma, lançamentos imobiliários e negócios locais em geral. Veja como ficou em projetos como o <a href=\"/projetos/larissa-nardi/\">site de uma clínica de estética na Vila da Penha</a> e o <a href=\"/projetos/mcd-solucoes-eletricas/\">de um eletricista técnico</a>.",
          "Se o seu negócio precisa explicar vários serviços, ter equipe, portfólio extenso ou blog, o caminho é outro. O artigo <a href=\"/blog/landing-page-ou-site-institucional/\">landing page ou site institucional</a> ajuda a decidir, e o <a href=\"/site-institucional/\">site institucional</a> cobre esse caso.",
        ],
      },
      {
        title: "Quanto custa e o que está incluído",
        paragraphs: [
          `O pacote de lançamento é ${PRICING.setupPromo} de setup mais ${PRICING.monthly}. O valor cheio do setup seria ${PRICING.setupFull}: ${PRICING.setupItems.map((i) => `${i.label} (${i.value})`).join(", ")}. A mensalidade cobre ${PRICING.monthlyItems.map((i) => `${i.label} (${i.value})`).join(" e ")}.`,
          "Os valores promocionais valem enquanto houver vagas de lançamento, e a gente confirma a disponibilidade no WhatsApp. Pra entender o que pesa no preço de um site em geral, leia <a href=\"/blog/quanto-custa-um-site-profissional/\">quanto custa um site profissional</a>.",
        ],
      },
    ],
    projetosRelevantes: ["adriana-lima", "larissa-nardi", "mcd-solucoes-eletricas"],
    faqs: [
      { q: "Quanto tempo leva pra minha landing page ficar pronta?", a: "Até 7 dias úteis após o briefing. Você acompanha o processo e aprova antes de ir pro ar." },
      { q: "A landing page aparece mesmo no Google?", a: "Sim. Ela é construída com as boas práticas de SEO técnico (títulos, estrutura, velocidade e dados estruturados) pra ser indexada e encontrada por quem busca seu serviço." },
      { q: "Preciso ter site ou domínio próprio?", a: "Não é obrigatório. A gente pode publicar num domínio próprio ou usar o que você já tem. Se já tiver, integramos." },
      { q: "Qual a diferença pra um site completo?", a: "A landing page é uma página única, focada em converter — ideal pra começar rápido e com investimento menor. O site institucional tem mais páginas e profundidade." },
      { q: "Quanto custa?", a: "O pacote de lançamento sai por R$497 de setup + R$497/mês (com chatbot, hospedagem e atualizações). Fale no WhatsApp pra ver as vagas promocionais." },
      { q: "O que eu preciso ter pra começar?", a: "Só do briefing respondido: serviços, região de atendimento, diferenciais e contato. Logo, fotos e textos que você já tem ajudam, mas não são obrigatórios pra começar." },
      { q: "Dá pra usar a landing page com anúncios?", a: "Dá. A página é pensada pro celular e carrega rápido, que é o que importa pra quem clica num anúncio. Já fizemos uma landing page pra lançamento imobiliário com esse foco." },
      { q: "Posso mudar o conteúdo depois que a página estiver no ar?", a: "Pode. A mensalidade inclui uma atualização de conteúdo por mês, além de hospedagem. Mudanças maiores a gente combina caso a caso." },
    ],
    outrosServicos: ["site-institucional", "chatbot-para-site", "site-para-clinica-de-estetica"],
    postsRelacionados: [
      "landing-page-ou-site-institucional",
      "so-instagram-nao-basta-negocio-precisa-de-site",
      "por-que-meu-negocio-nao-aparece-no-google",
    ],
  },
  {
    slug: "site-institucional",
    schemaName: "Desenvolvimento de Site Institucional",
    titleTag: "Site Institucional para empresas no Rio de Janeiro",
    metaDescription:
      "Site institucional profissional para empresas no Rio de Janeiro. Várias páginas, otimizado pro Google e com identidade própria. Orçamento sob consulta.",
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
    secoes: [
      {
        title: "O que muda de uma landing page para um site institucional",
        paragraphs: [
          "A landing page tem uma página e um objetivo. O site institucional tem várias páginas, e isso muda o jogo no Google: cada página pode ser encontrada por uma busca diferente. Uma página por serviço principal significa mais portas de entrada para quem pesquisa o que você faz.",
          "Também muda a percepção de quem chega. Empresa com domínio próprio, página de apresentação, serviços detalhados e contato claro passa mais segurança do que um perfil de rede social. Foi esse o foco no <a href=\"/projetos/colosso-reformas/\">site de uma empresa de reformas no Rio de Janeiro</a>, onde o cliente compara e desconfia antes de pedir orçamento.",
        ],
      },
      {
        title: "Páginas que um site institucional costuma ter",
        paragraphs: [
          "A estrutura exata depende do negócio e é definida no começo do projeto, mas a base costuma ser esta:",
        ],
        items: [
          "<strong>Início.</strong> Apresenta o negócio, a região atendida e leva às páginas de serviço.",
          "<strong>Sobre.</strong> Quem está por trás da empresa, o que a diferencia e por que confiar.",
          "<strong>Serviços.</strong> Idealmente uma página para cada serviço principal, com o termo que o cliente digita no Google.",
          "<strong>Portfólio ou cases.</strong> Prova do trabalho feito, com descrição do que foi entregue.",
          "<strong>Contato.</strong> WhatsApp, endereço, horário e mapa, iguais aos do seu Perfil da Empresa no Google.",
          "<strong>Blog ou perguntas frequentes</strong>, quando fizer sentido, para responder as dúvidas que os clientes já têm antes de contratar.",
        ],
      },
      {
        title: "Prazo e como o projeto é conduzido",
        paragraphs: [
          "Projetos de 5 a 8 páginas costumam ficar prontos entre 15 e 30 dias úteis depois do briefing, dependendo do tempo de retorno de cada etapa. No início a gente define o escopo e passa um prazo específico para o seu projeto. Se quiser entender o que influencia esse prazo, leia <a href=\"/blog/quanto-tempo-demora-construir-um-site/\">quanto tempo demora para construir um site</a>.",
        ],
      },
      {
        title: "Manutenção depois que o site está no ar",
        paragraphs: [
          "Site publicado e esquecido é o caminho mais curto para domínio vencido, certificado expirado e página fora do ar sem ninguém perceber. O plano de manutenção cobre hospedagem, atualização de conteúdo e suporte técnico. Os artigos <a href=\"/blog/por-que-site-precisa-de-manutencao/\">por que todo site precisa de manutenção</a> e <a href=\"/blog/site-fora-do-ar-causas-comuns/\">causas comuns de site fora do ar</a> explicam o que está em jogo.",
        ],
      },
      {
        title: "Quanto custa um site institucional",
        paragraphs: [
          `O desenvolvimento parte de ${PRICING.institucionalFrom}, e a manutenção, de ${PRICING.institucionalMonthly.replace("/mês", " por mês")}. O valor final depende do número de páginas, das integrações e do nível de personalização, por isso o orçamento é feito sob consulta, sem custo escondido. Para ver como esses valores se comparam ao mercado, veja <a href=\"/blog/quanto-custa-um-site-profissional/\">quanto custa um site profissional</a>.`,
        ],
      },
    ],
    projetosRelevantes: ["colosso-reformas", "residencial-origem-west"],
    faqs: [
      { q: "Quanto custa um site institucional?", a: "A partir de R$997 de desenvolvimento, com manutenção a partir de R$497/mês. O valor final depende do número de páginas, integrações e personalização — por isso fazemos um orçamento sob consulta, sem custo escondido." },
      { q: "Qual a diferença entre site institucional e landing page?", a: "A landing page é uma página única focada em converter. O site institucional tem várias páginas e mais profundidade — ideal pra empresas que precisam apresentar estrutura, serviços e história." },
      { q: "Vocês fazem a manutenção depois?", a: "Sim. O plano mensal cobre hospedagem, atualização de conteúdo e suporte técnico, pra você não precisar se preocupar com nada." },
      { q: "Quanto tempo leva?", a: "Projetos de 5 a 8 páginas costumam ficar prontos em 15 a 30 dias úteis após o briefing, dependendo do feedback. No início a gente define o escopo e te passa um prazo específico pro seu projeto." },
      { q: "Quantas páginas meu site precisa ter?", a: "Depende do negócio. A base costuma ser início, sobre, serviços e contato, e vale ter uma página para cada serviço principal, porque cada uma pode ser encontrada por uma busca diferente. O número exato a gente define no briefing." },
      { q: "Meu site vai aparecer no Google?", a: "Ele nasce com a base técnica de SEO pronta: títulos, descrições, estrutura de páginas, dados estruturados e velocidade. Aparecer bem em buscas disputadas leva tempo e depende também de conteúdo e de links, e a gente explica isso com franqueza desde o começo." },
      { q: "Posso começar com uma landing page e ampliar depois?", a: "Dá para começar menor e crescer. Conte o seu caso no WhatsApp que a gente indica o melhor ponto de partida." },
    ],
    outrosServicos: ["criar-landing-page", "chatbot-para-site", "site-para-clinica-de-estetica"],
    postsRelacionados: [
      "por-que-site-precisa-de-manutencao",
      "quanto-tempo-demora-construir-um-site",
      "google-meu-negocio-guia-completo",
      "quanto-custa-um-site-profissional",
      "template-pronto-ou-site-sob-medida",
      "site-para-negocio-local-rio-de-janeiro",
    ],
  },
  {
    slug: "chatbot-para-site",
    schemaName: "Chatbot para Site",
    titleTag: "Chatbot para Site: atendimento automático 24h no seu site",
    metaDescription:
      "Chatbot que responde quem visita seu site na hora, qualifica leads e manda pro seu WhatsApp. Atendimento automático 24h para negócios no Rio de Janeiro.",
    keyword: "chatbot para site",
    breadcrumbLabel: "Chatbot para Site",
    hero: {
      h1: "Chatbot no seu site que responde na hora e qualifica o lead",
      subtitle:
        "Automação que responde as dúvidas do visitante, entende o que ele precisa e manda pro seu WhatsApp — mesmo de madrugada, mesmo quando você está ocupado atendendo.",
      cta: "Quero meu chatbot",
      waMessageKey: "servicoChatbot",
    },
    dor: [
      "O visitante entra no seu site às 23h com interesse real, não encontra resposta e vai embora — você só descobre no dia seguinte que perdeu o lead.",
      "Você responde as mesmas perguntas todo dia: preço, prazo, como funciona. São horas gastas em triagem enquanto novos contatos ficam esperando.",
    ],
    inclui: [
      { title: "Responde em segundos", desc: "O visitante recebe resposta imediata, a qualquer hora — nunca mais um lead esfria esperando você abrir o WhatsApp." },
      { title: "Qualifica o lead", desc: "O bot faz as perguntas certas e já entende o que a pessoa quer antes de chegar em você." },
      { title: "Manda pro seu WhatsApp", desc: "Direciona o cliente com o contexto já coletado — você entra só na hora de fechar." },
      { title: "Funciona no site e no Instagram", desc: "Cobre os dois canais onde seu cliente te procura, com o mesmo fluxo adaptado pra cada um." },
    ],
    secoes: [
      {
        title: "Como o chatbot qualifica o visitante",
        paragraphs: [
          "O chatbot não é uma caixa de perguntas frequentes. Ele conduz uma conversa curta que recolhe o que decide se vale atender agora: qual serviço a pessoa procura, onde ela está e para quando precisa. As respostas viram o contexto da mensagem que chega no seu WhatsApp.",
          "O botão flutuante no canto desta página é um exemplo ao vivo: clique nele e passe pelo fluxo, como um visitante do seu site passaria.",
        ],
        ordered: true,
        items: [
          "<strong>O visitante chega e pergunta.</strong> O bot responde na hora, a qualquer horário, sem fila.",
          "<strong>O bot entende o pedido.</strong> Serviço, região e prazo, em perguntas curtas de um toque.",
          "<strong>A conversa segue pro seu WhatsApp.</strong> A mensagem chega com o contexto que a pessoa já respondeu.",
          "<strong>Você entra só quando importa.</strong> Sem repetir as mesmas perguntas pra quem nem ia fechar.",
        ],
      },
      {
        title: "Por que a velocidade da resposta decide a venda",
        paragraphs: [
          "Quem manda mensagem para dois ou três negócios ao mesmo tempo costuma fechar com o primeiro que responde. Um chatbot responde em segundos, inclusive de madrugada e nos fins de semana. O artigo <a href=\"/blog/tempo-resposta-whatsapp-vendas/\">tempo de resposta no WhatsApp e as vendas</a> mostra por que isso pesa, e <a href=\"/blog/como-qualificar-leads-antes-whatsapp/\">como qualificar leads pelo WhatsApp</a> detalha o filtro que o bot faz por você.",
        ],
      },
      {
        title: "Chatbot ou atendente humano",
        paragraphs: [
          "Um não substitui o outro. O bot cuida do começo da conversa: dúvidas repetidas, triagem e coleta de contexto. Quando a pessoa está pronta, quem atende e fecha é você. Se ficou em dúvida sobre onde cada um funciona melhor, leia <a href=\"/blog/chatbot-ou-atendente-humano/\">chatbot ou atendente humano</a> e <a href=\"/blog/chatbot-para-site-como-funciona/\">como funciona um chatbot para site</a>.",
        ],
      },
      {
        title: "Quanto custa",
        paragraphs: [
          `O chatbot faz parte do pacote de ${PRICING.monthly}: o chatbot ativo e atualizado custa ${PRICING.monthlyItems[0].value}, junto com hospedagem e uma atualização de conteúdo por mês. A configuração inicial do chatbot no Instagram entra no setup de ${PRICING.setupPromo}, e a landing page também. Fale no WhatsApp para confirmar as vagas de lançamento. Se você ainda não tem site ou landing page, o <a href=\"/criar-landing-page/\">pacote com landing page</a> já resolve os dois.`,
        ],
      },
    ],
    projetosRelevantes: [],
    faqs: [
      { q: "O chatbot funciona em qualquer site?", a: "Sim. Integra com sites e landing pages — incluindo os que a EngeTech Reis desenvolve. A instalação é simples e não exige alterar o código do site." },
      { q: "E o Instagram?", a: "Também dá pra ativar no Instagram Direct com o mesmo fluxo. O chatbot cobre os dois canais, então seu cliente te encontra onde quiser." },
      { q: "Vou perder o contato humano com o cliente?", a: "Não. O bot cuida do começo — dúvidas repetidas e triagem — e passa pra você a pessoa já pronta pra fechar. Você entra na hora que importa." },
      { q: "Preciso configurar alguma coisa?", a: "Não. A gente monta o fluxo, instala no seu site e deixa rodando. Você só recebe os leads qualificados." },
      { q: "Quanto custa?", a: "O chatbot faz parte do pacote de R$497/mês (com a landing page inclusa no setup de R$497). Fale no WhatsApp pra ver as vagas de lançamento." },
      { q: "O que o chatbot responde?", a: "O que for configurado para o seu negócio: serviços, região de atendimento, como funciona e como chamar. A gente monta o fluxo com você, e a conversa segue para o seu WhatsApp quando a pessoa estiver pronta." },
      { q: "Quanto tempo leva pra ter o chatbot funcionando?", a: "O fluxo é montado e instalado pela gente, sem você precisar mexer no site. Combinamos o prazo exato do seu caso no começo da conversa." },
    ],
    outrosServicos: ["criar-landing-page", "site-institucional", "site-para-clinica-de-estetica"],
    postsRelacionados: [
      "chatbot-para-site-como-funciona",
      "chatbot-ou-atendente-humano",
      "tempo-resposta-whatsapp-vendas",
    ],
  },
  {
    // Página de nicho: só existe porque há 2 cases reais de estética (lib/projetos.js).
    // Não replicar pra nicho sem case real.
    slug: "site-para-clinica-de-estetica",
    schemaName: "Site para Clínica de Estética",
    titleTag: "Site para Clínica de Estética no Rio de Janeiro",
    metaDescription:
      "Site para clínica de estética no Rio de Janeiro: procedimentos organizados, SEO local pelo bairro e agendamento pelo WhatsApp. Veja dois projetos nossos.",
    keyword: "site para clínica de estética rio de janeiro",
    breadcrumbLabel: "Site para Estética",
    hero: {
      h1: "Site para clínica de estética que aparece no Google e agenda pelo WhatsApp",
      subtitle:
        "Uma página própria para a sua clínica ou consultório, com os procedimentos organizados, o seu bairro no texto e um caminho direto até o agendamento. Sem depender só do Instagram.",
      cta: "Quero o site da minha clínica",
      waMessageKey: "servicoEstetica",
    },
    dor: [
      "Quem procura um procedimento de estética digita o nome dele e o bairro no Google. Se você só tem Instagram, quem aparece é a clínica concorrente que tem site.",
      "Seu perfil mostra o trabalho, mas a paciente nova não encontra preço de partida, endereço, como agendar nem as respostas pras dúvidas dela num lugar só.",
    ],
    inclui: [
      { title: "Procedimentos por objetivo", desc: "Facial e corporal organizados pelo que a paciente quer resolver, com os termos que ela realmente pesquisa." },
      { title: "SEO local com o seu bairro", desc: "Títulos, texto e dados estruturados com bairro e cidade, pra disputar as buscas da região onde você atende." },
      { title: "Agendamento pelo WhatsApp", desc: "Botão sempre à mão no celular, com a mensagem já preenchida com o procedimento de interesse." },
      { title: "Identidade da sua clínica", desc: "Design exclusivo, com a cara do seu espaço e do seu atendimento. Sem template revendido." },
    ],
    secoes: [
      {
        title: "Por que clínica de estética precisa de site além do Instagram",
        paragraphs: [
          "O Instagram funciona para quem já te segue. Quem ainda não te conhece pesquisa no Google, com buscas como “estética facial na Penha” ou “limpeza de pele perto de mim”, e quem aparece ali é quem tem uma página que o Google consegue ler. O perfil de rede social quase não entra nessa disputa.",
          "Um site também organiza o que no Instagram fica espalhado: procedimentos, endereço, horário, formas de contato e perguntas frequentes. O artigo <a href=\"/blog/so-instagram-nao-basta-negocio-precisa-de-site/\">só Instagram não basta: seu negócio precisa de um site</a> explica essa diferença em detalhe.",
        ],
      },
      {
        title: "O que um site de estética precisa ter",
        items: [
          "<strong>Uma seção para cada grupo de procedimentos</strong>, com o nome que a paciente digita no Google, e não só o nome técnico.",
          "<strong>Bairro e endereço no texto e nos dados estruturados.</strong> É o que liga a sua página à busca local da região.",
          "<strong>Agendamento visível o tempo todo no celular.</strong> A maior parte de quem pesquisa estética está no telefone.",
          "<strong>Quem atende.</strong> Formação e registro profissional, para quem escolhe um tratamento estético confiar antes de agendar.",
          "<strong>Linguagem responsável.</strong> Descrever o procedimento sem prometer resultado. Regras de publicidade variam conforme o conselho da sua área, e o que pode ser publicado você valida com o seu órgão de classe.",
        ],
      },
      {
        title: "Projetos de estética que já fizemos",
        paragraphs: [
          "Criamos duas páginas para o setor, ambas na Zona Norte do Rio. A <a href=\"/projetos/adriana-lima/\">landing page de uma biomédica esteta na Penha</a> e a <a href=\"/projetos/larissa-nardi/\">página de uma clínica de estética facial e corporal na Vila da Penha</a>. Nos dois casos a estrutura técnica de SEO local e o botão de agendamento pelo WhatsApp foram pensados desde o início.",
        ],
      },
      {
        title: "Prazo, valores e Perfil da Empresa no Google",
        paragraphs: [
          "Uma landing page fica pronta em até 7 dias úteis depois do briefing, e o pacote de lançamento é a partir de R$497 de setup. Os detalhes de prazo, etapas e valores estão na página de <a href=\"/criar-landing-page/\">criação de landing page</a>. Se você precisa de várias páginas, com um espaço para cada procedimento, o <a href=\"/site-institucional/\">site institucional</a> é o caminho.",
          "Para aparecer também no mapa, vale cuidar do Perfil da Empresa no Google junto com o site. O <a href=\"/blog/google-meu-negocio-guia-completo/\">guia completo do Google Meu Negócio</a> mostra como, e <a href=\"/blog/site-para-negocio-local-rio-de-janeiro/\">por que um site pensado para o bairro ranqueia mais</a> explica a lógica por trás.",
        ],
      },
    ],
    projetosRelevantes: ["adriana-lima", "larissa-nardi"],
    faqs: [
      { q: "Uma clínica de estética precisa mesmo de site?", a: "Precisa se quiser ser encontrada por quem ainda não te conhece. O Instagram alcança quem já te segue. Quem pesquisa o procedimento no Google chega em quem tem uma página própria que o buscador consegue ler." },
      { q: "Funciona para esteticista que atende sozinha, em sala alugada ou consultório?", a: "Funciona. O texto e a estrutura técnica são feitos em torno do bairro e da região onde você atende, e não dependem de ter uma clínica grande." },
      { q: "Posso mostrar fotos de antes e depois?", a: "Depende das regras de publicidade do conselho da sua área. A gente cria o espaço no site, e o que pode ou não ser publicado você confirma com o seu órgão de classe." },
      { q: "Quanto tempo leva pra ficar pronto?", a: "Uma landing page leva até 7 dias úteis depois do briefing, e você aprova antes de ir pro ar. Um site com várias páginas leva de 15 a 30 dias úteis." },
      { q: "Quanto custa um site para clínica de estética?", a: "O pacote de lançamento com landing page sai por R$497 de setup + R$497/mês, com chatbot, hospedagem e atualizações. Um site com várias páginas parte de R$997. Fale no WhatsApp pra ver as vagas promocionais." },
    ],
    outrosServicos: ["criar-landing-page", "site-institucional"],
    postsRelacionados: [
      "so-instagram-nao-basta-negocio-precisa-de-site",
      "google-meu-negocio-guia-completo",
      "site-para-negocio-local-rio-de-janeiro",
    ],
  },
];

// Helper: busca um serviço pelo slug.
export function getServico(slug) {
  return SERVICOS.find((s) => s.slug === slug);
}

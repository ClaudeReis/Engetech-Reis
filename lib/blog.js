// ============================================================================
// BLOG — conteúdo dos artigos (config-driven).
// Um objeto por post. O índice (app/blog/page.jsx) lista os cards e o template
// components/BlogPost.jsx renderiza o post a partir daqui. Escreva o conteúdo
// AQUI, não no JSX.
//
// Modelo de cada post:
// - slug: vira a URL /blog/{slug}/ (kebab-case, com a palavra-chave).
// - titleTag: ≤60 chars JÁ CONTANDO o sufixo " | EngeTech Reis" que a página
//   acrescenta. Palavra-chave primeiro (regra do Google já usada no site).
// - metaDescription: ~155 chars, com a palavra-chave e uma promessa clara.
// - h1: título visível (pode ser mais longo que o titleTag).
// - excerpt: resumo do card no índice.
// - keyword: intenção-alvo do artigo (só referência interna).
// - category: rótulo curto pro card e o eyebrow.
// - date: publicação no formato AAAA-MM-DD (usado no <time> e no JSON-LD).
// - readingTime: minutos de leitura (string curta, ex.: "6 min").
// - body: array de blocos renderizados na ordem. Tipos suportados:
//     { type: "p",  text }                     parágrafo (aceita <strong>/<a> via html)
//     { type: "h2", text }                     subtítulo de seção
//     { type: "ul", items: [] }                lista com marcadores
//     { type: "quote", text }                  destaque/citação
// Regra de conteúdo: nunca prometer resultado ou métrica que não seja real.
// ============================================================================

export const POSTS = [
  {
    slug: "template-pronto-ou-site-sob-medida",
    titleTag: "Template Pronto ou Site sob Medida?",
    metaDescription:
      "Template pronto ou site sob medida: qual vale mais a pena? Veja a diferença real, o custo escondido do template e como reconhecer cada um antes de fechar.",
    h1: "Template pronto ou site sob medida: qual vale mais a pena",
    excerpt:
      "O template é mais barato e mais rápido — e por isso mesmo tem armadilha. A diferença real pro seu negócio e como saber o que estão te vendendo.",
    keyword: "template pronto ou site sob medida",
    category: "Decisão",
    date: "2026-07-06",
    readingTime: "6 min",
    body: [
      {
        type: "p",
        html: "Quando você pede um orçamento de site, existe uma diferença enorme por trás do mesmo preço: o profissional pode entregar um template pronto (um tema comprado e adaptado) ou um site sob medida (desenhado do zero pro seu negócio). Os dois “funcionam”, mas resolvem coisas diferentes — e o barato do template às vezes cobra a conta depois.",
      },
      { type: "h2", text: "O que é template pronto" },
      {
        type: "p",
        html: "Um template é um layout genérico, feito pra servir a milhares de negócios ao mesmo tempo. O profissional troca as cores, coloca seu logo e seus textos, e publica. É rápido e barato justamente porque o trabalho de design já foi feito uma vez e é revendido pra todo mundo. O problema aparece no que ele não resolve.",
      },
      { type: "h2", text: "O que é site sob medida" },
      {
        type: "p",
        html: "Um site sob medida é desenhado a partir do seu negócio: o nicho, o público, a região, o que te diferencia. Paleta, tipografia e estrutura são escolhidas pra aquele caso, não herdadas de um tema. Leva mais tempo e custa mais porque envolve criação de verdade — e é isso que faz o site ter a cara do seu negócio, não a cara de site pronto.",
      },
      { type: "h2", text: "O custo escondido do template" },
      {
        type: "p",
        html: "O template resolve o “ter um site”, mas cobra em outros lugares:",
      },
      {
        type: "ul",
        items: [
          "<strong>Cara de igual.</strong> Milhares de negócios usam o mesmo tema. O visitante sente que já viu aquilo — e isso derruba a credibilidade sem ele saber explicar por quê.",
          "<strong>Peso e lentidão.</strong> Temas genéricos carregam recursos que você não usa. Site pesado abre devagar, e o Google rebaixa página lenta.",
          "<strong>SEO limitado.</strong> Muito template vem com estrutura engessada, difícil de otimizar de verdade pra busca local.",
          "<strong>Amarra na plataforma.</strong> Vários templates prendem você num construtor pago mensal — parou de pagar, o site sai do ar.",
        ],
      },
      {
        type: "quote",
        text: "Template não é errado — é raso. Ele te coloca no ar, mas não te faz diferente de mais mil negócios que abriram o mesmo tema.",
      },
      { type: "h2", text: "Quando o template até serve" },
      {
        type: "p",
        html: "Sendo justo: se você só precisa de uma presença provisória, tem orçamento muito curto e não depende do site pra vender, um template resolve o mínimo. Ele é melhor do que não ter nada. Só não espere que ele te destaque da concorrência nem que ranqueie sozinho no Google.",
      },
      { type: "h2", text: "Como saber o que estão te vendendo" },
      {
        type: "p",
        html: "Antes de fechar, pergunte direto: “o design é feito do zero pro meu negócio ou é um tema adaptado?”. Se a resposta enrolar, provavelmente é template. Outros sinais: prazos de poucas horas, preço muito abaixo do mercado e portfólios onde todos os sites têm a mesma estrutura mudando só a cor.",
      },
      {
        type: "p",
        html: "Na EngeTech Reis, todo projeto é sob medida — nada de tema comprado. A gente estuda o negócio e desenha a identidade pra aquele caso, com <a href=\"/blog/por-que-meu-negocio-nao-aparece-no-google/\">SEO e velocidade</a> desde o início. Se quiser comparar com o que te ofereceram, o <a href=\"/blog/quanto-custa-um-site-profissional/\">artigo sobre preço</a> ajuda a enxergar onde está a diferença.",
      },
    ],
  },
  {
    slug: "so-instagram-nao-basta-negocio-precisa-de-site",
    titleTag: "Só Ter Instagram não Basta pro seu Negócio",
    metaDescription:
      "Só ter Instagram não basta: entenda por que seu negócio precisa de um site próprio pra não depender de algoritmo e ser encontrado por quem procura no Google.",
    h1: "Por que só ter Instagram não basta pro seu negócio",
    excerpt:
      "O Instagram é aluguel: você constrói audiência num terreno que não é seu. Por que um site próprio protege o seu negócio e traz cliente que a rede não traz.",
    keyword: "só instagram não basta negócio precisa de site",
    category: "Presença digital",
    date: "2026-07-06",
    readingTime: "5 min",
    body: [
      {
        type: "p",
        html: "Muito negócio local vive 100% no Instagram — e por um tempo parece suficiente. Mas depender só da rede é construir a sua casa num terreno alugado: no dia em que o dono muda as regras, você perde o que levou anos pra montar. Um site próprio não substitui o Instagram; ele resolve o que a rede não resolve.",
      },
      { type: "h2", text: "1. O Instagram é aluguel, o site é seu" },
      {
        type: "p",
        html: "Seus seguidores, seu conteúdo, seu alcance: nada disso é seu de verdade. A plataforma muda o algoritmo, derruba o alcance orgânico, bloqueia ou suspende contas — e você não tem para onde correr. Um site é o único endereço digital que você controla de ponta a ponta. É a base; a rede social é o complemento.",
      },
      { type: "h2", text: "2. Quem procura no Google não te acha no Instagram" },
      {
        type: "p",
        html: "A pessoa que quer contratar agora não abre o Instagram pra pesquisar “eletricista perto de mim” ou “clínica de estética no meu bairro”. Ela pesquisa no Google. E o Google mal enxerga o que está dentro do Instagram — então você fica de fora dessa busca inteira, que é justamente onde está o cliente com intenção de compra.",
      },
      {
        type: "quote",
        text: "No Instagram você fala com quem já te segue. No Google você é encontrado por quem ainda não te conhece e já quer comprar.",
      },
      { type: "h2", text: "3. Rede social não passa a mesma credibilidade" },
      {
        type: "p",
        html: "Um perfil qualquer um cria em cinco minutos. Um site próprio, com domínio, identidade e informação organizada, passa uma seriedade que o perfil não passa — principalmente em serviço de ticket mais alto, onde o cliente pesquisa e desconfia antes de fechar. O site é o que separa “negócio de verdade” de “mais um perfil”.",
      },
      { type: "h2", text: "4. O site trabalha 24h, sem você postar" },
      {
        type: "p",
        html: "No Instagram, parou de postar, sumiu. O site continua aparecendo no Google e recebendo visita mesmo enquanto você atende, dorme ou tira férias. Ele não depende de você alimentar todo dia pra seguir trazendo contato — é o ativo que trabalha sozinho.",
      },
      { type: "h2", text: "O ideal é os dois juntos" },
      {
        type: "p",
        html: "Isso não é Instagram contra site. O melhor cenário é a rede atraindo e engajando, e o site sendo o destino que converte e que o Google encontra. Dá pra começar simples: uma <a href=\"/criar-landing-page/\">landing page</a> já resolve a maioria dos casos e coloca você na busca. Se ficou na dúvida entre página única e site completo, veja <a href=\"/blog/landing-page-ou-site-institucional/\">landing page ou site institucional</a> — e quando quiser, é só chamar no WhatsApp.",
      },
    ],
  },
  {
    slug: "landing-page-ou-site-institucional",
    titleTag: "Landing Page ou Site Institucional?",
    metaDescription:
      "Landing page ou site institucional: qual o seu negócio precisa? Entenda a diferença, quando usar cada um e como não pagar pelo que não vai usar.",
    h1: "Landing page ou site institucional: qual o seu negócio precisa",
    excerpt:
      "A diferença real entre os dois, quando cada um faz sentido pro seu momento e por que escolher errado custa dinheiro — de um jeito ou de outro.",
    keyword: "landing page ou site institucional",
    category: "Decisão",
    date: "2026-07-06",
    readingTime: "6 min",
    body: [
      {
        type: "p",
        html: "Na hora de fechar um site, quase todo mundo trava na mesma dúvida: preciso de uma landing page ou de um site institucional com várias páginas? Os dois têm preços diferentes e servem pra coisas diferentes — e escolher pelo motivo errado é o jeito mais comum de gastar demais ou de ficar aquém do que o negócio precisa. Vamos separar isso de forma prática.",
      },
      { type: "h2", text: "O que é cada um" },
      {
        type: "p",
        html: "Uma <strong>landing page</strong> é uma página única, com um único objetivo: levar o visitante a uma ação (chamar no WhatsApp, pedir orçamento, agendar). Tudo nela conduz pra esse destino, sem menu com dez caminhos pra distrair. É rápida de fazer, barata e altamente focada em conversão.",
      },
      {
        type: "p",
        html: "Um <strong>site institucional</strong> tem várias páginas — início, sobre, serviços, portfólio, contato, às vezes blog. Ele existe pra apresentar o negócio por completo, passar credibilidade e cobrir mais assuntos. É maior, custa mais e faz sentido quando há bastante coisa pra mostrar.",
      },
      { type: "h2", text: "Quando a landing page é o suficiente" },
      {
        type: "p",
        html: "Na maioria dos negócios locais de serviço, uma landing page bem feita resolve. Ela é ideal quando:",
      },
      {
        type: "ul",
        items: [
          "Você oferece um serviço principal e quer que a pessoa entre em contato — eletricista, esteticista, corretor, prestador em geral.",
          "Seu objetivo é gerar contato (lead), não explicar uma estrutura grande de empresa.",
          "Você vai rodar anúncio: uma página única e focada converte melhor o clique pago.",
          "Você está começando e quer presença profissional no Google sem gastar com o que ainda não vai usar.",
        ],
      },
      {
        type: "quote",
        text: "Página a mais que ninguém abre não passa credibilidade — só encarece o projeto e dilui o caminho até o contato.",
      },
      { type: "h2", text: "Quando vale o site institucional" },
      {
        type: "p",
        html: "O site com várias páginas passa a compensar quando o negócio realmente tem mais a mostrar:",
      },
      {
        type: "ul",
        items: [
          "Você tem vários serviços distintos, cada um merecendo sua própria página (bom também pra SEO, uma página por termo de busca).",
          "Precisa de um portfólio ou catálogo com muitos itens — obras, produtos, projetos.",
          "A credibilidade da sua venda depende de contexto: história da empresa, equipe, certificações, cases.",
          "Vai manter um blog pra atrair busca orgânica ao longo do tempo.",
        ],
      },
      { type: "h2", text: "O erro que custa dos dois lados" },
      {
        type: "p",
        html: "Escolher errado tem custo nas duas direções. Contratar um site institucional grande quando uma landing page bastava é pagar (e esperar) por páginas que ninguém vai abrir. Já espremer um negócio cheio de serviços numa página só é deixar busca e credibilidade na mesa. A pergunta certa não é “qual é mais completo?”, e sim “qual resolve o meu momento?”.",
      },
      {
        type: "p",
        html: "E tem uma boa notícia: começar por uma landing page não fecha portas. Dá pra iniciar focado na conversão e evoluir pra um site institucional quando o negócio pedir — sem jogar fora o que já foi feito.",
      },
      { type: "h2", text: "Como decidir em uma frase" },
      {
        type: "p",
        html: "Se o seu objetivo agora é <strong>fazer o cliente entrar em contato</strong>, comece por uma <a href=\"/criar-landing-page/\">landing page</a>. Se você precisa <strong>apresentar um negócio com várias frentes e construir autoridade</strong>, o <a href=\"/site-institucional/\">site institucional</a> é o caminho. Na dúvida entre os dois, a landing page quase sempre é o começo mais inteligente — e mais barato.",
      },
      {
        type: "p",
        html: "Quer ver quanto fica cada opção pro seu caso? O <a href=\"/blog/quanto-custa-um-site-profissional/\">artigo sobre preço de site</a> abre a faixa real, e é só chamar no WhatsApp que a gente te ajuda a escolher sem empurrar o que você não precisa.",
      },
    ],
  },
  {
    slug: "por-que-meu-negocio-nao-aparece-no-google",
    titleTag: "Por que meu Negócio não Aparece no Google",
    metaDescription:
      "Meu negócio não aparece no Google? Veja os 5 motivos mais comuns — e o passo a passo pra ser encontrado por quem procura seu serviço na sua região.",
    h1: "Por que meu negócio não aparece no Google (e como resolver)",
    excerpt:
      "Os cinco motivos que fazem um negócio local sumir da busca — só ter Instagram, não ter site, ficha sem cuidado — e o que fazer, em ordem, pra aparecer.",
    keyword: "meu negócio não aparece no google",
    category: "Presença no Google",
    date: "2026-07-06",
    readingTime: "6 min",
    body: [
      {
        type: "p",
        html: "Você pesquisa o nome do seu serviço no Google, some pra segunda página e não se acha em lugar nenhum — mas o concorrente da esquina está lá em cima. Não é azar nem sorte de algoritmo: é a soma de alguns fatores que dá pra corrigir um a um. Aqui estão os cinco motivos mais comuns de um negócio local não aparecer na busca, e o que fazer em cada caso.",
      },
      { type: "h2", text: "1. Você só tem Instagram (e o Google mal enxerga isso)" },
      {
        type: "p",
        html: "O Instagram é ótimo pra quem já te segue, mas ele é uma caixa fechada: o Google indexa muito pouco do que acontece lá dentro. Quem pesquisa “eletricista no meu bairro” ou “clínica de estética perto de mim” não cai no seu perfil — cai em quem tem uma página própria que o Google consegue ler. Sem um endereço seu na web, você está fora dessa busca inteira.",
      },
      {
        type: "p",
        html: "A solução é ter um site ou uma <a href=\"/criar-landing-page/\">landing page</a> própria: um lugar que o Google lê, entende do que se trata e mostra pra quem procura. O Instagram continua sendo seu — só deixa de ser sua única porta de entrada.",
      },
      { type: "h2", text: "2. Seu site existe, mas não foi feito pra ser encontrado" },
      {
        type: "p",
        html: "Ter site não é o mesmo que aparecer no Google. Muita página está no ar mas foi montada sem a base técnica que a busca precisa: títulos e descrições vagos, nenhum dado estruturado dizendo que você é um negócio local, carregamento lento. O Google até acha, mas não entende o suficiente pra te colocar na frente.",
      },
      {
        type: "p",
        html: "Isso é o que se chama de SEO on-page, e é justamente o que separa um site “no ar” de um site que trabalha por você. Se o seu foi feito num construtor genérico ou por quem não cuidou disso, provavelmente é aqui que ele está perdendo.",
      },
      { type: "h2", text: "3. Sua ficha do Google Meu Negócio está vazia ou errada" },
      {
        type: "p",
        html: "Pra busca local, o Perfil da Empresa no Google (o antigo Google Meu Negócio) é decisivo — é o que faz você aparecer no mapa e no bloco de resultados com telefone e avaliações. Muita gente nem criou a ficha, ou criou e deixou sem categoria, sem horário, sem fotos e sem endereço certo. Ficha incompleta é motivo direto de não aparecer.",
      },
      {
        type: "ul",
        items: [
          "Reivindique e verifique sua ficha (é grátis, no próprio Google).",
          "Preencha categoria certa, endereço, horário, telefone e área de atendimento.",
          "Adicione fotos reais e mantenha as informações sempre atualizadas.",
          "Peça avaliação aos clientes satisfeitos — peso grande no ranking local.",
        ],
      },
      { type: "h2", text: "4. Ninguém te procura pelo nome — te procuram pelo serviço" },
      {
        type: "p",
        html: "Se você só aparece quando alguém digita o nome exato da sua empresa, você depende de quem já te conhece. O cliente novo não sabe seu nome: ele digita o problema (“conserto de chuveiro”, “harmonização facial”, “reforma de apartamento”) mais o bairro. Se o seu site não fala a língua dessas buscas, ele não entra na disputa.",
      },
      {
        type: "quote",
        text: "Quem te acha pelo nome já é seu cliente. Quem você quer alcançar é quem digita o serviço e o bairro — e ainda não sabe que você existe.",
      },
      {
        type: "p",
        html: "A saída é ter conteúdo organizado em torno do que as pessoas de fato pesquisam: páginas por serviço, com o termo e a região certos. Foi por isso que a gente estruturou as páginas de <a href=\"/criar-landing-page/\">landing page</a> e <a href=\"/site-institucional/\">site institucional</a> por intenção de busca, não só pelo nome da marca.",
      },
      { type: "h2", text: "5. Seu site é lento ou quebra no celular" },
      {
        type: "p",
        html: "A maioria das buscas locais acontece no celular, e o Google prioriza páginas rápidas e que funcionam bem na tela pequena. Um site pesado, que demora a abrir ou embaralha no mobile, é rebaixado — e o visitante desiste antes mesmo de ver o que você oferece. Velocidade e versão mobile não são luxo: são requisito pra ranquear.",
      },
      { type: "h2", text: "Por onde começar" },
      {
        type: "p",
        html: "Se fosse pra colocar em ordem: primeiro tenha um endereço próprio na web que o Google consiga ler; depois arrume a ficha do Google Meu Negócio; e então cuide da base técnica (SEO on-page, velocidade, mobile) e do conteúdo por serviço e região. Não precisa ser tudo de uma vez — mas enquanto o primeiro passo não existe, os outros não têm onde se apoiar.",
      },
      {
        type: "p",
        html: "É exatamente esse pacote que a gente entrega na EngeTech Reis: sites feitos do zero pra negócios locais no Rio, já com SEO e velocidade desde o primeiro dia. Se quiser entender quanto isso custa, o <a href=\"/blog/quanto-custa-um-site-profissional/\">artigo sobre preço de site</a> abre a faixa real — e se preferir, é só chamar no WhatsApp que a gente olha o seu caso.",
      },
    ],
  },
  {
    slug: "quanto-custa-um-site-profissional",
    titleTag: "Quanto Custa um Site Profissional em 2026",
    metaDescription:
      "Quanto custa um site profissional em 2026? Veja a faixa de preço real no Brasil, o que muda o valor e como não pagar caro por um template genérico.",
    h1: "Quanto custa um site profissional em 2026 (e o que muda o preço)",
    excerpt:
      "A faixa de preço real de um site no Brasil, o que faz o valor subir ou cair e como saber se você está pagando por um projeto de verdade ou por um template revendido.",
    keyword: "quanto custa um site profissional",
    category: "Preços",
    date: "2026-07-06",
    readingTime: "7 min",
    body: [
      {
        type: "p",
        html: "“Quanto custa um site?” é a primeira pergunta de quase todo dono de negócio — e a resposta honesta é: depende do que você chama de site. Um perfil de link na bio é uma coisa. Uma página feita pra aparecer no Google e trazer cliente é outra. Neste artigo a gente abre a faixa de preço real praticada no Brasil em 2026 e explica, sem enrolação, o que faz esse número subir ou descer.",
      },
      { type: "h2", text: "A faixa de preço real no Brasil" },
      {
        type: "p",
        html: "Fugindo dos dois extremos (o “site grátis” que na verdade te prende numa plataforma e o projeto de agência grande que custa uma fortuna), o mercado de sites para pequenos e médios negócios em 2026 gira em torno destas faixas:",
      },
      {
        type: "ul",
        items: [
          "<strong>Construtor faça-você-mesmo (Wix, Hostinger, etc.):</strong> de R$0 a R$50/mês. Barato de começar, mas o trabalho (e o resultado) fica todo na sua mão.",
          "<strong>Landing page profissional feita sob medida:</strong> a partir de R$497, podendo passar de R$3.000 dependendo do escopo e de quem faz.",
          "<strong>Site institucional com várias páginas:</strong> a partir de R$997, subindo conforme o número de páginas e recursos.",
          "<strong>Manutenção mensal (hospedagem, ajustes, suporte):</strong> normalmente entre R$100 e R$600/mês, quando existe.",
        ],
      },
      {
        type: "p",
        html: "Repare que a mesma coisa (“um site”) tem uma variação enorme de preço. Isso não é falta de padrão do mercado — é porque por baixo do mesmo nome existem entregas completamente diferentes.",
      },
      { type: "h2", text: "O que realmente muda o preço" },
      {
        type: "p",
        html: "Cinco fatores explicam quase toda a diferença entre um orçamento de R$500 e um de R$5.000:",
      },
      {
        type: "ul",
        items: [
          "<strong>Template ou sob medida.</strong> Um tema comprado e trocado de cor é rápido e barato — e tem cara de site pronto. Um projeto desenhado do zero pro seu negócio custa mais porque envolve design próprio, não revenda.",
          "<strong>SEO de verdade ou só “no ar”.</strong> Colocar um site online é fácil. Construí-lo pra aparecer no Google (títulos certos, dados estruturados, velocidade, versão mobile) é trabalho técnico que nem todo orçamento inclui.",
          "<strong>Número de páginas e integrações.</strong> Uma landing page única é diferente de um site com serviços, blog, formulário e chatbot. Cada peça a mais é tempo a mais.",
          "<strong>Quem faz.</strong> Freelancer iniciante, agência boutique ou agência grande cobram valores bem diferentes — e entregam níveis de acompanhamento diferentes.",
          "<strong>O que acontece depois.</strong> Site é coisa viva: precisa de hospedagem, ajustes e suporte. Um preço muito baixo às vezes só empurra esses custos pra frente.",
        ],
      },
      {
        type: "quote",
        text: "Site barato que não aparece no Google não é economia — é dinheiro parado. O objetivo não é gastar pouco, é gastar no que traz cliente.",
      },
      { type: "h2", text: "Por que o site mais barato costuma sair mais caro" },
      {
        type: "p",
        html: "O construtor gratuito parece imbatível até você somar o tempo que gasta montando, os recursos travados atrás do plano pago e o fato de que, no fim, a página tem a mesma cara de milhares de outras. Um site que não passa credibilidade e não é encontrado na busca não gera orçamento — e um site que não gera orçamento, por mais barato que seja, custou caro.",
      },
      {
        type: "p",
        html: "A conta que importa não é o preço do site, é o retorno. Um único cliente novo fechado pelo site costuma pagar o projeto inteiro. A pergunta certa deixa de ser “qual o mais barato?” e vira “qual me traz cliente de forma previsível?”.",
      },
      { type: "h2", text: "Como saber se o preço é justo" },
      {
        type: "p",
        html: "Antes de fechar qualquer orçamento, faça estas perguntas a quem vai criar o seu site:",
      },
      {
        type: "ul",
        items: [
          "O design é feito do zero pro meu negócio ou é um template adaptado?",
          "O site já vem preparado pra aparecer no Google (SEO on-page e dados estruturados)?",
          "É rápido e pensado primeiro pro celular, que é de onde vem a maioria dos acessos?",
          "Existe um caminho claro do visitante até o contato (WhatsApp, formulário)?",
          "O que está incluso depois de publicado: ajustes, suporte, hospedagem?",
        ],
      },
      {
        type: "p",
        html: "Se as respostas forem sólidas, um valor a partir de algumas centenas de reais é justo e se paga rápido. Se forem vagas, provavelmente você está comparando um projeto de verdade com uma revenda de template — e aí o preço mais baixo é justamente o sinal de alerta.",
      },
      { type: "h2", text: "E na EngeTech Reis?" },
      {
        type: "p",
        html: "A gente cria sites e landing pages do zero pra negócios locais no Rio de Janeiro: identidade própria (nada de template), base de SEO feita desde o primeiro dia e um caminho único até o seu WhatsApp. Se quiser saber quanto ficaria o seu caso, é só chamar — a primeira conversa é sem compromisso e a gente te passa a faixa antes de qualquer coisa.",
      },
    ],
  },
];

// Helper: busca um post pelo slug (páginas de post).
export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}

// Ordena do mais recente pro mais antigo (índice do blog). Datas iguais mantêm
// a ordem do array (sort estável) — por isso posts novos entram no topo de POSTS.
export function getPostsByDate() {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

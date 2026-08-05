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
    slug: "chatbot-ou-atendente-humano",
    titleTag: "Chatbot ou Atendente Humano: Qual Escolher",
    metaDescription:
      "Chatbot ou atendente humano: qual seu negócio precisa primeiro? Veja quando cada um faz sentido e como usar os dois juntos sem perder o toque humano.",
    h1: "Chatbot ou atendente humano: qual seu negócio precisa primeiro",
    excerpt:
      "Antes de contratar alguém só pra responder mensagem, vale entender o que um chatbot já resolve sozinho e em que ponto só uma pessoa de verdade dá conta.",
    keyword: "chatbot ou atendente humano",
    category: "Automação",
    date: "2026-08-05",
    readingTime: "5 min",
    body: [
      {
        type: "p",
        html: "Quando o volume de mensagem no WhatsApp e no site começa a pesar, a dúvida que surge é sempre a mesma: contrato alguém pra responder ou instalo um chatbot? Colocada assim, parece uma escolha entre duas opções concorrentes. Não é. São duas ferramentas que resolvem problemas diferentes, e entender qual vem primeiro no seu negócio evita tanto gastar com uma contratação que ainda não é necessária quanto perder venda por falta de gente na hora certa.",
      },
      { type: "h2", text: "O que o chatbot resolve sozinho" },
      {
        type: "p",
        html: "Um chatbot bem montado dá conta, sem ajuda de ninguém, das partes mais repetitivas do atendimento: responder as mesmas perguntas de sempre (preço, prazo, como funciona), recolher as informações que faltam pra montar um orçamento e garantir que ninguém fique sem resposta fora do horário comercial. Ele não cansa, não tira folga e não deixa passar o visitante que chegou de madrugada com uma dúvida real. Pra esse tipo de trabalho, uma pessoa contratada custaria muito mais do que resolve.",
      },
      { type: "h2", text: "O que só um atendente humano resolve" },
      {
        type: "p",
        html: "Tem uma parte da conversa que nenhum fluxo automático substitui: negociar preço, avaliar um caso fora do padrão, lidar com uma reclamação ou fechar um serviço de ticket mais alto, onde o cliente precisa sentir que está falando com alguém que entende do assunto. Quando o volume de mensagem cresce a ponto de o próprio dono não dar conta de responder todo mundo nesse nível, é sinal de que chegou a hora de trazer uma pessoa pra essa parte, não de trocar o chatbot por ela.",
      },
      { type: "h2", text: "Qual vem primeiro pro seu negócio" },
      {
        type: "p",
        html: "Se você ainda responde tudo sozinho e o problema é não conseguir estar disponível o tempo todo, o chatbot é o primeiro investimento que faz sentido: ele custa muito menos que uma contratação e resolve exatamente o gargalo que você tem agora, que é o tempo de resposta, não a falta de gente pra negociar. Já se o volume de conversa qualificada é tanto que mesmo com o chatbot filtrando o básico ainda sobra mais fechamento do que você consegue tocar sozinho, aí sim vale considerar contratar alguém, com o chatbot continuando a fazer a triagem antes de qualquer conversa chegar nessa pessoa.",
      },
      {
        type: "quote",
        text: "O chatbot não compete com um atendente humano. Ele decide quem, entre os dois, vai gastar tempo com o quê.",
      },
      { type: "h2", text: "Os dois juntos, não um ou outro" },
      {
        type: "p",
        html: "Na prática, a combinação mais comum pra negócio local é o chatbot cuidando do início (triagem, dúvida repetida, primeira resposta) e uma pessoa, seja o próprio dono ou um atendente contratado depois, entrando exatamente na hora que a conversa precisa de julgamento humano. Já explicamos em detalhe <a href=\"/blog/chatbot-para-site-como-funciona/\">como funciona um chatbot para site</a> nesse fluxo: ele não tira o atendimento humano de você, só garante que o lead ainda esteja ali, qualificado, quando alguém entrar pra fechar.",
      },
      {
        type: "p",
        html: "Se o seu site ou landing page já está no ar, o chatbot entra sem mexer no que já existe, e resolve o gargalo de tempo de resposta antes de qualquer decisão sobre contratar mais gente. Dá pra ver como funciona na página de <a href=\"/chatbot-para-site/\">chatbot para site</a>, ou chamar no WhatsApp pra tirar dúvida sobre o seu caso.",
      },
    ],
    faqs: [
      {
        q: "Chatbot substitui a necessidade de contratar um atendente?",
        a: "Depende do volume. Pra maioria dos negócios locais que ainda respondem tudo sozinhos, o chatbot resolve o gargalo real, que é o tempo de resposta. Só quando o volume de conversa qualificada supera o que uma pessoa consegue fechar sozinha é que vale contratar alguém, com o chatbot continuando a fazer a triagem antes.",
      },
      {
        q: "O que o chatbot não consegue resolver?",
        a: "Negociação de preço, avaliação de caso fora do padrão, reclamação e fechamento de serviço de ticket mais alto continuam precisando de uma pessoa. O chatbot cuida da triagem e da dúvida repetida, não da parte que exige julgamento humano.",
      },
      {
        q: "Devo começar pelo chatbot ou pela contratação de um atendente?",
        a: "Na maioria dos casos, pelo chatbot. Ele custa muito menos que uma contratação e resolve o problema mais comum de negócio local, que é não conseguir responder rápido o tempo todo. A contratação de alguém faz mais sentido quando já existe volume de fechamento maior do que uma pessoa dá conta.",
      },
      {
        q: "Dá pra ter chatbot e atendente humano ao mesmo tempo?",
        a: "Dá, e é a combinação mais comum. O chatbot cuida do início da conversa e passa pra pessoa, seja o dono ou um atendente contratado, exatamente na hora que o cliente precisa de negociação ou fechamento.",
      },
    ],
  },
  {
    slug: "tempo-resposta-whatsapp-vendas",
    titleTag: "Tempo de Resposta no WhatsApp e as Vendas",
    metaDescription:
      "Quanto tempo leva pra responder um cliente no WhatsApp? Veja por que a demora custa venda de verdade e como garantir resposta na hora, mesmo sem parar tudo.",
    h1: "Quanto tempo leva pra responder um cliente no WhatsApp (e por que isso custa vendas)",
    excerpt:
      "Enquanto você termina o que está fazendo pra responder, o cliente já mandou a mesma pergunta pro concorrente. Veja por que o tempo de resposta pesa mais do que parece.",
    keyword: "tempo de resposta no whatsapp",
    category: "Automação",
    date: "2026-07-29",
    readingTime: "5 min",
    body: [
      {
        type: "p",
        html: "Pensa numa cena comum: você está no meio de um atendimento, com a mão suja de massa, no meio de um serviço em outra casa, ou simplesmente almoçando, e chega uma mensagem nova no WhatsApp. Você vê a notificação, pensa “já já eu respondo” e segue o que estava fazendo. Vinte minutos depois, quando finalmente abre a conversa, ou a pessoa já mandou a mesma pergunta pro seu concorrente, ou simplesmente sumiu. Isso não é falta de sorte, é o tempo de resposta decidindo a venda antes mesmo de você entrar na conversa.",
      },
      { type: "h2", text: "Por que a demora custa venda, não só a mensagem" },
      {
        type: "p",
        html: "Quem manda mensagem pra um negócio local geralmente já está comparando duas ou três opções ao mesmo tempo. Não é um cliente fiel esperando pacientemente a sua resposta: é alguém decidindo, ali, quem vai atender primeiro. Enquanto sua mensagem fica com aquele relógio cinza de “enviada, mas não vista”, essa pessoa já está conversando com outro número. Não é falta de interesse no seu serviço, é o tempo que decide antes do preço e antes da qualidade.",
      },
      { type: "h2", text: "O que acontece enquanto você não responde" },
      {
        type: "p",
        html: "Não dá pra culpar ninguém por demorar: quem toca um negócio sozinho, ou com uma equipe pequena, está o tempo todo no meio de alguma outra coisa. Atendendo outro cliente, dirigindo, com as mãos ocupadas no serviço. O problema não é a vontade de responder rápido, é que responder rápido de verdade, o tempo todo, exigiria parar tudo sempre que o celular vibra, e isso não é sustentável nem realista.",
      },
      {
        type: "quote",
        text: "O cliente não está esperando você terminar o que está fazendo. Ele está decidindo, nesse exato momento, se você é confiável o suficiente pra continuar esperando.",
      },
      { type: "h2", text: "O tempo de resposta também é prova de confiança" },
      {
        type: "p",
        html: "Tem outro lado nisso que passa despercebido: a velocidade da resposta é um sinal, pro cliente, de como vai ser trabalhar com você. Se demora horas pra responder uma pergunta simples antes de fechar, a pessoa já imagina como vai ser depois, quando surgir uma dúvida no meio do serviço. Resposta rápida não é só sobre não perder o lead: é sobre parecer um negócio organizado, que dá atenção, antes mesmo da primeira palavra sobre preço.",
      },
      { type: "h2", text: "Como resolver isso sem contratar alguém só pra responder mensagem" },
      {
        type: "p",
        html: "Contratar uma pessoa só pra ficar de olho no WhatsApp o dia inteiro não faz sentido pra maioria dos negócios locais, o custo não fecha a conta. O caminho mais realista é deixar que a primeira resposta aconteça sozinha, sem depender de você estar livre naquele segundo. É exatamente esse o papel de um <a href=\"/blog/chatbot-para-site-como-funciona/\">chatbot para site</a>: ele recebe o visitante assim que ele chega, responde o que dá pra responder na hora e só te chama no WhatsApp quando a conversa já está pronta pra você continuar. A demora na primeira resposta deixa de existir, mesmo com você ocupado no meio de outro atendimento.",
      },
      {
        type: "p",
        html: "Se o seu site ou landing page já está no ar, esse fluxo entra sem mexer no que já existe, e passa a segurar o cliente enquanto você não pode responder na hora. Dá pra ver como funciona na página de <a href=\"/chatbot-para-site/\">chatbot para site</a>, ou chamar no WhatsApp pra tirar dúvida antes.",
      },
    ],
    faqs: [
      {
        q: "Qual o tempo de resposta ideal no WhatsApp?",
        a: "Quanto mais rápido, melhor, porque quem manda mensagem pra um negócio local costuma estar comparando outras opções ao mesmo tempo. Não existe um número mágico de minutos: o que importa é que a pessoa não fique esperando sem nenhuma resposta enquanto decide pra quem vai dar preferência.",
      },
      {
        q: "Por que demorar pra responder faz o cliente desistir?",
        a: "Porque quem procura um serviço geralmente está decidindo entre duas ou três opções na mesma hora. Enquanto sua mensagem continua sem resposta, o concorrente que respondeu primeiro já está adiantado na conversa.",
      },
      {
        q: "Preciso contratar alguém só pra responder mensagem rápido?",
        a: "Não precisa. Pra maioria dos negócios locais o custo de ter uma pessoa dedicada só a isso não fecha a conta. Um chatbot no site resolve a primeira resposta sozinho e só te chama quando a conversa já está pronta pra você continuar.",
      },
      {
        q: "O tempo de resposta influencia mesmo a decisão de compra?",
        a: "Sim. Além de evitar que o cliente vá pro concorrente, uma resposta rápida também passa a impressão de um negócio organizado, o que pesa na confiança antes mesmo de falar de preço.",
      },
    ],
  },
  {
    slug: "chatbot-para-site-como-funciona",
    titleTag: "Como Funciona um Chatbot para Site",
    metaDescription:
      "Como funciona um chatbot para site: ele responde o visitante na hora, qualifica quem tem interesse real e manda a conversa pronta pro seu WhatsApp.",
    h1: "Como funciona um chatbot para site (e por que seu negócio precisa de um)",
    excerpt:
      "O visitante chega no seu site às 23h com uma dúvida real e some porque ninguém responde. Veja como funciona um chatbot para site, sem tirar o atendimento humano de você.",
    // Intenção informacional (quem quer entender). A intenção comercial
    // ("chatbot para site", quem quer contratar) é da página /chatbot-para-site/.
    keyword: "como funciona um chatbot para site",
    category: "Automação",
    date: "2026-07-22",
    readingTime: "6 min",
    body: [
      {
        type: "p",
        html: "Todo site recebe visita fora do horário comercial. A pessoa entra às 23h, no domingo, na hora do almoço, com uma dúvida simples e uma vontade real de fechar negócio, e não encontra ninguém pra responder. Ela não deixa mensagem, não liga depois: ela sai e procura o próximo resultado do Google. É exatamente esse buraco que um chatbot para site existe pra fechar.",
      },
      { type: "h2", text: "O que é um chatbot para site, na prática" },
      {
        type: "p",
        html: "Esquece a ideia de robô genérico respondendo qualquer coisa. Um chatbot para site bem montado é um fluxo de perguntas e respostas definido pro seu negócio: ele entende o que o visitante quer, responde as dúvidas mais comuns (preço, prazo, como funciona) e recolhe as informações que você precisa antes de qualquer conversa humana começar. Não é inteligência artificial genérica tentando adivinhar: é um roteiro pensado pro seu serviço, instalado direto no seu site.",
      },
      { type: "h2", text: "Como funciona um chatbot para site, por trás dos panos" },
      {
        type: "p",
        html: "O visitante clica no ícone de conversa no canto do site e o chatbot puxa a primeira pergunta: o que ele procura, qual serviço, às vezes a região onde está. Conforme ele responde, o fluxo vai se ajustando: se a pessoa quer um orçamento, o bot já pergunta o que falta pra montar esse orçamento; se é uma dúvida simples, ele resolve ali mesmo. No fim do fluxo, a conversa (já com contexto) é direcionada pro seu WhatsApp, pronta pra você continuar sem precisar perguntar tudo de novo.",
      },
      { type: "h2", text: "Por que seu negócio precisa de um" },
      {
        type: "p",
        html: "Três coisas acontecem ao mesmo tempo quando o chatbot entra no ar:",
      },
      {
        type: "ul",
        items: [
          "<strong>Nenhum lead esfria fora do horário.</strong> Enquanto você dorme ou está atendendo outro cliente, o site continua respondendo, e o visitante que chegou de madrugada não vai embora sem resposta.",
          "<strong>Menos tempo gasto em pergunta repetida.</strong> Preço, prazo, como funciona: são sempre as mesmas dúvidas. O bot resolve isso de forma automática, e você entra só na parte que importa.",
          "<strong>O lead chega mais pronto.</strong> Quando a conversa cai no seu WhatsApp, você já sabe o que a pessoa quer e o que ela respondeu, não começa do zero.",
        ],
      },
      {
        type: "quote",
        text: "O chatbot não substitui a sua venda. Ele garante que o lead ainda esteja lá quando você chegar pra fechar.",
      },
      { type: "h2", text: "Chatbot não substitui atendimento humano" },
      {
        type: "p",
        html: "É natural desconfiar: será que o cliente não vai sentir falta de falar com uma pessoa de verdade? A resposta é que o bot cuida só do começo (triagem e dúvida repetida) e passa pra você exatamente na hora que a conversa precisa de julgamento humano, de negociação, de fechar o serviço. Ninguém compra um serviço de ticket mais alto conversando só com um bot até o fim; o que ele faz é garantir que a pessoa não desista antes de chegar em você. Se ficou na dúvida sobre quando vale contratar alguém pra essa parte, veja <a href=\"/blog/chatbot-ou-atendente-humano/\">chatbot ou atendente humano: qual seu negócio precisa primeiro</a>.",
      },
      { type: "h2", text: "Onde o chatbot funciona" },
      {
        type: "p",
        html: "Faz sentido ter o chatbot ativo tanto no site quanto no Instagram, já que boa parte do contato de negócio local acontece pelos dois canais. O fluxo se adapta pro formato de cada um, mas a lógica é a mesma: responder rápido, entender o que a pessoa quer e te entregar o lead já qualificado.",
      },
      { type: "h2", text: "Como colocar isso no seu site" },
      {
        type: "p",
        html: "Se o seu site ou landing page já está no ar, o chatbot entra sem precisar mexer no que já existe. A EngeTech Reis monta o fluxo pro seu tipo de negócio, instala e deixa rodando, e você só recebe o lead qualificado no WhatsApp. Dá pra ver os detalhes na página de <a href=\"/chatbot-para-site/\">chatbot para site</a>, e se quiser tirar dúvida antes, é só chamar no WhatsApp.",
      },
    ],
    faqs: [
      {
        q: "O chatbot substitui o atendimento humano?",
        a: "Não. Ele cuida do começo, triagem e dúvida repetida, e passa pra você exatamente na hora que a conversa precisa de negociação ou julgamento humano. Ninguém fecha um serviço de ticket mais alto só conversando com um bot até o fim.",
      },
      {
        q: "O chatbot responde fora do horário comercial?",
        a: "Sim. Ele fica ativo 24 horas, então o visitante que chega de madrugada ou no domingo recebe resposta na hora, em vez de sair e procurar o próximo resultado do Google.",
      },
      {
        q: "Preciso ter site pronto pra ter um chatbot?",
        a: "Não é obrigatório. Se o seu site ou landing page já está no ar, o chatbot entra sem precisar mexer no que já existe. Se você ainda não tem nenhum dos dois, a EngeTech Reis monta os dois juntos.",
      },
      {
        q: "O chatbot funciona no Instagram também?",
        a: "Sim, com o mesmo fluxo. Faz sentido ter o chatbot ativo nos dois canais, já que boa parte do contato de negócio local acontece tanto pelo site quanto pelo Instagram.",
      },
    ],
  },
  {
    slug: "site-para-negocio-local-rio-de-janeiro",
    titleTag: "SEO Local: Por que Específico Rankeia Mais",
    metaDescription:
      "SEO local na prática: por que um site específico pro seu bairro e nicho rankeia mais que um genérico, e como aparecer no Google na sua região.",
    h1: "SEO local: por que um site específico rankeia mais que um genérico",
    excerpt:
      "Um site genérico compete contra o Brasil inteiro. Um site pensado pro seu bairro e pro seu nicho compete contra muito menos gente, e ganha mais fácil.",
    // Intenção informacional. A intenção comercial com geo ("criar landing page
    // profissional rio de janeiro") é das páginas de serviço, não deste post.
    keyword: "seo local para pequenos negócios",
    category: "SEO local",
    date: "2026-07-15",
    readingTime: "6 min",
    body: [
      {
        type: "p",
        html: "SEO local é o que faz um negócio aparecer no Google pra quem procura perto dele, e tem um erro que quase todo mundo comete sem perceber: pedir um site igual ao de qualquer empresa do Brasil, em vez de um site pensado pro próprio bairro e pro próprio nicho. Um site bonito, com texto genérico sobre “qualidade” e “compromisso”, que poderia ser de uma clínica em São Paulo, de um eletricista em Salvador ou de uma joalheria em Curitiba. O problema não é a estética: é que esse site entra numa disputa que ele não tem como vencer.",
      },
      { type: "h2", text: "O site genérico compete contra o Brasil inteiro" },
      {
        type: "p",
        html: "Quando o seu site fala só de “site profissional” ou “quanto custa um site”, ele está competindo pela atenção do Google contra qualquer agência, freelancer ou empresa do país inteiro que também fala sobre isso. É uma briga gigante, e quem ganha normalmente é quem tem mais anos de domínio, mais conteúdo publicado e mais orçamento de anúncio. Um negócio pequeno começando agora não tem chance nessa disputa, não porque o produto seja pior, mas porque a arena é errada.",
      },
      { type: "h2", text: "Um site com SEO local compete contra muito menos gente" },
      {
        type: "p",
        html: "Agora troca a pergunta: em vez de disputar um termo genérico, um site pensado pro bairro e pro nicho do dono disputa algo como “clínica de estética na Barra da Tijuca” ou “eletricista em Bangu”. O grupo de concorrentes reais nessa busca é uma fração do primeiro grupo, geralmente só quem também atende ali perto. É muito mais fácil aparecer entre cinco negócios da região do que entre cinco mil do Brasil todo.",
      },
      {
        type: "quote",
        text: "Genérico compete com o país inteiro. Específico compete só com quem está no seu bairro e no seu nicho. É aí que dá pra ganhar.",
      },
      { type: "h2", text: "Especificidade não é só sobre ranquear, é sobre quem chega" },
      {
        type: "p",
        html: "Tem outra vantagem que passa despercebida: quem chega através de uma busca específica já vem mais qualificado. Uma pessoa que pesquisa “clínica de estética facial em Trindade” já sabe o que quer e onde está: é um contato muito mais próximo de fechar do que alguém que caiu numa página genérica vinda de uma busca ampla. Site local não traz só mais visita, traz visita que converte melhor.",
      },
      { type: "h2", text: "O que muda na prática entre os dois" },
      {
        type: "p",
        html: "A diferença não está em ter ou não ter um site bonito. Está em decisões concretas de conteúdo e estrutura:",
      },
      {
        type: "ul",
        items: [
          "<strong>Bairro e região no texto, não só no rodapé.</strong> Um site genérico cita a cidade uma vez, no endereço. Um site local menciona o bairro e a região de atendimento nos lugares certos, do jeito que a pessoa realmente pesquisa.",
          "<strong>Linguagem do nicho, não termo guarda-chuva.</strong> Uma clínica de estética, um eletricista e uma joalheria não competem pela mesma palavra-chave, mesmo que os três só peçam “um site”. Cada um precisa do vocabulário e da estrutura do próprio nicho.",
          "<strong>Ficha do Google Meu Negócio conectada ao site.</strong> Presença local de verdade junta as duas pontas: o site que o Google lê a fundo e a ficha que aparece no mapa. Uma sem a outra deixa buraco na busca.",
          "<strong>Prova social da região.</strong> Cliente do seu bairro confia mais em quem já atendeu gente do seu bairro. Isso também é um sinal de especificidade que o site genérico não tem como mostrar.",
        ],
      },
      { type: "h2", text: "Exemplos rápidos de como isso muda por nicho" },
      {
        type: "p",
        html: "Uma <strong>clínica de estética</strong> não compete só como “clínica de estética”, compete como clínica de estética do bairro dela, com os procedimentos específicos que oferece. Um <strong>eletricista</strong> ranqueia melhor quando o site fala da região que atende e dos serviços exatos (padrão de entrada, quadro elétrico, instalação residencial), não só “serviços elétricos”. Uma <strong>joalheria</strong> ganha buscas de quem procura peça específica na cidade dela, não peças genéricas concorrendo com lojas online do Brasil inteiro. São mundos diferentes, e cada um pede um site pensado pro próprio caso.",
      },
      { type: "h2", text: "Por que isso é diferente de “ter um site bom”" },
      {
        type: "p",
        html: "Já falamos aqui sobre <a href=\"/blog/por-que-meu-negocio-nao-aparece-no-google/\">os motivos de um negócio não aparecer no Google</a> e sobre <a href=\"/blog/quanto-custa-um-site-profissional/\">quanto custa um site profissional</a>. Este ponto é outro: mesmo um site tecnicamente bem feito, rápido e com SEO on-page correto, ainda perde pra um concorrente pior se esse concorrente for mais específico pro bairro e pro nicho da busca. Especificidade não substitui qualidade técnica, ela decide quem vence quando a qualidade técnica já está empatada.",
      },
      { type: "h2", text: "Como aplicar isso no seu negócio" },
      {
        type: "p",
        html: "Se você está criando um site do zero ou revisando um que já existe, comece perguntando: alguém de fora do meu bairro, lendo este texto, saberia que negócio é este e onde ele fica? Se a resposta for “não dá pra saber”, o site ainda está no modo genérico. Uma <a href=\"/criar-landing-page/\">landing page</a> ou um <a href=\"/site-institucional/\">site institucional</a> bem estruturados já nascem pensando nisso: bairro, região e nicho fazendo parte do texto, não só do endereço no rodapé.",
      },
      {
        type: "p",
        html: "Na EngeTech Reis a gente trabalha assim desde o início: cada site é desenhado pro nicho e pra região do cliente, sem template genérico e sem texto que serviria pra qualquer empresa do Brasil. Se quiser ver isso aplicado ao seu negócio, é só chamar no WhatsApp.",
      },
    ],
    faqs: [
      {
        q: "Um site local rankeia melhor que um site genérico?",
        a: "Sim, na maioria dos casos. Um site genérico compete pela atenção do Google contra qualquer negócio do Brasil que fala do mesmo assunto. Um site pensado pro bairro e pro nicho disputa um grupo muito menor, geralmente só quem também atende naquela região.",
      },
      {
        q: "Preciso citar meu bairro no site pra ranquear localmente?",
        a: "Sim. O bairro e a região de atendimento precisam aparecer no texto das páginas certas, não só uma vez no endereço do rodapé, do jeito que a pessoa realmente pesquisa.",
      },
      {
        q: "Site local substitui o Perfil da Empresa no Google?",
        a: "Não, os dois se complementam. O Perfil da Empresa (antigo Google Meu Negócio) faz você aparecer no mapa. O site é o que o Google lê a fundo pra entender do que se trata o seu negócio. Uma presença local completa junta as duas pontas.",
      },
      {
        q: "Essa lógica de especificidade vale pra qualquer nicho?",
        a: "Sim. Muda só o que entra no texto: uma clínica de estética fala do bairro e dos procedimentos que oferece, um eletricista fala da região e dos serviços exatos, uma joalheria fala das peças específicas da loja. A lógica de ser específico é a mesma pros três.",
      },
    ],
  },
  {
    slug: "template-pronto-ou-site-sob-medida",
    titleTag: "Template Pronto ou Site Personalizado?",
    metaDescription:
      "Template pronto ou site personalizado: qual vale mais a pena? Veja a diferença real, o custo escondido do template e como reconhecer cada um antes de fechar.",
    h1: "Template pronto ou site personalizado: qual vale mais a pena",
    excerpt:
      "O template é mais barato e mais rápido, e por isso mesmo tem armadilha. A diferença real pro seu negócio e como saber o que estão te vendendo.",
    keyword: "template pronto ou site personalizado",
    category: "Decisão",
    date: "2026-07-06",
    readingTime: "6 min",
    body: [
      {
        type: "p",
        html: "Quando você pede um orçamento de site, existe uma diferença enorme por trás do mesmo preço: o profissional pode entregar um template pronto (um tema comprado e adaptado) ou um site personalizado, também chamado de site sob medida (desenhado do zero pro seu negócio). Os dois “funcionam”, mas resolvem coisas diferentes, e o barato do template às vezes cobra a conta depois.",
      },
      { type: "h2", text: "O que é template pronto" },
      {
        type: "p",
        html: "Um template é um layout genérico, feito pra servir a milhares de negócios ao mesmo tempo. O profissional troca as cores, coloca seu logo e seus textos, e publica. É rápido e barato justamente porque o trabalho de design já foi feito uma vez e é revendido pra todo mundo. O problema aparece no que ele não resolve.",
      },
      { type: "h2", text: "O que é site personalizado (ou sob medida)" },
      {
        type: "p",
        html: "Um site personalizado é desenhado a partir do seu negócio: o nicho, o público, a região, o que te diferencia. Paleta, tipografia e estrutura são escolhidas pra aquele caso, não herdadas de um tema. Leva mais tempo e custa mais porque envolve criação de verdade, e é isso que faz o site ter a cara do seu negócio, não a cara de site pronto.",
      },
      { type: "h2", text: "O custo escondido do template" },
      {
        type: "p",
        html: "O template resolve o “ter um site”, mas cobra em outros lugares:",
      },
      {
        type: "ul",
        items: [
          "<strong>Cara de igual.</strong> Milhares de negócios usam o mesmo tema. O visitante sente que já viu aquilo, e isso derruba a credibilidade sem ele saber explicar por quê.",
          "<strong>Peso e lentidão.</strong> Temas genéricos carregam recursos que você não usa. Site pesado abre devagar, e o Google rebaixa página lenta.",
          "<strong>SEO limitado.</strong> Muito template vem com estrutura engessada, difícil de otimizar de verdade pra busca local.",
          "<strong>Amarra na plataforma.</strong> Vários templates prendem você num construtor pago mensal: parou de pagar, o site sai do ar.",
        ],
      },
      {
        type: "quote",
        text: "Template não é errado, é raso. Ele te coloca no ar, mas não te faz diferente de mais mil negócios que abriram o mesmo tema.",
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
        html: "Na EngeTech Reis, todo projeto é sob medida, nada de tema comprado. A gente estuda o negócio e desenha a identidade pra aquele caso, com <a href=\"/blog/por-que-meu-negocio-nao-aparece-no-google/\">SEO e velocidade</a> desde o início. Se quiser comparar com o que te ofereceram, o <a href=\"/blog/quanto-custa-um-site-profissional/\">artigo sobre preço</a> ajuda a enxergar onde está a diferença.",
      },
    ],
    faqs: [
      {
        q: "Template pronto é sempre mais barato que site personalizado?",
        a: "No orçamento inicial, sim, quase sempre. Mas o template cobra depois em outros lugares: cara de igual a milhares de outros sites, mais lentidão, SEO mais limitado e, em muitos casos, amarra num construtor pago mensal.",
      },
      {
        q: "Quando vale a pena usar um template pronto?",
        a: "Quando você só precisa de uma presença provisória, tem orçamento bem curto e não depende do site pra vender. Ele resolve o mínimo e é melhor do que não ter nada, mas não espere que ele te destaque da concorrência.",
      },
      {
        q: "Como sei se estão me vendendo um template disfarçado de projeto sob medida?",
        a: "Pergunte direto se o design é feito do zero pro seu negócio ou é um tema adaptado. Prazo de poucas horas, preço muito abaixo do mercado e portfólio onde todos os sites têm a mesma estrutura mudando só a cor são sinais de template.",
      },
      {
        q: "Site personalizado demora mais pra ficar pronto?",
        a: "Geralmente sim, porque envolve design e identidade criados do zero pro seu negócio, não um tema já pronto sendo adaptado. Em troca, o resultado tem a cara do seu negócio, não a cara de site genérico.",
      },
    ],
  },
  {
    slug: "so-instagram-nao-basta-negocio-precisa-de-site",
    titleTag: "Preciso de um Site se já Tenho Instagram?",
    metaDescription:
      "Preciso de um site se já tenho Instagram? Entenda por que o perfil não substitui um site próprio e o que você perde na busca do Google sem ter um.",
    h1: "Preciso de um site se já tenho Instagram?",
    excerpt:
      "O Instagram é aluguel: você constrói audiência num terreno que não é seu. Por que um site próprio protege o seu negócio e traz cliente que a rede não traz.",
    keyword: "preciso de um site se já tenho instagram",
    category: "Presença digital",
    date: "2026-07-06",
    readingTime: "5 min",
    body: [
      {
        type: "p",
        html: "“Preciso de um site se já tenho Instagram?” é a dúvida de quase todo negócio local que já tem perfil ativo e movimento nas redes. A resposta curta é sim, e não porque o Instagram seja ruim. Muito negócio vive 100% na rede e por um tempo parece suficiente. Mas depender só dela é construir a sua casa num terreno alugado: no dia em que o dono muda as regras, você perde o que levou anos pra montar. Um site próprio não substitui o Instagram, ele resolve o que a rede não resolve.",
      },
      { type: "h2", text: "1. O Instagram é aluguel, o site é seu" },
      {
        type: "p",
        html: "Seus seguidores, seu conteúdo, seu alcance: nada disso é seu de verdade. A plataforma muda o algoritmo, derruba o alcance orgânico, bloqueia ou suspende contas, e você não tem para onde correr. Um site é o único endereço digital que você controla de ponta a ponta. É a base; a rede social é o complemento.",
      },
      { type: "h2", text: "2. Quem procura no Google não te acha no Instagram" },
      {
        type: "p",
        html: "A pessoa que quer contratar agora não abre o Instagram pra pesquisar “eletricista perto de mim” ou “clínica de estética no meu bairro”. Ela pesquisa no Google. E o Google mal enxerga o que está dentro do Instagram, então você fica de fora dessa busca inteira, que é justamente onde está o cliente com intenção de compra.",
      },
      {
        type: "quote",
        text: "No Instagram você fala com quem já te segue. No Google você é encontrado por quem ainda não te conhece e já quer comprar.",
      },
      { type: "h2", text: "3. Rede social não passa a mesma credibilidade" },
      {
        type: "p",
        html: "Um perfil qualquer um cria em cinco minutos. Um site próprio, com domínio, identidade e informação organizada, passa uma seriedade que o perfil não passa, principalmente em serviço de ticket mais alto, onde o cliente pesquisa e desconfia antes de fechar. O site é o que separa “negócio de verdade” de “mais um perfil”.",
      },
      { type: "h2", text: "4. O site trabalha 24h, sem você postar" },
      {
        type: "p",
        html: "No Instagram, parou de postar, sumiu. O site continua aparecendo no Google e recebendo visita mesmo enquanto você atende, dorme ou tira férias. Ele não depende de você alimentar todo dia pra seguir trazendo contato. É o ativo que trabalha sozinho.",
      },
      { type: "h2", text: "O ideal é os dois juntos" },
      {
        type: "p",
        html: "Isso não é Instagram contra site. O melhor cenário é a rede atraindo e engajando, e o site sendo o destino que converte e que o Google encontra. Fazer um site pro seu negócio, mesmo já tendo Instagram ativo, não substitui o perfil, complementa ele. Dá pra começar simples: uma <a href=\"/criar-landing-page/\">landing page</a> já resolve a maioria dos casos e coloca você na busca. Se ficou na dúvida entre página única e site completo, veja <a href=\"/blog/landing-page-ou-site-institucional/\">landing page ou site institucional</a>, e quando quiser, é só chamar no WhatsApp.",
      },
    ],
    faqs: [
      {
        q: "Preciso fazer um site mesmo já tendo Instagram ativo?",
        a: "Sim, se você quer ser encontrado por quem ainda não te conhece. O Instagram funciona bem pra quem já te segue, mas quem pesquisa o serviço no Google não cai no seu perfil. O site cobre essa parte que a rede não alcança.",
      },
      {
        q: "O Google indexa o conteúdo do Instagram?",
        a: "Muito pouco. Quem pesquisa “eletricista perto de mim” ou “clínica de estética no meu bairro” no Google dificilmente encontra um perfil do Instagram nos primeiros resultados, encontra quem tem uma página própria que o Google consegue ler.",
      },
      {
        q: "Dá pra ter só Instagram e nenhum site?",
        a: "Dá, mas você fica de fora da busca de quem já quer comprar e ainda não sabe que você existe, que costuma ser o cliente com intenção de compra mais forte. E fica dependendo de uma plataforma que pode mudar as regras a qualquer momento.",
      },
      {
        q: "É melhor ter site ou continuar só no Instagram?",
        a: "Não é uma escolha entre os dois. O cenário ideal é a rede atraindo e engajando quem já te segue, e o site sendo o destino que converte e que o Google encontra pra quem ainda não te conhece.",
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
      "A diferença real entre os dois, quando cada um faz sentido pro seu momento e por que escolher errado custa dinheiro, de um jeito ou de outro.",
    keyword: "landing page ou site institucional",
    category: "Decisão",
    date: "2026-07-06",
    readingTime: "6 min",
    body: [
      {
        type: "p",
        html: "Na hora de fechar um site, quase todo mundo trava na mesma dúvida: preciso de uma landing page ou de um site institucional com várias páginas? Os dois têm preços diferentes e servem pra coisas diferentes, e escolher pelo motivo errado é o jeito mais comum de gastar demais ou de ficar aquém do que o negócio precisa. Vamos separar isso de forma prática.",
      },
      { type: "h2", text: "O que é cada um" },
      {
        type: "p",
        html: "Uma <strong>landing page</strong> é uma página única, com um único objetivo: levar o visitante a uma ação (chamar no WhatsApp, pedir orçamento, agendar). Tudo nela conduz pra esse destino, sem menu com dez caminhos pra distrair. É rápida de fazer, barata e altamente focada em conversão.",
      },
      {
        type: "p",
        html: "Um <strong>site institucional</strong> tem várias páginas: início, sobre, serviços, portfólio, contato, às vezes blog. Ele existe pra apresentar o negócio por completo, passar credibilidade e cobrir mais assuntos. É maior, custa mais e faz sentido quando há bastante coisa pra mostrar.",
      },
      { type: "h2", text: "Quando a landing page é o suficiente" },
      {
        type: "p",
        html: "Na maioria dos negócios locais de serviço, uma landing page bem feita resolve. Ela é ideal quando:",
      },
      {
        type: "ul",
        items: [
          "Você oferece um serviço principal e quer que a pessoa entre em contato: eletricista, esteticista, corretor, prestador em geral.",
          "Seu objetivo é gerar contato (lead), não explicar uma estrutura grande de empresa.",
          "Você vai rodar anúncio: uma página única e focada converte melhor o clique pago.",
          "Você está começando e quer presença profissional no Google sem gastar com o que ainda não vai usar.",
        ],
      },
      {
        type: "quote",
        text: "Página a mais que ninguém abre não passa credibilidade, só encarece o projeto e dilui o caminho até o contato.",
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
          "Precisa de um portfólio ou catálogo com muitos itens: obras, produtos, projetos.",
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
        html: "E tem uma boa notícia: começar por uma landing page não fecha portas. Dá pra iniciar focado na conversão e evoluir pra um site institucional quando o negócio pedir, sem jogar fora o que já foi feito.",
      },
      { type: "h2", text: "Como decidir em uma frase" },
      {
        type: "p",
        html: "Se o seu objetivo agora é <strong>fazer o cliente entrar em contato</strong>, comece por uma <a href=\"/criar-landing-page/\">landing page</a>. Se você precisa <strong>apresentar um negócio com várias frentes e construir autoridade</strong>, o <a href=\"/site-institucional/\">site institucional</a> é o caminho. Na dúvida entre os dois, a landing page quase sempre é o começo mais inteligente, e mais barato.",
      },
      {
        type: "p",
        html: "Quer ver quanto fica cada opção pro seu caso? O <a href=\"/blog/quanto-custa-um-site-profissional/\">artigo sobre preço de site</a> abre a faixa real, e é só chamar no WhatsApp que a gente te ajuda a escolher sem empurrar o que você não precisa.",
      },
    ],
    faqs: [
      {
        q: "Uma landing page é mais barata que um site institucional?",
        a: "Sim. A landing page é uma página única, mais rápida de produzir, então custa menos. O site institucional tem várias páginas e profundidade, e por isso custa mais.",
      },
      {
        q: "Dá pra começar com landing page e depois migrar pra um site institucional?",
        a: "Sim. Começar por uma landing page não fecha portas: dá pra iniciar focado na conversão e evoluir pra um site institucional quando o negócio pedir, sem jogar fora o que já foi feito.",
      },
      {
        q: "Landing page aparece no Google mesmo sendo uma página só?",
        a: "Sim, desde que seja construída com boas práticas de SEO técnico: títulos, estrutura, velocidade e dados estruturados. Uma página única bem feita é indexada e encontrada normalmente por quem busca o serviço.",
      },
      {
        q: "Quando o site institucional vale mais a pena que a landing page?",
        a: "Quando você tem vários serviços distintos que merecem página própria, precisa de um portfólio ou catálogo com muitos itens, sua venda depende de contexto (história, equipe, certificações) ou você vai manter um blog pra atrair busca orgânica.",
      },
    ],
  },
  {
    slug: "por-que-meu-negocio-nao-aparece-no-google",
    titleTag: "Por que minha Empresa não Aparece no Google",
    metaDescription:
      "Sua empresa ou seu site não aparece no Google? Veja os motivos mais comuns e o passo a passo pra ser encontrado por quem procura seu serviço na região.",
    h1: "Por que minha empresa não aparece no Google (e como resolver)",
    excerpt:
      "Os motivos que fazem uma empresa local sumir da busca: só ter Instagram, ter site mas não aparecer, ficha sem cuidado. O que fazer, em ordem, pra aparecer.",
    keyword: "minha empresa não aparece no google",
    category: "Presença no Google",
    date: "2026-07-06",
    readingTime: "7 min",
    body: [
      {
        type: "p",
        html: "Você pesquisa o nome do seu serviço no Google, some pra segunda página e não se acha em lugar nenhum. O concorrente da esquina está lá em cima. Não é azar nem sorte de algoritmo, é a soma de alguns fatores que dá pra corrigir um a um. Aqui estão os motivos mais comuns de uma empresa local não aparecer na busca, e o que fazer em cada caso.",
      },
      { type: "h2", text: "1. Você só tem Instagram (e o Google mal enxerga isso)" },
      {
        type: "p",
        html: "O Instagram é ótimo pra quem já te segue, mas ele é uma caixa fechada: o Google indexa muito pouco do que acontece lá dentro. Quem pesquisa “eletricista no meu bairro” ou “clínica de estética perto de mim” não cai no seu perfil, cai em quem tem uma página própria que o Google consegue ler. Sem um endereço seu na web, sua empresa fica fora dessa busca inteira.",
      },
      {
        type: "p",
        html: "A solução é ter um site ou uma <a href=\"/criar-landing-page/\">landing page</a> própria: um lugar que o Google lê, entende do que se trata e mostra pra quem procura. O Instagram continua sendo seu, só deixa de ser sua única porta de entrada.",
      },
      { type: "h2", text: "2. Seu site existe, mas a empresa não aparece mesmo assim" },
      {
        type: "p",
        html: "Ter site não é o mesmo que aparecer no Google. É a dúvida mais comum de quem já investiu numa página e mesmo assim não se acha: “meu site está no ar, por que ele não aparece?”. Muita página está publicada mas foi montada sem a base técnica que a busca precisa: títulos e descrições vagos, nenhum dado estruturado dizendo que você é uma empresa local, carregamento lento. O Google até encontra a página, mas não entende o suficiente sobre ela pra te colocar na frente.",
      },
      {
        type: "p",
        html: "Isso é o que se chama de SEO on-page, e é justamente o que separa um site “no ar” de um site que trabalha por você. Se o seu foi feito num construtor genérico ou por quem não cuidou disso, provavelmente é aqui que ele está perdendo.",
      },
      { type: "h2", text: "3. Sua ficha do Google Meu Negócio está vazia ou errada" },
      {
        type: "p",
        html: "Pra busca local, o Perfil da Empresa no Google (o antigo Google Meu Negócio) é decisivo: é o que faz você aparecer no mapa e no bloco de resultados com telefone e avaliações. Muita gente nem criou a ficha, ou criou e deixou sem categoria, sem horário, sem fotos e sem endereço certo. Ficha incompleta é motivo direto de não aparecer.",
      },
      {
        type: "ul",
        items: [
          "Reivindique e verifique sua ficha (é grátis, no próprio Google).",
          "Preencha categoria certa, endereço, horário, telefone e área de atendimento.",
          "Adicione fotos reais e mantenha as informações sempre atualizadas.",
          "Peça avaliação aos clientes satisfeitos, é peso grande no ranking local.",
        ],
      },
      { type: "h2", text: "4. Ninguém te procura pelo nome, te procuram pelo serviço" },
      {
        type: "p",
        html: "Se sua empresa só aparece quando alguém digita o nome exato dela, você depende de quem já te conhece. O cliente novo não sabe seu nome: ele digita o problema (“conserto de chuveiro”, “harmonização facial”, “reforma de apartamento”) mais o bairro. Se o seu site não fala a língua dessas buscas, ele não entra na disputa.",
      },
      {
        type: "quote",
        text: "Quem te acha pelo nome já é seu cliente. Quem você quer alcançar é quem digita o serviço e o bairro, e ainda não sabe que sua empresa existe.",
      },
      {
        type: "p",
        html: "A saída é ter conteúdo organizado em torno do que as pessoas de fato pesquisam: páginas por serviço, com o termo e a região certos. Foi por isso que a gente estruturou as páginas de <a href=\"/criar-landing-page/\">landing page</a> e <a href=\"/site-institucional/\">site institucional</a> por intenção de busca, não só pelo nome da marca.",
      },
      { type: "h2", text: "5. Seu site é lento ou quebra no celular" },
      {
        type: "p",
        html: "A maioria das buscas locais acontece no celular, e o Google prioriza páginas rápidas e que funcionam bem na tela pequena. Um site pesado, que demora a abrir ou embaralha no mobile, é rebaixado, e o visitante desiste antes mesmo de ver o que você oferece. Velocidade e versão mobile não são luxo, são requisito pra ranquear.",
      },
      { type: "h2", text: "Por onde começar" },
      {
        type: "p",
        html: "Se fosse pra colocar em ordem: primeiro tenha um endereço próprio na web que o Google consiga ler, depois arrume a ficha do Google Meu Negócio, e então cuide da base técnica (SEO on-page, velocidade, mobile) e do conteúdo por serviço e região. Não precisa ser tudo de uma vez, mas enquanto o primeiro passo não existe, os outros não têm onde se apoiar.",
      },
      {
        type: "p",
        html: "É exatamente esse pacote que a gente entrega na EngeTech Reis: sites feitos do zero pra empresas locais no Rio, já com <a href=\"/blog/site-para-negocio-local-rio-de-janeiro/\">SEO local</a> e velocidade desde o primeiro dia. Se quiser entender quanto isso custa, o <a href=\"/blog/quanto-custa-um-site-profissional/\">artigo sobre preço de site</a> abre a faixa real. Se preferir, é só chamar no WhatsApp que a gente olha o seu caso.",
      },
    ],
    faqs: [
      {
        q: "Quanto tempo demora pra empresa aparecer no Google?",
        a: "Depende do ponto de partida. Um Perfil da Empresa novo e completo pode aparecer no mapa em poucos dias. Um site novo costuma levar de algumas semanas a poucos meses pra ganhar posição na busca orgânica, e esse prazo encurta quando o site já nasce com SEO on-page cuidado desde o início.",
      },
      {
        q: "Meu site está no ar, por que ele não aparece no Google mesmo assim?",
        a: "Estar no ar e estar indexado e bem posicionado são coisas diferentes. As causas mais comuns são título e descrição de página genéricos, ausência de dados estruturados, carregamento lento e conteúdo que não usa os termos que as pessoas realmente pesquisam.",
      },
      {
        q: "Como eu verifico se minha empresa está indexada no Google?",
        a: "Pesquise no Google por “site:” seguido do seu domínio, por exemplo site:seudominio.com.br. Se nenhuma página aparecer, o site ainda não foi indexado. O Google Search Console também mostra isso com mais detalhe, página por página.",
      },
      {
        q: "Ter perfil no Google Meu Negócio substitui ter um site?",
        a: "Não. O Perfil da Empresa ajuda na busca local e no mapa, mas é limitado ao que o próprio Google permite mostrar. Um site é o único lugar onde você controla o conteúdo, aparece também na busca orgânica geral e consegue captar clientes fora do raio imediato do mapa.",
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
        html: "“Quanto custa um site?” é a primeira pergunta de quase todo dono de negócio, e a resposta honesta é: depende do que você chama de site. Um perfil de link na bio é uma coisa. Uma página feita pra aparecer no Google e trazer cliente é outra. Neste artigo a gente abre a faixa de preço real praticada no Brasil em 2026 e explica, sem enrolação, o que faz esse número subir ou descer.",
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
        html: "Repare que a mesma coisa (“um site”) tem uma variação enorme de preço. Isso não é falta de padrão do mercado, é porque por baixo do mesmo nome existem entregas completamente diferentes.",
      },
      { type: "h2", text: "O que realmente muda o preço" },
      {
        type: "p",
        html: "Cinco fatores explicam quase toda a diferença entre um orçamento de R$500 e um de R$5.000:",
      },
      {
        type: "ul",
        items: [
          "<strong>Template ou sob medida.</strong> Um tema comprado e trocado de cor é rápido e barato, e tem cara de site pronto. Um projeto desenhado do zero pro seu negócio custa mais porque envolve design próprio, não revenda.",
          "<strong>SEO de verdade ou só “no ar”.</strong> Colocar um site online é fácil. Construí-lo pra aparecer no Google (títulos certos, dados estruturados, velocidade, versão mobile) é trabalho técnico que nem todo orçamento inclui.",
          "<strong>Número de páginas e integrações.</strong> Uma landing page única é diferente de um site com serviços, blog, formulário e <a href=\"/blog/chatbot-para-site-como-funciona/\">chatbot</a>. Cada peça a mais é tempo a mais.",
          "<strong>Quem faz.</strong> Freelancer iniciante, agência boutique ou agência grande cobram valores bem diferentes, e entregam níveis de acompanhamento diferentes.",
          "<strong>O que acontece depois.</strong> Site é coisa viva: precisa de hospedagem, ajustes e suporte. Um preço muito baixo às vezes só empurra esses custos pra frente.",
        ],
      },
      {
        type: "quote",
        text: "Site barato que não aparece no Google não é economia, é dinheiro parado. O objetivo não é gastar pouco, é gastar no que traz cliente.",
      },
      { type: "h2", text: "Por que o site mais barato costuma sair mais caro" },
      {
        type: "p",
        html: "O construtor gratuito parece imbatível até você somar o tempo que gasta montando, os recursos travados atrás do plano pago e o fato de que, no fim, a página tem a mesma cara de milhares de outras. Um site que não passa credibilidade e não é encontrado na busca não gera orçamento, e um site que não gera orçamento, por mais barato que seja, custou caro.",
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
        html: "Se as respostas forem sólidas, um valor a partir de algumas centenas de reais é justo e se paga rápido. Se forem vagas, provavelmente você está comparando um projeto de verdade com uma revenda de template, e aí o preço mais baixo é justamente o sinal de alerta.",
      },
      { type: "h2", text: "E na EngeTech Reis?" },
      {
        type: "p",
        html: "A gente cria sites e landing pages do zero pra negócios locais no Rio de Janeiro: identidade própria (nada de template), base de <a href=\"/blog/site-para-negocio-local-rio-de-janeiro/\">SEO local</a> feita desde o primeiro dia e um caminho único até o seu WhatsApp. Se quiser saber quanto ficaria o seu caso, é só chamar. A primeira conversa é sem compromisso e a gente te passa a faixa antes de qualquer coisa.",
      },
    ],
    faqs: [
      {
        q: "Quanto custa um site profissional em 2026?",
        a: "No Brasil, uma landing page sob medida parte de R$497, podendo passar de R$3.000 dependendo do escopo. Um site institucional com várias páginas parte de R$997. A manutenção mensal (hospedagem, ajustes, suporte) costuma ficar entre R$100 e R$600, quando existe.",
      },
      {
        q: "Por que sites parecidos têm preços tão diferentes?",
        a: "Cinco fatores explicam a diferença: se é template ou sob medida, se tem SEO de verdade ou só está “no ar”, o número de páginas e integrações, quem faz o projeto e o que está incluso depois de publicado.",
      },
      {
        q: "Vale a pena pagar mais caro por um site sob medida?",
        a: "Quando o objetivo é gerar cliente, sim. Um site que não passa credibilidade e não é encontrado na busca não gera orçamento, e um site que não gera orçamento, por mais barato que seja, custou caro. Um único cliente novo fechado pelo site costuma pagar o projeto inteiro.",
      },
      {
        q: "Quanto custa um site na EngeTech Reis?",
        a: "O pacote de landing page com chatbot sai por R$497 de setup mais R$497 por mês. O site institucional parte de R$997 de desenvolvimento, com manutenção a partir de R$497 por mês. O valor final depende do escopo, por isso a primeira conversa no WhatsApp é sem compromisso.",
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

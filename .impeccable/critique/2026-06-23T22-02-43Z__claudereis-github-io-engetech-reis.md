---
target: "https://claudereis.github.io/Engetech-Reis/"
total_score: 33
p0_count: 0
p1_count: 3
timestamp: 2026-06-23T22-02-43Z
slug: claudereis-github-io-engetech-reis
---
# Critique — EngeTech Reis LP (https://claudereis.github.io/Engetech-Reis/)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Bom feedback interativo (header on-scroll, accordions, sticky CTA); sem ops async pra comunicar |
| 2 | Match System / Real World | 4 | Copy plana em PT-BR, fala a língua do público ("nutricionista em Botafogo", DM às 23h) |
| 3 | User Control and Freedom | 3 | Accordions, skip link, links externos em nova aba; nada prende o usuário |
| 4 | Consistency and Standards | 4 | Design system muito consistente; cores de acento por seção quase arbitrárias |
| 5 | Error Prevention | 3 | n/a — sem formulários; CTAs são links wa.me estáticos |
| 6 | Recognition Rather Than Recall | 4 | Tudo visível, sticky CTA mantém a oferta à vista, zero carga de memória |
| 7 | Flexibility and Efficiency | 3 | Caminho único (scroll → WhatsApp); múltiplos CTAs + barra fixa dão acesso eficiente |
| 8 | Aesthetic and Minimalist Design | 2 | Polido, mas com cluster de tells decorativos (gradient text, eyebrow+número toda seção, ícone-em-caixa) |
| 9 | Error Recovery | 3 | n/a — sem erros; degradação graciosa (no-JS, reduced-motion) é um plus |
| 10 | Help and Documentation | 4 | FAQ + objeções em accordion = ajuda task-focused; WhatsApp é canal direto |
| **Total** | | **33/40** | **Good** |

## Anti-Patterns Verdict

**LLM assessment:** Não grita "IA fez isso" à primeira vista — a identidade dark/HUD, o mock de DM+Google no herói e o bento são distintivos e o acabamento é alto. Mas numa leitura atenta há um cluster dos tells canônicos de gramática-IA: **gradient text** em palavras da headline + preços + logo (banido pelo impeccable), **eyebrow mono caixa-alta tracked acima de toda seção**, **marcadores numerados 01–06** (adicionados no último passe), **ícone-em-caixa-arredondada repetido** em cada seção de cards, e o **bloco de stats hero-metric** (número grande + label + gradiente). Cada um é defensável como identidade da marca; somados, são o andaime de IA.

**Deterministic scan (detect.mjs sobre out/index.html — o HTML real publicado):** 2 achados.
- `numbered-section-markers` (advisory): sequência 01, 02, 03, 04, 05, 06.
- `em-dash-overuse` (warning): 19 travessões no corpo.
O scan NÃO pegou o gradient text nem os eyebrows (ficam em classes CSS, invisíveis ao scan estático) — esses vêm da revisão de design.

**Visual overlays:** indisponível nesta sessão (a automação de browser/Chrome MCP desconectou). Sem overlay visível no navegador; a evidência visual é o detector no HTML publicado + os screenshots desta sessão.

## Overall Impression

É uma LP genuinamente boa e bem-acabada — usabilidade forte (33/40). O problema não é qualidade técnica; é **distintividade**. A página acumulou os padrões exatos que o impeccable existe pra pegar, e vários deles entraram no passe de "polish" anterior (os números de seção principalmente). A maior oportunidade: cortar os tells decorativos e deixar UM gesto de marca forte em vez de espalhar o gradiente por tudo.

## What's Working

1. **O visual do herói (mock de DM respondida + ranking no Google).** Mostra em vez de afirmar; dramatiza exatamente a proposta de valor. Distintivo de verdade, nada de template.
2. **Copy honesta e na língua do público.** "Alguém manda mensagem às 23h", "nutricionista em Botafogo" — match perfeito com o mundo real do dono de negócio local.
3. **Acabamento de acessibilidade acima da média de LP.** Skip link, reduced-motion, contraste ~9:1, alvos 44px, fallback sem JS.

## Priority Issues

- **[P1] Gradient text espalhado (banido pelo impeccable).** Em palavras da headline, todos os acentos de seção, preços e logo. `background-clip:text` + gradiente é o tell de IA mais reconhecível; mesmo sendo identidade da marca, está diluído demais. **Fix:** reservar o gradiente cyan→violet pra UM momento (herói OU logo); emphasis da headline, preços e acentos de seção em cor sólida (branco ou um acento único). **Comando:** /impeccable quieter.
- **[P1] Eyebrow + número em toda seção (gramática-IA).** "01 / O PROBLEMA" … "06 / …" nas 6 seções. Não são uma sequência — os números não carregam ordem real. Eyebrow mono caixa-alta tracked em cada heading é o andaime saturado. **Fix:** remover os números; no máximo um kicker nomeado em 1-2 seções-chave, ou variar a cadência de entrada das seções. **Comando:** /impeccable typeset.
- **[P1] Depoimentos placeholder estão NO AR.** O site público mostra "Nome do Cliente / Segmento / 'Resultado genérico de placeholder'". Numa página de conversão ao vivo, isso derruba credibilidade na hora. **Fix:** trocar por depoimentos reais ou remover a seção até ter casos reais. **Comando:** conteúdo (não-design) — substituir em components/SocialProof.jsx.
- **[P2] Ícone-em-caixa repetido + bloco hero-metric.** Ícone arredondado em caixa em PainPoints/Solution/Benefits ("screams template") e o bloco de stats número-grande+label+gradiente (clichê SaaS). **Fix:** variar — seções sem ícone, ícones inline, e reformular os stats num formato menos templated. **Comando:** /impeccable layout.
- **[P2] 14 seções com o mesmo ritmo.** eyebrow→heading→grid-de-cards repetido conta a mesma história estrutural 14 vezes; custo de resistência no thumb-scroll mobile. **Fix:** fundir/cortar seções fracas (Benefícios dentro de Solução; Garantia+Urgência juntas) e variar 2-3 layouts. **Comando:** /impeccable distill.

## Persona Red Flags

**Jordan (primeira vez):** No geral ok — primeira ação clara, copy didática. Mas as cores de acento rotativas + números "01/02" adicionam ruído sem significado; pode achar que "01/02" são passos que precisa seguir em ordem.

**Casey (mobile distraído):** Forte — CTA fixo na thumb zone, alvos 44px, mobile-first. Ressalva: o mock do herói empurra o primeiro CTA pra baixo no celular (mais scroll antes do valor aterrissar), e 14 seções é um thumb-scroll longo.

**Riley (stress tester):** Links wa.me estáticos = robustos, sem forms pra quebrar. Mas bate de frente com os **depoimentos placeholder visíveis** — qualquer visitante (não só um tester) vê texto de placeholder no site ao vivo.

## Minor Observations

- Logo (wordmark) também usa gradient text — reforça o tell.
- Grain overlay + vários glow-blobs: sutis, ok, mas somam à carga decorativa.
- Stats "0,8s pra responder" é honesto, mas é o padrão hero-metric.

## Questions to Consider

- E se SÓ uma coisa na página usasse o gradiente — e todo o resto fosse branco/cyan sólido e confiante? A marca ficaria mais premium ou menos?
- Os números de seção dizem algo verdadeiro? Se não, pra que servem?
- Converteria melhor com 8 seções em vez de 14?

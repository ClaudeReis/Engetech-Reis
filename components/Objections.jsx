import Accordion from "./Accordion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const OBJECTIONS = [
  {
    q: "“É caro!”",
    a: "R$350 de setup + R$200/mês dá menos de R$7 por dia. É menos do que um impulsionamento no Instagram que some em 3 dias. Aqui você tem ativo permanente trabalhando por você todo mês.",
  },
  {
    q: "“Não preciso de site. Meu Instagram resolve.”",
    a: "Instagram é ótimo pra relacionamento. Mas quando alguém pesquisa 'nutricionista em Botafogo' ou 'salão de beleza perto de mim' no Google, o Instagram não aparece. Site aparece. Você precisa dos dois.",
  },
  {
    q: "“Eu dou conta das mensagens no Instagram!”",
    a: "Por enquanto, sim. Mas e quando você estiver em atendimento? Ou dormindo? Ou de folga? O chatbot não substitui você — ele garante que nenhum lead fique sem resposta enquanto você não pode responder.",
  },
];

export default function Objections() {
  return (
    <section className="section-pad section-tint">
      <div className="section-wrap">
        <SectionHeading title="O que você provavelmente está pensando agora" />
        <Reveal delay={120}>
          <div className="mt-10 max-w-3xl">
            <Accordion items={OBJECTIONS} defaultOpen={0} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

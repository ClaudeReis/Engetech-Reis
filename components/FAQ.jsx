import Accordion from "./Accordion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "Quanto tempo leva pra ficar pronto?",
    a: "A LP fica pronta em até 7 dias úteis após o briefing. O chatbot, em até 5 dias úteis. Você acompanha tudo.",
  },
  {
    q: "Funciona pra qualquer tipo de negócio?",
    a: "Sim. Comércio local, clínica, salão, personal trainer, advogado, nutricionista — se você atende cliente, você precisa aparecer e responder rápido.",
  },
  {
    q: "Preciso entender de tecnologia pra usar?",
    a: "Não. Você nos passa as informações do seu negócio e a gente cuida do resto. Simples assim.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Você tem 7 dias após a entrega pra nos sinalizar. Sem burocracia, sem pressão.",
  },
  {
    q: "Como funciona o suporte mensal?",
    a: "Por R$200/mês mantemos o chatbot ativo, ajustamos fluxos e você tem canal direto pra tirar dúvidas.",
  },
  {
    q: "Como pago?",
    a: "Pix ou cartão. O setup é cobrado na aprovação do projeto. A mensalidade começa no mês seguinte à entrega.",
  },
  {
    q: "Qual a diferença entre LP e site completo?",
    a: "A Landing Page é uma página única, focada em converter — ideal pra começar rápido e com investimento baixo. O site institucional tem mais páginas e mais profundidade — investimento varia de R$800 a R$10.000 conforme a complexidade do projeto.",
  },
  {
    q: "Por que o site não tem preço fixo?",
    a: "Porque cada negócio precisa de algo diferente. Número de páginas, integrações e nível de personalização mudam o investimento. Por isso fazemos um orçamento sob consulta — sem custo escondido.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-pad section-tint">
      <div className="section-wrap">
        <SectionHeading title="Ainda com dúvida? A gente responde." />
        <Reveal delay={120}>
          <div className="mt-10 max-w-3xl">
            <Accordion items={FAQS} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

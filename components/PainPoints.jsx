import { Search, MoonStar, Network, MessagesSquare, Wallet } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PAINS = [
  {
    icon: Search,
    text: "Cliente pesquisa seu serviço no Google — e encontra o concorrente.",
  },
  {
    icon: MoonStar,
    text: "Alguém manda mensagem no Instagram às 23h e some antes de você responder.",
  },
  {
    icon: Network,
    text: "Você fica refém do algoritmo pra aparecer pra novos clientes.",
  },
  {
    icon: MessagesSquare,
    text: "Passa horas respondendo sempre as mesmas perguntas no direct.",
  },
  {
    icon: Wallet,
    text: "Sabe que precisa de um site mas acha que vai ser caro, demorado ou complicado.",
  },
];

export default function PainPoints() {
  return (
    <section className="section-pad">
      <div className="section-wrap">
        <SectionHeading
          title="Você já se pegou nessas situações?"
          subtitle="Você trabalha duro e atende bem. Mas na hora em que o cliente procura, seu negócio não aparece — e o lead vai embora."
        />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {PAINS.map(({ icon: Icon, text }, i) => (
            <Reveal as="li" key={text} delay={i * 70}>
              <div className="card-base accent-top group flex h-full items-start gap-4 p-5 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-carbon/70 active:scale-[0.99]">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan ring-1 ring-inset ring-brand-cyan/25 transition-shadow group-hover:shadow-glow">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <p className="text-pretty leading-relaxed text-ink-muted">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Ponte pra solução — fecha a dor com a promessa (essência da antiga ValueProp) */}
        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            A EngeTech Reis resolve exatamente isso:{" "}
            <span className="text-ink">presença que aparece onde a busca acontece</span> e{" "}
            <span className="text-ink">automação que atende na hora</span> — sem
            você precisar estar online o tempo todo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

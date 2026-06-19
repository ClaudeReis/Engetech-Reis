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
          number="01"
          accent="cyan"
          eyebrow="o problema"
          title="Você já se pegou nessas situações?"
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
      </div>
    </section>
  );
}

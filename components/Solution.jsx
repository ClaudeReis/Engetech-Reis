import { Globe, Bot, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SOLUTIONS = [
  {
    icon: Globe,
    tag: "Landing Page",
    title: "Landing Page profissional",
    text: "Uma página otimizada que aparece no Google, passa credibilidade e transforma visitante em contato ou venda. Sem depender de postagem, stories ou alcance orgânico.",
    points: ["Aparece no Google", "Passa credibilidade", "Converte visitante em contato"],
  },
  {
    icon: Bot,
    tag: "Chatbot",
    title: "Chatbot para Instagram",
    text: "Automação inteligente que responde dúvidas frequentes, qualifica leads e direciona pro WhatsApp ou agenda automaticamente. Seu Instagram vira um time de atendimento 24h.",
    points: ["Responde na hora", "Qualifica leads", "Direciona pro WhatsApp/agenda"],
  },
];

export default function Solution() {
  return (
    <section className="section-pad section-tint">
      <div className="section-wrap">
        <SectionHeading
          number="02"
          accent="blue"
          eyebrow="a solução"
          title="Duas peças que trabalham juntas pelo seu negócio"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SOLUTIONS.map(({ icon: Icon, tag, title, text, points }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="card-base accent-top group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-glow active:scale-[0.99] sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient-soft text-brand-cyan ring-1 ring-inset ring-brand-cyan/30 transition-shadow group-hover:shadow-glow">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                    {tag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-pretty leading-relaxed text-ink-muted">
                  {text}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-edge pt-5">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-ink">
                      <Check size={16} className="shrink-0 text-brand-cyan" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

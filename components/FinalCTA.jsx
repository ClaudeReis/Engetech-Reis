import { ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden section-pad">
      {/* glows decorativos */}
      <div
        aria-hidden="true"
        className="glow-blob absolute -bottom-20 left-1/2 h-72 w-80 -translate-x-1/2 rounded-full bg-brand-violet/40"
      />
      <div className="section-wrap relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Resolva isso <span className="text-gradient">hoje</span>.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-ink-muted">
              Você pode continuar perdendo lead por falta de presença ou por
              demora no atendimento. Ou pode resolver isso hoje, com investimento
              menor do que você imagina, e ter seu negócio aparecendo e
              respondendo enquanto você foca no que faz de melhor.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <CTAButton
                href={waLink(WA_MESSAGES.final)}
                track="cta_final"
                pulse
                ariaLabel="Quero começar agora — falar com a EngeTech Reis no WhatsApp"
                className="w-full sm:w-auto"
              >
                Quero começar agora — falar com a EngeTech Reis
                <ArrowRight size={18} aria-hidden="true" />
              </CTAButton>
              <p className="font-mono text-xs text-ink-muted">
                Resposta em até 24h • Sem compromisso na primeira conversa
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

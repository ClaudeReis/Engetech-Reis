import { ArrowRight, Clock, ShieldCheck, Zap } from "lucide-react";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import HeroVisual from "./HeroVisual";
import { waLink, WA_MESSAGES } from "@/lib/config";

/**
 * Hero / Headline.
 * Headline pode ser sobrescrita via prop (default = Variação A).
 */
export default function Hero({
  headline = (
    <>
      Seu negócio <span className="text-gradient">some</span> quando o cliente
      pesquisa. E quando ele manda mensagem, você já{" "}
      <span className="text-gradient">perdeu a venda</span>.
    </>
  ),
}) {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      {/* Textura HUD/grid de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-hud-grid bg-[size:44px_44px] opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />
      {/* Glows decorativos */}
      <div
        aria-hidden="true"
        className="glow-blob absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-cyan/40"
      />
      <div
        aria-hidden="true"
        className="glow-blob absolute top-20 -right-20 h-64 w-64 rounded-full bg-brand-violet/40"
      />

      <div className="section-wrap relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
        <Reveal>
          <p className="eyebrow mb-5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-glow" />
            Agência de engenharia digital • Rio de Janeiro
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="max-w-3xl text-balance text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            {headline}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            A EngeTech Reis transforma negócios locais em negócios que{" "}
            <span className="text-ink">aparecem, respondem e vendem</span> — sem
            depender só das redes sociais.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-col items-start gap-3">
            <CTAButton
              href={waLink(WA_MESSAGES.hero)}
              track="hero_cta_principal"
              pulse
              ariaLabel="Quero minha presença digital agora — abrir WhatsApp"
              className="w-full sm:w-auto"
            >
              Quero minha presença digital agora
              <ArrowRight size={18} aria-hidden="true" />
            </CTAButton>

            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={13} aria-hidden="true" /> Sem contrato longo
              </span>
              <span aria-hidden="true" className="text-edge">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Zap size={13} aria-hidden="true" /> Sem enrolação
              </span>
              <span aria-hidden="true" className="text-edge">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} aria-hidden="true" /> Resposta em até 24h
              </span>
            </p>
          </div>
        </Reveal>
        </div>

        {/* Coluna visual — dramatiza a proposta. Visível também no mobile
            (a section tem overflow-hidden, então o card flutuante não gera
            scroll horizontal). */}
        <Reveal delay={320} className="mt-2 lg:mt-0">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

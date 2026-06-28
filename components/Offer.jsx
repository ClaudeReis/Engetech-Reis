import { Check, ArrowRight, Sparkles } from "lucide-react";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/config";

const SETUP_ITEMS = [
  { label: "Landing Page profissional otimizada", value: "R$ 600" },
  { label: "Chatbot Instagram configurado", value: "R$ 500" },
  { label: "Integração LP + WhatsApp", value: "R$ 150" },
];

const MONTHLY_ITEMS = [
  { label: "Chatbot ativo e atualizado", value: "R$ 350/mês" },
  { label: "Hospedagem + 1 atualização de conteúdo/mês da LP", value: "R$ 150/mês" },
];

export default function Offer() {
  return (
    <section id="oferta" className="section-pad">
      <div className="section-wrap">
        <Reveal>
          <div className="gradient-border shadow-glow">
            <div className="relative rounded-2xl bg-carbon p-6 sm:p-8 lg:p-10">
              {/* Cabeçalho — span total */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-brand-cyan">
                <Sparkles size={12} aria-hidden="true" />
                Oferta promocional de lançamento
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Pacote{" "}
                <span className="text-brand-cyan">Presença Digital Completa</span>
              </h2>

              {/* Grid: detalhes (esq) + caixa de decisão (dir) */}
              <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Coluna esquerda — o que está incluído */}
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                    O que está incluído
                  </p>
                  <ul className="mt-4 space-y-3">
                    {SETUP_ITEMS.map(({ label, value }) => (
                      <li key={label} className="flex items-start justify-between gap-4">
                        <span className="flex items-start gap-2.5 text-sm text-ink sm:text-base">
                          <Check size={18} className="mt-0.5 shrink-0 text-brand-cyan" aria-hidden="true" />
                          {label}
                        </span>
                        <span className="shrink-0 font-mono text-sm text-ink-muted line-through decoration-edge">
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Recorrência */}
                  <div className="mt-6 rounded-xl border border-edge bg-obsidian/60 p-5">
                    <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                      Manutenção mensal
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {MONTHLY_ITEMS.map(({ label, value }) => (
                        <li key={label} className="flex items-start justify-between gap-3 text-sm">
                          <span className="flex items-start gap-2 text-ink">
                            <Check size={15} className="mt-0.5 shrink-0 text-brand-violet" aria-hidden="true" />
                            {label}
                          </span>
                          <span className="shrink-0 font-mono text-ink-muted">{value}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="my-3 h-px bg-edge" />
                    <p className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-ink">Total recorrência</span>
                      <span className="font-mono font-semibold text-brand-cyan">R$ 500/mês</span>
                    </p>
                  </div>
                </div>

                {/* Coluna direita — preço + ação */}
                <div className="flex flex-col justify-center rounded-2xl border border-edge bg-obsidian/40 p-6 sm:p-8">
                  <p className="font-mono text-sm text-ink-muted">
                    Valor total estimado:{" "}
                    <span className="line-through decoration-edge">R$ 1.250</span>
                  </p>
                  <p className="mt-2 flex items-baseline gap-2">
                    <span className="text-sm text-ink-muted">Hoje por</span>
                    <span className="font-heading text-5xl font-bold text-brand-cyan sm:text-6xl">
                      R$ 500
                    </span>
                  </p>
                  <p className="mt-1 font-mono text-xs text-ink-muted">
                    setup único · + R$ 500/mês de manutenção
                  </p>

                  <CTAButton
                    href={waLink(WA_MESSAGES.offer)}
                    track="oferta_principal"
                    ariaLabel="Quero começar agora — abrir WhatsApp"
                    className="mt-7 w-full"
                  >
                    Quero começar agora
                    <ArrowRight size={18} aria-hidden="true" />
                  </CTAButton>
                  <p className="mt-4 text-center font-mono text-[11px] text-ink-muted">
                    Contrato mínimo de 6 meses · Garantia de 7 dias
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

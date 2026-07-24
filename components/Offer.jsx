import { ArrowRight, Flame } from "lucide-react";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import { waLink, WA_MESSAGES, PRICING, PROMO_SLOTS } from "@/lib/config";

const SETUP_ITEMS = PRICING.setupItems;
const MONTHLY_ITEMS = PRICING.monthlyItems;

/**
 * Oferta principal — seção-pilar da página.
 *
 * O peso visual foi redistribuído para que a caixa de preço seja o foco e a
 * lista de entregáveis seja apoio (antes as duas colunas competiam de igual
 * para igual). A separação entre planos vem da escada de superfícies
 * (raised → sunken), não de bordas empilhadas.
 */
export default function Offer() {
  return (
    // Ritmo "wide": esta seção respira mais que as de apoio, para o preço
    // chegar como um evento na página e não como mais um bloco.
    <section id="oferta" className="py-20 sm:py-28 lg:py-32">
      <div className="section-wrap">
        <Reveal>
          {/* Padding menor no mobile: card-pillar e card-sunken se aninham, então
              os paddings somam e comem a largura útil numa tela de 375px. */}
          <div className="card-pillar accent-top p-6 sm:p-10 lg:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-subtle">
              Oferta de lançamento
            </p>

            <h2 className="mt-4 max-w-[16ch] text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Pacote{" "}
              <span className="bg-cta-gradient bg-clip-text text-transparent">
                Presença Digital Completa
              </span>
            </h2>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-12">
              {/* Coluna esquerda — entregáveis (apoio) */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
                  O que está incluído
                </p>
                <ul className="mt-4">
                  {SETUP_ITEMS.map(({ label, value }) => (
                    <li
                      key={label}
                      className="flex items-baseline justify-between gap-5 border-b border-hairline py-3.5 last:border-b-0"
                    >
                      <span className="text-[15px] text-ink">{label}</span>
                      <span className="shrink-0 font-mono text-[13px] tabular-nums text-ink-subtle line-through decoration-white/20">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Recorrência — afundada: lê como sub-informação do bloco */}
                <div className="card-sunken mt-6 p-5 sm:p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
                    Manutenção mensal
                  </p>
                  <ul className="mt-3">
                    {MONTHLY_ITEMS.map(({ label, value }) => (
                      <li
                        key={label}
                        className="flex items-baseline justify-between gap-4 border-b border-hairline py-2.5 last:border-b-0"
                      >
                        <span className="text-sm text-ink-muted">{label}</span>
                        <span className="shrink-0 font-mono text-[13px] tabular-nums text-ink-subtle">
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex items-baseline justify-between gap-4 border-t border-hairline-strong pt-3.5">
                    <span className="whitespace-nowrap text-sm font-semibold text-ink">
                      Total recorrência
                    </span>
                    <span className="font-mono text-[15px] font-semibold tabular-nums text-ink">
                      {PRICING.monthly}
                    </span>
                  </div>
                </div>
              </div>

              {/* Coluna direita — preço + ação (o foco) */}
              <div className="card-sunken p-5 sm:p-8">
                {/* Escassez honesta — número real vindo do config (PROMO_SLOTS).
                    Fica aqui, e não no topo da seção, para aparecer no ponto
                    onde a decisão acontece. */}
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/35 bg-brand-cyan/[0.08] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-brand-cyan">
                  <Flame size={12} aria-hidden="true" />
                  {PROMO_SLOTS.left} de {PROMO_SLOTS.total} vagas
                </span>

                <p className="mt-5 font-mono text-[13px] tabular-nums text-ink-subtle">
                  De{" "}
                  <span className="line-through decoration-white/25">
                    {PRICING.setupFull}
                  </span>{" "}
                  por
                </p>

                <p className="mt-1.5 bg-cta-gradient bg-clip-text font-heading text-[56px] font-bold leading-[0.92] tracking-[-0.03em] tabular-nums text-transparent sm:text-7xl">
                  {PRICING.setupPromo}
                </p>

                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-subtle">
                  setup único
                </p>

                {/* Mensalidade legível de cara — sem letra miúda, sem surpresa depois */}
                <p className="mt-5 border-t border-hairline pt-5 text-sm leading-relaxed text-ink-muted">
                  +{" "}
                  <span className="font-mono font-semibold tabular-nums text-ink">
                    {PRICING.monthly}
                  </span>{" "}
                  de manutenção — chatbot ativo, hospedagem e atualizações
                </p>

                <CTAButton
                  href={waLink(WA_MESSAGES.offer)}
                  variant="cta"
                  track="oferta_principal"
                  ariaLabel="Quero começar agora — abrir WhatsApp"
                  className="mt-6 w-full"
                >
                  Quero começar agora
                  <ArrowRight size={18} aria-hidden="true" />
                </CTAButton>

                <p className="mt-4 text-center font-mono text-[11px] tracking-[0.03em] text-ink-subtle">
                  Contrato mínimo de 6 meses · Garantia de 7 dias
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

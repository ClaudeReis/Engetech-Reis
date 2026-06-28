import { Building2, ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/config";

export default function SecondaryOffer() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="section-wrap">
        <Reveal>
          <div className="card-base flex flex-col gap-6 p-6 transition-all duration-300 hover:border-brand-blue/40 hover:shadow-glow sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:p-8">
            <div className="flex-1">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-edge bg-obsidian text-brand-blue">
                  <Building2 size={18} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  Site Institucional Completo
                </h3>
              </div>

              <div className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
                <p>
                  <span className="text-ink">Desenvolvimento:</span> a partir de{" "}
                  <span className="font-mono text-ink">R$ 800</span>
                  <br />
                  <span className="text-xs">
                    (valor final depende de páginas, integrações e personalização
                    — orçamento sob consulta)
                  </span>
                </p>
                <p>
                  <span className="text-ink">Manutenção mensal:</span>{" "}
                  <span className="font-mono text-ink">R$ 250/mês</span>
                  <br />
                  <span className="text-xs">
                    (hospedagem + 1 atualização de conteúdo/mês + suporte técnico)
                  </span>
                </p>
              </div>
            </div>

            <CTAButton
              href={waLink(WA_MESSAGES.site)}
              track="oferta_site"
              variant="secondary"
              ariaLabel="Falar sobre meu projeto de site — abrir WhatsApp"
              className="w-full shrink-0 sm:w-auto"
            >
              Falar sobre meu projeto
              <ArrowRight size={16} aria-hidden="true" />
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

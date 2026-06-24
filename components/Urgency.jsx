import { Zap } from "lucide-react";
import Reveal from "./Reveal";

export default function Urgency() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="section-wrap">
        <Reveal>
          <div className="gradient-border mx-auto max-w-3xl">
            <div className="flex items-start gap-4 rounded-2xl bg-carbon px-5 py-5 sm:px-7">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-obsidian">
                <Zap size={18} aria-hidden="true" />
              </span>
              <p className="text-pretty text-sm leading-relaxed text-ink-muted sm:text-base">
                <span className="font-semibold text-ink">
                  Oferta de lançamento — vagas limitadas.
                </span>{" "}
                O preço promocional de R$500 existe porque estamos nos primeiros
                clientes e queremos construir portfólio com quem acredita no
                serviço.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

export default function Guarantee() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="section-wrap">
        <Reveal>
          <div className="card-base flex flex-col items-start gap-5 p-7 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient-soft text-brand-cyan ring-1 ring-inset ring-brand-cyan/30">
              <ShieldCheck size={30} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-heading text-xl font-semibold text-ink">
                Garantia de 7 dias, sem burocracia
              </h2>
              <p className="mt-2 text-pretty leading-relaxed text-ink-muted">
                Se em 7 dias após a entrega você achar que o serviço não valeu, a
                gente conversa — sem burocracia. Nosso objetivo é que você veja
                resultado, não que você fique preso num contrato que não faz
                sentido.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

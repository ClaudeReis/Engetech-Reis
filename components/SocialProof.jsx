import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* ==========================================================================
   PROVA SOCIAL — TODO: substituir TODOS os dados abaixo por números e
   depoimentos REAIS. Os valores atuais são apenas placeholders.
   ========================================================================== */

// Provas operacionais honestas (não infladas) — coerentes com a fase de
// lançamento. TODO: ao ter histórico real, trocar por nº de clientes/leads.
const STATS = [
  { value: "24h", label: "atendimento sem parar" },
  { value: "0,8s", label: "pra responder um lead" },
  { value: "7 dias", label: "pra sua LP no ar" },
];

// TODO: inserir depoimento real (nome, foto, segmento e resultado)
const TESTIMONIALS = [
  {
    name: "Nome do Cliente", // TODO
    role: "Segmento / Bairro", // TODO
    quote:
      "Resultado genérico de placeholder — descreva aqui o problema resolvido e o ganho concreto que o cliente teve.", // TODO
  },
  {
    name: "Nome do Cliente", // TODO
    role: "Segmento / Bairro", // TODO
    quote:
      "Resultado genérico de placeholder — descreva aqui o problema resolvido e o ganho concreto que o cliente teve.", // TODO
  },
  {
    name: "Nome do Cliente", // TODO
    role: "Segmento / Bairro", // TODO
    quote:
      "Resultado genérico de placeholder — descreva aqui o problema resolvido e o ganho concreto que o cliente teve.", // TODO
  },
];

export default function SocialProof() {
  return (
    <section className="section-pad section-tint">
      <div className="section-wrap">
        <SectionHeading
          number="04"
          accent="cyan"
          eyebrow="prova social"
          title="Quem aparece e responde, vende mais"
        />

        {/* Bloco de números (placeholder) */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
          {STATS.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              {/* TODO: inserir número real */}
              <div className="card-base accent-top p-5 text-center transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-glow active:scale-[0.98]">
                <p className="font-heading text-2xl font-bold text-gradient sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-xs leading-snug text-ink-muted sm:text-sm">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Cards de depoimento (placeholder) */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              {/* TODO: inserir depoimento real */}
              <figure className="card-base flex h-full flex-col p-6 transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-glow active:scale-[0.99]">
                <Quote size={22} className="text-brand-cyan/60" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-ink-muted">
                  “{t.quote}”
                </blockquote>
                <div className="mt-3" aria-hidden="true">
                  <div className="flex gap-0.5 text-brand-cyan">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-edge pt-4">
                  {/* Foto placeholder — TODO: trocar por foto real */}
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient-soft font-mono text-sm font-semibold text-brand-cyan ring-1 ring-inset ring-edge"
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center font-mono text-xs text-ink-muted/70">
          {/* Lembrete de produção */}
          ⚠ Depoimentos acima são placeholders — substituir por casos reais.
        </p>
      </div>
    </section>
  );
}

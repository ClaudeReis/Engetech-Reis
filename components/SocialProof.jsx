import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { asset } from "@/lib/asset";

// Provas operacionais honestas (não infladas) — coerentes com a fase de
// lançamento. TODO: ao ter histórico real, trocar por nº de clientes/leads.
const STATS = [
  { value: "24h", label: "atendimento sem parar" },
  { value: "0,8s", label: "pra responder um lead" },
  { value: "7 dias", label: "pro seu site no ar" },
];

// Depoimentos REAIS. Comece vazio — a seção de depoimentos só aparece quando
// houver casos reais aqui (nada de prova social inventada no ar).
// Para ativar, adicione objetos: { name, role, quote }.
const TESTIMONIALS = [
  // { name: "Maria Silva", role: "Nutricionista · Botafogo", quote: "..." },
];

export default function SocialProof() {
  const hasTestimonials = TESTIMONIALS.length > 0;

  return (
    <section className="section-pad section-tint">
      <div className="section-wrap">
        <SectionHeading title="Presença que aparece. Atendimento que não para." />

        {/* Provas operacionais honestas */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
          {STATS.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="card-base accent-top p-5 text-center transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-glow active:scale-[0.98]">
                <p className="font-heading text-2xl font-bold text-brand-cyan sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-xs leading-snug text-ink-muted sm:text-sm">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {hasTestimonials ? (
          /* Depoimentos reais (só renderiza quando o array tem itens) */
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 90}>
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
        ) : (
          /* Founder block: foto + bio — largura cheia, alinhado à esquerda */
          <Reveal>
            <div className="gradient-border mt-6">
              <div className="overflow-hidden rounded-[calc(1rem-1px)] bg-carbon">
                <div className="flex flex-col sm:flex-row">
                  {/* Foto — rosto está na metade direita da imagem */}
                  <div className="relative h-72 w-full shrink-0 sm:h-auto sm:w-72 lg:w-96">
                    <img
                      src={asset("/founder.webp")}
                      alt="Jonathan Reis, fundador da EngeTech Reis, em frente ao setup de desenvolvimento"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ objectPosition: "62% center" }}
                    />
                    {/* Fade inferior no mobile para fundir com o texto abaixo */}
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-carbon to-transparent sm:hidden"
                      aria-hidden="true"
                    />
                    {/* Fade lateral no desktop para fundir a foto no card */}
                    <div
                      className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-carbon to-transparent sm:block"
                      aria-hidden="true"
                    />
                  </div>
                  {/* Bio */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
                      Fundador · EngeTech Reis
                    </p>
                    <h3 className="mt-1 font-heading text-2xl font-semibold text-ink lg:text-3xl">
                      Jonathan Reis
                    </h3>
                    <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-ink-muted lg:text-lg">
                      Você fala diretamente com quem constrói. Cada site e
                      automação que saem daqui são feitos por mim — do briefing
                      ao ar. Sem equipe escondida, sem terceirização.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

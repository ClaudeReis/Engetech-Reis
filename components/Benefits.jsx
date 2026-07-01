import { Search, Moon, Coffee } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// 3 resultados essenciais (era 6 — credibilidade e preço já são cobertos
// pela seção de oferta; menos cards = oferta chega mais cedo no scroll).
const BENEFITS = [
  { icon: Search, text: "Apareça no Google mesmo sem seguidores.", featured: true },
  { icon: Moon, text: "Nenhum lead perdido: seu negócio responde na hora, mesmo de madrugada." },
  { icon: Coffee, text: "Libere seu tempo de responder sempre as mesmas perguntas." },
];

export default function Benefits() {
  return (
    <section className="section-pad">
      <div className="section-wrap">
        <SectionHeading title="O resultado prático no seu dia a dia" />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, text, featured }, i) => (
            <Reveal key={text} delay={i * 80}>
              <div
                className={`group flex h-full flex-col gap-4 rounded-2xl border p-6 transition-all duration-300 active:scale-[0.98] ${
                  featured
                    ? "border-brand-violet/30 bg-brand-gradient-soft hover:border-brand-violet/60"
                    : "border-edge bg-carbon hover:border-brand-violet/40"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center rounded-xl text-brand-violet ring-1 ring-inset ring-brand-violet/30 transition-shadow group-hover:shadow-glow-violet ${
                    featured
                      ? "h-12 w-12 bg-obsidian/60"
                      : "h-11 w-11 bg-brand-violet/10"
                  }`}
                >
                  <Icon size={featured ? 24 : 20} aria-hidden="true" />
                </span>
                <p
                  className={`text-pretty leading-relaxed text-ink ${
                    featured ? "font-heading text-lg font-semibold sm:text-xl" : ""
                  }`}
                >
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Search,
  Timer,
  Coffee,
  BadgeCheck,
  Moon,
  Sprout,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const BENEFITS = [
  { icon: Search, text: "Apareça no Google mesmo sem seguidores.", featured: true },
  { icon: Timer, text: "Nunca mais perca um lead por demora." },
  { icon: Coffee, text: "Libere seu tempo de responder sempre as mesmas perguntas." },
  { icon: BadgeCheck, text: "Passe credibilidade imediata." },
  { icon: Moon, text: "Seu negócio funciona mesmo quando você está dormindo.", featured: true },
  { icon: Sprout, text: "Entrada acessível pra começar a ter resultado online." },
];

export default function Benefits() {
  return (
    <section className="section-pad">
      <div className="section-wrap">
        <SectionHeading title="O resultado prático no seu dia a dia" />

        {/* Bento assimétrico: dois cards largos em destaque (diagonal) */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, text, featured }, i) => (
            <Reveal
              key={text}
              delay={(i % 3) * 80}
              className={featured ? "lg:col-span-2" : ""}
            >
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

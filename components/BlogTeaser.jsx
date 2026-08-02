import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { getPostsByDate } from "@/lib/blog";

/**
 * Três artigos mais recentes na home, com link pro hub /blog/.
 *
 * Existe por dois motivos: dar ao leitor que ainda não quer falar no WhatsApp
 * um próximo passo, e dar ao Googlebot um caminho até o blog a partir da página
 * mais forte do site. Fica entre o FAQ e o CTA final de propósito, pra não
 * cortar o fluxo de venda antes da oferta ter sido apresentada.
 */
export default function BlogTeaser() {
  const posts = getPostsByDate().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="section-pad section-tint">
      <div className="section-wrap">
        <SectionHeading
          title="Antes de contratar, entenda como funciona"
          subtitle="Escrevemos sobre preço, presença no Google e as decisões que aparecem antes de qualquer projeto começar."
          size="support"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <a
                href={`/blog/${p.slug}/`}
                className="card-base group flex h-full flex-col p-6 transition-colors hover:border-brand-cyan/40"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan">
                  {p.category}
                </p>
                <h3 className="mt-3 text-balance font-heading text-base font-semibold leading-snug text-ink">
                  {p.h1}
                </h3>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-ink-muted">
                  {p.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-brand-cyan">
                  Ler artigo
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="mt-8">
            <a
              href="/blog/"
              className="inline-flex items-center gap-2 rounded-lg border border-edge bg-carbon/60 px-4 py-2.5 text-sm text-ink transition-colors hover:border-brand-cyan/60 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
            >
              Ver todos os artigos
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

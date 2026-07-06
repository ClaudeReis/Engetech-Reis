import { ArrowRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";
import ChatBot from "./ChatBot";
import Breadcrumb from "./Breadcrumb";
import Reveal from "./Reveal";
import CTAButton from "./CTAButton";
import SectionHeading from "./SectionHeading";
import { SITE_URL, waLink } from "@/lib/config";
import { getPostsByDate } from "@/lib/blog";

// Data por extenso pt-BR a partir de "AAAA-MM-DD" (sem depender de locale do
// runtime — o export é estático). Ex.: "2026-07-06" → "6 de julho de 2026".
const MESES = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];
function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[m - 1]} de ${y}`;
}

/**
 * Dados estruturados do post:
 * - BreadcrumbList: Início › Blog › [post].
 * - BlogPosting, com publisher apontando pro negócio (@id da home).
 */
function PostJsonLd({ post }) {
  const pageUrl = `${SITE_URL}/blog/${post.slug}/`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: post.h1, item: pageUrl },
    ],
  };

  const postLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titleTag,
    description: post.metaDescription,
    url: pageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "EngeTech Reis", "@id": `${SITE_URL}/#business` },
    publisher: { "@id": `${SITE_URL}/#business` },
    mainEntityOfPage: pageUrl,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postLd) }} />
    </>
  );
}

// Renderiza um bloco do corpo do post (ver modelo em lib/blog.js).
function Block({ block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {block.text}
        </h2>
      );
    case "p":
      return block.html ? (
        <p
          className="mt-5 text-pretty leading-relaxed text-ink-muted"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      ) : (
        <p className="mt-5 text-pretty leading-relaxed text-ink-muted">{block.text}</p>
      );
    case "ul":
      return (
        <ul className="mt-5 grid gap-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-edge bg-carbon/60 px-4 py-3.5 leading-relaxed text-ink-muted"
            >
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan shadow-glow" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 border-l-2 border-brand-cyan/60 bg-brand-gradient-soft/40 py-4 pl-5 pr-4 text-pretty text-lg font-medium leading-relaxed text-ink">
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}

/**
 * Template de post do blog. Recebe o objeto `post` de lib/blog.js e monta:
 * breadcrumb, cabeçalho (categoria, título, data e tempo de leitura), corpo
 * a partir dos blocos, CTA final e leitura relacionada. Header/Footer/
 * StickyCTA/ChatBot são compartilhados com o resto do site.
 */
export default function BlogPost({ post }) {
  const waHref = waLink(
    `Olá! Li o artigo "${post.h1}" no blog da EngeTech Reis e quero falar sobre um site pro meu negócio.`
  );
  const outros = getPostsByDate().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <PostJsonLd post={post} />

      <Header />
      <main id="conteudo">
        {/* Cabeçalho do post */}
        <section className="relative overflow-hidden pt-28 pb-8 sm:pt-32 sm:pb-10">
          <div
            aria-hidden="true"
            className="glow-blob absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-cyan/40"
          />
          <div className="section-wrap relative">
            <Breadcrumb label={post.h1} section={{ label: "Blog", href: "/blog/" }} />
            <Reveal>
              <p className="eyebrow mb-5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-glow" />
                {post.category}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="max-w-3xl text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
                {post.h1}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-ink-muted">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true" className="text-edge">•</span>
                <span>{post.readingTime} de leitura</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Corpo do artigo */}
        <section className="pb-4">
          <div className="section-wrap">
            <article className="max-w-2xl">
              {post.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </article>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden section-pad">
          <div
            aria-hidden="true"
            className="glow-blob absolute -bottom-20 left-1/2 h-72 w-80 -translate-x-1/2 rounded-full bg-brand-violet/40"
          />
          <div className="section-wrap relative">
            <div className="max-w-2xl">
              <Reveal>
                <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Quer um site que traz cliente pro seu negócio?
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8">
                  <CTAButton
                    href={waHref}
                    track={`blog_${post.slug}_final`}
                    pulse
                    ariaLabel="Falar sobre meu site no WhatsApp"
                    className="w-full sm:w-auto"
                  >
                    Quero falar sobre meu site
                    <ArrowRight size={18} aria-hidden="true" />
                  </CTAButton>
                  <p className="mt-3 font-mono text-xs text-ink-muted">
                    Resposta em até 24h • Sem compromisso na primeira conversa
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Leitura relacionada — internal linking entre posts */}
        {outros.length > 0 && (
          <section className="section-pad section-tint">
            <div className="section-wrap">
              <SectionHeading title="Continue lendo" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {outros.map((p) => (
                  <a
                    key={p.slug}
                    href={`/blog/${p.slug}/`}
                    className="card-base group flex h-full flex-col p-5 transition-colors hover:border-brand-cyan/40"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan">
                      {p.category}
                    </p>
                    <h3 className="mt-2 text-balance font-heading text-base font-semibold leading-snug text-ink">
                      {p.h1}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">
                      {p.excerpt}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <StickyCTA />
      <ChatBot />
    </>
  );
}

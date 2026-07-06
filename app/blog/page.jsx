import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ChatBot from "@/components/ChatBot";
import Reveal from "@/components/Reveal";
import { getPostsByDate } from "@/lib/blog";
import { SITE_URL } from "@/lib/config";

// Data por extenso pt-BR a partir de "AAAA-MM-DD" (export estático, sem locale).
const MESES = [
  "jan", "fev", "mar", "abr", "mai", "jun",
  "jul", "ago", "set", "out", "nov", "dez",
];
function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MESES[m - 1]} ${y}`;
}

// Title completo (com "| EngeTech Reis") ≤60 caracteres — regra do Google.
const TITLE = "Blog: Criação de Sites e Presença no Google";
const DESCRIPTION =
  "Artigos da EngeTech Reis sobre criação de sites, landing pages e como negócios locais no Rio de Janeiro aparecem no Google e trazem mais clientes.";

export const metadata = {
  title: `${TITLE} | EngeTech Reis`,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: `${TITLE} | EngeTech Reis`,
    description: DESCRIPTION,
    url: "/blog/",
    siteName: "EngeTech Reis",
    type: "website",
    locale: "pt_BR",
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | EngeTech Reis`,
    description: DESCRIPTION,
    images: [`${SITE_URL}/og.png`],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const posts = getPostsByDate();

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>

      <Header />
      <main id="conteudo">
        <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-14">
          <div
            aria-hidden="true"
            className="glow-blob absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-cyan/40"
          />
          <div className="section-wrap relative">
            <Reveal>
              <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
                Blog da EngeTech Reis
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
                Conteúdo direto pra quem tem um negócio local e quer entender de
                verdade como um site traz cliente: preço, presença no Google e
                as decisões que fazem diferença antes de contratar.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-20">
          <div className="section-wrap">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Reveal key={p.slug}>
                  <a
                    href={`/blog/${p.slug}/`}
                    className="card-base group flex h-full flex-col p-6 transition-colors hover:border-brand-cyan/40"
                  >
                    <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-brand-cyan">
                      {p.category}
                      <span aria-hidden="true" className="text-edge">•</span>
                      <span className="text-ink-muted/60">{formatDate(p.date)}</span>
                    </p>
                    <h2 className="mt-3 text-balance font-heading text-lg font-semibold leading-snug text-ink">
                      {p.h1}
                    </h2>
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
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
      <ChatBot />
    </>
  );
}

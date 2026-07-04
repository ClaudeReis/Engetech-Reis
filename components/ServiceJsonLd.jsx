import { SITE_URL } from "@/lib/config";

/**
 * Dados estruturados de uma página de serviço:
 * - Service: o serviço, com provider apontando pro negócio (@id da home).
 * - BreadcrumbList: Início › Serviços › [serviço].
 * - FAQPage: as MESMAS FAQs exibidas na página (regra do Google).
 * Recebe o objeto `servico` de lib/servicos.js.
 */
export default function ServiceJsonLd({ servico }) {
  const pageUrl = `${SITE_URL}/${servico.slug}/`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: servico.schemaName,
    serviceType: servico.schemaName,
    description: servico.metaDescription,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: "Rio de Janeiro" },
    url: pageUrl,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 3, name: servico.breadcrumbLabel, item: pageUrl },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: servico.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}

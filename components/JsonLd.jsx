import { FAQS } from "./FAQ";
import {
  SITE_URL,
  WHATSAPP_NUMBER,
  INSTAGRAM_URL,
  CONTACT_EMAIL,
} from "@/lib/config";

// Dados estruturados (schema.org) renderizados como JSON-LD.
// - ProfessionalService: identidade do negócio para o Google (knowledge graph,
//   busca local). areaServed = Rio de Janeiro; sem endereço de rua (atendimento
//   remoto/agendado), só a cidade.
// - FAQPage: usa as MESMAS perguntas exibidas em <FAQ/>, então o schema bate
//   com o conteúdo visível (regra do Google — nada de FAQ fantasma).

const businessLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "EngeTech Reis",
  description:
    "Agência de engenharia digital no Rio de Janeiro. Landing pages, sites e chatbots para Instagram que colocam o negócio no Google e respondem clientes na hora.",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/founder.webp`,
  areaServed: { "@type": "City", name: "Rio de Janeiro" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  telephone: `+${WHATSAPP_NUMBER}`,
  email: CONTACT_EMAIL,
  priceRange: "$$",
  sameAs: [INSTAGRAM_URL],
  founder: { "@type": "Person", name: "Jonathan Reis" },
  knowsLanguage: "pt-BR",
  serviceType: [
    "Criação de landing page",
    "Desenvolvimento de site institucional",
    "Chatbot para Instagram",
    "Automação de atendimento",
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}

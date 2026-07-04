import ServicePage from "@/components/ServicePage";
import { getServico } from "@/lib/servicos";
import { SITE_URL } from "@/lib/config";

const servico = getServico("criar-landing-page");

export const metadata = {
  title: servico.titleTag,
  description: servico.metaDescription,
  keywords: [servico.keyword, "landing page", "Rio de Janeiro", "EngeTech Reis"],
  alternates: { canonical: `/${servico.slug}/` },
  openGraph: {
    title: servico.titleTag,
    description: servico.metaDescription,
    url: `/${servico.slug}/`,
    siteName: "EngeTech Reis",
    type: "website",
    locale: "pt_BR",
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: servico.titleTag }],
  },
  twitter: {
    card: "summary_large_image",
    title: servico.titleTag,
    description: servico.metaDescription,
    images: [`${SITE_URL}/og.png`],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ServicePage servico={servico} />;
}

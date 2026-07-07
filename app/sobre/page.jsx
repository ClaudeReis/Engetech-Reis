import Sobre from "@/components/Sobre";
import { SITE_URL } from "@/lib/config";

const title = "Jonathan Reis | EngeTech Reis - Sites e Landing Pages RJ";
const description =
  "Jonathan Reis, fundador da EngeTech Reis. Criação de sites e landing pages no Rio de Janeiro com atendente virtual e otimização SEO.";

export const metadata = {
  title,
  description,
  keywords: [
    "Jonathan Reis",
    "EngeTech Reis",
    "criação de sites e landing pages no Rio de Janeiro",
    "atendente virtual para site",
    "otimização SEO",
  ],
  alternates: { canonical: "/sobre/" },
  openGraph: {
    title,
    description,
    url: "/sobre/",
    siteName: "EngeTech Reis",
    type: "profile",
    locale: "pt_BR",
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE_URL}/og.png`],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <Sobre />;
}

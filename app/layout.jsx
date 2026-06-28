import "./globals.css";
import { Space_Grotesk, Sora, JetBrains_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sora",
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: "EngeTech Reis — Presença digital que aparece, responde e vende",
  description:
    "Landing pages, sites e chatbots para Instagram que colocam seu negócio no Google e respondem na hora. Presença digital para negócios no Rio de Janeiro.",
  keywords: [
    "landing page",
    "chatbot instagram",
    "site para negócio local",
    "presença digital",
    "automação de atendimento",
    "EngeTech Reis",
    "Rio de Janeiro",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "EngeTech Reis — Presença digital que aparece, responde e vende",
    description:
      "Design que atrai. Código que estrutura. Automação que vende.",
    url: "./",
    siteName: "EngeTech Reis",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: "EngeTech Reis — presença digital que aparece, responde e vende",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EngeTech Reis — Presença digital que aparece, responde e vende",
    description: "Design que atrai. Código que estrutura. Automação que vende.",
    images: [`${SITE_URL}/og.png`],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#07090F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${sora.variable} ${jetBrains.variable}`}
    >
      <head>
        {/* ================================================================
            TRACKING — inserir os scripts reais antes de ir para produção.

            META PIXEL: cole aqui o snippet base do Pixel (com seu PIXEL_ID).
            <Script id="meta-pixel" strategy="afterInteractive">{`
              !function(f,b,e,v,n,t,s){...}(...);
              fbq('init', 'SEU_PIXEL_ID');
              fbq('track', 'PageView');
            `}</Script>

            GA4: cole aqui o gtag.js (com seu MEASUREMENT_ID).
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXX" />
            <Script id="ga4">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXX');
            `}</Script>

            O evento de conversão do CTA principal é disparado em
            lib/config.js -> trackConversion().
        ================================================================ */}
        {/* Sem JavaScript, o IntersectionObserver não roda — garante que o
            conteúdo do fade-in apareça mesmo assim. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>

        {/* Dados estruturados: negócio + FAQ (rich results no Google) */}
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}

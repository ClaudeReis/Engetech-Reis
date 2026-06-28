import { SITE_URL } from "@/lib/config";

export const dynamic = "force-static";

// Gera /robots.txt no build estático.
// Obs.: em GitHub Pages de projeto (subpasta), os crawlers leem o robots.txt
// da RAIZ do domínio, não da subpasta — então isto passa a valer de verdade
// quando o domínio próprio entrar. Mantido pronto e correto.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

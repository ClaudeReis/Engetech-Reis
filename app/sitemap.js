import { SITE_URL } from "@/lib/config";

export const dynamic = "force-static";

// Gera /sitemap.xml no build estático. Site de página única (home + âncoras),
// então uma URL só. Ao criar novas páginas, adicionar entradas aqui.
export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

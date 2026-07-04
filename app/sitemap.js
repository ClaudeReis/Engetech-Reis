import { SITE_URL } from "@/lib/config";
import { SERVICOS } from "@/lib/servicos";

export const dynamic = "force-static";

export default function sitemap() {
  const servicos = SERVICOS.map((s) => ({
    url: `${SITE_URL}/${s.slug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    ...servicos,
  ];
}

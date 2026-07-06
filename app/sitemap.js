import { SITE_URL } from "@/lib/config";
import { SERVICOS } from "@/lib/servicos";
import { PROJECTS } from "@/lib/projetos";

export const dynamic = "force-static";

export default function sitemap() {
  const servicos = SERVICOS.map((s) => ({
    url: `${SITE_URL}/${s.slug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cases = PROJECTS.map((p) => ({
    url: `${SITE_URL}/projetos/${p.id}/`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    ...servicos,
    { url: `${SITE_URL}/projetos/`, changeFrequency: "monthly", priority: 0.7 },
    ...cases,
  ];
}

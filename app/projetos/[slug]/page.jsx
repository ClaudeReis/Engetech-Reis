import CasePage from "@/components/CasePage";
import { PROJECTS, getProjeto } from "@/lib/projetos";
import { SITE_URL } from "@/lib/config";

// Export estático: uma página por projeto de lib/projetos.js.
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjeto(slug);
  const { titleTag, metaDescription } = project.caso;

  return {
    title: `${titleTag} | EngeTech Reis`,
    description: metaDescription,
    alternates: { canonical: `/projetos/${project.id}/` },
    openGraph: {
      title: `${titleTag} | EngeTech Reis`,
      description: metaDescription,
      url: `/projetos/${project.id}/`,
      siteName: "EngeTech Reis",
      type: "website",
      locale: "pt_BR",
      images: [
        { url: `${SITE_URL}${project.screenshot}`, width: 1200, height: 630, alt: `Home do site ${project.name}` },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${titleTag} | EngeTech Reis`,
      description: metaDescription,
      images: [`${SITE_URL}${project.screenshot}`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <CasePage project={getProjeto(slug)} />;
}

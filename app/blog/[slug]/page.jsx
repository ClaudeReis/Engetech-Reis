import BlogPost from "@/components/BlogPost";
import { POSTS, getPost } from "@/lib/blog";
import { SITE_URL } from "@/lib/config";

// Export estático: uma página por post de lib/blog.js.
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  const { titleTag, metaDescription } = post;

  return {
    title: `${titleTag} | EngeTech Reis`,
    description: metaDescription,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: `${titleTag} | EngeTech Reis`,
      description: metaDescription,
      url: `/blog/${post.slug}/`,
      siteName: "EngeTech Reis",
      type: "article",
      locale: "pt_BR",
      publishedTime: post.date,
      images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: titleTag }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${titleTag} | EngeTech Reis`,
      description: metaDescription,
      images: [`${SITE_URL}/og.png`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <BlogPost post={getPost(slug)} />;
}

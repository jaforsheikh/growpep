import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPage";
import SingleBlogHero from "@/components/blog/single-blog-hero";
import SingleBlogContent from "@/components/blog/single-blog-content";
import RelatedPosts from "@/components/blog/related-posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | GrowPep`,
      description: post.excerpt,
      url: `https://www.growpep.com/blog/${post.slug}`,
      siteName: "GrowPep",
      type: "article",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | GrowPep`,
      description: post.excerpt,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function SingleBlogPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <SingleBlogHero post={post} />
      <SingleBlogContent post={post} />
      <RelatedPosts currentSlug={post.slug} />
    </main>
  );
}
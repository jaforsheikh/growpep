import type { Metadata } from "next";
import BlogHero from "@/components/blog/blog-hero";
import BlogFeatured from "@/components/blog/blog-featured";
import BlogGrid from "@/components/blog/blog-grid";
import BlogCta from "@/components/blog/blog-cta";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read GrowPep blog articles about digital growth, branding, conversion, websites, performance, and smarter online strategy.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <BlogCta />
    </main>
  );
}
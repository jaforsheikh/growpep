import Link from "next/link";
import Container from "@/components/layout/container";
import { blogPosts } from "@/data/blogPage";

type Props = {
  currentSlug: string;
};

export default function RelatedPosts({ currentSlug }: Props) {
  const relatedPosts = blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB] px-4 py-2 text-sm font-medium text-[#185FA5]">
            Related Articles
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">
            Continue Reading More Insights
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[32px] border border-[#E2E8F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#378ADD]/30 hover:shadow-lg"
            >
              <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB] px-3 py-1 text-xs font-medium text-[#185FA5]">
                {post.category}
              </span>

              <h3 className="mt-6 text-2xl font-semibold leading-snug text-[#0F172A]">
                {post.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#64748B]">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#64748B]">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-8 inline-flex items-center text-sm font-semibold text-[#185FA5] transition hover:text-[#0C447C]"
              >
                Read Article
                <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
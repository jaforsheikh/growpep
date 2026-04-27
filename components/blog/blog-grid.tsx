import Link from "next/link";
import Container from "@/components/layout/container";
import { regularPosts } from "@/data/blogPage";

export default function BlogGrid() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB] px-4 py-2 text-sm font-medium text-[#185FA5]">
            Latest Articles
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">
            Learn, Improve & Grow With Better Digital Strategy
          </h2>

          <p className="mt-5 text-base leading-8 text-[#64748B] md:text-lg">
            Browse more GrowPep articles focused on performance, positioning,
            web experience, and smarter online growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {regularPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[32px] border border-[#E2E8F0] bg-[#F8FAFC] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#378ADD]/30 hover:shadow-lg"
            >
              <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white px-3 py-1 text-xs font-medium text-[#185FA5]">
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
                <span>•</span>
                <span>{post.date}</span>
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
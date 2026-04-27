import Link from "next/link";
import Container from "@/components/layout/container";
import { featuredPost } from "@/data/blogPage";

export default function BlogFeatured() {
  if (!featuredPost) return null;

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <Container>
        <div className="rounded-[32px] border border-[#E2E8F0] bg-white p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div className="rounded-[28px] bg-gradient-to-br from-[#07172E] via-[#0C2442] to-[#185FA5] p-8 text-white">
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-[#85B7EB]">
                Featured Post
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                {featuredPost.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-[#B5D4F4]">
                {featuredPost.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#85B7EB]">
                <span>{featuredPost.category}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
              </div>
            </div>

            <div>
              <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB] px-4 py-2 text-sm font-medium text-[#185FA5]">
                Editor’s Pick
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-[#0F172A] sm:text-3xl">
                A Strong First Article for Brand Authority
              </h3>

              <p className="mt-5 text-base leading-8 text-[#64748B]">
                This featured article highlights one of the most important topics
                for service-based businesses: how to build a premium digital
                presence that looks credible, converts better, and supports
                long-term brand growth.
              </p>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-8 inline-flex items-center rounded-full bg-[#185FA5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0C447C]"
              >
                Read Featured Article
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
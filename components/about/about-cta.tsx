import Link from "next/link";
import Container from "@/components/layout/container";
import { aboutPageData } from "@/data/aboutPage";

export default function AboutCta() {
  const { cta } = aboutPageData;

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="rounded-[32px] bg-[#07172E] px-6 py-12 text-center text-white shadow-2xl sm:px-10 md:px-14 md:py-16">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#85B7EB]">
            Ready to Work With GrowPep?
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {cta.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B5D4F4] md:text-lg">
            {cta.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#185FA5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0C447C]"
            >
              {cta.primaryButton}
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#E6F1FB] transition hover:bg-white/10"
            >
              {cta.secondaryButton}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
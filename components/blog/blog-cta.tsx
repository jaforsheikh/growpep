import Link from "next/link";
import Container from "@/components/layout/container";

export default function BlogCta() {
  return (
    <section className="bg-[#07172E] py-16 text-white md:py-20">
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-white/5 px-6 py-12 text-center shadow-2xl backdrop-blur-sm sm:px-10 md:px-14 md:py-16">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#85B7EB]">
            Need Expert Help Instead of Just Reading?
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Let’s Build a{" "}
            <span className="bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017] bg-clip-text text-transparent">
              Smarter Growth System
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B5D4F4] md:text-lg">
            GrowPep helps brands move beyond theory with stronger design,
            clearer positioning, better performance, and conversion-focused
            digital execution.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#185FA5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0C447C]"
            >
              Start a Project
            </Link>

            <Link
              href="/services"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#E6F1FB] transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
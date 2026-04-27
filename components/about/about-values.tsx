import Container from "@/components/layout/container";
import { aboutPageData } from "@/data/aboutPage";

export default function AboutValues() {
  const { values } = aboutPageData;

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB] px-4 py-2 text-sm font-medium text-[#185FA5]">
            Our Values
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">
            The Principles Behind Our Work
          </h2>

          <p className="mt-5 text-base leading-8 text-[#64748B] md:text-lg">
            These values shape how we design, build, and improve digital systems
            for modern brands.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#378ADD]/30 hover:shadow-lg"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-[#185FA5] via-[#378ADD] to-[#D4A017]" />
              <h3 className="text-xl font-semibold text-[#0F172A]">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#64748B]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/layout/container";
import { portfolioItems } from "@/data/portfolioPage";

export default function PortfolioGrid() {
  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <Container>
        <div className="grid gap-6 xl:grid-cols-2">
          {portfolioItems.map((item) => (
            <article
              key={item.slug}
              className="rounded-[32px] border border-[#E2E8F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#378ADD]/30 hover:shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB] px-3 py-1 text-xs font-medium text-[#185FA5]">
                  {item.category}
                </span>

                <span className="text-sm font-medium text-[#D4A017]">
                  Case Study
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-[#0F172A]">
                {item.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#64748B]">
                {item.description}
              </p>

              <div className="mt-8 grid gap-5">
                <div className="rounded-3xl bg-[#F8FAFC] p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#185FA5]">
                    Challenge
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#475569]">
                    {item.challenge}
                  </p>
                </div>

                <div className="rounded-3xl bg-[#F8FAFC] p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#185FA5]">
                    Strategy
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#475569]">
                    {item.strategy}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {item.results.map((result) => (
                  <div
                    key={result}
                    className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-4 text-center"
                  >
                    <p className="text-sm font-semibold text-[#0F172A]">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
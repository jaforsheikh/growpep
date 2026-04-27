import Container from "@/components/layout/container";
import type { ServicePageType } from "@/data/servicePages";

type Props = {
  service: ServicePageType;
};

export default function ServiceProblemSolution({ service }: Props) {
  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
            {service.introTitle}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#64748B] md:text-lg">
            {service.introDescription}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              {service.problemTitle}
            </h3>

            <ul className="mt-6 space-y-4">
              {service.problemPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D4A017]" />
                  <span className="text-sm leading-7 text-[#475569] md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              {service.solutionTitle}
            </h3>

            <ul className="mt-6 space-y-4">
              {service.solutionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1D9E75]" />
                  <span className="text-sm leading-7 text-[#475569] md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/layout/container";
import type { ServicePageType } from "@/data/servicePages";

type Props = {
  service: ServicePageType;
};

export default function ServiceFeatures({ service }: Props) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB] px-4 py-2 text-sm font-medium text-[#185FA5]">
            Features & Deliverables
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">
            What’s Included in This Service
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 transition hover:-translate-y-1 hover:border-[#378ADD]/30 hover:shadow-lg"
            >
              <div className="mb-4 h-10 w-10 rounded-2xl bg-gradient-to-br from-[#185FA5] via-[#378ADD] to-[#D4A017]" />
              <h3 className="text-lg font-semibold text-[#0F172A]">{feature}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
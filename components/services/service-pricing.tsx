import Container from "@/components/layout/container";
import type { ServicePageType } from "@/data/servicePages";

type Props = {
  service: ServicePageType;
};

export default function ServicePricing({ service }: Props) {
  return (
    <section className="bg-[#07172E] py-16 text-white md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#85B7EB]">
            Pricing Options
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Flexible Plans for Different Growth Stages
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {service.pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-7 ${
                plan.highlighted
                  ? "border-[#D4A017] bg-white/10 shadow-2xl"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="rounded-full bg-[#D4A017] px-3 py-1 text-xs font-semibold text-[#07172E]">
                    Most Popular
                  </span>
                )}
              </div>

              <p className="mt-4 text-3xl font-bold text-white">{plan.price}</p>
              <p className="mt-3 text-sm leading-7 text-[#B5D4F4]">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1D9E75]" />
                    <span className="text-sm leading-7 text-[#E6F1FB]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-[#D4A017] text-[#07172E] hover:opacity-90"
                    : "bg-[#185FA5] text-white hover:bg-[#0C447C]"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
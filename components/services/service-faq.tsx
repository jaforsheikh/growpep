import Container from "@/components/layout/container";
import type { ServicePageType } from "@/data/servicePages";

type Props = {
  service: ServicePageType;
};

export default function ServiceFaq({ service }: Props) {
  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB] px-4 py-2 text-sm font-medium text-[#185FA5]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">
            Common Questions About This Service
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {service.faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#0F172A]">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#64748B] md:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
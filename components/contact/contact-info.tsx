import Container from "@/components/layout/container";
import { contactPageData } from "@/data/contactPage";

export default function ContactInfo() {
  const { contactInfo } = contactPageData;

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#378ADD]/30 hover:shadow-lg"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-[#185FA5] via-[#378ADD] to-[#D4A017]" />
              <h2 className="text-xl font-semibold text-[#0F172A]">
                {item.title}
              </h2>
              <p className="mt-3 text-lg font-medium text-[#185FA5]">
                {item.value}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#64748B]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/container";
import { servicesData } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore GrowPep services including social media management, WordPress website design, full stack development, reputation management, and media buying.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-[#F5F7FA]">
      <section className="bg-[#07172E] py-20 text-white md:py-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#85B7EB]">
              Our Services
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Solutions Built for{" "}
              <span className="bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017] bg-clip-text text-transparent">
                Modern Growth
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#B5D4F4] md:text-lg">
              Explore GrowPep’s premium digital services designed to improve trust,
              conversion, visibility, and scalable business growth.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicesData.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#378ADD]/30 hover:shadow-xl"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB] px-3 py-1 text-xs font-medium text-[#185FA5]">
                      {service.badge}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#185FA5] via-[#378ADD] to-[#D4A017] text-white">
                      <Icon size={22} />
                    </div>
                  </div>

                  <h2 className="text-2xl font-semibold text-[#0F172A]">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#64748B]">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center text-sm font-semibold text-[#185FA5] transition hover:text-[#0C447C]"
                  >
                    Explore Service
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
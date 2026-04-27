import Container from "@/components/layout/container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read GrowPep's Terms & Conditions for website use, service information, intellectual property, and legal terms.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#F5F7FA]">
      <section className="relative overflow-hidden bg-[#07172E] py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,138,221,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(212,160,23,0.12),_transparent_24%)]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#85B7EB]">
              Legal Page
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Terms &{" "}
              <span className="bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017] bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#B5D4F4] md:text-lg">
              These Terms & Conditions outline the rules, responsibilities, and
              usage terms related to GrowPep’s website, services, and digital
              communication channels.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[32px] border border-[#E2E8F0] bg-white p-7 shadow-sm sm:p-10 md:p-12">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">1. Acceptance of Terms</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  By accessing or using the GrowPep website, services, or related
                  communication channels, you agree to these Terms & Conditions.
                  If you do not agree, you should not use this website or our
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">2. Website Use</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  You agree to use this website for lawful purposes only. You may
                  not use the site in a way that damages, disrupts, or interferes
                  with the website, its content, its security, or its normal
                  functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">3. Service Information</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  All service descriptions, pricing examples, deliverables, and
                  project-related information shown on the website are for general
                  informational purposes. Final scope, pricing, and deliverables
                  may vary depending on the project and agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">4. Intellectual Property</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  All website content, branding elements, design assets, text,
                  graphics, and related materials on GrowPep’s website are the
                  property of GrowPep unless otherwise stated. You may not copy,
                  reproduce, distribute, or reuse content without permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">5. Third-Party Links</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  Our website may contain links to third-party platforms, tools,
                  or services. GrowPep is not responsible for the content, privacy
                  practices, or policies of third-party websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">6. Limitation of Liability</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  GrowPep is not liable for any direct, indirect, incidental, or
                  consequential loss arising from the use of this website or
                  reliance on its information. We aim to keep information accurate,
                  but we do not guarantee complete accuracy, uninterrupted access,
                  or error-free operation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">7. Project Agreements</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  Any paid project, service engagement, or ongoing work with
                  GrowPep may be subject to a separate written agreement, proposal,
                  invoice, or scope document. In such cases, the signed or accepted
                  project agreement will take precedence over general website terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">8. Changes to Terms</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  GrowPep may update these Terms & Conditions at any time. Updated
                  versions will be posted on this page, and continued use of the
                  website indicates acceptance of any revised terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">9. Contact</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  If you have questions about these Terms & Conditions, you can
                  contact us through our{" "}
                  <Link
                    href="/contact"
                    className="font-medium text-[#185FA5] hover:text-[#0C447C]"
                  >
                    Contact Page
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
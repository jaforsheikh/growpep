import Container from "@/components/layout/container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read GrowPep's Privacy Policy to understand how we collect, use, and protect user information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
              Privacy{" "}
              <span className="bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017] bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#B5D4F4] md:text-lg">
              This Privacy Policy explains how GrowPep collects, uses, and protects
              information when you visit our website or contact us through our forms
              and communication channels.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[32px] border border-[#E2E8F0] bg-white p-7 shadow-sm sm:p-10 md:p-12">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">1. Information We Collect</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  We may collect information that you voluntarily provide through
                  contact forms, inquiry forms, email communication, or other direct
                  interactions with GrowPep. This may include your name, email
                  address, phone number, business details, and project-related
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">2. How We Use Your Information</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  We use the information you provide to respond to inquiries, discuss
                  projects, improve our services, communicate with you, and support
                  business operations. We may also use data to enhance website
                  performance, user experience, and service quality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">3. Cookies and Analytics</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  Our website may use cookies, analytics tools, and tracking
                  technologies to understand visitor behavior, improve performance,
                  and measure the effectiveness of our pages and campaigns. These
                  tools may collect non-sensitive usage data such as browser type,
                  pages visited, and time spent on the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">4. Data Protection</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  GrowPep takes reasonable steps to protect personal information from
                  unauthorized access, misuse, or disclosure. While we aim to use
                  secure tools and platforms, no online system can guarantee absolute
                  security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">5. Third-Party Services</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  We may use trusted third-party services such as analytics tools,
                  communication platforms, hosting providers, or form tools. These
                  services may process limited information as needed to support
                  website functionality and business operations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">6. Your Rights</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  You may request that we update, correct, or delete your personal
                  information where appropriate. If you have concerns about how your
                  information is handled, you may contact us directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">7. Policy Updates</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  GrowPep may update this Privacy Policy from time to time to reflect
                  changes in our practices, services, or legal requirements. Updated
                  versions will be posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">8. Contact</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  If you have any questions about this Privacy Policy or how your
                  information is handled, please contact us through our{" "}
                  <Link href="/contact" className="font-medium text-[#185FA5] hover:text-[#0C447C]">
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
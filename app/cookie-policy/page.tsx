import Container from "@/components/layout/container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Read GrowPep's Cookie Policy to understand how cookies and tracking technologies are used on our website.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
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
              Cookie{" "}
              <span className="bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017] bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#B5D4F4] md:text-lg">
              This Cookie Policy explains how GrowPep uses cookies and similar
              technologies to improve website functionality, user experience,
              analytics, and performance tracking.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[32px] border border-[#E2E8F0] bg-white p-7 shadow-sm sm:p-10 md:p-12">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">1. What Are Cookies?</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  Cookies are small text files stored on your device when you visit
                  a website. They help websites remember your preferences, improve
                  functionality, and better understand how visitors interact with
                  different pages and features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">2. How GrowPep Uses Cookies</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  GrowPep may use cookies to support essential website functionality,
                  improve performance, analyze traffic, remember preferences, and
                  understand how visitors engage with our content, pages, and forms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">3. Types of Cookies We May Use</h2>
                <div className="mt-4 space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">Essential Cookies</h3>
                    <p className="mt-2 text-base leading-8 text-[#475569]">
                      These cookies are necessary for the website to function
                      properly and support basic usability and security features.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">Analytics Cookies</h3>
                    <p className="mt-2 text-base leading-8 text-[#475569]">
                      These cookies help us understand website traffic, visitor
                      behavior, and page performance so we can improve the user
                      experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">Preference Cookies</h3>
                    <p className="mt-2 text-base leading-8 text-[#475569]">
                      These cookies may remember selected settings or preferences
                      to create a smoother browsing experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">Marketing Cookies</h3>
                    <p className="mt-2 text-base leading-8 text-[#475569]">
                      In some cases, cookies may be used to support advertising,
                      remarketing, or campaign measurement through trusted third-party
                      platforms.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">4. Third-Party Cookies</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  Some cookies may be set by third-party services used on the
                  website, such as analytics tools, embedded services, or advertising
                  platforms. These third-party providers may collect data according
                  to their own privacy and cookie policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">5. Managing Cookies</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  You can manage or disable cookies through your browser settings.
                  Please note that disabling certain cookies may affect website
                  functionality, performance, or your browsing experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">6. Updates to This Policy</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  GrowPep may update this Cookie Policy from time to time to reflect
                  changes in website tools, services, legal requirements, or data
                  practices. Updated versions will be published on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A]">7. Contact</h2>
                <p className="mt-4 text-base leading-8 text-[#475569]">
                  If you have any questions about our Cookie Policy or how cookies
                  are used on the website, please contact us through our{" "}
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
import Link from "next/link";
import Container from "@/components/layout/container";
import { footerLinks } from "@/data/footerLinks";
import { socialLinks } from "@/data/socialLinks";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07172E] text-white">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,138,221,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(212,160,23,0.10),_transparent_24%)]" />

      <Container className="relative z-10">
        {/* TOP GRID */}
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 xl:grid-cols-5">
          
          {/* BRAND */}
          <div className="xl:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#185FA5] via-[#378ADD] to-[#D4A017] text-white shadow-lg">
                <span className="text-lg font-bold">G</span>
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold">
                  Grow<span className="text-[#378ADD]">Pep</span>
                </span>
                <span className="text-[11px] text-[#85B7EB]">
                  We Grow Brands. You Grow Bigger.
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm text-[#B5D4F4]">
              GrowPep is a premium digital growth agency focused on strategy,
              design, development, and performance systems that help brands
              scale with clarity and confidence.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#85B7EB] transition hover:border-[#378ADD]/40 hover:bg-[#378ADD]/10 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[#185FA5] px-5 py-3 text-sm font-semibold hover:bg-[#0C447C]"
              >
                Get Free Audit
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-5 py-3 text-sm hover:bg-white/10"
              >
                Book a Call
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm uppercase text-[#85B7EB]">Company</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#378ADD]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm uppercase text-[#85B7EB]">Services</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#378ADD]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-sm uppercase text-[#85B7EB]">Support</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-[#378ADD]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-4 py-6 text-sm text-[#85B7EB] md:flex-row md:justify-between">
          <p>© 2026 GrowPep. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            <span>Premium Digital Growth Agency</span>
            <span>•</span>
            <span>Built for Trust & Conversion</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
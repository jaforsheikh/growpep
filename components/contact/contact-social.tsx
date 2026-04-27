import Container from "@/components/layout/container";
import { contactPageData } from "@/data/contactPage";
import { socialLinks } from "@/data/socialLinks";

export default function ContactSocial() {
  return (
    <section className="bg-[#07172E] py-16 text-white md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#85B7EB]">
            Connect With GrowPep
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Social Presence & Brand Trust
          </h2>

          <p className="mt-5 text-base leading-8 text-[#B5D4F4] md:text-lg">
            {contactPageData.socialText}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#85B7EB] transition hover:-translate-y-1 hover:border-[#378ADD]/40 hover:bg-[#378ADD]/10 hover:text-white"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
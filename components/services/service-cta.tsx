import Container from "@/components/layout/container";

export default function ServiceCta() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="rounded-[32px] bg-[#07172E] px-6 py-12 text-center text-white shadow-2xl sm:px-10 md:px-14 md:py-16">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#85B7EB]">
            Let’s Talk About Your Project
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Ready to Build a{" "}
            <span className="bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017] bg-clip-text text-transparent">
              High-Performing Service System
            </span>
            ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B5D4F4] md:text-lg">
            Tell us what you need, and we’ll help you choose the right direction
            for better design, stronger trust, and measurable growth.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#185FA5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0C447C]"
            >
              Get a Quote
            </a>

            <a
              href="/contact"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#E6F1FB] transition hover:bg-white/10"
            >
              Book a Call
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
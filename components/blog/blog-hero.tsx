import Container from "@/components/layout/container";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#07172E] py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,138,221,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(212,160,23,0.12),_transparent_24%)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#85B7EB]">
            GrowPep Blog
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Insights for{" "}
            <span className="bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017] bg-clip-text text-transparent">
              Growth, Branding & Conversion
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#B5D4F4] md:text-lg">
            Explore practical articles on strategy, websites, branding, digital
            growth, and modern online performance for service-based businesses.
          </p>
        </div>
      </Container>
    </section>
  );
}
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07172E] px-4 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,138,221,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(212,160,23,0.12),_transparent_24%)]" />

      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#185FA5]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#85B7EB]">
          Error 404
        </span>

        <h1 className="mt-6 text-6xl font-bold leading-none sm:text-7xl md:text-8xl">
          4
          <span className="bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017] bg-clip-text text-transparent">
            0
          </span>
          4
        </h1>

        <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B5D4F4] md:text-lg">
          The page you are looking for may have been moved, deleted, or the link
          might be incorrect. Let’s get you back to the right place.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#185FA5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0C447C]"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#E6F1FB] transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
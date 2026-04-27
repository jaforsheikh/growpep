"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/container";
import { homeContent } from "@/content/home";

export default function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden bg-[#07172E] py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,138,221,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(212,160,23,0.16),_transparent_30%)]" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#185FA5]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#D4A017]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-[#378ADD]/30 bg-white/5 px-4 py-2 text-sm text-[#E6F1FB]"
          >
            {hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            <span className="block">{hero.titleTop}</span>
            <span className="block bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017] bg-clip-text text-transparent">
              {hero.titleGradient}
            </span>
            <span className="block">{hero.titleBottom}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#85B7EB] md:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#185FA5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0C447C]"
            >
              {hero.primaryCta}
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-[#E6F1FB]/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#E6F1FB] transition hover:bg-white/10"
            >
              {hero.secondaryCta}
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
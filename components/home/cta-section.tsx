"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/container";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#07172E] py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,138,221,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(212,160,23,0.12),_transparent_25%)]" />
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#185FA5]/20 blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-white/10 bg-white/5 px-6 py-12 text-center shadow-2xl backdrop-blur-sm sm:px-10 md:px-14 md:py-16"
        >
          <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#85B7EB]">
            Let’s Build Your Growth System
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Ready to Turn Your Brand Into a{" "}
            <span className="bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017] bg-clip-text text-transparent">
              Conversion Machine
            </span>
            ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B5D4F4] md:text-lg">
            Partner with GrowPep to build a premium digital presence, stronger
            trust, and a growth-focused system designed to generate real business
            results.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-w-[190px] items-center justify-center rounded-full bg-[#185FA5] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0C447C]"
            >
              Get Free Audit
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#E6F1FB] transition hover:bg-white/10"
            >
              Book a Call
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#85B7EB]">
            <span>Fast Response</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#378ADD] sm:block" />
            <span>Strategy-Driven Execution</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#378ADD] sm:block" />
            <span>Built for Real Growth</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
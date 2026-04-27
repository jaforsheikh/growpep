"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/container";
import SectionHeading from "@/components/layout/section-heading";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#07172E] py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,138,221,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(212,160,23,0.10),_transparent_24%)]" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Featured Case Studies"
          title="Proof Through"
          gradientText="Measurable Results"
          description="We focus on outcomes that matter — stronger conversion, better ROI, improved trust, and scalable digital growth."
          theme="dark"
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-[#378ADD]/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#378ADD]/10"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB]/10 px-3 py-1 text-xs font-medium tracking-wide text-[#85B7EB]">
                  {study.category}
                </span>

                <span className="text-sm font-medium text-[#D4A017]">
                  Success Story
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold leading-snug text-white">
                {study.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#B5D4F4]">
                {study.description}
              </p>

              <div className="mt-8 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-[#0C2442]/70 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#85B7EB]">
                    Result 01
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {study.resultOne}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0C2442]/70 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#85B7EB]">
                    Result 02
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {study.resultTwo}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0C2442]/70 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#85B7EB]">
                    Result 03
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {study.resultThree}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <Link
                  href={study.href}
                  className="inline-flex items-center text-sm font-semibold text-[#85B7EB] transition hover:text-white"
                >
                  View Case Study
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />
              </div>

              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#378ADD]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
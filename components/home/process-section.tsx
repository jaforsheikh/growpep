"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";
import SectionHeading from "@/components/layout/section-heading";
import { processSteps } from "@/data/process";

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(55,138,221,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(212,160,23,0.08),_transparent_24%)]" />

      <Container className="relative z-10">
        <SectionHeading
          badge="How We Work"
          title="A Simple Process for"
          gradientText="Powerful Growth"
          description="Our process is built to keep things clear, strategic, and results-driven from the first conversation to long-term scaling."
          theme="light"
        />

        <div className="relative mt-14 grid gap-6 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#378ADD]/30 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-5xl font-bold leading-none text-[#E2E8F0] transition duration-300 group-hover:text-[#378ADD]/20">
                  {item.step}
                </span>

                <div className="h-3 w-3 rounded-full bg-[#1D9E75] shadow-[0_0_20px_rgba(29,158,117,0.45)]" />
              </div>

              <h3 className="text-xl font-semibold text-[#0F172A]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#64748B]">
                {item.description}
              </p>

              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017]" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
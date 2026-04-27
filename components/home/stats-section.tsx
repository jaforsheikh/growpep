"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/container";
import SectionHeading from "@/components/layout/section-heading";
import { statsData } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="relative bg-[#F5F7FA] py-20 md:py-24">
      <Container>
        <SectionHeading
          badge="Growth Highlights"
          title="Built for"
          gradientText="Real Business Results"
          description="We focus on measurable growth, premium execution, and systems that help brands scale with confidence."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#378ADD]/30 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-[#E6F1FB] px-4 py-2 text-3xl font-bold text-[#185FA5] shadow-sm transition group-hover:bg-[#185FA5] group-hover:text-white">
                {stat.number}
              </div>

              <h3 className="text-xl font-semibold text-[#0F172A]">
                {stat.label}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#64748B]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
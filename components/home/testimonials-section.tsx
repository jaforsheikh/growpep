"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Container from "@/components/layout/container";
import SectionHeading from "@/components/layout/section-heading";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(55,138,221,0.08),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(212,160,23,0.08),_transparent_24%)]" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Client Testimonials"
          title="Trusted by Brands That Want"
          gradientText="Premium Growth"
          description="Real client feedback that reflects our focus on quality, trust, strategy, and measurable digital performance."
          theme="light"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#378ADD]/30 hover:shadow-xl"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: item.rating }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className="fill-[#D4A017] text-[#D4A017]"
                  />
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-[#475569]">
                “{item.review}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#185FA5] via-[#378ADD] to-[#D4A017] text-sm font-bold text-white shadow-lg shadow-blue-500/10">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-[#0F172A]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#64748B]">{item.role}</p>
                </div>
              </div>

              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#85B7EB] via-[#378ADD] to-[#D4A017]" />
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
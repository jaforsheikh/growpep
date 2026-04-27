"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/container";
import SectionHeading from "@/components/layout/section-heading";
import { servicesData } from "@/content/services";

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#07172E] py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(55,138,221,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(212,160,23,0.10),_transparent_28%)]" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Our Core Services"
          title="Smart Solutions for"
          gradientText="Modern Brand Growth"
          description="GrowPep delivers strategy, design, development, and marketing execution built to move your business forward."
          theme="dark"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-[#378ADD]/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#378ADD]/10"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex rounded-full border border-[#378ADD]/20 bg-[#E6F1FB]/10 px-3 py-1 text-xs font-medium tracking-wide text-[#85B7EB]">
                    {service.badge}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#185FA5] via-[#378ADD] to-[#D4A017] text-white shadow-lg shadow-blue-500/10">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold leading-snug text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#B5D4F4]">
                  {service.description}
                </p>

                <div className="mt-8">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-semibold text-[#85B7EB] transition hover:text-white"
                  >
                    Explore Service
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>

                <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#378ADD]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
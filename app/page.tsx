import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import StatsSection from "@/components/home/stats-section";
import ServicesSection from "@/components/home/services-section";
import ProcessSection from "@/components/home/process-section";
import CaseStudiesSection from "@/components/home/case-studies-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import CtaSection from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Premium Digital Growth Agency",
  description:
    "GrowPep is a premium digital growth agency helping businesses grow through web design, development, branding, social media management, and paid media services.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
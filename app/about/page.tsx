import type { Metadata } from "next";
import AboutHero from "@/components/about/about-hero";
import AboutStory from "@/components/about/about-story";
import AboutValues from "@/components/about/about-values";
import AboutTeam from "@/components/about/about-team";
import AboutCta from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about GrowPep, our story, values, team structure, and how we help brands grow with trust, strategy, and premium digital execution.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCta />
    </main>
  );
}
import type { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/portfolio-hero";
import PortfolioGrid from "@/components/portfolio/portfolio-grid";
import PortfolioCta from "@/components/portfolio/portfolio-cta";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore GrowPep portfolio and case studies showing strategy, design, development, performance, and measurable digital growth results.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCta />
    </main>
  );
}
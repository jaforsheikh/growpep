export type PortfolioItem = {
  slug: string;
  category: string;
  title: string;
  description: string;
  challenge: string;
  strategy: string;
  results: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "service-brand-growth",
    category: "Paid Media",
    title: "Scaled Lead Generation for a Service Brand",
    description:
      "We restructured ad campaigns, improved landing page messaging, and optimized the funnel for better conversion quality and stronger ROI.",
    challenge:
      "The brand was spending on ads but struggling with weak lead quality and poor funnel performance.",
    strategy:
      "We improved the ad structure, refined messaging, and aligned the landing experience with a more conversion-focused strategy.",
    results: [
      "3.4x ROAS",
      "+182% Qualified Leads",
      "-37% Cost Per Lead",
    ],
  },
  {
    slug: "wordpress-conversion-rebuild",
    category: "Web Design",
    title: "Rebuilt a WordPress Website for Higher Conversion",
    description:
      "We redesigned the site structure, improved trust signals, and created a cleaner journey for visitors to take action.",
    challenge:
      "The old site looked outdated, created weak trust, and was not converting enough visitors into inquiries.",
    strategy:
      "We rebuilt the layout with stronger messaging, clearer structure, and a more polished premium presentation.",
    results: [
      "+96% Engagement",
      "+41% Inquiry Rate",
      "-29% Bounce Rate",
    ],
  },
  {
    slug: "modern-web-platform",
    category: "Full Stack Development",
    title: "Built a Modern Growth-Focused Web Platform",
    description:
      "We developed a fast, scalable Next.js experience with cleaner UX, stronger messaging, and better technical performance.",
    challenge:
      "The previous web experience lacked speed, flexibility, and a structure built for modern digital growth.",
    strategy:
      "We designed and built a more scalable frontend system using reusable sections and performance-focused architecture.",
    results: [
      "95+ Lighthouse",
      "+58% Demo Requests",
      "+73% Page Speed",
    ],
  },
  {
    slug: "brand-trust-system",
    category: "Reputation Management",
    title: "Strengthened Digital Trust for a Growing Brand",
    description:
      "We improved brand perception, authority signals, and digital consistency to support stronger trust and credibility.",
    challenge:
      "The brand had a weak trust presence online and needed a more credible digital footprint.",
    strategy:
      "We focused on trust signals, stronger positioning, and a cleaner authority-building direction across digital channels.",
    results: [
      "+67% Brand Trust Signals",
      "+39% Inquiry Confidence",
      "Stronger Online Authority",
    ],
  },
  {
    slug: "paid-growth-optimization",
    category: "Media Buying",
    title: "Optimized Paid Campaigns for Better ROI",
    description:
      "We refined campaign structure, improved targeting direction, and aligned the funnel for stronger conversion quality.",
    challenge:
      "High ad spend was not translating into the right leads or consistent performance.",
    strategy:
      "We simplified the campaign structure, improved audience alignment, and focused on performance-based optimization.",
    results: [
      "+121% Conversion Quality",
      "-31% CPA",
      "Higher ROI Stability",
    ],
  },
  {
    slug: "social-brand-positioning",
    category: "Social Media",
    title: "Elevated Social Presence for Better Brand Positioning",
    description:
      "We improved content direction, posting consistency, and overall visual perception across social channels.",
    challenge:
      "The brand’s social presence felt inconsistent and lacked a strong premium identity.",
    strategy:
      "We created a more cohesive content direction with stronger visuals, messaging, and posting structure.",
    results: [
      "+84% Profile Engagement",
      "+52% Content Consistency",
      "Stronger Brand Perception",
    ],
  },
];
export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePageType = {
  slug: string;
  badge: string;
  title: string;
  gradientText: string;
  description: string;
  introTitle: string;
  introDescription: string;
  problemTitle: string;
  problemPoints: string[];
  solutionTitle: string;
  solutionPoints: string[];
  features: string[];
  pricing: PricingPlan[];
  faqs: FaqItem[];
};

export const servicePages: ServicePageType[] = [
  {
    slug: "social-media-management",
    badge: "Growth Content",
    title: "Social Media",
    gradientText: "Management",
    description:
      "Build a stronger brand presence with strategic content, consistent posting, audience engagement, and conversion-focused social growth.",
    introTitle: "Social media management that grows trust and visibility",
    introDescription:
      "We help brands create a more professional social media presence through strategy, content direction, publishing consistency, and audience engagement built for long-term brand growth.",
    problemTitle: "What problems we solve",
    problemPoints: [
      "Inconsistent posting and weak brand presence",
      "Low engagement and unclear messaging",
      "Content that looks random instead of strategic",
      "Poor social media trust and conversion flow",
    ],
    solutionTitle: "What GrowPep delivers",
    solutionPoints: [
      "Content strategy aligned with your business goals",
      "Branded visual direction and posting consistency",
      "Audience engagement support and optimization",
      "A cleaner system built for growth and trust",
    ],
    features: [
      "Monthly content planning",
      "Caption writing and post structuring",
      "Branded content direction",
      "Profile optimization",
      "Engagement guidance",
      "Performance review and improvement",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$299/mo",
        description: "Best for small brands getting started.",
        features: [
          "12 posts per month",
          "Basic strategy support",
          "Caption writing",
          "Monthly reporting",
        ],
      },
      {
        name: "Growth",
        price: "$599/mo",
        description: "Best for businesses ready to scale.",
        highlighted: true,
        features: [
          "20 posts per month",
          "Full content planning",
          "Brand-focused creative direction",
          "Engagement support",
          "Monthly optimization review",
        ],
      },
      {
        name: "Scale",
        price: "$999/mo",
        description: "Best for brands needing stronger momentum.",
        features: [
          "30 posts per month",
          "Advanced strategy support",
          "Priority creative direction",
          "Weekly review",
          "Growth-focused optimization",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you create the content strategy?",
        answer:
          "Yes. We build a content direction based on your business, audience, and positioning goals.",
      },
      {
        question: "Can you manage posting consistency?",
        answer:
          "Yes. We help structure content planning and posting for a more professional presence.",
      },
    ],
  },
  {
    slug: "wordpress-website-design",
    badge: "Business Website",
    title: "WordPress Website",
    gradientText: "Design",
    description:
      "Modern, responsive, trust-building WordPress websites designed to convert visitors into leads, inquiries, and paying clients.",
    introTitle: "Professional WordPress websites built for conversion",
    introDescription:
      "We design premium WordPress websites that look credible, load cleanly, and guide users toward the right action with better structure and stronger messaging.",
    problemTitle: "What problems we solve",
    problemPoints: [
      "Outdated website design",
      "Weak first impression and low trust",
      "Poor mobile responsiveness",
      "Confusing layout and low inquiry rate",
    ],
    solutionTitle: "What GrowPep delivers",
    solutionPoints: [
      "Premium custom design direction",
      "Responsive layout for all devices",
      "Clear service-focused page structure",
      "Conversion-oriented website experience",
    ],
    features: [
      "Custom homepage design",
      "Service page layout",
      "Mobile responsive build",
      "Speed-conscious structure",
      "Contact form integration",
      "Brand-consistent UI styling",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$399",
        description: "Ideal for basic business websites.",
        features: [
          "Up to 3 pages",
          "Responsive layout",
          "Contact form",
          "Basic on-page structure",
        ],
      },
      {
        name: "Growth",
        price: "$799",
        description: "Ideal for growing service businesses.",
        highlighted: true,
        features: [
          "Up to 6 pages",
          "Custom page sections",
          "Premium responsive design",
          "Trust-focused layout",
          "Conversion improvements",
        ],
      },
      {
        name: "Scale",
        price: "$1499",
        description: "Ideal for premium business presence.",
        features: [
          "Up to 10 pages",
          "Advanced custom sections",
          "High-conversion structure",
          "Performance-focused build",
          "Priority support",
        ],
      },
    ],
    faqs: [
      {
        question: "Will the website be mobile responsive?",
        answer:
          "Yes. Every page is designed to work smoothly across desktop, tablet, and mobile devices.",
      },
      {
        question: "Can I update content later?",
        answer:
          "Yes. The structure is built so content and sections can be updated more easily later.",
      },
    ],
  },
  {
    slug: "full-stack-development",
    badge: "Next.js Build",
    title: "Full Stack",
    gradientText: "Development",
    description:
      "Custom web experiences built with modern technologies like Next.js and TypeScript for performance, scalability, and premium UX.",
    introTitle: "Modern full stack development for serious digital growth",
    introDescription:
      "We build scalable, professional web applications and websites with modern architecture, clean UX, and performance-focused implementation.",
    problemTitle: "What problems we solve",
    problemPoints: [
      "Slow or outdated web experience",
      "Unscalable frontend structure",
      "Weak performance and UX",
      "Poor technical foundation for growth",
    ],
    solutionTitle: "What GrowPep delivers",
    solutionPoints: [
      "Modern Next.js development",
      "Responsive component-based architecture",
      "Cleaner user experience flow",
      "Scalable structure for future growth",
    ],
    features: [
      "Next.js development",
      "TypeScript architecture",
      "Responsive component system",
      "Reusable sections",
      "Performance-focused UI",
      "Scalable folder structure",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$699",
        description: "Best for smaller builds and MVP pages.",
        features: [
          "Small web build",
          "Responsive UI",
          "Clean code structure",
          "Basic deployment support",
        ],
      },
      {
        name: "Growth",
        price: "$1499",
        description: "Best for growing product or service builds.",
        highlighted: true,
        features: [
          "Multi-section responsive build",
          "Reusable component system",
          "Better performance structure",
          "Deployment-ready setup",
        ],
      },
      {
        name: "Scale",
        price: "$2999+",
        description: "Best for advanced product systems.",
        features: [
          "Custom advanced build",
          "Scalable architecture",
          "Premium UI system",
          "Ongoing technical improvements",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you use modern frameworks?",
        answer:
          "Yes. We build with modern tools like Next.js, TypeScript, and scalable frontend structure.",
      },
      {
        question: "Is the code reusable and organized?",
        answer:
          "Yes. The project is organized section-by-section so updates are easier later.",
      },
    ],
  },
  {
    slug: "reputation-management",
    badge: "Trust & Authority",
    title: "Reputation",
    gradientText: "Management",
    description:
      "Strengthen online trust, improve brand perception, and build a more credible presence that supports long-term business growth.",
    introTitle: "Build stronger trust around your brand",
    introDescription:
      "We help brands improve public perception, strengthen credibility, and create a more trust-focused digital presence across their key platforms.",
    problemTitle: "What problems we solve",
    problemPoints: [
      "Weak online trust signals",
      "Negative perception issues",
      "Inconsistent brand credibility",
      "Poor authority across digital channels",
    ],
    solutionTitle: "What GrowPep delivers",
    solutionPoints: [
      "Brand trust improvement strategy",
      "Review and authority positioning support",
      "Stronger digital credibility structure",
      "Long-term reputation strengthening",
    ],
    features: [
      "Reputation audit",
      "Trust signal improvements",
      "Brand positioning support",
      "Review strategy guidance",
      "Authority-building recommendations",
      "Ongoing improvement direction",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$349/mo",
        description: "Basic trust improvement support.",
        features: [
          "Reputation review",
          "Improvement roadmap",
          "Basic support",
        ],
      },
      {
        name: "Growth",
        price: "$699/mo",
        description: "Best for stronger credibility improvement.",
        highlighted: true,
        features: [
          "Trust optimization support",
          "Brand reputation planning",
          "Authority improvement direction",
          "Monthly review",
        ],
      },
      {
        name: "Scale",
        price: "$1299/mo",
        description: "Best for premium reputation growth systems.",
        features: [
          "Advanced reputation strategy",
          "Ongoing support",
          "Priority improvements",
          "Long-term trust system",
        ],
      },
    ],
    faqs: [
      {
        question: "Can reputation management improve trust?",
        answer:
          "Yes. Stronger reputation signals can improve brand credibility and customer confidence.",
      },
      {
        question: "Is this useful for local and online brands?",
        answer:
          "Yes. It works for both local service businesses and brands building online authority.",
      },
    ],
  },
  {
    slug: "media-buying",
    badge: "Paid Growth",
    title: "Media Buying",
    gradientText: "Services",
    description:
      "Performance-focused paid media management across Facebook Ads and Google Ads built to generate more qualified traffic, leads, and ROI.",
    introTitle: "Ad strategy focused on better ROI and lead quality",
    introDescription:
      "We help brands improve campaign performance with stronger ad structure, better targeting direction, and landing page alignment for higher conversion quality.",
    problemTitle: "What problems we solve",
    problemPoints: [
      "High ad spend with weak results",
      "Poor targeting and conversion quality",
      "Weak funnel alignment",
      "Unclear campaign structure",
    ],
    solutionTitle: "What GrowPep delivers",
    solutionPoints: [
      "Performance-driven ad strategy",
      "Campaign structure improvement",
      "Better conversion alignment",
      "Optimization support for stronger ROI",
    ],
    features: [
      "Ad account audit",
      "Campaign structure planning",
      "Audience targeting review",
      "Creative direction guidance",
      "Landing page alignment",
      "Performance optimization support",
    ],
    pricing: [
      {
        name: "Starter",
        price: "$399/mo",
        description: "Best for smaller ad accounts.",
        features: [
          "1 platform support",
          "Basic optimization",
          "Monthly reporting",
          "Campaign review",
        ],
      },
      {
        name: "Growth",
        price: "$799/mo",
        description: "Best for scaling campaigns.",
        highlighted: true,
        features: [
          "Facebook or Google Ads management",
          "Optimization support",
          "Better conversion planning",
          "Monthly strategy review",
        ],
      },
      {
        name: "Scale",
        price: "$1499/mo",
        description: "Best for aggressive growth goals.",
        features: [
          "Multi-campaign management",
          "Advanced optimization",
          "Landing page alignment",
          "Priority strategy support",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you manage Facebook and Google Ads?",
        answer:
          "Yes. We support both platforms depending on your business goals and campaign strategy.",
      },
      {
        question: "Can you improve conversion quality?",
        answer:
          "Yes. We focus on funnel alignment, targeting, and performance improvements to increase qualified leads.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) => {
  return servicePages.find((service) => service.slug === slug);
};
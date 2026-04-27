import {
  BarChart3,
  Globe,
  LayoutDashboard,
  Megaphone,
  ShieldCheck,
} from "lucide-react";

export const servicesData = [
  {
    title: "Social Media Management",
    description:
      "Content planning, creative posting, brand positioning, and audience engagement to grow your digital presence.",
    icon: Megaphone,
    href: "/services/social-media-management",
    badge: "Growth Content",
  },
  {
    title: "WordPress Website Design",
    description:
      "Modern, fast, conversion-focused WordPress websites tailored to your brand, audience, and business goals.",
    icon: Globe,
    href: "/services/wordpress-website-design",
    badge: "Business Website",
  },
  {
    title: "Full Stack Development",
    description:
      "Custom web applications built with Next.js, TypeScript, and scalable architecture for modern brands and startups.",
    icon: LayoutDashboard,
    href: "/services/full-stack-development",
    badge: "Next.js Build",
  },
  {
    title: "Reputation Management",
    description:
      "Build trust, strengthen brand perception, and protect your online image with proactive reputation strategies.",
    icon: ShieldCheck,
    href: "/services/reputation-management",
    badge: "Trust & Authority",
  },
  {
    title: "Media Buying",
    description:
      "Performance-driven Facebook and Google Ads campaigns focused on qualified traffic, leads, and measurable ROI.",
    icon: BarChart3,
    href: "/services/media-buying",
    badge: "Paid Growth",
  },
];
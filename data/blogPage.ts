export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      points?: string[];
    }[];
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-build-a-high-converting-agency-website",
    category: "Web Design",
    title: "How to Build a High-Converting Agency Website",
    excerpt:
      "Learn the core structure, sections, messaging, and design principles that help agency websites convert more visitors into qualified leads.",
    readTime: "6 min read",
    date: "April 2026",
    author: "GrowPep Team",
    featured: true,
    content: {
      intro:
        "A high-converting agency website is not just about looking modern. It needs the right structure, strong messaging, clear calls to action, and a layout that guides visitors toward trust and inquiry.",
      sections: [
        {
          heading: "Start with a clear hero section",
          paragraphs: [
            "Your hero section should quickly explain what you do, who you help, and why your service matters.",
            "A weak hero creates confusion. A strong hero improves clarity and keeps the visitor engaged.",
          ],
          points: [
            "Strong headline",
            "Clear supporting description",
            "Primary CTA button",
            "Trust-building visual style",
          ],
        },
        {
          heading: "Build trust through structure",
          paragraphs: [
            "Most service businesses lose conversions because the website feels random, generic, or outdated.",
            "A structured homepage with services, process, testimonials, case studies, and CTA sections improves trust and makes your offer easier to understand.",
          ],
        },
        {
          heading: "Focus on conversion, not just beauty",
          paragraphs: [
            "A premium website should guide users toward action. That means contact buttons, clear section flow, service pages, and consistent messaging.",
            "Design should support performance, not distract from it.",
          ],
        },
      ],
    },
  },
  {
    slug: "why-modern-brands-need-better-digital-positioning",
    category: "Brand Strategy",
    title: "Why Modern Brands Need Better Digital Positioning",
    excerpt:
      "Discover why brand clarity, trust signals, and strong digital presentation matter more than ever in today’s competitive market.",
    readTime: "5 min read",
    date: "April 2026",
    author: "GrowPep Team",
    content: {
      intro:
        "Digital positioning affects how people perceive your business online. If your brand looks unclear, inconsistent, or weak, trust drops and conversion becomes harder.",
      sections: [
        {
          heading: "Positioning shapes perception",
          paragraphs: [
            "Your website, content, visuals, and messaging all influence how trustworthy your brand feels.",
            "Modern brands need stronger consistency to stand out in crowded markets.",
          ],
        },
        {
          heading: "Trust signals matter more than ever",
          paragraphs: [
            "Users look for visual confidence, clarity, testimonials, structure, and authority signals before they take action.",
            "Good positioning makes your brand look more credible and premium.",
          ],
        },
      ],
    },
  },
  {
    slug: "wordpress-vs-nextjs-for-business-websites",
    category: "Development",
    title: "WordPress vs Next.js for Business Websites",
    excerpt:
      "A practical comparison of two popular website approaches, including flexibility, performance, scalability, and long-term growth value.",
    readTime: "7 min read",
    date: "April 2026",
    author: "GrowPep Team",
    content: {
      intro:
        "Both WordPress and Next.js can be useful, but they serve different needs depending on your business goals, flexibility requirements, and long-term scaling plans.",
      sections: [
        {
          heading: "When WordPress makes sense",
          paragraphs: [
            "WordPress is practical for many business websites that need easier editing, fast deployment, and lower technical complexity.",
          ],
          points: [
            "Easy content editing",
            "Large plugin ecosystem",
            "Good for common business websites",
          ],
        },
        {
          heading: "When Next.js is a stronger choice",
          paragraphs: [
            "Next.js is a better fit for premium custom builds, stronger performance, and scalable modern frontend systems.",
            "It works especially well for agencies, SaaS, startups, and highly customized websites.",
          ],
        },
      ],
    },
  },
  {
    slug: "how-social-media-management-supports-brand-growth",
    category: "Social Media",
    title: "How Social Media Management Supports Brand Growth",
    excerpt:
      "See how strategy, consistency, and better content systems can improve trust, visibility, and long-term audience growth.",
    readTime: "4 min read",
    date: "April 2026",
    author: "GrowPep Team",
    content: {
      intro:
        "Social media management is not just about posting regularly. It is about building a stronger brand presence through strategy, consistency, and clearer messaging.",
      sections: [
        {
          heading: "Consistency builds recognition",
          paragraphs: [
            "Brands grow faster when their content feels structured and visually consistent.",
            "A random content approach usually weakens positioning.",
          ],
        },
        {
          heading: "Strategy improves outcomes",
          paragraphs: [
            "When content aligns with business goals, brand identity, and audience needs, social media becomes more useful for growth.",
          ],
        },
      ],
    },
  },
  {
    slug: "what-makes-a-premium-service-brand-look-trustworthy",
    category: "Reputation",
    title: "What Makes a Premium Service Brand Look Trustworthy",
    excerpt:
      "Explore the visual, structural, and messaging elements that increase brand credibility and improve conversion confidence.",
    readTime: "5 min read",
    date: "April 2026",
    author: "GrowPep Team",
    content: {
      intro:
        "Trust is one of the strongest conversion factors for service brands. A brand that looks more credible usually converts better.",
      sections: [
        {
          heading: "Visual quality matters",
          paragraphs: [
            "Clean design, whitespace, typography, and better color usage all help a brand feel more premium.",
          ],
        },
        {
          heading: "Structure creates confidence",
          paragraphs: [
            "Case studies, testimonials, clear service pages, and strong calls to action help users feel more secure about taking the next step.",
          ],
        },
      ],
    },
  },
  {
    slug: "how-to-improve-roi-from-facebook-and-google-ads",
    category: "Media Buying",
    title: "How to Improve ROI from Facebook and Google Ads",
    excerpt:
      "Understand the role of campaign structure, landing page alignment, targeting direction, and optimization for stronger ad performance.",
    readTime: "6 min read",
    date: "April 2026",
    author: "GrowPep Team",
    content: {
      intro:
        "Improving ROI from paid ads requires more than better targeting. It also depends on funnel alignment, landing page quality, and performance analysis.",
      sections: [
        {
          heading: "Campaign structure affects efficiency",
          paragraphs: [
            "Poor campaign structure creates wasted spend and weak optimization signals.",
            "A cleaner structure improves decision-making and data quality.",
          ],
        },
        {
          heading: "Landing pages influence conversion quality",
          paragraphs: [
            "Even strong ads can fail if the landing page experience is weak, unclear, or unconvincing.",
          ],
        },
      ],
    },
  },
];

export const featuredPost = blogPosts.find((post) => post.featured);
export const regularPosts = blogPosts.filter((post) => !post.featured);

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};
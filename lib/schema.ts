import type { BlogPost } from "@/data/blogPage";
import type { ServicePageType } from "@/data/servicePages";

const siteUrl = "https://www.growpep.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GrowPep",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    sameAs: [
      "https://www.facebook.com/GrowPep/",
      "https://www.instagram.com/growpepllc/",
      "https://www.pinterest.com/growpepllc/",
      "https://www.linkedin.com/showcase/growpep",
    ],
    description:
      "GrowPep is a premium digital growth agency offering web design, full stack development, social media management, reputation management, and media buying services.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GrowPep",
    url: siteUrl,
    description:
      "Premium digital growth agency website for web design, development, branding, and marketing services.",
    publisher: {
      "@type": "Organization",
      name: "GrowPep",
    },
  };
}

export function serviceSchema(service: ServicePageType) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} ${service.gradientText}`,
    serviceType: `${service.title} ${service.gradientText}`,
    provider: {
      "@type": "Organization",
      name: "GrowPep",
      url: siteUrl,
    },
    areaServed: "Worldwide",
    description: service.description,
    url: `${siteUrl}/services/${service.slug}`,
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "GrowPep",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.ico`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };
}
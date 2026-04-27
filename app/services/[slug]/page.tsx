import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, servicePages } from "@/data/servicePages";
import ServiceHero from "@/components/services/service-hero";
import ServiceProblemSolution from "@/components/services/service-problem-solution";
import ServiceFeatures from "@/components/services/service-features";
import ServicePricing from "@/components/services/service-pricing";
import ServiceFaq from "@/components/services/service-faq";
import ServiceCta from "@/components/services/service-cta";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} ${service.gradientText}`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} ${service.gradientText} | GrowPep`,
      description: service.description,
      url: `https://www.growpep.com/services/${service.slug}`,
      siteName: "GrowPep",
      type: "article",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${service.title} ${service.gradientText} - GrowPep`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} ${service.gradientText} | GrowPep`,
      description: service.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ServiceSinglePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceHero service={service} />
      <ServiceProblemSolution service={service} />
      <ServiceFeatures service={service} />
      <ServicePricing service={service} />
      <ServiceFaq service={service} />
      <ServiceCta />
    </main>
  );
}
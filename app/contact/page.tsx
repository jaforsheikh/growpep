import type { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import ContactInfo from "@/components/contact/contact-info";
import ContactForm from "@/components/contact/contact-form";
import ContactSocial from "@/components/contact/contact-social";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GrowPep for premium web design, development, social media management, reputation management, and media buying services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactSocial />
    </main>
  );
}
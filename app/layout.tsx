import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.growpep.com"),
  title: {
    default: "GrowPep | Premium Digital Growth Agency",
    template: "%s | GrowPep",
  },
  description:
    "GrowPep is a premium digital growth agency offering WordPress website design, full stack development, social media management, reputation management, and media buying services.",
  keywords: [
    "GrowPep",
    "digital marketing agency",
    "WordPress website design",
    "full stack development",
    "Next.js agency",
    "social media management",
    "reputation management",
    "media buying",
    "Facebook ads agency",
    "Google ads agency",
    "web design agency",
  ],
  authors: [{ name: "GrowPep" }],
  creator: "GrowPep",
  publisher: "GrowPep",
  applicationName: "GrowPep",
  category: "Digital Agency",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GrowPep | Premium Digital Growth Agency",
    description:
      "GrowPep helps brands grow through strategy, design, development, and performance-focused digital systems.",
    url: "https://www.growpep.com",
    siteName: "GrowPep",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GrowPep - Premium Digital Growth Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowPep | Premium Digital Growth Agency",
    description:
      "GrowPep helps brands grow through strategy, design, development, and performance-focused digital systems.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
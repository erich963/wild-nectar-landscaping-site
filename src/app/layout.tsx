import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wild Nectar Landscaping | Ecological Landscaping in Gray, Maine",
    template: "%s | Wild Nectar Landscaping",
  },
  description:
    "Wild Nectar Landscaping provides ecological landscaping services in Gray, Maine and surrounding areas. Native plantings, pollinator gardens, sustainable design, and land stewardship.",
  keywords: [
    "ecological landscaping",
    "native plants",
    "pollinator garden",
    "sustainable landscaping",
    "Gray Maine",
    "Maine landscaping",
    "land stewardship",
    "organic lawn care",
    "Wild Nectar Landscaping",
  ],
  authors: [{ name: "Wild Nectar Landscaping" }],
  openGraph: {
    title: "Wild Nectar Landscaping | Ecological Landscaping in Gray, Maine",
    description:
      "Ecological landscaping rooted in native plantings, pollinator gardens, and sustainable land stewardship in Gray, Maine.",
    url: "https://wildnectarlandscaping.com",
    siteName: "Wild Nectar Landscaping",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wild Nectar Landscaping",
    description:
      "Ecological landscaping rooted in native plantings and sustainable land stewardship in Gray, Maine.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Wild Nectar Landscaping",
  description:
    "Ecological landscaping services including native plantings, pollinator gardens, and sustainable land stewardship.",
  url: "https://wildnectarlandscaping.com",
  telephone: "603-667-6886",
  email: "Wildnectarlandscaping@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gray",
    addressRegion: "ME",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/wildnectarlandscaping",
    "https://www.facebook.com/WildNectarMaine",
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 43.8876,
      longitude: -70.3381,
    },
    geoRadius: "50000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

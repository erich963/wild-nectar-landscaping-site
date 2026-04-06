import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | Wild Nectar Landscaping",
  description:
    "Schedule a consultation with Wild Nectar Landscaping. Get a custom ecological landscaping plan for your Maine property featuring native plants, habitat restoration, and sustainable design.",
};

export default function BookOnlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

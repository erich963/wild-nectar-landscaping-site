import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Wild Nectar Landscaping",
  description:
    "Get in touch with Wild Nectar Landscaping in Gray, Maine. Reach out for ecological landscaping consultations, native plant garden design, and habitat restoration services.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

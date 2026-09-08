import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "25 High Courts of India Directory | Official Websites & Jurisdictions",
  description: "Official directory of all 25 Constitutional High Courts of India. Access official websites, cause lists, case status, benches, and territorial jurisdictions.",
  keywords: [
    "High Courts of India",
    "25 High Courts India",
    "Allahabad High Court",
    "Bombay High Court",
    "Delhi High Court",
    "Madras High Court",
    "Calcutta High Court",
    "High Court Case Status",
    "High Court Cause List",
    "Advocate Tushar Garg",
    "Advocate on Record"
  ],
  alternates: {
    canonical: "/high-courts",
  },
  openGraph: {
    title: "25 High Courts of India | Complete Judicial Directory",
    description: "Official portals, benches, and jurisdictions of all 25 Constitutional High Courts in India.",
  },
};

export default function HighCourtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

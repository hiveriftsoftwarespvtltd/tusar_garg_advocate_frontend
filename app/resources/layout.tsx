import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Resources, Glossaries & Procedural Guides | Advocate Tushar Garg",
  description: "Comprehensive Indian legal resources, procedural flowcharts, court fee guides, legal glossary, Latin maxims, and practice guidelines by Advocate Tushar Garg (AOR).",
  keywords: [
    "Legal Resources India",
    "Legal Glossary",
    "Latin Legal Maxims",
    "Court Procedures India",
    "Litigation Guides",
    "Legal Drafting Templates",
    "Advocate Tushar Garg",
    "Supreme Court of India"
  ],
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Legal Resources & Litigant Practice Guides | Advocate Tushar Garg",
    description: "Explore legal glossaries, procedural guides, and legal tools curated by Supreme Court Advocate-on-Record Tushar Garg.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

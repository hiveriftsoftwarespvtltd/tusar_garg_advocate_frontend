import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Articles & Case Analysis | Advocate Tushar Garg (AOR)",
  description: "Read in-depth legal articles, case analyses, practice guides, and constitutional insights authored by Advocate Tushar Garg, Advocate-on-Record, Supreme Court of India.",
  keywords: [
    "Legal Articles India",
    "Supreme Court Analysis",
    "Constitutional Law Articles",
    "Criminal Law Insights",
    "Bail Jurisprudence",
    "Writ Petition Drafting",
    "Advocate Tushar Garg",
    "Advocate on Record",
    "Indian Legal Research",
    "Law Case Notes"
  ],
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "Legal Articles & Expert Case Commentaries | Advocate Tushar Garg",
    description: "In-depth legal articles and case commentaries on Supreme Court precedents, criminal jurisprudence, and constitutional matters.",
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

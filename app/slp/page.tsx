import { Metadata } from "next";
import SlpClientView from "./SlpClientView";

import { getSeoByRoute } from "@/lib/api/seo";

const fallbackMetadata: Metadata = {
  title: "Special Leave Petitions (SLP Article 136) | Supreme Court of India - Advocate Tushar Garg",
  description: "Comprehensive legal guide on Special Leave Petitions (SLP) under Article 136 of the Constitution of India. Understand Civil vs Criminal SLP grounds, 90-day limitation period, AOR drafting, Motion Bench procedure, landmark Apex precedents & legal consultation.",
  keywords: [
    "Special Leave Petition Article 136",
    "Supreme Court SLP India",
    "Advocate on Record SLP",
    "Civil SLP High Court Appeal",
    "Criminal SLP Bail Supreme Court",
    "Article 136 Constitution of India",
    "SLP Limitation Period 90 Days",
    "Tushar Garg Advocate on Record"
  ],
  alternates: {
    canonical: "/slp",
  },
  openGraph: {
    title: "Special Leave Petitions (SLP under Art 136) | Supreme Court Advocate Tushar Garg",
    description: "Appellate litigation before the Supreme Court of India challenging High Court judgments, decrees, and interlocutory orders.",
    images: ["https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80"]
  }
};

export async function generateMetadata(): Promise<Metadata> {
  return getSeoByRoute("/slp", fallbackMetadata);
}

export default function SlpPage() {
  return <SlpClientView />;
}

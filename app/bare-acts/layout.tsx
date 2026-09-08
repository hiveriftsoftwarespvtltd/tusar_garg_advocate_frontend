import type { Metadata } from "next";

import { getSeoByRoute } from "@/lib/api/seo";

const fallbackMetadata: Metadata = {
  title: "Indian Bare Acts Library & Official Gazette PDFs | Advocate Tushar Garg",
  description:
    "Download official gazette copies of central Bare Acts including the New Criminal Laws 2023 (BNS, BNSS, BSA), Constitution of India, procedural codes, and corporate statutes.",
  keywords: [
    "Indian Bare Acts",
    "Bare Acts PDF Download",
    "New Criminal Laws 2023",
    "Bharatiya Nyaya Sanhita BNS PDF",
    "Bharatiya Nagarik Suraksha Sanhita BNSS PDF",
    "Bharatiya Sakshya Adhiniyam BSA PDF",
    "Constitution of India PDF",
    "Code of Civil Procedure CPC PDF",
    "India Code Bare Acts",
    "Official Gazette Laws"
  ],
  alternates: {
    canonical: "/bare-acts",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return getSeoByRoute("/bare-acts", fallbackMetadata);
}

export default function BareActsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

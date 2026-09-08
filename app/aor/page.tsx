import { Metadata } from "next";
import AorClientView from "./AorClientView";

import { getSeoByRoute } from "@/lib/api/seo";

const fallbackMetadata: Metadata = {
  title: "Advocate-on-Record (AOR) — Supreme Court of India | Advocate Tushar Garg",
  description: "Comprehensive guide to Advocate-on-Record (AOR) practice, statutory entitlement under Article 145, Supreme Court Rules 2013, SLP filings, writ petitions, and chamber representation.",
  keywords: [
    "Advocate on Record",
    "AOR Supreme Court of India",
    "Article 145 Constitution of India",
    "Supreme Court Rules 2013",
    "AOR Examination",
    "Supreme Court Filings",
    "Tushar Garg AOR",
    "Appellate Lawyer Supreme Court"
  ],
  alternates: {
    canonical: "/aor",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return getSeoByRoute("/aor", fallbackMetadata);
}

export default function AorPage() {
  return <AorClientView />;
}

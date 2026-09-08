import { Metadata } from "next";
import LegalDraftsClientView from "./LegalDraftsClientView";

export const metadata: Metadata = {
  title: "Legal Drafts, Notices & Petitions Repository | Advocate Tushar Garg",
  description: "Comprehensive database of court-tested legal drafts, statutory demand notices, bail applications, affidavits, agreements, and power of attorney formats.",
  keywords: [
    "Legal Drafts Repository",
    "Statutory Demand Notice",
    "Bail Application Draft",
    "Affidavit Formats",
    "Power of Attorney Template",
    "Advocate Tushar Garg"
  ],
  alternates: {
    canonical: "/resources/legal-drafts",
  },
  openGraph: {
    title: "Legal Drafts & Court Templates Repository | Advocate Tushar Garg",
    description: "Court-tested legal drafts, statutory demand notices, bail applications, and affidavits.",
    type: "website"
  }
};

export default function LegalDraftsPage() {
  return <LegalDraftsClientView />;
}

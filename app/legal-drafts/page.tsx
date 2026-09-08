import { Metadata } from "next";
import LegalDraftsClientView from "../resources/legal-drafts/LegalDraftsClientView";

export const metadata: Metadata = {
  title: "Legal Drafts, Notices & Petitions Repository | Advocate Tushar Garg",
  description: "Comprehensive database of court-tested legal drafts, statutory demand notices, bail applications, affidavits, agreements, and power of attorney formats.",
  keywords: [
    "Legal Drafts India",
    "Legal Notice Formats",
    "Bail Application Format",
    "Court Petitions Format",
    "Affidavit Templates",
    "Power of Attorney India",
    "Advocate Tushar Garg",
    "Supreme Court Drafting"
  ],
  alternates: {
    canonical: "/legal-drafts",
  },
};

export default function DirectLegalDraftsPage() {
  return <LegalDraftsClientView />;
}

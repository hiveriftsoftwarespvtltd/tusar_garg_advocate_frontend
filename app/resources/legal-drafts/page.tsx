import { Metadata } from "next";
import LegalDraftsClientView from "./LegalDraftsClientView";

export const metadata: Metadata = {
  title: "Legal Drafts, Notices & Petitions Repository | Advocate Tushar Garg",
  description: "Comprehensive database of court-tested legal drafts, statutory demand notices, bail applications, affidavits, agreements, and power of attorney formats.",
  openGraph: {
    title: "Legal Drafts & Court Templates Repository | Advocate Tushar Garg",
    description: "Court-tested legal drafts, statutory demand notices, bail applications, and affidavits.",
    type: "website"
  }
};

export default function LegalDraftsPage() {
  return <LegalDraftsClientView />;
}

import { Metadata } from "next";
import AorClientView from "./AorClientView";

export const metadata: Metadata = {
  title: "Advocate-on-Record (AOR) — Supreme Court of India | Advocate Tushar Garg",
  description: "Comprehensive guide to Advocate-on-Record (AOR) practice, statutory entitlement under Article 145, Supreme Court Rules 2013, SLP filings, writ petitions, and chamber representation.",
};

export default function AorPage() {
  return <AorClientView />;
}

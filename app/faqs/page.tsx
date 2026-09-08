import { Metadata } from "next";
import FaqsClientView from "../resources/faqs/FaqsClientView";

export const metadata: Metadata = {
  title: "Legal FAQs & Litigant Rights Guide | Advocate Tushar Garg",
  description: "Clear answers to critical Indian legal questions regarding Supreme Court litigation, High Court writs, criminal bail, property disputes, and arbitration.",
  keywords: [
    "Legal FAQs India",
    "Supreme Court Questions",
    "High Court Writ FAQ",
    "Bail Rules India",
    "Criminal Law FAQs",
    "Advocate on Record Questions",
    "Advocate Tushar Garg"
  ],
  alternates: {
    canonical: "/faqs",
  },
};

export default function DirectFaqsPage() {
  return <FaqsClientView />;
}

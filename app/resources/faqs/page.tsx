import { Metadata } from "next";
import FaqsClientView from "./FaqsClientView";

export const metadata: Metadata = {
  title: "Legal FAQs & Answers | Advocate Tushar Garg",
  description: "Clear answers to critical Indian legal questions regarding Supreme Court litigation, High Court writs, criminal bail, property disputes, and arbitration.",
  keywords: [
    "Legal FAQs",
    "Supreme Court Litigation FAQ",
    "High Court Writs FAQ",
    "Criminal Bail FAQ",
    "Advocate Tushar Garg"
  ],
  alternates: {
    canonical: "/resources/faqs",
  },
  openGraph: {
    title: "Legal FAQs & Litigant Rights Knowledgebase | Advocate Tushar Garg",
    description: "Clear answers to critical Indian legal questions regarding Supreme Court litigation and bail.",
    type: "website"
  }
};

export default function FaqsPage() {
  return <FaqsClientView />;
}

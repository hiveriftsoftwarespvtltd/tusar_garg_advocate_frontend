import { Metadata } from "next";
import FaqsClientView from "../resources/faqs/FaqsClientView";

export const metadata: Metadata = {
  title: "Legal FAQs & Answers | Advocate Tushar Garg",
  description: "Clear answers to critical Indian legal questions regarding Supreme Court litigation, High Court writs, criminal bail, property disputes, and arbitration."
};

export default function DirectFaqsPage() {
  return <FaqsClientView />;
}

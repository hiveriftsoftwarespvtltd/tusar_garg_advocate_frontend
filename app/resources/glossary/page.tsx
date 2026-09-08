import { Metadata } from "next";
import GlossaryClientView from "./GlossaryClientView";

export const metadata: Metadata = {
  title: "Legal Glossary & Terminology Dictionary | Advocate Tushar Garg",
  description: "Comprehensive A-Z dictionary of Indian legal terms, statutory definitions, court applications, and landmark Supreme Court case citations.",
  keywords: [
    "Legal Glossary India",
    "Indian Law Terms",
    "Constitutional Terms",
    "Criminal Law Definitions",
    "Advocate Tushar Garg"
  ],
  alternates: {
    canonical: "/resources/glossary",
  },
  openGraph: {
    title: "Legal Glossary & Terminology Dictionary | Advocate Tushar Garg",
    description: "Comprehensive A-Z dictionary of Indian legal terms and statutory definitions.",
    type: "website"
  }
};

export default function GlossaryPage() {
  return <GlossaryClientView />;
}

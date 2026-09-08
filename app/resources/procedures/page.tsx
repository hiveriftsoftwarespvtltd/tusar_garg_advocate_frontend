import { Metadata } from "next";
import ProceduresClientView from "./ProceduresClientView";

export const metadata: Metadata = {
  title: "Court Procedures & Filing Roadmaps | Advocate Tushar Garg",
  description: "Step-by-step litigation guides for filing Supreme Court SLPs, criminal bail under BNSS, Section 138 trials, and e-filing.",
  keywords: [
    "Court Procedures India",
    "Supreme Court Filing Roadmap",
    "Bail Procedure BNSS",
    "Section 138 Trial Procedure",
    "Advocate Tushar Garg"
  ],
  alternates: {
    canonical: "/resources/procedures",
  },
  openGraph: {
    title: "Court Procedures & Filing Roadmaps | Advocate Tushar Garg",
    description: "Step-by-step litigation guides for filing Supreme Court SLPs, criminal bail, and trial proceedings.",
    type: "website"
  }
};

export default function ProceduresPage() {
  return <ProceduresClientView />;
}

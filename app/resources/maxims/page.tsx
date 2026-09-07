import { Metadata } from "next";
import MaximsClientView from "./MaximsClientView";

export const metadata: Metadata = {
  title: "Latin & Legal Maxims with Precedents | Advocate Tushar Garg",
  description: "Comprehensive guide to Latin legal maxims, statutory interpretations, natural justice principles, and landmark Supreme Court rulings.",
  openGraph: {
    title: "Latin & Legal Maxims with Precedents | Advocate Tushar Garg",
    description: "Foundational legal maxims, statutory interpretations, and Supreme Court case laws.",
    type: "website"
  }
};

export default function MaximsPage() {
  return <MaximsClientView />;
}

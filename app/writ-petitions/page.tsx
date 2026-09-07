import { Metadata } from "next";
import WritPetitionsClientView from "./WritPetitionsClient";

export const metadata: Metadata = {
  title: "Writ Petitions (Article 32 & Article 226) | Supreme Court & High Court Advocacy - Advocate Tushar Garg",
  description: "Comprehensive legal guide on Constitutional Writ Petitions under Article 32 (Supreme Court) and Article 226 (High Courts) of the Constitution of India. Understand Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto, filing procedure, comparison matrix & landmark SC precedents.",
  keywords: [
    "Writ Petitions Article 32",
    "Article 226 Writ Jurisdiction",
    "Habeas Corpus Petition",
    "Mandamus Writ India",
    "Certiorari Supreme Court",
    "Prohibition Writ High Court",
    "Quo Warranto Petition",
    "Advocate on Record Supreme Court",
    "Constitutional Law Advocate Delhi",
    "Tushar Garg Advocate"
  ],
  openGraph: {
    title: "Constitutional Writ Petitions (Art 32 & 226) | Advocate Tushar Garg",
    description: "Enforcing Fundamental Rights and challenging unconstitutional state actions through Writ Petitions before the Supreme Court of India & High Courts.",
    images: ["https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80"]
  }
};

export default function WritPetitionsPage() {
  return <WritPetitionsClientView />;
}

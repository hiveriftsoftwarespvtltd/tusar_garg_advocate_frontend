import type { Metadata } from "next";
import TribunalsHero from "./components/TribunalsHero";
import TribunalsDirectory from "./components/TribunalsDirectory";
import InfoBanner from "./components/InfoBanner";

import { getSeoByRoute } from "@/lib/api/seo";

const fallbackMetadata: Metadata = {
  title: "Indian Tribunals & Appellate Authorities Directory | Advocate Tushar Garg",
  description: "Comprehensive directory of 27+ specialized Indian Tribunals including NCLAT, NCLT, NGT, TDSAT, ITAT, APTEL, CAT, and CESTAT. Litigation guidance by Advocate Tushar Garg (AOR).",
  keywords: [
    "Indian Tribunals",
    "Appellate Tribunals India",
    "NCLT",
    "NCLAT",
    "NGT",
    "ITAT",
    "TDSAT",
    "CAT",
    "CESTAT",
    "Quasi-Judicial Bodies India",
    "Advocate Tushar Garg",
    "Advocate on Record",
    "Supreme Court of India"
  ],
  alternates: {
    canonical: "/tribunals",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return getSeoByRoute("/tribunals", fallbackMetadata);
}

export default function TribunalsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <TribunalsHero />

      {/* 2. Tribunals Directory Grid */}
      <TribunalsDirectory />

      {/* 3. About & Latest Updates (Removed as requested) */}
      {/* <AboutAndUpdates /> */}

      {/* 4. Bottom Info Banner */}
      <InfoBanner />
    </main>
  );
}

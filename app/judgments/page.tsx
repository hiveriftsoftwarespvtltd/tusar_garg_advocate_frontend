import type { Metadata } from "next";
import JudgmentsHero from "./components/JudgmentsHero";
import ExploreByCourt from "./components/ExploreByCourt";
import LatestJudgments from "./components/LatestJudgments";
import BrowseBySubject from "./components/BrowseBySubject";

export const metadata: Metadata = {
  title: "Latest Supreme Court Judgments & High Court Precedents | Advocate Tushar Garg",
  description:
    "Explore authoritative judgments, orders, and case analyses from the Supreme Court of India and High Courts across Constitutional, Civil, Criminal, and Commercial subjects.",
  keywords: [
    "Supreme Court Judgments",
    "Landmark Judgments India",
    "High Court Orders",
    "Case Law Search",
    "Criminal Law Judgments",
    "Constitutional Law Precedents",
    "Delhi High Court Judgments",
    "Legal Precedents India"
  ],
  alternates: {
    canonical: "/judgments",
  },
};

export default function JudgmentsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <JudgmentsHero />

      {/* 2. Explore By Court */}
      <ExploreByCourt />

      {/* 3. Latest & Important Judgments */}
      <LatestJudgments />

      {/* 4. Browse By Subject */}
      <BrowseBySubject />
    </main>
  );
}

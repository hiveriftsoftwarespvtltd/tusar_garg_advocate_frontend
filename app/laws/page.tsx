import type { Metadata } from "next";
import LawsHero from "./components/LawsHero";
import LawsCategoryGrid from "./components/LawsCategoryGrid";
import PopularActs from "./components/PopularActs";
import RecentNotifications from "./components/RecentNotifications";
import InfoBanner from "./components/InfoBanner";

import { getSeoByRoute } from "@/lib/api/seo";

const fallbackMetadata: Metadata = {
  title: "Indian Laws & Central Bare Acts Directory | Advocate Tushar Garg",
  description: "Comprehensive Indian Laws directory featuring Central & State Bare Acts, Constitutional Law, Criminal Laws (BNS), Civil Law, Corporate & Commercial Laws by Advocate Tushar Garg (AOR).",
  keywords: [
    "Indian Laws",
    "Bare Acts India",
    "Central Acts",
    "Constitutional Law India",
    "Bharatiya Nyaya Sanhita",
    "Criminal Law India",
    "Commercial Laws",
    "Supreme Court of India",
    "Advocate Tushar Garg",
    "Advocate on Record",
    "Indian Legislation",
    "Legal Sections and Amendments"
  ],
  alternates: {
    canonical: "/laws",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return getSeoByRoute("/laws", fallbackMetadata);
}

export default function LawsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <LawsHero />

      {/* 2. Browse Laws By Category */}
      <LawsCategoryGrid />

      {/* 3. Popular Acts & Recent Notifications */}
      <div className="max-w-[1280px] mx-auto px-4 py-12 flex flex-col xl:flex-row gap-8">
        <div className="xl:w-1/2">
          <PopularActs />
        </div>
        <div className="xl:w-1/2">
          <RecentNotifications />
        </div>
      </div>

      {/* 4. Bottom Info Banner */}
      <InfoBanner />
    </main>
  );
}

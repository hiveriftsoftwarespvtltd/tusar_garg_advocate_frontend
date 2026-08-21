import LawsHero from "./components/LawsHero";
import LawsSearch from "./components/LawsSearch";
import LawsCategoryGrid from "./components/LawsCategoryGrid";
import PopularActs from "./components/PopularActs";
import RecentNotifications from "./components/RecentNotifications";
import InfoBanner from "./components/InfoBanner";

export default function LawsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <LawsHero />

      {/* 2. Search Section */}
      <LawsSearch />

      {/* 3. Browse Laws By Category */}
      <LawsCategoryGrid />

      {/* 4. Popular Acts & Recent Notifications */}
      <div className="max-w-[1280px] mx-auto px-4 py-12 flex flex-col xl:flex-row gap-8">
        <div className="xl:w-1/2">
          <PopularActs />
        </div>
        <div className="xl:w-1/2">
          <RecentNotifications />
        </div>
      </div>

      {/* 5. Bottom Info Banner */}
      <InfoBanner />
    </main>
  );
}

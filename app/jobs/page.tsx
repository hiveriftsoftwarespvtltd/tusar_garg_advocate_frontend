import JobsHero from "./components/JobsHero";
import JobsSearch from "./components/JobsSearch";
import JobsCategoryGrid from "./components/JobsCategoryGrid";
import FeaturedOpenings from "./components/FeaturedOpenings";
import LatestNotifications from "./components/LatestNotifications";
import JobHighlights from "./components/JobHighlights";
import InfoBanner from "./components/InfoBanner";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <JobsHero />

      {/* 2. Search Section */}
      <JobsSearch />

      {/* 3. Browse By Category */}
      <JobsCategoryGrid />

      {/* 4. Featured Openings & Latest Notifications */}
      <div className="max-w-[1280px] mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[60%] xl:w-[65%]">
          <FeaturedOpenings />
        </div>
        <div className="lg:w-[40%] xl:w-[35%]">
          <LatestNotifications />
        </div>
      </div>

      {/* 5. Job Detail Highlights */}
      <JobHighlights />

      {/* 6. Bottom Info Banner */}
      <InfoBanner />
    </main>
  );
}

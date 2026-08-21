import JudgmentsHero from "./components/JudgmentsHero";
import JudgmentsSearch from "./components/JudgmentsSearch";
import ExploreByCourt from "./components/ExploreByCourt";
import LatestJudgments from "./components/LatestJudgments";
import BrowseBySubject from "./components/BrowseBySubject";

export default function JudgmentsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <JudgmentsHero />

      {/* 2. Search Section */}
      <JudgmentsSearch />

      {/* 3. Explore By Court */}
      <ExploreByCourt />

      {/* 4. Latest & Important Judgments */}
      <LatestJudgments />

      {/* 5. Browse By Subject */}
      <BrowseBySubject />
    </main>
  );
}

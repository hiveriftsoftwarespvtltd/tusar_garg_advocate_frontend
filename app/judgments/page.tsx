import JudgmentsHero from "./components/JudgmentsHero";
import ExploreByCourt from "./components/ExploreByCourt";
import LatestJudgments from "./components/LatestJudgments";
import BrowseBySubject from "./components/BrowseBySubject";

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

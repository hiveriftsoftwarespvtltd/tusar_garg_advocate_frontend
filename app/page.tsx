import HeroSection from "@/app/components/HeroSection";
import FeaturedCourts from "@/app/components/FeaturedCourts";
import SearchBar from "@/app/components/SearchBar";
import LatestJudgments from "@/app/components/LatestJudgments";
import IndianLaws from "@/app/components/IndianLaws";
import TribunalsSection from "@/app/components/TribunalsSection";
import LegalKnowledge from "@/app/components/LegalKnowledge";
import AboutSection from "@/app/components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedCourts />
      <SearchBar />
      <LatestJudgments />
      <IndianLaws />
      <TribunalsSection />
      <LegalKnowledge />
      <AboutSection />
    </main>
  );
}

import HeroSection from "@/app/components/HeroSection";
import FeaturedCourts from "@/app/components/FeaturedCourts";
import SearchBar from "@/app/components/SearchBar";
import LatestJudgments from "@/app/components/LatestJudgments";
import HomePracticeAreas from "@/app/components/HomePracticeAreas";
import HomeResourcesServicesJobs from "@/app/components/HomeResourcesServicesJobs";
import HomeWhyChooseUs from "@/app/components/HomeWhyChooseUs";
import HomeLegalKnowledge from "@/app/components/HomeLegalKnowledge";
import HomeTestimonials from "@/app/components/HomeTestimonials";
import HomeAbout from "@/app/components/HomeAbout";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedCourts />
      <SearchBar />
      <LatestJudgments />
      
      {/* Redesigned Lower Section */}
      <HomePracticeAreas />
      <HomeResourcesServicesJobs />
      <HomeWhyChooseUs />
      <HomeLegalKnowledge />
      <HomeTestimonials />
      <HomeAbout />
    </main>
  );
}

import CollegesHero from "./components/CollegesHero";
import CollegesSearch from "./components/CollegesSearch";
import TopCollegesList from "./components/TopCollegesList";
import PopularCourses from "./components/PopularCourses";
import AboutLegalEd from "./components/AboutLegalEd";
import UsefulResources from "./components/UsefulResources";
import BottomBanner from "./components/BottomBanner";

export default function CollegesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <CollegesHero />

      {/* 2. Search Section */}
      <CollegesSearch />

      {/* 3. Main Content Grid */}
      <div className="max-w-[1280px] mx-auto px-4 py-8 mb-12 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Top Colleges */}
        <div className="lg:w-[65%] xl:w-[70%]">
          <TopCollegesList />
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:w-[35%] xl:w-[30%] flex flex-col gap-8">
          <PopularCourses />
          <AboutLegalEd />
          <UsefulResources />
        </div>

      </div>

      {/* 4. Bottom Banner */}
      <BottomBanner />
    </main>
  );
}

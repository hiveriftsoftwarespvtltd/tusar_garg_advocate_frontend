import type { Metadata } from "next";
import CollegesHero from "./components/CollegesHero";
import TopCollegesList from "./components/TopCollegesList";
import PopularCourses from "./components/PopularCourses";
import AboutLegalEd from "./components/AboutLegalEd";
import UsefulResources from "./components/UsefulResources";
import BottomBanner from "./components/BottomBanner";

export const metadata: Metadata = {
  title: "Top Law Colleges & Universities in India | NIRF Rankings & Admissions",
  description: "Discover premier law colleges and National Law Universities (NLUs) in India. Detailed guide on CLAT, AILET, courses (BA LLB, LLM), NIRF rankings, and legal education.",
  keywords: [
    "Top Law Colleges India",
    "National Law Universities",
    "NLUs India",
    "CLAT Exam",
    "AILET Law Admissions",
    "BA LLB Colleges",
    "LLM Admissions India",
    "NIRF Law Rankings"
  ],
  alternates: {
    canonical: "/colleges",
  },
};

export default function CollegesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <CollegesHero />

      {/* 2. Main Content Grid */}
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

      {/* 3. Bottom Banner */}
      <BottomBanner />
    </main>
  );
}

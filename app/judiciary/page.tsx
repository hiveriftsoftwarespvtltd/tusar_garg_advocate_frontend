import JudiciaryHero from "./components/JudiciaryHero";
import JudiciarySearch from "./components/JudiciarySearch";
import StateGrid from "./components/StateGrid";
import PopularServices from "./components/PopularServices";
import LatestNotifications from "./components/LatestNotifications";
import PreparationResources from "./components/PreparationResources";
import ExamStages from "./components/ExamStages";
import WhyUsePortal from "./components/WhyUsePortal";
import { GraduationCap, Library } from "lucide-react";

export default function JudiciaryPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <JudiciaryHero />

      {/* 2. Advanced Search Bar */}
      <JudiciarySearch />

      {/* 3. Explore Judiciary by State */}
      <StateGrid />

      {/* 4. Popular Judicial Services */}
      <div className="max-w-[1280px] mx-auto px-4 pt-12 pb-6">
        <PopularServices />
      </div>

      {/* 5. Notifications and Resources */}
      <div className="max-w-[1280px] mx-auto px-4 pb-12 flex flex-col xl:flex-row gap-6">
        <div className="xl:w-[40%]">
          <LatestNotifications />
        </div>
        <div className="xl:w-[60%]">
          <PreparationResources />
        </div>
      </div>

      {/* 6. Exam Stages */}
      <div className="max-w-[1280px] mx-auto px-4 pt-6">
        <ExamStages />
      </div>

      {/* 7. Why Use Portal */}
      <div className="max-w-[1280px] mx-auto px-4 pt-6">
        <WhyUsePortal />
      </div>
          
      {/* 8. Start Your Judiciary Preparation Banner */}
      <div className="max-w-[1280px] mx-auto px-4 pb-16">
        <div className="bg-[#0d1b3e] rounded-xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
          
          <div className="flex items-center gap-6 relative z-10 flex-1">
            <div className="hidden md:flex text-[#c9a84c] flex-shrink-0">
              <GraduationCap size={64} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-white text-[20px] md:text-[24px] font-bold uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-merriweather), serif" }}>
                START YOUR JUDICIARY PREPARATION
              </h2>
              <p className="text-[#e2e8f0]/80 text-[13px] md:text-[14px] max-w-lg leading-relaxed">
                Access structured exam information, syllabus, previous papers and legal study resources in one place.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 relative z-10">
            <button className="flex items-center gap-2 bg-[#d4a93a] text-white px-6 md:px-8 py-3 rounded-[4px] font-bold text-[12px] md:text-[13px] uppercase tracking-wider hover:bg-[#c9a84c] hover:-translate-y-0.5 transition-all whitespace-nowrap shadow-md">
              EXPLORE RESOURCES
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div className="hidden lg:block text-[#c9a84c] opacity-90">
              <Library size={64} strokeWidth={1.2} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

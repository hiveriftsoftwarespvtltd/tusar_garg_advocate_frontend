import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import FeaturedCourts from "../components/FeaturedCourts";
import SearchBar from "../components/SearchBar";
import BrowseByCourtType from "./components/BrowseByCourtType";
import HighCourtsGrid from "./components/HighCourtsGrid";
import DistrictCourtsRegion from "./components/DistrictCourtsRegion";
import CourtResources from "./components/CourtResources";

export default function CourtsPage() {
  const heroButtons = (
    <div className="flex flex-wrap gap-4 mt-6">
      <a href="#featured" className="flex items-center gap-2 bg-[#c9a84c] text-[#0d1b3e] px-6 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider transition-all hover:bg-[#d4a93a] hover:-translate-y-0.5 hover:shadow-lg shadow-sm">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><path d="M4 4h16"/><path d="M6 4v16"/><path d="M10 4v16"/><path d="M14 4v16"/><path d="M18 4v16"/></svg>
        FEATURED COURTS
      </a>
      <a href="#directory" className="flex items-center gap-2 bg-transparent border border-white/40 text-white px-6 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider transition-all hover:bg-white/10 hover:border-white hover:-translate-y-0.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        ALL COURTS DIRECTORY
      </a>
      <a href="#search" className="flex items-center gap-2 bg-transparent border border-white/40 text-white px-6 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider transition-all hover:bg-white/10 hover:border-white hover:-translate-y-0.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        SEARCH COURTS
      </a>
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero */}
      <PageHero
        title="COURTS OF INDIA"
        subtitle={
          <>
            Explore Featured Courts and discover a complete<br/>searchable directory of courts across India.
            <div className="flex gap-3 text-white/90 text-[13px] mt-4 font-normal tracking-wide">
              <span>Supreme Court</span> • <span>High Courts</span> • <span>District Courts</span> • <span>Tribunals</span>
            </div>
          </>
        }
        backgroundImage="/supreme-court.png"
        buttons={heroButtons}
      />

      {/* 2. Featured Courts (Reused from Home) */}
      <div id="featured" className="py-8 bg-white max-w-[1280px] mx-auto px-4">
        <FeaturedCourts />

      </div>

      {/* 3. Search Section */}
      <SearchBar />

      {/* 4. Browse By Court Type */}
      <BrowseByCourtType />

      {/* 5. High Courts */}
      <HighCourtsGrid />

      {/* 6. District Courts */}
      <DistrictCourtsRegion />

      {/* 7. Court Resources */}
      <CourtResources />

      {/* 8. CTA Banner */}
      <CtaBanner
        title="NEED LEGAL RESEARCH ASSISTANCE?"
        subtitle="Access structured court information, judgments and judiciary resources through a trusted legal platform."
        buttonText="CONTACT NOW"
        href="/contact"
      />
    </main>
  );
}

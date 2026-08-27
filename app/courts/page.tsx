import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import FeaturedCourts from "../components/FeaturedCourts";
import SearchBar from "../components/SearchBar";
import BrowseByCourtType from "./components/BrowseByCourtType";
import HighCourtsGrid from "./components/HighCourtsGrid";
import DistrictCourtsRegion from "./components/DistrictCourtsRegion";
import CourtResources from "./components/CourtResources";
import { fetchApi } from "../../lib/api/client";
import { getPublishedStates } from "../../lib/api/states";

export const dynamic = 'force-dynamic';

export default async function CourtsPage() {
  let allCourts: any[] = [];
  let allStates: any[] = [];
  try {
    allCourts = await fetchApi('/courts');
    allStates = await getPublishedStates();
  } catch (error) {
    console.error("Failed to fetch courts or states:", error);
  }

  const highCourts = allCourts.filter(c => c.courtType?.trim().toLowerCase() === "high court");
  const districtCourts = allCourts.filter(c => c.courtType?.trim().toLowerCase() === "district court");

  const heroButtons = (
    <div className="flex flex-wrap gap-4 mt-6">
      <a href="#directory" className="flex items-center gap-2 bg-[#c9a84c] text-[#0d1b3e] px-6 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider transition-all hover:bg-[#d4a93a] hover:-translate-y-0.5 hover:shadow-lg shadow-sm">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><path d="M4 4h16"/><path d="M6 4v16"/><path d="M10 4v16"/><path d="M14 4v16"/><path d="M18 4v16"/></svg>
        STATE DIRECTORY
      </a>
      <a href="#search" className="flex items-center gap-2 bg-transparent border border-white/40 text-white px-6 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider transition-all hover:bg-white/10 hover:border-white hover:-translate-y-0.5">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        SEARCH COURTS
      </a>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <PageHero
        title="ALL INDIA COURTS DIRECTORY"
        subtitle={
          <>
            Explore the complete directory of courts across India.<br/>
            Find High Courts, District Courts, and Tribunals organized by State.
          </>
        }
        backgroundImage="/court/court_page_banner.png"
        buttons={heroButtons}
      />

      {/* Featured Courts */}
      <div id="featured" className="py-8 bg-[#fcfcfc] max-w-[1280px] mx-auto px-4">
        <FeaturedCourts />
      </div>

      <SearchBar />

      {/* Browse By Court Type */}
      <BrowseByCourtType />



      {/* High Courts */}
      <HighCourtsGrid courts={highCourts} />

      {/* District Courts By State */}
      <DistrictCourtsRegion states={allStates} />

      {/* Court Resources */}
      <CourtResources />

      {/* CTA Banner */}
      <CtaBanner
        title="NEED LEGAL RESEARCH ASSISTANCE?"
        subtitle="Access structured court information, judgments and judiciary resources through a trusted legal platform."
        buttonText="CONTACT NOW"
        href="/contact"
      />
    </main>
  );
}

import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import BrowseByCourtType from "./components/BrowseByCourtType";
import HighCourtsGrid from "./components/HighCourtsGrid";
import DistrictCourtsRegion from "./components/DistrictCourtsRegion";
import CourtResources from "./components/CourtResources";
import { fetchApi } from "../../lib/api/client";
import { getPublishedStates } from "../../lib/api/states";
import { Building2, Landmark, Search, ShieldCheck } from "lucide-react";

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

  const heroButtons = (
    <div className="flex flex-wrap gap-4 mt-6">
      <a href="#directory" className="flex items-center gap-2 bg-[#c9a84c] text-[#0d1b3e] px-6 py-3.5 rounded-xl font-bold text-[12px] uppercase tracking-wider transition-all hover:bg-[#d4a93a] hover:-translate-y-0.5 shadow-md">
        <Building2 size={16} />
        STATE DIRECTORY
      </a>
      <a href="#high-courts" className="flex items-center gap-2 bg-transparent border border-white/40 text-white px-6 py-3.5 rounded-xl font-bold text-[12px] uppercase tracking-wider transition-all hover:bg-white/10 hover:border-white hover:-translate-y-0.5">
        <Landmark size={16} />
        HIGH COURTS
      </a>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      {/* 1. Page Hero Banner */}
      <PageHero
        title="ALL INDIA COURTS DIRECTORY"
        subtitle={
          <>
            Comprehensive legal database of Supreme Court, High Courts, and District Courts across 28+ States.<br/>
            Access official e-Courts portals, daily cause lists, case status, and landmark judgments.
          </>
        }
        backgroundImage="/court/court_page_banner.png"
        buttons={heroButtons}
      />

      {/* 2. Quick Live Statistics Strip */}
      <div className="bg-[#071126] text-white py-4 border-b border-[#c9a84c]/20 shadow-md">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-wrap items-center justify-around gap-4 text-center text-xs">
          <div className="flex items-center gap-2">
            <Landmark size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">25</strong> High Courts Covered</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">{allStates.length || 14}</strong> States & UTs Directory</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Search size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">100%</strong> Live Case Status Links</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">AOC Verified</strong> Legal Database</span>
          </div>
        </div>
      </div>

      {/* 4. 🏛️ District Courts By State (Live Dynamic Data from /api/states) */}
      <DistrictCourtsRegion states={allStates} courts={allCourts} />

      {/* 6. ⚖️ High Courts Grid (Live Dynamic Data from /api/courts) */}
      <HighCourtsGrid courts={highCourts} />

      {/* 7. Browse By Court Type Hierarchy (Static Shortcuts) */}
      <BrowseByCourtType />

      {/* 8. Official e-Courts Utilities & Resources */}
      <CourtResources />

      {/* 9. CTA Banner */}
      <CtaBanner
        title="NEED LEGAL RESEARCH ASSISTANCE?"
        subtitle="Access structured court information, judgments and judiciary resources through a trusted legal platform."
        buttonText="CONTACT NOW"
        href="/contact"
      />
    </main>
  );
}

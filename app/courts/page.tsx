import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import SupremeCourtSection from "./components/SupremeCourtSection";
import HighCourtsGrid from "./components/HighCourtsGrid";
import DistrictCourtsRegion from "./components/DistrictCourtsRegion";
import TribunalsShowcaseSection from "./components/TribunalsShowcaseSection";
import BrowseByCourtType from "./components/BrowseByCourtType";
import CourtResources from "./components/CourtResources";
import { getPublishedStates } from "../../lib/api/states";
import { fetchApi } from "../../lib/api/client";
import { Building2, Landmark, Search, ShieldCheck, Scale, Gavel, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Courts & Judicial Forums of India | Supreme Court, 25 High Courts & District Judiciary",
  description: "Comprehensive institutional directory of the Supreme Court of India, all 25 Constitutional High Courts, 677+ District Courts, and specialized Statutory Tribunals across 36 States & Union Territories.",
  keywords: [

    "Advocate on Record Tushar Garg",
    "Courts of India",
    "Supreme Court of India",
    "25 High Courts India",
    "District Courts Directory",
    "Tribunals India",
    "NCLAT",
    "NCLT",
    "NGT",
    "CAT",
    "State Judiciary India",
    "eCourts Services",
    "Advocate Tushar Garg",
    "Advocate on Record"
  ],
  alternates: {
    canonical: "/courts",
  },
};

export const revalidate = 30;

export default async function CourtsPage() {
  let allStates: any[] = [];
  try {
    allStates = await getPublishedStates().catch(() => []);
  } catch (error) {
    console.error("Failed to fetch states in CourtsPage:", error);
  }

  const heroButtons = (
    <div className="flex flex-wrap items-center gap-3.5 mt-8">
      <a 
        href="#supreme-court" 
        className="flex items-center gap-2 bg-[#B69A63] text-[#101D35] px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:bg-[#CBB484] hover:-translate-y-0.5 shadow-md"
      >
        <Landmark size={15} />
        <span>Supreme Court of India</span>
      </a>
      <a 
        href="#high-courts" 
        className="flex items-center gap-2 bg-white/10 border border-white/25 text-white px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all hover:bg-white/20 hover:border-white hover:-translate-y-0.5"
      >
        <Scale size={15} className="text-[#B69A63]" />
        <span>25 High Courts</span>
      </a>
      <a 
        href="#directory" 
        className="flex items-center gap-2 bg-transparent border border-white/20 text-white/90 px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all hover:bg-white/10 hover:-translate-y-0.5"
      >
        <Building2 size={15} className="text-[#B69A63]" />
        <span>Subordinate Judiciary</span>
      </a>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      
      {/* 1. Page Hero Banner */}
      <PageHero
        title="COURTS & JUDICIAL FORUMS OF INDIA"
        subtitle={
          <>
            Comprehensive directory of India&apos;s constitutional judicial architecture: Supreme Court of India, 25 High Courts, 677+ District Courts, and specialized statutory tribunals across all 36 States &amp; Union Territories.
          </>
        }
        backgroundImage="/court/court_page_banner.png"
        buttons={heroButtons}
      />

      {/* 2. Institutional Credentials Metric Strip */}
      <div className="bg-[#0A1222] text-white py-4 border-b border-[#B69A63]/25 shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-around gap-4 text-center text-xs">
          <div className="flex items-center gap-2">
            <Landmark size={15} className="text-[#B69A63]" />
            <span><strong className="text-[#B69A63] font-bold text-sm">1 Apex Court</strong> (Supreme Court of India)</span>
          </div>
          <div className="w-px h-4 bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Scale size={15} className="text-[#B69A63]" />
            <span><strong className="text-[#B69A63] font-bold text-sm">25</strong> Constitutional High Courts</span>
          </div>
          <div className="w-px h-4 bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Building2 size={15} className="text-[#B69A63]" />
            <span><strong className="text-[#B69A63] font-bold text-sm">677+</strong> District &amp; Sessions Courts</span>
          </div>
          <div className="w-px h-4 bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Gavel size={15} className="text-[#B69A63]" />
            <span><strong className="text-[#B69A63] font-bold text-sm">10+</strong> Specialized Statutory Tribunals</span>
          </div>
        </div>
      </div>

      {/* 3. Section A: Supreme Court of India (Apex Court) */}
      <div id="supreme-court">
        <SupremeCourtSection />
      </div>

      {/* 4. Section B: 25 Constitutional High Courts */}
      <HighCourtsGrid />

      {/* 5. Section C: Subordinate Judiciary (District Courts by State) */}
      <div id="directory">
        <DistrictCourtsRegion states={allStates} />
      </div>

      {/* 6. Section D: Statutory & Appellate Tribunals */}
      <div id="tribunals">
        <TribunalsShowcaseSection />
      </div>

      {/* 7. Section E: Judicial Hierarchy Overview */}
      <BrowseByCourtType />

      {/* 8. Official e-Courts Utilities & Resources */}
      <CourtResources />

      {/* 9. Restrained BCI-Compliant CTA */}
      <CtaBanner
        title="APPELLATE LITIGATION & SUPREME COURT ADVOCACY"
        subtitle="The Chambers of Advocate Tushar Garg (AOR) represents matters across the Supreme Court of India, High Courts, and Appellate Tribunals."
        buttonText="Contact Chambers Desk"
        href="/contact"
      />

    </main>
  );
}

"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { Landmark, Search, ExternalLink, Globe, MapPin, Building2, Table, LayoutGrid } from "lucide-react";
import Link from "next/link";

interface HighCourtItem {
  id: number;
  name: string;
  jurisdiction: string;
  website: string;
  displayUrl: string;
}

const highCourtsData: HighCourtItem[] = [
  { id: 1, name: "Allahabad High Court", jurisdiction: "Uttar Pradesh", website: "https://www.allahabadhighcourt.in", displayUrl: "allahabadhighcourt.in" },
  { id: 2, name: "Andhra Pradesh High Court", jurisdiction: "Andhra Pradesh", website: "https://aphc.gov.in", displayUrl: "aphc.gov.in" },
  { id: 3, name: "Bombay High Court", jurisdiction: "Maharashtra, Goa, DNH & DD", website: "https://bombayhighcourt.nic.in", displayUrl: "bombayhighcourt.nic.in" },
  { id: 4, name: "Calcutta High Court", jurisdiction: "West Bengal, Andaman & Nicobar", website: "https://www.calcuttahighcourt.gov.in", displayUrl: "calcuttahighcourt.gov.in" },
  { id: 5, name: "Chhattisgarh High Court", jurisdiction: "Chhattisgarh", website: "https://highcourt.cg.gov.in", displayUrl: "highcourt.cg.gov.in" },
  { id: 6, name: "Delhi High Court", jurisdiction: "Delhi", website: "https://delhihighcourt.nic.in", displayUrl: "delhihighcourt.nic.in" },
  { id: 7, name: "Gauhati High Court", jurisdiction: "Assam, Arunachal Pradesh, Nagaland, Mizoram", website: "https://ghconline.gov.in", displayUrl: "ghconline.gov.in" },
  { id: 8, name: "Gujarat High Court", jurisdiction: "Gujarat", website: "https://gujarathighcourt.nic.in", displayUrl: "gujarathighcourt.nic.in" },
  { id: 9, name: "Himachal Pradesh High Court", jurisdiction: "Himachal Pradesh", website: "https://hphighcourt.nic.in", displayUrl: "hphighcourt.nic.in" },
  { id: 10, name: "Jammu & Kashmir and Ladakh High Court", jurisdiction: "J&K + Ladakh", website: "https://jkhighcourt.nic.in", displayUrl: "jkhighcourt.nic.in" },
  { id: 11, name: "Jharkhand High Court", jurisdiction: "Jharkhand", website: "https://jharkhandhighcourt.nic.in", displayUrl: "jharkhandhighcourt.nic.in" },
  { id: 12, name: "Karnataka High Court", jurisdiction: "Karnataka", website: "https://karnatakajudiciary.kar.nic.in", displayUrl: "karnatakajudiciary.kar.nic.in" },
  { id: 13, name: "Kerala High Court", jurisdiction: "Kerala + Lakshadweep", website: "https://highcourtofkerala.nic.in", displayUrl: "highcourtofkerala.nic.in" },
  { id: 14, name: "Madhya Pradesh High Court", jurisdiction: "Madhya Pradesh", website: "https://mphc.gov.in", displayUrl: "mphc.gov.in" },
  { id: 15, name: "Madras High Court", jurisdiction: "Tamil Nadu + Puducherry", website: "https://www.mhc.tn.gov.in", displayUrl: "mhc.tn.gov.in" },
  { id: 16, name: "Manipur High Court", jurisdiction: "Manipur", website: "https://hcmimphal.nic.in", displayUrl: "hcmimphal.nic.in" },
  { id: 17, name: "Meghalaya High Court", jurisdiction: "Meghalaya", website: "https://meghalayahighcourt.nic.in", displayUrl: "meghalayahighcourt.nic.in" },
  { id: 18, name: "Orissa High Court", jurisdiction: "Odisha", website: "https://orissahighcourt.nic.in", displayUrl: "orissahighcourt.nic.in" },
  { id: 19, name: "Patna High Court", jurisdiction: "Bihar", website: "https://www.patnahighcourt.gov.in", displayUrl: "patnahighcourt.gov.in" },
  { id: 20, name: "Punjab & Haryana High Court", jurisdiction: "Punjab, Haryana + Chandigarh", website: "https://highcourtchd.gov.in", displayUrl: "highcourtchd.gov.in" },
  { id: 21, name: "Rajasthan High Court", jurisdiction: "Rajasthan", website: "https://hcraj.nic.in", displayUrl: "hcraj.nic.in" },
  { id: 22, name: "Sikkim High Court", jurisdiction: "Sikkim", website: "https://highcourtofsikkim.nic.in", displayUrl: "highcourtofsikkim.nic.in" },
  { id: 23, name: "Telangana High Court", jurisdiction: "Telangana", website: "https://tshc.gov.in", displayUrl: "tshc.gov.in" },
  { id: 24, name: "Tripura High Court", jurisdiction: "Tripura", website: "https://thc.nic.in", displayUrl: "thc.nic.in" },
  { id: 25, name: "Uttarakhand High Court", jurisdiction: "Uttarakhand", website: "https://highcourtofuttarakhand.gov.in", displayUrl: "highcourtofuttarakhand.gov.in" },
];

export default function HighCourtsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  const filteredCourts = highCourtsData.filter(
    (court) =>
      court.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      court.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase()) ||
      court.displayUrl.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      {/* 1. Page Hero */}
      <PageHero
        title="25 CONSTITUTIONAL HIGH COURTS OF INDIA"
        subtitle={
          <>
            Complete directory of all 25 High Courts in India, their official jurisdictions (मुख्य क्षेत्र), and verified e-Courts portals.<br />
            Click any official portal link to open the official High Court website.
          </>
        }
        backgroundImage="/court/court_page_banner.png"
      />

      {/* 2. Quick Live Statistics Strip */}
      <div className="bg-[#071126] text-white py-4 border-b border-[#c9a84c]/20 shadow-md">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-wrap items-center justify-around gap-4 text-center text-xs">
          <div className="flex items-center gap-2">
            <Landmark size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">25</strong> High Courts</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">28 States & 8 UTs</strong> Covered</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">100% Verified</strong> Official Portals</span>
          </div>
        </div>
      </div>

      {/* 3. Main Directory Section */}
      <section className="py-12 max-w-[1280px] mx-auto px-4">
        
        {/* Top Controls: Search Bar & View Mode Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-96">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search High Court or State Jurisdiction..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 text-gray-800 placeholder-gray-400 transition-all font-medium"
            />
          </div>

          {/* Toggle View Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "table"
                  ? "bg-[#0d1b3e] text-white shadow-sm"
                  : "text-gray-600 hover:text-[#0d1b3e]"
              }`}
            >
              <Table size={14} />
              Table View
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "grid"
                  ? "bg-[#0d1b3e] text-white shadow-sm"
                  : "text-gray-600 hover:text-[#0d1b3e]"
              }`}
            >
              <LayoutGrid size={14} />
              Grid View
            </button>
          </div>
        </div>

        {/* Directory Content */}
        {filteredCourts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <Landmark size={44} className="mx-auto text-gray-300 mb-3" />
            <h3 className="text-base font-bold text-gray-700">No High Courts Match Your Search</h3>
            <p className="text-xs text-gray-500 mt-1">Try searching for state names like "Delhi", "Punjab", or "Maharashtra".</p>
          </div>
        ) : viewMode === "table" ? (

          /* Structured Data Table View */
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0d1b3e] text-white text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6 w-16 text-center border-b border-[#1a2b5a]">#</th>
                    <th className="py-4 px-6 border-b border-[#1a2b5a]">High Court Name</th>
                    <th className="py-4 px-6 border-b border-[#1a2b5a]">Jurisdiction / मुख्य क्षेत्र</th>
                    <th className="py-4 px-6 border-b border-[#1a2b5a] text-right">Official Website</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs">
                  {filteredCourts.map((court, idx) => (
                    <tr
                      key={court.id}
                      className="hover:bg-amber-50/40 transition-colors group"
                    >
                      <td className="py-4 px-6 text-center font-extrabold text-gray-400 group-hover:text-[#c9a84c]">
                        {court.id}
                      </td>
                      <td className="py-4 px-6 font-bold text-[#0d1b3e] text-sm group-hover:text-[#0d1b3e] flex items-center gap-2">
                        <Building2 size={16} className="text-[#c9a84c] shrink-0" />
                        <span>{court.name}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-700 font-medium">
                        <span className="inline-flex items-center gap-1.5 bg-gray-100 group-hover:bg-white text-gray-800 px-3 py-1 rounded-full text-xs border border-gray-200/60 font-semibold">
                          <MapPin size={12} className="text-[#c9a84c]" />
                          {court.jurisdiction}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <a
                          href={court.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#0d1b3e] hover:bg-[#c9a84c] text-white hover:text-[#0d1b3e] px-4 py-2 rounded-lg font-bold text-[11px] tracking-wide transition-all shadow-sm group/btn"
                        >
                          <Globe size={13} />
                          <span>{court.displayUrl}</span>
                          <ExternalLink size={12} className="opacity-80 group-hover/btn:translate-x-0.5 transition-transform" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (

          /* Grid View Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourts.map((court) => (
              <div
                key={court.id}
                className="bg-white border border-gray-200 hover:border-[#c9a84c] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 bg-[#0d1b3e] text-[#c9a84c] text-[10px] font-extrabold tracking-wider uppercase rounded-md flex items-center gap-1">
                      <Landmark size={12} />
                      HIGH COURT #{court.id}
                    </span>
                    <span className="text-[11px] font-bold text-gray-500 flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded">
                      <MapPin size={11} className="text-[#c9a84c]" />
                      {court.jurisdiction.split(',')[0]}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors leading-snug mb-2">
                    {court.name}
                  </h3>

                  <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium">
                    <strong className="text-gray-800">Jurisdiction:</strong> {court.jurisdiction}
                  </p>
                </div>

                <a
                  href={court.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-bold text-white bg-[#0d1b3e] hover:bg-[#c9a84c] hover:text-[#0d1b3e] px-4 py-2.5 rounded-xl transition-colors shadow-sm pt-2"
                >
                  <span className="flex items-center gap-1.5">
                    <Globe size={14} />
                    {court.displayUrl}
                  </span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. CTA Banner */}
      <CtaBanner
        title="NEED HIGH COURT LITIGATION & WRIT PETITION COUNSEL?"
        subtitle="Consult Advocate Tushar Garg for representation across Supreme Court & High Courts in India."
        buttonText="CONTACT ADVOCATE NOW"
        href="/contact"
      />
    </main>
  );
}

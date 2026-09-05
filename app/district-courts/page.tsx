"use client";

import { useState, useMemo } from "react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { Landmark, Search, ExternalLink, Globe, MapPin, Building2, Table, LayoutGrid, Filter, ChevronDown } from "lucide-react";

import { initialDistrictCourtsData, DistrictCourtItem } from "../../lib/data/districtCourtsData";

export { initialDistrictCourtsData };
export type { DistrictCourtItem };

export default function DistrictCourtsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("ALL");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  // Extract unique states for filter dropdown
  const uniqueStates = useMemo(() => {
    const statesSet = new Set(initialDistrictCourtsData.map((d) => d.state));
    return Array.from(statesSet).sort();
  }, []);

  // Filtered district courts logic
  const filteredCourts = useMemo(() => {
    return initialDistrictCourtsData.filter((item) => {
      const matchesState = selectedState === "ALL" || item.state === selectedState;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        item.district.toLowerCase().includes(query) ||
        item.state.toLowerCase().includes(query) ||
        item.courtName.toLowerCase().includes(query) ||
        item.displayUrl.toLowerCase().includes(query);
      return matchesState && matchesQuery;
    });
  }, [searchQuery, selectedState]);

  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      {/* 1. Page Hero Banner */}
      <PageHero
        title="ALL INDIA DISTRICT COURTS DIRECTORY"
        subtitle={
          <>
            Comprehensive directory of District Courts, Sessions Courts, and official e-Courts portals across India.<br />
            Search by State, District, or Court Name to access live cause lists, case status, and official court portals.
          </>
        }
        backgroundImage="/court/court_page_banner.png"
      />

      {/* 2. Statistics Bar */}
      <div className="bg-[#071126] text-white py-4 border-b border-[#c9a84c]/20 shadow-md">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-wrap items-center justify-around gap-4 text-center text-xs">
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">{initialDistrictCourtsData.length}+</strong> District Courts Verified</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">{uniqueStates.length}+</strong> States & UTs Covered</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">100% Direct</strong> Official Portals</span>
          </div>
        </div>
      </div>

      {/* 3. Main Directory Section */}
      <section className="py-12 max-w-[1280px] mx-auto px-4">
        
        {/* Filter Controls: Search + State Selector + View Mode */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-1">
            {/* Search Box */}
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search District, Court, or State..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 text-gray-800 placeholder-gray-400 transition-all font-medium"
              />
            </div>

            {/* State Filter Dropdown */}
            <div className="relative w-full sm:w-64">
              <Filter size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#c9a84c]" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 text-gray-800 font-semibold appearance-none cursor-pointer transition-all"
              >
                <option value="ALL">All States & UTs ({uniqueStates.length})</option>
                {uniqueStates.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Toggle View Buttons */}
          <div className="flex items-center gap-2 self-end md:self-auto bg-gray-100 p-1 rounded-xl shrink-0">
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
              Card View
            </button>
          </div>
        </div>

        {/* Directory Content */}
        {filteredCourts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <Landmark size={44} className="mx-auto text-gray-300 mb-3" />
            <h3 className="text-base font-bold text-gray-700">No District Courts Found</h3>
            <p className="text-xs text-gray-500 mt-1">Try adjusting your search term or select "All States & UTs".</p>
          </div>
        ) : viewMode === "table" ? (

          /* Structured Data Table View */
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0d1b3e] text-white text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6 w-16 text-center border-b border-[#1a2b5a]">#</th>
                    <th className="py-4 px-6 border-b border-[#1a2b5a]">State / UT</th>
                    <th className="py-4 px-6 border-b border-[#1a2b5a]">District</th>
                    <th className="py-4 px-6 border-b border-[#1a2b5a]">District Court Name</th>
                    <th className="py-4 px-6 border-b border-[#1a2b5a] text-right">Official Website</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs">
                  {filteredCourts.map((court, idx) => (
                    <tr
                      key={`court-row-${court.id}-${court.state}-${court.district}-${idx}`}
                      className="hover:bg-amber-50/40 transition-colors group"
                    >
                      <td className="py-4 px-6 text-center font-extrabold text-gray-400 group-hover:text-[#c9a84c]">
                        {idx + 1}
                      </td>
                      <td className="py-4 px-6 font-bold text-[#0d1b3e]">
                        <span className="inline-flex items-center gap-1.5 bg-gray-100 group-hover:bg-white text-gray-800 px-3 py-1 rounded-full text-xs border border-gray-200/60 font-semibold">
                          <MapPin size={12} className="text-[#c9a84c]" />
                          {court.state}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-bold text-gray-800 text-xs">
                        {court.district}
                      </td>
                      <td className="py-4 px-6 font-semibold text-[#0d1b3e] text-xs flex items-center gap-2">
                        <Building2 size={15} className="text-[#c9a84c] shrink-0" />
                        <span>{court.courtName}</span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <a
                          href={court.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#0d1b3e] hover:bg-[#c9a84c] text-white hover:text-[#0d1b3e] px-3.5 py-2 rounded-lg font-bold text-[11px] tracking-wide transition-all shadow-sm group/btn"
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
            {filteredCourts.map((court, idx) => (
              <div
                key={`court-card-${court.id}-${court.state}-${court.district}-${idx}`}
                className="bg-white border border-gray-200 hover:border-[#c9a84c] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 bg-[#0d1b3e] text-[#c9a84c] text-[10px] font-extrabold tracking-wider uppercase rounded-md flex items-center gap-1">
                      <Landmark size={12} />
                      DISTRICT #{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-gray-700 flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded">
                      <MapPin size={11} className="text-[#c9a84c]" />
                      {court.state}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors leading-snug mb-1">
                    {court.courtName}
                  </h3>

                  <p className="text-xs text-gray-500 font-semibold mb-4">
                    District: <span className="text-gray-800">{court.district}</span>
                  </p>
                </div>

                <a
                  href={court.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-bold text-white bg-[#0d1b3e] hover:bg-[#c9a84c] hover:text-[#0d1b3e] px-4 py-2.5 rounded-xl transition-colors shadow-sm"
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
        title="NEED DISTRICT COURT LEGAL REPRESENTATION?"
        subtitle="Access professional legal advocacy across District Courts, Sessions Courts & Tribunals."
        buttonText="CONTACT ADVOCATE NOW"
        href="/contact"
      />
    </main>
  );
}

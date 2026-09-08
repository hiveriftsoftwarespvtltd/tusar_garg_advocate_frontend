"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Search, Landmark, BookOpen, FileText, Bell, MapPin, Scale } from "lucide-react";

import { StateJudiciaryItem, ALL_28_STATES } from "../data/stateJudiciaryExamData";
export type { StateJudiciaryItem };
export { ALL_28_STATES };

export default function StateGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const regions = ["All", "North", "South", "East", "West", "Central", "North-East"];

  const filteredStates = useMemo(() => {
    return ALL_28_STATES.filter((state) => {
      // Region filter
      const matchesRegion = selectedRegion === "All" || state.region === selectedRegion;

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        state.name.toLowerCase().includes(q) ||
        state.shortName.toLowerCase().includes(q) ||
        state.examName.toLowerCase().includes(q) ||
        state.highCourt.toLowerCase().includes(q) ||
        state.slug.toLowerCase().includes(q);

      return matchesRegion && matchesSearch;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <section className="py-14 bg-[#fafafa]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-12 md:w-16 h-[1px] bg-[#c9a84c]"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
            <span className="font-serif text-[12px] md:text-[14px] text-[#c9a84c] font-bold uppercase tracking-[0.18em]">
              PAN-INDIA JUDICIAL EXAMINATIONS
            </span>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
            <div className="w-12 md:w-16 h-[1px] bg-[#c9a84c]"></div>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0d1b3e] tracking-tight mb-3">
            EXPLORE JUDICIARY BY STATE
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Select any State Judicial Service to access specific examination syllabus, court structures, previous year question papers, and official recruitment notifications across all <strong className="text-[#0d1b3e] font-semibold">28 States of India</strong>.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-xs mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search State Judiciary (e.g. Bihar, UP PCS J, RJS, MPJS)..."
              className="w-full pl-10 pr-8 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-lg text-[#0d1b3e] placeholder-gray-400 focus:bg-white focus:border-[#0d1b3e] outline-hidden transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs w-5 h-5 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <span className="text-[11px] font-bold text-gray-400 uppercase mr-1 shrink-0">Region:</span>
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedRegion === reg
                    ? "bg-[#0d1b3e] text-[#c9a84c] shadow-xs"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
              >
                {reg === "All" ? "All 28 States" : reg}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-500 font-medium mb-4 px-1">
          <span>
            Showing <strong className="text-[#0d1b3e] font-bold">{filteredStates.length}</strong> States
          </span>
          {(searchQuery || selectedRegion !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("All");
              }}
              className="text-[#c9a84c] hover:underline font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* 28 States Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredStates.map((state, idx) => (
            <Link 
              key={idx} 
              href={`/judiciary/${state.slug}`}
              className="bg-white border border-[#e8ebf2] hover:border-[#c9a84c]/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Top Row: Icon + State Badge */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0d1b3e]/5 group-hover:bg-[#c9a84c]/15 border border-[#0d1b3e]/10 group-hover:border-[#c9a84c]/40 flex items-center justify-center text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors shrink-0">
                    <Scale size={20} strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gray-100 group-hover:bg-[#c9a84c]/10 text-gray-600 group-hover:text-[#c9a84c] transition-colors">
                      {state.region} India
                    </span>
                    {state.isUT && (
                      <span className="text-[9px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded">
                        UT / Capital
                      </span>
                    )}
                  </div>
                </div>

                {/* State Judiciary Title */}
                <h3 className="text-sm sm:text-base font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors leading-snug mb-1">
                  {state.name}
                </h3>

                {/* Exam Subtitle */}
                <p className="text-xs font-semibold text-[#c9a84c] mb-2 leading-tight">
                  {state.examName}
                </p>

                {/* High Court */}
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mb-3 leading-tight">
                  <Landmark size={12} className="text-gray-400 shrink-0" />
                  <span className="truncate" title={state.highCourt}>
                    {state.highCourt}
                  </span>
                </div>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {state.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-medium bg-gray-50 border border-gray-200/70 text-gray-600 px-2 py-0.5 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#c9a84c] group-hover:text-[#0d1b3e] transition-colors">
                <span className="uppercase tracking-wider text-[11px]">Explore Preparation</span>
                <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {filteredStates.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center my-6">
            <p className="text-gray-500 text-sm mb-3">No State Judiciary matched &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("All");
              }}
              className="text-xs bg-[#0d1b3e] text-white px-4 py-2 rounded-lg hover:bg-[#c9a84c] hover:text-[#0d1b3e] transition-all font-semibold cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

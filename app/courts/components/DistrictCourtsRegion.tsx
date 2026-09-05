"use client";

import { useState, useMemo } from "react";
import { ChevronRight, Landmark, Search, MapPin, Building2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { initialDistrictCourtsData } from "../../../lib/data/districtCourtsData";

interface DistrictCourtsRegionProps {
  states: any[];
  courts?: any[];
}

export default function DistrictCourtsRegion({ states, courts = [] }: DistrictCourtsRegionProps) {
  const [activeTab, setActiveTab] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Pre-compute district courts for each state
  const districtCourtsByState = useMemo(() => {
    const map: Record<string, any[]> = {};

    // 1. First map from API courts prop
    if (courts && courts.length > 0) {
      for (const c of courts) {
        if (c.courtType && c.courtType.toLowerCase().includes("high")) continue;
        const cStateId = typeof c.stateId === 'object' ? c.stateId?._id : c.stateId;
        const cStateSlug = c.state?.slug || c.stateSlug;
        const distName = c.city || c.jurisdiction || c.name.replace(/District Court,?\s*/i, '').trim();
        const courtItem = {
          name: c.name,
          district: distName,
          slug: c.slug,
          link: `/courts/${cStateSlug || 'state'}/${c.slug}`
        };

        if (cStateId) {
          if (!map[cStateId]) map[cStateId] = [];
          if (!map[cStateId].some(item => item.name === c.name || item.slug === c.slug)) {
            map[cStateId].push(courtItem);
          }
        }
        if (cStateSlug) {
          if (!map[cStateSlug]) map[cStateSlug] = [];
          if (!map[cStateSlug].some(item => item.name === c.name || item.slug === c.slug)) {
            map[cStateSlug].push(courtItem);
          }
        }
      }
    }

    // 2. Merge with initialDistrictCourtsData for complete coverage across all 36 States & UTs
    for (const dc of initialDistrictCourtsData) {
      const matchedState = states.find(
        s => s.name.toLowerCase() === dc.state.toLowerCase() ||
             s.slug === dc.state.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      );
      if (matchedState) {
        const keyId = matchedState._id;
        const keySlug = matchedState.slug;

        const courtItem = {
          name: dc.courtName,
          district: dc.district,
          website: dc.website,
          displayUrl: dc.displayUrl,
          link: dc.website
        };

        [keyId, keySlug].forEach(key => {
          if (key) {
            if (!map[key]) map[key] = [];
            if (!map[key].some(item => item.district?.toLowerCase() === dc.district.toLowerCase() || item.name?.toLowerCase() === dc.courtName.toLowerCase())) {
              map[key].push(courtItem);
            }
          }
        });
      }
    }

    return map;
  }, [courts, states]);

  // Pre-compute court counts per state for instant O(1) lookup
  const courtCountsByState = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const s of states) {
      const key = s._id || s.slug;
      const distList = districtCourtsByState[key] || districtCourtsByState[s.slug] || [];
      counts[s._id] = distList.length;
      counts[s.slug] = distList.length;
    }
    return counts;
  }, [states, districtCourtsByState]);

  // Quick State Filters
  const filteredStates = states.filter((state) => {
    const matchesSearch = state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.code?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.description?.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "ALL") return matchesSearch;
    if (activeTab === "NORTH") {
      return matchesSearch && ["haryana", "punjab", "delhi", "rajasthan", "uttar-pradesh", "uttarakhand", "himachal-pradesh", "jammu-and-kashmir"].includes(state.slug);
    }
    if (activeTab === "CENTRAL_WEST") {
      return matchesSearch && ["madhya-pradesh", "gujarat", "maharashtra", "chhattisgarh", "goa"].includes(state.slug);
    }
    if (activeTab === "SOUTH_EAST") {
      return matchesSearch && ["bihar", "west-bengal", "karnataka", "tamil-nadu", "telangana", "kerala", "andhra-pradesh", "odisha", "assam"].includes(state.slug);
    }
    return matchesSearch;
  });

  return (
    <section id="directory" className="py-14 bg-gradient-to-b from-[#f8f9fa] to-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a84c]/10 text-[#c9a84c] text-[12px] font-bold tracking-widest uppercase mb-3">
            <Landmark size={14} />
            STATE JUDICIAL DIRECTORY
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0d1b3e] uppercase tracking-wide">
            DISTRICT COURTS BY STATE
          </h2>
          <div className="w-16 h-[3px] bg-[#c9a84c] mt-3 rounded-full" />
          <p className="text-gray-600 text-sm max-w-2xl mt-3">
            Explore state high courts and district courts. Click any district court to view official e-Courts portals and daily cause lists.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl shadow-sm border border-gray-200/80">
          
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setActiveTab("ALL")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "ALL"
                  ? "bg-[#0d1b3e] text-white shadow-md"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              All States ({states.length})
            </button>
            <button
              onClick={() => setActiveTab("NORTH")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "NORTH"
                  ? "bg-[#0d1b3e] text-white shadow-md"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              North India
            </button>
            <button
              onClick={() => setActiveTab("CENTRAL_WEST")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "CENTRAL_WEST"
                  ? "bg-[#0d1b3e] text-white shadow-md"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              West & Central
            </button>
            <button
              onClick={() => setActiveTab("SOUTH_EAST")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "SOUTH_EAST"
                  ? "bg-[#0d1b3e] text-white shadow-md"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              South & East
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search State or Code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 text-gray-800 placeholder-gray-400 transition-all"
            />
          </div>
        </div>

        {/* States Cards Grid */}
        {filteredStates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredStates.map((state) => {
              const stateDistricts = districtCourtsByState[state._id] || districtCourtsByState[state.slug] || [];
              const courtCount = stateDistricts.length || courtCountsByState[state._id] || courtCountsByState[state.slug] || 0;

              return (
                <div
                  key={state._id || state.slug}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 overflow-hidden flex flex-col hover:-translate-y-1"
                >
                  {/* Card Banner Image Header */}
                  <Link href={`/courts/${state.slug}`} className="relative h-[150px] p-5 flex flex-col justify-between overflow-hidden bg-[#0d1b3e] block">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-85"
                      style={state.image ? { backgroundImage: `url(${state.image})` } : {}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] via-[#0d1b3e]/40 to-transparent" />

                    {/* Top Badges */}
                    <div className="relative z-10 flex items-center justify-between">
                      {state.code ? (
                        <span className="px-3 py-1 bg-[#c9a84c] text-[#0d1b3e] text-[11px] font-black tracking-widest uppercase rounded-full shadow-md">
                          {state.code}
                        </span>
                      ) : <span />}
                      <span className="px-2.5 py-1 bg-black/50 backdrop-blur-md text-white text-[11px] font-medium rounded-full border border-white/20 flex items-center gap-1">
                        <Building2 size={12} className="text-[#c9a84c]" />
                        {courtCount > 0 ? `${courtCount} District Courts` : 'High Court'}
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#c9a84c] transition-colors drop-shadow-sm flex items-center justify-between">
                        <span>{state.name}</span>
                        <ChevronRight size={18} className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-xs text-gray-300 line-clamp-1 mt-0.5 flex items-center gap-1 font-light">
                        <MapPin size={11} className="text-[#c9a84c] flex-shrink-0" />
                        State Judicial District Portal
                      </p>
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                    <p className="text-xs text-gray-600 line-clamp-2 mb-3 leading-relaxed">
                      {state.description || `Explore High Courts, District Courts, and Subordinate Courts in ${state.name}.`}
                    </p>

                    {/* 🏛️ District Courts Cards Grid inside State Card */}
                    {stateDistricts.length > 0 && (
                      <div className="mt-1 mb-4 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1">
                            <Building2 size={12} className="text-[#c9a84c]" />
                            District Courts ({stateDistricts.length})
                          </span>
                          {stateDistricts.length > 4 && (
                            <Link
                              href={`/courts/${state.slug}`}
                              className="text-[10px] font-bold text-[#c9a84c] hover:underline"
                            >
                              View All →
                            </Link>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-1.5">
                          {stateDistricts.slice(0, 4).map((dc: any, idx: number) => {
                            const isExternal = dc.website && dc.website.startsWith('http');
                            if (isExternal) {
                              return (
                                <a
                                  key={idx}
                                  href={dc.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 rounded-lg bg-white border border-gray-200/70 hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all text-left group/chip flex items-center justify-between"
                                  title={`Official Portal: ${dc.name || dc.district}`}
                                >
                                  <span className="text-[11px] font-semibold text-gray-800 group-hover/chip:text-[#0d1b3e] truncate">
                                    {dc.district || dc.name}
                                  </span>
                                  <ExternalLink size={10} className="text-gray-400 group-hover/chip:text-[#c9a84c] flex-shrink-0 ml-1" />
                                </a>
                              );
                            }
                            return (
                              <Link
                                key={idx}
                                href={dc.link || `/courts/${state.slug}`}
                                className="p-1.5 rounded-lg bg-white border border-gray-200/70 hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all text-left group/chip flex items-center justify-between"
                              >
                                <span className="text-[11px] font-semibold text-gray-800 group-hover/chip:text-[#0d1b3e] truncate">
                                  {dc.district || dc.name}
                                </span>
                                <ChevronRight size={10} className="text-gray-400 group-hover/chip:text-[#c9a84c] flex-shrink-0 ml-1" />
                              </Link>
                            );
                          })}
                        </div>

                        {stateDistricts.length > 4 && (
                          <div className="mt-2 text-center">
                            <Link
                              href={`/courts/${state.slug}`}
                              className="inline-block text-[10px] font-bold text-gray-500 hover:text-[#0d1b3e] hover:bg-gray-200 bg-gray-100 px-2 py-0.5 rounded-full transition-colors"
                            >
                              + {stateDistricts.length - 4} more districts
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Footer CTA Button */}
                    <Link
                      href={`/courts/${state.slug}`}
                      className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors"
                    >
                      <span className="uppercase tracking-wider text-[11px]">Explore All Courts</span>
                      <div className="w-7 h-7 rounded-full bg-gray-50 group-hover:bg-[#c9a84c] group-hover:text-[#0d1b3e] flex items-center justify-center transition-all">
                        <ChevronRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
            <Landmark size={40} className="mx-auto text-gray-300 mb-3" />
            <h3 className="text-lg font-bold text-gray-800">No states found</h3>
            <p className="text-xs text-gray-500 mt-1">Try adjusting your search or region filter.</p>
          </div>
        )}

      </div>
    </section>
  );
}

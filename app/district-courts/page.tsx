"use client";

import { useState, useMemo } from "react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { Landmark, Search, ExternalLink, Globe, MapPin, Building2, Table, LayoutGrid, Filter, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { initialDistrictCourtsData, DistrictCourtItem } from "../../lib/data/districtCourtsData";


function generateSlug(str: string) {
  return (str || '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

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
    <main className="min-h-screen bg-[#F8F7F3]">
      
      {/* 1. Page Hero Banner */}
      <PageHero
        title="ALL INDIA DISTRICT COURTS DIRECTORY"
        subtitle={
          <>
            Comprehensive directory of Subordinate Judiciary, District &amp; Sessions Courts, and official e-Courts portals across India.<br />
            Search by State, District, or Court Name to access live cause lists, case status, orders, and dedicated court profiles.
          </>
        }
        backgroundImage="/court/court_page_banner.png"
      />

      {/* 2. Statistics Bar */}
      <div className="bg-[#0A1222] text-white py-4 border-b border-[#B69A63]/25 shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-around gap-4 text-center text-xs">
          <div className="flex items-center gap-2">
            <Building2 size={15} className="text-[#B69A63]" />
            <span><strong className="text-[#B69A63] font-bold text-sm">{initialDistrictCourtsData.length}+</strong> District Courts Verified</span>
          </div>
          <div className="w-px h-4 bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-[#B69A63]" />
            <span><strong className="text-[#B69A63] font-bold text-sm">{uniqueStates.length}</strong> States &amp; UTs Covered</span>
          </div>
          <div className="w-px h-4 bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Globe size={15} className="text-[#B69A63]" />
            <span><strong className="text-[#B69A63] font-bold text-sm">100%</strong> Direct e-Courts Portals</span>
          </div>
        </div>
      </div>

      {/* 3. Main Directory Section */}
      <section className="py-14 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Controls: Search + State Selector + View Mode */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl shadow-xs border border-[#E7E4DC]">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-1">
            {/* Search Box */}
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737B88]" />
              <input
                type="text"
                placeholder="Search District, Court, or State..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#F8F7F3] border border-[#E7E4DC] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B69A63]/50 text-[#101D35] placeholder-[#737B88] font-medium transition-all"
              />
            </div>

            {/* State Filter Dropdown */}
            <div className="relative w-full sm:w-64">
              <Filter size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B69A63]" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-xs bg-[#F8F7F3] border border-[#E7E4DC] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B69A63]/50 text-[#101D35] font-semibold appearance-none cursor-pointer transition-all"
              >
                <option value="ALL">All States &amp; UTs ({uniqueStates.length})</option>
                {uniqueStates.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#737B88] pointer-events-none" />
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs text-[#737B88] font-medium hidden md:inline">
              Showing <strong className="text-[#101D35] font-semibold">{filteredCourts.length}</strong> courts
            </span>
            <div className="flex items-center gap-1 bg-[#F8F7F3] p-1 rounded-xl border border-[#E7E4DC]">
              <button
                type="button"
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "table"
                    ? "bg-[#101D35] text-white shadow-xs"
                    : "text-[#737B88] hover:text-[#101D35]"
                }`}
              >
                <Table size={13} />
                <span>Table</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "grid"
                    ? "bg-[#101D35] text-white shadow-xs"
                    : "text-[#737B88] hover:text-[#101D35]"
                }`}
              >
                <LayoutGrid size={13} />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Courts Content */}
        {filteredCourts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E7E4DC] shadow-xs p-8">
            <Building2 size={44} className="mx-auto text-gray-300 mb-3" />
            <h3 className="text-base font-bold text-[#101D35]">No District Courts Match Your Search</h3>
            <p className="text-xs text-[#737B88] mt-1">Try refining your search keyword or selecting a different State/UT from the dropdown.</p>
          </div>
        ) : viewMode === "table" ? (

          /* Structured Table View */
          <div className="bg-white rounded-2xl shadow-xs border border-[#E7E4DC] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#101D35] text-white text-[11px] font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-5 w-14 text-center border-b border-white/10">#</th>
                    <th className="py-3.5 px-5 border-b border-white/10">District Court Name</th>
                    <th className="py-3.5 px-5 border-b border-white/10">District / City</th>
                    <th className="py-3.5 px-5 border-b border-white/10">State / UT</th>
                    <th className="py-3.5 px-5 border-b border-white/10 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E4DC] text-xs">
                  {filteredCourts.slice(0, 200).map((court, idx) => {
                    const stateSlug = generateSlug(court.state);
                    const courtSlug = generateSlug(court.courtName);
                    const detailUrl = `/courts/${stateSlug}/${courtSlug}`;

                    return (
                      <tr
                        key={court.id}
                        className="hover:bg-[#F8F7F3] transition-colors group"
                      >
                        <td className="py-3.5 px-5 text-center font-bold text-[#737B88] group-hover:text-[#B69A63]">
                          {idx + 1}
                        </td>
                        <td className="py-3.5 px-5 font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors">
                          <Link href={detailUrl} className="flex items-center gap-2 hover:underline">
                            <Building2 size={14} className="text-[#B69A63] shrink-0" />
                            <span>{court.courtName}</span>
                          </Link>
                        </td>
                        <td className="py-3.5 px-5 text-[#202632] font-medium">
                          {court.district}
                        </td>
                        <td className="py-3.5 px-5 text-[#737B88]">
                          <Link 
                            href={`/courts/${stateSlug}`}
                            className="inline-flex items-center gap-1 hover:text-[#B69A63] font-medium"
                          >
                            <MapPin size={11} className="text-[#B69A63]" />
                            <span>{court.state}</span>
                          </Link>
                        </td>
                        <td className="py-3.5 px-5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={detailUrl}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#101D35] hover:bg-[#B69A63] text-white hover:text-[#101D35] text-[11px] font-bold transition-all shadow-xs"
                            >
                              <span>Details</span>
                              <ArrowRight size={10} />
                            </Link>
                            <a
                              href={court.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg border border-[#E7E4DC] hover:border-[#B69A63] text-[#737B88] hover:text-[#101D35] transition-colors"
                              title="Official eCourts Portal"
                            >
                              <ExternalLink size={13} />
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {filteredCourts.length > 200 && (
              <div className="p-4 text-center text-xs text-[#737B88] bg-[#F8F7F3] border-t border-[#E7E4DC]">
                Showing first 200 of {filteredCourts.length} matching courts. Use the State selector or search box above to narrow down results.
              </div>
            )}
          </div>
        ) : (

          /* Grid View Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourts.slice(0, 90).map((court) => {
              const stateSlug = generateSlug(court.state);
              const courtSlug = generateSlug(court.courtName);
              const detailUrl = `/courts/${stateSlug}/${courtSlug}`;

              return (
                <div
                  key={court.id}
                  className="bg-white border border-[#E7E4DC] hover:border-[#B69A63]/70 rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 bg-[#101D35]/5 border border-[#101D35]/10 text-[#101D35] text-[10px] font-extrabold tracking-wider uppercase rounded-md flex items-center gap-1">
                        <Building2 size={11} className="text-[#B69A63]" />
                        DISTRICT COURT
                      </span>
                      <Link
                        href={`/courts/${stateSlug}`}
                        className="text-[11px] font-bold text-[#737B88] hover:text-[#B69A63] flex items-center gap-1 bg-[#F8F7F3] border border-[#E7E4DC] px-2 py-0.5 rounded transition-colors"
                      >
                        <MapPin size={11} className="text-[#B69A63]" />
                        {court.state}
                      </Link>
                    </div>

                    {/* Title */}
                    <Link href={detailUrl}>
                      <h3 className="text-base font-serif font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors leading-snug mb-2">
                        {court.courtName}
                      </h3>
                    </Link>

                    {/* District & Territorial Scope */}
                    <p className="text-xs text-[#737B88] mb-4 font-medium">
                      <strong>District:</strong> {court.district} • Sessions Division
                    </p>
                  </div>

                  {/* Actions Strip */}
                  <div className="pt-3 border-t border-[#E7E4DC] flex items-center justify-between gap-2">
                    <Link
                      href={detailUrl}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors"
                    >
                      <span>Court Profile</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>

                    <a
                      href={court.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#737B88] hover:text-[#101D35] transition-colors"
                    >
                      <Globe size={11} className="text-[#B69A63]" />
                      <span>{court.displayUrl}</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* 4. CTA Banner */}
      <CtaBanner
        title="APPELLATE LITIGATION & SUPREME COURT ADVOCACY"
        subtitle="The Chambers of Advocate Tushar Garg coordinates Special Leave Petitions (SLPs) before the Supreme Court arising from trial and appellate court orders across India."
        buttonText="Contact Chambers Desk"
        href="/contact"
      />
    </main>
  );
}

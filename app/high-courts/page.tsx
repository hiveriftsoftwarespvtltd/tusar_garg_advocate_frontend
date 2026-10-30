"use client";

import { useState, useMemo } from "react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import { Landmark, Search, ExternalLink, Globe, MapPin, Building2, Table, LayoutGrid, Users, ArrowRight, Scale, BookOpen } from "lucide-react";
import Link from "next/link";
import { allHighCourtsData, HighCourtDetails } from "../../lib/data/courtsComprehensiveData";

export default function HighCourtsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"table" | "grid">("grid");

  const filteredCourts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return allHighCourtsData;

    return allHighCourtsData.filter(
      (court) =>
        court.name.toLowerCase().includes(q) ||
        court.jurisdiction.toLowerCase().includes(q) ||
        court.principalSeat.toLowerCase().includes(q) ||
        court.benches.some((b) => b.toLowerCase().includes(q)) ||
        court.statesCovered.some((s) => s.toLowerCase().includes(q)) ||
        court.displayUrl.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalSanctionedStrength = useMemo(() => {
    return allHighCourtsData.reduce((acc, hc) => acc + hc.sanctionedStrength.total, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F7F3]">
      
      {/* 1. Page Hero */}
      <PageHero
        title="25 CONSTITUTIONAL HIGH COURTS OF INDIA"
        subtitle={
          <>
            Comprehensive directory of all 25 High Courts in India established under the Constitution of India.<br />
            Explore principal seats, permanent benches, territorial jurisdictions, sanctioned judge strengths, and official e-Courts portals.
          </>
        }
        backgroundImage="/court/court_page_banner.png"
      />

      {/* 2. Quick Institutional Statistics Strip */}
      <div className="bg-[#0A1222] text-white py-4 border-b border-[#B69A63]/25 shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-around gap-4 text-center text-xs">
          <div className="flex items-center gap-2">
            <Landmark size={15} className="text-[#B69A63]" />
            <span><strong className="text-[#B69A63] font-bold text-sm">25</strong> Constitutional High Courts</span>
          </div>
          <div className="w-px h-4 bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Users size={15} className="text-[#B69A63]" />
            <span><strong className="text-[#B69A63] font-bold text-sm">{totalSanctionedStrength}</strong> Sanctioned Judges</span>
          </div>
          <div className="w-px h-4 bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-[#B69A63]" />
            <span><strong className="text-[#B69A63] font-bold text-sm">28 States &amp; 8 UTs</strong> Covered</span>
          </div>
          <div className="w-px h-4 bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Globe size={15} className="text-[#B69A63]" />
            <span><strong className="text-[#B69A63] font-bold text-sm">100% Verified</strong> Official Portals</span>
          </div>
        </div>
      </div>

      {/* 3. Main Directory Section */}
      <section className="py-14 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Controls: Search Bar & View Mode Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl shadow-xs border border-[#E7E4DC]">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-96">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737B88]" />
            <input
              type="text"
              placeholder="Search High Court, Seat, or State Jurisdiction..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#F8F7F3] border border-[#E7E4DC] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B69A63]/50 text-[#101D35] placeholder-[#737B88] font-medium transition-all"
            />
          </div>

          {/* Toggle View Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs text-[#737B88] font-medium hidden md:inline">
              Showing <strong className="text-[#101D35] font-semibold">{filteredCourts.length}</strong> of 25 High Courts
            </span>
            <div className="flex items-center gap-1 bg-[#F8F7F3] p-1 rounded-xl border border-[#E7E4DC]">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "grid"
                    ? "bg-[#101D35] text-white shadow-xs"
                    : "text-[#737B88] hover:text-[#101D35]"
                }`}
              >
                <LayoutGrid size={13} />
                <span>Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "table"
                    ? "bg-[#101D35] text-white shadow-xs"
                    : "text-[#737B88] hover:text-[#101D35]"
                }`}
              >
                <Table size={13} />
                <span>Table</span>
              </button>
            </div>
          </div>
        </div>

        {/* Directory Content */}
        {filteredCourts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E7E4DC] shadow-xs p-8">
            <Landmark size={44} className="mx-auto text-gray-300 mb-3" />
            <h3 className="text-base font-bold text-[#101D35]">No High Courts Match Your Search</h3>
            <p className="text-xs text-[#737B88] mt-1">Try searching for state names like "Delhi", "Punjab", or "Maharashtra".</p>
          </div>
        ) : viewMode === "table" ? (

          /* Structured Data Table View */
          <div className="bg-white rounded-2xl shadow-xs border border-[#E7E4DC] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#101D35] text-white text-[11px] font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-5 w-14 text-center border-b border-white/10">#</th>
                    <th className="py-3.5 px-5 border-b border-white/10">High Court Name</th>
                    <th className="py-3.5 px-5 border-b border-white/10">Principal Seat &amp; Benches</th>
                    <th className="py-3.5 px-5 border-b border-white/10">Territorial Jurisdiction</th>
                    <th className="py-3.5 px-5 border-b border-white/10 text-center">Sanctioned Strength</th>
                    <th className="py-3.5 px-5 border-b border-white/10 text-right">Official Portal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E4DC] text-xs">
                  {filteredCourts.map((court) => {
                    const primaryStateSlug = court.statesCovered[0]
                      ?.toLowerCase()
                      .trim()
                      .replace(/[^a-z0-9]+/g, "-");

                    return (
                      <tr
                        key={court.id}
                        className="hover:bg-[#F8F7F3] transition-colors group"
                      >
                        <td className="py-4 px-5 text-center font-bold text-[#737B88] group-hover:text-[#B69A63]">
                          {court.id}
                        </td>
                        <td className="py-4 px-5 font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors">
                          <div className="flex items-center gap-2">
                            <Building2 size={15} className="text-[#B69A63] shrink-0" />
                            <span>{court.name}</span>
                          </div>
                          <span className="text-[10px] text-[#737B88] font-normal block pl-5 mt-0.5">
                            Estd. {court.establishedYear} • {court.actOrCharter.split('/')[0]}
                          </span>
                        </td>
                        <td className="py-4 px-5 text-[#202632] font-medium">
                          <div className="font-semibold text-[#101D35]">{court.principalSeat}</div>
                          {court.benches.length > 0 && (
                            <div className="text-[11px] text-[#737B88]">
                              Benches: {court.benches.join(", ")}
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-5 text-[#737B88] font-medium">
                          <span className="inline-flex items-center gap-1.5 bg-[#F8F7F3] text-[#202632] px-3 py-1 rounded-md text-[11px] border border-[#E7E4DC] font-semibold">
                            <MapPin size={11} className="text-[#B69A63]" />
                            {court.jurisdiction}
                          </span>
                        </td>
                        <td className="py-4 px-5 text-center">
                          <span className="inline-block bg-[#F8F7F3] border border-[#E7E4DC] px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#101D35]">
                            {court.sanctionedStrength.total} Judges
                          </span>
                          <span className="text-[9.5px] text-[#737B88] block mt-0.5">
                            ({court.sanctionedStrength.permanent} Perm + {court.sanctionedStrength.additional} Addl)
                          </span>
                        </td>
                        <td className="py-4 px-5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <a
                              href={court.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-[#101D35] hover:bg-[#B69A63] text-white hover:text-[#101D35] px-3.5 py-1.5 rounded-lg font-bold text-[11px] transition-all shadow-xs"
                            >
                              <Globe size={12} />
                              <span>{court.displayUrl}</span>
                              <ExternalLink size={10} />
                            </a>
                            {primaryStateSlug && (
                              <Link
                                href={`/courts/${primaryStateSlug}`}
                                className="p-1.5 rounded-lg border border-[#E7E4DC] hover:border-[#B69A63] text-[#737B88] hover:text-[#101D35] transition-colors"
                                title="View Subordinate District Courts"
                              >
                                <ArrowRight size={13} />
                              </Link>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (

          /* Grid View Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourts.map((court) => {
              const primaryStateSlug = court.statesCovered[0]
                ?.toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, "-");

              return (
                <div
                  key={court.id}
                  className="bg-white border border-[#E7E4DC] hover:border-[#B69A63]/70 rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 bg-[#101D35] text-[#B69A63] text-[10px] font-extrabold tracking-wider uppercase rounded-md flex items-center gap-1">
                        <Landmark size={11} />
                        HIGH COURT #{court.id}
                      </span>
                      <span className="text-[11px] font-bold text-[#737B88] flex items-center gap-1 bg-[#F8F7F3] border border-[#E7E4DC] px-2 py-0.5 rounded">
                        <Users size={11} className="text-[#B69A63]" />
                        {court.sanctionedStrength.total} Judges
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors leading-snug mb-2">
                      {court.name}
                    </h3>

                    {/* Establishment & Charter */}
                    <div className="text-[11px] text-[#737B88] mb-3 flex items-center gap-1.5">
                      <span>Estd. <strong>{court.establishedYear}</strong></span>
                      <span>•</span>
                      <span className="truncate">{court.actOrCharter.split('/')[0]}</span>
                    </div>

                    {/* Principal Seat & Benches */}
                    <div className="space-y-1 text-xs text-[#202632] mb-3 font-medium">
                      <p><strong>Principal Seat:</strong> {court.principalSeat}</p>
                      {court.benches.length > 0 && (
                        <p className="text-[#737B88]"><strong>Benches:</strong> {court.benches.join(", ")}</p>
                      )}
                      <p className="text-[#737B88]"><strong>Jurisdiction:</strong> {court.jurisdiction}</p>
                    </div>

                    {/* Overview snippet */}
                    <p className="text-xs text-[#737B88] line-clamp-2 leading-relaxed mb-4 pt-3 border-t border-[#E7E4DC]/70">
                      {court.overview}
                    </p>
                  </div>

                  {/* Actions Strip */}
                  <div className="pt-3 border-t border-[#E7E4DC] flex items-center justify-between gap-2">
                    <a
                      href={court.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101D35] hover:text-[#B69A63] transition-colors"
                    >
                      <Globe size={13} className="text-[#B69A63]" />
                      <span>{court.displayUrl}</span>
                      <ExternalLink size={10} className="opacity-70" />
                    </a>

                    {primaryStateSlug && (
                      <Link
                        href={`/courts/${primaryStateSlug}`}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B69A63] hover:text-[#101D35] transition-colors"
                      >
                        <span>District Courts</span>
                        <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. CTA Banner */}
      <CtaBanner
        title="APPELLATE & WRIT LITIGATION BEFORE HIGH COURTS"
        subtitle="The Chambers of Advocate Tushar Garg coordinates constitutional writ petitions (Article 226) and appellate litigation across High Courts in India."
        buttonText="Contact Chambers Desk"
        href="/contact"
      />
    </main>
  );
}

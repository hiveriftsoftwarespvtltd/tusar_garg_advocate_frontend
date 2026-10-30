"use client";

import { useState, useMemo } from "react";
import { Scale, ExternalLink, ArrowRight, MapPin, Globe, Landmark, Users, Search, Table, LayoutGrid, Building2, Calendar } from "lucide-react";
import Link from "next/link";
import { allHighCourtsData, HighCourtDetails } from "../../../lib/data/courtsComprehensiveData";

interface HighCourtsGridProps {
  courts?: any[];
}

export default function HighCourtsGrid({ courts = [] }: HighCourtsGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Filter high courts based on search query
  const filteredHighCourts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return allHighCourtsData;

    return allHighCourtsData.filter((hc) => {
      return (
        hc.name.toLowerCase().includes(q) ||
        hc.jurisdiction.toLowerCase().includes(q) ||
        hc.principalSeat.toLowerCase().includes(q) ||
        hc.benches.some((b) => b.toLowerCase().includes(q)) ||
        hc.statesCovered.some((s) => s.toLowerCase().includes(q)) ||
        hc.displayUrl.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  return (
    <section id="high-courts" className="py-16 bg-[#F8F7F3] border-b border-[#E7E4DC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101D35]/5 border border-[#101D35]/15 text-[#101D35] text-[11px] font-bold tracking-widest uppercase mb-3">
            <Scale size={13} className="text-[#B69A63]" />
            CONSTITUTION OF INDIA • ARTICLES 214–231
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#101D35] tracking-tight">
            25 Constitutional High Courts of India
          </h2>
          <div className="w-16 h-0.5 bg-[#B69A63] my-3 rounded-full" />
          <p className="text-sm text-[#737B88] leading-relaxed">
            The High Courts stand at the head of a State's judicial administration, exercising original civil, criminal appellate, and extraordinary constitutional writ jurisdiction under Article 226 of the Constitution of India.
          </p>
        </div>

        {/* Search & View Mode Controls */}
        <div className="bg-white border border-[#E7E4DC] rounded-2xl p-4 mb-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737B88]" />
            <input
              type="text"
              placeholder="Search High Court, Principal Seat, or State..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#F8F7F3] border border-[#E7E4DC] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B69A63]/50 text-[#101D35] placeholder-[#737B88] font-medium transition-all"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs text-[#737B88] font-medium hidden md:inline">
              Showing <strong className="text-[#101D35] font-semibold">{filteredHighCourts.length}</strong> of 25 High Courts
            </span>
            <div className="flex items-center gap-1 bg-[#F8F7F3] p-1 rounded-xl border border-[#E7E4DC]">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
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
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
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

        {/* Content View: Grid or Table */}
        {filteredHighCourts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E7E4DC] p-8">
            <Scale size={44} className="mx-auto text-gray-300 mb-3" />
            <h3 className="text-base font-bold text-[#101D35]">No High Courts Match Your Query</h3>
            <p className="text-xs text-[#737B88] mt-1">Try searching by state (e.g., "Maharashtra", "Uttar Pradesh", "Delhi") or principal seat.</p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHighCourts.map((court) => {
              const primaryStateSlug = court.statesCovered[0]
                ?.toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, "-");

              return (
                <div
                  key={court.id}
                  className="bg-white border border-[#E7E4DC] hover:border-[#B69A63]/60 rounded-2xl p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
                >
                  <div>
                    {/* Top Credential Strip */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 bg-[#101D35]/5 border border-[#101D35]/10 text-[#101D35] text-[10px] font-bold tracking-wider uppercase rounded-md flex items-center gap-1">
                        <Landmark size={11} className="text-[#B69A63]" />
                        ESTD. {court.establishedYear}
                      </span>
                      <span className="text-[11px] font-semibold text-[#737B88] flex items-center gap-1 bg-[#F8F7F3] px-2 py-0.5 rounded border border-[#E7E4DC]">
                        <Users size={11} className="text-[#B69A63]" />
                        {court.sanctionedStrength.total} Judges
                      </span>
                    </div>

                    {/* Court Title */}
                    <h3 className="text-lg font-serif font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors leading-snug mb-2">
                      {court.name}
                    </h3>

                    {/* Principal Seat & Benches */}
                    <div className="space-y-1.5 text-xs text-[#737B88] mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-[#B69A63] shrink-0" />
                        <span className="font-medium text-[#202632]">
                          <strong>Seat:</strong> {court.principalSeat}
                        </span>
                      </div>
                      {court.benches.length > 0 && (
                        <div className="text-[11px] text-[#737B88] pl-4">
                          <strong>Benches:</strong> {court.benches.join(", ")}
                        </div>
                      )}
                      <div className="text-[11px] text-[#737B88] pl-4">
                        <strong>Jurisdiction:</strong> {court.jurisdiction}
                      </div>
                    </div>

                    {/* Factual Overview */}
                    <p className="text-xs text-[#737B88] line-clamp-2 mb-4 leading-relaxed border-t border-[#E7E4DC]/60 pt-3">
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
                      title="Official High Court Website"
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
                        <span>Subordinate Judiciary</span>
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xs border border-[#E7E4DC] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#101D35] text-white text-[11px] font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-4 text-center w-12 border-b border-white/10">#</th>
                    <th className="py-3.5 px-4 border-b border-white/10">High Court</th>
                    <th className="py-3.5 px-4 border-b border-white/10">Principal Seat & Benches</th>
                    <th className="py-3.5 px-4 border-b border-white/10">Territorial Jurisdiction</th>
                    <th className="py-3.5 px-4 border-b border-white/10 text-center">Sanctioned Judges</th>
                    <th className="py-3.5 px-4 border-b border-white/10 text-right">Official Portal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7E4DC] text-xs">
                  {filteredHighCourts.map((court, idx) => (
                    <tr key={court.id} className="hover:bg-[#F8F7F3] transition-colors group">
                      <td className="py-3.5 px-4 text-center font-bold text-[#737B88] group-hover:text-[#B69A63]">
                        {court.id}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors">
                        <div className="flex items-center gap-2">
                          <Building2 size={14} className="text-[#B69A63] shrink-0" />
                          <span>{court.name}</span>
                        </div>
                        <span className="text-[10px] text-[#737B88] font-normal block pl-5">
                          Estd. {court.establishedYear} • {court.actOrCharter.split('/')[0]}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-[#202632] font-medium">
                        <div className="font-semibold">{court.principalSeat}</div>
                        {court.benches.length > 0 && (
                          <div className="text-[11px] text-[#737B88]">
                            Benches: {court.benches.join(", ")}
                          </div>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-[#737B88] font-medium">
                        {court.jurisdiction}
                      </td>
                      <td className="py-3.5 px-4 text-center font-semibold text-[#101D35]">
                        <span className="inline-block bg-[#F8F7F3] border border-[#E7E4DC] px-2.5 py-0.5 rounded-full text-[11px]">
                          {court.sanctionedStrength.total}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <a
                          href={court.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101D35] hover:bg-[#B69A63] text-white hover:text-[#101D35] text-[11px] font-bold transition-all shadow-xs"
                        >
                          <Globe size={11} />
                          <span>{court.displayUrl}</span>
                          <ExternalLink size={10} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

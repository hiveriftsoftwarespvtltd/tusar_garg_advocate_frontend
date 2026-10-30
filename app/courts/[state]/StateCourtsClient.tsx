"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Building2, Search, MapPin, Globe, ExternalLink, ChevronRight, LayoutGrid, Table, ArrowRight } from "lucide-react";

interface CourtRecord {
  _id: string;
  name: string;
  slug: string;
  courtType?: string;
  city?: string;
  district?: string;
  address?: string;
  website?: string;
  displayUrl?: string;
}

interface StateCourtsClientProps {
  courts: CourtRecord[];
  stateSlug: string;
  stateName: string;
}

function generateSlug(str: string) {
  return (str || '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function StateCourtsClient({ courts, stateSlug, stateName }: StateCourtsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const filteredCourts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return courts;

    return courts.filter((court) => {
      const name = (court.name || "").toLowerCase();
      const city = (court.city || "").toLowerCase();
      const district = (court.district || "").toLowerCase();
      const displayUrl = (court.displayUrl || "").toLowerCase();
      return name.includes(q) || city.includes(q) || district.includes(q) || displayUrl.includes(q);
    });
  }, [courts, searchQuery]);

  return (
    <div>
      {/* Search Bar & View Mode Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl shadow-xs border border-[#E7E4DC]">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-96">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737B88]" />
          <input
            type="text"
            placeholder={`Search ${stateName} District Courts...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#F8F7F3] border border-[#E7E4DC] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B69A63]/50 text-[#101D35] placeholder-[#737B88] font-medium transition-all"
          />
        </div>

        {/* Counter & Toggle */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-xs text-[#737B88] font-medium hidden md:inline">
            Showing <strong className="text-[#101D35] font-semibold">{filteredCourts.length}</strong> of {courts.length} courts
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

      {/* Courts Display */}
      {filteredCourts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#E7E4DC] shadow-xs p-8">
          <Building2 size={44} className="mx-auto text-gray-300 mb-3" />
          <h3 className="text-base font-bold text-[#101D35]">No District Courts Match Your Search</h3>
          <p className="text-xs text-[#737B88] mt-1">Try clearing your search query or searching by district name.</p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourts.map((court) => {
            const courtSlug = court.slug || generateSlug(court.name);
            const internalUrl = `/courts/${stateSlug}/${courtSlug}`;
            const hasWebsite = Boolean(court.website && court.website.startsWith("http"));
            const districtLabel = court.district || court.city || "District";

            return (
              <div
                key={court._id}
                className="bg-white border border-[#E7E4DC] hover:border-[#B69A63]/70 rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 bg-[#101D35]/5 border border-[#101D35]/10 text-[#101D35] text-[10px] font-extrabold tracking-wider uppercase rounded-md flex items-center gap-1">
                      <Building2 size={11} className="text-[#B69A63]" />
                      {court.courtType || "District Court"}
                    </span>
                    <span className="text-[11px] font-bold text-[#737B88] flex items-center gap-1 bg-[#F8F7F3] border border-[#E7E4DC] px-2 py-0.5 rounded">
                      <MapPin size={11} className="text-[#B69A63]" />
                      {districtLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={internalUrl}>
                    <h3 className="text-base font-serif font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors leading-snug mb-2">
                      {court.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#737B88] mb-4 font-medium">
                    Principal District &amp; Sessions Court jurisdiction for {districtLabel}, {stateName}.
                  </p>
                </div>

                {/* Actions Strip */}
                <div className="pt-3 border-t border-[#E7E4DC] flex items-center justify-between gap-2">
                  <Link
                    href={internalUrl}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors"
                  >
                    <span>View Court Profile</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  {hasWebsite && (
                    <a
                      href={court.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#737B88] hover:text-[#101D35] transition-colors"
                      title="Official eCourts Portal"
                    >
                      <Globe size={11} className="text-[#B69A63]" />
                      <span>{court.displayUrl || "e-Courts"}</span>
                      <ExternalLink size={10} />
                    </a>
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
                  <th className="py-3.5 px-5 w-14 text-center border-b border-white/10">#</th>
                  <th className="py-3.5 px-5 border-b border-white/10">Court Name</th>
                  <th className="py-3.5 px-5 border-b border-white/10">District / City</th>
                  <th className="py-3.5 px-5 border-b border-white/10">Jurisdiction</th>
                  <th className="py-3.5 px-5 border-b border-white/10 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7E4DC] text-xs">
                {filteredCourts.map((court, idx) => {
                  const courtSlug = court.slug || generateSlug(court.name);
                  const internalUrl = `/courts/${stateSlug}/${courtSlug}`;
                  const hasWebsite = Boolean(court.website && court.website.startsWith("http"));

                  return (
                    <tr
                      key={court._id}
                      className="hover:bg-[#F8F7F3] transition-colors group"
                    >
                      <td className="py-3.5 px-5 text-center font-bold text-[#737B88] group-hover:text-[#B69A63]">
                        {idx + 1}
                      </td>
                      <td className="py-3.5 px-5 font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors">
                        <Link href={internalUrl} className="flex items-center gap-2 hover:underline">
                          <Building2 size={14} className="text-[#B69A63] shrink-0" />
                          <span>{court.name}</span>
                        </Link>
                      </td>
                      <td className="py-3.5 px-5 text-[#202632] font-medium">
                        {court.district || court.city || "District"}
                      </td>
                      <td className="py-3.5 px-5 text-[#737B88]">
                        {stateName} Subordinate Judiciary
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={internalUrl}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#101D35] hover:bg-[#B69A63] text-white hover:text-[#101D35] text-[11px] font-bold transition-all shadow-xs"
                          >
                            <span>Profile</span>
                            <ArrowRight size={10} />
                          </Link>
                          {hasWebsite && (
                            <a
                              href={court.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg border border-[#E7E4DC] hover:border-[#B69A63] text-[#737B88] hover:text-[#101D35] transition-colors"
                              title="Official eCourts Portal"
                            >
                              <ExternalLink size={13} />
                            </a>
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
      )}

    </div>
  );
}

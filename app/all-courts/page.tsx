"use client";

import { useState, useMemo } from "react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import {
  Landmark,
  Search,
  ExternalLink,
  Globe,
  MapPin,
  Building2,
  Table,
  LayoutGrid,
  Scale,
  Gavel,
  ShieldCheck,
  CheckCircle2,
  Filter,
  ChevronDown
} from "lucide-react";
import { initialDistrictCourtsData } from "../district-courts/page";

// Unified Court Record Model
export interface UnifiedCourtItem {
  id: string;
  name: string;
  category: "Supreme Court" | "High Court" | "District Court" | "Tribunal";
  state: string;
  district?: string;
  website: string;
  displayUrl: string;
  badge: string;
  badgeColor: string;
  benchOrInfo?: string;
}

// 1. High Courts Dataset (25 Courts)
const highCourtsList = [
  { id: 1, name: "Allahabad High Court", jurisdiction: "Uttar Pradesh", website: "https://www.allahabadhighcourt.in", displayUrl: "allahabadhighcourt.in", bench: "Prayagraj (Principal), Lucknow Bench" },
  { id: 2, name: "Andhra Pradesh High Court", jurisdiction: "Andhra Pradesh", website: "https://aphc.gov.in", displayUrl: "aphc.gov.in", bench: "Amaravati" },
  { id: 3, name: "Bombay High Court", jurisdiction: "Maharashtra, Goa, Dadra & Nagar Haveli, Daman & Diu", website: "https://bombayhighcourt.nic.in", displayUrl: "bombayhighcourt.nic.in", bench: "Mumbai, Nagpur, Aurangabad, Panaji" },
  { id: 4, name: "Calcutta High Court", jurisdiction: "West Bengal, Andaman & Nicobar Islands", website: "https://www.calcuttahighcourt.gov.in", displayUrl: "calcuttahighcourt.gov.in", bench: "Kolkata, Jalpaiguri, Port Blair" },
  { id: 5, name: "Chhattisgarh High Court", jurisdiction: "Chhattisgarh", website: "https://highcourt.cg.gov.in", displayUrl: "highcourt.cg.gov.in", bench: "Bilaspur" },
  { id: 6, name: "Delhi High Court", jurisdiction: "Delhi", website: "https://delhihighcourt.nic.in", displayUrl: "delhihighcourt.nic.in", bench: "New Delhi" },
  { id: 7, name: "Gauhati High Court", jurisdiction: "Assam, Nagaland, Mizoram, Arunachal Pradesh", website: "https://ghconline.gov.in", displayUrl: "ghconline.gov.in", bench: "Guwahati, Kohima, Aizawl, Itanagar" },
  { id: 8, name: "Gujarat High Court", jurisdiction: "Gujarat", website: "https://gujarathighcourt.nic.in", displayUrl: "gujarathighcourt.nic.in", bench: "Ahmedabad" },
  { id: 9, name: "Himachal Pradesh High Court", jurisdiction: "Himachal Pradesh", website: "https://hphighcourt.nic.in", displayUrl: "hphighcourt.nic.in", bench: "Shimla" },
  { id: 10, name: "Jammu & Kashmir and Ladakh High Court", jurisdiction: "Jammu & Kashmir, Ladakh", website: "https://jkhighcourt.nic.in", displayUrl: "jkhighcourt.nic.in", bench: "Srinagar & Jammu" },
  { id: 11, name: "Jharkhand High Court", jurisdiction: "Jharkhand", website: "https://jharkhandhighcourt.nic.in", displayUrl: "jharkhandhighcourt.nic.in", bench: "Ranchi" },
  { id: 12, name: "Karnataka High Court", jurisdiction: "Karnataka", website: "https://karnatakajudiciary.kar.nic.in", displayUrl: "karnatakajudiciary.kar.nic.in", bench: "Bengaluru, Dharwad, Kalaburagi" },
  { id: 13, name: "Kerala High Court", jurisdiction: "Kerala, Lakshadweep", website: "https://highcourtofkerala.nic.in", displayUrl: "highcourtofkerala.nic.in", bench: "Kochi" },
  { id: 14, name: "Madhya Pradesh High Court", jurisdiction: "Madhya Pradesh", website: "https://mphc.gov.in", displayUrl: "mphc.gov.in", bench: "Jabalpur, Gwalior, Indore" },
  { id: 15, name: "Madras High Court", jurisdiction: "Tamil Nadu, Puducherry", website: "https://www.mhc.tn.gov.in", displayUrl: "mhc.tn.gov.in", bench: "Chennai, Madurai" },
  { id: 16, name: "Manipur High Court", jurisdiction: "Manipur", website: "https://hcmimphal.nic.in", displayUrl: "hcmimphal.nic.in", bench: "Imphal" },
  { id: 17, name: "Meghalaya High Court", jurisdiction: "Meghalaya", website: "https://meghalayahighcourt.nic.in", displayUrl: "meghalayahighcourt.nic.in", bench: "Shillong" },
  { id: 18, name: "Orissa High Court", jurisdiction: "Odisha", website: "https://orissahighcourt.nic.in", displayUrl: "orissahighcourt.nic.in", bench: "Cuttack" },
  { id: 19, name: "Patna High Court", jurisdiction: "Bihar", website: "https://www.patnahighcourt.gov.in", displayUrl: "patnahighcourt.gov.in", bench: "Patna" },
  { id: 20, name: "Punjab & Haryana High Court", jurisdiction: "Punjab, Haryana, Chandigarh", website: "https://highcourtchd.gov.in", displayUrl: "highcourtchd.gov.in", bench: "Chandigarh" },
  { id: 21, name: "Rajasthan High Court", jurisdiction: "Rajasthan", website: "https://hcraj.nic.in", displayUrl: "hcraj.nic.in", bench: "Jodhpur, Jaipur" },
  { id: 22, name: "Sikkim High Court", jurisdiction: "Sikkim", website: "https://highcourtofsikkim.nic.in", displayUrl: "highcourtofsikkim.nic.in", bench: "Gangtok" },
  { id: 23, name: "Telangana High Court", jurisdiction: "Telangana", website: "https://tshc.gov.in", displayUrl: "tshc.gov.in", bench: "Hyderabad" },
  { id: 24, name: "Tripura High Court", jurisdiction: "Tripura", website: "https://thc.nic.in", displayUrl: "thc.nic.in", bench: "Agartala" },
  { id: 25, name: "Uttarakhand High Court", jurisdiction: "Uttarakhand", website: "https://highcourtofuttarakhand.gov.in", displayUrl: "highcourtofuttarakhand.gov.in", bench: "Nainital" },
];

// 2. Quasi-Judicial Tribunals Dataset
const tribunalsList = [
  { id: 1, name: "National Company Law Tribunal", shortName: "NCLT", category: "Corporate & Insolvency", website: "https://nclt.gov.in", displayUrl: "nclt.gov.in", headquarters: "New Delhi (16 Benches)" },
  { id: 2, name: "National Company Law Appellate Tribunal", shortName: "NCLAT", category: "Corporate Appellate", website: "https://nclat.nic.in", displayUrl: "nclat.nic.in", headquarters: "New Delhi & Chennai" },
  { id: 3, name: "National Green Tribunal", shortName: "NGT", category: "Environment & Forest", website: "https://greentribunal.gov.in", displayUrl: "greentribunal.gov.in", headquarters: "New Delhi (5 Zonal Benches)" },
  { id: 4, name: "Central Administrative Tribunal", shortName: "CAT", category: "Service Matters", website: "https://cgat.gov.in", displayUrl: "cgat.gov.in", headquarters: "New Delhi (19 Benches)" },
  { id: 5, name: "Income Tax Appellate Tribunal", shortName: "ITAT", category: "Direct Taxation", website: "https://itat.gov.in", displayUrl: "itat.gov.in", headquarters: "Mumbai (63 Benches All India)" },
  { id: 6, name: "Customs, Excise & Service Tax Appellate Tribunal", shortName: "CESTAT", category: "Indirect Taxation", website: "https://cestat.gov.in", displayUrl: "cestat.gov.in", headquarters: "New Delhi (8 Benches)" },
  { id: 7, name: "Securities Appellate Tribunal", shortName: "SAT", category: "Securities & Financial", website: "https://sat.gov.in", displayUrl: "sat.gov.in", headquarters: "Mumbai" },
  { id: 8, name: "Debts Recovery Appellate Tribunal", shortName: "DRAT", category: "Banking & Recovery", website: "https://drt.gov.in", displayUrl: "drt.gov.in", headquarters: "Delhi, Mumbai, Kolkata, Chennai, Allahabad" },
  { id: 9, name: "Armed Forces Tribunal", shortName: "AFT", category: "Military & Defence", website: "https://aftdelhi.nic.in", displayUrl: "aftdelhi.nic.in", headquarters: "New Delhi (11 Regional Benches)" },
  { id: 10, name: "Telecom Disputes Settlement Appellate Tribunal", shortName: "TDSAT", category: "Telecom & Broadcasting", website: "https://tdsat.gov.in", displayUrl: "tdsat.gov.in", headquarters: "New Delhi" },
  { id: 11, name: "National Consumer Disputes Redressal Commission", shortName: "NCDRC", category: "Consumer Protection", website: "https://ncdrc.nic.in", displayUrl: "ncdrc.nic.in", headquarters: "New Delhi" },
  { id: 12, name: "Real Estate Regulatory Authority & Appellate Tribunal", shortName: "RERA", category: "Real Estate & Property", website: "https://rera.gov.in", displayUrl: "rera.gov.in", headquarters: "State Appellate Benches" },
  { id: 13, name: "Debts Recovery Tribunal", shortName: "DRT", category: "Banking & Loan Recovery", website: "https://drt.gov.in", displayUrl: "drt.gov.in", headquarters: "39 Benches Across India" },
];

export default function AllCourtsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | "SUPREME" | "HIGH" | "DISTRICT" | "TRIBUNAL">("ALL");
  const [selectedState, setSelectedState] = useState("ALL");
  const [viewMode, setViewMode] = useState<"grid" | "table">("table");
  const [displayCount, setDisplayCount] = useState(60);

  // Build Master Unified Courts List (Supreme Court + High Courts + Tribunals + 704 District Courts)
  const masterCourtsList: UnifiedCourtItem[] = useMemo(() => {
    const list: UnifiedCourtItem[] = [];

    // 1. Supreme Court
    list.push({
      id: "sc-1",
      name: "Supreme Court of India",
      category: "Supreme Court",
      state: "Delhi",
      district: "New Delhi",
      website: "https://main.sci.gov.in",
      displayUrl: "main.sci.gov.in",
      badge: "APEX COURT",
      badgeColor: "bg-[#c9a84c] text-[#0d1b3e]",
      benchOrInfo: "Tilak Marg, New Delhi — Article 124 of Constitution"
    });

    // 2. High Courts
    highCourtsList.forEach((hc) => {
      list.push({
        id: `hc-${hc.id}`,
        name: hc.name,
        category: "High Court",
        state: hc.jurisdiction,
        website: hc.website,
        displayUrl: hc.displayUrl,
        badge: "HIGH COURT",
        badgeColor: "bg-[#0d1b3e] text-[#c9a84c]",
        benchOrInfo: hc.bench ? `Bench: ${hc.bench}` : undefined
      });
    });

    // 3. Quasi-Judicial Tribunals
    tribunalsList.forEach((tb) => {
      list.push({
        id: `tb-${tb.id}`,
        name: `${tb.name} (${tb.shortName})`,
        category: "Tribunal",
        state: "All India",
        website: tb.website,
        displayUrl: tb.displayUrl,
        badge: tb.shortName,
        badgeColor: "bg-purple-900 text-purple-200",
        benchOrInfo: `${tb.category} — ${tb.headquarters}`
      });
    });

    // 4. 704 District Courts
    (initialDistrictCourtsData || []).forEach((dc) => {
      list.push({
        id: `dc-${dc.id}`,
        name: dc.courtName,
        category: "District Court",
        state: dc.state,
        district: dc.district,
        website: dc.website,
        displayUrl: dc.displayUrl,
        badge: "DISTRICT COURT",
        badgeColor: "bg-blue-900/80 text-blue-200"
      });
    });

    return list;
  }, []);

  // Extract unique states list for filter dropdown
  const uniqueStatesList = useMemo(() => {
    const statesSet = new Set<string>();
    masterCourtsList.forEach((c) => {
      if (c.state && c.state !== "All India") {
        // Handle comma separated jurisdictions (e.g. Maharashtra, Goa)
        c.state.split(",").forEach((s) => statesSet.add(s.trim()));
      }
    });
    return Array.from(statesSet).sort();
  }, [masterCourtsList]);

  // Master Filtered List
  const filteredCourts = useMemo(() => {
    const rawQuery = searchQuery.trim().toLowerCase();

    // Clean query from prefixes like "bench:", "district:", "state:", "court:"
    const cleanedQuery = rawQuery
      .replace(/^(bench|district|state|court|portal|url):\s*/i, "")
      .replace(/[^a-z0-9\s]/gi, " ");

    const queryTokens = cleanedQuery
      .split(/\s+/)
      .filter((t) => t.length > 0 && t !== "bench" && t !== "court" && t !== "district" && t !== "state");

    return masterCourtsList.filter((court) => {
      // Category filter
      if (selectedCategory === "SUPREME" && court.category !== "Supreme Court") return false;
      if (selectedCategory === "HIGH" && court.category !== "High Court") return false;
      if (selectedCategory === "DISTRICT" && court.category !== "District Court") return false;
      if (selectedCategory === "TRIBUNAL" && court.category !== "Tribunal") return false;

      // State filter
      if (selectedState !== "ALL") {
        const matchesState = court.state.toLowerCase().includes(selectedState.toLowerCase());
        if (!matchesState) return false;
      }

      // Keyword search
      if (rawQuery !== "") {
        // Combined searchable text across ALL court properties including bench & info
        const fullSearchableText = [
          court.name,
          court.category,
          court.state,
          court.district || "",
          court.benchOrInfo || "",
          court.badge || "",
          court.displayUrl,
          court.website
        ].join(" ").toLowerCase();

        // 1. Direct string match
        if (fullSearchableText.includes(rawQuery)) return true;

        // 2. Cleaned string match
        if (fullSearchableText.includes(cleanedQuery)) return true;

        // 3. Token-based match (EVERY token in query must match fullSearchableText)
        if (queryTokens.length > 0) {
          const allTokensMatch = queryTokens.every((token) => fullSearchableText.includes(token));
          if (allTokensMatch) return true;
        }

        return false;
      }

      return true;
    });
  }, [masterCourtsList, selectedCategory, selectedState, searchQuery]);

  // Visible courts based on pagination / load more
  const visibleCourts = useMemo(() => {
    return filteredCourts.slice(0, displayCount);
  }, [filteredCourts, displayCount]);

  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      {/* 1. Page Hero Banner */}
      <PageHero
        title="ALL COURTS OF INDIA — MASTER DIRECTORY"
        subtitle={
          <>
            Unified database of Supreme Court of India, 25 Constitutional High Courts, 704+ District Courts, and Major Quasi-Judicial Tribunals.<br />
            Search and access official e-Courts portals across all 36 States & Union Territories.
          </>
        }
        backgroundImage="/court/court_page_banner.png"
      />

      {/* 2. Quick Live Statistics Strip */}
      <div className="bg-[#071126] text-white py-4 border-b border-[#c9a84c]/20 shadow-md">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-wrap items-center justify-around gap-4 text-center text-xs">
          <div className="flex items-center gap-2">
            <Gavel size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">1 Apex</strong> Supreme Court</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Landmark size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">25</strong> High Courts</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">704</strong> District Courts</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Scale size={16} className="text-[#c9a84c]" />
            <span><strong className="text-[#c9a84c] font-bold text-sm">13</strong> Tribunals</span>
          </div>
        </div>
      </div>

      {/* 3. Main Directory Section */}
      <section className="py-10 max-w-[1280px] mx-auto px-4">

        {/* Unified Search & Filter Control Bar */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 mb-8 space-y-4">
          
          {/* Row 1: Search Box & State Filter & View Mode */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative w-full md:flex-1">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search court name, state, district, or domain..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDisplayCount(60);
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-800 focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] transition-all"
              />
            </div>

            {/* State Filter Dropdown */}
            <div className="relative w-full md:w-64">
              <Filter size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setDisplayCount(60);
                }}
                className="w-full pl-9 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 appearance-none focus:outline-none focus:border-[#c9a84c] cursor-pointer"
              >
                <option value="ALL">All States & UTs ({uniqueStatesList.length})</option>
                {uniqueStatesList.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-gray-100 p-1 rounded-xl border border-gray-200">
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-lg transition-colors ${viewMode === "table" ? "bg-white text-[#0d1b3e] shadow-sm" : "text-gray-400 hover:text-gray-700"}`}
                title="Table View"
              >
                <Table size={16} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-white text-[#0d1b3e] shadow-sm" : "text-gray-400 hover:text-gray-700"}`}
                title="Grid View"
              >
                <LayoutGrid size={16} />
              </button>
            </div>

          </div>

          {/* Row 2: Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-gray-100 pb-1">
            <button
              onClick={() => { setSelectedCategory("ALL"); setDisplayCount(60); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === "ALL"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Courts ({masterCourtsList.length})
            </button>
            <button
              onClick={() => { setSelectedCategory("SUPREME"); setDisplayCount(60); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === "SUPREME"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Supreme Court (1)
            </button>
            <button
              onClick={() => { setSelectedCategory("HIGH"); setDisplayCount(60); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === "HIGH"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              High Courts (25)
            </button>
            <button
              onClick={() => { setSelectedCategory("DISTRICT"); setDisplayCount(60); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === "DISTRICT"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              District Courts ({initialDistrictCourtsData.length})
            </button>
            <button
              onClick={() => { setSelectedCategory("TRIBUNAL"); setDisplayCount(60); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === "TRIBUNAL"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Tribunals ({tribunalsList.length})
            </button>
          </div>
        </div>

        {/* Results Info Counter */}
        <div className="flex items-center justify-between mb-4 px-1">
          <p className="text-xs text-gray-500">
            Showing <strong className="text-[#0d1b3e] font-bold">{visibleCourts.length}</strong> of <strong className="text-[#0d1b3e] font-bold">{filteredCourts.length}</strong> total courts
            {selectedState !== "ALL" && <span> in <strong className="text-[#c9a84c]">{selectedState}</strong></span>}
          </p>
        </div>

        {/* ── UNIFIED TABLE VIEW ── */}
        {viewMode === "table" ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-700">
                <thead className="bg-[#0d1b3e] text-white font-serif uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3.5 px-4 font-semibold w-12 text-center">#</th>
                    <th className="py-3.5 px-4 font-semibold">Court Name</th>
                    <th className="py-3.5 px-4 font-semibold">Category</th>
                    <th className="py-3.5 px-4 font-semibold">State / Jurisdiction</th>
                    <th className="py-3.5 px-4 font-semibold">District / Bench</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Official e-Courts Portal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {visibleCourts.map((court, idx) => (
                    <tr key={`${court.id}-${idx}`} className="hover:bg-amber-50/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-gray-400 text-center">{idx + 1}</td>
                      <td className="py-3 px-4 font-bold text-[#0d1b3e] font-serif">
                        {court.name}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${court.badgeColor}`}>
                          {court.badge}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600 font-medium">{court.state}</td>
                      <td className="py-3 px-4 text-gray-500">
                        {court.district || court.benchOrInfo || "—"}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <a
                          href={court.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#0d1b3e] hover:bg-[#c9a84c] text-white hover:text-[#0d1b3e] px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all shadow-sm"
                        >
                          <span>{court.displayUrl}</span>
                          <ExternalLink size={12} />
                        </a>
                      </td>
                    </tr>
                  ))}

                  {filteredCourts.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-gray-400 italic">
                        No courts found matching your search query or selected state.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* ── UNIFIED GRID VIEW ── */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {visibleCourts.map((court, idx) => (
              <div
                key={`${court.id}-${idx}`}
                className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-[#c9a84c] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${court.badgeColor}`}>
                      {court.badge}
                    </span>
                    <CheckCircle2 size={15} className="text-emerald-600" />
                  </div>

                  <h3 className="text-base font-bold font-serif text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors mt-1">
                    {court.name}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2 flex items-start gap-1.5">
                    <MapPin size={14} className="text-[#c9a84c] shrink-0 mt-0.5" />
                    <span><strong>State / Jurisdiction:</strong> {court.state}</span>
                  </p>

                  {(court.district || court.benchOrInfo) && (
                    <p className="text-[11px] text-gray-500 mt-1 flex items-start gap-1.5">
                      <Building2 size={13} className="text-gray-400 shrink-0 mt-0.5" />
                      <span>{court.district ? `District: ${court.district}` : court.benchOrInfo}</span>
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-mono truncate max-w-[170px]">
                    {court.displayUrl}
                  </span>
                  <a
                    href={court.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#0d1b3e] text-white hover:bg-[#c9a84c] hover:text-[#0d1b3e] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm"
                  >
                    Visit <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}

            {filteredCourts.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-400 italic bg-white rounded-2xl border border-gray-200">
                No courts found matching your search query or selected state.
              </div>
            )}
          </div>
        )}

        {/* Load More Button */}
        {filteredCourts.length > visibleCourts.length && (
          <div className="flex justify-center my-8">
            <button
              onClick={() => setDisplayCount((prev) => prev + 60)}
              className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white font-bold px-8 py-3 rounded-xl text-xs uppercase tracking-wider border border-[#c9a84c]/40 shadow-md transition-all hover:border-[#c9a84c]"
            >
              Load More Courts ({filteredCourts.length - visibleCourts.length} remaining)
            </button>
          </div>
        )}

      </section>

      {/* 4. Bottom CTA Banner */}
      <CtaBanner
        title="NEED LEGAL ASSISTANCE IN ANY INDIAN COURT?"
        subtitle="Consult with experienced Advocates for Supreme Court, High Courts, District Courts, and NCLT/NGT Tribunal representation."
        buttonText="CONTACT ADVOCATE NOW"
        href="/contact"
      />
    </main>
  );
}

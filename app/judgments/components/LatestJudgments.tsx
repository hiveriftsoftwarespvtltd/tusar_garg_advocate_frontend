"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  FileText, 
  Landmark, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  Scale,
  Building2,
  Gavel,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { fetchApi } from "../../../lib/api/client";
import { judgmentsComprehensiveData, JudgmentRecord } from "../../../lib/data/judgmentsComprehensiveData";

const ITEMS_PER_PAGE = 12;

const practiceAreasList = [
  "ALL",
  "Constitutional Law",
  "Criminal Law",
  "Civil Litigation",
  "Corporate Law",
  "Tax Law",
  "Property Law",
  "Family Law",
  "Labour and Service Law",
  "Arbitration Law",
  "Insolvency & Bankruptcy",
  "Consumer Law",
  "Environmental Law"
];

const yearList = ["ALL", "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

export default function LatestJudgments() {
  const [judgments, setJudgments] = useState<any[]>(judgmentsComprehensiveData);
  const [loading, setLoading] = useState(false);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("ALL");
  const [selectedSubject, setSelectedSubject] = useState("ALL");
  const [selectedYear, setSelectedYear] = useState("ALL");
  const [sortBy, setSortBy] = useState("LATEST");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch optional additional backend judgments and merge
  useEffect(() => {
    async function loadExtraData() {
      try {
        const res = await fetchApi('/courts/judgments/all');
        if (res && Array.isArray(res) && res.length > 0) {
          const merged = [...judgmentsComprehensiveData];
          const existingIds = new Set(merged.map(j => j._id));
          for (const item of res) {
            if (!existingIds.has(item._id)) {
              merged.push({
                _id: item._id,
                title: item.title,
                caseNumber: item.caseNumber,
                bench: item.bench,
                date: item.date,
                year: item.date ? new Date(item.date).getFullYear() : 2024,
                courtName: item.courtId?.name || "High Court",
                courtTier: item.courtId?.name?.toLowerCase().includes("supreme") ? "Supreme Court" : "High Court",
                subject: item.subject || "Civil Litigation",
                summary: item.shortDescription || item.description || "",
                keyProvisions: "",
                officialSource: item.caseNumber || "Judicial Record",
                isFeatured: Boolean(item.isFeatured)
              });
            }
          }
          setJudgments(merged);
        }
      } catch (err) {
        // Fallback to comprehensive static dataset
      }
    }
    loadExtraData();
  }, []);

  // Filter and sort logic across all 500 judgments
  const filteredJudgments = useMemo(() => {
    let result = [...judgments];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((j) => {
        const title = (j.title || "").toLowerCase();
        const caseNumber = (j.caseNumber || "").toLowerCase();
        const bench = (j.bench || "").toLowerCase();
        const summary = (j.summary || j.shortDescription || "").toLowerCase();
        const courtName = (j.courtName || j.courtId?.name || "").toLowerCase();
        const officialSource = (j.officialSource || "").toLowerCase();
        return (
          title.includes(q) ||
          caseNumber.includes(q) ||
          bench.includes(q) ||
          summary.includes(q) ||
          courtName.includes(q) ||
          officialSource.includes(q)
        );
      });
    }

    // Court filter
    if (selectedCourt !== "ALL") {
      result = result.filter((j) => {
        const tier = j.courtTier || (j.courtName?.toLowerCase().includes("supreme") ? "Supreme Court" : "High Court");
        if (selectedCourt === "SUPREME") return tier === "Supreme Court";
        if (selectedCourt === "HIGH") return tier === "High Court";
        if (selectedCourt === "TRIBUNALS") return tier === "Tribunal";
        return true;
      });
    }

    // Subject filter
    if (selectedSubject !== "ALL") {
      result = result.filter((j) => {
        const subj = (j.subject || "").toLowerCase();
        return subj === selectedSubject.toLowerCase();
      });
    }

    // Year filter
    if (selectedYear !== "ALL") {
      const yNum = parseInt(selectedYear, 10);
      result = result.filter((j) => {
        if (j.year === yNum) return true;
        if (j.date && j.date.includes(selectedYear)) return true;
        return false;
      });
    }

    // Sort
    if (sortBy === "LATEST") {
      result.sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
    } else if (sortBy === "OLDEST") {
      result.sort((a, b) => new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime());
    } else if (sortBy === "FEATURED") {
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [judgments, searchQuery, selectedCourt, selectedSubject, selectedYear, sortBy]);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCourt, selectedSubject, selectedYear, sortBy]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredJudgments.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredJudgments.length);
  const paginatedJudgments = filteredJudgments.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const section = document.getElementById("judgments-list-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCourt("ALL");
    setSelectedSubject("ALL");
    setSelectedYear("ALL");
    setSortBy("LATEST");
    setCurrentPage(1);
  };

  const hasActiveFilters = 
    searchQuery.trim() !== "" || 
    selectedCourt !== "ALL" || 
    selectedSubject !== "ALL" || 
    selectedYear !== "ALL" || 
    sortBy !== "LATEST";

  return (
    <section id="judgments-list-section" className="py-16 bg-[#F8F7F3] border-b border-[#E7E4DC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Bar */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#E7E4DC]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101D35]/5 border border-[#101D35]/10 text-[#101D35] text-[11px] font-bold tracking-widest uppercase mb-2">
                <Scale size={12} className="text-[#B69A63]" />
                CASE LAW ARCHIVE &amp; PRECEDENTS
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101D35] tracking-tight">
                Supreme Court &amp; High Court Judgments
              </h2>
              <p className="text-xs sm:text-sm text-[#737B88] mt-1">
                Authoritative judicial decisions, orders, and ratio decidendi covering {judgments.length} verified cases.
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-3 self-start lg:self-center">
              <span className="px-4 py-2 rounded-xl bg-white border border-[#E7E4DC] text-xs font-semibold text-[#101D35] shadow-xs">
                Showing <strong className="text-[#B69A63] font-bold">{filteredJudgments.length}</strong> Judgments
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#101D35] hover:text-[#B69A63] bg-white border border-[#E7E4DC] rounded-xl transition-colors shadow-xs"
                >
                  <RotateCcw size={12} />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Controls Matrix: Search + Court Tabs + Subject Dropdown + Year Dropdown */}
          <div className="mt-6 space-y-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#737B88]" />
              <input
                type="text"
                placeholder="Search by case title, citation (e.g. 2024 INSC 812), coram, or legal principle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-[#E7E4DC] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B69A63]/50 text-xs sm:text-sm text-[#101D35] placeholder-[#737B88] shadow-xs font-medium transition-all"
              />
            </div>

            {/* Secondary Filters Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-[#E7E4DC] shadow-xs">
              
              {/* Court Tier Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { key: "ALL", label: "All Forums" },
                  { key: "SUPREME", label: "Supreme Court" },
                  { key: "HIGH", label: "High Courts" },
                  { key: "TRIBUNALS", label: "Tribunals" }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setSelectedCourt(tab.key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedCourt === tab.key
                        ? "bg-[#101D35] text-[#B69A63] shadow-xs"
                        : "text-[#737B88] hover:text-[#101D35] hover:bg-[#F8F7F3]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Subject & Year Selectors */}
              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                
                {/* Practice Subject Selector */}
                <div className="relative flex-1 sm:flex-initial">
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full sm:w-48 pl-3 pr-7 py-1.5 bg-[#F8F7F3] border border-[#E7E4DC] rounded-lg text-xs font-semibold text-[#101D35] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B69A63]/50"
                  >
                    <option value="ALL">All Practice Areas</option>
                    {practiceAreasList.filter(s => s !== "ALL").map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#737B88] pointer-events-none" />
                </div>

                {/* Year Selector */}
                <div className="relative">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="pl-3 pr-7 py-1.5 bg-[#F8F7F3] border border-[#E7E4DC] rounded-lg text-xs font-semibold text-[#101D35] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B69A63]/50"
                  >
                    <option value="ALL">All Years</option>
                    {yearList.filter(y => y !== "ALL").map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                  <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#737B88] pointer-events-none" />
                </div>

                {/* Sort Selector */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="pl-3 pr-7 py-1.5 bg-[#F8F7F3] border border-[#E7E4DC] rounded-lg text-xs font-semibold text-[#101D35] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B69A63]/50"
                  >
                    <option value="LATEST">Sort: Latest</option>
                    <option value="OLDEST">Sort: Oldest</option>
                    <option value="FEATURED">Sort: Landmarks</option>
                  </select>
                  <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#737B88] pointer-events-none" />
                </div>

              </div>

            </div>

            {/* Suggested Search Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-[#737B88] font-semibold text-[11px] uppercase tracking-wider">Suggested Searches:</span>
              {[
                "Basic Structure",
                "Article 21 Bail",
                "Section 34 Arbitration",
                "Section 7 IBC",
                "Right to Privacy",
                "Electoral Bonds",
                "Section 148 Reassessment"
              ].map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setSearchQuery(chip)}
                  className="px-2.5 py-0.5 rounded-md bg-white hover:bg-[#101D35] text-[#737B88] hover:text-[#B69A63] border border-[#E7E4DC] text-[11px] font-medium transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Judgments Grid */}
        {filteredJudgments.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E7E4DC] p-8 shadow-xs">
            <Scale size={48} className="mx-auto text-gray-300 mb-3" />
            <h3 className="text-base font-bold text-[#101D35]">No Judgments Match Your Filter</h3>
            <p className="text-xs text-[#737B88] mt-1 mb-4">
              Try adjusting your search terms or resetting filters to browse all 500 decisions.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 bg-[#101D35] text-white hover:bg-[#B69A63] hover:text-[#101D35] text-xs font-bold rounded-xl transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedJudgments.map((item) => {
              const courtTierLabel = item.courtTier || (item.courtName?.toLowerCase().includes("supreme") ? "Supreme Court" : "High Court");
              const isSupreme = courtTierLabel === "Supreme Court";

              return (
                <article
                  key={item._id}
                  className="bg-white border border-[#E7E4DC] hover:border-[#B69A63]/70 rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Top Forum & Date Strip */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        isSupreme
                          ? "bg-[#101D35] text-[#B69A63]"
                          : "bg-[#F8F7F3] border border-[#E7E4DC] text-[#101D35]"
                      }`}>
                        {item.courtName || "Supreme Court of India"}
                      </span>
                      <span className="text-[11px] font-semibold text-[#737B88] flex items-center gap-1">
                        <Calendar size={11} className="text-[#B69A63]" />
                        {item.date}
                      </span>
                    </div>

                    {/* Case Title */}
                    <Link href={`/judgments/${item._id}`}>
                      <h3 className="text-base font-serif font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors leading-snug mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                    </Link>

                    {/* Case Citation & Number */}
                    <div className="text-[11px] font-semibold text-[#737B88] mb-2.5 flex items-center gap-1.5">
                      <FileText size={11} className="text-[#B69A63] shrink-0" />
                      <span className="truncate">{item.caseNumber}</span>
                    </div>

                    {/* Bench / Coram */}
                    <div className="text-[11px] text-[#737B88] mb-3 line-clamp-1">
                      <strong>Coram:</strong> {item.bench}
                    </div>

                    {/* Ratio Decidendi Snippet */}
                    <p className="text-xs text-[#202632] line-clamp-3 leading-relaxed mb-4 font-normal pt-2.5 border-t border-[#E7E4DC]/60">
                      {item.summary || item.shortDescription}
                    </p>
                  </div>

                  {/* Card Footer: Subject Tag & Direct Link */}
                  <div className="pt-3 border-t border-[#E7E4DC] flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-[#B69A63] bg-[#B69A63]/10 px-2 py-0.5 rounded uppercase tracking-wider">
                      {item.subject || "Legal Practice"}
                    </span>

                    <Link
                      href={`/judgments/${item._id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors"
                    >
                      <span>Read Case Brief</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E7E4DC]">
            <p className="text-xs text-[#737B88] font-medium">
              Showing <strong className="text-[#101D35]">{startIndex + 1}</strong> – <strong className="text-[#101D35]">{endIndex}</strong> of <strong className="text-[#101D35]">{filteredJudgments.length}</strong> Judgments
            </p>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-[#E7E4DC] bg-white text-[#101D35] hover:bg-[#F8F7F3] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                aria-label="Previous Page"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Page Number Chips */}
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum = i + 1;
                  if (totalPages > 5 && currentPage > 3) {
                    pageNum = Math.min(totalPages - 4 + i, Math.max(1, currentPage - 2 + i));
                  }
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                        currentPage === pageNum
                          ? "bg-[#101D35] text-[#B69A63] shadow-xs"
                          : "bg-white border border-[#E7E4DC] text-[#737B88] hover:text-[#101D35]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="text-xs text-[#737B88] px-1">...</span>
                    <button
                      type="button"
                      onClick={() => handlePageChange(totalPages)}
                      className="w-8 h-8 rounded-lg text-xs font-bold bg-white border border-[#E7E4DC] text-[#737B88] hover:text-[#101D35]"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </div>

              <button
                type="button"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-[#E7E4DC] bg-white text-[#101D35] hover:bg-[#F8F7F3] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                aria-label="Next Page"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

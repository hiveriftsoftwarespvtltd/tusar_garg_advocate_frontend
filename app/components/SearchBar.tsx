"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Search, 
  SlidersHorizontal, 
  ArrowRight, 
  Scale, 
  BookOpen, 
  Gavel, 
  Landmark, 
  FileText, 
  X,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { fetchApi } from "../../lib/api/client";

const popularSuggestions = [
  "Article 21",
  "Section 302 IPC",
  "Section 7 IBC",
  "Bail Application",
  "Supreme Court SLP",
  "Section 138 NI Act",
  "Cheque Bounce",
  "Consumer Forum"
];

const dropdowns = [
  { label: "Court", field: "court", options: ["Supreme Court", "Delhi High Court", "Bombay High Court", "NCLT", "NGT", "District Court"] },
  { label: "Act", field: "act", options: ["Constitution of India", "IPC 1860", "CrPC 1973", "CPC 1908", "Companies Act 2013", "IBC 2016", "NI Act 1881"] },
  { label: "Section", field: "section", options: ["Article 21", "Section 302", "Section 438", "Section 138", "Section 7", "Section 9"] },
  { label: "Year", field: "year", options: ["2026", "2025", "2024", "2023", "2022", "Older"] },
  { label: "Subject", field: "subject", options: ["Constitutional Law", "Criminal Law", "Civil & Property", "Corporate & IBC", "Taxation", "Arbitration"] },
  { label: "Case Type", field: "caseType", options: ["Special Leave Petition (SLP)", "Writ Petition", "Civil Appeal", "Criminal Appeal"] },
  { label: "State", field: "state", options: ["Delhi", "Maharashtra", "Karnataka", "Uttar Pradesh", "West Bengal", "Gujarat"] },
];

interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  type: "judgment" | "act" | "court" | "article";
  link: string;
  badge: string;
}

export default function SearchBar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const [apiJudgments, setApiJudgments] = useState<any[]>([]);
  const [apiArticles, setApiArticles] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Load backend judgments & articles for search index
  useEffect(() => {
    async function loadSearchData() {
      try {
        const [judgmentsData, articlesData] = await Promise.all([
          fetchApi("/courts/judgments/all").catch(() => []),
          fetchApi("/articles").catch(() => []),
        ]);
        if (Array.isArray(judgmentsData)) setApiJudgments(judgmentsData);
        if (Array.isArray(articlesData)) setApiArticles(articlesData);
      } catch (err) {
        console.error("Search data load error", err);
      }
    }
    loadSearchData();
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sample static legal index database for fallback & acts/courts
  const staticIndex: SearchResultItem[] = [
    {
      id: "stat-1",
      title: "Article 21 - Protection of Life and Personal Liberty",
      subtitle: "Constitution of India • Fundamental Rights & Right to Privacy",
      type: "act",
      link: "/laws",
      badge: "CONSTITUTION"
    },
    {
      id: "stat-2",
      title: "K.S. Puttaswamy v. Union of India (2017)",
      subtitle: "Supreme Court 9-Judge Bench • Right to Privacy Landmark Judgment",
      type: "judgment",
      link: "/judgments",
      badge: "SUPREME COURT"
    },
    {
      id: "stat-3",
      title: "Section 302 IPC - Punishment for Murder",
      subtitle: "Indian Penal Code, 1860 • Criminal Jurisprudence",
      type: "act",
      link: "/laws",
      badge: "BARE ACT"
    },
    {
      id: "stat-4",
      title: "Section 7 IBC 2016 - Initiation of CIRP by Financial Creditor",
      subtitle: "Insolvency and Bankruptcy Code • NCLT Corporate Insolvency",
      type: "act",
      link: "/laws",
      badge: "IBC 2016"
    },
    {
      id: "stat-5",
      title: "Supreme Court of India (Apex Court)",
      subtitle: "Tilak Marg, New Delhi • Advocate-on-Record Practice",
      type: "court",
      link: "/courts",
      badge: "APEX COURT"
    },
    {
      id: "stat-6",
      title: "National Company Law Tribunal (NCLT)",
      subtitle: "Corporate Insolvency, Schemes & Mergers Adjudication",
      type: "court",
      link: "/tribunals/nclt",
      badge: "TRIBUNAL"
    },
    {
      id: "stat-7",
      title: "Section 138 NI Act - Dishonour of Cheque",
      subtitle: "Negotiable Instruments Act, 1881 • Cheque Bounce Defense",
      type: "act",
      link: "/laws",
      badge: "COMMERCIAL LAW"
    }
  ];

  // Dynamic filter matching results
  const filteredResults = (() => {
    const query = searchTerm.toLowerCase().trim();
    if (!query && Object.keys(selectedFilters).length === 0) return [];

    let results: SearchResultItem[] = [];

    // Match API Judgments
    apiJudgments.forEach((j: any) => {
      const courtName = typeof j.courtId === "object" ? j.courtId?.name : (j.courtName || "Supreme Court of India");
      const caseNo = j.caseNumber || j.citation || "";
      const benchName = j.bench || "";
      const summary = j.shortDescription || "";

      if (
        !query || 
        j.title?.toLowerCase().includes(query) || 
        caseNo.toLowerCase().includes(query) || 
        benchName.toLowerCase().includes(query) ||
        summary.toLowerCase().includes(query) ||
        courtName.toLowerCase().includes(query)
      ) {
        results.push({
          id: j._id || j.id,
          title: j.title,
          subtitle: `${courtName}${caseNo ? " • " + caseNo : ""}${benchName ? " • " + benchName : ""}`,
          type: "judgment",
          link: j.link || "/judgments",
          badge: caseNo || "JUDGMENT"
        });
      }
    });

    // Match API Articles
    apiArticles.forEach((a: any) => {
      if (!query || a.title?.toLowerCase().includes(query) || a.category?.toLowerCase().includes(query)) {
        results.push({
          id: a._id || a.id,
          title: a.title,
          subtitle: `${a.category || "Legal Article"} • By Advocate Tushar Garg`,
          type: "article",
          link: "/articles",
          badge: "ARTICLE"
        });
      }
    });

    // Match Static Index
    staticIndex.forEach((item) => {
      if (!query || item.title.toLowerCase().includes(query) || item.subtitle.toLowerCase().includes(query)) {
        results.push(item);
      }
    });

    return results.slice(0, 7);
  })();

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const queryParams = new URLSearchParams();
    if (searchTerm) queryParams.set("search", searchTerm);
    Object.entries(selectedFilters).forEach(([k, v]) => {
      if (v) queryParams.set(k, v);
    });

    router.push(`/judgments?${queryParams.toString()}`);
    setIsOpen(false);
  };

  const handleFilterChange = (field: string, value: string) => {
    setSelectedFilters(prev => {
      const updated = { ...prev };
      if (value) updated[field] = value;
      else delete updated[field];
      return updated;
    });
    setIsOpen(true);
  };

  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Search Container */}
        <div className="relative max-w-[1200px] mx-auto bg-gradient-to-r from-[#071126] via-[#0d1b3e] to-[#071126] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-[#c9a84c]/30">
          
          {/* Subtle Background Radial Light Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c9a84c]/15 via-transparent to-transparent pointer-events-none" />

          {/* Heading Section */}
          <div className="relative z-10 text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#c9a84c]/40 px-3 py-1 rounded-full mb-3 shadow-inner">
              <Scale size={13} className="text-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
                INTELLIGENT LEGAL RESEARCH ENGINE
              </span>
            </div>
            <h3 className="text-[#ffffff] font-serif text-[22px] sm:text-[28px] font-bold tracking-tight uppercase mb-1">
              SEARCH JUDGMENTS & INDIAN LAWS
            </h3>
            <p className="text-white/70 text-[13px] sm:text-[14px] max-w-[640px] mx-auto">
              Access Supreme Court & High Court rulings, Bare Acts, sections, judges, and legal precedents across India.
            </p>
          </div>

          {/* Search Input Bar with Live Results Dropdown */}
          <div ref={searchRef} className="relative z-20 max-w-[900px] mx-auto mb-4">
            <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row bg-white rounded-xl sm:rounded-2xl p-1.5 shadow-2xl border-2 border-transparent focus-within:border-[#c9a84c] transition-all">
              
              <div className="flex items-center px-3.5 py-2 flex-1 gap-3">
                <Search size={20} className="text-[#0d1b3e] flex-shrink-0" />
                <input
                  type="text"
                  value={searchTerm}
                  onFocus={() => setIsOpen(true)}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsOpen(true);
                  }}
                  placeholder="Enter citation, case title, judge name, Act or section (e.g., Article 21, SLP 2024)..."
                  className="w-full text-[13.5px] sm:text-[14px] text-[#0d1b3e] placeholder-[#9ca3af] outline-none font-medium bg-transparent"
                  aria-label="Legal research search input"
                />
                {searchTerm && (
                  <button 
                    type="button" 
                    onClick={() => { setSearchTerm(""); setIsOpen(false); }}
                    className="text-gray-400 hover:text-[#0d1b3e] p-1"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <button 
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#071126] px-7 py-3 text-[12.5px] font-bold tracking-wider uppercase rounded-lg sm:rounded-xl transition-all duration-300 shadow-md hover:shadow-[#c9a84c]/40 active:scale-[0.98] mt-2 sm:mt-0"
              >
                <span>SEARCH</span>
                <ArrowRight size={15} strokeWidth={2.5} />
              </button>
            </form>

            {/* LIVE AUTO-COMPLETE SEARCH DROPDOWN */}
            {isOpen && (searchTerm.trim().length > 0 || Object.keys(selectedFilters).length > 0) && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 divide-y divide-gray-100 max-h-[420px] overflow-y-auto">
                
                {filteredResults.length === 0 ? (
                  <div className="p-6 text-center text-gray-500 space-y-2">
                    <p className="text-sm font-bold text-[#0d1b3e]">No direct matches found for &quot;{searchTerm}&quot;</p>
                    <p className="text-xs text-gray-400">Click Search button to perform comprehensive database query.</p>
                    <button 
                      onClick={() => handleSearchSubmit()}
                      className="inline-flex items-center gap-2 bg-[#0d1b3e] text-[#c9a84c] text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#1a2b5e] transition-colors"
                    >
                      Search All Records in Judgments <ArrowRight size={14} />
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="bg-[#0d1b3e] text-white px-4 py-2.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                      <span className="text-[#c9a84c]">Instant Matches ({filteredResults.length})</span>
                      <span className="text-white/60 text-[10.5px]">Press Enter to View All</span>
                    </div>

                    <div className="divide-y divide-gray-100">
                      {filteredResults.map((item) => (
                        <Link
                          key={item.id}
                          href={item.link}
                          onClick={() => setIsOpen(false)}
                          className="flex items-start justify-between p-4 hover:bg-gray-50 transition-colors group cursor-pointer"
                        >
                          <div className="flex items-start gap-3 min-w-0 pr-4">
                            <div className="w-8 h-8 rounded-lg bg-[#0d1b3e]/5 text-[#c9a84c] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0d1b3e] group-hover:text-white transition-colors">
                              {item.type === "judgment" && <Gavel size={16} />}
                              {item.type === "act" && <BookOpen size={16} />}
                              {item.type === "court" && <Landmark size={16} />}
                              {item.type === "article" && <FileText size={16} />}
                            </div>

                            <div className="min-w-0">
                              <h4 className="text-[13.5px] font-bold text-[#0d1b3e] leading-snug group-hover:text-[#c9a84c] transition-colors line-clamp-1">
                                {item.title}
                              </h4>
                              <p className="text-[11.5px] text-gray-500 font-medium line-clamp-1 mt-0.5">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-[10px] font-extrabold text-[#c9a84c] bg-[#0d1b3e] px-2 py-0.5 rounded">
                              {item.badge}
                            </span>
                            <ChevronRight size={16} className="text-gray-400 group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Dropdown Footer CTA */}
                    <button
                      onClick={() => handleSearchSubmit()}
                      className="w-full bg-gray-50 hover:bg-[#0d1b3e] text-[#0d1b3e] hover:text-[#c9a84c] p-3 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border-t border-gray-100"
                    >
                      <span>Search All Judgments & Precedents for &quot;{searchTerm}&quot;</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )}

              </div>
            )}
          </div>

          {/* Quick Suggestion Pills */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 max-w-[900px] mx-auto mb-5 text-xs text-white/80">
            <span className="text-white/50 text-[11px] uppercase font-bold tracking-wider mr-1">Popular Topics:</span>
            {popularSuggestions.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => {
                  setSearchTerm(topic);
                  setIsOpen(true);
                }}
                className="bg-white/10 hover:bg-[#c9a84c] hover:text-[#071126] text-white/90 text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10 hover:border-[#c9a84c] transition-all"
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="relative z-10 flex flex-wrap justify-center items-center gap-2 max-w-[960px] mx-auto">
            {dropdowns.map((filter) => (
              <div key={filter.label} className="relative">
                <select
                  aria-label={`Filter by ${filter.label}`}
                  value={selectedFilters[filter.field] || ""}
                  onChange={(e) => handleFilterChange(filter.field, e.target.value)}
                  className={`text-[11.5px] font-medium px-3 py-1.5 cursor-pointer transition-all outline-none rounded-lg border ${
                    selectedFilters[filter.field]
                      ? "bg-[#c9a84c] text-[#071126] border-[#c9a84c] font-bold"
                      : "bg-white/10 text-white/90 hover:bg-[#c9a84c] hover:text-[#071126] border-white/20 hover:border-[#c9a84c]"
                  }`}
                >
                  <option value="" className="text-[#0d1b3e] font-bold">{filter.label}</option>
                  {filter.options.map((opt) => (
                    <option key={opt} value={opt} className="text-[#0d1b3e]">{opt}</option>
                  ))}
                </select>
              </div>
            ))}

            {Object.keys(selectedFilters).length > 0 && (
              <button 
                onClick={() => setSelectedFilters({})}
                className="text-[11px] font-bold text-red-300 hover:text-white bg-red-500/20 px-3 py-1.5 rounded-lg border border-red-400/30 transition-all"
              >
                Clear Filters
              </button>
            )}
            
            <button 
              onClick={() => handleSearchSubmit()}
              className="text-[11.5px] font-bold text-[#c9a84c] hover:text-white bg-white/5 hover:bg-white/15 transition-all flex items-center gap-1.5 border border-[#c9a84c]/40 px-3.5 py-1.5 rounded-lg"
            >
              <SlidersHorizontal size={13} />
              <span>Advanced Search</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

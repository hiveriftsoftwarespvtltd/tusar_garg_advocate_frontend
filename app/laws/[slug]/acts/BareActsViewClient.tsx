"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  FileText,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Download,
  Scale,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  ArrowLeft,
  Filter,
  CheckCircle2
} from "lucide-react";
import { LawCategoryDetail, BareAct } from "../../data/lawsData";

interface Props {
  detail: LawCategoryDetail;
}

export default function BareActsViewClient({ detail }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openActIndex, setOpenActIndex] = useState<number | null>(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const acts = detail.bareActs || [];

  // Filter acts based on search query
  const filteredActs = acts.filter((act) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesAct =
      act.title.toLowerCase().includes(q) ||
      act.year.toLowerCase().includes(q) ||
      act.description.toLowerCase().includes(q);

    const matchesSection = act.sections.some(
      (sec) =>
        sec.number.toLowerCase().includes(q) ||
        sec.title.toLowerCase().includes(q) ||
        sec.summary.toLowerCase().includes(q)
    );

    return matchesAct || matchesSection;
  });

  return (
    <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-12">
      {/* Search and Navigation Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-1">
              <Sparkles size={14} />
              <span>STATUTORY REPOSITORY</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0d1b3e] uppercase">
              SEARCH & EXPLORE BARE ACTS ({filteredActs.length} of {acts.length})
            </h2>
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Article, Section, Act or Keyword (e.g. Art 32, Bail)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 transition-all"
            />
          </div>
        </div>

        {/* Quick Filter Badges */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-gray-100">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2 flex items-center gap-1">
            <Filter size={12} /> Filter Enactments:
          </span>

          <button
            onClick={() => setSearchQuery("")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              !searchQuery
                ? "bg-[#0d1b3e] text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Acts ({acts.length})
          </button>

          <button
            onClick={() => setSearchQuery("Article")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              searchQuery === "Article"
                ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Constitutional Articles
          </button>

          <button
            onClick={() => setSearchQuery("Rules")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              searchQuery === "Rules"
                ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Court Rules & Procedures
          </button>

          <button
            onClick={() => setSearchQuery("Act")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              searchQuery === "Act"
                ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Statutory Enactments
          </button>
        </div>
      </div>

      {/* Bare Acts Accordions */}
      {filteredActs.length > 0 ? (
        <div className="space-y-6">
          {filteredActs.map((act, index) => {
            const isOpen = openActIndex === index || searchQuery.trim().length > 0;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#c9a84c] shadow-lg ring-1 ring-[#c9a84c]/30"
                    : "border-gray-200 shadow-sm hover:border-gray-300"
                }`}
              >
                {/* Accordion Header */}
                <div
                  onClick={() => setOpenActIndex(isOpen ? null : index)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-gray-50/80 to-white hover:bg-amber-50/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center font-bold font-serif text-lg shrink-0 shadow-md">
                      #{index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 bg-[#c9a84c]/20 text-[#0d1b3e] text-[10px] font-extrabold tracking-wider uppercase rounded">
                          ENACTMENT YEAR: {act.year}
                        </span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold rounded">
                          {act.sections.length} Key Articles / Sections
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0d1b3e]">
                        {act.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 max-w-3xl leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(`${act.title} (${act.year})\n\n${act.description}`);
                      }}
                      className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors text-xs font-semibold flex items-center gap-1.5 border border-gray-200"
                      title="Copy Act Summary"
                    >
                      {copiedText === `${act.title} (${act.year})\n\n${act.description}` ? (
                        <>
                          <Check size={14} className="text-emerald-600" />
                          <span className="text-emerald-600 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy Summary</span>
                        </>
                      )}
                    </button>

                    <div className="w-9 h-9 rounded-xl bg-[#0d1b3e]/5 flex items-center justify-center text-[#0d1b3e]">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>
                </div>

                {/* Accordion Body: Key Sections Breakdown */}
                {isOpen && (
                  <div className="p-6 border-t border-gray-100 bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Scale size={14} className="text-[#c9a84c]" />
                        KEY PROVISIONS & SECTIONS BREAKDOWN ({act.sections.length})
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {act.sections.map((sec, secIdx) => (
                        <div
                          key={secIdx}
                          className="bg-gray-50/80 rounded-xl p-4 border border-gray-200/80 hover:border-[#c9a84c] hover:bg-amber-50/30 transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="px-2.5 py-1 bg-[#0d1b3e] text-[#c9a84c] font-mono font-extrabold text-[11px] rounded shadow-sm">
                                {sec.number}
                              </span>
                              <button
                                onClick={() => handleCopy(`${sec.number}: ${sec.title}\n${sec.summary}`)}
                                className="text-gray-400 hover:text-[#0d1b3e] transition-colors p-1"
                                title="Copy Section Text"
                              >
                                {copiedText === `${sec.number}: ${sec.title}\n${sec.summary}` ? (
                                  <Check size={14} className="text-emerald-600" />
                                ) : (
                                  <Copy size={14} />
                                )}
                              </button>
                            </div>
                            <h5 className="font-serif font-bold text-sm text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors mb-1.5">
                              {sec.title}
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed font-normal">
                              {sec.summary}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
          <BookOpen size={40} className="mx-auto text-gray-300 mb-3" />
          <h3 className="text-lg font-bold text-gray-800">No Bare Acts match your search</h3>
          <p className="text-xs text-gray-500 mt-1 mb-4">Try searching for a different Article, Section, or Keyword.</p>
          <button
            onClick={() => setSearchQuery("")}
            className="px-4 py-2 bg-[#0d1b3e] text-[#c9a84c] rounded-xl text-xs font-bold"
          >
            Clear Search Filter
          </button>
        </div>
      )}

      {/* Bottom Consultation Banner */}
      <div className="mt-14 bg-gradient-to-r from-[#071126] via-[#0d1b3e] to-[#071126] rounded-2xl p-8 text-white border border-[#c9a84c]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="px-3 py-1 bg-[#c9a84c]/20 text-[#c9a84c] text-[10px] font-extrabold uppercase tracking-widest rounded-full">
            SUPREME COURT ADVOCACY
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-2">
            Need Expert Legal Representation in {detail.name}?
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-xl">
            Advocate Tushar Garg (Advocate-on-Record, Supreme Court of India) provides strategic litigation, writ drafting, and statutory defense before Apex Courts & High Courts.
          </p>
        </div>

        <Link
          href="/contact"
          className="shrink-0 bg-[#c9a84c] hover:bg-[#b5953d] text-[#071126] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
        >
          Book Consultation →
        </Link>
      </div>
    </div>
  );
}

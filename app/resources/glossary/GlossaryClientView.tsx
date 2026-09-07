"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookA,
  Search,
  BookOpen,
  Scale,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  FileText,
  HelpCircle,
  Newspaper,
  Book,
  Info
} from "lucide-react";
import { glossaryData, GlossaryTerm } from "../data/resourcesDetailData";

export default function GlossaryClientView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLetter, setSelectedLetter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Constitutional", "Criminal", "Civil", "Commercial", "Procedural"];
  const alphabet = ["All", "A", "C", "H", "R", "S", "Z"];

  const filteredTerms = glossaryData.filter((item) => {
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    const matchesLet = selectedLetter === "All" || item.term.toUpperCase().startsWith(selectedLetter);
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.term.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q) ||
      item.statutoryOrigin.toLowerCase().includes(q) ||
      item.landmarkCase.toLowerCase().includes(q);

    return matchesCat && matchesLet && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#071126] text-white py-14 sm:py-16 px-4 sm:px-6 overflow-hidden border-b border-[#c9a84c]/20">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#c9a84c] transition-colors">
              Tools & Resources
            </Link>
            <span>/</span>
            <span className="text-[#c9a84c] font-semibold">Legal Glossary</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                <BookA size={14} />
                <span>STATUTORY DEFINITIONS & LEGAL TERMINOLOGY</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Comprehensive Legal Glossary
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
                Authoritative dictionary of Indian legal terminology across Constitutional Law, Criminal Jurisprudence, Civil Procedure Code, and Commercial Court proceedings with case law references.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#0d1b3e] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all hover:scale-[1.02]"
                >
                  <span>Consult Litigation Chambers</span>
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>

                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-lg border border-white/20 transition-all"
                >
                  <ArrowLeft size={14} />
                  <span>All Resources</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-3">
                <div className="text-[11px] uppercase font-bold tracking-widest text-[#c9a84c] border-b border-white/10 pb-2.5 flex items-center gap-2">
                  <ShieldCheck size={15} />
                  <span>DICTIONARY SCOPE</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">Terms Defined</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">A to Z Indexed</span>
                    <span className="text-[10px] text-gray-400">All major branches</span>
                  </div>
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">Statutory Links</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">Bare Acts</span>
                    <span className="text-[10px] text-gray-400">Section citations</span>
                  </div>
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">Court Precedents</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">Supreme Court</span>
                    <span className="text-[10px] text-gray-400">Authoritative ratio</span>
                  </div>
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">Application</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">Practical</span>
                    <span className="text-[10px] text-gray-400">Litigation focused</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                    : "text-gray-600 hover:text-[#0d1b3e] hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
            <input
              type="text"
              placeholder="Search legal term or case..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#c9a84c] bg-gray-50 text-[#0d1b3e]"
            />
          </div>
        </div>
      </section>

      {/* 3. GLOSSARY CARDS */}
      <main className="max-w-[1300px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.map((term, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-[#c9a84c]/60 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#0d1b3e]/10 text-[#0d1b3e]">
                    {term.category}
                  </span>
                  {term.phonetic && (
                    <span className="text-[11px] font-mono text-gray-400">{term.phonetic}</span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0d1b3e] mb-2 leading-snug">
                  {term.term}
                </h3>

                <p className="text-xs sm:text-[13px] text-gray-700 mb-4 leading-relaxed">
                  {term.definition}
                </p>

                <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100 space-y-2 text-xs">
                  <div>
                    <strong className="text-gray-500 uppercase tracking-wider text-[10.5px]">
                      Statutory Origin:{" "}
                    </strong>
                    <span className="font-semibold text-[#0d1b3e]">{term.statutoryOrigin}</span>
                  </div>

                  <div>
                    <strong className="text-gray-500 uppercase tracking-wider text-[10.5px]">
                      Court Application:{" "}
                    </strong>
                    <span className="text-gray-600">{term.courtApplication}</span>
                  </div>

                  <div>
                    <strong className="text-gray-500 uppercase tracking-wider text-[10.5px]">
                      Landmark Precedent:{" "}
                    </strong>
                    <span className="text-[#c9a84c] font-medium">{term.landmarkCase}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 p-8">
            <Info size={36} className="mx-auto text-gray-400 mb-3" />
            <p className="text-gray-600 text-sm font-semibold">No legal terms found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedLetter("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-[#c9a84c] font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 4. OTHER TOOLS CROSS-NAVIGATION */}
        <div className="mt-14 pt-8 border-t border-gray-200">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0d1b3e] mb-4">
            Explore More Tools & Resources
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href="/resources/legal-drafts"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#c9a84c] hover:shadow-md transition-all group"
            >
              <FileText size={20} className="text-[#0d1b3e] group-hover:text-[#c9a84c] mb-2" />
              <h4 className="font-bold text-xs text-[#0d1b3e] group-hover:text-[#c9a84c]">Legal Drafts</h4>
              <p className="text-[10px] text-gray-500">Notices, Petitions, Formats</p>
            </Link>

            <Link
              href="/resources/maxims"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#c9a84c] hover:shadow-md transition-all group"
            >
              <Scale size={20} className="text-[#0d1b3e] group-hover:text-[#c9a84c] mb-2" />
              <h4 className="font-bold text-xs text-[#0d1b3e] group-hover:text-[#c9a84c]">Legal Maxims</h4>
              <p className="text-[10px] text-gray-500">Latin maxims with cases</p>
            </Link>

            <Link
              href="/resources/procedures"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#c9a84c] hover:shadow-md transition-all group"
            >
              <BookOpen size={20} className="text-[#0d1b3e] group-hover:text-[#c9a84c] mb-2" />
              <h4 className="font-bold text-xs text-[#0d1b3e] group-hover:text-[#c9a84c]">Court Procedures</h4>
              <p className="text-[10px] text-gray-500">Step-by-step litigation guides</p>
            </Link>

            <Link
              href="/resources/faqs"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#c9a84c] hover:shadow-md transition-all group"
            >
              <HelpCircle size={20} className="text-[#0d1b3e] group-hover:text-[#c9a84c] mb-2" />
              <h4 className="font-bold text-xs text-[#0d1b3e] group-hover:text-[#c9a84c]">Legal FAQs</h4>
              <p className="text-[10px] text-gray-500">Answers to common queries</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

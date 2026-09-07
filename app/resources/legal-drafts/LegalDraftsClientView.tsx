"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Search,
  Copy,
  Check,
  Download,
  Scale,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  HelpCircle,
  Newspaper,
  Book,
  FileCode,
  Sparkles,
  Info
} from "lucide-react";
import { legalDraftsData, LegalDraftItem } from "../data/resourcesDetailData";

export default function LegalDraftsClientView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeDraft, setActiveDraft] = useState<LegalDraftItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["All", "Notices", "Petitions", "Affidavits", "Agreements", "Power of Attorney"];

  const filteredDrafts = legalDraftsData.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.governingLaw.toLowerCase().includes(q) ||
      item.courtForum.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#071126] text-white py-14 sm:py-16 px-4 sm:px-6 overflow-hidden border-b border-[#c9a84c]/20">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-[1300px] mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#c9a84c] transition-colors">
              Tools & Resources
            </Link>
            <span>/</span>
            <span className="text-[#c9a84c] font-semibold">Legal Drafts & Templates</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                <FileText size={14} />
                <span>ADVOCATE-VERIFIED LEGAL DRAFTS & FORMATS</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Court Legal Drafts & Templates
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
                Court-tested legal drafts, statutory demand notices, bail applications, affidavits, commercial agreements, and powers of attorney verified by Supreme Court Advocate-on-Record chambers.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#0d1b3e] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all hover:scale-[1.02]"
                >
                  <span>Request Custom Chamber Drafting</span>
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

            {/* Quick Metrics */}
            <div className="lg:col-span-4">
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-3">
                <div className="text-[11px] uppercase font-bold tracking-widest text-[#c9a84c] border-b border-white/10 pb-2.5 flex items-center gap-2">
                  <ShieldCheck size={15} />
                  <span>DRAFTING STANDARDS</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">Court Compliance</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">CPC & BNSS</span>
                    <span className="text-[10px] text-gray-400">High Court Standard</span>
                  </div>
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">Verification</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">AOR Vetted</span>
                    <span className="text-[10px] text-gray-400">Supreme Court Bar</span>
                  </div>
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">Stamp Duty</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">Updated Rules</span>
                    <span className="text-[10px] text-gray-400">State specific</span>
                  </div>
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">Availability</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">Instant Copy</span>
                    <span className="text-[10px] text-gray-400">Ready to adapt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & FILTER CONTROLS */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
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

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
            <input
              type="text"
              placeholder="Search drafts, petitions, notices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#c9a84c] bg-gray-50 text-[#0d1b3e]"
            />
          </div>
        </div>
      </section>

      {/* 3. DRAFTS GRID */}
      <main className="max-w-[1300px] mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e]">
              Available Legal Drafts ({filteredDrafts.length})
            </h2>
            <p className="text-xs text-gray-500">
              Select any draft to view complete wording, legal clauses, statutory provisions, and download templates.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDrafts.map((draft) => (
            <div
              key={draft.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-[#c9a84c]/60 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#0d1b3e]/10 text-[#0d1b3e]">
                    {draft.category}
                  </span>
                  <span className="text-[11px] font-semibold text-[#c9a84c] truncate max-w-[200px]">
                    {draft.courtForum}
                  </span>
                </div>

                <h3 className="font-bold text-[#0d1b3e] text-base mb-1.5 leading-snug group-hover:text-[#c9a84c] transition-colors">
                  {draft.title}
                </h3>

                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  {draft.subtitle}
                </p>

                <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100 mb-4 space-y-1.5 text-xs">
                  <div>
                    <strong className="text-gray-500 text-[10.5px] uppercase tracking-wider">
                      Governing Statute:{" "}
                    </strong>
                    <span className="text-gray-800 font-medium">{draft.governingLaw}</span>
                  </div>
                  <div>
                    <strong className="text-gray-500 text-[10.5px] uppercase tracking-wider">
                      Stamp Duty / Fee:{" "}
                    </strong>
                    <span className="text-gray-700">{draft.stampDuty}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10.5px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                    Essential Clauses Included:
                  </span>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {draft.keyClauses.slice(0, 3).map((clause, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                        <span className="truncate">{clause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveDraft(draft)}
                  className="inline-flex items-center gap-1.5 bg-[#0d1b3e] text-white hover:bg-[#c9a84c] hover:text-[#0d1b3e] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>View Full Template</span>
                  <ChevronRight size={14} />
                </button>

                <button
                  onClick={() => handleCopy(draft.templateText, draft.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#0d1b3e] px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-all"
                >
                  {copiedId === draft.id ? (
                    <>
                      <Check size={14} className="text-green-600" />
                      <span className="text-green-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDrafts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 p-8">
            <Info size={36} className="mx-auto text-gray-400 mb-3" />
            <p className="text-gray-600 text-sm font-semibold">No drafts found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-[#c9a84c] font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 4. OTHER TOOLS & RESOURCES QUICK CROSS-NAVIGATION */}
        <div className="mt-14 pt-8 border-t border-gray-200">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0d1b3e] mb-4">
            Explore More Tools & Resources
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href="/laws"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#c9a84c] hover:shadow-md transition-all group"
            >
              <Book size={20} className="text-[#0d1b3e] group-hover:text-[#c9a84c] mb-2" />
              <h4 className="font-bold text-xs text-[#0d1b3e] group-hover:text-[#c9a84c]">Bare Acts Database</h4>
              <p className="text-[10px] text-gray-500">18+ Acts, BNS, BNSS, BSA</p>
            </Link>

            <Link
              href="/judgments"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#c9a84c] hover:shadow-md transition-all group"
            >
              <Scale size={20} className="text-[#0d1b3e] group-hover:text-[#c9a84c] mb-2" />
              <h4 className="font-bold text-xs text-[#0d1b3e] group-hover:text-[#c9a84c]">Judgments Archive</h4>
              <p className="text-[10px] text-gray-500">Supreme Court & High Courts</p>
            </Link>

            <Link
              href="/articles"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#c9a84c] hover:shadow-md transition-all group"
            >
              <Newspaper size={20} className="text-[#0d1b3e] group-hover:text-[#c9a84c] mb-2" />
              <h4 className="font-bold text-xs text-[#0d1b3e] group-hover:text-[#c9a84c]">Legal Articles</h4>
              <p className="text-[10px] text-gray-500">Constitutional & trial analysis</p>
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

        {/* 5. CHAMBERS CALL TO ACTION */}
        <div className="mt-12 bg-[#0d1b3e] text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c9a84c]">
              BESPOKE CHAMBERS LITIGATION DRAFTING
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Need Specialized Legal Drafting for High Court or Supreme Court?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Our chamber specializes in precision drafting of Special Leave Petitions (SLPs), Article 32 & 226 Writs, Section 9 & 34 Arbitration petitions, and complex commercial agreements. Connect directly with Advocate Tushar Garg chambers.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#0d1b3e] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all"
              >
                <span>Book Legal Drafting Consultation</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 6. FULL TEMPLATE MODAL */}
      {activeDraft && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-5 bg-[#0d1b3e] text-white flex items-center justify-between border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#c9a84c] block">
                  {activeDraft.category} • {activeDraft.courtForum}
                </span>
                <h3 className="font-bold text-base sm:text-lg text-white leading-snug">
                  {activeDraft.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveDraft(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900">
                <span className="font-bold block mb-1 flex items-center gap-1.5 text-xs">
                  <Info size={14} className="text-amber-700" />
                  <span>Chamber Drafting Guidelines & Stamp Duty:</span>
                </span>
                <ul className="space-y-1 text-[11px] list-disc pl-4">
                  {activeDraft.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#0d1b3e] uppercase tracking-wider text-[11px]">
                    Draft Template Text:
                  </span>
                  <button
                    onClick={() => handleCopy(activeDraft.templateText, activeDraft.id)}
                    className="inline-flex items-center gap-1 text-xs text-[#0d1b3e] bg-gray-100 hover:bg-[#c9a84c] px-3 py-1.5 rounded-lg font-bold transition-colors"
                  >
                    {copiedId === activeDraft.id ? (
                      <>
                        <Check size={13} className="text-green-600" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy Draft Text</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-[11.5px] font-mono leading-relaxed whitespace-pre-wrap border border-gray-800">
                  {activeDraft.templateText}
                </pre>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <span className="text-[11px] text-gray-500">
                Governing Act: <strong>{activeDraft.governingLaw}</strong>
              </span>
              <button
                onClick={() => setActiveDraft(null)}
                className="bg-[#0d1b3e] text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-[#c9a84c] hover:text-[#0d1b3e] transition-colors uppercase tracking-wider"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

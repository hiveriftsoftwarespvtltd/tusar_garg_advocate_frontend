"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  BookOpen,
  FileText,
  Gavel,
  CheckCircle2,
  Phone,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Layers,
  Sparkles,
  Search,
  MessageSquare,
  AlertCircle,
  FileCode,
  Compass,
  Award
} from "lucide-react";
import { LawCategoryDetail, KeyArea } from "../../../data/lawsData";
import { getSpecializedPracticeDetail, SpecializedPracticeDetail } from "../../../data/practiceAreasData";
import TabScroller from "@/app/components/TabScroller";

interface PracticeAreaClientViewProps {
  category: LawCategoryDetail;
  keyArea: KeyArea;
  areaSlug: string;
  isJudicialReview: boolean;
  otherKeyAreas: KeyArea[];
}

type TabType = "all" | "overview" | "doctrines" | "roadmap" | "precedents" | "other";

export default function PracticeAreaClientView({
  category,
  keyArea,
  areaSlug,
  isJudicialReview,
  otherKeyAreas,
}: PracticeAreaClientViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Retrieve specialized practice detail for this specific card
  const specializedData: SpecializedPracticeDetail = getSpecializedPracticeDetail(
    category.slug,
    areaSlug,
    keyArea,
    category
  );

  // Precedents to show (from specializedData or category)
  const precedentsToDisplay = specializedData.landmarkPrecedents.length > 0
    ? specializedData.landmarkPrecedents
    : (category.landmarkPrecedents || []);

  // Filter precedents if search query is active
  const filteredPrecedents = precedentsToDisplay.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.court.toLowerCase().includes(q) ||
      p.ratio.toLowerCase().includes(q) ||
      p.citation.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#071126] text-white py-14 px-4 sm:px-6 overflow-hidden border-b border-[#c9a84c]/20">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-[#c9a84c]_1px,transparent_1px] [background-size:24px_24px]" />

        <div className="max-w-[1350px] mx-auto relative z-10">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <nav className="flex items-center gap-2 text-[12.5px] font-medium text-gray-400 flex-wrap">
              <Link href="/" className="hover:text-[#c9a84c] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/laws" className="hover:text-[#c9a84c] transition-colors">
                Laws
              </Link>
              <span>/</span>
              <Link href={`/laws/${category.slug}`} className="hover:text-[#c9a84c] transition-colors">
                {category.name}
              </Link>
              <span>/</span>
              <span className="text-[#c9a84c] font-semibold">{specializedData.title}</span>
            </nav>

            <Link
              href={`/laws/${category.slug}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#c9a84c] hover:text-[#071126] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/20 shadow-md backdrop-blur-md"
            >
              <ArrowLeft size={14} />
              <span>Back to {category.name}</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Title & Description */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                <Scale size={13} />
                <span>{specializedData.tag} • DEDICATED PRACTICE CARD</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {specializedData.title}
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
                {specializedData.overview}
              </p>

              {/* Statistics & Custom Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-sm font-serif line-clamp-1">
                    {specializedData.highlights.statute}
                  </div>
                  <div className="text-gray-300 text-[10px] uppercase tracking-wider font-semibold">
                    Statutory Basis
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-sm font-serif line-clamp-1">
                    {specializedData.highlights.forum}
                  </div>
                  <div className="text-gray-300 text-[10px] uppercase tracking-wider font-semibold">
                    Primary Forum
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-sm font-serif line-clamp-1">
                    {specializedData.highlights.remedy}
                  </div>
                  <div className="text-gray-300 text-[10px] uppercase tracking-wider font-semibold">
                    Legal Remedy
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-sm font-serif line-clamp-1">
                    {specializedData.highlights.representation}
                  </div>
                  <div className="text-gray-300 text-[10px] uppercase tracking-wider font-semibold">
                    Representation
                  </div>
                </div>
              </div>
            </div>

            {/* Chamber Contact Card */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-b from-[#0d1b3e] to-[#09142e] border border-[#c9a84c]/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c] flex items-center justify-center text-[#c9a84c]">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif font-bold text-base uppercase">
                      Advocate Tushar Garg
                    </h3>
                    <p className="text-[#c9a84c] text-[11.5px] font-medium">
                      Advocate-on-Record (AOR), Supreme Court
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-[12.5px] leading-relaxed mb-5 border-t border-b border-white/10 py-3">
                  Urgent legal advice, petition drafting & court representation in <strong className="text-white">{specializedData.title}</strong> before Supreme Court & High Courts.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+917206810681"
                    className="w-full flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b5953d] text-[#071126] font-bold py-2.5 px-4 rounded-xl transition-colors text-[13px] uppercase tracking-wider shadow-lg"
                  >
                    <Phone size={15} />
                    <span>Call Chamber Office</span>
                  </a>

                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 px-4 rounded-xl border border-white/20 transition-colors text-[13px]"
                  >
                    <BookOpen size={15} />
                    <span>Legal Awareness</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY INTERACTIVE TAB BAR WITH TAB SCROLLER */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3 px-4 sm:px-6">
        <div className="max-w-[1350px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-4">
          <TabScroller className="py-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md border border-[#c9a84c]/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-[#0d1b3e]"
              }`}
            >
              <Compass size={15} />
              <span>All Practice Details</span>
            </button>

            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                activeTab === "overview"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md border border-[#c9a84c]/30"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              <BookOpen size={15} />
              <span>Overview & Scope</span>
            </button>

            <button
              onClick={() => setActiveTab("doctrines")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                activeTab === "doctrines"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md border border-[#c9a84c]/30"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              <Scale size={15} />
              <span>Legal Grounds & Doctrines ({specializedData.doctrinesAndGrounds.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("roadmap")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                activeTab === "roadmap"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md border border-[#c9a84c]/30"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              <Layers size={15} />
              <span>Litigation Procedure ({specializedData.procedure.length})</span>
            </button>

            {precedentsToDisplay.length > 0 && (
              <button
                onClick={() => setActiveTab("precedents")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                  activeTab === "precedents"
                    ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md border border-[#c9a84c]/30"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
                }`}
              >
                <Gavel size={15} />
                <span>Precedents & Rulings ({precedentsToDisplay.length})</span>
              </button>
            )}

            {otherKeyAreas.length > 0 && (
              <button
                onClick={() => setActiveTab("other")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                  activeTab === "other"
                    ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md border border-[#c9a84c]/30"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
                }`}
              >
                <Award size={15} />
                <span>Other Practice Areas ({otherKeyAreas.length})</span>
              </button>
            )}
          </TabScroller>

          {/* Quick Search */}
          <div className="relative w-full xl:w-72 shrink-0">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search precedents or grounds..."
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-[12.5px] focus:outline-none focus:border-[#c9a84c] focus:bg-white transition-all placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT AREA */}
      <main className="max-w-[1350px] mx-auto px-4 sm:px-6 py-10 space-y-10">

        {/* TAB SECTION: OVERVIEW */}
        {(activeTab === "all" || activeTab === "overview") && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-[#c9a84c] text-[11px] font-bold uppercase tracking-widest mb-2">
              <Scale size={14} />
              <span>STATUTORY FRAMEWORK & SCOPE</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e] mb-4">
              Understanding {specializedData.title}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-6">
              {specializedData.overview}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <span className="text-[10.5px] font-bold text-[#c9a84c] uppercase tracking-wider block mb-1">
                  STATUTORY PROVISIONS
                </span>
                <h4 className="font-serif font-bold text-base text-[#0d1b3e] mb-1">
                  {specializedData.highlights.statute}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Key governing legal statutes and judicial procedure rules.
                </p>
              </div>

              <div className="bg-amber-50/60 border border-[#c9a84c]/30 rounded-xl p-4">
                <span className="text-[10.5px] font-bold text-[#c9a84c] uppercase tracking-wider block mb-1">
                  PRIMARY FORUM
                </span>
                <h4 className="font-serif font-bold text-base text-[#0d1b3e] mb-1">
                  {specializedData.highlights.forum}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Competent court jurisdiction for filing petitions and seeking emergency stay.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <span className="text-[10.5px] font-bold text-[#c9a84c] uppercase tracking-wider block mb-1">
                  CHAMBER ADVANTAGE
                </span>
                <h4 className="font-serif font-bold text-base text-[#0d1b3e] mb-1">
                  {specializedData.highlights.representation}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  End-to-end petition drafting, e-filing, and oral argument presentation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB SECTION: DOCTRINES & GROUNDS */}
        {(activeTab === "all" || activeTab === "doctrines") && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                KEY LEGAL GROUNDS & DOCTRINES
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                Legal Grounds Specific to {specializedData.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializedData.doctrinesAndGrounds.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center font-bold text-sm mb-4 border border-[#c9a84c]/30">
                    {item.number || `0${idx + 1}`}
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB SECTION: ROADMAP */}
        {(activeTab === "all" || activeTab === "roadmap") && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                LITIGATION PROCEDURE ROADMAP
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                Step-by-Step Litigation Procedure for {specializedData.title}
              </h3>
            </div>

            <div className="relative border-l-2 border-[#c9a84c]/40 ml-4 sm:ml-8 space-y-6 py-2">
              {specializedData.procedure.map((step, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-10 group">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#0d1b3e] text-[#c9a84c] border-2 border-[#c9a84c] flex items-center justify-center font-bold text-xs shadow-md group-hover:bg-[#c9a84c] group-hover:text-[#0d1b3e] transition-colors">
                    {idx + 1}
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                    <span className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-widest block mb-1">
                      {step.step}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB SECTION: PRECEDENTS */}
        {(activeTab === "all" || activeTab === "precedents") && precedentsToDisplay.length > 0 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                LANDMARK PRECEDENTS
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                Supreme Court & High Court Rulings for {specializedData.title}
              </h3>
            </div>

            {filteredPrecedents.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 text-gray-500">
                No precedent matching "{searchQuery}". Try searching another keyword.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPrecedents.map((p, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="bg-[#0d1b3e]/5 text-[#0d1b3e] border border-[#c9a84c]/40 font-semibold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
                          {p.court}
                        </span>
                        <span className="font-mono text-xs text-[#c9a84c] font-bold">{p.citation}</span>
                      </div>

                      <h4 className="font-serif font-bold text-xl text-[#0d1b3e] mb-3">
                        {p.title}
                      </h4>

                      <div className="bg-gray-50 border-l-4 border-[#c9a84c] p-4 rounded-r-xl mb-4">
                        <span className="text-[10.5px] font-bold text-gray-500 uppercase tracking-widest block mb-1">
                          RATIO DECIDENDI
                        </span>
                        <p className="text-gray-700 text-xs leading-relaxed">
                          "{p.ratio}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB SECTION: OTHER PRACTICE AREAS */}
        {(activeTab === "all" || activeTab === "other") && otherKeyAreas.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-gray-200 animate-in fade-in duration-200">
            <div>
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                EXPLORE MORE SPECIALIZATIONS
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                Other Practice Areas in {category.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherKeyAreas.map((area, idx) => {
                const computedSlug = area.slug || area.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                const targetHref = area.link || `/laws/${category.slug}/practice/${computedSlug}`;

                return (
                  <Link
                    key={idx}
                    href={targetHref}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#c9a84c] hover:shadow-lg transition-all block group"
                  >
                    <div className="inline-block bg-[#0d1b3e]/5 border border-[#c9a84c]/30 text-[#0d1b3e] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-3">
                      {area.tag}
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#0d1b3e] mb-2 group-hover:text-[#c9a84c] transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2">
                      {area.description}
                    </p>
                    <div className="flex items-center justify-between text-xs font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] border-t border-gray-100 pt-3">
                      <span>Explore Specialization</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#c9a84c]" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTTOM CONSULTATION CTA */}
        <section className="bg-gradient-to-r from-[#071126] via-[#0d1b3e] to-[#071126] text-white rounded-3xl p-8 sm:p-12 border border-[#c9a84c]/40 shadow-2xl relative overflow-hidden text-center sm:text-left">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase mb-4">
                <ShieldCheck size={14} />
                <span>SUPREME COURT & HIGH COURT LITIGATION</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-white">
                Require legal representation in {specializedData.title}?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Consult Advocate Tushar Garg (Advocate-on-Record, Supreme Court of India) for expert opinion, drafting, urgent stay motions, and court advocacy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="tel:+917206810681"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#c9a84c] hover:bg-[#b5953d] text-[#071126] font-bold py-3.5 px-6 rounded-xl transition-colors text-sm uppercase tracking-wider shadow-xl"
              >
                <Phone size={16} />
                <span>Call Chamber Office</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-xl border border-white/30 transition-colors text-sm"
              >
                <span>Legal Awareness</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

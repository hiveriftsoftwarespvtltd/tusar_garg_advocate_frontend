"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Scale,
  Gavel,
  HelpCircle,
  CheckCircle2,
  Search,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Phone,
  FileText,
  ShieldCheck,
  Building,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Layers
} from "lucide-react";
import { LawCategoryDetail, BareAct, FAQ, Precedent } from "../data/lawsData";

interface Props {
  detail: LawCategoryDetail;
}

export default function LawCategoryInteractiveView({ detail }: Props) {
  const [activeTab, setActiveTab] = useState<"overview" | "bare-acts" | "precedents" | "procedure" | "faqs">("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [openActIndex, setOpenActIndex] = useState<number | null>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Filter sections or bare acts based on searchQuery
  const filteredActs = detail.bareActs.map((act) => {
    if (!searchQuery.trim()) return act;
    const q = searchQuery.toLowerCase();
    const matchesAct = act.title.toLowerCase().includes(q) || act.description.toLowerCase().includes(q);
    const matchingSections = act.sections.filter(
      (sec) =>
        sec.number.toLowerCase().includes(q) ||
        sec.title.toLowerCase().includes(q) ||
        sec.summary.toLowerCase().includes(q)
    );
    return {
      ...act,
      sections: matchesAct ? act.sections : matchingSections,
    };
  }).filter(act => act.sections.length > 0 || !searchQuery.trim());

  // Filter precedents
  const filteredPrecedents = detail.landmarkPrecedents.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.citation.toLowerCase().includes(q) ||
      p.court.toLowerCase().includes(q) ||
      p.ratio.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-10">

      {/* SEARCH BAR & NAVIGATION TABS */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 mb-8 sticky top-20 z-20 backdrop-blur-md bg-white/95">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Navigation Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
            <Link
              href="/laws"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12.5px] font-bold text-[#0d1b3e] bg-gray-100 hover:bg-[#0d1b3e] hover:text-[#c9a84c] transition-all whitespace-nowrap border border-gray-200 shadow-sm shrink-0 mr-1"
            >
              <ArrowLeft size={15} />
              <span>Back to Laws</span>
            </Link>

            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              <BookOpen size={15} />
              <span>Overview & Practice</span>
            </button>

            <Link
              href={`/laws/${detail.slug}/acts`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12.5px] font-bold bg-[#c9a84c] text-[#0d1b3e] hover:bg-[#b5953d] transition-all whitespace-nowrap shadow-sm border border-[#c9a84c]"
              title={`Open dedicated page with all ${detail.stats.actsCount}`}
            >
              <FileText size={15} />
              <span>Full {detail.stats.actsCount} Directory →</span>
            </Link>

            <Link
              href={`/laws/${detail.slug}/sections`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12.5px] font-bold bg-[#0d1b3e] text-[#c9a84c] hover:bg-[#142654] transition-all whitespace-nowrap shadow-sm border border-[#c9a84c]/40"
              title={`Open dedicated page with ${detail.stats.sectionsCount}`}
            >
              <Layers size={15} />
              <span>{detail.stats.sectionsCount} Directory →</span>
            </Link>

            <Link
              href={`/laws/${detail.slug}/precedents`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12.5px] font-bold bg-[#c9a84c] text-[#0d1b3e] hover:bg-[#b5953d] transition-all whitespace-nowrap shadow-sm border border-[#c9a84c]"
              title={`Open dedicated page with ${detail.stats.precedentsCount} from 1950 to Present`}
            >
              <Gavel size={15} />
              <span>Full Apex Precedents (1950–2026) →</span>
            </Link>

            <button
              onClick={() => setActiveTab("procedure")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap ${
                activeTab === "procedure"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              <Scale size={15} />
              <span>Court Procedure</span>
            </button>

            <button
              onClick={() => setActiveTab("faqs")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap ${
                activeTab === "faqs"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              <HelpCircle size={15} />
              <span>FAQs</span>
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search section, act or precedent..."
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

      {/* TAB CONTENT 1: OVERVIEW */}
      {activeTab === "overview" && (
        <div className="space-y-10 animate-in fade-in duration-300">
          
          {/* Detailed Overview Banner */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 text-[#c9a84c] font-bold text-[11px] uppercase tracking-widest mb-3">
              <Sparkles size={14} />
              <span>PRACTICE OVERVIEW</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e] mb-4">
              Scope of Practice in {detail.name}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line">
              {detail.overview}
            </p>
          </div>

          {/* Key Practice Focus Areas Grid */}
          <div>
            <div className="mb-6">
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                SPECIALIZATION MATRIX
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                Key Focus Areas & Legal Remedies
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {detail.keyAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#c9a84c] transition-all hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="inline-block bg-[#0d1b3e]/5 border border-[#c9a84c]/30 text-[#0d1b3e] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider mb-4">
                      {area.tag}
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2 group-hover:text-[#c9a84c] transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-gray-600 text-[12.5px] leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0d1b3e] group-hover:text-[#c9a84c]">
                    <span>Learn Procedure</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chamber Strengths */}
          <div className="bg-gradient-to-br from-[#0d1b3e] to-[#071126] text-white rounded-2xl p-8 shadow-xl border border-[#c9a84c]/30">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[#c9a84c] text-[11px] font-bold uppercase tracking-widest mb-2">
                <ShieldCheck size={14} />
                <span>CHAMBER ADVANTAGE</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-6 text-white">
                {detail.advocateRole.title}
              </h3>

              <div className="space-y-4">
                {detail.advocateRole.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c] flex items-center justify-center text-[#c9a84c] shrink-0 mt-0.5">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: BARE ACTS DIRECTORY */}
      {activeTab === "bare-acts" && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                STATUTORY REFERENCE DIRECTORY
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                Bare Acts & Landmark Provisions
              </h3>
            </div>
          </div>

          {filteredActs.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
              <p className="text-gray-500 font-medium">No sections or bare acts match "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 text-[#c9a84c] font-bold text-xs hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            filteredActs.map((act, actIdx) => (
              <div
                key={actIdx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:border-[#c9a84c]/60 transition-all"
              >
                {/* Act Header */}
                <div
                  onClick={() => setOpenActIndex(openActIndex === actIdx ? null : actIdx)}
                  className="p-6 bg-gradient-to-r from-white to-gray-50 flex items-center justify-between cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="px-3 py-1.5 rounded-xl bg-[#0d1b3e] text-[#c9a84c] border border-[#c9a84c]/30 font-mono font-bold text-xs shrink-0 shadow-sm flex items-center gap-1.5 mt-0.5">
                      <BookOpen size={13} className="text-[#c9a84c]" />
                      <span>{act.year}</span>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl text-[#0d1b3e] mb-1">
                        {act.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {act.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className="text-xs font-bold bg-[#0d1b3e]/5 text-[#0d1b3e] px-3 py-1 rounded-full border border-gray-200">
                      {act.sections.length} Key Provisions
                    </span>
                    {openActIndex === actIdx ? (
                      <ChevronUp size={18} className="text-[#c9a84c]" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-400" />
                    )}
                  </div>
                </div>

                {/* Act Sections Grid */}
                {openActIndex === actIdx && (
                  <div className="p-6 bg-gray-50/50 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {act.sections.map((sec, secIdx) => (
                      <div
                        key={secIdx}
                        className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="bg-[#0d1b3e] text-[#c9a84c] font-mono font-bold text-[11px] px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-inner">
                              {sec.number}
                            </span>
                            <button
                              onClick={() => handleCopy(`${sec.number}: ${sec.title} - ${sec.summary}`)}
                              className="text-gray-400 hover:text-[#0d1b3e] transition-colors p-1 rounded hover:bg-gray-100"
                              title="Copy section details"
                            >
                              {copiedText === `${sec.number}: ${sec.title} - ${sec.summary}` ? (
                                <Check size={14} className="text-green-600" />
                              ) : (
                                <Copy size={14} />
                              )}
                            </button>
                          </div>
                          <h5 className="font-serif font-bold text-base text-[#0d1b3e] mb-2 group-hover:text-[#c9a84c] transition-colors">
                            {sec.title}
                          </h5>
                          <p className="text-gray-600 text-[12.5px] leading-relaxed">
                            {sec.summary}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB CONTENT 3: LANDMARK PRECEDENTS */}
      {activeTab === "precedents" && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                JUDICIAL PRECEDENTS & CASE LAW
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                Landmark Supreme Court & High Court Rulings
              </h3>
            </div>
            <Link
              href="/judgments"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0d1b3e] bg-white border border-gray-300 px-4 py-2 rounded-xl hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all shadow-sm"
            >
              <Search size={14} />
              <span>Search All Judgments</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPrecedents.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-[#0d1b3e]/5 text-[#0d1b3e] border border-[#c9a84c]/40 font-semibold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
                      {p.court}
                    </span>
                    <span className="font-mono text-xs text-[#c9a84c] font-bold">
                      {p.citation}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-xl text-[#0d1b3e] mb-3 group-hover:text-[#c9a84c] transition-colors leading-snug">
                    {p.title}
                  </h4>

                  <div className="bg-gray-50 border-l-4 border-[#c9a84c] p-4 rounded-r-xl mb-4">
                    <span className="text-[10.5px] font-bold text-gray-500 uppercase tracking-widest block mb-1">
                      LEGAL RATIO (RATIO DECIDENDI)
                    </span>
                    <p className="text-gray-700 text-[13px] leading-relaxed font-normal">
                      "{p.ratio}"
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
                  <span className="text-gray-500 font-medium">Year of Ruling: {p.year}</span>
                  <Link
                    href="/judgments"
                    className="font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] flex items-center gap-1"
                  >
                    <span>Read Precedent Analysis</span>
                    <ExternalLink size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: COURT PROCEDURE */}
      {activeTab === "procedure" && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div>
            <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
              LITIGATION ROADMAP
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
              Step-by-Step Procedure in {detail.name}
            </h3>
          </div>

          <div className="relative border-l-2 border-[#c9a84c]/40 ml-4 sm:ml-8 space-y-8 py-2">
            {detail.courtProcedure.map((step, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                {/* Step Circle */}
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#0d1b3e] text-[#c9a84c] border-2 border-[#c9a84c] flex items-center justify-center font-bold text-xs shadow-md group-hover:bg-[#c9a84c] group-hover:text-[#0d1b3e] transition-colors">
                  {idx + 1}
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                  <span className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-widest block mb-1">
                    {step.step}
                  </span>
                  <h4 className="font-serif font-bold text-xl text-[#0d1b3e] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 5: FAQS */}
      {activeTab === "faqs" && (
        <div className="space-y-6 animate-in fade-in duration-300 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">
              Common Legal Clarifications
            </h3>
          </div>

          <div className="space-y-4">
            {detail.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:border-[#c9a84c] transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-serif font-bold text-base text-[#0d1b3e] flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#0d1b3e]/5 text-[#c9a84c] font-mono text-xs flex items-center justify-center font-bold shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </span>
                  {openFaqIndex === idx ? (
                    <ChevronUp size={18} className="text-[#c9a84c] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-400 shrink-0" />
                  )}
                </button>

                {openFaqIndex === idx && (
                  <div className="px-6 pb-6 pt-2 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BOTTOM CONSULTATION CTA BANNER */}
      <div className="mt-16 bg-gradient-to-r from-[#071126] via-[#0d1b3e] to-[#071126] text-white rounded-3xl p-8 sm:p-12 border border-[#c9a84c]/40 shadow-2xl relative overflow-hidden text-center sm:text-left">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase mb-4">
              <ShieldCheck size={14} />
              <span>SUPREME COURT OF INDIA PRACTICE</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-white">
              Facing a complex legal issue in {detail.name}?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Consult Advocate Tushar Garg (Advocate-on-Record, Supreme Court of India) for strategic legal advice, writ filings, and court representation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919818000000"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#c9a84c] hover:bg-[#b5953d] text-[#071126] font-bold py-3.5 px-6 rounded-xl transition-colors text-sm uppercase tracking-wider shadow-xl"
            >
              <Phone size={16} />
              <span>Direct Chamber Call</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-xl border border-white/30 transition-colors text-sm"
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

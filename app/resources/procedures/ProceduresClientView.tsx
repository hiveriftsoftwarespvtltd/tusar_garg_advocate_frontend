"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Search,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileCheck,
  Scale,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  HelpCircle,
  Newspaper,
  Book,
  Info
} from "lucide-react";
import { courtProceduresData, CourtProcedureGuide } from "../data/resourcesDetailData";

export default function ProceduresClientView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeGuideId, setActiveGuideId] = useState<string>(courtProceduresData[0].id);

  const categories = ["All", "Constitutional", "Criminal", "Civil", "Commercial"];

  const filteredGuides = courtProceduresData.filter((g) => {
    const matchesCat = selectedCategory === "All" || g.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      g.title.toLowerCase().includes(q) ||
      g.forum.toLowerCase().includes(q) ||
      g.summary.toLowerCase().includes(q) ||
      g.statutorySection.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  const activeGuide =
    courtProceduresData.find((g) => g.id === activeGuideId) || courtProceduresData[0];

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
            <span className="text-[#c9a84c] font-semibold">Court Procedures</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                <FileText size={14} />
                <span>STEP-BY-STEP LITIGATION & FILING BLUEPRINTS</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Court Procedures & Filing Roadmaps
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
                Actionable step-by-step guides for filing Special Leave Petitions (SLPs) in the Supreme Court, securing criminal bail under BNSS, initiating Section 138 NI Act trials, and navigating Registry scrutiny.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#0d1b3e] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all hover:scale-[1.02]"
                >
                  <span>Chambers Filing Assistance</span>
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
                  <span>FILING RIGOUR</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">Supreme Court</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">AOR Rules</span>
                    <span className="text-[10px] text-gray-400">Order XXI adherence</span>
                  </div>
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">Limitation Clock</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">Calculated</span>
                    <span className="text-[10px] text-gray-400">Section 5 Condonation</span>
                  </div>
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">E-Filing Portal</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">Digital</span>
                    <span className="text-[10px] text-gray-400">Scrutiny clearance</span>
                  </div>
                  <div className="bg-[#071126]/60 border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] text-gray-400 block uppercase">Registry Defects</span>
                    <span className="text-sm font-bold text-white mt-1 block text-[#c9a84c]">28-Day Curation</span>
                    <span className="text-[10px] text-gray-400">Strict deadlines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN WORKSPACE */}
      <main className="max-w-[1300px] mx-auto px-4 sm:px-6 py-10">
        {/* Guide Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {filteredGuides.map((guide) => {
            const isSelected = activeGuide.id === guide.id;
            return (
              <button
                key={guide.id}
                onClick={() => setActiveGuideId(guide.id)}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#0d1b3e] border-[#c9a84c] text-white shadow-lg scale-[1.01]"
                    : "bg-white border-gray-200 text-gray-800 hover:border-[#c9a84c]/50 hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected ? "bg-[#c9a84c]/20 text-[#c9a84c]" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {guide.category}
                    </span>
                    <span className={`text-[10.5px] font-medium ${isSelected ? "text-gray-300" : "text-gray-500"}`}>
                      {guide.timeline}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm leading-snug mb-2">{guide.title}</h3>
                </div>
                <span
                  className={`text-[11px] font-semibold flex items-center gap-1 mt-3 ${
                    isSelected ? "text-[#c9a84c]" : "text-[#0d1b3e]"
                  }`}
                >
                  <span>{isSelected ? "Viewing Guide" : "Select Guide"}</span>
                  <ArrowRight size={13} />
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Guide Detail View */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8">
          <div className="border-b border-gray-100 pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
                {activeGuide.forum}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500">{activeGuide.statutorySection}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e] mb-3">
              {activeGuide.title}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
              {activeGuide.summary}
            </p>
          </div>

          {/* Sequential Steps */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#0d1b3e] mb-4 flex items-center gap-2">
              <Clock size={18} className="text-[#c9a84c]" />
              <span>Step-by-Step Procedural Roadmap</span>
            </h3>

            <div className="space-y-4">
              {activeGuide.steps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-gray-50 border border-gray-200/80 rounded-xl p-5 hover:border-[#c9a84c]/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#0d1b3e] text-[#c9a84c] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {step.stepNumber}
                    </span>
                    <div className="space-y-2 flex-1">
                      <h4 className="font-bold text-[#0d1b3e] text-sm sm:text-base">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="bg-white rounded-lg p-3 border border-gray-200/80">
                        <span className="text-[10.5px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                          Action Checklist:
                        </span>
                        <ul className="space-y-1 text-xs text-gray-600">
                          {step.checklist.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 size={13} className="text-green-600 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Essential Documents & Pitfalls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Essential Documents */}
            <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-5">
              <h4 className="font-bold text-[#0d1b3e] text-sm mb-3 flex items-center gap-2">
                <FileCheck size={16} className="text-[#1d4ed8]" />
                <span>Mandatory Documents Required</span>
              </h4>
              <ul className="space-y-2 text-xs text-gray-700">
                {activeGuide.essentialDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] mt-1.5 flex-shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pitfalls to Avoid */}
            <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-5">
              <h4 className="font-bold text-[#0d1b3e] text-sm mb-3 flex items-center gap-2">
                <AlertTriangle size={16} className="text-amber-700" />
                <span>Common Filing Pitfalls & Rejections</span>
              </h4>
              <ul className="space-y-2 text-xs text-gray-700">
                {activeGuide.pitfallsToAvoid.map((pitfall, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                    <span>{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. OTHER TOOLS CROSS-NAVIGATION */}
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
              href="/resources/glossary"
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#c9a84c] hover:shadow-md transition-all group"
            >
              <BookOpen size={20} className="text-[#0d1b3e] group-hover:text-[#c9a84c] mb-2" />
              <h4 className="font-bold text-xs text-[#0d1b3e] group-hover:text-[#c9a84c]">Legal Glossary</h4>
              <p className="text-[10px] text-gray-500">Statutory terms dictionary</p>
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Landmark, 
  ExternalLink, 
  Download, 
  FileText, 
  CheckCircle2, 
  BookOpen, 
  Scale, 
  Award, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  AlertCircle, 
  Search,
  Globe,
  FileCheck2,
  GraduationCap
} from "lucide-react";
import { StateJudiciaryExamDetail, ALL_28_STATES } from "../data/stateJudiciaryExamData";

interface StateJudiciaryDetailClientProps {
  state: StateJudiciaryExamDetail;
}

export default function StateJudiciaryDetailClient({ state }: StateJudiciaryDetailClientProps) {
  const [activeStageTab, setActiveStageTab] = useState<"prelims" | "mains" | "interview">("prelims");
  const [paperFilter, setPaperFilter] = useState<string>("All");

  const filteredPapers = state.previousPapers.filter((paper) => {
    if (paperFilter === "All") return true;
    return paper.stage === paperFilter;
  });

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#071126] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#c9a84c]/20 overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1340px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-300 mb-6">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
            <span className="text-gray-500">›</span>
            <Link href="/judiciary" className="hover:text-[#c9a84c] transition-colors">Judiciary Examination</Link>
            <span className="text-gray-500">›</span>
            <span className="text-[#c9a84c] font-semibold">{state.stateName} Judiciary</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (Main Info) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/15 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-xs">
                <Scale size={14} />
                <span>STATE JUDICIAL SERVICES EXAMINATION • {state.shortCode}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {state.stateName} Judiciary Examination
                <span className="block text-xl sm:text-2xl md:text-3xl text-[#c9a84c] font-normal font-serif mt-1">
                  {state.examName}
                </span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                Comprehensive state guide for judicial aspirants, civil judge examinations, syllabus breakdown, previous year question papers, and authentic direct recruitment links for <strong className="text-white font-medium">{state.conductingBody}</strong>.
              </p>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#previous-papers"
                  className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b3933b] text-[#0d1b3e] text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  <Download size={16} />
                  <span>Previous Year Papers ({state.previousPapers.length})</span>
                </a>

                <a
                  href="#official-links"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg transition-all cursor-pointer"
                >
                  <Globe size={16} className="text-[#c9a84c]" />
                  <span>Official Portals</span>
                </a>

                <a
                  href="#exam-pattern"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg transition-all cursor-pointer"
                >
                  <BookOpen size={16} className="text-[#c9a84c]" />
                  <span>Exam Pattern & Syllabus</span>
                </a>
              </div>
            </div>

            {/* Right Column (Cadre Quick Card) */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-b from-[#11234c] to-[#0a1633] border border-[#c9a84c]/35 rounded-2xl p-5 text-white shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c]">
                    <Award size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#c9a84c]">
                      Judicial Officer Cadre
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      {state.cadre}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-gray-300">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Conducting Body:</span>
                    <span className="font-semibold text-white text-right max-w-[200px] truncate" title={state.conductingBody}>
                      {state.conductingBody}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Age Limit:</span>
                    <span className="font-semibold text-[#c9a84c] text-right">
                      {state.eligibility.ageLimit.split(" ")[0]} - {state.eligibility.ageLimit.split(" ")[2] || "35"} Yrs
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Qualification:</span>
                    <span className="font-semibold text-white">LL.B. Degree</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Exam Stages:</span>
                    <span className="font-semibold text-[#c9a84c]">Prelims • Mains • Interview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Official Websites & Recruitment Links Section */}
      <section id="official-links" className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-2">
            <ShieldCheck size={16} />
            <span>AUTHENTICATED OFFICIAL GOVERNMENT RECRUITMENT PORTALS</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e] mb-4">
            Official Portals for {state.stateName} Judiciary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* High Court Portal */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#c9a84c]/60 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#0d1b3e] bg-white px-2 py-0.5 rounded border border-gray-200">
                    High Court of Record
                  </span>
                  <Landmark size={18} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-sm font-bold text-[#0d1b3e] mb-1 group-hover:text-[#c9a84c] transition-colors">
                  {state.officialLinks.highCourtName}
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  Official judgments, judicial notices, court roster, and examination administrative orders.
                </p>
              </div>
              <a
                href={state.officialLinks.highCourtUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs font-bold text-[#0d1b3e] hover:text-[#c9a84c] pt-2 border-t border-gray-200 transition-colors"
              >
                <span>Visit High Court Portal</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Public Service Commission Portal */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#c9a84c]/60 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#0d1b3e] bg-white px-2 py-0.5 rounded border border-gray-200">
                    Public Service Commission
                  </span>
                  <Award size={18} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-sm font-bold text-[#0d1b3e] mb-1 group-hover:text-[#c9a84c] transition-colors">
                  {state.officialLinks.pscName}
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  Official recruitment advertisements, online application form links, admit cards & results.
                </p>
              </div>
              <a
                href={state.officialLinks.pscUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs font-bold text-[#0d1b3e] hover:text-[#c9a84c] pt-2 border-t border-gray-200 transition-colors"
              >
                <span>Visit PSC Website</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Recruitment & Notification Section */}
            {state.officialLinks.recruitmentPortalUrl && (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#c9a84c]/60 transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[#0d1b3e] bg-white px-2 py-0.5 rounded border border-gray-200">
                      Recruitment Portal
                    </span>
                    <FileCheck2 size={18} className="text-[#c9a84c]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0d1b3e] mb-1 group-hover:text-[#c9a84c] transition-colors">
                    {state.officialLinks.recruitmentPortalName || "Examination Updates"}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">
                    Latest vacancy circulars, syllabus PDFs, master question keys, and interview schedules.
                  </p>
                </div>
                <a
                  href={state.officialLinks.recruitmentPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-bold text-[#0d1b3e] hover:text-[#c9a84c] pt-2 border-t border-gray-200 transition-colors"
                >
                  <span>Check Open Recruitment</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Previous Year Question Papers (PYQs) Section */}
      <section id="previous-papers" className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-7">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-1">
                <FileText size={16} />
                <span>SOLVED & OFFICIAL QUESTION BOOKLETS</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e]">
                {state.stateName} Judiciary Previous Year Question Papers
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Official question papers with marking schemes from previous examination cycles.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              {["All", "Preliminary", "Mains", "Consolidated"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPaperFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    paperFilter === filter
                      ? "bg-[#0d1b3e] text-[#c9a84c]"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="border border-gray-200 hover:border-[#c9a84c]/50 rounded-xl p-4 sm:p-5 flex items-start justify-between gap-4 hover:shadow-md transition-all group bg-white"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold bg-[#0d1b3e] text-[#c9a84c] px-2 py-0.5 rounded">
                      {paper.year}
                    </span>
                    <span className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                      {paper.stage}
                    </span>
                    <span className="text-[10px] text-gray-500 font-medium">
                      {paper.paperType}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors leading-snug">
                    {paper.title}
                  </h3>

                  <div className="flex items-center gap-3 text-[11px] text-gray-500">
                    <span>Format: PDF</span>
                    <span>•</span>
                    <span>File Size: {paper.fileSize}</span>
                  </div>
                </div>

                <a
                  href={paper.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 bg-[#0d1b3e] hover:bg-[#c9a84c] text-white hover:text-[#0d1b3e] px-3 py-2 rounded-lg text-xs font-bold transition-all shadow-xs"
                  title="Download Question Paper"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Examination Pattern & Syllabus Breakdown */}
      <section id="exam-pattern" className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-7">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">
              3-TIER SELECTION ARCHITECTURE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e] mt-1 mb-2">
              {state.stateName} Judiciary Examination Pattern
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Detailed breakdown of Preliminary (Objective), Mains (Descriptive), and Interview stages.
            </p>

            {/* Stage Switcher Tabs */}
            <div className="inline-flex bg-gray-100 p-1 rounded-xl mt-5">
              <button
                onClick={() => setActiveStageTab("prelims")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeStageTab === "prelims"
                    ? "bg-[#0d1b3e] text-[#c9a84c] shadow-xs"
                    : "text-gray-600 hover:text-[#0d1b3e]"
                }`}
              >
                1. Preliminary (MCQ)
              </button>
              <button
                onClick={() => setActiveStageTab("mains")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeStageTab === "mains"
                    ? "bg-[#0d1b3e] text-[#c9a84c] shadow-xs"
                    : "text-gray-600 hover:text-[#0d1b3e]"
                }`}
              >
                2. Mains (Descriptive)
              </button>
              <button
                onClick={() => setActiveStageTab("interview")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeStageTab === "interview"
                    ? "bg-[#0d1b3e] text-[#c9a84c] shadow-xs"
                    : "text-gray-600 hover:text-[#0d1b3e]"
                }`}
              >
                3. Viva-Voce (Interview)
              </button>
            </div>
          </div>

          {/* Active Tab Content */}
          {activeStageTab === "prelims" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-gray-500 uppercase">Total Marks</span>
                  <span className="block text-xl font-bold text-[#0d1b3e]">{state.pattern.prelims.totalMarks}</span>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-gray-500 uppercase">Total Questions</span>
                  <span className="block text-xl font-bold text-[#0d1b3e]">{state.pattern.prelims.totalQuestions}</span>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-gray-500 uppercase">Duration</span>
                  <span className="block text-xl font-bold text-[#0d1b3e]">{state.pattern.prelims.duration}</span>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-gray-500 uppercase">Negative Marking</span>
                  <span className="block text-sm font-bold text-red-600 mt-1">{state.pattern.prelims.negativeMarking}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="text-sm font-bold text-[#0d1b3e] uppercase tracking-wider mb-3">
                  Preliminary Exam Core Subjects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {state.pattern.prelims.subjects.map((sub, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-600">
                  <strong className="text-[#0d1b3e]">Qualifying Cutoff Criterion: </strong>
                  {state.pattern.prelims.qualifyingCutoff}
                </div>
              </div>
            </div>
          )}

          {activeStageTab === "mains" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-[#0d1b3e] text-white px-5 py-3 rounded-xl">
                <div>
                  <span className="text-xs text-gray-400">Total Mains Marks</span>
                  <h3 className="text-lg font-bold text-[#c9a84c]">{state.pattern.mains.totalMarks} Marks</h3>
                </div>
                <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  {state.pattern.mains.papersCount} Descriptive Papers
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {state.pattern.mains.papers.map((p, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#0d1b3e] bg-white px-2 py-0.5 rounded border border-gray-200">
                          {p.duration}
                        </span>
                        <span className="text-xs font-bold text-[#c9a84c]">
                          {p.marks} Marks
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#0d1b3e] mb-2">{p.name}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeStageTab === "interview" && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <span className="text-xs text-gray-500 uppercase font-bold">Personal Interview / Viva-Voce</span>
                  <h3 className="text-xl font-bold text-[#0d1b3e] mt-0.5">
                    {state.pattern.interview.marks} Marks
                  </h3>
                </div>
                {state.pattern.interview.qualifyingMarks && (
                  <span className="text-xs font-bold bg-[#c9a84c]/20 text-[#0d1b3e] px-3 py-1.5 rounded-lg border border-[#c9a84c]/40">
                    {state.pattern.interview.qualifyingMarks}
                  </span>
                )}
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-600 uppercase mb-2">Key Assessment Parameters:</h4>
                <ul className="space-y-2">
                  {state.pattern.interview.focusAreas.map((area, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-[#c9a84c] shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. State-Specific Local Laws */}
      {state.localLaws.length > 0 && (
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-7">
            <div className="flex items-center gap-2 text-xs font-bold text-[#c9a84c] uppercase tracking-wider mb-2">
              <BookOpen size={16} />
              <span>HIGH WEIGHTAGE STATE ENACTMENTS</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e] mb-4">
              Local Laws for {state.stateName} Judiciary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {state.localLaws.map((law, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#0d1b3e]">{law.actName}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      law.importance === "Essential" 
                        ? "bg-red-50 text-red-700 border border-red-200" 
                        : "bg-[#c9a84c]/20 text-[#0d1b3e]"
                    }`}>
                      {law.importance}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{law.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Quick Switcher to Other States */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#0d1b3e] text-white rounded-2xl p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-widest">
              PAN-INDIA PREPARATION
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
              Explore Judiciary Exams in Other States
            </h2>
            <p className="text-xs text-gray-300">
              Access syllabus and previous papers for all 28 Indian States with one click.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {ALL_28_STATES.filter(s => s.slug !== state.slug).slice(0, 18).map((other) => (
              <Link
                key={other.slug}
                href={`/judiciary/${other.slug}`}
                className="bg-white/5 hover:bg-white/15 border border-white/10 rounded-lg p-2.5 text-center text-xs font-medium text-gray-200 hover:text-[#c9a84c] transition-all truncate"
              >
                {other.shortName}
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/judiciary"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c9a84c] hover:underline"
            >
              <span>View All 28 States on Judiciary Hub</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

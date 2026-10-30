"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Building2, 
  GraduationCap, 
  BookOpen, 
  Scale, 
  Search, 
  MapPin, 
  ExternalLink, 
  Award, 
  CheckCircle2, 
  Filter, 
  ArrowRight, 
  FileText, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Landmark, 
  ChevronRight,
  Briefcase
} from "lucide-react";
import { 
  allLawCollegesData, 
  legalDegreesData, 
  lawEntranceExamsData, 
  barCouncilAndPracticeRules,
  LawCollegeItem 
} from "@/lib/data/collegesComprehensiveData";

type ActiveTab = "directory" | "degrees" | "exams" | "bci-pathway";

export default function CollegesClientView() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("directory");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedState, setSelectedState] = useState<string>("All");

  // Extract unique states for filter dropdown
  const statesList = useMemo(() => {
    const states = Array.from(new Set(allLawCollegesData.map(c => c.state))).sort();
    return ["All", ...states];
  }, []);

  // Filter colleges based on search query, type, and state
  const filteredColleges = useMemo(() => {
    return allLawCollegesData.filter((college) => {
      const matchesSearch =
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.coursesOffered.some(course => course.toLowerCase().includes(searchQuery.toLowerCase())) ||
        college.entranceExam.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = selectedType === "All" || college.type.includes(selectedType);
      const matchesState = selectedState === "All" || college.state === selectedState;

      return matchesSearch && matchesType && matchesState;
    });
  }, [searchQuery, selectedType, selectedState]);

  return (
    <div className="w-full">
      {/* ── Top Interactive Tabs Navigation ── */}
      <div className="bg-[#101D35] border-y border-[#B69A63]/30 sticky top-[72px] z-30 shadow-md">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto py-3 scrollbar-none">
            <button
              onClick={() => setActiveTab("directory")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === "directory"
                  ? "bg-[#B69A63] text-[#101D35] shadow"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Building2 size={16} />
              <span>All Law Colleges & NLUs ({allLawCollegesData.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("degrees")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === "degrees"
                  ? "bg-[#B69A63] text-[#101D35] shadow"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <GraduationCap size={16} />
              <span>Legal Degrees & Curricula</span>
            </button>

            <button
              onClick={() => setActiveTab("exams")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === "exams"
                  ? "bg-[#B69A63] text-[#101D35] shadow"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <BookOpen size={16} />
              <span>National Entrance Exams (CLAT/AILET)</span>
            </button>

            <button
              onClick={() => setActiveTab("bci-pathway")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === "bci-pathway"
                  ? "bg-[#B69A63] text-[#101D35] shadow"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Scale size={16} />
              <span>BCI Regulations & AOR Pathway</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-8">
        {/* ═══════════════════════════════════════════════════════════
            TAB 1: ALL LAW COLLEGES & NLUs DIRECTORY
        ═══════════════════════════════════════════════════════════ */}
        {activeTab === "directory" && (
          <div className="space-y-6">
            {/* Search & Filter Bar */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 md:p-6 space-y-4">
              <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by college name, city, state, entrance exam, or course (e.g. NLSIU, Delhi, CLAT, BA LLB)..."
                    className="w-full pl-10 pr-4 py-2.5 text-xs md:text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B69A63] focus:border-transparent"
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

                {/* State Dropdown */}
                <div className="flex items-center gap-2">
                  <label className="text-xs font-semibold text-gray-600 whitespace-nowrap">State:</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="py-2.5 px-3 text-xs md:text-sm rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#B69A63]"
                  >
                    {statesList.map((st) => (
                      <option key={st} value={st}>
                        {st === "All" ? "All States & UTs" : st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Institution Type Filters */}
              <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-gray-100 scrollbar-none">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1 mr-1">
                  <Filter size={13} /> Type:
                </span>
                {[
                  { label: "All Institutions", val: "All" },
                  { label: "NLUs (26 National Law Universities)", val: "NLU" },
                  { label: "Central Universities", val: "Central" },
                  { label: "State Government", val: "State" },
                  { label: "Premier Private", val: "Private" },
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setSelectedType(item.val)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedType === item.val
                        ? "bg-[#0d1b3e] text-[#B69A63] shadow-sm"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between text-xs md:text-sm text-gray-600 px-1">
              <p>
                Showing <span className="font-bold text-[#0d1b3e]">{filteredColleges.length}</span> of{" "}
                <span className="font-bold text-[#0d1b3e]">{allLawCollegesData.length}</span> recognized law institutions across India
              </p>
              {(searchQuery || selectedType !== "All" || selectedState !== "All") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedType("All");
                    setSelectedState("All");
                  }}
                  className="text-xs text-[#B69A63] hover:underline font-semibold"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {/* Grid of Colleges */}
            {filteredColleges.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredColleges.map((college) => (
                  <div
                    key={college.id}
                    className="bg-white rounded-xl border border-gray-200 hover:border-[#B69A63] transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between overflow-hidden group"
                  >
                    <div className="p-5">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[10.5px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                          college.type.includes("NLU") 
                            ? "bg-amber-100 text-amber-900 border border-amber-300"
                            : college.type.includes("Central")
                            ? "bg-blue-100 text-blue-900 border border-blue-300"
                            : college.type.includes("State")
                            ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                            : "bg-purple-100 text-purple-900 border border-purple-300"
                        }`}>
                          {college.type}
                        </span>

                        {college.nirfRank && (
                          <span className="text-[11px] font-extrabold text-[#0d1b3e] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded flex items-center gap-1">
                            <Award size={12} className="text-[#B69A63]" />
                            {typeof college.nirfRank === "number" ? `NIRF #${college.nirfRank}` : college.nirfRank}
                          </span>
                        )}
                      </div>

                      {/* College Name & Location */}
                      <h3 className="font-serif text-[15.5px] font-bold text-[#0d1b3e] group-hover:text-[#B69A63] transition-colors leading-snug mb-1.5">
                        {college.name}
                      </h3>
                      
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                        <MapPin size={13} className="text-[#B69A63] shrink-0" />
                        <span>{college.location}</span>
                        <span className="text-gray-300">•</span>
                        <span>Est. {college.established}</span>
                      </div>

                      {/* Highlights */}
                      <p className="text-[12px] text-gray-600 line-clamp-2 leading-relaxed mb-4 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                        {college.highlights}
                      </p>

                      {/* Quick Meta Stats */}
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center justify-between text-gray-600">
                          <span className="font-medium text-gray-500">Entrance Exam:</span>
                          <span className="font-bold text-[#0d1b3e] text-right">{college.entranceExam}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-600">
                          <span className="font-medium text-gray-500">Approx. Annual Fee:</span>
                          <span className="font-semibold text-gray-800">{college.annualFeesApprox}</span>
                        </div>
                        <div className="flex items-center justify-between text-gray-600">
                          <span className="font-medium text-gray-500">UG Intake:</span>
                          <span className="text-gray-800">{college.intakeApprox}</span>
                        </div>
                      </div>

                      {/* Courses Badges */}
                      <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                        {college.coursesOffered.map((c, i) => (
                          <span key={i} className="text-[10.5px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-medium">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-gray-500 font-mono">
                        {college.shortName}
                      </span>
                      <a
                        href={college.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d1b3e] hover:text-[#B69A63] transition-colors"
                      >
                        <span>Official Website</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <Building2 size={40} className="mx-auto text-gray-400 mb-3" />
                <h3 className="font-serif text-lg font-bold text-[#0d1b3e] mb-1">No Law Colleges Found</h3>
                <p className="text-xs text-gray-500 mb-4">
                  No institutions matched your current query &ldquo;{searchQuery}&rdquo;. Try clearing filters or searching for state/exam.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedType("All");
                    setSelectedState("All");
                  }}
                  className="px-4 py-2 bg-[#0d1b3e] text-[#B69A63] rounded-lg text-xs font-semibold hover:bg-[#1a336e] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════
            TAB 2: LEGAL DEGREES & CURRICULA IN INDIA
        ═══════════════════════════════════════════════════════════ */}
        {activeTab === "degrees" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="font-serif text-xl md:text-2xl font-bold text-[#0d1b3e] mb-2">
                Structure of Legal Degrees in India
              </h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-3xl">
                Legal education in India is regulated by the Bar Council of India (BCI) under the Advocates Act, 1961. 
                Candidates can pursue either an integrated 5-year law degree right after Senior Secondary (10+2) or a 3-year LL.B. 
                degree following graduation in any discipline, followed by post-graduate and doctoral research.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {legalDegreesData.map((prog, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-[#0d1b3e] text-white p-5 md:p-6 border-b border-[#B69A63]/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[#B69A63] text-[#101D35] font-extrabold">
                          Degree Program
                        </span>
                        <span className="text-xs text-white/60">• Duration: {prog.duration}</span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-white">
                        {prog.degree}
                      </h3>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/10 shrink-0">
                      <p className="text-[11px] text-[#B69A63] font-semibold uppercase tracking-wider">Eligibility</p>
                      <p className="text-xs text-white/90">{prog.eligibility}</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Curriculum & Pedagogical Overview
                      </h4>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        {prog.curriculumOverview}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                      <div>
                        <h4 className="text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <BookOpen size={14} className="text-[#B69A63]" />
                          <span>Core Statutory & Procedural Subjects</span>
                        </h4>
                        <ul className="space-y-2">
                          {prog.keySubjects.map((sub, sIdx) => (
                            <li key={sIdx} className="text-xs text-gray-600 flex items-start gap-2">
                              <CheckCircle2 size={13} className="text-[#B69A63] shrink-0 mt-0.5" />
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <Briefcase size={14} className="text-[#B69A63]" />
                          <span>Professional Career Outcomes</span>
                        </h4>
                        <ul className="space-y-2">
                          {prog.careerProspects.map((car, cIdx) => (
                            <li key={cIdx} className="text-xs text-gray-600 flex items-start gap-2">
                              <ChevronRight size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                              <span>{car}</span>
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
        )}

        {/* ═══════════════════════════════════════════════════════════
            TAB 3: NATIONAL LAW ENTRANCE EXAMINATIONS
        ═══════════════════════════════════════════════════════════ */}
        {activeTab === "exams" && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="font-serif text-xl md:text-2xl font-bold text-[#0d1b3e] mb-2">
                National Law Entrance Examinations in India
              </h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-3xl">
                Admission to premier law universities in India is governed through highly competitive national and state-level entrance examinations. 
                Below is the comprehensive syllabus, conducting authority, and examination pattern for every major law entrance test.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lawEntranceExamsData.map((exam, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 uppercase">
                        {exam.shortName}
                      </span>
                      <span className="text-[11.5px] text-gray-500 font-medium">
                        {exam.frequency}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#0d1b3e] mb-2">
                      {exam.name}
                    </h3>

                    <div className="space-y-2 text-xs text-gray-600 mb-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <div>
                        <span className="font-bold text-gray-700">Conducting Body: </span>
                        <span>{exam.conductingBody}</span>
                      </div>
                      <div>
                        <span className="font-bold text-gray-700">Participating Colleges: </span>
                        <span>{exam.participatingInstitutes}</span>
                      </div>
                      <div>
                        <span className="font-bold text-gray-700">Exam Pattern: </span>
                        <span>{exam.examPattern}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-[11.5px] font-bold text-[#0d1b3e] uppercase tracking-wider flex items-center gap-1.5">
                        <FileText size={13} className="text-[#B69A63]" />
                        <span>Syllabus & Test Domains</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {exam.syllabus.map((syl, sIdx) => (
                          <li key={sIdx} className="text-xs text-gray-600 flex items-start gap-2">
                            <span className="text-[#B69A63] font-bold">•</span>
                            <span>{syl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-6 py-3.5 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-500">Official Portal:</span>
                    <a
                      href={exam.officialPortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d1b3e] hover:text-[#B69A63] transition-colors"
                    >
                      <span>Visit Examination Portal</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════
            TAB 4: BCI REGULATIONS & AOR PATHWAY
        ═══════════════════════════════════════════════════════════ */}
        {activeTab === "bci-pathway" && (
          <div className="space-y-8">
            <div className="bg-[#0d1b3e] text-white rounded-xl p-6 md:p-8 shadow-md border border-[#B69A63]/30">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#B69A63]/20 border border-[#B69A63]/40 text-[#B69A63] text-xs font-bold uppercase tracking-wider mb-3">
                  <ShieldCheck size={14} />
                  <span>Statutory Regulatory Framework</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                  Bar Council of India & Supreme Court Practice Pathway
                </h2>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                  The legal profession in India is governed by the <strong>Advocates Act, 1961</strong>. Only enrolled advocates holding a valid 
                  Certificate of Practice (COP) issued upon qualifying the All India Bar Examination (AIBE) are entitled to practice in courts across the Union. 
                  Advocates practicing before the Supreme Court of India must subsequently qualify under the <strong>Supreme Court Rules, 2013</strong> to become an Advocate-on-Record.
                </p>
              </div>
            </div>

            {/* 5-Step Process */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#0d1b3e] mb-6 flex items-center gap-2">
                <Landmark size={20} className="text-[#B69A63]" />
                <span>The 5-Step Pathway to Supreme Court Advocate-on-Record</span>
              </h3>

              <div className="relative border-l-2 border-[#B69A63]/40 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8">
                {barCouncilAndPracticeRules.stepsToPractice.map((step) => (
                  <div key={step.step} className="relative">
                    {/* Number Circle Badge */}
                    <div className="absolute -left-[35px] md:-left-[43px] top-0 w-8 h-8 rounded-full bg-[#0d1b3e] border-2 border-[#B69A63] text-[#B69A63] font-bold text-xs flex items-center justify-center shadow">
                      {step.step}
                    </div>

                    <div>
                      <h4 className="font-serif text-base md:text-lg font-bold text-[#0d1b3e] mb-1.5">
                        Step {step.step}: {step.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supreme Court AOR Criteria Card */}
            <div className="bg-white rounded-xl border border-[#B69A63]/40 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#0d1b3e] text-[#B69A63]">
                  <Scale size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-[#0d1b3e]">
                    Supreme Court Advocate-on-Record (AOR) Statutory Criteria
                  </h3>
                  <p className="text-xs text-gray-500">Order IV, Supreme Court Rules, 2013</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {barCouncilAndPracticeRules.aorRequirements.map((req, rIdx) => (
                  <div key={rIdx} className="bg-amber-50/50 border border-amber-200/60 p-4 rounded-xl flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#B69A63] shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-800 leading-relaxed">{req}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-gray-500 italic">
                  Advocate on Record Tushar Garg (Reg. 4215) is an enrolled Advocate-on-Record entitled to practice and file before the Supreme Court of India.
                </p>
                <Link
                  href="/about"
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0d1b3e] text-[#B69A63] text-xs font-bold hover:bg-[#1a336e] transition-colors"
                >
                  <span>Chambers Profile</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

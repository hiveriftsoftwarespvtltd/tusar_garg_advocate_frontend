"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Landmark,
  Scale,
  ClipboardList,
  BookOpen,
  Users,
  FileText,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  Search,
  GraduationCap,
  Calendar,
  Award,
  ShieldCheck,
  Clock,
  BookMarked,
  HelpCircle,
  Briefcase,
  Layers,
  Sparkles,
  Building2
} from "lucide-react";
import {
  JudicialServiceDetail,
  getAllJudicialServices
} from "../data/judicialServicesData";

interface Props {
  service: JudicialServiceDetail;
}

type TabType =
  | "overview"
  | "eligibility"
  | "syllabus"
  | "states"
  | "strategy"
  | "hierarchy"
  | "faqs";

export default function JudicialServiceDetailClient({ service }: Props) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState("");

  const allServices = getAllJudicialServices();
  const otherServices = allServices.filter((s) => s.slug !== service.slug);

  const getIcon = (name: string, size = 24) => {
    switch (name) {
      case "Landmark":
        return <Landmark size={size} strokeWidth={1.5} />;
      case "Scale":
        return <Scale size={size} strokeWidth={1.5} />;
      case "ClipboardList":
        return <ClipboardList size={size} strokeWidth={1.5} />;
      case "BookOpen":
        return <BookOpen size={size} strokeWidth={1.5} />;
      case "Users":
        return <Users size={size} strokeWidth={1.5} />;
      case "FileText":
      default:
        return <FileText size={size} strokeWidth={1.5} />;
    }
  };

  const filteredFaqs = service.faqs.filter(
    (f) =>
      !faqSearch.trim() ||
      f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: "overview", label: "Overview", icon: Layers },
    { id: "eligibility", label: "Eligibility & Stages", icon: ShieldCheck },
    { id: "syllabus", label: "Syllabus & Weightage", icon: BookMarked },
    ...(service.stateExams && service.stateExams.length > 0
      ? [{ id: "states" as TabType, label: "State-wise Pattern", icon: Building2 }]
      : []),
    { id: "strategy", label: "Preparation Strategy", icon: Sparkles },
    ...(service.careerHierarchy && service.careerHierarchy.length > 0
      ? [{ id: "hierarchy" as TabType, label: "Career Hierarchy", icon: Award }]
      : []),
    { id: "faqs", label: "FAQs", icon: HelpCircle },
  ];

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
            <Link href="/judiciary" className="hover:text-[#c9a84c] transition-colors">
              Judiciary
            </Link>
            <span>/</span>
            <span className="text-[#c9a84c] font-semibold">{service.shortTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                {getIcon(service.iconName, 14)}
                <span>{service.badge}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {service.title}
              </h1>

              {/* Tagline */}
              <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
                {service.tagline}
              </p>

              <p className="text-gray-400 text-sm max-w-3xl leading-relaxed pt-1">
                {service.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#0d1b3e] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all hover:scale-[1.02]"
                >
                  <span>Chambers Mentorship & Consultation</span>
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>

                <Link
                  href="/judiciary"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-lg border border-white/20 transition-all"
                >
                  <ArrowLeft size={14} />
                  <span>All Judicial Services</span>
                </Link>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="lg:col-span-4">
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-3">
                <div className="text-[11px] uppercase font-bold tracking-widest text-[#c9a84c] border-b border-white/10 pb-2.5 flex items-center gap-2">
                  <GraduationCap size={15} />
                  <span>KEY EXAMINATION METRICS</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {service.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#071126]/60 border border-white/5 rounded-xl p-3 flex flex-col justify-between"
                    >
                      <span className="text-[10.5px] uppercase font-semibold text-gray-400">
                        {stat.label}
                      </span>
                      <span className="font-serif text-lg font-bold text-white mt-1 leading-tight text-[#c9a84c]">
                        {stat.value}
                      </span>
                      <span className="text-[10px] text-gray-400 mt-1">
                        {stat.sublabel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY / INTERACTIVE TAB NAVIGATION */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
            {tabs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
                      : "text-gray-600 hover:text-[#0d1b3e] hover:bg-gray-100"
                  }`}
                >
                  <IconComp size={14} className={isActive ? "text-[#c9a84c]" : "text-gray-500"} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. MAIN TAB CONTENT */}
      <main className="max-w-[1300px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-10">
            {/* Overview Narrative */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
                  {getIcon(service.iconName, 20)}
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e]">
                    Executive Overview & Institutional Role
                  </h2>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Statutory Framework & Judicial Mandate
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 text-[14.5px] leading-relaxed">
                {service.overview.map((para, i) => (
                  <p key={i} className="text-justify sm:text-left">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Quick 3-Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-[#c9a84c]/50 transition-all">
                <div className="w-9 h-9 rounded-lg bg-[#dbeafe] text-[#1d4ed8] flex items-center justify-center mb-3">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-bold text-[#0d1b3e] text-base mb-2">Constitutional Standing</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Subordinate judicial officers operate under the direct superintendence of the High Court pursuant to Articles 233, 234 & 235 of the Constitution.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-[#c9a84c]/50 transition-all">
                <div className="w-9 h-9 rounded-lg bg-[#fef3c7] text-[#b45309] flex items-center justify-center mb-3">
                  <BookMarked size={20} />
                </div>
                <h3 className="font-bold text-[#0d1b3e] text-base mb-2">Substantive Adjudication</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Adjudicating criminal offenses under Bharatiya Nyaya Sanhita (BNS) and civil disputes under Code of Civil Procedure (CPC) with statutory independence.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-[#c9a84c]/50 transition-all">
                <div className="w-9 h-9 rounded-lg bg-[#dcfce7] text-[#15803d] flex items-center justify-center mb-3">
                  <Award size={20} />
                </div>
                <h3 className="font-bold text-[#0d1b3e] text-base mb-2">Elevation Trajectory</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Meritorious service in the subordinate magistracy serves as the foundational pipeline for promotion to Higher Judicial Services and High Court Judge benches.
                </p>
              </div>
            </div>

            {/* Stages Preview */}
            <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2f63] text-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#c9a84c]">
                    Three-Stage Examination Roadmap
                  </h3>
                  <p className="text-xs text-gray-300">
                    How candidates are filtered and evaluated across consecutive rounds
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("eligibility")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c9a84c] hover:underline"
                >
                  <span>View Stage Details</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {service.stages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded bg-[#c9a84c]/20 text-[#c9a84c] text-[10px] font-bold uppercase tracking-wider mb-2">
                        {stage.step}
                      </span>
                      <h4 className="font-bold text-white text-sm mb-1">{stage.title}</h4>
                      <p className="text-xs text-gray-300 line-clamp-3 mb-3 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                    <div className="text-[11px] text-gray-400 border-t border-white/10 pt-2 flex items-center justify-between">
                      <span>Duration: {stage.duration}</span>
                      <span className="text-[#c9a84c] font-semibold">{stage.marks}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ELIGIBILITY & STAGES TAB */}
        {activeTab === "eligibility" && (
          <div className="space-y-10">
            {/* Eligibility Criteria Cards */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e]">
                    Statutory Eligibility Criteria
                  </h2>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Educational Qualifications, Age Bracket & Bar Requirements
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    Educational Qualification
                  </span>
                  <p className="text-sm font-semibold text-[#0d1b3e] mt-1.5 leading-relaxed">
                    {service.eligibility.education}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    Prescribed Age Limit
                  </span>
                  <p className="text-sm font-semibold text-[#0d1b3e] mt-1.5 leading-relaxed">
                    {service.eligibility.ageLimit}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    Bar Standing / Experience
                  </span>
                  <p className="text-sm font-semibold text-[#0d1b3e] mt-1.5 leading-relaxed">
                    {service.eligibility.experience}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    Citizenship & Standing
                  </span>
                  <p className="text-sm font-semibold text-[#0d1b3e] mt-1.5 leading-relaxed">
                    {service.eligibility.citizenship} (Clean police & Bar Council record)
                  </p>
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-blue-100 rounded-xl p-5">
                <h4 className="text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#1d4ed8]" />
                  <span>Mandatory Enrolment & Character Conditions</span>
                </h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  {service.eligibility.keyConditions.map((cond, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-1.5 flex-shrink-0" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stages Detail */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-bold text-[#0d1b3e]">
                  Detailed Examination Stages & Structure
                </h3>
              </div>

              <div className="space-y-5">
                {service.stages.map((stage, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:border-[#c9a84c]/50 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-[#0d1b3e] text-[#c9a84c] rounded-lg text-xs font-bold uppercase tracking-wider">
                          {stage.step}
                        </span>
                        <h4 className="text-lg font-bold text-[#0d1b3e]">{stage.title}</h4>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-600 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock size={13} className="text-[#c9a84c]" />
                          {stage.duration}
                        </span>
                        <span>•</span>
                        <span className="text-[#0d1b3e] font-bold">{stage.marks}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">
                        Evaluation Highlights & Qualifying Rules
                      </span>
                      <ul className="space-y-1.5 text-xs text-gray-700">
                        {stage.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-[#15803d] mt-0.5 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SYLLABUS & WEIGHTAGE TAB */}
        {activeTab === "syllabus" && (
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
                  <BookMarked size={22} />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e]">
                    Syllabus Architecture & Subject Modules
                  </h2>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Core Substantive Acts, Procedural Codes & Practical Drafting
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {service.subjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="bg-[#fafbfc] border border-gray-200 rounded-xl p-5 flex flex-col justify-between hover:border-[#c9a84c]/50 transition-all shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#0d1b3e]/10 text-[#0d1b3e]">
                          {sub.category}
                        </span>
                        <span className="text-xs font-bold text-[#c9a84c]">
                          {sub.weightage}
                        </span>
                      </div>

                      <h3 className="font-bold text-[#0d1b3e] text-base mb-3 leading-snug">
                        {sub.name}
                      </h3>

                      <div className="space-y-3 mb-4">
                        <div>
                          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                            High-Yield Legal Topics:
                          </span>
                          <ul className="space-y-1.5 text-xs text-gray-700">
                            {sub.keyTopics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0d1b3e] mt-1.5 flex-shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-200/80">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                        Recommended Bare Acts & Texts:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {sub.recommendedActs.map((act, i) => (
                          <span
                            key={i}
                            className="bg-white border border-gray-200 text-gray-700 px-2.5 py-0.5 rounded text-[11px] font-medium"
                          >
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STATE-WISE PATTERN TAB */}
        {activeTab === "states" && service.stateExams && (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
                  <Building2 size={22} />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e]">
                    State-Wise Examination Pattern Matrix
                  </h2>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    High Court Conducting Authorities, Mark Schemes & Unique Nuances
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {service.stateExams.map((st, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-gray-50/60 hover:bg-white hover:border-[#c9a84c]/50 transition-all shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3 mb-3">
                      <div>
                        <h3 className="font-bold text-base text-[#0d1b3e]">{st.state}</h3>
                        <span className="text-xs text-[#c9a84c] font-semibold">{st.examName}</span>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#0d1b3e] text-white">
                        {st.conductingBody}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <strong className="text-gray-700 uppercase tracking-wider text-[11px]">
                          Selection Blueprint:{" "}
                        </strong>
                        <span className="text-gray-800 font-medium">{st.selectionPattern}</span>
                      </div>
                      <div>
                        <strong className="text-gray-700 uppercase tracking-wider text-[11px]">
                          Exam Peculiarities & Tips:{" "}
                        </strong>
                        <span className="text-gray-600 leading-relaxed">{st.keyFeatures}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PREPARATION STRATEGY TAB */}
        {activeTab === "strategy" && (
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e]">
                    Chambers-Crafted Preparation Strategy
                  </h2>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Phased Milestones, Time Management & High-Scoring Techniques
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {service.strategyGuide.map((step, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl p-5 sm:p-6 bg-[#fafbfc] hover:border-[#c9a84c]/50 transition-all shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#c9a84c]/20 text-[#0d1b3e]">
                        {step.phase}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{step.title}</span>
                    </div>

                    <p className="text-sm font-semibold text-[#0d1b3e] mb-3">{step.focus}</p>

                    <div className="bg-white rounded-lg p-4 border border-gray-200/80">
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">
                        Key Recommendations & Execution Drills:
                      </span>
                      <ul className="space-y-2 text-xs text-gray-700">
                        {step.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-[#15803d] mt-0.5 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CAREER HIERARCHY TAB */}
        {activeTab === "hierarchy" && service.careerHierarchy && (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e]">
                    Subordinate to Constitutional Promotion Ladder
                  </h2>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Designations, Jurisdictional Thresholds & High Court Elevation
                  </p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-[#c9a84c] space-y-6">
                {service.careerHierarchy.map((c, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0d1b3e] border-2 border-[#c9a84c]" />
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#c9a84c]">
                          {c.rank}
                        </span>
                        <span className="text-xs font-semibold text-gray-500">{c.court}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0d1b3e] mb-1">{c.designation}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">{c.powers}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FAQS TAB */}
        {activeTab === "faqs" && (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
                  <HelpCircle size={22} />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e]">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Authoritative Answers to Common Judicial Aspirant Inquiries
                  </p>
                </div>
              </div>

              {/* FAQ Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search questions on syllabus, eligibility, new criminal laws, cut-offs..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#c9a84c] bg-gray-50"
                />
              </div>

              <div className="space-y-3">
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-4 text-left font-bold text-[#0d1b3e] text-xs sm:text-sm hover:bg-gray-50 gap-4"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp size={16} className="text-[#c9a84c] flex-shrink-0" />
                        ) : (
                          <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-xs sm:text-[13px] text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}

                {filteredFaqs.length === 0 && (
                  <p className="text-xs text-gray-500 text-center py-6">
                    No FAQs found matching &quot;{faqSearch}&quot;.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 4. OTHER POPULAR JUDICIAL SERVICES (CROSS-NAVIGATION) */}
        <div className="mt-14 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0d1b3e]">
                Explore Other Judicial Services
              </h3>
              <p className="text-xs text-gray-500">
                Explore guides for other judicial exams, syllabi, interview prep, and papers
              </p>
            </div>
            <Link
              href="/judiciary"
              className="text-xs font-bold text-[#c9a84c] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {otherServices.map((item, idx) => (
              <Link
                key={idx}
                href={`/judiciary/${item.slug}`}
                className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:border-[#c9a84c]/50 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="text-[#0d1b3e] group-hover:text-[#c9a84c] group-hover:scale-110 transition-all mb-3">
                    {getIcon(item.iconName, 22)}
                  </div>
                  <h4 className="text-xs font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors mb-1 leading-snug">
                    {item.shortTitle}
                  </h4>
                  <p className="text-[10.5px] text-gray-500 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="flex items-center gap-1 text-[11px] font-bold text-[#c9a84c] mt-3 uppercase tracking-wider">
                  <span>Explore</span>
                  <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 5. CHAMBERS CALL TO ACTION */}
        <div className="mt-12 bg-[#0d1b3e] text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
            <Scale size={280} strokeWidth={1} />
          </div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c9a84c]">
              ADVOCATE TUSHAR GARG CHAMBERS
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Targeted Legal Mentorship & Examination Strategy
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Seeking specialized guidance for HJS direct bar recruitment or judicial answer writing? Connect with our Supreme Court & High Court litigation chambers for strategic insights and professional consultation.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#0d1b3e] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all"
              >
                <span>Schedule Chambers Consultation</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

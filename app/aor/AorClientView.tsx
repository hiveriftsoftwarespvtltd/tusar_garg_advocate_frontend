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
  ChevronDown,
  ChevronUp,
  Layers,
  Award,
  Search,
  Building,
  HelpCircle,
  Clock,
  Compass,
  FileCode,
  AlertCircle
} from "lucide-react";
import TabScroller from "@/app/components/TabScroller";

type TabType = "all" | "overview" | "statutory" | "qualification" | "services" | "workflow" | "faqs";

export default function AorClientView() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      q: "What is an Advocate-on-Record (AOR) in the Supreme Court of India?",
      a: "An Advocate-on-Record (AOR) is an advocate who is exclusively entitled under Order IV of the Supreme Court Rules 2013 and Article 145 of the Constitution of India to file a Vakalatnama, petition, writ, SLP, or document on behalf of a party before the Supreme Court of India."
    },
    {
      q: "Can any High Court or District Court lawyer file a case in the Supreme Court?",
      a: "No. While any advocate enrolled with a State Bar Council can appear and argue in the Supreme Court upon being instructed, ONLY an Advocate-on-Record (AOR) is legally authorized to file pleadings, sign petitions, and represent clients before the Supreme Court Registry."
    },
    {
      q: "Can a Senior Advocate file a petition in the Supreme Court?",
      a: "No. As per Supreme Court Rules, Senior Advocates are designated by the court for oral advocacy and cannot file a Vakalatnama, petition, or draft directly. They appear strictly upon being briefed and instructed by an Advocate-on-Record."
    },
    {
      q: "What qualifications are required to become an Advocate-on-Record?",
      a: "To become an AOR, an advocate must have at least 4 years of standing at the Bar, complete 1 year of mandatory training under an approved Senior AOR, and pass the rigorous Supreme Court Advocate-on-Record Examination conducted by the Supreme Court of India covering 4 subjects: Practice & Procedure, Drafting, Leading Cases, and Professional Ethics."
    },
    {
      q: "What is a Caveat Petition in the Supreme Court?",
      a: "A Caveat Petition is a protective legal filing lodged under Order XVIII of Supreme Court Rules 2013 by an AOR. It ensures that if the opposing party files a Special Leave Petition (SLP) or appeal, the Supreme Court cannot pass any ex-parte interim stay order without giving prior written notice and hearing to the Caveator."
    },
    {
      q: "What is the difference between a Review Petition and a Curative Petition?",
      a: "A Review Petition (under Art 137) requests the Supreme Court bench to review its own judgment for errors apparent on the face of the record within 30 days. A Curative Petition is the absolute final remedy evolved in Rupa Ashok Hurra (2002), filed after dismissal of a Review Petition, requiring certificate by a Senior Advocate establishing breach of natural justice or bias."
    }
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      !searchQuery.trim() ||
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#071126] text-white py-16 px-4 sm:px-6 overflow-hidden border-b border-[#c9a84c]/20">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-[#c9a84c]_1px,transparent_1px] [background-size:24px_24px]" />

        <div className="max-w-[1350px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[12.5px] font-medium text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#c9a84c] font-semibold">Advocate-on-Record (AOR)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Title & Badge */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                <Scale size={13} />
                <span>SUPREME COURT OF INDIA • CONSTITUTIONAL ENTITLEMENT</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Advocate-on-Record (AOR)
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
                Exclusive statutory entitlement to file petitions, vakalatnama, and pleadings before the <strong className="text-white font-medium">Supreme Court of India</strong> under Article 145 of the Constitution and Order IV of Supreme Court Rules 2013.
              </p>

              {/* Stat Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-base font-serif">Article 145</div>
                  <div className="text-gray-300 text-[10.5px] uppercase tracking-wider font-semibold">Constitutional Rule</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-base font-serif">Order IV</div>
                  <div className="text-gray-300 text-[10.5px] uppercase tracking-wider font-semibold">SC Rules 2013</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-base font-serif">Exclusive Right</div>
                  <div className="text-gray-300 text-[10.5px] uppercase tracking-wider font-semibold">Filing Entitlement</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/30 text-center">
                  <div className="text-[#c9a84c] font-bold text-base font-serif">Apex Benches</div>
                  <div className="text-gray-300 text-[10.5px] uppercase tracking-wider font-semibold">Forum</div>
                </div>
              </div>
            </div>

            {/* Chamber Card */}
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
                  Direct Supreme Court filings, urgent SLP stay motions, writ petitions, caveats, and registry objection clearing.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+919818000000"
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

      {/* 2. STICKY TAB SCROLLER */}
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
              <span>All Information</span>
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
              <span>AOR Concept & Meaning</span>
            </button>

            <button
              onClick={() => setActiveTab("statutory")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                activeTab === "statutory"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md border border-[#c9a84c]/30"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              <Scale size={15} />
              <span>Statutory Entitlement (Order IV)</span>
            </button>

            <button
              onClick={() => setActiveTab("qualification")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                activeTab === "qualification"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md border border-[#c9a84c]/30"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              <Award size={15} />
              <span>Qualifications & AOR Exam</span>
            </button>

            <button
              onClick={() => setActiveTab("services")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                activeTab === "services"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md border border-[#c9a84c]/30"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              <Gavel size={15} />
              <span>AOR Chamber Services</span>
            </button>

            <button
              onClick={() => setActiveTab("workflow")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                activeTab === "workflow"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md border border-[#c9a84c]/30"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              <Layers size={15} />
              <span>Supreme Court Workflow</span>
            </button>

            <button
              onClick={() => setActiveTab("faqs")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12.5px] font-bold transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                activeTab === "faqs"
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow-md border border-[#c9a84c]/30"
                  : "text-gray-600 hover:bg-gray-100 hover:text-[#0d1b3e]"
              }`}
            >
              <HelpCircle size={15} />
              <span>FAQs</span>
            </button>
          </TabScroller>

          {/* Quick Search */}
          <div className="relative w-full xl:w-72 shrink-0">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search AOR rules or questions..."
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

        {/* SECTION 1: OVERVIEW & CONCEPT */}
        {(activeTab === "all" || activeTab === "overview") && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-[#c9a84c] text-[11px] font-bold uppercase tracking-widest mb-2">
              <Scale size={14} />
              <span>CONSTITUTIONAL SCHEME</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e] mb-4">
              What is an Advocate-on-Record (AOR)?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-6">
              In the legal system of India, an <strong>Advocate-on-Record (AOR)</strong> is an advocate who is exclusively entitled under Order IV of the <strong>Supreme Court Rules 2013</strong> (framed pursuant to Article 145 of the Constitution of India) to file petitions, vakalatnamas, applications, and pleadings directly before the Supreme Court of India. No other advocate — regardless of seniority, experience, or enrolment with State Bar Councils — has the legal authority to file a matter in the Supreme Court without an AOR.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <span className="text-[10.5px] font-bold text-[#c9a84c] uppercase tracking-wider block mb-1">
                  EXCLUSIVITY OF FILING
                </span>
                <h4 className="font-serif font-bold text-base text-[#0d1b3e] mb-1">
                  Only AOR Can File
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Only an AOR can sign and submit paper-books, Vakalatnama, and affidavits in Supreme Court Registry.
                </p>
              </div>

              <div className="bg-amber-50/60 border border-[#c9a84c]/30 rounded-xl p-4">
                <span className="text-[10.5px] font-bold text-[#c9a84c] uppercase tracking-wider block mb-1">
                  REGISTRY ACCOUNTABILITY
                </span>
                <h4 className="font-serif font-bold text-base text-[#0d1b3e] mb-1">
                  Direct Court Officer
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  An AOR is directly accountable to the Supreme Court Benches and Registry for correctness of pleadings.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <span className="text-[10.5px] font-bold text-[#c9a84c] uppercase tracking-wider block mb-1">
                  SENIOR ADVOCATE BRIEFING
                </span>
                <h4 className="font-serif font-bold text-base text-[#0d1b3e] mb-1">
                  Briefs Senior Counsel
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Senior Advocates appear and argue before Benches strictly upon being instructed and briefed by an AOR.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: STATUTORY ENTITLEMENT & SC RULES */}
        {(activeTab === "all" || activeTab === "statutory") && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                STATUTORY FRAMEWORK
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                Key Mandates under Supreme Court Rules 2013 (Order IV)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center font-bold text-sm mb-4 border border-[#c9a84c]/30">
                  01
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                  Order IV Rule 4
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  No advocate other than an Advocate-on-Record shall appear, plead and act for a party in any matter before the Supreme Court unless instructed by an AOR.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center font-bold text-sm mb-4 border border-[#c9a84c]/30">
                  02
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                  Delhi Chamber Mandate
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  An AOR must maintain an office within 16 kilometers of the Supreme Court of India building in Delhi and employ a registered Supreme Court clerk.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center font-bold text-sm mb-4 border border-[#c9a84c]/30">
                  03
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                  Vakalatnama Responsibility
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  An AOR who files a Vakalatnama is personally responsible to the Court for all fees, registry compliances, and truthfulness of documents filed.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center font-bold text-sm mb-4 border border-[#c9a84c]/30">
                  04
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                  Supreme Court Roll
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  The Registrar maintains an official Roll of Advocates-on-Record. Only advocates enrolled on this Roll can file matters in the Apex Court.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: QUALIFICATIONS & AOR EXAM */}
        {(activeTab === "all" || activeTab === "qualification") && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                SELECTION & ENROLMENT
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                How an Advocate Becomes an Advocate-on-Record (AOR)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <span className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-widest block mb-1">STEP 01</span>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">4 Years Bar Standing</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  The advocate must have completed a minimum of 4 years of continuous active practice at the Bar after Bar Council enrolment.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <span className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-widest block mb-1">STEP 02</span>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">1 Year AOR Training</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Mandatory 1 year of continuous training under an approved Senior Advocate-on-Record who has at least 10 years of standing as an AOR.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <span className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-widest block mb-1">STEP 03</span>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">AOR Examination</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Passing the Supreme Court AOR Exam conducted by the Board of Examiners covering 4 papers: Practice & Procedure, Drafting, Leading Cases & Professional Ethics.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <span className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-widest block mb-1">STEP 04</span>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">Supreme Court Enrolment</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Signing the Supreme Court Roll of Advocates-on-Record, setting up an office in Delhi, and securing official AOR Code from the Supreme Court Registry.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: AOR CHAMBER SERVICES */}
        {(activeTab === "all" || activeTab === "services") && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                CHAMBER PRACTICE
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                Services Offered by Advocate Tushar Garg (AOR Chamber)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e]/5 border border-[#c9a84c]/30 text-[#0d1b3e] flex items-center justify-center font-bold text-sm mb-3">
                  <Scale size={20} className="text-[#c9a84c]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                  Special Leave Petitions (SLP under Art 136)
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Drafting and filing SLPs against High Court final judgments or interlocutory stay orders in civil, criminal, commercial, and service disputes.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e]/5 border border-[#c9a84c]/30 text-[#0d1b3e] flex items-center justify-center font-bold text-sm mb-3">
                  <ShieldCheck size={20} className="text-[#c9a84c]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                  Article 32 Writ Petitions
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Direct constitutional writ filings in the Supreme Court for enforcement of Part III Fundamental Rights, Habeas Corpus, Mandamus, and Certiorari.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e]/5 border border-[#c9a84c]/30 text-[#0d1b3e] flex items-center justify-center font-bold text-sm mb-3">
                  <FileText size={20} className="text-[#c9a84c]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                  Caveat Petitions (Order XVIII)
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Filing protective Caveat petitions in the Supreme Court to prevent opponents from obtaining ex-parte interim stay orders without prior notice.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e]/5 border border-[#c9a84c]/30 text-[#0d1b3e] flex items-center justify-center font-bold text-sm mb-3">
                  <Gavel size={20} className="text-[#c9a84c]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                  Review & Curative Petitions
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Drafting Article 137 Review Petitions and Curative Petitions before Supreme Court benches against adverse rulings.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e]/5 border border-[#c9a84c]/30 text-[#0d1b3e] flex items-center justify-center font-bold text-sm mb-3">
                  <Clock size={20} className="text-[#c9a84c]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                  Urgent Listing Motions
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Oral mentioning before the Chief Justice Court Bench for urgent item listing, interim stay, or emergency bail protection.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-[#c9a84c] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0d1b3e]/5 border border-[#c9a84c]/30 text-[#0d1b3e] flex items-center justify-center font-bold text-sm mb-3">
                  <Building size={20} className="text-[#c9a84c]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#0d1b3e] mb-2">
                  Transfer Petitions (Civil & Criminal)
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Filing Transfer Petitions under Sec 25 CPC / Sec 406 CrPC to transfer matrimonial or criminal trials from one state to another.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: WORKFLOW */}
        {(activeTab === "all" || activeTab === "workflow") && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                LITIGATION ROADMAP
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                Step-by-Step Supreme Court Litigation Workflow
              </h3>
            </div>

            <div className="relative border-l-2 border-[#c9a84c]/40 ml-4 sm:ml-8 space-y-6 py-2">
              {[
                {
                  step: "Stage 01",
                  title: "Pre-Filing Evaluation & Limitation Audit",
                  desc: "Examining High Court judgment, calculating statutory limitation (90 days for SLP), and drafting Synopsis & List of Dates."
                },
                {
                  step: "Stage 02",
                  title: "Drafting Supreme Court Paper-Book",
                  desc: "Formulating Question of Law, Grounds, Prayer, and Interlocutory Applications (IAs) for ex-parte stay per SC Rules 2013."
                },
                {
                  step: "Stage 03",
                  title: "AOR E-Filing & Diary Number Generation",
                  desc: "Electronic filing on Supreme Court AOR Portal, paying court fees, and obtaining official Diary Number."
                },
                {
                  step: "Stage 04",
                  title: "Curative Registry Defect Curing",
                  desc: "Inspecting and clearing procedural Registry objections within statutory 28-day cure period."
                },
                {
                  step: "Stage 05",
                  title: "Motion Day Listing & Oral Advocacy",
                  desc: "Arguing before Presiding Bench on Motion Monday/Friday to secure Notice, Interim Stay, or Status Quo."
                },
                {
                  step: "Stage 06",
                  title: "Pleadings Completion & Final Hearing",
                  desc: "Serving Notice on Respondents, reviewing Counter-Affidavit, filing Rejoinder, and arguing before Division/Larger Bench."
                }
              ].map((step, idx) => (
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
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 6: FAQS */}
        {(activeTab === "all" || activeTab === "faqs") && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase block mb-1">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                Supreme Court AOR Practice FAQs
              </h3>
            </div>

            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-[#0d1b3e] hover:text-[#c9a84c] transition-colors gap-4"
                    >
                      <span className="text-base sm:text-lg">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="text-[#c9a84c] shrink-0" />
                      ) : (
                        <ChevronDown size={18} className="text-gray-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
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
                <span>SUPREME COURT ADVOCATE-ON-RECORD CHAMBER</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-white">
                Require Supreme Court AOR Representation?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Consult Advocate Tushar Garg (Advocate-on-Record, Supreme Court of India) for urgent Special Leave Petitions (SLPs), Writ Petitions, Caveats, and court advocacy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href="tel:+919818000000"
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

"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { 
  Building2, 
  Calendar, 
  Scale, 
  Search, 
  FileText, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Filter
} from "lucide-react";
import { judgmentsComprehensiveData, JudgmentRecord } from "../../lib/data/judgmentsComprehensiveData";

interface JudgmentItem {
  _id: string;
  title: string;
  courtName: string;
  courtTier: "Supreme Court" | "High Court";
  caseNumber: string;
  date: string;
  bench: string;
  subject: string;
  summary: string;
  officialSource: string;
}

export default function LatestJudgments() {
  const [selectedCourt, setSelectedCourt] = useState<string>("All");
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Seed with top landmark and recent judgments from comprehensive dataset
  const verifiedJudgmentsList: JudgmentItem[] = useMemo(() => {
    return judgmentsComprehensiveData.slice(0, 18).map(j => ({
      _id: j._id,
      title: j.title,
      courtName: j.courtName,
      courtTier: (j.courtTier === "Supreme Court" ? "Supreme Court" : "High Court"),
      caseNumber: j.caseNumber,
      date: j.date,
      bench: j.bench,
      subject: j.subject,
      summary: j.summary,
      officialSource: j.officialSource
    }));
  }, []);

  // Filter logic for homepage showcase
  const filteredJudgments = useMemo(() => {
    return verifiedJudgmentsList.filter((item) => {
      // Court filter
      const matchesCourt =
        selectedCourt === "All" ||
        (selectedCourt === "Supreme Court" && item.courtTier === "Supreme Court") ||
        (selectedCourt === "High Courts" && item.courtTier === "High Court");

      // Subject filter
      const matchesSubject =
        selectedSubject === "All" || item.subject.toLowerCase() === selectedSubject.toLowerCase();

      // Search query
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.caseNumber.toLowerCase().includes(query) ||
        item.subject.toLowerCase().includes(query) ||
        item.bench.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query);

      return matchesCourt && matchesSubject && matchesQuery;
    });
  }, [verifiedJudgmentsList, selectedCourt, selectedSubject, searchQuery]);

  return (
    <section className="py-20 bg-[#F8F7F3] border-b border-[#E7E4DC]">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E7E4DC] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101D35]/5 border border-[#101D35]/10 text-[#101D35] text-[11px] font-bold tracking-widest uppercase mb-3">
              <Scale size={12} className="text-[#B69A63]" />
              VERIFIED JUDICIAL DECISIONS &amp; ORDERS
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#101D35] tracking-tight">
              Latest &amp; Important Judgments
            </h2>
            <p className="text-sm text-[#737B88] max-w-2xl mt-2 font-normal leading-relaxed">
              Researched decisions and authoritative precedents from the Supreme Court of India and High Courts across major areas of legal practice.
            </p>
          </div>

          <Link
            href="/judgments"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#101D35] hover:bg-[#B69A63] text-white hover:text-[#101D35] text-xs font-bold uppercase tracking-wider transition-all shadow-xs shrink-0 self-start md:self-auto"
          >
            <span>Complete Judgments Archive (500+)</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-[#E7E4DC] rounded-2xl p-4 sm:p-5 mb-8 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737B88]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search judgment title, citation, or legal subject..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#F8F7F3] border border-[#E7E4DC] rounded-xl text-xs sm:text-sm text-[#101D35] placeholder-[#737B88] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B69A63]/50 transition-all font-medium"
              />
            </div>

            {/* Court Tier Filter */}
            <div className="flex items-center gap-1 bg-[#F8F7F3] p-1 rounded-xl border border-[#E7E4DC] w-full md:w-auto overflow-x-auto">
              {["All", "Supreme Court", "High Courts"].map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setSelectedCourt(tier)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCourt === tier
                      ? "bg-[#101D35] text-[#B69A63] shadow-xs"
                      : "text-[#737B88] hover:text-[#101D35]"
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>

          </div>

          {/* Quick Subject Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 border-t border-[#E7E4DC]/60 no-scrollbar text-xs">
            <span className="text-[11px] font-bold text-[#737B88] uppercase tracking-wider shrink-0 mr-1">
              Category:
            </span>
            {["All", "Constitutional Law", "Criminal Law", "Civil Litigation", "Corporate Law", "Tax Law", "Arbitration Law", "Insolvency & Bankruptcy"].map((subj) => (
              <button
                key={subj}
                type="button"
                onClick={() => setSelectedSubject(subj)}
                className={`px-3 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-colors ${
                  selectedSubject === subj
                    ? "bg-[#B69A63] text-[#101D35]"
                    : "bg-[#F8F7F3] text-[#737B88] hover:text-[#101D35] border border-[#E7E4DC]"
                }`}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>

        {/* Judgments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJudgments.slice(0, 6).map((item) => (
            <div
              key={item._id}
              className="bg-white border border-[#E7E4DC] hover:border-[#B69A63]/70 rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Court & Date Strip */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    item.courtTier === "Supreme Court"
                      ? "bg-[#101D35] text-[#B69A63]"
                      : "bg-[#F8F7F3] border border-[#E7E4DC] text-[#101D35]"
                  }`}>
                    {item.courtName}
                  </span>
                  <span className="text-[11px] font-semibold text-[#737B88] flex items-center gap-1">
                    <Calendar size={11} className="text-[#B69A63]" />
                    {item.date}
                  </span>
                </div>

                {/* Case Title */}
                <Link href={`/judgments/${item._id}`}>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors leading-snug mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                </Link>

                {/* Case Number */}
                <div className="text-[11px] font-semibold text-[#737B88] mb-2 flex items-center gap-1.5">
                  <FileText size={11} className="text-[#B69A63] shrink-0" />
                  <span className="truncate">{item.caseNumber}</span>
                </div>

                {/* Bench / Coram */}
                <div className="text-[11px] text-[#737B88] mb-3 line-clamp-1">
                  <strong>Coram:</strong> {item.bench}
                </div>

                {/* Subject Area Badge */}
                <div className="mb-3">
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase bg-[#B69A63]/10 text-[#B69A63] px-2.5 py-0.5 rounded">
                    {item.subject}
                  </span>
                </div>

                {/* Short Case Summary */}
                <p className="text-xs text-[#202632] line-clamp-3 leading-relaxed font-normal mb-4 pt-3 border-t border-[#E7E4DC]/60">
                  {item.summary}
                </p>
              </div>

              {/* Footer & Authentic Official Source Link */}
              <div className="pt-4 border-t border-[#E7E4DC] mt-auto">
                <p className="text-[10px] text-[#737B88] truncate mb-3" title={item.officialSource}>
                  Source: {item.officialSource}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/judgments/${item._id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors"
                  >
                    <span>Read Full Case Brief</span>
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B69A63] bg-[#B69A63]/10 px-2 py-0.5 rounded">
                    Verified Precedent
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA to Judgments Archive */}
        <div className="mt-12 text-center">
          <Link
            href="/judgments"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#101D35] hover:bg-[#B69A63] text-white hover:text-[#101D35] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <span>Explore All 500 Judgments &amp; Precedents</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}

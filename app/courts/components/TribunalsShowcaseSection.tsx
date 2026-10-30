"use client";

import { useState } from "react";
import { Gavel, ExternalLink, ArrowRight, ShieldCheck, Scale, Globe, Building2, Search } from "lucide-react";
import Link from "next/link";
import { tribunalsComprehensiveData, TribunalDetails } from "../../../lib/data/courtsComprehensiveData";

export default function TribunalsShowcaseSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTribunals = tribunalsComprehensiveData.filter((t) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      t.name.toLowerCase().includes(q) ||
      t.shortName.toLowerCase().includes(q) ||
      t.subjectMatter.toLowerCase().includes(q) ||
      t.governingAct.toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-16 bg-white border-b border-[#E7E4DC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101D35]/5 border border-[#101D35]/15 text-[#101D35] text-[11px] font-bold tracking-widest uppercase mb-3">
            <Gavel size={13} className="text-[#B69A63]" />
            SPECIALIZED QUASI-JUDICIAL AUTHORITIES
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#101D35] tracking-tight">
            Statutory & Appellate Tribunals of India
          </h2>
          <div className="w-16 h-0.5 bg-[#B69A63] my-3 rounded-full" />
          <p className="text-sm text-[#737B88] leading-relaxed">
            Statutory tribunals established under Article 323A & 323B of the Constitution and specialized parliamentary enactments, exercising appellate and original jurisdictions with statutory appeals lying directly before the Supreme Court of India.
          </p>
        </div>

        {/* Quick Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737B88]" />
            <input
              type="text"
              placeholder="Search Tribunal (e.g., NCLAT, NGT, NCLT, CAT, ITAT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#F8F7F3] border border-[#E7E4DC] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B69A63]/50 text-[#101D35] placeholder-[#737B88] font-medium transition-all"
            />
          </div>
        </div>

        {/* Tribunals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTribunals.map((t) => (
            <div
              key={t.id}
              className="bg-[#F8F7F3] border border-[#E7E4DC] hover:border-[#B69A63]/70 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 bg-[#101D35] text-[#B69A63] text-[11px] font-extrabold tracking-wider uppercase rounded-md">
                    {t.shortName}
                  </span>
                  <span className="text-[11px] font-semibold text-[#737B88]">
                    Estd. {t.establishedYear}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-serif font-bold text-[#101D35] group-hover:text-[#B69A63] transition-colors leading-snug mb-2">
                  {t.name}
                </h3>

                {/* Governing Act */}
                <div className="text-[11.5px] text-[#202632] font-semibold mb-2 line-clamp-1">
                  {t.governingAct}
                </div>

                {/* Subject Matter */}
                <p className="text-xs text-[#737B88] line-clamp-2 leading-relaxed mb-4">
                  {t.subjectMatter}
                </p>

                {/* Statutory Appeal to SC Box */}
                <div className="bg-white border border-[#E7E4DC] rounded-xl p-3 text-[11px] text-[#202632] mb-4">
                  <span className="font-bold text-[#B69A63] block mb-0.5">
                    Appellate Route to Supreme Court:
                  </span>
                  <span className="text-[#737B88] leading-tight block">
                    {t.appealToSupremeCourtSection}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-[#E7E4DC] flex items-center justify-between gap-2">
                <a
                  href={t.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101D35] hover:text-[#B69A63] transition-colors"
                >
                  <Globe size={13} className="text-[#B69A63]" />
                  <span>{t.displayUrl}</span>
                  <ExternalLink size={10} className="opacity-70" />
                </a>

                <Link
                  href="/tribunals"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B69A63] hover:text-[#101D35] transition-colors"
                >
                  <span>Tribunals Hub</span>
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Tribunals Link */}
        <div className="text-center mt-10">
          <Link
            href="/tribunals"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#101D35] text-white hover:bg-[#B69A63] hover:text-[#101D35] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <span>Explore All Indian Tribunals & Commissions</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}

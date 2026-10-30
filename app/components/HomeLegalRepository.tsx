"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  BookOpen, 
  Scale, 
  Landmark, 
  FileText, 
  Search, 
  ArrowRight,
  Database,
  ScrollText,
  ShieldAlert
} from "lucide-react";

export default function HomeLegalRepository() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/bare-acts?q=${encodeURIComponent(query.trim())}`);
  };

  const repositoryCards = [
    {
      id: "bare-acts",
      title: "BARE ACTS",
      subtitle: "Central & State Statutory Enactments",
      desc: "Complete, searchable database of Indian statutory legislation, codified provisions, the Bharatiya Nyaya Sanhita (BNS), BNSS, BSA, and commercial enactments.",
      icon: ScrollText,
      link: "/bare-acts",
      cta: "Access Bare Acts Database",
      tag: "Statutory Law",
    },
    {
      id: "judgments",
      title: "JUDGMENTS",
      subtitle: "Apex Court & High Court Precedents",
      desc: "Searchable archive of landmark constitutional, civil, criminal and commercial judicial determinations from the Supreme Court of India and High Courts.",
      icon: Scale,
      link: "/judgments",
      cta: "Search Judgment Archive",
      tag: "Case Law",
    },
    {
      id: "courts",
      title: "INDIAN COURTS DIRECTORY",
      subtitle: "Constitutional & Subordinate Judiciary",
      desc: "State-wise directory of Indian constitutional courts, district judiciary, specialized appellate tribunals, and regional statutory benches across all 28 states.",
      icon: Landmark,
      link: "/all-courts",
      cta: "Explore Judicial Directory",
      tag: "Directory",
    },
    {
      id: "articles",
      title: "LEGAL ARTICLES",
      subtitle: "Scholarly Analysis & Statutory Notes",
      desc: "In-depth case notes, statutory commentaries, procedural explainers, and jurisprudential analyses authored for legal practitioners and judicial scholars.",
      icon: BookOpen,
      link: "/articles",
      cta: "Read Legal Articles",
      tag: "Research",
    },
  ];

  return (
    <section className="bg-[#101D35] text-white py-16 sm:py-20 border-b border-[#E7E4DC]/20 relative overflow-hidden">
      
      {/* Subtle Background Geometry */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#B69A63]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#B69A63]/30 px-3.5 py-1 rounded-full mb-3">
            <Database size={13} className="text-[#B69A63]" />
            <span className="text-[#B69A63] text-[11px] font-bold tracking-widest uppercase">
              COMPREHENSIVE JUDICIAL & STATUTORY RESOURCES
            </span>
          </div>
          <h2 className="font-serif text-[28px] sm:text-[36px] font-bold uppercase tracking-tight text-white">
            INDIAN LEGAL KNOWLEDGE & RESEARCH REPOSITORY
          </h2>
          <div className="w-14 h-0.5 bg-[#B69A63] mx-auto mt-3 mb-4" />
          <p className="text-[#F8F7F3]/80 text-[14px] sm:text-[15.5px] leading-relaxed">
            Public institutional repository providing structured access to primary Indian legislation, reported judicial precedents, judicial directory registries, and academic research.
          </p>
        </div>

        {/* Prominent Research Search Field (Prompt Section 10 Requirement) */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-14">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Indian Laws, Bare Acts, Judgments and Resources..."
              className="w-full bg-[#202632] border-2 border-[#B69A63]/50 focus:border-[#B69A63] rounded-2xl py-3.5 sm:py-4 pl-10 sm:pl-12 pr-16 sm:pr-32 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none shadow-xl truncate"
            />
            <Search size={18} className="absolute left-3.5 sm:left-4 top-3.5 sm:top-4 text-[#B69A63]" />
            <button
              type="submit"
              aria-label="Submit Search"
              className="absolute right-2 sm:right-2.5 top-2 sm:top-2.5 bottom-2 sm:bottom-2.5 px-3.5 sm:px-5 rounded-xl bg-[#B69A63] hover:bg-[#CBB484] text-[#101D35] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
            >
              <span className="hidden sm:inline">Search</span>
              <ArrowRight size={14} />
            </button>
          </form>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5 text-xs text-[#F8F7F3]/70">
            <span className="text-white/40 text-[11px] uppercase tracking-wider font-semibold">Suggested:</span>
            {["Constitution of India", "Bharatiya Nyaya Sanhita (BNS)", "Arbitration Act", "IBC 2016", "Supreme Court SLP Rules", "Companies Act"].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setQuery(tag);
                  router.push(`/bare-acts?q=${encodeURIComponent(tag)}`);
                }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 rounded-md text-[11px] text-[#CBB484] hover:text-white transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Large Professional Resource Cards (Prompt Section 10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {repositoryCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-[#202632]/85 border border-[#B69A63]/30 hover:border-[#B69A63] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#101D35] border border-[#B69A63]/40 flex items-center justify-center group-hover:bg-[#B69A63] transition-colors duration-300">
                      <Icon size={22} className="text-[#B69A63] group-hover:text-[#101D35] transition-colors duration-300" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#B69A63] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-[#B69A63] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#CBB484] mb-3">
                    {card.subtitle}
                  </p>

                  <p className="text-xs text-[#F8F7F3]/75 leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <Link
                  href={card.link}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-semibold text-[#B69A63] group-hover:text-white transition-colors"
                >
                  <span>{card.cta}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

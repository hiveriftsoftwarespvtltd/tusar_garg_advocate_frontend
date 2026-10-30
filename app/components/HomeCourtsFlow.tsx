"use client";

import Link from "next/link";
import { 
  Landmark, 
  Scale, 
  Building2, 
  Building, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Gavel,
  BookOpen,
  MapPin,
  FileCheck2,
  GitBranch
} from "lucide-react";

export default function HomeCourtsFlow() {
  const tiers = [
    {
      step: "01",
      level: "TRIAL & DISTRICT JUDICIARY",
      title: "Subordinate District Courts",
      badge: "700+ District Complexes",
      icon: Building2,
      desc: "Trial courts of original jurisdiction including Principal District & Sessions Judges, Chief Judicial Magistrates, Civil Judges, and Special Courts (Commercial, POCSO, NDPS).",
      features: [
        "Original Civil & Criminal Suits",
        "Sessions Trials, Injunctions & Bail",
        "Commercial & Motor Accidents Claims",
        "e-Courts Case Status & Cause Lists"
      ],
      href: "/district-courts",
      ctaText: "Explore District Courts",
      bgClass: "bg-white",
      borderClass: "border-gray-200",
      accentColor: "text-blue-700",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      step: "02",
      level: "QUASI-JUDICIAL AUTHORITIES",
      title: "Specialized Tribunals & Fora",
      badge: "27+ Statutory Authorities",
      icon: Layers,
      desc: "Specialized appellate tribunals adjudicating corporate, insolvency, taxation, environmental, and regulatory disputes with direct statutory appeal pathways to the Supreme Court.",
      features: [
        "NCLT & NCLAT (IBC & Company Law)",
        "NGT (Environment & Forests)",
        "ITAT, CESTAT, TDSAT & APTEL",
        "Central Administrative Tribunal (CAT)"
      ],
      href: "/tribunals",
      ctaText: "Explore Tribunals & Fora",
      bgClass: "bg-white",
      borderClass: "border-gray-200",
      accentColor: "text-purple-700",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      step: "03",
      level: "STATE CONSTITUTIONAL COURTS",
      title: "25 High Courts of India",
      badge: "25 Constitutional Benches",
      icon: Landmark,
      desc: "Apex judicial institutions at the State level exercising constitutional writ jurisdiction under Article 226/227, supervisory control over subordinate courts, and first appellate powers.",
      features: [
        "Writ Petitions (Article 226 & 227)",
        "First & Second Civil/Criminal Appeals",
        "Commercial Division & Revisions",
        "Territorial Jurisdiction over 36 States & UTs"
      ],
      href: "/high-courts",
      ctaText: "Explore 25 High Courts",
      bgClass: "bg-white",
      borderClass: "border-gray-200",
      accentColor: "text-[#c9a84c]",
      badgeBg: "bg-amber-50 text-amber-800 border-amber-200"
    },
    {
      step: "04",
      level: "APEX CONSTITUTIONAL COURT",
      title: "Supreme Court of India",
      badge: "Final Appellate Authority",
      icon: Scale,
      desc: "The highest judicial authority of India at Tilak Marg, New Delhi. Exclusive filings by Advocates-on-Record (AOR) under Article 145 and Supreme Court Rules 2013.",
      features: [
        "Special Leave Petitions (SLP Article 136)",
        "Constitutional Writs (Article 32)",
        "Statutory & Commercial Appeals",
        "AOR Chambers Drafting & Enrolment"
      ],
      href: "/aor",
      ctaText: "AOR Representation & SLPs",
      bgClass: "bg-[#0d1b3e] text-white",
      borderClass: "border-[#c9a84c]/50 shadow-xl",
      accentColor: "text-[#c9a84c]",
      badgeBg: "bg-[#c9a84c]/20 text-[#c9a84c] border-[#c9a84c]/40"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-white py-14 sm:py-20 border-b border-gray-200 relative overflow-hidden">
      
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#0d1b3e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Eyebrow & Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0d1b3e]/5 border border-[#c9a84c]/40 px-4 py-1.5 rounded-full mb-3.5 shadow-sm">
            <GitBranch size={13} className="text-[#c9a84c]" />
            <span className="text-[#0d1b3e] text-[11px] font-bold tracking-widest uppercase">
              INDIAN JUDICIAL ARCHITECTURE & APPELLATE FLOW
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0d1b3e] tracking-tight leading-tight">
            The Unified Court Hierarchy of India
          </h2>

          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-4 mb-4 rounded-full" />

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From Subordinate District Judiciary and Specialized Tribunals through the 25 High Courts to the Supreme Court of India — a seamless appellate pathway navigated by Advocate-on-Record Chambers.
          </p>
        </div>

        {/* ── Key National Judiciary Metrics Strip ── */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 text-center">
            
            <div className="p-2">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#0d1b3e]">1</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Apex Court</p>
              <p className="text-[11px] text-[#c9a84c] font-medium">Supreme Court of India</p>
            </div>

            <div className="p-2 pt-4 sm:pt-2">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#0d1b3e]">25</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">High Courts</p>
              <p className="text-[11px] text-gray-600 font-medium">State Benches</p>
            </div>

            <div className="p-2 pt-4 sm:pt-2">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#0d1b3e]">700+</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">District Courts</p>
              <p className="text-[11px] text-gray-600 font-medium">Subordinate Judiciary</p>
            </div>

            <div className="p-2 pt-4 sm:pt-2">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#0d1b3e]">27+</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Tribunals</p>
              <p className="text-[11px] text-gray-600 font-medium">Quasi-Judicial Fora</p>
            </div>

            <div className="col-span-2 md:col-span-1 p-2 pt-4 sm:pt-2">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#0d1b3e]">36</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">States & UTs</p>
              <p className="text-[11px] text-gray-600 font-medium">National Coverage</p>
            </div>

          </div>
        </div>

        {/* ── 4-Tier Interactive Courts Flow Grid (From Ground to Apex) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            const isApex = tier.step === "04";

            return (
              <div
                key={tier.step}
                className={`rounded-2xl border ${tier.borderClass} ${tier.bgClass} p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative group`}
              >
                {/* Step Pill & Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
                      TIER {tier.step}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${tier.badgeBg}`}>
                      {tier.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isApex ? "bg-[#c9a84c] text-[#0d1b3e]" : "bg-gray-100 text-[#0d1b3e]"
                    }`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a84c] block">
                        {tier.level}
                      </span>
                      <h3 className={`font-serif text-lg sm:text-xl font-bold leading-snug ${
                        isApex ? "text-white" : "text-gray-900 group-hover:text-[#0d1b3e]"
                      }`}>
                        {tier.title}
                      </h3>
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed mb-5 ${
                    isApex ? "text-white/80" : "text-gray-600"
                  }`}>
                    {tier.desc}
                  </p>

                  {/* Key Jurisdiction Highlights */}
                  <div className="space-y-2 pt-4 border-t border-gray-100/30 mb-6">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs">
                        <span className={`mt-0.5 shrink-0 ${tier.accentColor}`}>•</span>
                        <span className={isApex ? "text-white/85" : "text-gray-700"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <Link
                  href={tier.href}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                    isApex 
                      ? "bg-[#c9a84c] hover:bg-white text-[#0d1b3e] shadow-lg shadow-[#c9a84c]/20" 
                      : "bg-[#0d1b3e] hover:bg-[#162752] text-[#c9a84c] hover:text-white shadow"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>
            );
          })}

        </div>

        {/* ── Appellate Escalation Pipeline (Step-by-Step Flow Banner) ── */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200/90 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="max-w-md text-center lg:text-left">
              <span className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1.5 mb-1.5">
                <ShieldCheck size={14} />
                Appellate Remedy & Escalation Flow
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0d1b3e]">
                How Legal Matters Progress in India
              </h4>
              <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                Aggrieved litigants follow constitutional appeal stages from lower trials up to Special Leave Petitions (SLP Article 136) before the Supreme Court.
              </p>
            </div>

            {/* Pipeline Steps Flow */}
            <div className="flex-1 w-full max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
                
                {/* Step 1 */}
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold text-gray-500">STAGE 1</span>
                  <p className="font-bold text-xs text-[#0d1b3e] mt-1">Trial / Tribunal Order</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">District Court judgment or Tribunal adjudication award.</p>
                </div>

                {/* Step 2 */}
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#c9a84c]">STAGE 2</span>
                  <p className="font-bold text-xs text-[#0d1b3e] mt-1">High Court Appellate Review</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Article 226 writ, First Appeal (RFA/FAO) or Criminal Appeal.</p>
                </div>

                {/* Step 3 */}
                <div className="p-3.5 rounded-xl bg-[#0d1b3e] text-white border border-[#c9a84c]/40 flex flex-col justify-between shadow-sm">
                  <span className="text-[10px] font-mono font-bold text-[#c9a84c]">FINAL STAGE (APEX)</span>
                  <p className="font-bold text-xs text-[#c9a84c] mt-1">Supreme Court (AOR Filing)</p>
                  <p className="text-[11px] text-white/80 mt-0.5">Special Leave Petition (Article 136) or Article 32 writ.</p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ── Quick Directory Nav Buttons ── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
          <Link
            href="/all-courts"
            className="px-4 py-2 rounded-lg bg-white hover:bg-gray-100 text-[#0d1b3e] border border-gray-300 transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <span>All India Courts Directory</span>
            <ExternalLink size={12} className="text-gray-400" />
          </Link>

          <Link
            href="/high-courts"
            className="px-4 py-2 rounded-lg bg-white hover:bg-gray-100 text-[#0d1b3e] border border-gray-300 transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <span>25 High Courts Directory</span>
            <ExternalLink size={12} className="text-gray-400" />
          </Link>

          <Link
            href="/district-courts"
            className="px-4 py-2 rounded-lg bg-white hover:bg-gray-100 text-[#0d1b3e] border border-gray-300 transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <span>700+ District Courts</span>
            <ExternalLink size={12} className="text-gray-400" />
          </Link>

          <Link
            href="/tribunals"
            className="px-4 py-2 rounded-lg bg-white hover:bg-gray-100 text-[#0d1b3e] border border-gray-300 transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <span>Specialized Tribunals</span>
            <ExternalLink size={12} className="text-gray-400" />
          </Link>

          <Link
            href="/aor"
            className="px-4 py-2 rounded-lg bg-[#0d1b3e] hover:bg-[#162752] text-[#c9a84c] font-bold transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <span>Advocate-on-Record Guide</span>
            <ArrowRight size={12} />
          </Link>
        </div>

      </div>

    </section>
  );
}

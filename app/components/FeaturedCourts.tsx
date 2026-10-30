"use client";

import Link from "next/link";
import { 
  Landmark, 
  Building2, 
  Building, 
  Layers, 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  ExternalLink 
} from "lucide-react";

export default function FeaturedCourts() {
  const tribunals = [
    { name: "National Company Law Appellate Tribunal", abbr: "NCLAT", desc: "Appellate jurisdiction for corporate & insolvency disputes" },
    { name: "National Company Law Tribunal", abbr: "NCLT", desc: "Original company law, oppression & IBC petitions" },
    { name: "National Green Tribunal", abbr: "NGT", desc: "Environmental protection, statutory compliance & forestry matters" },
    { name: "National Consumer Disputes Redressal Commission", abbr: "NCDRC", desc: "Apex consumer forum claims & statutory appeals" },
    { name: "Central Administrative Tribunal", abbr: "CAT", desc: "Public service disputes & central employee service matters" },
  ];

  return (
    <section className="bg-[#F8F7F3] py-16 sm:py-20 border-b border-[#E7E4DC]">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#101D35]/5 border border-[#B69A63]/30 px-3.5 py-1 rounded-full mb-3">
            <Landmark size={13} className="text-[#B69A63]" />
            <span className="text-[#101D35] text-[11px] font-bold tracking-widest uppercase">
              INDIAN JUDICIARY DIRECTORY & HIERARCHY
            </span>
          </div>
          <h2 className="font-serif text-[28px] sm:text-[36px] font-bold text-[#101D35] uppercase tracking-tight">
            COURTS & JUDICIAL FORUMS OF INDIA
          </h2>
          <div className="w-14 h-0.5 bg-[#B69A63] mx-auto mt-3 mb-4" />
          <p className="text-[#4A5568] text-[14px] sm:text-[15.5px] leading-relaxed">
            Explore the structure of India&apos;s judicial system, including constitutional courts, appellate jurisdictions, district judiciary and specialized statutory tribunals.
          </p>
        </div>

        {/* Informational Compliance Callout (Distinguishing directory from personal appearance) */}
        <div className="mb-10 bg-white border border-[#E7E4DC] p-4 rounded-xl flex items-start gap-3 max-w-3xl mx-auto shadow-sm">
          <ShieldCheck size={18} className="text-[#B69A63] shrink-0 mt-0.5" />
          <p className="text-xs text-[#737B88] leading-relaxed">
            <strong className="text-[#101D35]">Institutional Directory Notice:</strong> This directory serves as a comprehensive educational and research overview of India&apos;s judicial architecture. Listing of courts and statutory tribunals does not imply regular personal appearance before every forum unless supported by the official record of proceedings.
          </p>
        </div>

        {/* Visually Distinct Sections A, B, C, D */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Section A: Supreme Court of India (Apex Court Card - 5 cols) */}
          <div className="lg:col-span-5 bg-[#101D35] text-white p-8 sm:p-10 rounded-2xl border border-[#B69A63]/40 flex flex-col justify-between shadow-md">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#B69A63] uppercase tracking-widest bg-white/5 border border-[#B69A63]/30 px-3 py-1 rounded-full mb-6">
                <Scale size={12} />
                <span>Apex Constitutional Court</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-white">
                Supreme Court of India
              </h3>
              
              <p className="text-xs sm:text-[13.5px] text-[#F8F7F3]/80 leading-relaxed mb-6">
                Established under Part V, Chapter IV of the Constitution of India. Highest appellate jurisdiction possessing original, appellate, and advisory jurisdictions under Articles 32, 131, 136, 141 and 142.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-[#F8F7F3]/85">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Location:</span>
                  <span className="font-semibold text-white">Tilak Marg, New Delhi</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Practice Standing:</span>
                  <span className="font-semibold text-[#B69A63]">Advocate-on-Record (AOR 4215)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Primary Procedure:</span>
                  <span className="font-semibold text-white">Supreme Court Rules, 2013</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/courts"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#B69A63] hover:bg-[#CBB484] text-[#101D35] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Supreme Court Directory & Procedures</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Section B, C & D: High Courts, District Judiciary & Tribunals (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Section B: High Courts of India */}
            <div className="bg-white border border-[#E7E4DC] p-6 sm:p-7 rounded-2xl shadow-sm hover:border-[#B69A63] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <Building2 size={20} className="text-[#B69A63]" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#101D35]">
                    High Courts of India (25 State High Courts)
                  </h3>
                </div>
                <Link href="/high-courts" className="text-xs font-semibold text-[#B69A63] hover:underline flex items-center gap-1">
                  <span>Directory</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
              <p className="text-xs text-[#4A5568] leading-relaxed mb-4">
                Constitutional courts established under Article 214 possessing original writ jurisdiction under Article 226, supervisory powers under Article 227, and appellate civil and criminal authority.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px]">
                {["Delhi High Court", "Bombay High Court", "Calcutta High Court", "Madras High Court", "Punjab & Haryana", "Allahabad High Court", "Karnataka High Court"].map((hc) => (
                  <Link 
                    key={hc} 
                    href="/high-courts"
                    className="bg-[#F8F7F3] border border-[#E7E4DC] px-2.5 py-1 rounded text-[#101D35] hover:border-[#B69A63] transition-colors"
                  >
                    {hc}
                  </Link>
                ))}
                <span className="text-[11px] text-[#737B88] self-center pl-1">+18 Other High Courts</span>
              </div>
            </div>

            {/* Section C: District Courts */}
            <div className="bg-white border border-[#E7E4DC] p-6 sm:p-7 rounded-2xl shadow-sm hover:border-[#B69A63] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <Building size={20} className="text-[#B69A63]" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#101D35]">
                    District Judiciary & Subordinate Courts
                  </h3>
                </div>
                <Link href="/district-courts" className="text-xs font-semibold text-[#B69A63] hover:underline flex items-center gap-1">
                  <span>Directory</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                Comprehensive directory of District & Sessions Courts, Chief Judicial Magistrates, Civil Judges, Commercial Courts, Family Courts, and Special Courts spanning states and union territories.
              </p>
            </div>

            {/* Section D: Tribunals and Specialized Statutory Forums */}
            <div className="bg-white border border-[#E7E4DC] p-6 sm:p-7 rounded-2xl shadow-sm hover:border-[#B69A63] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <Layers size={20} className="text-[#B69A63]" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#101D35]">
                    Tribunals & Specialized Statutory Forums
                  </h3>
                </div>
                <Link href="/tribunals" className="text-xs font-semibold text-[#B69A63] hover:underline flex items-center gap-1">
                  <span>All Tribunals</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                {tribunals.map((t) => (
                  <div key={t.abbr} className="bg-[#F8F7F3] border border-[#E7E4DC] p-2.5 rounded-lg">
                    <p className="text-xs font-bold text-[#101D35]">
                      {t.abbr} <span className="font-normal text-[11px] text-[#737B88]">({t.name})</span>
                    </p>
                    <p className="text-[10.5px] text-[#4A5568] mt-0.5">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Explore All Courts Link CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/all-courts"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101D35] hover:text-[#B69A63] bg-white border border-[#E7E4DC] hover:border-[#B69A63] px-6 py-3.5 rounded-xl transition-all shadow-sm group"
          >
            <Landmark size={15} />
            <span>Explore Complete All India Courts Directory</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

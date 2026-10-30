"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Shield, 
  MapPin, 
  FileCheck2, 
  Scale, 
  BookOpen, 
  Gavel, 
  Building2, 
  ArrowRight,
  Briefcase
} from "lucide-react";

export default function HomeAbout() {
  return (
    <>
      {/* ── 5. PROFESSIONAL PROFILE SECTION (Prompt Section 5) ── */}
      <section className="bg-[#F8F7F3] py-12 sm:py-16 lg:py-20 border-b border-[#E7E4DC]">
        <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-[#E7E4DC] rounded-3xl p-5 sm:p-10 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Official Advocate Portrait Card */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] rounded-2xl overflow-hidden border border-[#B69A63]/40 shadow-xl bg-[#202632] group hover:border-[#B69A63] transition-all duration-300">
                  <Image
                    src="/tushar-garg-card.png"
                    alt="Advocate Tushar Garg - Advocate-on-Record, Supreme Court of India"
                    width={512}
                    height={542}
                    className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Narrative Profile */}
              <div className="lg:col-span-8 flex flex-col items-start">
                
                <div className="inline-flex items-center gap-2 bg-[#101D35]/5 border border-[#B69A63]/40 px-3.5 py-1 rounded-full mb-3">
                  <Shield size={13} className="text-[#B69A63]" />
                  <span className="text-[#101D35] text-[11px] font-bold tracking-widest uppercase">
                    PROFESSIONAL PROFILE & CHAMBERS
                  </span>
                </div>

                <h2 className="font-serif text-[#101D35] text-[28px] sm:text-[36px] font-bold tracking-tight uppercase mb-4">
                  ABOUT ADVOCATE TUSHAR GARG
                </h2>

                <div className="w-14 h-0.5 bg-[#B69A63] mb-6" />

                <div className="space-y-4 text-[#4A5568] text-[14.5px] sm:text-[15.5px] leading-relaxed">
                  <p>
                    Advocate Tushar Garg is an Advocate-on-Record of the Supreme Court of India. His professional practice encompasses appellate litigation, constitutional law, civil and criminal proceedings, commercial disputes and legal research.
                  </p>
                  <p>
                    The chambers undertakes legal work involving case preparation, statutory interpretation, drafting, procedural compliance and coordination in matters before appropriate judicial forums.
                  </p>
                </div>

                {/* Verified Particulars Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mt-8 pt-6 border-t border-[#E7E4DC]">
                  <div className="flex items-start gap-3">
                    <FileCheck2 size={16} className="text-[#B69A63] mt-1 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#101D35] uppercase tracking-wider">AOR Registration</p>
                      <p className="text-sm text-[#4A5568]">Registration Number: <strong>4215</strong></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Scale size={16} className="text-[#B69A63] mt-1 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#101D35] uppercase tracking-wider">Admitted Forum</p>
                      <p className="text-sm text-[#4A5568]">Supreme Court of India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#B69A63] mt-1 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#101D35] uppercase tracking-wider">Chambers Presence</p>
                      <p className="text-sm text-[#4A5568]">Tilak Marg & Kalindi Colony, New Delhi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase size={16} className="text-[#B69A63] mt-1 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-[#101D35] uppercase tracking-wider">Practice Scope</p>
                      <p className="text-sm text-[#4A5568]">Constitutional, Appellate & Trial Fora</p>
                    </div>
                  </div>
                </div>

                {/* Complete Profile Link */}
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101D35] hover:text-[#B69A63] transition-colors group"
                  >
                    <span>View Complete Professional Profile</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 9. CHAMBERS PROFILE SECTION (Prompt Section 9) ── */}
      <section className="bg-[#101D35] text-white py-16 sm:py-20 border-b border-[#E7E4DC]/20">
        <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#B69A63]/40 px-3.5 py-1 rounded-full mb-3">
              <Building2 size={13} className="text-[#B69A63]" />
              <span className="text-[#B69A63] text-[11px] font-bold tracking-widest uppercase">
                PROFESSIONAL PRACTICE & LEGAL RESEARCH
              </span>
            </div>
            <h2 className="font-serif text-[28px] sm:text-[36px] font-bold uppercase tracking-tight text-white">
              CHAMBERS OF ADVOCATE TUSHAR GARG
            </h2>
            <div className="w-14 h-0.5 bg-[#B69A63] mx-auto mt-3 mb-4" />
            <p className="text-[#F8F7F3]/80 text-[14px] sm:text-[15.5px] leading-relaxed">
              The chambers maintains a professional practice focused on appellate litigation, legal research, statutory interpretation, drafting and procedural coordination in matters before the Supreme Court of India and other appropriate judicial forums.
            </p>
          </div>

          {/* 4 Information Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            
            <div className="bg-[#202632]/80 border border-[#B69A63]/25 p-6 rounded-2xl hover:border-[#B69A63]/60 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#101D35] border border-[#B69A63]/40 flex items-center justify-center mb-4">
                <Scale size={20} className="text-[#B69A63]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Appellate Litigation
              </h3>
              <p className="text-xs text-[#F8F7F3]/70 leading-relaxed">
                Information concerning Special Leave Petitions (SLPs under Article 136), civil and criminal statutory appeals, review petitions and constitutional references before the Supreme Court of India.
              </p>
            </div>

            <div className="bg-[#202632]/80 border border-[#B69A63]/25 p-6 rounded-2xl hover:border-[#B69A63]/60 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#101D35] border border-[#B69A63]/40 flex items-center justify-center mb-4">
                <BookOpen size={20} className="text-[#B69A63]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Legal Research
              </h3>
              <p className="text-xs text-[#F8F7F3]/70 leading-relaxed">
                Meticulous statutory interpretation, precedent tracking, constitutional benchmarking, and comparative case-law analysis across Apex Court and High Court jurisdictions.
              </p>
            </div>

            <div className="bg-[#202632]/80 border border-[#B69A63]/25 p-6 rounded-2xl hover:border-[#B69A63]/60 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#101D35] border border-[#B69A63]/40 flex items-center justify-center mb-4">
                <Gavel size={20} className="text-[#B69A63]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Drafting & Procedural Work
              </h3>
              <p className="text-xs text-[#F8F7F3]/70 leading-relaxed">
                Appellate drafting, petition structuring, filing preparation, curing procedural defects, and strict compliance under Supreme Court Rules 2013 and High Court practice directions.
              </p>
            </div>

            <div className="bg-[#202632]/80 border border-[#B69A63]/25 p-6 rounded-2xl hover:border-[#B69A63]/60 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#101D35] border border-[#B69A63]/40 flex items-center justify-center mb-4">
                <Building2 size={20} className="text-[#B69A63]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                Professional Coordination
              </h3>
              <p className="text-xs text-[#F8F7F3]/70 leading-relaxed">
                Seamless chambers coordination, briefing-related arrangements with Senior Advocates, matter listing follow-ups, and professional registry liaison.
              </p>
            </div>

          </div>

          {/* Chambers Locations Block (Prompt Section 9) */}
          <div className="bg-[#202632]/90 border border-[#B69A63]/40 rounded-2xl p-6 sm:p-8">
            <h4 className="font-serif text-lg font-bold text-[#B69A63] uppercase tracking-wide mb-4 flex items-center gap-2">
              <MapPin size={18} />
              <span>Chambers Addresses & Physical Offices</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#101D35] p-5 rounded-xl border border-white/10">
                <p className="text-xs uppercase font-bold text-[#B69A63] tracking-wider mb-1">
                  Supreme Court Chambers
                </p>
                <p className="text-sm font-semibold text-white">Tilak Marg, New Delhi</p>
                <p className="text-xs text-[#F8F7F3]/60 mt-1">Convenient proximity to Supreme Court Registry and Court Benches.</p>
              </div>

              <div className="bg-[#101D35] p-5 rounded-xl border border-white/10">
                <p className="text-xs uppercase font-bold text-[#B69A63] tracking-wider mb-1">
                  Chambers Office (Primary Contact & Intake)
                </p>
                <p className="text-sm font-semibold text-white">
                  Flat No. 7, 2nd Floor, D-1, Kalindi Colony, New Delhi – 110065
                </p>
                <p className="text-xs text-[#F8F7F3]/60 mt-1">Professional conferences, research desk, and filing coordination office.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Shield, 
  Landmark, 
  Scale, 
  MapPin, 
  FileCheck2, 
  ArrowRight,
  BookOpen,
  Building
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#101D35] text-white border-b border-[#E7E4DC]/20">
      
      {/* Background Architectural Watermark (Supreme Court of India) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
        <Image
          src="/supreme-court.png"
          alt="Supreme Court of India Architecture"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Atmospheric Subtle Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101D35] via-[#101D35]/95 to-[#101D35]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B69A63]/10 via-transparent to-transparent pointer-events-none" />

      {/* Main Two-Column Hero Grid */}
      <div className="relative z-10 max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-18 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── LEFT COLUMN: Professional Practice & Standing (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-[#202632]/80 border border-[#B69A63]/40 px-3.5 py-1.5 rounded-full mb-5 sm:mb-6 shadow-sm">
              <Shield size={13} className="text-[#B69A63]" />
              <span className="text-[#B69A63] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
                ADVOCATE-ON-RECORD | SUPREME COURT OF INDIA
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-[32px] sm:text-[46px] lg:text-[54px] 2xl:text-[60px] font-bold text-white tracking-tight leading-[1.12] mb-3">
              Advocate Tushar Garg
            </h1>

            {/* Subheading */}
            <p className="font-serif text-[#CBB484] text-[16px] sm:text-[20px] 2xl:text-[22px] font-medium tracking-wide mb-4 sm:mb-5">
              Legal Practice, Appellate Litigation & Constitutional Law
            </p>

            {/* Authoritative Factual Description */}
            <p className="text-[#F8F7F3]/85 text-[13.5px] sm:text-[15.5px] leading-relaxed max-w-2xl mb-7 sm:mb-8 font-normal">
              The Chambers of Advocate Tushar Garg, Advocate-on-Record at the Supreme Court of India, maintains a professional practice encompassing appellate proceedings, constitutional matters, civil and criminal litigation, commercial disputes, arbitration and legal research across judicial forums in India.
            </p>

            {/* Factual Professional Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 w-full max-w-xl mb-7 sm:mb-8">
              <div className="flex items-start gap-3 bg-[#202632]/60 border border-[#B69A63]/25 p-3 sm:p-3.5 rounded-xl">
                <Scale size={18} className="text-[#B69A63] shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-[12.5px] font-semibold text-white">Advocate-on-Record</p>
                  <p className="text-[11px] text-[#F8F7F3]/60">Supreme Court of India</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#202632]/60 border border-[#B69A63]/25 p-3 sm:p-3.5 rounded-xl">
                <FileCheck2 size={18} className="text-[#B69A63] shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-[12.5px] font-semibold text-white">AOR Registration</p>
                  <p className="text-[11px] text-[#B69A63] font-mono font-bold">Reg. No. 4215</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#202632]/60 border border-[#B69A63]/25 p-3 sm:p-3.5 rounded-xl">
                <Building size={18} className="text-[#B69A63] shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-[12.5px] font-semibold text-white">Chambers Practice</p>
                  <p className="text-[11px] text-[#F8F7F3]/60">Tilak Marg & Kalindi Colony, New Delhi</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#202632]/60 border border-[#B69A63]/25 p-3 sm:p-3.5 rounded-xl">
                <Landmark size={18} className="text-[#B69A63] shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-[12.5px] font-semibold text-white">Judicial Forum Standing</p>
                  <p className="text-[11px] text-[#F8F7F3]/60">Supreme Court & High Courts</p>
                </div>
              </div>
            </div>

            {/* Dignified Navigation Links (Responsive full-width on mobile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#B69A63] hover:bg-[#CBB484] text-[#101D35] font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Advocate & Chambers Profile</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/judgments"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#B69A63]/60 text-[#B69A63] hover:bg-white/5 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Explore Judgments Repository</span>
                <BookOpen size={14} />
              </Link>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Authoritative Portrait Presentation (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] 2xl:max-w-[440px] rounded-2xl overflow-hidden shadow-2xl border border-[#B69A63]/40 bg-[#202632] group hover:border-[#B69A63] transition-all duration-300">
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

        </div>
      </div>

      {/* ── Below-Hero Restrained Information Strip (Section 4 Prompt) ── */}
      <div className="border-t border-[#E7E4DC]/15 bg-[#0A1222] text-[#F8F7F3]/90">
        <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[#B69A63] font-serif font-bold text-xs sm:text-sm tracking-wide">Supreme Court of India</p>
              <p className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Constitutional & Apex Court</p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[#B69A63] font-serif font-bold text-xs sm:text-sm tracking-wide">Advocate-on-Record</p>
              <p className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Registration No. 4215</p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[#B69A63] font-serif font-bold text-xs sm:text-sm tracking-wide">New Delhi Chambers</p>
              <p className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-0.5">Tilak Marg & Kalindi Colony</p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[#B69A63] font-serif font-bold text-xs sm:text-sm tracking-wide">Pan-India Judicial Forums</p>
              <p className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-0.5">High Courts & Tribunals</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

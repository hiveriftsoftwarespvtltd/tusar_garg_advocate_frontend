"use client";

import { Landmark, Shield, Scale, BookOpen, ExternalLink, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { supremeCourtData } from "../../../lib/data/courtsComprehensiveData";

export default function SupremeCourtSection() {
  return (
    <section className="py-16 bg-[#101D35] text-white relative overflow-hidden border-b border-[#E7E4DC]/15">
      {/* Background Architectural Accent */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: "url('/court/court_page_banner.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101D35] via-[#101D35]/95 to-[#101D35]/80 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Institutional Title */}
        <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B69A63]/15 border border-[#B69A63]/30 text-[#B69A63] text-[11px] font-bold tracking-widest uppercase mb-3.5">
            <Landmark size={13} className="text-[#B69A63]" />
            APEX CONSTITUTIONAL AUTHORITY OF INDIA
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Supreme Court of India
          </h2>
          <div className="w-20 h-0.5 bg-[#B69A63] my-4 rounded-full" />
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
            Inaugurated on 28 January 1950 pursuant to Part V, Chapter IV of the Constitution of India. Highest judicial forum and final court of appeal under the Constitution, exercising constitutional review, appellate, and plenary jurisdiction.
          </p>
        </div>

        {/* Two-Column Showcase: Left Fact Card + Right Jurisdictions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Institutional Credentials Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#B69A63]/20 border border-[#B69A63]/40 flex items-center justify-center text-[#B69A63]">
                <Scale size={24} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-white">
                  Chambers at Tilak Marg
                </h3>
                <p className="text-xs text-[#B69A63] font-medium">
                  Apex Seat: New Delhi – 110001
                </p>
              </div>
            </div>

            {/* Core Institutional Metrics */}
            <div className="space-y-3.5 text-xs text-white/80 mb-6">
              <div className="flex items-start justify-between py-2 border-b border-white/5">
                <span className="text-white/50">Constitutional Mandate:</span>
                <span className="font-semibold text-right text-white">Articles 124–147</span>
              </div>
              <div className="flex items-start justify-between py-2 border-b border-white/5">
                <span className="text-white/50">Sanctioned Judge Strength:</span>
                <span className="font-semibold text-right text-white">34 Judges (incl. CJI)</span>
              </div>
              <div className="flex items-start justify-between py-2 border-b border-white/5">
                <span className="text-white/50">Principal Seat:</span>
                <span className="font-semibold text-right text-white">Tilak Marg, New Delhi</span>
              </div>
              <div className="flex items-start justify-between py-2 border-b border-white/5">
                <span className="text-white/50">Filing Entitlement:</span>
                <span className="font-semibold text-right text-[#B69A63]">Advocate-on-Record (AOR) Exclusive</span>
              </div>
            </div>

            {/* AOR Statutory Mandate Callout */}
            <div className="bg-[#B69A63]/10 border border-[#B69A63]/25 rounded-xl p-4 text-xs text-white/90 leading-relaxed mb-6">
              <p className="font-semibold text-[#B69A63] mb-1 flex items-center gap-1.5">
                <Shield size={13} />
                Order IV, Supreme Court Rules 2013
              </p>
              <p className="text-[11.5px] text-white/75 font-light">
                {supremeCourtData.aorRequirement}
              </p>
            </div>

            {/* Direct Official Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={supremeCourtData.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#B69A63] hover:bg-[#CBB484] text-[#101D35] text-xs font-bold transition-all shadow-md"
              >
                <span>Official Supreme Court Portal</span>
                <ExternalLink size={12} />
              </a>
              <Link
                href="/slp"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-all"
              >
                <span>SLP Practice Guide</span>
                <ArrowRight size={12} className="text-[#B69A63]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Constitutional Jurisdictions */}
          <div className="lg:col-span-7 space-y-3.5">
            <h3 className="text-sm font-bold text-[#B69A63] uppercase tracking-wider mb-2">
              Constitutional Jurisdictions & Powers
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {supremeCourtData.keyJurisdictions.map((j, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 hover:border-[#B69A63]/40 rounded-xl p-4 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-[#B69A63] uppercase bg-[#B69A63]/15 px-2 py-0.5 rounded">
                      {j.article}
                    </span>
                  </div>
                  <h4 className="text-sm font-serif font-bold text-white mb-1.5">
                    {j.type}
                  </h4>
                  <p className="text-[11.5px] text-white/70 leading-relaxed font-light">
                    {j.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Digital Research Tools Banner */}
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <BookOpen size={20} className="text-[#B69A63] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">e-SCR & Digital Case Law Repository</p>
                  <p className="text-[11px] text-white/60">Official judgments search, cause lists, and daily proceedings of the Supreme Court.</p>
                </div>
              </div>
              <Link
                href="/judgments"
                className="shrink-0 text-xs font-bold text-[#B69A63] hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Search Judgments</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

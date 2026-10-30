"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Scale, 
  User, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Landmark, 
  FileText, 
  Search, 
  BookOpen, 
  ExternalLink, 
  Briefcase, 
  Gavel, 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2,
  Globe,
  HelpCircle,
  Building2,
  Sparkles,
  ArrowRight,
  Compass,
  FileCheck2
} from "lucide-react";
import FaqAccordion from "./FaqAccordion";
import { fetchApi } from "../../../../lib/api/client";

export default function CourtTemplate({ data: initialData }: { data: any }) {
  const [courtData, setCourtData] = useState<any>(initialData);

  const stateSlug = initialData?.state?.slug || "andaman-and-nicobar-islands";
  const courtSlug = initialData?.slug || "district-court-nicobar-nicobar";

  // Fetch live court JSON directly from backend API
  useEffect(() => {
    async function loadFreshData() {
      try {
        const fresh = await fetchApi(`/courts/${stateSlug}/${courtSlug}`);
        if (fresh && fresh.name) {
          setCourtData(fresh);
        }
      } catch (err) {
        console.warn("Could not fetch fresher court data from API, using pre-rendered data.");
      }
    }
    if (stateSlug && courtSlug) {
      loadFreshData();
    }
  }, [stateSlug, courtSlug]);

  const { state, judgments, relatedCourts, ...court } = courtData || initialData || {};

  const formattedStateName = state?.name || "Andaman and Nicobar Islands";
  const heroBgImage = court.image || court.ogImage;

  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-[#c9a84c]/20 selection:text-[#0d1b3e]">
      
      {/* ======================================================== */}
      {/* 1. COURT HERO BANNER (Vivid Background Court Image)      */}
      {/* ======================================================== */}
      <section className="relative w-full bg-[#071126] text-white pt-8 pb-16 border-b border-[#c9a84c]/30 overflow-hidden shadow-lg">
        {/* Dynamic Court Image Background - High Visibility & Reduced Overlay */}
        {heroBgImage && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <img 
              src={heroBgImage} 
              alt={court.name}
              className="w-full h-full object-cover object-center opacity-85 brightness-95 contrast-105"
            />
            {/* Reduced Overlay: Soft gradient on left for text legibility, clear and vibrant on center & right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050c1b]/90 via-[#050c1b]/65 to-[#050c1b]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071126] via-transparent to-[#050c1b]/30" />
          </div>
        )}

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl">
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center flex-wrap gap-2 text-xs text-white/80 mb-6 tracking-wide drop-shadow-sm">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Home</span>
              </Link>
              <ChevronRight size={12} className="text-[#c9a84c]" />
              <Link href="/courts" className="hover:text-white transition-colors">Courts</Link>
              <ChevronRight size={12} className="text-[#c9a84c]" />
              <Link href={`/courts/${stateSlug}`} className="hover:text-white transition-colors">{formattedStateName}</Link>
              <ChevronRight size={12} className="text-[#c9a84c]" />
              <span className="text-[#f1dc9b] font-semibold truncate max-w-xs">{court.name}</span>
            </nav>

            {/* Court Status & Categorization Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              {/* Court Type Pill */}
              <div className="inline-flex items-center gap-2 backdrop-blur-md bg-[#0d1b3e]/80 border border-[#c9a84c]/50 text-[#f5e6a8] px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">
                <Landmark size={13} className="text-[#c9a84c]" />
                <span>{court.courtType || "District Court"}</span>
              </div>

              {/* City / District Pill */}
              <div className="inline-flex items-center gap-1.5 backdrop-blur-md bg-[#0d1b3e]/80 border border-white/20 text-white/95 px-3.5 py-1.5 rounded-full text-[11px] font-medium shadow-sm">
                <MapPin size={13} className="text-[#c9a84c]" />
                <span>{court.city || formattedStateName}, {formattedStateName}</span>
              </div>

              {/* Featured Court Pill */}
              {court.featured && (
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#c9a84c] to-[#e4c46c] text-[#071126] font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  <Sparkles size={12} className="text-[#071126]" />
                  <span>Featured Court</span>
                </span>
              )}

              {/* Verified Portal Status */}
              {court.status === "PUBLISHED" && (
                <span className="inline-flex items-center gap-1.5 backdrop-blur-md bg-[#0d1b3e]/85 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Verified Portal</span>
                </span>
              )}
            </div>

            {/* Court Full Official Title */}
            <h1 className="font-serif text-[32px] sm:text-[42px] lg:text-[50px] font-bold text-white mb-4 tracking-tight leading-[1.15] uppercase drop-shadow-md">
              {court.name}
            </h1>

            {/* Court Official Briefing / Description */}
            <p className="text-white/90 max-w-3xl text-sm sm:text-base leading-relaxed mb-8 font-normal drop-shadow-sm">
              {court.description || `${court.name} located in ${court.city || formattedStateName}, ${formattedStateName}. Official judicial establishment and e-Courts portal for case status, daily cause lists, orders, and public services.`}
            </p>

            {/* Hero Action Buttons (Quick Access Strip) */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/15">
              {court.officialWebsite && (
                <a 
                  href={court.officialWebsite} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a84c] to-[#dcb858] hover:from-[#dcb858] hover:to-[#ebd07a] text-[#071126] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-[#c9a84c]/25 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Official eCourts Portal</span>
                  <ExternalLink size={13} className="text-[#071126]" />
                </a>
              )}

              {court.caseStatusUrl && (
                <a 
                  href={court.caseStatusUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 backdrop-blur-md bg-[#0d1b3e]/85 hover:bg-[#132757] text-white font-semibold text-xs px-4 py-3 rounded-xl transition-all duration-300 border border-white/25 hover:border-[#c9a84c]/80 hover:-translate-y-0.5 shadow-sm"
                >
                  <Search size={13} className="text-[#c9a84c]" />
                  <span>Search Case Status</span>
                </a>
              )}

              {court.causeListUrl && (
                <a 
                  href={court.causeListUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 backdrop-blur-md bg-[#0d1b3e]/85 hover:bg-[#132757] text-white font-semibold text-xs px-4 py-3 rounded-xl transition-all duration-300 border border-white/25 hover:border-[#c9a84c]/80 hover:-translate-y-0.5 shadow-sm"
                >
                  <FileText size={13} className="text-[#c9a84c]" />
                  <span>Daily Cause List</span>
                </a>
              )}

              {court.judgmentsUrl && (
                <a 
                  href={court.judgmentsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 backdrop-blur-md bg-[#0d1b3e]/85 hover:bg-[#132757] text-white font-semibold text-xs px-4 py-3 rounded-xl transition-all duration-300 border border-white/25 hover:border-[#c9a84c]/80 hover:-translate-y-0.5 shadow-sm"
                >
                  <Gavel size={13} className="text-[#c9a84c]" />
                  <span>Orders & Judgments</span>
                </a>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. EXECUTIVE FACT MATRIX (Key Metrics Strip)             */}
      {/* ======================================================== */}
      <section className="bg-white border-b border-gray-200 py-6 relative z-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Tile 1: Judicial District */}
            <div className="bg-[#fcfbf7] border border-[#eee6d3] hover:border-[#c9a84c] rounded-2xl p-4 transition-all duration-300 hover:shadow-sm flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Compass size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9a7620] block mb-0.5">
                  Judicial District
                </span>
                <p className="font-bold text-[#0d1b3e] text-sm truncate">
                  {court.city ? `${court.city} District` : `${court.courtType || "District"} Jurisdiction`}
                </p>
                <span className="text-[11px] text-gray-500 block truncate mt-0.5">
                  {formattedStateName}
                </span>
              </div>
            </div>

            {/* Tile 2: Working Timings */}
            <div className="bg-[#fcfbf7] border border-[#eee6d3] hover:border-[#c9a84c] rounded-2xl p-4 transition-all duration-300 hover:shadow-sm flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Clock size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9a7620] block mb-0.5">
                  Court Working Hours
                </span>
                <p className="font-bold text-[#0d1b3e] text-sm truncate">
                  {court.workingHours || "10:00 AM - 5:00 PM"}
                </p>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Official Registry Hours</span>
                </span>
              </div>
            </div>

            {/* Tile 3: Postal PIN Code */}
            <div className="bg-[#fcfbf7] border border-[#eee6d3] hover:border-[#c9a84c] rounded-2xl p-4 transition-all duration-300 hover:shadow-sm flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <MapPin size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9a7620] block mb-0.5">
                  Postal Details & PIN
                </span>
                <p className="font-bold text-[#0d1b3e] text-sm truncate">
                  {court.postalDetails ? `PIN: ${court.postalDetails}` : `${court.city || "Registry Code"}`}
                </p>
                <span className="text-[11px] text-gray-500 block truncate mt-0.5">
                  {court.city || formattedStateName} Postal Division
                </span>
              </div>
            </div>

            {/* Tile 4: Registry Helpline */}
            <div className="bg-[#fcfbf7] border border-[#eee6d3] hover:border-[#c9a84c] rounded-2xl p-4 transition-all duration-300 hover:shadow-sm flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Phone size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9a7620] block mb-0.5">
                  Helpline & Desk
                </span>
                <p className="font-bold text-[#0d1b3e] text-sm truncate">
                  {court.contactInfo?.phone || "Registry Active"}
                </p>
                <span className="text-[11px] text-gray-500 block truncate mt-0.5">
                  {court.contactInfo?.email || "Official Desk"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. MAIN SECTION: Left Content (8 Cols) + Sidebar (4 Cols) */}
      {/* ======================================================== */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ---------------------------------------------------- */}
            {/* LEFT COLUMN: Main Judicial Details (8 Cols)           */}
            {/* ---------------------------------------------------- */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Card A: Court Photo / Building Architectural Showcase */}
              {court.image && (
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs group">
                  <div className="bg-gradient-to-r from-[#0d1b3e] to-[#14295d] px-6 py-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider">
                      <Building2 size={16} className="text-[#c9a84c]" />
                      <span>Official Court Complex & Judicial Premises</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#071126] bg-[#c9a84c] px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs">
                      {court.city || formattedStateName}
                    </span>
                  </div>

                  <div className="p-4 sm:p-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 flex items-center justify-center">
                    <div className="max-w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white">
                      <img 
                        src={court.image} 
                        alt={court.name}
                        className="max-h-[420px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                    </div>
                  </div>

                  <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
                    <span className="font-medium">{court.address || `${court.name}, ${formattedStateName}`}</span>
                    <span className="font-bold text-[#0d1b3e] flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-emerald-600" />
                      <span>Official Registry Premises</span>
                    </span>
                  </div>
                </div>
              )}

              {/* Card B: Establishment History & Jurisdiction */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0d1b3e] via-[#c9a84c] to-[#0d1b3e]" />
                
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] flex items-center justify-center text-[#c9a84c] shadow-2xs">
                    <Gavel size={20} />
                  </div>
                  <div>
                    <h2 className="font-serif text-[20px] sm:text-[23px] font-bold text-[#0d1b3e]">
                      Court Overview & Judicial Establishment
                    </h2>
                    <p className="text-xs text-gray-500">Administrative profile, history and territorial jurisdiction</p>
                  </div>
                </div>

                <div className="space-y-5 text-gray-700 text-[14.5px] leading-relaxed">
                  {court.description && (
                    <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200/80 text-gray-700 leading-relaxed font-normal">
                      <p>{court.description}</p>
                    </div>
                  )}

                  {/* Establishment & History Callout */}
                  <div className="bg-gradient-to-br from-[#fffdf9] to-[#faf5ea] border-l-4 border-[#c9a84c] rounded-2xl p-6 border border-[#ece2cc] shadow-2xs">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#9a7620] mb-2.5 flex items-center gap-2">
                      <Scale size={15} />
                      <span>Judicial Establishment & History</span>
                    </h3>
                    <p className="text-[#0d1b3e] font-medium leading-relaxed">
                      {court.history || `The judicial establishment in ${court.name} was established to serve the jurisdiction of ${court.jurisdiction || court.city || formattedStateName}, administering civil and criminal justice in accordance with the Constitution of India and applicable central and state laws.`}
                    </p>
                  </div>

                  {/* Jurisdiction & Appellate Hierarchy Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="bg-gray-50/70 rounded-2xl p-5 border border-gray-200/80">
                      <h4 className="text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-2 flex items-center gap-2">
                        <MapPin size={14} className="text-[#c9a84c]" />
                        <span>Territorial Jurisdiction</span>
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {court.jurisdiction || `Territorial jurisdiction covers the judicial district of ${court.city || formattedStateName}, presiding over all subordinate civil, criminal, and special judicial divisions.`}
                      </p>
                    </div>

                    <div className="bg-gray-50/70 rounded-2xl p-5 border border-gray-200/80">
                      <h4 className="text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Landmark size={14} className="text-[#c9a84c]" />
                        <span>Appellate Forum</span>
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Appeals from {court.name} lie before the High Court having territorial jurisdiction over {formattedStateName}, and onward to the <strong>Supreme Court of India</strong> under Article 136.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card C: Presiding Judges & Judicial Roster */}
              {court.judges && court.judges.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] flex items-center justify-center text-[#c9a84c] shadow-2xs">
                        <User size={20} />
                      </div>
                      <div>
                        <h2 className="font-serif text-[20px] sm:text-[23px] font-bold text-[#0d1b3e]">
                          Presiding Judicial Officers & Bench
                        </h2>
                        <p className="text-xs text-gray-500">Official judicial roster and court room designation</p>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-[#9a7620] bg-[#fcfaf5] border border-[#eae2d0] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                      Active Roster
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {court.judges.map((judge: any, idx: number) => (
                      <div 
                        key={idx} 
                        className="bg-gradient-to-br from-white via-[#fcfaf7] to-[#fbf7ee] p-5 rounded-2xl border border-gray-200/90 shadow-2xs hover:shadow-sm hover:border-[#c9a84c]/60 transition-all duration-300 flex flex-col justify-between gap-4 group"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="w-11 h-11 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                            <Scale size={20} />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9a7620] block mb-1">
                              {judge.designation || "District and Sessions Judge"}
                            </span>
                            <h3 className="font-bold text-[#0d1b3e] text-base leading-snug group-hover:text-[#9a7620] transition-colors">
                              {judge.name}
                            </h3>
                            {judge.bench && (
                              <p className="text-xs text-gray-500 mt-1.5 leading-snug">
                                {judge.bench}
                              </p>
                            )}
                          </div>
                        </div>

                        {judge.profileUrl && (
                          <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between">
                            <span className="text-[11px] text-gray-400">Judicial Record</span>
                            <a 
                              href={judge.profileUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d1b3e] hover:text-[#c9a84c] transition-colors group/link"
                            >
                              <span>Official Profile</span>
                              <ExternalLink size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card D: Digital e-Courts Facilities & Registry Services (IMPROVED UI) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] flex items-center justify-center text-[#c9a84c] shadow-2xs">
                      <Search size={20} />
                    </div>
                    <div>
                      <h2 className="font-serif text-[20px] sm:text-[23px] font-bold text-[#0d1b3e]">
                        e-Courts Digital Services & Online Registry
                      </h2>
                      <p className="text-xs text-gray-500">Live online judicial facilities for litigants, advocates, and citizens</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Live NIC Network</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  
                  {/* Service 1: Case Status */}
                  <a 
                    href={court.caseStatusUrl || court.officialWebsite || "https://services.ecourts.gov.in/"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-gray-200 hover:border-[#c9a84c] bg-[#fafbfc] hover:bg-white transition-all duration-300 group flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-[#071126] flex items-center justify-center transition-colors shadow-2xs">
                          <Search size={18} />
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">CNR / Name</span>
                      </div>
                      <h4 className="font-bold text-[#0d1b3e] text-[13.5px] uppercase tracking-wider mb-1.5 group-hover:text-[#9a7620] transition-colors">
                        Case Status Search
                      </h4>
                      <p className="text-[12px] text-gray-500 leading-relaxed">
                        Track live court proceedings by CNR number, case filing number, or party name.
                      </p>
                    </div>
                    <span className="text-[11.5px] font-bold text-[#c9a84c] inline-flex items-center gap-1.5 mt-4 pt-2 border-t border-gray-100 group-hover:text-[#9a7620]">
                      <span>Search Case</span>
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </a>

                  {/* Service 2: Daily Cause List */}
                  <a 
                    href={court.causeListUrl || court.officialWebsite || "https://services.ecourts.gov.in/"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-gray-200 hover:border-[#c9a84c] bg-[#fafbfc] hover:bg-white transition-all duration-300 group flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-[#071126] flex items-center justify-center transition-colors shadow-2xs">
                          <FileText size={18} />
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Court Board</span>
                      </div>
                      <h4 className="font-bold text-[#0d1b3e] text-[13.5px] uppercase tracking-wider mb-1.5 group-hover:text-[#9a7620] transition-colors">
                        Daily Cause List
                      </h4>
                      <p className="text-[12px] text-gray-500 leading-relaxed">
                        Inspect daily hearing schedules and court board listings for all benches.
                      </p>
                    </div>
                    <span className="text-[11.5px] font-bold text-[#c9a84c] inline-flex items-center gap-1.5 mt-4 pt-2 border-t border-gray-100 group-hover:text-[#9a7620]">
                      <span>View Cause List</span>
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </a>

                  {/* Service 3: Orders & Judgments */}
                  <a 
                    href={court.judgmentsUrl || court.officialWebsite || "https://services.ecourts.gov.in/"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-gray-200 hover:border-[#c9a84c] bg-[#fafbfc] hover:bg-white transition-all duration-300 group flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-[#071126] flex items-center justify-center transition-colors shadow-2xs">
                          <Gavel size={18} />
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Certified</span>
                      </div>
                      <h4 className="font-bold text-[#0d1b3e] text-[13.5px] uppercase tracking-wider mb-1.5 group-hover:text-[#9a7620] transition-colors">
                        Orders & Judgments
                      </h4>
                      <p className="text-[12px] text-gray-500 leading-relaxed">
                        Download certified and digital copies of judicial orders and pronouncements.
                      </p>
                    </div>
                    <span className="text-[11.5px] font-bold text-[#c9a84c] inline-flex items-center gap-1.5 mt-4 pt-2 border-t border-gray-100 group-hover:text-[#9a7620]">
                      <span>Download Orders</span>
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </a>

                  {/* Service 4: Judicial Recruitment */}
                  {court.recruitmentUrl && (
                    <a 
                      href={court.recruitmentUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl border border-gray-200 hover:border-[#c9a84c] bg-[#fafbfc] hover:bg-white transition-all duration-300 group flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-[#071126] flex items-center justify-center transition-colors shadow-2xs">
                            <Briefcase size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Vacancies</span>
                        </div>
                        <h4 className="font-bold text-[#0d1b3e] text-[13.5px] uppercase tracking-wider mb-1.5 group-hover:text-[#9a7620] transition-colors">
                          Recruitment & Careers
                        </h4>
                        <p className="text-[12px] text-gray-500 leading-relaxed">
                          Official vacancies, judicial service examinations, and registry recruitment notices.
                        </p>
                      </div>
                      <span className="text-[11.5px] font-bold text-[#c9a84c] inline-flex items-center gap-1.5 mt-4 pt-2 border-t border-gray-100 group-hover:text-[#9a7620]">
                        <span>View Notices</span>
                        <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  )}

                  {/* Service 5: Rules & Circulars */}
                  {court.rulesUrl && (
                    <a 
                      href={court.rulesUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl border border-gray-200 hover:border-[#c9a84c] bg-[#fafbfc] hover:bg-white transition-all duration-300 group flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-[#071126] flex items-center justify-center transition-colors shadow-2xs">
                            <BookOpen size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Legal Code</span>
                        </div>
                        <h4 className="font-bold text-[#0d1b3e] text-[13.5px] uppercase tracking-wider mb-1.5 group-hover:text-[#9a7620] transition-colors">
                          Rules & Regulations
                        </h4>
                        <p className="text-[12px] text-gray-500 leading-relaxed">
                          Court procedural rules, administrative practice circulars, and guidelines.
                        </p>
                      </div>
                      <span className="text-[11.5px] font-bold text-[#c9a84c] inline-flex items-center gap-1.5 mt-4 pt-2 border-t border-gray-100 group-hover:text-[#9a7620]">
                        <span>Explore Rules</span>
                        <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  )}

                  {/* Service 6: Official Portal */}
                  {court.officialWebsite && (
                    <a 
                      href={court.officialWebsite} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-5 rounded-2xl border border-gray-200 hover:border-[#c9a84c] bg-[#fafbfc] hover:bg-white transition-all duration-300 group flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-[#071126] flex items-center justify-center transition-colors shadow-2xs">
                            <Globe size={18} />
                          </div>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">NIC Portal</span>
                        </div>
                        <h4 className="font-bold text-[#0d1b3e] text-[13.5px] uppercase tracking-wider mb-1.5 group-hover:text-[#9a7620] transition-colors">
                          Official District Portal
                        </h4>
                        <p className="text-[12px] text-gray-500 leading-relaxed">
                          Main eCourts website maintained by the National Informatics Centre (NIC).
                        </p>
                      </div>
                      <span className="text-[11.5px] font-bold text-[#c9a84c] inline-flex items-center gap-1.5 mt-4 pt-2 border-t border-gray-100 group-hover:text-[#9a7620]">
                        <span>Visit Website</span>
                        <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  )}

                  {/* Dynamic Services / Resources added from Admin Form */}
                  {court.services && court.services.length > 0 && court.services.map((srv: any, sIdx: number) => {
                    if (!srv.title && !srv.link) return null;
                    if (srv.title === "eCourts Case Status" && court.caseStatusUrl) return null;
                    return (
                      <a 
                        key={srv._id || sIdx}
                        href={srv.link || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-5 rounded-2xl border border-gray-200 hover:border-[#c9a84c] bg-[#fafbfc] hover:bg-white transition-all duration-300 group flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3.5">
                            <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-[#071126] flex items-center justify-center transition-colors shadow-2xs">
                              <FileCheck2 size={18} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Registry Resource</span>
                          </div>
                          <h4 className="font-bold text-[#0d1b3e] text-[13.5px] uppercase tracking-wider mb-1.5 group-hover:text-[#9a7620] transition-colors">
                            {srv.title}
                          </h4>
                          <p className="text-[12px] text-gray-500 leading-relaxed">
                            {srv.iconType || "Official e-Courts portal service and litigation facility."}
                          </p>
                        </div>
                        <span className="text-[11.5px] font-bold text-[#c9a84c] inline-flex items-center gap-1.5 mt-4 pt-2 border-t border-gray-100 group-hover:text-[#9a7620]">
                          <span>Access Resource</span>
                          <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </a>
                    );
                  })}

                </div>
              </div>

              {/* Card E: Key Practice Areas & Legal Subjects */}
              {court.practiceAreas && court.practiceAreas.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] flex items-center justify-center text-[#c9a84c] shadow-2xs">
                        <Scale size={20} />
                      </div>
                      <div>
                        <h2 className="font-serif text-[20px] sm:text-[23px] font-bold text-[#0d1b3e]">
                          Key Practice Areas & Jurisdiction Handled
                        </h2>
                        <p className="text-xs text-gray-500">Legal branches and statutes adjudicated at {court.name}</p>
                      </div>
                    </div>

                    <Link href="/laws" className="text-xs font-bold text-[#9a7620] hover:text-[#0d1b3e] flex items-center gap-1 group/link">
                      <span>Explore Bare Acts</span>
                      <ChevronRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
                    {court.practiceAreas.map((area: string, idx: number) => (
                      <div 
                        key={idx} 
                        className="bg-gray-50/70 hover:bg-[#fffcf6] border border-gray-200 hover:border-[#c9a84c] p-3.5 rounded-2xl transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[82px] shadow-2xs hover:shadow-sm hover:-translate-y-0.5 group cursor-default"
                      >
                        <Scale size={16} className="text-[#c9a84c] group-hover:scale-110 mb-2 transition-transform" />
                        <span className="text-xs font-bold text-[#0d1b3e] group-hover:text-[#9a7620] leading-snug transition-colors">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card F: Frequently Asked Questions (from API) */}
              {court.faqs && court.faqs.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] flex items-center justify-center text-[#c9a84c] shadow-2xs">
                      <HelpCircle size={20} />
                    </div>
                    <div>
                      <h2 className="font-serif text-[20px] sm:text-[23px] font-bold text-[#0d1b3e]">
                        Frequently Asked Questions (FAQs)
                      </h2>
                      <p className="text-xs text-gray-500">Essential answers regarding case status, cause lists, orders, and registry</p>
                    </div>
                  </div>

                  <FaqAccordion faqs={court.faqs} />
                </div>
              )}

              {/* Card G: Appellate Legal Reference Note */}
              <div className="bg-gradient-to-r from-[#fffef9] to-[#faf6ed] border border-[#c9a84c]/40 rounded-3xl p-6 sm:p-7 text-xs text-[#785b1a] flex items-start gap-4 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-[#c9a84c]/20 text-[#9a7620] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={20} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-[#0d1b3e] text-sm sm:text-[15px]">
                    Appellate Litigation & Supreme Court Representation
                  </h4>
                  <p className="leading-relaxed text-gray-600 text-xs sm:text-[13px]">
                    Litigants with adverse decrees or orders passed by {court.name} or the jurisdictional High Court may file Special Leave Petitions (SLPs) or Statutory Appeals before the Supreme Court of India under Articles 136 and 133 of the Constitution. Advocate Tushar Garg, Advocate-on-Record (AOR No. 4215), provides specialized counsel and representation before the Supreme Court benches.
                  </p>
                </div>
              </div>

            </div>

            {/* ---------------------------------------------------- */}
            {/* RIGHT COLUMN: Sticky Sidebar (4 Cols)                 */}
            {/* ---------------------------------------------------- */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              {/* Sidebar Card 1: Official Registry & Contact Information (REDESIGNED LUXURY CARD) */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0d1b3e] via-[#c9a84c] to-[#0d1b3e]" />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center shadow-2xs shrink-0">
                      <Landmark size={18} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#0d1b3e] text-[15px] leading-tight">
                        Court Contact & Registry
                      </h3>
                      <p className="text-[11px] text-gray-500 font-normal">Official Judicial Directory</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#9a7620] bg-[#c9a84c]/15 border border-[#c9a84c]/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Official
                  </span>
                </div>

                {/* Contact Micro-Tiles */}
                <div className="space-y-3">
                  
                  {/* Tile 1: Address */}
                  <div className="bg-[#fcfbf8] hover:bg-white border border-[#eee7d7] hover:border-[#c9a84c]/50 rounded-2xl p-3.5 transition-all duration-200 shadow-2xs group">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                        <MapPin size={15} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-gray-400 font-bold uppercase text-[10px] tracking-wider block mb-0.5">
                          Postal Address
                        </span>
                        <p className="font-bold text-[#0d1b3e] text-[13px] leading-snug">
                          {court.address || `${court.name}, ${court.city || formattedStateName}, India`}
                        </p>
                        {court.postalDetails && (
                          <div className="mt-2">
                            <span className="inline-flex items-center gap-1 bg-[#c9a84c]/15 text-[#866619] font-bold text-[11px] px-2.5 py-0.5 rounded-full border border-[#c9a84c]/30">
                              <span>PIN:</span>
                              <span>{court.postalDetails}</span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tile 2: Working Hours */}
                  <div className="bg-[#fcfbf8] hover:bg-white border border-[#eee7d7] hover:border-[#c9a84c]/50 rounded-2xl p-3.5 transition-all duration-200 shadow-2xs group">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover:scale-105 transition-transform">
                        <Clock size={15} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-gray-400 font-bold uppercase text-[10px] tracking-wider">
                            Court Working Hours
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span>Active</span>
                          </span>
                        </div>
                        <p className="font-bold text-[#0d1b3e] text-[13.5px] leading-snug mt-0.5">
                          {court.workingHours || "10:00 AM - 5:00 PM"}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-1">
                          Monday – Saturday (Excluding Gazetted Holidays)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tile 3: Phone (with Call Action button) */}
                  {court.contactInfo?.phone && (
                    <div className="bg-[#fcfbf8] hover:bg-white border border-[#eee7d7] hover:border-[#c9a84c]/50 rounded-2xl p-3.5 transition-all duration-200 shadow-2xs group">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                            <Phone size={15} />
                          </div>
                          <div className="min-w-0">
                            <span className="text-gray-400 font-bold uppercase text-[10px] tracking-wider block">
                              Telephone Helpline
                            </span>
                            <a 
                              href={`tel:${court.contactInfo.phone}`}
                              className="font-bold text-[#0d1b3e] hover:text-[#9a7620] text-[13.5px] transition-colors block truncate"
                            >
                              {court.contactInfo.phone}
                            </a>
                          </div>
                        </div>
                        <a 
                          href={`tel:${court.contactInfo.phone}`}
                          className="inline-flex items-center gap-1.5 bg-[#0d1b3e] hover:bg-[#1a2f64] text-[#c9a84c] text-[11px] font-bold px-3 py-1.5 rounded-xl transition-all shadow-2xs shrink-0"
                        >
                          <span>Call</span>
                          <Phone size={11} />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Tile 4: Email (with Email Action button) */}
                  {court.contactInfo?.email && (
                    <div className="bg-[#fcfbf8] hover:bg-white border border-[#eee7d7] hover:border-[#c9a84c]/50 rounded-2xl p-3.5 transition-all duration-200 shadow-2xs group">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-lg bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                            <Mail size={15} />
                          </div>
                          <div className="min-w-0">
                            <span className="text-gray-400 font-bold uppercase text-[10px] tracking-wider block">
                              Official Registry Email
                            </span>
                            <a 
                              href={`mailto:${court.contactInfo.email}`}
                              className="font-bold text-[#0d1b3e] hover:text-[#9a7620] text-[13px] transition-colors block truncate"
                            >
                              {court.contactInfo.email}
                            </a>
                          </div>
                        </div>
                        <a 
                          href={`mailto:${court.contactInfo.email}`}
                          className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 border border-gray-200 text-[#0d1b3e] hover:text-[#9a7620] text-[11px] font-bold px-3 py-1.5 rounded-xl transition-all shadow-2xs shrink-0"
                        >
                          <span>Email</span>
                          <Mail size={11} />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Tile 5: Official Website / Portal (Direct Link Banner) */}
                  {court.officialWebsite && (
                    <a 
                      href={court.officialWebsite} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-[#0d1b3e] via-[#102350] to-[#182e66] text-white hover:from-[#132552] hover:to-[#223e85] transition-all duration-200 shadow-sm group mt-1"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 text-[#c9a84c] flex items-center justify-center shrink-0">
                          <Globe size={15} />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#c9a84c] block">
                            Official eCourts Website
                          </span>
                          <span className="text-xs font-bold text-white group-hover:text-[#f7e7b5] transition-colors truncate block">
                            Visit Official Portal
                          </span>
                        </div>
                      </div>
                      <ExternalLink size={14} className="text-[#c9a84c] group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </a>
                  )}

                </div>
              </div>

              {/* Sidebar Card 2: Advocate Tushar Garg, AOR Consultation Card */}
              <div className="bg-gradient-to-br from-[#071126] via-[#0d1b3e] to-[#0a1532] text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-[#c9a84c]/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] shadow-xs">
                    <Scale size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#c9a84c] uppercase tracking-widest block">Supreme Court of India</span>
                    <span className="text-xs text-white/70 font-medium">Advocate-on-Record (AOR 4215)</span>
                  </div>
                </div>
                
                <h3 className="font-serif text-lg font-bold mb-2 leading-snug text-white">
                  Need Legal Representation in the Supreme Court?
                </h3>
                <p className="text-xs text-white/75 leading-relaxed mb-6 font-normal">
                  Advocate Tushar Garg handles Special Leave Petitions (SLPs), Civil & Criminal Appeals, and Writ Petitions arising from District Courts and High Courts across India.
                </p>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/917206810681?text=Hello%20Advocate%20Tushar%20Garg,%20I%20need%20legal%20consultation%20regarding%20Supreme%20Court%20representation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Consultation</span>
                  </a>

                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl border border-white/20 hover:border-[#c9a84c]/60 transition-all duration-300"
                  >
                    <Phone size={14} className="text-[#c9a84c]" />
                    <span>Contact Chambers</span>
                  </Link>
                </div>
              </div>

              {/* Sidebar Card 3: Other District Courts in the State */}
              {relatedCourts && relatedCourts.length > 0 && (
                <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xs">
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-gray-100">
                    <h3 className="font-bold text-[#0d1b3e] text-xs uppercase tracking-widest">
                      Other Courts in {formattedStateName}
                    </h3>
                    <Link href={`/courts/${stateSlug}`} className="text-[#9a7620] hover:text-[#0d1b3e] text-[11px] font-bold flex items-center gap-1 group/all">
                      <span>View All</span>
                      <ArrowRight size={12} className="group-hover/all:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                  
                  <div className="space-y-2.5">
                    {relatedCourts.map((c: any) => (
                      <Link
                        key={c._id}
                        href={`/courts/${stateSlug}/${c.slug}`}
                        className="block p-3 rounded-2xl hover:bg-[#fcfbf7] border border-transparent hover:border-[#c9a84c]/40 transition-all duration-300 group/related"
                      >
                        <span className="text-[10px] font-bold text-[#9a7620] uppercase tracking-wider block mb-1">
                          {c.courtType || "District Court"}
                        </span>
                        <h4 className="text-xs font-bold text-[#0d1b3e] group-hover/related:text-[#9a7620] transition-colors line-clamp-2 leading-snug">
                          {c.name}
                        </h4>
                        <span className="text-[10.5px] text-gray-400 mt-1 block">
                          District: {c.city || formattedStateName}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

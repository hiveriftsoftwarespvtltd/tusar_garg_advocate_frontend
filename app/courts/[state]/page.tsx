import { notFound } from "next/navigation";
import { getStateBySlug, getPublishedStates } from "../../../lib/api/states";
import { getCourtsByState } from "../../../lib/api/courts";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Scale, ChevronRight, Globe, ExternalLink, Landmark, Building2, Search, ArrowRight, Shield, Users } from "lucide-react";
import { initialDistrictCourtsData } from "../../../lib/data/districtCourtsData";
import { allHighCourtsData, getStateProfileBySlug } from "../../../lib/data/courtsComprehensiveData";
import StateCourtsClient from "./StateCourtsClient";

type Props = {
  params: Promise<{ state: string }>
}

function generateSlug(str: string) {
  return (str || '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const stateData = await getStateBySlug(state);

  if (!stateData) {
    return { title: "State Judiciary Directory Not Found" };
  }

  return {
    title: `${stateData.name} Courts & Judicial Directory | High Court & Subordinate Judiciary`,
    description: `Comprehensive directory of High Court and District & Sessions Courts in ${stateData.name}. Access official e-Courts portals, case status, cause lists, and legal procedures.`,
    keywords: [

      "Advocate on Record Tushar Garg",
      `${stateData.name} Courts`,
      `${stateData.name} District Courts`,
      `${stateData.name} High Court`,
      `${stateData.name} Judiciary`,
      "eCourts India",
      "District Court Case Status",
      "Advocate Tushar Garg",
      "Supreme Court of India"
    ],
    alternates: {
      canonical: `/courts/${state}`,
    },
  };
}

export const revalidate = 30;

export default async function StateCourtsPage({ params }: Props) {
  const { state: stateSlug } = await params;
  
  const [stateData, courtsData] = await Promise.all([
    getStateBySlug(stateSlug).catch(() => null),
    getCourtsByState(stateSlug).catch(() => [])
  ]);

  if (!stateData) {
    notFound();
  }

  const courts = [...(courtsData || [])];

  // Merge/fallback with initialDistrictCourtsData so EVERY state page displays its district courts
  const fallbackDistricts = initialDistrictCourtsData.filter(
    (dc) => dc.state.toLowerCase() === stateData.name.toLowerCase() ||
            dc.state.toLowerCase().replace(/[^a-z0-9]+/g, '-') === stateSlug ||
            generateSlug(dc.state) === stateSlug
  );

  if (fallbackDistricts.length > 0) {
    const existingNames = new Set(courts.map((c: any) => c.name?.toLowerCase()));
    
    for (const dc of fallbackDistricts) {
      if (!existingNames.has(dc.courtName.toLowerCase())) {
        courts.push({
          _id: `fallback-${dc.id}`,
          name: dc.courtName,
          slug: generateSlug(dc.courtName),
          courtType: "District Court",
          city: dc.district,
          district: dc.district,
          website: dc.website,
          displayUrl: dc.displayUrl,
          isExternal: true
        });
      }
    }
  }

  // Find governing High Court
  const stateProfile = getStateProfileBySlug(stateSlug);
  const governingHC = allHighCourtsData.find(
    (hc) => hc.slug === stateData.highCourtSlug ||
            hc.name === stateData.governingHighCourt ||
            hc.statesCovered.some(s => s.toLowerCase() === stateData.name.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F8F7F3] font-sans pb-20">
      
      {/* 1. State Hero Section */}
      <section className="bg-[#101D35] text-white pt-24 pb-16 px-4 relative overflow-hidden border-b border-[#E7E4DC]/15">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: "url('/court/court_page_banner.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D35] via-[#101D35]/95 to-[#101D35]/80 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            
            {/* Breadcrumb */}
            <nav className="flex items-center text-xs text-white/70 mb-5 tracking-wide">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="mx-2 text-[#B69A63]" />
              <Link href="/courts" className="hover:text-white transition-colors">Courts Directory</Link>
              <ChevronRight size={12} className="mx-2 text-[#B69A63]" />
              <span className="text-[#B69A63] font-semibold">{stateData.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#B69A63] text-[11px] font-bold tracking-widest uppercase mb-3">
              <Building2 size={12} className="text-[#B69A63]" />
              SUBORDINATE JUDICIARY &amp; HIGH COURT JURISDICTION
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4 text-white font-bold tracking-tight">
              {stateData.name} Courts
            </h1>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6">
              {stateData.description || `Comprehensive judicial directory of Subordinate District & Sessions Courts, Family Courts, and Appellate Forums across ${stateData.name}.`}
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/75 pt-4 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <Building2 size={13} className="text-[#B69A63]" />
                <strong className="text-white">{courts.length}</strong> District Courts Verified
              </span>
              {governingHC && (
                <>
                  <span className="text-white/20">•</span>
                  <span className="flex items-center gap-1.5">
                    <Scale size={13} className="text-[#B69A63]" />
                    High Court: <strong className="text-white">{governingHC.name}</strong>
                  </span>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 2. Governing High Court Institutional Card (If Matched) */}
      {governingHC && (
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="bg-white border border-[#E7E4DC] rounded-2xl p-6 sm:p-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#101D35]/5 border border-[#101D35]/10 text-[10px] font-bold text-[#101D35] uppercase tracking-wider">
                  <Landmark size={11} className="text-[#B69A63]" />
                  GOVERNING CONSTITUTIONAL HIGH COURT
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#101D35]">
                  {governingHC.name}
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#737B88]">
                  <span><strong>Principal Seat:</strong> {governingHC.principalSeat}</span>
                  {governingHC.benches.length > 0 && (
                    <>
                      <span>•</span>
                      <span><strong>Benches:</strong> {governingHC.benches.join(", ")}</span>
                    </>
                  )}
                  <span>•</span>
                  <span><strong>Sanctioned Judges:</strong> {governingHC.sanctionedStrength.total}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={governingHC.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#101D35] hover:bg-[#B69A63] text-white hover:text-[#101D35] text-xs font-bold transition-all shadow-xs"
                >
                  <Globe size={13} />
                  <span>Official High Court Portal</span>
                  <ExternalLink size={11} />
                </a>
                <Link
                  href="/high-courts"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F8F7F3] hover:bg-[#E7E4DC] text-[#101D35] text-xs font-semibold border border-[#E7E4DC] transition-all"
                >
                  <span>All 25 High Courts</span>
                  <ArrowRight size={12} className="text-[#B69A63]" />
                </Link>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. Interactive District Courts Grid with Live Client Search */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        <StateCourtsClient 
          courts={courts} 
          stateSlug={stateSlug} 
          stateName={stateData.name} 
        />
      </section>

      {/* 4. Appellate Guidance Banner */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-[#101D35] border border-[#E7E4DC]/20 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B69A63] flex items-center gap-1.5">
              <Shield size={13} />
              APPELLATE PRACTICE &amp; SPECIAL LEAVE PETITIONS
            </span>
            <h3 className="text-lg font-serif font-bold text-white">
              Appeals Arising from {stateData.name} Courts
            </h3>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              Orders and judgments of the {stateData.name} High Court and specialized tribunals are subject to appellate review before the Supreme Court of India under Article 136 (Special Leave Petitions) and Article 32 (Constitutional Writs).
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#B69A63] hover:bg-[#CBB484] text-[#101D35] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            Chambers Consultation Desk
          </Link>
        </div>
      </section>

    </main>
  );
}

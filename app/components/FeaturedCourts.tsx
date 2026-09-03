import Image from "next/image";
import { ArrowRight, Landmark, Building2 } from "lucide-react";
import { fetchApi } from "../../lib/api/client";
import { getPublishedStates } from "../../lib/api/states";

// Reusable middle column for State Courts
function CourtColumn({
  title,
  courts,
  href,
  iconPath,
}: {
  title: string;
  courts: any[];
  href: string;
  iconPath: string;
}) {
  return (
    <div className="flex-1 bg-white border-r border-gray-100 last:border-r-0 px-6 py-6 flex flex-col justify-between group/col transition-all duration-300 hover:bg-gray-50/50">
      <div>
        {/* State Building icon header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="p-2 bg-[#0d1b3e]/5 rounded-xl group-hover/col:bg-[#c9a84c]/15 transition-colors">
            <Image 
              src={iconPath || "/home/district court.svg"} 
              alt={title} 
              width={36} 
              height={36} 
              className="object-contain" 
            />
          </div>
          <span className="text-[10px] font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
            {courts.length} Courts
          </span>
        </div>

        {/* State Title */}
        <h3 className="text-[14px] font-bold text-[#0d1b3e] uppercase leading-snug mb-3 tracking-wide flex items-center gap-1.5">
          <Building2 size={15} className="text-[#c9a84c]" />
          {title}
        </h3>

        {/* Court list */}
        <ul className="space-y-2 mb-6">
          {courts.slice(0, 7).map((c: any) => (
            <li key={c._id}>
              <a
                href={`${href}/${c.slug}`}
                className="group/item flex items-center gap-2 text-[12.5px] text-gray-600 hover:text-[#0d1b3e] font-medium transition-all duration-200 hover:translate-x-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                <span className="truncate">{c.name}</span>
              </a>
            </li>
          ))}
          {courts.length === 0 && (
            <li className="text-[12px] text-gray-400 italic">No courts listed yet.</li>
          )}
        </ul>
      </div>

      {/* View All Footer Link */}
      <a
        href={href}
        className="flex items-center justify-between text-[12px] text-[#0d1b3e] font-bold hover:text-[#c9a84c] transition-colors pt-3 border-t border-gray-100 group/link"
      >
        <span>Explore All District Courts</span>
        <ArrowRight size={13} strokeWidth={2.5} className="text-[#c9a84c] transition-transform duration-300 group-hover/link:translate-x-1" />
      </a>
    </div>
  );
}

export default async function FeaturedCourts() {
  let allCourts: any[] = [];
  let allStates: any[] = [];
  try {
    allCourts = await fetchApi('/courts');
    allStates = await getPublishedStates();
  } catch (error) {
    console.error("Failed to fetch featured courts data", error);
  }

  const featuredStates = allStates.filter(s => s.featured).slice(0, 3); // Top 3 featured states
  const featuredCourts = allCourts.filter(c => c.featured);

  return (
    <section className="bg-[#f8f9fb] py-12 lg:py-16 border-y border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#0d1b3e]/5 px-3 py-1 rounded-full mb-2">
            <Landmark size={14} className="text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase">JUDICIAL DIRECTORY</span>
          </div>
          <h2 className="font-serif text-[26px] sm:text-[32px] font-bold text-[#0d1b3e] tracking-tight uppercase">
            FEATURED COURTS OF INDIA
          </h2>
          <div className="w-12 h-1 bg-[#c9a84c] mx-auto mt-2 rounded-full" />
        </div>

        {/* 5-Column Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-5 mb-8">

          {/* ── 1. Supreme Court Card ── */}
          <div className="lg:w-[210px] flex-shrink-0 min-h-[260px] bg-[#071126] flex flex-col items-center justify-between p-5 relative overflow-hidden rounded-2xl shadow-md border border-gray-200 group">
            {/* Background Image with Dark Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('/home/featured_court.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071126] via-[#071126]/60 to-transparent" />
            
            {/* Card Content */}
            <div className="relative z-10 text-center w-full mt-auto">
              <h3 className="text-white font-serif font-bold text-[15px] uppercase tracking-wider leading-snug mb-3">
                SUPREME COURT<br /><span className="text-[#c9a84c]">OF INDIA</span>
              </h3>
              {/* Gold Button */}
              {/* <a
                href="/courts/supreme-court"
                className="inline-flex items-center gap-1.5 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#071126] text-[11px] font-bold px-4 py-2.5 rounded-xl transition-all duration-300 w-full justify-center shadow-md hover:-translate-y-0.5"
              >
                <span>Explore Supreme Court</span>
                <ArrowRight size={12} strokeWidth={2.5} />
              </a> */}
            </div>
          </div>

          {/* ── 2, 3, 4. Middle Cards Grid (Dynamic State Courts) ── */}
          <div className="flex flex-col lg:flex-row flex-1 bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-md">
            {featuredStates.map((state) => {
              const stateCourts = featuredCourts.filter(c => 
                (typeof c.stateId === 'object' ? c.stateId._id : c.stateId) === state._id
              );
              return (
                <CourtColumn
                  key={state._id}
                  title={state.name + " COURTS"}
                  courts={stateCourts}
                  href={`/courts/${state.slug}`}
                  iconPath={state.image && state.image.endsWith('.svg') ? state.image : "/home/district court.svg"}
                />
              );
            })}
            
            {/* Fallback if no featured states exist */}
            {featuredStates.length === 0 && (
              <div className="flex-1 bg-white p-8 flex items-center justify-center text-gray-400 italic text-sm">
                No featured states selected in Admin.
              </div>
            )}
          </div>

          {/* ── 5. All Courts of India Directory Card (Clean Cream Card) ── */}
          <div className="lg:w-[190px] min-h-[260px] flex-shrink-0 bg-[#f7f3ec] border border-[#e5e0d5] rounded-2xl flex flex-col items-center justify-between p-5 shadow-sm relative overflow-hidden group hover:border-[#c9a84c] transition-all">
            {/* Background Map Graphic */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 group-hover:scale-105 transition-transform p-3">
              <Image src="/home/india_logo.png" alt="All Courts of India" width={220} height={220} className="object-contain" />
            </div>
            
            <div className="relative z-10 w-full text-center mt-2">
              <h3 className="text-[#0d1b3e] font-serif font-bold text-[14px] uppercase leading-tight tracking-wider mb-1 drop-shadow-sm">
                ALL COURTS<br /><span className="text-[#c9a84c]">OF INDIA</span>
              </h3>
              <p className="text-gray-500 text-[10px] font-medium">Covering 28+ States & UTs</p>
            </div>

            <a
              href="/courts"
              className="relative z-10 w-full flex items-center justify-center gap-1.5 bg-[#0d1b3e] hover:bg-[#c9a84c] text-white hover:text-[#0d1b3e] text-[11px] font-bold py-2.5 px-3 rounded-xl transition-all duration-300 shadow-sm"
            >
              <span>Explore Now</span>
              <ArrowRight size={12} strokeWidth={2.5} />
            </a>
          </div>

        </div>

        {/* Main CTA Button: VIEW ALL COURTS IN INDIA */}
        <div className="flex justify-center pt-2">
          <a
            href="/courts"
            className="inline-flex items-center gap-2.5 bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-widest rounded-xl transition-all duration-300 border border-[#c9a84c]/40 shadow-xl hover:shadow-[#0d1b3e]/30 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Landmark size={16} className="text-[#c9a84c]" />
            <span>EXPLORE ALL COURTS IN INDIA</span>
            <ArrowRight size={14} className="text-[#c9a84c]" />
          </a>
        </div>

      </div>
    </section>
  );
}

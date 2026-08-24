import Image from "next/image";
import { ArrowRight, Landmark } from "lucide-react";

// Classical building/dome SVG icon for each column header
function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Dome */}
      <path d="M32 8 C20 8 14 18 14 26 L50 26 C50 18 44 8 32 8Z" />
      {/* Columns base */}
      <rect x="10" y="26" width="44" height="4" rx="1" />
      {/* Columns */}
      <line x1="16" y1="30" x2="16" y2="50" />
      <line x1="24" y1="30" x2="24" y2="50" />
      <line x1="32" y1="30" x2="32" y2="50" />
      <line x1="40" y1="30" x2="40" y2="50" />
      <line x1="48" y1="30" x2="48" y2="50" />
      {/* Base */}
      <rect x="8" y="50" width="48" height="4" rx="1" />
      {/* Steps */}
      <rect x="6" y="54" width="52" height="3" rx="1" />
    </svg>
  );
}

// White dome SVG for Supreme Court card (on dark green bg)
function SupremeCourtDomeIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 80 80"
      fill="none"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-90"
    >
      {/* Flag pole */}
      <line x1="40" y1="4" x2="40" y2="14" />
      {/* Flag */}
      <path d="M40 6 L50 9 L40 12Z" fill="white" stroke="white" strokeWidth="0.8" />
      {/* Main dome */}
      <path d="M40 14 C24 14 16 26 16 36 L64 36 C64 26 56 14 40 14Z" />
      {/* Drum/collar */}
      <rect x="20" y="36" width="40" height="5" rx="1" />
      {/* Small dome on top */}
      <path d="M40 10 C36 10 33 12 33 15 L47 15 C47 12 44 10 40 10Z" />
      {/* Columns */}
      <line x1="22" y1="41" x2="22" y2="58" />
      <line x1="30" y1="41" x2="30" y2="58" />
      <line x1="40" y1="41" x2="40" y2="58" />
      <line x1="50" y1="41" x2="50" y2="58" />
      <line x1="58" y1="41" x2="58" y2="58" />
      {/* Entablature */}
      <rect x="14" y="58" width="52" height="4" rx="1" />
      {/* Steps */}
      <rect x="10" y="62" width="60" height="3" rx="1" />
      <rect x="6" y="65" width="68" height="3" rx="1" />
    </svg>
  );
}

// India map outline SVG (simplified)
function IndiaMapIcon() {
  return (
    <svg
      width="80"
      height="90"
      viewBox="0 0 100 110"
      fill="none"
      stroke="#8b7355"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-60"
    >
      <path d="M50 5 L58 8 L70 6 L78 12 L80 22 L75 30 L78 38 L74 46 L70 52 L72 60 L68 68 L62 74 L58 82 L54 90 L50 96 L46 90 L42 82 L38 74 L32 68 L28 60 L30 52 L26 46 L22 38 L25 30 L20 22 L22 12 L30 6 L42 8 Z" />
      <path d="M50 96 L44 104 L50 108 L56 104 Z" />
      {/* Sri Lanka */}
      <ellipse cx="66" cy="100" rx="4" ry="5" />
    </svg>
  );
}

// Court list data
const delhiCourts = [
  "Rouse Avenue",
  "Tis Hazari",
  "Karkardooma",
  "Patiala House",
  "Rohini",
  "Dwarka",
  "Saket",
];

const punjabCourts = [
  "Punjab & Haryana High Court",
  "Chandigarh",
  "Mohali",
  "Amritsar",
  "Ludhiana",
];

const haryanaCourts = [
  "Karnal",
  "Panipat",
  "Kurukshetra",
  "Panchkula",
  "Faridabad",
  "Gurugram",
];

// Reusable middle column
function CourtColumn({
  title,
  courts,
  href,
  iconPath,
}: {
  title: string;
  courts: string[];
  href: string;
  iconPath: string;
}) {
  return (
    <div className="flex-1 bg-white border-r border-[#e5e9f0] px-6 py-6 flex flex-col">
      {/* Building icon */}
      <div className="mb-3 flex items-center justify-start h-[40px]">
        <Image src={iconPath} alt={title} width={80} height={80} className="object-contain -ml-2" />
      </div>

      {/* Title */}
      <h3 className="text-[13px] font-black text-[#0d1b3e] uppercase leading-snug mb-4 tracking-wide">
        {title}
      </h3>

      {/* Court list */}
      <ul className="flex-1 space-y-[6px] mb-4">
        {courts.map((c) => (
          <li key={c}>
            <a
              href={href}
              className="flex items-center gap-2 text-[12px] text-[#374151] hover:text-[#2d5a3d] transition-colors leading-snug"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-[#374151] flex-shrink-0 mt-px" />
              {c}
            </a>
          </li>
        ))}
      </ul>

      {/* View All */}
      <a
        href={href}
        className="flex items-center gap-1 text-[12px] text-[#374151] font-semibold hover:text-[#2d5a3d] transition-colors mt-auto pt-3 border-t border-[#e5e9f0]"
      >
        View All <ArrowRight size={11} strokeWidth={2} />
      </a>
    </div>
  );
}

export default function FeaturedCourts() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1280px] mx-auto px-4">

        {/* Section heading */}
        <div className="text-center mb-8">
          <h2
            className="text-[20px] font-bold text-[#0d1b3e] tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-roboto), sans-serif" }}
          >
            FEATURED COURTS
          </h2>
          <div className="w-10 h-[3px] bg-[#c9a84c] mx-auto mt-2" />
        </div>

        {/* 5-column layout */}
        <div className="flex flex-col lg:flex-row gap-4 mb-5">

          {/* ── 1. Supreme Court Card (dark green) ── */}
          <div className="lg:w-[190px] flex-shrink-0 min-h-[220px] bg-[#1e3d2f] flex flex-col items-center justify-end px-5 pt-6 pb-5 relative overflow-hidden rounded-xl shadow-sm">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/home/featured_court.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] via-[#0d1b3e]/60 to-transparent"></div>
            
            {/* Text */}
            <h3 className="text-white font-black text-[14px] uppercase text-center leading-tight tracking-wider mb-3 mt-auto relative z-10">
              SUPREME COURT<br />OF INDIA
            </h3>
            {/* Gold button */}
            <a
              href="/courts/supreme-court"
              className="inline-flex items-center gap-1.5 bg-[#c9a84c] text-[#1e3d2f] text-[10px] font-bold px-4 py-2 rounded-md transition-all duration-300 whitespace-nowrap w-full justify-center hover:bg-[#d4a93a] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c9a84c]/30 active:scale-[0.97] relative z-10"
            >
              Explore Supreme Court <ArrowRight size={10} strokeWidth={2.5} />
            </a>
          </div>

          {/* Middle 3 Cards (Attached) */}
          <div className="flex flex-col lg:flex-row flex-1 border border-[#dde4ee] rounded-xl overflow-hidden shadow-sm [&>div:last-child]:border-r-0">
            {/* ── 2. Delhi Courts ── */}
            <CourtColumn
              title="DELHI COURTS"
              courts={delhiCourts}
              href="/courts/delhi"
              iconPath="/home/supreme court.svg"
            />

            {/* ── 3. Punjab & Haryana ── */}
            <CourtColumn
              title={"PUNJAB & HARYANA\nHIGH COURT & DISTRICTS"}
              courts={punjabCourts}
              href="/courts/punjab-haryana"
              iconPath="/home/high_court.svg"
            />

            {/* ── 4. Haryana District Courts ── */}
            <CourtColumn
              title="HARYANA DISTRICT COURTS"
              courts={haryanaCourts}
              href="/courts/haryana"
              iconPath="/home/district court.svg"
            />
          </div>

          {/* ── 5. All Courts of India Card (cream) ── */}
          <div className="lg:w-[170px] min-h-[220px] flex-shrink-0 bg-[#f7f3ec] border border-[#e5e0d5] rounded-xl flex flex-col items-center justify-end px-5 py-6 shadow-sm relative overflow-hidden">
            {/* Absolute Background Logo */}
            <div className="absolute inset-0 flex items-center justify-center z-0 mb-8 pointer-events-none">
              <Image src="/home/india_logo.png" alt="All Courts of India" width={220} height={220} className="object-contain" />
            </div>
            
            <h3 className="text-[13px] font-black text-[#1e3d2f] uppercase text-center leading-tight tracking-wider relative z-10 mt-auto mb-3 drop-shadow-sm">
              ALL COURTS<br />OF INDIA
            </h3>
            <a
              href="/courts"
              className="group flex items-center gap-1 text-[12px] text-[#374151] font-semibold transition-all duration-300 hover:text-[#1e3d2f] hover:gap-2 relative z-10"
            >
              Explore Now <ArrowRight size={11} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* VIEW ALL COURTS button — dark green filled */}
        <div className="flex justify-center">
          <a
            href="/courts"
            className="inline-flex items-center gap-2 bg-[#1e3d2f] text-white px-10 py-3 text-[11.5px] font-bold uppercase tracking-widest rounded-md transition-all duration-300 hover:bg-[#162e23] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1e3d2f]/30 active:scale-[0.98]"
          >
            <Landmark size={15} strokeWidth={1.5} />
            VIEW ALL COURTS IN INDIA
          </a>
        </div>
      </div>
    </section>
  );
}

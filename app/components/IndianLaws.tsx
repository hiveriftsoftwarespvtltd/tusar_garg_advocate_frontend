import { ArrowRight } from "lucide-react";
import React from "react";

// Thin outline SVG icons for each law type — gold colored, matching reference
const lawIcons: Record<string, React.ReactElement> = {
  Constitutional: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Criminal: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Civil: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Corporate: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Tax: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Property: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Family: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Labour: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  Arbitration: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Consumer: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  Cyber: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 10l3 3 7-7" />
    </svg>
  ),
  IP: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
};

const lawLabels = [
  "Constitutional","Criminal","Civil","Corporate",
  "Tax","Property","Family","Labour",
  "Arbitration","Consumer","Cyber","IP",
];

export default function IndianLaws() {
  return (
    <section className="bg-white py-10 border-t border-[#e0e4ed]">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[20px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em]">
            EXPLORE INDIAN LAWS
          </h2>
          <div className="w-10 h-[3px] bg-[#c9a84c] mx-auto mt-2" />
        </div>

        {/* 12-icon grid — responsive breakpoints */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-3 mb-7">
          {lawLabels.map((label) => (
            <a
              key={label}
              href="/laws"
              className="flex flex-col items-center justify-center py-5 px-2 bg-[#fafafa] border border-[#e8ebf2] rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-[#fffbf0] hover:border-[#c9a84c]/40 group transition-all duration-300"
            >
              <span className="text-[#c9a84c] mb-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200">
                {lawIcons[label]}
              </span>
              <span className="text-[10.5px] font-semibold text-[#374151] text-center leading-tight group-hover:text-[#c9a84c] transition-colors">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* View All Laws button */}
        <div className="flex justify-center">
          <a
            href="/laws"
            className="border border-[#0d1b3e] text-[#0d1b3e] px-10 py-2.5 text-[11.5px] font-bold uppercase tracking-widest rounded-md transition-all duration-300 hover:bg-[#0d1b3e] hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0d1b3e]/20 active:scale-[0.98]"
          >
            VIEW ALL LAWS
          </a>
        </div>
      </div>
    </section>
  );
}

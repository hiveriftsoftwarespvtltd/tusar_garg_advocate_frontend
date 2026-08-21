"use client";

import { Search, ChevronDown } from "lucide-react";

const dropdowns = ["Court", "Judge", "Act", "Section", "Year", "Subject", "Case Type", "State"];

export default function SearchBar() {
  return (
    <section className="py-2 bg-white">
      <div className="mx-3 md:mx-6 lg:mx-8 bg-[#0d1b3e] rounded-xl py-8 px-4 shadow-sm">
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="text-[#c9a84c] text-[14px] font-bold tracking-[0.15em] uppercase mb-1">
            LEGAL RESEARCH – SEARCH ACROSS INDIA
          </p>
          <p className="text-white/70 text-[13px]">
            Search judgments, cases, courts, judges, Acts & sections...
          </p>
        </div>

        {/* Search Input */}
        <div className="flex border border-white/20 mb-4 bg-white overflow-hidden max-w-[860px] mx-auto rounded-xl">
          <div className="flex items-center px-4 flex-1 gap-3">
            <Search size={16} strokeWidth={1.5} className="text-[#9ca3af] flex-shrink-0" />
            <input
              type="text"
              placeholder="Start your research..."
              className="flex-1 text-[13px] text-[#374151] placeholder-[#9ca3af] outline-none py-3 bg-transparent"
              aria-label="Legal research search"
            />
          </div>
          <button className="bg-[#c9a84c] text-[#0d1b3e] px-8 py-3 text-[13px] font-bold tracking-widest uppercase flex-shrink-0 transition-all duration-300 hover:bg-[#d4a93a] hover:shadow-lg hover:shadow-[#c9a84c]/30 active:scale-[0.97]">
            SEARCH
          </button>
        </div>

        {/* Filter dropdowns */}
        <div className="flex flex-wrap justify-center gap-2">
          {dropdowns.map((label) => (
            <div key={label} className="relative">
              <select
                aria-label={`Filter by ${label}`}
                className="text-[12px] text-white bg-white/10 border border-white/20 pl-3 pr-2 py-2 cursor-pointer hover:border-[#c9a84c] transition-colors outline-none focus:border-[#c9a84c] rounded-md"
              >
                <option value="" className="text-[#0d1b3e]">{label}</option>
              </select>
            </div>
          ))}
          <button className="text-[12px] text-white/70 hover:text-[#c9a84c] transition-colors flex items-center gap-1 border border-white/20 px-3 py-2 rounded-md">
            ⚙ Advanced Search
          </button>
        </div>
      </div>
    </section>
  );
}

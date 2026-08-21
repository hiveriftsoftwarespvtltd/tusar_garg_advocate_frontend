import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";

export default function CourtsSearch() {
  const dropdowns = ["Court Type", "State", "District", "City", "Jurisdiction"];

  return (
    <section id="search" className="py-6 bg-white">
      <div className="max-w-[1280px] mx-4 xl:mx-auto bg-[#0d1b3e] rounded-xl py-10 px-6 lg:px-12 shadow-md">
        
        <h2 className="text-center text-[#c9a84c] text-[18px] font-bold uppercase tracking-wider mb-6" style={{ fontFamily: "var(--font-merriweather), serif" }}>
          SEARCH COURTS ACROSS INDIA
        </h2>

        {/* Search Input Bar */}
        <div className="flex bg-white rounded-md overflow-hidden mb-6 h-12">
          <div className="flex-shrink-0 flex items-center justify-center pl-4 pr-3 text-[#6b7280]">
            <Search size={18} strokeWidth={2} />
          </div>
          <input 
            type="text" 
            placeholder="Search by court, state, district or city..." 
            className="flex-1 text-[14px] outline-none text-[#374151] placeholder-[#9ca3af]"
          />
          <button className="bg-[#c9a84c] text-[#0d1b3e] px-8 font-bold text-[13px] uppercase tracking-wider hover:bg-[#d4a93a] transition-colors">
            SEARCH
          </button>
        </div>

        {/* Dropdowns row */}
        <div className="flex flex-wrap items-center gap-3 justify-center">
          {dropdowns.map((label) => (
            <div key={label} className="relative">
              <select
                aria-label={`Filter by ${label}`}
                className="text-[13px] text-white bg-transparent border border-white/30 rounded-md pl-4 pr-8 py-2.5 cursor-pointer hover:border-[#c9a84c] transition-colors outline-none focus:border-[#c9a84c] min-w-[140px]"
                style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
              >
                <option value="" className="text-[#0d1b3e]">{label}</option>
              </select>
              <ChevronDown size={14} className="text-white/60 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          ))}
          <button className="flex items-center gap-2 text-white/90 hover:text-[#c9a84c] text-[13px] font-medium transition-colors ml-2">
            <SlidersHorizontal size={14} /> Advanced Search
          </button>
        </div>

      </div>
    </section>
  );
}

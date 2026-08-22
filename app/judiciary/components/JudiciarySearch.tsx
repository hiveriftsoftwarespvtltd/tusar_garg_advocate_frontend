import { Search, ChevronDown, RefreshCw } from "lucide-react";

export default function JudiciarySearch() {
  const filters = [
    { label: "State", default: "All States" },
    { label: "Exam Type", default: "All Exam Types" },
    { label: "Stage", default: "All Stages" },
    { label: "Year", default: "All Years" },
    { label: "Resource Type", default: "All Resource Types" },
  ];

  return (
    <section className="relative z-20 max-w-[1280px] mx-auto px-4 mt-8 mb-12">
      <div className="bg-[#0d1b3e] rounded-xl border border-[#c9a84c]/20 shadow-xl overflow-hidden shadow-[#000000]/10">
        
        {/* Top Tabs (Optional, matching image: Search Judiciary, State-wise Exams, Advanced Search) */}
        <div className="flex items-center overflow-x-auto border-b border-white/10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-4 md:py-5 text-[11px] md:text-[12px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors flex-1 text-[#c9a84c] border-b-[3px] border-[#c9a84c] bg-white/5">
            <Search size={16} />
            Search Judiciary
          </button>
          <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-4 md:py-5 text-[11px] md:text-[12px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors flex-1 text-white/80 hover:bg-white/5 hover:text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            State-wise Exams
          </button>
          <button className="flex items-center justify-center gap-2 px-6 md:px-8 py-4 md:py-5 text-[11px] md:text-[12px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors flex-1 text-white/80 hover:bg-white/5 hover:text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/></svg>
            Advanced Search
          </button>
        </div>

        <div className="p-4 md:p-6 lg:p-8">
          {/* Main Search Input */}
          <div className="flex bg-white rounded-md overflow-hidden mb-6 h-[50px] sm:h-[56px] shadow-sm">
            <div className="flex items-center flex-1">
              <input 
                type="text" 
                placeholder="Search judiciary exams, syllabus, notifications, states..." 
                className="flex-1 text-[13px] md:text-[14px] outline-none text-[#374151] placeholder-[#9ca3af] pl-5 pr-4 bg-transparent h-full"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0d1b3e] w-[60px] sm:w-auto sm:px-8 md:px-10 font-bold text-[13px] md:text-[14px] uppercase tracking-wider hover:bg-[#d4a93a] transition-colors flex-shrink-0">
              <span className="hidden sm:block">SEARCH</span>
              <Search size={18} strokeWidth={2.5} className="block sm:hidden" />
              <Search size={16} strokeWidth={2.5} className="hidden sm:block" />
            </button>
          </div>

          {/* Filters Row */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-3 md:gap-4 flex-1">
              {filters.map((filter) => (
                <div key={filter.label} className="relative w-full">
                  <div className="absolute top-1.5 left-3 text-[9px] md:text-[10px] text-white/50">{filter.label}</div>
                  <select
                    aria-label={`Filter by ${filter.label}`}
                    className="w-full pt-5 md:pt-6 pb-2 px-3 text-[11px] md:text-[12px] font-bold text-white bg-transparent border border-white/20 rounded-md cursor-pointer hover:border-[#c9a84c]/50 transition-colors outline-none focus:border-[#c9a84c] appearance-none"
                  >
                    <option value="" className="text-[#0d1b3e]">{filter.default}</option>
                  </select>
                  <ChevronDown size={14} className="text-white/50 absolute right-3 bottom-2 md:bottom-3 pointer-events-none" />
                </div>
              ))}
            </div>
            
            <button className="flex items-center justify-center gap-1.5 text-white/80 hover:text-[#c9a84c] text-[12px] md:text-[13px] font-bold tracking-wider uppercase px-4 py-2.5 transition-colors w-full lg:w-auto flex-shrink-0 border border-white/10 lg:border-none rounded-md lg:rounded-none">
              RESET <RefreshCw size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

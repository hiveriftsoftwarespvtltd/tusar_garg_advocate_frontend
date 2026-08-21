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
        <div className="flex items-center border-b border-white/10 text-[13px] font-medium text-white/70">
          <button className="flex items-center gap-2 px-6 py-4 text-[#c9a84c] border-b-2 border-[#c9a84c] bg-white/5">
            <Search size={16} />
            Search Judiciary
          </button>
          <button className="flex items-center gap-2 px-6 py-4 hover:text-white hover:bg-white/5 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            State-wise Exams
          </button>
          <button className="flex items-center gap-2 px-6 py-4 hover:text-white hover:bg-white/5 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/></svg>
            Advanced Search
          </button>
        </div>

        <div className="p-6">
          {/* Main Search Input */}
          <div className="flex bg-white rounded-md overflow-hidden mb-6 h-[50px] shadow-sm">
            <input 
              type="text" 
              placeholder="Search judiciary exams, syllabus, notifications, states..." 
              className="flex-1 text-[14px] outline-none text-[#374151] placeholder-[#9ca3af] px-4"
            />
            <button className="flex items-center gap-2 bg-[#c9a84c] text-[#0d1b3e] px-8 font-bold text-[14px] uppercase tracking-wider hover:bg-[#d4a93a] transition-colors">
              SEARCH <Search size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 flex-1">
              {filters.map((filter) => (
                <div key={filter.label} className="flex-1 min-w-[150px]">
                  <label className="block text-white/60 text-[11px] mb-1.5">{filter.label}</label>
                  <div className="relative">
                    <select
                      aria-label={`Filter by ${filter.label}`}
                      className="w-full text-[13px] text-white bg-transparent border border-white/20 rounded-md pl-3 pr-8 py-2.5 cursor-pointer hover:border-[#c9a84c]/50 transition-colors outline-none focus:border-[#c9a84c] appearance-none"
                    >
                      <option value="" className="text-[#0d1b3e]">{filter.default}</option>
                    </select>
                    <ChevronDown size={14} className="text-white/60 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
            
            <button className="flex items-center gap-2 text-white/80 hover:text-white text-[12px] font-semibold tracking-wider uppercase mb-2 px-2 transition-colors">
              RESET <RefreshCw size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

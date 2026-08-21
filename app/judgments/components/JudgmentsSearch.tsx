import { Search, ChevronDown, RefreshCw } from "lucide-react";

export default function JudgmentsSearch() {
  const tabs = [
    { label: "SEARCH JUDGMENTS", active: true },
    { label: "CITATION SEARCH" },
    { label: "ADVANCED SEARCH" },
  ];

  const dropdowns = [
    "Court Type",
    "Select Court",
    "Subject",
    "Year",
    "Case Type",
  ];

  return (
    <section className="relative z-20 max-w-[1280px] mx-auto px-4 mt-8 mb-12">
      <div className="bg-[#0d1b3e] rounded-xl border border-[#c9a84c]/20 shadow-xl overflow-hidden">
        
        {/* Tabs */}
        <div className="flex items-center overflow-x-auto border-b border-white/10 hide-scrollbar">
          {tabs.map((tab, idx) => (
            <button 
              key={idx}
              className={`flex items-center justify-center px-8 py-5 text-[12px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors ${
                tab.active 
                  ? "text-[#c9a84c] border-b-2 border-[#c9a84c] bg-white/5" 
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6 md:p-8">
          {/* Main Search Input */}
          <div className="flex bg-white rounded-md overflow-hidden mb-6 h-[56px] shadow-sm">
            <div className="pl-4 pr-3 flex items-center justify-center text-[#9ca3af]">
              <Search size={18} strokeWidth={2} />
            </div>
            <input 
              type="text" 
              placeholder="Enter keywords, case title, parties, subject, citation..." 
              className="flex-1 text-[14px] outline-none text-[#374151] placeholder-[#9ca3af]"
            />
            <button className="flex items-center gap-2 bg-[#c9a84c] text-[#0d1b3e] px-10 font-bold text-[14px] uppercase tracking-wider hover:bg-[#d4a93a] transition-colors">
              SEARCH <Search size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Filters Row */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {dropdowns.map((label, idx) => (
              <div key={idx} className="relative flex-1 w-full">
                <select
                  aria-label={label}
                  className="w-full text-[13px] text-white/90 bg-transparent border border-white/20 rounded-md pl-4 pr-8 py-3 cursor-pointer hover:border-[#c9a84c]/50 transition-colors outline-none focus:border-[#c9a84c] appearance-none"
                >
                  <option value="" className="text-[#0d1b3e]">{label}</option>
                </select>
                <ChevronDown size={14} className="text-white/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            ))}
            
            <button className="flex items-center gap-2 text-[#e5e9f0] hover:text-[#c9a84c] text-[13px] font-bold tracking-wider uppercase px-4 py-3 transition-colors flex-shrink-0">
              Reset <RefreshCw size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

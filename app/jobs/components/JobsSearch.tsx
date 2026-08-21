import { Search, Briefcase, SlidersHorizontal, ChevronDown, RefreshCw } from "lucide-react";

export default function JobsSearch() {
  const tabs = [
    { label: "Search Jobs", icon: <Search size={16} />, active: true },
    { label: "Government Jobs", icon: <Briefcase size={16} /> },
    { label: "Advanced Search", icon: <SlidersHorizontal size={16} /> },
  ];

  const dropdowns = [
    { label: "Category", default: "All Categories" },
    { label: "Organization", default: "All Organizations" },
    { label: "State", default: "All States" },
    { label: "Qualification", default: "All Qualifications" },
    { label: "Experience", default: "Any Experience" },
    { label: "Last Date", default: "Any Time" },
  ];

  return (
    <section className="relative z-20 max-w-[1280px] mx-auto px-4 mt-8 mb-12">
      <div className="bg-[#0d1b3e] rounded-xl border border-[#c9a84c]/20 shadow-xl overflow-hidden">
        
        {/* Tabs */}
        <div className="flex items-center justify-between px-6 border-b border-white/10 hide-scrollbar">
          <div className="flex">
            {tabs.map((tab, idx) => (
              <button 
                key={idx}
                className={`flex items-center gap-2 px-8 py-5 text-[12px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors ${
                  tab.active 
                    ? "text-[#c9a84c] border-b-[3px] border-[#c9a84c] bg-white/5" 
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Main Search Input */}
          <div className="flex bg-white rounded-md overflow-hidden mb-6 h-[50px] shadow-sm">
            <div className="pl-4 pr-3 flex items-center justify-center text-[#9ca3af]">
              <Search size={18} strokeWidth={2} />
            </div>
            <input 
              type="text" 
              placeholder="Search by Job Title, Keywords, Organization, Department..." 
              className="flex-1 text-[13px] outline-none text-[#374151] placeholder-[#9ca3af]"
            />
            <button className="flex items-center gap-2 bg-[#c9a84c] text-[#0d1b3e] px-10 font-bold text-[13px] uppercase tracking-wider hover:bg-[#d4a93a] transition-colors">
              SEARCH <Search size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center gap-3">
            {dropdowns.map((dropdown, idx) => (
              <div key={idx} className="relative flex-1 min-w-[150px]">
                <div className="absolute top-2 left-3 text-[10px] text-white/50">{dropdown.label}</div>
                <select
                  aria-label={dropdown.label}
                  className="w-full pt-6 pb-2 px-3 text-[12px] font-bold text-white bg-transparent border border-white/20 rounded-md cursor-pointer hover:border-[#c9a84c]/50 transition-colors outline-none focus:border-[#c9a84c] appearance-none"
                >
                  <option value="" className="text-[#0d1b3e]">{dropdown.default}</option>
                </select>
                <ChevronDown size={14} className="text-white/50 absolute right-3 bottom-3 pointer-events-none" />
              </div>
            ))}
            
            <button className="flex items-center gap-1.5 text-white/80 hover:text-white text-[12px] font-bold tracking-wider uppercase px-2 transition-colors">
              RESET <RefreshCw size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

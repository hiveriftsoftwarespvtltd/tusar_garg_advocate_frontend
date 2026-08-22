import { Search, FileText, Hash, SlidersHorizontal, ChevronDown, RefreshCw } from "lucide-react";

export default function LawsSearch() {
  const tabs = [
    { label: "SEARCH LAWS", icon: <Search size={16} />, active: true },
    { label: "ACT SEARCH", icon: <FileText size={16} /> },
    { label: "SECTION SEARCH", icon: <Hash size={16} /> },
    { label: "ADVANCED SEARCH", icon: <SlidersHorizontal size={16} /> },
  ];

  const dropdowns = ["Select Category", "Select Act", "Select Year", "Select Status"];

  return (
    <section className="relative z-20 max-w-[1280px] mx-auto px-4 mt-8 mb-12">
      <div className="bg-[#0d1b3e] rounded-xl border border-[#c9a84c]/20 shadow-2xl overflow-hidden">
        
        {/* Tabs */}
        <div className="flex items-center overflow-x-auto border-b border-white/10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map((tab, idx) => (
            <button 
              key={idx}
              className={`flex items-center justify-center gap-2 px-6 md:px-8 py-4 md:py-5 text-[11px] md:text-[12px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors flex-1 ${
                tab.active 
                  ? "text-[#c9a84c] border-b-2 border-[#c9a84c] bg-white/5" 
                  : "text-white hover:bg-white/5 hover:text-[#c9a84c]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4 md:p-6 lg:p-8">
          {/* Main Search Input */}
          <div className="flex bg-white rounded-md overflow-hidden mb-6 h-[50px] sm:h-[56px] shadow-inner">
            <div className="flex items-center flex-1">
              <input 
                type="text" 
                placeholder="Search by Act, Section, Keyword, Rule, Regulation..." 
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
            <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-3 md:gap-4 flex-1">
              {dropdowns.map((label, idx) => (
                <div key={idx} className="relative w-full">
                  <select
                    aria-label={label}
                    className="w-full text-[12px] md:text-[13px] text-white/90 bg-transparent border border-white/20 rounded-md pl-3 pr-8 py-2.5 md:py-3 cursor-pointer hover:border-[#c9a84c]/50 transition-colors outline-none focus:border-[#c9a84c] appearance-none"
                  >
                    <option value="" className="text-[#0d1b3e]">{label}</option>
                  </select>
                  <ChevronDown size={14} className="text-white/50 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              ))}
            </div>
            
            <button className="flex items-center justify-center gap-2 text-white hover:text-[#c9a84c] text-[12px] md:text-[13px] font-bold tracking-wider uppercase px-4 py-2.5 transition-colors w-full lg:w-auto flex-shrink-0 border border-white/10 lg:border-none rounded-md lg:rounded-none">
              RESET <RefreshCw size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

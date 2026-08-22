import { Search, RotateCcw, ChevronDown, Layers, BookA, Scale, FileText, BookOpen } from "lucide-react";

export default function ResourcesFilterBar() {
  const resourceTypes = [
    { name: "All Resources", icon: <Layers size={14} /> },
    { name: "Glossary", icon: <BookA size={14} /> },
    { name: "Maxims", icon: <Scale size={14} /> },
    { name: "Procedures", icon: <FileText size={14} /> },
    { name: "Guides", icon: <BookOpen size={14} /> },
  ];
  
  const dropdowns = ["Category", "Resource Type", "Subject"];

  return (
    <section className="relative z-20 max-w-[1280px] mx-auto px-4 -mt-10 mb-8">
      <div className="bg-[#0d1b3e] rounded-xl border border-white/10 shadow-2xl overflow-hidden p-6 text-white">
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mb-6">
          {/* Search */}
          <div className="flex bg-white rounded-md overflow-hidden flex-1 w-full lg:w-1/2 h-[48px]">
            <input 
              type="text" 
              placeholder="Search resources, keywords, topics..." 
              className="flex-1 text-[13px] bg-transparent outline-none text-[#374151] placeholder-[#9ca3af] pl-5 pr-2 h-full"
            />
            <button className="flex items-center justify-center gap-2 bg-[#c9a84c] text-white w-[50px] sm:w-auto sm:px-8 font-bold text-[12px] uppercase tracking-wider hover:bg-[#d4b975] transition-colors flex-shrink-0">
              <span className="hidden sm:block">SEARCH</span>
              <Search size={16} strokeWidth={2.5} className="block sm:hidden" />
              <Search size={14} strokeWidth={2.5} className="hidden sm:block" />
            </button>
          </div>

          {/* Types Tabs */}
          <div className="flex items-center gap-3 w-full lg:w-1/2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {resourceTypes.map((type, idx) => (
              <button 
                key={idx} 
                className={`flex items-center gap-2 text-[11px] px-4 md:px-5 py-2 md:py-2.5 rounded-md transition-all whitespace-nowrap border ${
                  idx === 0 ? "bg-white/10 border-white/40 text-white font-bold" : "border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40 hover:text-white"
                }`}
              >
                {type.icon} {type.name}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row items-center gap-4 border-t border-white/10 pt-4 md:pt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-3 md:gap-4 flex-1">
            {dropdowns.map((label, idx) => (
              <div key={idx} className="relative w-full">
                <span className="absolute left-4 top-2 text-[9px] text-white/50 uppercase tracking-wider pointer-events-none">{label}</span>
                <select
                  aria-label={label}
                  className="w-full text-[12px] text-white bg-transparent border border-white/20 rounded-md pl-4 pr-8 pt-6 pb-2 cursor-pointer hover:border-white/40 transition-colors outline-none focus:border-[#c9a84c] appearance-none"
                >
                  <option value="" className="text-black">
                    {idx === 0 ? "All Categories" : idx === 1 ? "All Types" : "All Subjects"}
                  </option>
                </select>
                <ChevronDown size={14} className="text-white/70 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            ))}
          </div>
          
          <button className="flex items-center justify-center gap-2 text-white hover:text-[#c9a84c] text-[12px] font-bold tracking-wider px-2 py-2.5 transition-colors w-full lg:w-auto flex-shrink-0 border border-white/20 lg:border-none rounded-md lg:rounded-none">
            RESET <RotateCcw size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}

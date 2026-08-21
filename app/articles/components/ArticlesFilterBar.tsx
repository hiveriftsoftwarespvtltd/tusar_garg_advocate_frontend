import { Search, RotateCcw, ChevronDown, Flame } from "lucide-react";

export default function ArticlesFilterBar() {
  const popularTopics = ["Constitution", "Bail", "Arbitration", "IBC", "Criminal Law", "Tax"];
  const dropdowns = ["All Categories", "All Courts / Forums", "All Topics", "All Authors", "Latest First"];

  return (
    <section className="relative z-20 max-w-[1280px] mx-auto px-4 -mt-10 mb-8">
      <div className="bg-[#0d1b3e] rounded-xl border border-white/10 shadow-2xl overflow-hidden p-6 text-white">
        
        {/* Top Row: Search & Popular Topics */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
          {/* Search */}
          <div className="flex bg-white rounded-md overflow-hidden flex-1 w-full lg:w-[45%] h-[48px]">
            <div className="pl-4 pr-2 flex items-center justify-center text-[#9ca3af]">
              <Search size={18} strokeWidth={2} />
            </div>
            <input 
              type="text" 
              placeholder="Search articles by title, topic, author, keyword..." 
              className="flex-1 text-[13px] bg-transparent outline-none text-[#374151] placeholder-[#9ca3af]"
            />
            <button className="flex items-center justify-center gap-2 bg-[#c9a84c] text-white px-8 font-bold text-[12px] uppercase tracking-wider hover:bg-[#d4b975] transition-colors">
              SEARCH <Search size={14} strokeWidth={2.5} />
            </button>
          </div>

          {/* Popular Topics */}
          <div className="flex items-center gap-3 w-full lg:w-[55%] overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-2 text-white font-bold text-[12px] tracking-wider uppercase whitespace-nowrap flex-shrink-0">
              <Flame size={16} className="text-white" /> POPULAR TOPICS
            </div>
            <div className="flex items-center gap-2 ml-2">
              {popularTopics.map((topic, idx) => (
                <button key={idx} className="border border-white/20 text-white text-[11px] px-4 py-1.5 rounded-md hover:bg-white/10 hover:border-white/40 transition-all whitespace-nowrap">
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Filters */}
        <div className="flex flex-col md:flex-row items-center gap-4 border-t border-white/10 pt-6">
          {dropdowns.map((label, idx) => (
            <div key={idx} className="relative flex-1 w-full">
              <select
                aria-label={label}
                className="w-full text-[12px] text-white bg-transparent border border-white/20 rounded-md pl-4 pr-8 py-2.5 cursor-pointer hover:border-white/40 transition-colors outline-none focus:border-[#c9a84c] appearance-none"
              >
                <option value="" className="text-black">{label}</option>
              </select>
              <ChevronDown size={14} className="text-white/70 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          ))}
          
          <button className="flex items-center gap-2 text-white hover:text-[#c9a84c] text-[12px] font-bold tracking-wider px-4 transition-colors flex-shrink-0">
            RESET <RotateCcw size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}

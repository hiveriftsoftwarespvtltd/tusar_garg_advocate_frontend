"use client";

import { Search, RotateCcw, ChevronDown, Flame } from "lucide-react";

interface ArticlesFilterBarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  resetFilters: () => void;
}

export default function ArticlesFilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  resetFilters
}: ArticlesFilterBarProps) {
  const popularTopics = ["Constitution", "Bail", "Arbitration", "IBC", "Criminal Law", "Tax"];

  return (
    <section className="relative z-20 max-w-[1280px] mx-auto px-4 -mt-10 mb-8">
      <div className="bg-[#0d1b3e] rounded-xl border border-white/10 shadow-2xl overflow-hidden p-6 text-white">
        
        {/* Top Row: Search & Popular Topics */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mb-6">
          {/* Search Bar Input */}
          <div className="flex bg-white rounded-md overflow-hidden flex-1 w-full lg:w-[45%] h-[48px]">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title, topic, author, keyword..." 
              className="flex-1 text-[13px] bg-transparent outline-none text-[#374151] placeholder-[#9ca3af] pl-5 pr-2 h-full"
            />
            <button 
              type="button"
              className="flex items-center justify-center gap-2 bg-[#c9a84c] text-white w-[50px] sm:w-auto sm:px-8 font-bold text-[12px] uppercase tracking-wider hover:bg-[#d4b975] transition-colors flex-shrink-0"
            >
              <span className="hidden sm:block">SEARCH</span>
              <Search size={16} strokeWidth={2.5} className="block sm:hidden" />
              <Search size={14} strokeWidth={2.5} className="hidden sm:block" />
            </button>
          </div>

          {/* Popular Topics Buttons */}
          <div className="flex items-center gap-3 w-full lg:w-[55%] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex items-center gap-2 text-white font-bold text-[11px] md:text-[12px] tracking-wider uppercase whitespace-nowrap flex-shrink-0">
              <Flame size={16} className="text-[#c9a84c]" /> POPULAR TOPICS
            </div>
            <div className="flex items-center gap-2 ml-2">
              {popularTopics.map((topic, idx) => {
                const isSelected = selectedCategory.toLowerCase() === topic.toLowerCase();
                return (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedCategory(topic)}
                    className={`border text-[10px] md:text-[11px] px-3 md:px-4 py-1.5 rounded-md transition-all whitespace-nowrap ${
                      isSelected 
                        ? "bg-[#c9a84c] text-[#071126] font-bold border-[#c9a84c]" 
                        : "border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Row: Category Dropdown & Reset */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4 md:pt-6">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs font-bold uppercase text-gray-300">Filter Category:</span>
            <div className="relative flex-1 sm:w-64">
              <select
                aria-label="Filter Category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-[12px] text-white bg-[#071126] border border-white/20 rounded-lg pl-3 pr-8 py-2 cursor-pointer hover:border-white/40 transition-colors outline-none focus:border-[#c9a84c] appearance-none font-medium"
              >
                <option value="All">All Categories</option>
                <option value="Legal Analysis">Legal Analysis</option>
                <option value="Case Note">Case Notes</option>
                <option value="Practice Guide">Practice Guides</option>
                <option value="Explainer">Explainers</option>
                <option value="Constitutional Law">Constitutional Law</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Corporate Law">Corporate Law</option>
              </select>
              <ChevronDown size={14} className="text-white/70 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <button 
            type="button"
            onClick={resetFilters}
            className="flex items-center justify-center gap-2 text-white hover:text-[#c9a84c] text-[12px] font-bold tracking-wider px-3 py-2 transition-colors border border-white/20 hover:border-[#c9a84c] rounded-lg"
          >
            RESET ALL <RotateCcw size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}

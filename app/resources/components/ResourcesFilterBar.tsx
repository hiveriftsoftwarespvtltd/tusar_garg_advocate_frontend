"use client";

import { Search, RotateCcw, ChevronDown, Layers, BookA, Scale, FileText, BookOpen, X } from "lucide-react";

interface ResourcesFilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  totalCount: number;
}

export default function ResourcesFilterBar({
  searchTerm,
  setSearchTerm,
  activeTab,
  setActiveTab,
  activeCategory,
  setActiveCategory,
  totalCount
}: ResourcesFilterBarProps) {
  
  const resourceTabs = [
    { label: "All", name: "All Resources", icon: <Layers size={14} /> },
    { label: "Glossary", name: "Glossary", icon: <BookA size={14} /> },
    { label: "Maxims", name: "Maxims", icon: <Scale size={14} /> },
    { label: "Procedures", name: "Procedures", icon: <FileText size={14} /> },
  ];

  return (
    <section className="relative z-20 max-w-[1280px] mx-auto px-4 -mt-10 mb-8">
      <div className="bg-[#0d1b3e] rounded-2xl border border-[#c9a84c]/30 shadow-2xl overflow-hidden p-6 text-white">
        
        {/* Top Row: Search & Tabs */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mb-6">
          
          {/* Search Input */}
          <div className="flex bg-white rounded-xl overflow-hidden flex-1 w-full lg:w-1/2 h-[48px] border-2 border-transparent focus-within:border-[#c9a84c] transition-all">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search legal resources, maxims, procedures, keywords..." 
              className="flex-1 text-[13.5px] bg-transparent outline-none text-[#0d1b3e] placeholder-[#9ca3af] pl-5 pr-2 h-full font-medium"
            />
            {searchTerm && (
              <button 
                type="button"
                onClick={() => setSearchTerm("")}
                className="text-gray-400 hover:text-[#0d1b3e] px-2 flex items-center"
              >
                <X size={16} />
              </button>
            )}
            <button 
              type="button"
              className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#071126] w-[50px] sm:w-auto sm:px-7 font-bold text-[12px] uppercase tracking-wider transition-colors flex-shrink-0"
            >
              <span className="hidden sm:block">SEARCH ({totalCount})</span>
              <Search size={16} strokeWidth={2.5} className="block sm:hidden" />
              <Search size={14} strokeWidth={2.5} className="hidden sm:block" />
            </button>
          </div>

          {/* Types Tabs */}
          <div className="flex items-center gap-2 w-full lg:w-1/2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {resourceTabs.map((tab) => {
              const isActive = activeTab.toLowerCase() === tab.label.toLowerCase();
              return (
                <button 
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex items-center gap-2 text-[11.5px] px-4 md:px-5 py-2.5 rounded-xl transition-all whitespace-nowrap border cursor-pointer ${
                    isActive 
                      ? "bg-[#c9a84c] border-[#c9a84c] text-[#071126] font-bold shadow-md" 
                      : "border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {tab.icon} {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Row: Category Dropdowns & Reset */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#c9a84c]">Category Filter:</span>
            <select
              aria-label="Filter category"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="text-[12px] font-bold text-white bg-white/10 border border-white/20 rounded-xl px-4 py-2 cursor-pointer outline-none focus:border-[#c9a84c]"
            >
              <option value="All" className="text-[#0d1b3e]">All Categories</option>
              <option value="Glossary" className="text-[#0d1b3e]">Legal Glossary</option>
              <option value="Maxims" className="text-[#0d1b3e]">Legal Maxims</option>
              <option value="Procedures" className="text-[#0d1b3e]">Court Procedures</option>
              <option value="Syllabus" className="text-[#0d1b3e]">Syllabus & Material</option>
              <option value="Previous Papers" className="text-[#0d1b3e]">Previous Papers</option>
            </select>
          </div>

          {(searchTerm || activeTab !== "All" || activeCategory !== "All") && (
            <button 
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveTab("All");
                setActiveCategory("All");
              }}
              className="flex items-center gap-1.5 text-[#c9a84c] hover:text-white text-[12px] font-bold tracking-wider px-3 py-1.5 transition-colors border border-[#c9a84c]/40 rounded-lg hover:border-white"
            >
              <RotateCcw size={13} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
}

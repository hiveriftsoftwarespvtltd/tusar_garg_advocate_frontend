import { Landmark, Search, ChevronDown, RefreshCw } from "lucide-react";

export default function CollegesSearch() {
  const dropdowns = ["Select State", "Select City", "College Type", "Affiliation", "Course Offered"];

  return (
    <section className="relative z-20 max-w-[1280px] mx-auto px-4 mt-8 mb-8">
      <div className="bg-white rounded-xl border border-[#e8ebf2] shadow-xl overflow-hidden p-6 md:p-8">
        
        {/* Top Row: Heading & Main Search */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="flex items-center gap-3 md:w-1/3 flex-shrink-0">
            <div className="text-[#c9a84c]">
              <Landmark size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-[15px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              SEARCH LAW COLLEGES
            </h2>
          </div>
          
          <div className="flex bg-[#fafafa] border border-[#e8ebf2] rounded-md overflow-hidden flex-1 w-full h-[48px] hover:border-[#c9a84c]/50 transition-colors">
            <div className="pl-4 pr-2 flex items-center justify-center text-[#9ca3af]">
              <Search size={16} strokeWidth={2} />
            </div>
            <input 
              type="text" 
              placeholder="Search by college name, city, state, type..." 
              className="flex-1 text-[13px] bg-transparent outline-none text-[#374151] placeholder-[#9ca3af]"
            />
            <button className="flex items-center gap-2 bg-[#0d1b3e] text-[#c9a84c] px-8 font-bold text-[12px] uppercase tracking-wider hover:bg-[#1a2b5a] transition-colors">
              SEARCH <Search size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Bottom Row: Filters */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {dropdowns.map((label, idx) => (
            <div key={idx} className="relative flex-1 w-full">
              <select
                aria-label={label}
                className="w-full text-[12px] text-[#374151] bg-transparent border border-[#e8ebf2] rounded-md pl-4 pr-8 py-2.5 cursor-pointer hover:border-[#c9a84c]/50 transition-colors outline-none focus:border-[#c9a84c] appearance-none"
              >
                <option value="" className="text-[#6b7280]">{label}</option>
              </select>
              <ChevronDown size={14} className="text-[#6b7280] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          ))}
          
          <button className="flex items-center gap-2 text-[#374151] hover:text-[#c9a84c] text-[12px] font-bold tracking-wider px-2 transition-colors flex-shrink-0">
            Reset <RefreshCw size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}

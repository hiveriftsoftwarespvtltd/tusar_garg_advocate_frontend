import { Award, Scale, ChevronRight } from "lucide-react";

export default function PopularActs() {
  const acts = [
    { name: "The Constitution of India", year: "1950", sections: "470 Sections" },
    { name: "The Code of Criminal Procedure, 1973", year: "1973", sections: "484 Sections" },
    { name: "The Indian Penal Code, 1860", year: "1860", sections: "511 Sections" },
    { name: "The Civil Procedure Code, 1908", year: "1908", sections: "158S Sections" }, // Note: copied typo from image 158S
    { name: "The Indian Evidence Act, 1872", year: "1872", sections: "167 Sections" },
  ];

  return (
    <section className="bg-white h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Award size={20} className="text-[#c9a84c]" />
        <h2 className="text-[14px] md:text-[15px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
          POPULAR ACTS
        </h2>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 flex-1">
        {acts.map((act, idx) => (
          <div key={idx} className="flex items-center gap-4 group border border-[#e8ebf2] rounded-lg p-3 hover:border-[#c9a84c]/50 hover:shadow-md transition-all cursor-pointer">
            {/* Icon Box */}
            <div className="w-12 h-12 rounded-md bg-[#0d1b3e] flex items-center justify-center flex-shrink-0 relative overflow-hidden">
              <Scale size={20} strokeWidth={1.5} className="text-[#c9a84c] relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[13px] font-bold text-[#374151] leading-tight mb-1 group-hover:text-[#0d1b3e] transition-colors truncate">
                {act.name}
              </h3>
              <div className="flex items-center gap-2 text-[11px] text-[#6b7280]">
                <span>{act.year}</span>
                <span className="w-1 h-1 rounded-full bg-[#cbd5e1]" />
                <span>{act.sections}</span>
              </div>
            </div>

            {/* Arrow */}
            <ChevronRight size={18} className="text-[#9ca3af] group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-6 flex justify-center">
        <button className="border border-[#0d1b3e] text-[#0d1b3e] px-8 py-2.5 rounded-md font-bold text-[11px] uppercase tracking-wider hover:bg-[#0d1b3e] hover:text-white transition-all w-full md:w-auto">
          VIEW ALL ACTS
        </button>
      </div>
    </section>
  );
}

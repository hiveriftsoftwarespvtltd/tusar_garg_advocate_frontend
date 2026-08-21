import { Landmark, Scale, Building2, Briefcase, FileText } from "lucide-react";

export default function ExploreByCourt() {
  const courts = [
    { name: "Supreme Court of India", count: "28,745+", label: "Judgments", icon: <Landmark size={36} strokeWidth={1.2} /> },
    { name: "High Courts", count: "1,24,890+", label: "Judgments", icon: <Building2 size={36} strokeWidth={1.2} /> },
    { name: "District Courts", count: "3,45,678+", label: "Judgments", icon: <Briefcase size={36} strokeWidth={1.2} /> },
    { name: "Tribunals & Forums", count: "45,230+", label: "Judgments", icon: <Scale size={36} strokeWidth={1.2} /> },
    { name: "All Courts of India", count: "5,44,543+", label: "Judgments", icon: <FileText size={36} strokeWidth={1.2} /> },
  ];

  return (
    <section className="py-12 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Heading */}
        <div className="flex flex-col items-start mb-8">
          <h2 className="text-[14px] md:text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em] mb-2" style={{ fontFamily: "var(--font-merriweather), serif" }}>
            EXPLORE JUDGMENTS BY COURT
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c]"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {courts.map((court, idx) => (
            <div key={idx} className="bg-white border border-[#e8ebf2] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#c9a84c]/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              
              <div className="text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform duration-300">
                {court.icon}
              </div>
              
              <h3 className="text-[13px] font-bold text-[#374151] mb-2 leading-tight group-hover:text-[#0d1b3e] transition-colors h-[32px] flex items-center justify-center">
                {court.name}
              </h3>
              
              <p className="text-[18px] md:text-[22px] font-black text-[#0d1b3e] mb-1" style={{ fontFamily: "var(--font-merriweather), serif" }}>
                {court.count}
              </p>
              
              <p className="text-[11px] text-[#6b7280]">
                {court.label}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-[#0d1b3e] text-white px-8 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider hover:bg-[#1a2b5a] hover:shadow-lg transition-all">
            VIEW ALL COURTS
          </button>
        </div>

      </div>
    </section>
  );
}

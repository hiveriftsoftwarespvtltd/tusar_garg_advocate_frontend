import { ArrowRight } from "lucide-react";

export default function HighCourtsGrid() {
  const highCourts = [
    "Delhi High Court", "Allahabad High Court", "Bombay High Court",
    "Calcutta High Court", "Punjab and Haryana High Court", "Karnataka High Court"
  ];

  return (
    <section className="py-6 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-[20px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
            HIGH COURTS OF INDIA
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c] mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highCourts.map((court, idx) => (
            <div key={idx} className="bg-white border border-[#e8ebf2] rounded-xl p-8 min-h-[120px] flex flex-row items-center gap-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              
              <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                 {/* Standard Building Icon */}
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><path d="M4 4h16"/><path d="M6 4v16"/><path d="M10 4v16"/><path d="M14 4v16"/><path d="M18 4v16"/></svg>
              </div>

              <div className="flex-1">
                <h3 className="text-[14px] font-bold text-[#0d1b3e] mb-1 leading-tight group-hover:text-[#c9a84c] transition-colors">
                  {court}
                </h3>
                <span className="text-[12px] font-bold text-[#c9a84c] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={12} strokeWidth={2.5} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-2 border border-[#0d1b3e] text-[#0d1b3e] px-8 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider hover:bg-[#0d1b3e] hover:text-white transition-all duration-300">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
             VIEW ALL HIGH COURTS
          </button>
        </div>

      </div>
    </section>
  );
}

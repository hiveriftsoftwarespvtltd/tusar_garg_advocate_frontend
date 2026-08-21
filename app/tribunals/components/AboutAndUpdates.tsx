import { Check, ArrowRight, FileText } from "lucide-react";

export default function AboutAndUpdates() {
  const updates = [
    {
      title: "NCLT: Clarification on Moratorium under IBC",
      date: "12 May 2025",
      location: "New Delhi Bench",
    },
    {
      title: "NGT: Directions on Environmental Clearance Compliance",
      date: "06 May 2025",
      location: "Principal Bench",
    },
    {
      title: "RERA: Interest on Delayed Possession",
      date: "02 May 2025",
      location: "Various States",
    },
    {
      title: "ITAT: Deduction u/s 80A - Recent Decision",
      date: "29 Apr 2025",
      location: "Mumbai Bench",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col xl:flex-row gap-10">
        
        {/* Left Side: About */}
        <div className="xl:w-1/2 flex flex-col">
          <div className="flex flex-col items-start mb-6">
            <h2 className="text-[15px] md:text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em] mb-2" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              ABOUT TRIBUNALS & FORUMS
            </h2>
            <div className="w-10 h-[3px] bg-[#c9a84c]"></div>
          </div>
          
          <div className="bg-[#fafafa] rounded-xl p-8 flex-1 relative overflow-hidden">
            <p className="text-[13px] text-[#374151] leading-relaxed mb-6 relative z-10">
              Tribunals and specialized forums play a crucial role in providing speedy, expert and domain-specific adjudication of disputes. They are quasi-judicial bodies constituted to handle matters relating to companies, taxation, environment, consumer protection, real estate, debt recovery, telecom, securities and various other sectors.
            </p>
            
            <ul className="space-y-4 relative z-10">
              {[
                "Specialized expertise in subject-matter areas",
                "Faster dispute resolution",
                "Reduced burden on regular courts",
                "Accessible and cost-effective forums",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[13px] font-bold text-[#374151]">
                  <Check size={16} strokeWidth={3} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Decorative Icon */}
            <div className="absolute -bottom-6 -right-6 text-[#c9a84c] opacity-[0.15] pointer-events-none">
              <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M2 22h20"/><path d="M4 22V11"/><path d="M20 22V11"/><path d="M12 22v-8"/><path d="M8 22v-8"/><path d="M16 22v-8"/><path d="M3 11l9-9 9 9"/></svg>
            </div>
          </div>
        </div>

        {/* Right Side: Updates */}
        <div className="xl:w-1/2 flex flex-col">
          <div className="flex flex-col items-start mb-6">
            <h2 className="text-[15px] md:text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em] mb-2" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              LATEST ORDERS / UPDATES
            </h2>
            <div className="w-10 h-[3px] bg-[#c9a84c]"></div>
          </div>
          
          <div className="bg-white border border-[#e8ebf2] rounded-xl p-6 md:p-8 flex-1 flex flex-col">
            <div className="flex flex-col flex-1">
              {updates.map((update, idx) => (
                <div key={idx} className="flex items-center gap-4 group border-b border-[#e8ebf2] py-5 first:pt-0 last:border-0 last:pb-0 cursor-pointer">
                  {/* Icon */}
                  <div className="flex items-center justify-center border-2 border-[#c9a84c]/50 rounded text-[#c9a84c] p-2 flex-shrink-0">
                    <FileText size={20} strokeWidth={2} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="text-[13px] font-bold text-[#0d1b3e] leading-snug mb-1.5 group-hover:text-[#c9a84c] transition-colors line-clamp-1">
                      {update.title}
                    </h3>
                    <div className="flex flex-wrap items-center text-[11px] font-medium text-[#6b7280]">
                      <span>{update.date}</span>
                      <span className="px-2.5 text-[#cbd5e1]">|</span>
                      <span>{update.location}</span>
                    </div>
                  </div>

                  {/* Arrow Button */}
                  <div className="flex items-center flex-shrink-0">
                    <button className="flex items-center gap-1.5 text-[#0d1b3e] text-[10px] font-black uppercase tracking-wider group-hover:text-[#c9a84c] transition-all">
                      VIEW ORDER <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-8 flex justify-center">
              <button className="flex items-center gap-2 border border-[#c9a84c] text-[#c9a84c] px-8 py-2.5 rounded text-[11px] font-bold uppercase tracking-wider hover:bg-[#c9a84c] hover:text-white transition-all">
                VIEW ALL UPDATES <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

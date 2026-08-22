import { ChevronRight, ArrowRight } from "lucide-react";

export default function DistrictCourtsRegion() {
  const regions = [
    {
      title: "DELHI DISTRICT COURTS",
      districts: ["Rouse Avenue", "Tis Hazari", "Karkardooma", "Patiala House"]
    },
    {
      title: "PUNJAB DISTRICT COURTS",
      districts: ["Chandigarh", "Mohali", "Amritsar", "Ludhiana"]
    },
    {
      title: "HARYANA DISTRICT COURTS",
      districts: ["Karnal", "Panipat", "Kurukshetra", "Panchkula"]
    }
  ];

  return (
    <section className="pb-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-[20px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
            DISTRICT COURTS BY REGION
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c] mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <div key={idx} className="bg-white border border-[#e8ebf2] rounded-xl p-6 flex flex-row gap-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              
              {/* Circular Dark Icon */}
              <div className="w-16 h-16 rounded-full bg-[#0d1b3e] flex items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                 {/* Map silhouette/dome proxy icon */}
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 4 6 4 10v12h16V10c0-4-4-8-8-8z"/><path d="M12 2v8"/><path d="M8 10v12"/><path d="M16 10v12"/></svg>
              </div>

              <div className="flex-1">
                <h3 className="text-[13px] font-bold text-[#0d1b3e] mb-3 leading-tight tracking-wider uppercase">
                  {region.title}
                </h3>
                <ul className="space-y-2.5 mb-4">
                  {region.districts.map((district, didx) => (
                    <li key={didx} className="flex gap-2 items-center text-[12.5px] text-[#374151] hover:text-[#c9a84c] transition-colors cursor-pointer">
                      <ChevronRight size={14} className="text-[#c9a84c] flex-shrink-0" />
                      {district}
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-flex items-center gap-1 text-[12px] font-bold text-[#c9a84c] group-hover:gap-2 transition-all">
                  Explore All <ArrowRight size={12} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DistrictCourtsRegion({ states }: { states: any[] }) {

  return (
    <section className="pb-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-[20px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
            DISTRICT COURTS BY STATE
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c] mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {states.map((state) => (
            <Link key={state._id} href={`/courts/${state.slug}`} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#f0f0f0] overflow-hidden flex flex-col">
              <div 
                className="h-[220px] relative p-6 flex flex-col justify-end bg-[#0d1b3e] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                style={state.image ? { backgroundImage: `url(${state.image})` } : {}}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 z-10">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2C8 2 4 6 4 10v12h16V10c0-4-4-8-8-8z"/><path d="M12 2v8"/><path d="M8 10v12"/><path d="M16 10v12"/></svg>
                </div>
                {state.code && (
                  <span className="relative z-10 inline-block px-2.5 py-1 bg-[#c9a84c] text-[#0d1b3e] text-[11px] font-bold tracking-wider uppercase rounded-full mb-2 w-fit">
                    {state.code}
                  </span>
                )}
              </div>
              <div className="p-5 flex-1 flex items-center justify-between">
                <h3 className="text-[18px] font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors">
                  {state.name}
                </h3>
                <ChevronRight size={18} className="text-gray-400 transform group-hover:translate-x-1 group-hover:text-[#c9a84c] transition-all" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

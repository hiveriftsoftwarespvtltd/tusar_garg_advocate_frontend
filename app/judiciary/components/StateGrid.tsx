import { ArrowRight } from "lucide-react";

// Placeholder SVG for a state map outline
function StateMapIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 100 100" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinejoin="round" className="opacity-80">
      <path d="M50 10 L65 25 L85 20 L90 40 L75 55 L80 75 L60 85 L40 90 L20 80 L15 60 L30 45 L10 30 L25 15 Z" />
    </svg>
  );
}

export default function StateGrid() {
  const states = [
    { name: "Haryana Judiciary", features: ["Syllabus", "Previous Papers", "Notifications"] },
    { name: "Punjab Judiciary", features: ["Syllabus", "Previous Papers", "Notifications"] },
    { name: "Delhi Judicial Services", features: ["Syllabus", "Previous Papers", "Notifications"] },
    { name: "Rajasthan Judiciary", features: ["Syllabus", "Previous Papers", "Notifications"] },
    { name: "Uttar Pradesh Judiciary", features: ["Syllabus", "Previous Papers", "Notifications"] },
    { name: "Madhya Pradesh Judiciary", features: ["Syllabus", "Previous Papers", "Notifications"] },
  ];

  return (
    <section className="py-12 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="flex items-center">
            <div className="w-12 md:w-16 h-[1px] bg-[#c9a84c]"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
          </div>
          <h2 className="text-[14px] md:text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em] text-center" style={{ fontFamily: "var(--font-merriweather), serif" }}>
            EXPLORE JUDICIARY BY STATE
          </h2>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
            <div className="w-12 md:w-16 h-[1px] bg-[#c9a84c]"></div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {states.map((state, idx) => (
            <div key={idx} className="bg-white border border-[#e8ebf2] rounded-lg p-4 md:p-5 flex flex-col items-center justify-between text-center shadow-sm hover:shadow-md hover:border-[#c9a84c]/50 hover:-translate-y-1 transition-all duration-300 group h-full">
              <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 100 100" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round" className="opacity-80">
                  <path d="M50 10 L65 25 L85 20 L90 40 L75 55 L80 75 L60 85 L40 90 L20 80 L15 60 L30 45 L10 30 L25 15 Z" />
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 w-full">
                <h3 className="text-[12px] xl:text-[13px] font-black text-[#0d1b3e] mb-1.5 leading-tight group-hover:text-[#c9a84c] transition-colors" style={{ fontFamily: "var(--font-merriweather), serif" }}>
                  {state.name}
                </h3>
                <div className="text-[9px] xl:text-[10px] text-[#6b7280] font-medium leading-relaxed mb-4">
                  {state.features.map((feature, i) => (
                    <span key={i}>
                      {feature}
                      {i < state.features.length - 1 && <span className="inline-block mx-1.5 text-[#c9a84c]">•</span>}
                    </span>
                  ))}
                </div>
              </div>
              <a href="#" className="flex items-center justify-center gap-1 text-[10px] font-bold text-[#c9a84c] group-hover:text-[#d4a93a] transition-colors uppercase tracking-wider flex-shrink-0">
                Explore <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

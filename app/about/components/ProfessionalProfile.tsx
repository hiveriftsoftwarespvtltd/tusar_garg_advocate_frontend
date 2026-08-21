import Image from "next/image";

export default function ProfessionalProfile() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left: Portrait */}
          <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0 relative">
            {/* The gold border container */}
            <div className="relative rounded-xl overflow-hidden bg-[#0d1b3e] pt-6 flex justify-center border-2 border-[#c9a84c]">
               <div className="relative w-[300px] h-[350px]">
                 <Image
                    src="/advocate-portrait.png"
                    alt="Advocate Tushar Garg"
                    fill
                    className="object-cover object-top"
                 />
               </div>
            </div>

            {/* Floating Gold Scale Icon Badge */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#0d1b3e] border-2 border-[#c9a84c] rounded-full flex items-center justify-center shadow-lg z-20">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c9a84c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v18" />
                <path d="M3 21h18" />
                <path d="M12 7l-8 4v2" />
                <path d="M12 7l8 4v2" />
                <path d="M4 13c0 2.2 1.8 4 4 4s4-1.8 4-4" />
                <path d="M12 13c0 2.2 1.8 4 4 4s4-1.8 4-4" />
              </svg>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex-1">
            <div className="w-12 h-[2px] bg-[#c9a84c] mb-4" />
            <h2 
              className="text-[24px] md:text-[28px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em] mb-6"
              style={{ fontFamily: "var(--font-merriweather), serif" }}
            >
              PROFESSIONAL PROFILE
            </h2>
            
            <p className="text-[14px] md:text-[15px] text-[#374151] leading-relaxed mb-6">
              Advocate Tushar Garg is a seasoned legal professional with around 10 years of experience in litigation and advisory services before the Supreme Court of India, High Courts, and subordinate courts.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#374151] leading-relaxed">
              As an Advocate-on-Record (AOR) of the Supreme Court, he regularly handles complex constitutional, civil, criminal, and matrimonial matters, representing clients at the highest judicial level.
            </p>
          </div>
        </div>

        {/* Bottom 4 Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#e8ebf2] mt-20 max-w-[1000px] mx-auto">
          {/* Badge 1 */}
          <div className="flex flex-col items-center text-center group cursor-pointer px-4 py-6 md:py-0">
            <div className="w-20 h-20 rounded-full bg-white border border-[#e8ebf2] flex items-center justify-center shadow-sm mb-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-[#c9a84c]">
              <div className="w-14 h-14 rounded-full bg-[#0d1b3e] flex items-center justify-center">
                 {/* Pillar Icon */}
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><path d="M4 4h16"/><path d="M6 4v16"/><path d="M10 4v16"/><path d="M14 4v16"/><path d="M18 4v16"/></svg>
              </div>
            </div>
            <h3 className="text-[13px] font-bold text-[#0d1b3e] uppercase tracking-wider leading-snug" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              LEGAL<br/>EXCELLENCE
            </h3>
            <hr className="w-8 border-t-[3px] border-[#c9a84c] mt-4" />
          </div>

          {/* Badge 2 */}
          <div className="flex flex-col items-center text-center group cursor-pointer px-4 py-6 md:py-0">
            <div className="w-20 h-20 rounded-full bg-white border border-[#e8ebf2] flex items-center justify-center shadow-sm mb-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-[#c9a84c]">
              <div className="w-14 h-14 rounded-full bg-[#0d1b3e] flex items-center justify-center">
                 {/* Dome Icon */}
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 4 6 4 10v12h16V10c0-4-4-8-8-8z"/><path d="M12 2v8"/><path d="M8 10v12"/><path d="M16 10v12"/></svg>
              </div>
            </div>
            <h3 className="text-[13px] font-bold text-[#0d1b3e] uppercase tracking-wider leading-snug" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              SUPREME COURT<br/>PRACTICE
            </h3>
            <hr className="w-8 border-t-[3px] border-[#c9a84c] mt-4" />
          </div>

          {/* Badge 3 */}
          <div className="flex flex-col items-center text-center group cursor-pointer px-4 py-6 md:py-0">
            <div className="w-20 h-20 rounded-full bg-white border border-[#e8ebf2] flex items-center justify-center shadow-sm mb-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-[#c9a84c]">
              <div className="w-14 h-14 rounded-full bg-[#0d1b3e] flex items-center justify-center">
                 {/* Users Icon */}
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
            </div>
            <h3 className="text-[13px] font-bold text-[#0d1b3e] uppercase tracking-wider leading-snug" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              TRUSTED<br/>REPRESENTATION
            </h3>
            <hr className="w-8 border-t-[3px] border-[#c9a84c] mt-4" />
          </div>

          {/* Badge 4 */}
          <div className="flex flex-col items-center text-center group cursor-pointer px-4 py-6 md:py-0">
            <div className="w-20 h-20 rounded-full bg-white border border-[#e8ebf2] flex items-center justify-center shadow-sm mb-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-[#c9a84c]">
              <div className="w-14 h-14 rounded-full bg-[#0d1b3e] flex items-center justify-center">
                 {/* Scale Icon */}
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18" /><path d="M3 21h18" /><path d="M12 7l-8 4v2" /><path d="M12 7l8 4v2" /><path d="M4 13c0 2.2 1.8 4 4 4s4-1.8 4-4" /><path d="M12 13c0 2.2 1.8 4 4 4s4-1.8 4-4" /></svg>
              </div>
            </div>
            <h3 className="text-[13px] font-bold text-[#0d1b3e] uppercase tracking-wider leading-snug" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              PROFESSIONAL<br/>INTEGRITY
            </h3>
            <hr className="w-8 border-t-[3px] border-[#c9a84c] mt-4" />
          </div>

        </div>
      </div>
    </section>
  );
}

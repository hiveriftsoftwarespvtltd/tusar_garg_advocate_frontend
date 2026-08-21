import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TribunalsHero() {
  return (
    <section className="relative w-full bg-[#0d1b3e] text-white overflow-hidden pb-16 pt-12">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: "url('/supreme-court.png')", // Fallback image for now
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e] via-[#0d1b3e]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e] via-transparent to-[#0d1b3e]"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10 flex flex-col justify-center">
        <div className="w-full md:w-[60%] lg:w-[50%]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-[#e5e9f0] font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Tribunals & Forums</span>
          </div>

          <h1 
            className="text-[44px] md:text-[52px] lg:text-[56px] font-bold leading-tight mb-4 tracking-wide drop-shadow-md"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            Tribunals & Forums
          </h1>
          <div className="flex gap-1 mb-6">
            <div className="w-10 h-[3px] bg-[#c9a84c]"></div>
            <div className="w-4 h-[3px] bg-[#c9a84c]"></div>
          </div>
          <p className="text-[15px] md:text-[16px] text-[#e5e9f0] leading-relaxed font-medium mb-8 max-w-lg">
            Explore Tribunals, Appellate Authorities and Specialized Forums across India.
          </p>
        </div>
      </div>
      
      {/* Optional slant bottom edge for design */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 hidden md:block">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8">
          <path d="M1200 120L0 120 0 0 1200 120z" fill="#fafafa"></path>
          <path d="M1200 120L0 120 0 115 1200 115z" fill="#c9a84c"></path>
        </svg>
      </div>
    </section>
  );
}

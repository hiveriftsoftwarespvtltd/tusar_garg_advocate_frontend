import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TribunalsHero() {
  return (
    <section className="relative w-full bg-[#0d1b3e] text-white overflow-hidden pb-16 pt-12">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/tribunals/tribulnals_banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/80 via-[#0d1b3e]/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10 flex flex-col justify-center">
        <div className="w-full md:w-[60%] lg:w-[50%]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-[#e5e9f0] font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Tribunals & Forums</span>
          </div>

          <h1 
            className="text-white text-[32px] md:text-[44px] font-black uppercase tracking-wider mb-4 leading-tight"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            Tribunals & Forums
          </h1>
          <div className="flex gap-1 mb-4">
            <div className="w-10 h-[3px] bg-[#c9a84c]"></div>
            <div className="w-4 h-[3px] bg-[#c9a84c]"></div>
          </div>
          <p className="text-[#c9a84c] text-[15px] md:text-[18px] font-medium leading-relaxed mb-8 max-w-lg">
            Explore Tribunals, Appellate Authorities and Specialized Forums across India.
          </p>
        </div>
      </div>
      
      {/* Slant bottom edge removed as requested */}
    </section>
  );
}

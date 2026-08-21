import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CollegesHero() {
  return (
    <section className="relative w-full bg-[#0d1b3e] text-white overflow-hidden pb-20 pt-12">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('/supreme-court.png')", // Fallback image for now
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e] via-[#0d1b3e]/90 to-[#0d1b3e]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e] via-transparent to-[#0d1b3e]"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10 flex flex-col justify-center h-full pt-8">
        <div className="w-full md:w-[60%] lg:w-[50%]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-[#e5e9f0] font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-[#e5e9f0]" />
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <ChevronRight size={12} className="text-[#e5e9f0]" />
            <span className="text-white">Law Colleges</span>
          </div>

          <h1 
            className="text-[44px] md:text-[52px] lg:text-[56px] font-bold leading-tight mb-6 tracking-wide drop-shadow-md"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            Law Colleges
          </h1>
          <p className="text-[14px] md:text-[15px] text-[#e5e9f0] leading-relaxed font-medium mb-8 max-w-sm">
            Find leading law colleges in India, including NLU&apos;s, private and government institutions offering quality legal education.
          </p>
        </div>
      </div>
      
      {/* Decorative Gold Slant */}
      <div className="absolute top-0 right-[35%] w-[4px] h-[150%] bg-[#c9a84c] transform rotate-[25deg] origin-top opacity-80 hidden lg:block shadow-[0_0_20px_rgba(201,168,76,0.3)] z-10"></div>
    </section>
  );
}

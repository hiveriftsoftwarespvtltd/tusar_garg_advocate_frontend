import { ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function DelhiHero() {
  return (
    <section className="relative w-full h-[450px] lg:h-[500px] flex items-center bg-[#0d1b3e]">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/featured_court.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e] via-[#0d1b3e]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="max-w-[1280px] mx-auto w-full px-4 relative z-10 flex flex-col items-start mt-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[12px] md:text-[13px] font-medium text-white/80 mb-6 tracking-wide">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
          <ChevronRight size={14} className="opacity-70" />
          <Link href="/courts" className="hover:text-[#c9a84c] transition-colors">Courts</Link>
          <ChevronRight size={14} className="opacity-70" />
          <span className="text-white">Delhi Courts</span>
        </nav>

        {/* Title */}
        <h1 className="text-[40px] md:text-[56px] font-serif text-white mb-3 tracking-tight" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
          DELHI COURTS
        </h1>

        {/* Subtitle */}
        <h2 className="text-[18px] md:text-[22px] font-semibold text-[#c9a84c] mb-5 max-w-xl leading-snug">
          Experienced Legal Representation Across<br className="hidden md:block" /> All Delhi Courts
        </h2>

        {/* Description */}
        <p className="text-[14px] md:text-[15px] text-white/90 max-w-[450px] leading-relaxed mb-8">
          From trial courts to the Hon'ble High Court of Delhi, 
          we provide strategic, result-oriented legal solutions 
          tailored to your case.
        </p>

        {/* CTA Button */}
        <button className="flex items-center gap-2.5 bg-[#c9a84c] text-[#0d1b3e] font-bold text-[13px] uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#d4a93a] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
          <Calendar size={18} strokeWidth={2} />
          FREE CONSULTATION
        </button>

      </div>
    </section>
  );
}

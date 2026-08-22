import Link from "next/link";
import { MapPin, Library, GraduationCap, Trophy, ChevronRight } from "lucide-react";

export default function CollegesHero() {
  const stats = [
    { value: "500+", label: "Law Colleges", icon: <Library size={18} /> },
    { value: "All States", label: "Covered", icon: <MapPin size={18} /> },
    { value: "25+", label: "NLU's", icon: <Trophy size={18} /> },
    { value: "10+", label: "Exams", icon: <GraduationCap size={18} /> }
  ];

  return (
    <section className="relative w-full bg-[#0d1b3e] text-white overflow-hidden pb-20 pt-12">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/college/college_page_banner.png')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/80 via-[#0d1b3e]/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10 flex flex-col justify-center h-full pt-8">
        <div className="w-full md:w-[60%] lg:w-[50%]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-[#e5e9f0] font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <span>›</span>
            <span className="text-white">Law Colleges</span>
          </div>

          <h1 
            className="text-white text-[32px] md:text-[44px] font-black uppercase tracking-wider mb-4 leading-tight"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            Law Colleges
          </h1>
          <p className="text-[#c9a84c] text-[15px] md:text-[18px] font-medium leading-relaxed mb-8 max-w-sm">
            Find leading law colleges in India, including NLU&apos;s, private and government institutions offering quality legal education.
          </p>
        </div>
      </div>
    </section>
  );
}

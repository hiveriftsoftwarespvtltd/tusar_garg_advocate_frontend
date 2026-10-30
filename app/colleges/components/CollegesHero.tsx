import Link from "next/link";
import { MapPin, Library, GraduationCap, Trophy, Scale, BookOpen } from "lucide-react";

export default function CollegesHero() {
  const stats = [
    { value: "26 NLUs", label: "National Law Universities", icon: <Trophy size={18} className="text-[#c9a84c]" /> },
    { value: "60+", label: "Premier Institutions", icon: <Library size={18} className="text-[#c9a84c]" /> },
    { value: "All States", label: "Pan-India Coverage", icon: <MapPin size={18} className="text-[#c9a84c]" /> },
    { value: "CLAT & AILET", label: "Entrance Framework", icon: <GraduationCap size={18} className="text-[#c9a84c]" /> }
  ];

  return (
    <section className="relative w-full bg-[#0d1b3e] text-white overflow-hidden pb-12 pt-10 border-b border-[#c9a84c]/20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{
          backgroundImage: "url('/college/college_page_banner.png')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e] via-[#0d1b3e]/90 to-[#0d1b3e]/70 pointer-events-none"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] text-[#e5e9f0] font-medium tracking-wide mb-4">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
          <span>›</span>
          <Link href="/resources" className="hover:text-[#c9a84c] transition-colors">Resources</Link>
          <span>›</span>
          <span className="text-[#c9a84c]">Law Colleges & Legal Education</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-bold uppercase tracking-wider mb-3">
              <Scale size={13} />
              <span>National Institutional Repository</span>
            </div>
            <h1 className="font-serif text-white text-[28px] md:text-[40px] uppercase tracking-wide leading-tight mb-3">
              Law Colleges & Legal Education in India
            </h1>
            <p className="text-white/80 text-[13px] md:text-[15px] leading-relaxed">
              Complete directory of all 26 National Law Universities (NLUs), Central and State law faculties, 
              degree curricula (5-Year Integrated, 3-Year LL.B., LL.M., Ph.D.), national entrance exams, 
              and Bar Council of India statutory practice pathways.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
            {stats.map((s, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm flex flex-col justify-between"
              >
                <div className="mb-2">{s.icon}</div>
                <div>
                  <p className="text-lg font-bold text-white font-mono leading-none">{s.value}</p>
                  <p className="text-[10.5px] text-white/60 mt-1 uppercase tracking-wider">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

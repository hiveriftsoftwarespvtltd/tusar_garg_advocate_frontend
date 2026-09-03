import Link from "next/link";

export default function JudiciaryHero() {
  const tags = [
    "Judicial Services",
    "State-wise Exams",
    "Syllabus",
    "Previous Papers",
    "Current Legal Affairs",
    "Preparation Resources",
  ];

  return (
    <section className="relative w-full bg-[#0d1b3e] text-white overflow-hidden pb-12 pt-16">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/juduciary/judiciary_banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/80 via-[#0d1b3e]/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full lg:w-[80%]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-[#e5e9f0] font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Judiciary Exams</span>
          </div>

          <h1 className="font-serif text-white text-[32px] md:text-[44px] uppercase tracking-wider mb-4 leading-tight"
           
          >
            JUDICIARY
          </h1>
          <p className="text-[#c9a84c] text-[15px] md:text-[18px] font-medium leading-relaxed mb-8 max-w-2xl">
            Explore judiciary exams, state-wise judicial services, syllabus, previous papers, current legal affairs and preparation resources across India.
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-3 text-white/90 text-[13px] font-normal tracking-wide mb-10 max-w-2xl">
            {tags.map((tag, idx) => (
              <span key={idx} className="flex items-center gap-3">
                <span>{tag}</span>
                {idx < tags.length - 1 && <span>•</span>}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pb-4">
            <button className="flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0d1b3e] px-6 py-3 rounded-md font-bold text-[13px] uppercase tracking-wider hover:bg-[#d4a93a] transition-all whitespace-nowrap flex-shrink-0 w-full sm:w-auto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
              Explore Exams
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-6 py-3 rounded-md font-bold text-[13px] uppercase tracking-wider hover:bg-white/10 transition-all whitespace-nowrap flex-shrink-0 w-full sm:w-auto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Browse States
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-6 py-3 rounded-md font-bold text-[13px] uppercase tracking-wider hover:bg-white/10 transition-all whitespace-nowrap flex-shrink-0 w-full sm:w-auto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              Preparation Resources
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

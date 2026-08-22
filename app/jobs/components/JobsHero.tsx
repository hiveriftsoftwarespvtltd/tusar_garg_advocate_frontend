export default function JobsHero() {
  const tags = [
    "Government",
    "Judiciary",
    "PSU",
    "Court Jobs",
    "Law Officer",
    "Internships",
  ];

  return (
    <section className="relative w-full bg-[#0d1b3e] text-white overflow-hidden pb-12 pt-16">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/jobs/job_page_banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/80 via-[#0d1b3e]/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full lg:w-[80%]">
          <h1 
            className="text-white text-[32px] md:text-[44px] font-black uppercase tracking-wider mb-4 leading-tight"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            LEGAL JOBS
          </h1>
          <p className="text-[#c9a84c] text-[15px] md:text-[18px] font-medium leading-relaxed mb-8 max-w-2xl">
            Explore government legal jobs, judiciary vacancies, court positions, research roles, internships, fellowships, and private legal opportunities across India.
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
            <button className="flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0d1b3e] px-8 py-3 rounded-md font-bold text-[13px] uppercase tracking-wider hover:bg-[#d4a93a] transition-all whitespace-nowrap w-full sm:w-auto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Explore Jobs
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-3 rounded-md font-bold text-[13px] uppercase tracking-wider hover:bg-white/10 transition-all whitespace-nowrap flex-shrink-0 w-full sm:w-auto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Judicial Vacancies
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-3 rounded-md font-bold text-[13px] uppercase tracking-wider hover:bg-white/10 transition-all whitespace-nowrap flex-shrink-0 w-full sm:w-auto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              Browse Internships
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

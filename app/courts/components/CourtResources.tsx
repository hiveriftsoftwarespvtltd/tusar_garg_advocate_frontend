export default function CourtResources() {
  const resources = [
    {
      title: "Case Status",
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
    },
    {
      title: "Judgments",
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M10 21V11c0-2.8 2.2-5 5-5h4"/><path d="M12 8L9 5l3-3"/><path d="M7 14h1"/></svg>
    },
    {
      title: "Orders",
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    },
    {
      title: "Cause List",
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
    },
    {
      title: "Recruitment",
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    },
    {
      title: "Rules",
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
    }
  ];

  return (
    <section className="py-8 bg-[#fafafa] border-t border-[#e8ebf2]">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-[20px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
            COURT RESOURCES
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c] mt-2" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {resources.map((res, idx) => (
            <div key={idx} className="bg-white border border-[#e8ebf2] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="text-[#0d1b3e] mb-4 group-hover:text-[#c9a84c] group-hover:scale-110 transition-all duration-300">
                {res.icon}
              </div>
              <h3 className="text-[13px] font-bold text-[#374151] group-hover:text-[#c9a84c] transition-colors">
                {res.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

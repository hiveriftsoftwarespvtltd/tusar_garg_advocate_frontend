export default function BrowseByCourtType() {
  const courtTypes = [
    {
      title: "Supreme Court",
      description: "Highest court of appeal in India.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 4 6 4 10v12h16V10c0-4-4-8-8-8z"/><path d="M12 2v8"/><path d="M8 10v12"/><path d="M16 10v12"/></svg>
      )
    },
    {
      title: "High Courts",
      description: "Constitutional courts for each state and union territory.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M3 21h18"/><path d="M12 7l-8 4v2"/><path d="M12 7l8 4v2"/><path d="M4 13c0 2.2 1.8 4 4 4s4-1.8 4-4"/><path d="M12 13c0 2.2 1.8 4 4 4s4-1.8 4-4"/></svg>
      )
    },
    {
      title: "District Courts",
      description: "Trial courts handling civil and criminal matters.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><path d="M4 4h16"/><path d="M6 4v16"/><path d="M10 4v16"/><path d="M14 4v16"/><path d="M18 4v16"/></svg>
      )
    },
    {
      title: "Tribunals",
      description: "Specialized forums for quasi-judicial matters.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21v-4"/><path d="M19 21v-4"/><path d="M3 7v4h18V7"/><path d="M12 3v4"/><path d="M8 3v4"/><path d="M16 3v4"/></svg>
      )
    }
  ];

  return (
    <section className="py-6 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-[20px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
            BROWSE BY COURT TYPE
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c] mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courtTypes.map((court, idx) => (
            <div key={idx} className="bg-white border border-[#e8ebf2] rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {court.icon}
              </div>
              <h3 className="text-[15px] font-bold text-[#0d1b3e] uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-merriweather), serif" }}>
                {court.title}
              </h3>
              <p className="text-[13px] text-[#6b7280] leading-relaxed">
                {court.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

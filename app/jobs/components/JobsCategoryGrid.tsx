import { Landmark, Scale, Building2, Briefcase, UserCheck, Users, FileText, GraduationCap, Handshake, ArrowRight } from "lucide-react";

export default function JobsCategoryGrid() {
  const categories = [
    { name: "Government\nLegal Jobs", count: "1,248 Jobs", icon: <Landmark size={32} strokeWidth={1.2} /> },
    { name: "Judicial\nVacancies", count: "312 Jobs", icon: <Scale size={32} strokeWidth={1.2} /> },
    { name: "Court\nJobs", count: "428 Jobs", icon: <Building2 size={32} strokeWidth={1.2} /> },
    { name: "PSU\nLegal Jobs", count: "186 Jobs", icon: <Briefcase size={32} strokeWidth={1.2} /> },
    { name: "Law\nOfficer", count: "692 Jobs", icon: <UserCheck size={32} strokeWidth={1.2} /> },
    { name: "Legal\nAdvisor", count: "243 Jobs", icon: <Users size={32} strokeWidth={1.2} /> },
    { name: "Law Clerk &\nResearch Asst.", count: "356 Jobs", icon: <FileText size={32} strokeWidth={1.2} /> },
    { name: "Internships &\nFellowships", count: "527 Jobs", icon: <GraduationCap size={32} strokeWidth={1.2} /> },
    { name: "Private\nLegal Jobs", count: "318 Jobs", icon: <Handshake size={32} strokeWidth={1.2} /> },
  ];

  return (
    <section className="py-12 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-[1px] bg-[#c9a84c]"></div>
          <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
          <h2 className="text-[16px] md:text-[18px] font-bold text-[#0d1b3e] uppercase tracking-[0.15em] text-center" style={{ fontFamily: "var(--font-merriweather), serif" }}>
            BROWSE LEGAL JOBS BY CATEGORY
          </h2>
          <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
          <div className="w-12 h-[1px] bg-[#c9a84c]"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white border border-[#e8ebf2] rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#c9a84c]/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              
              <div className="text-[#c9a84c] mb-3 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              
              <h3 className="text-[12px] font-bold text-[#0d1b3e] mb-2 leading-tight group-hover:text-[#c9a84c] transition-colors whitespace-pre-line h-[32px] flex items-center justify-center" style={{ fontFamily: "var(--font-merriweather), serif" }}>
                {cat.name}
              </h3>
              
              <p className="text-[10px] text-[#6b7280] mb-3 font-medium">
                {cat.count}
              </p>

              <div className="w-6 h-6 rounded-full border border-[#e8ebf2] flex items-center justify-center text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-white group-hover:border-[#c9a84c] transition-colors mt-auto">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

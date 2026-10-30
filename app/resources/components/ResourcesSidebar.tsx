import { Landmark, Scale, FileText, Search, BookOpen, Quote, ChevronRight } from "lucide-react";

export default function ResourcesSidebar() {
  const popularResources = [
    { title: "Constitution of India", category: "Constitution", date: "22 May 2025", icon: <Landmark size={18} /> },
    { title: "Indian Penal Code", category: "Criminal Law", date: "20 May 2025", icon: <Scale size={18} /> },
    { title: "Code of Civil Procedure", category: "Civil Law", date: "18 May 2025", icon: <FileText size={18} /> },
    { title: "Limitation Act", category: "Civil Law", date: "16 May 2025", icon: <FileText size={18} /> },
    { title: "Evidence Act", category: "Criminal Law", date: "14 May 2025", icon: <FileText size={18} /> },
  ];

  const quickLinks = [
    { title: "Legal Forms & Templates", icon: <FileText size={18} /> },
    { title: "Important Judgments", icon: <Scale size={18} /> },
    { title: "Court Websites", icon: <Search size={18} /> },
    { title: "Research Databases", icon: <BookOpen size={18} /> },
    { title: "Related Government Portals", icon: <Landmark size={18} /> },
  ];

  return (
    <aside className="w-full">
      {/* Popular Resources Box */}
      <div className="bg-white border border-[#e8ebf2] rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[14px] font-semibold text-[#0d1b3e] uppercase tracking-[0.05em]">
            POPULAR RESOURCES
          </h3>
          <button className="text-[11px] font-bold text-[#6b7280] hover:text-[#c9a84c] transition-colors">
            View All
          </button>
        </div>
        
        <div className="flex flex-col divide-y divide-[#e8ebf2]">
          {popularResources.map((res, idx) => (
            <div key={idx} className="flex items-center justify-between py-3.5 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#fdfaf3] text-[#c9a84c] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {res.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-[#374151] group-hover:text-[#c9a84c] transition-colors mb-0.5 leading-snug line-clamp-1">
                    {res.title}
                  </span>
                  <div className="flex items-center gap-2 text-[10px] text-[#9ca3af] font-medium">
                    <span>{res.category}</span>
                    <div className="w-1 h-1 rounded-full bg-[#e8ebf2]"></div>
                    <span>{res.date}</span>
                  </div>
                </div>
              </div>
              <ChevronRight size={14} className="text-[#9ca3af] group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links Box */}
      <div className="bg-[#fafafa] border border-[#e8ebf2] rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-[14px] font-semibold text-[#0d1b3e] uppercase tracking-[0.05em] mb-5">
          QUICK LINKS
        </h3>
        
        <div className="flex flex-col divide-y divide-[#e8ebf2]">
          {quickLinks.map((link, idx) => (
            <div key={idx} className="flex items-center justify-between py-3.5 group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="text-[#64748b] group-hover:text-[#c9a84c] transition-colors">
                  {link.icon}
                </div>
                <span className="text-[13px] font-bold text-[#374151] group-hover:text-[#0d1b3e] transition-colors">
                  {link.title}
                </span>
              </div>
              <ChevronRight size={14} className="text-[#9ca3af] group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>
      </div>

      {/* Quote Box */}
      <div className="bg-[#fdfaf3] border border-[#c9a84c]/20 rounded-xl p-8 relative shadow-sm">
        <div className="text-[#c9a84c]/40 absolute top-6 left-6">
          <Quote size={40} className="fill-[#c9a84c]/40 rotate-180" />
        </div>
        <div className="relative z-10">
          <p className="text-[15px] font-bold text-[#0d1b3e] leading-relaxed mb-6 italic">
            Law is not just a profession, it is a system of values, a means of justice and an instrument for a better society.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-[#c9a84c]"></div>
            <span className="text-[11px] font-bold text-[#374151] uppercase tracking-widest">
              TUSHAR GARG
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

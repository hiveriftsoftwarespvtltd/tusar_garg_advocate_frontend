import { Landmark, Gavel, Scale, FileText, Briefcase, Calculator, Building, ShieldCheck, Leaf } from "lucide-react";

export default function ArticlesSidebar() {
  const popularTopics = [
    { name: "Constitution of India", count: 124, icon: <Landmark size={18} /> },
    { name: "Criminal Law", count: 98, icon: <Gavel size={18} /> },
    { name: "Bail", count: 87, icon: <Scale size={18} /> },
    { name: "Arbitration", count: 76, icon: <Scale size={18} /> },
    { name: "Insolvency & Bankruptcy Code (IBC)", count: 64, icon: <Building size={18} /> },
    { name: "Corporate Law", count: 59, icon: <Briefcase size={18} /> },
    { name: "Taxation", count: 53, icon: <Calculator size={18} /> },
    { name: "Civil Procedure", count: 48, icon: <FileText size={18} /> },
    { name: "Fundamental Rights", count: 45, icon: <ShieldCheck size={18} /> },
    { name: "Environmental Law", count: 39, icon: <Leaf size={18} /> },
  ];

  const topAuthors = [
    { name: "Tushar Garg", role: "Advocate-on-Record, Supreme Court of India", initials: "TG", count: 128 },
    { name: "Ritika Sharma", role: "Legal Researcher", initials: "RS", count: 62 },
    { name: "Ankit Pratap", role: "Advocate", initials: "AP", count: 51 },
    { name: "Neha Bansal", role: "Legal Analyst", initials: "NB", count: 47 },
    { name: "Devansh Kumar", role: "Research Associate", initials: "DK", count: 41 },
  ];

  return (
    <aside className="w-full">
      {/* Popular Topics Box */}
      <div className="bg-white border border-[#e8ebf2] rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[14px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
            POPULAR TOPICS
          </h3>
          <button className="text-[11px] font-bold text-[#6b7280] hover:text-[#c9a84c] transition-colors">
            View All
          </button>
        </div>
        
        <div className="flex flex-col divide-y divide-[#e8ebf2] mb-5">
          {popularTopics.map((topic, idx) => (
            <div key={idx} className="flex items-center justify-between py-3.5 group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="text-[#64748b] group-hover:text-[#c9a84c] transition-colors">
                  {topic.icon}
                </div>
                <span className="text-[13px] font-bold text-[#374151] group-hover:text-[#c9a84c] transition-colors">
                  {topic.name}
                </span>
              </div>
              <span className="text-[12px] font-bold text-[#9ca3af]">{topic.count}</span>
            </div>
          ))}
        </div>
        
        <button className="w-full border border-[#c9a84c] text-[#0d1b3e] font-bold text-[11px] uppercase tracking-wider py-2.5 rounded-[4px] hover:bg-[#c9a84c] hover:text-white transition-all">
          VIEW ALL TOPICS
        </button>
      </div>

      {/* Top Authors Box */}
      <div className="bg-white border border-[#e8ebf2] rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[14px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
            TOP AUTHORS
          </h3>
          <button className="text-[11px] font-bold text-[#6b7280] hover:text-[#c9a84c] transition-colors">
            View All
          </button>
        </div>
        
        <div className="flex flex-col divide-y divide-[#e8ebf2] mb-5">
          {topAuthors.map((author, idx) => (
            <div key={idx} className="flex items-center justify-between py-4 group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#e8ebf2] flex items-center justify-center text-[#0d1b3e] text-[12px] font-bold bg-[#fdfaf3] flex-shrink-0 group-hover:border-[#c9a84c] transition-colors">
                  {author.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-[13.5px] font-bold text-[#374151] group-hover:text-[#c9a84c] transition-colors mb-0.5">
                    {author.name}
                  </span>
                  <span className="text-[11px] text-[#6b7280] leading-snug line-clamp-1">
                    {author.role}
                  </span>
                </div>
              </div>
              <span className="text-[12.5px] font-bold text-[#0d1b3e] pl-4">{author.count}</span>
            </div>
          ))}
        </div>
        
        <button className="w-full border border-[#c9a84c] text-[#0d1b3e] font-bold text-[11px] uppercase tracking-wider py-2.5 rounded-[4px] hover:bg-[#c9a84c] hover:text-white transition-all">
          VIEW ALL AUTHORS
        </button>
      </div>
    </aside>
  );
}

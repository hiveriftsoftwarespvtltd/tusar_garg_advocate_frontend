import { ArrowRight, Calendar, FileText, Bookmark, Landmark, Scale, Briefcase } from "lucide-react";

export default function LatestJudgments() {
  const tabs = ["LATEST", "IMPORTANT", "MOST VIEWED"];

  const judgments = [
    {
      court: "SUPREME COURT",
      courtIcon: <Landmark size={24} strokeWidth={1.5} />,
      title: "State of Karnataka vs. Union of India & Ors.",
      desc: "Landmark judgment on federal structure and powers of Parliament.",
      date: "12 May 2025",
      subject: "Constitutional Law",
      citation: "AIR 2025 SC 1234",
    },
    {
      court: "DELHI HIGH COURT",
      courtIcon: <Building2 size={24} strokeWidth={1.5} />,
      title: "ABC Pvt. Ltd. vs. XYZ Ltd. & Ors.",
      desc: "On interpretation of commercial contracts and arbitration clause.",
      date: "08 May 2025",
      subject: "Commercial Law",
      citation: "2025 SCC OnLine Del 789",
    },
    {
      court: "BOMBAY HIGH COURT",
      courtIcon: <Scale size={24} strokeWidth={1.5} />,
      title: "Ramesh Kumar vs. State of Maharashtra",
      desc: "On anticipatory bail and protection under criminal procedure.",
      date: "05 May 2025",
      subject: "Criminal Law",
      citation: "2025 SCC OnLine Bom 456",
    },
    {
      court: "NCLAT",
      courtIcon: <Briefcase size={24} strokeWidth={1.5} />,
      title: "IDBI Bank Ltd. vs. M/s. Quality Steel Ltd.",
      desc: "On insolvency resolution process and creditors' rights.",
      date: "02 May 2025",
      subject: "Insolvency & Bankruptcy",
      citation: "2025 SCC OnLine NCLAT 321",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Header with Tabs */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-col">
            <h2 className="text-[14px] md:text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em] mb-2" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
              LATEST & IMPORTANT JUDGMENTS
            </h2>
            <div className="w-12 h-[3px] bg-[#c9a84c]"></div>
          </div>
          
          <div className="flex gap-4 border-b border-[#e8ebf2]">
            {tabs.map((tab, idx) => (
              <button 
                key={idx}
                className={`pb-2 text-[11px] font-bold tracking-wider uppercase transition-colors ${
                  idx === 0 
                    ? "text-[#0d1b3e] border-b-2 border-[#0d1b3e]" 
                    : "text-[#6b7280] hover:text-[#0d1b3e]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col gap-4">
          {judgments.map((judgment, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-stretch border border-[#e8ebf2] rounded-xl overflow-hidden hover:shadow-md hover:border-[#c9a84c]/50 transition-all cursor-pointer group">
              
              {/* Court Badge (No margin/padding around it, touches edges) */}
              <div className="w-full sm:w-[120px] lg:w-[140px] bg-[#0d1b3e] flex flex-col items-center justify-center text-center flex-shrink-0 p-4">
                <div className="text-[#c9a84c] mb-1">{judgment.courtIcon}</div>
                <span className="text-[#c9a84c] text-[10px] md:text-[11px] font-bold uppercase tracking-wider leading-tight px-1">
                  {judgment.court}
                </span>
              </div>
              
              {/* Content (Has padding) */}
              <div className="flex-1 min-w-0 p-4 md:p-6 flex flex-col justify-center">
                <h3 className="text-[15px] font-bold text-[#0d1b3e] leading-snug mb-1 group-hover:text-[#c9a84c] transition-colors" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
                  {judgment.title}
                </h3>
                <p className="text-[13px] text-[#374151] mb-3">
                  {judgment.desc}
                </p>
                
                <div className="flex flex-wrap items-center gap-y-2 text-[11px] text-[#6b7280]">
                  <span className="flex items-center gap-1.5 pr-4 border-r border-[#cbd5e1]"><Calendar size={14} className="text-[#c9a84c]" /> {judgment.date}</span>
                  <span className="flex items-center gap-1.5 px-4 border-r border-[#cbd5e1]"><Bookmark size={14} className="text-[#c9a84c]" /> {judgment.subject}</span>
                  <span className="flex items-center gap-1.5 pl-4"><FileText size={14} className="text-[#c9a84c]" /> {judgment.citation}</span>
                </div>
              </div>

              {/* View Button */}
              <div className="flex items-center justify-center sm:justify-end p-4 md:p-6 sm:pl-0 flex-shrink-0">
                <button className="flex items-center justify-center gap-2 border border-[#e8ebf2] text-[#374151] px-5 py-2.5 rounded text-[11px] font-bold uppercase tracking-wider group-hover:border-[#c9a84c] group-hover:text-[#0d1b3e] group-hover:bg-[#fafafa] transition-all w-full sm:w-auto">
                  VIEW JUDGMENT <ArrowRight size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <button className="border border-[#0d1b3e] text-[#0d1b3e] px-8 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider hover:bg-[#0d1b3e] hover:text-white transition-all">
            VIEW ALL JUDGMENTS
          </button>
        </div>

      </div>
    </section>
  );
}

// Just adding a quick placeholder icon since Building2 wasn't imported at top
function Building2(props: { size?: number | string; strokeWidth?: number | string; [key: string]: unknown }) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth as string | number} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
    </svg>
  );
}

import { ArrowRight, Calendar, Building2 } from "lucide-react";

// Court badge icons matching the reference design
// SC = blue circle with government building icon
function SCBadge() {
  return (
    <div className="w-10 h-10 rounded-full bg-[#dbeafe] border-2 border-[#93c5fd] flex items-center justify-center flex-shrink-0">
      <Building2 size={18} strokeWidth={1.5} className="text-[#1d4ed8]" />
    </div>
  );
}

function HCBadge() {
  return (
    <div className="w-10 h-10 rounded-full bg-[#dcfce7] border-2 border-[#86efac] flex items-center justify-center flex-shrink-0">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
      </svg>
    </div>
  );
}

function DCBadge() {
  return (
    <div className="w-10 h-10 rounded-full bg-[#f3e8ff] border-2 border-[#d8b4fe] flex items-center justify-center flex-shrink-0">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7e22ce" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    </div>
  );
}

const judgments = [
  {
    badge: <SCBadge />,
    courtLabel: "SUPREME COURT",
    courtColor: "text-[#1d4ed8]",
    underlineColor: "bg-[#1d4ed8]",
    title: "State of X vs. ABC Pvt. Ltd.",
    citation: "Civil Appeal No. 1234/2024",
    date: "16 May 2024",
    scc: "2024 SCC OnLine SC 789",
    subject: "Constitutional Law",
    href: "/judgments/sc-1",
  },
  {
    badge: <HCBadge />,
    courtLabel: "HIGH COURTS",
    courtColor: "text-[#15803d]",
    underlineColor: "bg-[#15803d]",
    title: "Ramesh Kumar vs. State of Haryana",
    citation: "CRM-M No. 5678/2024",
    date: "14 May 2024",
    scc: "2024 SCC OnLine P&H 456",
    subject: "Criminal Law",
    href: "/judgments/hc-1",
  },
  {
    badge: <DCBadge />,
    courtLabel: "DISTRICT COURTS",
    courtColor: "text-[#7e22ce]",
    underlineColor: "bg-[#7e22ce]",
    title: "Sunita Devi vs. Rajesh Singh",
    citation: "Civil Suit No. 234/2023",
    date: "10 May 2024",
    scc: "District Court Delhi",
    subject: "Property Law",
    href: "/judgments/dc-1",
  },
];

export default function LatestJudgments() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Section header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-[20px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em]">
              LATEST JUDGMENTS
            </h2>
            <div className="w-10 h-[3px] bg-[#c9a84c] mt-1.5" />
          </div>
          <a
            href="/judgments"
            className="text-[12px] text-[#0d1b3e] font-semibold hover:text-[#c9a84c] flex items-center gap-1 transition-colors mt-1.5"
          >
            View All Judgments <ArrowRight size={13} strokeWidth={2} />
          </a>
        </div>

        {/* 3-column grid — separated cards with rounded corners + gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {judgments.map((j) => (
            <div
              key={j.title}
              className="bg-[#fafafa] border border-[#e8ebf2] rounded-xl p-6 flex flex-col shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Badge + court label + colored underline */}
              <div className="flex items-center gap-3 mb-1">
                {j.badge}
                <div>
                  <span className={`text-[11px] font-black tracking-wider ${j.courtColor}`}>
                    {j.courtLabel}
                  </span>
                  <div className={`h-[2px] ${j.underlineColor} mt-0.5 w-12`} />
                </div>
              </div>

              <div className="mt-3">
                {/* Case title */}
                <h3 className="text-[14px] font-bold text-[#0d1b3e] mb-1.5 leading-snug">
                  {j.title}
                </h3>
                <p className="text-[11.5px] text-[#6b7280] mb-3">{j.citation}</p>

                {/* Date row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2 text-[11px] text-[#6b7280]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} strokeWidth={1.5} className="text-[#c9a84c]" />
                    {j.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Building2 size={11} strokeWidth={1.5} className="text-[#c9a84c]" />
                    {j.scc}
                  </span>
                </div>

                <p className="text-[11.5px] text-[#374151] mb-5">
                  <span className="font-semibold">Subject:</span> {j.subject}
                </p>

                <a
                  href={j.href}
                  className="text-[12px] text-[#0d1b3e] font-bold hover:text-[#c9a84c] flex items-center gap-1 transition-colors"
                >
                  Read Judgment <ArrowRight size={12} strokeWidth={2} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

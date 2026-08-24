import { ArrowRight, Scale, MapPin, BookOpen, FileText, Newspaper, Target, Landmark, Building2, Gavel, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

const tribunalIconsMap: Record<string, string> = {
  "NCLT": "/home/trubinals_&_forum/nclt.svg",
  "NCLAT": "/home/trubinals_&_forum/nclat.svg",
  "NGT": "/home/trubinals_&_forum/NGT.svg",
  "DRT": "/home/trubinals_&_forum/DRT.svg",
  "RERA": "/home/trubinals_&_forum/rera.svg",
  "DRAT": "/home/trubinals_&_forum/drat.svg",
  "ITAT": "/home/trubinals_&_forum/itat.svg",
  "CESTAT": "/home/trubinals_&_forum/cestat.svg",
  "CAT": "/home/trubinals_&_forum/CAT.svg",
  "AFT": "/home/trubinals_&_forum/AFT.svg",
  "SAT": "/home/trubinals_&_forum/sat.svg",
  "TDSAT": "/home/trubinals_&_forum/tsat.svg",
};
// Tribunal icon — rounded-xl off-white card matching Indian Laws style
function TribunalIcon({ label }: { label: string }) {
  const customIcon = tribunalIconsMap[label];
  
  return (
    <a
      href="/tribunals"
      className="flex flex-col items-center justify-center gap-1.5 bg-[#fafafa] border border-[#e8ebf2] rounded-xl h-[64px] hover:bg-[#fffbf0] hover:border-[#c9a84c]/40 hover:-translate-y-0.5 hover:shadow-md group transition-all duration-300"
    >
      {customIcon ? (
        <div className="flex items-center justify-center h-[34px] w-full">
          <Image 
            src={customIcon} 
            alt={label} 
            width={label === "AFT" ? 44 : 46} 
            height={label === "AFT" ? 44 : 46} 
            className={`object-contain transition-transform duration-200 ${label === "AFT" ? "group-hover:scale-[1.2] scale-[1.1]" : "group-hover:scale-[1.9] scale-[1.6]"}`}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-[34px] w-full">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-200"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        </div>
      )}
      <span className="text-[10px] font-bold text-[#374151] text-center group-hover:text-[#c9a84c] transition-colors leading-tight">
        {label}
      </span>
    </a>
  );
}

const tribunalGroups = [
  ["NCLT", "NCLAT", "NGT", "NCDRC", "RERA"],
  ["DRT", "DRAT", "ITAT", "CESTAT", "CAT"],
  ["AFT", "SAT", "TDSAT"],
];

const judiciaryItems = [
  { label: "Judicial Services", icon: <Scale size={16} strokeWidth={1.5} /> },
  { label: "State-wise Exams", icon: <MapPin size={16} strokeWidth={1.5} /> },
  { label: "Syllabus", icon: <BookOpen size={16} strokeWidth={1.5} /> },
  { label: "Previous Papers", icon: <FileText size={16} strokeWidth={1.5} /> },
  { label: "Current Legal Affairs", icon: <Newspaper size={16} strokeWidth={1.5} /> },
  { label: "Preparation Resources", icon: <Target size={16} strokeWidth={1.5} /> },
];

const legalJobItems = [
  { label: "Government Jobs", icon: <Landmark size={16} strokeWidth={1.5} /> },
  { label: "Judiciary Jobs", icon: <Scale size={16} strokeWidth={1.5} /> },
  { label: "PSU & Law Officer", icon: <Building2 size={16} strokeWidth={1.5} /> },
  { label: "Court Jobs", icon: <Gavel size={16} strokeWidth={1.5} /> },
  { label: "Internships", icon: <GraduationCap size={16} strokeWidth={1.5} /> },
  { label: "Private Legal Jobs", icon: <Briefcase size={16} strokeWidth={1.5} /> },
];

export default function TribunalsSection() {
  return (
    <section className="bg-white py-10 border-t border-[#e0e4ed]">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* 3-column grid — each column is a rounded off-white card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* ── Tribunals & Forums ── */}
          <div className="bg-[#fafafa] border border-[#e8ebf2] rounded-xl p-6 shadow-sm">
            <h3 className="text-[13px] font-black text-[#0d1b3e] uppercase tracking-[0.1em] text-center mb-5">
              TRIBUNALS & FORUMS
            </h3>
            {/* Tribunal icon cards — same style as Indian Laws */}
            <div className="flex flex-col gap-2.5">
              {tribunalGroups.map((row, ri) => (
                <div key={ri} className="grid grid-cols-5 gap-2">
                  {row.map((t) => (
                    <TribunalIcon key={t} label={t} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ── Judiciary & Careers ── */}
          <div className="bg-[#fafafa] border border-[#e8ebf2] rounded-xl p-6 shadow-sm flex flex-col">
            <h3 className="text-[13px] font-black text-[#0d1b3e] uppercase tracking-[0.1em] text-center mb-5">
              JUDICIARY & CAREERS
            </h3>
            <ul className="space-y-2.5 flex-1">
              {judiciaryItems.map((item) => (
                <li key={item.label}>
                  <a
                    href="/judiciary"
                    className="flex items-center gap-3 text-[12.5px] text-[#374151] hover:text-[#c9a84c] transition-colors group"
                  >
                    <div className="w-8 h-8 bg-white border border-[#e0e4ed] rounded-lg flex items-center justify-center text-[14px] group-hover:border-[#c9a84c] group-hover:bg-[#fffbf0] transition-all flex-shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <span className="flex-1">{item.label}</span>
                    <ArrowRight size={11} strokeWidth={2} className="opacity-30 group-hover:opacity-100 group-hover:text-[#c9a84c] transition-all" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a
                href="/judiciary"
                className="flex items-center justify-center gap-2 bg-[#0d1b3e] text-white text-[11px] font-bold px-4 py-3 uppercase tracking-widest rounded-md transition-all duration-300 hover:bg-[#1a2b5e] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0d1b3e]/20 active:scale-[0.98] w-full"
              >
                EXPLORE NOW <ArrowRight size={12} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* ── Legal Jobs ── */}
          <div className="bg-[#fafafa] border border-[#e8ebf2] rounded-xl p-6 shadow-sm flex flex-col">
            <h3 className="text-[13px] font-black text-[#0d1b3e] uppercase tracking-[0.1em] text-center mb-5">
              LEGAL JOBS
            </h3>
            <ul className="space-y-2.5 flex-1">
              {legalJobItems.map((item) => (
                <li key={item.label}>
                  <a
                    href="/jobs"
                    className="flex items-center gap-3 text-[12.5px] text-[#374151] hover:text-[#c9a84c] transition-colors group"
                  >
                    <div className="w-8 h-8 bg-white border border-[#e0e4ed] rounded-lg flex items-center justify-center text-[14px] group-hover:border-[#c9a84c] group-hover:bg-[#fffbf0] transition-all flex-shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <span className="flex-1">{item.label}</span>
                    <ArrowRight size={11} strokeWidth={2} className="opacity-30 group-hover:opacity-100 group-hover:text-[#c9a84c] transition-all" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a
                href="/jobs"
                className="flex items-center justify-center gap-2 bg-[#0d1b3e] text-white text-[11px] font-bold px-4 py-3 uppercase tracking-widest rounded-md transition-all duration-300 hover:bg-[#1a2b5e] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0d1b3e]/20 active:scale-[0.98] w-full"
              >
                BROWSE JOBS <ArrowRight size={12} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

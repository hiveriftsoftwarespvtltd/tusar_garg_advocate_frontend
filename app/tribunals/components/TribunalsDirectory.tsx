import { Landmark, Scale, Leaf, ShoppingCart, Home, PiggyBank, Receipt, FileText, BadgePercent, Users, Handshake, TrendingUp, Radio, ArrowRight } from "lucide-react";
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
export default function TribunalsDirectory() {
  const tribunals = [
    { abbr: "NCLT", name: "National Company\nLaw Tribunal", icon: <Landmark size={32} strokeWidth={1.5} /> },
    { abbr: "NCLAT", name: "National Company\nLaw Appellate Tribunal", icon: <Scale size={32} strokeWidth={1.5} /> },
    { abbr: "NGT", name: "National Green\nTribunal", icon: <Leaf size={32} strokeWidth={1.5} /> },
    { abbr: "NCDRC", name: "National Consumer\nDisputes Redressal\nCommission", icon: <ShoppingCart size={32} strokeWidth={1.5} /> },
    { abbr: "RERA", name: "Real Estate Regulatory\nAuthority", icon: <Home size={32} strokeWidth={1.5} /> },
    { abbr: "DRT", name: "Debt Recovery\nTribunals", icon: <PiggyBank size={32} strokeWidth={1.5} /> },
    { abbr: "DRAT", name: "Debt Recovery Appellate\nTribunals", icon: <Receipt size={32} strokeWidth={1.5} /> },
    { abbr: "ITAT", name: "Income Tax Appellate\nTribunal", icon: <FileText size={32} strokeWidth={1.5} /> },
    { abbr: "CESTAT", name: "Customs, Excise & Service Tax\nAppellate Tribunal", icon: <BadgePercent size={32} strokeWidth={1.5} /> },
    { abbr: "CAT", name: "Central Administrative\nTribunal", icon: <Users size={32} strokeWidth={1.5} /> },
    { abbr: "AFT", name: "Appellate Tribunal\nfor Forfeited Property", icon: <Handshake size={32} strokeWidth={1.5} /> },
    { abbr: "SAT", name: "Securities Appellate\nTribunal", icon: <TrendingUp size={32} strokeWidth={1.5} /> },
    { abbr: "TDSAT", name: "Telecom Disputes Settlement\n& Appellate Tribunal", icon: <Radio size={32} strokeWidth={1.5} /> },
  ];

  return (
    <section className="py-12 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Heading */}
        <div className="flex flex-col items-start mb-8">
          <h2 className="text-[16px] md:text-[18px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em] mb-2" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
            TRIBUNALS DIRECTORY
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c]"></div>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {tribunals.map((tribunal, idx) => (
            <div key={idx} className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] lg:w-[calc(20%-13px)] bg-white border border-[#e8ebf2] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#c9a84c]/50 transition-all duration-300 group cursor-pointer">
              
              <div className="text-[#c9a84c] mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center h-[32px]">
                {tribunalIconsMap[tribunal.abbr] ? (
                  <Image 
                    src={tribunalIconsMap[tribunal.abbr]} 
                    alt={tribunal.abbr} 
                    width={tribunal.abbr === "AFT" ? 76 : 92} 
                    height={tribunal.abbr === "AFT" ? 76 : 92} 
                    className={`object-contain ${tribunal.abbr === "AFT" ? "scale-[1.1] mb-3" : "scale-[1.8]"}`} 
                  />
                ) : (
                  tribunal.icon
                )}
              </div>
              
              <h3 className="text-[14px] md:text-[15px] font-black text-[#0d1b3e] mb-1.5 tracking-wide group-hover:text-[#c9a84c] transition-colors" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
                {tribunal.abbr}
              </h3>
              
              <p className="text-[10px] md:text-[11px] font-medium text-[#6b7280] mb-6 leading-tight whitespace-pre-line flex-1 flex items-center justify-center">
                {tribunal.name}
              </p>

              <button className="flex items-center justify-center w-[90%] gap-2 border border-[#d1d5db] text-[#374151] py-2 rounded-md text-[10px] font-bold uppercase tracking-wider group-hover:bg-[#0d1b3e] group-hover:text-white group-hover:border-[#0d1b3e] transition-all">
                VIEW DETAILS <ArrowRight size={12} strokeWidth={2.5} />
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-2 bg-[#0d1b3e] text-white px-8 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider hover:bg-[#1a2b5a] hover:shadow-lg transition-all">
            VIEW ALL TRIBUNALS
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}

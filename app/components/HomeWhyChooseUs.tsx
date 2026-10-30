"use client";

import { Award, Briefcase, UserCheck, Landmark, ShieldCheck, CheckCircle2, HeartHandshake } from "lucide-react";

export default function HomeWhyChooseUs() {
  const features = [
    {
      icon: Award,
      badge: "SUPREME COURT AOR",
      title: "Advocate-on-Record Standing",
      number: "Apex",
      subText: "Supreme Court",
      description: "Direct authority to file and plead matters before the Supreme Court of India under Article 136 (SLPs), Article 32 (Writs), and Article 139A."
    },
    {
      icon: Briefcase,
      badge: "LITIGATION EXPERIENCE",
      title: "Decade of Courtroom Mastery",
      number: "10+",
      subText: "Years Experience",
      description: "Proven appellate track record with thousands of matters argued across constitutional writs, criminal bail trials, commercial disputes, and arbitrations."
    },
    {
      icon: Landmark,
      badge: "PAN-INDIA ADVOCACY",
      title: "High Courts & Fora Presence",
      number: "Pan-India",
      subText: "Judicial Practice",
      description: "Seamless representation across the Delhi High Court, 25 State High Courts, NCLAT, NGT, NCDRC, CAT, and District Courts throughout India."
    },
    {
      icon: UserCheck,
      badge: "TRANSPARENT STRATEGY",
      title: "Meticulous & Ethical Counsel",
      number: "100%",
      subText: "Client Dedication",
      description: "Exhaustive legal research, transparent risk evaluation, statutory precedent analysis, and drafting tailored to each dispute's exact merits."
    },
    {
      icon: HeartHandshake,
      badge: "PUBLIC INTEREST",
      title: "Legal Aid & Pro Bono Practice",
      number: "Pro Bono",
      subText: "Fundamental Rights",
      description: "Committed pro bono advocacy and legal aid assistance for underprivileged litigants, civil rights defense, and public interest causes."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#071126] py-16 sm:py-20 relative overflow-hidden border-b border-[#c9a84c]/20">
      
      {/* Background Radial Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c9a84c]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <ShieldCheck size={14} className="text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase">
              DISTINCTIVE LEGAL ADVOCACY & EXCELLENCE
            </span>
          </div>
          <h2 className="font-serif text-[26px] sm:text-[36px] font-bold text-white uppercase tracking-tight leading-snug">
            WHY <span className="text-[#c9a84c]">CHOOSE OUR CHAMBERS</span>
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3 rounded-full" />
          <p className="text-gray-300 text-[13px] sm:text-[14px] mt-4 font-medium leading-relaxed">
            Delivering meticulous courtroom preparation, constitutional acumen, and transparent representation before India&apos;s apex judicial forums.
          </p>
        </div>

        {/* 5 Premium Cards Grid with Responsive Auto-fit */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="group bg-[#0d1b3e]/70 backdrop-blur-md border border-[#c9a84c]/20 hover:border-[#c9a84c] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[#c9a84c]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Stat Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#071126] border border-[#c9a84c]/40 flex items-center justify-center group-hover:bg-[#c9a84c] transition-colors duration-300 shadow-md">
                      <IconComp size={22} className="text-[#c9a84c] group-hover:text-[#071126] transition-colors duration-300" />
                    </div>
                    <div className="text-right">
                      <span className="text-xl sm:text-2xl font-extrabold text-white font-serif group-hover:text-[#c9a84c] transition-colors">
                        {item.number}
                      </span>
                      <p className="text-[9.5px] uppercase tracking-wider font-bold text-[#c9a84c]">
                        {item.subText}
                      </p>
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="inline-block text-[9px] font-bold text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                    {item.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-[15px] sm:text-base font-bold text-white mb-2 leading-snug group-hover:text-[#c9a84c] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-[12px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Footer Check Indicator */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-gray-400 group-hover:text-[#c9a84c] transition-colors text-[11px] font-medium">
                  <CheckCircle2 size={13} className="text-[#c9a84c]" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

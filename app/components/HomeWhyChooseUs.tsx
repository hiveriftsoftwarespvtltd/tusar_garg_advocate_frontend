"use client";

import { Award, Briefcase, UserCheck, Landmark, ShieldCheck, CheckCircle2, HeartHandshake } from "lucide-react";

export default function HomeWhyChooseUs() {
  const features = [
    {
      icon: Award,
      badge: "EXPERIENCE & CREDENTIALS",
      title: "10+ Years of Legal Standing",
      number: "10+",
      subText: "Years Experience",
      description: "Advocate-on-Record (AOR) before the Supreme Court of India with a decade of rigorous courtroom practice across Appellate & High Court forums."
    },
    {
      icon: Briefcase,
      badge: "LITIGATION RECORD",
      title: "5,000+ Matters Handled by Tushar & Team",
      number: "5000+",
      subText: "Handled by Tushar & Team",
      description: "Proven track record with 5,000+ matters successfully handled by Advocate Tushar Garg & Team representing individuals, corporations, and institutions in constitutional writs, bail trials, and civil litigation."
    },
    {
      icon: UserCheck,
      badge: "TRANSPARENT ADVISORY",
      title: "Client-Centric Legal Strategy",
      number: "100%",
      subText: "Dedicated Strategy",
      description: "Honest legal risk assessment, thorough document research, and strategic preparation tailored to every client's unique dispute."
    },
    {
      icon: Landmark,
      badge: "APPELLATE & TRIBUNALS",
      title: "Pan-India Court Presence",
      number: "Pan-India",
      subText: "Judicial Practice",
      description: "Seamless representation across the Supreme Court, High Courts, NCLT, NGT, CAT, and District Courts throughout India."
    },
    {
      icon: HeartHandshake,
      badge: "LEGAL AID & PRO BONO",
      title: "Legal Aid & Pro Bono Advocacy",
      number: "Pro Bono",
      subText: "Social & Legal Aid",
      description: "Dedicated pro bono legal representation and legal aid assistance for underprivileged litigants, fundamental rights protection, and public interest causes."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#071126] py-16 sm:py-20 relative overflow-hidden border-b border-[#c9a84c]/20">
      
      {/* Background Radial Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c9a84c]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <ShieldCheck size={14} className="text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase">
              DISTINCTIVE LEGAL ADVOCACY & EXCELLENCE
            </span>
          </div>
          <h2 className="font-serif text-[26px] sm:text-[36px] font-bold text-white uppercase tracking-tight leading-snug">
            WHY <span className="text-[#c9a84c]">CHOOSE US</span>
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3 rounded-full" />
          <p className="text-gray-300 text-[13px] sm:text-[14px] mt-4 font-medium leading-relaxed">
            Delivering meticulous courtroom preparation, constitutional legal acumen, legal aid advocacy, and transparent representation before India's highest judicial forums.
          </p>
        </div>

        {/* 5 Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="group bg-[#0d1b3e]/70 backdrop-blur-md border border-[#c9a84c]/20 hover:border-[#c9a84c] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[#c9a84c]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Stat Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#071126] border border-[#c9a84c]/40 flex items-center justify-center group-hover:bg-[#c9a84c] transition-colors duration-300 shadow-md">
                      <IconComp size={24} className="text-[#c9a84c] group-hover:text-[#071126] transition-colors duration-300" />
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
                  <span className="inline-block text-[9.5px] font-bold text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                    {item.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-base font-bold text-white mb-2 leading-snug group-hover:text-[#c9a84c] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-xs leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Footer Check Indicator */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-gray-400 group-hover:text-[#c9a84c] transition-colors text-[11px] font-medium">
                  <CheckCircle2 size={13} className="text-[#c9a84c]" />
                  <span>Verified Excellence</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import { Award, Briefcase, UserCheck, Landmark, ShieldCheck, CheckCircle2 } from "lucide-react";

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
      title: "5,000+ Matters Handled",
      number: "5000+",
      subText: "Cases Represented",
      description: "Proven track record representing individuals, corporations, and institutions in constitutional writs, bail trials, and civil litigation."
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
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#071126] py-16 sm:py-20 relative overflow-hidden border-b border-[#c9a84c]/20">
      
      {/* Background Radial Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c9a84c]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <ShieldCheck size={14} className="text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[11px] font-bold tracking-widest uppercase">
              DISTINCTIVE LEGAL ADVOCACY & EXCELLENCE
            </span>
          </div>
          <h2 className="font-serif text-[26px] sm:text-[36px] font-bold text-white uppercase tracking-tight leading-snug">
            WHY CLIENTS CHOOSE <span className="text-[#c9a84c]">ADVOCATE TUSHAR GARG</span>
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-3 rounded-full" />
          <p className="text-gray-300 text-[13px] sm:text-[14px] mt-4 font-medium leading-relaxed">
            Delivering meticulous courtroom preparation, constitutional legal acumen, and transparent representation before India's highest judicial forums.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="group bg-[#0d1b3e]/70 backdrop-blur-md border border-[#c9a84c]/20 hover:border-[#c9a84c] rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[#c9a84c]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Stat Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#071126] border border-[#c9a84c]/40 flex items-center justify-center group-hover:bg-[#c9a84c] transition-colors duration-300 shadow-md">
                      <IconComp size={26} className="text-[#c9a84c] group-hover:text-[#071126] transition-colors duration-300" />
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-serif group-hover:text-[#c9a84c] transition-colors">
                        {item.number}
                      </span>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-[#c9a84c]">
                        {item.subText}
                      </p>
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <span className="text-[10px] font-bold tracking-widest text-[#c9a84c] uppercase bg-[#071126] border border-[#c9a84c]/30 px-2.5 py-0.5 rounded-md inline-block mb-2">
                    {item.badge}
                  </span>
                  <h3 className="text-white font-serif font-bold text-[17px] sm:text-[18px] leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-[12.5px] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Divider Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent mt-6 group-hover:via-[#c9a84c] transition-all" />
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Statement Banner */}
        <div className="mt-14 bg-[#071126]/80 border border-[#c9a84c]/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 size={24} className="text-[#c9a84c]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-[15px] sm:text-[16px] font-serif">
                Committed to Procedural Diligence & Judicial Integrity
              </h4>
              <p className="text-gray-300 text-[12px] sm:text-[13px] font-medium">
                Every case receives individual attention, thorough law research, and focused courtroom advocacy.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 bg-[#c9a84c] hover:bg-[#b5943b] text-[#071126] px-7 py-3 rounded-xl font-bold text-[12px] uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[#c9a84c]/30 active:scale-95"
          >
            SCHEDULE A CONSULTATION
          </a>
        </div>

      </div>
    </section>
  );
}

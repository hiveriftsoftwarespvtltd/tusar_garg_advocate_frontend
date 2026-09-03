import Image from "next/image";
import Link from "next/link";
import { Award, Briefcase, UserCheck, Map, ArrowRight, ShieldCheck, Landmark } from "lucide-react";

export default function HomeAbout() {
  const credentials = [
    {
      icon: Award,
      title: "Advocate-on-Record (AOR)",
      subtitle: "Supreme Court of India"
    },
    {
      icon: Briefcase,
      title: "10+ Years Experience",
      subtitle: "In Supreme Court & High Courts"
    },
    {
      icon: UserCheck,
      title: "Client-Centric Strategy",
      subtitle: "Personalized advice & strategy"
    },
    {
      icon: Landmark,
      title: "Pan-India Practice",
      subtitle: "Appellate, Writs & Tribunals"
    }
  ];

  return (
    <section className="bg-[#071126] py-16 sm:py-20 border-b border-[#c9a84c]/20 relative overflow-hidden">
      
      {/* Glow Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[300px] bg-[#c9a84c]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 bg-[#0d1b3e]/60 border border-[#c9a84c]/30 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          
          {/* Left Column: Portrait with Metallic Gold Frame */}
          <div className="flex-shrink-0 relative w-[220px] sm:w-[250px] lg:w-[270px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#c9a84c] shadow-2xl group">
            <Image
              src="/home/tusar_garg_photo.jpeg"
              alt="Advocate Tushar Garg - Advocate on Record Supreme Court"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071126] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 right-3 bg-[#0d1b3e]/90 backdrop-blur-md border border-[#c9a84c]/40 p-2.5 rounded-xl text-center">
              <p className="text-white font-serif font-bold text-[12px] uppercase">Adv. Tushar Garg</p>
              <p className="text-[#c9a84c] text-[10px] font-bold">AOR, Supreme Court of India</p>
            </div>
          </div>

          {/* Center Column: Text & Bio Content */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full shadow-sm">
              <ShieldCheck size={13} className="text-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10.5px] font-bold tracking-widest uppercase">
                ABOUT ADVOCATE TUSHAR GARG
              </span>
            </div>

            <h2 className="font-serif text-[26px] sm:text-[34px] font-bold text-white uppercase tracking-tight leading-snug">
              ADVOCATE-ON-RECORD <br />
              <span className="text-[#c9a84c]">SUPREME COURT OF INDIA</span>
            </h2>

            <p className="text-gray-300 text-[13px] sm:text-[14px] leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              Advocate Tushar Garg is an Advocate-on-Record (AOR) of the Supreme Court of India with over 10 years of experience handling constitutional writ petitions, criminal trials, civil litigation, matrimonial disputes, and corporate arbitration before higher judicial forums.
            </p>

            <div className="pt-2">
              <Link 
                href="/about"
                className="inline-flex items-center gap-2.5 bg-[#c9a84c] hover:bg-[#b5943b] text-[#071126] px-7 py-3.5 rounded-xl text-[12px] font-bold uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-[#c9a84c]/20 hover:-translate-y-0.5 active:scale-95"
              >
                <span>KNOW MORE ABOUT TUSHAR GARG</span>
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </div>

          </div>

          {/* Right Column: 4 Credential Badges List */}
          <div className="w-full lg:w-[320px] flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-10">
            {credentials.map((cred, idx) => {
              const IconComponent = cred.icon;
              return (
                <div key={idx} className="flex items-center gap-3.5 bg-[#071126]/60 border border-[#c9a84c]/20 p-3.5 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconComponent size={19} className="text-[#c9a84c]" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-bold text-[12.5px] leading-tight mb-0.5">
                      {cred.title}
                    </h3>
                    <p className="text-gray-400 text-[11px] font-medium">{cred.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

import { ArrowRight, Scale } from "lucide-react";

interface CtaBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
}

export default function CtaBanner({ title, subtitle, buttonText, href }: CtaBannerProps) {
  return (
    <section className="bg-[#0d1b3e] mx-4 xl:mx-auto max-w-[1280px] my-16 rounded-xl py-10 px-8 relative overflow-hidden shadow-xl shadow-[#0d1b3e]/10 border border-[#1a2b5a]">
      {/* Decorative Gold Scale Icon Background */}
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Scale size={160} color="#c9a84c" strokeWidth={1} />
      </div>

      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex items-center gap-10">
          {/* Main Gold Scale Icon */}
          <div className="hidden md:block">
            <Scale size={100} color="#c9a84c" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-[#c9a84c] text-[18px] md:text-[22px] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
              {title}
            </h2>
            <hr className="w-16 border-t-2 border-[#c9a84c] mt-2 mb-3 opacity-80" />
            <p className="text-white/90 text-[13px] md:text-[14px] leading-relaxed max-w-[500px]">
              {subtitle}
            </p>
          </div>
        </div>
        
        <a
          href={href}
          className="inline-flex items-center gap-2 bg-[#c9a84c] text-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-widest rounded-md transition-all duration-300 hover:bg-[#d4a93a] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c9a84c]/30 active:scale-[0.98] flex-shrink-0"
        >
          {buttonText} <ArrowRight size={14} strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
}

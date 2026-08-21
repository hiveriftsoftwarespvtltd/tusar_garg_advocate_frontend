import { BookOpen, ArrowRight } from "lucide-react";

export default function AboutLegalEd() {
  return (
    <section className="bg-[#0d1b3e] rounded-xl p-6 relative overflow-hidden shadow-md">
      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-[14px] font-bold text-white uppercase tracking-[0.05em] mb-3" style={{ fontFamily: "var(--font-merriweather), serif" }}>
          ABOUT LEGAL EDUCATION
        </h2>
        <div className="w-12 h-[2px] bg-[#c9a84c]"></div>
      </div>

      <div className="text-[#c9a84c] mb-4 relative z-10">
        <BookOpen size={44} strokeWidth={1} />
      </div>

      <p className="text-[12.5px] text-white/90 leading-relaxed mb-6 relative z-10">
        A strong legal education builds the foundation for a successful career in law. Explore top institutions across India offering diverse programs and specializations.
      </p>

      <button className="flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-widest hover:text-[#c9a84c] transition-colors relative z-10">
        KNOW MORE <ArrowRight size={14} strokeWidth={2.5} />
      </button>
    </section>
  );
}

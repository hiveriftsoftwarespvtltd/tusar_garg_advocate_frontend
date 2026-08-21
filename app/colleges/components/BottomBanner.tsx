import { Quote, Headphones, ArrowRight } from "lucide-react";

export default function BottomBanner() {
  return (
    <section className="bg-transparent py-10 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="border border-[#c9a84c]/50 rounded-xl flex flex-col md:flex-row shadow-sm overflow-hidden bg-white">
          
          {/* Left Side: Quote */}
          <div className="py-6 px-8 md:py-8 md:px-10 md:w-1/2 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#c9a84c]/30 bg-[#fdfaf3]">
            <div className="mb-3 text-[#d4b975]">
              <Quote size={32} className="fill-[#d4b975]" />
            </div>
            <div>
              <p className="text-[17px] md:text-[19px] font-bold text-[#0d1b3e] leading-snug mb-3" style={{ fontFamily: "var(--font-merriweather), serif" }}>
                The roots of education are bitter, <br className="hidden lg:block" />
                but the fruit is sweet.
              </p>
              <span className="text-[12px] text-[#6b7280] font-medium tracking-wide">
                — Aristotle
              </span>
            </div>
          </div>

          {/* Right Side: Contact */}
          <div className="py-6 px-8 md:py-8 md:px-10 md:w-1/2 flex items-start lg:items-center gap-6 bg-white">
            <div className="text-[#c9a84c] flex-shrink-0 mt-1 lg:mt-0">
              <Headphones size={48} strokeWidth={1.2} />
            </div>
            <div>
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#0d1b3e] mb-1.5" style={{ fontFamily: "var(--font-merriweather), serif" }}>
                Need Guidance for Admissions?
              </h3>
              <p className="text-[12.5px] text-[#6b7280] leading-relaxed mb-4 max-w-md">
                Get expert legal education guidance and career advice from Advocate Tushar Garg.
              </p>
              <button className="flex items-center gap-2 bg-[#0d1b3e] text-white px-7 py-2.5 rounded-[4px] font-bold text-[11px] uppercase tracking-wider hover:bg-[#1a2b5a] hover:shadow-md transition-all">
                CONTACT US NOW <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

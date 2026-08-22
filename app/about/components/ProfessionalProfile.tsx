import Image from "next/image";
import { Scale, Landmark, Building2, Users, ShieldCheck, Shield, Award } from "lucide-react";

export default function ProfessionalProfile() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">

          {/* Left: Portrait */}
          <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0 relative">
            {/* The gold border container */}
            <div className="relative rounded-xl overflow-hidden bg-[#0d1b3e] aspect-[4/5] border-2 border-[#c9a84c] min-h-[400px]">
              <Image
                src="/about/tusar_professional_section.jpeg"
                alt="Advocate Tushar Garg"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Floating Gold Scale Icon Badge */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[72px] h-[72px] bg-gradient-to-b from-[#11234b] to-[#081126] border-[2px] border-[#c9a84c] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.3)] z-20">
              <Scale size={32} color="#c9a84c" strokeWidth={1.5} />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex-1">
            <h2
              className="text-[24px] md:text-[28px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em] mb-3"
              style={{ fontFamily: "var(--font-merriweather), serif" }}
            >
              PROFESSIONAL PROFILE
            </h2>
            <div className="w-12 h-[3px] bg-[#c9a84c] mb-6" />

            <p className="text-[14px] md:text-[15px] text-[#374151] leading-relaxed mb-6">
              Advocate Tushar Garg is a seasoned legal professional with more than 10 years of experience in litigation and advisory services before the Supreme Court of India, High Courts, and subordinate courts.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#374151] leading-relaxed">
              As an Advocate-on-Record (AOR) of the Supreme Court, he regularly handles complex constitutional, civil, criminal, and matrimonial matters, representing clients at the highest judicial level.
            </p>
          </div>
        </div>

        {/* Bottom 4 Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#e8ebf2] mt-20 max-w-[1000px] mx-auto">
          {/* Badge 1 */}
          <div className="flex flex-col items-center text-center group cursor-pointer px-4 py-6 md:py-0">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.06)] mb-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
              <div className="w-[72px] h-[72px] rounded-full bg-[#0d1b3e] border-2 border-[#c9a84c] flex items-center justify-center">
                 <Award size={32} color="#c9a84c" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-[13px] font-bold text-[#0d1b3e] uppercase tracking-wider leading-snug" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              LEGAL<br/>EXCELLENCE
            </h3>
            <hr className="w-8 border-t-[3px] border-[#c9a84c] mt-4" />
          </div>

          {/* Badge 2 */}
          <div className="flex flex-col items-center text-center group cursor-pointer px-4 py-6 md:py-0">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.06)] mb-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
              <div className="w-[72px] h-[72px] rounded-full bg-[#0d1b3e] border-2 border-[#c9a84c] flex items-center justify-center">
                 <Landmark size={32} color="#c9a84c" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-[13px] font-bold text-[#0d1b3e] uppercase tracking-wider leading-snug" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              SUPREME COURT<br/>PRACTICE
            </h3>
            <hr className="w-8 border-t-[3px] border-[#c9a84c] mt-4" />
          </div>

          {/* Badge 3 */}
          <div className="flex flex-col items-center text-center group cursor-pointer px-4 py-6 md:py-0">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.06)] mb-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
              <div className="w-[72px] h-[72px] rounded-full bg-[#0d1b3e] border-2 border-[#c9a84c] flex items-center justify-center">
                 <Users size={32} color="#c9a84c" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-[13px] font-bold text-[#0d1b3e] uppercase tracking-wider leading-snug" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              TRUSTED<br/>REPRESENTATION
            </h3>
            <hr className="w-8 border-t-[3px] border-[#c9a84c] mt-4" />
          </div>

          {/* Badge 4 */}
          <div className="flex flex-col items-center text-center group cursor-pointer px-4 py-6 md:py-0">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.06)] mb-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
              <div className="relative w-[72px] h-[72px] flex items-center justify-center">
                 <Shield className="absolute inset-0 w-full h-full text-[#c9a84c]" fill="#0d1b3e" strokeWidth={1.5} />
                 <Scale size={32} color="#c9a84c" strokeWidth={1.5} className="relative z-10" />
              </div>
            </div>
            <h3 className="text-[13px] font-bold text-[#0d1b3e] uppercase tracking-wider leading-snug" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              PROFESSIONAL<br/>INTEGRITY
            </h3>
            <hr className="w-8 border-t-[3px] border-[#c9a84c] mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

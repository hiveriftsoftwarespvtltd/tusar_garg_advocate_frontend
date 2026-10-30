import Image from "next/image";
import { Scale, Landmark, Building2, Users, ShieldCheck, Shield, Award } from "lucide-react";

export default function ProfessionalProfile() {
  return (
    <section className="pt-12 pb-10 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-stretch md:min-h-[450px] lg:min-h-[480px]">

          {/* Left: Portrait */}
          <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0 flex flex-col">
            <div className="relative mb-14 flex-1">
              {/* The gold border container */}
              <div className="relative w-full rounded-xl overflow-hidden bg-[#0d1b3e] border-2 border-[#c9a84c] h-[420px] md:h-full md:absolute md:inset-0">
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
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 mt-4 md:mt-0">
            <h2 className="font-serif text-[24px] md:text-[28px] text-[#0d1b3e] uppercase tracking-[0.1em] mb-3"
             
            >
              ABOUT ADVOCATE TUSHAR GARG
            </h2>
            <div className="w-full h-[1px] bg-gray-200 mb-6">
              <div className="w-24 h-[3px] bg-[#c9a84c]" />
            </div>

            <h3 className="text-[17px] md:text-[18px] font-semibold text-[#c9a84c] mb-6">
              Experienced Advocacy. Personal Attention. Clear Legal Guidance.
            </h3>

            <div className="space-y-5">
              <p className="text-[14px] md:text-[15px] text-[#374151] font-medium leading-relaxed">
                For more than a decade, Advocate Tushar Garg has been helping individuals, families, and organisations navigate difficult legal situations through litigation and legal advisory services before the Supreme Court of India, High Courts, and subordinate courts.
              </p>
              <p className="text-[14px] md:text-[15px] text-[#374151] font-medium leading-relaxed">
                Over the years, his practice has been shaped by a simple understanding: behind every case, there is a person, a family, a business, or an important decision that matters deeply to someone.
              </p>
              <p className="text-[14px] md:text-[15px] text-[#374151] font-medium leading-relaxed">
                Legal disputes can be confusing and overwhelming. For a client, a court case is rarely just a legal file or a set of documents. It can involve a family, a career, property, reputation, finances, personal freedom, or years of uncertainty. This is why every matter is approached with careful attention to both the legal issues and the circumstances surrounding them.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom 4 Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 mt-12 max-w-[1100px] mx-auto border-t border-gray-100 pt-10 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {/* Badge 1 */}
          <div className="flex flex-col items-center text-center px-6 py-8 lg:py-0">
            <div className="w-[72px] h-[72px] rounded-full bg-[#0d1b3e] border-2 border-[#c9a84c] flex items-center justify-center mb-6 shadow-lg">
              <Award size={32} color="#c9a84c" strokeWidth={1.5} />
            </div>
            <h3 className="text-[14px] font-semibold text-[#0d1b3e] uppercase tracking-wider leading-snug mb-3">
              LEGAL<br />EXCELLENCE
            </h3>
            <p className="text-[13px] text-[#4b5563] font-medium leading-relaxed">
              Commitment to thorough legal research, preparation and professional representation.
            </p>
          </div>

          {/* Badge 2 */}
          <div className="flex flex-col items-center text-center px-6 py-8 lg:py-0">
            <div className="w-[72px] h-[72px] rounded-full bg-[#0d1b3e] border-2 border-[#c9a84c] flex items-center justify-center mb-6 shadow-lg">
              <Landmark size={32} color="#c9a84c" strokeWidth={1.5} />
            </div>
            <h3 className="text-[14px] font-semibold text-[#0d1b3e] uppercase tracking-wider leading-snug mb-3">
              SUPREME COURT<br />PRACTICE
            </h3>
            <p className="text-[13px] text-[#4b5563] font-medium leading-relaxed">
              Professional experience in matters before the Supreme Court of India.
            </p>
          </div>

          {/* Badge 3 */}
          <div className="flex flex-col items-center text-center px-6 py-8 lg:py-0">
            <div className="w-[72px] h-[72px] rounded-full bg-[#0d1b3e] border-2 border-[#c9a84c] flex items-center justify-center mb-6 shadow-lg">
              <Users size={32} color="#c9a84c" strokeWidth={1.5} />
            </div>
            <h3 className="text-[14px] font-semibold text-[#0d1b3e] uppercase tracking-wider leading-snug mb-3">
              TRUSTED<br />REPRESENTATION
            </h3>
            <p className="text-[13px] text-[#4b5563] font-medium leading-relaxed">
              Dedicated and responsible representation with attention to each matter.
            </p>
          </div>

          {/* Badge 4 */}
          <div className="flex flex-col items-center text-center px-6 py-8 lg:py-0">
            <div className="relative w-[72px] h-[72px] rounded-full bg-[#0d1b3e] border-2 border-[#c9a84c] flex items-center justify-center mb-6 shadow-lg">
              <Scale size={32} color="#c9a84c" strokeWidth={1.5} className="relative z-10" />
            </div>
            <h3 className="text-[14px] font-semibold text-[#0d1b3e] uppercase tracking-wider leading-snug mb-3">
              PROFESSIONAL<br />INTEGRITY
            </h3>
            <p className="text-[13px] text-[#4b5563] leading-relaxed">
              A commitment to ethical standards, confidentiality and professional responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

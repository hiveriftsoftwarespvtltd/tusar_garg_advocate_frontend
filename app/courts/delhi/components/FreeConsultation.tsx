import { Scale, CheckCircle2, Calendar } from "lucide-react";

export default function FreeConsultation() {
  return (
    <section className="py-16 bg-[#fcfcfc]">
      <div className="max-w-[1100px] mx-auto px-4">
        
        <div className="bg-[#0d1b3e] rounded-xl flex flex-col md:flex-row overflow-hidden shadow-xl border border-[#1a2b5e]">
          
          {/* Left Side - Info */}
          <div className="flex-1 p-10 md:p-14 md:pr-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#ffffff15]">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-[#c9a84c]">
                <Scale size={48} strokeWidth={1} />
              </div>
              <h2 className="text-[24px] md:text-[28px] font-serif text-white tracking-wide">
                FREE CONSULTATION
              </h2>
            </div>
            
            <p className="text-[18px] md:text-[20px] text-white/90 leading-snug mb-10 max-w-sm">
              Speak with our legal team about your matter.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/80 text-[15px]">
                <CheckCircle2 size={18} className="text-[#c9a84c] flex-shrink-0" />
                <span>Confidential & Secure</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-[15px]">
                <CheckCircle2 size={18} className="text-[#c9a84c] flex-shrink-0" />
                <span>Experienced Legal Experts</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-[15px]">
                <CheckCircle2 size={18} className="text-[#c9a84c] flex-shrink-0" />
                <span>Tailored Legal Solutions</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 p-10 md:p-14">
            <form className="flex flex-col gap-5">
              
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-white/70">Name <span className="text-[#c9a84c]">*</span></label>
                  <input type="text" placeholder="Enter your full name" className="bg-transparent border border-[#ffffff20] rounded-md px-4 py-2.5 text-white text-[14px] outline-none focus:border-[#c9a84c] transition-colors placeholder:text-white/30" />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-white/70">Phone Number <span className="text-[#c9a84c]">*</span></label>
                  <input type="tel" placeholder="Enter your phone number" className="bg-transparent border border-[#ffffff20] rounded-md px-4 py-2.5 text-white text-[14px] outline-none focus:border-[#c9a84c] transition-colors placeholder:text-white/30" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-white/70">Email Address <span className="text-[#c9a84c]">*</span></label>
                  <input type="email" placeholder="Enter your email address" className="bg-transparent border border-[#ffffff20] rounded-md px-4 py-2.5 text-white text-[14px] outline-none focus:border-[#c9a84c] transition-colors placeholder:text-white/30" />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-white/70">Case Type <span className="text-[#c9a84c]">*</span></label>
                  <select className="bg-transparent border border-[#ffffff20] rounded-md px-4 py-2.5 text-white/70 text-[14px] outline-none focus:border-[#c9a84c] transition-colors appearance-none [&>option]:bg-[#0d1b3e] [&>option]:text-white cursor-pointer">
                    <option value="">Select case type</option>
                    <option value="civil">Civil Matter</option>
                    <option value="criminal">Criminal Matter</option>
                    <option value="corporate">Corporate & Commercial</option>
                    <option value="family">Family & Matrimonial</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-white/70">Brief Message <span className="text-[#c9a84c]">*</span></label>
                <textarea rows={3} placeholder="Describe your case briefly" className="bg-transparent border border-[#ffffff20] rounded-md px-4 py-3 text-white text-[14px] outline-none focus:border-[#c9a84c] transition-colors placeholder:text-white/30 resize-none"></textarea>
              </div>

              <button type="button" className="mt-2 flex justify-center items-center gap-2 bg-[#c9a84c] text-[#0d1b3e] font-bold text-[13px] uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#d4a93a] transition-colors w-full">
                <Calendar size={18} strokeWidth={2} />
                BOOK FREE CONSULTATION
              </button>

            </form>
          </div>

        </div>
        
      </div>
    </section>
  );
}

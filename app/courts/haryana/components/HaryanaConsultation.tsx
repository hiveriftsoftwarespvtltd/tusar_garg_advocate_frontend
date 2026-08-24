import { User, Clock, ShieldCheck, Lock, Scale } from "lucide-react";

export default function HaryanaConsultation() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="max-w-[1100px] mx-auto px-4">
        
        <div className="bg-white rounded-xl flex flex-col md:flex-row overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-[#f0f0f0]">
          
          <div className="flex-1 p-10 md:p-14 relative bg-[#fcfcfc] border-b md:border-b-0 md:border-r border-[#f0f0f0]">
            
            <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none translate-x-10 translate-y-10">
              <Scale size={280} strokeWidth={1} className="text-[#0d1b3e]" />
            </div>

            <div className="w-10 h-[3px] bg-[#d19e3f] mb-6"></div>
            
            <h2 className="text-[22px] md:text-[26px] font-serif font-bold text-[#0d1b3e] tracking-wide mb-3">
              BOOK FREE CONSULTATION
            </h2>
            
            <h3 className="text-[14px] md:text-[15px] font-bold text-[#d19e3f] mb-5">
              Professional Guidance. Strategic Representation.
            </h3>
            
            <p className="text-[13px] md:text-[14px] text-[#4b5563] leading-relaxed mb-10 max-w-sm font-medium">
              Schedule a free consultation with Tushar Garg, Advocate-on-Record, Supreme Court of India, to discuss your matter across any Haryana district court.
            </p>
            
            <ul className="space-y-6 relative z-10">
              <li className="flex items-center gap-4 text-[#4b5563] text-[13px] md:text-[14px] font-bold">
                <div className="w-10 h-10 rounded-full border border-[#d19e3f] flex items-center justify-center flex-shrink-0 bg-white">
                  <User size={18} className="text-[#d19e3f]" strokeWidth={2} />
                </div>
                <span>Confidential & Personalized Advice</span>
              </li>
              <li className="flex items-center gap-4 text-[#4b5563] text-[13px] md:text-[14px] font-bold">
                <div className="w-10 h-10 rounded-full border border-[#d19e3f] flex items-center justify-center flex-shrink-0 bg-white">
                  <Clock size={18} className="text-[#d19e3f]" strokeWidth={2} />
                </div>
                <span>Convenient & Flexible Appointments</span>
              </li>
              <li className="flex items-center gap-4 text-[#4b5563] text-[13px] md:text-[14px] font-bold">
                <div className="w-10 h-10 rounded-full border border-[#d19e3f] flex items-center justify-center flex-shrink-0 bg-white">
                  <ShieldCheck size={18} className="text-[#d19e3f]" strokeWidth={2} />
                </div>
                <span>Trusted Legal Representation</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 p-10 md:p-14 bg-[#f9fafb] flex flex-col justify-center">
            <form className="flex flex-col gap-4">
              
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Full Name" className="flex-1 bg-white border border-[#e5e7eb] rounded-md px-4 py-3 text-[#0d1b3e] text-[14px] outline-none focus:border-[#d19e3f] transition-colors placeholder:text-[#9ca3af] shadow-sm" />
                <input type="tel" placeholder="Mobile Number" className="flex-1 bg-white border border-[#e5e7eb] rounded-md px-4 py-3 text-[#0d1b3e] text-[14px] outline-none focus:border-[#d19e3f] transition-colors placeholder:text-[#9ca3af] shadow-sm" />
              </div>

              <input type="email" placeholder="Email Address" className="w-full bg-white border border-[#e5e7eb] rounded-md px-4 py-3 text-[#0d1b3e] text-[14px] outline-none focus:border-[#d19e3f] transition-colors placeholder:text-[#9ca3af] shadow-sm" />
              
              <select className="w-full bg-white border border-[#e5e7eb] rounded-md px-4 py-3 text-[#6b7280] text-[14px] outline-none focus:border-[#d19e3f] transition-colors appearance-none cursor-pointer shadow-sm">
                <option value="">Select Court / Case Type</option>
                <option value="civil">Civil Matter</option>
                <option value="criminal">Criminal Matter</option>
                <option value="corporate">Corporate & Commercial</option>
                <option value="family">Family & Matrimonial</option>
                <option value="other">Other</option>
              </select>

              <textarea rows={4} placeholder="Brief About Your Case" className="w-full bg-white border border-[#e5e7eb] rounded-md px-4 py-3 text-[#0d1b3e] text-[14px] outline-none focus:border-[#d19e3f] transition-colors placeholder:text-[#9ca3af] resize-none shadow-sm"></textarea>

              <button type="button" className="mt-3 bg-[#d19e3f] text-white font-bold text-[14px] tracking-wide px-6 py-3.5 rounded-md hover:bg-[#b88934] transition-colors w-full shadow-sm uppercase">
                BOOK FREE CONSULTATION
              </button>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-[#6b7280] text-[13px] font-medium">
                <Lock size={14} />
                <span>Your information is secure and confidential.</span>
              </div>

            </form>
          </div>

        </div>
        
      </div>
    </section>
  );
}

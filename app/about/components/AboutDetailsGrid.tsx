import { ChevronRight, Phone, Mail, Scale } from "lucide-react";

export default function AboutDetailsGrid() {
  return (
    <section className="pb-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box 1: Experience & Achievements */}
          <div className="bg-[#fafafa] border border-[#e8ebf2] rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white border border-[#e8ebf2] flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
              </div>
              <h3 className="text-[15px] font-semibold text-[#0d1b3e] uppercase tracking-wider">
                EXPERIENCE & ACHIEVEMENTS
              </h3>
            </div>
            <div className="w-10 h-[2px] bg-[#c9a84c] mb-6" />
            <ul className="space-y-4">
              {[
                "Qualified for Judiciary Examination Interviews of Delhi, Gujarat, and Haryana",
                "Practised under renowned Senior Advocates including Sh. Ramesh Gupta Ji and Sh. Parikh Saheb",
                "Extensive courtroom experience across multiple jurisdictions"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <ChevronRight size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <span className="text-[13.5px] text-[#374151] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: Practice Areas */}
          <div className="bg-[#fafafa] border border-[#e8ebf2] rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white border border-[#e8ebf2] flex items-center justify-center shadow-sm">
                 <Scale size={24} color="#0d1b3e" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-semibold text-[#0d1b3e] uppercase tracking-wider">
                PRACTICE AREAS
              </h3>
            </div>
            <div className="w-10 h-[2px] bg-[#c9a84c] mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Criminal Law",
                "Civil Litigation",
                "Matrimonial & Family Law",
                "Special Leave Petitions (SLP)",
                "Public Interest Litigation (PIL)",
                "Curative & Review Petitions",
                "Transfer Petitions (Civil, Criminal & Matrimonial)",
                "Arbitration & Corporate Law"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <ChevronRight size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <span className="text-[13.5px] text-[#374151] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 3: Education & Certifications */}
          <div className="bg-[#fafafa] border border-[#e8ebf2] rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white border border-[#e8ebf2] flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h3 className="text-[15px] font-semibold text-[#0d1b3e] uppercase tracking-wider">
                EDUCATION & CERTIFICATIONS
              </h3>
            </div>
            <div className="w-10 h-[2px] bg-[#c9a84c] mb-6" />
            <ul className="space-y-4">
              {[
                "B.A. LL.B.",
                "LL.M.",
                "PG Diploma in Arbitration",
                "PG Diploma in Corporate Law – Indian Law Institute (ILI)",
                "IPR Certification – ISIL"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <ChevronRight size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <span className="text-[13.5px] text-[#374151] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 4: Contact Details */}
          <div className="bg-[#fafafa] border border-[#e8ebf2] rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white border border-[#e8ebf2] flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h3 className="text-[15px] font-semibold text-[#0d1b3e] uppercase tracking-wider">
                CONTACT DETAILS
              </h3>
            </div>
            <div className="w-10 h-[2px] bg-[#c9a84c] mb-6" />
            <div className="space-y-6">
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-white border border-[#e8ebf2] flex items-center justify-center shadow-sm flex-shrink-0 text-[#c9a84c]">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[13px] text-[#6b7280] font-medium mb-1">Phone & Landline</p>
                  <p className="text-[16px] font-bold text-[#0d1b3e] mb-1">+91 72068 10681</p>
                  <p className="text-[16px] font-bold text-[#0d1b3e]">011-40817553</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-white border border-[#e8ebf2] flex items-center justify-center shadow-sm flex-shrink-0 text-[#c9a84c]">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[13px] text-[#6b7280] font-medium mb-1">Email</p>
                  <p className="text-[16px] font-bold text-[#0d1b3e]">tushargarg0681@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-white border border-[#e8ebf2] flex items-center justify-center shadow-sm flex-shrink-0 text-[#c9a84c]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <p className="text-[13px] text-[#6b7280] font-medium mb-1">Address</p>
                  <p className="text-[14px] font-medium text-[#0d1b3e] leading-relaxed">
                    Flat No. 7, Second Floor, D-1,<br/>
                    Kalindi Colony, Near Sunrise Hospital,<br/>
                    New Delhi-110065
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

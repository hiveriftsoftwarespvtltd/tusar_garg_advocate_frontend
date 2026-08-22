import { Briefcase, BookOpen, Globe, Users, FileText, Scale } from "lucide-react";

export default function ContactSidebar() {
  const permitted = [
    { text: "Professional inquiries and appointments", icon: <Briefcase size={16} /> },
    { text: "Information about legal research & resources", icon: <BookOpen size={16} /> },
    { text: "General information about the website content", icon: <Globe size={16} /> },
    { text: "Collaboration and academic inquiries", icon: <Users size={16} /> },
    { text: "Other legitimate professional matters", icon: <FileText size={16} /> },
  ];

  return (
    <aside className="w-full">
      {/* Permitted Inquiries Box */}
      <div className="bg-white border border-[#e8ebf2] rounded-xl p-6 mb-8 shadow-sm">
        <div className="mb-5">
          <h3 className="text-[14px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em] mb-3" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
            PERMITTED INQUIRIES
          </h3>
          <div className="w-12 h-[2px] bg-[#c9a84c]"></div>
        </div>
        
        <div className="flex flex-col gap-4">
          {permitted.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="w-8 h-8 rounded-lg bg-[#fdfaf3] border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] flex-shrink-0 group-hover:scale-110 group-hover:bg-[#c9a84c] group-hover:text-white transition-all">
                {item.icon}
              </div>
              <span className="text-[13px] text-[#374151] leading-snug group-hover:text-[#0d1b3e] transition-colors font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Please Note Box */}
      <div className="bg-white border border-[#e8ebf2] rounded-xl p-6 shadow-sm">
        <div className="mb-5">
          <h3 className="text-[14px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em] mb-3" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
            PLEASE NOTE
          </h3>
          <div className="w-12 h-[2px] bg-[#c9a84c]"></div>
        </div>
        
        <p className="text-[12.5px] text-[#374151] leading-relaxed mb-6 font-medium">
          This contact form is not for legal advice or case-specific consultations. No attorney-client relationship is established through this form.
        </p>

        <div className="bg-[#fdfaf3] rounded-lg p-4 flex items-center gap-4 border border-[#c9a84c]/20">
          <div className="text-[#c9a84c]">
            <Scale size={28} strokeWidth={1.5} />
          </div>
          <p className="text-[12px] text-[#0d1b3e] font-bold leading-snug">
            For case-related consultations, please schedule an appointment.
          </p>
        </div>
      </div>
    </aside>
  );
}

import { Bell, FileText, ChevronRight } from "lucide-react";

export default function LatestNotifications() {
  const notifications = [
    {
      title: "HPSC Civil Judge (Junior Division) Recruitment 2025",
      subtitle: "Himachal Pradesh Public Service Commission",
      date: "02 May 2025",
    },
    {
      title: "Rajasthan Higher Judicial Service Exam 2025",
      subtitle: "Rajasthan High Court",
      date: "30 Apr 2025",
    },
    {
      title: "Assistant Legal Advisor Recruitment 2025",
      subtitle: "Ministry of Railways",
      date: "29 Apr 2025",
    },
    {
      title: "Law Officer (Scale I) Recruitment 2025",
      subtitle: "NHAI (National Highways Authority of India)",
      date: "28 Apr 2025",
    },
    {
      title: "Supreme Court Law Clerk Recruitment 2025",
      subtitle: "Supreme Court of India",
      date: "26 Apr 2025",
    },
  ];

  return (
    <section className="bg-white border border-[#e8ebf2] rounded-xl p-6 h-full flex flex-col shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Bell size={22} className="text-[#c9a84c]" />
          <h2 className="text-[15px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em]" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
            LATEST NOTIFICATIONS
          </h2>
        </div>
        <a href="#" className="text-[11px] font-bold text-[#6b7280] hover:text-[#c9a84c] transition-colors">
          View All
        </a>
      </div>

      {/* List */}
      <div className="flex flex-col flex-1">
        {notifications.map((notif, idx) => (
          <div key={idx} className="flex gap-4 group py-4 border-b border-[#e8ebf2] last:border-b-0 hover:bg-[#fafafa] transition-colors -mx-6 px-6 cursor-pointer items-center">
            {/* Icon */}
            <div className="w-10 h-10 rounded-md bg-[#f1f5f9] flex items-center justify-center flex-shrink-0 text-[#64748b] group-hover:text-[#c9a84c] group-hover:bg-[#fdf8ed] transition-colors border border-[#e2e8f0]">
              <FileText size={18} strokeWidth={1.5} />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[12.5px] font-bold text-[#374151] leading-snug mb-1 group-hover:text-[#0d1b3e] transition-colors pr-4 truncate">
                {notif.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-[#6b7280] truncate">
                  {notif.subtitle}
                </p>
                <p className="text-[11px] text-[#0d1b3e] font-bold flex-shrink-0 pl-2">
                  {notif.date}
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center">
              <ChevronRight size={20} className="text-[#374151] group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 flex justify-center border-t border-[#e8ebf2] pt-6 -mx-6">
        <button className="border border-[#c9a84c] text-[#0d1b3e] px-12 py-2.5 rounded-md font-bold text-[11px] uppercase tracking-[0.1em] hover:bg-[#c9a84c] hover:text-white transition-all">
          VIEW ALL NOTIFICATIONS
        </button>
      </div>
    </section>
  );
}

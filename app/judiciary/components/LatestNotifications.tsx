import { Bell, ArrowRight } from "lucide-react";

export default function LatestNotifications() {
  const notifications = [
    {
      title: "Haryana Judicial Services Examination 2025",
      subtitle: "Haryana Public Service Commission",
      date: "15 May 2025",
    },
    {
      title: "Punjab Civil Judge Recruitment 2025",
      subtitle: "Punjab & Haryana High Court",
      date: "10 May 2025",
    },
    {
      title: "Delhi Judicial Services Preliminary Notice",
      subtitle: "Delhi High Court",
      date: "06 May 2025",
    },
    {
      title: "Rajasthan Higher Judicial Service Update",
      subtitle: "Rajasthan High Court",
      date: "02 May 2025",
    },
    {
      title: "Madhya Pradesh Civil Judge Notification",
      subtitle: "Madhya Pradesh High Court",
      date: "28 Apr 2025",
    },
  ];

  return (
    <section className="bg-white border border-[#e8ebf2] rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
      <div className="p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Bell size={18} className="text-[#c9a84c]" />
            <h2 className="text-[14px] md:text-[15px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              LATEST NOTIFICATIONS
            </h2>
          </div>
          <a href="#" className="text-[11px] font-bold text-[#6b7280] hover:text-[#c9a84c] transition-colors">
            View All
          </a>
        </div>

        {/* List */}
        <div className="flex flex-col gap-4">
          {notifications.map((notif, idx) => (
            <div key={idx} className="flex gap-4 group items-start border-b border-[#e8ebf2] pb-4 last:border-0 last:pb-0">
              {/* Icon */}
              <div className="flex items-center justify-center flex-shrink-0 text-[#475569] group-hover:text-[#c9a84c] transition-colors mt-0.5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0 pr-2">
                <h3 className="text-[13px] font-bold text-[#0d1b3e] leading-tight mb-1 group-hover:text-[#c9a84c] transition-colors">
                  {notif.title}
                </h3>
                <p className="text-[11px] text-[#6b7280] truncate">
                  {notif.subtitle}
                </p>
              </div>

              {/* Date & Button */}
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span className="text-[10px] text-[#6b7280]">{notif.date}</span>
                <button className="bg-[#0d1b3e] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-[4px] hover:bg-[#c9a84c] transition-colors">
                  View Notice
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { Bell, FileText, Download } from "lucide-react";

export default function RecentNotifications() {
  const notifications = [
    {
      title: "Insolvency and Bankruptcy Board of India (Insolvency Resolution Process for Corporate Persons) Regulations, 2024",
      ministry: "Ministry of Corporate Affairs",
      date: "12 May 2024",
    },
    {
      title: "The Companies (Amendment) Rules, 2024",
      ministry: "Ministry of Corporate Affairs",
      date: "08 May 2024",
    },
    {
      title: "The Income-tax (Eighth Amendment) Rules, 2024",
      ministry: "CBDT",
      date: "02 May 2024",
    },
    {
      title: "The Arbitration and Conciliation (Amendment) Rules, 2024",
      ministry: "Ministry of Law & Justice",
      date: "30 Apr 2024",
    },
    {
      title: "The Digital Personal Data Protection (Amendment) Rules, 2024",
      ministry: "MeitY",
      date: "28 Apr 2024",
    },
  ];

  return (
    <section className="bg-white h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Bell size={20} className="text-[#c9a84c]" />
        <h2 className="text-[14px] md:text-[15px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
          RECENT NOTIFICATIONS
        </h2>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 flex-1">
        {notifications.map((notif, idx) => (
          <div key={idx} className="flex gap-4 group border border-[#e8ebf2] rounded-lg p-3 hover:border-[#c9a84c]/50 hover:shadow-md transition-all cursor-pointer">
            {/* Icon */}
            <div className="pt-1">
              <FileText size={22} strokeWidth={1.5} className="text-[#c9a84c]" />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[12px] font-bold text-[#374151] leading-snug mb-1.5 group-hover:text-[#0d1b3e] transition-colors line-clamp-2">
                {notif.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-[10px] text-[#6b7280]">
                <span>{notif.ministry}</span>
                <span className="w-1 h-1 rounded-full bg-[#cbd5e1]" />
                <span>{notif.date}</span>
              </div>
            </div>

            {/* PDF Button */}
            <div className="flex items-center">
              <button className="flex items-center gap-1.5 border border-[#e8ebf2] text-[#374151] px-3 py-1.5 rounded text-[10px] font-bold hover:bg-[#fafafa] hover:border-[#c9a84c] hover:text-[#0d1b3e] transition-all flex-shrink-0">
                PDF <Download size={12} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-6 flex justify-center">
        <button className="border border-[#0d1b3e] text-[#0d1b3e] px-8 py-2.5 rounded-md font-bold text-[11px] uppercase tracking-wider hover:bg-[#0d1b3e] hover:text-white transition-all w-full md:w-auto">
          VIEW ALL NOTIFICATIONS
        </button>
      </div>
    </section>
  );
}

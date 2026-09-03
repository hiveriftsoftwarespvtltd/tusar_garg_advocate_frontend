"use client";

import { useEffect, useState } from "react";
import { Bell, RefreshCw, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { fetchApi } from "../../../lib/api/client";

const defaultNotifications = [
  {
    title: "Haryana Judicial Services Examination 2025",
    conductingBody: "Haryana Public Service Commission (HPSC)",
    notificationDate: "15 May 2025",
    officialLink: "https://hpsc.gov.in"
  },
  {
    title: "Punjab Civil Judge Recruitment 2025",
    conductingBody: "Punjab & Haryana High Court",
    notificationDate: "10 May 2025",
    officialLink: "https://highcourtchd.gov.in"
  },
  {
    title: "Delhi Judicial Services (DJS) Preliminary Notice",
    conductingBody: "Delhi High Court",
    notificationDate: "06 May 2025",
    officialLink: "https://delhihighcourt.nic.in"
  },
  {
    title: "Rajasthan Higher Judicial Service Update",
    conductingBody: "Rajasthan High Court, Jodhpur",
    notificationDate: "02 May 2025",
    officialLink: "https://hcraj.nic.in"
  },
  {
    title: "Uttar Pradesh Higher Judicial Service (UP HJS)",
    conductingBody: "Allahabad High Court",
    notificationDate: "28 Apr 2025",
    officialLink: "https://www.allahabadhighcourt.in"
  },
  {
    title: "Madhya Pradesh Civil Judge Notification",
    conductingBody: "Madhya Pradesh High Court, Jabalpur",
    notificationDate: "20 Apr 2025",
    officialLink: "https://mphc.gov.in"
  },
  {
    title: "Gujarat Judicial Services Examination",
    conductingBody: "Gujarat High Court",
    notificationDate: "12 Apr 2025",
    officialLink: "https://gujarathighcourt.nic.in"
  },
  {
    title: "Bihar Judicial Services (Civil Judge Jr Division)",
    conductingBody: "Bihar Public Service Commission (BPSC)",
    notificationDate: "05 Apr 2025",
    officialLink: "https://bpsc.bih.nic.in"
  }
];

export default function LatestNotifications() {
  const [notifications, setNotifications] = useState<any[]>(defaultNotifications);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchApi('/judiciary');
        if (data && Array.isArray(data) && data.length > 0) {
          setNotifications(data);
        }
      } catch (err) {
        console.error("Failed to load judiciary notifications from API", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const openOfficialNotice = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const displayedNotifications = showAll ? notifications : notifications.slice(0, 5);

  return (
    <section className="bg-white border border-[#e8ebf2] rounded-xl overflow-hidden shadow-sm h-full flex flex-col transition-all duration-300">
      <div className="p-6 flex-1 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Bell size={18} className="text-[#c9a84c]" />
            <h2 className="font-serif text-[14px] md:text-[15px] text-[#0d1b3e] uppercase tracking-[0.05em]">
              LATEST NOTIFICATIONS ({notifications.length})
            </h2>
          </div>
          
          <button 
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="text-[11px] font-bold text-[#c9a84c] hover:text-[#0d1b3e] transition-colors flex items-center gap-1 cursor-pointer bg-[#0d1b3e]/5 hover:bg-[#0d1b3e]/10 px-2.5 py-1 rounded-md"
          >
            <span>{showAll ? "Show Less" : "View All"}</span>
            {showAll ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
        </div>

        {/* List */}
        {loading ? (
          <div className="flex items-center justify-center py-12 text-gray-500 font-medium gap-2 flex-1">
            <RefreshCw className="animate-spin" size={18} /> Loading Notifications...
          </div>
        ) : (
          <div className={`flex flex-col gap-4 transition-all duration-300 ${showAll ? "max-h-[520px] overflow-y-auto pr-1" : ""}`}>
            {displayedNotifications.map((notif, idx) => (
              <div key={notif._id || idx} className="flex gap-4 group items-start border-b border-[#e8ebf2] pb-4 last:border-0 last:pb-0 hover:bg-gray-50/50 p-2 rounded-lg transition-colors">
                {/* Icon */}
                <div className="flex items-center justify-center flex-shrink-0 text-[#475569] group-hover:text-[#c9a84c] transition-colors mt-0.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0 pr-2">
                  <h3 className="text-[13px] font-semibold text-[#0d1b3e] leading-tight mb-1 group-hover:text-[#c9a84c] transition-colors">
                    {notif.title}
                  </h3>
                  <p className="text-[11px] text-[#6b7280] truncate">
                    {notif.conductingBody || notif.state || "High Court / PSC"}
                  </p>
                </div>

                {/* Date & Button */}
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-[10px] text-[#6b7280] font-medium">{notif.notificationDate || "2025"}</span>
                  <button 
                    type="button"
                    onClick={() => openOfficialNotice(notif.officialLink)}
                    className="bg-[#0d1b3e] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[4px] hover:bg-[#c9a84c] hover:text-[#071126] transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <span>View Notice</span>
                    <ExternalLink size={10} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* In-page Toggle Footer if not showing all */}
        {!showAll && notifications.length > 5 && (
          <div className="mt-4 pt-3 border-t border-gray-100 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="text-[11px] font-bold text-[#0d1b3e] hover:text-[#c9a84c] transition-colors inline-flex items-center gap-1"
            >
              <span>+ Show {notifications.length - 5} More Notifications</span>
              <ChevronDown size={13} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

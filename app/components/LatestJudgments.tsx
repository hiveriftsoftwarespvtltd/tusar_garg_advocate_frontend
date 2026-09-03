"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar, Building2, ExternalLink } from "lucide-react";
import { fetchApi } from "../../lib/api/client";

function SCBadge() {
  return (
    <div className="w-10 h-10 rounded-full bg-[#dbeafe] border-2 border-[#93c5fd] flex items-center justify-center flex-shrink-0">
      <Building2 size={18} strokeWidth={1.5} className="text-[#1d4ed8]" />
    </div>
  );
}

function HCBadge() {
  return (
    <div className="w-10 h-10 rounded-full bg-[#dcfce7] border-2 border-[#86efac] flex items-center justify-center flex-shrink-0">
      <Building2 size={18} strokeWidth={1.5} className="text-[#15803d]" />
    </div>
  );
}

function DCBadge() {
  return (
    <div className="w-10 h-10 rounded-full bg-[#f3e8ff] border-2 border-[#d8b4fe] flex items-center justify-center flex-shrink-0">
      <Building2 size={18} strokeWidth={1.5} className="text-[#7e22ce]" />
    </div>
  );
}

const defaultJudgments = [
  {
    _id: "sc-1",
    courtName: "SUPREME COURT",
    courtColor: "text-[#1d4ed8]",
    underlineColor: "bg-[#1d4ed8]",
    title: "State of X vs. ABC Pvt. Ltd.",
    caseNumber: "Civil Appeal No. 1234/2024",
    date: "16 May 2024",
    bench: "Hon'ble Supreme Court Bench",
    shortDescription: "Landmark judgment on constitutional validity and statutory interpretation.",
    link: "/judgments",
  },
  {
    _id: "hc-1",
    courtName: "HIGH COURT",
    courtColor: "text-[#15803d]",
    underlineColor: "bg-[#15803d]",
    title: "Ramesh Kumar vs. State of Haryana",
    caseNumber: "CRM-M No. 5678/2024",
    date: "14 May 2024",
    bench: "High Court of Punjab & Haryana",
    shortDescription: "Appellate criminal law judgment regarding anticipatory bail.",
    link: "/judgments",
  },
  {
    _id: "dc-1",
    courtName: "DISTRICT COURT",
    courtColor: "text-[#7e22ce]",
    underlineColor: "bg-[#7e22ce]",
    title: "Sunita Devi vs. Rajesh Singh",
    caseNumber: "Civil Suit No. 234/2023",
    date: "10 May 2024",
    bench: "District Court Delhi",
    shortDescription: "Civil property and land dispute settlement ruling.",
    link: "/judgments",
  },
];

export default function LatestJudgments() {
  const [judgmentsList, setJudgmentsList] = useState<any[]>(defaultJudgments);

  useEffect(() => {
    async function loadJudgments() {
      try {
        const res = await fetchApi('/courts/judgments/all');
        if (res && Array.isArray(res) && res.length > 0) {
          const mapped = res.map((j: any) => {
            const courtName = j.courtId?.name?.toUpperCase() || "SUPREME COURT";
            const isHC = courtName.includes("HIGH");
            const isDC = courtName.includes("DISTRICT");
            return {
              _id: j._id,
              courtName: courtName,
              courtColor: isHC ? "text-[#15803d]" : isDC ? "text-[#7e22ce]" : "text-[#1d4ed8]",
              underlineColor: isHC ? "bg-[#15803d]" : isDC ? "bg-[#7e22ce]" : "bg-[#1d4ed8]",
              title: j.title || "Court Judgment",
              caseNumber: j.caseNumber || "Civil Case",
              date: j.date ? new Date(j.date).toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' }) : "Recently Decided",
              bench: j.bench || j.courtId?.name || "Judicial Bench",
              shortDescription: j.shortDescription || j.title,
              link: j.link || "/judgments",
            };
          });
          setJudgmentsList(mapped.slice(0, 3));
        }
      } catch (err) {
        console.error("Failed to load dynamic judgments", err);
      }
    }
    loadJudgments();
  }, []);

  return (
    <section className="bg-white py-10 sm:py-14 border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0d1b3e]/5 px-3 py-1 rounded-full mb-2">
              <Building2 size={13} className="text-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10.5px] font-bold tracking-widest uppercase">CASE LAW & PRECEDENTS</span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[30px] font-bold text-[#0d1b3e] uppercase tracking-tight">
              LATEST & IMPORTANT JUDGMENTS
            </h2>
            <div className="w-12 h-1 bg-[#c9a84c] mt-2 rounded-full" />
          </div>
          <a
            href="/judgments"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12.5px] text-[#0d1b3e] font-bold hover:text-[#c9a84c] flex items-center gap-1.5 transition-colors bg-[#0d1b3e]/5 hover:bg-[#0d1b3e] hover:text-white px-4 py-2 rounded-xl"
          >
            <span>View All Judgments Page</span>
            <ArrowRight size={13} strokeWidth={2.5} />
          </a>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {judgmentsList.map((j) => {
            const isHC = j.courtName.includes("HIGH");
            const isDC = j.courtName.includes("DISTRICT");
            const BadgeComponent = isHC ? HCBadge : isDC ? DCBadge : SCBadge;

            return (
              <div
                key={j._id}
                className="bg-[#fafafa] border border-gray-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#c9a84c]/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Badge + Court Label */}
                  <div className="flex items-center gap-3 mb-4">
                    <BadgeComponent />
                    <div>
                      <span className={`text-[11px] font-black tracking-wider ${j.courtColor}`}>
                        {j.courtName}
                      </span>
                      <div className={`h-[2.5px] ${j.underlineColor} mt-0.5 w-10 rounded-full`} />
                    </div>
                  </div>

                  {/* Case Title */}
                  <h3 className="text-[15px] font-bold text-[#0d1b3e] mb-2 leading-snug group-hover:text-[#c9a84c] transition-colors">
                    {j.title}
                  </h3>
                  <p className="text-[12px] font-medium text-gray-500 mb-3">{j.caseNumber}</p>

                  {/* Date & Bench */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3 text-[11.5px] text-gray-500 bg-white p-2.5 rounded-lg border border-gray-100">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#c9a84c]" />
                      {j.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Building2 size={13} className="text-[#c9a84c]" />
                      {j.bench}
                    </span>
                  </div>

                  {j.shortDescription && (
                    <p className="text-[12px] text-gray-600 mb-5 line-clamp-2">
                      {j.shortDescription}
                    </p>
                  )}
                </div>

                {/* VIEW JUDGMENT Button (Opens target="_blank" in new page) */}
                <a
                  href={j.link || "/judgments"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0d1b3e] hover:bg-[#c9a84c] text-white hover:text-[#0d1b3e] font-bold text-[11.5px] uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-300 shadow-sm"
                >
                  <span>VIEW JUDGMENT</span>
                  <ExternalLink size={13} strokeWidth={2.5} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

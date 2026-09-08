"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Building2, Scale } from "lucide-react";
import { fetchApi } from "../../lib/api/client";

function SCBadge() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#dbeafe] border border-[#93c5fd] flex items-center justify-center flex-shrink-0">
      <Building2 size={16} strokeWidth={1.5} className="text-[#1d4ed8]" />
    </div>
  );
}

function HCBadge() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#dcfce7] border border-[#86efac] flex items-center justify-center flex-shrink-0">
      <Building2 size={16} strokeWidth={1.5} className="text-[#15803d]" />
    </div>
  );
}

function DCBadge() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#f3e8ff] border border-[#d8b4fe] flex items-center justify-center flex-shrink-0">
      <Building2 size={16} strokeWidth={1.5} className="text-[#7e22ce]" />
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
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
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
              image: j.image || "",
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
          <Link
            href="/judgments"
            className="btn-shine-effect inline-flex items-center gap-2 text-[12px] font-bold text-[#0d1b3e] hover:text-white bg-[#c9a84c]/15 hover:bg-[#0d1b3e] border border-[#c9a84c]/40 hover:border-[#c9a84c] px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] group"
          >
            <span>View All Judgments</span>
            <ArrowRight size={13} strokeWidth={2.5} className="text-[#c9a84c] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {judgmentsList.map((j, idx) => {
            const isHC = j.courtName.includes("HIGH");
            const isDC = j.courtName.includes("DISTRICT");
            const BadgeComponent = isHC ? HCBadge : isDC ? DCBadge : SCBadge;

            // Fallback image based on index/court if none uploaded
            const fallbackImg = idx === 0 
              ? "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80"
              : idx === 1
              ? "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=600&q=80"
              : "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80";

            const displayImage = j.image || fallbackImg;

            return (
              <div
                key={j._id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#c9a84c]/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Top Image Preview */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                    <Image
                      src={displayImage}
                      alt={j.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Badge on top of image */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 bg-[#0d1b3e]/90 border border-white/20 px-2.5 py-1 rounded-md shadow-md backdrop-blur-xs">
                      <Scale size={13} className="text-[#c9a84c]" />
                      <span className="text-white text-[10px] font-bold uppercase tracking-wider">
                        {j.courtName}
                      </span>
                    </div>

                    {/* Case Number on bottom of image */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-white/90 text-[11px] font-semibold truncate">
                      {j.caseNumber}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    {/* Case Title */}
                    <h3 className="font-serif text-[16px] font-bold text-[#0d1b3e] mb-2 leading-snug group-hover:text-[#c9a84c] transition-colors line-clamp-2">
                      {j.title}
                    </h3>

                    {/* Date & Bench */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3 text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-[#c9a84c]" />
                        {j.date}
                      </span>
                      <span className="flex items-center gap-1.5 truncate">
                        <Building2 size={13} className="text-[#c9a84c]" />
                        <span className="truncate">{j.bench}</span>
                      </span>
                    </div>

                    {j.shortDescription && (
                      <p className="text-[12px] text-gray-600 mb-2 line-clamp-2 leading-relaxed">
                        {j.shortDescription}
                      </p>
                    )}
                  </div>
                </div>

                {/* VIEW JUDGMENT Button - Highlighted */}
                <div className="p-5 pt-0">
                  <Link
                    href={j.link || "/judgments"}
                    className="btn-shine-effect w-full inline-flex items-center justify-center gap-2 bg-[#071126] hover:bg-[#c9a84c] text-[#f7e6a6] hover:text-[#071126] border border-[#c9a84c]/40 font-bold text-[11.5px] uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_4px_16px_rgba(201,168,76,0.35)] group/btn"
                  >
                    <span>VIEW JUDGMENT</span>
                    <ArrowRight size={13} strokeWidth={2.5} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

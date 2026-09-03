"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar, FileText, Bookmark, Landmark, Scale, Briefcase, ExternalLink } from "lucide-react";
import { fetchApi } from "../../../lib/api/client";

export default function LatestJudgments() {
  const [activeTab, setActiveTab] = useState("LATEST");
  const [judgments, setJudgments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const tabs = ["LATEST", "IMPORTANT", "MOST VIEWED"];

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetchApi('/courts/judgments/all');
        if (res && Array.isArray(res)) {
          setJudgments(res);
        }
      } catch (err) {
        console.error("Failed to load judgments", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredJudgments = activeTab === "IMPORTANT" 
    ? judgments.filter(j => j.isFeatured) 
    : judgments;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Header with Tabs */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-col">
            <h2 className="font-serif text-[16px] md:text-[18px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em] mb-2">
              LATEST & IMPORTANT JUDGMENTS
            </h2>
            <div className="w-12 h-[3px] bg-[#c9a84c]"></div>
          </div>
          
          <div className="flex gap-4 border-b border-[#e8ebf2]">
            {tabs.map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-[11px] font-bold tracking-wider uppercase transition-colors ${
                  activeTab === tab 
                    ? "text-[#0d1b3e] border-b-2 border-[#c9a84c]" 
                    : "text-[#6b7280] hover:text-[#0d1b3e]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        {loading ? (
          <div className="text-center py-12 text-gray-500 font-medium">Loading judgments...</div>
        ) : filteredJudgments.length === 0 ? (
          <div className="bg-gray-50 p-8 text-center rounded-xl text-gray-500 italic border border-gray-100">
            No judgments available in this section yet. Add judgments from the Admin Dashboard!
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredJudgments.map((j) => (
              <div key={j._id} className="flex flex-col sm:flex-row items-stretch border border-[#e8ebf2] rounded-xl overflow-hidden hover:shadow-md hover:border-[#c9a84c]/50 transition-all cursor-pointer group">
                
                {/* Court Badge */}
                <div className="w-full sm:w-[130px] lg:w-[150px] bg-[#0d1b3e] flex flex-col items-center justify-center text-center flex-shrink-0 p-4">
                  <Landmark size={24} className="text-[#c9a84c] mb-1" />
                  <span className="text-[#c9a84c] text-[10px] md:text-[11px] font-bold uppercase tracking-wider leading-tight px-1">
                    {j.courtId?.name || "SUPREME COURT"}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0 p-4 md:p-6 flex flex-col justify-center">
                  <h3 className="text-[15px] font-bold text-[#0d1b3e] leading-snug mb-1 group-hover:text-[#c9a84c] transition-colors">
                    {j.title}
                  </h3>
                  <p className="text-[13px] text-[#374151] mb-3">
                    {j.shortDescription || j.title}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-y-2 text-[11px] text-[#6b7280]">
                    <span className="flex items-center gap-1.5 pr-4 border-r border-[#cbd5e1]">
                      <Calendar size={14} className="text-[#c9a84c]" /> 
                      {j.date ? new Date(j.date).toLocaleDateString("en-IN", { day: 'numeric', month: 'short', year: 'numeric' }) : "Recent"}
                    </span>
                    <span className="flex items-center gap-1.5 px-4 border-r border-[#cbd5e1]">
                      <Bookmark size={14} className="text-[#c9a84c]" /> 
                      {j.bench || "Judicial Bench"}
                    </span>
                    <span className="flex items-center gap-1.5 pl-4">
                      <FileText size={14} className="text-[#c9a84c]" /> 
                      {j.caseNumber || "Civil Case"}
                    </span>
                  </div>
                </div>

                {/* VIEW JUDGMENT Button (Opens in new tab/page) */}
                <div className="flex items-center justify-center sm:justify-end p-4 md:p-6 sm:pl-0 flex-shrink-0">
                  <a
                    href={j.link || "/judgments"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#0d1b3e] text-white hover:bg-[#c9a84c] hover:text-[#0d1b3e] px-5 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all w-full sm:w-auto shadow-sm"
                  >
                    <span>VIEW JUDGMENT</span>
                    <ExternalLink size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="/judgments"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#0d1b3e] bg-white text-[#0d1b3e] px-8 py-3 rounded-xl font-bold text-[12px] uppercase tracking-wider hover:bg-[#0d1b3e] hover:text-white transition-all shadow-sm"
          >
            VIEW ALL JUDGMENTS
          </a>
        </div>

      </div>
    </section>
  );
}

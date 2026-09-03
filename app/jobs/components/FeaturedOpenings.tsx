"use client";

import { useEffect, useState } from "react";
import { Briefcase, MapPin, GraduationCap, Clock, ExternalLink, RefreshCw } from "lucide-react";
import { fetchApi } from "../../../lib/api/client";

const defaultJobs = [
  {
    _id: "1",
    title: "Civil Judge (Junior Division)",
    organization: "Himachal Pradesh Public Service Commission",
    location: "Himachal Pradesh",
    qualification: "LLB",
    lastDate: "15 Jun 2025",
    applyLink: "https://hppsc.hp.gov.in"
  },
  {
    _id: "2",
    title: "District Judge / Higher Judicial Service",
    organization: "Rajasthan High Court",
    location: "Rajasthan",
    qualification: "LLB",
    lastDate: "30 Jun 2025",
    applyLink: "https://hcraj.nic.in"
  },
  {
    _id: "3",
    title: "Assistant Legal Advisor",
    organization: "Ministry of Railways",
    location: "New Delhi",
    qualification: "LLB",
    lastDate: "20 May 2025",
    applyLink: "https://indianrailways.gov.in"
  },
  {
    _id: "4",
    title: "Law Officer",
    organization: "National Highways Authority of India (NHAI)",
    location: "New Delhi",
    qualification: "LLB",
    lastDate: "25 May 2025",
    applyLink: "https://nhai.gov.in"
  },
  {
    _id: "5",
    title: "Law Clerk-cum-Research Associate",
    organization: "Supreme Court of India",
    location: "New Delhi",
    qualification: "LLB",
    lastDate: "28 May 2025",
    applyLink: "https://main.sci.gov.in"
  },
  {
    _id: "6",
    title: "Public Prosecutor / Asst. Public Prosecutor",
    organization: "Maharashtra Public Service Commission",
    location: "Maharashtra",
    qualification: "LLB",
    lastDate: "18 Jun 2025",
    applyLink: "https://mpsc.gov.in"
  },
  {
    _id: "7",
    title: "Legal Researcher",
    organization: "Indian Council of Social Science Research (ICSSR)",
    location: "New Delhi",
    qualification: "LLM / LLB",
    lastDate: "27 May 2025",
    applyLink: "https://icssr.org"
  }
];

export default function FeaturedOpenings() {
  const [jobs, setJobs] = useState<any[]>(defaultJobs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchApi('/jobs');
        if (data && Array.isArray(data) && data.length > 0) {
          setJobs(data);
        }
      } catch (err) {
        console.error("Failed to load jobs from API", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const openJobWebsite = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="bg-white border border-[#e8ebf2] rounded-xl p-6 h-full flex flex-col shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Briefcase size={22} className="text-[#c9a84c]" />
        <h2 className="font-serif text-[15px] text-[#0d1b3e] uppercase tracking-[0.05em]">
          FEATURED OPENINGS
        </h2>
      </div>

      {/* Loading state */}
      {loading ? (
        <div className="flex items-center justify-center py-12 text-gray-500 font-medium gap-2">
          <RefreshCw className="animate-spin" size={20} /> Loading Legal Vacancies...
        </div>
      ) : (
        /* List */
        <div className="flex flex-col flex-1">
          {jobs.map((job, idx) => (
            <div 
              key={job._id || idx} 
              onClick={() => openJobWebsite(job.applyLink)}
              className="flex flex-col lg:flex-row lg:items-center gap-4 py-4 border-b border-[#e8ebf2] last:border-b-0 hover:bg-[#fafafa] transition-colors -mx-6 px-6 cursor-pointer group"
            >
              {/* Left: Icon & Title */}
              <div className="flex items-center gap-4 flex-[2] min-w-0">
                <div className="w-[42px] h-[42px] rounded-lg bg-[#0d1b3e] flex items-center justify-center flex-shrink-0 text-[#c9a84c] shadow-sm">
                  <span className="font-bold text-[18px] text-white">
                    {job.title.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[13px] font-semibold text-[#0d1b3e] leading-tight mb-1 truncate group-hover:text-[#c9a84c] transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-[11px] text-[#6b7280] truncate">
                    {job.organization}
                  </p>
                </div>
              </div>
              
              {/* Middle: Details Grid */}
              <div className="flex items-center justify-between gap-4 flex-[2] text-[#374151]">
                <div className="flex items-center gap-2 flex-1">
                  <MapPin size={14} className="text-[#6b7280]" />
                  <span className="text-[12px] font-medium truncate">{job.location || "Pan-India"}</span>
                </div>
                
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] text-[#9ca3af]">Qualification</span>
                  <span className="text-[12px] font-medium truncate">{job.qualification || "LLB"}</span>
                </div>

                <div className="flex flex-col flex-1">
                  <span className="text-[10px] text-[#9ca3af]">Last Date</span>
                  <span className="text-[12px] font-medium truncate">{job.lastDate || "N/A"}</span>
                </div>
              </div>

              {/* Right: Button */}
              <div className="flex-shrink-0 mt-2 lg:mt-0">
                <a
                  href={job.applyLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#0d1b3e] text-white px-4 py-2 rounded text-[10px] font-bold uppercase tracking-wider group-hover:bg-[#c9a84c] transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>View Details</span>
                  <ExternalLink size={12} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View All Button */}
      <div className="mt-8 flex justify-center border-t border-[#e8ebf2] pt-6 -mx-6">
        <button className="border border-[#c9a84c] text-[#0d1b3e] px-12 py-2.5 rounded-md font-bold text-[11px] uppercase tracking-[0.1em] hover:bg-[#c9a84c] hover:text-white transition-all">
          VIEW ALL JOBS
        </button>
      </div>
    </section>
  );
}

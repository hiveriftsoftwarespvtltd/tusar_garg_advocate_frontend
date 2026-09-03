"use client";

import { useEffect, useState } from "react";
import { MapPin, ChevronRight, ArrowRight, RefreshCw, ExternalLink } from "lucide-react";
import { fetchApi } from "../../../lib/api/client";

const defaultColleges = [
  {
    _id: "1",
    name: "National Law School of India University (NLSIU)",
    location: "Bengaluru, Karnataka",
    type: "NLU",
    courses: "UG, PG, Ph.D.",
    logo: "NLSIU",
    website: "https://www.nls.ac.in"
  },
  {
    _id: "2",
    name: "The West Bengal National University of Juridical Sciences (NUJS)",
    location: "Kolkata, West Bengal",
    type: "NLU",
    courses: "UG, PG, Ph.D.",
    logo: "NUJS",
    website: "https://www.nujs.edu"
  },
  {
    _id: "3",
    name: "NALSAR University of Law",
    location: "Hyderabad, Telangana",
    type: "NLU",
    courses: "UG, PG, Ph.D.",
    logo: "NALSAR",
    website: "https://www.nalsar.ac.in"
  },
  {
    _id: "4",
    name: "National Law University, Delhi (NLUD)",
    location: "New Delhi",
    type: "NLU",
    courses: "UG, PG, Ph.D.",
    logo: "NLUD",
    website: "https://nludelhi.ac.in"
  },
  {
    _id: "5",
    name: "Jindal Global Law School (JGLS)",
    location: "Sonipat, Haryana",
    type: "Private",
    courses: "UG, PG, Ph.D.",
    logo: "JGLS",
    website: "https://jgu.edu.in/jgls"
  },
  {
    _id: "6",
    name: "Government Law College (GLC), Mumbai",
    location: "Mumbai, Maharashtra",
    type: "Government",
    courses: "UG, PG",
    logo: "GLC",
    website: "https://glcmumbai.com"
  },
  {
    _id: "7",
    name: "ILS Law College, Pune",
    location: "Pune, Maharashtra",
    type: "Private",
    courses: "UG, PG",
    logo: "ILS",
    website: "https://ilslaw.edu"
  },
  {
    _id: "8",
    name: "Hidayatullah National Law University (HNLU)",
    location: "Raipur, Chhattisgarh",
    type: "NLU",
    courses: "UG, PG, Ph.D.",
    logo: "HNLU",
    website: "https://hnlu.ac.in"
  }
];

export default function TopCollegesList() {
  const [colleges, setColleges] = useState<any[]>(defaultColleges);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchApi('/colleges');
        if (data && Array.isArray(data) && data.length > 0) {
          setColleges(data);
        }
      } catch (err) {
        console.error("Failed to load colleges from API", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const openCollegeWebsite = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const getTypeStyle = (type: string) => {
    if (type === "Government") return "text-[#6b7280] border-[#d1d5db]";
    return "text-[#c9a84c] border-[#c9a84c]/40";
  };

  return (
    <section>
      {/* Heading */}
      <div className="mb-6">
        <h2 className="font-serif text-[14px] md:text-[15px] text-[#0d1b3e] uppercase tracking-[0.05em] mb-3">
          TOP LAW COLLEGES IN INDIA
        </h2>
        <div className="w-full h-[1px] bg-[#c9a84c]/30"></div>
      </div>

      <div className="bg-white border border-[#e8ebf2] rounded-xl overflow-hidden shadow-sm">
        {/* Table Header */}
        <div className="bg-[#0d1b3e] text-white px-6 py-4 flex items-center text-[10px] font-bold tracking-[0.1em] uppercase">
          <div className="w-[45%]">COLLEGE</div>
          <div className="w-[25%] text-center">LOCATION</div>
          <div className="w-[15%] text-center">TYPE</div>
          <div className="w-[15%] text-center">COURSES</div>
        </div>

        {/* Loading state */}
        {loading ? (
          <div className="flex items-center justify-center py-12 text-gray-500 font-medium gap-2">
            <RefreshCw className="animate-spin" size={20} /> Loading Law Colleges...
          </div>
        ) : (
          /* Table Body */
          <div className="flex flex-col divide-y divide-[#e8ebf2]">
            {colleges.map((college, idx) => (
              <div 
                key={college._id || idx} 
                onClick={() => openCollegeWebsite(college.website)}
                className="flex items-center px-6 py-4 hover:bg-[#fafafa] transition-colors cursor-pointer group"
              >
                {/* College */}
                <div className="w-[45%] flex items-center gap-4 pr-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0d1b3e] flex flex-col items-center justify-center flex-shrink-0 text-white shadow-sm border border-[#e8ebf2]">
                    <span className="text-[8px] md:text-[10px] font-bold tracking-wider">
                      {college.logo || college.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-[12.5px] font-semibold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors leading-snug">
                    {college.name}
                  </h3>
                </div>

                {/* Location */}
                <div className="w-[25%] flex items-center justify-center gap-1.5 text-[11px] text-[#374151] font-medium">
                  <MapPin size={14} className="text-[#6b7280]" />
                  {college.location}
                </div>

                {/* Type */}
                <div className="w-[15%] flex items-center justify-center">
                  <span className={`px-4 py-1.5 rounded-[4px] text-[10px] font-bold border ${getTypeStyle(college.type)} bg-transparent`}>
                    {college.type}
                  </span>
                </div>

                {/* Courses & Arrow */}
                <div className="w-[15%] flex items-center justify-between pl-4">
                  <span className="text-[11px] text-[#374151] font-bold">{college.courses}</span>
                  <ExternalLink size={16} className="text-[#374151] group-hover:text-[#c9a84c] group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* View All Button */}
      <div className="mt-8 flex justify-center">
        <button className="flex items-center gap-2 border border-[#c9a84c] text-[#0d1b3e] px-10 py-2.5 rounded-[4px] font-bold text-[11px] uppercase tracking-wider hover:bg-[#c9a84c] hover:text-white transition-all">
          VIEW ALL LAW COLLEGES <ArrowRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}

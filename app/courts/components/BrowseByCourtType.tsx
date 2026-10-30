"use client";

import { Scale, Landmark, Building2, Gavel, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BrowseByCourtType() {
  const courtTypes = [
    {
      title: "Supreme Court of India",
      subtitle: "Apex Court of the Nation",
      description: "Highest constitutional court and apex court of appeal under Article 124.",
      badge: "APEX COURT",
      href: "/all-courts",
      icon: <Landmark size={36} className="text-[#c9a84c]" />
    },
    {
      title: "High Courts",
      subtitle: "25 Constitutional High Courts",
      description: "State apex courts exercising writ jurisdiction under Article 226.",
      badge: "STATE APEX",
      href: "/high-courts",
      icon: <Scale size={36} className="text-[#0d1b3e]" />
    },
    {
      title: "District & Sessions Courts",
      subtitle: "Subordinate Judiciary",
      description: "Principal civil and criminal trial courts across 700+ districts.",
      badge: "TRIAL COURTS",
      href: "/district-courts",
      icon: <Building2 size={36} className="text-[#0d1b3e]" />
    },
    {
      title: "Tribunals & Commissions",
      subtitle: "Specialized Quasi-Judicial Forums",
      description: "NCLT, NCLAT, NGT, CAT, and DRT for corporate and commercial matters.",
      badge: "TRIBUNALS",
      href: "/tribunals",
      icon: <Gavel size={36} className="text-[#0d1b3e]" />
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[#c9a84c] text-[11px] font-extrabold tracking-widest uppercase bg-[#c9a84c]/10 px-3 py-1 rounded-full mb-2">
            JUDICIAL ARCHITECTURE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e] uppercase tracking-wide">
            BROWSE BY COURT HIERARCHY
          </h2>
          <div className="w-16 h-[3px] bg-[#c9a84c] mt-2 rounded-full" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courtTypes.map((court, idx) => (
            <Link
              key={idx}
              href={court.href}
              className="bg-white border border-gray-200/90 hover:border-[#c9a84c] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-50 group-hover:bg-[#0d1b3e] rounded-xl transition-colors duration-300">
                    <div className="group-hover:text-[#c9a84c] transition-colors">
                      {court.icon}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#0d1b3e] bg-gray-100 group-hover:bg-[#c9a84c] group-hover:text-[#0d1b3e] px-2.5 py-1 rounded-full uppercase tracking-wider transition-colors">
                    {court.badge}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors mb-1">
                  {court.title}
                </h3>
                <p className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-wider mb-2">
                  {court.subtitle}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {court.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors pt-3 border-t border-gray-100">
                <span>Explore Directory</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform text-[#c9a84c]" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

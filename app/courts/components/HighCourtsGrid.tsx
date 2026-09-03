"use client";

import { Scale, ExternalLink, ArrowRight, MapPin, Globe, FileText } from "lucide-react";
import Link from "next/link";

export default function HighCourtsGrid({ courts = [] }: { courts: any[] }) {
  return (
    <section id="high-courts" className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[#c9a84c] text-[11px] font-extrabold tracking-widest uppercase bg-[#c9a84c]/10 px-3.5 py-1 rounded-full mb-2">
            DYNAMIC DATABASE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e] uppercase tracking-wide">
            CONSTITUTIONAL HIGH COURTS OF INDIA
          </h2>
          <div className="w-16 h-[3px] bg-[#c9a84c] mt-2 rounded-full" />
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mt-3">
            Access official High Court websites, online case status portals, daily cause lists, and certified judgments across India.
          </p>
        </div>

        {/* High Courts Grid */}
        {courts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courts.map((court) => {
              const stateSlug = court.state?.slug || (typeof court.stateId === 'object' ? court.stateId?.slug : 'unknown');
              const stateName = court.state?.name || (typeof court.stateId === 'object' ? court.stateId?.name : 'State Court');
              const detailUrl = `/courts/${stateSlug}/${court.slug}`;

              return (
                <div
                  key={court._id || court.slug}
                  className="bg-white border border-gray-200 hover:border-[#c9a84c] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 bg-[#0d1b3e] text-[#c9a84c] text-[10px] font-extrabold tracking-wider uppercase rounded-md flex items-center gap-1">
                        <Scale size={12} />
                        HIGH COURT
                      </span>
                      {court.city && (
                        <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                          <MapPin size={12} className="text-[#c9a84c]" />
                          {court.city}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <Link href={detailUrl}>
                      <h3 className="text-lg font-serif font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors leading-snug mb-2">
                        {court.name}
                      </h3>
                    </Link>

                    {/* Subtitle / Jurisdiction */}
                    <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                      {court.jurisdiction || court.description || `Exercising constitutional writ and appellate jurisdiction for ${stateName}.`}
                    </p>

                    {/* Official Quick Action Links */}
                    <div className="flex flex-wrap gap-2 mb-4 pt-3 border-t border-gray-100">
                      {court.officialWebsite && (
                        <a
                          href={court.officialWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 hover:bg-[#0d1b3e] text-gray-700 hover:text-white text-[11px] font-semibold rounded-lg transition-colors border border-gray-200"
                        >
                          <Globe size={11} className="text-[#c9a84c]" />
                          Official Portal
                          <ExternalLink size={10} />
                        </a>
                      )}
                      {court.caseStatusUrl && (
                        <a
                          href={court.caseStatusUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 hover:bg-[#0d1b3e] text-gray-700 hover:text-white text-[11px] font-semibold rounded-lg transition-colors border border-gray-200"
                        >
                          <FileText size={11} className="text-[#c9a84c]" />
                          Case Status
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <Link
                    href={detailUrl}
                    className="flex items-center justify-between text-xs font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors pt-3 border-t border-gray-100"
                  >
                    <span>View Court Profile & Cause List</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform text-[#c9a84c]" />
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-200">
            <Scale size={40} className="mx-auto text-gray-300 mb-2" />
            <p className="text-sm font-bold text-gray-700">No High Courts found in live database.</p>
          </div>
        )}

      </div>
    </section>
  );
}

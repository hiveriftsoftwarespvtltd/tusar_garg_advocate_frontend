import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExploreByCourt() {
  const courts = [
    {
      name: "Supreme Court of India",
      count: "28,745+",
      label: "Judgments",
      image: "/judgements/courts/supreme_court.jpg",
      href: "https://www.sci.gov.in/",
      isExternal: true,
    },
    {
      name: "High Courts",
      count: "1,24,890+",
      label: "Judgments",
      image: "/judgements/courts/high_court.jpg",
      href: "/high-courts",
      isExternal: false,
    },
    {
      name: "District Courts",
      count: "3,45,678+",
      label: "Judgments",
      image: "/judgements/courts/district_court.jpg",
      href: "/district-courts",
      isExternal: false,
    },
    {
      name: "Tribunals & Forums",
      count: "45,230+",
      label: "Judgments",
      image: "/judgements/courts/tribunals.jpg",
      href: "/tribunals",
      isExternal: false,
    },
    {
      name: "All Courts of India",
      count: "5,44,543+",
      label: "Judgments",
      image: "/judgements/courts/all_courts_india.jpg",
      href: "/all-courts",
      isExternal: false,
    },
  ];

  return (
    <section className="py-10 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Section Header: Left title with gold dash, Right View All Courts link */}
        <div className="flex items-center justify-between gap-4 mb-7">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-[2.5px] bg-[#c9a84c] rounded-full inline-block" />
            <h2 className="font-serif text-[15px] sm:text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.12em]">
              EXPLORE JUDGMENTS BY COURT
            </h2>
          </div>
          
          <Link
            href="/courts"
            className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-bold text-[#0d1b3e] hover:text-[#c9a84c] transition-colors group"
          >
            <span>View All Courts</span>
            <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform text-[#c9a84c]" />
          </Link>
        </div>

        {/* 5-Column Grid Matching Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4.5">
          {courts.map((court, idx) => {
            const cardInner = (
              <>
                {/* Top Miniature Image Preview Container: seamless without inner box */}
                <div className="relative w-full h-[140px] sm:h-[150px] overflow-hidden bg-gradient-to-b from-[#fbf9f4] via-[#faf8f3] to-white flex items-center justify-center">
                  <img
                    src={court.image}
                    alt={court.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                </div>

                {/* Card Body Details */}
                <div className="px-3 pb-4 pt-1 flex flex-col items-center text-center">
                  {/* Court Name */}
                  <h3 className="text-[13px] font-bold text-[#0d1b3e] mb-1.5 leading-snug min-h-[34px] flex items-center justify-center group-hover:text-[#c9a84c] transition-colors">
                    {court.name}
                  </h3>

                  {/* Stat Count */}
                  <p className="font-serif text-[20px] sm:text-[22px] font-extrabold text-[#0d1b3e] tracking-tight leading-none mb-0.5">
                    {court.count}
                  </p>

                  {/* Subtitle / Judgments Label */}
                  <p className="text-[11px] text-[#64748b] font-medium mb-3">
                    {court.label}
                  </p>

                  {/* Golden Circular Arrow Button */}
                  <div className="w-7 h-7 rounded-full border border-[#c9a84c] text-[#c9a84c] flex items-center justify-center group-hover:bg-[#c9a84c] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <ArrowRight size={13} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </>
            );

            const cardClass = "bg-white border border-[#eae5d9] rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-xl hover:border-[#c9a84c]/60 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer block";

            if (court.isExternal) {
              return (
                <a
                  key={idx}
                  href={court.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                  title={`Open official ${court.name} portal`}
                >
                  {cardInner}
                </a>
              );
            }

            return (
              <Link key={idx} href={court.href} className={cardClass}>
                {cardInner}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

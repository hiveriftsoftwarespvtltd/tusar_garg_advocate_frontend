import { FolderSearch, Gavel, FileText, CalendarDays, ExternalLink, BookOpen, Globe } from "lucide-react";

export default function CourtResources() {
  const resources = [
    {
      title: "e-Courts Case Status",
      subtitle: "National e-Courts Services",
      description: "Track status using CNR Number, Case Type, or Party Name.",
      icon: <FolderSearch size={28} className="text-[#c9a84c]" />,
      link: "https://services.ecourts.gov.in/ecourtindia_v6/"
    },
    {
      title: "Judgments & Orders",
      subtitle: "Certified Rulings Search",
      description: "Search Supreme Court and High Court landmark judgments.",
      icon: <Gavel size={28} className="text-[#c9a84c]" />,
      link: "/judgments"
    },
    {
      title: "Daily Cause Lists",
      subtitle: "High Court & District Lists",
      description: "Access today's daily hearing rosters and bench lists.",
      icon: <CalendarDays size={28} className="text-[#c9a84c]" />,
      link: "https://hcraj.nic.in/hcraj/causelist.php"
    },
    {
      title: "e-Filing Portal 3.0",
      subtitle: "Digital Court Filings",
      description: "File petitions, caveats, and legal applications online.",
      icon: <Globe size={28} className="text-[#c9a84c]" />,
      link: "https://efiling.ecourts.gov.in"
    },
    {
      title: "Certified Copy Application",
      subtitle: "Court Record Copies",
      description: "Apply for certified copies of court orders and decrees.",
      icon: <FileText size={28} className="text-[#c9a84c]" />,
      link: "/resources"
    },
    {
      title: "Court Rules & Manuals",
      subtitle: "High Court Rules",
      description: "Explore High Court Rules, Practice Directions, and Notifications.",
      icon: <BookOpen size={28} className="text-[#c9a84c]" />,
      link: "/laws"
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-[#f8f9fa] to-white border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[#c9a84c] text-[11px] font-extrabold tracking-widest uppercase bg-[#c9a84c]/10 px-3.5 py-1 rounded-full mb-2">
            OFFICIAL UTILITIES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e] uppercase tracking-wide">
            E-COURTS SERVICES & LEGAL UTILITIES
          </h2>
          <div className="w-16 h-[3px] bg-[#c9a84c] mt-2 rounded-full" />
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res, idx) => {
            const isExternal = res.link.startsWith("http");
            return (
              <a
                key={idx}
                href={res.link}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="bg-white border border-gray-200 hover:border-[#c9a84c] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="p-3.5 bg-[#0d1b3e] rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                  {res.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-serif font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors truncate">
                      {res.title}
                    </h3>
                    {isExternal && <ExternalLink size={12} className="text-gray-400 flex-shrink-0" />}
                  </div>
                  <p className="text-[10px] font-bold text-[#c9a84c] uppercase tracking-wider mb-1">
                    {res.subtitle}
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {res.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

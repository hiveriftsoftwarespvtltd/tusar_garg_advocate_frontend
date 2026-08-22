import { Landmark, Link as LinkIcon, Scale, Briefcase, CircleDollarSign, Home, Users, HardHat, Handshake, FileWarning, ShoppingCart, Leaf, ArrowRight } from "lucide-react";

export default function LawsCategoryGrid() {
  const categories = [
    { name: "Constitutional Law", acts: "18 Acts", sections: "245 Sections", icon: <Landmark size={36} strokeWidth={1.2} /> },
    { name: "Criminal Law", acts: "35 Acts", sections: "1,248 Sections", icon: <LinkIcon size={36} strokeWidth={1.2} /> }, // Using Link as a fallback for handcuffs
    { name: "Civil Law", acts: "28 Acts", sections: "1,987 Sections", icon: <Scale size={36} strokeWidth={1.2} /> },
    { name: "Corporate Law", acts: "52 Acts", sections: "2,105 Sections", icon: <Briefcase size={36} strokeWidth={1.2} /> },
    { name: "Tax Law", acts: "25 Acts", sections: "1,056 Sections", icon: <CircleDollarSign size={36} strokeWidth={1.2} /> }, // INR substitute
    { name: "Property Law", acts: "22 Acts", sections: "845 Sections", icon: <Home size={36} strokeWidth={1.2} /> },
    { name: "Family Law", acts: "15 Acts", sections: "532 Sections", icon: <Users size={36} strokeWidth={1.2} /> },
    { name: "Labour Law", acts: "29 Acts", sections: "1,126 Sections", icon: <HardHat size={36} strokeWidth={1.2} /> },
    { name: "Arbitration Law", acts: "14 Acts", sections: "356 Sections", icon: <Handshake size={36} strokeWidth={1.2} /> },
    { name: "Insolvency & Bankruptcy", acts: "10 Acts", sections: "387 Sections", icon: <FileWarning size={36} strokeWidth={1.2} /> },
    { name: "Consumer Law", acts: "8 Acts", sections: "263 Sections", icon: <ShoppingCart size={36} strokeWidth={1.2} /> },
    { name: "Environment Law", acts: "12 Acts", sections: "421 Sections", icon: <Leaf size={36} strokeWidth={1.2} /> },
  ];

  return (
    <section className="py-12 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-[1px] bg-[#c9a84c]"></div>
          <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
          <h2 className="text-[16px] md:text-[18px] font-bold text-[#0d1b3e] uppercase tracking-[0.15em] text-center" style={{ fontFamily: "var(--font-merriweather), serif" }}>
            BROWSE LAWS BY CATEGORY
          </h2>
          <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
          <div className="w-12 h-[1px] bg-[#c9a84c]"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white border-2 border-[#c9a84c] rounded-xl py-8 px-4 min-h-[240px] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:bg-[#c9a84c]/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">

              <div className="text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>

              <h3 className="text-[13px] font-bold text-[#0d1b3e] mb-2 leading-tight group-hover:text-[#c9a84c] transition-colors h-[32px] flex items-center justify-center" style={{ fontFamily: "var(--font-merriweather), serif" }}>
                {cat.name}
              </h3>

              <p className="text-[11px] font-bold text-[#374151] mb-1">
                {cat.acts}
              </p>
              <p className="text-[11px] text-[#6b7280] mb-4">
                {cat.sections}
              </p>

              <div className="w-6 h-6 rounded-full border border-[#c9a84c] flex items-center justify-center text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-white transition-colors mt-auto">
                <ArrowRight size={12} strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-2 bg-[#0d1b3e] text-white px-8 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider hover:bg-[#1a2b5a] hover:shadow-lg transition-all">
            VIEW ALL CATEGORIES
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>

      </div>
    </section>
  );
}

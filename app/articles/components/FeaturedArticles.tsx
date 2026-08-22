import { Calendar, User, Clock } from "lucide-react";

export default function FeaturedArticles() {
  const smallArticles = [
    {
      category: "CASE NOTE",
      title: "Bail Jurisprudence in India: Balancing Liberty and Societal Interests",
      date: "18 May 2025",
      time: "6 min read",
      image: "/articel/case_note_feartured_articel.png"
    },
    {
      category: "PRACTICE GUIDE",
      title: "How to Draft an Effective Writ Petition: A Practical Guide for Advocates",
      date: "17 May 2025",
      time: "7 min read",
      image: "/articel/pratice_guide_feartured_articel.png"
    },
    {
      category: "LEGAL ANALYSIS",
      title: "Arbitration and Conciliation (Amendment) Act, 2021: Key Changes & Impact",
      date: "16 May 2025",
      time: "9 min read",
      image: "/articel/legal_analysis_feartured_articel.png"
    },
    {
      category: "EXPLAINER",
      title: "Understanding Section 319 CrPC: Power to Proceed Against Other Persons",
      date: "15 May 2025",
      time: "5 min read",
      image: "/articel/explainer_feartured_articel.png"
    }
  ];

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-5 border-b border-[#e8ebf2] pb-3">
        <h2 className="text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
          FEATURED ARTICLES
        </h2>
        <button className="text-[12px] font-bold text-[#6b7280] hover:text-[#c9a84c] transition-colors">
          View All Featured
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Large Main Article */}
        <div className="lg:w-3/5 rounded-xl overflow-hidden relative group cursor-pointer shadow-sm h-[450px]">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/articel/featured_articles_section.png')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] via-[#0d1b3e]/80 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="inline-block bg-[#c9a84c] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-4">
              LEGAL ANALYSIS
            </span>
            <h3 
              className="text-[24px] md:text-[28px] font-bold text-white leading-tight mb-3 group-hover:text-[#c9a84c] transition-colors"
              style={{ fontFamily: "var(--font-merriweather), serif" }}
            >
              The Evolving Scope of Judicial Review in India: Recent Trends and Implications
            </h3>
            <p className="text-white/80 text-[14px] leading-relaxed mb-6 max-w-2xl line-clamp-2">
              An analysis of landmark judgments and the expanding contours of judicial review by the Supreme Court of India.
            </p>
            
            <div className="flex items-center gap-6 text-white/70 text-[12px] font-medium">
              <div className="flex items-center gap-2">
                <Calendar size={14} /> 19 May 2025
              </div>
              <div className="flex items-center gap-2">
                <User size={14} /> Tushar Garg
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} /> 8 min read
              </div>
            </div>
          </div>
        </div>

        {/* Small Articles Column */}
        <div className="lg:w-2/5 flex flex-col gap-6">
          {smallArticles.map((article, idx) => (
            <div key={idx} className="flex gap-4 group cursor-pointer h-[98px]">
              <div className="w-[140px] h-full rounded-lg overflow-hidden flex-shrink-0 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${article.image}')` }}
                ></div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[#c9a84c] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  {article.category}
                </span>
                <h4 
                  className="text-[14px] font-bold text-[#0d1b3e] leading-snug mb-2 group-hover:text-[#c9a84c] transition-colors line-clamp-2"
                  style={{ fontFamily: "var(--font-merriweather), serif" }}
                >
                  {article.title}
                </h4>
                <div className="flex items-center gap-4 text-[#6b7280] text-[11px] font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} /> {article.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} /> {article.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

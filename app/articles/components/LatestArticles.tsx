import { Calendar, Clock } from "lucide-react";

export default function LatestArticles() {
  const articles = [
    {
      category: "LEGAL ANALYSIS",
      title: "Right to Privacy and Data Protection in the Digital Age",
      desc: "A detailed look at how Indian courts are shaping the contours of data privacy.",
      date: "18 May 2025",
      time: "7 min read",
      image: "/articel/legal_analysis_feartured_articel.png"
    },
    {
      category: "CASE NOTE",
      title: "Supreme Court on Delay and Laches in Writ Petitions",
      desc: "An important judgment on delay in filing writ petitions and the doctrine of laches.",
      date: "17 May 2025",
      time: "6 min read",
      image: "/articel/case_note_feartured_articel.png"
    },
    {
      category: "PRACTICE GUIDE",
      title: "Checklist for First Hearing in Civil Matters",
      desc: "Essential checklist and preparation tips for advocates appearing in civil matters.",
      date: "16 May 2025",
      time: "5 min read",
      image: "/articel/pratice_guide_feartured_articel.png"
    },
    {
      category: "EXPLAINER",
      title: "Judicial Independence: Myth, Reality and Reform",
      desc: "Exploring the challenges to judicial independence and the way forward.",
      date: "15 May 2025",
      time: "6 min read",
      image: "/articel/explainer_feartured_articel.png"
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6 border-b border-[#e8ebf2] pb-3">
        <h2 className="text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
          LATEST ARTICLES
        </h2>
        <button className="text-[12px] font-bold text-[#6b7280] hover:text-[#c9a84c] transition-colors">
          View All Articles
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {articles.map((article, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="w-full h-[180px] rounded-lg overflow-hidden relative mb-4">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${article.image}')` }}
              ></div>
              <div className="absolute bottom-3 left-3">
                <span className="bg-[#c9a84c] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-sm">
                  {article.category}
                </span>
              </div>
            </div>
            
            <h3 
              className="text-[15px] font-bold text-[#0d1b3e] leading-snug mb-2 group-hover:text-[#c9a84c] transition-colors line-clamp-2"
              style={{ fontFamily: "var(--font-merriweather), serif" }}
            >
              {article.title}
            </h3>
            <p className="text-[12.5px] text-[#6b7280] leading-relaxed mb-4 line-clamp-2">
              {article.desc}
            </p>
            
            <div className="flex items-center gap-4 text-[#6b7280] text-[11px] font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar size={12} /> {article.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} /> {article.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

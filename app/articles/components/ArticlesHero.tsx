import Link from "next/link";

export default function ArticlesHero() {
  return (
    <section className="relative bg-[#0d1b3e] pt-16 pb-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/articles/article_banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/80 via-[#0d1b3e]/30 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-[#e5e9f0] font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Legal Articles</span>
          </div>

          <h1 
            className="text-white text-[32px] md:text-[44px] font-black uppercase tracking-wider mb-4 leading-tight"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            ARTICLES
          </h1>
          
          <p className="text-[#c9a84c] text-[15px] md:text-[18px] font-medium leading-relaxed mb-8 max-w-xl">
            In-depth legal analysis, insights, case notes, practice guides and explainers on important legal developments from India&apos;s courts, tribunals and the legal profession.
          </p>
          
          <div className="flex flex-wrap gap-3 text-white/90 text-[13px] font-normal tracking-wide">
            <span>Legal Analysis</span>
            <span>•</span>
            <span>Case Notes</span>
            <span>•</span>
            <span>Practice Guides</span>
            <span>•</span>
            <span>Legal Education</span>
            
            <div className="w-full h-0"></div> {/* Line break equivalent */}
            
            <span>Constitutional Law</span>
            <span>•</span>
            <span>Corporate Law</span>
            <span>•</span>
            <span>Criminal Law</span>
            <span>•</span>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ArticlesHero() {
  return (
    <section className="relative bg-[#0d1b3e] pt-16 pb-32 overflow-hidden">
      {/* Background visual elements to replace the exact image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e] via-[#0d1b3e] to-transparent z-10 w-2/3"></div>
      <div className="absolute top-0 right-0 bottom-0 w-1/2 opacity-30 mix-blend-luminosity">
        {/* Placeholder for the Supreme Court/Books image */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 
            className="text-[48px] md:text-[56px] lg:text-[72px] font-bold text-white leading-none mb-6 tracking-wide drop-shadow-md uppercase"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            ARTICLES
          </h1>
          
          <p className="text-[15px] md:text-[17px] text-white/90 leading-relaxed mb-8 max-w-xl font-medium">
            In-depth legal analysis, insights, case notes, practice guides and explainers on important legal developments from India&apos;s courts, tribunals and the legal profession.
          </p>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-[13px] font-bold text-[#c9a84c]">
            <span className="hover:text-white transition-colors cursor-pointer">Legal Analysis</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span>
            <span className="hover:text-white transition-colors cursor-pointer">Case Notes</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span>
            <span className="hover:text-white transition-colors cursor-pointer">Practice Guides</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span>
            <span className="hover:text-white transition-colors cursor-pointer">Legal Education</span>
            
            <div className="w-full h-0"></div> {/* Line break equivalent */}
            
            <span className="hover:text-white transition-colors cursor-pointer">Constitutional Law</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span>
            <span className="hover:text-white transition-colors cursor-pointer">Corporate Law</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span>
            <span className="hover:text-white transition-colors cursor-pointer">Criminal Law</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span>
            <span className="hover:text-white transition-colors cursor-pointer">More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ResourcesHero() {
  return (
    <section className="relative bg-[#0d1b3e] pt-16 pb-32 overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e] via-[#0d1b3e] to-transparent z-10 w-2/3"></div>
      <div className="absolute top-0 right-0 bottom-0 w-1/2 opacity-30 mix-blend-luminosity">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 
            className="text-[48px] md:text-[56px] lg:text-[72px] font-bold text-white leading-none mb-6 tracking-wide drop-shadow-md uppercase"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            RESOURCES
          </h1>
          
          <p className="text-[15px] md:text-[17px] text-white/90 leading-relaxed mb-8 max-w-xl font-medium">
            Access essential legal resources including legal glossary, legal maxims, court procedures and research guides to strengthen your legal knowledge and research.
          </p>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-[13px] font-bold text-[#c9a84c]">
            <span className="hover:text-white transition-colors cursor-pointer">Legal Glossary</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span>
            <span className="hover:text-white transition-colors cursor-pointer">Legal Maxims</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span>
            <span className="hover:text-white transition-colors cursor-pointer">Court Procedures</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span>
            <span className="hover:text-white transition-colors cursor-pointer">Research Guides</span>
          </div>
        </div>
      </div>
    </section>
  );
}

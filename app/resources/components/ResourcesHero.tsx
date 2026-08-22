import Link from "next/link";

export default function ResourcesHero() {
  return (
    <section className="relative bg-[#0d1b3e] pt-16 pb-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/resource/resource_page_banner.png')",
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
            <span className="text-white">Legal Resources</span>
          </div>

          <h1 
            className="text-white text-[32px] md:text-[44px] font-black uppercase tracking-wider mb-4 leading-tight"
            style={{ fontFamily: "var(--font-roboto), sans-serif" }}
          >
            RESOURCES
          </h1>
          
          <p className="text-[#c9a84c] text-[15px] md:text-[18px] font-medium leading-relaxed mb-8 max-w-xl">
            Access essential legal resources including legal glossary, legal maxims, court procedures and research guides to strengthen your legal knowledge and research.
          </p>
          
          <div className="flex flex-wrap gap-3 text-white/90 text-[13px] font-normal tracking-wide">
            <span>Legal Glossary</span>
            <span>•</span>
            <span>Legal Maxims</span>
            <span>•</span>
            <span>Court Procedures</span>
            <span>•</span>
            <span>Research Guides</span>
          </div>
        </div>
      </div>
    </section>
  );
}

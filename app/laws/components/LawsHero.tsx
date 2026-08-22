import Link from "next/link";

export default function LawsHero() {
  return (
    <section className="relative w-full bg-[#0d1b3e] text-white overflow-hidden pb-16 pt-16">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/law/law_banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/80 via-[#0d1b3e]/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[60%] lg:w-[50%]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-[#e5e9f0] font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Indian Laws</span>
          </div>

          <h1 
            className="text-white text-[32px] md:text-[44px] font-black uppercase tracking-wider mb-4 leading-tight"
            style={{ fontFamily: "var(--font-roboto), sans-serif" }}
          >
            Indian Laws
          </h1>
          <div className="w-16 h-[3px] bg-[#c9a84c] mb-6"></div>
          <p className="text-[#c9a84c] text-[15px] md:text-[18px] font-medium leading-relaxed mb-8 max-w-lg">
            Your comprehensive gateway to Acts, Rules, Regulations, Notifications and related legal materials across all branches of law in India.
          </p>
        </div>
      </div>
    </section>
  );
}

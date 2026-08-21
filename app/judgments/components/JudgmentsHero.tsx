import Link from "next/link";

export default function JudgmentsHero() {
  return (
    <section className="relative w-full bg-[#0d1b3e] text-white overflow-hidden pb-20 pt-16">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('/supreme-court.png')", // Fallback image for now
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e] via-[#0d1b3e]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e] via-transparent to-[#0d1b3e]"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[60%] lg:w-[50%]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-[#e5e9f0] font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Judgments</span>
          </div>

          <h1 
            className="text-[44px] md:text-[52px] lg:text-[56px] font-bold leading-tight mb-6 tracking-wide drop-shadow-md"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            Judgments
          </h1>
          <p className="text-[15px] md:text-[17px] text-white/90 leading-relaxed font-medium mb-8 max-w-lg">
            Search, explore and access judgments, orders and case laws from the Supreme Court of India, High Courts, District Courts and Tribunals across India.
          </p>
        </div>
      </div>
    </section>
  );
}

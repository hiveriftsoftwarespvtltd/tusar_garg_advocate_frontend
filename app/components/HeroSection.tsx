import Image from "next/image";
import { Scale, Gavel, Landmark, GraduationCap } from "lucide-react";

const ctaButtons = [
  { line1: "EXPLORE", line2: "JUDGMENTS", icon: <Scale size={24} strokeWidth={1.4} />, active: false, href: "/judgments" },
  { line1: "EXPLORE", line2: "INDIAN LAWS", icon: <Gavel size={24} strokeWidth={1.4} />, active: false, href: "/laws" },
  { line1: "COURTS", line2: "OF INDIA", icon: <Landmark size={24} strokeWidth={1.4} />, active: false, href: "/courts" },
  { line1: "JUDICIARY", line2: "RESOURCES", icon: <GraduationCap size={24} strokeWidth={1.4} />, active: true, href: "/judiciary" },
];

const tags = ["Legal Practice", "Indian Judiciary", "Legal Research", "Judgments", "Legal Knowledge"];

export default function HeroSection() {
  return (
    <section className="relative min-h-[400px] flex items-stretch overflow-hidden bg-[#0d1b3e]">
      {/* Full background: Supreme Court image */}
      <Image
        src="/home/home_page_banner.png"
        alt="Supreme Court of India"
        fill
        className="object-cover object-center opacity-90"
        priority
      />
      {/* Left-Side Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/80 via-[#0d1b3e]/30 to-transparent pointer-events-none" />
      {/* Content — left side only */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-12 w-full flex items-center">
        <div className="max-w-[560px]">
          {/* WELCOME TO with line */}
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#c9a84c]" />
            <p className="text-[#c9a84c] text-[11px] font-bold tracking-[0.25em] uppercase">
              WELCOME TO
            </p>
          </div>

          {/* Main heading */}
          <h1
            className="text-[52px] md:text-[64px] font-black text-white leading-[1.0] mb-3 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            TUSHAR GARG
          </h1>

          {/* Gold subtitle */}
          <p className="text-[#c9a84c] text-[16px] font-semibold mb-4 tracking-wide">
            Advocate-on-Record, Supreme Court of India
          </p>

          {/* Tags — two rows, dot separators */}
          <div className="text-white/80 text-[13px] mb-7 leading-relaxed">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {tags.slice(0, 3).map((tag, i) => (
                <span key={tag} className="flex items-center gap-2">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-white/50 inline-block" />}
                  <span>{tag}</span>
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
              {tags.slice(3).map((tag, i) => (
                <span key={tag} className="flex items-center gap-2">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-white/50 inline-block" />}
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons — 4 equal-width columns, icon top + 2-line text */}
          <div className="grid grid-cols-4 gap-2 w-full max-w-[520px]">
            {ctaButtons.map((btn) => (
              <a
                key={btn.line2}
                href={btn.href}
                className={`flex flex-col items-center justify-center gap-1.5 px-4 py-2 border rounded-md transition-all duration-300 text-center hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] ${btn.active
                  ? "bg-[#c9a84c] border-[#c9a84c] text-[#0d1b3e] shadow-md hover:bg-[#d4a93a] hover:shadow-[#c9a84c]/40"
                  : "border-white/40 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] hover:bg-white/5"
                  }`}
              >
                <span>{btn.icon}</span>
                <span className="text-[9.5px] font-bold tracking-wider leading-snug">
                  {btn.line1}<br />{btn.line2}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

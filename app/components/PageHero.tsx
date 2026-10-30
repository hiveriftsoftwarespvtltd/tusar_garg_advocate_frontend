import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: ReactNode;
  backgroundImage: string;
  buttons?: ReactNode;
  align?: "left" | "center";
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  buttons,
  align = "left",
}: PageHeroProps) {
  return (
    <section className="relative w-full h-100 overflow-hidden">
      {/* Background Image - Enhanced color saturation, crisp contrast and full opacity */}
      <Image
        src={backgroundImage}
        alt={`${title} background`}
        fill
        sizes="100vw"
        className="object-cover object-center contrast-[1.12] saturate-[1.35] brightness-[1.02]"
        priority
      />

      {/* Left-Side Gradient Overlay (kept focused on text area so the image remains vivid and clear) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/90 via-[#0d1b3e]/40 via-40% to-transparent pointer-events-none" />
      {/* Content */}
      <div className="relative max-w-[1280px] mx-auto px-4 h-full flex flex-col justify-center">
        <div className={`max-w-[800px] ${align === "center" ? "mx-auto text-center" : ""}`}>
          
          {/* Breadcrumb */}
          <div className={`flex items-center gap-2 text-[11px] text-[#e5e9f0] font-medium tracking-wide mb-6 ${align === "center" ? "justify-center" : ""}`}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">{title}</span>
          </div>

          <h1 className="font-serif text-white text-[32px] md:text-[44px] uppercase tracking-wider mb-4 leading-tight"
           
          >
            {title}
          </h1>

          {subtitle && (
            <div className={`text-white text-[15px] md:text-[17px] font-normal leading-relaxed mb-8 ${align === "center" ? "mx-auto" : ""}`}>
              {subtitle}
            </div>
          )}

          {buttons && (
            <div className={`flex flex-wrap gap-4 ${align === "center" ? "justify-center" : ""}`}>
              {buttons}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

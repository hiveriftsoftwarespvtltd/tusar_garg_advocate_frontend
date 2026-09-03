"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, Gavel, Landmark, GraduationCap, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { getHeroData, HeroData } from "../../lib/api/hero";

const iconMap: Record<string, any> = {
  Scale: Scale,
  Gavel: Gavel,
  Landmark: Landmark,
  GraduationCap: GraduationCap,
};

const defaultHeroData: HeroData = {
  badgeText: "ADVOCATE-ON-RECORD • SUPREME COURT OF INDIA",
  titleFirst: "TUSHAR",
  titleSecond: "GARG",
  subTitle: "Legal Practice, Supreme Court & High Courts of India",
  description: "Dedicated to constitutional law, appellate litigation, civil disputes, criminal defense, and legal research across all judicial forums in India.",
  expertiseBadges: ["Supreme Court SLPs", "Constitutional Matters", "Civil & Criminal Litigation", "Arbitration & Corporate"],
  ctaButtons: [
    { line1: "EXPLORE", line2: "JUDGMENTS", icon: "Scale", href: "/judgments" },
    { line1: "INDIAN", line2: "LAWS & ACTS", icon: "Gavel", href: "/laws" },
    { line1: "COURTS", line2: "DIRECTORY", icon: "Landmark", href: "/courts" },
    { line1: "JUDICIARY", line2: "RESOURCES", icon: "GraduationCap", href: "/judiciary" },
  ],
  bgImage: "/home/hero_banner_image.png",
  bgOverlayOpacity: 50,
  advocateName: "Adv. Tushar Garg",
  advocateTitle: "Supreme Court of India",
  advocatePhoto: "/home/tusar_garg_photo.jpeg",
  stats: [
    { label: "Years Practice", value: "10+" },
    { label: "Cases Handled", value: "5000+" },
    { label: "States Covered", value: "28+" },
  ],
  consultationLink: "/contact",
  consultationText: "Book Legal Consultation",
};

export default function HeroSection() {
  const [data, setData] = useState<HeroData>(defaultHeroData);

  useEffect(() => {
    async function loadData() {
      const res = await getHeroData();
      if (res) {
        setData({
          ...defaultHeroData,
          ...res,
          expertiseBadges: res.expertiseBadges?.length ? res.expertiseBadges : defaultHeroData.expertiseBadges,
          ctaButtons: res.ctaButtons?.length ? res.ctaButtons : defaultHeroData.ctaButtons,
          stats: res.stats?.length ? res.stats : defaultHeroData.stats,
        });
      }
    }
    loadData();
  }, []);

  const opacityValue = data.bgOverlayOpacity ? data.bgOverlayOpacity / 100 : 0.5;

  return (
    <section className="relative flex items-center overflow-hidden bg-[#071126] py-6 sm:py-8 lg:py-10">
      {/* Background Supreme Court Image */}
      <Image
        src={data.bgImage || "/home/hero_banner_image.png"}
        alt="Supreme Court of India"
        fill
        style={{ opacity: opacityValue }}
        className="object-cover object-center scale-100 transition-transform duration-1000"
        priority
      />

      {/* Balanced Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071126]/95 via-[#071126]/85 to-[#071126]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c9a84c]/15 via-transparent to-transparent pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Main Copy & Action Hub */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            
            {/* Top Authority Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#c9a84c]/40 px-3 py-1 rounded-full w-fit mb-3 shadow-inner">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a84c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#c9a84c]"></span>
              </span>
              <span className="text-[#c9a84c] text-[9.5px] sm:text-[11px] font-bold tracking-widest uppercase">
                {data.badgeText}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[28px] sm:text-[44px] lg:text-[54px] text-white leading-[1.1] tracking-tight uppercase mb-2">
              {data.titleFirst} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f7e6a6] to-[#c9a84c]">{data.titleSecond}</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-[#c9a84c] text-[12.5px] sm:text-[15px] font-semibold tracking-wide mb-3">
              {data.subTitle}
            </p>

            {/* Short Paragraph Description */}
            <p className="hidden sm:block text-white/80 text-[13px] sm:text-[14px] leading-relaxed max-w-[600px] mb-4">
              {data.description}
            </p>

            {/* Expertise Pills */}
            <div className="hidden sm:flex flex-wrap gap-1.5 mb-5 justify-center lg:justify-start">
              {data.expertiseBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-white/90 bg-white/5 border border-white/15 px-2.5 py-1 rounded-md">
                  <CheckCircle2 size={11} className="text-[#c9a84c]" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-[560px] mb-6 lg:mb-0">
              {data.ctaButtons.map((btn, idx) => {
                const IconComponent = iconMap[btn.icon] || Scale;
                return (
                  <Link
                    key={idx}
                    href={btn.href}
                    className="group flex flex-col items-center sm:items-start justify-between p-2.5 bg-white/5 hover:bg-[#c9a84c] border border-white/15 hover:border-[#c9a84c] rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="p-1 bg-white/10 rounded-md group-hover:bg-[#071126] transition-colors">
                        <IconComponent size={18} className="text-[#c9a84c] group-hover:text-[#c9a84c] transition-colors" />
                      </span>
                      <ArrowRight size={12} className="text-white/40 group-hover:text-[#071126] transition-transform group-hover:translate-x-0.5 hidden sm:block" />
                    </div>
                    <span className="block text-[9.5px] sm:text-[10px] font-bold tracking-wider text-white group-hover:text-[#071126] uppercase leading-tight text-center sm:text-left mt-1">
                      {btn.line1}<br />{btn.line2}
                    </span>
                  </Link>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN: Advocate Profile Showcase & Live Quick Stats */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            
            <div className="relative w-full max-w-[320px] sm:max-w-[350px] bg-gradient-to-b from-white/15 via-white/5 to-transparent backdrop-blur-xl border border-white/20 p-3.5 sm:p-4 rounded-xl shadow-2xl">
              
              {/* Profile Photo Frame */}
              <div className="relative w-full aspect-[4/3.2] sm:aspect-[4/3.6] rounded-lg overflow-hidden mb-2.5 border border-[#c9a84c]/40 shadow-md">
                <Image
                  src={data.advocatePhoto || "/home/tusar_garg_photo.jpeg"}
                  alt={data.advocateName}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071126] via-transparent to-transparent opacity-80" />
                
                {/* Floating Badge on Photo */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1.5 rounded-md">
                  <div>
                    <p className="text-white font-bold text-[11.5px]">{data.advocateName}</p>
                    <p className="text-[#c9a84c] text-[9px]">{data.advocateTitle}</p>
                  </div>
                  <Award size={15} className="text-[#c9a84c]" />
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-1 text-center pt-1 border-t border-white/10">
                {data.stats.map((st, i) => (
                  <div key={i} className="bg-white/5 p-1.5 rounded-md border border-white/10">
                    <p className="text-[#c9a84c] font-bold text-[13px] leading-tight">{st.value}</p>
                    <p className="text-white/70 text-[8.5px] uppercase font-medium">{st.label}</p>
                  </div>
                ))}
              </div>

              {/* Consultation Button */}
              <Link
                href={data.consultationLink || "/contact"}
                className="mt-2.5 w-full flex items-center justify-center gap-1.5 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#071126] font-bold text-[10.5px] uppercase tracking-wider py-2 px-3 rounded-lg transition-all shadow-md"
              >
                <span>{data.consultationText}</span>
                <ArrowRight size={12} />
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

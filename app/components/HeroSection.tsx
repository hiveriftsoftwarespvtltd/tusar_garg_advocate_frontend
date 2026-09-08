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
    { label: "Handled by Tushar Team", value: "5000+" },
    { label: "States Covered", value: "28+" },
  ],
  consultationLink: "/contact",
  consultationText: "Legal Helpline",
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

              {/* Mobile Only: Social Media Connect Card */}
              <div className="sm:hidden mt-2.5 w-full bg-white/10 backdrop-blur-md border border-white/15 rounded-lg p-2.5 flex items-center justify-between shadow-sm">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Social Handles</span>
                  <span className="text-[8.5px] text-[#c9a84c] font-medium">Follow & Connect</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-7 h-7 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-xs active:scale-95 transition-transform"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-7 h-7 rounded-md bg-[#1877F2] flex items-center justify-center text-white shadow-xs active:scale-95 transition-transform"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/tushar-garg-advocate"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-7 h-7 rounded-md bg-[#0A66C2] flex items-center justify-center text-white shadow-xs active:scale-95 transition-transform"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.99 0-1.8-.81-1.8-1.8s.81-1.8 1.8-1.8 1.8.81 1.8 1.8-.81 1.8-1.8 1.8m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-7 h-7 rounded-md bg-[#FF0000] flex items-center justify-center text-white shadow-xs active:scale-95 transition-transform"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Landmark, 
  Compass, 
  ArrowRight,
  Info
} from "lucide-react";

export default function HomeResourcesServicesJobs() {
  const careerSections = [
    {
      title: "Law Internships",
      subtitle: "Academic Clerkships & Chambers Exposure",
      desc: "Educational guidance on court proceedings, legal research methodologies, appellate petition drafting, and practical registry workflows for law students.",
      icon: GraduationCap,
      href: "/jobs?type=internship",
      details: "Guidelines for bona-fide LL.B candidates",
    },
    {
      title: "Associate Opportunities",
      subtitle: "Appellate & Trial Litigation Practice",
      desc: "Information regarding professional associate practice, briefing structures, matter follow-ups, and chamber management across Delhi judicial forums.",
      icon: Briefcase,
      href: "/jobs?type=associate",
      details: "Bar enrollment & litigation exposure",
    },
    {
      title: "Legal Research Opportunities",
      subtitle: "Precedent Analysis & Statutory Tracking",
      desc: "Academic and jurisprudential research avenues concerning Supreme Court constitutional benches, statutory comparative analysis, and law commission reports.",
      icon: BookOpen,
      href: "/resources",
      details: "Scholarly case briefs & notes",
    },
    {
      title: "Judicial Examination Information",
      subtitle: "State Judicial Services (PCS-J) Overview",
      desc: "Structured syllabus repositories, past examination question patterns, preliminary syllabus tracking, and judicial service eligibility criteria across states.",
      icon: Landmark,
      href: "/judiciary",
      details: "Delhi, UP, Haryana & State Judiciary",
    },
    {
      title: "Legal Career Resources",
      subtitle: "Professional Development Guides",
      desc: "Curated reference guides on Advocate-on-Record (AOR) examination preparation under Supreme Court Rules, Bar Council registration, and court etiquette.",
      icon: Compass,
      href: "/resources",
      details: "Practice reference & study archives",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F8F7F3] border-b border-[#E7E4DC]">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#101D35]/5 border border-[#B69A63]/30 px-3.5 py-1 rounded-full mb-3">
            <GraduationCap size={13} className="text-[#B69A63]" />
            <span className="text-[#101D35] text-[11px] font-bold tracking-widest uppercase">
              ACADEMIC DEVELOPMENT & JUDICIAL EXAMINATIONS
            </span>
          </div>
          <h2 className="font-serif text-[28px] sm:text-[36px] font-bold text-[#101D35] uppercase tracking-tight">
            JUDICIARY, LEGAL EDUCATION & CAREERS
          </h2>
          <div className="w-14 h-0.5 bg-[#B69A63] mx-auto mt-3 mb-4" />
          <p className="text-[#4A5568] text-[14px] sm:text-[15.5px] leading-relaxed">
            Informational and educational guidance resources for law students, judicial aspirants, and early-career legal professionals navigating the Indian judicial system.
          </p>
        </div>

        {/* Informational Guidance Callout (Prompt requirement: not a recruitment advertisement) */}
        <div className="bg-white border border-[#E7E4DC] p-4 rounded-xl flex items-start gap-3 max-w-3xl mx-auto mb-10 shadow-sm">
          <Info size={17} className="text-[#B69A63] shrink-0 mt-0.5" />
          <p className="text-xs text-[#737B88] leading-relaxed">
            <strong className="text-[#101D35]">Educational Notice:</strong> This section is provided strictly as an academic orientation and public informational resource for the legal community. It does not constitute commercial recruitment advertisement or solicitation of employment.
          </p>
        </div>

        {/* 5 Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {careerSections.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 flex flex-col justify-between border border-[#E7E4DC] hover:border-[#B69A63] shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#F8F7F3] border border-[#E7E4DC] flex items-center justify-center mb-5 group-hover:bg-[#101D35] transition-colors duration-300">
                    <Icon size={20} className="text-[#101D35] group-hover:text-[#B69A63] transition-colors duration-300" />
                  </div>

                  <h3 className="font-serif text-[17px] font-bold text-[#101D35] mb-1 group-hover:text-[#B69A63] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-[11px] font-semibold text-[#B69A63] mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-[#4A5568] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E4DC] mt-auto">
                  <p className="text-[10px] text-[#737B88] mb-2 font-mono">
                    {item.details}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101D35] group-hover:text-[#B69A63] transition-colors"
                  >
                    <span>View Information</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

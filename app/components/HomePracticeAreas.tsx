"use client";

import Link from "next/link";
import { 
  Scale, 
  ShieldAlert, 
  ScrollText, 
  Building2, 
  Landmark, 
  Home, 
  Users, 
  Briefcase, 
  Gavel, 
  TrendingDown, 
  FileCheck, 
  Trees,
  ArrowRight
} from "lucide-react";

interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  icon: any;
  description: string;
}

const practiceAreasList: PracticeArea[] = [
  {
    id: "1",
    title: "Constitutional Law",
    slug: "constitutional-law",
    icon: Scale,
    description: "Constitutional remedies, writ proceedings, fundamental rights and appellate constitutional matters.",
  },
  {
    id: "2",
    title: "Criminal Law",
    slug: "criminal-law",
    icon: ShieldAlert,
    description: "Criminal appeals, bail proceedings, criminal revisions and related litigation.",
  },
  {
    id: "3",
    title: "Civil Litigation",
    slug: "civil-law",
    icon: ScrollText,
    description: "Civil suits, injunctions, civil appeals, procedural matters and Special Leave Petitions.",
  },
  {
    id: "4",
    title: "Corporate Law",
    slug: "corporate-law",
    icon: Building2,
    description: "Corporate disputes, company law matters, NCLT proceedings and restructuring.",
  },
  {
    id: "5",
    title: "Tax Law",
    slug: "taxation-law",
    icon: Landmark,
    description: "Direct and indirect taxation, GST, customs and related appellate proceedings.",
  },
  {
    id: "6",
    title: "Property Law",
    slug: "property-law",
    icon: Home,
    description: "Property disputes, title matters, possession, partition and related civil proceedings.",
  },
  {
    id: "7",
    title: "Family Law",
    slug: "family-law",
    icon: Users,
    description: "Matrimonial disputes, custody, maintenance and related proceedings.",
  },
  {
    id: "8",
    title: "Labour and Service Law",
    slug: "labour-law",
    icon: Briefcase,
    description: "Employment disputes, service matters and Central Administrative Tribunal proceedings.",
  },
  {
    id: "9",
    title: "Arbitration Law",
    slug: "arbitration-law",
    icon: Gavel,
    description: "Domestic and international arbitration, commercial disputes and related proceedings.",
  },
  {
    id: "10",
    title: "Insolvency & Bankruptcy",
    slug: "insolvency-and-bankruptcy",
    icon: TrendingDown,
    description: "IBC proceedings, insolvency disputes, NCLT and NCLAT matters.",
  },
  {
    id: "11",
    title: "Consumer Law",
    slug: "consumer-law",
    icon: FileCheck,
    description: "Consumer disputes, service-related claims, RERA and consumer commission proceedings.",
  },
  {
    id: "12",
    title: "Environmental Law",
    slug: "environmental-law",
    icon: Trees,
    description: "Environmental disputes, NGT proceedings and related statutory matters.",
  },
];

export default function HomePracticeAreas() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E7E4DC]">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#101D35]/5 border border-[#B69A63]/30 px-3.5 py-1 rounded-full mb-3">
            <Scale size={13} className="text-[#B69A63]" />
            <span className="text-[#101D35] text-[11px] font-bold tracking-widest uppercase">
              LEGAL PRACTICE ACROSS JUDICIAL AND STATUTORY FORUMS
            </span>
          </div>
          <h2 className="font-serif text-[28px] sm:text-[36px] font-bold text-[#101D35] uppercase tracking-tight">
            AREAS OF LEGAL PRACTICE
          </h2>
          <div className="w-14 h-0.5 bg-[#B69A63] mx-auto mt-3 mb-4" />
          <p className="text-[#4A5568] text-[14px] sm:text-[15px] leading-relaxed">
            The practice encompasses legal representation, statutory interpretation, drafting and advisory services across primary fields of Indian jurisprudence.
          </p>
        </div>

        {/* Elegant 3-Column Grid for 12 Practice Areas (Prompt Section 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreasList.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                className="group bg-[#F8F7F3] border border-[#E7E4DC] hover:border-[#B69A63] p-7 rounded-2xl transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Line Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E7E4DC] group-hover:border-[#B69A63] group-hover:bg-[#101D35] flex items-center justify-center transition-colors duration-300 mb-5">
                    <Icon size={22} className="text-[#101D35] group-hover:text-[#B69A63] transition-colors duration-300" strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#101D35] mb-2.5 group-hover:text-[#B69A63] transition-colors">
                    {area.title}
                  </h3>

                  {/* Factual Description */}
                  <p className="text-[13px] text-[#4A5568] leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                {/* Explore Details Link */}
                <Link
                  href={`/laws/${area.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#101D35] group-hover:text-[#B69A63] transition-colors border-t border-[#E7E4DC] pt-4 mt-auto"
                >
                  <span>Explore Practice Details</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

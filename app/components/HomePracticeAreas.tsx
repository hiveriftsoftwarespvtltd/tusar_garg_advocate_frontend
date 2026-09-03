"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  Gavel, 
  Building, 
  Users, 
  Home, 
  Briefcase, 
  FileText, 
  Landmark, 
  Handshake, 
  FileCheck, 
  ShoppingBag, 
  Leaf,
  ChevronLeft, 
  ChevronRight,
  RefreshCw
} from "lucide-react";
import { fetchApi } from "../../lib/api/client";

const defaultPractices = [
  { 
    name: "Constitutional Law", 
    desc: "Writ Petitions, Fundamental Rights & Supreme Court Litigation",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    icon: Scale,
    tag: "High Court & SC"
  },
  { 
    name: "Criminal Law", 
    desc: "Bail, Trial Defense, FIR Quashing & Criminal Appeals",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=800&q=80",
    icon: Gavel,
    tag: "Bail & Trial"
  },
  { 
    name: "Civil Law", 
    desc: "Injunctions, Money Suits, Civil Appeals & Special Leave Petitions",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    icon: FileText,
    tag: "Civil & Writs"
  },
  { 
    name: "Corporate Law", 
    desc: "NCLT Disputes, Mergers & Corporate Restructuring",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    icon: Building,
    tag: "NCLT & Corporate"
  },
  { 
    name: "Tax Law", 
    desc: "Direct & Indirect Tax Appeals, GST & Customs Disputes",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    icon: Landmark,
    tag: "GST & Income Tax"
  },
  { 
    name: "Property Law", 
    desc: "Land Disputes, Title Verification, Possession & Partition Suits",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    icon: Home,
    tag: "Land & Property"
  },
  { 
    name: "Family Law", 
    desc: "Divorce Proceedings, Child Custody, Maintenance & Alimony",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    icon: Users,
    tag: "Matrimonial & Custody"
  },
  { 
    name: "Labour Law", 
    desc: "Central Administrative Tribunal (CAT) & Employment Matters",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    icon: Briefcase,
    tag: "Service & CAT"
  },
  { 
    name: "Arbitration Law", 
    desc: "Commercial Arbitration, Domestic & International ADR",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    icon: Handshake,
    tag: "Arbitration & ADR"
  },
  { 
    name: "Insolvency & Bankruptcy", 
    desc: "NCLAT Proceedings, IBC Resolutions & Debt Recovery",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    icon: FileCheck,
    tag: "IBC 2016"
  },
  { 
    name: "Consumer Law", 
    desc: "Consumer Commission Suits, RERA & Service Defect Claims",
    image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=800&q=80",
    icon: ShoppingBag,
    tag: "Consumer Protection"
  },
  { 
    name: "Environment Law", 
    desc: "National Green Tribunal (NGT) Writs & Clearances",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    icon: Leaf,
    tag: "NGT & Ecology"
  }
];

export default function HomePracticeAreas() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [practices, setPractices] = useState<any[]>(defaultPractices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchApi('/laws-categories');
        if (data && Array.isArray(data) && data.length > 0) {
          const featuredOnly = data.filter(c => c.isFeatured !== false);
          setPractices(featuredOnly.length > 0 ? featuredOnly : data);
        }
      } catch (err) {
        console.error("Failed to load dynamic practice areas", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-gray-100 relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header with Carousel Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0d1b3e]/5 border border-[#c9a84c]/30 px-3.5 py-1 rounded-full mb-3 shadow-inner">
              <Scale size={13} className="text-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10.5px] sm:text-[11px] font-bold tracking-widest uppercase">
                LEGAL SPECIALIZATIONS ({practices.length} PRACTICE AREAS)
              </span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-bold text-[#0d1b3e] uppercase tracking-tight">
              EXPERT PRACTICE AREAS
            </h2>
            <div className="w-14 h-1 bg-[#c9a84c] mt-2 rounded-full" />
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous practice areas"
              className="w-11 h-11 rounded-full bg-[#0d1b3e] text-white hover:bg-[#c9a84c] hover:text-[#0d1b3e] border border-[#c9a84c]/40 flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Next practice areas"
              className="w-11 h-11 rounded-full bg-[#0d1b3e] text-white hover:bg-[#c9a84c] hover:text-[#0d1b3e] border border-[#c9a84c]/40 flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        {loading ? (
          <div className="flex items-center justify-center min-h-[300px] text-gray-500 font-medium gap-2">
            <RefreshCw className="animate-spin" size={20} /> Loading practice areas...
          </div>
        ) : (
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {practices.map((practice, idx) => (
              <Link
                key={practice._id || idx}
                href="/laws"
                className="snap-start flex-shrink-0 w-[85%] sm:w-[46%] md:w-[31%] lg:w-[23.5%] group relative h-[310px] sm:h-[330px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-[#c9a84c] transition-all duration-500 flex flex-col justify-between p-6 cursor-pointer"
              >
                {/* High Resolution Background Image */}
                <Image
                  src={practice.image || "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"}
                  alt={practice.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Contrast Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071126] via-[#071126]/75 to-black/40" />

                {/* Top Badge Tag */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="bg-[#0d1b3e] text-[#c9a84c] border border-[#c9a84c]/50 font-bold text-[11px] uppercase tracking-widest px-3 py-1 rounded-lg shadow-md">
                    {practice.tag || "Legal Area"}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#c9a84c] transition-colors duration-300">
                    <Scale size={18} className="text-[#c9a84c] group-hover:text-[#071126] transition-colors duration-300" />
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="relative z-10 w-full mt-auto">
                  <h3 className="text-white font-serif font-bold text-[17px] sm:text-[18px] leading-snug uppercase tracking-wide mb-1 group-hover:text-[#c9a84c] transition-colors drop-shadow-md">
                    {practice.name}
                  </h3>
                  <p className="text-gray-300 text-[12px] leading-snug line-clamp-2 font-medium">
                    {practice.desc || practice.acts || "Specialized Legal Advocacy"}
                  </p>
                  <div className="w-8 h-[2.5px] bg-[#c9a84c] mt-3 rounded-full group-hover:w-16 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link 
            href="/laws" 
            className="inline-flex items-center justify-center gap-2.5 bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-8 py-3.5 text-[12px] font-bold tracking-widest uppercase rounded-xl transition-all duration-300 border border-[#c9a84c]/40 shadow-xl hover:shadow-[#0d1b3e]/30 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <ShieldCheck size={16} className="text-[#c9a84c]" />
            <span>EXPLORE ALL PRACTICE AREAS & LAWS</span>
            <ArrowRight size={14} className="text-[#c9a84c]" />
          </Link>
        </div>

      </div>
    </section>
  );
}

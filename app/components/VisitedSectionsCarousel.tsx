"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  Landmark, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Scale, 
  Pause, 
  Play 
} from "lucide-react";
import { fetchApi } from "../../lib/api/client";

interface VisitedForum {
  _id?: string;
  id?: string;
  name: string;
  category: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
  order?: number;
  isActive?: boolean;
}

const DEFAULT_VISITED_FORUMS: VisitedForum[] = [
  {
    id: "supreme-court",
    name: "Supreme Court of India",
    category: "APEX COURT • ADVOCATE-ON-RECORD",
    location: "Tilak Marg, New Delhi",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    description: "Appellate advocacy representing litigants in Special Leave Petitions (SLPs under Art. 136), original Writ Petitions (Art. 32), Transfer Petitions, and Constitutional Bench matters.",
    highlights: ["Article 136 SLPs", "Article 32 Writs", "Stay Applications"],
  },
  {
    id: "delhi-high-court",
    name: "Delhi High Court",
    category: "PRINCIPAL HIGH COURT • ARTICLE 226",
    location: "Sher Shah Road, New Delhi",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=800&q=80",
    description: "Frequent appearances before Single Judge & Division Benches in commercial civil suits, Section 34/37 arbitration appeals, FIR quashing, and Article 226 writ petitions.",
    highlights: ["Commercial Division", "Article 226 Writs", "Arbitration Appeals"],
  },
  {
    id: "nclat-nclt",
    name: "NCLAT & NCLT (Principal Bench)",
    category: "APPELLATE TRIBUNAL • CORPORATE & IBC",
    location: "CGO Complex & MTNL Bhawan, New Delhi",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    description: "Representing financial and operational creditors, resolution applicants, and corporate debtors in high-stakes insolvency proceedings under the IBC 2016.",
    highlights: ["CIRP Proceedings", "Section 61 Appeals", "Mergers & Oppression"],
  },
  {
    id: "ngt",
    name: "National Green Tribunal (NGT)",
    category: "SPECIALIZED TRIBUNAL • ENVIRONMENTAL",
    location: "Faridkot House, Copernicus Marg, New Delhi",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    description: "Adjudicating environmental clearances (EC), coastal zone regulations, pollution control mandates, forest land compliance, and environmental policy matters.",
    highlights: ["Environmental Compliance", "EC Challenges", "Pollution Norms"],
  },
  {
    id: "bombay-high-court",
    name: "Bombay High Court",
    category: "HIGH COURT • COMMERCIAL DIVISION",
    location: "Fort, Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Handling multi-jurisdictional corporate litigation, commercial appeals, contractual disputes, intellectual property enforcement, and company applications.",
    highlights: ["Commercial Suits", "Arbitration Enforcement", "Writ Jurisdiction"],
  },
  {
    id: "diac-arbitration",
    name: "Delhi Int'l Arbitration Centre (DIAC)",
    category: "ARBITRATION FORUM • ADR",
    location: "High Court of Delhi Campus, New Delhi",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    description: "Counsel in institutional and ad-hoc arbitrations involving large-scale infrastructure agreements, joint ventures, EPC contracts, and domestic award enforcement.",
    highlights: ["Institutional Arbitration", "Arbitral Tribunals", "Award Enforcement"],
  },
  {
    id: "ncdrc-consumer",
    name: "NCDRC (Apex Consumer Commission)",
    category: "APEX CONSUMER COURT",
    location: "Upbhokta Nyay Bhawan, New Delhi",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    description: "Representing buyers and enterprises in major consumer claims, builder-buyer delays, insurance repudiation appeals, and original class action complaints.",
    highlights: ["Builder Disputes", "Insurance Claims", "Original Complaints"],
  }
];

export default function VisitedSectionsCarousel() {
  const [forums, setForums] = useState<VisitedForum[]>(DEFAULT_VISITED_FORUMS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Fetch dynamic forums from backend
  useEffect(() => {
    let isMounted = true;
    async function loadForums() {
      try {
        const data = await fetchApi('/visited-courts');
        if (isMounted && Array.isArray(data) && data.length > 0) {
          const activeForums = data.filter((item: VisitedForum) => item.isActive !== false);
          if (activeForums.length > 0) {
            setForums(activeForums);
          }
        }
      } catch (err) {
        // Fallback to DEFAULT_VISITED_FORUMS on any network or server error
        console.warn("Using default visited forums fallback:", err);
      }
    }
    loadForums();
    return () => {
      isMounted = false;
    };
  }, []);

  // Responsive items count calculation
  useEffect(() => {
    function updateVisibleCount() {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setVisibleCount(1);
        } else if (window.innerWidth < 1024) {
          setVisibleCount(2);
        } else {
          setVisibleCount(3);
        }
      }
    }
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, forums.length - visibleCount);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying || maxIndex === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-b from-[#fafafa] via-white to-[#f5f7fb] border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0d1b3e]/5 border border-[#c9a84c]/30 px-3.5 py-1 rounded-full mb-3 shadow-inner">
              <Landmark size={13} className="text-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10.5px] font-bold tracking-widest uppercase">
                JUDICIAL JURISDICTIONS & FORUMS
              </span>
            </div>
            <h2 className="font-serif text-[#0d1b3e] text-[24px] sm:text-[32px] font-bold uppercase tracking-tight">
              VISITED COURTS & JUDICIAL FORUMS
            </h2>
            <div className="w-14 h-1 bg-[#c9a84c] mt-2 rounded-full" />
            <p className="text-gray-600 text-[13px] sm:text-[14px] mt-2.5 max-w-[680px]">
              Key constitutional courts, appellate benches, specialized statutory tribunals, and commercial forums represented across India by Advocate Tushar Garg.
            </p>
          </div>

          {/* Controls: Prev / Next / Auto-play */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            {/* Play/Pause button */}
            <button
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-[#c9a84c] bg-white text-[#0d1b3e] flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer"
              title={isAutoPlaying ? "Pause Auto-scroll" : "Resume Auto-scroll"}
            >
              {isAutoPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5 text-[#c9a84c]" />}
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous forum"
              className="w-10 h-10 rounded-full bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next forum"
              className="w-10 h-10 rounded-full bg-[#c9a84c] hover:bg-[#d4a93a] text-[#071126] flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div 
          ref={carouselRef}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="relative overflow-hidden rounded-2xl"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {forums.map((forum, idx) => (
              <div
                key={forum._id || forum.id || idx}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="group h-full bg-white border border-gray-200 hover:border-[#c9a84c] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 select-none">
                  
                  {/* Card Header & Image */}
                  <div>
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                      <Image
                        src={forum.image}
                        alt={forum.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Top Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#0d1b3e]/90 text-[#c9a84c] border border-[#c9a84c]/40 font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md backdrop-blur-xs">
                          {forum.category}
                        </span>
                      </div>

                      {/* Bottom Location Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white/90 text-[11px] font-medium">
                        <MapPin size={13} className="text-[#c9a84c] flex-shrink-0" />
                        <span className="truncate">{forum.location}</span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5">
                      <h3 className="font-serif font-bold text-[#0d1b3e] text-[18px] leading-snug mb-2.5 group-hover:text-[#c9a84c] transition-colors line-clamp-1">
                        {forum.name}
                      </h3>
                      
                      <p className="text-gray-600 text-[12.5px] leading-relaxed line-clamp-3 mb-4 font-normal">
                        {forum.description}
                      </p>

                      {/* Highlights / Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {(forum.highlights || []).map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center text-[10px] font-medium text-[#0d1b3e] bg-[#0d1b3e]/5 border border-gray-200 px-2 py-0.5 rounded-md"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Info - Strictly NO redirect button */}
                  <div className="px-5 pb-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
                    <span className="text-gray-500 font-medium flex items-center gap-1.5">
                      <Scale size={13} className="text-[#c9a84c]" />
                      <span>Legal Representation</span>
                    </span>
                    <span className="text-[#0d1b3e] font-semibold bg-[#0d1b3e]/5 px-2.5 py-0.5 rounded-full text-[10px] border border-gray-200">
                      Judicial Forum
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-[#c9a84c]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

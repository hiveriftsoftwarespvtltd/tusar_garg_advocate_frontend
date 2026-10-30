"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareQuote, RefreshCw } from "lucide-react";
import { fetchApi } from "../../lib/api/client";

const defaultTestimonials = [
  {
    _id: "1",
    name: "Ravi Sharma",
    role: "Business Owner & Client",
    text: "Advocate Tushar Garg is an exceptional lawyer with deep legal knowledge and strong courtroom presence. His guidance and dedication made a complex Supreme Court matter much easier for us.",
    rating: 5
  },
  {
    _id: "2",
    name: "Neha Verma",
    role: "Entrepreneur & Corporate Counsel",
    text: "Highly professional, responsive, and result-oriented. He explains procedural details clearly and provides effective legal remedies. Truly a trusted Advocate-on-Record.",
    rating: 5
  },
  {
    _id: "3",
    name: "Arjun Mehta",
    role: "Private Client",
    text: "Outstanding legal support, research depth, and strategic advice. I highly recommend Tushar Garg for any complex constitutional, civil, or appellate litigation.",
    rating: 5
  },
  {
    _id: "4",
    name: "Sanjay Singhania",
    role: "Corporate Executive",
    text: "Prompt, thorough, and articulate. Advocate Tushar Garg handled our commercial arbitration with utmost diligence and secured a favorable result.",
    rating: 5
  },
  {
    _id: "5",
    name: "Pooja Malhotra",
    role: "Property Consultant",
    text: "Extremely knowledgeable in property and civil law matters. Clear communication throughout the case proceedings. Highly satisfied with the outcome.",
    rating: 5
  }
];

function Initials({ name }: { name: string }) {
  const parts = (name || "Client").trim().split(" ");
  const initials = parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0][0];
  return (
    <div className="w-9 h-9 rounded-full bg-[#0d1b3e] text-[#c9a84c] border border-[#c9a84c]/50 flex items-center justify-center flex-shrink-0 font-bold text-xs shadow-sm">
      {initials}
    </div>
  );
}

export default function HomeTestimonials() {
  const [testimonials, setTestimonials] = useState<any[]>(defaultTestimonials);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchApi('/testimonials');
        if (data && Array.isArray(data) && data.length > 0) {
          const approved = data.filter(t => t.isApproved !== false);
          setTestimonials(approved.length > 0 ? approved : data);
        }
      } catch (err) {
        console.error("Failed to load homepage testimonials", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Responsive items count calculation
  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setItemsPerView(1);
        } else if (window.innerWidth < 1024) {
          setItemsPerView(2);
        } else {
          setItemsPerView(3);
        }
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxPages = Math.ceil(testimonials.length / itemsPerView) || 1;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxPages - 1 : prev - 1));
  }, [maxPages]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxPages - 1 ? 0 : prev + 1));
  }, [maxPages]);

  // Auto-play interval every 6 seconds
  useEffect(() => {
    if (testimonials.length <= itemsPerView) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext, testimonials.length, itemsPerView]);

  // Touch Swipe for Mobile
  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section className="bg-[#fbf9f4] py-16 border-y border-[#c9a84c]/20 relative overflow-hidden">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Carousel Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0d1b3e]/5 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full mb-3 shadow-inner">
              <MessageSquareQuote size={13} className="text-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10.5px] font-bold tracking-widest uppercase">
                TESTIMONIALS & REVIEWS
              </span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] font-bold text-[#0d1b3e] uppercase tracking-tight">
              WHAT OUR CLIENTS SAY
            </h2>
            <div className="w-14 h-1 bg-[#c9a84c] mt-2 rounded-full" />
          </div>

          {/* Carousel Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full bg-[#0d1b3e] text-white hover:bg-[#c9a84c] hover:text-[#0d1b3e] border border-[#c9a84c]/40 flex items-center justify-center transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full bg-[#0d1b3e] text-white hover:bg-[#c9a84c] hover:text-[#0d1b3e] border border-[#c9a84c]/40 flex items-center justify-center transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Carousel Content Track */}
        {loading ? (
          <div className="flex items-center justify-center min-h-[200px] text-gray-500 font-medium gap-2">
            <RefreshCw className="animate-spin" size={20} /> Loading reviews...
          </div>
        ) : (
          <div 
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="relative overflow-hidden touch-pan-y"
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {Array.from({ length: maxPages }).map((_, pageIdx) => {
                const pageItems = testimonials.slice(
                  pageIdx * itemsPerView,
                  pageIdx * itemsPerView + itemsPerView
                );
                return (
                  <div 
                    key={pageIdx} 
                    className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-1"
                  >
                    {pageItems.map((test, idx) => (
                      <div
                        key={test._id || idx}
                        className="bg-white border border-gray-200 hover:border-[#c9a84c] rounded-2xl p-7 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative"
                      >
                        {/* Quote Mark & Star Rating */}
                        <div>
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-1">
                              {[...Array(test.rating || 5)].map((_, i) => (
                                <Star key={i} size={14} className="fill-[#c9a84c] text-[#c9a84c]" />
                              ))}
                            </div>
                            <Quote size={26} className="text-[#c9a84c]/40 group-hover:text-[#c9a84c] transition-colors" />
                          </div>

                          {/* Review Text */}
                          <p className="text-[#374151] text-[13px] leading-relaxed mb-6 font-medium italic">
                            &ldquo;{test.text}&rdquo;
                          </p>
                        </div>

                        {/* Client Identity */}
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                          <Initials name={test.name} />
                          <div>
                            <h4 className="text-[#0d1b3e] font-serif font-bold text-[14px]">
                              {test.name}
                            </h4>
                            <p className="text-gray-500 text-[11px] font-medium">
                              {test.role}
                            </p>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Pagination Dots */}
        {maxPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxPages }).map((_, idx) => (
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

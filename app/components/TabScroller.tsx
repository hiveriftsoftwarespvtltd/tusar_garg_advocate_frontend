"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TabScrollerProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  showScrollButtons?: boolean;
}

export default function TabScroller({
  children,
  className = "",
  containerClassName = "",
  showScrollButtons = true,
}: TabScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();

    const handleResize = () => checkScroll();
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => checkScroll());
    observer.observe(el);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [checkScroll, children]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = Math.max(el.clientWidth * 0.65, 200);
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Convert mouse wheel vertical scroll to horizontal scroll when hovering tab bar
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    if (e.deltaY !== 0 && el.scrollWidth > el.clientWidth) {
      el.scrollLeft += e.deltaY;
      checkScroll();
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsMouseDown(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeftState - walk;
    checkScroll();
  };

  return (
    <div className={`relative group/scroller flex items-center w-full min-w-0 ${containerClassName}`}>
      {/* Left Scroll Arrow */}
      {showScrollButtons && canScrollLeft && (
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
          className="absolute left-0 z-30 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0d1b3e] text-[#c9a84c] border border-[#c9a84c]/60 shadow-lg hover:bg-[#c9a84c] hover:text-[#0d1b3e] transition-all -translate-x-2 sm:-translate-x-3 shrink-0 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex items-center gap-2 overflow-x-auto w-full min-w-0 tab-custom-scroller pb-1.5 pt-0.5 ${
          isMouseDown ? "cursor-grabbing select-none" : "cursor-grab"
        } ${className}`}
      >
        {children}
      </div>

      {/* Right Scroll Arrow */}
      {showScrollButtons && canScrollRight && (
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
          className="absolute right-0 z-30 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0d1b3e] text-[#c9a84c] border border-[#c9a84c]/60 shadow-lg hover:bg-[#c9a84c] hover:text-[#0d1b3e] transition-all translate-x-2 sm:translate-x-3 shrink-0 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}

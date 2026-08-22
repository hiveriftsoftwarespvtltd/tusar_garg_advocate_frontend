"use client";

import { useState, useEffect } from "react";
import { Hammer, X } from "lucide-react";

export default function ProductionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen this popup in the current session
    const hasSeenPopup = sessionStorage.getItem("hasSeenProductionPopup");
    
    if (!hasSeenPopup) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenProductionPopup", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-8 text-center animate-in fade-in zoom-in duration-300 transform"
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="mx-auto w-16 h-16 bg-[#0d1b3e]/10 rounded-full flex items-center justify-center mb-6 border border-[#c9a84c]/30">
          <Hammer size={32} className="text-[#c9a84c]" />
        </div>
        
        <h2 
          className="text-[22px] font-bold text-[#0d1b3e] uppercase tracking-wide mb-3"
          style={{ fontFamily: "var(--font-roboto), sans-serif" }}
        >
          Website Under Production
        </h2>
        
        <div className="w-12 h-[3px] bg-[#c9a84c] mx-auto mb-5" />
        
        <p className="text-[#374151] text-[15px] leading-relaxed mb-8">
          Welcome! We are currently working hard to bring you a premium experience. Some features and content may still be under construction.
        </p>
        
        <button 
          onClick={handleClose}
          className="w-full bg-[#0d1b3e] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1a2b5a] transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider text-[14px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

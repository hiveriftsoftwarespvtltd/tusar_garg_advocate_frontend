"use client";

import { useState, useEffect } from "react";
import { Scale, X, Check } from "lucide-react";

export default function ProductionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the legal disclaimer
    if (typeof window !== "undefined") {
      const hasAccepted = localStorage.getItem("hasAcceptedLegalDisclaimer");
      if (!hasAccepted) {
        // Smooth entrance delay
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 700);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleAccept = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("hasAcceptedLegalDisclaimer", "true");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-8 text-center animate-in zoom-in-95 duration-300 transform overflow-hidden"
      >
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0d1b3e] via-[#c9a84c] to-[#0d1b3e]" />

        {/* Close button */}
        <button 
          onClick={handleAccept}
          aria-label="Close disclaimer"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <X size={20} />
        </button>
        
        {/* Icon Header */}
        <div className="mx-auto w-14 h-14 bg-[#0d1b3e]/5 rounded-full flex items-center justify-center mb-4 border border-[#c9a84c]/30 shadow-inner">
          <Scale size={28} className="text-[#c9a84c]" />
        </div>
        
        {/* Title */}
        <h2 className="font-serif text-[20px] sm:text-[22px] text-[#0d1b3e] font-bold uppercase tracking-wider mb-1">
          Disclaimer
        </h2>
        <p className="text-[11px] font-semibold text-[#c9a84c] uppercase tracking-widest mb-3">
          Bar Council of India Compliance
        </p>
        
        <div className="w-12 h-[2px] bg-[#c9a84c] mx-auto mb-4 rounded-full" />
        
        {/* Short Legal Disclaimer Body */}
        <div className="text-gray-600 text-[13px] leading-relaxed mb-6 space-y-2.5 text-left bg-[#fafafa] p-4 rounded-xl border border-gray-100">
          <p>
            As per the rules of the <strong>Bar Council of India</strong>, advocates are not permitted to solicit work or advertise in any form.
          </p>
          <p>
            By clicking <strong>&quot;I Accept&quot;</strong>, you acknowledge that you are visiting this website voluntarily for informational purposes regarding <strong>Advocate Tushar Garg</strong> and there has been no solicitation, advertisement, or personal inducement. The content provided herein does not constitute legal advice or create a lawyer-client relationship.
          </p>
        </div>
        
        {/* Single Action Button */}
        <div>
          <button 
            onClick={handleAccept}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#071126] font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider text-[13.5px] cursor-pointer"
          >
            <Check size={18} strokeWidth={2.5} />
            <span>I Accept</span>
          </button>
        </div>
      </div>
    </div>
  );
}

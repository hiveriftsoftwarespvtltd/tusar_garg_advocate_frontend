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

  const handleDecline = () => {
    if (typeof window !== "undefined") {
      window.location.href = "https://www.google.com";
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-300"
    >
      <div 
        className="relative w-full max-w-lg bg-[#F8F7F3] rounded-2xl shadow-2xl border border-[#E7E4DC] p-6 sm:p-8 text-center animate-in zoom-in-95 duration-300 transform overflow-hidden"
      >
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#B69A63]" />

        {/* Close button */}
        <button 
          onClick={handleAccept}
          aria-label="Acknowledge and proceed"
          className="absolute top-4 right-4 text-[#737B88] hover:text-[#101D35] transition-colors p-1 rounded-full hover:bg-black/5 cursor-pointer"
        >
          <X size={20} />
        </button>
        
        {/* Icon Header */}
        <div className="mx-auto w-14 h-14 bg-[#101D35]/5 rounded-full flex items-center justify-center mb-4 border border-[#B69A63]/40 shadow-inner">
          <Scale size={26} className="text-[#B69A63]" />
        </div>
        
        {/* Title */}
        <h2 id="disclaimer-title" className="font-serif text-[20px] sm:text-[22px] text-[#101D35] font-bold uppercase tracking-wider mb-1">
          Bar Council of India Disclaimer
        </h2>
        <p className="text-[11px] font-bold text-[#B69A63] uppercase tracking-widest mb-3">
          Rule 36 Compliance Notice
        </p>
        
        <div className="w-12 h-[2px] bg-[#B69A63] mx-auto mb-4 rounded-full" />
        
        {/* Short Legal Disclaimer Body */}
        <div className="text-[#4A5568] text-[13px] leading-relaxed mb-6 space-y-2.5 text-left bg-white p-4 rounded-xl border border-[#E7E4DC]">
          <p>
            Under the rules of the <strong>Bar Council of India (Rule 36)</strong>, advocates are not permitted to solicit work or advertise in any form.
          </p>
          <p>
            By clicking <strong>&quot;I Accept & Proceed&quot;</strong>, the user acknowledges that they are accessing this website voluntarily for general informational and legal research purposes regarding <strong>Advocate Tushar Garg, Advocate-on-Record (AOR Reg. No. 4215), Supreme Court of India</strong>, and there has been no solicitation, advertisement, or inducement. Content on this website does not constitute legal advice or establish an advocate-client relationship.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button 
            onClick={handleDecline}
            className="w-full sm:w-1/3 py-3 px-4 rounded-xl border border-[#E7E4DC] text-[#737B88] hover:bg-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="w-full sm:w-2/3 inline-flex items-center justify-center gap-2 bg-[#B69A63] hover:bg-[#CBB484] text-[#101D35] font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-sm uppercase tracking-wider text-xs cursor-pointer"
          >
            <Check size={16} strokeWidth={2.5} />
            <span>I Accept & Proceed</span>
          </button>
        </div>
      </div>
    </div>
  );
}

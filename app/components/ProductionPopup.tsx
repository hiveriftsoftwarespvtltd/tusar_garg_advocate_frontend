"use client";

import { useState, useEffect } from "react";
import { Scale, Check } from "lucide-react";

export default function ProductionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the legal disclaimer
    if (typeof window !== "undefined") {
      const hasAccepted = localStorage.getItem("hasAcceptedLegalDisclaimer");
      if (!hasAccepted) {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

  const handleAccept = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("hasAcceptedLegalDisclaimer", "true");
      document.body.style.overflow = "";
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 select-none"
    >
      <div 
        className="relative w-full max-w-lg bg-[#F8F7F3] rounded-2xl shadow-2xl border border-[#E7E4DC] p-6 sm:p-8 text-center animate-in zoom-in-95 duration-200 transform overflow-hidden"
      >
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#B69A63]" />
        
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
        <div className="text-[#4A5568] text-[13px] leading-relaxed mb-6 space-y-2.5 text-left bg-white p-4 rounded-xl border border-[#E7E4DC] max-h-[48vh] overflow-y-auto">
          <p>
            Under the rules of the <strong>Bar Council of India (Rule 36)</strong>, advocates are not permitted to solicit work or advertise in any form.
          </p>
          <p>
            By clicking <strong>&quot;I Accept &amp; Proceed&quot;</strong>, the user acknowledges that they are accessing this website voluntarily for general informational and legal research purposes regarding <strong>Advocate Tushar Garg, Advocate-on-Record (AOR Reg. No. 4215), Supreme Court of India</strong>, and there has been no solicitation, advertisement, or inducement. Content on this website does not constitute legal advice or establish an advocate-client relationship.
          </p>
        </div>
        
        {/* Mandatory Action Button: Single Full-Width Accept Button */}
        <div>
          <button 
            onClick={handleAccept}
            className="w-full inline-flex items-center justify-center gap-2.5 bg-[#B69A63] hover:bg-[#CBB484] text-[#101D35] font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl uppercase tracking-wider text-xs sm:text-sm cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          >
            <Check size={18} strokeWidth={2.5} />
            <span>I Accept &amp; Proceed</span>
          </button>
        </div>
      </div>
    </div>
  );
}

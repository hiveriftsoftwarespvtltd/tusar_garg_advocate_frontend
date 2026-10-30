"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-3.5">
      {faqs.map((faq, idx) => {
        const isOpen = openFaq === idx;
        return (
          <div 
            key={idx} 
            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen 
                ? "border-[#c9a84c] shadow-md ring-1 ring-[#c9a84c]/20" 
                : "border-gray-200 hover:border-gray-300 shadow-2xs"
            }`}
          >
            <button 
              type="button"
              onClick={() => setOpenFaq(isOpen ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50/70 transition-colors gap-4"
            >
              <div className="flex items-center gap-3.5">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                  isOpen 
                    ? "bg-[#0d1b3e] text-[#c9a84c]" 
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className={`font-bold text-sm sm:text-[15px] leading-snug transition-colors ${
                  isOpen ? "text-[#0d1b3e]" : "text-gray-800"
                }`}>
                  {faq.question}
                </span>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                isOpen ? "bg-[#c9a84c]/15 text-[#9a7620] rotate-180" : "bg-gray-100 text-gray-400"
              }`}>
                <ChevronDown size={16} />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="p-5 pt-0 border-t border-gray-100 bg-[#fcfcfc]/60">
                <p className="text-[13.5px] text-gray-600 leading-relaxed pt-3.5 font-normal">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


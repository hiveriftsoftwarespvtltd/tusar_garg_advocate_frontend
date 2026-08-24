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
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-white border border-[#e5e7eb] rounded-lg overflow-hidden">
          <button 
            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#fcfcfc] transition-colors"
          >
            <span className="font-bold text-[#0d1b3e] pr-4">{faq.question}</span>
            <ChevronDown size={18} className={`text-[#6b7280] transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="p-5 pt-0 text-[14px] text-[#4b5563] leading-relaxed border-t border-[#f0f0f0]">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

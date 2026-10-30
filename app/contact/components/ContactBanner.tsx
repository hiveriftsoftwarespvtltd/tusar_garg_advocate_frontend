"use client";

import React from "react";
import { 
  ShieldCheck, 
  Lock, 
  Clock, 
  Scale, 
  Phone, 
  MessageCircle, 
  Landmark,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function ContactBanner() {
  const guarantees = [
    {
      icon: <Scale className="w-6 h-6 text-[#c9a84c]" />,
      title: "Supreme Court Representation",
      desc: "Direct filing & advocacy by Advocate-on-Record before the highest court.",
    },
    {
      icon: <Lock className="w-6 h-6 text-[#c9a84c]" />,
      title: "Absolute Confidentiality",
      desc: "Every inquiry & case document is held under strict professional privilege.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#c9a84c]" />,
      title: "Prompt Case Evaluation",
      desc: "Our registry aims to review and respond to genuine inquiries within 24–48 hours.",
    },
    {
      icon: <Landmark className="w-6 h-6 text-[#c9a84c]" />,
      title: "Pan-India Multi-Forum Reach",
      desc: "Comprehensive advocacy across Supreme Court, High Courts, NCLAT & DRT.",
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-gradient-to-r from-[#050c1b] via-[#071126] to-[#050c1b] rounded-2xl border border-[#c9a84c]/30 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10 relative">
        
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 border-b border-white/10 relative z-10">
          {guarantees.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c] group-hover:text-[#050c1b] group-hover:scale-105 transition-all shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white text-[14px] font-bold mb-1.5 tracking-wide group-hover:text-[#f1dc9b] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/65 text-[12px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Direct Hotline CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-7 relative z-10">
          <div className="text-center md:text-left">
            <h4 className="text-white text-[16px] sm:text-[18px] font-bold font-serif">
              Urgent Limitation Deadline or Stay Petition Needed?
            </h4>
            <p className="text-white/70 text-[12.5px] mt-0.5">
              Contact our New Delhi chambers directly for immediate priority triage.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+917206810681"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#c9a84c] to-[#b38f38] hover:from-[#dfbe65] hover:to-[#c9a84c] text-[#050c1b] font-bold text-[12px] tracking-wide shadow-lg shadow-[#c9a84c]/20 transition-all cursor-pointer"
            >
              <Phone size={14} />
              <span>Call +91-7206810681</span>
            </a>

            <a
              href="https://wa.me/917206810681?text=Hello%20Advocate%20Tushar%20Garg%2C%20I%20have%20an%20urgent%20legal%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[12px] tracking-wide shadow-md transition-all cursor-pointer"
            >
              <MessageCircle size={14} />
              <span>Urgent WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

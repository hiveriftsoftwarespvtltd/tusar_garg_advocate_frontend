"use client";

import React from "react";
import { 
  FileText, 
  ShieldCheck, 
  Scale, 
  Landmark, 
  ChevronRight,
  ArrowRight,
  Clock
} from "lucide-react";

export default function ConsultationProtocol() {
  const steps = [
    {
      step: "01",
      icon: <FileText className="w-5 h-5 text-[#c9a84c]" />,
      title: "Confidential Intake",
      desc: "Submit case facts, orders & documents via online form, official email or WhatsApp.",
      tag: "Step 1"
    },
    {
      step: "02",
      icon: <ShieldCheck className="w-5 h-5 text-[#c9a84c]" />,
      title: "Chambers Conflict Check",
      desc: "Ethics verification to ensure no opposing interest or conflict exists before engagement.",
      tag: "Step 2"
    },
    {
      step: "03",
      icon: <Scale className="w-5 h-5 text-[#c9a84c]" />,
      title: "Legal Strategy Conference",
      desc: "In-person consultation at New Delhi chambers or secure video conference briefing.",
      tag: "Step 3"
    },
    {
      step: "04",
      icon: <Landmark className="w-5 h-5 text-[#c9a84c]" />,
      title: "Registry Drafting & Filing",
      desc: "Precision appellate drafting and direct representation before Supreme Court & High Courts.",
      tag: "Step 4"
    }
  ];

  return (
    <section className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-7 border-b border-[#e2e8f0]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdfaf3] border border-[#c9a84c]/40 text-[#c9a84c] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Clock size={13} />
            <span>Consultation Protocol</span>
          </div>
          <h2 className="font-serif text-[20px] sm:text-[24px] text-[#071126] font-bold tracking-tight">
            How We Work — 4-Step Engagement Procedure
          </h2>
          <p className="text-[13px] text-[#64748b] mt-0.5">
            A transparent, professional procedure from preliminary case intake to registry filing
          </p>
        </div>

        <span className="self-start sm:self-auto text-[11px] font-bold uppercase tracking-wider text-[#c9a84c] bg-[#c9a84c]/10 border border-[#c9a84c]/20 px-3 py-1.5 rounded-lg">
          Standard Chamber Practice
        </span>
      </div>

      {/* 4 Steps Horizontal Flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((item, idx) => (
          <div key={idx} className="relative group">
            
            {/* Step Card */}
            <div className="h-full p-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#c9a84c]/50 transition-all duration-300 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#071126] flex items-center justify-center text-[#c9a84c] shadow-sm group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[12px] font-black text-[#c9a84c] font-mono tracking-wider">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-[14px] font-bold text-[#071126] mb-1.5 group-hover:text-[#b8933b] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-[12px] text-[#64748b] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-[#071126]/70">
                <span>{item.tag}</span>
                <ChevronRight size={13} className="text-[#c9a84c] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Desktop Connector Arrow between steps (not after the last step) */}
            {idx !== steps.length - 1 && (
              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-[#cbd5e1] items-center justify-center text-[#c9a84c] shadow-sm pointer-events-none">
                <ChevronRight size={13} />
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}

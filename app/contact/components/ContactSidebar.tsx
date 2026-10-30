"use client";

import React from "react";
import { 
  Scale, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2,
  Clock,
  ExternalLink,
  Award,
  Landmark
} from "lucide-react";

export default function ContactSidebar() {
  const practiceScopes = [
    "Special Leave Petitions (SLP) – Civil & Criminal",
    "Supreme Court Transfer & Review Petitions",
    "Writ Petitions before Delhi High Court & State HCs",
    "Corporate & Insolvency Appeals (NCLT / NCLAT)",
    "Debt Recovery & Securitisation (DRT / DRAT)",
    "Commercial Arbitration & Dispute Settlement"
  ];

  return (
    <aside className="w-full h-full flex flex-col justify-between gap-5">
      
      {/* Card 1: Urgent Case Triage on WhatsApp */}
      <div className="rounded-2xl p-6 bg-gradient-to-br from-[#071126] via-[#0d1b3e] to-[#071126] border border-[#c9a84c]/30 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute -right-12 -top-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-[#c9a84c]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-3 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Direct Registry Channel
          </span>
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md">
            <MessageCircle size={18} />
          </div>
        </div>

        <h3 className="font-serif text-[17px] font-bold text-white mb-1.5 leading-snug">
          Urgent Case Triage on WhatsApp
        </h3>
        <p className="text-white/75 text-[12px] leading-relaxed mb-4">
          For imminent court deadlines, limitation urgency, caveat filings, or quick scheduling directly with chambers.
        </p>

        <a
          href="https://wa.me/917206810681?text=Hello%20Advocate%20Tushar%20Garg%2C%20I%20would%20like%20to%20inquire%20about%20a%20legal%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[12.5px] tracking-wide shadow-lg shadow-emerald-900/40 hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <MessageCircle size={15} />
          <span>Chat on WhatsApp Directly</span>
        </a>
      </div>

      {/* Card 2: Supreme Court AOR Credential Badge */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-start gap-3.5 mb-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#fdfaf3] border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] flex-shrink-0 shadow-sm">
            <Scale size={20} />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#c9a84c] uppercase tracking-wider block">
              Professional Standing
            </span>
            <h3 className="font-serif text-[15px] font-bold text-[#071126] leading-tight mt-0.5">
              Advocate-on-Record (AOR)
            </h3>
            <p className="text-[11.5px] text-[#64748b] leading-tight mt-0.5">
              Supreme Court of India
            </p>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-slate-100 text-[11.5px] text-[#334155]">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-[#c9a84c] flex-shrink-0" />
            <span>Authorized to file & plead in Supreme Court</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-[#c9a84c] flex-shrink-0" />
            <span>Supreme Court Bar Association (SCBA) Member</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-[#c9a84c] flex-shrink-0" />
            <span>Delhi High Court Bar Association (DHCBA) Member</span>
          </div>
        </div>
      </div>

      {/* Card 3: Permitted Practice Forums */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 shadow-sm hover:shadow-md transition-all">
        <h3 className="font-serif text-[13.5px] font-bold text-[#071126] uppercase tracking-wider mb-3 pb-2 border-b border-slate-100">
          Permitted Practice Forums
        </h3>

        <ul className="space-y-2">
          {practiceScopes.map((scope, idx) => (
            <li key={idx} className="flex items-start gap-2 text-[11.5px] text-[#334155] leading-snug">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-1.5 flex-shrink-0" />
              <span>{scope}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card 4: Bar Council of India Regulatory Notice */}
      <div className="rounded-xl p-3.5 bg-[#f8fafc] border border-slate-200">
        <div className="flex items-center gap-1.5 mb-1.5 text-[#071126]">
          <ShieldCheck size={14} className="text-[#c9a84c]" />
          <span className="text-[10.5px] font-bold uppercase tracking-wider">
            Regulatory Notice (BCI Rules)
          </span>
        </div>
        <p className="text-[11px] text-[#64748b] leading-relaxed">
          This portal complies with the rules of the Bar Council of India. The information provided is intended for client communication, not solicitation.
        </p>
      </div>

    </aside>
  );
}

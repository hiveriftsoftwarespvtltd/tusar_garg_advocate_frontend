"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Clock, 
  Train, 
  Phone, 
  Mail, 
  Copy, 
  Check, 
  Navigation, 
  ExternalLink,
  Car,
  Landmark,
  ShieldCheck,
  Building2
} from "lucide-react";

export default function OfficeInfo() {
  const [copied, setCopied] = useState(false);

  const addressText = "Flat No. 7, Second Floor, D-1, Kalindi Colony, Near Sunrise Hospital, New Delhi-110065";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Flat+No.+7+Second+Floor+D-1+Kalindi+Colony+New+Delhi+110065";
  const mapEmbedUrl = "https://maps.google.com/maps?q=Kalindi+Colony+New+Delhi+110065&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const handleCopy = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="office-info" className="bg-white border border-[#e2e8f0] rounded-2xl p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-7 border-b border-[#e2e8f0]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdfaf3] border border-[#c9a84c]/40 text-[#c9a84c] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Building2 size={13} />
            <span>Chambers & Location</span>
          </div>
          <h2 className="font-serif text-[22px] sm:text-[26px] text-[#071126] font-bold tracking-tight">
            Our Chambers & Strategic Access
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#4b5563] mt-1">
            Conveniently situated in South Delhi with rapid transit to the Supreme Court of India & Delhi High Court
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#f8fafc] hover:bg-[#f1f5f9] border border-[#cbd5e1] text-[#071126] text-[12px] font-semibold transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-500" />
                <span className="text-emerald-600 font-bold">Address Copied</span>
              </>
            ) : (
              <>
                <Copy size={14} className="text-[#c9a84c]" />
                <span>Copy Full Address</span>
              </>
            )}
          </button>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#071126] hover:bg-[#0d1b3e] text-white text-[12px] font-semibold transition-all shadow-sm cursor-pointer"
          >
            <Navigation size={13} className="text-[#c9a84c]" />
            <span>Open in Maps</span>
            <ExternalLink size={12} className="text-white/60" />
          </a>
        </div>
      </div>

      {/* Main Grid: Details (Left 45%) & Map (Right 55%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Chamber Details & Logistics (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          
          {/* Card 1: Address */}
          <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#c9a84c]/50 transition-all group">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#071126] text-[#c9a84c] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                <MapPin size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#071126]">
                    Chamber Address
                  </h3>
                  <span className="text-[10px] font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded">
                    South Delhi
                  </span>
                </div>
                <p className="text-[13.5px] font-bold text-[#0f172a] mt-1 leading-snug">
                  Flat No. 7, Second Floor, D-1, Kalindi Colony
                </p>
                <p className="text-[12.5px] text-[#64748b] leading-relaxed mt-0.5">
                  Near Sunrise Hospital, New Delhi - 110065
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Consultation & Office Hours */}
          <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#c9a84c]/50 transition-all group">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#071126] text-[#c9a84c] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                <Clock size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#071126]">
                    Chamber Timings
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    Prior Appt. Mandatory
                  </span>
                </div>
                <p className="text-[13.5px] font-bold text-[#0f172a] mt-1 leading-snug">
                  Monday – Saturday | 10:00 AM – 6:00 PM (IST)
                </p>
                <p className="text-[12px] text-[#64748b] leading-relaxed mt-0.5">
                  In-person conferences and video briefings scheduled by registry.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Metro & Connectivity */}
          <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#c9a84c]/50 transition-all group">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#071126] text-[#c9a84c] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                <Train size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#071126]">
                    Metro & Rapid Transit
                  </h3>
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded">
                    Violet & Magenta Lines
                  </span>
                </div>
                <p className="text-[13px] font-bold text-[#0f172a] mt-1 leading-snug">
                  Supreme Court Metro Station (Violet Line) – Gate 1
                </p>
                <p className="text-[12px] text-[#64748b] leading-relaxed mt-0.5">
                  Direct corridor to Supreme Court, High Court & Nizamuddin Station.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Direct Chamber Desk Phone & Email (Split 2 sub-tiles) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="tel:+917206810681"
              className="p-3.5 rounded-xl bg-[#f8fafc] hover:bg-[#071126] border border-[#e2e8f0] hover:border-[#071126] transition-all group flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/10 group-hover:bg-[#c9a84c] text-[#c9a84c] group-hover:text-[#071126] flex items-center justify-center transition-colors">
                <Phone size={15} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748b] group-hover:text-white/70 transition-colors">
                  Direct Line
                </p>
                <p className="text-[12.5px] font-bold text-[#071126] group-hover:text-white transition-colors">
                  +91-7206810681
                </p>
              </div>
            </a>

            <a
              href="mailto:tushargarg0681@gmail.com"
              className="p-3.5 rounded-xl bg-[#f8fafc] hover:bg-[#071126] border border-[#e2e8f0] hover:border-[#071126] transition-all group flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/10 group-hover:bg-[#c9a84c] text-[#c9a84c] group-hover:text-[#071126] flex items-center justify-center transition-colors">
                <Mail size={15} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748b] group-hover:text-white/70 transition-colors">
                  Registry Email
                </p>
                <p className="text-[12px] font-bold text-[#071126] group-hover:text-white transition-colors truncate">
                  tushargarg0681...
                </p>
              </div>
            </a>
          </div>

        </div>

        {/* Right Column: Interactive Map & Strategic Corridor (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col h-full min-h-[380px] lg:min-h-[460px] relative rounded-xl overflow-hidden border border-[#cbd5e1] shadow-inner bg-slate-100">
          
          {/* Real Google Maps Interactive Embed */}
          <iframe
            title="Advocate Tushar Garg Chambers Location"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "360px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full flex-1"
          />

          {/* Floating Luxury Overlay Info Banner at Bottom */}
          <div className="p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-[#cbd5e1] flex flex-wrap items-center justify-between gap-3 z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#071126] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
                <MapPin size={15} />
              </div>
              <div>
                <p className="text-[12px] font-bold text-[#071126] leading-tight">
                  Chambers of Adv. Tushar Garg (AOR)
                </p>
                <p className="text-[11px] text-[#64748b] leading-tight">
                  Kalindi Colony, Near Sunrise Hospital, New Delhi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                <Landmark size={12} className="text-[#c9a84c]" />
                <span>15 mins to Supreme Court</span>
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#c9a84c] hover:bg-[#b8933b] text-[#050c1b] font-bold text-[11px] uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Navigate</span>
                <Navigation size={11} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

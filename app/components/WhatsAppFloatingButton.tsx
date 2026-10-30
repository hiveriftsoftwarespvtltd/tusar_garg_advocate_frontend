"use client";

import React, { useState } from "react";
import { X, MessageSquare } from "lucide-react";

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string;
  message?: string;
  accountName?: string;
}

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function WhatsAppFloatingButton({
  phoneNumber = "917206810681",
  message = "Hello Advocate Tushar Garg, I need legal consultation regarding an appellate matter.",
}: WhatsAppFloatingButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Sleek Tooltip Card (Only shown if toggled) */}
      {showTooltip && (
        <div
          onClick={() => {
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
          }}
          className="mb-3 bg-[#071126]/95 backdrop-blur-md text-white border border-[#25D366]/40 hover:border-[#25D366] rounded-2xl p-4 shadow-2xl min-w-[240px] max-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-200 relative cursor-pointer transition-all"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setShowTooltip(false);
            }}
            aria-label="Close notification"
            className="absolute top-2.5 right-2.5 text-white/50 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 z-10"
          >
            <X size={14} />
          </button>

          <div className="pr-6 mb-3">
            <h4 className="font-bold text-[13px] text-[#c9a84c] leading-snug">
              Chambers Helpline
            </h4>
            <p className="text-[11px] text-slate-300 mt-0.5">Direct Advocate-on-Record desk</p>
          </div>

          <div
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[12px] px-3.5 py-2 rounded-xl transition-all shadow-md w-full justify-center"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Connect on WhatsApp</span>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Advocate Tushar Garg on WhatsApp"
        className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] hover:bg-[#20ba5a] hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        {/* Subtle Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* Real Official WhatsApp SVG Icon */}
        <WhatsAppIcon className="w-7 h-7 fill-white relative z-10 drop-shadow-sm" />

        {/* Hover Pill Badge for Desktop */}
        <span className="absolute right-16 bg-[#071126] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-[#c9a84c]/30">
          WhatsApp Chambers Helpline
        </span>
      </a>
    </div>
  );
}

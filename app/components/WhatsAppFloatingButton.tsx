"use client";

import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string;
  message?: string;
  accountName?: string;
}

export default function WhatsAppFloatingButton({
  phoneNumber = "917206810681",
  message = "Hello Advocate Tushar Garg, I need legal consultation regarding a court matter.",
  accountName = "Advocate Tushar Garg (AOR)",
}: WhatsAppFloatingButtonProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-3 bg-white text-gray-900 border border-[#25D366]/40 rounded-2xl p-3.5 shadow-2xl max-w-[280px] animate-in fade-in slide-in-from-bottom-3 duration-300 relative group/tooltip">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close WhatsApp notification"
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors p-0.5 rounded-full hover:bg-gray-100"
          >
            <X size={14} />
          </button>

          <div className="flex items-center gap-2 mb-1.5 pr-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#25D366]">
              Online • Legal Chamber
            </span>
          </div>

          <h4 className="font-serif font-bold text-xs text-[#0d1b3e] mb-1">
            {accountName}
          </h4>

          <p className="text-[11.5px] text-gray-600 leading-snug mb-2.5">
            Need urgent legal advice or Supreme Court AOR assistance? Chat directly on WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[11.5px] px-3 py-1.5 rounded-xl transition-all shadow-md hover:shadow-lg w-full justify-center"
          >
            <MessageCircle size={14} />
            <span>Start WhatsApp Chat</span>
          </a>

          {/* Tooltip arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-[#25D366]/40 rotate-45" />
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Advocate Tushar Garg on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-8 h-8 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.109 4.045 4.252-1.116z" />
        </svg>

        {/* Hover Label for Desktop */}
        <span className="absolute right-16 bg-[#0d1b3e] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-[#c9a84c]/30">
          WhatsApp Chamber
        </span>
      </a>
    </div>
  );
}

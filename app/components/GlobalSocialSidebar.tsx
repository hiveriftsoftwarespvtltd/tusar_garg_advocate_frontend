"use client";

import { useState } from "react";
import { Phone, Mail, Share2, ChevronLeft, ChevronRight } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  bg: string;
  hoverBg: string;
  icon: React.ReactNode;
}

export default function GlobalSocialSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks: SocialLink[] = [
    {
      name: "WhatsApp Quick Connect",
      href: "https://wa.me/917206810681?text=Hello%20Advocate%20Tushar%20Garg,%20I%20need%20legal%20consultation",
      bg: "bg-[#25D366]",
      hoverBg: "hover:bg-[#20ba59]",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn Chambers",
      href: "https://www.linkedin.com/company/advocate-on-record-tushar-garg/about/?viewAsMember=true",
      bg: "bg-[#0A66C2]",
      hoverBg: "hover:bg-[#084e96]",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.99 0-1.8-.81-1.8-1.8s.81-1.8 1.8-1.8 1.8.81 1.8 1.8-.81 1.8-1.8 1.8m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
        </svg>
      ),
    },
    {
      name: "Call Chambers",
      href: "tel:+917206810681",
      bg: "bg-[#c9a84c]",
      hoverBg: "hover:bg-[#b3933b]",
      icon: <Phone className="w-4 h-4 text-[#071126]" strokeWidth={2.5} />,
    },
    {
      name: "Email Intake",
      href: "mailto:advocate.tushargarg@gmail.com",
      bg: "bg-[#071126]",
      hoverBg: "hover:bg-[#0d1b3e]",
      icon: <Mail className="w-4 h-4 text-[#c9a84c]" strokeWidth={2.5} />,
    },
  ];

  return (
    <aside
      aria-label="Chambers Quick Connect"
      className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 flex-col items-start"
    >
      {/* Sleek Toggle Tab */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "Collapse Contact Bar" : "Chambers Quick Connect"}
        className="flex items-center gap-1.5 px-2 py-2 bg-[#071126] text-[#c9a84c] border-r border-y border-[#c9a84c]/40 rounded-r-lg shadow-xl text-xs font-bold cursor-pointer hover:bg-[#0d1b3e] transition-all"
      >
        <Share2 size={13} className="text-[#c9a84c]" />
        {isOpen ? <ChevronLeft size={13} /> : <ChevronRight size={13} />}
      </button>

      {/* Social and Call Stack (Only shows when opened) */}
      {isOpen && (
        <div className="flex flex-col shadow-2xl rounded-r-xl overflow-hidden border-r border-y border-white/20 mt-1 animate-in slide-in-from-left duration-200">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.name}
              className={`relative group flex items-center justify-center w-10 h-10 ${social.bg} ${social.hoverBg} text-white transition-all cursor-pointer border-b border-white/10 last:border-b-0`}
            >
              <div className="transform group-hover:scale-110 transition-transform">
                {social.icon}
              </div>

              {/* Tooltip */}
              <div className="absolute left-full ml-2.5 px-2.5 py-1 bg-[#071126] text-white text-[11px] font-semibold rounded-md shadow-xl border border-[#c9a84c]/40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all whitespace-nowrap z-50">
                {social.name}
              </div>
            </a>
          ))}
        </div>
      )}
    </aside>
  );
}

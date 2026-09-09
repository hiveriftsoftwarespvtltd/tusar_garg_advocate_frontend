import { Phone, Mail } from "lucide-react";
import Link from "next/link";

function LinkedinSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="#0d1b3e" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
function FacebookSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramSVG() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "All Courts", href: "/all-courts" },
  { name: "High Courts", href: "/high-courts" },
  { name: "District Courts", href: "/district-courts" },
  { name: "Judgments", href: "/judgments" },
  { name: "Laws", href: "/laws" },
  { name: "Tribunals", href: "/tribunals" },
  { name: "Judiciary", href: "/judiciary" },
  { name: "Jobs", href: "/jobs" },
  { name: "Law Colleges", href: "/colleges" },
  { name: "Articles", href: "/articles" },
  { name: "Resources", href: "/resources" }
];
const importantLinks = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Disclaimer", href: "#" },
  { name: "Sitemap", href: "#" },
  { name: "Legal Awareness", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1530] border-t border-white/10">

      {/* Main content */}
      <div className="max-w-[1600px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 border-2 border-[#c9a84c] flex items-center justify-center flex-shrink-0">
                <span className="text-[#c9a84c] font-bold text-[12px]">TG</span>
              </div>
              <div>
                <p className="text-white font-serif font-bold text-[15px] tracking-widest uppercase leading-tight">
                  TUSHAR GARG
                </p>
                <p className="text-white/40 text-[9.5px] leading-tight">
                  Advocate-on-Record, Supreme Court of India
                </p>
              </div>
            </div>
            <p className="text-white/45 text-[12px] leading-relaxed mb-5">
              Indian Legal Knowledge & Judiciary Platform dedicated to legal research, knowledge sharing and strengthening the justice system.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {[
                { icon: <LinkedinSVG />, label: "LinkedIn", href: "https://www.linkedin.com/company/advocate-on-record-tushar-garg/about/?viewAsMember=true" },
                { icon: <InstagramSVG />, label: "Instagram", href: "https://www.instagram.com/advocateonrecordtushargarg" },
                { icon: <FacebookSVG />, label: "Facebook", href: "https://www.facebook.com/advocateonrecordtushargarg" },
                { icon: <YoutubeSVG />, label: "YouTube", href: "https://www.youtube.com/@tushargarg2467" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors rounded-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 pb-2 border-b border-white/10">
              QUICK LINKS
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 pb-2 border-b border-white/10">
              IMPORTANT LINKS
            </h3>
            <ul className="space-y-2.5">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 pb-2 border-b border-white/10">
              CONTACT
            </h3>
            <div className="space-y-3">
              <p className="text-white/50 text-[12px] leading-relaxed">
                Flat No. 7, Second Floor, D-1,<br />
                Kalindi Colony, Near Sunrise Hospital,<br />
                New Delhi-110065
              </p>
              <a href="tel:+917206810681" className="flex items-center gap-2.5 text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
                <Phone size={13} strokeWidth={1.5} className="text-[#c9a84c] flex-shrink-0" />
                +91 72068 10681
              </a>
              <a href="mailto:tushargarg0681@gmail.com" className="flex items-center gap-2.5 text-white/50 text-[12px] hover:text-[#c9a84c] transition-colors">
                <Mail size={13} strokeWidth={1.5} className="text-[#c9a84c] flex-shrink-0" />
                tushargarg0681@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/35 text-[11px]">
            © 2024 Tushar Garg. All Rights Reserved.
          </p>
          <p className="text-white/35 text-[11px]">
            Designed & Developed for Legal Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}

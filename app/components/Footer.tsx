"use client";

import Link from "next/link";
import { 
  Shield, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Scale, 
  ArrowRight, 
  Landmark, 
  BookOpen, 
  Building,
  FileCheck2
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#101D35] text-white border-t border-[#E7E4DC]/20">
      
      {/* ── Top Restrained Credential Strip ── */}
      <div className="border-b border-white/10 bg-[#0A1222]">
        <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            
            <div className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
              <Shield size={17} className="text-[#B69A63] shrink-0" />
              <div className="text-left">
                <p className="text-[12px] font-bold text-white leading-tight">Advocate-on-Record</p>
                <p className="text-[10.5px] text-[#F8F7F3]/60">Supreme Court of India</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
              <FileCheck2 size={17} className="text-[#B69A63] shrink-0" />
              <div className="text-left">
                <p className="text-[12px] font-bold text-white leading-tight">AOR Registration</p>
                <p className="text-[10.5px] text-[#B69A63] font-mono">Reg. No. 4215</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
              <Landmark size={17} className="text-[#B69A63] shrink-0" />
              <div className="text-left">
                <p className="text-[12px] font-bold text-white leading-tight">Judicial Forums</p>
                <p className="text-[10.5px] text-[#F8F7F3]/60">Supreme Court & High Courts</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
              <Building size={17} className="text-[#B69A63] shrink-0" />
              <div className="text-left">
                <p className="text-[12px] font-bold text-white leading-tight">Chambers Practice</p>
                <p className="text-[10.5px] text-[#F8F7F3]/60">Tilak Marg & Kalindi Colony</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Main Multi-Column Links Section (Prompt Section 14) ── */}
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Advocate Profile (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative h-11 w-auto flex-shrink-0 mb-3">
                <img
                  src="/TusharLogo.png"
                  alt="Advocate Tushar Garg - Supreme Court of India"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="font-serif text-sm font-semibold text-white">
              Advocate Tushar Garg
            </p>
            <p className="text-xs text-[#B69A63] font-medium">
              Advocate-on-Record, Supreme Court of India
            </p>
            <p className="text-xs text-[#F8F7F3]/70 leading-relaxed">
              Professional legal practice dedicated to appellate litigation, constitutional matters, commercial disputes, arbitration, and statutory legal research across Indian judicial forums.
            </p>
            <div className="pt-2 text-[11px] text-[#F8F7F3]/60 font-mono">
              AOR Registration No. 4215
            </div>
          </div>

          {/* Column 2: Practice Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B69A63]">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs text-[#F8F7F3]/75">
              <li><Link href="/laws/constitutional-law" className="hover:text-[#B69A63] transition-colors">Constitutional Law</Link></li>
              <li><Link href="/laws/criminal-law" className="hover:text-[#B69A63] transition-colors">Criminal Law</Link></li>
              <li><Link href="/laws/civil-law" className="hover:text-[#B69A63] transition-colors">Civil Litigation</Link></li>
              <li><Link href="/laws/corporate-law" className="hover:text-[#B69A63] transition-colors">Corporate Law</Link></li>
              <li><Link href="/laws/arbitration-law" className="hover:text-[#B69A63] transition-colors">Arbitration Law</Link></li>
              <li><Link href="/laws/insolvency-and-bankruptcy" className="hover:text-[#B69A63] transition-colors">Insolvency & Bankruptcy</Link></li>
              <li><Link href="/laws" className="hover:text-[#B69A63] transition-colors text-[#B69A63] font-semibold pt-1 inline-block">View All 12 Areas →</Link></li>
            </ul>
          </div>

          {/* Column 3: Judiciary Directory (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B69A63]">
              Judiciary
            </h4>
            <ul className="space-y-2 text-xs text-[#F8F7F3]/75">
              <li><Link href="/courts" className="hover:text-[#B69A63] transition-colors">Supreme Court of India</Link></li>
              <li><Link href="/high-courts" className="hover:text-[#B69A63] transition-colors">High Courts of India</Link></li>
              <li><Link href="/district-courts" className="hover:text-[#B69A63] transition-colors">District Courts</Link></li>
              <li><Link href="/tribunals" className="hover:text-[#B69A63] transition-colors">Tribunals & Fora</Link></li>
              <li><Link href="/all-courts" className="hover:text-[#B69A63] transition-colors text-[#B69A63] font-semibold pt-1 inline-block">All Courts Directory →</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B69A63]">
              Legal Resources
            </h4>
            <ul className="space-y-2 text-xs text-[#F8F7F3]/75">
              <li><Link href="/bare-acts" className="hover:text-[#B69A63] transition-colors">Bare Acts Database</Link></li>
              <li><Link href="/judgments" className="hover:text-[#B69A63] transition-colors">Court Judgments</Link></li>
              <li><Link href="/podcast" className="hover:text-[#B69A63] transition-colors flex items-center gap-1.5"><span>Legal Podcast</span><span className="text-[9px] bg-[#B69A63]/20 text-[#B69A63] px-1 rounded font-semibold uppercase">New</span></Link></li>
              <li><Link href="/articles" className="hover:text-[#B69A63] transition-colors">Legal Articles</Link></li>
              <li><Link href="/resources/legal-drafts" className="hover:text-[#B69A63] transition-colors">Legal Drafts & Formats</Link></li>
              <li><Link href="/faqs" className="hover:text-[#B69A63] transition-colors">Legal FAQs</Link></li>
              <li><Link href="/judiciary" className="hover:text-[#B69A63] transition-colors">Judicial Examination Guides</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B69A63]">
              Chambers Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#F8F7F3]/80">
              <p className="flex items-start gap-2">
                <Phone size={13} className="text-[#B69A63] shrink-0 mt-0.5" />
                <a href="tel:+917206810681" className="hover:text-[#B69A63] font-semibold transition-colors">+91 72068 10681</a>
              </p>
              
              <p className="flex items-start gap-2">
                <Mail size={13} className="text-[#B69A63] shrink-0 mt-0.5" />
                <a href="mailto:advocate.tushargarg@gmail.com" className="hover:text-[#B69A63] transition-colors">advocate.tushargarg@gmail.com</a>
              </p>

              <div className="flex items-start gap-2 pt-1">
                <MapPin size={13} className="text-[#B69A63] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Supreme Court Chambers:</p>
                  <p className="text-[11px] text-[#F8F7F3]/60">Tilak Marg, New Delhi</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Building size={13} className="text-[#B69A63] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Chambers Office:</p>
                  <p className="text-[11px] text-[#F8F7F3]/60">Flat No. 7, 2nd Floor, D-1, Kalindi Colony, New Delhi – 110065</p>
                </div>
              </div>

              <p className="flex items-start gap-2 pt-1 text-[11px] text-[#F8F7F3]/60">
                <Clock size={13} className="text-[#B69A63] shrink-0 mt-0.5" />
                <span>Mon – Sat: 10:00 AM – 7:30 PM</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Footer: Legal Disclaimer & BCI Rule 36 Compliance (Prompt Section 14) ── */}
      <div className="border-t border-white/10 bg-[#0A1222]">
        <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
          
          {/* Statutory Disclaimer Paragraph */}
          <div className="text-[11px] text-[#F8F7F3]/60 leading-relaxed border-b border-white/5 pb-4">
            <p>
              <strong className="text-[#B69A63]">Bar Council of India Rule 36 Disclaimer:</strong> The information provided on this official website is solely intended for general educational, informative, and legal research purposes. It does not constitute legal advice, solicitation, advertisement, or an invitation to enter into an advocate-client relationship. Accessing or using this website, its legal repository, judgment archives, or submitting communication via the website does not create an advocate-client relationship between the user and Advocate Tushar Garg. Users should seek independent legal counsel regarding their specific legal matters.
            </p>
          </div>

          {/* Copyright & Compliance Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F7F3]/70">
            <p>
              © 2026 Advocate Tushar Garg. All Rights Reserved. Supreme Court of India.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[11.5px]">
              <Link href="/about" className="hover:text-[#B69A63] transition-colors">About Chambers</Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:text-[#B69A63] transition-colors">Legal Disclaimer</Link>
              <span>•</span>
              <Link href="/privacy-policy" className="hover:text-[#B69A63] transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#B69A63] transition-colors">Terms of Use</Link>
              <span>•</span>
              <span className="text-[#B69A63] font-semibold">BCI Rule 36 Compliant</span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}

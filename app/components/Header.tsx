"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Landmark, 
  Scale, 
  FileText, 
  BookOpen, 
  GraduationCap, 
  Shield, 
  ArrowRight,
  Gavel,
  Briefcase,
  Layers,
  HelpCircle,
  Radio,
  MessageCircle
} from "lucide-react";

interface PracticeArea {
  title: string;
  slug: string;
  desc: string;
}

const defaultPracticeAreas: PracticeArea[] = [
  { title: "Constitutional Law", slug: "constitutional-law", desc: "Writ petitions, fundamental rights & appellate constitutional matters." },
  { title: "Criminal Law", slug: "criminal-law", desc: "Criminal appeals, bail proceedings & revision matters." },
  { title: "Civil Litigation", slug: "civil-law", desc: "Civil appeals, injunctions, suits & Special Leave Petitions." },
  { title: "Corporate Law", slug: "corporate-law", desc: "Company disputes, NCLT proceedings & corporate advisory." },
  { title: "Tax Law", slug: "taxation-law", desc: "Direct & indirect taxation, GST, customs & appellate proceedings." },
  { title: "Property Law", slug: "property-law", desc: "Title disputes, partition, possession & civil recovery." },
  { title: "Family Law", slug: "family-law", desc: "Matrimonial proceedings, custody & maintenance matters." },
  { title: "Labour & Service Law", slug: "labour-law", desc: "Service disputes, employment matters & CAT proceedings." },
  { title: "Arbitration Law", slug: "arbitration-law", desc: "Domestic & international commercial arbitration." },
  { title: "Insolvency & Bankruptcy", slug: "insolvency-and-bankruptcy", desc: "IBC matters, NCLT & NCLAT insolvency proceedings." },
  { title: "Consumer Law", slug: "consumer-law", desc: "Consumer dispute forums, NCDRC & RERA claims." },
  { title: "Environmental Law", slug: "environmental-law", desc: "National Green Tribunal (NGT) statutory proceedings." },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Keyboard shortcut (Cmd+K / Ctrl+K & Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
  }, [pathname]);

  const toggleAccordion = (name: string) => {
    setMobileAccordion((prev) => (prev === name ? null : name));
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;
    const query = searchQuery.trim();
    setSearchOpen(false);
    setMobileOpen(false);
    setSearchQuery("");
    router.push(`/judgments?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <header className="sticky top-0 z-50 shadow-lg bg-[#101D35] border-b border-[#E7E4DC]/15 backdrop-blur-md">
        
        {/* ── 1. Top Utility Ribbon (Mobile & Tablet) ── */}
        <div className="lg:hidden bg-[#070D18] text-[#F8F7F3]/85 border-b border-white/5 text-[10px] sm:text-[11px] font-medium py-1 px-3">
          <div className="max-w-[1560px] mx-auto flex items-center justify-between gap-2">
            <span className="flex items-center gap-1 text-[#B69A63] font-semibold tracking-wider truncate">
              <Shield size={10} className="text-[#B69A63] flex-shrink-0" />
              <span className="truncate">AOR Supreme Court of India • Reg. 4215</span>
            </span>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a 
                href="tel:+917206810681" 
                className="flex items-center gap-1 text-[#B69A63] hover:text-[#CBB484] transition-colors font-semibold"
              >
                <Phone size={10} />
                <span>+91 72068 10681</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── 2. Top Utility Bar (Laptop & Large Screens) ── */}
        <div className="hidden lg:block bg-[#070D18] text-[#F8F7F3]/80 border-b border-white/5 text-[11px] xl:text-[11.5px] font-medium tracking-wide">
          <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-4">
            
            {/* Left: Official Standing & AOR Credential */}
            <div className="flex items-center gap-3 xl:gap-4 min-w-0">
              <span className="flex items-center gap-1.5 text-[#B69A63] font-semibold uppercase tracking-wider whitespace-nowrap">
                <Shield size={12} className="text-[#B69A63] flex-shrink-0" />
                Advocate-on-Record • Supreme Court of India (AOR Reg. 4215)
              </span>
              <span className="text-white/20 hidden xl:inline">|</span>
              <span className="items-center gap-1.5 text-white/70 whitespace-nowrap hidden xl:flex">
                <MapPin size={11} className="text-[#B69A63] flex-shrink-0" />
                <span>Chambers: Tilak Marg & Kalindi Colony, New Delhi</span>
              </span>
            </div>

            {/* Right: Working Hours, Email & Phone */}
            <div className="flex items-center gap-3 xl:gap-4 text-white/75 flex-shrink-0">
              <span className="items-center gap-1 text-white/60 whitespace-nowrap hidden 2xl:flex">
                <Clock size={11} className="text-[#B69A63]" />
                Mon – Sat: 10:00 AM – 7:30 PM
              </span>
              <span className="text-white/20 hidden 2xl:inline">|</span>
              <a 
                href="mailto:advocate.tushargarg@gmail.com" 
                className="hover:text-[#B69A63] transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Mail size={11} className="text-[#B69A63]" />
                <span>advocate.tushargarg@gmail.com</span>
              </a>
              <span className="text-white/20">|</span>
              <a 
                href="tel:+917206810681" 
                className="font-semibold text-[#B69A63] hover:text-[#CBB484] transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Phone size={11} className="text-[#B69A63]" />
                <span>+91 72068 10681</span>
              </a>
            </div>

          </div>
        </div>

        {/* ── 3. Main Navigation Bar ── */}
        <div className="max-w-[1560px] mx-auto px-3 sm:px-4 md:px-6 lg:px-6 xl:px-6 2xl:px-8">
          <div className="flex items-center justify-between h-[62px] sm:h-[68px] xl:h-[72px] gap-2 lg:gap-3">
            
            {/* Brand Logo */}
            <Link 
              href="/" 
              className="flex items-center group py-1 flex-shrink-0" 
              aria-label="Advocate Tushar Garg Home"
            >
              <div className="relative h-8 sm:h-9 md:h-10 xl:h-10 2xl:h-11 w-auto flex-shrink-0">
                <img
                  src="/TusharLogo.png"
                  alt="Advocate Tushar Garg - Advocate-on-Record, Supreme Court of India"
                  className="h-full w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links (Scaled gracefully for laptops and desktops) */}
            <nav className="hidden xl:flex items-center gap-0.5 xl:gap-0.5 2xl:gap-1.5 min-w-0">
              
              {/* 1. Home */}
              <Link 
                href="/" 
                className={`px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-[11.5px] 2xl:text-[13px] font-medium tracking-normal 2xl:tracking-wide rounded-md transition-colors whitespace-nowrap ${
                  pathname === "/" ? "text-[#B69A63] font-semibold" : "text-white/85 hover:text-white hover:bg-white/5"
                }`}
              >
                Home
              </Link>

              {/* 2. About Dropdown */}
              <div className="relative group py-2">
                <Link
                  href="/about"
                  className={`flex items-center gap-0.5 xl:gap-1 px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-[11.5px] 2xl:text-[13px] font-medium tracking-normal 2xl:tracking-wide rounded-md transition-colors whitespace-nowrap ${
                    pathname?.startsWith("/about") ? "text-[#B69A63] font-semibold" : "text-white/85 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>About</span>
                  <ChevronDown size={11} className="opacity-70 group-hover:rotate-180 transition-transform duration-200 flex-shrink-0" />
                </Link>

                <div className="absolute top-full left-0 w-[260px] bg-[#101D35] border border-[#B69A63]/30 rounded-xl shadow-2xl p-2.5 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                  <Link href="/about" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Advocate Profile</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Professional credentials & standing</p>
                  </Link>
                  <Link href="/about#chambers" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Chambers Profile</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Litigation, drafting & research desks</p>
                  </Link>
                  <Link href="/about#particulars" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Professional Particulars</p>
                    <p className="text-[10px] text-white/50 mt-0.5">AOR registration & enrolment records</p>
                  </Link>
                </div>
              </div>

              {/* 3. Practice Areas Dropdown (12 Specializations) */}
              <div className="relative group py-2">
                <Link
                  href="/laws"
                  className={`flex items-center gap-0.5 xl:gap-1 px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-[11.5px] 2xl:text-[13px] font-medium tracking-normal 2xl:tracking-wide rounded-md transition-colors whitespace-nowrap ${
                    pathname?.startsWith("/laws") ? "text-[#B69A63] font-semibold" : "text-white/85 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>Practice Areas</span>
                  <ChevronDown size={11} className="opacity-70 group-hover:rotate-180 transition-transform duration-200 flex-shrink-0" />
                </Link>

                <div className="absolute top-full left-0 w-[580px] bg-[#101D35] border border-[#B69A63]/30 rounded-xl shadow-2xl p-4 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                    <span className="text-[#B69A63] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Scale size={13} />
                      Areas of Legal Practice
                    </span>
                    <Link href="/laws" className="text-[11px] text-[#B69A63] hover:underline flex items-center gap-1 font-medium">
                      <span>View All</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {defaultPracticeAreas.map((pa) => (
                      <Link
                        key={pa.slug}
                        href={`/laws/${pa.slug}`}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors block group/item"
                      >
                        <p className="text-[11.5px] font-semibold text-white group-hover/item:text-[#B69A63]">
                          {pa.title}
                        </p>
                        <p className="text-[9.5px] text-white/50 truncate mt-0.5">
                          {pa.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Courts Dropdown */}
              <div className="relative group py-2">
                <Link
                  href="/courts"
                  className={`flex items-center gap-0.5 xl:gap-1 px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-[11.5px] 2xl:text-[13px] font-medium tracking-normal 2xl:tracking-wide rounded-md transition-colors whitespace-nowrap ${
                    pathname?.startsWith("/courts") || pathname === "/all-courts" || pathname === "/high-courts" ? "text-[#B69A63] font-semibold" : "text-white/85 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>Courts</span>
                  <ChevronDown size={11} className="opacity-70 group-hover:rotate-180 transition-transform duration-200 flex-shrink-0" />
                </Link>

                <div className="absolute top-full left-0 w-[290px] bg-[#101D35] border border-[#B69A63]/30 rounded-xl shadow-2xl p-2.5 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                  <Link href="/courts" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Supreme Court of India</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Apex Court appellate & writ jurisdiction</p>
                  </Link>
                  <Link href="/high-courts" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">High Courts of India</p>
                    <p className="text-[10px] text-white/50 mt-0.5">25 State High Courts directory</p>
                  </Link>
                  <Link href="/district-courts" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">District Courts</p>
                    <p className="text-[10px] text-white/50 mt-0.5">District judiciary structure</p>
                  </Link>
                  <Link href="/tribunals" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Tribunals & Specialized Forums</p>
                    <p className="text-[10px] text-white/50 mt-0.5">NCLAT, NCLT, NGT, NCDRC & CAT</p>
                  </Link>
                  <div className="pt-2 border-t border-white/10 mt-1">
                    <Link href="/all-courts" className="block px-3 py-1.5 text-[11px] font-semibold text-[#B69A63] hover:underline flex items-center justify-between">
                      <span>All Courts Directory</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* 5. Judgments Dropdown */}
              <div className="relative group py-2">
                <Link
                  href="/judgments"
                  className={`flex items-center gap-0.5 xl:gap-1 px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-[11.5px] 2xl:text-[13px] font-medium tracking-normal 2xl:tracking-wide rounded-md transition-colors whitespace-nowrap ${
                    pathname?.startsWith("/judgments") ? "text-[#B69A63] font-semibold" : "text-white/85 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>Judgments</span>
                  <ChevronDown size={11} className="opacity-70 group-hover:rotate-180 transition-transform duration-200 flex-shrink-0" />
                </Link>

                <div className="absolute top-full left-0 w-[270px] bg-[#101D35] border border-[#B69A63]/30 rounded-xl shadow-2xl p-2.5 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                  <Link href="/judgments?court=Supreme+Court+of+India" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Supreme Court Judgments</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Constitutional & landmark rulings</p>
                  </Link>
                  <Link href="/judgments?court=High+Court" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">High Court Judgments</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Appellate decisions across states</p>
                  </Link>
                  <Link href="/judgments" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Latest Judgments</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Recent orders & case precedents</p>
                  </Link>
                  <Link href="/judgments?filter=important" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Important Judgments</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Substantive legal authorities</p>
                  </Link>
                </div>
              </div>

              {/* 6. Legal Research Dropdown */}
              <div className="relative group py-2">
                <Link
                  href="/bare-acts"
                  className={`flex items-center gap-0.5 xl:gap-1 px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-[11.5px] 2xl:text-[13px] font-medium tracking-normal 2xl:tracking-wide rounded-md transition-colors whitespace-nowrap ${
                    pathname?.startsWith("/bare-acts") || pathname?.startsWith("/articles") ? "text-[#B69A63] font-semibold" : "text-white/85 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>Legal Research</span>
                  <ChevronDown size={11} className="opacity-70 group-hover:rotate-180 transition-transform duration-200 flex-shrink-0" />
                </Link>

                <div className="absolute top-full left-0 w-[270px] bg-[#101D35] border border-[#B69A63]/30 rounded-xl shadow-2xl p-2.5 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                  <Link href="/laws" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Indian Laws</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Statutory framework by subject</p>
                  </Link>
                  <Link href="/bare-acts" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Bare Acts</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Central & State enactments database</p>
                  </Link>
                  <Link href="/podcast" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold flex items-center justify-between">
                      <span>Legal Podcast</span>
                      <span className="text-[9px] bg-[#B69A63]/20 text-[#B69A63] px-1.5 py-0.5 rounded font-semibold uppercase">New</span>
                    </p>
                    <p className="text-[10px] text-white/50 mt-0.5">Video discussions & expert interviews</p>
                  </Link>
                  <Link href="/articles" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Legal Articles</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Case notes & statutory analysis</p>
                  </Link>
                  <Link href="/legal-drafts" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Legal Drafts & Formats</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Procedural notices & templates</p>
                  </Link>
                  <Link href="/faqs" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Legal FAQs</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Frequently addressed legal questions</p>
                  </Link>
                </div>
              </div>

              {/* 7. Judiciary & Careers Dropdown */}
              <div className="relative group py-2">
                <Link
                  href="/judiciary"
                  className={`flex items-center gap-0.5 xl:gap-1 px-1.5 xl:px-2 2xl:px-2.5 py-1.5 text-[11px] xl:text-[11.5px] 2xl:text-[13px] font-medium tracking-normal 2xl:tracking-wide rounded-md transition-colors whitespace-nowrap ${
                    pathname?.startsWith("/judiciary") || pathname?.startsWith("/jobs") ? "text-[#B69A63] font-semibold" : "text-white/85 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>Judiciary & Careers</span>
                  <ChevronDown size={11} className="opacity-70 group-hover:rotate-180 transition-transform duration-200 flex-shrink-0" />
                </Link>

                <div className="absolute top-full right-0 w-[270px] bg-[#101D35] border border-[#B69A63]/30 rounded-xl shadow-2xl p-2.5 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                  <Link href="/judiciary" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Judicial Information</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Judicial exam patterns & appointments</p>
                  </Link>
                  <Link href="/colleges" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold flex items-center justify-between">
                      <span>Law Colleges & Education</span>
                      <span className="text-[9px] bg-[#B69A63]/20 text-[#B69A63] px-1.5 py-0.2 rounded font-semibold">Directory</span>
                    </p>
                    <p className="text-[10px] text-white/50 mt-0.5">All 26 NLUs, top law institutions & degrees</p>
                  </Link>
                  <Link href="/jobs?type=internship" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Law Internships</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Chambers clerkship information</p>
                  </Link>
                  <Link href="/jobs?type=associate" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Associate Opportunities</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Professional practice positions</p>
                  </Link>
                  <Link href="/resources" className="block px-3 py-2 rounded-lg text-xs hover:bg-white/10 hover:text-[#B69A63] transition-colors">
                    <p className="font-semibold">Legal Career Resources</p>
                    <p className="text-[10px] text-white/50 mt-0.5">Academic & Bar guidance material</p>
                  </Link>
                </div>
              </div>

              {/* 8. Podcast (Distinctive Highlight) */}
              <Link
                href="/podcast"
                className={`relative inline-flex items-center gap-1 px-1.5 xl:px-2 2xl:px-2.5 py-1 text-[11px] xl:text-[11.5px] 2xl:text-[12px] font-bold tracking-wide rounded-lg transition-all border whitespace-nowrap ${
                  pathname === "/podcast"
                    ? "bg-[#B69A63] text-[#101D35] border-[#B69A63] shadow-md shadow-[#B69A63]/25"
                    : "bg-[#B69A63]/10 hover:bg-[#B69A63]/20 text-[#B69A63] border-[#B69A63]/50 hover:border-[#B69A63]"
                }`}
                title="Watch Legal Podcasts & Case Discussions"
              >
                <Radio size={12} className="text-red-400 animate-pulse flex-shrink-0" />
                <span>Podcast</span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                </span>
              </Link>

            </nav>

            {/* Right Actions: Search Icon, Chambers Contact CTA, & Mobile Hamburger */}
            <div className="flex items-center gap-2 xl:gap-2.5 2xl:gap-3 flex-shrink-0">
              
              {/* Search Trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search Legal Database"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-white/75 hover:text-[#B69A63] text-xs transition-all cursor-pointer whitespace-nowrap"
                title="Search Bare Acts, Judgments & Indian Laws (Ctrl+K)"
              >
                <Search size={14} className="text-[#B69A63]" />
                <span className="hidden md:inline text-[11px] xl:text-[11.5px] 2xl:text-[12px]">Search</span>
                <kbd className="hidden 2xl:inline-block text-[9px] font-mono bg-white/10 text-[#B69A63] px-1 py-0.5 rounded border border-white/10">
                  ⌘K
                </kbd>
              </button>

              {/* Chambers Contact CTA (Prominent, restrained, single button) */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 xl:px-3 2xl:px-4 py-1.5 xl:py-2 rounded-lg border border-[#B69A63]/70 bg-[#B69A63]/10 hover:bg-[#B69A63] text-[#B69A63] hover:text-[#101D35] font-semibold text-[10.5px] xl:text-[11px] 2xl:text-xs uppercase tracking-wider transition-all duration-200 whitespace-nowrap shadow-sm"
              >
                <span>Chambers Contact</span>
                <ArrowRight size={12} className="hidden xl:inline" />
              </Link>

              {/* Quick Call on Mobile Devices */}
              <a
                href="tel:+917206810681"
                aria-label="Call Advocate Tushar Garg Chambers"
                className="sm:hidden p-2 rounded-lg bg-[#B69A63]/15 border border-[#B69A63]/30 text-[#B69A63] hover:bg-[#B69A63] hover:text-[#101D35] transition-colors flex items-center justify-center cursor-pointer"
              >
                <Phone size={15} />
              </a>

              {/* Mobile Drawer Hamburger Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
                className="xl:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#B69A63] hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

            </div>

          </div>
        </div>

        {/* ── 4. Mobile & Tablet Drawer Navigation ── */}
        {mobileOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[calc(100%)] max-h-[85vh] overflow-y-auto bg-[#0A1222] border-t border-white/10 shadow-2xl z-50 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-4 space-y-4">
              
              {/* Chambers Credential Card */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#B69A63] uppercase tracking-wider">
                    Advocate-on-Record
                  </p>
                  <p className="text-[11px] text-white/70">
                    Supreme Court of India • Reg. No. 4215
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-400 font-medium">Chambers Open</span>
                </div>
              </div>

              {/* Mobile Search Input */}
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Bare Acts, Judgments, Precedents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#101D35] border border-[#B69A63]/30 rounded-xl px-3.5 py-2.5 pl-9 pr-9 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#B69A63]"
                  />
                  <Search size={14} className="absolute left-3 top-3 text-[#B69A63]" />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-3 text-white/40 hover:text-white"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </form>

              {/* Accordion Navigation Items */}
              <div className="space-y-1 text-sm font-medium">
                
                {/* Home */}
                <Link 
                  href="/" 
                  className={`block px-3 py-2.5 rounded-lg transition-colors ${
                    pathname === "/" ? "bg-[#B69A63]/15 text-[#B69A63] font-semibold" : "text-white/90 hover:bg-white/5 hover:text-[#B69A63]"
                  }`}
                >
                  Home
                </Link>

                {/* About Accordion */}
                <div className="rounded-lg border border-white/5 bg-white/[0.02]">
                  <button
                    onClick={() => toggleAccordion("about")}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-left text-white/90 hover:text-[#B69A63] transition-colors"
                  >
                    <span>About Advocate & Chambers</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAccordion === "about" ? "rotate-180 text-[#B69A63]" : "opacity-60"}`} />
                  </button>
                  {mobileAccordion === "about" && (
                    <div className="px-3 pb-2.5 pt-1 space-y-1 text-xs border-t border-white/5">
                      <Link href="/about" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Advocate Profile & Credentials
                      </Link>
                      <Link href="/about#chambers" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Chambers Infrastructure & Litigation Desks
                      </Link>
                      <Link href="/about#particulars" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        AOR Registration & Standing Particulars
                      </Link>
                    </div>
                  )}
                </div>

                {/* Practice Areas Accordion */}
                <div className="rounded-lg border border-white/5 bg-white/[0.02]">
                  <button
                    onClick={() => toggleAccordion("practice")}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-left text-white/90 hover:text-[#B69A63] transition-colors"
                  >
                    <span>Areas of Legal Practice</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAccordion === "practice" ? "rotate-180 text-[#B69A63]" : "opacity-60"}`} />
                  </button>
                  {mobileAccordion === "practice" && (
                    <div className="px-3 pb-2.5 pt-1 grid grid-cols-2 gap-1 text-xs border-t border-white/5">
                      {defaultPracticeAreas.map((pa) => (
                        <Link
                          key={pa.slug}
                          href={`/laws/${pa.slug}`}
                          className="py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5 truncate"
                        >
                          {pa.title}
                        </Link>
                      ))}
                      <div className="col-span-2 pt-1 border-t border-white/5 mt-1">
                        <Link href="/laws" className="text-[#B69A63] font-semibold flex items-center gap-1 py-1 px-2 hover:underline">
                          <span>View All 12 Practice Areas</span>
                          <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Courts Accordion */}
                <div className="rounded-lg border border-white/5 bg-white/[0.02]">
                  <button
                    onClick={() => toggleAccordion("courts")}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-left text-white/90 hover:text-[#B69A63] transition-colors"
                  >
                    <span>Courts & Judicial Forums</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAccordion === "courts" ? "rotate-180 text-[#B69A63]" : "opacity-60"}`} />
                  </button>
                  {mobileAccordion === "courts" && (
                    <div className="px-3 pb-2.5 pt-1 space-y-1 text-xs border-t border-white/5">
                      <Link href="/courts" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Supreme Court of India (Apex Court)
                      </Link>
                      <Link href="/high-courts" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        25 Constitutional High Courts
                      </Link>
                      <Link href="/district-courts" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        677+ District Courts Directory
                      </Link>
                      <Link href="/tribunals" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Statutory Tribunals (NCLAT, NCLT, NGT, CAT)
                      </Link>
                      <Link href="/all-courts" className="block py-1.5 px-2 rounded text-[#B69A63] font-semibold hover:underline">
                        Comprehensive Courts Directory →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Judgments Accordion */}
                <div className="rounded-lg border border-white/5 bg-white/[0.02]">
                  <button
                    onClick={() => toggleAccordion("judgments")}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-left text-white/90 hover:text-[#B69A63] transition-colors"
                  >
                    <span>Judgments & Precedents</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAccordion === "judgments" ? "rotate-180 text-[#B69A63]" : "opacity-60"}`} />
                  </button>
                  {mobileAccordion === "judgments" && (
                    <div className="px-3 pb-2.5 pt-1 space-y-1 text-xs border-t border-white/5">
                      <Link href="/judgments?court=Supreme+Court+of+India" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Supreme Court Rulings
                      </Link>
                      <Link href="/judgments?court=High+Court" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        High Court Decisions
                      </Link>
                      <Link href="/judgments" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Latest Judgments & Orders
                      </Link>
                      <Link href="/judgments?filter=important" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Landmark & Substantive Precedents
                      </Link>
                    </div>
                  )}
                </div>

                {/* Legal Research Accordion */}
                <div className="rounded-lg border border-white/5 bg-white/[0.02]">
                  <button
                    onClick={() => toggleAccordion("research")}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-left text-white/90 hover:text-[#B69A63] transition-colors"
                  >
                    <span>Legal Research & Bare Acts</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAccordion === "research" ? "rotate-180 text-[#B69A63]" : "opacity-60"}`} />
                  </button>
                  {mobileAccordion === "research" && (
                    <div className="px-3 pb-2.5 pt-1 space-y-1 text-xs border-t border-white/5">
                      <Link href="/bare-acts" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Indian Bare Acts Library (Central & State)
                      </Link>
                      <Link href="/laws" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Statutory Framework by Practice Area
                      </Link>
                      <Link href="/articles" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Scholarly Articles & Case Notes
                      </Link>
                      <Link href="/legal-drafts" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Procedural Legal Drafts & Templates
                      </Link>
                      <Link href="/faqs" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Frequently Addressed Legal Questions
                      </Link>
                    </div>
                  )}
                </div>

                {/* Judiciary & Careers Accordion */}
                <div className="rounded-lg border border-white/5 bg-white/[0.02]">
                  <button
                    onClick={() => toggleAccordion("judiciary")}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-left text-white/90 hover:text-[#B69A63] transition-colors"
                  >
                    <span>Judiciary, Colleges & Careers</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileAccordion === "judiciary" ? "rotate-180 text-[#B69A63]" : "opacity-60"}`} />
                  </button>
                  {mobileAccordion === "judiciary" && (
                    <div className="px-3 pb-2.5 pt-1 space-y-1 text-xs border-t border-white/5">
                      <Link href="/judiciary" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        State Judicial Services Exams & Syllabus
                      </Link>
                      <Link href="/colleges" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        All 26 NLUs & Top Law Colleges Directory
                      </Link>
                      <Link href="/jobs?type=internship" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Law Clerkships & Internships
                      </Link>
                      <Link href="/jobs?type=associate" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Chambers Associate Openings
                      </Link>
                      <Link href="/resources" className="block py-1.5 px-2 rounded text-white/70 hover:text-[#B69A63] hover:bg-white/5">
                        Bar & Judicial Preparation Resources
                      </Link>
                    </div>
                  )}
                </div>

                {/* Highlighted Podcast Link */}
                <Link 
                  href="/podcast" 
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#B69A63]/20 via-red-950/20 to-[#101D35] border border-[#B69A63]/40 text-white hover:border-[#B69A63] transition-colors shadow-sm my-1"
                >
                  <div className="flex items-center gap-2">
                    <Radio size={14} className="text-red-400 animate-pulse" />
                    <span className="font-semibold text-[#B69A63]">Legal Podcast & Case Discussions</span>
                  </div>
                  <span className="text-[9px] bg-red-500/20 text-red-300 border border-red-500/40 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    New
                  </span>
                </Link>

                {/* Direct Contact */}
                <Link 
                  href="/contact" 
                  className={`block px-3 py-2.5 rounded-lg transition-colors ${
                    pathname === "/contact" ? "bg-[#B69A63]/15 text-[#B69A63] font-semibold" : "text-white/90 hover:bg-white/5 hover:text-[#B69A63]"
                  }`}
                >
                  Contact Chambers
                </Link>

              </div>

              {/* Direct Communication Buttons */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <a
                  href="tel:+917206810681"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#B69A63] hover:bg-[#CBB484] text-[#101D35] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Phone size={14} />
                  <span>Call Chambers: +91 72068 10681</span>
                </a>
                
                <a
                  href="https://wa.me/917206810681?text=Hello%20Advocate%20Tushar%20Garg,%20I%20would%20like%20to%20inquire%20about%20legal%20counsel%20at%20the%20Supreme%20Court%20of%20India."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 font-semibold text-xs tracking-wide transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp Legal Inquiry</span>
                </a>

                <a
                  href="mailto:advocate.tushargarg@gmail.com"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-xs transition-colors"
                >
                  <Mail size={13} className="text-[#B69A63]" />
                  <span>advocate.tushargarg@gmail.com</span>
                </a>

                <div className="text-center pt-2">
                  <p className="text-[10px] text-white/50 leading-relaxed">
                    Chambers: Tilak Marg, Supreme Court of India &amp; Kalindi Colony, New Delhi
                  </p>
                  <p className="text-[9.5px] text-[#B69A63] uppercase tracking-widest pt-1 font-mono">
                    AOR Supreme Court of India • Reg. 4215
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </header>

      {/* ── 5. Global Interactive Search Modal (⌘K / Ctrl+K) ── */}
      {searchOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSearchOpen(false)}
        >
          <div 
            className="w-full max-w-2xl bg-[#101D35] border border-[#B69A63]/50 rounded-2xl shadow-2xl p-4 sm:p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2 text-[#B69A63] font-bold text-xs uppercase tracking-wider">
                <Search size={15} />
                <span>Search Legal Research Repository &amp; Judgments</span>
              </div>
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-white/40 hover:text-white p-1 rounded-md"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit}>
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Type legal keyword, judgment citation, or Bare Act..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-[#0A1222] border border-[#B69A63]/40 rounded-xl px-4 py-3 pl-11 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#B69A63]"
                />
                <Search size={17} className="absolute left-3.5 top-3.5 text-[#B69A63]" />
              </div>

              <div className="flex items-center justify-between text-[11px] sm:text-xs text-white/50 pt-1">
                <span>Press <strong className="text-white">Enter</strong> to search</span>
                <span className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10">ESC to close</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


"use client";

import { useState, useEffect } from "react";
import { Search, User, ChevronDown, Menu, X, Landmark, Scale, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fetchApi } from "../../lib/api/client";

function getCategorySlug(name: string): string {
  if (!name) return "";
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

const defaultHeaderCategories = [
  { name: "Constitutional Law", tag: "Apex Court & Writs", acts: "18 Acts", slug: "constitutional-law" },
  { name: "Criminal Law", tag: "Bail & IPC", acts: "35 Acts", slug: "criminal-law" },
  { name: "Civil Law", tag: "CPC & Suits", acts: "28 Acts", slug: "civil-law" },
  { name: "Corporate Law", tag: "Companies Act & NCLT", acts: "52 Acts", slug: "corporate-law" },
  { name: "Tax Law", tag: "GST & Income Tax", acts: "25 Acts", slug: "tax-law" },
  { name: "Property Law", tag: "Land & Transfer", acts: "22 Acts", slug: "property-law" },
  { name: "Family Law", tag: "Hindu & Muslim Law", acts: "15 Acts", slug: "family-law" },
  { name: "Labour Law", tag: "Industrial & CAT", acts: "29 Acts", slug: "labour-law" },
  { name: "Arbitration Law", tag: "ADR & Conciliation", acts: "14 Acts", slug: "arbitration-law" },
  { name: "Insolvency & Bankruptcy", tag: "IBC 2016", acts: "10 Acts", slug: "insolvency-bankruptcy" },
  { name: "Consumer Law", tag: "Consumer Protection", acts: "8 Acts", slug: "consumer-law" },
  { name: "Environment Law", tag: "NGT & Forest Acts", acts: "12 Acts", slug: "environment-law" },
];

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "COURTS", href: "/courts", hasDropdown: true },
  { label: "JUDGMENTS", href: "/judgments", hasDropdown: true },
  { label: "PRACTICE AREAS", href: "/laws", hasDropdown: true },
  { label: "TRIBUNALS", href: "/tribunals" },
  { label: "JUDICIARY", href: "/judiciary" },
  { label: "JOBS", href: "/jobs" },
  { label: "COLLEGES", href: "/colleges" },
  { label: "ARTICLES", href: "/articles" },
  { label: "RESOURCES", href: "/resources", hasDropdown: true },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCourtsOpen, setMobileCourtsOpen] = useState(false);
  const [mobileLawsOpen, setMobileLawsOpen] = useState(false);
  const [states, setStates] = useState<any[]>([]);
  const [lawsCategories, setLawsCategories] = useState<any[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    fetchApi('/states')
      .then((data) => setStates(data || []))
      .catch((err) => console.error("Failed to load header states", err));

    fetchApi('/laws-categories')
      .then((data) => setLawsCategories(data || []))
      .catch((err) => console.error("Failed to load header laws categories", err));
  }, []);

  return (
    <header className="bg-[#0d1b3e] sticky top-0 z-50 shadow-md">
      {/* Top bar: Logo + Search + User */}
      <div className="max-w-[1600px] mx-auto px-4 flex items-center justify-between h-[64px] gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 min-w-0">
          <span className="text-[#c9a84c] text-[28px] sm:text-[34px] leading-none pr-3 sm:pr-4 border-r border-[#1a2b5a] flex-shrink-0">TG</span>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-white font-bold font-serif text-[17px] sm:text-[19px] tracking-widest uppercase truncate">
              TUSHAR GARG
            </span>
            <span className="text-white/80 text-[8px] sm:text-[9.5px] font-medium tracking-wide mt-0.5 truncate">
              Advocate-on-Record, Supreme Court of India
            </span>
          </div>
        </Link>

        {/* Search + User */}
        <div className="hidden lg:flex items-center gap-4 ml-auto w-full max-w-[420px]">
          <div className="flex items-center bg-transparent border border-[#1a2b5a] hover:border-[#c9a84c]/50 rounded-lg flex-1 px-4 py-2 gap-2 transition-colors">
            <input
              type="text"
              placeholder="Search judgments, acts, courts..."
              className="bg-transparent text-white text-[12.5px] placeholder-white/50 outline-none flex-1"
              aria-label="Search"
            />
            <Search size={16} strokeWidth={2} className="text-white/50 flex-shrink-0" />
          </div>
          <button aria-label="User account" className="flex items-center justify-center w-[38px] h-[38px] rounded-full border border-white/20 text-white/80 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors flex-shrink-0">
            <User size={18} strokeWidth={1.8} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-1"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Nav bar */}
      <div>
        <div className="max-w-[1600px] mx-auto px-4">
          <nav className="hidden lg:flex items-center justify-between py-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              
              if (item.label === "COURTS") {
                return (
                  <div key={item.label} className="relative group py-1">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-[11.5px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors ${
                        isActive ? "text-[#c9a84c]" : "text-white/75 group-hover:text-[#c9a84c]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} strokeWidth={2.5} className="opacity-60 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>
                    {isActive && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#c9a84c]" />}

                    {/* COURTS MEGA DROPDOWN MENU */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] bg-[#0c1735] border border-[#c9a84c]/30 rounded-xl shadow-2xl p-4 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                        <div className="flex items-center gap-2 text-[#c9a84c] font-bold text-xs tracking-wider uppercase">
                          <Landmark size={15} />
                          State Judicial Directories
                        </div>
                        <span className="text-[10px] font-bold bg-[#c9a84c]/20 text-[#c9a84c] px-2.5 py-0.5 rounded-full">
                          {states.length} States / UTs
                        </span>
                      </div>

                      {/* States Grid */}
                      <div className="grid grid-cols-2 gap-1.5 max-h-[300px] overflow-y-auto pr-1">
                        {states.map((state) => (
                          <Link
                            key={state._id || state.slug}
                            href={`/courts/${state.slug}`}
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-white/85 hover:text-[#c9a84c] hover:bg-white/10 transition-all group/item"
                          >
                            <span className="truncate">{state.name} Courts</span>
                            {state.code && (
                              <span className="text-[10px] font-bold text-white/50 group-hover/item:text-[#c9a84c] bg-white/5 group-hover/item:bg-[#c9a84c]/20 px-1.5 py-0.5 rounded transition-colors shrink-0">
                                {state.code}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>

                      {/* Footer Link */}
                      <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between text-xs">
                        <span className="text-white/50 text-[11px]">Explore High Courts & District Courts</span>
                        <Link href="/courts" className="text-[#c9a84c] font-bold hover:underline flex items-center gap-1 group/link">
                          All India Directory
                          <ArrowRight size={13} className="transform group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                    </div>
                  </div>
                );
              }

              if (item.label === "PRACTICE AREAS") {
                const categoriesList = lawsCategories.length > 0 ? lawsCategories : defaultHeaderCategories;
                return (
                  <div key={item.label} className="relative group py-1">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-[11.5px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors ${
                        isActive ? "text-[#c9a84c]" : "text-white/75 group-hover:text-[#c9a84c]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} strokeWidth={2.5} className="opacity-60 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>
                    {isActive && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#c9a84c]" />}

                    {/* PRACTICE AREAS MEGA DROPDOWN MENU */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[560px] bg-[#0c1735] border border-[#c9a84c]/30 rounded-xl shadow-2xl p-4 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      
                      {/* Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                        <div className="flex items-center gap-2 text-[#c9a84c] font-bold text-xs tracking-wider uppercase">
                          <Scale size={15} />
                          Browse Laws by Category
                        </div>
                        <span className="text-[10px] font-bold bg-[#c9a84c]/20 text-[#c9a84c] px-2.5 py-0.5 rounded-full">
                          {categoriesList.length} Practice Areas
                        </span>
                      </div>

                      {/* Categories Grid */}
                      <div className="grid grid-cols-2 gap-1.5 max-h-[320px] overflow-y-auto pr-1">
                        {categoriesList.map((cat: any, idx: number) => {
                          const slug = cat.slug || getCategorySlug(cat.name);
                          return (
                            <Link
                              key={cat._id || idx}
                              href={`/laws/${slug}`}
                              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-white/85 hover:text-[#c9a84c] hover:bg-white/10 transition-all group/item"
                            >
                              <div className="flex flex-col min-w-0 pr-2">
                                <span className="truncate font-bold text-white group-hover/item:text-[#c9a84c]">
                                  {cat.name}
                                </span>
                                <span className="text-[10px] font-normal text-white/50 truncate">
                                  {cat.tag || cat.acts || "Bare Acts & Precedents"}
                                </span>
                              </div>
                              <ArrowRight size={12} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 text-[#c9a84c] transition-all shrink-0" />
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer Link */}
                      <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between text-xs">
                        <span className="text-white/50 text-[11px]">Explore All Indian Bare Acts & Precedents</span>
                        <Link href="/laws" className="text-[#c9a84c] font-bold hover:underline flex items-center gap-1 group/link">
                          All Practice Areas Directory
                          <ArrowRight size={13} className="transform group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative flex flex-col items-center gap-1 text-[11.5px] font-bold tracking-wider uppercase whitespace-nowrap transition-colors py-1 ${
                    isActive ? "text-[#c9a84c]" : "text-white/75 hover:text-[#c9a84c]"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown size={14} strokeWidth={2.5} className={isActive ? "opacity-100" : "opacity-60"} />
                    )}
                  </div>
                  {isActive && <div className="absolute -bottom-1 w-full h-[2px] bg-[#c9a84c]" />}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0d1b3e]">
          {/* Mobile Search */}
          <div className="px-4 py-3 border-b border-white/10">
            <div className="flex items-center bg-white/10 border border-white/20 rounded-sm px-3 py-2 gap-2">
              <Search size={15} className="text-white/60" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white text-[13px] placeholder-white/50 outline-none flex-1"
              />
            </div>
          </div>
          <nav className="flex flex-col">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));

              if (item.label === "COURTS") {
                return (
                  <div key={item.label} className="border-b border-white/5">
                    <div className="flex items-center justify-between px-4 py-3">
                      <Link
                        href={item.href}
                        className={`text-[13px] font-semibold ${isActive ? "text-[#c9a84c]" : "text-white/85"}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileCourtsOpen(!mobileCourtsOpen)}
                        className="p-1 text-white/70 hover:text-[#c9a84c]"
                      >
                        <ChevronDown size={16} className={`transform transition-transform ${mobileCourtsOpen ? "rotate-180 text-[#c9a84c]" : ""}`} />
                      </button>
                    </div>

                    {/* Mobile Sub-menu for Courts */}
                    {mobileCourtsOpen && (
                      <div className="bg-[#0c1735] px-6 py-2 border-t border-white/5 space-y-1.5 max-h-[250px] overflow-y-auto">
                        <p className="text-[10px] uppercase tracking-wider font-bold text-[#c9a84c] mb-2 flex items-center gap-1">
                          <Landmark size={12} /> Select State Directory
                        </p>
                        {states.map((s) => (
                          <Link
                            key={s._id || s.slug}
                            href={`/courts/${s.slug}`}
                            className="block py-1.5 text-xs text-white/80 hover:text-[#c9a84c] transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {s.name} Courts
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.label === "PRACTICE AREAS") {
                const categoriesList = lawsCategories.length > 0 ? lawsCategories : defaultHeaderCategories;
                return (
                  <div key={item.label} className="border-b border-white/5">
                    <div className="flex items-center justify-between px-4 py-3">
                      <Link
                        href={item.href}
                        className={`text-[13px] font-semibold ${isActive ? "text-[#c9a84c]" : "text-white/85"}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileLawsOpen(!mobileLawsOpen)}
                        className="p-1 text-white/70 hover:text-[#c9a84c]"
                      >
                        <ChevronDown size={16} className={`transform transition-transform ${mobileLawsOpen ? "rotate-180 text-[#c9a84c]" : ""}`} />
                      </button>
                    </div>

                    {/* Mobile Sub-menu for Practice Areas */}
                    {mobileLawsOpen && (
                      <div className="bg-[#0c1735] px-6 py-2 border-t border-white/5 space-y-1.5 max-h-[250px] overflow-y-auto">
                        <p className="text-[10px] uppercase tracking-wider font-bold text-[#c9a84c] mb-2 flex items-center gap-1">
                          <Scale size={12} /> Select Law Category
                        </p>
                        {categoriesList.map((c: any, i: number) => {
                          const slug = c.slug || getCategorySlug(c.name);
                          return (
                            <Link
                              key={c._id || i}
                              href={`/laws/${slug}`}
                              className="block py-1.5 text-xs text-white/80 hover:text-[#c9a84c] transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {c.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 text-[13px] font-semibold border-b border-white/5 ${
                    isActive ? "text-[#c9a84c]" : "text-white/85"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} />}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

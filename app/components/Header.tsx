"use client";

import { useState } from "react";
import { Search, User, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "COURTS", href: "/courts", hasDropdown: true },
  { label: "JUDGMENTS", href: "/judgments", hasDropdown: true },
  { label: "LAWS", href: "/laws", hasDropdown: true },
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
  const pathname = usePathname();

  return (
    <header className="bg-[#0d1b3e] sticky top-0 z-50">
      {/* Top bar: Logo + Search + User */}
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between h-[64px] gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 min-w-0">
          <span className="text-[#c9a84c] text-[28px] sm:text-[34px] leading-none pr-3 sm:pr-4 border-r border-[#1a2b5a] flex-shrink-0" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>TG</span>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-white font-bold text-[14px] sm:text-[15px] tracking-[0.1em] uppercase truncate">
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
      <div >
        <div className="max-w-[1280px] mx-auto px-4">
          <nav className="hidden lg:flex items-center justify-between py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative flex flex-col items-center gap-1 text-[11px] font-bold tracking-widest whitespace-nowrap transition-colors ${
                  isActive ? "text-[#c9a84c]" : "text-white/70 hover:text-[#c9a84c]"
                }`}
              >
                <div className="flex items-center gap-1">
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={14} strokeWidth={2.5} className={isActive ? "opacity-100" : "opacity-60"} />
                  )}
                </div>
                {isActive && <div className="absolute -bottom-2 w-full h-[2px] bg-[#c9a84c]" />}
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

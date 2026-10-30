"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard,
  Radio, 
  Map,
  Scale, 
  Sliders,
  Settings,
  Gavel,
  BookOpen,
  FileText,
  MessageSquareQuote,
  Landmark,
  Briefcase,
  GraduationCap,
  LogOut, 
  Menu,
  X,
  Mail,
  Globe,
  UserCheck,
  ShieldAlert,
  ShieldCheck
} from "lucide-react";

function getPersistentAdminUser() {
  if (typeof window === "undefined") return null;
  let token = localStorage.getItem("adminToken");
  let dataStr = localStorage.getItem("adminData");

  if (!token) {
    const tokenMatch = document.cookie.match(/(?:^|;\s*)adminToken=([^;]+)/);
    if (tokenMatch) {
      token = tokenMatch[1];
      localStorage.setItem("adminToken", token);
    }
  }

  if (!dataStr) {
    const dataMatch = document.cookie.match(/(?:^|;\s*)adminData=([^;]+)/);
    if (dataMatch) {
      try {
        dataStr = decodeURIComponent(dataMatch[1]);
        localStorage.setItem("adminData", dataStr);
      } catch (e) {}
    }
  }

  if (token) {
    if (dataStr) {
      try {
        return JSON.parse(dataStr);
      } catch (e) {}
    }
    return { name: "System Admin", email: "admin@example.com", role: "ADMIN", permissions: ["ALL"] };
  }
  return null;
}

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [adminUser, setAdminUser] = useState<any>(null);

  useEffect(() => {
    setIsMounted(true);
    // Only redirect to /admin if NO token exists in either localStorage or persistent cookie
    const user = getPersistentAdminUser();
    if (!user) {
      router.push("/admin");
    } else {
      setAdminUser(user);
    }
  }, [router]);

  if (!isMounted || !adminUser) {
    return (
      <div className="h-screen w-screen bg-[#0d1b3e] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#c9a84c] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-sm font-semibold tracking-wider">LOADING ADMIN PORTAL...</p>
        </div>
      </div>
    );
  }

  // Check if current user is Super Admin
  const isSuperAdmin = 
    adminUser?.role === 'SUPER_ADMIN' || 
    adminUser?.role === 'ADMIN' || 
    adminUser?.permissions?.includes('ALL') || 
    adminUser?.permissions?.includes('*') ||
    adminUser?.email === 'info@advocateonrecordtushargarg.com';

  const userPermissions: string[] = Array.isArray(adminUser?.permissions) ? adminUser.permissions : [];

  const allNavItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard, key: "dashboard" },
    { name: "Manage Sub-Admins", href: "/admin/dashboard/sub-admins", icon: UserCheck, key: "sub-admins", superAdminOnly: true },
    { name: "Manage Contact Inquiries", href: "/admin/dashboard/contacts", icon: Mail, key: "contacts" },
    { name: "Manage Hero Section", href: "/admin/dashboard/hero", icon: Sliders, key: "hero" },
    { name: "Manage Judgments", href: "/admin/dashboard/judgments", icon: Gavel, key: "judgments" },
    { name: "Manage Practice Cards", href: "/admin/dashboard/laws-categories", icon: Scale, key: "laws-categories" },
    { name: "Manage Practice Details & Bare Acts", href: "/admin/dashboard/practice-area-details", icon: BookOpen, key: "practice-area-details" },
    { name: "Manage Articles", href: "/admin/dashboard/articles", icon: FileText, key: "articles" },
    { name: "Manage Podcasts", href: "/admin/dashboard/podcasts", icon: Radio, key: "podcasts" },
    { name: "Manage Testimonials", href: "/admin/dashboard/testimonials", icon: MessageSquareQuote, key: "testimonials" },
    { name: "Manage Tribunals", href: "/admin/dashboard/tribunals", icon: Landmark, key: "tribunals" },
    { name: "Manage Visited Forums", href: "/admin/dashboard/visited-courts", icon: Landmark, key: "visited-courts" },
    { name: "Manage Jobs", href: "/admin/dashboard/jobs", icon: Briefcase, key: "jobs" },
    { name: "Manage Colleges", href: "/admin/dashboard/colleges", icon: GraduationCap, key: "colleges" },
    { name: "Manage Judiciary", href: "/admin/dashboard/judiciary", icon: GraduationCap, key: "judiciary" },
    { name: "Manage Resources", href: "/admin/dashboard/resources", icon: BookOpen, key: "resources" },
    { name: "Manage States", href: "/admin/dashboard/states", icon: Map, key: "states" },
    { name: "Manage Courts", href: "/admin/dashboard/courts", icon: Scale, key: "courts" },
    { name: "Manage SEO & Meta Tags", href: "/admin/dashboard/seo", icon: Globe, key: "seo" },
    { name: "Website Settings & Integrations", href: "/admin/dashboard/settings", icon: Settings, key: "settings" },
  ];

  // Filter accessible nav items based on user role and permissions
  const navItems = allNavItems.filter((item) => {
    if (isSuperAdmin) return true;
    if (item.superAdminOnly) return false;
    if (item.key === 'dashboard') return true;
    return userPermissions.includes(item.key);
  });

  // Check if current route is allowed for this user
  const currentNavItem = allNavItems.find(item => 
    pathname === item.href || (item.href !== "/admin/dashboard" && pathname?.startsWith(`${item.href}/`))
  );

  const isCurrentRouteAllowed = !currentNavItem || isSuperAdmin || (
    !currentNavItem.superAdminOnly && 
    (currentNavItem.key === 'dashboard' || userPermissions.includes(currentNavItem.key))
  );

  // Only logout when user explicitly clicks this button
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    document.cookie = "adminToken=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "adminData=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Backdrop Overlay */}
      {isSidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)} 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity" 
        />
      )}

      {/* Sidebar - Always Fixed & Sticky on Left Viewport */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 h-screen w-64 bg-[#0d1b3e] text-white flex-shrink-0 flex flex-col z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="h-full flex flex-col justify-between">
          {/* Logo Header */}
          <div className="py-5 px-4 flex items-center justify-between border-b border-white/10 flex-shrink-0 bg-[#0d1b3e]">
            <Link href="/" className="block hover:opacity-90 transition-opacity">
              <img
                src="/TusharLogo.png"
                alt="Tushar Garg Advocate"
                className="h-12 sm:h-14 w-auto object-contain max-w-[195px]"
              />
            </Link>
            <button 
              onClick={() => setSidebarOpen(false)} 
              className="md:hidden text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X size={22} />
            </button>
          </div>
          
          {/* Nav Items - Independent Scroll if links exceed screen height */}
          <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto tab-custom-scroller">
            {navItems.map((item) => {
              const isActive = item.href === "/admin/dashboard"
                ? pathname === "/admin/dashboard"
                : pathname === item.href || pathname?.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    if (typeof window !== "undefined" && window.innerWidth < 768) {
                      setSidebarOpen(false);
                    }
                  }}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive 
                      ? "bg-[#c9a84c] text-[#0d1b3e] shadow-md font-bold" 
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon size={17} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile & Logout - Pinned to bottom */}
          <div className="p-4 border-t border-white/10 flex-shrink-0 bg-[#09142e]">
            <div className="flex items-center gap-3 px-3 py-2 mb-2 bg-white/5 rounded-lg border border-white/5">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c] text-[#0d1b3e] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                {adminUser.name?.charAt(0) || "A"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">{adminUser.name}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                    isSuperAdmin 
                      ? "bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30" 
                      : "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                  }`}>
                    {isSuperAdmin ? "Super Admin" : (adminUser.role || "Sub-Admin")}
                  </span>
                </div>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-red-400 hover:bg-red-400/10 transition-colors cursor-pointer border border-red-400/20"
            >
              <LogOut size={15} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area - Offset by Sidebar Width (md:ml-64) */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-64 min-h-screen bg-gray-50">
        {/* Mobile Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-4 md:hidden sticky top-0 z-30 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <Menu size={24} />
            </button>
            <Link href="/" className="block">
              <img src="/TusharLogo.png" alt="Tushar Garg Advocate" className="h-10 w-auto object-contain" />
            </Link>
          </div>
          <span className="text-xs font-bold text-[#0d1b3e] bg-[#c9a84c]/20 px-2.5 py-1 rounded-md">
            {isSuperAdmin ? "Super Admin" : "Admin Portal"}
          </span>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8">
          {isCurrentRouteAllowed ? (
            children
          ) : (
            <div className="bg-white rounded-2xl border border-red-200 p-8 text-center max-w-lg mx-auto my-16 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-4 shadow-inner">
                <ShieldAlert size={32} />
              </div>
              <h2 className="text-xl font-bold text-[#0d1b3e] mb-2 font-serif">Access Restricted</h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Your account does not have permission to access this module. Please contact the Super Admin to request permission.
              </p>
              <Link 
                href="/admin/dashboard"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0d1b3e] text-white text-xs font-bold hover:bg-[#1a336e] transition-colors shadow-sm"
              >
                Return to Dashboard
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

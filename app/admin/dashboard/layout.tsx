"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Map,
  Scale, 
  Sliders,
  Gavel,
  BookOpen,
  FileText,
  MessageSquareQuote,
  Landmark,
  Briefcase,
  GraduationCap,
  LogOut, 
  Menu,
  X
} from "lucide-react";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [adminUser, setAdminUser] = useState<any>(null);

  useEffect(() => {
    // Basic auth check
    const token = localStorage.getItem("adminToken");
    const adminData = localStorage.getItem("adminData");
    
    if (!token || !adminData) {
      router.push("/admin");
    } else {
      try {
        setAdminUser(JSON.parse(adminData));
      } catch (e) {
        console.error("Error parsing adminData", e);
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminData");
        router.push("/admin");
      }
    }
  }, [router]);

  if (!adminUser) return null; // Loading state

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Manage Hero Section", href: "/admin/dashboard/hero", icon: Sliders },
    { name: "Manage Judgments", href: "/admin/dashboard/judgments", icon: Gavel },
    { name: "Manage Law Categories", href: "/admin/dashboard/laws-categories", icon: BookOpen },
    { name: "Manage Articles", href: "/admin/dashboard/articles", icon: FileText },
    { name: "Manage Testimonials", href: "/admin/dashboard/testimonials", icon: MessageSquareQuote },
    { name: "Manage Tribunals", href: "/admin/dashboard/tribunals", icon: Landmark },
    { name: "Manage Jobs", href: "/admin/dashboard/jobs", icon: Briefcase },
    { name: "Manage Colleges", href: "/admin/dashboard/colleges", icon: GraduationCap },
    { name: "Manage Judiciary", href: "/admin/dashboard/judiciary", icon: GraduationCap },
    { name: "Manage Resources", href: "/admin/dashboard/resources", icon: BookOpen },
    { name: "Manage States", href: "/admin/dashboard/states", icon: Map },
    { name: "Manage Courts", href: "/admin/dashboard/courts", icon: Scale },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    router.push("/admin");
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-50 flex">
      {/* Sidebar - Fixed Position */}
      <aside className={`fixed md:sticky top-0 h-screen bg-[#0d1b3e] w-64 text-white flex-shrink-0 flex flex-col z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center justify-between border-b border-white/10 flex-shrink-0">
            <h2 className="text-xl font-serif font-bold text-[#c9a84c] tracking-wide">ADMIN PANEL</h2>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-white/70 hover:text-white">
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = item.href === "/admin/dashboard"
                ? pathname === "/admin/dashboard"
                : pathname === item.href || pathname?.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                    isActive 
                      ? "bg-[#c9a84c] text-[#0d1b3e]" 
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon size={17} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-white/10 flex-shrink-0">
            <div className="flex items-center gap-3 px-4 py-2.5 mb-2 bg-white/5 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c] text-[#0d1b3e] flex items-center justify-center font-bold text-xs flex-shrink-0">
                {adminUser.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">{adminUser.name}</p>
                <p className="text-[10px] text-white/50 truncate">{adminUser.role}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-bold text-red-400 hover:bg-red-400/10 transition-colors"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content - Independent Scroll */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center px-4 md:hidden flex-shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Menu size={24} />
          </button>
          <span className="ml-4 font-serif font-bold text-[#0d1b3e]">TUSHAR GARG ADVOCATE</span>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
          {children}
        </div>
      </main>
    </div>
  );
}

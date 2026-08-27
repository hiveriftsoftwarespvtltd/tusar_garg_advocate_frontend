"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Map,
  Scale, 
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
      setAdminUser(JSON.parse(adminData));
    }
  }, [router]);

  if (!adminUser) return null; // Loading state

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Manage States", href: "/admin/dashboard/states", icon: Map },
    { name: "Manage Courts", href: "/admin/dashboard/courts", icon: Scale },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 bg-[#0d1b3e] w-64 text-white transform transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <h2 className="text-xl font-serif font-bold text-[#c9a84c] tracking-wide">ADMIN PANEL</h2>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-white/70 hover:text-white">
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = item.href === "/admin/dashboard"
                ? pathname === "/admin/dashboard"
                : pathname === item.href || pathname?.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-[#c9a84c] text-[#0d1b3e]" 
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 px-4 py-3 mb-2 bg-white/5 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-[#c9a84c] text-[#0d1b3e] flex items-center justify-center font-bold text-sm">
                {adminUser.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{adminUser.name}</p>
                <p className="text-xs text-white/50 truncate">{adminUser.role}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-400/10 transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center px-4 md:hidden">
          <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Menu size={24} />
          </button>
          <span className="ml-4 font-serif font-bold text-[#0d1b3e]">TUSHAR GARG ADVOCATE</span>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

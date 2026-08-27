"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import ProductionPopup from "./ProductionPopup";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdmin && <ProductionPopup />}
      {!isAdmin && <Header />}
      
      <div className="flex-1">
        {children}
      </div>
      
      {!isAdmin && <Footer />}
    </>
  );
}

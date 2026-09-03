"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Landmark, Scale, Leaf, ShoppingCart, Home, PiggyBank, Receipt, FileText, BadgePercent, Users, Handshake, TrendingUp, Radio, ArrowRight, RefreshCw } from "lucide-react";
import { fetchApi } from "../../../lib/api/client";

const defaultTribunals = [
  { abbr: "NCLT", slug: "nclt", name: "National Company\nLaw Tribunal", logoUrl: "/home/trubinals_&_forum/nclt.svg" },
  { abbr: "NCLAT", slug: "nclat", name: "National Company\nLaw Appellate Tribunal", logoUrl: "/home/trubinals_&_forum/nclat.svg" },
  { abbr: "NGT", slug: "ngt", name: "National Green\nTribunal", logoUrl: "/home/trubinals_&_forum/NGT.svg" },
  { abbr: "NCDRC", slug: "ncdrc", name: "National Consumer\nDisputes Redressal\nCommission", logoUrl: "/home/trubinals_&_forum/ncdrc.svg" },
  { abbr: "RERA", slug: "rera", name: "Real Estate Regulatory\nAuthority", logoUrl: "/home/trubinals_&_forum/rera.svg" },
  { abbr: "DRT", slug: "drt", name: "Debt Recovery\nTribunals", logoUrl: "/home/trubinals_&_forum/DRT.svg" },
  { abbr: "DRAT", slug: "drat", name: "Debt Recovery Appellate\nTribunals", logoUrl: "/home/trubinals_&_forum/drat.svg" },
  { abbr: "ITAT", slug: "itat", name: "Income Tax Appellate\nTribunal", logoUrl: "/home/trubinals_&_forum/itat.svg" },
  { abbr: "CESTAT", slug: "cestat", name: "Customs, Excise & Service Tax\nAppellate Tribunal", logoUrl: "/home/trubinals_&_forum/cestat.svg" },
  { abbr: "CAT", slug: "cat", name: "Central Administrative\nTribunal", logoUrl: "/home/trubinals_&_forum/CAT.svg" },
  { abbr: "AFT", slug: "aft", name: "Appellate Tribunal\nfor Forfeited Property", logoUrl: "/home/trubinals_&_forum/AFT.svg" },
  { abbr: "SAT", slug: "sat", name: "Securities Appellate\nTribunal", logoUrl: "/home/trubinals_&_forum/sat.svg" },
  { abbr: "TDSAT", slug: "tdsat", name: "Telecom Disputes Settlement\n& Appellate Tribunal", logoUrl: "/home/trubinals_&_forum/tsat.svg" }
];

export default function TribunalsDirectory() {
  const [tribunals, setTribunals] = useState<any[]>(defaultTribunals);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchApi('/tribunals');
        if (data && Array.isArray(data) && data.length > 0) {
          setTribunals(data);
        }
      } catch (err) {
        console.error("Failed to load tribunals from API", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <section className="py-12 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Heading */}
        <div className="flex flex-col items-start mb-8">
          <h2 className="font-serif text-[16px] md:text-[18px] text-[#0d1b3e] uppercase tracking-[0.1em] mb-2">
            TRIBUNALS DIRECTORY
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c]"></div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[250px] text-gray-500 font-medium gap-2">
            <RefreshCw className="animate-spin" size={20} /> Loading Tribunals Directory...
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {tribunals.map((tribunal, idx) => (
              <Link
                key={tribunal._id || idx}
                href={`/tribunals/${tribunal.slug || tribunal.abbr.toLowerCase()}`}
                className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] lg:w-[calc(20%-13px)] bg-white border border-[#e8ebf2] rounded-xl p-5 flex flex-col items-center justify-between text-center shadow-sm hover:shadow-md hover:border-[#c9a84c]/50 transition-all duration-300 group cursor-pointer overflow-hidden relative min-h-[240px]"
              >
                {/* Logo Box with strict containment */}
                <div className="w-full h-[64px] flex items-center justify-center mb-3 overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                  {tribunal.logoUrl ? (
                    <img 
                      src={tribunal.logoUrl} 
                      alt={tribunal.abbr} 
                      className="max-h-[56px] max-w-[110px] w-auto h-auto object-contain"
                    />
                  ) : (
                    <Landmark size={36} className="text-[#c9a84c]" strokeWidth={1.5} />
                  )}
                </div>
                
                <h3 className="text-[14px] md:text-[15px] font-semibold text-[#0d1b3e] mb-1 tracking-wide group-hover:text-[#c9a84c] transition-colors">
                  {tribunal.abbr}
                </h3>
                
                <p className="text-[10px] md:text-[11px] font-medium text-[#6b7280] mb-4 leading-tight whitespace-pre-line flex-1 flex items-center justify-center">
                  {tribunal.name}
                </p>

                <div className="flex items-center justify-center w-[90%] gap-2 border border-[#d1d5db] text-[#374151] py-2 rounded-md text-[10px] font-bold uppercase tracking-wider group-hover:bg-[#0d1b3e] group-hover:text-white group-hover:border-[#0d1b3e] transition-all mt-auto">
                  <span>VIEW DETAILS</span>
                  <ArrowRight size={12} strokeWidth={2.5} />
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

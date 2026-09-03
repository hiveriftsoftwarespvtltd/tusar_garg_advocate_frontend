"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  BookOpen, 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  Gavel,
  Scale,
  FileText,
  RefreshCw
} from "lucide-react";
import { fetchApi } from "../../../lib/api/client";

export default function TribunalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug.toLowerCase();

  const [tribunal, setTribunal] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDetail() {
      try {
        const data = await fetchApi(`/tribunals/slug/${slug}`);
        if (data && data.abbr) {
          setTribunal(data);
        }
      } catch (err) {
        console.error("Failed to load tribunal detail from backend", err);
      } finally {
        setLoading(false);
      }
    }
    loadDetail();
  }, [slug]);

  const item = tribunal || {
    abbr: slug.toUpperCase(),
    name: `${slug.toUpperCase()} Tribunal / Authority`,
    tagline: "Specialized Adjudicatory Forum across India",
    established: "Established under Statutory Enactment",
    statute: "Relevant Central/State Enactment",
    ministry: "Government of India / State Government",
    jurisdiction: "Pan-India / Regional Jurisdiction",
    website: "https://main.sci.gov.in",
    logoUrl: `/home/trubinals_&_forum/${slug}.svg`,
    description: `Detailed information and official record for ${slug.toUpperCase()} tribunal. This quasi-judicial forum handles specialized litigation, appeals, and statutory remedies under Indian federal laws.`,
    benches: [
      { name: "Principal Bench", location: "New Delhi", type: "Apex Bench" },
      { name: "Regional Benches", location: "Major Metro Cities", type: "Division Benches" }
    ],
    keyMatters: [
      "Specialized statutory litigation and appeals",
      "Enforcement of regulatory directives and public compliance",
      "Appellate review of administrative decisions"
    ],
    recentOrders: [
      { title: `Notice & Orders by ${slug.toUpperCase()}`, date: "May 2025", bench: "Principal Bench", orderNo: "Order Ref No. 101/2025" }
    ]
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fafafa] flex items-center justify-center text-gray-500 font-medium gap-2">
        <RefreshCw className="animate-spin" size={20} /> Loading Tribunal Information...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      
      {/* 1. Top Header Banner */}
      <section className="bg-[#0d1b3e] text-white pt-12 pb-16 relative overflow-hidden border-b border-[#c9a84c]/30">
        <div className="max-w-[1280px] mx-auto px-4 relative z-10">
          
          {/* Back Button & Breadcrumbs */}
          <div className="flex items-center gap-3 text-xs text-[#c9a84c] font-bold tracking-wider uppercase mb-6">
            <Link 
              href="/tribunals" 
              className="flex items-center gap-1 hover:underline text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} /> Back to Tribunals Directory
            </Link>
            <span>•</span>
            <span className="text-[#c9a84c] font-bold">{item.abbr}</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#071126] font-extrabold text-[11px] uppercase tracking-widest px-3 py-1 rounded-md shadow-md">
                {item.abbr}
              </div>
              <h1 className="font-serif text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-white leading-tight uppercase">
                {item.name}
              </h1>
              <p className="text-[#c9a84c] text-[14px] sm:text-[16px] font-medium leading-relaxed">
                {item.tagline}
              </p>
            </div>

            {/* Official Website CTA */}
            {item.website && (
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a84c] hover:bg-[#d4b975] text-[#071126] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl transition-all flex-shrink-0"
              >
                <span>Official Government Portal</span>
                <ExternalLink size={15} strokeWidth={2.5} />
              </a>
            )}
          </div>

        </div>
      </section>

      {/* 2. Main Content Grid */}
      <div className="max-w-[1280px] mx-auto px-4 py-12 space-y-10">
        
        {/* Quick Statutory Fact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-wider text-gray-400">Establishment</p>
              <p className="text-[13.5px] font-bold text-[#0d1b3e] mt-0.5">{item.established || "Statutory Entry"}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-wider text-gray-400">Governing Statute</p>
              <p className="text-[13.5px] font-bold text-[#0d1b3e] mt-0.5 line-clamp-1">{item.statute || "Statutory Act"}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
              <Building2 size={20} />
            </div>
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-wider text-gray-400">Nodal Ministry</p>
              <p className="text-[13.5px] font-bold text-[#0d1b3e] mt-0.5 line-clamp-1">{item.ministry || "Govt. of India"}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center flex-shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-wider text-gray-400">Jurisdiction</p>
              <p className="text-[13.5px] font-bold text-[#0d1b3e] mt-0.5 line-clamp-1">{item.jurisdiction || "Pan-India"}</p>
            </div>
          </div>
        </div>

        {/* Overview & Key Practice Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Overview & Key Matters */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview Box */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="font-serif text-[20px] font-bold text-[#0d1b3e] flex items-center gap-2">
                <Scale className="text-[#c9a84c]" size={22} /> About & Statutory Function
              </h2>
              <div className="w-12 h-1 bg-[#c9a84c] rounded-full" />
              <p className="text-gray-700 text-[14px] leading-relaxed font-medium">
                {item.description}
              </p>
            </div>

            {/* Key Matters / Subject Jurisdiction */}
            {item.keyMatters && item.keyMatters.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-[20px] font-bold text-[#0d1b3e] flex items-center gap-2">
                  <Gavel className="text-[#c9a84c]" size={22} /> Key Subject Jurisdiction & Remedies
                </h2>
                <div className="w-12 h-1 bg-[#c9a84c] rounded-full" />
                <div className="space-y-3 pt-2">
                  {item.keyMatters.map((m: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <CheckCircle2 size={18} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                      <span className="text-[13.5px] font-bold text-[#0d1b3e]">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benches Table */}
            {item.benches && item.benches.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
                <h2 className="font-serif text-[20px] font-bold text-[#0d1b3e] flex items-center gap-2">
                  <Building2 className="text-[#c9a84c]" size={22} /> Benches & Territorial Divisions
                </h2>
                <div className="w-12 h-1 bg-[#c9a84c] rounded-full" />
                
                <div className="overflow-x-auto pt-2">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#0d1b3e] text-white">
                      <tr>
                        <th className="p-3.5 text-xs font-bold uppercase tracking-wider">Bench Name</th>
                        <th className="p-3.5 text-xs font-bold uppercase tracking-wider">Location</th>
                        <th className="p-3.5 text-xs font-bold uppercase tracking-wider">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {item.benches.map((bench: any, idx: number) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="p-3.5 font-bold text-[#0d1b3e]">{bench.name}</td>
                          <td className="p-3.5 text-gray-600 font-medium">{bench.location}</td>
                          <td className="p-3.5">
                            <span className="bg-[#0d1b3e]/5 text-[#c9a84c] border border-[#c9a84c]/30 text-[10.5px] font-bold px-2.5 py-0.5 rounded">
                              {bench.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Recent Orders & Quick Legal Actions */}
          <div className="space-y-8">
            
            {/* Quick Consultation Callout */}
            <div className="bg-[#0d1b3e] text-white rounded-2xl p-6 border border-[#c9a84c]/40 shadow-xl space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#c9a84c] text-[#071126] flex items-center justify-center mx-auto font-serif font-bold text-xl">
                TG
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Supreme Court & Tribunal Practice</h3>
              <p className="text-xs text-gray-300 leading-relaxed font-medium">
                Advocate Tushar Garg (AOR) represents corporate debtors, financial creditors, homebuyers, and litigants before {item.abbr} and appellate forums.
              </p>
              <Link 
                href="/contact" 
                className="block bg-[#c9a84c] hover:bg-[#d4b975] text-[#071126] font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md"
              >
                Schedule Legal Consultation
              </Link>
            </div>

            {/* Recent Orders List */}
            {item.recentOrders && item.recentOrders.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
                <h3 className="font-serif font-bold text-[#0d1b3e] text-base flex items-center gap-2 border-b border-gray-100 pb-3">
                  <FileText size={18} className="text-[#c9a84c]" /> Latest Pronouncements
                </h3>
                
                <div className="space-y-4">
                  {item.recentOrders.map((order: any, idx: number) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-1.5 hover:border-[#c9a84c]/50 transition-colors">
                      <p className="font-bold text-[#0d1b3e] text-xs leading-snug">{order.title}</p>
                      <p className="text-[11px] text-gray-500 font-medium">{order.orderNo}</p>
                      <div className="flex items-center justify-between text-[10.5px] text-gray-400 pt-1">
                        <span>{order.bench}</span>
                        <span className="text-[#c9a84c] font-bold">{order.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </main>
  );
}

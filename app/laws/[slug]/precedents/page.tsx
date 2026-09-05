import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Gavel,
  BookOpen,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Phone,
  MessageSquare,
  Scale
} from "lucide-react";
import { getCategoryDetail } from "../../data/lawsData";
import PrecedentsViewClient from "./PrecedentsViewClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const detail = getCategoryDetail(slug);

  return {
    title: `Landmark Supreme Court Precedents (1950–Present) | ${detail.name} - Advocate Tushar Garg`,
    description: `Comprehensive repository of ${detail.stats.precedentsCount} landmark Supreme Court & High Court judgments from 1950 to present day under ${detail.name}. Ratio decidendi, legal citations, and AOR litigation principles.`,
    openGraph: {
      title: `${detail.name} — Apex Court Precedents (1950–Present)`,
      description: detail.subtitle || detail.overview.slice(0, 160),
      images: [detail.image],
    },
  };
}

export default async function CategoryPrecedentsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) {
    notFound();
  }

  const detail = getCategoryDetail(slug);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#071126] text-white py-16 px-4 sm:px-6 overflow-hidden border-b border-[#c9a84c]/20">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-[#c9a84c]_1px,transparent_1px] [background-size:24px_24px]" />

        <div className="max-w-[1350px] mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <nav className="flex items-center gap-2 text-[12.5px] font-medium text-gray-400 flex-wrap">
              <Link href="/" className="hover:text-[#c9a84c] transition-colors">
                Home
              </Link>
              <ChevronRight size={13} className="text-gray-500" />
              <Link href="/laws" className="hover:text-[#c9a84c] transition-colors">
                Laws & Practice Areas
              </Link>
              <ChevronRight size={13} className="text-gray-500" />
              <Link href={`/laws/${detail.slug}`} className="hover:text-[#c9a84c] transition-colors">
                {detail.name}
              </Link>
              <ChevronRight size={13} className="text-gray-500" />
              <span className="text-[#c9a84c] font-semibold">Apex Precedents (1950–Present)</span>
            </nav>

            <Link
              href={`/laws/${detail.slug}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#c9a84c] hover:text-[#071126] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/20 shadow-md backdrop-blur-md"
            >
              <ArrowLeft size={14} />
              <span>Back to {detail.name} Overview</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/50 px-4 py-1.5 rounded-full text-[#c9a84c] text-[11px] font-extrabold tracking-widest uppercase shadow-md">
                <Gavel size={14} />
                <span>SUPREME COURT BENCH RULINGS & LANDMARK CASE LAW</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight uppercase">
                {detail.name} — <span className="text-[#c9a84c]">{detail.stats.precedentsCount} Apex Precedents (1950–2026)</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
                Authoritative repository of landmark Supreme Court judgments, Constitution Bench rulings, AOR legal ratios, and binding legal principles under {detail.name} spanning from 1950 to present day.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 text-xs font-bold text-white flex items-center gap-2">
                  <Award size={15} className="text-[#c9a84c]" />
                  <span>1950 – 2026 Chronological Archive</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 text-xs font-bold text-white flex items-center gap-2">
                  <Gavel size={15} className="text-[#c9a84c]" />
                  <span>13-Judge & 9-Judge Constitution Benches</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 text-xs font-bold text-white flex items-center gap-2">
                  <Scale size={15} className="text-[#c9a84c]" />
                  <span>Binding Ratio Decidendi (Art 141)</span>
                </div>
              </div>
            </div>

            {/* Right Consultation Card */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-b from-[#0d1b3e] to-[#09142e] border border-[#c9a84c]/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c] flex items-center justify-center text-[#c9a84c]">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif font-bold text-base uppercase">
                      Chamber of Advocate Tushar Garg
                    </h3>
                    <p className="text-[#c9a84c] text-[11.5px] font-medium">
                      Advocate-on-Record, Supreme Court of India
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-[12.5px] leading-relaxed mb-4 border-t border-b border-white/10 py-3">
                  Need expert precedent analysis, binding citation research, or Supreme Court representation?
                </p>

                <div className="space-y-2.5">
                  <a
                    href="tel:+919818000000"
                    className="w-full flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b5953d] text-[#071126] font-bold py-2.5 px-4 rounded-xl transition-colors text-[12.5px] uppercase tracking-wider shadow-lg"
                  >
                    <Phone size={14} />
                    <span>Call Chamber</span>
                  </a>

                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 px-4 rounded-xl border border-white/20 transition-colors text-[12.5px]"
                  >
                    <MessageSquare size={14} />
                    <span>Book Legal Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE PRECEDENTS CLIENT COMPONENT */}
      <PrecedentsViewClient detail={detail} />
    </main>
  );
}

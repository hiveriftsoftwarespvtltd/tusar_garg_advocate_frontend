import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Scale,
  FileText,
  BookOpen,
  Gavel,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Phone,
  ShieldCheck,
  Search,
  Sparkles,
  ChevronRight,
  Building2,
  Award,
  Layers
} from "lucide-react";
import { getCategoryDetail, LAWS_CATEGORY_DATA } from "../data/lawsData";
import LawCategoryInteractiveView from "./LawCategoryInteractiveView";

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
    title: `${detail.name} | Bare Acts, Precedents & Legal Guidance - Advocate Tushar Garg`,
    description: detail.subtitle || detail.overview.slice(0, 160),
    openGraph: {
      title: `${detail.name} - Bare Acts & Legal Practice`,
      description: detail.overview.slice(0, 160),
      images: [detail.image],
    },
  };
}

export default async function LawCategoryPage({ params }: PageProps) {
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
        {/* Background Overlay Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-[#c9a84c]_1px,transparent_1px] [background-size:24px_24px]" />

        <div className="max-w-[1350px] mx-auto relative z-10">
          {/* Top Bar with Breadcrumb and Back Button */}
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
              <span className="text-[#c9a84c] font-semibold">{detail.name}</span>
            </nav>

            <Link
              href="/laws"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#c9a84c] hover:text-[#071126] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/20 shadow-md backdrop-blur-md"
            >
              <ArrowLeft size={14} />
              <span>Back to All Laws & Practice Areas</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-sm">
                <Scale size={13} />
                <span>{detail.tag || "Indian Bare Acts Directory"}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight uppercase">
                {detail.name}
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
                {detail.subtitle}
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                <Link
                  href={`/laws/${slug}/acts`}
                  className="bg-white/10 hover:bg-[#c9a84c]/20 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/40 hover:border-[#c9a84c] text-center transition-all group shadow-md"
                  title={`View all ${detail.stats.actsCount} Bare Acts`}
                >
                  <div className="text-[#c9a84c] font-bold text-lg font-serif flex items-center justify-center gap-1 group-hover:scale-105 transition-transform">
                    <span>{detail.stats.actsCount}</span>
                    <ChevronRight size={14} className="text-[#c9a84c]" />
                  </div>
                  <div className="text-white group-hover:text-[#c9a84c] text-[11px] uppercase tracking-wider font-extrabold transition-colors">
                    Explore Bare Acts →
                  </div>
                </Link>

                <Link
                  href={`/laws/${slug}/sections`}
                  className="bg-white/10 hover:bg-[#c9a84c]/20 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/40 hover:border-[#c9a84c] text-center transition-all group shadow-md"
                  title={`View all key articles & sections for ${detail.name}`}
                >
                  <div className="text-[#c9a84c] font-bold text-lg font-serif flex items-center justify-center gap-1 group-hover:scale-105 transition-transform">
                    <span>{detail.stats.sectionsCount}</span>
                    <ChevronRight size={14} className="text-[#c9a84c]" />
                  </div>
                  <div className="text-white group-hover:text-[#c9a84c] text-[11px] uppercase tracking-wider font-extrabold transition-colors">
                    Explore Sections →
                  </div>
                </Link>

                <Link
                  href={`/laws/${slug}/precedents`}
                  className="bg-white/10 hover:bg-[#c9a84c]/20 backdrop-blur-md rounded-xl p-3 border border-[#c9a84c]/40 hover:border-[#c9a84c] text-center transition-all group shadow-md"
                  title={`View landmark precedents from 1950 to present for ${detail.name}`}
                >
                  <div className="text-[#c9a84c] font-bold text-lg font-serif flex items-center justify-center gap-1 group-hover:scale-105 transition-transform">
                    <span>{detail.stats.precedentsCount}</span>
                    <ChevronRight size={14} className="text-[#c9a84c]" />
                  </div>
                  <div className="text-white group-hover:text-[#c9a84c] text-[11px] uppercase tracking-wider font-extrabold transition-colors">
                    Apex Precedents →
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Card / CTA */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-b from-[#0d1b3e] to-[#09142e] border border-[#c9a84c]/40 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c] flex items-center justify-center text-[#c9a84c]">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif font-bold text-base uppercase">
                      Advocate Tushar Garg
                    </h3>
                    <p className="text-[#c9a84c] text-[11.5px] font-medium">
                      Advocate-on-Record (AOR), Supreme Court
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-[12.5px] leading-relaxed mb-5 border-t border-b border-white/10 py-3">
                  Need specialized legal advisory or court representation in{" "}
                  <strong className="text-white">{detail.name}</strong>? Get direct assistance from our chamber.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+919818000000"
                    className="w-full flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b5953d] text-[#071126] font-bold py-2.5 px-4 rounded-xl transition-colors text-[13px] uppercase tracking-wider shadow-lg"
                  >
                    <Phone size={15} />
                    <span>Call Chamber Office</span>
                  </a>

                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-2.5 px-4 rounded-xl border border-white/20 transition-colors text-[13px]"
                  >
                    <MessageSquareIcon size={15} />
                    <span>Book Legal Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CLIENT-SIDE COMPONENT */}
      <LawCategoryInteractiveView detail={detail} />
    </main>
  );
}

function MessageSquareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

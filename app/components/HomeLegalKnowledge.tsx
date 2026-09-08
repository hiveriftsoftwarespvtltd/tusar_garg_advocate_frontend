"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, RefreshCw } from "lucide-react";
import { fetchApi } from "../../lib/api/client";

const defaultArticles = [
  {
    title: "Bail Jurisprudence in India: Liberty & Societal Interests",
    category: "CRIMINAL LAW",
    date: "18 May 2025",
    time: "6 min read",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=600&q=80",
    link: "/articles"
  },
  {
    title: "How to Draft an Effective Writ Petition for High Courts",
    category: "PRACTICE GUIDE",
    date: "17 May 2025",
    time: "7 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    link: "/articles"
  },
  {
    title: "Arbitration & Conciliation Act: Key Statutory Amendments",
    category: "COMMERCIAL ADR",
    date: "16 May 2025",
    time: "9 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    link: "/articles"
  },
  {
    title: "Understanding Section 319 CrPC: Power to Summon Accused",
    category: "PROCEDURAL LAW",
    date: "15 May 2025",
    time: "5 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    link: "/articles"
  }
];

function slugifyTitle(text: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function HomeLegalKnowledge() {
  const [articles, setArticles] = useState<any[]>(defaultArticles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchApi('/articles');
        if (data && Array.isArray(data) && data.length > 0) {
          const featured = data.filter(a => a.isFeatured !== false).slice(0, 4);
          setArticles(featured.length > 0 ? featured : data.slice(0, 4));
        }
      } catch (err) {
        console.error("Failed to load homepage articles", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#0d1b3e]/5 border border-[#c9a84c]/30 px-3.5 py-1 rounded-full mb-3">
              <BookOpen size={13} className="text-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10.5px] font-bold tracking-widest uppercase">
                LEGAL INSIGHTS & EXPLAINERS
              </span>
            </div>
            <h2 className="font-serif text-[#0d1b3e] text-[24px] sm:text-[30px] font-bold uppercase tracking-tight">
              LEGAL KNOWLEDGE & INSIGHTS
            </h2>
            <div className="w-14 h-1 bg-[#c9a84c] mt-2 rounded-full" />
          </div>

          <Link 
            href="/articles" 
            className="btn-shine-effect inline-flex items-center gap-2 text-[12px] font-bold text-[#0d1b3e] hover:text-white bg-[#c9a84c]/15 hover:bg-[#0d1b3e] border border-[#c9a84c]/40 hover:border-[#c9a84c] px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] group"
          >
            <span>EXPLORE ALL ARTICLES</span>
            <ArrowRight size={13} strokeWidth={2.5} className="text-[#c9a84c] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        {loading ? (
          <div className="flex items-center justify-center min-h-[250px] text-gray-500 font-medium gap-2">
            <RefreshCw className="animate-spin" size={20} /> Loading articles...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, idx) => {
              const slug = article.title ? slugifyTitle(article.title) : (article._id || '');
              const articleHref = `/articles?title=${encodeURIComponent(slug)}`;

              return (
                <Link 
                  key={article._id || idx} 
                  href={articleHref}
                  className="group bg-white border border-gray-200 hover:border-[#c9a84c] rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                <div>
                  {/* Image Container - Full bleed edge-to-edge, zero padding on all 4 sides */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={article.image || "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80"}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="mb-2.5">
                      <span className="inline-block bg-[#0d1b3e] text-[#c9a84c] border border-[#c9a84c]/40 font-bold text-[9.5px] uppercase tracking-widest px-2.5 py-0.5 rounded-md shadow-xs">
                        {article.category || "ARTICLE"}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-[#0d1b3e] text-[16px] leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 pb-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-[#c9a84c]" /> {article.date || "May 2025"}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0d1b3e] bg-[#c9a84c]/20 group-hover:bg-[#c9a84c] px-2.5 py-1 rounded-md transition-colors">
                    <span>Read Article</span>
                    <ArrowRight size={11} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
          </div>
        )}

      </div>
    </section>
  );
}

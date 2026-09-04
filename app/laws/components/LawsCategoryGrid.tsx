"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Scale, RefreshCw } from "lucide-react";
import { fetchApi } from "../../../lib/api/client";

function getCategorySlug(name: string): string {
  if (!name) return "";
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

const defaultCategories = [
  { 
    name: "Constitutional Law", 
    acts: "18 Acts", 
    sections: "245 Sections", 
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    tag: "Apex Court & Writs"
  },
  { 
    name: "Criminal Law", 
    acts: "35 Acts", 
    sections: "1,248 Sections", 
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=600&q=80",
    tag: "Bail & IPC"
  },
  { 
    name: "Civil Law", 
    acts: "28 Acts", 
    sections: "1,987 Sections", 
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    tag: "CPC & Suits"
  },
  { 
    name: "Corporate Law", 
    acts: "52 Acts", 
    sections: "2,105 Sections", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    tag: "Companies Act & NCLT"
  },
  { 
    name: "Tax Law", 
    acts: "25 Acts", 
    sections: "1,056 Sections", 
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    tag: "GST & Income Tax"
  },
  { 
    name: "Property Law", 
    acts: "22 Acts", 
    sections: "845 Sections", 
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    tag: "Land & Transfer"
  },
  { 
    name: "Family Law", 
    acts: "15 Acts", 
    sections: "532 Sections", 
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80",
    tag: "Hindu & Muslim Law"
  },
  { 
    name: "Labour Law", 
    acts: "29 Acts", 
    sections: "1,126 Sections", 
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80",
    tag: "Industrial & CAT"
  },
  { 
    name: "Arbitration Law", 
    acts: "14 Acts", 
    sections: "356 Sections", 
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    tag: "ADR & Conciliation"
  },
  { 
    name: "Insolvency & Bankruptcy", 
    acts: "10 Acts", 
    sections: "387 Sections", 
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    tag: "IBC 2016"
  },
  { 
    name: "Consumer Law", 
    acts: "8 Acts", 
    sections: "263 Sections", 
    image: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=600&q=80",
    tag: "Consumer Protection"
  },
  { 
    name: "Environment Law", 
    acts: "12 Acts", 
    sections: "421 Sections", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    tag: "NGT & Forest Acts"
  },
];

export default function LawsCategoryGrid() {
  const [categories, setCategories] = useState<any[]>(defaultCategories);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await fetchApi('/laws-categories');
        if (data && Array.isArray(data) && data.length > 0) {
          setCategories(data);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic laws categories", err);
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  return (
    <section className="py-14 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#0d1b3e]/5 border border-[#c9a84c]/30 px-3.5 py-1 rounded-full mb-3 shadow-inner">
            <Scale size={13} className="text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10.5px] font-bold tracking-widest uppercase">
              INDIAN BARE ACTS DIRECTORY
            </span>
          </div>
          <h2 className="font-serif text-[24px] sm:text-[30px] font-bold text-[#0d1b3e] uppercase tracking-tight">
            PRACTICE AREAS DIRECTORY
          </h2>
          <div className="w-14 h-1 bg-[#c9a84c] mx-auto mt-2 rounded-full" />
        </div>

        {/* Image Overlay Grid */}
        {loading ? (
          <div className="flex items-center justify-center min-h-[300px] text-gray-500 font-medium gap-2">
            <RefreshCw className="animate-spin" size={20} /> Loading categories...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const slug = cat.slug || getCategorySlug(cat.name);
              return (
                <Link
                  key={cat._id || idx}
                  href={`/laws/${slug}`}
                  className="group relative h-[280px] rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:border-[#c9a84c] transition-all duration-500 flex flex-col justify-between p-6 cursor-pointer hover:-translate-y-1.5 block"
                >
                  {/* High Resolution Background Image */}
                  <Image
                    src={cat.image || "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80"}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Contrast Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071126] via-[#071126]/75 to-black/40" />

                  {/* Top Badge Tag */}
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span className="bg-[#0d1b3e] text-[#c9a84c] border border-[#c9a84c]/50 font-bold text-[10.5px] uppercase tracking-widest px-3 py-1 rounded-lg shadow-md">
                      {cat.tag || "Legal Category"}
                    </span>
                    <span className="text-white/80 text-[11px] font-bold bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                      {cat.acts || "10+ Acts"}
                    </span>
                  </div>

                  {/* Bottom Card Content */}
                  <div className="relative z-10 w-full mt-auto">
                    <h3 className="text-white font-serif font-bold text-[17px] leading-snug uppercase tracking-wide mb-1 group-hover:text-[#c9a84c] transition-colors drop-shadow-md">
                      {cat.name}
                    </h3>
                    <p className="text-gray-300 text-[12px] font-medium flex items-center gap-1">
                      <span>{cat.sections || "Sections Included"}</span>
                      <span className="text-[#c9a84c]">• Bare Acts & Precedents</span>
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                      <span className="text-[11px] font-bold text-[#c9a84c] uppercase tracking-wider group-hover:underline">
                        Explore Bare Acts
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#c9a84c] text-[#071126] flex items-center justify-center shadow-md group-hover:bg-white transition-colors">
                        <ArrowRight size={13} strokeWidth={2.5} />
                      </div>
                    </div>
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

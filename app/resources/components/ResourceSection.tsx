"use client";

import { BookOpen, Scale, FileText, ArrowRight, ChevronRight } from "lucide-react";
import { ResourceData } from "../page";

export interface ResourceSectionProps {
  title: string;
  items: ResourceData[];
  onSelect: (item: ResourceData) => void;
}

export default function ResourceSection({ title, items, onSelect }: ResourceSectionProps) {
  if (!items || items.length === 0) return null;

  const featured = items[0];
  const listItems = items.slice(1);

  return (
    <section className="mb-10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5 border-b border-[#e8ebf2] pb-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-6 bg-[#c9a84c] rounded-full"></div>
          <h2 className="font-serif text-[16px] md:text-[18px] text-[#0d1b3e] font-bold uppercase tracking-[0.05em]">
            {title} ({items.length})
          </h2>
        </div>
        <span className="text-[11px] font-bold text-[#c9a84c] bg-[#0d1b3e]/5 px-2.5 py-1 rounded-md">
          Interactive Knowledge Guides
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Featured Card */}
        {featured && (
          <div 
            onClick={() => onSelect(featured)}
            className="lg:w-1/2 rounded-2xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 min-h-[320px] bg-[#071126] border border-[#c9a84c]/20 flex flex-col justify-end p-6"
          >
            {/* Background Graphic Pattern */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"
              style={{ backgroundImage: `url('${featured.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#071126] via-[#071126]/80 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#071126] text-[9.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                <span>{featured.badge}</span>
              </div>

              <h3 className="text-[20px] md:text-[22px] font-serif font-bold text-white leading-snug group-hover:text-[#c9a84c] transition-colors">
                {featured.title}
              </h3>

              <p className="text-white/80 text-[12.5px] leading-relaxed line-clamp-2">
                {featured.desc}
              </p>
              
              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-white/70 text-[11px] font-medium">
                <div className="flex items-center gap-1.5 text-[#c9a84c]">
                  <BookOpen size={13} /> {featured.category}
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#c9a84c] group-hover:translate-x-1 transition-transform">
                  <span>Read Guide</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* List Items */}
        <div className="lg:w-1/2 flex flex-col gap-3">
          {listItems.length === 0 ? (
            <div 
              onClick={() => onSelect(featured)}
              className="bg-white border border-[#e8ebf2] rounded-2xl p-6 flex flex-col justify-center items-center text-center cursor-pointer hover:border-[#c9a84c] transition-all h-full"
            >
              <Scale size={32} className="text-[#c9a84c] mb-2" />
              <p className="text-xs font-bold text-[#0d1b3e]">Click card to read full legal guide</p>
            </div>
          ) : (
            listItems.map((item, idx) => (
              <div 
                key={(item as any)._id || item.id || idx} 
                onClick={() => onSelect(item)}
                className="flex items-center gap-4 group cursor-pointer border border-[#e8ebf2] rounded-xl p-4 hover:border-[#c9a84c]/60 hover:shadow-md transition-all bg-white"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0d1b3e]/5 text-[#c9a84c] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d1b3e] group-hover:text-white transition-colors">
                  {item.category === "Glossary" && <BookOpen size={20} />}
                  {item.category === "Maxims" && <Scale size={20} />}
                  {item.category === "Procedures" && <FileText size={20} />}
                </div>
                
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <h4 className="text-[13.5px] font-bold text-[#0d1b3e] leading-snug group-hover:text-[#c9a84c] transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[#6b7280] text-[11.5px] line-clamp-1 mt-0.5 font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-[#c9a84c] flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <span>View</span>
                  <ChevronRight size={15} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

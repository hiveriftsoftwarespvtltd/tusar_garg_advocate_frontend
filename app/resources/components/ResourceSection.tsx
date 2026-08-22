import { Calendar, ChevronRight, BookOpen } from "lucide-react";

type ResourceItem = {
  title: string;
  desc: string;
  category: string;
  date: string;
  image: string;
};

type ResourceSectionProps = {
  title: string;
  featured: {
    badge: string;
    title: string;
    desc: string;
    category: string;
    date: string;
    image: string;
  };
  items: ResourceItem[];
};

export default function ResourceSection({ title, featured, items }: ResourceSectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-5 border-b border-[#e8ebf2] pb-3">
        <h2 className="text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em]" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
          {title}
        </h2>
        <button className="text-[12px] font-bold text-[#6b7280] hover:text-[#c9a84c] transition-colors">
          View All
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Featured Card */}
        <div className="lg:w-1/2 rounded-xl overflow-hidden relative group cursor-pointer shadow-sm h-[320px]">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${featured.image}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] via-[#0d1b3e]/70 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="inline-block bg-[#c9a84c] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm mb-3 shadow-sm">
              {featured.badge}
            </span>
            <h3 
              className="text-[20px] md:text-[24px] font-bold text-white leading-tight mb-2 group-hover:text-[#c9a84c] transition-colors"
              style={{ fontFamily: "var(--font-roboto), sans-serif" }}
            >
              {featured.title}
            </h3>
            <p className="text-white/80 text-[13px] leading-relaxed mb-4 line-clamp-2 max-w-sm">
              {featured.desc}
            </p>
            
            <div className="flex items-center gap-4 text-white/70 text-[11px] font-medium">
              <div className="flex items-center gap-1.5">
                <BookOpen size={12} /> {featured.category}
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30"></div>
              <div className="flex items-center gap-1.5">
                <Calendar size={12} /> Updated: {featured.date}
              </div>
            </div>
          </div>
        </div>

        {/* List Items */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-4 group cursor-pointer border border-[#e8ebf2] rounded-xl p-3 hover:border-[#c9a84c]/50 hover:shadow-sm transition-all bg-white">
              <div className="w-[85px] h-[85px] rounded-lg overflow-hidden flex-shrink-0 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
              </div>
              
              <div className="flex flex-col justify-center flex-1 py-1">
                <h4 
                  className="text-[13.5px] font-bold text-[#0d1b3e] leading-snug mb-1 group-hover:text-[#c9a84c] transition-colors line-clamp-1"
                  style={{ fontFamily: "var(--font-roboto), sans-serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-[#6b7280] text-[11.5px] mb-2 line-clamp-1">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[#9ca3af] text-[10px] font-medium">
                    <div className="flex items-center gap-1.5">
                      <BookOpen size={10} /> {item.category}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[#e8ebf2]"></div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={10} /> {item.date}
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-[#9ca3af] group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

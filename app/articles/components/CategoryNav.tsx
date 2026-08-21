import { Scale, Gavel, BookOpen, Lightbulb, GraduationCap, MessageCircle, FileSearch, Users } from "lucide-react";

export default function CategoryNav() {
  const categories = [
    { name: "Legal Analysis", icon: <Scale size={24} strokeWidth={1.2} /> },
    { name: "Case Notes", icon: <Gavel size={24} strokeWidth={1.2} /> },
    { name: "Practice Guides", icon: <BookOpen size={24} strokeWidth={1.2} /> },
    { name: "Explainers", icon: <Lightbulb size={24} strokeWidth={1.2} /> },
    { name: "Legal Education", icon: <GraduationCap size={24} strokeWidth={1.2} /> },
    { name: "Opinion", icon: <MessageCircle size={24} strokeWidth={1.2} /> },
    { name: "Research", icon: <FileSearch size={24} strokeWidth={1.2} /> },
    { name: "Interviews", icon: <Users size={24} strokeWidth={1.2} /> },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 mb-12">
      <div className="flex items-center justify-between overflow-x-auto hide-scrollbar gap-4 py-4 border-y border-[#e8ebf2]">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-2 cursor-pointer group flex-shrink-0 relative"
          >
            {/* The vertical divider for all but first */}
            {idx !== 0 && (
              <div className="absolute -left-6 md:-left-8 h-8 w-[1px] bg-[#e8ebf2]"></div>
            )}
            <div className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-300 ml-4 md:ml-6 first:ml-0">
              {cat.icon}
            </div>
            <span className="text-[14px] font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors whitespace-nowrap">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

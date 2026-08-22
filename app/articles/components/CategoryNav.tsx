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
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-6 md:gap-x-10 lg:gap-x-4 gap-y-6 py-6 border-y border-[#e8ebf2]">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-300">
              {cat.icon}
            </div>
            <span className="text-[13.5px] md:text-[14px] font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors whitespace-nowrap">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

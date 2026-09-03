"use client";

import { Scale, Gavel, BookOpen, Lightbulb, GraduationCap, MessageCircle, FileSearch, Users } from "lucide-react";

interface CategoryNavProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export default function CategoryNav({ selectedCategory, setSelectedCategory }: CategoryNavProps) {
  const categories = [
    { name: "All", label: "All Categories", icon: <BookOpen size={22} strokeWidth={1.5} /> },
    { name: "Legal Analysis", label: "Legal Analysis", icon: <Scale size={22} strokeWidth={1.5} /> },
    { name: "Case Note", label: "Case Notes", icon: <Gavel size={22} strokeWidth={1.5} /> },
    { name: "Practice Guide", label: "Practice Guides", icon: <BookOpen size={22} strokeWidth={1.5} /> },
    { name: "Explainer", label: "Explainers", icon: <Lightbulb size={22} strokeWidth={1.5} /> },
    { name: "Constitutional Law", label: "Constitutional Law", icon: <GraduationCap size={22} strokeWidth={1.5} /> },
    { name: "Criminal Law", label: "Criminal Law", icon: <FileSearch size={22} strokeWidth={1.5} /> },
    { name: "Corporate Law", label: "Corporate Law", icon: <Users size={22} strokeWidth={1.5} /> },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 mb-10">
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-6 md:gap-x-8 gap-y-4 py-5 border-y border-[#e8ebf2]">
        {categories.map((cat, idx) => {
          const isSelected = selectedCategory.toLowerCase() === cat.name.toLowerCase();
          return (
            <button 
              key={idx} 
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-2 cursor-pointer group transition-colors ${
                isSelected ? "text-[#c9a84c]" : "text-[#0d1b3e] hover:text-[#c9a84c]"
              }`}
            >
              <div className={`transition-transform duration-300 group-hover:scale-110 ${
                isSelected ? "text-[#c9a84c] scale-110" : "text-[#c9a84c]"
              }`}>
                {cat.icon}
              </div>
              <span className={`text-[13px] md:text-[13.5px] font-bold whitespace-nowrap ${
                isSelected ? "underline underline-offset-4 font-extrabold" : ""
              }`}>
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

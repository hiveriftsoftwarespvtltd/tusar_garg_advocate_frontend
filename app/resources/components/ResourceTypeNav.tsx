import { BookOpen, Scale, FileText, Search, Layers, HelpCircle } from "lucide-react";

export default function ResourceTypeNav() {
  const types = [
    { title: "Legal Glossary", subtitle: "Terms & Definitions", icon: <BookOpen size={28} strokeWidth={1.2} /> },
    { title: "Legal Maxims", subtitle: "Key Latin Maxims", icon: <Scale size={28} strokeWidth={1.2} /> },
    { title: "Court Procedures", subtitle: "Rules & Processes", icon: <FileText size={28} strokeWidth={1.2} /> },
    { title: "Research Guides", subtitle: "Research Methodology", icon: <Search size={28} strokeWidth={1.2} /> },
    { title: "Reference Materials", subtitle: "Useful Links & PDFs", icon: <Layers size={28} strokeWidth={1.2} /> },
    { title: "Frequently Asked Questions", subtitle: "Quick Answers", icon: <HelpCircle size={28} strokeWidth={1.2} /> },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {types.map((type, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-[#e8ebf2] rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md hover:border-[#c9a84c]/50 transition-all cursor-pointer group"
          >
            <div className="text-[#c9a84c] mb-3 group-hover:scale-110 transition-transform duration-300">
              {type.icon}
            </div>
            <h3 className="text-[12.5px] font-semibold text-[#0d1b3e] mb-1 leading-tight group-hover:text-[#c9a84c] transition-colors">
              {type.title}
            </h3>
            <p className="text-[10px] text-[#6b7280]">
              {type.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

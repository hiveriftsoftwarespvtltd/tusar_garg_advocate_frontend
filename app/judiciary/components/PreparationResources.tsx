import { ClipboardList, UserSquare2, BookOpen, FileCheck2, Newspaper, Scale, Landmark, Languages, ArrowRight } from "lucide-react";

export default function PreparationResources() {
  const resources = [
    { title: "Eligibility", icon: <ClipboardList size={22} strokeWidth={1.5} /> },
    { title: "Age Limits", icon: <UserSquare2 size={22} strokeWidth={1.5} /> },
    { title: "Syllabus", icon: <BookOpen size={22} strokeWidth={1.5} /> },
    { title: "Previous Papers", icon: <FileCheck2 size={22} strokeWidth={1.5} /> },
    { title: "Current Legal Affairs", icon: <Newspaper size={22} strokeWidth={1.5} /> },
    { title: "Bare Acts", icon: <Scale size={22} strokeWidth={1.5} /> },
    { title: "Important Judgments", icon: <Landmark size={22} strokeWidth={1.5} /> },
    { title: "Legal English", icon: <Languages size={22} strokeWidth={1.5} /> },
  ];

  return (
    <section className="bg-white border border-[#e8ebf2] rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
      <div className="p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[1px] bg-[#c9a84c] hidden md:block"></div>
            <h2 className="text-[14px] md:text-[15px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em]" style={{ fontFamily: "var(--font-merriweather), serif" }}>
              PREPARATION RESOURCES
            </h2>
          </div>
          <a href="#" className="text-[11px] font-bold text-[#6b7280] hover:text-[#c9a84c] transition-colors">
            View All
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {resources.map((resource, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white border border-[#e8ebf2] rounded-lg p-3 group cursor-pointer hover:border-[#c9a84c]/50 hover:shadow-sm transition-all duration-300">
              {/* Icon */}
              <div className="text-[#c9a84c] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {resource.icon}
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-[12px] font-bold text-[#0d1b3e] truncate group-hover:text-[#c9a84c] transition-colors">
                  {resource.title}
                </h3>
                <span className="flex items-center gap-1 text-[10px] font-bold text-[#c9a84c] opacity-80 group-hover:opacity-100 transition-opacity mt-0.5 uppercase tracking-wider">
                  Explore <ArrowRight size={10} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

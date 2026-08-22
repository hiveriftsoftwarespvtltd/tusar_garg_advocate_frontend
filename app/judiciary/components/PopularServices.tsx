import { Landmark, Scale, FileText, BookOpen, Users, ClipboardList, ArrowRight } from "lucide-react";

export default function PopularServices() {
  const services = [
    { 
      icon: <Landmark size={32} strokeWidth={1.5} />, 
      title: "Civil Judge / Judicial Services",
      desc: "Entry level judicial officer exams",
    },
    { 
      icon: <Scale size={32} strokeWidth={1.5} />, 
      title: "District Judge / Higher Judicial Service",
      desc: "Senior level judicial officer exams",
    },
    { 
      icon: <ClipboardList size={32} strokeWidth={1.5} />, 
      title: "Preliminary Syllabus",
      desc: "Prelims exam pattern & syllabus",
    },
    { 
      icon: <BookOpen size={32} strokeWidth={1.5} />, 
      title: "Mains Syllabus",
      desc: "Mains exam pattern & syllabus",
    },
    { 
      icon: <Users size={32} strokeWidth={1.5} />, 
      title: "Interview Guidance",
      desc: "Personality test preparation",
    },
    { 
      icon: <FileText size={32} strokeWidth={1.5} />, 
      title: "Previous Papers",
      desc: "Previous year question papers",
    },
  ];

  return (
    <section className="bg-transparent h-full flex flex-col">
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex items-center">
          <div className="w-8 md:w-16 h-[1px] bg-[#c9a84c]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
        </div>
        <h2 className="text-[14px] md:text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em] text-center" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
          POPULAR JUDICIAL SERVICES
        </h2>
        <div className="flex items-center">
          <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
          <div className="w-8 md:w-16 h-[1px] bg-[#c9a84c]"></div>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white border border-[#e8ebf2] rounded-xl p-5 flex flex-col items-center text-center group cursor-pointer hover:border-[#c9a84c]/50 hover:shadow-md transition-all duration-300 h-full min-h-[220px]">
            <div className="text-[#0d1b3e] mb-4 group-hover:scale-110 group-hover:text-[#c9a84c] transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-[12px] font-bold text-[#0d1b3e] mb-2 leading-snug group-hover:text-[#c9a84c] transition-colors flex-shrink-0" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
              {service.title}
            </h3>
            <p className="text-[10px] text-[#6b7280] leading-relaxed mb-4 flex-1">
              {service.desc}
            </p>
            <span className="flex items-center justify-center gap-1 text-[11px] font-bold text-[#c9a84c] group-hover:text-[#d4a93a] transition-all duration-300 mt-auto uppercase tracking-wider">
              Explore <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

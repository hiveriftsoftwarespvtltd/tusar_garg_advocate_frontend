import { FileCheck, BookOpen, Users, Scale, Edit3, Target } from "lucide-react";

export default function ExamStages() {
  const stages = [
    { 
      title: "Preliminary Exam", 
      desc: "Objective type exam to test basic legal knowledge.", 
      icon: <FileCheck size={20} strokeWidth={1.5} /> 
    },
    { 
      title: "Mains Exam", 
      desc: "Descriptive papers to evaluate in-depth understanding.", 
      icon: <BookOpen size={20} strokeWidth={1.5} /> 
    },
    { 
      title: "Interview", 
      desc: "Personality test to assess suitability for judicial service.", 
      icon: <Users size={20} strokeWidth={1.5} /> 
    },
    { 
      title: "Local Laws", 
      desc: "State specific laws important for mains and interview.", 
      icon: <Scale size={20} strokeWidth={1.5} /> 
    },
    { 
      title: "Answer Writing", 
      desc: "Improve legal writing skills & time management.", 
      icon: <Edit3 size={20} strokeWidth={1.5} /> 
    },
    { 
      title: "Strategy", 
      desc: "Smart preparation plan & effective resources.", 
      icon: <Target size={20} strokeWidth={1.5} /> 
    },
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex items-center">
          <div className="w-8 md:w-16 h-[1px] bg-[#c9a84c]"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
        </div>
        <h2 className="text-[14px] md:text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em] text-center" style={{ fontFamily: "var(--font-merriweather), serif" }}>
          EXAM STAGES
        </h2>
        <div className="flex items-center">
          <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
          <div className="w-8 md:w-16 h-[1px] bg-[#c9a84c]"></div>
        </div>
      </div>

      <div className="bg-white border border-[#e8ebf2] rounded-xl shadow-sm p-4 md:p-6 overflow-x-auto hide-scrollbar">
        <div className="flex items-stretch min-w-max md:min-w-0">
          {stages.map((stage, idx) => (
            <div key={idx} className="flex flex-1 relative px-4 md:px-6 first:pl-2 last:pr-2">
              {/* Divider Line */}
              {idx !== stages.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[70%] border-r border-dashed border-[#cbd5e1] hidden md:block"></div>
              )}
              
              <div className="flex items-center gap-4">
                <div className="w-[52px] h-[52px] rounded-full bg-[#0d1b3e] flex items-center justify-center text-white flex-shrink-0">
                  {stage.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[13px] font-bold text-[#0d1b3e] mb-1" style={{ fontFamily: "var(--font-merriweather), serif" }}>
                    {stage.title}
                  </h3>
                  <p className="text-[11px] text-[#6b7280] leading-tight max-w-[140px]">
                    {stage.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

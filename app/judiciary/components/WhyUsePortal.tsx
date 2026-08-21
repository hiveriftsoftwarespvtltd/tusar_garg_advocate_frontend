import { Users, ClipboardList, Layers, Book } from "lucide-react";

export default function WhyUsePortal() {
  const reasons = [
    {
      title: "State-wise Coverage",
      desc: "Comprehensive coverage of judicial services exams across all states.",
      icon: <Users size={28} strokeWidth={1.5} />,
    },
    {
      title: "Updated Notifications",
      desc: "Timely updates on exam notifications, dates, and official announcements.",
      icon: <ClipboardList size={28} strokeWidth={1.5} />,
    },
    {
      title: "Verified Sources",
      desc: "Information from official websites and trusted legal sources.",
      icon: <Layers size={28} strokeWidth={1.5} />,
    },
    {
      title: "Exam-focused Resources",
      desc: "Curated study materials, syllabus, papers and preparation guidance.",
      icon: <Book size={28} strokeWidth={1.5} />,
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
          WHY USE THIS JUDICIARY PORTAL
        </h2>
        <div className="flex items-center">
          <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
          <div className="w-8 md:w-16 h-[1px] bg-[#c9a84c]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reasons.map((reason, idx) => (
          <div key={idx} className="bg-white border border-[#e8ebf2] rounded-xl p-6 flex gap-4 items-start shadow-sm hover:shadow-md hover:border-[#c9a84c]/30 transition-all">
            <div className="text-[#0d1b3e] flex-shrink-0 mt-1">
              {reason.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-[14px] font-bold text-[#0d1b3e] mb-1.5" style={{ fontFamily: "var(--font-merriweather), serif" }}>
                {reason.title}
              </h3>
              <p className="text-[11px] text-[#6b7280] leading-relaxed">
                {reason.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

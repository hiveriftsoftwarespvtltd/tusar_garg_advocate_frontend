import { Scale, Landmark, FileText, Users, MapPin, BookOpen } from "lucide-react";

const stats = [
  {
    icon: <Scale size={28} strokeWidth={1.2} className="text-white" />,
    number: "20+",
    label: "Years of Practice",
  },
  {
    icon: <Landmark size={28} strokeWidth={1.2} className="text-white" />,
    number: "1000+",
    label: "Cases Handled",
  },
  {
    icon: <FileText size={28} strokeWidth={1.2} className="text-white" />,
    number: "500+",
    label: "Judgments Researched",
  },
  {
    icon: <Users size={28} strokeWidth={1.2} className="text-white" />,
    number: "50+",
    label: "Practice Areas",
  },
  {
    icon: <MapPin size={28} strokeWidth={1.2} className="text-white" />,
    number: "All India",
    label: "Courts Covered",
  },
  {
    icon: <BookOpen size={28} strokeWidth={1.2} className="text-white" />,
    number: "5000+",
    label: "Legal Resources",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-[#1a2b5e] py-8">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <div>{stat.icon}</div>
              <span className="text-[22px] font-black text-white leading-none">
                {stat.number}
              </span>
              <span className="text-[11.5px] text-[#a5b4d4] font-medium leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

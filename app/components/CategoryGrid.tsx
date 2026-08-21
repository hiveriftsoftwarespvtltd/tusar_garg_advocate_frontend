import { Landmark, Gavel, BookOpen, Building2, GraduationCap, Briefcase, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: <Landmark size={36} strokeWidth={1.2} className="text-[#1a2b5e]" />,
    title: "Courts of India",
    description:
      "Explore Supreme Court, High Courts & District Courts",
    href: "/courts",
  },
  {
    icon: <Gavel size={36} strokeWidth={1.2} className="text-[#1a2b5e]" />,
    title: "Judgments",
    description:
      "Search and explore judgments and orders from across India",
    href: "/judgments",
  },
  {
    icon: <BookOpen size={36} strokeWidth={1.2} className="text-[#1a2b5e]" />,
    title: "Indian Laws",
    description:
      "Browse Acts, Sections Rules, Regulations & Legal Provisions",
    href: "/laws",
  },
  {
    icon: <Building2 size={36} strokeWidth={1.2} className="text-[#1a2b5e]" />,
    title: "Tribunals",
    description:
      "NCLT, NCLAT, NGT, DRT, ITAT & other tribunals and forums",
    href: "/tribunals",
  },
  {
    icon: <GraduationCap size={36} strokeWidth={1.2} className="text-[#1a2b5e]" />,
    title: "Judiciary & Careers",
    description:
      "Exams, syllabus, jobs & preparation resources for judiciary",
    href: "/judiciary",
  },
  {
    icon: <Briefcase size={36} strokeWidth={1.2} className="text-[#1a2b5e]" />,
    title: "Legal Jobs",
    description:
      "Find legal jobs, internships & fellowships across India",
    href: "/legal-jobs",
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white py-8 border-b border-[#e2e8f0]">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-[#e2e8f0] divide-x divide-y divide-[#e2e8f0]">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="flex flex-col items-center text-center p-5 hover:bg-[#f8f9fb] transition-colors group"
            >
              <div className="mb-3">{cat.icon}</div>
              <h3 className="text-[13px] font-bold text-[#1a2b5e] mb-2 leading-tight">
                {cat.title}
              </h3>
              <p className="text-[11.5px] text-[#6b7280] leading-relaxed mb-3 flex-1">
                {cat.description}
              </p>
              <span className="text-[12px] text-[#1a2b5e] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore <ArrowRight size={12} strokeWidth={2} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

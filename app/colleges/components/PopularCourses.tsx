import { Award, ChevronRight } from "lucide-react";

export default function PopularCourses() {
  const courses = [
    "BA LLB (Hons.)",
    "BBA LLB (Hons.)",
    "LLB",
    "LLM",
    "Ph.D. in Law",
    "Diploma & Certificate Courses",
  ];

  return (
    <section className="bg-[#fafafa] border border-[#e8ebf2] rounded-xl p-6 shadow-sm">
      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-[14px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em] mb-3" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
          POPULAR LAW COURSES
        </h2>
        <div className="w-12 h-[2px] bg-[#c9a84c]"></div>
      </div>

      <div className="flex flex-col">
        {courses.map((course, idx) => (
          <div key={idx} className="flex items-center justify-between py-3 border-b border-[#e8ebf2] last:border-b-0 group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="text-[#c9a84c]">
                <Award size={18} strokeWidth={1.5} />
              </div>
              <span className="text-[12.5px] font-bold text-[#374151] group-hover:text-[#c9a84c] transition-colors">
                {course}
              </span>
            </div>
            <ChevronRight size={16} className="text-[#374151] group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-transform" />
          </div>
        ))}
      </div>
    </section>
  );
}

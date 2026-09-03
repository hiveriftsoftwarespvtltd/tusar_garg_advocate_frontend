import { Globe, ChevronRight } from "lucide-react";

export default function UsefulResources() {
  const resources = [
    "Bar Council of India",
    "University Grants Commission (UGC)",
    "NLU Consortium",
    "Scholarships & Fellowships",
    "Law Entrance Exams",
  ];

  return (
    <section className="bg-[#faf9f6] border border-[#e8ebf2] rounded-xl p-6 shadow-sm">
      {/* Heading */}
      <div className="mb-5">
        <h2 className="font-serif text-[14px] text-[#0d1b3e] uppercase tracking-[0.05em] mb-3">
          USEFUL RESOURCES
        </h2>
        <div className="w-12 h-[2px] bg-[#c9a84c]"></div>
      </div>

      <div className="flex flex-col">
        {resources.map((resource, idx) => (
          <div key={idx} className="flex items-center justify-between py-3 border-b border-[#e8ebf2] last:border-b-0 group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="text-[#64748b] group-hover:text-[#c9a84c] transition-colors">
                <Globe size={18} strokeWidth={1.5} />
              </div>
              <span className="text-[12.5px] font-bold text-[#374151] group-hover:text-[#c9a84c] transition-colors">
                {resource}
              </span>
            </div>
            <ChevronRight size={16} className="text-[#374151] group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-transform" />
          </div>
        ))}
      </div>
    </section>
  );
}

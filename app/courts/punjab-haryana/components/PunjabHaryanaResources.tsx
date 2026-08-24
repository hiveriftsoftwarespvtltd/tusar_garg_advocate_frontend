import { Landmark, BookOpen, Gavel, BookText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PunjabHaryanaResources() {
  const resources = [
    {
      title: "Court Procedures",
      desc: "Step-by-step guidance on filing cases, hearings, and court processes.",
      icon: <Landmark size={42} strokeWidth={1.5} />,
      link: "#"
    },
    {
      title: "Important Acts & Laws",
      desc: "Key laws and acts applicable in Civil, Criminal, Family and Commercial matters.",
      icon: <BookOpen size={42} strokeWidth={1.5} />,
      link: "#"
    },
    {
      title: "Judgments",
      desc: "Latest judgments from Punjab & Haryana courts across various practice areas.",
      icon: <Gavel size={42} strokeWidth={1.5} />,
      link: "#"
    },
    {
      title: "Court Directory",
      desc: "Addresses, contact details and useful information for all court complexes.",
      icon: <BookText size={42} strokeWidth={1.5} />,
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-[#fcfcfc] pb-24">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-[20px] md:text-[24px] font-serif font-bold text-[#0d1b3e] mb-3 uppercase tracking-wider">
            LEGAL RESOURCES FOR PUNJAB & HARYANA
          </h2>
          <div className="w-12 h-[2px] bg-[#c9a84c]"></div>
        </div>

        <div className="bg-white border border-[#f0f0f0] rounded-xl shadow-sm flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#e5e7eb] overflow-hidden">
          {resources.map((res, i) => (
            <div 
              key={i} 
              className="flex-1 p-6 flex flex-col xl:flex-row gap-5 items-start group hover:bg-[#f8f9fb] transition-colors duration-300"
            >
              <div className="text-[#c9a84c] flex-shrink-0 mt-1">
                {res.icon}
              </div>
              <div className="flex flex-col flex-1 h-full">
                <h3 className="text-[15px] font-bold text-[#0d1b3e] mb-1.5" style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
                  {res.title}
                </h3>
                <p className="text-[12px] xl:text-[13px] text-[#6b7280] leading-relaxed mb-4 flex-1">
                  {res.desc}
                </p>
                <Link href={res.link} className="flex items-center gap-1.5 text-[13px] font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors mt-auto">
                  Read More 
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

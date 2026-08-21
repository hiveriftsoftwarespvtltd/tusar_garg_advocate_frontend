import Image from "next/image";
import { ArrowRight } from "lucide-react";

const knowledgeCards = [
  {
    image: "/home/legal_knowledge_1.jpg",
    title: "Legal Articles",
    description: "In-depth legal analysis & updates",
    href: "/articles",
  },
  {
    image: "/home/legal_knowledge_2.jpg",
    title: "Judgment Analysis",
    description: "Case notes and expert insights",
    href: "/articles/judgment-analysis",
  },
  {
    image: "/home/legal_knowledge_3.jpg",
    title: "Legal Explainers",
    description: "Simplified legal concepts",
    href: "/articles/explainers",
  },
  {
    image: "/home/legal_knowledge_4.jpg",
    title: "Legal Glossary",
    description: "Legal terms explained",
    href: "/resources/glossary",
  },
  {
    image: "/home/legal_knowledge_5.jpg",
    title: "Legal Maxims",
    description: "Principles of law & maxims",
    href: "/resources/maxims",
  },
  {
    image: "/home/legal_knowledge_6.jpg",
    title: "Court Procedure Guides",
    description: "Step-by-step procedure",
    href: "/resources/court-procedures",
  },
];

export default function LegalKnowledge() {
  return (
    <section className="bg-white py-10 border-t border-[#e0e4ed]">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[20px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em]">
            LEGAL KNOWLEDGE & INSIGHTS
          </h2>
          <div className="w-10 h-[3px] bg-[#c9a84c] mx-auto mt-2" />
        </div>

        {/* 6-card grid — individual rounded cards with gap */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {knowledgeCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="flex flex-col bg-[#fafafa] border border-[#e8ebf2] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
            >
              {/* Image — full width, top rounded by card overflow-hidden, bottom rounded-b-xl */}
              <div className="relative h-[110px] overflow-hidden rounded-b-xl flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-[12.5px] font-bold text-[#0d1b3e] mb-1.5 leading-snug group-hover:text-[#c9a84c] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[11px] text-[#6b7280] mb-3 flex-1 leading-relaxed">
                  {card.description}
                </p>
                <span className="text-[11px] font-bold text-[#c9a84c] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={10} strokeWidth={2.5} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

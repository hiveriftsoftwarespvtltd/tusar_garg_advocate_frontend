import Image from "next/image";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    image: "/article-bail.png",
    category: "Criminal Law",
    date: "10 May 2024",
    title: "Understanding Bail: Principles and Practice",
    description:
      "An overview of the legal principles governing bail in India.",
  },
  {
    image: "/article-tribunal.png",
    category: "Legal Analysis",
    date: "08 May 2024",
    title: "The Role of Tribunals in Modern Legal System",
    description:
      "How tribunals contribute to speedy justice and specialized adjudication.",
  },
  {
    image: "/article-judicial.png",
    category: "Current Affairs",
    date: "06 May 2024",
    title: "Judicial Updates: Key Highlights",
    description:
      "Important judgments and legal developments from across India.",
  },
];

export default function LatestArticles() {
  return (
    <div className="flex-1">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-[14px] text-[#1a2b5e] uppercase tracking-widest">
          LATEST ARTICLES
        </h2>
        <a
          href="/articles"
          className="flex items-center gap-1 text-[12px] text-[#1a2b5e] font-medium hover:underline"
        >
          View All <ArrowRight size={12} strokeWidth={2} />
        </a>
      </div>

      {/* Article list */}
      <div className="flex flex-col divide-y divide-[#e2e8f0]">
        {articles.map((a) => (
          <a
            key={a.title}
            href="/articles"
            className="flex items-start gap-4 py-4 hover:bg-[#f8f9fb] px-2 -mx-2 transition-colors rounded-sm group"
          >
            {/* Thumbnail */}
            <div className="flex-shrink-0 w-[80px] h-[60px] relative rounded overflow-hidden bg-[#e2e8f0]">
              <Image
                src={a.image}
                alt={a.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-[#6b7280] mb-1">
                <span className="text-[#e8a020] font-semibold">{a.category}</span>
                &nbsp;•&nbsp;{a.date}
              </p>
              <h3 className="text-[13px] font-semibold text-[#1a2b5e] leading-snug mb-1 group-hover:underline">
                {a.title}
              </h3>
              <p className="text-[12px] text-[#374151] leading-relaxed">
                {a.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

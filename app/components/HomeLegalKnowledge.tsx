"use client";

import Link from "next/link";
import { BookOpen, Calendar, User, ArrowRight, FileText } from "lucide-react";

interface ArticleItem {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  description: string;
  link: string;
}

const scholarlyArticles: ArticleItem[] = [
  {
    id: "1",
    title: "Constitutional Review & Sovereign Contracts: Scope of Article 14 Scrutiny",
    author: "Chambers of Adv. Tushar Garg (AOR)",
    date: "24 October 2024",
    category: "Constitutional Updates",
    description: "An analysis of recent Supreme Court benches delineating the boundary between private commercial contract law and public law judicial review under Article 226 and Article 32.",
    link: "/articles",
  },
  {
    id: "2",
    title: "Transition to New Criminal Laws: Practical Implications for Bail under BNSS",
    author: "Adv. Tushar Garg (AOR)",
    date: "15 October 2024",
    category: "Criminal Law",
    description: "Procedural analysis comparing Section 437/439 Cr.P.C. with corresponding Section 480/483 of the Bharatiya Nagarik Suraksha Sanhita, 2023, regarding custody and bail adjudication.",
    link: "/articles",
  },
  {
    id: "3",
    title: "Patent Illegality Standard in Commercial Arbitrations: Post-2015 Precedents",
    author: "Legal Research Desk",
    date: "04 October 2024",
    category: "Legal Analysis",
    description: "A scholarly overview of Section 34(2A) jurisprudence under the Arbitration and Conciliation Act, tracing limits on domestic court interference in arbitral awards.",
    link: "/articles",
  },
  {
    id: "4",
    title: "Statutory Resolution of Operational Creditor Claims: Clean Slate under IBC",
    author: "Chambers Research Desk",
    date: "19 September 2024",
    category: "Corporate Law",
    description: "Case note examining the Supreme Court's continuous affirmation of the 'clean slate' doctrine upon approval of resolution plans by the Adjudicating Authority under Section 31.",
    link: "/articles",
  },
];

export default function HomeLegalKnowledge() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E7E4DC]">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#101D35]/5 border border-[#B69A63]/30 px-3.5 py-1 rounded-full mb-3">
              <BookOpen size={13} className="text-[#B69A63]" />
              <span className="text-[#101D35] text-[11px] font-bold tracking-widest uppercase">
                ACADEMIC & PRACTITIONER CASE NOTES
              </span>
            </div>
            <h2 className="font-serif text-[28px] sm:text-[36px] font-bold text-[#101D35] uppercase tracking-tight">
              LEGAL INSIGHTS & SCHOLARLY ARTICLES
            </h2>
            <div className="w-14 h-0.5 bg-[#B69A63] mt-3" />
            <p className="text-[#4A5568] text-[14px] sm:text-[15px] mt-2.5 max-w-2xl leading-relaxed">
              Research publications, statutory commentaries, and analytical case notes covering developments across constitutional, appellate, criminal, and commercial jurisprudence.
            </p>
          </div>

          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#B69A63] text-[#101D35] hover:bg-[#B69A63] hover:text-[#101D35] font-semibold text-xs uppercase tracking-wider transition-colors self-start md:self-auto shrink-0"
          >
            <span>View All Legal Articles</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 4 Article Cards Grid (Prompt Section 11) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scholarlyArticles.map((art) => (
            <article
              key={art.id}
              className="bg-[#F8F7F3] border border-[#E7E4DC] hover:border-[#B69A63] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-md group"
            >
              <div>
                {/* Category Badge & Date */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E7E4DC] mb-4 text-[11px]">
                  <span className="font-bold text-[#B69A63] uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span className="text-[#737B88] flex items-center gap-1">
                    <Calendar size={11} />
                    {art.date}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="font-serif text-[17px] font-bold text-[#101D35] leading-snug mb-3 group-hover:text-[#B69A63] transition-colors">
                  <Link href={art.link}>{art.title}</Link>
                </h3>

                {/* Author Byline */}
                <p className="text-[11px] font-medium text-[#737B88] flex items-center gap-1.5 mb-3.5">
                  <User size={12} className="text-[#B69A63]" />
                  <span>{art.author}</span>
                </p>

                {/* Short Factual Description */}
                <p className="text-xs text-[#4A5568] leading-relaxed mb-6">
                  {art.description}
                </p>
              </div>

              {/* Read Article Link */}
              <Link
                href={art.link}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-[#E7E4DC] text-xs font-semibold text-[#101D35] group-hover:text-[#B69A63] transition-colors mt-auto"
              >
                <span>Read Full Article</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Book, ArrowRight, ShieldCheck, Scale, FileText, CheckCircle2 } from "lucide-react";
import { LAWS_CATEGORY_DATA } from "@/app/laws/data/lawsData";

export const metadata: Metadata = {
  title: "Bare Acts Database & Legal Codes | Advocate Tushar Garg",
  description: "Complete repository of central Bare Acts including Bharatiya Nyaya Sanhita (BNS), BNSS, BSA, CPC, Constitution, and commercial statutes.",
  openGraph: {
    title: "Bare Acts Database | Advocate Tushar Garg",
    description: "Complete repository of central Bare Acts with sections, summaries, and precedents.",
    type: "website"
  }
};

export default function BareActsResourcePage() {
  const categories = Object.values(LAWS_CATEGORY_DATA);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="relative bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#071126] text-white py-14 sm:py-16 px-4 sm:px-6 overflow-hidden border-b border-[#c9a84c]/20">
        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-[12px] font-medium text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#c9a84c] transition-colors">Tools & Resources</Link>
            <span>/</span>
            <span className="text-[#c9a84c] font-semibold">Bare Acts Database</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3.5 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase shadow-sm">
              <Book size={14} />
              <span>CENTRAL BARE ACTS & CODES DATABASE</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Indian Bare Acts & Statutory Codes
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              Explore exhaustive Bare Acts with section-by-section analysis, full statutory wording, recent amendments, and Supreme Court precedent ratios across all 6 core branches of Indian Law.
            </p>

            <div className="pt-2">
              <Link
                href="/bare-acts"
                className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4a93a] text-[#0d1b3e] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow-md transition-all hover:scale-[1.02]"
              >
                <span>Browse & Download Official Bare Act PDFs</span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-[1300px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/laws/${cat.slug}`}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-[#c9a84c]/60 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0d1b3e]/10 text-[#0d1b3e] inline-block mb-3">
                  {cat.tag}
                </span>

                <h3 className="font-serif text-lg font-bold text-[#0d1b3e] mb-2 leading-snug group-hover:text-[#c9a84c] transition-colors">
                  {cat.name}
                </h3>

                <p className="text-xs text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {cat.subtitle}
                </p>

                <div className="grid grid-cols-3 gap-2 p-3 bg-gray-50 rounded-xl text-center mb-4 border border-gray-100">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block font-semibold">Acts</span>
                    <span className="text-xs font-bold text-[#0d1b3e]">{cat.stats.actsCount}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block font-semibold">Sections</span>
                    <span className="text-xs font-bold text-[#0d1b3e]">{cat.stats.sectionsCount}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase block font-semibold">Precedents</span>
                    <span className="text-xs font-bold text-[#0d1b3e]">{cat.stats.precedentsCount}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#c9a84c]">
                <span>Read Full Bare Act</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

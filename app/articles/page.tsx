"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, User, Clock, ArrowRight, X, RotateCcw, RefreshCw } from "lucide-react";
import ArticlesHero from "./components/ArticlesHero";
import ArticlesFilterBar from "./components/ArticlesFilterBar";
import CategoryNav from "./components/CategoryNav";
import { fetchApi } from "../../lib/api/client";

const defaultArticlesList = [
  {
    _id: "1",
    category: "LEGAL ANALYSIS",
    title: "The Evolving Scope of Judicial Review in India: Recent Supreme Court Precedents",
    summary: "An in-depth analysis of landmark judgments and the expanding contours of writ jurisdiction and judicial review by the Supreme Court of India.",
    author: "Advocate Tushar Garg",
    date: "19 May 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
    content: `Judicial review in India serves as the cornerstone of constitutional governance, ensuring that executive actions and statutory enactments strictly adhere to fundamental constitutional limits. Over recent years, the Supreme Court of India has expanded the frontiers of judicial review, balancing administrative efficiency with fundamental rights protection.

### 1. The Constitutional Framework of Judicial Review
Under Articles 32 and 226 of the Constitution of India, both the Supreme Court and High Courts possess expansive writ jurisdiction to enforce Fundamental Rights under Part III. The basic structure doctrine, established in Kesavananda Bharati, affirms that judicial review itself is an unamendable core feature of the Constitution.

### 2. Recent Supreme Court Pronouncements
In recent landmark decisions, the Apex Court has reiterated that procedural impropriety, proportionality, and non-arbitrariness (Article 14) constitute valid grounds for setting aside executive directives and delegated legislation. The court emphasized that administrative discretion must be exercised reasonably and with due regard to procedural fairness.

### 3. Key Takeaways for Legal Practitioners
- **Proportionality Test**: Courts increasingly apply the 4-prong proportionality standard in writ petitions challenging state policy.
- **Documentary Pre-requisites**: Pleadings must clearly outline the specific constitutional violations and exhausted statutory remedies.
- **Interim Protection**: Seeking stay orders requires establishing a strong prima facie case, balance of convenience, and irreparable injury.`
  },
  {
    _id: "2",
    category: "CASE NOTE",
    title: "Bail Jurisprudence in India: Balancing Personal Liberty & Societal Interests",
    summary: "Critical study on Section 439 CrPC, triple test conditions, and recent High Court guidelines on anticipatory bail.",
    author: "Advocate Tushar Garg",
    date: "18 May 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=600&q=80",
    content: `"Bail is the rule, jail is an exception" remains one of the most fundamental tenets of Indian criminal jurisprudence. However, balancing personal liberty guaranteed under Article 21 with societal interests and fair investigation requires careful judicial scrutiny.

### 1. The Triple Test for Bail
When evaluating regular bail applications under Section 439 CrPC (now Bharatiya Nagarik Suraksha Sanhita), courts consistently apply the three-fold test:
1. Flight Risk (Risk of absconding)
2. Tampering with Evidence (Risk of destroying documents/digital records)
3. Influencing Witnesses (Risk of coercing prosecution witnesses)

### 2. Anticipatory Bail & Section 438 CrPC
Granting pre-arrest bail requires examining the nature and gravity of accusations, antecedents of the applicant, and possibility of the applicant fleeing from justice. The Supreme Court in Sushila Aggarwal affirmed that anticipatory bail need not be restricted to a specific time frame unless extraordinary circumstances exist.`
  },
  {
    _id: "3",
    category: "PRACTICE GUIDE",
    title: "How to Draft an Effective Writ Petition: A Practical Guide for Advocates",
    summary: "Step-by-step drafting framework for Article 226 and Article 32 petitions including interim relief applications.",
    author: "Advocate Tushar Garg",
    date: "17 May 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    content: `Drafting a writ petition before the High Court under Article 226 or the Supreme Court under Article 32 demands precision, facts organization, and clean legal arguments.

### Essential Elements of a Writ Petition:
1. **Synopsis & List of Dates**: A chronological factual timeline highlighting key events and cause of action.
2. **Question of Law**: Clearly formulated constitutional and statutory questions requiring court adjudication.
3. **Grounds**: Separate, concise numbered paragraphs alleging violations of fundamental or statutory rights.
4. **Prayer Clause**: Precise, explicit relief sought (Mandamus, Certiorari, Habeas Corpus, Prohibition, Quo Warranto).`
  },
  {
    _id: "4",
    category: "LEGAL ANALYSIS",
    title: "Arbitration & Conciliation Act: Key Statutory Amendments & Judicial Impact",
    summary: "Analysis of automatic stay provisions, appointment of arbitrators, and enforcement of domestic arbitral awards.",
    author: "Advocate Tushar Garg",
    date: "16 May 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    content: `Commercial arbitration in India has witnessed significant statutory reform aimed at reducing judicial intervention, ensuring timeline compliance, and encouraging institutional arbitration.

### Key Highlights of Recent Amendments:
- **Section 11 Appointment**: Expedited appointment procedures for arbitrators.
- **Section 34 Challenge**: Strict standard of public policy grounds to set aside arbitral awards.
- **Interim Reliefs under Section 9**: Powers of emergency arbitrators and interim protection measures.`
  },
  {
    _id: "5",
    category: "EXPLAINER",
    title: "Understanding Section 319 CrPC: Power to Proceed Against Other Persons",
    summary: "Procedural breakdown of court powers to summon additional accused during trial based on evidentiary standards.",
    author: "Advocate Tushar Garg",
    date: "15 May 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    content: `Section 319 CrPC empowers trial courts to summon any person not named as an accused in the FIR or charge sheet if evidence adduced during trial indicates their involvement in the offense.

### Standard of Evidence Required:
The Supreme Court Constitutional Bench in Hardeep Singh vs State of Punjab held that the test to be applied is much stronger than a mere prima facie case, requiring evidence demonstrating a strong probability of guilt.`
  },
  {
    _id: "6",
    category: "CONSTITUTIONAL LAW",
    title: "Fundamental Rights vs Directive Principles: Evolving Harmonious Construction",
    summary: "Examining judicial doctrine of harmonious construction in fundamental rights litigation before apex courts.",
    author: "Advocate Tushar Garg",
    date: "14 May 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    content: `The relationship between Part III (Fundamental Rights) and Part IV (Directive Principles of State Policy) has evolved from formal supremacy to harmonious construction, treating both as twin pillars of social revolution in India.`
  }
];

export default function ArticlesPage() {
  const [articles, setArticles] = useState<any[]>(defaultArticlesList);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await fetchApi('/articles');
        if (data && Array.isArray(data) && data.length > 0) {
          setArticles(data);
        }
      } catch (err) {
        console.error("Failed to load articles from API", err);
      } finally {
        setLoading(false);
      }
    }
    loadArticles();
  }, []);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  const filteredArticles = articles.filter(art => {
    const matchesCategory = selectedCategory === "All" || art.category?.toLowerCase().includes(selectedCategory.toLowerCase());
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || art.title?.toLowerCase().includes(query) || art.summary?.toLowerCase().includes(query) || art.category?.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#fafafa]">
      
      {/* 1. Hero Banner Section */}
      <ArticlesHero />

      {/* 2. Interactive Filter Bar Section */}
      <ArticlesFilterBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        resetFilters={resetFilters}
      />

      {/* 3. Interactive Category Navigation Bar */}
      <CategoryNav 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 4. Filter Results Status & Grid */}
      <div className="max-w-[1280px] mx-auto px-4 mb-16 space-y-6">
        
        {/* Results Count & Filter Status Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-3 text-[#0d1b3e]">
          <h2 className="font-serif text-[16px] uppercase tracking-wider font-bold">
            ARTICLES DIRECTORY ({filteredArticles.length})
          </h2>
          {(searchQuery || selectedCategory !== "All") && (
            <button 
              onClick={resetFilters}
              className="text-[#c9a84c] hover:underline text-xs font-bold flex items-center gap-1"
            >
              <span>Clear Filter ({selectedCategory !== "All" ? selectedCategory : searchQuery})</span>
              <RotateCcw size={12} />
            </button>
          )}
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[300px] text-gray-500 font-medium gap-2">
            <RefreshCw className="animate-spin" size={20} /> Loading Articles...
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="p-16 text-center text-gray-500 bg-white rounded-2xl border border-gray-200 space-y-3">
            <p className="text-lg font-bold text-[#0d1b3e]">No articles match your filter criteria.</p>
            <p className="text-sm text-gray-400">Try clearing your search query or selecting "All Categories".</p>
            <button 
              onClick={resetFilters}
              className="bg-[#0d1b3e] text-[#c9a84c] px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#1a2b5e]"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <div
                key={art._id || art.id}
                onClick={() => setSelectedArticle(art)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 hover:border-[#c9a84c] transition-all duration-500 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-[210px] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={art.image || "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80"}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#0d1b3e] text-[#c9a84c] border border-[#c9a84c]/40 font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md">
                        {art.category || "ARTICLE"}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className="font-serif font-bold text-[#0d1b3e] text-[17px] leading-snug mb-2 group-hover:text-[#c9a84c] transition-colors line-clamp-2">
                      {art.title}
                    </h3>
                    <p className="text-gray-600 text-[12.5px] leading-relaxed line-clamp-3 font-medium">
                      {art.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11.5px] text-gray-500 font-medium">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Calendar size={12} className="text-[#c9a84c]" /> {art.date || "May 2025"}</span>
                    <span>•</span>
                    <span>{art.readTime || "5 min read"}</span>
                  </div>
                  <span className="text-[#c9a84c] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FULL ARTICLE READER MODAL DIALOG */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
            
            {/* Modal Top Header */}
            <div className="bg-[#0d1b3e] text-white px-6 py-4 flex items-center justify-between border-b border-[#c9a84c]/30">
              <span className="bg-[#c9a84c] text-[#071126] font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-md">
                {selectedArticle.category || "ARTICLE"}
              </span>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-gray-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close article"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Scrollable Article Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              
              <div>
                <h1 className="font-serif text-[24px] sm:text-[32px] font-bold text-[#0d1b3e] leading-snug mb-4">
                  {selectedArticle.title}
                </h1>
                
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center gap-5 text-gray-500 text-[13px] font-medium pb-4 border-b border-gray-100">
                  <span className="flex items-center gap-1.5 font-bold text-[#0d1b3e]"><User size={15} className="text-[#c9a84c]" /> {selectedArticle.author || "Advocate Tushar Garg"}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={15} className="text-[#c9a84c]" /> {selectedArticle.date || "May 2025"}</span>
                  <span className="flex items-center gap-1.5"><Clock size={15} className="text-[#c9a84c]" /> {selectedArticle.readTime || "5 min read"}</span>
                </div>
              </div>

              {/* Cover Image */}
              {selectedArticle.image && (
                <div className="relative h-[300px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-md">
                  <Image 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              )}

              {/* Executive Summary Box */}
              {selectedArticle.summary && (
                <div className="bg-[#0d1b3e]/5 border-l-4 border-[#c9a84c] p-5 rounded-r-xl">
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#c9a84c] mb-1">Executive Summary</h4>
                  <p className="text-[14px] text-[#0d1b3e] font-semibold leading-relaxed">
                    {selectedArticle.summary}
                  </p>
                </div>
              )}

              {/* Full Content Text Body */}
              <div className="prose max-w-none text-gray-700 text-[14.5px] leading-relaxed space-y-4 font-medium whitespace-pre-line">
                {selectedArticle.content || selectedArticle.summary}
              </div>

              {/* Author Commitment Signature Footer */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center font-serif font-bold text-lg">
                    TG
                  </div>
                  <div>
                    <p className="font-bold text-[#0d1b3e] text-sm">{selectedArticle.author || "Advocate Tushar Garg"}</p>
                    <p className="text-xs text-gray-500">Advocate-on-Record, Supreme Court of India</p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Close Article Reader
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </main>
  );
}

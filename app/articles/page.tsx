import ArticlesHero from "./components/ArticlesHero";
import ArticlesFilterBar from "./components/ArticlesFilterBar";
import CategoryNav from "./components/CategoryNav";
import FeaturedArticles from "./components/FeaturedArticles";
import LatestArticles from "./components/LatestArticles";
import ArticlesSidebar from "./components/ArticlesSidebar";
import ArticlesBanner from "./components/ArticlesBanner";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <ArticlesHero />
      <ArticlesFilterBar />
      <CategoryNav />
      
      <div className="max-w-[1280px] mx-auto px-4 mb-8">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-3/4">
            <FeaturedArticles />
            <LatestArticles />
          </div>
          <div className="xl:w-1/4">
            <ArticlesSidebar />
          </div>
        </div>
      </div>
      
      <ArticlesBanner />
    </main>
  );
}

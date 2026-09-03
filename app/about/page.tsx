import PageHero from "../components/PageHero";
import ProfessionalProfile from "./components/ProfessionalProfile";
import AboutDetailsList from "./components/AboutDetailsList";
import AboutCTA from "./components/AboutCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <PageHero
        title="ABOUT US"
        subtitle={
          <>
            <span className="text-[#c9a84c] font-medium text-[16px] md:text-[18px]">Advocate Tushar Garg</span><br />
            <span className="text-white/90 text-[14px] font-normal tracking-wide mt-2 block">
              B.A. LL.B., LL.M. | Advocate-on-Record (AOR), Supreme Court of India
            </span>
          </>
        }
        backgroundImage="/about/about_page_banner.png"
      />

      {/* 2. Professional Profile */}
      <ProfessionalProfile />

      {/* 3. Details List */}
      <AboutDetailsList />

      {/* 4. CTA */}
      <AboutCTA />
    </main>
  );
}

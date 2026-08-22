import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import ProfessionalProfile from "./components/ProfessionalProfile";
import AboutDetailsGrid from "./components/AboutDetailsGrid";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <PageHero
        title="ABOUT US"
        subtitle={
          <>
            Advocate Tushar Garg<br />
            <span className="text-white/80 text-[13px] font-normal tracking-wide mt-1 block">
              B.A. LL.B., LL.M. | Advocate-on-Record (AOR), Supreme Court of India
            </span>
          </>
        }
        backgroundImage="/about/about_page_banner.png"
      />

      {/* 2. Professional Profile */}
      <ProfessionalProfile />

      {/* 3. Grid Details */}
      <AboutDetailsGrid />

      {/* 4. CTA Banner */}
      <CtaBanner
        title="NEED LEGAL ASSISTANCE?"
        subtitle="We are here to provide you with reliable legal solutions and dedicated representation at every step."
        buttonText="GET IN TOUCH"
        href="/contact"
      />
    </main>
  );
}

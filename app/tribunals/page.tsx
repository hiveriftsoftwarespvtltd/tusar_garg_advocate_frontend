import TribunalsHero from "./components/TribunalsHero";
import TribunalsSearch from "./components/TribunalsSearch";
import TribunalsDirectory from "./components/TribunalsDirectory";
import AboutAndUpdates from "./components/AboutAndUpdates";
import InfoBanner from "./components/InfoBanner";

export default function TribunalsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <TribunalsHero />

      {/* 2. Search Section */}
      <TribunalsSearch />

      {/* 3. Tribunals Directory Grid */}
      <TribunalsDirectory />

      {/* 4. About & Latest Updates */}
      <AboutAndUpdates />

      {/* 5. Bottom Info Banner */}
      <InfoBanner />
    </main>
  );
}

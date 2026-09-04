import TribunalsHero from "./components/TribunalsHero";
import TribunalsDirectory from "./components/TribunalsDirectory";
import AboutAndUpdates from "./components/AboutAndUpdates";
import InfoBanner from "./components/InfoBanner";

export default function TribunalsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* 1. Hero Section */}
      <TribunalsHero />

      {/* 2. Tribunals Directory Grid */}
      <TribunalsDirectory />

      {/* 3. About & Latest Updates */}
      <AboutAndUpdates />

      {/* 4. Bottom Info Banner */}
      <InfoBanner />
    </main>
  );
}

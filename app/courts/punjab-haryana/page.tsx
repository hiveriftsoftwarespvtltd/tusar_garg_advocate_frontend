import PunjabHaryanaHero from "./components/PunjabHaryanaHero";
import PunjabHaryanaCourtsGrid from "./components/PunjabHaryanaCourtsGrid";
import PunjabHaryanaConsultation from "./components/PunjabHaryanaConsultation";
import PunjabHaryanaResources from "./components/PunjabHaryanaResources";

export const metadata = {
  title: "Punjab & Haryana Courts | Tushar Garg Advocate",
  description: "Experienced Legal Representation Across Punjab & Haryana.",
};

export default function PunjabHaryanaCourtsPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <PunjabHaryanaHero />
      <PunjabHaryanaCourtsGrid />
      <PunjabHaryanaConsultation />
      <PunjabHaryanaResources />
    </main>
  );
}

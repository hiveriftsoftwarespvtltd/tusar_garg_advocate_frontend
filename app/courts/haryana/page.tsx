import HaryanaHero from "./components/HaryanaHero";
import HaryanaCourtsGrid from "./components/HaryanaCourtsGrid";
import HaryanaConsultation from "./components/HaryanaConsultation";
import HaryanaResources from "./components/HaryanaResources";

export const metadata = {
  title: "Haryana District Courts | Tushar Garg Advocate",
  description: "Experienced Legal Representation Across All Haryana District Courts.",
};

export default function HaryanaCourtsPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <HaryanaHero />
      <HaryanaCourtsGrid />
      <HaryanaConsultation />
      <HaryanaResources />
    </main>
  );
}

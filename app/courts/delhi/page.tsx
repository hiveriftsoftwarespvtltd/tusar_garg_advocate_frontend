import DelhiHero from "./components/DelhiHero";
import DelhiCourtsGrid from "./components/DelhiCourtsGrid";
import FreeConsultation from "./components/FreeConsultation";
import DelhiResources from "./components/DelhiResources";

export const metadata = {
  title: "Delhi Courts | Tushar Garg Advocate",
  description: "Experienced Legal Representation Across All Delhi Courts.",
};

export default function DelhiCourtsPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <DelhiHero />
      <DelhiCourtsGrid />
      <FreeConsultation />
      <DelhiResources />
    </main>
  );
}

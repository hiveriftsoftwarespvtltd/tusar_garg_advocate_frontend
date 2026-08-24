import SupremeCourtHero from "./components/SupremeCourtHero";
import SupremeCourtGrid from "./components/SupremeCourtGrid";
import SupremeCourtConsultation from "./components/SupremeCourtConsultation";
import SupremeCourtResources from "./components/SupremeCourtResources";

export const metadata = {
  title: "Supreme Court of India | Tushar Garg Advocate",
  description: "Expert Legal Counsel & Representation Before the Apex Court.",
};

export default function SupremeCourtPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <SupremeCourtHero />
      <SupremeCourtGrid />
      <SupremeCourtConsultation />
      <SupremeCourtResources />
    </main>
  );
}

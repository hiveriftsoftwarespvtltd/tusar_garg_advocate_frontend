import type { Metadata } from "next";
import ContactHero from "./components/ContactHero";
import ContactInfoBar from "./components/ContactInfoBar";
import ConsultationProtocol from "./components/ConsultationProtocol";
import ContactForm from "./components/ContactForm";
import OfficeInfo from "./components/OfficeInfo";
import ContactSidebar from "./components/ContactSidebar";
import ContactBanner from "./components/ContactBanner";

import { getSeoByRoute } from "../../lib/api/seo";

const fallbackMetadata: Metadata = {
  title: "Contact Advocate Tushar Garg | Legal Consultation & Office Address",
  description: "Get in touch with Advocate Tushar Garg, Advocate-on-Record, Supreme Court of India. Schedule a legal consultation for Supreme Court, High Court, and Tribunal cases.",
  keywords: [

    "Advocate on Record Tushar Garg",
    "Contact Advocate Tushar Garg",
    "Supreme Court Lawyer Contact",
    "Advocate on Record Phone Number",
    "Legal Consultation Supreme Court",
    "Supreme Court Office Address",
    "Book Lawyer Appointment Delhi"
  ],
  alternates: {
    canonical: "/contact",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return getSeoByRoute("/contact", fallbackMetadata);
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <ContactHero />

      {/* Floating Executive Quick Connect Bar */}
      <ContactInfoBar />
      
      {/* Main Content Layout */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 space-y-10">
        
        {/* Row 1: 4-Step Consultation Engagement Procedure (Full Width) */}
        <div className="w-full">
          <ConsultationProtocol />
        </div>

        {/* Row 2: Formal Case Intake Form (65%) & Executive Sidebar (35%) - Balanced Heights */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="lg:w-[65%] w-full">
            <ContactForm />
          </div>
          <div className="lg:w-[35%] w-full">
            <ContactSidebar />
          </div>
        </div>

        {/* Row 3: Chambers Location & Strategic Access (Full Width) */}
        <div className="w-full">
          <OfficeInfo />
        </div>

      </div>
      
      {/* Guarantees & Hotline Banner */}
      <ContactBanner />
    </main>
  );
}

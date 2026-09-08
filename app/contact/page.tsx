import type { Metadata } from "next";
import ContactHero from "./components/ContactHero";
import ContactInfoBar from "./components/ContactInfoBar";
import ContactForm from "./components/ContactForm";
import OfficeInfo from "./components/OfficeInfo";
import ContactSidebar from "./components/ContactSidebar";
import ContactBanner from "./components/ContactBanner";

import { getSeoByRoute } from "../../lib/api/seo";

const fallbackMetadata: Metadata = {
  title: "Contact Advocate Tushar Garg | Legal Consultation & Office Address",
  description: "Get in touch with Advocate Tushar Garg, Advocate-on-Record, Supreme Court of India. Schedule a legal consultation for Supreme Court, High Court, and Tribunal cases.",
  keywords: [
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
    <main className="min-h-screen bg-[#fafafa]">
      <ContactHero />
      <ContactInfoBar />
      
      <div className="max-w-[1280px] mx-auto px-4 mb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[65%]">
            <ContactForm />
            <OfficeInfo />
          </div>
          <div className="lg:w-[35%]">
            <ContactSidebar />
          </div>
        </div>
      </div>
      
      <ContactBanner />
    </main>
  );
}

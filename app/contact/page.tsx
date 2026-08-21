import ContactHero from "./components/ContactHero";
import ContactInfoBar from "./components/ContactInfoBar";
import ContactForm from "./components/ContactForm";
import OfficeInfo from "./components/OfficeInfo";
import ContactSidebar from "./components/ContactSidebar";
import ContactBanner from "./components/ContactBanner";

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

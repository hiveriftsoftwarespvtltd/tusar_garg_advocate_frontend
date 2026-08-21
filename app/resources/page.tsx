import ResourcesHero from "./components/ResourcesHero";
import ResourcesFilterBar from "./components/ResourcesFilterBar";
import ResourceTypeNav from "./components/ResourceTypeNav";
import ResourceSection from "./components/ResourceSection";
import ResourcesSidebar from "./components/ResourcesSidebar";
import ResourcesBanner from "./components/ResourcesBanner";

export default function ResourcesPage() {
  const glossaryItems = [
    { title: "Constitutional Terms & Definitions", desc: "Key terms related to the Constitution of India.", category: "Glossary", date: "16 May 2025", image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=300&auto=format&fit=crop" },
    { title: "Criminal Law Glossary", desc: "Important terms used in criminal law practice.", category: "Glossary", date: "14 May 2025", image: "https://images.unsplash.com/photo-1505664159871-9ca1920f01a4?q=80&w=300&auto=format&fit=crop" },
    { title: "Civil Law Glossary", desc: "Essential terms in civil law and procedure.", category: "Glossary", date: "12 May 2025", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=300&auto=format&fit=crop" },
  ];

  const maximsItems = [
    { title: "Actus Non Facit Reum Nisi Mens Sit Rea", desc: "An act does not make a person guilty unless there is a guilty mind.", category: "Maxims", date: "15 May 2025", image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=300&auto=format&fit=crop" },
    { title: "Nemo Judex in Sua Causa", desc: "No one should be a judge in his own cause.", category: "Maxims", date: "13 May 2025", image: "https://images.unsplash.com/photo-1505664159871-9ca1920f01a4?q=80&w=300&auto=format&fit=crop" },
    { title: "Audi Alteram Partem", desc: "Hear the other side.", category: "Maxims", date: "11 May 2025", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=300&auto=format&fit=crop" },
  ];

  const procedureItems = [
    { title: "How to File a Writ Petition", desc: "Procedure, documents and important steps.", category: "Procedures", date: "12 May 2025", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=300&auto=format&fit=crop" },
    { title: "Bail Application Process", desc: "Conditions, documents and hearing process.", category: "Procedures", date: "10 May 2025", image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=300&auto=format&fit=crop" },
    { title: "Case Status & Cause List", desc: "How to check case status and daily cause list.", category: "Procedures", date: "8 May 2025", image: "https://images.unsplash.com/photo-1505664159871-9ca1920f01a4?q=80&w=300&auto=format&fit=crop" },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <ResourcesHero />
      <ResourcesFilterBar />
      <ResourceTypeNav />
      
      <div className="max-w-[1280px] mx-auto px-4 mb-8">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-[65%]">
            <ResourceSection 
              title="LEGAL GLOSSARY" 
              featured={{
                badge: "FEATURED",
                title: "A-Z of Legal Terms",
                desc: "Understand key legal terms and their meanings with our comprehensive glossary.",
                category: "Glossary",
                date: "18 May 2025",
                image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
              }}
              items={glossaryItems}
            />
            
            <ResourceSection 
              title="LEGAL MAXIMS" 
              featured={{
                badge: "POPULAR",
                title: "Important Legal Maxims",
                desc: "Explore commonly used Latin maxims and their meaning in legal practice.",
                category: "Maxims",
                date: "17 May 2025",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
              }}
              items={maximsItems}
            />
            
            <ResourceSection 
              title="COURT PROCEDURES" 
              featured={{
                badge: "GUIDE",
                title: "Court Filing Procedure",
                desc: "Step-by-step guide to filing cases in Indian courts including required documents and processes.",
                category: "Procedures",
                date: "15 May 2025",
                image: "https://images.unsplash.com/photo-1505664159871-9ca1920f01a4?q=80&w=800&auto=format&fit=crop"
              }}
              items={procedureItems}
            />
          </div>
          <div className="xl:w-[35%]">
            <ResourcesSidebar />
          </div>
        </div>
      </div>
      
      <ResourcesBanner />
    </main>
  );
}

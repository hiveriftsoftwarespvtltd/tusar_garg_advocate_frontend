"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ResourcesHero from "./components/ResourcesHero";
import ResourcesFilterBar from "./components/ResourcesFilterBar";
import ResourceSection from "./components/ResourceSection";
import ResourcesSidebar from "./components/ResourcesSidebar";
import ResourcesBanner from "./components/ResourcesBanner";
import { fetchApi } from "../../lib/api/client";
import { 
  X, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Scale, 
  Gavel, 
  ExternalLink,
  ShieldCheck
} from "lucide-react";

export interface ResourceData {
  id: string;
  title: string;
  desc: string;
  category: "Glossary" | "Maxims" | "Procedures" | "Guides";
  date: string;
  image: string;
  badge: string;
  latinMeaning?: string;
  keyPoints?: string[];
  fullExplanation?: string;
  caseRef?: string;
  officialLink?: string;
}

const allResourcesData: ResourceData[] = [
  // GLOSSARY
  {
    id: "g-1",
    title: "A-Z of Constitutional Terms",
    desc: "Key terms related to Fundamental Rights, Writs, Preamble, and Constitutional Bench definitions.",
    category: "Glossary",
    date: "18 May 2025",
    image: "/resource/legal_glossary.png",
    badge: "CONSTITUTION",
    fullExplanation: "Comprehensive dictionary covering Constitutional terms including Article 21, Habeas Corpus, Mandamus, Quo Warranto, Judicial Review, and Basic Structure Doctrine.",
    keyPoints: [
      "Writs under Article 32 & 226 defined with scope.",
      "Key definitions of Sovereign, Socialist, Secular, Democratic, Republic.",
      "Explanation of Advisory Jurisdiction & Curative Petitions."
    ],
    caseRef: "Kesavananda Bharati v. State of Kerala (1973)"
  },
  {
    id: "g-2",
    title: "Criminal Law Terms & Bails",
    desc: "Important terms used in criminal trial, FIR, Anticipatory Bail, Cognizable Offences and Charge Sheets.",
    category: "Glossary",
    date: "16 May 2025",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=400&auto=format&fit=crop",
    badge: "CRIMINAL LAW",
    fullExplanation: "Essential terminology under CrPC 1973 and Bharatiya Nagarik Suraksha Sanhita (BNSS), covering Cognizable vs Non-Cognizable, Bailable vs Non-Bailable offences, and Discharge applications.",
    keyPoints: [
      "Difference between Section 437, 438, and 439 Bail provisions.",
      "Zero FIR and Statement under Section 164 CrPC.",
      "Police Custody vs Judicial Remand."
    ],
    caseRef: "Arnesh Kumar v. State of Bihar (2014)"
  },
  {
    id: "g-3",
    title: "Civil & Commercial Law Glossary",
    desc: "Essential terms in civil suits, Res Judicata, Injunctions, CPC, and Corporate Insolvency (IBC).",
    category: "Glossary",
    date: "14 May 2025",
    image: "https://images.unsplash.com/photo-1505664159871-9ca1920f01a4?q=80&w=400&auto=format&fit=crop",
    badge: "CIVIL & IBC",
    fullExplanation: "Definitions covering Civil Procedure Code (CPC 1908), Order 39 Injunctions, Section 11 Res Judicata, Caveat Petitions, and CIRP under Insolvency and Bankruptcy Code 2016.",
    keyPoints: [
      "Order 39 Rules 1 & 2 Temporary Injunctions.",
      "Section 9 & 11 Arbitration & Conciliation Act.",
      "NCLT CIRP Initiation & Moratorium Under Section 14 IBC."
    ],
    caseRef: "Vidya Drolia v. Durga Trading Corp (2021)"
  },

  // MAXIMS
  {
    id: "m-1",
    title: "Actus Non Facit Reum Nisi Mens Sit Rea",
    desc: "An act does not make a person guilty unless there is a guilty mind (Criminal Intent).",
    category: "Maxims",
    date: "17 May 2025",
    image: "/resource/legal_maxims.png",
    badge: "CRIMINAL MAXIM",
    latinMeaning: "Actus Reus + Mens Rea = Criminal Liability",
    fullExplanation: "Fundamental principle of criminal jurisprudence stating that for crime liability, there must be both a physical prohibited act (Actus Reus) combined with a culpable mental state (Mens Rea).",
    keyPoints: [
      "Physical act alone without criminal intent is not punishable in general criminal law.",
      "Exceptions: Strict liability statutory offences like Food Adulteration and Environmental pollution.",
      "Applied under Sections 80 to 106 IPC General Exceptions."
    ],
    caseRef: "R. v. Prince (1875) L.R. 2 C.C.R. 154"
  },
  {
    id: "m-2",
    title: "Nemo Judex In Causa Sua",
    desc: "No person shall be a judge in their own cause (First Principle of Natural Justice).",
    category: "Maxims",
    date: "15 May 2025",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop",
    badge: "NATURAL JUSTICE",
    latinMeaning: "Rule Against Bias",
    fullExplanation: "Corpus rule of Natural Justice prohibiting pecuniary bias, personal bias, or official bias in judicial, quasi-judicial, and administrative decision-making.",
    keyPoints: [
      "Disqualifies any adjudicator having personal interest or bias.",
      "Mandatory for Courts, Tribunals (NCLT, NGT, ITAT) and Arbitrators.",
      "Violation renders judicial order void ab initio."
    ],
    caseRef: "AK Kraipak v. Union of India (1969)"
  },
  {
    id: "m-3",
    title: "Audi Alteram Partem",
    desc: "Hear the other side — No person shall be condemned unheard.",
    category: "Maxims",
    date: "13 May 2025",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&auto=format&fit=crop",
    badge: "NATURAL JUSTICE",
    latinMeaning: "Right to Fair Hearing",
    fullExplanation: "Mandatory natural justice rule requiring prior notice, opportunity of being heard, disclosure of evidence, and reasoned order (speaking order) before passing adverse orders.",
    keyPoints: [
      "Notice must be specific, unambiguous and provide adequate preparation time.",
      "Right to cross-examination and submission of counter-affidavits.",
      "Reasoned Order requirement for quasi-judicial bodies."
    ],
    caseRef: "Maneka Gandhi v. Union of India (1978)"
  },

  // PROCEDURES
  {
    id: "p-1",
    title: "How to File a Supreme Court Writ Petition",
    desc: "Step-by-step guide to drafting, filing and listing Writ Petitions under Article 32 in Supreme Court.",
    category: "Procedures",
    date: "18 May 2025",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=400&auto=format&fit=crop",
    badge: "PROCEDURE GUIDE",
    fullExplanation: "Complete procedural roadmap for drafting, indexing, filing, e-filing, scrutiny by Registry, listing before Court, and arguing Writ Petitions in the Supreme Court of India.",
    keyPoints: [
      "Drafting by Advocate-on-Record (AOR) with Synopsis & List of Dates.",
      "Affidavit, Court Fees, Paper Book binding & e-Filing portal upload.",
      "Scrutiny defects cure within 28 days & Computer Registry listing."
    ],
    officialLink: "https://main.sci.gov.in"
  },
  {
    id: "p-2",
    title: "Bail Application & Suspension of Sentence",
    desc: "Procedural steps for Regular Bail, Anticipatory Bail (Sec 438) and Interim Bail in High Courts.",
    category: "Procedures",
    date: "15 May 2025",
    image: "https://images.unsplash.com/photo-1505664159871-9ca1920f01a4?q=80&w=400&auto=format&fit=crop",
    badge: "BAIL PROCEDURE",
    fullExplanation: "Detailed process for invoking High Court and Sessions Court jurisdiction under Section 438 & 439 CrPC / BNSS, including annexures, case diary inspection, and bail condition compliance.",
    keyPoints: [
      "Filing Anticipatory Bail prior to arrest with apprehending apprehension grounds.",
      "Regular Bail application post arrest with charge sheet filing status.",
      "Bail Bond submission & Release Warrant execution before Jail Superintendent."
    ],
    caseRef: "Sanjay Chandra v. CBI (2012)"
  },
  {
    id: "p-3",
    title: "Checking Case Status & Daily Cause List",
    desc: "How to check Supreme Court & High Court daily cause lists, item numbers, and case status.",
    category: "Procedures",
    date: "12 May 2025",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop",
    badge: "PORTAL GUIDE",
    fullExplanation: "Practical guide for advocates, litigants, and researchers on navigating e-Courts services, Supreme Court Mobile App, Cause List item tracking, and digital order downloads.",
    keyPoints: [
      "Searching by CNR Number, Case Number, Party Name, or Advocate Name.",
      "Downloading signed PDF Judgment & Certified Copies from Registry.",
      "Tracking Live Display Boards of Supreme Court & High Court Benches."
    ],
    officialLink: "https://ecourts.gov.in"
  }
];

function ResourcesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || searchParams.get("type") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [resourcesList, setResourcesList] = useState<ResourceData[]>(allResourcesData);
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<ResourceData | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchApi('/resources');
        if (data && Array.isArray(data) && data.length > 0) {
          setResourcesList(data);
        }
      } catch (err) {
        console.error("Failed to load resources from API", err);
      }
    }
    loadData();
  }, []);

  const filteredData = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    return resourcesList.filter(item => {
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) || 
        item.desc.toLowerCase().includes(q) || 
        item.badge?.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      const matchesTab = activeTab === "All" || item.category.toLowerCase() === activeTab.toLowerCase();
      const matchesCategory = activeCategory === "All" || item.category.toLowerCase().includes(activeCategory.toLowerCase());

      return matchesSearch && matchesTab && matchesCategory;
    });
  }, [resourcesList, searchTerm, activeTab, activeCategory]);

  const glossaryItems = useMemo(() => filteredData.filter(i => i.category === "Glossary"), [filteredData]);
  const maximsItems = useMemo(() => filteredData.filter(i => i.category === "Maxims"), [filteredData]);
  const procedureItems = useMemo(() => filteredData.filter(i => i.category === "Procedures"), [filteredData]);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <ResourcesHero />

      {/* Dynamic Search & Filter Controls */}
      <ResourcesFilterBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        totalCount={filteredData.length}
      />

      {/* Main Grid Content */}
      <div className="max-w-[1280px] mx-auto px-4 mb-12">
        <div className="flex flex-col xl:flex-row gap-8">
          
          <div className="xl:w-[65%] space-y-10">
            {filteredData.length === 0 ? (
              <div className="bg-white border border-[#e8ebf2] rounded-2xl p-12 text-center space-y-3 shadow-sm">
                <p className="text-base font-bold text-[#0d1b3e]">No resources matching your search &quot;{searchTerm}&quot;</p>
                <p className="text-xs text-gray-500">Try clearing your filters or searching for terms like &quot;Writ&quot;, &quot;Bail&quot;, &quot;Article 21&quot;, or &quot;Natural Justice&quot;.</p>
                <button 
                  onClick={() => { setSearchTerm(""); setActiveTab("All"); setActiveCategory("All"); }}
                  className="inline-flex items-center gap-2 bg-[#0d1b3e] text-[#c9a84c] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#1a2b5e] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <>
                {(activeTab === "All" || activeTab === "Glossary") && glossaryItems.length > 0 && (
                  <ResourceSection 
                    title="LEGAL GLOSSARY & TERMINOLOGY" 
                    items={glossaryItems}
                    onSelect={(item) => setSelectedItem(item)}
                  />
                )}

                {(activeTab === "All" || activeTab === "Maxims") && maximsItems.length > 0 && (
                  <ResourceSection 
                    title="LEGAL MAXIMS & PRINCIPLES" 
                    items={maximsItems}
                    onSelect={(item) => setSelectedItem(item)}
                  />
                )}

                {(activeTab === "All" || activeTab === "Procedures") && procedureItems.length > 0 && (
                  <ResourceSection 
                    title="COURT PROCEDURES & LITIGATION GUIDES" 
                    items={procedureItems}
                    onSelect={(item) => setSelectedItem(item)}
                  />
                )}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="xl:w-[35%]">
            <ResourcesSidebar />
          </div>

        </div>
      </div>
      
      <ResourcesBanner />

      {/* KNOWLEDGE READER MODAL POPUP */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/65 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8 animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#0d1b3e] text-white px-6 py-4 flex items-center justify-between border-b border-[#c9a84c]/30">
              <div className="flex items-center gap-3">
                <span className="bg-[#c9a84c] text-[#071126] text-[10px] font-extrabold px-2.5 py-1 rounded uppercase tracking-widest">
                  {selectedItem.badge}
                </span>
                <h3 className="font-serif text-lg font-bold text-white line-clamp-1">{selectedItem.title}</h3>
              </div>
              <button 
                type="button" 
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close legal guide modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 space-y-5 max-h-[72vh] overflow-y-auto">
              
              {selectedItem.latinMeaning && (
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-center gap-3 text-amber-950 font-serif font-bold text-sm">
                  <Scale className="text-[#c9a84c] flex-shrink-0" size={20} />
                  <span>Latin Meaning: {selectedItem.latinMeaning}</span>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Legal Overview</h4>
                <p className="text-sm text-[#0d1b3e] font-medium leading-relaxed bg-[#0d1b3e]/5 p-4 rounded-xl border border-[#0d1b3e]/10">
                  {selectedItem.fullExplanation || selectedItem.desc}
                </p>
              </div>

              {selectedItem.keyPoints && selectedItem.keyPoints.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Key Principles & Procedural Steps:</h4>
                  <ul className="space-y-2.5">
                    {selectedItem.keyPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-800 font-semibold bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <CheckCircle2 size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedItem.caseRef && (
                <div className="flex items-center gap-2 text-xs font-bold text-[#0d1b3e] bg-gray-100 p-3 rounded-xl">
                  <Gavel size={16} className="text-[#c9a84c]" />
                  <span>Landmark Case Precedent: {selectedItem.caseRef}</span>
                </div>
              )}

              <div className="flex items-center gap-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
                <span className="flex items-center gap-1.5"><BookOpen size={13} /> Category: {selectedItem.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Calendar size={13} /> Updated: {selectedItem.date}</span>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-100">
              {selectedItem.officialLink ? (
                <a 
                  href={selectedItem.officialLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs font-bold text-[#c9a84c] hover:underline flex items-center gap-1"
                >
                  <span>Official Portal</span> <ExternalLink size={13} />
                </a>
              ) : (
                <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                  <ShieldCheck size={14} className="text-[#c9a84c]" /> Verified Advocate Knowledge Resource
                </span>
              )}
              <button 
                type="button" 
                onClick={() => setSelectedItem(null)}
                className="bg-[#0d1b3e] text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#c9a84c] hover:text-[#071126] transition-colors"
              >
                Close Guide
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center text-gray-500 font-medium">
        Loading Legal Resources...
      </div>
    }>
      <ResourcesContent />
    </Suspense>
  );
}

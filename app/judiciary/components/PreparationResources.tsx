"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ClipboardList, 
  UserSquare2, 
  BookOpen, 
  FileCheck2, 
  Newspaper, 
  Scale, 
  Landmark, 
  Languages, 
  ArrowRight,
  X,
  CheckCircle2,
  FileText,
  Download,
  ExternalLink
} from "lucide-react";

interface ResourceItem {
  id: string;
  title: string;
  category: string;
  icon: any;
  link?: string;
  isModal?: boolean;
  content?: {
    overview: string;
    keyPoints: string[];
    details: string;
  };
}

export default function PreparationResources() {
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);

  const resources: ResourceItem[] = [
    { 
      id: "eligibility",
      title: "Eligibility Criteria", 
      category: "Requirements",
      icon: <ClipboardList size={22} strokeWidth={1.5} />,
      isModal: true,
      content: {
        overview: "Standard eligibility criteria for Indian Judicial Services (Civil Judge Jr Division & HJS)",
        keyPoints: [
          "Degree in Law (LL.B 3-Year or 5-Year Integrated) from a Bar Council recognized university.",
          "Must be enrolled as an Advocate under the Advocates Act, 1961 (for HJS: 7 years active practice).",
          "Citizen of India with sound moral character and physical fitness."
        ],
        details: "Detailed eligibility requirements vary slightly by state PSC/High Court notification. Ensure all degree certificates and Bar Enrollment certificates are updated before application."
      }
    },
    { 
      id: "age-limits",
      title: "Age Limits & Rules", 
      category: "Age Rules",
      icon: <UserSquare2 size={22} strokeWidth={1.5} />,
      isModal: true,
      content: {
        overview: "Age qualification limits across State Judicial Officer examinations",
        keyPoints: [
          "Civil Judge (Junior Division): Minimum 21 Years - Maximum 35 Years (varies by state up to 42 for reserved categories).",
          "Higher Judicial Services (Direct HJS): Minimum 35 Years - Maximum 45 Years.",
          "Age relaxation as per State Government rules for SC/ST/OBC and Persons with Benchmark Disabilities."
        ],
        details: "Cut-off age determination date is specified in individual High Court/PSC notification releases."
      }
    },
    { 
      id: "syllabus",
      title: "Judiciary Syllabus", 
      category: "Exam Pattern",
      icon: <BookOpen size={22} strokeWidth={1.5} />,
      isModal: true,
      content: {
        overview: "Comprehensive 3-Tier Exam Pattern & Core Legal Subjects",
        keyPoints: [
          "Prelims (Objective): Constitution, IPC, CrPC, CPC, Evidence Act, Contract Act, Local Laws & General Knowledge.",
          "Mains (Written): Civil Law I, Civil Law II, Criminal Law, Language (English & Vernacular), Judgment Writing.",
          "Viva-Voce: Legal aptitude, personality test, situational judgment & oral communication."
        ],
        details: "Check state-specific local acts (e.g. Haryana Urban Control Act, Delhi Rent Control Act) for state Judiciary papers."
      }
    },
    { 
      id: "previous-papers",
      title: "Previous Papers", 
      category: "Question Bank",
      icon: <FileCheck2 size={22} strokeWidth={1.5} />,
      isModal: true,
      content: {
        overview: "State-wise 10 Year Previous Year Question Papers & Answer Keys",
        keyPoints: [
          "Delhi Judicial Services (DJS) Prelims & Mains Solved Papers (2015-2024)",
          "Haryana PCS-J Solved Question Papers",
          "UP PCS-J & MP Civil Judge Model Answer Key Sheets"
        ],
        details: "Practicing previous papers improves speed, accuracy, and understanding of landmark judgment application."
      }
    },
    { 
      id: "legal-affairs",
      title: "Current Legal Affairs", 
      category: "Legal Insights",
      icon: <Newspaper size={22} strokeWidth={1.5} />,
      link: "/articles?category=Legal+Affairs"
    },
    { 
      id: "bare-acts",
      title: "Indian Bare Acts", 
      category: "Statutes",
      icon: <Scale size={22} strokeWidth={1.5} />,
      link: "/laws"
    },
    { 
      id: "judgments",
      title: "Important Judgments", 
      category: "Case Laws",
      icon: <Landmark size={22} strokeWidth={1.5} />,
      link: "/judgments"
    },
    { 
      id: "legal-english",
      title: "Legal English & Drafting", 
      category: "Drafting",
      icon: <Languages size={22} strokeWidth={1.5} />,
      isModal: true,
      content: {
        overview: "Legal Translation, Essay Writing & Judgment Drafting Guidance",
        keyPoints: [
          "Translation from Vernacular State Language to English & vice-versa.",
          "Legal Essay Writing on Constitutional & Current Socio-Legal issues.",
          "Framing of Issues, Charge Sheet Framing & Judgment Writing Technique."
        ],
        details: "Scoring high in Language and Judgment Writing papers is critical for final merit list selection."
      }
    },
  ];

  return (
    <section className="bg-white border border-[#e8ebf2] rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[1px] bg-[#c9a84c] hidden md:block"></div>
            <h2 className="font-serif text-[14px] md:text-[15px] text-[#0d1b3e] uppercase tracking-[0.05em]">
              PREPARATION RESOURCES
            </h2>
          </div>
          <span className="text-[11px] font-bold text-[#c9a84c] bg-[#0d1b3e]/5 px-2.5 py-1 rounded-md">
            Click Any Resource to Explore
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
          {resources.map((resource) => {
            if (resource.link) {
              return (
                <Link 
                  key={resource.id} 
                  href={resource.link}
                  className="flex items-center gap-3.5 bg-white border border-[#e8ebf2] rounded-lg p-3 group cursor-pointer hover:border-[#c9a84c]/60 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-[#c9a84c] flex-shrink-0 group-hover:scale-110 transition-transform duration-300 p-1.5 bg-[#0d1b3e]/5 rounded-lg group-hover:bg-[#0d1b3e] group-hover:text-white">
                    {resource.icon}
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="text-[12px] font-semibold text-[#0d1b3e] truncate group-hover:text-[#c9a84c] transition-colors">
                      {resource.title}
                    </h3>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-[#c9a84c] opacity-80 group-hover:opacity-100 transition-opacity mt-0.5 uppercase tracking-wider">
                      Explore <ExternalLink size={10} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            }

            return (
              <button 
                key={resource.id}
                type="button"
                onClick={() => setSelectedResource(resource)}
                className="flex items-center gap-3.5 bg-white border border-[#e8ebf2] rounded-lg p-3 group cursor-pointer hover:border-[#c9a84c]/60 hover:shadow-md transition-all duration-300 text-left w-full"
              >
                <div className="text-[#c9a84c] flex-shrink-0 group-hover:scale-110 transition-transform duration-300 p-1.5 bg-[#0d1b3e]/5 rounded-lg group-hover:bg-[#0d1b3e] group-hover:text-white">
                  {resource.icon}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <h3 className="text-[12px] font-semibold text-[#0d1b3e] truncate group-hover:text-[#c9a84c] transition-colors">
                    {resource.title}
                  </h3>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-[#c9a84c] opacity-80 group-hover:opacity-100 transition-opacity mt-0.5 uppercase tracking-wider">
                    View Guide <ArrowRight size={10} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* IN-PAGE STUDY GUIDE MODAL POPUP */}
      {selectedResource && selectedResource.content && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8 animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#0d1b3e] text-white px-6 py-4 flex items-center justify-between border-b border-[#c9a84c]/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#c9a84c]/20 text-[#c9a84c] rounded-lg">
                  {selectedResource.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#c9a84c] uppercase tracking-widest">{selectedResource.category}</span>
                  <h3 className="font-serif text-lg font-bold text-white">{selectedResource.title}</h3>
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => setSelectedResource(null)}
                className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close guide modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
              <div className="bg-[#0d1b3e]/5 p-4 rounded-xl border border-[#0d1b3e]/10">
                <p className="text-sm font-semibold text-[#0d1b3e]">
                  {selectedResource.content.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Key Rules & Exam Guidelines:</h4>
                <ul className="space-y-2.5">
                  {selectedResource.content.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                      <CheckCircle2 size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
                <p className="font-bold mb-1 text-[#0d1b3e]">Note for Aspirants:</p>
                {selectedResource.content.details}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-100">
              <span className="text-xs text-gray-500 font-medium">Tushar Garg Advocate Judicial Guidance</span>
              <button
                type="button"
                onClick={() => setSelectedResource(null)}
                className="bg-[#0d1b3e] text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#c9a84c] hover:text-[#071126] transition-colors"
              >
                Close Guide
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

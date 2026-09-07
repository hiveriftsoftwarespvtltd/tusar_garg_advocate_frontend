import { ChevronRight, Book, FileText, Scale, Newspaper, HelpCircle, Bot, FileEdit, Briefcase, Target, Search, GraduationCap, User, Building, Users, Landmark } from "lucide-react";
import Link from "next/link";

const columns = [
  {
    title: "TOOLS & RESOURCES",
    items: [
      { title: "Bare Acts", subtitle: "Complete database of Bare Acts", icon: <Book size={20} className="text-[#0d1b3e]" />, href: "/laws" },
      { title: "Legal Drafts", subtitle: "Drafts, Templates & Formats", icon: <FileText size={20} className="text-[#0d1b3e]" />, href: "/resources/legal-drafts" },
      { title: "Judgments", subtitle: "Search & access judgments", icon: <Scale size={20} className="text-[#0d1b3e]" />, href: "/judgments" },
      { title: "Legal Articles", subtitle: "In-depth legal insights", icon: <Newspaper size={20} className="text-[#0d1b3e]" />, href: "/articles" },
      { title: "FAQs", subtitle: "Find answers to common queries", icon: <HelpCircle size={20} className="text-[#0d1b3e]" />, href: "/resources/faqs" },
    ],
    buttonText: "EXPLORE RESOURCES",
    buttonHref: "/resources"
  },
  {
    title: "ASSISTANT & SERVICES",
    items: [
      { title: "Ask Legal Assistant", subtitle: "Get answers to your legal queries", icon: <Bot size={20} className="text-[#0d1b3e]" />, href: "/contact" },
      { title: "Notice & Drafts", subtitle: "Draft notices and legal documents", icon: <FileEdit size={20} className="text-[#0d1b3e]" />, href: "/resources/legal-drafts" },
      { title: "Legal Opinions", subtitle: "Expert legal opinions", icon: <Briefcase size={20} className="text-[#0d1b3e]" />, href: "/contact" },
      { title: "Case Strategy", subtitle: "Plan your case with experts", icon: <Target size={20} className="text-[#0d1b3e]" />, href: "/contact" },
      { title: "Document Review", subtitle: "Get your documents reviewed", icon: <Search size={20} className="text-[#0d1b3e]" />, href: "/contact" },
    ],
    buttonText: "EXPLORE SERVICES",
    buttonHref: "/contact"
  },
  {
    title: "LEGAL JOBS",
    items: [
      { title: "Law Internships", subtitle: "Apply for internships", icon: <GraduationCap size={20} className="text-[#0d1b3e]" />, href: "/jobs" },
      { title: "Associate Jobs", subtitle: "Find associate-level jobs", icon: <User size={20} className="text-[#0d1b3e]" />, href: "/jobs" },
      { title: "Law Firms", subtitle: "Explore opportunities", icon: <Building size={20} className="text-[#0d1b3e]" />, href: "/jobs" },
      { title: "Consultancy", subtitle: "Work with legal consultants", icon: <Users size={20} className="text-[#0d1b3e]" />, href: "/jobs" },
      { title: "Government Jobs", subtitle: "Find government legal jobs", icon: <Landmark size={20} className="text-[#0d1b3e]" />, href: "/jobs" },
    ],
    buttonText: "BROWSE JOBS",
    buttonHref: "/jobs"
  }
];

export default function HomeResourcesServicesJobs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1600px] mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, idx) => (
            <div key={idx} className="bg-[#fcfaf6] rounded-xl p-8 flex flex-col border border-gray-100">
              
              <div className="text-center mb-8">
                <h3 className="text-[#0d1b3e] text-[15px] font-semibold uppercase tracking-wider mb-2">
                  {col.title}
                </h3>
                <div className="w-12 h-[2px] bg-[#c9a84c] mx-auto" />
              </div>

              <div className="flex-1 flex flex-col gap-5 mb-8">
                {col.items.map((item, i) => (
                  <Link 
                    key={i} 
                    href={item.href || col.buttonHref}
                    className="flex items-center gap-4 group cursor-pointer hover:translate-x-1 transition-all"
                  >
                    <div className="w-[42px] h-[42px] flex-shrink-0 bg-white rounded flex items-center justify-center shadow-sm border border-gray-200 group-hover:border-[#c9a84c] group-hover:scale-105 transition-all">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[#0d1b3e] font-semibold text-[13px] group-hover:text-[#c9a84c] transition-colors truncate">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-[11px] truncate">{item.subtitle}</p>
                    </div>
                    <ChevronRight size={14} className="text-gray-400 group-hover:text-[#c9a84c] transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>

              <Link 
                href={col.buttonHref}
                className="w-full inline-flex items-center justify-center bg-[#0d1b3e] text-white px-6 py-3.5 text-[11px] font-bold tracking-widest hover:bg-[#1a2e63] transition-colors"
              >
                {col.buttonText} <span className="ml-2 font-normal text-[#c9a84c]">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

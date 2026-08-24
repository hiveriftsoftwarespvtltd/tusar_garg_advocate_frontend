import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Scale, User, Clock, ShieldCheck, Lock, Landmark, Calendar, Search, Bell, HelpCircle, FileText, ExternalLink, BookOpen } from "lucide-react";
import FaqAccordion from "./FaqAccordion";

export type CourtData = {
  breadcrumbs: { label: string; href?: string }[];
  hero: { title: string; description: string; backgroundImage: string; };
  stats: { icon: React.ElementType; value: string; label: string; }[];
  about: { title: string; image: string; paragraphs: string[]; };
  benchesSection: { title: string; benches: { icon: React.ElementType; title: string; description: string; }[]; };
  judges: { title: string; subtitle: string; }[];
  practiceAreas: { icon: React.ElementType; title: string; description: string; }[];
  services: { icon: React.ElementType; title: string; description: string; }[];
  timings: { day: string; time: string; highlight?: boolean }[];
  notices: { date: string; title: string; link: string; }[];
  faqs: { question: string; answer: string; }[];
  resources: { icon: React.ElementType; title: string; description: string; link: string; linkText: string; }[];
  consultation: { title: string; subtitle: string; description: string; };
};

export default function CourtTemplate({ data }: { data: CourtData }) {
  return (
    <main className="min-h-screen bg-[#fcfcfc] font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] lg:h-[550px] flex items-center bg-[#0d1b3e]">
        <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full z-0 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.hero.backgroundImage})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0d1b3e]/60 to-[#0d1b3e] hidden lg:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e] via-[#0d1b3e]/80 to-transparent lg:hidden"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0d1b3e] z-0 hidden lg:block"></div>
        <div className="max-w-[1280px] mx-auto w-full px-4 relative z-10 flex justify-end">
          <div className="w-full lg:w-[55%] flex flex-col items-start lg:pl-10 mt-20 lg:mt-0">
            <nav className="flex items-center flex-wrap gap-2 text-[12px] md:text-[13px] font-medium text-white/80 mb-6 tracking-wide">
              {data.breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#c9a84c] transition-colors whitespace-nowrap">{crumb.label}</Link>
                  ) : (
                    <span className="text-[#c9a84c] whitespace-nowrap">{crumb.label}</span>
                  )}
                  {idx < data.breadcrumbs.length - 1 && <ChevronRight size={14} className="opacity-70 flex-shrink-0" />}
                </React.Fragment>
              ))}
            </nav>
            <h1 className="text-[32px] md:text-[46px] lg:text-[52px] font-serif text-white mb-6 tracking-tight leading-[1.1] uppercase">
              {data.hero.title}
            </h1>
            <div className="flex items-center gap-3 mb-6 w-full max-w-[300px]">
              <div className="h-[1px] bg-white/20 flex-1"></div>
              <Landmark size={20} className="text-[#c9a84c]" strokeWidth={1.5} />
              <div className="h-[1px] bg-white/20 flex-1"></div>
            </div>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white/90 leading-relaxed max-w-[550px] font-medium">
              {data.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="relative z-20 max-w-[1200px] mx-auto px-4 -mt-16 mb-16">
        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#f0f0f0] p-6 lg:p-0 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#e5e7eb]">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 p-6 text-center lg:text-left">
              <div className="text-[#c9a84c]"><stat.icon size={36} strokeWidth={1.5} /></div>
              <div className="flex flex-col">
                <span className="text-[18px] lg:text-[20px] font-bold text-[#0d1b3e] leading-tight">{stat.value}</span>
                <span className="text-[13px] text-[#6b7280] font-medium">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Section */}
      <section className="py-16 max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#f0f0f0]">
              <Image src={data.about.image} alt={data.about.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-[24px] md:text-[28px] font-serif font-bold text-[#0d1b3e] mb-6 uppercase tracking-wide">
              {data.about.title}
            </h2>
            <div className="space-y-4 text-[15px] text-[#4b5563] leading-relaxed">
              {data.about.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Jurisdiction & Benches */}
      {data.benchesSection.benches.length > 0 && (
        <section className="py-16 bg-[#f9fafb]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12 flex flex-col items-center">
              <h2 className="text-[22px] md:text-[26px] font-serif font-bold text-[#0d1b3e] mb-3 uppercase tracking-wider">
                {data.benchesSection.title}
              </h2>
              <div className="flex items-center gap-3 w-full max-w-[200px]">
                <div className="h-[1px] bg-[#d1d5db] flex-1"></div>
                <Scale size={20} className="text-[#c9a84c]" strokeWidth={1.5} />
                <div className="h-[1px] bg-[#d1d5db] flex-1"></div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {data.benchesSection.benches.map((bench, idx) => (
                <div key={idx} className="w-full md:w-[calc(50%-12px)] bg-white border border-[#f0f0f0] rounded-xl p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-[#f9fafb] border border-[#e5e7eb] flex items-center justify-center flex-shrink-0">
                    <bench.icon size={36} className="text-[#c9a84c]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[18px] font-serif font-bold text-[#0d1b3e] mb-2">{bench.title}</h3>
                    <p className="text-[14px] text-[#6b7280] leading-relaxed">{bench.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Judges / Bench */}
      {data.judges && data.judges.length > 0 && (
        <section className="py-16 bg-white border-t border-[#f0f0f0]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12 flex flex-col items-center">
              <h2 className="text-[22px] md:text-[26px] font-serif font-bold text-[#0d1b3e] mb-3 uppercase tracking-wider">
                NOTABLE JUDGES & ROSTER
              </h2>
              <div className="flex items-center gap-3 w-full max-w-[200px]">
                <div className="h-[1px] bg-[#d1d5db] flex-1"></div>
                <User size={20} className="text-[#c9a84c]" strokeWidth={1.5} />
                <div className="h-[1px] bg-[#d1d5db] flex-1"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.judges.map((judge, idx) => (
                <div key={idx} className="bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-[#f3f4f6] flex items-center justify-center mb-4">
                    <User size={28} className="text-[#4b5563]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0d1b3e] mb-1">{judge.title}</h3>
                  <span className="text-[13px] text-[#6b7280]">{judge.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Practice Areas */}
      <section className="py-16 bg-[#fcfcfc] border-t border-[#f0f0f0]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-[22px] md:text-[26px] font-serif font-bold text-[#0d1b3e] mb-3 uppercase tracking-wider">
              AREAS OF PRACTICE
            </h2>
            <div className="flex items-center gap-3 w-full max-w-[200px]">
              <div className="h-[1px] bg-[#d1d5db] flex-1"></div>
              <Scale size={20} className="text-[#c9a84c]" strokeWidth={1.5} />
              <div className="h-[1px] bg-[#d1d5db] flex-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.practiceAreas.map((area, idx) => (
              <div key={idx} className="bg-white border border-[#f0f0f0] rounded-xl p-8 flex flex-col items-center text-center hover:border-[#c9a84c]/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group">
                <area.icon size={42} className="text-[#c9a84c] mb-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h3 className="text-[15px] font-serif font-bold text-[#0d1b3e] mb-2">{area.title}</h3>
                <p className="text-[13px] text-[#6b7280] leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Court Services */}
      {data.services && data.services.length > 0 && (
        <section className="py-16 bg-[#0d1b3e]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-12 flex flex-col items-center">
              <h2 className="text-[22px] md:text-[26px] font-serif font-bold text-white mb-3 uppercase tracking-wider">
                COURT SERVICES & FACILITIES
              </h2>
              <div className="flex items-center gap-3 w-full max-w-[200px]">
                <div className="h-[1px] bg-white/20 flex-1"></div>
                <Landmark size={20} className="text-[#c9a84c]" strokeWidth={1.5} />
                <div className="h-[1px] bg-white/20 flex-1"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.services.map((service, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                  <service.icon size={36} className="text-[#c9a84c] mb-4" strokeWidth={1.5} />
                  <h3 className="text-[16px] font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-[13px] text-white/70 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Timings & Notices (Split Section) */}
      <section className="py-16 bg-[#fcfcfc]">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-10">
          {/* Timings */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-sm border border-[#f0f0f0] p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#0d1b3e] flex items-center justify-center text-[#c9a84c]">
                <Clock size={24} />
              </div>
              <h2 className="text-[20px] font-serif font-bold text-[#0d1b3e] uppercase">Court Timings</h2>
            </div>
            <ul className="space-y-4">
              {data.timings.map((time, idx) => (
                <li key={idx} className={`flex justify-between items-center pb-4 border-b border-[#e5e7eb] last:border-0 last:pb-0 ${time.highlight ? 'font-bold text-[#0d1b3e]' : 'text-[#4b5563] text-[14px]'}`}>
                  <span>{time.day}</span>
                  <span className={time.highlight ? 'text-[#c9a84c]' : ''}>{time.time}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Notices */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-sm border border-[#f0f0f0] p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#0d1b3e] flex items-center justify-center text-[#c9a84c]">
                <Bell size={24} />
              </div>
              <h2 className="text-[20px] font-serif font-bold text-[#0d1b3e] uppercase">Notices & Updates</h2>
            </div>
            <div className="space-y-4">
              {data.notices.map((notice, idx) => (
                <a key={idx} href={notice.link} className="block group border-l-2 border-[#e5e7eb] pl-4 py-1 hover:border-[#c9a84c] transition-colors">
                  <span className="block text-[12px] text-[#6b7280] font-medium mb-1">{notice.date}</span>
                  <span className="block text-[14px] text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors line-clamp-2">{notice.title}</span>
                </a>
              ))}
              <Link href="#" className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#c9a84c] mt-4 hover:underline">
                View All Notices <ChevronRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-16 bg-[#f9fafb] border-t border-[#f0f0f0]">
          <div className="max-w-[800px] mx-auto px-4">
            <div className="text-center mb-12 flex flex-col items-center">
              <h2 className="text-[22px] md:text-[26px] font-serif font-bold text-[#0d1b3e] mb-3 uppercase tracking-wider">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="flex items-center gap-3 w-full max-w-[200px]">
                <div className="h-[1px] bg-[#d1d5db] flex-1"></div>
                <HelpCircle size={20} className="text-[#c9a84c]" strokeWidth={1.5} />
                <div className="h-[1px] bg-[#d1d5db] flex-1"></div>
              </div>
            </div>
            <FaqAccordion faqs={data.faqs} />
          </div>
        </section>
      )}

      {/* 10. Important Links / Case Info */}
      <section className="py-16 bg-white border-t border-[#f0f0f0]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12 flex flex-col items-center">
            <h2 className="text-[22px] md:text-[26px] font-serif font-bold text-[#0d1b3e] mb-3 uppercase tracking-wider">
              CASE INFORMATION & LINKS
            </h2>
            <div className="flex items-center gap-3 w-full max-w-[200px]">
              <div className="h-[1px] bg-[#d1d5db] flex-1"></div>
              <ExternalLink size={20} className="text-[#c9a84c]" strokeWidth={1.5} />
              <div className="h-[1px] bg-[#d1d5db] flex-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.resources.map((res, idx) => (
              <div key={idx} className="bg-[#f9fafb] border border-[#f0f0f0] rounded-xl p-8 flex flex-col items-start group hover:shadow-md hover:bg-white transition-all duration-300">
                <res.icon size={36} className="text-[#0d1b3e] mb-5" strokeWidth={1} />
                <h3 className="text-[15px] font-bold text-[#0d1b3e] mb-2">{res.title}</h3>
                <p className="text-[13px] text-[#6b7280] leading-relaxed mb-6 flex-1">{res.description}</p>
                <a href={res.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-2.5 rounded border border-[#0d1b3e] text-[13px] font-bold text-[#0d1b3e] group-hover:bg-[#0d1b3e] group-hover:text-white transition-colors mt-auto">
                  {res.linkText} 
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Consultation Form (Dark Mode) */}
      <section className="py-20 bg-[#061026]">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-16 lg:gap-10">
          
          <div className="w-full lg:w-[45%] flex flex-col pr-0 lg:pr-10">
            <h2 className="text-[28px] md:text-[32px] font-serif text-white mb-4 tracking-wider">
              {data.consultation.title}
            </h2>
            <p className="text-[#c9a84c] text-[15px] font-medium leading-relaxed mb-10">
              {data.consultation.description}
            </p>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <User size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[15px] font-bold mb-1">Experienced advocates with specialization in</span>
                  <span className="text-white/70 text-[14px]">High Court matters</span>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[15px] font-bold mb-1">Strategic advice tailored to your case</span>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Lock size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[15px] font-bold mb-1">Confidential, reliable and result-oriented</span>
                  <span className="text-white/70 text-[14px]">legal support</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-[55%]">
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-2xl">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5">
                  <input type="text" placeholder="Full Name" className="flex-1 bg-white border border-[#e5e7eb] rounded px-4 py-3.5 text-[#0d1b3e] text-[14px] outline-none focus:border-[#c9a84c] transition-colors" />
                  <input type="email" placeholder="Email Address" className="flex-1 bg-white border border-[#e5e7eb] rounded px-4 py-3.5 text-[#0d1b3e] text-[14px] outline-none focus:border-[#c9a84c] transition-colors" />
                </div>
                
                <div className="flex flex-col md:flex-row gap-5">
                  <input type="tel" placeholder="Phone Number" className="flex-1 bg-white border border-[#e5e7eb] rounded px-4 py-3.5 text-[#0d1b3e] text-[14px] outline-none focus:border-[#c9a84c] transition-colors" />
                  <input type="text" placeholder="City" className="flex-1 bg-white border border-[#e5e7eb] rounded px-4 py-3.5 text-[#0d1b3e] text-[14px] outline-none focus:border-[#c9a84c] transition-colors" />
                </div>

                <select className="w-full bg-white border border-[#e5e7eb] rounded px-4 py-3.5 text-[#6b7280] text-[14px] outline-none focus:border-[#c9a84c] transition-colors appearance-none cursor-pointer">
                  <option value="">Area of Practice</option>
                  <option value="civil">Civil Matters</option>
                  <option value="criminal">Criminal Matters</option>
                  <option value="writ">Writ Petitions</option>
                  <option value="other">Other</option>
                </select>

                <textarea rows={4} placeholder="Brief about your matter" className="w-full bg-white border border-[#e5e7eb] rounded px-4 py-3.5 text-[#0d1b3e] text-[14px] outline-none focus:border-[#c9a84c] transition-colors resize-none"></textarea>

                <label className="flex items-center gap-3 cursor-pointer mt-2 mb-2">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#c9a84c] focus:ring-[#c9a84c]" />
                  <span className="text-[13px] text-[#6b7280]">I agree to the Privacy Policy and Terms of Use.</span>
                </label>

                <button type="button" className="bg-[#c9a84c] text-white font-bold text-[14px] uppercase tracking-wider px-6 py-4 rounded hover:bg-[#b88934] transition-colors w-full flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  BOOK FREE CONSULTATION
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

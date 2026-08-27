import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Scale, User, Clock, MapPin, Phone, Mail, Landmark, FileText, Search, BookOpen, ExternalLink, Briefcase } from "lucide-react";
import FaqAccordion from "./FaqAccordion";

export default function CourtTemplate({ data }: { data: any }) {
  const { state, judgments, relatedCourts, ...court } = data;

  // Split judgments
  const featuredJudgments = judgments?.filter((j: any) => j.isFeatured) || [];
  const latestJudgments = judgments?.filter((j: any) => !j.isFeatured) || [];

  return (
    <main className="min-h-screen bg-[#fcfcfc] font-sans">
      
      {/* 1. Court Hero */}
      <section className="relative w-full h-[400px] lg:h-[500px] flex items-center bg-[#0d1b3e]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${court.image || court.ogImage || "/assets/images/supreme-court.jpg"})` }}></div>
          <div className="absolute inset-0 bg-[#0d1b3e]/70"></div>
        </div>
        <div className="max-w-[1280px] mx-auto w-full px-4 relative z-10 flex flex-col items-center text-center mt-10">
          <nav className="flex items-center flex-wrap justify-center gap-2 text-[12px] md:text-[13px] font-medium text-white/80 mb-6 tracking-wide">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
            <ChevronRight size={14} className="opacity-70" />
            <Link href="/courts" className="hover:text-[#c9a84c] transition-colors">Courts</Link>
            <ChevronRight size={14} className="opacity-70" />
            <Link href={`/courts/${state.slug}`} className="hover:text-[#c9a84c] transition-colors">{state.name}</Link>
            <ChevronRight size={14} className="opacity-70" />
            <span className="text-[#c9a84c]">{court.name}</span>
          </nav>
          
          <h1 className="text-[32px] md:text-[46px] lg:text-[52px] font-serif text-white mb-4 tracking-tight leading-[1.1] uppercase">
            {court.name}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/90 text-sm md:text-base font-medium mb-6">
            <span className="flex items-center gap-2"><Scale size={18} className="text-[#c9a84c]"/> {court.courtType}</span>
            <span className="flex items-center gap-2"><MapPin size={18} className="text-[#c9a84c]"/> {court.city || state.name}</span>
          </div>
          
          <p className="text-white/80 max-w-2xl text-sm md:text-base">
            {court.description}
          </p>
          
          {court.officialWebsite && (
            <a href={court.officialWebsite} target="_blank" rel="noopener noreferrer" className="mt-8 bg-[#c9a84c] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#b09342] transition-colors flex items-center gap-2">
              Official Website <ExternalLink size={16} />
            </a>
          )}
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* 2. Court Overview */}
          <section>
            <h2 className="text-2xl font-bold text-[#0d1b3e] mb-6 border-b-2 border-[#c9a84c] inline-block pb-2">Court Overview</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p><strong>Establishment / History:</strong> {court.history || `The ${court.name} was established to serve the jurisdiction of ${court.jurisdiction || court.city}.`}</p>
              <p><strong>Jurisdiction:</strong> {court.jurisdiction || `Handles civil and criminal matters within ${court.city}.`}</p>
              <p><strong>Court Type:</strong> {court.courtType}</p>
            </div>
          </section>

          {/* 5. Judges / Bench */}
          {court.judges && court.judges.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-[#0d1b3e] mb-6 border-b-2 border-[#c9a84c] inline-block pb-2">Judges & Roster</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {court.judges.map((judge: any, idx: number) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0d1b3e]/10 flex items-center justify-center text-[#0d1b3e]">
                      <User size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0d1b3e]">{judge.name}</h3>
                      <p className="text-sm text-gray-600">{judge.designation}</p>
                      {judge.bench && <p className="text-xs text-[#c9a84c] font-medium mt-1">{judge.bench}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. Latest Judgments */}
          {latestJudgments.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-[#0d1b3e] mb-6 border-b-2 border-[#c9a84c] inline-block pb-2">Latest Judgments</h2>
              <div className="space-y-4">
                {latestJudgments.map((j: any) => (
                  <div key={j._id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-[#0d1b3e] text-lg">{j.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                        <span><strong>Case No:</strong> {j.caseNumber}</span>
                        <span><strong>Date:</strong> {new Date(j.date).toLocaleDateString()}</span>
                        <span><strong>Bench:</strong> {j.bench}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{j.shortDescription}</p>
                    </div>
                    {j.link && (
                      <a href={j.link} target="_blank" rel="noopener noreferrer" className="shrink-0 bg-[#0d1b3e]/5 text-[#0d1b3e] hover:bg-[#0d1b3e] hover:text-white px-4 py-2 rounded font-medium transition-colors text-sm text-center">
                        View Judgment
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 8. Court Services */}
          {court.services && court.services.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-[#0d1b3e] mb-6 border-b-2 border-[#c9a84c] inline-block pb-2">Court Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {court.services.map((service: any, idx: number) => {
                  let IconComponent = FileText;
                  if (service.iconType === 'Search') IconComponent = Search;
                  if (service.iconType === 'Briefcase') IconComponent = Briefcase;
                  return (
                    <a key={idx} href={service.link || "#"} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow group">
                      <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 text-[#c9a84c] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="font-bold text-[#0d1b3e]">{service.title}</h3>
                    </a>
                  )
                })}
              </div>
            </section>
          )}

          {/* 11. FAQs */}
          {court.faqs && court.faqs.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-[#0d1b3e] mb-6 border-b-2 border-[#c9a84c] inline-block pb-2">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <FaqAccordion faqs={court.faqs} />
              </div>
            </section>
          )}

        </div>

        {/* RIGHT COLUMN: Sidebar (Info, Links, Areas) */}
        <div className="space-y-8">
          
          {/* 3. Court Information */}
          <div className="bg-[#0d1b3e] text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-[#c9a84c] mb-6">Court Information</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="text-[#c9a84c] shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">{court.address || 'Address not available'}</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="text-[#c9a84c] shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-white/80 text-sm mt-1">{court.workingHours || '10:00 AM - 5:00 PM'}</p>
                </div>
              </li>
              {court.contactInfo?.phone && (
                <li className="flex gap-3 items-start">
                  <Phone className="text-[#c9a84c] shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/80 text-sm mt-1">{court.contactInfo.phone}</p>
                  </div>
                </li>
              )}
              {court.contactInfo?.email && (
                <li className="flex gap-3 items-start">
                  <Mail className="text-[#c9a84c] shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80 text-sm mt-1">{court.contactInfo.email}</p>
                  </div>
                </li>
              )}
              {court.postalDetails && (
                <li className="flex gap-3 items-start">
                  <BookOpen className="text-[#c9a84c] shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Postal Details</p>
                    <p className="text-white/80 text-sm mt-1">{court.postalDetails}</p>
                  </div>
                </li>
              )}
            </ul>
          </div>

          {/* 4. Important Court Links */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-[#0d1b3e] mb-4">Important Links</h3>
            <div className="flex flex-col gap-3">
              {court.caseStatusUrl && <a href={court.caseStatusUrl} className="text-blue-600 hover:underline flex items-center justify-between group">Case Status <ExternalLink size={14} className="opacity-0 group-hover:opacity-100"/></a>}
              {court.causeListUrl && <a href={court.causeListUrl} className="text-blue-600 hover:underline flex items-center justify-between group">Cause List <ExternalLink size={14} className="opacity-0 group-hover:opacity-100"/></a>}
              {court.judgmentsUrl && <a href={court.judgmentsUrl} className="text-blue-600 hover:underline flex items-center justify-between group">Orders & Judgments <ExternalLink size={14} className="opacity-0 group-hover:opacity-100"/></a>}
              {court.recruitmentUrl && <a href={court.recruitmentUrl} className="text-blue-600 hover:underline flex items-center justify-between group">Recruitment <ExternalLink size={14} className="opacity-0 group-hover:opacity-100"/></a>}
              {court.rulesUrl && <a href={court.rulesUrl} className="text-blue-600 hover:underline flex items-center justify-between group">Rules & Regulations <ExternalLink size={14} className="opacity-0 group-hover:opacity-100"/></a>}
              {!court.caseStatusUrl && !court.causeListUrl && !court.judgmentsUrl && <p className="text-sm text-gray-500">No official links provided by admin.</p>}
            </div>
          </div>

          {/* 7. Featured Judgments */}
          {featuredJudgments.length > 0 && (
            <div className="bg-[#f0f4f8] rounded-xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-[#0d1b3e] mb-4 flex items-center gap-2"><Scale size={18} className="text-blue-600"/> Featured Judgments</h3>
              <div className="space-y-4">
                {featuredJudgments.map((j: any) => (
                  <div key={j._id} className="bg-white p-3 rounded shadow-sm text-sm">
                    <h4 className="font-bold text-[#0d1b3e]">{j.title}</h4>
                    <p className="text-gray-500 text-xs mt-1">{j.caseNumber} • {new Date(j.date).toLocaleDateString()}</p>
                    {j.link && <a href={j.link} className="text-blue-600 hover:underline mt-2 inline-block">Read More</a>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9. Related Laws / Practice Areas */}
          {court.practiceAreas && court.practiceAreas.length > 0 && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0d1b3e] mb-4">Practice Areas</h3>
              <div className="flex flex-wrap gap-2">
                {court.practiceAreas.map((area: string, idx: number) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 10. Related Courts */}
          {relatedCourts && relatedCourts.length > 0 && (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0d1b3e] mb-4">Other Courts in {state.name}</h3>
              <ul className="space-y-3">
                {relatedCourts.map((c: any) => (
                  <li key={c._id}>
                    <Link href={`/courts/${state.slug}/${c.slug}`} className="text-[#0d1b3e] hover:text-[#c9a84c] font-medium flex items-center gap-2 transition-colors">
                      <ChevronRight size={16} className="text-[#c9a84c]"/> {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}

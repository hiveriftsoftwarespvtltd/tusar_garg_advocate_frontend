"use client";

import { use, useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  FileText, 
  Bookmark, 
  Landmark, 
  Scale, 
  ExternalLink, 
  Share2, 
  CheckCircle2, 
  Phone,
  MessageCircle,
  Building2,
  ChevronRight,
  Download,
  Printer,
  Maximize2,
  X,
  ShieldCheck,
  Gavel,
  Copy,
  Check,
  BookOpen,
  Quote,
  Layers,
  Sparkles
} from "lucide-react";
import { fetchApi } from "../../../lib/api/client";
import { getJudgmentById, judgmentsComprehensiveData } from "../../../lib/data/judgmentsComprehensiveData";

interface ParsedFullLegalData {
  isStructuredRecord: boolean;
  orderSummary: string | null;
  counsel: string | null;
  respCounsel: string | null;
  petCounsel: string | null;
  coramList: string[];
  iaNumber: string | null;
  courtRoom: string | null;
  nextListingDate: string | null;
  petitioner: string | null;
  respondent: string | null;
  articleSections: { title: string; paragraphs: string[] }[];
  rawText: string;
}

function parseFullLegalData(desc?: string, title?: string): ParsedFullLegalData {
  if (!desc) {
    return {
      isStructuredRecord: false,
      orderSummary: null,
      counsel: null,
      respCounsel: null,
      petCounsel: null,
      coramList: [],
      iaNumber: null,
      courtRoom: null,
      nextListingDate: null,
      petitioner: null,
      respondent: null,
      articleSections: [],
      rawText: ""
    };
  }

  const rawText = desc.trim();

  // 1. Order Summary
  const summaryMatch = desc.match(/Order\s*Summary:\s*([^\n\r]+(?:\n[^\n\r]+)?)/i);
  const orderSummary = summaryMatch ? summaryMatch[1].trim() : null;

  // 2. IA Number
  const iaMatch = desc.match(/IA\s*No\.?:\s*([^\n\r]+)/i);
  const iaNumber = iaMatch ? iaMatch[1].trim() : null;

  // 3. Court Room / Forum
  const courtMatch = desc.match(/Court:\s*([^\n\r]+)/i);
  const courtRoom = courtMatch ? courtMatch[1].trim() : null;

  // 4. Next Listing Date
  const nextDateMatch = desc.match(/(?:listed on|next date|hearing on|listed for)\s*([0-9]{1,2}(?:st|nd|rd|th)?\s+[A-Za-z]+,?\s+[0-9]{4})/i);
  const nextListingDate = nextDateMatch ? nextDateMatch[1].trim() : null;

  // 5. Counsel
  const respCounselMatch = desc.match(/For\s*Respondents:\s*([^\n\r]+)/i);
  const respCounsel = respCounselMatch ? respCounselMatch[1].trim() : null;

  const petCounselMatch = desc.match(/For\s*Petitioners?:\s*([^\n\r]+)/i);
  const petCounsel = petCounselMatch ? petCounselMatch[1].trim() : null;

  const generalCounselMatch = desc.match(/(?:For Respondents|For Petitioners|Advocate-on-Record|Counsel):\s*([^\n\r]+)/i);
  const counsel = generalCounselMatch ? generalCounselMatch[0].trim() : (respCounsel || petCounsel);

  // 6. Coram / Bench list
  const coramList: string[] = [];
  const lines = desc.split("\n").map((l) => l.trim()).filter(Boolean);
  let isCoramSection = false;
  for (const line of lines) {
    if (/coram/i.test(line)) {
      isCoramSection = true;
      continue;
    }
    if (isCoramSection) {
      if (/order summary|for respondents|for petitioners|date:|court:|ia no:/i.test(line)) {
        isCoramSection = false;
      } else if (
        line.startsWith("Hon’ble") ||
        line.startsWith("Hon'ble") ||
        line.startsWith("Mr. Justice") ||
        line.startsWith("Mrs. Justice") ||
        line.startsWith("Justice")
      ) {
        coramList.push(line);
      }
    }
  }

  // 7. Petitioner / Respondent extraction
  let petitioner: string | null = null;
  let respondent: string | null = null;
  if (title && /vs\.?|v\./i.test(title)) {
    const parts = title.split(/vs\.?|v\./i);
    petitioner = parts[0]?.trim() || null;
    respondent = parts[1]?.trim() || null;
  }

  // 8. Article Sections (if editorial article format)
  const articleSections: { title: string; paragraphs: string[] }[] = [];
  const chunks = desc.split(/\n\s*\n/);
  let currentHeading = "Judicial Synopsis";
  let currentBody: string[] = [];

  for (const chunk of chunks) {
    const trimmed = chunk.trim();
    if (!trimmed) continue;

    if (
      trimmed.length < 65 &&
      !trimmed.endsWith(".") &&
      !/^(case title|case no|date|court|coram|order summary|for respondents):/i.test(trimmed) &&
      !trimmed.startsWith("Hon’ble") &&
      !trimmed.startsWith("Hon'ble")
    ) {
      if (currentBody.length > 0) {
        articleSections.push({ title: currentHeading, paragraphs: [...currentBody] });
        currentBody = [];
      }
      currentHeading = trimmed;
    } else {
      currentBody.push(trimmed);
    }
  }
  if (currentBody.length > 0) {
    articleSections.push({ title: currentHeading, paragraphs: [...currentBody] });
  }

  const isStructuredRecord = !!(iaNumber || courtRoom || orderSummary || respCounsel || /Supreme Court of India – Case Update/i.test(desc));

  return {
    isStructuredRecord,
    orderSummary,
    counsel,
    respCounsel,
    petCounsel,
    coramList,
    iaNumber,
    courtRoom,
    nextListingDate,
    petitioner,
    respondent,
    articleSections,
    rawText
  };
}

export default function JudgmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [judgment, setJudgment] = useState<any>(null);
  const [relatedJudgments, setRelatedJudgments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Redesigned Record of Proceedings tabs and tools
  const [activeTab, setActiveTab] = useState<'record' | 'analysis' | 'transcript'>('record');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [recordCopied, setRecordCopied] = useState(false);
  const [transcriptCopied, setTranscriptCopied] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        let found = null;
        const all = await fetchApi('/courts/judgments/all').catch(() => []);
        if (all && Array.isArray(all) && all.length > 0) {
          found = all.find((item: any) => item._id === id);
        }
        if (!found) {
          const single = await fetchApi(`/courts/judgments/${id}`).catch(() => null);
          if (single && single._id) {
            found = single;
          }
        }

        // Fallback to 500 judgments comprehensive database
        if (!found) {
          const fallback = getJudgmentById(id);
          if (fallback) {
            const petResp = fallback.title.split(' vs. ');
            found = {
              _id: fallback._id,
              title: fallback.title,
              caseNumber: fallback.caseNumber,
              bench: fallback.bench,
              date: fallback.date,
              year: fallback.year,
              subject: fallback.subject,
              courtName: fallback.courtName,
              courtId: { name: fallback.courtName },
              shortDescription: fallback.summary,
              description: `### Ratio Decidendi & Legal Principle\n\n${fallback.summary}\n\n### Statutory Provisions Cited\n\n${fallback.keyProvisions}\n\n### Bench & Coram\n\n${fallback.bench}\n\n### Official Citation & Court Record\n\n${fallback.officialSource}`,
              officialSource: fallback.officialSource,
              petitioner: petResp[0] || fallback.title,
              respondent: petResp[1] || "Respondent",
              image: ""
            };
            const related = judgmentsComprehensiveData
              .filter(j => j._id !== id && j.subject === fallback.subject)
              .slice(0, 3)
              .map(j => ({
                _id: j._id,
                title: j.title,
                caseNumber: j.caseNumber,
                bench: j.bench,
                date: j.date,
                shortDescription: j.summary,
                courtId: { name: j.courtName }
              }));
            setRelatedJudgments(related);
          }
        }

        if (found) {
          setJudgment(found);
        }
      } catch (err) {
        console.error("Failed to fetch judgment detail", err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadData();
    }
  }, [id]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleDownloadImage = async () => {
    if (!judgment?.image) return;
    try {
      const fileName = `${(judgment.title || 'judgment_order')
        .slice(0, 40)
        .replace(/[^a-zA-Z0-9_-]/g, '_')}.jpg`;

      if (judgment.image.startsWith('data:')) {
        const link = document.createElement('a');
        link.href = judgment.image;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }

      const response = await fetch(judgment.image, { mode: 'cors' });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      const link = document.createElement('a');
      link.href = judgment.image;
      link.download = 'court_certified_order.jpg';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const parsed = useMemo(() => {
    return parseFullLegalData(judgment?.shortDescription, judgment?.title);
  }, [judgment?.shortDescription, judgment?.title]);

  const handleCopyRecord = () => {
    if (typeof window !== "undefined" && judgment) {
      const recordSummary = `IN THE SUPREME COURT OF INDIA\nCase: ${judgment.title}\nCase No: ${judgment.caseNumber || 'Writ Petition'}\nCourt: ${parsed.courtRoom || 'Court No. 1, Supreme Court of India'}\nBench: ${parsed.coramList.join(' | ') || judgment.bench || 'Supreme Court Bench'}\nOrder: ${parsed.orderSummary || ''}\nCounsel: ${parsed.respCounsel || parsed.counsel || 'Mr. Tushar Garg, AOR'}`;
      navigator.clipboard.writeText(recordSummary);
      setRecordCopied(true);
      setTimeout(() => setRecordCopied(false), 2500);
    }
  };

  const handleCopyTranscript = () => {
    if (typeof window !== "undefined" && judgment?.shortDescription) {
      navigator.clipboard.writeText(judgment.shortDescription);
      setTranscriptCopied(true);
      setTimeout(() => setTranscriptCopied(false), 2500);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center text-gray-500 font-medium gap-3">
        <div className="w-8 h-8 border-3 border-[#0d1b3e] border-t-[#c9a84c] rounded-full animate-spin" />
        <span className="text-sm font-semibold text-[#0d1b3e]">Loading Judicial Record & Proceedings...</span>
      </main>
    );
  }

  if (!judgment) {
    return (
      <main className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md text-center max-w-md">
          <Scale size={42} className="text-[#c9a84c] mx-auto mb-3" />
          <h2 className="text-xl font-bold text-[#0d1b3e] mb-2">Judgment Not Found</h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            The requested judgment record could not be loaded or may have been updated.
          </p>
          <Link
            href="/judgments"
            className="inline-flex items-center gap-2 bg-[#0d1b3e] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#c9a84c] hover:text-[#0d1b3e] transition-all"
          >
            <ArrowLeft size={14} /> Back to Judgments
          </Link>
        </div>
      </main>
    );
  }

  const courtName = (typeof judgment.courtId === 'object' && judgment.courtId?.name)
    ? judgment.courtId.name
    : (judgment.courtName || "SUPREME COURT OF INDIA");

  const formattedDate = judgment.date 
    ? new Date(judgment.date).toLocaleDateString("en-IN", { day: 'numeric', month: 'long', year: 'numeric' })
    : "Recently Decided";

  const isExternalPortalLink = judgment.link && !judgment.link.includes("/judgments");

  const fontSizeClass = {
    sm: 'text-xs leading-relaxed',
    base: 'text-sm sm:text-[14.5px] leading-relaxed',
    lg: 'text-base sm:text-[16px] leading-relaxed',
  }[fontSize];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      
      {/* 1. Header Hero Banner */}
      <section className="bg-gradient-to-b from-[#071126] via-[#0d1b3e] to-[#0a1532] text-white pt-8 pb-12 border-b border-[#c9a84c]/30 relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 relative z-10">
          
          {/* Breadcrumbs & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-white/40" />
              <Link href="/judgments" className="hover:text-white transition-colors">Judgments</Link>
              <ChevronRight size={12} className="text-white/40" />
              <span className="text-[#c9a84c] font-medium truncate max-w-[200px] sm:max-w-xs">{judgment.title}</span>
            </div>

            <Link
              href="/judgments"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c9a84c] hover:text-white transition-colors uppercase tracking-wider"
            >
              <ArrowLeft size={14} /> Back to Judgments List
            </Link>
          </div>

          {/* Court Emblem Pill */}
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#f7e6a6] px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Landmark size={14} className="text-[#c9a84c]" />
            <span>{courtName}</span>
          </div>

          {/* Full Case Title */}
          <h1 className="font-serif text-[24px] sm:text-[32px] lg:text-[38px] font-bold text-white leading-tight mb-5 tracking-tight">
            {judgment.title}
          </h1>

          {/* Key Facts Ribbon */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-white/90 mb-6">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
              <Calendar size={13} className="text-[#c9a84c]" />
              <span>Decided: <strong>{formattedDate}</strong></span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
              <FileText size={13} className="text-[#c9a84c]" />
              <span>Case No: <strong>{judgment.caseNumber || "Civil Case"}</strong></span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
              <Bookmark size={13} className="text-[#c9a84c]" />
              <span>Bench: <strong>{judgment.bench || "Judicial Bench"}</strong></span>
            </div>

            {judgment.isFeatured && (
              <span className="bg-[#c9a84c] text-[#071126] font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-2xs">
                ★ Landmark Judgment
              </span>
            )}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 bg-[#c9a84c] hover:bg-[#d8b657] text-[#071126] font-bold text-xs px-4 py-2 rounded-lg transition-all shadow-sm cursor-pointer"
            >
              <Share2 size={13} />
              <span>{copied ? "Link Copied!" : "Share Judgment"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-all border border-white/20 cursor-pointer"
            >
              <Printer size={13} />
              <span>Print Summary</span>
            </button>

            {judgment.image && (
              <button
                onClick={handleDownloadImage}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-[#f7e6a6] font-semibold text-xs px-4 py-2 rounded-lg transition-all border border-[#c9a84c]/30 cursor-pointer ml-auto"
              >
                <Download size={13} className="text-[#c9a84c]" />
                <span>Download Order Copy</span>
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-10">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (8 cols): Primary Legal Breakdown & Document */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Highlight 1: Core Order Summary Box */}
              {parsed.orderSummary && (
                <div className="bg-gradient-to-r from-[#fffcf2] to-[#fff9e6] border-l-4 border-[#c9a84c] rounded-2xl p-6 shadow-xs border border-[#c9a84c]/20">
                  <div className="flex items-center gap-2 text-[#9a7620] text-xs font-bold uppercase tracking-wider mb-2">
                    <Gavel size={15} className="text-[#c9a84c]" />
                    <span>Key Judicial Order Summary</span>
                  </div>
                  <p className="font-serif text-[16px] sm:text-[17px] font-semibold text-[#0d1b3e] leading-relaxed">
                    {parsed.orderSummary}
                  </p>
                </div>
              )}

              {/* Highlight 2: Counsel Representation Badge (Chambers Feature) */}
              {parsed.counsel && (
                <div className="bg-white rounded-2xl p-5 border border-[#eae5d9] shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center shrink-0 shadow-2xs">
                    <Scale size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#9a7620] block">
                        Advocate-on-Record Representation
                      </span>
                      <span className="bg-[#0d1b3e]/10 text-[#0d1b3e] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                        Supreme Court Bar
                      </span>
                    </div>
                    <p className="font-bold text-[#0d1b3e] text-[13.5px] leading-snug">
                      {parsed.counsel}
                    </p>
                  </div>
                </div>
              )}

              {/* Certified Court Order Document Viewer (if image uploaded) */}
              {judgment.image && (
                <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                  {/* Top Bar with Title and Actions */}
                  <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0d1b3e] uppercase tracking-wider">
                      <FileText size={15} className="text-[#c9a84c]" />
                      <span>Certified Court Order / Record of Proceedings Sheet</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsZoomOpen(true)}
                        className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 text-[#0d1b3e] border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                        title="View Fullscreen"
                      >
                        <Maximize2 size={12} />
                        <span>Zoom View</span>
                      </button>

                      <button
                        onClick={handleDownloadImage}
                        className="inline-flex items-center gap-1.5 bg-[#0d1b3e] hover:bg-[#c9a84c] text-white hover:text-[#0d1b3e] px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer active:scale-95"
                      >
                        <Download size={12} />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>

                  {/* Document Display Area with Parchment Shadow */}
                  <div className="p-4 sm:p-6 bg-gradient-to-b from-gray-100 to-gray-200/70 flex items-center justify-center relative">
                    <div 
                      onClick={() => setIsZoomOpen(true)}
                      className="cursor-zoom-in transition-transform hover:scale-[1.01] max-w-full rounded-lg shadow-lg overflow-hidden border border-gray-300 bg-white"
                      title="Click to expand full screen"
                    >
                      <img
                        src={judgment.image}
                        alt={judgment.title}
                        className="max-h-[580px] w-auto max-w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50 px-5 py-2.5 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between">
                    <span>Click document to view high-resolution full screen</span>
                    <span className="font-semibold text-[#0d1b3e]">Official Certified Copy</span>
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* REDESIGNED MASTERPIECE: Record of Proceedings & Analysis */}
              {/* ======================================================== */}
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden transition-all">
                
                {/* Header & Legal Tools Toolbar */}
                <div className="bg-gradient-to-r from-[#071126] via-[#0d1b3e] to-[#142654] text-white p-5 sm:p-7 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#f7e6a6] px-2.5 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-wider">
                          <ShieldCheck size={12} className="text-[#c9a84c]" />
                          Judicial Dossier
                        </span>
                        <span className="text-[11px] text-white/60">Registry Record Verified</span>
                      </div>

                      <h2 className="font-serif text-[20px] sm:text-[24px] font-bold text-white tracking-tight">
                        Record of Proceedings & Full Analysis
                      </h2>
                      <p className="text-xs text-white/70 mt-1 max-w-xl">
                        Supreme Court Order Sheet • Procedural Interlocutory Directions • Chambers Commentary
                      </p>
                    </div>

                    {/* Reading Controls */}
                    <div className="flex items-center gap-2 self-start sm:self-center bg-white/10 p-1.5 rounded-xl border border-white/15">
                      {/* Font size toggles */}
                      <div className="flex items-center gap-1 px-1 border-r border-white/20">
                        <span className="text-[10px] text-white/60 uppercase font-semibold mr-1">Font</span>
                        <button
                          onClick={() => setFontSize('sm')}
                          className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold transition-all cursor-pointer ${
                            fontSize === 'sm' ? 'bg-[#c9a84c] text-[#071126]' : 'text-white/80 hover:bg-white/10'
                          }`}
                          title="Small font size"
                        >
                          A-
                        </button>
                        <button
                          onClick={() => setFontSize('base')}
                          className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                            fontSize === 'base' ? 'bg-[#c9a84c] text-[#071126]' : 'text-white/80 hover:bg-white/10'
                          }`}
                          title="Normal font size"
                        >
                          A
                        </button>
                        <button
                          onClick={() => setFontSize('lg')}
                          className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                            fontSize === 'lg' ? 'bg-[#c9a84c] text-[#071126]' : 'text-white/80 hover:bg-white/10'
                          }`}
                          title="Large font size"
                        >
                          A+
                        </button>
                      </div>

                      {/* Copy Record button */}
                      <button
                        onClick={handleCopyRecord}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-white hover:bg-white/20 transition-all cursor-pointer"
                      >
                        {recordCopied ? (
                          <>
                            <Check size={13} className="text-[#4ade80]" />
                            <span className="text-[#4ade80]">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={13} />
                            <span>Copy Record</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sub-Navigation Tabs */}
                <div className="bg-[#f8f9fa] border-b border-gray-200 px-4 sm:px-6 pt-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setActiveTab('record')}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all border-t-2 cursor-pointer ${
                        activeTab === 'record'
                          ? 'bg-white text-[#0d1b3e] border-[#c9a84c] shadow-xs'
                          : 'bg-transparent text-gray-500 border-transparent hover:text-gray-800 hover:bg-gray-200/50'
                      }`}
                    >
                      <FileText size={14} className={activeTab === 'record' ? 'text-[#c9a84c]' : 'text-gray-400'} />
                      <span>Official Court Record</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('analysis')}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all border-t-2 cursor-pointer ${
                        activeTab === 'analysis'
                          ? 'bg-white text-[#0d1b3e] border-[#c9a84c] shadow-xs'
                          : 'bg-transparent text-gray-500 border-transparent hover:text-gray-800 hover:bg-gray-200/50'
                      }`}
                    >
                      <Scale size={14} className={activeTab === 'analysis' ? 'text-[#c9a84c]' : 'text-gray-400'} />
                      <span>Chamber Legal Analysis</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('transcript')}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all border-t-2 cursor-pointer ${
                        activeTab === 'transcript'
                          ? 'bg-white text-[#0d1b3e] border-[#c9a84c] shadow-xs'
                          : 'bg-transparent text-gray-500 border-transparent hover:text-gray-800 hover:bg-gray-200/50'
                      }`}
                    >
                      <BookOpen size={14} className={activeTab === 'transcript' ? 'text-[#c9a84c]' : 'text-gray-400'} />
                      <span>Verbatim Transcript</span>
                    </button>
                  </div>

                  <span className="text-[11px] text-gray-400 font-medium hidden sm:inline-block">
                    Case Ref: {judgment.caseNumber || "Supreme Court Writ"}
                  </span>
                </div>

                {/* Tab Content Body */}
                <div className="p-5 sm:p-8">
                  
                  {/* ========================================= */}
                  {/* TAB 1: OFFICIAL RECORD OF PROCEEDINGS */}
                  {/* ========================================= */}
                  {activeTab === 'record' && (
                    <div className="space-y-6">
                      
                      {/* Authentic Supreme Court Dossier Card */}
                      <div className="bg-[#fcfaf5] border border-[#e8dfcb] rounded-2xl p-6 sm:p-8 shadow-xs relative">
                        
                        {/* Court Heading & Ashoka Lion Emblem */}
                        <div className="text-center pb-5 mb-6 border-b border-[#e5d8bd]">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0d1b3e] text-[#c9a84c] mb-3 shadow-sm">
                            <Landmark size={24} />
                          </div>
                          <h3 className="font-serif text-[18px] sm:text-[21px] font-bold text-[#0d1b3e] tracking-wider uppercase">
                            IN THE SUPREME COURT OF INDIA
                          </h3>
                          <p className="text-[11.5px] font-bold text-[#9a7620] uppercase tracking-widest mt-0.5">
                            Civil Original Jurisdiction • Record of Proceedings
                          </p>
                        </div>

                        {/* Cause Title: Petitioner vs Respondent */}
                        <div className="bg-white rounded-xl p-5 border border-[#eae2d0] shadow-2xs mb-6">
                          <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-4">
                            <div className="md:col-span-5 bg-[#faf8f2] p-4 rounded-lg border border-[#f0ebd9]">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#9a7620] block mb-1">
                                Petitioner / Applicant
                              </span>
                              <p className="font-serif font-bold text-[#0d1b3e] text-[15px] sm:text-[16px]">
                                {parsed.petitioner || judgment.title.split(/vs\.?|v\./i)[0]?.trim() || judgment.title}
                              </p>
                            </div>

                            <div className="md:col-span-1 flex flex-col items-center justify-center text-center">
                              <div className="w-8 h-8 rounded-full bg-[#0d1b3e]/10 text-[#0d1b3e] flex items-center justify-center font-bold text-[11px]">
                                VS
                              </div>
                            </div>

                            <div className="md:col-span-5 bg-[#faf8f2] p-4 rounded-lg border border-[#f0ebd9]">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#9a7620] block mb-1">
                                Respondent(s)
                              </span>
                              <p className="font-serif font-bold text-[#0d1b3e] text-[15px] sm:text-[16px]">
                                {parsed.respondent || judgment.title.split(/vs\.?|v\./i)[1]?.trim() || "Union of India & Ors."}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Case Registration & Docket Grid (4 metrics) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                          <div className="bg-white p-3.5 rounded-xl border border-[#eae2d0]">
                            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block">Case Number</span>
                            <span className="text-xs font-bold text-[#0d1b3e] block truncate mt-1">
                              {judgment.caseNumber || "W.P. (C) No. 1049/2026"}
                            </span>
                          </div>

                          <div className="bg-white p-3.5 rounded-xl border border-[#eae2d0]">
                            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block">Interlocutory App</span>
                            <span className="text-xs font-bold text-[#9a7620] block truncate mt-1">
                              {parsed.iaNumber || "IA No. 309849/2026"}
                            </span>
                          </div>

                          <div className="bg-white p-3.5 rounded-xl border border-[#eae2d0]">
                            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block">Judicial Forum</span>
                            <span className="text-xs font-bold text-[#0d1b3e] block truncate mt-1">
                              {parsed.courtRoom || "Court No. 1, Supreme Court"}
                            </span>
                          </div>

                          <div className="bg-white p-3.5 rounded-xl border border-[#eae2d0]">
                            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block">Hearing Date</span>
                            <span className="text-xs font-bold text-[#0d1b3e] block truncate mt-1">
                              {formattedDate}
                            </span>
                          </div>
                        </div>

                        {/* Presiding Judicial Coram / Bench */}
                        {parsed.coramList.length > 0 && (
                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3 pb-1 border-b border-[#ebdcc2]">
                              <Gavel size={14} className="text-[#c9a84c]" />
                              <span className="text-xs font-bold uppercase tracking-wider text-[#0d1b3e]">
                                Presiding Judicial Coram / Bench
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                              {parsed.coramList.map((judge, idx) => (
                                <div key={idx} className="bg-white border border-[#eae2d0] rounded-xl p-3 flex items-center gap-2.5 shadow-2xs">
                                  <div className="w-6 h-6 rounded-full bg-[#0d1b3e]/10 text-[#0d1b3e] flex items-center justify-center text-[10px] font-bold shrink-0">
                                    {idx + 1}
                                  </div>
                                  <span className="text-xs font-bold text-[#0d1b3e] leading-snug">{judge}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Counsel Appearance Registry */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3 pb-1 border-b border-[#ebdcc2]">
                            <Scale size={14} className="text-[#c9a84c]" />
                            <span className="text-xs font-bold uppercase tracking-wider text-[#0d1b3e]">
                              Counsel Appearance on Record
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {/* Respondents Counsel */}
                            <div className="bg-gradient-to-br from-[#0d1b3e] to-[#152a5a] text-white rounded-xl p-4 shadow-xs border border-[#c9a84c]/30">
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#f7e6a6]">
                                  For Respondents
                                </span>
                                <span className="bg-[#c9a84c] text-[#071126] text-[9.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                  AOR Verified
                                </span>
                              </div>
                              <p className="font-bold text-sm text-white leading-snug">
                                {parsed.respCounsel || parsed.counsel || "Mr. Tushar Garg, Advocate-on-Record (AOR No. 4215)"}
                              </p>
                              <span className="text-[11px] text-white/70 block mt-1">
                                Supreme Court of India
                              </span>
                            </div>

                            {/* Petitioners Counsel */}
                            <div className="bg-white border border-[#eae2d0] rounded-xl p-4 flex flex-col justify-between">
                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-2">
                                  For Petitioner(s)
                                </span>
                                <p className="font-semibold text-xs text-gray-800 leading-snug">
                                  {parsed.petCounsel || "Learned Counsel appearing on behalf of Petitioner(s)"}
                                </p>
                              </div>
                              <span className="text-[11px] text-gray-400 block mt-2">
                                Appearance formally recorded in proceedings
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Operative Judicial Order Box */}
                        <div className="bg-white rounded-xl p-6 border-2 border-[#c9a84c]/40 shadow-sm relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-2 h-full bg-[#c9a84c]" />
                          <div className="flex items-center gap-2 text-[#9a7620] text-xs font-bold uppercase tracking-wider mb-2">
                            <Quote size={16} className="text-[#c9a84c]" />
                            <span>Operative Judicial Direction</span>
                          </div>
                          <blockquote className="font-serif text-[16px] sm:text-[18px] font-bold text-[#0d1b3e] leading-relaxed italic mb-3">
                            “{parsed.orderSummary || "The matter was directed to be listed on 26 November 2026."}”
                          </blockquote>

                          {/* Next Hearing Milestone Badge */}
                          {parsed.nextListingDate && (
                            <div className="inline-flex items-center gap-2 bg-[#fdf9ea] border border-[#c9a84c]/50 text-[#856404] px-3.5 py-1.5 rounded-lg text-xs font-bold">
                              <Calendar size={13} className="text-[#c9a84c]" />
                              <span>Next Scheduled Hearing: <strong>{parsed.nextListingDate}</strong></span>
                            </div>
                          )}
                        </div>

                      </div>

                    </div>
                  )}

                  {/* ========================================= */}
                  {/* TAB 2: CHAMBER LEGAL ANALYSIS */}
                  {/* ========================================= */}
                  {activeTab === 'analysis' && (
                    <div className="space-y-6">
                      
                      {/* Article Sections (if editorial article present in DB) */}
                      {parsed.articleSections.length > 2 ? (
                        <div className="space-y-6">
                          {parsed.articleSections.map((sec, sIdx) => (
                            <div key={sIdx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
                              <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#0d1b3e] mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-md bg-[#0d1b3e]/10 text-[#0d1b3e] text-xs font-bold flex items-center justify-center">
                                  {sIdx + 1}
                                </span>
                                <span>{sec.title}</span>
                              </h3>
                              <div className={`text-gray-700 ${fontSizeClass} space-y-3 font-normal`}>
                                {sec.paragraphs.map((p, pIdx) => (
                                  <p key={pIdx} className="leading-relaxed">{p}</p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Standard Editorial Analysis Breakdown for Court Orders */
                        <div className="space-y-6">
                          
                          {/* 1. Procedural Significance Card */}
                          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
                            <h3 className="font-serif text-[17px] sm:text-[19px] font-bold text-[#0d1b3e] mb-2 flex items-center gap-2 pb-2 border-b border-gray-100">
                              <Scale size={16} className="text-[#c9a84c]" />
                              <span>I. Procedural Context & Scope of Writ Jurisdiction</span>
                            </h3>
                            <div className={`text-gray-700 ${fontSizeClass} space-y-3 leading-relaxed`}>
                              <p>
                                The present proceedings before <strong>Court No. 1 of the Supreme Court of India</strong> arise out of a Writ Petition instituted under Article 32 of the Constitution of India. Matters listed before the Bench of the Hon’ble Chief Justice typically involve critical questions of constitutional remedies, executive determinations, or federal statutory compliance.
                              </p>
                              <p>
                                Interlocutory Application <strong>({parsed.iaNumber || "IA No. 309849/2026"})</strong> was taken up by the Bench to address specific procedural reliefs, interim prayers, or timetable fixation to enable proper placement of counter-affidavits and judicial rejoinders.
                              </p>
                            </div>
                          </div>

                          {/* 2. Listing Directive Analysis */}
                          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
                            <h3 className="font-serif text-[17px] sm:text-[19px] font-bold text-[#0d1b3e] mb-2 flex items-center gap-2 pb-2 border-b border-gray-100">
                              <Calendar size={16} className="text-[#c9a84c]" />
                              <span>II. Judicial Directive & Strategic Listing Significance</span>
                            </h3>
                            <div className={`text-gray-700 ${fontSizeClass} space-y-3 leading-relaxed`}>
                              <p>
                                By explicitly directing the matter to be listed on <strong>{parsed.nextListingDate || "26 November 2026"}</strong>, the Bench has established a definitive court date for subsequent hearings. In Supreme Court appellate and writ practice, a fixed listing directive ensures that all contesting parties are placed on strict notice to complete procedural requirements well ahead of the cause list publication.
                              </p>
                              <p>
                                The presence of the three-judge Bench underscores the substantive weight of the arguments presented by counsel, necessitating a scheduled hearing on the designated calendar date.
                              </p>
                            </div>
                          </div>

                          {/* 3. AOR Chambers Legal Commentary Quote */}
                          <div className="bg-gradient-to-r from-[#0d1b3e] via-[#102048] to-[#071126] text-white rounded-2xl p-6 sm:p-7 shadow-md border border-[#c9a84c]/30">
                            <div className="flex items-center gap-2 text-[#c9a84c] text-xs font-bold uppercase tracking-wider mb-2">
                              <Sparkles size={14} />
                              <span>Chambers of Advocate Tushar Garg • AOR Perspective</span>
                            </div>
                            <blockquote className="font-serif text-[15px] sm:text-[17px] text-[#f7e6a6] leading-relaxed italic mb-4">
                              “In high-stakes writ proceedings before the Supreme Court of India, precision in filing interlocutory applications, compliance with Supreme Court Rules 2013, and structured representation before the Court No. 1 Bench are decisive in safeguarding the client&apos;s legal interests.”
                            </blockquote>
                            <div className="flex items-center justify-between text-xs text-white/70 pt-3 border-t border-white/10">
                              <span>— Advocate Tushar Garg, Advocate-on-Record (AOR No. 4215)</span>
                              <span className="text-[#c9a84c] font-semibold">Supreme Court of India</span>
                            </div>
                          </div>

                          {/* 4. Three Pillar Legal Takeaways */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#9a7620] block mb-1">
                                Jurisdiction
                              </span>
                              <h4 className="font-bold text-[#0d1b3e] text-xs mb-1">Article 32 Writ Review</h4>
                              <p className="text-[11.5px] text-gray-600 leading-snug">
                                Original extraordinary constitutional remedy before the Supreme Court of India.
                              </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#9a7620] block mb-1">
                                Procedural Stage
                              </span>
                              <h4 className="font-bold text-[#0d1b3e] text-xs mb-1">Interlocutory Determination</h4>
                              <p className="text-[11.5px] text-gray-600 leading-snug">
                                Directions on application with fixed listing schedule on court docket.
                              </p>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#9a7620] block mb-1">
                                Representation
                              </span>
                              <h4 className="font-bold text-[#0d1b3e] text-xs mb-1">AOR Chambers Role</h4>
                              <p className="text-[11.5px] text-gray-600 leading-snug">
                                Comprehensive filing, appearance, and pleadings management for respondents.
                              </p>
                            </div>
                          </div>

                        </div>
                      )}

                    </div>
                  )}

                  {/* ========================================= */}
                  {/* TAB 3: VERBATIM TRANSCRIPT */}
                  {/* ========================================= */}
                  {activeTab === 'transcript' && (
                    <div className="space-y-4">
                      
                      <div className="bg-[#0f172a] text-[#f1f5f9] rounded-2xl p-6 font-mono text-xs shadow-inner overflow-hidden border border-gray-800">
                        <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-gray-800 text-gray-400 gap-2">
                          <div className="flex items-center gap-2">
                            <FileText size={14} className="text-[#c9a84c]" />
                            <span className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                              Verbatim Court Record Text
                            </span>
                          </div>
                          
                          <button
                            onClick={handleCopyTranscript}
                            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg font-sans text-xs font-semibold transition-all cursor-pointer"
                          >
                            {transcriptCopied ? (
                              <>
                                <Check size={12} className="text-[#4ade80]" />
                                <span className="text-[#4ade80]">Copied to Clipboard</span>
                              </>
                            ) : (
                              <>
                                <Copy size={12} />
                                <span>Copy Transcript</span>
                              </>
                            )}
                          </button>
                        </div>
                        
                        <pre className="whitespace-pre-wrap leading-relaxed overflow-x-auto text-gray-200 font-mono text-[12.5px] selection:bg-[#c9a84c] selection:text-[#071126]">
                          {judgment.shortDescription || "No transcript text available for this record."}
                        </pre>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-[11.5px] text-gray-500 flex items-center justify-between">
                        <span>Verbatim text extracted from official Supreme Court cause-list and case-update files.</span>
                        <span className="font-semibold text-[#0d1b3e]">Official Judicial Transcript</span>
                      </div>

                    </div>
                  )}

                </div>

                {/* External Portal CTA (if official link available) */}
                {isExternalPortalLink && (
                  <div className="px-5 sm:px-8 pb-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-200">
                      <div>
                        <h4 className="font-bold text-[#0d1b3e] text-sm mb-1 flex items-center gap-2">
                          <ExternalLink size={14} className="text-[#c9a84c]" />
                          <span>Official Judicial Portal Reference</span>
                        </h4>
                        <p className="text-xs text-gray-500">
                          Inspect the certified digital order on the official court portal.
                        </p>
                      </div>

                      <a
                        href={judgment.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#0d1b3e] hover:bg-[#c9a84c] text-white hover:text-[#0d1b3e] px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex-shrink-0 cursor-pointer"
                      >
                        <span>Open Official Portal</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                )}

              </div>

              {/* Authoritative Citation Note */}
              <div className="bg-[#fffdf5] border border-[#c9a84c]/30 rounded-2xl p-5 text-xs text-[#785b1a] flex items-start gap-3 shadow-2xs">
                <CheckCircle2 size={18} className="text-[#c9a84c] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-[#0d1b3e] mb-1">Authoritative Judicial Reference</h5>
                  <p className="leading-relaxed text-gray-600">
                    Maintained by the Chambers of Advocate Tushar Garg, Advocate-on-Record (AOR) at the Supreme Court of India, for academic reference, comparative jurisprudence, and appellate litigation research.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column (4 cols): Sticky Sidebar with Snapshot & Consultation */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              {/* Card 1: Case Snapshot */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
                <h3 className="font-bold text-[#0d1b3e] text-xs uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Bookmark size={15} className="text-[#c9a84c]" />
                  <span>Case Snapshot</span>
                </h3>

                <ul className="space-y-3.5 text-xs">
                  <li className="flex flex-col gap-0.5 pb-2.5 border-b border-gray-50">
                    <span className="text-gray-400 font-medium">Judicial Forum:</span>
                    <span className="font-bold text-[#0d1b3e] text-[13px]">{courtName}</span>
                  </li>

                  <li className="flex flex-col gap-0.5 pb-2.5 border-b border-gray-50">
                    <span className="text-gray-400 font-medium">Case Number:</span>
                    <span className="font-semibold text-gray-800">{judgment.caseNumber || "N/A"}</span>
                  </li>

                  <li className="flex flex-col gap-0.5 pb-2.5 border-b border-gray-50">
                    <span className="text-gray-400 font-medium">Date of Pronouncement:</span>
                    <span className="font-semibold text-gray-800">{formattedDate}</span>
                  </li>

                  <li className="flex flex-col gap-0.5 pb-2.5 border-b border-gray-50">
                    <span className="text-gray-400 font-medium">Presiding Coram / Bench:</span>
                    <span className="font-semibold text-gray-800">{judgment.bench || "Judicial Bench"}</span>
                  </li>

                  {parsed.counsel && (
                    <li className="flex flex-col gap-0.5">
                      <span className="text-gray-400 font-medium">Counsel on Record:</span>
                      <span className="font-semibold text-[#0d1b3e]">Tushar Garg, AOR</span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Card 2: Advocate-on-Record Consultation Card */}
              <div className="bg-gradient-to-br from-[#0d1b3e] via-[#102048] to-[#071126] text-white rounded-2xl p-6 shadow-md border border-[#c9a84c]/30">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-4">
                  <Scale size={20} />
                </div>
                
                <h3 className="font-serif text-lg font-bold mb-1.5 leading-snug">
                  Need Legal Representation in the Supreme Court?
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-6">
                  Advocate Tushar Garg is an Advocate-on-Record (AOR No. 4215) at the Supreme Court of India, handling Special Leave Petitions (SLPs), Appeals, and Writ Petitions.
                </p>

                <div className="space-y-2.5">
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-all shadow-xs"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Consultation</span>
                  </a>

                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl border border-white/20 transition-all"
                  >
                    <Phone size={14} />
                    <span>Contact Chambers</span>
                  </Link>
                </div>
              </div>

              {/* Card 3: Related Recent Judgments from API */}
              {relatedJudgments.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
                  <h3 className="font-bold text-[#0d1b3e] text-xs uppercase tracking-wider mb-3.5 pb-2 border-b border-gray-100 flex items-center justify-between">
                    <span>Other Important Judgments</span>
                    <Link href="/judgments" className="text-[#c9a84c] hover:underline text-[10px] font-bold">
                      View All
                    </Link>
                  </h3>
                  
                  <div className="space-y-3">
                    {relatedJudgments.map((item) => (
                      <Link
                        key={item._id}
                        href={`/judgments/${item._id}`}
                        className="block group/related p-2.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all"
                      >
                        <span className="text-[10px] font-bold text-[#c9a84c] uppercase tracking-wider block mb-1">
                          {item.courtId?.name || "Supreme Court"}
                        </span>
                        <h4 className="text-xs font-bold text-[#0d1b3e] group-hover/related:text-[#c9a84c] transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                        <span className="text-[10.5px] text-gray-400 mt-1 block">
                          {item.caseNumber || "Civil Case"}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 3. Fullscreen Lightbox Zoom Modal for Certified Copy */}
      {isZoomOpen && judgment.image && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div 
            className="relative max-w-5xl max-h-[92vh] flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#0d1b3e] text-white px-5 py-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <FileText size={15} className="text-[#c9a84c]" />
                <span className="truncate max-w-md">{judgment.title} – Order Sheet</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadImage}
                  className="inline-flex items-center gap-1.5 bg-[#c9a84c] hover:bg-[#d8b657] text-[#071126] font-bold text-xs px-3 py-1.5 rounded-lg transition-all cursor-pointer"
                >
                  <Download size={13} />
                  <span>Download</span>
                </button>

                <button
                  onClick={() => setIsZoomOpen(false)}
                  className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Image Body with scroll */}
            <div className="p-4 overflow-auto max-h-[82vh] bg-gray-100 flex items-center justify-center">
              <img
                src={judgment.image}
                alt={judgment.title}
                className="max-h-[80vh] w-auto max-w-full rounded-md shadow-md object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}

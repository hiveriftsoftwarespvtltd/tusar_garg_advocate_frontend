"use client";

import { useState, useEffect } from "react";
import { 
  BookOpen, 
  Scale, 
  Gavel, 
  HelpCircle, 
  Plus, 
  Trash2, 
  Save, 
  RefreshCw, 
  Check, 
  Sparkles, 
  FileText, 
  ChevronRight, 
  ArrowRight,
  Layers
} from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";
import Swal from 'sweetalert2';
import Link from "next/link";
import { LAWS_CATEGORY_DATA } from "../../../laws/data/lawsData";

export default function AdminPracticeAreaDetails() {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "bare-acts" | "precedents" | "faqs">("overview");

  // Editable Detail Form State
  const [subtitle, setSubtitle] = useState("");
  const [overview, setOverview] = useState("");
  const [bareActs, setBareActs] = useState<any[]>([]);
  const [landmarkPrecedents, setLandmarkPrecedents] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);

  // Load all categories from API
  const loadCategories = async () => {
    try {
      setLoading(true);
      const data = await fetchApi('/laws-categories');
      if (data && Array.isArray(data) && data.length > 0) {
        setCategories(data);
        if (!selectedId) {
          setSelectedId(data[0]._id);
        }
      }
    } catch (err) {
      console.error("Failed to fetch practice areas", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  // When selectedId changes, populate form fields
  useEffect(() => {
    if (!selectedId || categories.length === 0) return;
    const cat = categories.find((c) => c._id === selectedId);
    if (!cat) return;

    const slug = (cat.slug || cat.name).toLowerCase().trim().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    const defaultData = LAWS_CATEGORY_DATA[slug] || null;

    setSubtitle(cat.subtitle || defaultData?.subtitle || `Dedicated Legal Practice & Precedents in ${cat.name} before High Courts & Supreme Court of India`);
    setOverview(cat.overview || cat.desc || defaultData?.overview || "");
    
    // Bare Acts
    if (Array.isArray(cat.bareActs) && cat.bareActs.length > 0) {
      setBareActs(cat.bareActs);
    } else if (defaultData?.bareActs) {
      setBareActs(defaultData.bareActs);
    } else {
      setBareActs([
        {
          title: `Primary Statute on ${cat.name}`,
          year: "2023",
          description: `Primary statutory framework governing ${cat.name} in India.`,
          sections: [
            { number: "Section 1", title: "Short Title & Scope", summary: "Defines territorial applicability and operational jurisdiction." }
          ]
        }
      ]);
    }

    // Precedents
    if (Array.isArray(cat.landmarkPrecedents) && cat.landmarkPrecedents.length > 0) {
      setLandmarkPrecedents(cat.landmarkPrecedents);
    } else if (defaultData?.landmarkPrecedents) {
      setLandmarkPrecedents(defaultData.landmarkPrecedents);
    } else {
      setLandmarkPrecedents([
        {
          title: `Landmark Judgment on ${cat.name}`,
          citation: "2022 SCC OnLine SC 100",
          court: "Supreme Court of India",
          year: "2022",
          ratio: `Established binding legal ratio and statutory interpretation for ${cat.name}.`
        }
      ]);
    }

    // FAQs
    if (Array.isArray(cat.faqs) && cat.faqs.length > 0) {
      setFaqs(cat.faqs);
    } else if (defaultData?.faqs) {
      setFaqs(defaultData.faqs);
    } else {
      setFaqs([
        {
          question: `How can I consult Advocate Tushar Garg for a ${cat.name} matter?`,
          answer: "You can schedule a consultation directly through the website or contact our chamber office via phone or WhatsApp."
        }
      ]);
    }
  }, [selectedId, categories]);

  const selectedCategory = categories.find((c) => c._id === selectedId);

  // SAVE HANDLER
  const handleSave = async () => {
    if (!selectedId) return;
    try {
      setSaving(true);
      const payload = {
        ...selectedCategory,
        subtitle,
        overview,
        bareActs,
        landmarkPrecedents,
        faqs,
      };

      await fetchApi(`/laws-categories/${selectedId}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });

      Swal.fire({
        title: 'Saved Successfully!',
        text: `Full page content for ${selectedCategory?.name} updated live on the website.`,
        icon: 'success',
        confirmButtonColor: '#0d1b3e',
        timer: 2500,
      });

      loadCategories();
    } catch (err: any) {
      Swal.fire({
        title: 'Save Failed',
        text: err.message || 'Failed to update detail page content.',
        icon: 'error',
        confirmButtonColor: '#0d1b3e',
      });
    } finally {
      setSaving(false);
    }
  };

  // --- BARE ACTS HELPERS ---
  const addBareAct = () => {
    setBareActs([
      ...bareActs,
      {
        title: "New Bare Act Title",
        year: "2023",
        description: "Statute description...",
        sections: [
          { number: "Section 1", title: "Short Title", summary: "Scope of act..." }
        ]
      }
    ]);
  };

  const removeBareAct = (actIdx: number) => {
    setBareActs(bareActs.filter((_, i) => i !== actIdx));
  };

  const updateBareAct = (actIdx: number, field: string, value: any) => {
    const updated = [...bareActs];
    updated[actIdx] = { ...updated[actIdx], [field]: value };
    setBareActs(updated);
  };

  const addSectionToAct = (actIdx: number) => {
    const updated = [...bareActs];
    const currentSections = updated[actIdx].sections || [];
    updated[actIdx].sections = [
      ...currentSections,
      { number: `Section ${currentSections.length + 1}`, title: "Section Title", summary: "Summary of provision..." }
    ];
    setBareActs(updated);
  };

  const removeSectionFromAct = (actIdx: number, secIdx: number) => {
    const updated = [...bareActs];
    updated[actIdx].sections = updated[actIdx].sections.filter((_: any, i: number) => i !== secIdx);
    setBareActs(updated);
  };

  const updateSectionInAct = (actIdx: number, secIdx: number, field: string, value: string) => {
    const updated = [...bareActs];
    updated[actIdx].sections[secIdx] = { ...updated[actIdx].sections[secIdx], [field]: value };
    setBareActs(updated);
  };

  // --- PRECEDENTS HELPERS ---
  const addPrecedent = () => {
    setLandmarkPrecedents([
      ...landmarkPrecedents,
      {
        title: "New Precedent Title v. Union of India",
        citation: "(2023) 1 SCC 100",
        court: "Supreme Court of India",
        year: "2023",
        ratio: "Key legal ratio established by court..."
      }
    ]);
  };

  const removePrecedent = (idx: number) => {
    setLandmarkPrecedents(landmarkPrecedents.filter((_, i) => i !== idx));
  };

  const updatePrecedent = (idx: number, field: string, value: string) => {
    const updated = [...landmarkPrecedents];
    updated[idx] = { ...updated[idx], [field]: value };
    setLandmarkPrecedents(updated);
  };

  // --- FAQS HELPERS ---
  const addFaq = () => {
    setFaqs([
      ...faqs,
      {
        question: "Enter Question Here?",
        answer: "Enter detailed legal answer here..."
      }
    ]);
  };

  const removeFaq = (idx: number) => {
    setFaqs(faqs.filter((_, i) => i !== idx));
  };

  const updateFaq = (idx: number, field: string, value: string) => {
    const updated = [...faqs];
    updated[idx] = { ...updated[idx], [field]: value };
    setFaqs(updated);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-1">
            <BookOpen size={15} />
            <span>PRACTICE PAGE BUILDER</span>
          </div>
          <h1 className="text-2xl font-serif font-bold text-[#0d1b3e]">
            Manage Practice Area Details & Bare Acts
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Select any Practice Area to visually edit its Overview, Bare Acts, Key Sections, Precedents, and FAQs.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/dashboard/laws-categories"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[#0d1b3e] text-xs font-bold rounded-xl transition-all border border-gray-300"
          >
            ← Practice Cards
          </Link>

          <button
            onClick={handleSave}
            disabled={saving || !selectedId}
            className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-md disabled:opacity-50"
          >
            {saving ? <RefreshCw size={15} className="animate-spin" /> : <Save size={15} />}
            <span>Save All Changes</span>
          </button>
        </div>
      </div>

      {/* Select Category Selector Bar */}
      <div className="bg-[#0d1b3e] text-white p-5 rounded-2xl shadow-md border border-[#c9a84c]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 border border-[#c9a84c] flex items-center justify-center text-[#c9a84c]">
            <Scale size={20} />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#c9a84c] uppercase tracking-wider block">
              SELECT PRACTICE AREA TO EDIT
            </span>
            <span className="font-serif font-bold text-lg">
              {selectedCategory?.name || "Loading..."}
            </span>
          </div>
        </div>

        <div className="w-full sm:w-80">
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full bg-white/10 text-white font-bold border border-white/20 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#c9a84c] cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id} className="bg-[#0d1b3e] text-white">
                {cat.name} ({cat.tag || "Category"})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* TABS NAVIGATION */}
      <div className="bg-white rounded-2xl p-2 border border-gray-200 shadow-sm flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === "overview"
              ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <BookOpen size={15} />
          <span>1. Hero Subtitle & Overview</span>
        </button>

        <button
          onClick={() => setActiveTab("bare-acts")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === "bare-acts"
              ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <FileText size={15} />
          <span>2. Bare Acts & Key Provisions ({bareActs.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("precedents")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === "precedents"
              ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Gavel size={15} />
          <span>3. Landmark Precedents ({landmarkPrecedents.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("faqs")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === "faqs"
              ? "bg-[#0d1b3e] text-[#c9a84c] shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <HelpCircle size={15} />
          <span>4. Category FAQs ({faqs.length})</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === "overview" && (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-5">
          <div>
            <label className="block text-xs font-bold text-[#0d1b3e] uppercase mb-1">
              Detail Page Subtitle / Tagline *
            </label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="e.g. Specialized Litigation before Supreme Court of India & High Courts..."
              className="w-full p-3 border border-gray-300 rounded-xl text-xs text-black font-medium outline-none focus:border-[#c9a84c]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0d1b3e] uppercase mb-1">
              Full Practice Scope & Overview Description *
            </label>
            <textarea
              rows={6}
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
              placeholder="Enter detailed legal overview of practice area in India..."
              className="w-full p-3 border border-gray-300 rounded-xl text-xs text-black leading-relaxed font-medium outline-none focus:border-[#c9a84c]"
            />
          </div>
        </div>
      )}

      {/* TAB 2: BARE ACTS & SECTIONS */}
      {activeTab === "bare-acts" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-serif font-bold text-[#0d1b3e]">
              Bare Acts List for {selectedCategory?.name}
            </h3>
            <button
              onClick={addBareAct}
              className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Plus size={15} />
              <span>Add New Bare Act</span>
            </button>
          </div>

          {bareActs.map((act, actIdx) => (
            <div key={actIdx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">
                  Bare Act #{actIdx + 1}
                </span>
                <button
                  onClick={() => removeBareAct(actIdx)}
                  className="text-red-500 hover:text-red-700 text-xs font-bold flex items-center gap-1"
                >
                  <Trash2 size={14} /> Remove Act
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Act Title *</label>
                  <input
                    type="text"
                    value={act.title}
                    onChange={(e) => updateBareAct(actIdx, "title", e.target.value)}
                    placeholder="e.g. Information Technology Act"
                    className="w-full p-2.5 border border-gray-300 rounded-xl text-xs font-bold text-black outline-none focus:border-[#c9a84c]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Enactment Year *</label>
                  <input
                    type="text"
                    value={act.year}
                    onChange={(e) => updateBareAct(actIdx, "year", e.target.value)}
                    placeholder="e.g. 2000"
                    className="w-full p-2.5 border border-gray-300 rounded-xl text-xs font-bold text-black outline-none focus:border-[#c9a84c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Act Description</label>
                <input
                  type="text"
                  value={act.description}
                  onChange={(e) => updateBareAct(actIdx, "description", e.target.value)}
                  placeholder="e.g. Primary statute governing electronic commerce and cyber crimes."
                  className="w-full p-2.5 border border-gray-300 rounded-xl text-xs text-black outline-none focus:border-[#c9a84c]"
                />
              </div>

              {/* Sections under this Act */}
              <div className="bg-gray-50 p-4 rounded-xl space-y-3 border border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#0d1b3e] uppercase">
                    Key Provisions & Sections ({act.sections?.length || 0})
                  </span>
                  <button
                    onClick={() => addSectionToAct(actIdx)}
                    className="text-xs font-bold text-[#c9a84c] hover:underline flex items-center gap-1"
                  >
                    <Plus size={13} /> Add Section
                  </button>
                </div>

                {act.sections?.map((sec: any, secIdx: number) => (
                  <div key={secIdx} className="bg-white p-3 rounded-lg border border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
                    <div className="md:col-span-3">
                      <input
                        type="text"
                        value={sec.number}
                        onChange={(e) => updateSectionInAct(actIdx, secIdx, "number", e.target.value)}
                        placeholder="Sec Number (e.g. Sec 66)"
                        className="w-full p-2 border border-gray-300 rounded text-xs font-mono font-bold text-black"
                      />
                    </div>
                    <div className="md:col-span-4">
                      <input
                        type="text"
                        value={sec.title}
                        onChange={(e) => updateSectionInAct(actIdx, secIdx, "title", e.target.value)}
                        placeholder="Section Title"
                        className="w-full p-2 border border-gray-300 rounded text-xs font-bold text-black"
                      />
                    </div>
                    <div className="md:col-span-4">
                      <input
                        type="text"
                        value={sec.summary}
                        onChange={(e) => updateSectionInAct(actIdx, secIdx, "summary", e.target.value)}
                        placeholder="Section Summary..."
                        className="w-full p-2 border border-gray-300 rounded text-xs text-black"
                      />
                    </div>
                    <div className="md:col-span-1 text-right">
                      <button
                        onClick={() => removeSectionFromAct(actIdx, secIdx)}
                        className="text-red-500 hover:text-red-700 p-1"
                        title="Remove section"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: LANDMARK PRECEDENTS */}
      {activeTab === "precedents" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-serif font-bold text-[#0d1b3e]">
              Landmark Precedents for {selectedCategory?.name}
            </h3>
            <button
              onClick={addPrecedent}
              className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Plus size={15} />
              <span>Add New Precedent</span>
            </button>
          </div>

          {landmarkPrecedents.map((p, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">
                  Precedent #{idx + 1}
                </span>
                <button
                  onClick={() => removePrecedent(idx)}
                  className="text-red-500 hover:text-red-700 text-xs font-bold flex items-center gap-1"
                >
                  <Trash2 size={14} /> Remove Precedent
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Case Title *</label>
                  <input
                    type="text"
                    value={p.title}
                    onChange={(e) => updatePrecedent(idx, "title", e.target.value)}
                    placeholder="e.g. Shreya Singhal v. Union of India"
                    className="w-full p-2.5 border border-gray-300 rounded-xl text-xs font-bold text-black outline-none focus:border-[#c9a84c]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Citation *</label>
                  <input
                    type="text"
                    value={p.citation}
                    onChange={(e) => updatePrecedent(idx, "citation", e.target.value)}
                    placeholder="e.g. (2015) 5 SCC 1"
                    className="w-full p-2.5 border border-gray-300 rounded-xl text-xs font-mono font-bold text-black outline-none focus:border-[#c9a84c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Court Name</label>
                  <input
                    type="text"
                    value={p.court}
                    onChange={(e) => updatePrecedent(idx, "court", e.target.value)}
                    placeholder="e.g. Supreme Court of India"
                    className="w-full p-2.5 border border-gray-300 rounded-xl text-xs text-black outline-none focus:border-[#c9a84c]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Year</label>
                  <input
                    type="text"
                    value={p.year}
                    onChange={(e) => updatePrecedent(idx, "year", e.target.value)}
                    placeholder="e.g. 2015"
                    className="w-full p-2.5 border border-gray-300 rounded-xl text-xs text-black outline-none focus:border-[#c9a84c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Legal Ratio (Ratio Decidendi) *</label>
                <textarea
                  rows={2}
                  value={p.ratio}
                  onChange={(e) => updatePrecedent(idx, "ratio", e.target.value)}
                  placeholder="Enter holding ratio of the judgment..."
                  className="w-full p-2.5 border border-gray-300 rounded-xl text-xs text-black outline-none focus:border-[#c9a84c]"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: FAQS */}
      {activeTab === "faqs" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-serif font-bold text-[#0d1b3e]">
              Frequently Asked Questions for {selectedCategory?.name}
            </h3>
            <button
              onClick={addFaq}
              className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Plus size={15} />
              <span>Add New FAQ</span>
            </button>
          </div>

          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">
                  FAQ #{idx + 1}
                </span>
                <button
                  onClick={() => removeFaq(idx)}
                  className="text-red-500 hover:text-red-700 text-xs font-bold flex items-center gap-1"
                >
                  <Trash2 size={14} /> Remove FAQ
                </button>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Question *</label>
                <input
                  type="text"
                  value={faq.question}
                  onChange={(e) => updateFaq(idx, "question", e.target.value)}
                  placeholder="Enter Question..."
                  className="w-full p-2.5 border border-gray-300 rounded-xl text-xs font-bold text-black outline-none focus:border-[#c9a84c]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Answer *</label>
                <textarea
                  rows={3}
                  value={faq.answer}
                  onChange={(e) => updateFaq(idx, "answer", e.target.value)}
                  placeholder="Enter Answer..."
                  className="w-full p-2.5 border border-gray-300 rounded-xl text-xs text-black leading-relaxed outline-none focus:border-[#c9a84c]"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating Save Footer */}
      <div className="fixed bottom-6 right-8 z-40">
        <button
          onClick={handleSave}
          disabled={saving || !selectedId}
          className="bg-[#c9a84c] hover:bg-[#b5953d] text-[#071126] font-bold px-7 py-3 rounded-full shadow-2xl flex items-center gap-2.5 text-sm uppercase tracking-wider transition-transform hover:scale-105 border-2 border-[#071126]"
        >
          {saving ? <RefreshCw size={16} className="animate-spin" /> : <Save size={16} />}
          <span>Save Practice Area Content</span>
        </button>
      </div>
    </div>
  );
}

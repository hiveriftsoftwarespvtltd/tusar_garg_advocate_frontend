"use client";

import { useEffect, useState } from "react";
import { Save, Plus, Trash2, Check, RefreshCw, Image as ImageIcon, Sliders, Upload } from "lucide-react";
import { getHeroData, updateHeroData, HeroData } from "../../../../lib/api/hero";
import Swal from 'sweetalert2';

export default function AdminHeroPage() {
  const [formData, setFormData] = useState<HeroData>({
    badgeText: "ADVOCATE-ON-RECORD • SUPREME COURT OF INDIA",
    titleFirst: "TUSHAR",
    titleSecond: "GARG",
    subTitle: "Legal Practice, Supreme Court & High Courts of India",
    description: "Dedicated to constitutional law, appellate litigation, civil disputes, criminal defense, and legal research across all judicial forums in India.",
    expertiseBadges: ["Supreme Court SLPs", "Constitutional Matters", "Civil & Criminal Litigation", "Arbitration & Corporate"],
    ctaButtons: [
      { line1: "EXPLORE", line2: "JUDGMENTS", icon: "Scale", href: "/judgments" },
      { line1: "INDIAN", line2: "LAWS & ACTS", icon: "Gavel", href: "/laws" },
      { line1: "COURTS", line2: "DIRECTORY", icon: "Landmark", href: "/courts" },
      { line1: "JUDICIARY", line2: "RESOURCES", icon: "GraduationCap", href: "/judiciary" },
    ],
    bgImage: "/home/hero_banner_image.png",
    bgOverlayOpacity: 50,
    advocateName: "Adv. Tushar Garg",
    advocateTitle: "Supreme Court of India",
    advocatePhoto: "/home/tusar_garg_photo.jpeg",
    stats: [
      { label: "Years Practice", value: "10+" },
      { label: "Cases Handled", value: "5000+" },
      { label: "States Covered", value: "28+" },
    ],
    consultationLink: "/contact",
    consultationText: "Book Legal Consultation",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await getHeroData();
      if (data) {
        setFormData({
          ...data,
          expertiseBadges: data.expertiseBadges || [],
          ctaButtons: data.ctaButtons || [],
          stats: data.stats || [],
        });
      }
      setLoading(false);
    }
    loadData();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMsg("");
    try {
      await updateHeroData(formData);
      setSuccessMsg("Hero Section settings updated successfully!");
      Swal.fire({
        title: 'Saved Successfully!',
        text: 'Hero Section settings updated successfully in MongoDB.',
        icon: 'success',
        confirmButtonColor: '#0d1b3e',
        timer: 3000,
      });
    } catch (err: any) {
      Swal.fire({
        title: 'Save Failed',
        text: err.message || 'Failed to update Hero Section settings.',
        icon: 'error',
        confirmButtonColor: '#0d1b3e',
      });
    } finally {
      setSaving(false);
    }
  };

  // Image File Upload Handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'bgImage' | 'advocatePhoto') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setFormData((prev) => ({ ...prev, [fieldName]: result }));
      }
    };
    reader.readAsDataURL(file);
  };

  // Badges handler
  const handleBadgeChange = (index: number, val: string) => {
    const updated = [...formData.expertiseBadges];
    updated[index] = val;
    setFormData({ ...formData, expertiseBadges: updated });
  };
  const addBadge = () => {
    setFormData({ ...formData, expertiseBadges: [...formData.expertiseBadges, "New Practice Area"] });
  };
  const removeBadge = (index: number) => {
    const updated = [...formData.expertiseBadges];
    updated.splice(index, 1);
    setFormData({ ...formData, expertiseBadges: updated });
  };

  // CTA buttons handler
  const handleCtaChange = (index: number, key: string, val: string) => {
    const updated = [...formData.ctaButtons];
    (updated[index] as any)[key] = val;
    setFormData({ ...formData, ctaButtons: updated });
  };
  const addCtaButton = () => {
    setFormData({
      ...formData,
      ctaButtons: [...formData.ctaButtons, { line1: "NEW", line2: "LINK", icon: "Scale", href: "/" }],
    });
  };
  const removeCtaButton = (index: number) => {
    const updated = [...formData.ctaButtons];
    updated.splice(index, 1);
    setFormData({ ...formData, ctaButtons: updated });
  };

  // Stats handler
  const handleStatChange = (index: number, key: string, val: string) => {
    const updated = [...formData.stats];
    (updated[index] as any)[key] = val;
    setFormData({ ...formData, stats: updated });
  };
  const addStat = () => {
    setFormData({ ...formData, stats: [...formData.stats, { label: "New Stat", value: "100+" }] });
  };
  const removeStat = (index: number) => {
    const updated = [...formData.stats];
    updated.splice(index, 1);
    setFormData({ ...formData, stats: updated });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center gap-3 text-gray-500 font-medium">
          <RefreshCw className="animate-spin" size={20} /> Loading Hero Section Settings...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#0d1b3e] flex items-center gap-2">
            <Sliders className="text-[#c9a84c]" size={24} /> Manage Hero Section
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Customize headlines, action buttons, advocate profile, quick stats, background image, and dark filter.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center justify-center gap-2 bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white font-bold py-2.5 px-6 rounded-lg transition-all shadow-md disabled:opacity-50"
        >
          {saving ? <RefreshCw className="animate-spin" size={18} /> : <Save size={18} />}
          <span>{saving ? "Saving..." : "Save Changes"}</span>
        </button>
      </div>

      {successMsg && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg flex items-center gap-2 text-sm font-medium">
          <Check size={18} /> {successMsg}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Panel 1: Main Copy */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
          <h2 className="text-base font-bold text-[#c9a84c] uppercase tracking-wider border-b border-gray-100 pb-3 flex items-center gap-2">
            1. Main Headlines & Text Copy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Authority Pill Badge Text</label>
              <input
                type="text"
                value={formData.badgeText}
                onChange={(e) => setFormData({ ...formData, badgeText: e.target.value })}
                className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Headline Part 1 (First Name)</label>
              <input
                type="text"
                value={formData.titleFirst}
                onChange={(e) => setFormData({ ...formData, titleFirst: e.target.value })}
                className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Headline Part 2 (Last Name - Gold Highlight)</label>
              <input
                type="text"
                value={formData.titleSecond}
                onChange={(e) => setFormData({ ...formData, titleSecond: e.target.value })}
                className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Sub-Headline</label>
              <input
                type="text"
                value={formData.subTitle}
                onChange={(e) => setFormData({ ...formData, subTitle: e.target.value })}
                className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Short Paragraph Description</label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
              />
            </div>
          </div>
        </section>

        {/* Panel 2: Expertise Badges */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h2 className="text-base font-bold text-[#c9a84c] uppercase tracking-wider">
              2. Expertise Pill Badges
            </h2>
            <button
              type="button"
              onClick={addBadge}
              className="text-xs bg-[#0d1b3e] text-white px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-[#1a2b5e]"
            >
              <Plus size={14} /> Add Badge
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {formData.expertiseBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-200">
                <input
                  type="text"
                  value={badge}
                  onChange={(e) => handleBadgeChange(idx, e.target.value)}
                  className="flex-1 p-1.5 border border-gray-300 rounded text-sm text-black outline-none focus:border-[#c9a84c]"
                />
                <button
                  type="button"
                  onClick={() => removeBadge(idx)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Panel 3: Action Cards Grid */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h2 className="text-base font-bold text-[#c9a84c] uppercase tracking-wider">
              3. Action Navigation Cards (4 Grid Items)
            </h2>
            <button
              type="button"
              onClick={addCtaButton}
              className="text-xs bg-[#0d1b3e] text-white px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-[#1a2b5e]"
            >
              <Plus size={14} /> Add Action Card
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formData.ctaButtons.map((btn, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3 relative group">
                <button
                  type="button"
                  onClick={() => removeCtaButton(idx)}
                  className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">Line 1</label>
                    <input
                      type="text"
                      value={btn.line1}
                      onChange={(e) => handleCtaChange(idx, "line1", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded text-sm text-black outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">Line 2</label>
                    <input
                      type="text"
                      value={btn.line2}
                      onChange={(e) => handleCtaChange(idx, "line2", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded text-sm text-black outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">Icon Name</label>
                    <select
                      value={btn.icon}
                      onChange={(e) => handleCtaChange(idx, "icon", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded text-sm text-black outline-none"
                    >
                      <option value="Scale">Scale (Judgments)</option>
                      <option value="Gavel">Gavel (Laws)</option>
                      <option value="Landmark">Landmark (Courts)</option>
                      <option value="GraduationCap">GraduationCap (Judiciary)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">Target Link URL</label>
                    <input
                      type="text"
                      value={btn.href}
                      onChange={(e) => handleCtaChange(idx, "href", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded text-sm text-black outline-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Panel 4: Advocate Profile Showcase & Live Stats */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
          <h2 className="text-base font-bold text-[#c9a84c] uppercase tracking-wider border-b border-gray-100 pb-3">
            4. Advocate Profile Showcase & Live Quick Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Advocate Full Name</label>
              <input
                type="text"
                value={formData.advocateName}
                onChange={(e) => setFormData({ ...formData, advocateName: e.target.value })}
                className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none mb-3"
              />

              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Advocate Sub-Title</label>
              <input
                type="text"
                value={formData.advocateTitle}
                onChange={(e) => setFormData({ ...formData, advocateTitle: e.target.value })}
                className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none mb-3"
              />

              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Consultation Button Text</label>
              <input
                type="text"
                value={formData.consultationText}
                onChange={(e) => setFormData({ ...formData, consultationText: e.target.value })}
                className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none"
              />
            </div>

            {/* Advocate Photo Upload & Preview */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3">
              <label className="block text-xs font-bold text-gray-700 uppercase">
                Right Side Card Advocate Photo (Upload or URL)
              </label>
              
              <div className="flex items-center gap-4">
                {formData.advocatePhoto ? (
                  <img
                    src={formData.advocatePhoto}
                    alt="Advocate Preview"
                    className="w-20 h-24 object-cover object-top rounded-lg border-2 border-[#c9a84c] shadow-sm"
                  />
                ) : (
                  <div className="w-20 h-24 bg-gray-200 rounded-lg border border-dashed border-gray-400 flex items-center justify-center text-xs text-gray-500">
                    No Photo
                  </div>
                )}
                <div className="flex-1 space-y-2">
                  <label className="cursor-pointer inline-flex items-center gap-2 bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors shadow-sm">
                    <Upload size={14} /> Upload Advocate Photo File
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'advocatePhoto')}
                      className="hidden"
                    />
                  </label>
                  <input
                    type="text"
                    placeholder="Or paste image URL"
                    value={formData.advocatePhoto}
                    onChange={(e) => setFormData({ ...formData, advocatePhoto: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg text-xs text-black outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-gray-700 uppercase">Quick Stats List</label>
              <button
                type="button"
                onClick={addStat}
                className="text-xs bg-[#0d1b3e] text-white px-3 py-1 rounded-lg flex items-center gap-1"
              >
                <Plus size={14} /> Add Stat Item
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {formData.stats.map((st, idx) => (
                <div key={idx} className="flex gap-2 bg-gray-50 p-2.5 rounded-lg border border-gray-200 items-center">
                  <input
                    type="text"
                    placeholder="Value (e.g. 10+)"
                    value={st.value}
                    onChange={(e) => handleStatChange(idx, "value", e.target.value)}
                    className="w-1/3 p-1.5 border border-gray-300 rounded text-sm text-black outline-none font-bold"
                  />
                  <input
                    type="text"
                    placeholder="Label"
                    value={st.label}
                    onChange={(e) => handleStatChange(idx, "label", e.target.value)}
                    className="flex-1 p-1.5 border border-gray-300 rounded text-sm text-black outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => removeStat(idx)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Panel 5: Background Image Upload & Overlay Slider */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
          <h2 className="text-base font-bold text-[#c9a84c] uppercase tracking-wider border-b border-gray-100 pb-3 flex items-center gap-2">
            <ImageIcon size={18} /> 5. Supreme Court Background Image & Dark Overlay Filter
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Background Image Upload & Preview */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3">
              <label className="block text-xs font-bold text-gray-700 uppercase">
                Supreme Court Background Image (Upload or URL)
              </label>

              <div className="flex items-center gap-4">
                {formData.bgImage ? (
                  <img
                    src={formData.bgImage}
                    alt="Background Preview"
                    className="w-28 h-20 object-cover rounded-lg border-2 border-[#c9a84c] shadow-sm"
                  />
                ) : (
                  <div className="w-28 h-20 bg-gray-200 rounded-lg border border-dashed border-gray-400 flex items-center justify-center text-xs text-gray-500">
                    No Image
                  </div>
                )}
                <div className="flex-1 space-y-2">
                  <label className="cursor-pointer inline-flex items-center gap-2 bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors shadow-sm">
                    <Upload size={14} /> Upload Background Image File
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'bgImage')}
                      className="hidden"
                    />
                  </label>
                  <input
                    type="text"
                    placeholder="Or paste background image URL"
                    value={formData.bgImage}
                    onChange={(e) => setFormData({ ...formData, bgImage: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg text-xs text-black outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Dark Overlay Slider */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-gray-700 uppercase flex items-center gap-1.5">
                  <Sliders size={14} className="text-[#c9a84c]" /> Background Image Opacity / Dark Filter Tint
                </label>
                <span className="text-xs font-bold text-[#0d1b3e] bg-[#c9a84c]/20 px-2 py-0.5 rounded">
                  {formData.bgOverlayOpacity}%
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={90}
                step={5}
                value={formData.bgOverlayOpacity}
                onChange={(e) => setFormData({ ...formData, bgOverlayOpacity: Number(e.target.value) })}
                className="w-full cursor-pointer accent-[#0d1b3e]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                <span>10% (Bright / Clear Image)</span>
                <span>50% (Balanced Default)</span>
                <span>90% (Darker Tint)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Submit */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center justify-center gap-2 bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 text-sm"
          >
            {saving ? <RefreshCw className="animate-spin" size={18} /> : <Save size={18} />}
            <span>{saving ? "Saving Changes..." : "Save All Hero Settings"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

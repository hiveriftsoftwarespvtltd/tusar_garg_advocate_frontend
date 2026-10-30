"use client";

import { useState } from "react";
import { Plus, Trash2, X, Upload, ImageIcon } from "lucide-react";
import { fetchApi, compressImage } from "../../../../lib/api/client";

export default function CourtForm({ initialData, states, onClose, onSuccess }: any) {
  const [formData, setFormData] = useState({
    name: "", slug: "", courtType: "District Court", city: "", description: "", image: "",
    jurisdiction: "", address: "", officialWebsite: "", caseStatusUrl: "", judgmentsUrl: "", causeListUrl: "", recruitmentUrl: "", rulesUrl: "", metaTitle: "", metaDescription: "", status: "PUBLISHED", featured: false,
    contactInfo: { phone: "", email: "" },
    workingHours: "", postalDetails: "", history: "",
    judges: [] as any[], services: [] as any[], practiceAreas: [] as string[], faqs: [] as any[],
    ...initialData,
    stateId: initialData?.stateId?._id || initialData?.stateId || states[0]?._id || ""
  });

  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressed = await compressImage(file);
        setFormData((prev: any) => ({ ...prev, image: compressed }));
      } catch (err) {
        console.error("Image compression failed", err);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (initialData?._id) {
        await fetchApi(`/courts/${initialData._id}`, { method: "PUT", body: JSON.stringify(formData) });
      } else {
        await fetchApi('/courts', { method: "POST", body: JSON.stringify(formData) });
      }
      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Failed to save court.");
    } finally {
      setLoading(false);
    }
  };

  const handleArrayChange = (field: string, index: number, key: string, value: any) => {
    const newArr = [...(formData as any)[field]];
    newArr[index][key] = value;
    setFormData({ ...formData, [field]: newArr });
  };

  const addArrayItem = (field: string, defaultItem: any) => {
    setFormData({ ...formData, [field]: [...(formData as any)[field], defaultItem] });
  };

  const removeArrayItem = (field: string, index: number) => {
    const newArr = [...(formData as any)[field]];
    newArr.splice(index, 1);
    setFormData({ ...formData, [field]: newArr });
  };

  const handlePracticeAreas = (val: string) => {
    setFormData({ ...formData, practiceAreas: val.split(",").map(s => s.trim()) });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-[#0d1b3e]">{initialData?._id ? "Edit Court" : "Add New Court"}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X size={20} /></button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          
          {/* 1. Basic Info */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-[#c9a84c] border-b pb-2">1. Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">State *</label>
                <select required className="w-full p-2 border rounded" value={typeof formData.stateId === 'object' ? (formData.stateId as any)._id : formData.stateId} onChange={e => setFormData({...formData, stateId: e.target.value})}>
                  {states.map((s: any) => <option key={s._id} value={s._id}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Court Name *</label>
                <input required type="text" className="w-full p-2 border rounded" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug *</label>
                <input required type="text" className="w-full p-2 border rounded" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Court Type *</label>
                <select required className="w-full p-2 border rounded" value={formData.courtType} onChange={e => setFormData({...formData, courtType: e.target.value})}>
                  <option value="">Select Type</option>
                  <option value="District Court">District Court</option>
                  <option value="High Court">High Court</option>
                  <option value="Tribunal">Tribunal</option>
                  <option value="Supreme Court">Supreme Court</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City / District</label>
                <input type="text" className="w-full p-2 border rounded" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
              </div>
            </div>

            {/* Court Image Selection & File Upload */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mt-4 space-y-3">
              <label className="block text-sm font-bold text-[#0d1b3e] flex items-center gap-2">
                <ImageIcon size={18} className="text-[#c9a84c]" />
                Court Image (Upload File from PC or Enter Image URL)
              </label>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* File Upload Option */}
                <div className="md:col-span-6">
                  <label className="block text-xs font-semibold text-gray-600 mb-1 flex items-center gap-1">
                    <Upload size={14} className="text-[#0d1b3e]" /> Option 1: Upload Image File
                  </label>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="block w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#0d1b3e] file:text-white hover:file:bg-[#1a2b5e] cursor-pointer bg-white border border-gray-300 rounded-lg p-1"
                  />
                </div>

                {/* Direct Image URL Option */}
                <div className="md:col-span-4">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Option 2: Direct Image URL
                  </label>
                  <input 
                    type="text" 
                    placeholder="https://... or /court/gurugram_court.jpg"
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm text-[#0d1b3e] outline-none focus:border-[#c9a84c] bg-white" 
                    value={formData.image} 
                    onChange={e => setFormData({...formData, image: e.target.value})} 
                  />
                </div>

                {/* Live Image Preview Thumbnail */}
                <div className="md:col-span-2 flex items-center justify-center">
                  {formData.image ? (
                    <div className="relative shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 border-[#c9a84c] bg-gray-100 group shadow-md flex items-center justify-center">
                      <img 
                        key={formData.image.slice(0, 40)}
                        src={formData.image} 
                        alt="Court Preview" 
                        className="w-full h-full object-cover" 
                      />
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, image: "" })}
                        className="absolute inset-0 bg-black/70 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold z-10"
                        title="Remove Image"
                      >
                        <X size={18} />
                        <span>Remove</span>
                      </button>
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 bg-white text-[10px] font-semibold text-center p-1">
                      <ImageIcon size={20} className="mb-1 text-gray-300" />
                      <span>No Image</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
              <input 
                type="checkbox" 
                id="isFeaturedCourt"
                checked={formData.featured}
                onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                className="w-5 h-5 text-[#c9a84c] rounded focus:ring-[#c9a84c]"
              />
              <label htmlFor="isFeaturedCourt" className="text-sm font-bold text-gray-900 cursor-pointer select-none">
                Mark as Featured Court
                <span className="block text-xs font-normal text-gray-500 mt-0.5">This court will appear under its featured State heading on the public directory.</span>
              </label>
            </div>
          </section>

          {/* 2. Overview & Info */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-[#c9a84c] border-b pb-2">2. Overview & Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Short Description</label>
                <textarea rows={2} className="w-full p-2 border rounded" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Establishment / History (About)</label>
                <textarea rows={2} className="w-full p-2 border rounded" value={formData.history} onChange={e => setFormData({...formData, history: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <textarea rows={2} className="w-full p-2 border rounded" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Jurisdiction</label>
                <textarea rows={2} className="w-full p-2 border rounded" value={formData.jurisdiction} onChange={e => setFormData({...formData, jurisdiction: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Phone</label>
                <input type="text" className="w-full p-2 border rounded" value={formData.contactInfo?.phone} onChange={e => setFormData({...formData, contactInfo: { ...formData.contactInfo, phone: e.target.value }})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Email</label>
                <input type="email" className="w-full p-2 border rounded" value={formData.contactInfo?.email} onChange={e => setFormData({...formData, contactInfo: { ...formData.contactInfo, email: e.target.value }})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Working Hours</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="e.g. 10:00 AM - 5:00 PM" value={formData.workingHours} onChange={e => setFormData({...formData, workingHours: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Postal Details</label>
                <input type="text" className="w-full p-2 border rounded" value={formData.postalDetails} onChange={e => setFormData({...formData, postalDetails: e.target.value})} />
              </div>
            </div>
          </section>

          {/* 3. Official Links */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-[#c9a84c] border-b pb-2">3. Important Official Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['officialWebsite', 'caseStatusUrl', 'judgmentsUrl', 'causeListUrl', 'recruitmentUrl', 'rulesUrl'].map(field => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-1 capitalize">{field.replace('Url', '')} URL</label>
                  <input type="url" className="w-full p-2 border rounded" value={(formData as any)[field]} onChange={e => setFormData({...formData, [field]: e.target.value})} />
                </div>
              ))}
            </div>
          </section>

          {/* 4. Dynamic Arrays */}
          <section className="space-y-8">
            <h3 className="text-lg font-bold text-[#c9a84c] border-b pb-2">4. Court Dynamics (Judges, Services, FAQs)</h3>
            
            {/* Judges */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-medium">Judges / Bench</label>
                <button type="button" onClick={() => addArrayItem('judges', { name: "", designation: "", bench: "", profileUrl: "" })} className="text-xs bg-[#0d1b3e] text-white px-2 py-1 rounded">+ Add Judge</button>
              </div>
              <div className="space-y-2">
                {formData.judges?.map((judge: any, i: number) => (
                  <div key={i} className="flex gap-2 items-center bg-gray-50 p-2 rounded">
                    <input type="text" placeholder="Name" className="w-1/4 p-1 border rounded text-sm" value={judge.name} onChange={e => handleArrayChange('judges', i, 'name', e.target.value)} />
                    <input type="text" placeholder="Designation" className="w-1/4 p-1 border rounded text-sm" value={judge.designation} onChange={e => handleArrayChange('judges', i, 'designation', e.target.value)} />
                    <input type="text" placeholder="Bench" className="w-1/4 p-1 border rounded text-sm" value={judge.bench} onChange={e => handleArrayChange('judges', i, 'bench', e.target.value)} />
                    <input type="text" placeholder="Profile URL" className="w-1/4 p-1 border rounded text-sm" value={judge.profileUrl} onChange={e => handleArrayChange('judges', i, 'profileUrl', e.target.value)} />
                    <button type="button" onClick={() => removeArrayItem('judges', i)} className="text-red-500"><Trash2 size={16}/></button>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-medium">Court Services / Resources</label>
                <button type="button" onClick={() => addArrayItem('services', { title: "", link: "", iconType: "Search" })} className="text-xs bg-[#0d1b3e] text-white px-2 py-1 rounded">+ Add Service</button>
              </div>
              <div className="space-y-2">
                {formData.services?.map((service: any, i: number) => (
                  <div key={i} className="flex gap-2 items-center bg-gray-50 p-2 rounded">
                    <input type="text" placeholder="Title" className="flex-1 p-1 border rounded text-sm" value={service.title} onChange={e => handleArrayChange('services', i, 'title', e.target.value)} />
                    <input type="text" placeholder="Link URL" className="flex-1 p-1 border rounded text-sm" value={service.link} onChange={e => handleArrayChange('services', i, 'link', e.target.value)} />
                    <input type="text" placeholder="Icon (e.g., Search, FileText)" className="flex-1 p-1 border rounded text-sm" value={service.iconType} onChange={e => handleArrayChange('services', i, 'iconType', e.target.value)} />
                    <button type="button" onClick={() => removeArrayItem('services', i)} className="text-red-500"><Trash2 size={16}/></button>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-medium">FAQs</label>
                <button type="button" onClick={() => addArrayItem('faqs', { question: "", answer: "" })} className="text-xs bg-[#0d1b3e] text-white px-2 py-1 rounded">+ Add FAQ</button>
              </div>
              <div className="space-y-2">
                {formData.faqs?.map((faq: any, i: number) => (
                  <div key={i} className="flex flex-col gap-2 bg-gray-50 p-2 rounded relative group">
                    <input type="text" placeholder="Question" className="w-full p-1 border rounded text-sm font-medium" value={faq.question} onChange={e => handleArrayChange('faqs', i, 'question', e.target.value)} />
                    <textarea rows={2} placeholder="Answer" className="w-full p-1 border rounded text-sm" value={faq.answer} onChange={e => handleArrayChange('faqs', i, 'answer', e.target.value)} />
                    <button type="button" onClick={() => removeArrayItem('faqs', i)} className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100"><Trash2 size={16}/></button>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <label className="block font-medium mb-1">Related Laws / Practice Areas (Comma separated)</label>
              <input type="text" placeholder="Civil, Criminal, Family" className="w-full p-2 border rounded" value={formData.practiceAreas.join(", ")} onChange={e => handlePracticeAreas(e.target.value)} />
            </div>

          </section>

          {/* 5. SEO & Status */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-[#c9a84c] border-b pb-2">5. SEO & Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Meta Title</label>
                <input type="text" className="w-full p-2 border rounded" value={formData.metaTitle} onChange={e => setFormData({...formData, metaTitle: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Meta Description</label>
                <input type="text" className="w-full p-2 border rounded" value={formData.metaDescription} onChange={e => setFormData({...formData, metaDescription: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select className="w-full p-2 border rounded" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                </select>
              </div>
            </div>
          </section>

          <div className="pt-4 border-t border-gray-200 flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-6 py-2 border border-gray-300 rounded font-medium hover:bg-gray-50">Cancel</button>
            <button type="submit" disabled={loading} className="bg-[#0d1b3e] text-white px-8 py-2 rounded font-medium hover:bg-[#1a2b5e] disabled:opacity-50">
              {loading ? "Saving..." : "Save Court Details"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit2 } from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";

export default function AdminJudgments() {
  const [judgments, setJudgments] = useState<any[]>([]);
  const [courts, setCourts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    courtId: "",
    title: "",
    caseNumber: "",
    date: "",
    bench: "",
    shortDescription: "",
    link: "",
    isFeatured: false
  });

  const loadData = async () => {
    try {
      const [judgData, crtData] = await Promise.all([
        fetchApi('/courts/judgments/all'),
        fetchApi('/courts')
      ]);
      setJudgments(judgData);
      setCourts(crtData);
      if (crtData.length > 0) {
        setFormData(prev => ({ ...prev, courtId: crtData[0]._id }));
      }
    } catch (err) {
      console.error(err);
      alert("Failed to load judgments data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetchApi('/courts/judgments', {
        method: "POST",
        body: JSON.stringify(formData)
      });
      setShowForm(false);
      setFormData({ 
        courtId: courts[0]?._id || "", 
        title: "", caseNumber: "", date: "", bench: "", shortDescription: "", link: "", isFeatured: false 
      });
      loadData();
    } catch (err) {
      console.error(err);
      alert("Failed to save judgment.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this judgment?")) return;
    try {
      await fetchApi(`/courts/judgments/${id}`, { method: "DELETE" });
      loadData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0d1b3e]">Manage Judgments</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-[#c9a84c] text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-[#b09342] transition-colors"
        >
          <Plus size={18} />
          {showForm ? "Cancel" : "Add Judgment"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Court *</label>
              <select 
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#c9a84c] focus:border-[#c9a84c]"
                value={formData.courtId}
                onChange={e => setFormData({...formData, courtId: e.target.value})}
              >
                {courts.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Case Title *</label>
              <input 
                required type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-[#c9a84c]"
                value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Case Number</label>
              <input 
                type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-[#c9a84c]"
                value={formData.caseNumber} onChange={e => setFormData({...formData, caseNumber: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input 
                type="date" className="w-full p-2 border border-gray-300 rounded focus:ring-[#c9a84c]"
                value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bench / Judge</label>
              <input 
                type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-[#c9a84c]"
                value={formData.bench} onChange={e => setFormData({...formData, bench: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Link (PDF/Web)</label>
              <input 
                type="url" className="w-full p-2 border border-gray-300 rounded focus:ring-[#c9a84c]"
                value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
            <textarea 
              rows={2} className="w-full p-2 border border-gray-300 rounded focus:ring-[#c9a84c]"
              value={formData.shortDescription} onChange={e => setFormData({...formData, shortDescription: e.target.value})}
            />
          </div>

          <div className="flex items-center gap-2">
            <input 
              type="checkbox" id="isFeatured"
              checked={formData.isFeatured}
              onChange={e => setFormData({...formData, isFeatured: e.target.checked})}
            />
            <label htmlFor="isFeatured" className="text-sm font-medium text-gray-700">Featured (Show in Important Judgments)</label>
          </div>

          <button type="submit" className="bg-[#0d1b3e] text-white px-6 py-2 rounded font-medium hover:bg-[#1a2b5e]">
            Save Judgment
          </button>
        </form>
      )}

      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : judgments.length === 0 ? (
        <div className="bg-white p-8 text-center rounded-xl border border-gray-100 text-gray-500">
          No judgments found.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="p-4 font-semibold text-gray-700">Case</th>
                <th className="p-4 font-semibold text-gray-700">Court</th>
                <th className="p-4 font-semibold text-gray-700">Featured</th>
                <th className="p-4 font-semibold text-gray-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {judgments.map((j) => (
                <tr key={j._id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <p className="font-medium text-[#0d1b3e]">{j.title}</p>
                    <p className="text-xs text-gray-500">{j.caseNumber} • {new Date(j.date).toLocaleDateString()}</p>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{j.courtId?.name}</td>
                  <td className="p-4">
                    {j.isFeatured ? (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Yes</span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">No</span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => handleDelete(j._id)} className="p-2 text-red-500 hover:bg-red-50 rounded">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

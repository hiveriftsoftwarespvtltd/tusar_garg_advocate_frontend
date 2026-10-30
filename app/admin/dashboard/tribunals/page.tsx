"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Plus, 
  Trash2, 
  Edit2, 
  RefreshCw, 
  X, 
  Check, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpDown, 
  ChevronUp, 
  ChevronDown,
  Landmark,
  ExternalLink,
  Image as ImageIcon
} from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";
import Swal from 'sweetalert2';

export default function AdminTribunals() {
  const [tribunals, setTribunals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  // DataTable State
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const [formData, setFormData] = useState({
    abbr: "",
    slug: "",
    name: "",
    tagline: "",
    established: "",
    statute: "",
    ministry: "",
    jurisdiction: "",
    website: "",
    logoUrl: "",
    description: "",
    isFeatured: true,
    benches: [] as any[],
    keyMatters: [] as string[],
    recentOrders: [] as any[]
  });

  const loadData = async () => {
    try {
      const data = await fetchApi('/tribunals');
      setTribunals(data || []);
    } catch (err) {
      console.error("Failed to load tribunals", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const resetForm = () => {
    setEditId(null);
    setShowForm(false);
    setFormData({
      abbr: "",
      slug: "",
      name: "",
      tagline: "",
      established: "",
      statute: "",
      ministry: "",
      jurisdiction: "",
      website: "",
      logoUrl: "",
      description: "",
      isFeatured: true,
      benches: [
        { name: "Principal Bench", location: "New Delhi", type: "Apex Bench" }
      ],
      keyMatters: [
        "Specialized statutory litigation and appeals",
        "Enforcement of regulatory directives and public compliance"
      ],
      recentOrders: [
        { title: "Notice & Statutory Orders", date: new Date().toISOString().split('T')[0], bench: "Principal Bench", orderNo: "Order Ref No. 101/2025" }
      ]
    });
  };

  const handleEdit = (item: any) => {
    setEditId(item._id);
    setFormData({
      abbr: item.abbr || "",
      slug: item.slug || "",
      name: item.name || "",
      tagline: item.tagline || "",
      established: item.established || "",
      statute: item.statute || "",
      ministry: item.ministry || "",
      jurisdiction: item.jurisdiction || "",
      website: item.website || "",
      logoUrl: item.logoUrl || "",
      description: item.description || "",
      isFeatured: item.isFeatured !== false,
      benches: Array.isArray(item.benches) && item.benches.length > 0 ? item.benches : [
        { name: "Principal Bench", location: "New Delhi", type: "Apex Bench" }
      ],
      keyMatters: Array.isArray(item.keyMatters) && item.keyMatters.length > 0 ? item.keyMatters : [
        "Specialized statutory litigation and appeals"
      ],
      recentOrders: Array.isArray(item.recentOrders) && item.recentOrders.length > 0 ? item.recentOrders : [
        { title: "Notice & Statutory Orders", date: new Date().toISOString().split('T')[0], bench: "Principal Bench", orderNo: "Order Ref No. 101/2025" }
      ]
    });
    setShowForm(true);
  };

  // --- BENCHES HELPERS ---
  const addBench = () => {
    setFormData(prev => ({
      ...prev,
      benches: [...(prev.benches || []), { name: "Principal Bench", location: "New Delhi", type: "Apex Bench" }]
    }));
  };

  const removeBench = (idx: number) => {
    setFormData(prev => ({
      ...prev,
      benches: prev.benches.filter((_, i) => i !== idx)
    }));
  };

  const updateBench = (idx: number, field: string, value: string) => {
    setFormData(prev => {
      const updated = [...prev.benches];
      updated[idx] = { ...updated[idx], [field]: value };
      return { ...prev, benches: updated };
    });
  };

  // --- KEY MATTERS HELPERS ---
  const addKeyMatter = () => {
    setFormData(prev => ({
      ...prev,
      keyMatters: [...(prev.keyMatters || []), "New Key Subject Jurisdiction & Statutory Remedy"]
    }));
  };

  const removeKeyMatter = (idx: number) => {
    setFormData(prev => ({
      ...prev,
      keyMatters: prev.keyMatters.filter((_, i) => i !== idx)
    }));
  };

  const updateKeyMatter = (idx: number, value: string) => {
    setFormData(prev => {
      const updated = [...prev.keyMatters];
      updated[idx] = value;
      return { ...prev, keyMatters: updated };
    });
  };

  // --- RECENT ORDERS HELPERS ---
  const addRecentOrder = () => {
    setFormData(prev => ({
      ...prev,
      recentOrders: [...(prev.recentOrders || []), { title: "Order / Notice Title", date: new Date().toISOString().split('T')[0], bench: "Principal Bench", orderNo: "Ref No. 101/2025" }]
    }));
  };

  const removeRecentOrder = (idx: number) => {
    setFormData(prev => ({
      ...prev,
      recentOrders: prev.recentOrders.filter((_, i) => i !== idx)
    }));
  };

  const updateRecentOrder = (idx: number, field: string, value: string) => {
    setFormData(prev => {
      const updated = [...prev.recentOrders];
      updated[idx] = { ...updated[idx], [field]: value };
      return { ...prev, recentOrders: updated };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, logoUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        slug: formData.slug || formData.abbr.toLowerCase()
      };

      if (editId) {
        await fetchApi(`/tribunals/${editId}`, {
          method: "PUT",
          body: JSON.stringify(payload)
        });
        Swal.fire({
          title: 'Updated!',
          text: 'Tribunal details updated successfully.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2500,
        });
      } else {
        await fetchApi('/tribunals', {
          method: "POST",
          body: JSON.stringify(payload)
        });
        Swal.fire({
          title: 'Created!',
          text: 'New Tribunal created successfully.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2500,
        });
      }
      resetForm();
      loadData();
    } catch (err: any) {
      Swal.fire({
        title: 'Error!',
        text: err.message || 'Failed to save tribunal.',
        icon: 'error',
        confirmButtonColor: '#0d1b3e',
      });
    }
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this tribunal?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#0d1b3e',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await fetchApi(`/tribunals/${id}`, { method: "DELETE" });
        Swal.fire({
          title: 'Deleted!',
          text: 'Tribunal has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2000,
        });
        loadData();
      } catch (err: any) {
        Swal.fire({
          title: 'Failed',
          text: err.message || 'Could not delete tribunal.',
          icon: 'error',
          confirmButtonColor: '#0d1b3e',
        });
      }
    }
  };

  // DataTable Filtering, Sorting & Pagination
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const filteredTribunals = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return tribunals;
    return tribunals.filter((item) => {
      return (
        item.abbr?.toLowerCase().includes(query) ||
        item.name?.toLowerCase().includes(query) ||
        item.ministry?.toLowerCase().includes(query) ||
        item.statute?.toLowerCase().includes(query)
      );
    });
  }, [tribunals, searchQuery]);

  const sortedTribunals = useMemo(() => {
    return [...filteredTribunals].sort((a, b) => {
      let valA = a[sortField] ?? "";
      let valB = b[sortField] ?? "";

      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredTribunals, sortField, sortOrder]);

  const totalItems = sortedTribunals.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedTribunals = useMemo(() => {
    return sortedTribunals.slice(startIndex, startIndex + pageSize);
  }, [sortedTribunals, startIndex, pageSize]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="w-full space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#0d1b3e] flex items-center gap-2">
            <Landmark className="text-[#c9a84c]" size={24} /> Manage Tribunals & Forums
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create, edit, search, and manage statutory tribunals, benches, and official portal links.
          </p>
        </div>
        <button 
          onClick={() => {
            if (showForm) resetForm();
            else setShowForm(true);
          }}
          className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md"
        >
          <Plus size={18} /> Add New Tribunal
        </button>
      </div>

      {/* Modal Overlay Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="bg-[#0d1b3e] text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-base font-serif font-bold text-[#c9a84c] uppercase tracking-wider flex items-center gap-2">
                <Landmark size={18} />
                {editId ? "Edit Tribunal Details" : "Add New Tribunal"}
              </h2>
              <button 
                type="button"
                onClick={resetForm}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Abbreviation (e.g. NCLT) *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="NCLT"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.abbr} 
                    onChange={e => setFormData({...formData, abbr: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">URL Slug (e.g. nclt)</label>
                  <input 
                    type="text" 
                    placeholder="nclt"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.slug} 
                    onChange={e => setFormData({...formData, slug: e.target.value.toLowerCase()})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Establishment Date</label>
                  <input 
                    type="date" 
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c] cursor-pointer"
                    value={formData.established} 
                    onChange={e => setFormData({...formData, established: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Official Tribunal Name *</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. National Company Law Tribunal"
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Tagline / Subtitle</label>
                <input 
                  type="text" 
                  placeholder="Adjudicating Authority for Corporate Insolvency..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                  value={formData.tagline} 
                  onChange={e => setFormData({...formData, tagline: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Governing Statute / Act</label>
                  <input 
                    type="text" 
                    placeholder="Companies Act, 2013 & IBC Code 2016"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.statute} 
                    onChange={e => setFormData({...formData, statute: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Nodal Ministry / Department</label>
                  <input 
                    type="text" 
                    placeholder="Ministry of Corporate Affairs"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.ministry} 
                    onChange={e => setFormData({...formData, ministry: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Primary Jurisdiction</label>
                  <input 
                    type="text" 
                    placeholder="All Corporate Entities, Corporate Debtors"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.jurisdiction} 
                    onChange={e => setFormData({...formData, jurisdiction: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Official Website Link</label>
                  <input 
                    type="text" 
                    placeholder="https://nclt.gov.in"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.website} 
                    onChange={e => setFormData({...formData, website: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Upload Logo SVG/PNG</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#0d1b3e] file:text-white hover:file:bg-[#1a2b5e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Logo URL (e.g. /home/trubinals_&_forum/nclt.svg)</label>
                <input 
                  type="text" 
                  placeholder="/home/trubinals_&_forum/nclt.svg"
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                  value={formData.logoUrl} 
                  onChange={e => setFormData({...formData, logoUrl: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Overview Description *</label>
                <textarea 
                  required
                  rows={4} 
                  placeholder="Detailed overview description of the tribunal..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                  value={formData.description} 
                  onChange={e => setFormData({...formData, description: e.target.value})}
                />
              </div>

              {/* 1. KEY SUBJECT JURISDICTION & REMEDIES */}
              <div className="bg-gray-50 p-4 rounded-xl space-y-3 border border-gray-200">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-[#0d1b3e] uppercase">
                    Key Subject Jurisdiction & Remedies ({formData.keyMatters?.length || 0})
                  </label>
                  <button
                    type="button"
                    onClick={addKeyMatter}
                    className="text-xs font-bold text-[#c9a84c] hover:underline flex items-center gap-1"
                  >
                    <Plus size={14} /> Add Remedy
                  </button>
                </div>

                {formData.keyMatters?.map((matter, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={matter}
                      onChange={(e) => updateKeyMatter(idx, e.target.value)}
                      placeholder="e.g. Corporate Insolvency Resolution Process under Section 7/9/10"
                      className="w-full p-2 border border-gray-300 rounded-lg text-xs font-medium text-black outline-none focus:border-[#c9a84c]"
                    />
                    <button
                      type="button"
                      onClick={() => removeKeyMatter(idx)}
                      className="text-red-500 hover:text-red-700 p-1"
                      title="Remove matter"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>

              {/* 2. BENCHES & TERRITORIAL DIVISIONS */}
              <div className="bg-gray-50 p-4 rounded-xl space-y-3 border border-gray-200">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-[#0d1b3e] uppercase">
                    Benches & Territorial Divisions ({formData.benches?.length || 0})
                  </label>
                  <button
                    type="button"
                    onClick={addBench}
                    className="text-xs font-bold text-[#c9a84c] hover:underline flex items-center gap-1"
                  >
                    <Plus size={14} /> Add Bench
                  </button>
                </div>

                {formData.benches?.map((bench, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
                    <div className="md:col-span-4">
                      <input
                        type="text"
                        value={bench.name}
                        onChange={(e) => updateBench(idx, "name", e.target.value)}
                        placeholder="Bench Name (e.g. Principal Bench)"
                        className="w-full p-2 border border-gray-300 rounded text-xs font-bold text-black"
                      />
                    </div>
                    <div className="md:col-span-4">
                      <input
                        type="text"
                        value={bench.location}
                        onChange={(e) => updateBench(idx, "location", e.target.value)}
                        placeholder="Location (e.g. New Delhi)"
                        className="w-full p-2 border border-gray-300 rounded text-xs text-black"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <input
                        type="text"
                        value={bench.type}
                        onChange={(e) => updateBench(idx, "type", e.target.value)}
                        placeholder="Type (e.g. Apex Bench)"
                        className="w-full p-2 border border-gray-300 rounded text-xs text-black"
                      />
                    </div>
                    <div className="md:col-span-1 text-right">
                      <button
                        type="button"
                        onClick={() => removeBench(idx)}
                        className="text-red-500 hover:text-red-700 p-1"
                        title="Remove bench"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3. LATEST PRONOUNCEMENTS & ORDERS */}
              <div className="bg-gray-50 p-4 rounded-xl space-y-3 border border-gray-200">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-[#0d1b3e] uppercase">
                    Latest Pronouncements & Orders ({formData.recentOrders?.length || 0})
                  </label>
                  <button
                    type="button"
                    onClick={addRecentOrder}
                    className="text-xs font-bold text-[#c9a84c] hover:underline flex items-center gap-1"
                  >
                    <Plus size={14} /> Add Order
                  </button>
                </div>

                {formData.recentOrders?.map((order, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-gray-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#c9a84c]">Order #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => removeRecentOrder(idx)}
                        className="text-red-500 hover:text-red-700 text-xs font-bold"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <input
                          type="text"
                          value={order.title}
                          onChange={(e) => updateRecentOrder(idx, "title", e.target.value)}
                          placeholder="Order / Judgment Title"
                          className="w-full p-2 border border-gray-300 rounded text-xs font-bold text-black"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          value={order.orderNo}
                          onChange={(e) => updateRecentOrder(idx, "orderNo", e.target.value)}
                          placeholder="Order Ref No. (e.g. CP (IB) No. 412/2024)"
                          className="w-full p-2 border border-gray-300 rounded text-xs text-black"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <input
                          type="text"
                          value={order.bench}
                          onChange={(e) => updateRecentOrder(idx, "bench", e.target.value)}
                          placeholder="Bench (e.g. Principal Bench, New Delhi)"
                          className="w-full p-2 border border-gray-300 rounded text-xs text-black"
                        />
                      </div>
                      <div>
                        <input
                          type="date"
                          value={order.date}
                          onChange={(e) => updateRecentOrder(idx, "date", e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded text-xs text-black cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input 
                  type="checkbox" 
                  id="isFeatured"
                  checked={formData.isFeatured}
                  onChange={e => setFormData({...formData, isFeatured: e.target.checked})}
                  className="w-4 h-4 accent-[#0d1b3e]"
                />
                <label htmlFor="isFeatured" className="text-sm font-bold text-[#0d1b3e]">
                  Featured Tribunal (Display in Directory Grid)
                </label>
              </div>

              {/* Modal Actions Footer */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-4">
                <button 
                  type="button" 
                  onClick={resetForm} 
                  className="px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-7 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md"
                >
                  {editId ? "Update Tribunal" : "Save Tribunal"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DataTable Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        
        {/* DataTable Controls Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          
          {/* Page Size Selector */}
          <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
            <span>Show</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-[#0d1b3e] font-bold outline-none focus:border-[#c9a84c]"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span>entries per page</span>
          </div>

          {/* Search Filter Box */}
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by abbreviation, name, statute..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-[#0d1b3e] placeholder-gray-400 outline-none focus:border-[#c9a84c] transition-all"
            />
          </div>

        </div>

        {/* Table Content */}
        {loading ? (
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="flex items-center gap-3 text-gray-500 font-medium">
              <RefreshCw className="animate-spin" size={20} /> Loading Tribunals...
            </div>
          </div>
        ) : paginatedTribunals.length === 0 ? (
          <div className="p-12 text-center text-gray-500 space-y-2">
            <p className="text-base font-bold text-[#0d1b3e]">No matching tribunals found.</p>
            <p className="text-xs text-gray-400">Try adjusting your search query or add a new tribunal.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Logo</th>
                  <th 
                    onClick={() => handleSort("abbr")}
                    className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Abbr & Tribunal Name</span>
                      {sortField === "abbr" ? (
                        sortOrder === "asc" ? <ChevronUp size={14} className="text-[#c9a84c]" /> : <ChevronDown size={14} className="text-[#c9a84c]" />
                      ) : (
                        <ArrowUpDown size={13} className="text-gray-400" />
                      )}
                    </div>
                  </th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Ministry & Statute</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Website</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedTribunals.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-4">
                      {item.logoUrl ? (
                        <div className="w-12 h-10 rounded-lg overflow-hidden border border-gray-200 shadow-sm relative flex items-center justify-center p-1 bg-white">
                          <img src={item.logoUrl} alt={item.abbr} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-12 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                          <ImageIcon size={18} />
                        </div>
                      )}
                    </td>
                    <td className="p-4 max-w-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-[#c9a84c] bg-[#0d1b3e] px-2 py-0.5 rounded text-xs">
                          {item.abbr}
                        </span>
                        <span className="font-bold text-[#0d1b3e] text-sm line-clamp-1">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-xs text-gray-600">
                      <p className="font-bold text-gray-800">{item.ministry || "Govt. of India"}</p>
                      <p className="text-gray-500 line-clamp-1">{item.statute || "Statutory Act"}</p>
                    </td>
                    <td className="p-4">
                      {item.website ? (
                        <a 
                          href={item.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#c9a84c] font-bold text-xs flex items-center gap-1 hover:underline"
                        >
                          <span>Portal</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400">N/A</span>
                      )}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button 
                        onClick={() => handleEdit(item)}
                        className="p-2 text-[#0d1b3e] hover:bg-gray-100 rounded-lg transition-colors"
                        title="Edit Tribunal"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item._id)} 
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Tribunal"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* DataTable Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100 text-sm text-gray-600 font-medium">
          <div>
            Showing <span className="font-bold text-[#0d1b3e]">{totalItems > 0 ? startIndex + 1 : 0}</span> to{" "}
            <span className="font-bold text-[#0d1b3e]">{Math.min(startIndex + pageSize, totalItems)}</span> of{" "}
            <span className="font-bold text-[#0d1b3e]">{totalItems}</span> entries
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              title="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-xs font-bold text-[#0d1b3e] px-3 py-1.5 bg-gray-100 rounded-lg">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              title="Next Page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

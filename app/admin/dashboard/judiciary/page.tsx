"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Plus, 
  Trash2, 
  Edit2, 
  GraduationCap, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpDown, 
  ChevronUp, 
  ChevronDown,
  RefreshCw,
  X,
  Check,
  ExternalLink
} from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";
import Swal from 'sweetalert2';

export default function AdminJudiciary() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  // DataTable state
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("state");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [formData, setFormData] = useState({
    title: "",
    state: "Haryana",
    slug: "haryana",
    category: "Civil Judge",
    conductingBody: "",
    notificationDate: "",
    lastDateToApply: "",
    officialLink: "",
    description: "",
    isFeatured: true
  });

  const loadData = async () => {
    try {
      const data = await fetchApi('/judiciary');
      setItems(data || []);
    } catch (err) {
      console.error("Failed to load judiciary items", err);
    } fontLoading();
  };

  const fontLoading = () => setLoading(false);

  useEffect(() => {
    loadData();
  }, []);

  const resetForm = () => {
    setEditId(null);
    setShowForm(false);
    setFormData({
      title: "",
      state: "Haryana",
      slug: "haryana",
      category: "Civil Judge",
      conductingBody: "",
      notificationDate: "",
      lastDateToApply: "",
      officialLink: "",
      description: "",
      isFeatured: true
    });
  };

  const handleEdit = (item: any) => {
    setEditId(item._id);
    setFormData({
      title: item.title || "",
      state: item.state || "Haryana",
      slug: item.slug || "haryana",
      category: item.category || "Civil Judge",
      conductingBody: item.conductingBody || "",
      notificationDate: item.notificationDate || "",
      lastDateToApply: item.lastDateToApply || "",
      officialLink: item.officialLink || "",
      description: item.description || "",
      isFeatured: item.isFeatured !== false
    });
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editId) {
        await fetchApi(`/judiciary/${editId}`, {
          method: "PUT",
          body: JSON.stringify(formData)
        });
        Swal.fire({
          title: 'Updated!',
          text: 'Judiciary notification updated successfully.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2500
        });
      } else {
        await fetchApi('/judiciary', {
          method: "POST",
          body: JSON.stringify(formData)
        });
        Swal.fire({
          title: 'Created!',
          text: 'New Judiciary notification added successfully.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2500
        });
      }
      resetForm();
      loadData();
    } catch (err: any) {
      Swal.fire({
        title: 'Error!',
        text: err.message || 'Failed to save entry.',
        icon: 'error',
        confirmButtonColor: '#0d1b3e'
      });
    }
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this notification?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#0d1b3e',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await fetchApi(`/judiciary/${id}`, { method: "DELETE" });
        Swal.fire({
          title: 'Deleted!',
          text: 'Entry has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2000
        });
        loadData();
      } catch (err: any) {
        Swal.fire({
          title: 'Failed',
          text: err.message || 'Could not delete entry.',
          icon: 'error',
          confirmButtonColor: '#0d1b3e'
        });
      }
    }
  };

  // DataTable filtering & sorting
  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return items;
    return items.filter(item => 
      item.title?.toLowerCase().includes(q) ||
      item.state?.toLowerCase().includes(q) ||
      item.category?.toLowerCase().includes(q) ||
      item.conductingBody?.toLowerCase().includes(q)
    );
  }, [items, searchQuery]);

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      let valA = a[sortField] ?? "";
      let valB = b[sortField] ?? "";
      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();
      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredItems, sortField, sortOrder]);

  const totalItems = sortedItems.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = useMemo(() => {
    return sortedItems.slice(startIndex, startIndex + pageSize);
  }, [sortedItems, startIndex, pageSize]);

  return (
    <div className="w-full space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#0d1b3e] flex items-center gap-2">
            <GraduationCap className="text-[#c9a84c]" size={24} /> Manage Judiciary Exams & Notifications
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Add, update, or remove Judicial Services recruitment notifications displayed on the Judiciary Portal.
          </p>
        </div>
        <button 
          onClick={() => {
            if (showForm) resetForm();
            else setShowForm(true);
          }}
          className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md"
        >
          <Plus size={18} /> Add New Notification
        </button>
      </div>

      {/* Modal Overlay Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8">
            <div className="bg-[#0d1b3e] text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-base font-serif font-bold text-[#c9a84c] uppercase tracking-wider flex items-center gap-2">
                <GraduationCap size={18} />
                {editId ? "Edit Judiciary Notification" : "Add New Judiciary Notification"}
              </h2>
              <button 
                type="button" 
                onClick={resetForm} 
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Notification Title *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Haryana Judicial Services Exam 2025"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">State *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Haryana, Delhi, Punjab..."
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.state}
                    onChange={e => {
                      const val = e.target.value;
                      setFormData({ 
                        ...formData, 
                        state: val,
                        slug: val.toLowerCase().replace(/\s+/g, '-') 
                      });
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Category</label>
                  <select
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Civil Judge">Civil Judge (Junior Division)</option>
                    <option value="Higher Judicial Service">Higher Judicial Service (HJS)</option>
                    <option value="APO / Prosecution">APO / Public Prosecutor</option>
                    <option value="Syllabus & Material">Syllabus & Material</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Conducting Body</label>
                  <input 
                    type="text" 
                    placeholder="e.g. HPSC / Delhi High Court"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.conductingBody}
                    onChange={e => setFormData({ ...formData, conductingBody: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Notification Date</label>
                  <input 
                    type="date" 
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.notificationDate}
                    onChange={e => setFormData({ ...formData, notificationDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Official Portal Link</label>
                  <input 
                    type="text" 
                    placeholder="https://hpsc.gov.in..."
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.officialLink}
                    onChange={e => setFormData({ ...formData, officialLink: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Last Date to Apply</label>
                  <input 
                    type="date" 
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.lastDateToApply}
                    onChange={e => setFormData({ ...formData, lastDateToApply: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Overview / Description</label>
                <textarea 
                  rows={3} 
                  placeholder="Summary of syllabus, posts, and eligibility criteria..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input 
                  type="checkbox" 
                  id="isFeatured"
                  checked={formData.isFeatured}
                  onChange={e => setFormData({ ...formData, isFeatured: e.target.checked })}
                  className="w-4 h-4 accent-[#0d1b3e]"
                />
                <label htmlFor="isFeatured" className="text-sm font-bold text-[#0d1b3e]">
                  Featured (Show on Judiciary Homepage)
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-4">
                <button 
                  type="button" 
                  onClick={resetForm} 
                  className="px-5 py-2.5 border border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-7 py-2.5 rounded-xl text-sm font-bold shadow-md"
                >
                  {editId ? "Update Entry" : "Save Entry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DataTable Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
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
            </select>
            <span>entries per page</span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by title, state, category..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-[#0d1b3e] placeholder-gray-400 outline-none focus:border-[#c9a84c]"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[250px] text-gray-500 font-medium gap-2">
            <RefreshCw className="animate-spin" size={20} /> Loading Judiciary Entries...
          </div>
        ) : paginatedItems.length === 0 ? (
          <div className="p-12 text-center text-gray-500 font-medium">
            No matching entries found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Notification Title</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">State & Body</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Category</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Date</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Official Link</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedItems.map(item => (
                  <tr key={item._id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-4 font-bold text-[#0d1b3e] text-sm">{item.title}</td>
                    <td className="p-4 text-xs font-semibold text-gray-700">
                      {item.state} <br /><span className="text-gray-400 font-normal">{item.conductingBody || "N/A"}</span>
                    </td>
                    <td className="p-4 text-xs font-bold text-[#c9a84c]">{item.category}</td>
                    <td className="p-4 text-xs text-gray-600 font-medium">{item.notificationDate || "N/A"}</td>
                    <td className="p-4">
                      {item.officialLink ? (
                        <a href={item.officialLink} target="_blank" rel="noreferrer" className="text-[#c9a84c] hover:underline text-xs font-bold flex items-center gap-1">
                          <ExternalLink size={13} /> Link
                        </a>
                      ) : <span className="text-xs text-gray-400">N/A</span>}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button onClick={() => handleEdit(item)} className="p-2 text-[#0d1b3e] hover:bg-gray-100 rounded-lg">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(item._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100 text-sm text-gray-600">
          <div>Showing <span className="font-bold text-[#0d1b3e]">{totalItems > 0 ? startIndex + 1 : 0}</span> to <span className="font-bold text-[#0d1b3e]">{Math.min(startIndex + pageSize, totalItems)}</span> of <span className="font-bold text-[#0d1b3e]">{totalItems}</span> entries</div>
          <div className="flex items-center gap-2">
            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="p-2 rounded-lg border border-gray-300 disabled:opacity-40"><ChevronLeft size={16} /></button>
            <span className="text-xs font-bold text-[#0d1b3e] px-3 py-1.5 bg-gray-100 rounded-lg">Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="p-2 rounded-lg border border-gray-300 disabled:opacity-40"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

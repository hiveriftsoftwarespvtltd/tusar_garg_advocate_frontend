"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
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
  MapPin,
  Upload,
  Eye,
  EyeOff,
  Layers,
  Sparkles
} from "lucide-react";
import { fetchApi, compressImage } from "../../../../lib/api/client";
import Swal from 'sweetalert2';

interface VisitedCourtItem {
  _id?: string;
  name: string;
  category: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
  order: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

const defaultFormData: VisitedCourtItem = {
  name: "",
  category: "",
  location: "",
  image: "",
  description: "",
  highlights: [],
  order: 0,
  isActive: true,
};

export default function AdminVisitedCourts() {
  const [items, setItems] = useState<VisitedCourtItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  // DataTable State
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("order");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Form State
  const [formData, setFormData] = useState<VisitedCourtItem>(defaultFormData);
  const [highlightInput, setHighlightInput] = useState("");

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchApi('/visited-courts');
      setItems(data || []);
    } catch (err) {
      console.error("Failed to load visited courts", err);
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
    setFormData(defaultFormData);
    setHighlightInput("");
  };

  const handleEdit = (item: VisitedCourtItem) => {
    setEditId(item._id || null);
    setFormData({
      name: item.name || "",
      category: item.category || "",
      location: item.location || "",
      image: item.image || "",
      description: item.description || "",
      highlights: item.highlights || [],
      order: item.order ?? 0,
      isActive: item.isActive !== false,
    });
    setHighlightInput("");
    setShowForm(true);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressed = await compressImage(file);
        setFormData((prev) => ({ ...prev, image: compressed }));
      } catch (err) {
        console.error("Image compression failed", err);
        Swal.fire({
          title: "Image Upload Error",
          text: "Failed to compress and upload image.",
          icon: "error",
          confirmButtonColor: "#0d1b3e",
        });
      }
    }
  };

  const addHighlight = () => {
    const trimmed = highlightInput.trim();
    if (trimmed && !formData.highlights.includes(trimmed)) {
      setFormData((prev) => ({
        ...prev,
        highlights: [...prev.highlights, trimmed],
      }));
      setHighlightInput("");
    }
  };

  const removeHighlight = (idxToRemove: number) => {
    setFormData((prev) => ({
      ...prev,
      highlights: prev.highlights.filter((_, idx) => idx !== idxToRemove),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.category.trim() || !formData.image.trim()) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter a Name, Category, and Image for the forum.",
        icon: "warning",
        confirmButtonColor: "#0d1b3e",
      });
      return;
    }

    try {
      if (editId) {
        await fetchApi(`/visited-courts/${editId}`, {
          method: "PUT",
          body: JSON.stringify(formData),
        });
        Swal.fire({
          title: "Updated!",
          text: "Judicial forum updated successfully.",
          icon: "success",
          confirmButtonColor: "#0d1b3e",
          timer: 2000,
        });
      } else {
        await fetchApi("/visited-courts", {
          method: "POST",
          body: JSON.stringify(formData),
        });
        Swal.fire({
          title: "Created!",
          text: "New judicial forum added successfully.",
          icon: "success",
          confirmButtonColor: "#0d1b3e",
          timer: 2000,
        });
      }
      resetForm();
      loadData();
    } catch (err: any) {
      Swal.fire({
        title: "Error!",
        text: err.message || "Failed to save judicial forum.",
        icon: "error",
        confirmButtonColor: "#0d1b3e",
      });
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    const result = await Swal.fire({
      title: "Delete Judicial Forum?",
      text: "This action cannot be undone and will remove it from the homepage carousel.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c9a84c",
      cancelButtonColor: "#0d1b3e",
      confirmButtonText: "Yes, delete it",
    });

    if (result.isConfirmed) {
      try {
        await fetchApi(`/visited-courts/${id}`, { method: "DELETE" });
        Swal.fire({
          title: "Deleted!",
          text: "Judicial forum deleted successfully.",
          icon: "success",
          confirmButtonColor: "#0d1b3e",
          timer: 2000,
        });
        loadData();
      } catch (err: any) {
        Swal.fire({
          title: "Error!",
          text: err.message || "Failed to delete.",
          icon: "error",
          confirmButtonColor: "#0d1b3e",
        });
      }
    }
  };

  const handleToggleActive = async (item: VisitedCourtItem) => {
    if (!item._id) return;
    try {
      await fetchApi(`/visited-courts/${item._id}`, {
        method: "PUT",
        body: JSON.stringify({ isActive: !item.isActive }),
      });
      loadData();
    } catch (err: any) {
      Swal.fire({
        title: "Error!",
        text: "Failed to toggle status.",
        icon: "error",
        confirmButtonColor: "#0d1b3e",
      });
    }
  };

  // Filter & Sort Logic
  const filteredAndSortedItems = useMemo(() => {
    return items
      .filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
          item.name?.toLowerCase().includes(query) ||
          item.category?.toLowerCase().includes(query) ||
          item.location?.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.highlights?.some((h) => h.toLowerCase().includes(query))
        );
      })
      .sort((a: any, b: any) => {
        let valA = a[sortField];
        let valB = b[sortField];

        if (typeof valA === "string") valA = valA.toLowerCase();
        if (typeof valB === "string") valB = valB.toLowerCase();

        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
  }, [items, searchQuery, sortField, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedItems.length / pageSize) || 1;
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredAndSortedItems.slice(start, start + pageSize);
  }, [filteredAndSortedItems, currentPage, pageSize]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const activeCount = items.filter((i) => i.isActive).length;

  return (
    <div className="space-y-6">
      {/* Top Banner & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#0d1b3e]/5 px-3 py-1 rounded-full mb-2">
            <Landmark size={14} className="text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-wider">
              HOMEPAGE CAROUSEL SECTION
            </span>
          </div>
          <h1 className="text-2xl font-serif font-bold text-[#0d1b3e]">
            Manage Visited Courts & Judicial Forums
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Configure the judicial bodies, tribunals, and courts displayed in the homepage carousel.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            className="p-2.5 text-gray-600 hover:text-[#0d1b3e] hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors cursor-pointer"
            title="Reload Data"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
          </button>
          <button
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
            className="inline-flex items-center gap-2 bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <Plus size={16} />
            <span>Add Judicial Forum</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Forums</p>
            <p className="text-2xl font-bold text-[#0d1b3e] mt-1">{items.length}</p>
          </div>
          <div className="w-12 h-12 bg-[#0d1b3e]/5 rounded-xl flex items-center justify-center text-[#0d1b3e]">
            <Layers size={22} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active on Homepage</p>
            <p className="text-2xl font-bold text-green-600 mt-1">{activeCount}</p>
          </div>
          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
            <Eye size={22} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Custom High Court / Tribunals</p>
            <p className="text-2xl font-bold text-[#c9a84c] mt-1">
              {items.filter(i => i.category.toLowerCase().includes("tribunal") || i.category.toLowerCase().includes("court")).length}
            </p>
          </div>
          <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-xl flex items-center justify-center text-[#c9a84c]">
            <Sparkles size={22} />
          </div>
        </div>
      </div>

      {/* Form Modal / Drawer */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0d1b3e]/5 rounded-lg text-[#0d1b3e]">
                  <Landmark size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#0d1b3e]">
                    {editId ? "Edit Judicial Forum" : "Add New Judicial Forum"}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Provide details for the court/tribunal carousel showcase.
                  </p>
                </div>
              </div>
              <button
                onClick={resetForm}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Forum Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Court / Forum Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Supreme Court of India"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-[#0d1b3e] focus:ring-1 focus:ring-[#0d1b3e]"
                />
              </div>

              {/* Category & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Category / Jurisdiction Badge *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. APEX COURT • ADVOCATE-ON-RECORD"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-[#0d1b3e] focus:ring-1 focus:ring-[#0d1b3e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tilak Marg, New Delhi"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-[#0d1b3e] focus:ring-1 focus:ring-[#0d1b3e]"
                  />
                </div>
              </div>

              {/* Image Input & File Upload */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Court Image (URL or Upload) *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="https://images.unsplash.com/..."
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="flex-1 px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-[#0d1b3e] focus:ring-1 focus:ring-[#0d1b3e]"
                  />
                  <label className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors border border-gray-200">
                    <Upload size={14} />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {formData.image && (
                  <div className="relative w-full h-40 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 mt-2">
                    <Image
                      src={formData.image}
                      alt="Preview"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: "" })}
                      className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white p-1 rounded-full text-xs"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Description *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Summary of matters, benches, and appellate practice handled before this judicial body..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-[#0d1b3e] focus:ring-1 focus:ring-[#0d1b3e]"
                />
              </div>

              {/* Practice Highlights Tags */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Practice Highlights (Chips)
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="e.g. Article 136 SLPs (Press Enter or click Add)"
                    value={highlightInput}
                    onChange={(e) => setHighlightInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addHighlight();
                      }
                    }}
                    className="flex-1 px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-[#0d1b3e]"
                  />
                  <button
                    type="button"
                    onClick={addHighlight}
                    className="px-4 py-2 bg-[#0d1b3e]/10 hover:bg-[#0d1b3e]/20 text-[#0d1b3e] rounded-lg text-xs font-bold cursor-pointer"
                  >
                    Add
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5 min-h-[32px] p-2 bg-gray-50 rounded-lg border border-gray-100">
                  {formData.highlights.length === 0 && (
                    <span className="text-xs text-gray-400 italic">No highlights added yet.</span>
                  )}
                  {formData.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 bg-white text-[#0d1b3e] border border-gray-200 px-2.5 py-1 rounded-md text-xs font-medium shadow-2xs"
                    >
                      <span>{h}</span>
                      <button
                        type="button"
                        onClick={() => removeHighlight(i)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Order and IsActive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-2 border-t border-gray-100">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Display Order
                  </label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-[#0d1b3e]"
                  />
                </div>

                <div className="flex items-center gap-3 pt-6">
                  <input
                    type="checkbox"
                    id="isActiveToggle"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="w-4 h-4 text-[#0d1b3e] rounded-sm focus:ring-[#0d1b3e]"
                  />
                  <label htmlFor="isActiveToggle" className="text-sm font-semibold text-gray-700 cursor-pointer">
                    Show in Homepage Carousel
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-2.5 border border-gray-200 hover:bg-gray-100 rounded-lg text-sm font-semibold text-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  {editId ? "Save Changes" : "Create Forum"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Table / Data View */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Search & Filter Bar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, category, location, highlight..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-[#0d1b3e]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-medium">Show:</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-200 rounded-lg text-xs py-1.5 px-2.5 focus:outline-hidden"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#0d1b3e]/5 border-b border-gray-200 text-[#0d1b3e] font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4 w-12 text-center">Image</th>
                <th 
                  onClick={() => handleSort("name")} 
                  className="py-3.5 px-4 cursor-pointer hover:bg-black/5 select-none"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Forum / Court</span>
                    {sortField === "name" ? (
                      sortOrder === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                    ) : (
                      <ArrowUpDown size={12} className="text-gray-400" />
                    )}
                  </div>
                </th>
                <th className="py-3.5 px-4">Location</th>
                <th className="py-3.5 px-4">Practice Highlights</th>
                <th 
                  onClick={() => handleSort("order")} 
                  className="py-3.5 px-4 w-20 text-center cursor-pointer hover:bg-black/5 select-none"
                >
                  <div className="flex items-center justify-center gap-1">
                    <span>Order</span>
                    {sortField === "order" ? (
                      sortOrder === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                    ) : (
                      <ArrowUpDown size={12} className="text-gray-400" />
                    )}
                  </div>
                </th>
                <th className="py-3.5 px-4 w-24 text-center">Status</th>
                <th className="py-3.5 px-4 w-24 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-500">
                    <div className="w-8 h-8 border-3 border-[#c9a84c] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                    <p className="font-semibold text-xs">Loading judicial forums...</p>
                  </td>
                </tr>
              ) : paginatedItems.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-500">
                    <Landmark size={32} className="mx-auto text-gray-300 mb-2" />
                    <p className="font-medium">No judicial forums found matching your search.</p>
                  </td>
                </tr>
              ) : (
                paginatedItems.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50/70 transition-colors">
                    {/* Thumbnail */}
                    <td className="py-3 px-4 text-center">
                      <div className="relative w-12 h-10 rounded-lg overflow-hidden border border-gray-200 mx-auto bg-gray-100">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <Landmark size={14} />
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Name & Category */}
                    <td className="py-3 px-4">
                      <div className="font-bold text-[#0d1b3e] text-sm">{item.name}</div>
                      <div className="text-[10.5px] font-semibold text-[#c9a84c] tracking-wide mt-0.5">
                        {item.category}
                      </div>
                      <p className="text-gray-500 text-[11px] line-clamp-1 mt-1 max-w-sm">
                        {item.description}
                      </p>
                    </td>

                    {/* Location */}
                    <td className="py-3 px-4 text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-[#c9a84c] flex-shrink-0" />
                        <span className="truncate max-w-[150px]">{item.location}</span>
                      </div>
                    </td>

                    {/* Highlights */}
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {(item.highlights || []).slice(0, 3).map((h, i) => (
                          <span
                            key={i}
                            className="bg-[#0d1b3e]/5 text-[#0d1b3e] border border-gray-200 px-1.5 py-0.5 rounded text-[9.5px] font-medium"
                          >
                            {h}
                          </span>
                        ))}
                        {(item.highlights || []).length > 3 && (
                          <span className="text-[9.5px] text-gray-400 font-bold self-center">
                            +{item.highlights.length - 3}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Order */}
                    <td className="py-3 px-4 text-center font-bold text-gray-700">
                      {item.order}
                    </td>

                    {/* Status with quick toggle */}
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handleToggleActive(item)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                          item.isActive
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                        title="Click to toggle status"
                      >
                        {item.isActive ? (
                          <>
                            <Eye size={11} />
                            <span>Active</span>
                          </>
                        ) : (
                          <>
                            <EyeOff size={11} />
                            <span>Hidden</span>
                          </>
                        )}
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleEdit(item)}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 size={15} />
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            Showing{" "}
            <span className="font-bold text-[#0d1b3e]">
              {filteredAndSortedItems.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}
            </span>{" "}
            to{" "}
            <span className="font-bold text-[#0d1b3e]">
              {Math.min(currentPage * pageSize, filteredAndSortedItems.length)}
            </span>{" "}
            of <span className="font-bold text-[#0d1b3e]">{filteredAndSortedItems.length}</span> entries
          </div>

          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-1.5 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="px-3 py-1 font-semibold text-[#0d1b3e]">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1.5 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

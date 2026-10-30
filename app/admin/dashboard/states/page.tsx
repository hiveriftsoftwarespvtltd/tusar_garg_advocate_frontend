"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Plus, 
  Trash2, 
  Edit2, 
  RefreshCw, 
  X, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpDown, 
  ChevronUp, 
  ChevronDown,
  MapPin,
  Upload,
  Image as ImageIcon,
  Star,
  CheckCircle2,
  Clock
} from "lucide-react";
import { fetchApi, compressImage } from "../../../../lib/api/client";
import Swal from 'sweetalert2';

type State = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  status: string;
  featured: boolean;
  code?: string;
};

export default function AdminStates() {
  const [states, setStates] = useState<State[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  // DataTable State
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [statusFilter, setStatusFilter] = useState("");
  const [featuredFilter, setFeaturedFilter] = useState("");

  const defaultFormData = {
    name: "",
    slug: "",
    code: "",
    description: "",
    image: "",
    status: "PUBLISHED",
    featured: false
  };
  
  const [formData, setFormData] = useState(defaultFormData);

  const loadStates = async (showSpinner = true) => {
    if (showSpinner) setLoading(true);
    try {
      const data = await fetchApi('/states');
      setStates(data || []);
    } catch (err: any) {
      console.error("Failed to load states", err);
    } finally {
      if (showSpinner) setLoading(false);
    }
  };

  useEffect(() => {
    loadStates(true);
  }, []);

  const resetForm = () => {
    setEditId(null);
    setShowForm(false);
    setFormData(defaultFormData);
  };

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
    try {
      if (editId) {
        await fetchApi(`/states/${editId}`, {
          method: "PUT",
          body: JSON.stringify(formData)
        });
        Swal.fire({
          title: 'Updated!',
          text: 'State details updated successfully.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2200,
        });
      } else {
        await fetchApi('/states', {
          method: "POST",
          body: JSON.stringify(formData)
        });
        Swal.fire({
          title: 'Created!',
          text: 'New State added successfully.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2200,
        });
      }
      resetForm();
      loadStates();
    } catch (err: any) {
      Swal.fire({
        title: 'Failed',
        text: err.message || 'Could not save state.',
        icon: 'error',
        confirmButtonColor: '#0d1b3e',
      });
    }
  };

  const handleEdit = (state: State) => {
    setFormData({
      name: state.name,
      slug: state.slug,
      code: state.code || "",
      description: state.description || "",
      image: state.image || "",
      status: state.status || "PUBLISHED",
      featured: state.featured || false
    });
    setEditId(state._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string, name: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you really want to delete "${name}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#0d1b3e',
      confirmButtonText: 'Yes, delete state!'
    });

    if (result.isConfirmed) {
      try {
        await fetchApi(`/states/${id}`, { method: "DELETE" });
        Swal.fire({
          title: 'Deleted!',
          text: 'State has been deleted successfully.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2000,
        });
        loadStates();
      } catch (err: any) {
        Swal.fire({
          title: 'Failed',
          text: err.message || 'Could not delete state.',
          icon: 'error',
          confirmButtonColor: '#0d1b3e',
        });
      }
    }
  };

  // DataTable Filtering
  const filteredStates = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return states.filter((state) => {
      const matchesSearch = !query || (
        state.name?.toLowerCase().includes(query) ||
        state.slug?.toLowerCase().includes(query) ||
        state.code?.toLowerCase().includes(query) ||
        state.description?.toLowerCase().includes(query)
      );

      const matchesStatus = !statusFilter || state.status === statusFilter;
      const matchesFeatured = !featuredFilter || (featuredFilter === "true" ? state.featured === true : state.featured !== true);

      return matchesSearch && matchesStatus && matchesFeatured;
    });
  }, [states, searchQuery, statusFilter, featuredFilter]);

  // DataTable Sorting
  const sortedStates = useMemo(() => {
    return [...filteredStates].sort((a, b) => {
      let valA = a[sortField as keyof State] ?? "";
      let valB = b[sortField as keyof State] ?? "";

      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredStates, sortField, sortOrder]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // DataTable Pagination
  const totalItems = sortedStates.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedStates = useMemo(() => {
    return sortedStates.slice(startIndex, startIndex + pageSize);
  }, [sortedStates, startIndex, pageSize]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="w-full space-y-6">
      
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#0d1b3e] flex items-center gap-2">
            <MapPin className="text-[#c9a84c]" size={24} /> Manage States & UTs Directory
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Add, update, and manage state names, codes, URLs, and court banner images.
          </p>
        </div>
        <button 
          onClick={() => {
            if (showForm) resetForm();
            else {
              setEditId(null);
              setFormData(defaultFormData);
              setShowForm(true);
            }
          }}
          className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md shrink-0"
        >
          <Plus size={18} /> Add New State
        </button>
      </div>

      {/* MODAL POPUP FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#0d1b3e] text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-base font-serif font-bold text-[#c9a84c] uppercase tracking-wider flex items-center gap-2">
                <MapPin size={18} />
                {editId ? "Edit State Details" : "Add New State"}
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

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">State Name *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value, slug: e.target.value.toLowerCase().trim().replace(/ /g, '-')})}
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-[#0d1b3e] outline-none focus:border-[#c9a84c]"
                    placeholder="e.g. Haryana"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">State Code *</label>
                  <input 
                    type="text" 
                    value={formData.code}
                    onChange={(e) => setFormData({...formData, code: e.target.value.toUpperCase().trim()})}
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-[#0d1b3e] outline-none focus:border-[#c9a84c]"
                    placeholder="e.g. HR, DL, MH"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">URL Slug *</label>
                  <input 
                    type="text" 
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-[#0d1b3e] outline-none focus:border-[#c9a84c]"
                    placeholder="e.g. haryana"
                    required
                  />
                </div>
              </div>

              {/* State Image Upload & URL Selection */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3">
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase flex items-center gap-2">
                  <ImageIcon size={16} className="text-[#c9a84c]" />
                  State Banner Image (Upload File from PC or Enter URL)
                </label>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  
                  {/* File Upload Option */}
                  <div className="md:col-span-6">
                    <label className="block text-xs font-semibold text-gray-600 mb-1 flex items-center gap-1">
                      <Upload size={13} className="text-[#0d1b3e]" /> Option A: Upload Image File
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
                      Option B: Direct Image URL
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
                      <div className="relative shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 border-[#c9a84c] bg-gray-100 group shadow-md flex items-center justify-center">
                        <img 
                          key={formData.image.slice(0, 30)}
                          src={formData.image} 
                          alt="State Banner Preview" 
                          className="w-full h-full object-cover" 
                        />
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, image: "" })}
                          className="absolute inset-0 bg-black/70 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold z-10"
                          title="Remove Image"
                        >
                          <X size={16} />
                          <span>Remove</span>
                        </button>
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 bg-white text-[10px] font-semibold text-center p-1">
                        <ImageIcon size={18} className="mb-1 text-gray-300" />
                        <span>No Image</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">State Description</label>
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-[#0d1b3e] outline-none focus:border-[#c9a84c]"
                  placeholder="Overview of courts and jurisdiction in this state..."
                  rows={3}
                />
              </div>
              
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <input 
                  type="checkbox" 
                  id="isFeaturedState"
                  checked={formData.featured}
                  onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  className="w-4 h-4 accent-[#0d1b3e] rounded"
                />
                <label htmlFor="isFeaturedState" className="text-sm font-bold text-gray-900 cursor-pointer select-none">
                  Mark as Featured State
                  <span className="block text-xs font-normal text-gray-500 mt-0.5">This state will be highlighted on the public directory.</span>
                </label>
              </div>

              {/* Modal Footer */}
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
                  {editId ? "Update State Details" : "Save State"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* DataTable Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        
        {/* Controls Toolbar: Page Size, Search & Status Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          
          {/* Page Size Selector */}
          <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
            <span>Show</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-[#0d1b3e] font-bold outline-none focus:border-[#c9a84c] cursor-pointer"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span>entries per page</span>
          </div>

          {/* Search Box & Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
            <div className="relative flex-1 sm:w-64 min-w-[200px]">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search state name, code, slug..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-[#0d1b3e] placeholder-gray-400 outline-none focus:border-[#c9a84c] transition-all"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:border-[#c9a84c] text-sm text-[#0d1b3e] font-medium bg-white cursor-pointer"
            >
              <option value="">All Statuses</option>
              <option value="PUBLISHED">Published</option>
              <option value="DRAFT">Draft</option>
            </select>

            <select
              value={featuredFilter}
              onChange={(e) => {
                setFeaturedFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:border-[#c9a84c] text-sm text-[#0d1b3e] font-medium bg-white cursor-pointer"
            >
              <option value="">All Featured</option>
              <option value="true">⭐ Featured</option>
              <option value="false">Normal</option>
            </select>

          </div>
        </div>

        {/* Table Content */}
        {loading ? (
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="flex items-center gap-3 text-gray-500 font-medium">
              <RefreshCw className="animate-spin text-[#c9a84c]" size={22} /> Loading States Directory...
            </div>
          </div>
        ) : paginatedStates.length === 0 ? (
          <div className="p-12 text-center text-gray-500 space-y-2">
            <p className="text-base font-bold text-[#0d1b3e]">No matching states found.</p>
            <p className="text-xs text-gray-400">Try adjusting your search query or add a new state.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] w-16">
                    Image
                  </th>
                  <th 
                    onClick={() => handleSort("name")}
                    className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] cursor-pointer hover:bg-gray-100 transition-colors select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>State & Code</span>
                      {sortField === "name" ? (
                        sortOrder === "asc" ? <ChevronUp size={14} className="text-[#c9a84c]" /> : <ChevronDown size={14} className="text-[#c9a84c]" />
                      ) : (
                        <ArrowUpDown size={13} className="text-gray-400" />
                      )}
                    </div>
                  </th>
                  <th 
                    onClick={() => handleSort("slug")}
                    className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] cursor-pointer hover:bg-gray-100 transition-colors select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>URL Slug</span>
                      {sortField === "slug" ? (
                        sortOrder === "asc" ? <ChevronUp size={14} className="text-[#c9a84c]" /> : <ChevronDown size={14} className="text-[#c9a84c]" />
                      ) : (
                        <ArrowUpDown size={13} className="text-gray-400" />
                      )}
                    </div>
                  </th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Status</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Featured</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedStates.map((state) => (
                  <tr key={state._id} className="hover:bg-gray-50/80 transition-colors">
                    
                    {/* Image Thumbnail */}
                    <td className="p-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0 flex items-center justify-center relative">
                        {state.image ? (
                          <img 
                            key={state.image.slice(0, 30)}
                            src={state.image} 
                            alt={state.name} 
                            className="w-full h-full object-cover" 
                          />
                        ) : (
                          <MapPin size={18} className="text-gray-400" />
                        )}
                      </div>
                    </td>

                    {/* Name & Code */}
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-[#0d1b3e] text-sm">{state.name}</p>
                        {state.code && (
                          <span className="px-2 py-0.5 bg-[#c9a84c]/20 text-[#0d1b3e] text-[10px] font-black rounded uppercase">
                            {state.code}
                          </span>
                        )}
                      </div>
                      {state.description && (
                        <p className="text-xs text-gray-500 line-clamp-1 mt-0.5 font-normal max-w-xs">
                          {state.description}
                        </p>
                      )}
                    </td>

                    {/* Slug */}
                    <td className="p-4">
                      <span className="text-xs font-mono text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-200">
                        /courts/{state.slug}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      {state.status === "PUBLISHED" ? (
                        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full inline-flex items-center gap-1">
                          <CheckCircle2 size={12} /> Published
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[11px] font-medium rounded-full inline-flex items-center gap-1">
                          <Clock size={12} /> Draft
                        </span>
                      )}
                    </td>

                    {/* Featured */}
                    <td className="p-4">
                      {state.featured ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-bold">
                          <Star size={12} className="fill-purple-600" /> Featured
                        </span>
                      ) : (
                        <span className="text-gray-400 text-xs font-medium">No</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="p-4 text-right space-x-2">
                      <button 
                        onClick={() => handleEdit(state)}
                        className="p-2 text-[#0d1b3e] hover:bg-gray-100 rounded-lg transition-colors"
                        title="Edit State Details"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(state._id, state.name)} 
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete State"
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

        {/* DataTable Footer Controls */}
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

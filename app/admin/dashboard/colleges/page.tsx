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
  GraduationCap,
  ExternalLink,
  MapPin,
  Building2
} from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";
import Swal from 'sweetalert2';

export default function AdminColleges() {
  const [colleges, setColleges] = useState<any[]>([]);
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
    name: "",
    location: "",
    state: "",
    city: "",
    type: "NLU",
    courses: "UG, PG, Ph.D.",
    logo: "",
    website: "",
    affiliation: "",
    isFeatured: true
  });

  const loadData = async () => {
    try {
      const data = await fetchApi('/colleges');
      setColleges(data || []);
    } catch (err) {
      console.error("Failed to load colleges", err);
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
      name: "",
      location: "",
      state: "",
      city: "",
      type: "NLU",
      courses: "UG, PG, Ph.D.",
      logo: "",
      website: "",
      affiliation: "",
      isFeatured: true
    });
  };

  const handleEdit = (item: any) => {
    setEditId(item._id);
    setFormData({
      name: item.name || "",
      location: item.location || "",
      state: item.state || "",
      city: item.city || "",
      type: item.type || "NLU",
      courses: item.courses || "UG, PG, Ph.D.",
      logo: item.logo || "",
      website: item.website || "",
      affiliation: item.affiliation || "",
      isFeatured: item.isFeatured !== false
    });
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editId) {
        await fetchApi(`/colleges/${editId}`, {
          method: "PUT",
          body: JSON.stringify(formData)
        });
        Swal.fire({
          title: 'Updated!',
          text: 'College details updated successfully.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2500,
        });
      } else {
        await fetchApi('/colleges', {
          method: "POST",
          body: JSON.stringify(formData)
        });
        Swal.fire({
          title: 'Added!',
          text: 'New Law College added successfully.',
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
        text: err.message || 'Failed to save college details.',
        icon: 'error',
        confirmButtonColor: '#0d1b3e',
      });
    }
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this law college?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#0d1b3e',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await fetchApi(`/colleges/${id}`, { method: "DELETE" });
        Swal.fire({
          title: 'Deleted!',
          text: 'Law College has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2000,
        });
        loadData();
      } catch (err: any) {
        Swal.fire({
          title: 'Failed',
          text: err.message || 'Could not delete college.',
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

  const filteredColleges = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return colleges;
    return colleges.filter((item) => {
      return (
        item.name?.toLowerCase().includes(query) ||
        item.location?.toLowerCase().includes(query) ||
        item.type?.toLowerCase().includes(query) ||
        item.courses?.toLowerCase().includes(query)
      );
    });
  }, [colleges, searchQuery]);

  const sortedColleges = useMemo(() => {
    return [...filteredColleges].sort((a, b) => {
      let valA = a[sortField] ?? "";
      let valB = b[sortField] ?? "";

      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredColleges, sortField, sortOrder]);

  const totalItems = sortedColleges.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedColleges = useMemo(() => {
    return sortedColleges.slice(startIndex, startIndex + pageSize);
  }, [sortedColleges, startIndex, pageSize]);

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
            <GraduationCap className="text-[#c9a84c]" size={24} /> Manage Law Colleges
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Add, edit, search, and manage NLUs, government law colleges, private law universities, and official portal links.
          </p>
        </div>
        <button 
          onClick={() => {
            if (showForm) resetForm();
            else setShowForm(true);
          }}
          className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md"
        >
          <Plus size={18} /> Add New College
        </button>
      </div>

      {/* Modal Overlay Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="bg-[#0d1b3e] text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-base font-serif font-bold text-[#c9a84c] uppercase tracking-wider flex items-center gap-2">
                <GraduationCap size={18} />
                {editId ? "Edit Law College Details" : "Add New Law College"}
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
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">College Full Name *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. National Law School of India University (NLSIU)"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Badge Initials (e.g. NLSIU)</label>
                  <input 
                    type="text" 
                    placeholder="NLSIU"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.logo} 
                    onChange={e => setFormData({...formData, logo: e.target.value.toUpperCase()})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">College Type *</label>
                  <select
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="NLU">NLU</option>
                    <option value="Government">Government</option>
                    <option value="Private">Private</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Courses Offered</label>
                  <input 
                    type="text" 
                    placeholder="e.g. UG, PG, Ph.D."
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.courses} 
                    onChange={e => setFormData({...formData, courses: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Affiliation / Body</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Bar Council of India / UGC"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.affiliation} 
                    onChange={e => setFormData({...formData, affiliation: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Location Label *</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Bengaluru, Karnataka"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.location} 
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Bengaluru"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.city} 
                    onChange={e => setFormData({...formData, city: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">State</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Karnataka"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.state} 
                    onChange={e => setFormData({...formData, state: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase mb-1 flex items-center gap-1">
                  <ExternalLink size={14} className="text-[#c9a84c]" /> Official College Website Link *
                </label>
                <input 
                  required
                  type="url" 
                  placeholder="https://www.nls.ac.in"
                  className="w-full p-2.5 border border-[#c9a84c] rounded-lg text-sm text-black outline-none focus:ring-2 focus:ring-[#c9a84c]"
                  value={formData.website} 
                  onChange={e => setFormData({...formData, website: e.target.value})}
                />
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
                  Featured Law College (Display in Top Colleges Directory Table)
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
                  {editId ? "Update College" : "Save College"}
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
              placeholder="Search by college name, location, type..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-[#0d1b3e] placeholder-gray-400 outline-none focus:border-[#c9a84c] transition-all"
            />
          </div>

        </div>

        {/* Table Content */}
        {loading ? (
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="flex items-center gap-3 text-gray-500 font-medium">
              <RefreshCw className="animate-spin" size={20} /> Loading Law Colleges...
            </div>
          </div>
        ) : paginatedColleges.length === 0 ? (
          <div className="p-12 text-center text-gray-500 space-y-2">
            <p className="text-base font-bold text-[#0d1b3e]">No matching law colleges found.</p>
            <p className="text-xs text-gray-400">Try adjusting your search query or add a new college.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Badge</th>
                  <th 
                    onClick={() => handleSort("name")}
                    className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>College Name</span>
                      {sortField === "name" ? (
                        sortOrder === "asc" ? <ChevronUp size={14} className="text-[#c9a84c]" /> : <ChevronDown size={14} className="text-[#c9a84c]" />
                      ) : (
                        <ArrowUpDown size={13} className="text-gray-400" />
                      )}
                    </div>
                  </th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Location</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Type</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Website</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedColleges.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-4">
                      <div className="w-10 h-10 rounded-full bg-[#0d1b3e] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        {item.logo || item.name.charAt(0)}
                      </div>
                    </td>
                    <td className="p-4 max-w-xs">
                      <p className="font-bold text-[#0d1b3e] text-sm line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-500 font-medium">{item.courses || "UG, PG"}</p>
                    </td>
                    <td className="p-4 text-xs font-bold text-gray-700">
                      {item.location}
                    </td>
                    <td className="p-4">
                      <span className="bg-[#0d1b3e]/5 text-[#c9a84c] border border-[#c9a84c]/30 text-[10.5px] font-extrabold px-2.5 py-0.5 rounded">
                        {item.type}
                      </span>
                    </td>
                    <td className="p-4">
                      {item.website ? (
                        <a 
                          href={item.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#c9a84c] font-bold text-xs flex items-center gap-1 hover:underline max-w-[150px] truncate"
                        >
                          <ExternalLink size={12} className="flex-shrink-0" />
                          <span className="truncate">{item.website}</span>
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400">N/A</span>
                      )}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button 
                        onClick={() => handleEdit(item)}
                        className="p-2 text-[#0d1b3e] hover:bg-gray-100 rounded-lg transition-colors"
                        title="Edit College"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item._id)} 
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete College"
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

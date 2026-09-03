"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Plus, 
  Trash2, 
  Edit2, 
  Scale, 
  RefreshCw, 
  X, 
  Image as ImageIcon, 
  Check, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpDown, 
  ChevronUp, 
  ChevronDown,
  BookOpen,
  Calendar,
  User,
  Clock
} from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";
import Swal from 'sweetalert2';

export default function AdminArticles() {
  const [articles, setArticles] = useState<any[]>([]);
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
    title: "",
    category: "LEGAL ANALYSIS",
    author: "Advocate Tushar Garg",
    date: "19 May 2025",
    readTime: "8 min read",
    summary: "",
    content: "",
    image: "",
    isFeatured: true
  });

  const loadData = async () => {
    try {
      const data = await fetchApi('/articles');
      setArticles(data || []);
    } catch (err) {
      console.error("Failed to load articles", err);
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
      title: "",
      category: "LEGAL ANALYSIS",
      author: "Advocate Tushar Garg",
      date: "19 May 2025",
      readTime: "8 min read",
      summary: "",
      content: "",
      image: "",
      isFeatured: true
    });
  };

  const handleEdit = (art: any) => {
    setEditId(art._id);
    setFormData({
      title: art.title || "",
      category: art.category || "LEGAL ANALYSIS",
      author: art.author || "Advocate Tushar Garg",
      date: art.date || "",
      readTime: art.readTime || "",
      summary: art.summary || "",
      content: art.content || "",
      image: art.image || "",
      isFeatured: !!art.isFeatured
    });
    setShowForm(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editId) {
        await fetchApi(`/articles/${editId}`, {
          method: "PUT",
          body: JSON.stringify(formData)
        });
        Swal.fire({
          title: 'Updated!',
          text: 'Article updated successfully.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2500,
        });
      } else {
        await fetchApi('/articles', {
          method: "POST",
          body: JSON.stringify(formData)
        });
        Swal.fire({
          title: 'Created!',
          text: 'New article created successfully.',
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
        text: err.message || 'Failed to save article.',
        icon: 'error',
        confirmButtonColor: '#0d1b3e',
      });
    }
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this article?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#0d1b3e',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await fetchApi(`/articles/${id}`, { method: "DELETE" });
        Swal.fire({
          title: 'Deleted!',
          text: 'Article has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2000,
        });
        loadData();
      } catch (err: any) {
        Swal.fire({
          title: 'Failed',
          text: err.message || 'Could not delete article.',
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

  const filteredArticles = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return articles;
    return articles.filter((art) => {
      return (
        art.title?.toLowerCase().includes(query) ||
        art.category?.toLowerCase().includes(query) ||
        art.author?.toLowerCase().includes(query) ||
        art.summary?.toLowerCase().includes(query)
      );
    });
  }, [articles, searchQuery]);

  const sortedArticles = useMemo(() => {
    return [...filteredArticles].sort((a, b) => {
      let valA = a[sortField] ?? "";
      let valB = b[sortField] ?? "";

      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredArticles, sortField, sortOrder]);

  const totalItems = sortedArticles.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedArticles = useMemo(() => {
    return sortedArticles.slice(startIndex, startIndex + pageSize);
  }, [sortedArticles, startIndex, pageSize]);

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
            <BookOpen className="text-[#c9a84c]" size={24} /> Manage Legal Articles & Research
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create, edit, search, and manage legal articles, case notes, and practice guides.
          </p>
        </div>
        <button 
          onClick={() => {
            if (showForm) resetForm();
            else setShowForm(true);
          }}
          className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md"
        >
          <Plus size={18} /> Add New Article
        </button>
      </div>

      {/* Modal Overlay Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="bg-[#0d1b3e] text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-base font-serif font-bold text-[#c9a84c] uppercase tracking-wider flex items-center gap-2">
                <BookOpen size={18} />
                {editId ? "Edit Legal Article" : "Add New Legal Article"}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Article Title *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Bail Jurisprudence in India..."
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.title} 
                    onChange={e => setFormData({...formData, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Category *</label>
                  <select 
                    required
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                  >
                    <option value="LEGAL ANALYSIS">LEGAL ANALYSIS</option>
                    <option value="CASE NOTE">CASE NOTE</option>
                    <option value="PRACTICE GUIDE">PRACTICE GUIDE</option>
                    <option value="EXPLAINER">EXPLAINER</option>
                    <option value="CONSTITUTIONAL LAW">CONSTITUTIONAL LAW</option>
                    <option value="CRIMINAL LAW">CRIMINAL LAW</option>
                    <option value="CORPORATE LAW">CORPORATE LAW</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Author Name</label>
                  <input 
                    type="text" 
                    placeholder="Advocate Tushar Garg"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.author} 
                    onChange={e => setFormData({...formData, author: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Publish Date</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 19 May 2025"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.date} 
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Read Time</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 7 min read"
                    className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                    value={formData.readTime} 
                    onChange={e => setFormData({...formData, readTime: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Upload Cover Image</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#0d1b3e] file:text-white hover:file:bg-[#1a2b5e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Cover Image URL (or Base64)</label>
                <input 
                  type="text" 
                  placeholder="https://..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                  value={formData.image} 
                  onChange={e => setFormData({...formData, image: e.target.value})}
                />
                {formData.image && (
                  <div className="mt-2 relative w-32 h-20 rounded-lg overflow-hidden border border-gray-300">
                    <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Short Summary / Executive Brief *</label>
                <textarea 
                  required
                  rows={2} 
                  placeholder="Brief summary of the article..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c]"
                  value={formData.summary} 
                  onChange={e => setFormData({...formData, summary: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Article Content Text (Markdown / Text) *</label>
                <textarea 
                  required
                  rows={8} 
                  placeholder="Full article content text..."
                  className="w-full p-2.5 border border-gray-300 rounded-lg text-sm text-black outline-none focus:border-[#c9a84c] font-sans"
                  value={formData.content} 
                  onChange={e => setFormData({...formData, content: e.target.value})}
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
                  Featured Article (Display on Homepage & Articles Page)
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
                  {editId ? "Update Article" : "Save Article"}
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
              placeholder="Search by title, category..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-[#0d1b3e] placeholder-gray-400 outline-none focus:border-[#c9a84c] transition-all"
            />
          </div>

        </div>

        {/* Table Content */}
        {loading ? (
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="flex items-center gap-3 text-gray-500 font-medium">
              <RefreshCw className="animate-spin" size={20} /> Loading Articles...
            </div>
          </div>
        ) : paginatedArticles.length === 0 ? (
          <div className="p-12 text-center text-gray-500 space-y-2">
            <p className="text-base font-bold text-[#0d1b3e]">No matching articles found.</p>
            <p className="text-xs text-gray-400">Try adjusting your search query or add a new article.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Image</th>
                  <th 
                    onClick={() => handleSort("title")}
                    className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Article Title & Category</span>
                      {sortField === "title" ? (
                        sortOrder === "asc" ? <ChevronUp size={14} className="text-[#c9a84c]" /> : <ChevronDown size={14} className="text-[#c9a84c]" />
                      ) : (
                        <ArrowUpDown size={13} className="text-gray-400" />
                      )}
                    </div>
                  </th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Author & Date</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Featured</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedArticles.map((art) => (
                  <tr key={art._id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-4">
                      {art.image ? (
                        <div className="w-14 h-10 rounded-lg overflow-hidden border border-gray-200 shadow-sm relative">
                          <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-14 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                          <ImageIcon size={18} />
                        </div>
                      )}
                    </td>
                    <td className="p-4 max-w-xs">
                      <p className="font-bold text-[#0d1b3e] text-sm line-clamp-1">{art.title}</p>
                      <span className="inline-block text-[10px] font-extrabold text-[#c9a84c] bg-[#0d1b3e] px-2 py-0.5 rounded mt-0.5">
                        {art.category || "General"}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-gray-600">
                      <p className="font-bold text-gray-800">{art.author || "Advocate Tushar Garg"}</p>
                      <p className="text-gray-500">{art.date || "N/A"} • {art.readTime || ""}</p>
                    </td>
                    <td className="p-4">
                      {art.isFeatured ? (
                        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full inline-flex items-center gap-1">
                          <Check size={12} /> Yes
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[11px] font-medium rounded-full">
                          No
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button 
                        onClick={() => handleEdit(art)}
                        className="p-2 text-[#0d1b3e] hover:bg-gray-100 rounded-lg transition-colors"
                        title="Edit Article"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(art._id)} 
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Article"
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

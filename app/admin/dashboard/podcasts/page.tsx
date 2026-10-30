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
  Radio, 
  Play, 
  ExternalLink, 
  Eye, 
  AlertCircle,
  Video,
  Clock,
  CheckCircle2,
  Sliders,
  Filter
} from "lucide-react";
import Swal from 'sweetalert2';
import { 
  Podcast, 
  PodcastStatus, 
  getAllPodcastsAdmin, 
  createPodcast, 
  updatePodcast, 
  updatePodcastStatus, 
  deletePodcast,
  parseYouTubeVideoId,
  getYouTubeThumbnail,
  getYouTubeWatchUrl
} from "../../../../lib/api/podcasts";

export default function AdminPodcastsPage() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  // Form State
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    youtubeUrl: string;
    status: PodcastStatus;
    displayOrder: number;
    featured: boolean;
  }>({
    title: "",
    description: "",
    youtubeUrl: "",
    status: "DRAFT",
    displayOrder: 0,
    featured: false,
  });

  // Preview video state
  const [previewVideoUrl, setPreviewVideoUrl] = useState<string | null>(null);

  // Derived live thumbnail & ID preview in form
  const parsedVideoId = useMemo(() => {
    return parseYouTubeVideoId(formData.youtubeUrl);
  }, [formData.youtubeUrl]);

  const liveThumbnailUrl = useMemo(() => {
    return parsedVideoId ? getYouTubeThumbnail(parsedVideoId) : null;
  }, [parsedVideoId]);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getAllPodcastsAdmin();
      setPodcasts(data);
    } catch (err) {
      console.error("Failed to load podcasts:", err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to fetch podcasts from database',
        confirmButtonColor: '#0d1b3e'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setShowModal(false);
    setFormData({
      title: "",
      description: "",
      youtubeUrl: "",
      status: "DRAFT",
      displayOrder: 0,
      featured: false,
    });
  };

  const handleOpenCreate = () => {
    resetForm();
    setShowModal(true);
  };

  const handleOpenEdit = (item: Podcast) => {
    setEditingId(item._id);
    setFormData({
      title: item.title,
      description: item.description || "",
      youtubeUrl: item.youtubeUrl,
      status: item.status,
      displayOrder: item.displayOrder || 0,
      featured: Boolean(item.featured),
    });
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Title Required',
        text: 'Please enter a podcast title',
        confirmButtonColor: '#0d1b3e'
      });
      return;
    }

    if (!formData.youtubeUrl.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'YouTube URL Required',
        text: 'Please paste a valid YouTube video link',
        confirmButtonColor: '#0d1b3e'
      });
      return;
    }

    if (!parsedVideoId) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid YouTube URL',
        text: 'Could not extract YouTube Video ID. Please ensure the link is in format: https://www.youtube.com/watch?v=..., https://youtu.be/... or https://www.youtube.com/shorts/...',
        confirmButtonColor: '#0d1b3e'
      });
      return;
    }

    setSaving(true);
    try {
      if (editingId) {
        await updatePodcast(editingId, {
          title: formData.title,
          description: formData.description,
          youtubeUrl: formData.youtubeUrl,
          status: formData.status,
          displayOrder: Number(formData.displayOrder) || 0,
          featured: formData.featured,
        });
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'Podcast episode updated successfully',
          timer: 1600,
          showConfirmButton: false
        });
      } else {
        await createPodcast({
          title: formData.title,
          description: formData.description,
          youtubeUrl: formData.youtubeUrl,
          status: formData.status,
          displayOrder: Number(formData.displayOrder) || 0,
          featured: formData.featured,
        });
        Swal.fire({
          icon: 'success',
          title: 'Created!',
          text: 'New podcast episode added successfully',
          timer: 1600,
          showConfirmButton: false
        });
      }
      resetForm();
      await loadData();
    } catch (err: any) {
      console.error("Save error:", err);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Save',
        text: err?.message || 'An unexpected error occurred while saving',
        confirmButtonColor: '#0d1b3e'
      });
    } finally {
      setSaving(false);
    }
  };

  const handleQuickStatusChange = async (podcast: Podcast, newStatus: PodcastStatus) => {
    try {
      await updatePodcastStatus(podcast._id, newStatus);
      setPodcasts(prev => prev.map(p => p._id === podcast._id ? { ...p, status: newStatus } : p));
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true
      });
      Toast.fire({
        icon: 'success',
        title: `Status set to ${newStatus}`
      });
    } catch (err: any) {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: err?.message || 'Could not update status',
        confirmButtonColor: '#0d1b3e'
      });
    }
  };

  const handleDelete = async (id: string, title: string) => {
    const res = await Swal.fire({
      title: 'Delete Podcast Episode?',
      html: `Are you sure you want to delete <strong>"${title}"</strong>?<br/><span class="text-xs text-red-500">This action cannot be undone.</span>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'Cancel'
    });

    if (res.isConfirmed) {
      try {
        await deletePodcast(id);
        setPodcasts(prev => prev.filter(p => p._id !== id));
        Swal.fire({
          icon: 'success',
          title: 'Deleted',
          text: 'Podcast deleted successfully',
          timer: 1500,
          showConfirmButton: false
        });
      } catch (err: any) {
        Swal.fire({
          icon: 'error',
          title: 'Delete Failed',
          text: err?.message || 'Could not delete podcast',
          confirmButtonColor: '#0d1b3e'
        });
      }
    }
  };

  // Stats
  const stats = useMemo(() => {
    const total = podcasts.length;
    const published = podcasts.filter(p => p.status === 'PUBLISHED').length;
    const draft = podcasts.filter(p => p.status === 'DRAFT').length;
    const unpublished = podcasts.filter(p => p.status === 'UNPUBLISHED').length;
    return { total, published, draft, unpublished };
  }, [podcasts]);

  // Filtered podcasts
  const filteredPodcasts = useMemo(() => {
    return podcasts.filter(p => {
      const matchesSearch = 
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.youtubeVideoId?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = 
        statusFilter === "ALL" || p.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [podcasts, searchQuery, statusFilter]);

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner & Header */}
      <div className="bg-[#0d1b3e] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-2 z-10">
          <div className="flex items-center gap-2 text-[#c9a84c] text-xs font-bold uppercase tracking-wider">
            <Radio size={16} className="animate-pulse" />
            <span>Digital Media & Video CMS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
            Manage Podcasts & Legal Discussions
          </h1>
          <p className="text-white/70 text-sm max-w-2xl leading-relaxed">
            Publish, edit, and curate video podcasts. Paste any YouTube URL (watch, shorts, or share link) to automatically generate thumbnails, embed players, and sync dynamically with the Homepage and <code className="bg-white/10 px-1.5 py-0.5 rounded text-white text-xs">/podcast</code> page.
          </p>
        </div>

        <div className="flex items-center gap-3 z-10 flex-shrink-0">
          <button
            onClick={loadData}
            disabled={loading}
            className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors border border-white/10 flex items-center gap-2 text-sm font-medium"
            title="Refresh list"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <button
            onClick={handleOpenCreate}
            className="px-5 py-3 bg-[#c9a84c] hover:bg-[#b5953e] text-[#0d1b3e] font-bold rounded-xl transition-colors shadow-lg shadow-[#c9a84c]/20 flex items-center gap-2 text-sm"
          >
            <Plus size={18} />
            <span>Add Podcast</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Podcasts</p>
            <p className="text-2xl sm:text-3xl font-bold text-[#0d1b3e] mt-1">{stats.total}</p>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center">
            <Video size={22} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Published</p>
            <p className="text-2xl sm:text-3xl font-bold text-emerald-700 mt-1">{stats.published}</p>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <CheckCircle2 size={22} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Drafts</p>
            <p className="text-2xl sm:text-3xl font-bold text-amber-700 mt-1">{stats.draft}</p>
          </div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <Clock size={22} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Unpublished</p>
            <p className="text-2xl sm:text-3xl font-bold text-slate-700 mt-1">{stats.unpublished}</p>
          </div>
          <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center">
            <AlertCircle size={22} />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title, description or video ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d1b3e] focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <span className="text-xs font-semibold text-gray-500 flex items-center gap-1 flex-shrink-0">
            <Filter size={14} /> Filter Status:
          </span>
          {["ALL", "PUBLISHED", "DRAFT", "UNPUBLISHED"].map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex-shrink-0 ${
                statusFilter === status 
                  ? "bg-[#0d1b3e] text-[#c9a84c] shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Table / Podcast List */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center space-y-3">
            <div className="w-10 h-10 border-4 border-[#0d1b3e] border-t-[#c9a84c] rounded-full animate-spin mx-auto" />
            <p className="text-gray-500 text-sm font-medium">Loading podcast episodes from database...</p>
          </div>
        ) : filteredPodcasts.length === 0 ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto">
              <Radio size={30} />
            </div>
            <div>
              <p className="text-lg font-serif font-bold text-[#0d1b3e]">No Podcasts Found</p>
              <p className="text-gray-500 text-sm max-w-md mx-auto mt-1">
                {searchQuery || statusFilter !== "ALL"
                  ? "No podcast episodes match your search and filter criteria."
                  : "No podcasts have been added yet. When you add and publish a podcast, it will automatically show on the Homepage and /podcast page."}
              </p>
            </div>
            <button
              onClick={handleOpenCreate}
              className="px-5 py-2.5 bg-[#0d1b3e] text-[#c9a84c] hover:bg-[#162752] text-sm font-bold rounded-xl transition-colors inline-flex items-center gap-2 shadow"
            >
              <Plus size={16} />
              <span>Add First Podcast</span>
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs uppercase font-bold tracking-wider">
                  <th className="py-3.5 px-4">Episode / Video</th>
                  <th className="py-3.5 px-4">Details</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-center">Quick Status Change</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {filteredPodcasts.map(item => (
                  <tr key={item._id} className="hover:bg-gray-50/70 transition-colors">
                    {/* Thumbnail & YouTube Link */}
                    <td className="py-4 px-4 w-48 sm:w-56 align-top">
                      <div className="relative group rounded-lg overflow-hidden border border-gray-200 bg-black aspect-video w-full max-w-[200px] shadow-sm">
                        <img
                          src={item.thumbnailUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <button
                          onClick={() => setPreviewVideoUrl(item.embedUrl)}
                          className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition-colors"
                          title="Preview video"
                        >
                          <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play size={18} fill="currentColor" className="ml-0.5" />
                          </div>
                        </button>
                      </div>
                      <div className="mt-1.5 flex items-center gap-2 text-xs text-gray-500 font-mono">
                        <span>ID: {item.youtubeVideoId}</span>
                        <a
                          href={item.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-700 flex items-center gap-0.5 font-sans"
                        >
                          <ExternalLink size={12} />
                          <span>YouTube</span>
                        </a>
                      </div>
                    </td>

                    {/* Title & Description */}
                    <td className="py-4 px-4 align-top max-w-md">
                      <h3 className="font-serif font-bold text-gray-900 text-base leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      {item.description ? (
                        <p className="text-gray-600 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      ) : (
                        <span className="text-xs text-gray-400 italic mt-1 block">No description provided</span>
                      )}
                      <div className="flex items-center gap-3 mt-2 text-[11px] text-gray-400">
                        {item.publishedAt && (
                          <span>Published: {new Date(item.publishedAt).toLocaleDateString()}</span>
                        )}
                        <span>Order: {item.displayOrder || 0}</span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-4 align-top whitespace-nowrap">
                      {item.status === 'PUBLISHED' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          PUBLISHED
                        </span>
                      )}
                      {item.status === 'DRAFT' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                          DRAFT
                        </span>
                      )}
                      {item.status === 'UNPUBLISHED' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-300">
                          <span className="w-2 h-2 rounded-full bg-slate-400" />
                          UNPUBLISHED
                        </span>
                      )}
                    </td>

                    {/* Quick Status Buttons */}
                    <td className="py-4 px-4 align-top text-center whitespace-nowrap">
                      <div className="inline-flex rounded-lg border border-gray-200 p-0.5 bg-gray-50 text-xs">
                        <button
                          onClick={() => handleQuickStatusChange(item, 'PUBLISHED')}
                          className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                            item.status === 'PUBLISHED'
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50'
                          }`}
                          title="Set to Published"
                        >
                          Publish
                        </button>
                        <button
                          onClick={() => handleQuickStatusChange(item, 'DRAFT')}
                          className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                            item.status === 'DRAFT'
                              ? 'bg-amber-500 text-white shadow-sm'
                              : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50'
                          }`}
                          title="Set to Draft"
                        >
                          Draft
                        </button>
                        <button
                          onClick={() => handleQuickStatusChange(item, 'UNPUBLISHED')}
                          className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                            item.status === 'UNPUBLISHED'
                              ? 'bg-slate-600 text-white shadow-sm'
                              : 'text-gray-600 hover:text-slate-800 hover:bg-slate-100'
                          }`}
                          title="Set to Unpublished"
                        >
                          Unpublish
                        </button>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleOpenEdit(item)}
                          className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit Podcast"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(item._id, item.title)}
                          className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Podcast"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add / Edit Podcast Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#0d1b3e] text-white p-6 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 text-[#c9a84c] flex items-center justify-center">
                  <Radio size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-serif font-bold">
                    {editingId ? "Edit Podcast Episode" : "Add New Podcast Episode"}
                  </h2>
                  <p className="text-white/60 text-xs">
                    Paste any YouTube URL and the system extracts video ID, thumbnail & embed player.
                  </p>
                </div>
              </div>
              <button
                onClick={resetForm}
                className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              
              {/* Title */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Podcast Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Supreme Court SLP Practice & Constitutional Remedies Explained"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d1b3e] focus:border-transparent outline-none font-medium text-gray-900"
                />
              </div>

              {/* YouTube Video URL */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  YouTube Video URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or https://youtu.be/...)"
                  value={formData.youtubeUrl}
                  onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d1b3e] focus:border-transparent outline-none font-mono text-gray-900"
                />
                <p className="text-[11px] text-gray-500 mt-1">
                  Supports standard watch links, youtu.be short links, shorts, and embeds.
                </p>
              </div>

              {/* Live Preview Card */}
              {formData.youtubeUrl.trim() && (
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-700">
                    <span>Live YouTube Link Inspection:</span>
                    {parsedVideoId ? (
                      <span className="text-emerald-700 flex items-center gap-1 font-mono">
                        <Check size={14} /> Video ID Detected: {parsedVideoId}
                      </span>
                    ) : (
                      <span className="text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} /> Invalid YouTube URL format
                      </span>
                    )}
                  </div>

                  {liveThumbnailUrl && (
                    <div className="flex items-center gap-4 bg-white p-2.5 rounded-lg border border-gray-200">
                      <div className="relative w-36 aspect-video rounded overflow-hidden bg-black flex-shrink-0">
                        <img src={liveThumbnailUrl} alt="Preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Play size={18} fill="white" className="text-white" />
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <p className="font-semibold text-gray-900">Auto-Generated Thumbnail</p>
                        <p className="text-[11px] text-gray-500">Thumbnail will load automatically for both homepage & podcast page.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Short Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Short Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide an overview of the topics discussed, key takeaways, and relevant legal themes..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d1b3e] focus:border-transparent outline-none text-gray-800 resize-y"
                />
              </div>

              {/* Status & Display Order */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Publishing Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as PodcastStatus })}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d1b3e] focus:border-transparent outline-none font-semibold bg-white"
                  >
                    <option value="DRAFT">DRAFT (Hidden from Public)</option>
                    <option value="PUBLISHED">PUBLISHED (Visible to Public)</option>
                    <option value="UNPUBLISHED">UNPUBLISHED (Archived/Hidden)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Display Order (Priority)
                  </label>
                  <input
                    type="number"
                    value={formData.displayOrder}
                    onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d1b3e] focus:border-transparent outline-none"
                  />
                  <p className="text-[11px] text-gray-400 mt-1">Lower numbers appear first (0, 1, 2...)</p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-gray-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving || !parsedVideoId}
                  className="px-6 py-2.5 bg-[#0d1b3e] hover:bg-[#162752] text-[#c9a84c] font-bold text-sm rounded-xl transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {saving && <RefreshCw size={16} className="animate-spin" />}
                  <span>{editingId ? "Update Episode" : "Save & Publish"}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* Video Player Modal for Quick Admin Verification */}
      {previewVideoUrl && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setPreviewVideoUrl(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={previewVideoUrl}
                title="Podcast Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

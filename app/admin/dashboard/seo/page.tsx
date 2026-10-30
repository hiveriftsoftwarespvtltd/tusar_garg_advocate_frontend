"use client";

import { useEffect, useState, useMemo } from "react";
import { 
  Search, 
  Globe, 
  Edit3, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  ExternalLink, 
  Sparkles, 
  Check, 
  RefreshCw,
  X,
  Eye,
  Sliders,
  HelpCircle,
  FileText
} from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";
import { SeoRecord } from "../../../../lib/api/seo";

export default function AdminSeoManagementPage() {
  const [pages, setPages] = useState<SeoRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingItem, setEditingItem] = useState<Partial<SeoRecord> | null>(null);
  const [keywordsText, setKeywordsText] = useState("");
  const [saving, setSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    loadSeoPages();
  }, []);

  async function loadSeoPages() {
    setLoading(true);
    try {
      const data = await fetchApi("/seo");
      if (Array.isArray(data)) {
        setPages(data);
      }
    } catch (err: any) {
      console.error("Failed to fetch SEO pages", err);
    } finally {
      setLoading(false);
    }
  }

  const filteredPages = useMemo(() => {
    return pages.filter((p) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        p.pageName?.toLowerCase().includes(q) ||
        p.route?.toLowerCase().includes(q) ||
        p.title?.toLowerCase().includes(q) ||
        p.keywords?.some((k) => k.toLowerCase().includes(q))
      );
    });
  }, [pages, searchQuery]);

  function handleOpenEdit(page: SeoRecord) {
    setEditingItem({ ...page });
    setKeywordsText((page.keywords || []).join(", "));
  }

  function handleOpenCreate() {
    setEditingItem({
      route: "/",
      pageName: "New Page",
      title: "",
      description: "",
      keywords: [],
      canonical: "https://advocateonrecordtushargarg.com",
    });
    setKeywordsText("");
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!editingItem || !editingItem.route) return;

    setSaving(true);
    try {
      const kwArray = keywordsText
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);

      const payload = {
        ...editingItem,
        keywords: kwArray,
      };

      const res = await fetchApi("/seo", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      // Update in local state
      setPages((prev) => {
        const idx = prev.findIndex((p) => p.route === res.route);
        if (idx >= 0) {
          const updated = [...prev];
          updated[idx] = res;
          return updated;
        }
        return [...prev, res];
      });

      setEditingItem(null);
      showToast(`SEO successfully updated for ${res.route}!`);
    } catch (err: any) {
      alert(`Error saving SEO: ${err.message}`);
    } finally {
      setSaving(false);
    }
  }

  function showToast(msg: string) {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  }

  // Length helper
  function getTitleColor(len: number) {
    if (len >= 50 && len <= 65) return "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (len > 65) return "text-amber-600 bg-amber-50 border-amber-200";
    return "text-gray-600 bg-gray-50 border-gray-200";
  }

  function getDescColor(len: number) {
    if (len >= 140 && len <= 165) return "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (len > 165) return "text-amber-600 bg-amber-50 border-amber-200";
    return "text-gray-600 bg-gray-50 border-gray-200";
  }

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0d1b3e] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-[#c9a84c]/40 animate-fade-in">
          <CheckCircle2 size={20} className="text-[#c9a84c]" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 text-[#c9a84c] flex items-center justify-center">
              <Globe size={22} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#0d1b3e] font-serif">SEO & Meta Tags Manager</h1>
              <p className="text-sm text-gray-500">Manage Title, Meta Description, Keywords & Canonical URLs across all pages</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadSeoPages}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-50 transition-colors shadow-sm"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
          <button
            onClick={handleOpenCreate}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0d1b3e] text-[#c9a84c] rounded-xl text-xs font-bold hover:bg-[#122452] transition-colors shadow-sm"
          >
            <Plus size={16} />
            Add Custom Page SEO
          </button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Managed Pages</p>
            <p className="text-2xl font-bold text-[#0d1b3e] mt-1">{pages.length}</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Globe size={22} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Canonical Configured</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">
              {pages.filter(p => !!p.canonical).length} / {pages.length}
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 size={22} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Keywords Indexed</p>
            <p className="text-2xl font-bold text-[#c9a84c] mt-1">
              {pages.reduce((acc, p) => acc + (p.keywords?.length || 0), 0)}
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Sparkles size={22} />
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-6 flex items-center gap-3">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by page name, route (e.g. /about), title, or keywords..."
          className="w-full text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")} className="text-xs text-gray-400 hover:text-gray-600">
            Clear
          </button>
        )}
      </div>

      {/* Table List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-16 text-center">
            <div className="w-10 h-10 border-4 border-[#c9a84c] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Loading SEO configuration...</p>
          </div>
        ) : filteredPages.length === 0 ? (
          <div className="p-16 text-center text-gray-400 text-sm">
            No pages found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#f8f9fc] border-b border-gray-100 text-gray-500 font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Page / Route</th>
                  <th className="px-6 py-4">Title Tag</th>
                  <th className="px-6 py-4">Meta Description</th>
                  <th className="px-6 py-4">Keywords</th>
                  <th className="px-6 py-4">Canonical URL</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredPages.map((page) => {
                  const titleLen = page.title?.length || 0;
                  const descLen = page.description?.length || 0;
                  return (
                    <tr key={page.route} className="hover:bg-gray-50/70 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-gray-900 text-[13px]">{page.pageName || page.route}</div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <code className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-mono font-medium">
                            {page.route}
                          </code>
                          <a
                            href={page.route}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600"
                            title="Open live page"
                          >
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      </td>

                      <td className="px-6 py-4 max-w-[280px]">
                        <p className="text-gray-800 font-medium line-clamp-2" title={page.title}>
                          {page.title || <span className="text-red-400 italic">Not set</span>}
                        </p>
                        <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded mt-1.5 border ${getTitleColor(titleLen)}`}>
                          {titleLen} chars
                        </span>
                      </td>

                      <td className="px-6 py-4 max-w-[320px]">
                        <p className="text-gray-600 line-clamp-2" title={page.description}>
                          {page.description || <span className="text-red-400 italic">Not set</span>}
                        </p>
                        <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded mt-1.5 border ${getDescColor(descLen)}`}>
                          {descLen} chars
                        </span>
                      </td>

                      <td className="px-6 py-4 max-w-[200px]">
                        <div className="flex flex-wrap gap-1">
                          {(page.keywords || []).slice(0, 3).map((kw, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[10px]">
                              {kw}
                            </span>
                          ))}
                          {(page.keywords || []).length > 3 && (
                            <span className="text-gray-400 text-[10px] font-semibold">
                              +{(page.keywords?.length || 0) - 3} more
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-4 max-w-[220px]">
                        <div className="truncate text-gray-500 text-[11px] font-mono" title={page.canonical}>
                          {page.canonical || <span className="text-gray-300">Default</span>}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleOpenEdit(page)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#c9a84c]/10 text-[#8c7128] hover:bg-[#c9a84c] hover:text-[#0d1b3e] rounded-lg font-bold text-xs transition-all shadow-sm"
                        >
                          <Edit3 size={13} />
                          Edit SEO
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit SEO Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-8 animate-scale-up">
            
            {/* Modal Header */}
            <div className="bg-[#0d1b3e] text-white p-6 flex items-center justify-between border-b border-[#c9a84c]/20">
              <div>
                <h3 className="text-lg font-bold font-serif text-[#c9a84c]">
                  Edit SEO Metadata: {editingItem.pageName || editingItem.route}
                </h3>
                <p className="text-xs text-gray-300 mt-0.5">Configure live title, meta tag, keywords & canonical URL</p>
              </div>
              <button
                onClick={() => setEditingItem(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSave} className="p-6 md:p-8 space-y-6">
              
              {/* Google SERP Live Preview */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">
                  <Eye size={14} className="text-blue-600" />
                  <span>Google Search Result Live Preview</span>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm font-sans max-w-xl">
                  {/* Breadcrumb URL */}
                  <div className="text-[12px] text-[#202124] flex items-center gap-1">
                    <span className="text-[#5f6368]">advocateonrecordtushargarg.com</span>
                    <span className="text-[#5f6368]">›</span>
                    <span className="text-[#202124] font-medium">{editingItem.route === "/" ? "" : editingItem.route?.replace(/^\//, "")}</span>
                  </div>

                  {/* Title */}
                  <div className="text-[#1a0dab] text-[18px] font-medium leading-snug hover:underline cursor-pointer line-clamp-1 mt-1">
                    {editingItem.title || "Page Title — Advocate Tushar Garg"}
                  </div>

                  {/* Description */}
                  <div className="text-[#4d5156] text-[13px] line-clamp-2 mt-1 leading-relaxed">
                    {editingItem.description || "Enter a compelling meta description to see how this page will be displayed in Google organic search results."}
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                    Page Name / Label
                  </label>
                  <input
                    type="text"
                    required
                    value={editingItem.pageName || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, pageName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] transition-all"
                    placeholder="e.g. About Us"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                    Page Route Path
                  </label>
                  <input
                    type="text"
                    required
                    value={editingItem.route || ""}
                    onChange={(e) => setEditingItem({ ...editingItem, route: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] transition-all font-mono"
                    placeholder="e.g. /about"
                  />
                </div>
              </div>

              {/* Title Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase text-gray-700">
                    Page Title Tag
                  </label>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${getTitleColor((editingItem.title || "").length)}`}>
                    {(editingItem.title || "").length} / 60 characters
                  </span>
                </div>
                <input
                  type="text"
                  required
                  value={editingItem.title || ""}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] transition-all"
                  placeholder="e.g. About Advocate Tushar Garg | Advocate-on-Record, Supreme Court of India"
                />
                <p className="text-[11px] text-gray-400 mt-1">Recommended length: 50–60 characters for best Google display.</p>
              </div>

              {/* Meta Description */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase text-gray-700">
                    Meta Description
                  </label>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${getDescColor((editingItem.description || "").length)}`}>
                    {(editingItem.description || "").length} / 160 characters
                  </span>
                </div>
                <textarea
                  rows={3}
                  required
                  value={editingItem.description || ""}
                  onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] transition-all resize-none"
                  placeholder="Detailed summary that explains the page content to searchers..."
                />
                <p className="text-[11px] text-gray-400 mt-1">Recommended length: 140–160 characters.</p>
              </div>

              {/* Meta Keywords */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                  Meta Keywords (Comma-Separated)
                </label>
                <input
                  type="text"
                  value={keywordsText}
                  onChange={(e) => setKeywordsText(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] transition-all"
                  placeholder="Supreme Court Lawyer, Advocate on Record, Special Leave Petition, etc."
                />
                <p className="text-[11px] text-gray-400 mt-1">Separate individual keywords or phrases with commas.</p>
              </div>

              {/* Canonical URL */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase text-gray-700">
                    Canonical URL Tag
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      const r = editingItem.route === "/" ? "" : editingItem.route;
                      setEditingItem({ ...editingItem, canonical: `https://advocateonrecordtushargarg.com${r}` });
                    }}
                    className="text-[11px] text-[#c9a84c] hover:underline font-semibold"
                  >
                    Auto-fill Domain URL
                  </button>
                </div>
                <input
                  type="url"
                  value={editingItem.canonical || ""}
                  onChange={(e) => setEditingItem({ ...editingItem, canonical: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] transition-all font-mono"
                  placeholder="https://advocateonrecordtushargarg.com/..."
                />
              </div>

              {/* Modal Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-5 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#0d1b3e] text-[#c9a84c] rounded-xl text-xs font-bold hover:bg-[#152a5c] transition-all shadow-md disabled:opacity-50"
                >
                  {saving ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin" />
                      Saving Changes...
                    </>
                  ) : (
                    <>
                      <Check size={14} />
                      Save & Publish SEO
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}

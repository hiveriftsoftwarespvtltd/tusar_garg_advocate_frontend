"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Plus, 
  Trash2, 
  Edit2, 
  RefreshCw, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpDown, 
  ChevronUp, 
  ChevronDown,
  Landmark,
  Building2,
  Star,
  CheckCircle2,
  Clock
} from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";
import CourtForm from "./CourtForm";
import Swal from 'sweetalert2';

export default function AdminCourts() {
  const [courts, setCourts] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCourt, setEditingCourt] = useState<any>(null);

  // DataTable State
  const [searchQuery, setSearchQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [featuredFilter, setFeaturedFilter] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const loadData = async () => {
    setLoading(true);
    try {
      const [courtsData, statesData] = await Promise.all([
        fetchApi('/courts'),
        fetchApi('/states')
      ]);
      setCourts(courtsData || []);
      setStates(statesData || []);
    } catch (err: any) {
      console.error("Failed to load courts", err);
      Swal.fire({
        title: 'Error!',
        text: err.message || 'Failed to load courts data.',
        icon: 'error',
        confirmButtonColor: '#0d1b3e',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEdit = (court: any) => {
    setEditingCourt(court);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingCourt(null);
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
      confirmButtonText: 'Yes, delete court!'
    });

    if (result.isConfirmed) {
      try {
        await fetchApi(`/courts/${id}`, { method: "DELETE" });
        Swal.fire({
          title: 'Deleted!',
          text: 'Court has been deleted successfully.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2000,
        });
        loadData();
      } catch (err: any) {
        Swal.fire({
          title: 'Failed',
          text: err.message || 'Could not delete court.',
          icon: 'error',
          confirmButtonColor: '#0d1b3e',
        });
      }
    }
  };

  // Helper to resolve state name from court object
  const getStateName = (court: any) => {
    if (court.state?.name) return court.state.name;
    if (court.stateId?.name) return court.stateId.name;
    const sId = typeof court.stateId === 'object' ? court.stateId?._id : court.stateId;
    const matchedState = states.find(s => s._id === sId);
    return matchedState?.name || "Other / Unknown";
  };

  // DataTable Filtering
  const filteredCourts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return courts.filter((court) => {
      const stateName = getStateName(court);
      const matchesSearch = !query || (
        court.name?.toLowerCase().includes(query) ||
        court.city?.toLowerCase().includes(query) ||
        court.courtType?.toLowerCase().includes(query) ||
        stateName.toLowerCase().includes(query) ||
        court.address?.toLowerCase().includes(query)
      );

      const matchesState = !stateFilter || stateName.toLowerCase() === stateFilter.toLowerCase();
      const matchesType = !typeFilter || court.courtType?.toLowerCase() === typeFilter.toLowerCase();
      const matchesFeatured = !featuredFilter || (featuredFilter === "true" ? court.featured === true : court.featured !== true);

      return matchesSearch && matchesState && matchesType && matchesFeatured;
    });
  }, [courts, states, searchQuery, stateFilter, typeFilter, featuredFilter]);

  // DataTable Sorting
  const sortedCourts = useMemo(() => {
    return [...filteredCourts].sort((a, b) => {
      let valA = a[sortField] ?? "";
      let valB = b[sortField] ?? "";

      if (sortField === "state") {
        valA = getStateName(a);
        valB = getStateName(b);
      }

      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredCourts, sortField, sortOrder, states]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // DataTable Pagination
  const totalItems = sortedCourts.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedCourts = useMemo(() => {
    return sortedCourts.slice(startIndex, startIndex + pageSize);
  }, [sortedCourts, startIndex, pageSize]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="w-full space-y-6">
      
      {/* Top Header & Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#0d1b3e] flex items-center gap-2">
            <Landmark className="text-[#c9a84c]" size={26} /> Manage Indian Courts Directory
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Add, update, search, and manage High Courts, District Courts, and Tribunals across all States.
          </p>
        </div>
        <button 
          onClick={handleCreate} 
          className="bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md shrink-0"
        >
          <Plus size={18} /> Add New Court
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <CourtForm 
          initialData={editingCourt} 
          states={states} 
          onClose={() => setShowForm(false)} 
          onSuccess={() => {
            setShowForm(false);
            loadData();
          }} 
        />
      )}

      {/* DataTable Main Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        
        {/* Controls Toolbar: Page Size & Search & Filters */}
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

          {/* Search Box & Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
            {/* Search Filter */}
            <div className="relative flex-1 sm:w-64 min-w-[200px]">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search court, city, state..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-[#0d1b3e] placeholder-gray-400 outline-none focus:border-[#c9a84c] transition-all"
              />
            </div>

            {/* State Filter */}
            <select
              value={stateFilter}
              onChange={(e) => {
                setStateFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:border-[#c9a84c] text-sm text-[#0d1b3e] font-medium bg-white cursor-pointer"
            >
              <option value="">All States ({states.length})</option>
              {states.map((s) => (
                <option key={s._id} value={s.name}>{s.name}</option>
              ))}
            </select>

            {/* Court Type Filter */}
            <select
              value={typeFilter}
              onChange={(e) => {
                setTypeFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="py-2 px-3 border border-gray-300 rounded-lg outline-none focus:border-[#c9a84c] text-sm text-[#0d1b3e] font-medium bg-white cursor-pointer"
            >
              <option value="">All Court Types</option>
              <option value="High Court">High Court</option>
              <option value="District Court">District Court</option>
              <option value="Supreme Court">Supreme Court</option>
              <option value="Tribunal">Tribunal</option>
            </select>

            {/* Featured Filter */}
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
              <RefreshCw className="animate-spin text-[#c9a84c]" size={22} /> Loading Courts Directory...
            </div>
          </div>
        ) : paginatedCourts.length === 0 ? (
          <div className="p-12 text-center text-gray-500 space-y-2">
            <p className="text-base font-bold text-[#0d1b3e]">No matching courts found.</p>
            <p className="text-xs text-gray-400">Try adjusting your filters or click "Add New Court" to create one.</p>
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
                      <span>Court Name & City</span>
                      {sortField === "name" ? (
                        sortOrder === "asc" ? <ChevronUp size={14} className="text-[#c9a84c]" /> : <ChevronDown size={14} className="text-[#c9a84c]" />
                      ) : (
                        <ArrowUpDown size={13} className="text-gray-400" />
                      )}
                    </div>
                  </th>
                  <th 
                    onClick={() => handleSort("state")}
                    className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] cursor-pointer hover:bg-gray-100 transition-colors select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>State</span>
                      {sortField === "state" ? (
                        sortOrder === "asc" ? <ChevronUp size={14} className="text-[#c9a84c]" /> : <ChevronDown size={14} className="text-[#c9a84c]" />
                      ) : (
                        <ArrowUpDown size={13} className="text-gray-400" />
                      )}
                    </div>
                  </th>
                  <th 
                    onClick={() => handleSort("courtType")}
                    className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] cursor-pointer hover:bg-gray-100 transition-colors select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Type</span>
                      {sortField === "courtType" ? (
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
                {paginatedCourts.map((court) => {
                  const stateName = getStateName(court);
                  const imgUrl = court.image || court.ogImage;
                  return (
                    <tr key={court._id} className="hover:bg-gray-50/80 transition-colors">
                      
                      {/* Image Thumbnail */}
                      <td className="p-4">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0 flex items-center justify-center relative">
                          {imgUrl ? (
                            <img 
                              key={imgUrl.slice(0, 30)}
                              src={imgUrl} 
                              alt={court.name} 
                              className="w-full h-full object-cover" 
                            />
                          ) : (
                            <Building2 size={18} className="text-gray-400" />
                          )}
                        </div>
                      </td>

                      {/* Name & Location */}
                      <td className="p-4">
                        <p className="font-bold text-[#0d1b3e] text-sm leading-snug">{court.name}</p>
                        {court.city && (
                          <p className="text-xs font-medium text-gray-500 mt-0.5">{court.city}</p>
                        )}
                      </td>

                      {/* State */}
                      <td className="p-4">
                        <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200">
                          {stateName}
                        </span>
                      </td>

                      {/* Type */}
                      <td className="p-4">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          court.courtType === "High Court"
                            ? "bg-blue-100 text-blue-800"
                            : court.courtType === "Supreme Court"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-amber-100 text-amber-900"
                        }`}>
                          {court.courtType}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="p-4">
                        {court.status === "PUBLISHED" ? (
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
                        {court.featured ? (
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
                          onClick={() => handleEdit(court)}
                          className="p-2 text-[#0d1b3e] hover:bg-gray-100 rounded-lg transition-colors"
                          title="Edit Court Details"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(court._id, court.name)} 
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Court"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>

                    </tr>
                  );
                })}
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

"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Mail, 
  Phone, 
  Trash2, 
  Eye, 
  RefreshCw, 
  X, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpDown, 
  ChevronUp, 
  ChevronDown,
  CheckCircle2,
  Clock,
  AlertCircle,
  MessageSquare,
  User
} from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";
import Swal from 'sweetalert2';

type Contact = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
};

export default function AdminContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  // DataTable State
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [statusFilter, setStatusFilter] = useState("");

  const loadContacts = async () => {
    setLoading(true);
    try {
      const data = await fetchApi('/contacts');
      setContacts(data || []);
    } catch (err: any) {
      console.error("Failed to load contacts", err);
      Swal.fire({
        title: 'Error!',
        text: err.message || 'Failed to load contact submissions.',
        icon: 'error',
        confirmButtonColor: '#0d1b3e',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      await fetchApi(`/contacts/${id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status: newStatus }),
      });
      Swal.fire({
        title: 'Status Updated!',
        text: `Inquiry marked as ${newStatus}.`,
        icon: 'success',
        confirmButtonColor: '#0d1b3e',
        timer: 1800,
      });
      if (selectedContact && selectedContact._id === id) {
        setSelectedContact({ ...selectedContact, status: newStatus });
      }
      loadContacts();
    } catch (err: any) {
      Swal.fire({
        title: 'Failed',
        text: err.message || 'Could not update status.',
        icon: 'error',
        confirmButtonColor: '#0d1b3e',
      });
    }
  };

  const handleDelete = async (id: string, name: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you really want to delete submission from "${name}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#0d1b3e',
      confirmButtonText: 'Yes, delete submission!'
    });

    if (result.isConfirmed) {
      try {
        await fetchApi(`/contacts/${id}`, { method: "DELETE" });
        Swal.fire({
          title: 'Deleted!',
          text: 'Contact submission has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0d1b3e',
          timer: 2000,
        });
        if (selectedContact?._id === id) setSelectedContact(null);
        loadContacts();
      } catch (err: any) {
        Swal.fire({
          title: 'Failed',
          text: err.message || 'Could not delete submission.',
          icon: 'error',
          confirmButtonColor: '#0d1b3e',
        });
      }
    }
  };

  // DataTable Filtering
  const filteredContacts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return contacts.filter((item) => {
      const matchesSearch = !query || (
        item.name?.toLowerCase().includes(query) ||
        item.email?.toLowerCase().includes(query) ||
        item.phone?.toLowerCase().includes(query) ||
        item.subject?.toLowerCase().includes(query) ||
        item.message?.toLowerCase().includes(query)
      );

      const matchesStatus = !statusFilter || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [contacts, searchQuery, statusFilter]);

  // DataTable Sorting
  const sortedContacts = useMemo(() => {
    return [...filteredContacts].sort((a, b) => {
      let valA = a[sortField as keyof Contact] ?? "";
      let valB = b[sortField as keyof Contact] ?? "";

      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredContacts, sortField, sortOrder]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // DataTable Pagination
  const totalItems = sortedContacts.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedContacts = useMemo(() => {
    return sortedContacts.slice(startIndex, startIndex + pageSize);
  }, [sortedContacts, startIndex, pageSize]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "CONTACTED":
        return <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-[11px] font-bold rounded-full inline-flex items-center gap-1"><Clock size={12} /> Contacted</span>;
      case "RESOLVED":
        return <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full inline-flex items-center gap-1"><CheckCircle2 size={12} /> Resolved</span>;
      case "SPAM":
        return <span className="px-2.5 py-1 bg-red-100 text-red-800 text-[11px] font-bold rounded-full inline-flex items-center gap-1"><AlertCircle size={12} /> Spam</span>;
      default:
        return <span className="px-2.5 py-1 bg-amber-100 text-amber-900 text-[11px] font-bold rounded-full inline-flex items-center gap-1"><Clock size={12} /> Pending</span>;
    }
  };

  return (
    <div className="w-full space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold font-serif text-[#0d1b3e] flex items-center gap-2">
            <MessageSquare className="text-[#c9a84c]" size={24} /> Manage Contact Inquiries & Leads
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Review client consultation requests, track inquiries status, and manage incoming messages.
          </p>
        </div>
      </div>

      {/* VIEW MESSAGE MODAL POPUP */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#0d1b3e] text-white px-6 py-4 flex items-center justify-between">
              <h2 className="text-base font-serif font-bold text-[#c9a84c] uppercase tracking-wider flex items-center gap-2">
                <User size={18} />
                Client Inquiry Details
              </h2>
              <button 
                type="button"
                onClick={() => setSelectedContact(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5">
              
              {/* Contact Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase">Client Name</label>
                  <p className="text-sm font-bold text-[#0d1b3e] mt-0.5">{selectedContact.name}</p>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase">Status</label>
                  <div className="mt-0.5">{getStatusBadge(selectedContact.status)}</div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase">Email Address</label>
                  <a href={`mailto:${selectedContact.email}`} className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-0.5">
                    <Mail size={14} /> {selectedContact.email}
                  </a>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase">Phone Number</label>
                  <a href={`tel:${selectedContact.phone}`} className="text-sm font-bold text-[#0d1b3e] hover:text-[#c9a84c] flex items-center gap-1 mt-0.5">
                    <Phone size={14} /> {selectedContact.phone}
                  </a>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase">Subject / Purpose</label>
                  <p className="text-xs font-bold text-gray-800 mt-0.5">{selectedContact.subject || "General Consultation"}</p>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase">Submitted On</label>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {new Date(selectedContact.createdAt).toLocaleString("en-IN", { dateStyle: "full", timeStyle: "short" })}
                  </p>
                </div>
              </div>

              {/* Full Message Box */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Message / Case Details</label>
                <div className="bg-white p-4 rounded-xl border border-gray-300 text-sm text-[#0d1b3e] leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
                  {selectedContact.message}
                </div>
              </div>

              {/* Quick Status Action Controls */}
              <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-600">Mark Status:</span>
                  <button 
                    onClick={() => handleUpdateStatus(selectedContact._id, "CONTACTED")}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold rounded-lg transition-colors"
                  >
                    Contacted
                  </button>
                  <button 
                    onClick={() => handleUpdateStatus(selectedContact._id, "RESOLVED")}
                    className="px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold rounded-lg transition-colors"
                  >
                    Resolved
                  </button>
                </div>

                <button 
                  onClick={() => setSelectedContact(null)}
                  className="px-5 py-2 border border-gray-300 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* DataTable Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        
        {/* Toolbar Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
          
          {/* Page Size */}
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
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            
            <div className="relative flex-1 sm:w-64 min-w-[200px]">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by name, email, phone..."
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
              <option value="PENDING">Pending</option>
              <option value="CONTACTED">Contacted</option>
              <option value="RESOLVED">Resolved</option>
              <option value="SPAM">Spam</option>
            </select>

          </div>
        </div>

        {/* Table Content */}
        {loading ? (
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="flex items-center gap-3 text-gray-500 font-medium">
              <RefreshCw className="animate-spin text-[#c9a84c]" size={22} /> Loading Inquiries...
            </div>
          </div>
        ) : paginatedContacts.length === 0 ? (
          <div className="p-12 text-center text-gray-500 space-y-2">
            <p className="text-base font-bold text-[#0d1b3e]">No contact submissions found.</p>
            <p className="text-xs text-gray-400">Submissions from website contact form will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th 
                    onClick={() => handleSort("name")}
                    className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] cursor-pointer hover:bg-gray-100 transition-colors select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Client & Contact</span>
                      {sortField === "name" ? (
                        sortOrder === "asc" ? <ChevronUp size={14} className="text-[#c9a84c]" /> : <ChevronDown size={14} className="text-[#c9a84c]" />
                      ) : (
                        <ArrowUpDown size={13} className="text-gray-400" />
                      )}
                    </div>
                  </th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Subject</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Message Snippet</th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e]">Status</th>
                  <th 
                    onClick={() => handleSort("createdAt")}
                    className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] cursor-pointer hover:bg-gray-100 transition-colors select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Date Submitted</span>
                      {sortField === "createdAt" ? (
                        sortOrder === "asc" ? <ChevronUp size={14} className="text-[#c9a84c]" /> : <ChevronDown size={14} className="text-[#c9a84c]" />
                      ) : (
                        <ArrowUpDown size={13} className="text-gray-400" />
                      )}
                    </div>
                  </th>
                  <th className="p-4 font-bold text-xs uppercase tracking-wider text-[#0d1b3e] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedContacts.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50/80 transition-colors">
                    
                    {/* Client & Contact */}
                    <td className="p-4">
                      <p className="font-bold text-[#0d1b3e] text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500 font-medium">{item.email}</p>
                      <p className="text-xs text-[#c9a84c] font-semibold mt-0.5">{item.phone}</p>
                    </td>

                    {/* Subject */}
                    <td className="p-4">
                      <span className="text-xs font-semibold text-gray-800 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200 inline-block">
                        {item.subject || "General Consultation"}
                      </span>
                    </td>

                    {/* Message Snippet */}
                    <td className="p-4 max-w-xs">
                      <p className="text-xs text-gray-600 line-clamp-2 italic">
                        "{item.message}"
                      </p>
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      {getStatusBadge(item.status)}
                    </td>

                    {/* Date Submitted */}
                    <td className="p-4">
                      <span className="text-xs text-gray-600 font-medium">
                        {new Date(item.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4 text-right space-x-2">
                      <button 
                        onClick={() => setSelectedContact(item)}
                        className="p-2 text-[#0d1b3e] hover:bg-gray-100 rounded-lg transition-colors"
                        title="View Full Inquiry Details"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item._id, item.name)} 
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Submission"
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

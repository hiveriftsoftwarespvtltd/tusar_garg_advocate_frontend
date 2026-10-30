"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Users, 
  Plus, 
  Trash2, 
  Edit3, 
  RefreshCw, 
  Search, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  ShieldAlert, 
  Key, 
  Mail, 
  User, 
  Eye, 
  EyeOff, 
  Check, 
  X, 
  SlidersHorizontal,
  Lock,
  Calendar,
  Layers,
  Scale,
  BookOpen,
  FileText
} from "lucide-react";
import { fetchApi } from "../../../../lib/api/client";
import Swal from "sweetalert2";

interface SubAdmin {
  _id: string;
  name: string;
  email: string;
  role: string;
  status: "ACTIVE" | "INACTIVE";
  permissions: string[];
  lastLogin?: string;
  createdAt: string;
}

const AVAILABLE_PERMISSIONS = [
  {
    category: "🏛️ Courts & Judicial Forums",
    items: [
      { key: "courts", label: "Manage Courts", desc: "Add, edit, delete high courts & district courts" },
      { key: "states", label: "Manage States", desc: "Manage state jurisdictions and mapping" },
      { key: "tribunals", label: "Manage Tribunals", desc: "NCLAT, DRT, SAT, and tribunal tribunals" },
      { key: "visited-courts", label: "Manage Visited Forums", desc: "Courts where chamber has appeared" },
      { key: "judgments", label: "Manage Judgments", desc: "Supreme Court judgments & case summaries" },
    ]
  },
  {
    category: "📚 Legal Content & Knowledge Base",
    items: [
      { key: "laws-categories", label: "Manage Practice Cards", desc: "Practice area legal cards on homepage" },
      { key: "practice-area-details", label: "Bare Acts & Practice Details", desc: "In-depth practice guides & full bare acts" },
      { key: "articles", label: "Manage Articles", desc: "Legal blogs, research papers & case notes" },
      { key: "resources", label: "Manage Resources", desc: "Legal maxims, legal glossary & templates" },
      { key: "judiciary", label: "Judiciary Examination", desc: "State judicial service syllabus & notes" },
      { key: "colleges", label: "Manage Law Colleges", desc: "Law colleges directory across India" },
      { key: "jobs", label: "Manage Jobs", desc: "Legal internships & law clerk opportunities" },
    ]
  },
  {
    category: "📩 Inquiries & Website Controls",
    items: [
      { key: "contacts", label: "Contact Inquiries", desc: "View & triage client consultation inquiries" },
      { key: "testimonials", label: "Client Testimonials", desc: "Client reviews and feedback quotes" },
      { key: "hero", label: "Manage Hero Section", desc: "Homepage banner text and credentials" },
      { key: "seo", label: "SEO & Meta Tags", desc: "Page titles, descriptions & canonical tags" },
    ]
  }
];

const ALL_PERMISSION_KEYS = AVAILABLE_PERMISSIONS.flatMap(cat => cat.items.map(i => i.key));

export default function SubAdminsPage() {
  const [subAdmins, setSubAdmins] = useState<SubAdmin[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [roleFilter, setRoleFilter] = useState("ALL");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<SubAdmin | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "SUB_ADMIN",
    status: "ACTIVE" as "ACTIVE" | "INACTIVE",
    permissions: [] as string[],
  });

  const loadSubAdmins = async () => {
    setLoading(true);
    try {
      const data = await fetchApi("/admin/subadmins");
      setSubAdmins(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error("Failed to load sub-admins:", err);
      Swal.fire({
        title: "Error Loading Sub-Admins",
        text: err.message || "Could not fetch sub-admins list.",
        icon: "error",
        confirmButtonColor: "#0d1b3e",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubAdmins();
  }, []);

  const openCreateModal = () => {
    setEditingAdmin(null);
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "SUB_ADMIN",
      status: "ACTIVE",
      permissions: ["courts", "judgments", "articles"], // default starter set
    });
    setShowPassword(false);
    setIsModalOpen(true);
  };

  const openEditModal = (admin: SubAdmin) => {
    setEditingAdmin(admin);
    setFormData({
      name: admin.name,
      email: admin.email,
      password: "", // empty means keep existing
      role: admin.role || "SUB_ADMIN",
      status: admin.status || "ACTIVE",
      permissions: admin.permissions || [],
    });
    setShowPassword(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingAdmin(null);
  };

  // Toggle single permission
  const togglePermission = (key: string) => {
    setFormData(prev => {
      const exists = prev.permissions.includes(key);
      if (exists) {
        return { ...prev, permissions: prev.permissions.filter(k => k !== key) };
      } else {
        return { ...prev, permissions: [...prev.permissions, key] };
      }
    });
  };

  // Select all permissions
  const selectAllPermissions = () => {
    setFormData(prev => ({ ...prev, permissions: [...ALL_PERMISSION_KEYS] }));
  };

  // Clear all permissions
  const clearAllPermissions = () => {
    setFormData(prev => ({ ...prev, permissions: [] }));
  };

  // Submit create or edit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      Swal.fire("Validation Error", "Please provide both Name and Email.", "warning");
      return;
    }

    if (!editingAdmin && !formData.password.trim()) {
      Swal.fire("Password Required", "Please enter a password for the new sub-admin.", "warning");
      return;
    }

    setSubmitting(true);
    try {
      const payload: any = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        role: formData.role,
        status: formData.status,
        permissions: formData.permissions,
      };

      if (formData.password && formData.password.trim().length > 0) {
        payload.password = formData.password.trim();
      }

      if (editingAdmin) {
        await fetchApi(`/admin/subadmins/${editingAdmin._id}`, {
          method: "PUT",
          body: JSON.stringify(payload),
        });
        Swal.fire({
          title: "Sub-Admin Updated",
          text: `Permissions & details for ${formData.name} updated successfully.`,
          icon: "success",
          confirmButtonColor: "#0d1b3e",
          timer: 3000,
        });
      } else {
        await fetchApi("/admin/subadmins", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        Swal.fire({
          title: "Sub-Admin Created",
          text: `New sub-admin ${formData.name} created successfully with assigned permissions.`,
          icon: "success",
          confirmButtonColor: "#0d1b3e",
          timer: 3000,
        });
      }

      closeModal();
      loadSubAdmins();
    } catch (err: any) {
      console.error("Save error:", err);
      Swal.fire({
        title: "Operation Failed",
        text: err.message || "Could not save sub-admin.",
        icon: "error",
        confirmButtonColor: "#0d1b3e",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Toggle status
  const handleToggleStatus = async (admin: SubAdmin) => {
    const nextStatus = admin.status === "ACTIVE" ? "deactivate" : "activate";
    const res = await Swal.fire({
      title: `${nextStatus.toUpperCase()} Sub-Admin?`,
      text: `Are you sure you want to ${nextStatus} ${admin.name}'s dashboard access?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0d1b3e",
      cancelButtonColor: "#6b7280",
      confirmButtonText: `Yes, ${nextStatus}`,
    });

    if (res.isConfirmed) {
      try {
        await fetchApi(`/admin/subadmins/${admin._id}/toggle-status`, {
          method: "PATCH",
        });
        loadSubAdmins();
      } catch (err: any) {
        Swal.fire("Error", err.message || "Failed to update status", "error");
      }
    }
  };

  // Delete Sub-Admin
  const handleDelete = async (admin: SubAdmin) => {
    const res = await Swal.fire({
      title: "Delete Sub-Admin Account?",
      text: `Are you sure you want to permanently delete ${admin.name} (${admin.email})? This action cannot be undone.`,
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Delete Account",
    });

    if (res.isConfirmed) {
      try {
        await fetchApi(`/admin/subadmins/${admin._id}`, {
          method: "DELETE",
        });
        Swal.fire({
          title: "Deleted!",
          text: "Sub-admin account removed successfully.",
          icon: "success",
          confirmButtonColor: "#0d1b3e",
          timer: 2500,
        });
        loadSubAdmins();
      } catch (err: any) {
        Swal.fire("Error", err.message || "Failed to delete sub-admin", "error");
      }
    }
  };

  // Filtered Sub-Admins list
  const filteredAdmins = useMemo(() => {
    return subAdmins.filter(admin => {
      const matchesSearch = 
        admin.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        admin.email?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === "ALL" || admin.status === statusFilter;
      const matchesRole = roleFilter === "ALL" || admin.role === roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [subAdmins, searchQuery, statusFilter, roleFilter]);

  // Quick Metrics
  const activeCount = subAdmins.filter(a => a.status === "ACTIVE").length;
  const inactiveCount = subAdmins.filter(a => a.status === "INACTIVE").length;

  return (
    <div className="space-y-6">
      
      {/* Top Header Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdfaf3] border border-[#c9a84c]/40 text-[#c9a84c] text-[11px] font-bold uppercase tracking-wider mb-2">
            <ShieldCheck size={13} />
            <span>Access Control & Team Roles</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0d1b3e] font-serif tracking-tight">
            Manage Sub-Admins & Permissions
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create team accounts, assign limited module permissions, and control dashboard feature access.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadSubAdmins}
            className="p-2.5 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
            title="Refresh list"
          >
            <RefreshCw size={17} className={loading ? "animate-spin text-[#c9a84c]" : ""} />
          </button>

          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0d1b3e] to-[#1a336e] hover:from-[#152a5c] hover:to-[#22448a] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#c9a84c]/30"
          >
            <Plus size={16} className="text-[#c9a84c]" />
            <span>Create Sub-Admin</span>
          </button>
        </div>
      </div>

      {/* Metric Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Sub-Admins</p>
            <p className="text-2xl font-bold text-[#0d1b3e] mt-1">{subAdmins.length}</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#0d1b3e]/5 text-[#0d1b3e] flex items-center justify-center font-bold">
            <Users size={22} />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Active Accounts</p>
            <p className="text-2xl font-bold text-emerald-700 mt-1">{activeCount}</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 size={22} />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Inactive / Suspended</p>
            <p className="text-2xl font-bold text-amber-700 mt-1">{inactiveCount}</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <XCircle size={22} />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">Available Modules</p>
            <p className="text-2xl font-bold text-[#0d1b3e] mt-1">{ALL_PERMISSION_KEYS.length}</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 text-[#c9a84c] flex items-center justify-center font-bold">
            <Layers size={22} />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search sub-admin by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs outline-none focus:border-[#c9a84c] focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 outline-none focus:border-[#c9a84c] cursor-pointer"
          >
            <option value="ALL">All Statuses</option>
            <option value="ACTIVE">Active Only</option>
            <option value="INACTIVE">Inactive Only</option>
          </select>

          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 outline-none focus:border-[#c9a84c] cursor-pointer"
          >
            <option value="ALL">All Roles</option>
            <option value="SUB_ADMIN">Sub-Admin</option>
            <option value="LEGAL_EDITOR">Legal Editor</option>
            <option value="COURT_MODERATOR">Court Moderator</option>
            <option value="RESEARCHER">Researcher</option>
          </select>
        </div>
      </div>

      {/* Sub-Admins Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0d1b3e] text-white uppercase text-[10px] tracking-wider font-semibold">
              <tr>
                <th className="py-3.5 px-4">User Details</th>
                <th className="py-3.5 px-4">Role</th>
                <th className="py-3.5 px-4">Module Permissions</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4">Last Login</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-gray-500">
                    <RefreshCw size={24} className="animate-spin text-[#c9a84c] mx-auto mb-2" />
                    <span>Loading sub-admins list...</span>
                  </td>
                </tr>
              ) : filteredAdmins.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-gray-500">
                    <Users size={32} className="text-gray-300 mx-auto mb-2" />
                    <p className="font-semibold text-gray-700">No Sub-Admins Found</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {searchQuery ? "Try refining your search filters." : "Create your first sub-admin using the button above."}
                    </p>
                  </td>
                </tr>
              ) : (
                filteredAdmins.map((admin) => {
                  const permList = admin.permissions || [];
                  const isAll = permList.includes("ALL") || permList.includes("*");

                  return (
                    <tr key={admin._id} className="hover:bg-gray-50/80 transition-colors group">
                      
                      {/* Name & Email */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                            {admin.name?.charAt(0).toUpperCase() || "U"}
                          </div>
                          <div>
                            <p className="font-bold text-[#0d1b3e] text-xs leading-snug">{admin.name}</p>
                            <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                              <Mail size={11} className="text-gray-400" />
                              <span>{admin.email}</span>
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Role Badge */}
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#0d1b3e]/5 text-[#0d1b3e] border border-[#0d1b3e]/10">
                          {admin.role || "SUB_ADMIN"}
                        </span>
                      </td>

                      {/* Permissions Tags */}
                      <td className="py-3.5 px-4 max-w-xs">
                        {isAll ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#c9a84c]/15 text-[#916b1e] border border-[#c9a84c]/30">
                            ⭐ Full Access (All Modules)
                          </span>
                        ) : permList.length === 0 ? (
                          <span className="text-gray-400 italic text-[11px]">No access assigned</span>
                        ) : (
                          <div className="flex flex-wrap gap-1 items-center">
                            {permList.slice(0, 3).map((perm, idx) => (
                              <span 
                                key={idx} 
                                className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200"
                              >
                                {perm}
                              </span>
                            ))}
                            {permList.length > 3 && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600 border border-gray-200">
                                +{permList.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </td>

                      {/* Status Toggle Button */}
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => handleToggleStatus(admin)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            admin.status === "ACTIVE"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                              : "bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200"
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${admin.status === "ACTIVE" ? "bg-emerald-500" : "bg-gray-400"}`} />
                          <span>{admin.status}</span>
                        </button>
                      </td>

                      {/* Last Login */}
                      <td className="py-3.5 px-4 text-gray-500 text-[11px]">
                        {admin.lastLogin ? (
                          new Date(admin.lastLogin).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        ) : (
                          <span className="text-gray-400 italic">Never logged in</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => openEditModal(admin)}
                            className="p-1.5 rounded-lg border border-gray-200 hover:bg-[#0d1b3e] hover:text-white text-gray-600 transition-colors cursor-pointer"
                            title="Edit permissions & details"
                          >
                            <Edit3 size={14} />
                          </button>
                          <button
                            onClick={() => handleDelete(admin)}
                            className="p-1.5 rounded-lg border border-red-200 hover:bg-red-600 hover:text-white text-red-600 transition-colors cursor-pointer"
                            title="Delete sub-admin"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>

                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Dialog: Create / Edit Sub-Admin */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-[#0d1b3e] text-white flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#c9a84c]">
                  <Key size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">
                    {editingAdmin ? "Edit Sub-Admin & Permissions" : "Create New Sub-Admin Account"}
                  </h3>
                  <p className="text-xs text-white/70 mt-0.5">
                    {editingAdmin ? "Update credentials and control module permissions" : "Configure sub-admin credentials and assign accessible dashboard tabs"}
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form Scrollable Body */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 text-xs">
              
              {/* Account Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0d1b3e] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g., Anjali Mehra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs outline-none focus:border-[#c9a84c] focus:bg-white transition-all font-medium text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0d1b3e] mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="e.g., anjali.mehra@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs outline-none focus:border-[#c9a84c] focus:bg-white transition-all font-medium text-gray-900"
                    />
                  </div>
                </div>
              </div>

              {/* Password & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0d1b3e] mb-1.5">
                    Password {editingAdmin ? <span className="text-gray-400 font-normal">(Leave blank to keep unchanged)</span> : <span className="text-red-500">*</span>}
                  </label>
                  <div className="relative">
                    <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder={editingAdmin ? "••••••••••••" : "Minimum 6 characters"}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-9 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs outline-none focus:border-[#c9a84c] focus:bg-white transition-all font-medium text-gray-900"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0d1b3e] mb-1.5">
                    Role / Designation
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs outline-none focus:border-[#c9a84c] focus:bg-white font-medium text-gray-800 cursor-pointer"
                  >
                    <option value="SUB_ADMIN">Sub-Admin (Standard)</option>
                    <option value="LEGAL_EDITOR">Legal Content Editor</option>
                    <option value="COURT_MODERATOR">Court Data Moderator</option>
                    <option value="RESEARCHER">Legal Research Scholar</option>
                    <option value="INQUIRY_OFFICER">Inquiry & Consultation Manager</option>
                  </select>
                </div>
              </div>

              {/* Status Radio */}
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#0d1b3e] text-xs">Account Status</p>
                  <p className="text-[11px] text-gray-500">Allow this sub-admin to log in to the dashboard</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, status: "ACTIVE" })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      formData.status === "ACTIVE"
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                    Active
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, status: "INACTIVE" })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      formData.status === "INACTIVE"
                        ? "bg-red-600 text-white shadow-sm"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                    Inactive
                  </button>
                </div>
              </div>

              {/* Permissions Section */}
              <div className="pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-gray-200">
                  <div>
                    <h4 className="font-bold text-[#0d1b3e] text-xs uppercase tracking-wider">
                      Granular Dashboard Permissions ({formData.permissions.length} selected)
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Check each module this sub-admin is authorized to view and manage in the sidebar.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={selectAllPermissions}
                      className="px-2.5 py-1 text-[11px] font-bold text-[#0d1b3e] bg-gray-100 hover:bg-gray-200 rounded-md transition-colors cursor-pointer"
                    >
                      Select All
                    </button>
                    <button
                      type="button"
                      onClick={clearAllPermissions}
                      className="px-2.5 py-1 text-[11px] font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors cursor-pointer"
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                {/* Categorized Permissions Grid */}
                <div className="space-y-4">
                  {AVAILABLE_PERMISSIONS.map((cat, catIdx) => (
                    <div key={catIdx} className="bg-gray-50/70 rounded-xl p-3.5 border border-gray-200">
                      <p className="font-bold text-[#0d1b3e] text-xs mb-2.5">{cat.category}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.items.map((item) => {
                          const isChecked = formData.permissions.includes(item.key);
                          return (
                            <label
                              key={item.key}
                              className={`flex items-start gap-2.5 p-2 rounded-lg border cursor-pointer transition-all ${
                                isChecked
                                  ? "bg-white border-[#c9a84c] shadow-xs"
                                  : "bg-white/60 border-gray-200 hover:bg-white"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => togglePermission(item.key)}
                                className="mt-0.5 rounded text-[#c9a84c] focus:ring-[#c9a84c] cursor-pointer"
                              />
                              <div className="min-w-0">
                                <p className={`text-[11.5px] font-bold ${isChecked ? "text-[#0d1b3e]" : "text-gray-700"}`}>
                                  {item.label}
                                </p>
                                <p className="text-[10px] text-gray-500 leading-tight">
                                  {item.desc}
                                </p>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit / Cancel Buttons */}
              <div className="pt-4 border-t border-gray-200 flex items-center justify-end gap-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-100 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0d1b3e] hover:bg-[#1a336e] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer border border-[#c9a84c]/30"
                >
                  {submitting ? (
                    <>
                      <RefreshCw size={14} className="animate-spin text-[#c9a84c]" />
                      <span>Saving Sub-Admin...</span>
                    </>
                  ) : (
                    <>
                      <Check size={14} className="text-[#c9a84c]" />
                      <span>{editingAdmin ? "Update Sub-Admin" : "Create Sub-Admin"}</span>
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

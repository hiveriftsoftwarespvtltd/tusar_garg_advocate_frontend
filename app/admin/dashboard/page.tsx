"use client";

import { useEffect, useState } from "react";
import { 
  Mail, 
  Scale, 
  BookOpen, 
  Gavel, 
  FileText, 
  Landmark, 
  Map, 
  Briefcase, 
  GraduationCap, 
  Plus, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  RefreshCw, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  Activity,
  ChevronRight,
  UserCheck
} from "lucide-react";
import Link from "next/link";
import { fetchApi } from "../../../lib/api/client";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    contacts: 0,
    pendingContacts: 0,
    lawsCategories: 0,
    judgments: 0,
    articles: 0,
    courts: 0,
    states: 0,
    tribunals: 0,
    jobs: 0,
  });

  const [recentContacts, setRecentContacts] = useState<any[]>([]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [
        contactsRes,
        lawsRes,
        judgmentsRes,
        articlesRes,
        courtsRes,
        statesRes,
        tribunalsRes,
        jobsRes
      ] = await Promise.allSettled([
        fetchApi('/contacts'),
        fetchApi('/laws-categories'),
        fetchApi('/judgments'),
        fetchApi('/articles'),
        fetchApi('/courts'),
        fetchApi('/states'),
        fetchApi('/tribunals'),
        fetchApi('/jobs'),
      ]);

      const contacts = contactsRes.status === "fulfilled" && Array.isArray(contactsRes.value) ? contactsRes.value : [];
      const laws = lawsRes.status === "fulfilled" && Array.isArray(lawsRes.value) ? lawsRes.value : [];
      const judgments = judgmentsRes.status === "fulfilled" && Array.isArray(judgmentsRes.value) ? judgmentsRes.value : [];
      const articles = articlesRes.status === "fulfilled" && Array.isArray(articlesRes.value) ? articlesRes.value : [];
      const courts = courtsRes.status === "fulfilled" && Array.isArray(courtsRes.value) ? courtsRes.value : [];
      const states = statesRes.status === "fulfilled" && Array.isArray(statesRes.value) ? statesRes.value : [];
      const tribunals = tribunalsRes.status === "fulfilled" && Array.isArray(tribunalsRes.value) ? tribunalsRes.value : [];
      const jobs = jobsRes.status === "fulfilled" && Array.isArray(jobsRes.value) ? jobsRes.value : [];

      const pendingCount = contacts.filter((c: any) => c.status === "PENDING" || !c.status).length;

      setStats({
        contacts: contacts.length,
        pendingContacts: pendingCount,
        lawsCategories: laws.length,
        judgments: judgments.length,
        articles: articles.length,
        courts: courts.length,
        states: states.length,
        tribunals: tribunals.length,
        jobs: jobs.length,
      });

      setRecentContacts(contacts.slice(0, 5));
    } catch (err) {
      console.error("Failed to load dashboard statistics", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const statCards = [
    {
      title: "Contact Inquiries",
      value: stats.contacts,
      badge: stats.pendingContacts > 0 ? `${stats.pendingContacts} Pending` : "All Responded",
      badgeColor: stats.pendingContacts > 0 ? "bg-[#c9a84c]/20 text-[#c9a84c]" : "bg-emerald-100 text-emerald-800",
      icon: Mail,
      color: "bg-blue-600",
      link: "/admin/dashboard/contacts",
      subtitle: "Client consultation leads"
    },
    {
      title: "Practice Areas & Cards",
      value: stats.lawsCategories,
      badge: "Directory Active",
      badgeColor: "bg-emerald-100 text-emerald-800",
      icon: Scale,
      color: "bg-[#c9a84c]",
      link: "/admin/dashboard/laws-categories",
      subtitle: "Practice cards & bare acts"
    },
    {
      title: "Court Judgments",
      value: stats.judgments,
      badge: "Precedents Vault",
      badgeColor: "bg-purple-100 text-purple-800",
      icon: Gavel,
      color: "bg-purple-600",
      link: "/admin/dashboard/judgments",
      subtitle: "Apex court rulings"
    },
    {
      title: "Legal Articles",
      value: stats.articles,
      badge: "Insights Live",
      badgeColor: "bg-indigo-100 text-indigo-800",
      icon: FileText,
      color: "bg-indigo-600",
      link: "/admin/dashboard/articles",
      subtitle: "Published legal blogs"
    },
    {
      title: "Mapped Courts & States",
      value: `${stats.courts} Courts / ${stats.states} States`,
      badge: "Jurisdiction Network",
      badgeColor: "bg-teal-100 text-teal-800",
      icon: Landmark,
      color: "bg-teal-600",
      link: "/admin/dashboard/courts",
      subtitle: "District & High Courts"
    },
    {
      title: "Career Job Postings",
      value: stats.jobs,
      badge: "Recruitment Active",
      badgeColor: "bg-rose-100 text-rose-800",
      icon: Briefcase,
      color: "bg-rose-600",
      link: "/admin/dashboard/jobs",
      subtitle: "Chamber job openings"
    },
  ];

  return (
    <div className="w-full space-y-8 pb-12">
      
      {/* 1. HERO WELCOME BANNER */}
      <div className="bg-gradient-to-r from-[#071126] via-[#0d1b3e] to-[#071126] text-white p-8 rounded-2xl shadow-lg border border-[#c9a84c]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/40 px-3 py-1 rounded-full text-[#c9a84c] text-[11px] font-bold tracking-wider uppercase">
              <ShieldCheck size={14} />
              <span>Supreme Court Chamber Administration</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
              Welcome to Chamber Dashboard
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Manage client contact inquiries, practice area cards, bare acts, landmark judgments, articles, and court directory listings across India.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={loadDashboardData}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 border border-white/20 transition-all"
            >
              <RefreshCw size={15} className={loading ? "animate-spin text-[#c9a84c]" : ""} />
              <span>Refresh Portal</span>
            </button>
            <Link
              href="/admin/dashboard/contacts"
              className="bg-[#c9a84c] hover:bg-[#b5953d] text-[#071126] px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-md"
            >
              <Mail size={15} />
              <span>View Inquiries ({stats.pendingContacts})</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. STATS GRID */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-serif font-bold text-[#0d1b3e] uppercase tracking-wider flex items-center gap-2">
            <Activity size={18} className="text-[#c9a84c]" />
            Portal Key Performance Indicators
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {statCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl text-white flex items-center justify-center shadow-md ${card.color}`}>
                    <card.icon size={22} />
                  </div>
                  <span className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-serif text-[#0d1b3e] tracking-tight">
                  {loading ? <span className="animate-pulse">...</span> : card.value}
                </h3>
                <p className="text-xs font-bold text-gray-800 mt-0.5">{card.title}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{card.subtitle}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0d1b3e]">
                <span>Manage Section</span>
                <Link
                  href={card.link}
                  className="flex items-center gap-1 text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors"
                >
                  <span>Open →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MAIN SPLIT SECTION: RECENT INQUIRIES & QUICK ACTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: RECENT INQUIRIES FEED (8 COLS) */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-base font-serif font-bold text-[#0d1b3e] flex items-center gap-2">
                <Mail size={18} className="text-[#c9a84c]" />
                Recent Client Consultation Inquiries
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Latest consultation requests submitted by website visitors
              </p>
            </div>

            <Link
              href="/admin/dashboard/contacts"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>View All ({stats.contacts})</span>
              <ChevronRight size={14} />
            </Link>
          </div>

          {loading ? (
            <div className="py-12 text-center text-gray-400 text-xs flex items-center justify-center gap-2">
              <RefreshCw className="animate-spin text-[#c9a84c]" size={16} /> Loading inquiries...
            </div>
          ) : recentContacts.length === 0 ? (
            <div className="py-12 text-center text-gray-500 space-y-1">
              <p className="text-sm font-bold text-[#0d1b3e]">No recent contact inquiries found.</p>
              <p className="text-xs text-gray-400">Incoming consultation submissions will appear here.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentContacts.map((contact) => (
                <div
                  key={contact._id}
                  className="p-4 rounded-xl border border-gray-100 hover:border-gray-300 bg-gray-50/50 hover:bg-gray-50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-sm text-[#0d1b3e] truncate">{contact.name}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-200 text-gray-700">
                        {contact.subject || "General Inquiry"}
                      </span>
                      {contact.status === "PENDING" || !contact.status ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          Pending
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          {contact.status}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-1 italic">
                      "{contact.message}"
                    </p>
                    <div className="flex items-center gap-4 text-[11px] text-gray-500">
                      <span>✉ {contact.email}</span>
                      <span>📞 {contact.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Link
                      href="/admin/dashboard/contacts"
                      className="px-3 py-1.5 bg-[#0d1b3e] hover:bg-[#1a2b5e] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                    >
                      <Eye size={13} />
                      <span>Details</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: QUICK ACTIONS & SYSTEM STATUS (4 COLS) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Quick Shortcuts */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-base font-serif font-bold text-[#0d1b3e] flex items-center gap-2 border-b border-gray-100 pb-3">
              <Sparkles size={18} className="text-[#c9a84c]" />
              Quick Action Shortcuts
            </h2>

            <div className="grid grid-cols-1 gap-2.5">
              <Link
                href="/admin/dashboard/laws-categories"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-[#0d1b3e] text-[#0d1b3e] hover:text-white border border-gray-200 transition-all font-bold text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <Scale size={16} className="text-[#c9a84c]" />
                  <span>Manage Practice Cards</span>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/admin/dashboard/practice-area-details"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-[#0d1b3e] text-[#0d1b3e] hover:text-white border border-gray-200 transition-all font-bold text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen size={16} className="text-[#c9a84c]" />
                  <span>Edit Bare Acts & Page Content</span>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/admin/dashboard/judgments"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-[#0d1b3e] text-[#0d1b3e] hover:text-white border border-gray-200 transition-all font-bold text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <Gavel size={16} className="text-[#c9a84c]" />
                  <span>Add New Court Judgment</span>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/admin/dashboard/articles"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-[#0d1b3e] text-[#0d1b3e] hover:text-white border border-gray-200 transition-all font-bold text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText size={16} className="text-[#c9a84c]" />
                  <span>Write New Legal Article</span>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/admin/dashboard/courts"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-[#0d1b3e] text-[#0d1b3e] hover:text-white border border-gray-200 transition-all font-bold text-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <Landmark size={16} className="text-[#c9a84c]" />
                  <span>Add Court / State Listing</span>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* System Health Widget */}
          <div className="bg-[#0d1b3e] text-white rounded-2xl p-6 border border-[#c9a84c]/30 shadow-md space-y-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-serif font-bold text-[#c9a84c] uppercase tracking-wider">
                System Status & Info
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/40">
                <CheckCircle2 size={11} /> All Systems Operational
              </span>
            </div>

            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-400">Backend API Endpoint:</span>
                <span className="font-mono text-white font-bold">Connected (Port 5000)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Database Connection:</span>
                <span className="text-emerald-400 font-bold">MongoDB Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Portal Security:</span>
                <span className="text-white font-bold">JWT Encrypted</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

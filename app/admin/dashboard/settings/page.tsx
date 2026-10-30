"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import {
  Settings,
  Globe,
  Share2,
  Code2,
  Search,
  CheckCircle2,
  AlertCircle,
  Save,
  Plus,
  Trash2,
  Edit,
  Power,
  ExternalLink,
  ShieldCheck,
  FileCode,
  Sparkles,
  Bot,
  Layers,
  ArrowRight,
  Eye,
  X
} from "lucide-react";
import {
  WebsiteSettings,
  CustomScript,
  defaultWebsiteSettings,
  getWebsiteSettings,
  updateWebsiteSettings,
} from "../../../../lib/api/settings";

type TabKey = "google" | "pixels" | "custom-code" | "seo" | "chatbot";

export default function WebsiteSettingsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("google");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<WebsiteSettings>(defaultWebsiteSettings);

  // Custom script modal state
  const [isScriptModalOpen, setIsScriptModalOpen] = useState(false);
  const [editingScriptId, setEditingScriptId] = useState<string | null>(null);
  const [scriptForm, setScriptForm] = useState<{
    name: string;
    code: string;
    placement: "head" | "body" | "footer";
    enabled: boolean;
  }>({
    name: "",
    code: "",
    placement: "head",
    enabled: true,
  });

  // Load initial settings
  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await getWebsiteSettings();
        if (data) {
          setFormData(data);
        }
      } catch (err) {
        console.error("Failed to load settings:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleChange = (field: keyof WebsiteSettings, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveAll = async () => {
    setSaving(true);
    try {
      const updated = await updateWebsiteSettings(formData);
      if (updated) {
        setFormData(updated);
      }
      Swal.fire({
        icon: "success",
        title: "Settings Saved Successfully!",
        text: "Website integrations and SEO settings have been published.",
        confirmButtonColor: "#c9a84c",
        timer: 2500,
      });
    } catch (err: any) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Save Failed",
        text: err?.message || "An unexpected error occurred while saving.",
        confirmButtonColor: "#0d1b3e",
      });
    } finally {
      setSaving(false);
    }
  };

  // --- Custom Script Handlers ---
  const handleOpenAddScript = () => {
    setEditingScriptId(null);
    setScriptForm({
      name: "",
      code: "",
      placement: "head",
      enabled: true,
    });
    setIsScriptModalOpen(true);
  };

  const handleOpenEditScript = (script: CustomScript) => {
    setEditingScriptId(script.id);
    setScriptForm({
      name: script.name,
      code: script.code,
      placement: script.placement,
      enabled: script.enabled,
    });
    setIsScriptModalOpen(true);
  };

  const handleSaveScript = () => {
    if (!scriptForm.name.trim()) {
      Swal.fire("Validation Error", "Please provide an integration name.", "warning");
      return;
    }
    if (!scriptForm.code.trim()) {
      Swal.fire("Validation Error", "Please provide script/HTML code.", "warning");
      return;
    }

    const currentScripts = [...(formData.customScripts || [])];

    if (editingScriptId) {
      // Edit existing
      const index = currentScripts.findIndex((s) => s.id === editingScriptId);
      if (index !== -1) {
        currentScripts[index] = {
          ...currentScripts[index],
          ...scriptForm,
        };
      }
    } else {
      // Create new
      const newScript: CustomScript = {
        id: `cs_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name: scriptForm.name.trim(),
        code: scriptForm.code.trim(),
        placement: scriptForm.placement,
        enabled: scriptForm.enabled,
      };
      currentScripts.push(newScript);
    }

    setFormData((prev) => ({
      ...prev,
      customScripts: currentScripts,
    }));
    setIsScriptModalOpen(false);

    Swal.fire({
      icon: "success",
      title: editingScriptId ? "Script Updated!" : "Script Added!",
      text: "Remember to click 'Save All Settings' to permanently publish your changes.",
      toast: true,
      position: "top-end",
      timer: 3000,
      showConfirmButton: false,
    });
  };

  const handleDeleteScript = (id: string, name: string) => {
    Swal.fire({
      title: "Delete Custom Script?",
      text: `Are you sure you want to remove "${name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData((prev) => ({
          ...prev,
          customScripts: (prev.customScripts || []).filter((s) => s.id !== id),
        }));
        Swal.fire({
          icon: "success",
          title: "Removed!",
          text: `"${name}" removed from configuration.`,
          toast: true,
          position: "top-end",
          timer: 2500,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleToggleScript = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      customScripts: (prev.customScripts || []).map((s) =>
        s.id === id ? { ...s, enabled: !s.enabled } : s
      ),
    }));
  };

  if (loading) {
    return (
      <div className="p-8 max-w-7xl mx-auto space-y-6 animate-pulse">
        <div className="h-10 bg-gray-200 rounded w-1/3" />
        <div className="h-6 bg-gray-200 rounded w-1/2" />
        <div className="h-64 bg-gray-200 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2f66] rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c9a84c]/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10 text-[#c9a84c]">
                <Settings size={24} />
              </span>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30 rounded-full">
                Core Website Management
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Website Settings & Integrations
            </h1>
            <p className="text-white/70 text-sm mt-1 max-w-2xl">
              Configure Google Analytics 4, Tag Manager, Search Console, advertising pixels, custom HTML/JS code snippets, and default SEO basics without touching the source code.
            </p>
          </div>
          <button
            onClick={handleSaveAll}
            disabled={saving}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#c9a84c] hover:bg-[#b3923b] text-[#0d1b3e] font-bold shadow-lg shadow-[#c9a84c]/20 transition-all cursor-pointer disabled:opacity-50"
          >
            <Save size={18} />
            <span>{saving ? "Saving Changes..." : "Save All Settings"}</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 bg-white p-2 rounded-xl shadow-sm">
        <button
          onClick={() => setActiveTab("google")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
            activeTab === "google"
              ? "bg-[#0d1b3e] text-white shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <Globe size={18} className={activeTab === "google" ? "text-[#c9a84c]" : ""} />
          <span>A. Google Integrations</span>
        </button>

        <button
          onClick={() => setActiveTab("pixels")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
            activeTab === "pixels"
              ? "bg-[#0d1b3e] text-white shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <Share2 size={18} className={activeTab === "pixels" ? "text-[#c9a84c]" : ""} />
          <span>B. Social & Advertising Pixels</span>
        </button>

        <button
          onClick={() => setActiveTab("custom-code")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
            activeTab === "custom-code"
              ? "bg-[#0d1b3e] text-white shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <Code2 size={18} className={activeTab === "custom-code" ? "text-[#c9a84c]" : ""} />
          <span>C. Custom Code Manager ({formData.customScripts?.length || 0})</span>
        </button>

        <button
          onClick={() => setActiveTab("seo")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
            activeTab === "seo"
              ? "bg-[#0d1b3e] text-white shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <Search size={18} className={activeTab === "seo" ? "text-[#c9a84c]" : ""} />
          <span>D. Basic SEO Settings</span>
        </button>

        <button
          onClick={() => setActiveTab("chatbot")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
            activeTab === "chatbot"
              ? "bg-[#0d1b3e] text-white shadow-md"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          <Bot size={18} className={activeTab === "chatbot" ? "text-[#c9a84c]" : ""} />
          <span>E. AI Chatbot & Company Branding</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        {/* ===================== TAB A: GOOGLE INTEGRATIONS ===================== */}
        {activeTab === "google" && (
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-xl font-bold text-[#0d1b3e] flex items-center gap-2">
                <Globe className="text-[#c9a84c]" size={22} />
                Google Services & Tracking Integrations
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Enter your Google IDs. Tracking tags and verification meta tags will automatically be inserted into your public website when enabled.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Google Analytics 4 */}
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#0d1b3e] text-sm">Google Analytics 4 (GA4)</h3>
                    <p className="text-xs text-gray-500">Measurement ID (e.g. G-XXXXXXXXXX)</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.googleAnalyticsEnabled}
                      onChange={(e) => handleChange("googleAnalyticsEnabled", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a84c]"></div>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="G-VSQM1BYP8Z"
                  value={formData.googleAnalyticsId}
                  onChange={(e) => handleChange("googleAnalyticsId", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono"
                />
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${formData.googleAnalyticsEnabled ? "text-emerald-600" : "text-gray-400"}`}>
                  <span className={`w-2 h-2 rounded-full ${formData.googleAnalyticsEnabled ? "bg-emerald-500" : "bg-gray-400"}`} />
                  {formData.googleAnalyticsEnabled ? "Active & Injecting gtag.js" : "Disabled (No code output)"}
                </span>
              </div>

              {/* 2. Google Tag Manager */}
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#0d1b3e] text-sm">Google Tag Manager (GTM)</h3>
                    <p className="text-xs text-gray-500">Container ID (e.g. GTM-XXXXXXX)</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.googleTagManagerEnabled}
                      onChange={(e) => handleChange("googleTagManagerEnabled", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a84c]"></div>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="GTM-XXXXXXX"
                  value={formData.googleTagManagerId}
                  onChange={(e) => handleChange("googleTagManagerId", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono"
                />
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${formData.googleTagManagerEnabled ? "text-emerald-600" : "text-gray-400"}`}>
                  <span className={`w-2 h-2 rounded-full ${formData.googleTagManagerEnabled ? "bg-emerald-500" : "bg-gray-400"}`} />
                  {formData.googleTagManagerEnabled ? "Active (HEAD script + BODY noscript)" : "Disabled"}
                </span>
              </div>

              {/* 3. Google Search Console Verification */}
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#0d1b3e] text-sm">Google Search Console Verification</h3>
                    <p className="text-xs text-gray-500">Verification Token / Meta Tag Code</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.googleSearchConsoleEnabled}
                      onChange={(e) => handleChange("googleSearchConsoleEnabled", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a84c]"></div>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Y8IxFpQssO7d7xXlxyp0pd4bZSaK7q3m2GTYHCtthUE"
                  value={formData.googleSearchConsoleCode}
                  onChange={(e) => handleChange("googleSearchConsoleCode", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono"
                />
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${formData.googleSearchConsoleEnabled ? "text-emerald-600" : "text-gray-400"}`}>
                  <span className={`w-2 h-2 rounded-full ${formData.googleSearchConsoleEnabled ? "bg-emerald-500" : "bg-gray-400"}`} />
                  {formData.googleSearchConsoleEnabled ? "Active (Outputs <meta name='google-site-verification'>)" : "Disabled"}
                </span>
              </div>

              {/* 4. Google Ads Conversion Tracking */}
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#0d1b3e] text-sm">Google Ads Conversion Tracking</h3>
                    <p className="text-xs text-gray-500">Conversion ID (e.g. AW-XXXXXXXXXX)</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.googleAdsEnabled}
                      onChange={(e) => handleChange("googleAdsEnabled", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a84c]"></div>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="AW-XXXXXXXXXX"
                  value={formData.googleAdsId}
                  onChange={(e) => handleChange("googleAdsId", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono"
                />
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${formData.googleAdsEnabled ? "text-emerald-600" : "text-gray-400"}`}>
                  <span className={`w-2 h-2 rounded-full ${formData.googleAdsEnabled ? "bg-emerald-500" : "bg-gray-400"}`} />
                  {formData.googleAdsEnabled ? "Active (Outputs gtag config for AW)" : "Disabled"}
                </span>
              </div>

              {/* 5. Google Site Verification Code */}
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all space-y-3 md:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#0d1b3e] text-sm">Google Site Verification Code (HTML Meta Tag)</h3>
                    <p className="text-xs text-gray-500">Universal Google domain ownership verification token</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.googleSiteVerificationEnabled}
                      onChange={(e) => handleChange("googleSiteVerificationEnabled", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a84c]"></div>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Y8IxFpQssO7d7xXlxyp0pd4bZSaK7q3m2GTYHCtthUE"
                  value={formData.googleSiteVerificationCode}
                  onChange={(e) => handleChange("googleSiteVerificationCode", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono"
                />
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB B: SOCIAL MEDIA & PIXELS ===================== */}
        {activeTab === "pixels" && (
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="text-xl font-bold text-[#0d1b3e] flex items-center gap-2">
                <Share2 className="text-[#c9a84c]" size={22} />
                Social Media & Advertising Pixels
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Install official tracking pixels for retargeting, conversion tracking, and campaign performance across major advertising networks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Meta / Facebook Pixel */}
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">f</div>
                    <div>
                      <h3 className="font-bold text-[#0d1b3e] text-sm">Facebook / Meta Pixel</h3>
                      <p className="text-xs text-gray-500">Pixel ID (Numeric ID, e.g. 123456789012345)</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.metaPixelEnabled}
                      onChange={(e) => handleChange("metaPixelEnabled", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a84c]"></div>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="e.g. 987654321012345"
                  value={formData.metaPixelId}
                  onChange={(e) => handleChange("metaPixelId", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono"
                />
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${formData.metaPixelEnabled ? "text-emerald-600" : "text-gray-400"}`}>
                  <span className={`w-2 h-2 rounded-full ${formData.metaPixelEnabled ? "bg-emerald-500" : "bg-gray-400"}`} />
                  {formData.metaPixelEnabled ? "Active & Tracking PageViews" : "Disabled"}
                </span>
              </div>

              {/* 2. LinkedIn Insight Tag */}
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-700 text-white flex items-center justify-center font-bold text-xs">in</div>
                    <div>
                      <h3 className="font-bold text-[#0d1b3e] text-sm">LinkedIn Insight Tag</h3>
                      <p className="text-xs text-gray-500">Partner ID (Numeric, e.g. 567890)</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.linkedinEnabled}
                      onChange={(e) => handleChange("linkedinEnabled", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a84c]"></div>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="e.g. 5432109"
                  value={formData.linkedinPartnerId}
                  onChange={(e) => handleChange("linkedinPartnerId", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono"
                />
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${formData.linkedinEnabled ? "text-emerald-600" : "text-gray-400"}`}>
                  <span className={`w-2 h-2 rounded-full ${formData.linkedinEnabled ? "bg-emerald-500" : "bg-gray-400"}`} />
                  {formData.linkedinEnabled ? "Active & Injected" : "Disabled"}
                </span>
              </div>

              {/* 3. TikTok Pixel */}
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs">TT</div>
                    <div>
                      <h3 className="font-bold text-[#0d1b3e] text-sm">TikTok Pixel</h3>
                      <p className="text-xs text-gray-500">Pixel ID (e.g. C1234567890)</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.tiktokEnabled}
                      onChange={(e) => handleChange("tiktokEnabled", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a84c]"></div>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="e.g. CXXXXXXXXXXXXXXX"
                  value={formData.tiktokPixelId}
                  onChange={(e) => handleChange("tiktokPixelId", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono"
                />
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${formData.tiktokEnabled ? "text-emerald-600" : "text-gray-400"}`}>
                  <span className={`w-2 h-2 rounded-full ${formData.tiktokEnabled ? "bg-emerald-500" : "bg-gray-400"}`} />
                  {formData.tiktokEnabled ? "Active & Tracking" : "Disabled"}
                </span>
              </div>

              {/* 4. Pinterest Tag */}
              <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-50 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-xs">P</div>
                    <div>
                      <h3 className="font-bold text-[#0d1b3e] text-sm">Pinterest Tag</h3>
                      <p className="text-xs text-gray-500">Tag ID (Numeric)</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.pinterestEnabled}
                      onChange={(e) => handleChange("pinterestEnabled", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a84c]"></div>
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="e.g. 261234567890"
                  value={formData.pinterestTagId}
                  onChange={(e) => handleChange("pinterestTagId", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono"
                />
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${formData.pinterestEnabled ? "text-emerald-600" : "text-gray-400"}`}>
                  <span className={`w-2 h-2 rounded-full ${formData.pinterestEnabled ? "bg-emerald-500" : "bg-gray-400"}`} />
                  {formData.pinterestEnabled ? "Active & Tracking" : "Disabled"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ===================== TAB C: CUSTOM CODE MANAGER ===================== */}
        {activeTab === "custom-code" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-xl font-bold text-[#0d1b3e] flex items-center gap-2">
                  <Code2 className="text-[#c9a84c]" size={22} />
                  Custom HTML & JavaScript Code Manager
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Safely paste third-party scripts (Hotjar, Microsoft Clarity, Tawk.to, WhatsApp widgets, etc.) with Header, Body, or Footer placements.
                </p>
              </div>
              <button
                onClick={handleOpenAddScript}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0d1b3e] hover:bg-[#1a2f66] text-white text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <Plus size={16} />
                <span>Add Custom Script</span>
              </button>
            </div>

            {/* List of Custom Scripts */}
            {(!formData.customScripts || formData.customScripts.length === 0) ? (
              <div className="text-center py-12 px-4 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50">
                <FileCode size={40} className="mx-auto text-gray-400 mb-3" />
                <h3 className="font-bold text-gray-700 text-base">No Custom Scripts Configured</h3>
                <p className="text-gray-500 text-xs mt-1 max-w-md mx-auto">
                  Click the button below to add your first third-party HTML snippet or JavaScript code.
                </p>
                <button
                  onClick={handleOpenAddScript}
                  className="mt-4 px-4 py-2 bg-[#c9a84c] text-[#0d1b3e] rounded-lg text-xs font-bold hover:bg-[#b3923b] transition-all cursor-pointer"
                >
                  + Add New Integration
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {formData.customScripts.map((script) => (
                  <div
                    key={script.id}
                    className={`p-4 rounded-xl border transition-all ${
                      script.enabled
                        ? "border-gray-200 bg-white hover:border-[#c9a84c]/50 shadow-sm"
                        : "border-gray-200 bg-gray-50/70 opacity-75"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => handleToggleScript(script.id)}
                          className={`p-2 rounded-lg cursor-pointer transition-colors ${
                            script.enabled
                              ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                              : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                          }`}
                          title={script.enabled ? "Click to Disable" : "Click to Enable"}
                        >
                          <Power size={18} />
                        </button>
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h4 className="font-bold text-[#0d1b3e] text-base">{script.name}</h4>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                script.placement === "head"
                                  ? "bg-blue-100 text-blue-800"
                                  : script.placement === "body"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              Placement: {script.placement.toUpperCase()}
                            </span>
                            <span
                              className={`text-[11px] font-semibold ${
                                script.enabled ? "text-emerald-600" : "text-gray-400"
                              }`}
                            >
                              {script.enabled ? "Active" : "Disabled"}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 font-mono mt-1 line-clamp-1 bg-gray-100 px-2 py-1 rounded max-w-xl">
                            {script.code}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end md:self-center">
                        <button
                          onClick={() => handleOpenEditScript(script)}
                          className="px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Edit size={14} />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteScript(script.id, script.name)}
                          className="px-3 py-1.5 rounded-lg border border-red-200 hover:bg-red-50 text-red-600 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Trash2 size={14} />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ===================== TAB D: BASIC SEO SETTINGS ===================== */}
        {activeTab === "seo" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-xl font-bold text-[#0d1b3e] flex items-center gap-2">
                  <Search className="text-[#c9a84c]" size={22} />
                  Basic Website SEO & Crawling Defaults
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Manage the default website title, global meta descriptions, default keywords, and robots.txt indexing instructions.
                </p>
              </div>
              <Link
                href="/admin/dashboard/seo"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a84c] bg-[#0d1b3e] hover:bg-[#1a2f66] px-3.5 py-2 rounded-lg transition-colors shadow-sm"
              >
                <span>Edit Page-by-Page SEO</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-5">
              {/* 1. Website Title */}
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-1.5">
                  Default Website Title (Meta Title)
                </label>
                <input
                  type="text"
                  value={formData.websiteTitle}
                  onChange={(e) => handleChange("websiteTitle", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-semibold"
                />
                <p className="text-[11px] text-gray-400 mt-1">
                  Displayed on search engine result pages (SERPs) and browser tabs when a specific page title is not defined.
                </p>
              </div>

              {/* 2. Website Meta Description */}
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-1.5">
                  Default Website Meta Description
                </label>
                <textarea
                  rows={3}
                  value={formData.websiteMetaDescription}
                  onChange={(e) => handleChange("websiteMetaDescription", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm"
                />
                <p className="text-[11px] text-gray-400 mt-1">
                  Character count: {formData.websiteMetaDescription?.length || 0} / Recommended 150-160 characters.
                </p>
              </div>

              {/* 3. Default Meta Keywords */}
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-1.5">
                  Default Meta Keywords (Comma-Separated)
                </label>
                <textarea
                  rows={3}
                  value={formData.defaultMetaKeywords}
                  onChange={(e) => handleChange("defaultMetaKeywords", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm"
                />
                <p className="text-[11px] text-gray-400 mt-1">
                  Comma-separated keywords for search engines and content categorization.
                </p>
              </div>

              {/* 4. XML Sitemap URL */}
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-1.5">
                  XML Sitemap URL
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={formData.sitemapUrl}
                    onChange={(e) => handleChange("sitemapUrl", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono"
                  />
                  <a
                    href={formData.sitemapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-gray-300 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
                    title="Open Live Sitemap"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* 5. Robots.txt Directives */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider">
                    Robots.txt Directives
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleChange(
                          "robotsTxt",
                          "User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nSitemap: https://advocateonrecordtushargarg.com/sitemap.xml"
                        )
                      }
                      className="text-[10px] font-bold text-[#0d1b3e] bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer"
                    >
                      Reset Standard
                    </button>
                    <a
                      href="/robots.txt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-[#c9a84c] hover:underline flex items-center gap-1"
                    >
                      <span>View Live robots.txt</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
                <textarea
                  rows={4}
                  value={formData.robotsTxt}
                  onChange={(e) => handleChange("robotsTxt", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono bg-gray-900 text-emerald-400"
                />
              </div>
            </div>
          </div>
        )}
      

        {/* ===================== TAB E: AI CHATBOT & BRANDING ===================== */}
        {activeTab === "chatbot" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <h2 className="text-xl font-bold text-[#0d1b3e] flex items-center gap-2">
                  <Bot className="text-[#c9a84c]" size={22} />
                  AI Legal Assistant & Company Branding
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Manage the public AI Chatbot powered by Google Gemini (Free Tier), custom company logo, welcome greetings, and advocate branding.
                </p>
              </div>

              {/* Master Enable/Disable Toggle */}
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                <span className="text-xs font-bold text-[#0d1b3e]">Chatbot Status</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.chatbotEnabled}
                    onChange={(e) => handleChange("chatbotEnabled", e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a84c]"></div>
                </label>
                <span className={`text-xs font-bold ${formData.chatbotEnabled ? "text-emerald-600" : "text-gray-400"}`}>
                  {formData.chatbotEnabled ? "Active" : "Disabled"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Google Gemini API Key */}
              <div className="md:col-span-2 p-5 rounded-xl border border-gray-200 bg-gray-50/60 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#0d1b3e] text-sm flex items-center gap-2">
                      <Sparkles size={16} className="text-[#c9a84c]" />
                      Google Gemini API Key (Free Tier)
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Powers nuanced legal awareness and conversational Indian law reasoning. Free via Google AI Studio.
                    </p>
                  </div>
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d1b3e] bg-[#c9a84c] hover:bg-[#b3923b] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Get Free API Key</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <input
                  type="password"
                  placeholder="AIzaSy..."
                  value={formData.geminiApiKey || ""}
                  onChange={(e) => handleChange("geminiApiKey", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono bg-white"
                />
                <p className="text-[11px] text-gray-500">
                  {formData.geminiApiKey
                    ? "✓ Custom Gemini API Key is configured and ready."
                    : "ℹ️ If left blank, the chatbot will utilize the built-in Chambers knowledge base."}
                </p>
              </div>

              {/* Company Logo Setting with Live Preview */}
              <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-3">
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider">
                  Company Logo URL (Displayed in Chatbot Header & Footer)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={formData.chatbotLogoUrl || "/TusharLogo.png"}
                    onChange={(e) => handleChange("chatbotLogoUrl", e.target.value)}
                    placeholder="/TusharLogo.png"
                    className="flex-1 px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-mono"
                  />
                  <div className="w-14 h-12 rounded-xl border border-gray-200 bg-gray-50 p-1 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-xs">
                    <img
                      src={formData.chatbotLogoUrl || "/TusharLogo.png"}
                      alt="Logo Preview"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-[11px] text-gray-400">
                  Enter a local path (e.g. <code className="bg-gray-100 px-1 py-0.5 rounded">/TusharLogo.png</code>) or any hosted image URL.
                </p>
              </div>

              {/* Provider Text / Watermark */}
              <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-3">
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider">
                  Company Provider Credit (Chatbot Watermark)
                </label>
                <input
                  type="text"
                  value={formData.chatbotProviderText || "Provided by HiveRift Softwares Pvt Ltd"}
                  onChange={(e) => handleChange("chatbotProviderText", e.target.value)}
                  placeholder="Provided by HiveRift Softwares Pvt Ltd"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-semibold"
                />
                <p className="text-[11px] text-gray-400">
                  Displayed alongside your company logo at the bottom footer of the chat widget, linked to www.hiverift.com.
                </p>
              </div>

              {/* Bot Header Title */}
              <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-3">
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider">
                  Chatbot Header Title
                </label>
                <input
                  type="text"
                  value={formData.chatbotTitle || "Advocate Tushar Garg (AOR)"}
                  onChange={(e) => handleChange("chatbotTitle", e.target.value)}
                  placeholder="Advocate Tushar Garg (AOR)"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm font-semibold"
                />
              </div>

              {/* Bot Header Subtitle */}
              <div className="p-5 rounded-xl border border-gray-200 bg-white space-y-3">
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider">
                  Chatbot Subtitle / Status
                </label>
                <input
                  type="text"
                  value={formData.chatbotSubtitle || "AI Legal Assistant • Supreme Court"}
                  onChange={(e) => handleChange("chatbotSubtitle", e.target.value)}
                  placeholder="AI Legal Assistant • Supreme Court"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm"
                />
              </div>

              {/* Welcome Message */}
              <div className="md:col-span-2 p-5 rounded-xl border border-gray-200 bg-white space-y-3">
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider">
                  Initial Welcome Message
                </label>
                <textarea
                  rows={3}
                  value={
                    formData.chatbotWelcomeMessage ||
                    "Namaste! Welcome to the Chambers of Advocate Tushar Garg, Advocate-on-Record at the Supreme Court of India. How can I assist you with Supreme Court filings, legal procedures, bare acts, or scheduling a consultation?"
                  }
                  onChange={(e) => handleChange("chatbotWelcomeMessage", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm"
                />
                <p className="text-[11px] text-gray-400">
                  The initial greeting message shown when a visitor opens the AI Chatbot on the website.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Save Bar on Bottom */}
      <div className="sticky bottom-4 z-30 bg-[#0d1b3e]/90 backdrop-blur-md rounded-2xl p-4 text-white shadow-2xl border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs sm:text-sm text-white/80 font-medium">
            Active Integrations:{" "}
            <strong className="text-white">
              {[
                formData.googleAnalyticsEnabled && "GA4",
                formData.googleTagManagerEnabled && "GTM",
                formData.metaPixelEnabled && "Meta Pixel",
                formData.linkedinEnabled && "LinkedIn",
                formData.customScripts?.filter((s) => s.enabled).length
                  ? `${formData.customScripts.filter((s) => s.enabled).length} Custom Scripts`
                  : null,
              ]
                .filter(Boolean)
                .join(", ") || "None Enabled"}
            </strong>
          </span>
        </div>
        <button
          onClick={handleSaveAll}
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c9a84c] hover:bg-[#b3923b] text-[#0d1b3e] font-bold shadow-lg transition-all cursor-pointer disabled:opacity-50 text-sm"
        >
          <Save size={16} />
          <span>{saving ? "Saving..." : "Save All Settings"}</span>
        </button>
      </div>

      {/* ===================== MODAL: ADD / EDIT CUSTOM SCRIPT ===================== */}
      {isScriptModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-gray-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
              <h3 className="font-bold text-lg text-[#0d1b3e] flex items-center gap-2">
                <Code2 className="text-[#c9a84c]" size={20} />
                {editingScriptId ? "Edit Custom Script" : "Add New Custom Script"}
              </h3>
              <button
                onClick={() => setIsScriptModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {/* Script Name */}
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-1">
                  Integration / Script Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hotjar Heatmaps, Clarity, Tawk.to Live Chat"
                  value={scriptForm.name}
                  onChange={(e) => setScriptForm({ ...scriptForm, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-sm"
                />
              </div>

              {/* Placement Selector */}
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-1">
                  Installation Placement *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "head", label: "Header (<head>)", desc: "For tracking & verification tags" },
                    { id: "body", label: "Body (Top)", desc: "Directly after opening <body>" },
                    { id: "footer", label: "Footer (Bottom)", desc: "Before closing </body>" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setScriptForm({ ...scriptForm, placement: p.id as any })}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                        scriptForm.placement === p.id
                          ? "border-[#c9a84c] bg-[#c9a84c]/10 text-[#0d1b3e] font-bold shadow-sm"
                          : "border-gray-200 hover:bg-gray-50 text-gray-600"
                      }`}
                    >
                      <div className="text-xs font-bold">{p.label}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">{p.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Editor */}
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] uppercase tracking-wider mb-1">
                  HTML / JavaScript Code *
                </label>
                <textarea
                  rows={8}
                  placeholder={`<!-- Paste your tracking or embed snippet here -->\n<script>\n  // your code here\n</script>`}
                  value={scriptForm.code}
                  onChange={(e) => setScriptForm({ ...scriptForm, code: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a84c] focus:outline-none text-xs font-mono bg-gray-900 text-emerald-400"
                />
                <p className="text-[11px] text-gray-500 mt-1">
                  You can paste complete <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;script&gt;</code> tags, <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;meta&gt;</code> tags, or embed snippets.
                </p>
              </div>

              {/* Enable Toggle */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-xs font-bold text-[#0d1b3e]">Enable This Script Immediately</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={scriptForm.enabled}
                    onChange={(e) => setScriptForm({ ...scriptForm, enabled: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a84c]"></div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-4 mt-6">
              <button
                type="button"
                onClick={() => setIsScriptModalOpen(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveScript}
                className="px-5 py-2 bg-[#0d1b3e] text-white rounded-xl text-xs font-bold hover:bg-[#1a2f66] cursor-pointer shadow-md"
              >
                {editingScriptId ? "Update Script" : "Add Script"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

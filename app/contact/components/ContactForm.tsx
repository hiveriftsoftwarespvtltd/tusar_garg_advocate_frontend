"use client";

import React, { useState } from "react";
import { 
  Send, 
  Lock, 
  ChevronDown, 
  RefreshCw, 
  User, 
  Mail, 
  Phone, 
  Scale, 
  AlertCircle,
  CheckCircle2,
  FileText,
  ShieldCheck
} from "lucide-react";
import { fetchApi } from "../../../lib/api/client";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Supreme Court of India (SLP / Writ / Review)",
    urgency: "Standard (24-48 hrs)",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const subjects = [
    "Supreme Court of India (SLP / Writ / Review)",
    "Delhi High Court / State High Court Litigation",
    "Insolvency & Company Law (NCLT / NCLAT)",
    "Banking & Debt Recovery (DRT / DRAT)",
    "Commercial Arbitration & Dispute Resolution",
    "Criminal Appeals, Bail & White-Collar Defense",
    "RERA & Real Estate Appellate Tribunal",
    "Legal Opinion & Contractual Advisory",
    "Appointment / In-Person Chamber Conference",
    "General Legal Inquiry"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) {
      Swal.fire({
        title: "Ethics Confirmation Required",
        text: "Please check the confirmation box acknowledging the confidential nature of this inquiry.",
        icon: "warning",
        confirmButtonColor: "#071126",
      });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.urgency === "Urgent / Interim Relief" 
          ? `[URGENT] ${formData.subject}` 
          : formData.subject,
        message: formData.message.trim(),
      };

      await fetchApi("/contacts", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      Swal.fire({
        title: "Inquiry Successfully Registered",
        text: "Thank you. Your matter has been submitted to the Chambers of Advocate Tushar Garg. Our registry team will review the details and reach out shortly.",
        icon: "success",
        confirmButtonColor: "#071126",
        timer: 4500,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Supreme Court of India (SLP / Writ / Review)",
        urgency: "Standard (24-48 hrs)",
        message: "",
      });
      setConfirmed(false);
    } catch (err: any) {
      console.error(err);
      Swal.fire({
        title: "Submission Failed",
        text: err.message || "Could not submit inquiry at this moment. Please call our chambers directly at +91-7206810681.",
        icon: "error",
        confirmButtonColor: "#071126",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between">
      
      {/* Header with Luxury Seal */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-[#e2e8f0]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdfaf3] border border-[#c9a84c]/40 text-[#c9a84c] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Scale size={13} />
            <span>Confidential Intake Form</span>
          </div>
          <h2 className="font-serif text-[20px] sm:text-[24px] text-[#071126] font-bold tracking-tight">
            Submit Formal Case Inquiry
          </h2>
          <p className="text-[12.5px] sm:text-[13px] text-[#4b5563] mt-0.5">
            Chambers of Advocate Tushar Garg, Advocate-on-Record, Supreme Court of India
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f8fafc] border border-slate-200 text-slate-600 text-[11px]">
          <ShieldCheck size={14} className="text-[#c9a84c]" />
          <span>Fiduciary Privilege</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between">
        
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#071126] mb-1.5">
              Full Name / Organization <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9ca3af]">
                <User size={15} />
              </div>
              <input
                type="text"
                required
                placeholder="e.g., Rajesh Sharma / Apex Infra Ltd."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#f8fafc] hover:bg-white border border-[#cbd5e1] rounded-lg text-[13.5px] text-[#0f172a] placeholder-[#94a3b8] focus:bg-white focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#071126] mb-1.5">
              Official Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9ca3af]">
                <Mail size={15} />
              </div>
              <input
                type="email"
                required
                placeholder="e.g., rajesh.sharma@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-9 pr-3.5 py-2.5 bg-[#f8fafc] hover:bg-white border border-[#cbd5e1] rounded-lg text-[13.5px] text-[#0f172a] placeholder-[#94a3b8] focus:bg-white focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Phone Number and Forum/Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#071126] mb-1.5">
              Direct Contact Number <span className="text-red-500">*</span>
            </label>
            <div className="relative flex rounded-lg">
              <div className="inline-flex items-center gap-1.5 px-3 rounded-l-lg bg-[#e2e8f0]/60 border border-r-0 border-[#cbd5e1] text-[#0f172a] text-[12.5px] font-semibold">
                <span>🇮🇳</span>
                <span>+91</span>
              </div>
              <input
                type="tel"
                required
                placeholder="98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-3 pr-3.5 py-2.5 bg-[#f8fafc] hover:bg-white border border-[#cbd5e1] rounded-r-lg text-[13.5px] text-[#0f172a] placeholder-[#94a3b8] focus:bg-white focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#071126] mb-1.5">
              Judicial Forum / Nature of Matter <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full pl-3 pr-9 py-2.5 bg-[#f8fafc] hover:bg-white border border-[#cbd5e1] rounded-lg text-[13px] text-[#0f172a] focus:bg-white focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none cursor-pointer transition-all"
              >
                {subjects.map((sub, i) => (
                  <option key={i} value={sub} className="py-1">
                    {sub}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#64748b]">
                <ChevronDown size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Urgency Selector Pills */}
        <div>
          <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#071126] mb-1.5">
            Timeline / Case Urgency
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, urgency: "Standard (24-48 hrs)" })}
              className={`flex items-center justify-between p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                formData.urgency === "Standard (24-48 hrs)"
                  ? "bg-[#071126] text-white border-[#071126] shadow-sm"
                  : "bg-[#f8fafc] text-[#334155] border-[#cbd5e1] hover:border-[#94a3b8]"
              }`}
            >
              <div>
                <p className="text-[12.5px] font-bold">Standard Review</p>
                <p className={`text-[10.5px] ${formData.urgency === "Standard (24-48 hrs)" ? "text-white/70" : "text-[#64748b]"}`}>
                  Response within 24–48 business hours
                </p>
              </div>
              {formData.urgency === "Standard (24-48 hrs)" && (
                <CheckCircle2 size={15} className="text-[#c9a84c]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setFormData({ ...formData, urgency: "Urgent / Interim Relief" })}
              className={`flex items-center justify-between p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                formData.urgency === "Urgent / Interim Relief"
                  ? "bg-amber-950/90 text-white border-amber-600 shadow-sm"
                  : "bg-[#f8fafc] text-[#334155] border-[#cbd5e1] hover:border-[#94a3b8]"
              }`}
            >
              <div>
                <p className="text-[12.5px] font-bold flex items-center gap-1.5 text-amber-500">
                  <AlertCircle size={13} />
                  <span>Urgent Listing / Interim Relief</span>
                </p>
                <p className={`text-[10.5px] ${formData.urgency === "Urgent / Interim Relief" ? "text-amber-200/80" : "text-[#64748b]"}`}>
                  Caveat, stay application, or imminent limitation
                </p>
              </div>
              {formData.urgency === "Urgent / Interim Relief" && (
                <CheckCircle2 size={15} className="text-amber-400" />
              )}
            </button>
          </div>
        </div>

        {/* Row 4: Case Synopsis / Message */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#071126]">
              Case Synopsis & Legal Relief Sought <span className="text-red-500">*</span>
            </label>
            <span className="text-[11px] text-[#64748b]">
              {formData.message.length} characters
            </span>
          </div>
          <textarea
            required
            rows={4}
            placeholder="Please summarize the facts of the case, current stage of proceedings (e.g. impugned order passed by High Court / Tribunal), limitation status, and specific assistance required from our chambers..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 bg-[#f8fafc] hover:bg-white border border-[#cbd5e1] rounded-lg text-[13px] text-[#0f172a] placeholder-[#94a3b8] focus:bg-white focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none resize-none transition-all leading-relaxed"
          />
        </div>

        {/* Confirmation & Ethics Checkbox */}
        <div className="p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-start gap-2.5">
          <input
            type="checkbox"
            id="ethics-confirm"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded text-[#c9a84c] border-slate-300 focus:ring-[#c9a84c] cursor-pointer"
          />
          <label htmlFor="ethics-confirm" className="text-[11.5px] text-[#475569] leading-relaxed cursor-pointer select-none">
            I confirm that the details provided are accurate and understand that this inquiry is submitted for professional consultation. 
            All submissions are treated with strict confidentiality under Bar Council of India standards.
          </label>
        </div>

        {/* Submit Button & Security Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-gradient-to-r from-[#071126] to-[#12244f] hover:from-[#0d1b3e] hover:to-[#1a336e] text-white font-bold text-[12.5px] uppercase tracking-wider shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-[#c9a84c]/30"
          >
            {loading ? (
              <>
                <RefreshCw size={15} className="animate-spin text-[#c9a84c]" />
                <span>Transmitting Inquiry...</span>
              </>
            ) : (
              <>
                <Send size={15} className="text-[#c9a84c]" />
                <span>Transmit Formal Inquiry</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-1.5 text-[11px] text-[#64748b]">
            <Lock size={12} className="text-[#c9a84c]" />
            <span>256-Bit SSL Encrypted • Privileged & Confidential</span>
          </div>
        </div>
      </form>
    </section>
  );
}

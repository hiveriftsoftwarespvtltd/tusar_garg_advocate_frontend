"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  ArrowRight,
  Building,
  CheckCircle2
} from "lucide-react";

export default function HomeContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subjectMatter: "Appellate Matter (Supreme Court SLP)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E7E4DC]">
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#101D35]/5 border border-[#B69A63]/30 px-3.5 py-1 rounded-full mb-3">
            <Building size={13} className="text-[#B69A63]" />
            <span className="text-[#101D35] text-[11px] font-bold tracking-widest uppercase">
              PROFESSIONAL CORRESPONDENCE & CHAMBERS INTAKE
            </span>
          </div>
          <h2 className="font-serif text-[28px] sm:text-[36px] font-bold text-[#101D35] uppercase tracking-tight">
            CHAMBERS CONTACT INFORMATION
          </h2>
          <div className="w-14 h-0.5 bg-[#B69A63] mx-auto mt-3 mb-4" />
          <p className="text-[#4A5568] text-[14px] sm:text-[15.5px] leading-relaxed">
            For professional correspondence and chambers-related communication, please refer to the following official contact details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Official Chambers Particulars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#F8F7F3] border border-[#E7E4DC] p-5 sm:p-7 rounded-2xl shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#101D35] mb-1">
                Advocate Tushar Garg
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#B69A63] mb-6">
                Advocate-on-Record, Supreme Court of India
              </p>

              <div className="space-y-4 text-xs sm:text-[13px] text-[#4A5568]">
                
                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E7E4DC] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={15} className="text-[#B69A63]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#737B88] font-semibold">Chambers Telephone</p>
                    <a href="tel:+917206810681" className="font-semibold text-[#101D35] hover:text-[#B69A63] text-sm transition-colors">
                      +91 72068 10681
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E7E4DC] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={15} className="text-[#B69A63]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#737B88] font-semibold">Official Email</p>
                    <a href="mailto:advocate.tushargarg@gmail.com" className="font-semibold text-[#101D35] hover:text-[#B69A63] transition-colors">
                      advocate.tushargarg@gmail.com
                    </a>
                  </div>
                </div>

                {/* Supreme Court Chambers */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E7E4DC] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={15} className="text-[#B69A63]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#737B88] font-semibold">Supreme Court Chambers</p>
                    <p className="font-semibold text-[#101D35]">Tilak Marg, New Delhi</p>
                  </div>
                </div>

                {/* Chambers Office */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E7E4DC] flex items-center justify-center shrink-0 mt-0.5">
                    <Building size={15} className="text-[#B69A63]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#737B88] font-semibold">Chambers Office</p>
                    <p className="font-semibold text-[#101D35]">
                      Flat No. 7, 2nd Floor, D-1, Kalindi Colony, New Delhi – 110065
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E7E4DC] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={15} className="text-[#B69A63]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#737B88] font-semibold">Working Hours</p>
                    <p className="font-semibold text-[#101D35]">
                      Monday to Saturday, 10:00 AM – 7:30 PM
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp & Map Link Action */}
              <div className="pt-6 border-t border-[#E7E4DC] mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/917206810681?text=Hello%20Advocate%20Tushar%20Garg,%20I%20would%20like%20to%20inquire%20regarding%20chambers%20communication."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white font-semibold text-xs transition-colors"
                >
                  <span>Chambers WhatsApp Line</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Kalindi+Colony+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#E7E4DC] hover:border-[#B69A63] text-[#101D35] text-xs font-semibold transition-colors"
                >
                  <MapPin size={13} className="text-[#B69A63]" />
                  <span>Google Maps</span>
                </a>
              </div>

            </div>

            {/* Compliance Guarantee Disclaimer Box */}
            <div className="bg-[#F8F7F3] border border-[#E7E4DC] p-4 rounded-xl flex items-start gap-3">
              <ShieldCheck size={18} className="text-[#B69A63] shrink-0 mt-0.5" />
              <p className="text-xs text-[#737B88] leading-relaxed">
                <strong className="text-[#101D35]">Regulatory Compliance Notice:</strong> In conformity with the rules of the Bar Council of India, communicating with the chambers does not establish an advocate-client relationship. Chambers communications are subject to professional confidentiality. No claims or guarantees of litigation outcome are provided.
              </p>
            </div>

          </div>

          {/* Right Column: Formal Correspondence Intake Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8F7F3] border border-[#E7E4DC] p-5 sm:p-8 md:p-10 rounded-2xl shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#101D35] mb-2">
              Chambers Correspondence Intake
            </h3>
            <p className="text-xs text-[#4A5568] mb-6">
              Please provide factual particulars regarding your communication or listing reference.
            </p>

            {submitted ? (
              <div className="bg-white border border-[#B69A63]/50 p-6 rounded-xl text-center">
                <CheckCircle2 size={36} className="text-[#B69A63] mx-auto mb-3" />
                <h4 className="font-serif text-lg font-bold text-[#101D35] mb-1">
                  Correspondence Received
                </h4>
                <p className="text-xs text-[#4A5568] max-w-md mx-auto">
                  Thank you. Your message has been logged with the chambers administrative desk. For urgent court matters or registry filings, please contact the chambers telephone line directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#737B88] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full bg-white border border-[#E7E4DC] rounded-xl px-4 py-2.5 text-xs text-[#101D35] focus:outline-none focus:border-[#B69A63]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#737B88] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-[#E7E4DC] rounded-xl px-4 py-2.5 text-xs text-[#101D35] focus:outline-none focus:border-[#B69A63]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#737B88] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-white border border-[#E7E4DC] rounded-xl px-4 py-2.5 text-xs text-[#101D35] focus:outline-none focus:border-[#B69A63]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#737B88] mb-1.5">
                      Subject Matter
                    </label>
                    <select
                      value={formData.subjectMatter}
                      onChange={(e) => setFormData({ ...formData, subjectMatter: e.target.value })}
                      className="w-full bg-white border border-[#E7E4DC] rounded-xl px-4 py-2.5 text-xs text-[#101D35] focus:outline-none focus:border-[#B69A63]"
                    >
                      <option>Appellate Matter (Supreme Court SLP)</option>
                      <option>Constitutional Writ Petition</option>
                      <option>Civil Appeal / Litigation</option>
                      <option>Criminal Appeal / Bail Matter</option>
                      <option>Commercial Arbitration</option>
                      <option>Corporate / NCLT Matter</option>
                      <option>Other Professional Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#737B88] mb-1.5">
                    Particulars / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief description of the matter, court forum, or inquiry..."
                    className="w-full bg-white border border-[#E7E4DC] rounded-xl p-4 text-xs text-[#101D35] focus:outline-none focus:border-[#B69A63]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#101D35] hover:bg-[#202632] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Submit Chambers Inquiry</span>
                  <Send size={13} />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

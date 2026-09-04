"use client";

import { useState } from "react";
import { Send, Lock, ChevronDown, RefreshCw } from "lucide-react";
import { fetchApi } from "../../../lib/api/client";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Legal Consultation",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetchApi('/contacts', {
        method: "POST",
        body: JSON.stringify(formData),
      });

      Swal.fire({
        title: 'Message Sent Successfully!',
        text: 'Thank you for reaching out. Advocate Tushar Garg\'s office will review your inquiry and contact you shortly.',
        icon: 'success',
        confirmButtonColor: '#0d1b3e',
        timer: 4000,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Legal Consultation",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      Swal.fire({
        title: 'Submission Failed',
        text: err.message || 'Could not send message. Please try again or contact our office directly.',
        icon: 'error',
        confirmButtonColor: '#0d1b3e',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white border border-[#e8ebf2] rounded-xl p-8 mb-8 shadow-sm">
      <div className="mb-6">
        <h2 className="font-serif text-[16px] text-[#0d1b3e] uppercase tracking-[0.05em] mb-3">
          SEND US A MESSAGE
        </h2>
        <div className="w-12 h-[2px] bg-[#c9a84c]"></div>
      </div>
      
      <p className="text-[13px] text-[#374151] mb-6">
        Please fill out the form below. Advocate Tushar Garg's legal team will get back to you regarding your inquiry.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Full Name *" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-[#e8ebf2] rounded-md px-4 py-3 text-[13px] text-[#374151] outline-none focus:border-[#c9a84c] transition-colors bg-transparent placeholder-[#9ca3af]"
              required 
            />
          </div>
          <div className="flex-1">
            <input 
              type="email" 
              placeholder="Email Address *" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-[#e8ebf2] rounded-md px-4 py-3 text-[13px] text-[#374151] outline-none focus:border-[#c9a84c] transition-colors bg-transparent placeholder-[#9ca3af]"
              required 
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <input 
              type="tel" 
              placeholder="Phone Number *" 
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border border-[#e8ebf2] rounded-md px-4 py-3 text-[13px] text-[#374151] outline-none focus:border-[#c9a84c] transition-colors bg-transparent placeholder-[#9ca3af]"
              required
            />
          </div>
          <div className="flex-1 relative">
            <select 
              className="w-full border border-[#e8ebf2] rounded-md px-4 py-3 text-[13px] text-[#374151] outline-none focus:border-[#c9a84c] transition-colors bg-transparent appearance-none cursor-pointer"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            >
              <option value="Legal Consultation">Legal Consultation</option>
              <option value="Supreme Court / High Court Representation">Supreme Court / High Court Representation</option>
              <option value="Appointment Request">Appointment Request</option>
              <option value="General Legal Inquiry">General Legal Inquiry</option>
              <option value="Academic / Collaboration">Academic / Collaboration</option>
            </select>
            <ChevronDown size={16} className="text-[#9ca3af] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Message */}
        <div>
          <textarea 
            placeholder="Your Message / Case Overview *" 
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border border-[#e8ebf2] rounded-md px-4 py-3 text-[13px] text-[#374151] outline-none focus:border-[#c9a84c] transition-colors bg-transparent placeholder-[#9ca3af] resize-none"
            required
          ></textarea>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3 pt-2">
          <input 
            type="checkbox" 
            id="confirm" 
            className="mt-1 w-4 h-4 border border-[#c9a84c] rounded-sm text-[#c9a84c] focus:ring-[#c9a84c] cursor-pointer"
            required 
          />
          <label htmlFor="confirm" className="text-[12px] text-[#374151] cursor-pointer leading-relaxed">
            I confirm that the information provided is accurate and I understand that this form is for legal consultation and professional inquiries.
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button 
            type="submit" 
            disabled={loading}
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#d48c36] text-white px-10 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider hover:bg-[#b07024] transition-colors shadow-sm disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw size={16} className="animate-spin" /> SENDING...
              </>
            ) : (
              <>
                <Send size={16} /> SEND MESSAGE
              </>
            )}
          </button>
        </div>
        
        {/* Security Notice */}
        <div className="flex items-center gap-2 text-[11px] text-[#9ca3af] pt-4 border-t border-[#e8ebf2]">
          <Lock size={12} />
          Your information is secure and will not be shared with any third party.
        </div>
      </form>
    </section>
  );
}

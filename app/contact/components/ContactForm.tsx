import { Send, Lock, ChevronDown } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-white border border-[#e8ebf2] rounded-xl p-8 mb-8 shadow-sm">
      <div className="mb-6">
        <h2 className="font-serif text-[16px] text-[#0d1b3e] uppercase tracking-[0.05em] mb-3">
          SEND US A MESSAGE
        </h2>
        <div className="w-12 h-[2px] bg-[#c9a84c]"></div>
      </div>
      
      <p className="text-[13px] text-[#374151] mb-6">
        Please fill out the form below. We will get back to you regarding your inquiry.
      </p>

      <form className="space-y-5">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Full Name *" 
              className="w-full border border-[#e8ebf2] rounded-md px-4 py-3 text-[13px] text-[#374151] outline-none focus:border-[#c9a84c] transition-colors bg-transparent placeholder-[#9ca3af]"
              required 
            />
          </div>
          <div className="flex-1">
            <input 
              type="email" 
              placeholder="Email Address *" 
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
              placeholder="Phone Number" 
              className="w-full border border-[#e8ebf2] rounded-md px-4 py-3 text-[13px] text-[#374151] outline-none focus:border-[#c9a84c] transition-colors bg-transparent placeholder-[#9ca3af]"
            />
          </div>
          <div className="flex-1 relative">
            <select 
              className="w-full border border-[#e8ebf2] rounded-md px-4 py-3 text-[13px] text-[#9ca3af] outline-none focus:border-[#c9a84c] transition-colors bg-transparent appearance-none cursor-pointer"
              required
              defaultValue=""
            >
              <option value="" disabled>Subject / Purpose *</option>
              <option value="consultation" className="text-black">Legal Consultation</option>
              <option value="appointment" className="text-black">Appointment Request</option>
              <option value="general" className="text-black">General Inquiry</option>
            </select>
            <ChevronDown size={16} className="text-[#9ca3af] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="relative">
          <select 
            className="w-full border border-[#e8ebf2] rounded-md px-4 py-3 text-[13px] text-[#9ca3af] outline-none focus:border-[#c9a84c] transition-colors bg-transparent appearance-none cursor-pointer"
            required
            defaultValue=""
          >
            <option value="" disabled>Inquiry Type *</option>
            <option value="professional" className="text-black">Professional Inquiry</option>
            <option value="academic" className="text-black">Academic/Collaboration</option>
            <option value="other" className="text-black">Other</option>
          </select>
          <ChevronDown size={16} className="text-[#9ca3af] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Message */}
        <div>
          <textarea 
            placeholder="Your Message *" 
            rows={5}
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
            I confirm that the information provided is accurate and I understand that this form is only for professional inquiries.
          </label>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button 
            type="submit" 
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#d48c36] text-white px-10 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider hover:bg-[#b07024] transition-colors shadow-sm"
          >
            <Send size={16} /> SEND MESSAGE
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

import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Advocate Tushar Garg (AOR)",
  description: "Official Privacy Policy regarding client data, consultation intake confidentiality, and data protection at the Chambers of Advocate Tushar Garg, Supreme Court of India.",
  keywords: [
    "Advocate on Record Tushar Garg",
    "Advocate Tushar Garg",
    "Privacy Policy",
    "Client Confidentiality",
    "Supreme Court Chambers Data Protection"
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f4] py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold text-[#0d1b3e] hover:text-[#c9a84c] mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Homepage</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl">
          <div className="flex items-center gap-3 text-[#c9a84c] mb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0d1b3e] flex items-center justify-center">
              <Shield size={24} className="text-[#c9a84c]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c9a84c] block">Chambers Protocols</span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">Privacy Policy & Confidentiality</h1>
            </div>
          </div>

          <div className="w-16 h-1 bg-[#c9a84c] mb-6 rounded-full" />

          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              The Chambers of <strong>Advocate Tushar Garg</strong>, Advocate-on-Record at the Supreme Court of India, maintains the highest standards of professional legal ethics, client confidentiality, and data protection.
            </p>

            <h2 className="font-serif text-lg font-bold text-[#0d1b3e] pt-2">1. Attorney-Client Privilege & Information Confidentiality</h2>
            <p>
              Any communication transmitted through this portal, including case inquiries, consultation requests, contact form submissions, and uploaded pleadings, is treated with strict professional confidentiality in accordance with Section 126 of the Indian Evidence Act, 1872 / Bharatiya Sakshya Adhiniyam, 2023.
            </p>

            <h2 className="font-serif text-lg font-bold text-[#0d1b3e] pt-2">2. Information Collection</h2>
            <p>
              We collect information that you voluntarily provide to us when scheduling a case consultation or submitting a legal inquiry:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Name and contact details (email address, telephone / WhatsApp number).</li>
              <li>Court matter specifics, case nature, forum names, or briefing notes.</li>
              <li>Browser technical metrics (cookies, device metadata) used strictly for security and performance optimization.</li>
            </ul>

            <h2 className="font-serif text-lg font-bold text-[#0d1b3e] pt-2">3. Non-Disclosure & Security</h2>
            <p>
              We do not sell, rent, trade, or transfer your personally identifiable or case-related information to any third party. Data provided is utilized solely by authorized members of the chambers for evaluating legal representation and responding to your inquiry.
            </p>

            <h2 className="font-serif text-lg font-bold text-[#0d1b3e] pt-2">4. Communications & Opt-Out</h2>
            <p>
              You may request the deletion or correction of your contact details at any time by writing directly to our chambers at <strong>advocate.tushargarg@gmail.com</strong>.
            </p>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>Effective Date: 2026</span>
              <span className="flex items-center gap-1 text-[#0d1b3e] font-semibold">
                <Lock size={12} className="text-[#c9a84c]" /> Encrypted & Privileged
              </span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

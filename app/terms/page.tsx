import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Advocate Tushar Garg (AOR)",
  description: "Terms of Use and conditions for accessing the legal portal of Advocate Tushar Garg, Advocate-on-Record, Supreme Court of India.",
  keywords: [
    "Advocate on Record Tushar Garg",
    "Advocate Tushar Garg",
    "Terms of Use",
    "Legal Terms and Conditions",
    "Advocate on Record Portal"
  ],
};

export default function TermsPage() {
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
              <FileText size={24} className="text-[#c9a84c]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c9a84c] block">Terms & Conditions</span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">Terms of Website Use</h1>
            </div>
          </div>

          <div className="w-16 h-1 bg-[#c9a84c] mb-6 rounded-full" />

          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              Welcome to the official legal portal of <strong>Advocate Tushar Garg (Advocate-on-Record, Supreme Court of India)</strong>. By browsing and using this website, you agree to comply with and be bound by the following terms and conditions of use.
            </p>

            <h2 className="font-serif text-lg font-bold text-[#0d1b3e] pt-2">1. Intellectual Property & Copyright</h2>
            <p>
              All original commentary, case analyses, articles, and design elements published on this website are the intellectual property of Advocate Tushar Garg unless otherwise stated. Unattributed commercial reproduction or syndication without prior written consent is strictly prohibited. Public domain judicial decisions and bare acts remain governed by public statutory principles.
            </p>

            <h2 className="font-serif text-lg font-bold text-[#0d1b3e] pt-2">2. Accuracy of Legal Information</h2>
            <p>
              While reasonable efforts are made to keep judicial information, court directories, and bare acts current, laws and precedents evolve continuously. Users must not rely solely on summarized notes for filing legal petitions without formal verification with official court registries or Gazettes of India.
            </p>

            <h2 className="font-serif text-lg font-bold text-[#0d1b3e] pt-2">3. Limitation of Liability</h2>
            <p>
              In no event shall Advocate Tushar Garg, the chambers, or any contributing advocates be liable for any direct, indirect, incidental, or consequential loss arising from the use or inability to use this website.
            </p>

            <h2 className="font-serif text-lg font-bold text-[#0d1b3e] pt-2">4. Jurisdiction & Governing Law</h2>
            <p>
              Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the Courts and Tribunals situated in <strong>New Delhi, India</strong>, governed by the laws of the Republic of India.
            </p>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>Jurisdiction: New Delhi, India</span>
              <span className="text-[#c9a84c] font-semibold">Advocate-on-Record Practice</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

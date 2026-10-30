import type { Metadata } from "next";
import Link from "next/link";
import { Scale, ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer | Advocate Tushar Garg (AOR)",
  description: "Bar Council of India compliance statement and official legal disclaimer for Advocate Tushar Garg, Advocate-on-Record, Supreme Court of India.",
  keywords: [
    "Advocate on Record Tushar Garg",
    "Advocate Tushar Garg",
    "Legal Disclaimer",
    "Bar Council of India Compliance",
    "Advocate on Record Supreme Court"
  ],
};

export default function DisclaimerPage() {
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
              <Scale size={24} className="text-[#c9a84c]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c9a84c] block">Compliance Notice</span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e]">Legal Disclaimer</h1>
            </div>
          </div>

          <div className="w-16 h-1 bg-[#c9a84c] mb-6 rounded-full" />

          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              This website (<strong>advocateonrecordtushargarg.com</strong>) is an informational portal managed by the Chambers of <strong>Advocate Tushar Garg</strong>, Advocate-on-Record (AOR) at the Supreme Court of India.
            </p>

            <h2 className="font-serif text-lg font-bold text-[#0d1b3e] pt-2">Bar Council of India (BCI) Mandate</h2>
            <p>
              As per the rules of the Bar Council of India, advocates are strictly prohibited from soliciting work or advertising their legal practice in any form, direct or indirect. By accessing this website, the user acknowledges and confirms that:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You are visiting this website voluntarily for your own information and awareness regarding Indian jurisprudence and the professional standing of Advocate Tushar Garg.</li>
              <li>There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from Advocate Tushar Garg or any member of the chambers.</li>
              <li>The information provided under this website is solely available at your request for academic, research, and informational purposes only.</li>
              <li>The contents of this portal do not constitute legal advice and shall not be construed as creating an advocate-client relationship.</li>
              <li>Litigants and users facing legal issues are advised to seek independent legal counsel before acting upon any legal draft, bare act, or case summary presented here.</li>
            </ul>

            <h2 className="font-serif text-lg font-bold text-[#0d1b3e] pt-2">Repository & Judgment Citations</h2>
            <p>
              While every effort is made to ensure the accuracy of Bare Acts, Supreme Court judgments, and legal drafts, the law is subject to ongoing statutory amendment and judicial interpretation. Advocate Tushar Garg and the chambers assume no liability for any reliance placed upon general legal information provided on this portal.
            </p>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>Last updated: 2026</span>
              <span className="text-[#c9a84c] font-semibold">Bar Council of India Compliant</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

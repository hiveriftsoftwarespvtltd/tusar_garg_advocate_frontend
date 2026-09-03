import { User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#fdfaf5] rounded-xl p-8 md:p-10 shadow-sm border border-gray-100">
          
          {/* Left Icon */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
            <div className="w-[88px] h-[88px] rounded-full bg-white border-[1.5px] border-[#c9a84c] shadow-md flex items-center justify-center">
              <User size={40} color="#0d1b3e" strokeWidth={1.5} />
            </div>
          </div>
          
          {/* Middle Text */}
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0 pr-0 md:pr-10">
            <h2 className="font-serif text-[20px] md:text-[22px] text-[#0d1b3e]">
              Let's Understand Your Matter
            </h2>
            <div className="w-12 h-[2px] bg-[#c9a84c] mt-2 mb-4 mx-auto md:mx-0" />
            
            <p className="text-[13px] md:text-[14px] text-[#4b5563] font-medium leading-relaxed mb-3">
              If you are facing a legal dispute, considering litigation, or simply unsure about what legal step to take next, the first step is to understand your situation properly.
            </p>
            <p className="text-[13px] md:text-[14px] text-[#4b5563] font-medium leading-relaxed mb-3">
              Advocate Tushar Garg provides litigation and legal advisory services before the Supreme Court of India, High Courts, and subordinate courts, with a practice focused on thoughtful preparation, clear advice, and committed representation.
            </p>
            <p className="text-[14px] md:text-[15px] font-bold text-[#0d1b3e]">
              Your matter deserves to be understood before it is argued.
            </p>
          </div>
          
          {/* Right Button */}
          <div className="flex-shrink-0">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0d1b3e] text-white px-7 py-3.5 rounded font-bold text-[13px] tracking-wide hover:bg-[#1a2e63] transition-colors group"
            >
              GET IN TOUCH <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}

import { ShieldCheck, UserCheck, Lock, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactHero() {
  const features = [
    { icon: <ShieldCheck size={28} strokeWidth={1.2} />, title: "Professional", subtitle: "& Verified" },
    { icon: <UserCheck size={28} strokeWidth={1.2} />, title: "Permitted", subtitle: "Communication" },
    { icon: <Lock size={28} strokeWidth={1.2} />, title: "Confidential", subtitle: "& Secure" },
    { icon: <Clock size={28} strokeWidth={1.2} />, title: "Timely", subtitle: "Response" },
  ];

  return (
    <section className="relative bg-[#0d1b3e] pt-20 pb-32 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/contact/contact_page_banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/80 via-[#0d1b3e]/30 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-[#e5e9f0] font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Contact Us</span>
          </div>

          <h1 
            className="text-white text-[32px] md:text-[44px] font-black uppercase tracking-wider mb-4 leading-tight"
            style={{ fontFamily: "var(--font-roboto), sans-serif" }}
          >
            CONTACT US
          </h1>
          
          <p className="text-[#c9a84c] text-[15px] md:text-[18px] font-medium leading-relaxed mb-10 max-w-lg">
            We are here to assist you with professional inquiries, information and permitted communication.<br />
            Please use the appropriate channels below.
          </p>
          
          <div className="flex flex-wrap gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center relative">
                <div className="text-[#c9a84c] mb-3">
                  <div className="w-14 h-14 rounded-full border border-[#c9a84c] flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <span className="text-[12px] font-bold text-white leading-tight">
                  {feature.title}<br />{feature.subtitle}
                </span>
                
                {/* Vertical separator line between items, except the last one */}
                {idx !== features.length - 1 && (
                  <div className="absolute -right-5 top-2 bottom-6 w-[1px] bg-white/20 hidden md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

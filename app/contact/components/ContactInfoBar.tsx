import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfoBar() {
  const infoItems = [
    {
      icon: <Mail size={24} strokeWidth={1.5} />,
      title: "EMAIL",
      content: "tushargarg0681@gmail.com",
      subtext: "For professional inquiries and information.",
    },
    {
      icon: <Phone size={24} strokeWidth={1.5} />,
      title: "PHONE",
      content: "+91-7206810681",
      subtext: "Mon - Sat | 10:00 AM - 6:00 PM (IST)",
    },
    {
      icon: <MapPin size={24} strokeWidth={1.5} />,
      title: "ADDRESS",
      content: "Chamber No. 5, Supreme Court of India, New Delhi - 110001",
      subtext: "By prior appointment only.",
    },
    {
      icon: <Clock size={24} strokeWidth={1.5} />,
      title: "RESPONSE TIME",
      content: "We aim to respond to all genuine inquiries within 24-48 business hours.",
      subtext: "",
    },
  ];

  return (
    <section className="relative z-20 max-w-[1280px] mx-auto px-4 -mt-10 mb-12">
      <div className="bg-[#0d1b3e] rounded-xl border border-[#c9a84c]/30 shadow-2xl overflow-hidden p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {infoItems.map((item, idx) => (
            <div key={idx} className="flex gap-4 pt-6 md:pt-0 first:pt-0 md:px-6 first:px-0 relative group">
              <div className="text-[#c9a84c] flex-shrink-0 mt-1">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] font-bold text-white mb-2 leading-snug break-words">
                  {item.content}
                </p>
                {item.subtext && (
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    {item.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

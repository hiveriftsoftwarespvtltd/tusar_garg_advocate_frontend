import { ShieldCheck, UserCheck, Clock, Scale } from "lucide-react";

export default function ContactBanner() {
  const items = [
    {
      icon: <ShieldCheck size={36} strokeWidth={1.2} />,
      title: "Verified & Authentic",
      desc: "All contact details are official and verified.",
    },
    {
      icon: <UserCheck size={36} strokeWidth={1.2} />,
      title: "Confidential",
      desc: "We respect your privacy and protect your information.",
    },
    {
      icon: <Clock size={36} strokeWidth={1.2} />,
      title: "Professional Response",
      desc: "Timely and professional communication.",
    },
    {
      icon: <Scale size={36} strokeWidth={1.2} />,
      title: "For Professional Matters",
      desc: "Only genuine inquiries will receive a response.",
    },
  ];

  return (
    <section className="bg-[#0d1b3e] py-10 mx-4 md:mx-auto max-w-[1280px] rounded-xl mb-12 shadow-xl border border-white/5">
      <div className="px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 pt-6 md:pt-0 first:pt-0 md:pl-8 first:pl-0">
              <div className="w-12 h-12 rounded-full border-[1.5px] border-[#c9a84c] flex items-center justify-center text-[#c9a84c] flex-shrink-0">
                {item.icon}
              </div>
              <div className="pt-0.5">
                <h3 className="text-white text-[13px] font-semibold mb-1.5 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-white/70 text-[11px] leading-relaxed pr-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

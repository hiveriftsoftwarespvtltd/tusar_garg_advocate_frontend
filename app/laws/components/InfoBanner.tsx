import { CheckCircle, RefreshCcw, ShieldCheck, Search } from "lucide-react";

export default function InfoBanner() {
  const items = [
    {
      icon: <CheckCircle size={32} strokeWidth={1.5} />,
      title: "Authentic & Reliable",
      desc: "All laws are sourced from official government publications.",
    },
    {
      icon: <RefreshCcw size={32} strokeWidth={1.5} />,
      title: "Regularly Updated",
      desc: "We keep our legal database updated with the latest amendments.",
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "Trusted by Professionals",
      desc: "Used by advocates, corporates, students and legal researchers across India.",
    },
    {
      icon: <Search size={32} strokeWidth={1.5} />,
      title: "Easy to Research",
      desc: "Advanced search to find Acts, Sections and legal materials quickly.",
    },
  ];

  return (
    <section className="mx-4 md:mx-auto max-w-[1280px] mb-12">
      <div className="bg-[#0d1b3e] rounded-xl py-8 px-6 md:px-10 shadow-xl border border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-5 pt-6 md:pt-0 first:pt-0 md:px-8 first:pl-0 last:pr-0">
              {/* Golden Circle Icon */}
              <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#c9a84c] flex items-center justify-center text-[#c9a84c] flex-shrink-0">
                {item.icon}
              </div>
              
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-white text-[13px] md:text-[14px] font-semibold mb-1.5 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[#e2e8f0]/70 text-[11px] leading-relaxed">
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

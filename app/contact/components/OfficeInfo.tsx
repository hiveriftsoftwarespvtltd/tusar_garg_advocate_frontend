import { MapPin, Clock, Train, Phone, Mail } from "lucide-react";

export default function OfficeInfo() {
  const details = [
    {
      icon: <MapPin size={18} />,
      title: "Chamber No. 5,",
      desc: "Supreme Court of India,\nNew Delhi – 110001"
    },
    {
      icon: <Clock size={18} />,
      title: "Office Hours",
      desc: "Mon – Sat | 10:00 AM – 6:00 PM (IST)\n(By prior appointment only)"
    },
    {
      icon: <Train size={18} />,
      title: "Nearest Metro",
      desc: "Supreme Court Metro Station\n(Violet Line) – Gate No. 1"
    },
    {
      icon: <Phone size={18} />,
      title: "Phone",
      desc: "+91-7206810681"
    },
    {
      icon: <Mail size={18} />,
      title: "Email",
      desc: "tushargarg0681@gmail.com"
    }
  ];

  return (
    <section className="bg-white border border-[#e8ebf2] rounded-xl p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.05em] mb-3" style={{ fontFamily: "var(--font-merriweather), serif" }}>
          OUR OFFICE
        </h2>
        <div className="w-12 h-[2px] bg-[#c9a84c]"></div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Details Column */}
        <div className="lg:w-[45%] flex flex-col gap-6">
          {details.map((detail, idx) => (
            <div key={idx} className="flex gap-4 group">
              <div className="text-[#d48c36] mt-0.5 group-hover:scale-110 transition-transform">
                {detail.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#0d1b3e] mb-0.5">
                  {detail.title}
                </span>
                <span className="text-[12px] text-[#6b7280] leading-relaxed whitespace-pre-line">
                  {detail.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Map Column */}
        <div className="lg:w-[55%] min-h-[300px] rounded-lg overflow-hidden border border-[#e8ebf2] relative bg-[#f0f3f5]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
          
          {/* Map markers mock */}
          <div className="absolute top-[40%] left-[30%] flex flex-col items-center">
             <div className="bg-white px-3 py-1.5 rounded shadow-md text-center border border-[#e8ebf2] mb-2 relative">
               <span className="block text-[11px] font-bold text-[#0d1b3e] leading-tight">Supreme Court<br/>Metro Station</span>
               <span className="block text-[9px] text-[#6b7280]">Violet Line</span>
               <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#e8ebf2] rotate-45"></div>
             </div>
             <div className="w-3 h-3 rounded-full bg-purple-600 border-2 border-white shadow-sm"></div>
          </div>
          
          <div className="absolute top-[45%] right-[20%] flex flex-col items-center">
             <div className="bg-white pl-2 pr-4 py-2 flex items-center gap-3 rounded shadow-lg border border-[#e8ebf2] mb-2 relative">
               <div className="w-6 h-6 rounded-full bg-[#0d1b3e] flex items-center justify-center text-white">
                 <MapPin size={12} fill="currentColor" />
               </div>
               <div>
                 <span className="block text-[12px] font-bold text-[#0d1b3e] leading-tight">Supreme Court of India</span>
                 <span className="block text-[10px] text-[#6b7280]">New Delhi - 110001</span>
               </div>
               <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#e8ebf2] rotate-45"></div>
             </div>
             <div className="w-4 h-4 rounded-full bg-[#d48c36] border-2 border-white shadow-sm flex items-center justify-center">
               <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

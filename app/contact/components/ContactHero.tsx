import { ShieldCheck, UserCheck, Lock, Clock } from "lucide-react";

export default function ContactHero() {
  const features = [
    { icon: <ShieldCheck size={28} strokeWidth={1.2} />, title: "Professional", subtitle: "& Verified" },
    { icon: <UserCheck size={28} strokeWidth={1.2} />, title: "Permitted", subtitle: "Communication" },
    { icon: <Lock size={28} strokeWidth={1.2} />, title: "Confidential", subtitle: "& Secure" },
    { icon: <Clock size={28} strokeWidth={1.2} />, title: "Timely", subtitle: "Response" },
  ];

  return (
    <section className="relative bg-[#0d1b3e] pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e] via-[#0d1b3e] to-transparent z-10 w-2/3"></div>
      <div className="absolute top-0 right-0 bottom-0 w-1/2 opacity-40 mix-blend-luminosity">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 
            className="text-[48px] md:text-[56px] lg:text-[72px] font-bold text-white leading-none mb-6 tracking-wide drop-shadow-md uppercase"
            style={{ fontFamily: "var(--font-merriweather), serif" }}
          >
            CONTACT US
          </h1>
          
          <p className="text-[15px] md:text-[17px] text-white/90 leading-relaxed mb-10 max-w-lg font-medium">
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

import Image from "next/image";
import { MapPin, Landmark, Scale, Shield, Gavel, FileText, ShieldCheck, Network, Building2 } from "lucide-react";

export default function PunjabHaryanaCourtsGrid() {
  const courts = [
    {
      id: "01",
      name: "Punjab & Haryana High Court",
      location: "Chandigarh",
      Icon: Landmark,
      image: "/home/featured_court.jpg", 
    },
    {
      id: "02",
      name: "Chandigarh District Court",
      location: "Chandigarh",
      Icon: Scale,
      image: "/home/featured_court.jpg",
    },
    {
      id: "03",
      name: "Mohali District Court",
      location: "Mohali, Punjab",
      Icon: Gavel,
      image: "/home/featured_court.jpg",
    },
    {
      id: "04",
      name: "Amritsar District Court",
      location: "Amritsar, Punjab",
      Icon: FileText,
      image: "/home/featured_court.jpg",
    },
    {
      id: "05",
      name: "Ludhiana District Court",
      location: "Ludhiana, Punjab",
      Icon: ShieldCheck,
      image: "/home/featured_court.jpg",
    }
  ];

  return (
    <section className="py-16 bg-[#fcfcfc]">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Stats Bar */}
        <div className="bg-white border border-[#f0f0f0] rounded-xl shadow-sm mb-16 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#e5e7eb]">
          
          <div className="flex items-center gap-4 px-6 w-full md:w-1/4 justify-center md:justify-start">
            <Landmark size={36} className="text-[#c9a84c] flex-shrink-0" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[22px] font-bold text-[#0d1b3e] leading-none">5+</span>
              <span className="text-[13px] font-bold text-[#4b5563]">Court Complexes</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-6 w-full md:w-1/4 justify-center md:justify-start pt-6 md:pt-0">
            <MapPin size={36} className="text-[#c9a84c] flex-shrink-0" strokeWidth={1.5} />
            <div className="flex flex-col text-[13px] font-bold text-[#4b5563] leading-tight">
              <span>Across Punjab</span>
              <span>& Chandigarh</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-6 w-full md:w-1/4 justify-center md:justify-start pt-6 md:pt-0">
            <Scale size={36} className="text-[#c9a84c] flex-shrink-0" strokeWidth={1.5} />
            <div className="flex flex-col text-[13px] font-bold text-[#4b5563] leading-tight">
              <span>Civil • Criminal •</span>
              <span>Family • Commercial</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-6 w-full md:w-1/4 justify-center md:justify-start pt-6 md:pt-0">
            <Shield size={36} className="text-[#c9a84c] flex-shrink-0" strokeWidth={1.5} />
            <div className="flex flex-col text-[13px] font-bold text-[#4b5563] leading-tight">
              <span>Strategic</span>
              <span>Representation</span>
            </div>
          </div>
          
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-[22px] md:text-[28px] font-serif font-bold text-[#0d1b3e] mb-3 uppercase tracking-wider">
            LIST OF PUNJAB & HARYANA COURTS
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a84c]"></div>
        </div>

        {/* Grid Container */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-x-5 md:gap-y-10">
          {courts.map((court) => (
            <div 
              key={court.id} 
              className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-14px)] lg:w-[calc(25%-15px)] bg-white border border-[#f0f0f0] rounded-xl flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative w-full h-[160px] rounded-t-xl overflow-hidden bg-[#e5e7eb]">
                <Image 
                  src={court.image} 
                  alt={court.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute top-3 left-3 w-[34px] h-[34px] rounded-full bg-[#0d1b3e] flex items-center justify-center text-[#c9a84c] text-[13px] font-bold shadow-md">
                  {court.id}
                </div>
              </div>

              <div className="relative -mt-7 mb-3 z-10 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-full bg-[#0d1b3e] flex items-center justify-center border-[4px] border-white shadow-sm">
                  <court.Icon size={20} className="text-[#c9a84c]" strokeWidth={1.5} />
                </div>
              </div>

              <div className="px-4 pb-7 flex-1 flex flex-col justify-center">
                <h3 className="text-[17px] font-serif font-bold text-[#0d1b3e] mb-2.5">
                  {court.name}
                </h3>
                <div className="flex items-center justify-center gap-1.5 text-[13px] text-[#6b7280] font-medium">
                  <MapPin size={14} className="text-[#c9a84c]" strokeWidth={2.5} />
                  {court.location}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

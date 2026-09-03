import { Landmark, Scale, Handshake, Users, CircleDollarSign, Briefcase, FileSignature, HardHat, Fingerprint, Leaf } from "lucide-react";

export default function BrowseBySubject() {
  const subjects = [
    { name: "Constitutional Law", icon: <Landmark size={32} strokeWidth={1.2} /> },
    { name: "Criminal Law", icon: <Fingerprint size={32} strokeWidth={1.2} /> },
    { name: "Civil Law", icon: <Scale size={32} strokeWidth={1.2} /> },
    { name: "Corporate Law", icon: <Briefcase size={32} strokeWidth={1.2} /> },
    { name: "Family Law", icon: <Users size={32} strokeWidth={1.2} /> },
    { name: "Tax Law", icon: <CircleDollarSign size={32} strokeWidth={1.2} /> },
    { name: "Arbitration", icon: <Handshake size={32} strokeWidth={1.2} /> },
    { name: "Labour Law", icon: <HardHat size={32} strokeWidth={1.2} /> },
    { name: "IPR", icon: <FileSignature size={32} strokeWidth={1.2} /> },
    { name: "Environment", icon: <Leaf size={32} strokeWidth={1.2} /> },
  ];

  return (
    <section className="py-12 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Heading */}
        <div className="flex flex-col items-start mb-8">
          <h2 className="font-serif text-[14px] md:text-[16px] text-[#0d1b3e] uppercase tracking-[0.1em] mb-2">
            BROWSE JUDGMENTS BY SUBJECT
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c]"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 md:gap-4 w-full">
          {subjects.map((subject, idx) => (
            <div key={idx} className="bg-white border border-[#c9a84c]/20 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#c9a84c] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              
              <div className="text-[#c9a84c] mb-3 group-hover:scale-110 transition-transform duration-300">
                {subject.icon}
              </div>
              
              <h3 className="text-[11px] font-semibold text-[#374151] group-hover:text-[#0d1b3e] transition-colors h-[28px] flex items-center justify-center">
                {subject.name}
              </h3>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-[#0d1b3e] text-white px-8 py-3 rounded-md font-bold text-[12px] uppercase tracking-wider hover:bg-[#1a2b5a] hover:shadow-lg transition-all">
            VIEW ALL JUDGMENTS
          </button>
        </div>

      </div>
    </section>
  );
}

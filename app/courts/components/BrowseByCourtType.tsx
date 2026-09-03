import { Scale, Landmark, Building2, Gavel } from "lucide-react";

export default function BrowseByCourtType() {
  const courtTypes = [
    {
      title: "Supreme Court",
      description: "Highest court of appeal in India.",
      icon: (
        <Landmark size={48} color="#c9a84c" strokeWidth={1.5} />
      )
    },
    {
      title: "High Courts",
      description: "Constitutional courts for each state and union territory.",
      icon: (
        <Scale size={48} color="#0d1b3e" strokeWidth={1.5} />
      )
    },
    {
      title: "District Courts",
      description: "Trial courts handling civil and criminal matters.",
      icon: (
        <Building2 size={48} color="#0d1b3e" strokeWidth={1.5} />
      )
    },
    {
      title: "Tribunals",
      description: "Specialized forums for quasi-judicial matters.",
      icon: (
        <Gavel size={48} color="#0d1b3e" strokeWidth={1.5} />
      )
    }
  ];
 
  return (
    <section className="py-6 bg-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="flex flex-col items-center mb-10">
          <h2 className="font-serif text-[20px] text-[#0d1b3e] uppercase tracking-[0.1em]">
            BROWSE BY COURT TYPE
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c] mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courtTypes.map((court, idx) => (
            <div key={idx} className="bg-white border border-[#e8ebf2] rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {court.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-[#0d1b3e] uppercase tracking-wider mb-3">
                {court.title}
              </h3>
              <p className="text-[13px] text-[#6b7280] leading-relaxed">
                {court.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

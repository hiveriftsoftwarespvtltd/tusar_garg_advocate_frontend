import { FolderSearch, Gavel, FileText, CalendarDays, Users, BookOpen } from "lucide-react";

export default function CourtResources() {
  const resources = [
    {
      title: "Case Status",
      icon: <FolderSearch size={36} strokeWidth={1.5} />
    },
    {
      title: "Judgments",
      icon: <Gavel size={36} strokeWidth={1.5} />
    },
    {
      title: "Orders",
      icon: <FileText size={36} strokeWidth={1.5} />
    },
    {
      title: "Cause List",
      icon: <CalendarDays size={36} strokeWidth={1.5} />
    },
    {
      title: "Recruitment",
      icon: <Users size={36} strokeWidth={1.5} />
    },
    {
      title: "Rules",
      icon: <BookOpen size={36} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-8 bg-[#fafafa] border-t border-[#e8ebf2]">
      <div className="max-w-[1280px] mx-auto px-4">

        <div className="flex flex-col items-center mb-10">
          <h2 className="font-serif text-[20px] text-[#0d1b3e] uppercase tracking-[0.1em]">
            COURT RESOURCES
          </h2>
          <div className="w-12 h-[3px] bg-[#c9a84c] mt-2" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {resources.map((res, idx) => (
            <div key={idx} className="bg-white border border-[#e8ebf2] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="text-[#0d1b3e] mb-4 group-hover:text-[#c9a84c] group-hover:scale-110 transition-all duration-300">
                {res.icon}
              </div>
              <h3 className="text-[13px] font-semibold text-[#374151] group-hover:text-[#c9a84c] transition-colors">
                {res.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

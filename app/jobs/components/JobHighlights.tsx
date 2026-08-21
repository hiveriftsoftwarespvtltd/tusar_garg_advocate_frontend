import { Building2, GraduationCap, Clock, User, IndianRupee, FileText, Link, CheckCircle2, Landmark, Scale, UserCheck, Users, Briefcase, UserPlus, Search } from "lucide-react";

export default function JobHighlights() {
  const highlights = [
    { icon: <Building2 size={32} strokeWidth={1.5} />, title: "Organization", desc: "Department & Employer Details" },
    { icon: <GraduationCap size={32} strokeWidth={1.5} />, title: "Qualification", desc: "Required Degree & Specialization" },
    { icon: <Clock size={32} strokeWidth={1.5} />, title: "Experience", desc: "Minimum Years & Preferred Skills" },
    { icon: <User size={32} strokeWidth={1.5} />, title: "Age Limit", desc: "Minimum & Maximum Age Criteria" },
    { icon: <IndianRupee size={32} strokeWidth={1.5} />, title: "Salary / Pay", desc: "Pay Scale, Allowances & Benefits" },
    { icon: <FileText size={32} strokeWidth={1.5} />, title: "Official Notification", desc: "Download Official Advertisement" },
    { icon: <Link size={32} strokeWidth={1.5} />, title: "Application Link", desc: "Apply Online Through Portal" },
    { icon: <CheckCircle2 size={32} strokeWidth={1.5} />, title: "Last Verified Date", desc: "Latest Verification from Official Source" },
  ];

  const roles = [
    { name: "Civil Judge / Judicial Services", icon: <Landmark size={28} strokeWidth={1.5} /> },
    { name: "District Judge / Higher Judicial Service", icon: <Scale size={28} strokeWidth={1.5} /> },
    { name: "Law Officer", icon: <UserCheck size={28} strokeWidth={1.5} /> },
    { name: "Legal Advisor", icon: <Users size={28} strokeWidth={1.5} /> },
    { name: "Assistant Legal Advisor", icon: <Briefcase size={28} strokeWidth={1.5} /> },
    { name: "Public Prosecutor / APP", icon: <UserPlus size={28} strokeWidth={1.5} /> },
    { name: "Law Clerk", icon: <FileText size={28} strokeWidth={1.5} /> },
    { name: "Research Assistant", icon: <Search size={28} strokeWidth={1.5} /> },
  ];

  return (
    <section className="py-12 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Job Detail Highlights Heading */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex items-center">
            <div className="w-8 md:w-16 h-[1px] bg-[#c9a84c]"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
          </div>
          <h2 className="text-[14px] md:text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em] text-center" style={{ fontFamily: "var(--font-merriweather), serif" }}>
            JOB DETAIL HIGHLIGHTS
          </h2>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
            <div className="w-8 md:w-16 h-[1px] bg-[#c9a84c]"></div>
          </div>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white border border-[#e8ebf2] rounded-xl p-5 md:p-6 flex items-center gap-5 hover:shadow-md hover:border-[#c9a84c]/40 transition-all cursor-pointer group">
              <div className="text-[#0d1b3e] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-[13.5px] font-bold text-[#0d1b3e] mb-1 group-hover:text-[#c9a84c] transition-colors">{item.title}</h3>
                <p className="text-[11.5px] text-[#6b7280] leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Browse By Role Type Heading */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex items-center">
            <div className="w-8 md:w-16 h-[1px] bg-[#c9a84c]"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
          </div>
          <h2 className="text-[14px] md:text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.1em] text-center" style={{ fontFamily: "var(--font-merriweather), serif" }}>
            BROWSE BY ROLE TYPE
          </h2>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]"></div>
            <div className="w-8 md:w-16 h-[1px] bg-[#c9a84c]"></div>
          </div>
        </div>

        {/* Roles Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {roles.map((role, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white border border-[#c9a84c]/30 rounded-xl p-5 md:p-6 cursor-pointer hover:border-[#c9a84c] hover:shadow-md transition-all group">
              <div className="text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors flex-shrink-0">
                {role.icon}
              </div>
              <div className="text-[13px] font-bold text-[#374151] group-hover:text-[#0d1b3e] transition-colors leading-tight whitespace-pre-line">
                {role.name.replace(" / ", " /\n")}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

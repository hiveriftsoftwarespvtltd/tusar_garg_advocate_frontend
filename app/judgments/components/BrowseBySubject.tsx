import Link from "next/link";
import { 
  ArrowRight, 
  Landmark, 
  ShieldAlert, 
  Briefcase, 
  Building2, 
  Users, 
  Coins, 
  Handshake, 
  HardHat, 
  Lightbulb, 
  Leaf 
} from "lucide-react";

export default function BrowseBySubject() {
  const subjects = [
    { 
      name: "Constitutional Law", 
      icon: <Landmark size={20} className="text-[#c9a84c]" strokeWidth={2} />,
      image: "/judgements/subjects/constitutional.jpg",
      href: "/laws/constitutional-law"
    },
    { 
      name: "Criminal Law", 
      icon: <ShieldAlert size={20} className="text-[#c9a84c]" strokeWidth={2} />,
      image: "/judgements/subjects/criminal.jpg",
      href: "/laws/criminal-law"
    },
    { 
      name: "Civil Law", 
      icon: <Briefcase size={20} className="text-[#c9a84c]" strokeWidth={2} />,
      image: "/judgements/subjects/civil.jpg",
      href: "/laws/civil-law"
    },
    { 
      name: "Corporate Law", 
      icon: <Building2 size={20} className="text-[#c9a84c]" strokeWidth={2} />,
      image: "/judgements/subjects/corporate.jpg",
      href: "/laws/corporate-law"
    },
    { 
      name: "Family Law", 
      icon: <Users size={20} className="text-[#c9a84c]" strokeWidth={2} />,
      image: "/judgements/subjects/family.jpg",
      href: "/laws/family-law"
    },
    { 
      name: "Tax Law", 
      icon: <Coins size={20} className="text-[#c9a84c]" strokeWidth={2} />,
      image: "/judgements/subjects/tax.jpg",
      href: "/laws/tax-law"
    },
    { 
      name: "Arbitration", 
      icon: <Handshake size={20} className="text-[#c9a84c]" strokeWidth={2} />,
      image: "/judgements/subjects/arbitration.jpg",
      href: "/laws/arbitration-law"
    },
    { 
      name: "Labour Law", 
      icon: <HardHat size={20} className="text-[#c9a84c]" strokeWidth={2} />,
      image: "/judgements/subjects/labour.jpg",
      href: "/laws/labour-law"
    },
    { 
      name: "IPR", 
      icon: <Lightbulb size={20} className="text-[#c9a84c]" strokeWidth={2} />,
      image: "/judgements/subjects/ipr.jpg",
      href: "/laws/ipr-law"
    },
    { 
      name: "Environment", 
      icon: <Leaf size={20} className="text-[#c9a84c]" strokeWidth={2} />,
      image: "/judgements/subjects/environment.jpg",
      href: "/laws/environment-law"
    },
  ];

  return (
    <section className="py-10 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Section Header: Left title with gold dash, Right View All Subjects link */}
        <div className="flex items-center justify-between gap-4 mb-7">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-[2.5px] bg-[#c9a84c] rounded-full inline-block" />
            <h2 className="font-serif text-[15px] sm:text-[16px] font-bold text-[#0d1b3e] uppercase tracking-[0.12em]">
              BROWSE JUDGMENTS BY SUBJECT
            </h2>
          </div>
          
          <Link
            href="/laws"
            className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-bold text-[#0d1b3e] hover:text-[#c9a84c] transition-colors group"
          >
            <span>View All Subjects</span>
            <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform text-[#c9a84c]" />
          </Link>
        </div>

        {/* 10-Card Responsive Grid (2 rows of 5 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 lg:gap-4">
          {subjects.map((subject, idx) => (
            <Link
              key={idx}
              href={subject.href}
              className="bg-white border border-[#eae5d9] rounded-2xl overflow-hidden relative shadow-2xs hover:shadow-lg hover:border-[#c9a84c]/60 hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center justify-between h-[82px] sm:h-[86px]"
            >
              {/* Left Content: Golden icon and subject title */}
              <div className="p-3 sm:p-3.5 z-10 flex flex-col justify-between h-full min-w-0 max-w-[58%]">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {subject.icon}
                </div>
                
                <h3 className="text-[12px] sm:text-[12.5px] font-bold text-[#0d1b3e] group-hover:text-[#c9a84c] transition-colors leading-tight truncate">
                  {subject.name}
                </h3>
              </div>

              {/* Right Artwork: Image with gentle fade into the card */}
              <div className="absolute right-0 top-0 bottom-0 w-[50%] overflow-hidden pointer-events-none">
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
              </div>

              {/* Bottom Right Golden Circular Arrow Button */}
              <div className="absolute bottom-2.5 right-2.5 z-20 w-6 h-6 rounded-full border border-[#c9a84c] bg-white/90 text-[#c9a84c] flex items-center justify-center group-hover:bg-[#c9a84c] group-hover:text-white transition-all duration-300 shadow-2xs backdrop-blur-2xs">
                <ArrowRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

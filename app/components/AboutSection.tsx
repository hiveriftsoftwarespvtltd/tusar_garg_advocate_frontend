import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Credential icons as thin SVGs matching reference style
const credentials = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-[#c9a84c]">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Advocate-on-Record",
    subtitle: "Supreme Court of India",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-[#c9a84c]">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Extensive Legal Practice",
    subtitle: "Across India",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-[#c9a84c]">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Areas of Practice",
    subtitle: "Constitutional, Civil, Criminal, Corporate & More",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-[#c9a84c]">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Publications & Articles",
    subtitle: "Legal papers & thought leadership",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#0d1b3e] py-12">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Portrait */}
          <div className="flex-shrink-0 md:w-[190px]">
            <div className="relative w-[160px] md:w-[190px] aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/home/tusar_garg_photo.jpeg"
                alt="Tushar Garg"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 min-w-0">
            <p className="text-[#c9a84c] text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
              ABOUT
            </p>
            <h2
              className="text-[26px] md:text-[30px] font-black text-white uppercase leading-tight mb-4 tracking-wide"
              style={{ fontFamily: "var(--font-roboto), sans-serif" }}
            >
              TUSHAR GARG
            </h2>
            <p className="text-white/60 text-[12.5px] mb-1.5">
              Advocate-on-Record, Supreme Court of India
            </p>
            <p className="text-white/55 text-[13px] leading-relaxed mb-6 max-w-[440px]">
              Practicing in the Supreme Court of India and various High Courts and tribunals across India.
              Committed to legal excellence, research and contributing to the legal profession.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 border border-[#c9a84c]/60 text-[#c9a84c] text-[10.5px] font-bold px-5 py-2.5 uppercase tracking-[0.15em] rounded-md transition-all duration-300 hover:bg-[#c9a84c] hover:text-[#0d1b3e] hover:border-[#c9a84c] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c9a84c]/25 active:scale-[0.97]"
            >
              KNOW MORE ABOUT TUSHAR GARG <ArrowRight size={12} strokeWidth={2.5} />
            </a>
          </div>

          {/* Credentials */}
          <div className="flex-shrink-0 md:w-[280px] flex flex-col gap-5">
            {credentials.map((c) => (
              <div key={c.title} className="flex items-start gap-3">
                {/* Bordered icon box */}
                <div className="w-9 h-9 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/5">
                  {c.icon}
                </div>
                <div>
                  <p className="text-white text-[13px] font-bold leading-snug">{c.title}</p>
                  <p className="text-white/50 text-[11.5px] leading-snug mt-0.5">{c.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

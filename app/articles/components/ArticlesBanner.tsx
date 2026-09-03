import { ShieldCheck, Scale, FileText, Lightbulb } from "lucide-react";

export default function ArticlesBanner() {
  const items = [
    {
      icon: <ShieldCheck size={36} strokeWidth={1.2} />,
      title: "Authoritative & Verified",
      desc: "All articles are legally researched and fact-checked from reliable sources.",
    },
    {
      icon: <Scale size={36} strokeWidth={1.2} />,
      title: "Expert Perspectives",
      desc: "Insights from experienced advocates, legal researchers and subject experts.",
    },
    {
      icon: <FileText size={36} strokeWidth={1.2} />,
      title: "Well Researched",
      desc: "In-depth legal analysis with citations, references and official sources.",
    },
    {
      icon: <Lightbulb size={36} strokeWidth={1.2} />,
      title: "For Students & Professionals",
      desc: "Useful content for law students, advocates, researchers and legal professionals.",
    },
  ];

  return (
    <section className="bg-[#0d1b3e] py-10 mx-4 md:mx-auto max-w-[1280px] rounded-xl mb-12 shadow-xl border border-white/5">
      <div className="px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 pt-6 md:pt-0 first:pt-0 md:pl-8 first:pl-0">
              <div className="text-[#c9a84c] flex-shrink-0 mt-1">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white text-[13px] font-semibold mb-1.5 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-white/70 text-[11.5px] leading-relaxed pr-2">
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

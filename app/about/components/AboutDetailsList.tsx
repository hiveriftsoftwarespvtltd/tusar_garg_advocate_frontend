import { Landmark, Users, FileText, Scale, UserCircle, MessageSquare, Shield, Star, CheckCircle2 } from "lucide-react";

export default function AboutDetailsList() {
  const details = [
    {
      icon: <Landmark size={28} color="#c9a84c" strokeWidth={1.5} />,
      title: "Advocate-on-Record, Supreme Court of India",
      description: "Advocate Tushar Garg is an Advocate-on-Record (AOR) of the Supreme Court of India, with experience in handling proceedings and assisting clients in matters before the country's highest court.",
      subDescription: "Practising before the Supreme Court requires a strong understanding of the law as well as the Court's procedures, filing requirements, precedents, and evolving judicial approach. Over the years, he has worked on matters requiring detailed legal research, careful drafting, procedural diligence, and focused representation.",
      boldText: "His experience includes dealing",
      tailText: " with constitutional, civil, criminal, and matrimonial matters, along with other litigation and advisory issues that require representation before higher judicial forums."
    },
    {
      icon: <Users size={28} color="#c9a84c" strokeWidth={1.5} />,
      title: "More Than Just a Case",
      description: "A legal matter often begins with a simple question: \"What should I do now?\" Finding the right answer is not always straightforward. There may be several possible legal remedies, different procedural requirements, conflicting precedents, or facts that need to be examined carefully before deciding the next step. In such situations, good legal advice begins with listening.",
      subDescription: "Advocate Tushar Garg believes that understanding a client's concerns is an important part of understanding the case itself. Before developing a legal strategy, attention is given to the facts, documents, previous proceedings, objectives, and the practical concerns involved.",
      tailText: "The aim is to make the legal position clearer and easier to understand, so that clients can make informed decisions about their matters."
    },
    {
      icon: <FileText size={28} color="#c9a84c" strokeWidth={1.5} />,
      title: "A Practice Built on Preparation",
      description: "Strong advocacy does not begin when a lawyer stands before the court. It begins much earlier — with understanding the facts, reading the documents, researching the law, studying relevant judgments, identifying the important legal questions, and preparing for the possible arguments on both sides.",
      subDescription: "Every matter is therefore approached with detailed preparation. The process may involve reviewing the complete history of a dispute, examining the applicable statutory provisions, studying relevant Supreme Court and High Court judgments, preparing pleadings and applications, and identifying the most appropriate legal course.",
      tailText: "This preparation helps ensure that when the matter reaches the courtroom, the arguments are focused, legally sound, and supported by the relevant facts and law."
    },
    {
      icon: <Scale size={28} color="#c9a84c" strokeWidth={1.5} />,
      title: "Experience Across Different Areas of Law",
      description: "Over more than 10 years of practice, Advocate Tushar Garg has worked across different areas of litigation and legal advisory.",
      isGrid: true
    },
    {
      icon: <UserCircle size={28} color="#c9a84c" strokeWidth={1.5} />,
      title: "Understanding Before Advising",
      description: "Every case is different. Two matters may appear similar but may have completely different outcomes because of a single document, a procedural development, a limitation issue, or a difference in facts. Therefore, the first step is always to understand the matter properly — asking the right questions, reviewing material, identifying what is legally relevant, and separating the important issues from those that may not materially affect the case."
    },
    {
      icon: <MessageSquare size={28} color="#c9a84c" strokeWidth={1.5} />,
      title: "Clear Advice, Honest Assessment",
      description: "Legal advice should reflect the real strengths and challenges of a case. Clients deserve to understand both sides of their legal position.",
      subDescription: "Where the position is strong, it is supported with appropriate reasoning and authority. Where there are limitations, risks, or uncertainties, those are explained clearly to help clients make informed and realistic decisions."
    },
    {
      icon: <Users size={28} color="#c9a84c" strokeWidth={1.5} />,
      title: "From the First Consultation to the Courtroom",
      description: "A client's interaction with legal counsel involves understanding the dispute, discussing options, reviewing documents, deciding on the appropriate legal course, preparing the case, responding to developments, and understanding each stage of the proceedings. The focus remains on clarity, preparation, and committed guidance throughout the process."
    },
    {
      icon: <Landmark size={28} color="#c9a84c" strokeWidth={1.5} />,
      title: "Experience That Spans Judicial Forums",
      description: "Having worked across different levels of the Indian judicial system, Advocate Tushar Garg understands how litigation can develop from subordinate courts to High Courts and, where appropriate, to the Supreme Court. This broader perspective is valuable in appellate and complex litigation where procedural and legal history play a crucial role."
    },
    {
      icon: <Star size={28} color="#c9a84c" strokeWidth={1.5} />,
      title: "A Personal Commitment to Every Matter",
      description: "More than 10 years of practice have provided experience with different kinds of disputes, but every new client brings a different set of circumstances. The responsibility is not simply to argue a case, but to prepare it carefully, understand the client's concerns, identify the legal issues and represent the matter with professionalism and commitment."
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Main List */}
        <div className="flex flex-col bg-white rounded-lg shadow-sm border border-gray-100 divide-y divide-gray-200">
          {details.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
              {/* Icon Box */}
              <div className="flex-shrink-0">
                <div className="w-[80px] h-[80px] bg-[#0d1b3e] rounded-xl flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
              </div>
              
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold text-[#0d1b3e] mb-2">{item.title}</h3>
                
                <p className="text-[14px] text-[#4b5563] font-medium leading-relaxed mb-2">
                  {item.description}
                </p>
                
                {item.subDescription && (
                  <p className="text-[14px] text-[#4b5563] font-medium leading-relaxed mb-2">
                    {item.subDescription}
                  </p>
                )}
                
                {(item.boldText || item.tailText) && (
                  <p className="text-[14px] text-[#4b5563] font-medium leading-relaxed">
                    {item.boldText && <span className="font-bold">{item.boldText}</span>}
                    {item.tailText}
                  </p>
                )}

                {/* Sub-grid for Practice Areas */}
                {item.isGrid && (
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0 mt-6 border-t border-gray-100 pt-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                    <div className="pt-4 lg:pt-0 lg:pr-6">
                      <h4 className="font-semibold text-[#0d1b3e] text-[13px] mb-2">Constitutional & Public Law</h4>
                      <p className="text-[12px] text-[#4b5563] font-medium leading-relaxed">Matters involving fundamental rights, constitutional interpretation, statutory validity and governmental action require careful legal examination and understanding of judicial precedents.</p>
                    </div>
                    <div className="pt-4 lg:pt-0 lg:px-6">
                      <h4 className="font-semibold text-[#0d1b3e] text-[13px] mb-2">Civil Litigation</h4>
                      <p className="text-[12px] text-[#4b5563] font-medium leading-relaxed">Disputes relating to property, contracts, commercial relationships, recovery, injunctions and other civil matters are handled with a focus on facts, evidence and legal rights.</p>
                    </div>
                    <div className="pt-4 lg:pt-0 lg:px-6">
                      <h4 className="font-semibold text-[#0d1b3e] text-[13px] mb-2">Criminal Matters</h4>
                      <p className="text-[12px] text-[#4b5563] font-medium leading-relaxed">Criminal proceedings require careful attention to facts, evidence, procedure and statutory provisions. The focus is on protecting legal rights and ensuring fair procedure.</p>
                    </div>
                    <div className="pt-4 lg:pt-0 lg:pl-6">
                      <h4 className="font-semibold text-[#0d1b3e] text-[13px] mb-2">Matrimonial & Family Matters</h4>
                      <p className="text-[12px] text-[#4b5563] font-medium leading-relaxed">Family disputes are emotionally challenging and require sensitivity, clarity and practical legal advice concerning divorce, maintenance, custody, matrimonial rights and related issues.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Summary Box Attached */}
          <div className="p-4 md:p-6 !border-t-0">
            <div className="px-6 py-8 md:px-10 md:py-8 text-center border border-gray-200 rounded-xl bg-white shadow-sm">
              <p className="font-bold text-[#0d1b3e] text-[14px] md:text-[15px] mb-6 italic">
                For Advocate Tushar Garg, effective advocacy is ultimately about bringing together three things:
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={22} color="#c9a84c" strokeWidth={1.5} />
                  <span className="font-bold text-[#0d1b3e] text-[14px] md:text-[15px]">Understanding the person.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={22} color="#c9a84c" strokeWidth={1.5} />
                  <span className="font-bold text-[#0d1b3e] text-[14px] md:text-[15px]">Understanding the law.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={22} color="#c9a84c" strokeWidth={1.5} />
                  <span className="font-bold text-[#0d1b3e] text-[14px] md:text-[15px]">Understanding the strategy.</span>
                </div>
              </div>
              
              <p className="text-[13px] md:text-[14px] text-[#4b5563] font-medium max-w-[850px] mx-auto leading-relaxed">
                When these come together, legal representation becomes more than a courtroom appearance — it becomes a structured effort to help a client navigate a difficult situation with greater clarity and confidence.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  RotateCcw,
  ShieldCheck,
  Scale,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { WebsiteSettings, defaultWebsiteSettings, getWebsiteSettings } from "../../lib/api/settings";
import { fetchApi } from "../../lib/api/client";

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
  isConsultationForm?: boolean;
}

export default function AiChatbot() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<WebsiteSettings>(defaultWebsiteSettings);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Lead form state inside chat
  const [leadForm, setLeadForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load website settings
  useEffect(() => {
    getWebsiteSettings().then((s) => {
      if (s) {
        setSettings(s);
        // Initialize welcome message
        const welcomeText =
          s.chatbotWelcomeMessage ||
          "Namaste! Welcome to the Chambers of Advocate Tushar Garg, Advocate-on-Record at the Supreme Court of India. How can I assist you with Supreme Court filings, legal procedures, bare acts, or scheduling a consultation?";
        setMessages([
          {
            id: "welcome-1",
            role: "model",
            text: welcomeText,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      }
    });
  }, []);

  // Auto-scroll on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Do not render on admin dashboard or if chatbot is disabled
  if (isAdmin || settings.chatbotEnabled === false) {
    return null;
  }

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isTyping) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // If query asks for consultation/appointment, offer the inline lead form
    const lower = query.toLowerCase();
    const isConsultationIntent =
      lower.includes("consultation") ||
      lower.includes("appointment") ||
      lower.includes("book") ||
      lower.includes("meet") ||
      lower.includes("hire") ||
      lower.includes("call me");

    try {
      // Build conversation history (excluding initial greeting)
      const history = messages
        .filter((m) => m.id !== "welcome-1")
        .map((m) => ({
          role: m.role,
          text: m.text,
        }));

      const res = await fetchApi("/chat", {
        method: "POST",
        body: JSON.stringify({
          message: query,
          history: history,
        }),
      });

      const replyText = res?.reply || "Thank you for reaching out. Please connect with Advocate Tushar Garg at +91-7206810681 for immediate legal assistance.";

      setMessages((prev) => [
        ...prev,
        {
          id: `model-${Date.now()}`,
          role: "model",
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isConsultationForm: isConsultationIntent,
        },
      ]);
    } catch (err) {
      console.error("Chatbot request failed:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: `model-${Date.now()}`,
          role: "model",
          text: "I am temporarily experiencing connection issues, but you can reach the Chambers of Advocate Tushar Garg directly at **+91-7206810681** or via WhatsApp.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    const welcomeText =
      settings.chatbotWelcomeMessage ||
      "Namaste! Welcome to the Chambers of Advocate Tushar Garg, Advocate-on-Record at the Supreme Court of India. How can I assist you with Supreme Court filings, legal procedures, bare acts, or scheduling a consultation?";
    setMessages([
      {
        id: "welcome-1",
        role: "model",
        text: welcomeText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.phone.trim()) return;

    setLeadSubmitting(true);
    try {
      await fetchApi("/chat/lead", {
        method: "POST",
        body: JSON.stringify({
          name: leadForm.name || "Website Visitor",
          phone: leadForm.phone,
          email: leadForm.email || "",
          message: leadForm.message || "Consultation requested through AI Legal Assistant.",
          subject: "AI Chatbot Consultation Request",
        }),
      });
      setLeadSubmitted(true);
    } catch (err) {
      console.error("Failed to submit lead:", err);
    } finally {
      setLeadSubmitting(false);
    }
  };

  // Quick Action Pills
  const suggestionPills = [
    { label: "⚖️ Supreme Court SLP Procedure", query: "What are the rules and procedure for filing an SLP under Article 136 in the Supreme Court?" },
    { label: "📜 New Criminal Laws (BNS/BNSS)", query: "Explain the key changes in the New Criminal Laws (BNS and BNSS 2023)." },
    { label: "🏛️ Find Court & Case Status", query: "How do I check my case status in High Court or District Courts?" },
    { label: "📞 Schedule Legal Consultation", query: "I would like to schedule a consultation with Advocate Tushar Garg." },
  ];

  return (
    <>
      {/* ==================== 1. FLOATING ACTION TRIGGER ==================== */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end pointer-events-auto">
        {!isOpen && (
          <button
            onClick={() => {
              setIsOpen(true);
              setUnreadCount(0);
            }}
            aria-label="Open AI Legal Assistant"
            className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#0d1b3e] to-[#1a2f66] text-white shadow-[0_10px_30px_rgba(13,27,62,0.45)] hover:shadow-[0_15px_35px_rgba(201,168,76,0.35)] border-2 border-[#c9a84c] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {/* Pulsing Aura */}
            <span className="absolute -inset-0.5 rounded-full bg-[#c9a84c] opacity-30 animate-pulse pointer-events-none" />

            {/* Logo Avatar Icon */}
            <div className="relative w-8 h-8 rounded-full bg-white/10 p-1 flex items-center justify-center border border-[#c9a84c]/50 overflow-hidden flex-shrink-0">
              <img
                src={settings.chatbotLogoUrl || "/TusharLogo.png"}
                alt="Logo"
                className="w-full h-full object-contain"
                onError={(e: any) => {
                  e.target.style.display = "none";
                }}
              />
              <Scale size={16} className="text-[#c9a84c] absolute" />
            </div>

            <div className="text-left hidden sm:block">
              <div className="text-[11px] font-bold text-[#c9a84c] leading-none uppercase tracking-wider flex items-center gap-1">
                <Sparkles size={11} />
                <span>AI Legal Assistant</span>
              </div>
              <div className="text-xs font-extrabold text-white leading-tight mt-0.5">
                Chambers of Tushar Garg
              </div>
            </div>

            <span className="relative flex h-2.5 w-2.5 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
          </button>
        )}
      </div>

      {/* ==================== 2. FLOATING CHATBOT WINDOW ==================== */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-4 sm:right-6 z-50 w-[360px] sm:w-[420px] max-w-[94vw] h-[610px] max-h-[88vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          style={{ boxShadow: "0 25px 60px -15px rgba(13, 27, 62, 0.45)" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0d1b3e] via-[#10224d] to-[#1a2f66] text-white p-4 flex items-center justify-between border-b border-[#c9a84c]/30 flex-shrink-0 relative">
            <div className="flex items-center gap-3">
              {/* Company Logo in Chatbot Header */}
              <div className="w-10 h-10 rounded-xl bg-white p-1 border border-[#c9a84c] shadow-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src={settings.chatbotLogoUrl || "/TusharLogo.png"}
                  alt="Company Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-sm text-white leading-snug">
                    {settings.chatbotTitle || "Advocate Tushar Garg (AOR)"}
                  </h3>
                  <span className="bg-[#c9a84c] text-[#0d1b3e] text-[9px] font-black px-1.5 py-0.5 rounded tracking-wider uppercase">
                    AOR
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#c9a84c]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{settings.chatbotSubtitle || "AI Legal Assistant • Online"}</span>
                </div>
              </div>
            </div>

            {/* Actions: Reset & Close */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                title="Restart Conversation"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                title="Minimize Chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/70 text-sm">
            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-sm ${
                      isUser
                        ? "bg-[#0d1b3e] text-white rounded-br-none"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-none prose prose-sm"
                    }`}
                  >
                    {/* Render message with bold formatting and linebreaks */}
                    <div className="whitespace-pre-wrap space-y-1">
                      {formatMessageText(m.text)}
                    </div>

                    {/* Inline Consultation Lead Capture Card */}
                    {m.isConsultationForm && !leadSubmitted && (
                      <form
                        onSubmit={handleSubmitLead}
                        className="mt-3 pt-3 border-t border-gray-200 bg-amber-50/50 p-3 rounded-xl border border-amber-200/70 space-y-2.5 not-prose"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#0d1b3e]">
                          <Calendar size={14} className="text-[#c9a84c]" />
                          <span>Request Callback from Chambers</span>
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name *"
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                          className="w-full px-2.5 py-1.5 rounded border border-gray-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#c9a84c]"
                        />
                        <input
                          type="tel"
                          required
                          placeholder="Phone / WhatsApp Number *"
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          className="w-full px-2.5 py-1.5 rounded border border-gray-300 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#c9a84c]"
                        />
                        <button
                          type="submit"
                          disabled={leadSubmitting}
                          className="w-full py-2 bg-[#0d1b3e] text-white rounded-lg text-xs font-bold hover:bg-[#1a2f66] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <Send size={12} className="text-[#c9a84c]" />
                          <span>{leadSubmitting ? "Submitting..." : "Schedule Callback"}</span>
                        </button>
                      </form>
                    )}

                    {m.isConsultationForm && leadSubmitted && (
                      <div className="mt-3 p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-2 text-xs font-semibold">
                        <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                        <span>Inquiry received! Our legal team will contact you shortly.</span>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">{m.timestamp}</span>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-gray-500 text-xs bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 max-w-[120px] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            )}

            {/* Quick Suggestion Pills (Shown after initial welcome) */}
            {messages.length === 1 && (
              <div className="pt-2 space-y-1.5">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Suggested Topics:</p>
                <div className="flex flex-col gap-1.5">
                  {suggestionPills.map((pill, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(pill.query)}
                      className="text-left text-xs bg-white hover:bg-[#c9a84c]/10 text-gray-700 hover:text-[#0d1b3e] p-2.5 rounded-xl border border-gray-200 hover:border-[#c9a84c] transition-all flex items-center justify-between group cursor-pointer shadow-xs"
                    >
                      <span>{pill.label}</span>
                      <ArrowRight size={13} className="text-gray-400 group-hover:text-[#c9a84c] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-gray-200 flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about Supreme Court, SLP, Bare Acts..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a84c] text-xs sm:text-sm bg-gray-50 focus:bg-white"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="p-2.5 bg-[#0d1b3e] hover:bg-[#1a2f66] text-[#c9a84c] rounded-xl disabled:opacity-40 transition-all cursor-pointer shadow-md flex-shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Company Branding & Provider Watermark */}
          <div className="bg-gray-100/95 py-2 px-3 border-t border-gray-200 text-center flex flex-wrap items-center justify-center gap-1.5 text-[10.5px] text-gray-600 font-medium">
            <img
              src={settings.chatbotLogoUrl || "/TusharLogo.png"}
              alt="Logo"
              className="h-3.5 w-auto object-contain opacity-90 flex-shrink-0"
              onError={(e: any) => {
                e.target.style.display = "none";
              }}
            />
            <span className="text-gray-500">Provided by</span>
            <a
              href="https://www.hiverift.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#0d1b3e] hover:text-[#c9a84c] underline underline-offset-2 decoration-[#c9a84c]/60 hover:decoration-[#c9a84c] inline-flex items-center gap-1 transition-all cursor-pointer"
              title="HiveRift Softwares Pvt Ltd - www.hiverift.com"
            >
              <span>HiveRift Softwares Pvt Ltd</span>
              <ExternalLink size={10} className="text-[#c9a84c] flex-shrink-0" />
            </a>
            <ShieldCheck size={12} className="text-[#c9a84c] flex-shrink-0 ml-0.5" />
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Basic markdown parser for bold, headers and bullet points
 */
function formatMessageText(text: string) {
  if (!text) return "";
  const lines = text.split("\n");
  return lines.map((line, idx) => {
    // Bold heading (###)
    if (line.startsWith("### ")) {
      return (
        <h4 key={idx} className="font-bold text-[#0d1b3e] text-xs sm:text-sm mt-1 mb-1">
          {line.replace("### ", "")}
        </h4>
      );
    }
    // Bullet item (- or *)
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const cleanLine = line.trim().replace(/^[-*]\s+/, "");
      return (
        <div key={idx} className="flex items-start gap-1.5 my-0.5 pl-1">
          <span className="text-[#c9a84c] font-bold">•</span>
          <span>{renderFormattedInline(cleanLine)}</span>
        </div>
      );
    }
    // Numbered list
    if (/^\d+\.\s+/.test(line.trim())) {
      return (
        <div key={idx} className="my-0.5 pl-1">
          {renderFormattedInline(line)}
        </div>
      );
    }
    // Regular line
    return (
      <div key={idx} className="my-0.5">
        {renderFormattedInline(line)}
      </div>
    );
  });
}

function renderFormattedInline(text: string) {
  // Support **bold** formatting
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-[#0d1b3e]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

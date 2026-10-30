"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { 
  Radio, 
  Play, 
  ExternalLink, 
  Headphones, 
  Search, 
  Calendar, 
  Sparkles, 
  Video, 
  Clock, 
  Share2, 
  Check, 
  X,
  Volume2,
  Tv
} from "lucide-react";
import { Podcast, getPublishedPodcasts } from "../../lib/api/podcasts";
import PageHero from "../components/PageHero";

export default function PodcastClientView() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeEpisode, setActiveEpisode] = useState<Podcast | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [playerModalUrl, setPlayerModalUrl] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const res = await getPublishedPodcasts(0, 1);
        if (isMounted) {
          const items = res.items || [];
          setPodcasts(items);
          if (items.length > 0) {
            setActiveEpisode(items[0]);
          }
        }
      } catch (err) {
        console.error("Failed to load podcasts:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    load();
    return () => { isMounted = false; };
  }, []);

  // Filtered list
  const filteredPodcasts = useMemo(() => {
    if (!searchQuery.trim()) return podcasts;
    const q = searchQuery.toLowerCase();
    return podcasts.filter(
      p => p.title.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q))
    );
  }, [podcasts, searchQuery]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      
      {/* 1. Page Hero Banner */}
      <PageHero
        title="LEGAL PODCAST"
        subtitle={
          <>
            <span className="text-[#c9a84c] font-medium text-[16px] md:text-[18px]">
              Dialogues on Law, Advocacy & Constitutional Jurisprudence
            </span>
            <br />
            <span className="text-white/90 text-[13px] md:text-[14px] font-normal tracking-wide mt-1.5 block">
              Hosted by Advocate Tushar Garg, Advocate-on-Record, Supreme Court of India
            </span>
          </>
        }
        backgroundImage="/about/about_page_banner.png"
      />

      {/* 2. Main Content Container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {loading ? (
          /* Loading State */
          <div className="py-20 text-center space-y-4">
            <div className="w-12 h-12 border-4 border-[#0d1b3e] border-t-[#c9a84c] rounded-full animate-spin mx-auto" />
            <p className="text-gray-600 text-sm font-semibold tracking-wide uppercase">
              Loading Podcast Broadcasts...
            </p>
          </div>
        ) : podcasts.length === 0 ? (
          /* Coming Soon State (Requirement 2 & Coming Soon Screen) */
          <div className="max-w-2xl mx-auto my-12 bg-white rounded-3xl p-10 sm:p-16 border border-[#c9a84c]/40 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0d1b3e]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-24 h-24 rounded-3xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#0d1b3e]/20">
              <Headphones size={44} />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#c9a84c]/15 text-[#0d1b3e] text-xs font-bold uppercase tracking-wider mb-4 border border-[#c9a84c]/30">
              <Sparkles size={14} className="text-[#c9a84c]" />
              Official Broadcast Series
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0d1b3e] mb-4">
              Coming Soon!
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-8">
              Our podcast episodes are coming soon. Stay tuned for insightful conversations, expert discussions and valuable content.
            </p>

            <div className="pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-gray-500">
              <span className="flex items-center gap-1.5">
                <Radio size={14} className="text-[#c9a84c]" />
                Supreme Court Special Leave Petitions
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Video size={14} className="text-[#c9a84c]" />
                Constitutional Writs & Precedents
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Tv size={14} className="text-[#c9a84c]" />
                Bar & Chamber Insights
              </span>
            </div>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0d1b3e] hover:bg-[#162752] text-[#c9a84c] text-xs font-bold uppercase tracking-wider transition-colors shadow"
              >
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Dynamic Podcast Content: Featured Episode & Episode Grid */
          <div className="space-y-16">

            {/* Featured Latest Episode Banner & Player */}
            {activeEpisode && (
              <div className="bg-[#0d1b3e] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left/Top: Responsive 16:9 Video Player */}
                <div className="lg:col-span-7 bg-black flex items-center justify-center relative aspect-video">
                  <iframe
                    src={`${activeEpisode.embedUrl}&autoplay=0`}
                    title={activeEpisode.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                {/* Right/Bottom: Episode Details */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-bold uppercase tracking-wider border border-[#c9a84c]/30">
                        <Radio size={12} className="animate-pulse" />
                        Featured Episode
                      </span>

                      {activeEpisode.publishedAt && (
                        <span className="text-white/60 text-xs flex items-center gap-1 font-mono">
                          <Calendar size={13} />
                          {new Date(activeEpisode.publishedAt).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                      {activeEpisode.title}
                    </h2>

                    <div className="w-16 h-0.5 bg-[#c9a84c] rounded-full" />

                    <p className="text-white/80 text-sm leading-relaxed max-h-40 overflow-y-auto pr-2">
                      {activeEpisode.description || "In-depth legal conversation and case law analysis hosted by Advocate Tushar Garg, Advocate-on-Record, Supreme Court of India."}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <a
                      href={activeEpisode.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow"
                    >
                      <ExternalLink size={14} />
                      <span>Watch on YouTube</span>
                    </a>

                    <button
                      onClick={handleShare}
                      className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors inline-flex items-center gap-1.5 border border-white/10"
                    >
                      {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                      <span>{copiedLink ? "Link Copied!" : "Share"}</span>
                    </button>
                  </div>

                </div>

              </div>
            )}

            {/* All Episodes Directory Section */}
            <div className="space-y-8">
              
              {/* Directory Filter & Search Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0d1b3e]">
                    All Podcast Episodes ({podcasts.length})
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    Select any episode to play directly or watch on YouTube.
                  </p>
                </div>

                <div className="relative w-full sm:w-72">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search episodes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-xs border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d1b3e] focus:border-transparent bg-white shadow-sm"
                  />
                </div>
              </div>

              {/* Episodes Grid */}
              {filteredPodcasts.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-2">
                  <p className="text-base font-bold text-gray-800">No episodes match your search</p>
                  <p className="text-xs text-gray-500">Try searching for other legal topics or keywords.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredPodcasts.map((podcast) => {
                    const isCurrent = activeEpisode?._id === podcast._id;

                    return (
                      <div
                        key={podcast._id}
                        className={`bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group ${
                          isCurrent 
                            ? "border-[#c9a84c] ring-2 ring-[#c9a84c]/20" 
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {/* Thumbnail with Click to Play */}
                        <div 
                          onClick={() => {
                            setActiveEpisode(podcast);
                            window.scrollTo({ top: 380, behavior: "smooth" });
                          }}
                          className="relative aspect-video bg-black overflow-hidden cursor-pointer"
                        >
                          <img
                            src={podcast.thumbnailUrl}
                            alt={podcast.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors" />

                          {/* Hover Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-[#c9a84c] text-[#0d1b3e] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                              <Play size={20} fill="currentColor" className="ml-0.5" />
                            </div>
                          </div>

                          {/* Status / Active Tag */}
                          {isCurrent && (
                            <div className="absolute top-3 left-3 bg-[#c9a84c] text-[#0d1b3e] text-[10px] font-bold px-2 py-0.5 rounded shadow">
                              NOW PLAYING ABOVE
                            </div>
                          )}

                          <div className="absolute bottom-2.5 left-3 text-white text-[11px] font-semibold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                            <Video size={12} className="text-[#c9a84c]" />
                            <span>Episode</span>
                          </div>
                        </div>

                        {/* Episode Card Content */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                          <div>
                            <div className="text-[11px] text-gray-400 font-mono mb-1.5 flex items-center gap-2">
                              {podcast.publishedAt && (
                                <span>{new Date(podcast.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                              )}
                            </div>

                            <h4 className="font-serif font-bold text-gray-900 text-base line-clamp-2 leading-snug group-hover:text-[#c9a84c] transition-colors">
                              {podcast.title}
                            </h4>

                            {podcast.description && (
                              <p className="text-gray-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                                {podcast.description}
                              </p>
                            )}
                          </div>

                          {/* Buttons: Switch Active Player / Watch on YouTube */}
                          <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2 text-xs">
                            <button
                              onClick={() => {
                                setActiveEpisode(podcast);
                                window.scrollTo({ top: 380, behavior: "smooth" });
                              }}
                              className="font-bold text-[#0d1b3e] hover:text-[#c9a84c] inline-flex items-center gap-1.5 transition-colors"
                            >
                              <Play size={13} fill="currentColor" />
                              <span>{isCurrent ? "Playing Above" : "Play Episode"}</span>
                            </button>

                            <a
                              href={podcast.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center gap-1 transition-colors"
                              title="Watch on YouTube"
                            >
                              <span>YouTube</span>
                              <ExternalLink size={12} />
                            </a>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              )}

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

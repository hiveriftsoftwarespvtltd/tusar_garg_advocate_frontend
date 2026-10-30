"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Radio, 
  Play, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  X, 
  Clock, 
  Headphones,
  Video
} from "lucide-react";
import { Podcast, getPublishedPodcasts } from "../../lib/api/podcasts";

export default function HomePodcastSection() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeVideoEmbed, setActiveVideoEmbed] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const res = await getPublishedPodcasts(4, 1);
        if (isMounted) {
          setPodcasts(res.items || []);
        }
      } catch (err) {
        console.error("Failed to load homepage podcasts", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    load();
    return () => { isMounted = false; };
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-[#f8fafc] border-t border-b border-gray-200/80 relative overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0d1b3e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1b3e]/5 border border-[#0d1b3e]/10 text-[#0d1b3e] text-xs font-bold uppercase tracking-wider mb-3.5">
              <Radio size={14} className="text-[#c9a84c] animate-pulse" />
              <span>Media & Conversations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0d1b3e] leading-tight tracking-tight">
              The Advocate-on-Record <span className="text-[#c9a84c]">Podcast</span>
            </h2>
            <div className="w-20 h-1 bg-[#c9a84c] mt-4 mb-4 rounded-full" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Insightful legal discussions, Supreme Court litigation analysis, constitutional perspectives, and procedural strategies hosted by Advocate Tushar Garg.
            </p>
          </div>

          {/* View All Podcasts Button (Shown when podcasts exist) */}
          {!loading && podcasts.length > 0 && (
            <Link
              href="/podcast"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d1b3e] hover:bg-[#162752] text-[#c9a84c] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex-shrink-0 group"
            >
              <span>View All Podcasts</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Content Area */}
        {loading ? (
          /* Loading Skeleton */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm animate-pulse">
                <div className="aspect-video bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : podcasts.length === 0 ? (
          /* Coming Soon State (as required when no published podcast exists) */
          <div className="bg-white rounded-3xl p-10 sm:p-14 border border-[#c9a84c]/30 shadow-xl text-center max-w-3xl mx-auto relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c9a84c]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="w-20 h-20 rounded-2xl bg-[#0d1b3e] text-[#c9a84c] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#0d1b3e]/20 group-hover:scale-105 transition-transform">
              <Headphones size={36} />
            </div>
            
            <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] block mb-2">
              Broadcast Series
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1b3e] mb-3">
              Coming Soon!
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Our podcast episodes are coming soon. Stay tuned for insightful conversations, expert discussions and valuable content.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#c9a84c]" />
                Constitutional Discussions
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Video size={14} className="text-[#c9a84c]" />
                Supreme Court Insights
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Radio size={14} className="text-[#c9a84c]" />
                Video & Audio Formats
              </span>
            </div>
          </div>
        ) : (
          /* Dynamic Podcast Grid (Latest 3-4 published) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {podcasts.map((podcast) => (
              <div
                key={podcast._id}
                className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#c9a84c]/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Video Thumbnail with Interactive Play Button (Lazy load iframe on click) */}
                <div className="relative aspect-video bg-black overflow-hidden cursor-pointer">
                  <img
                    src={podcast.thumbnailUrl}
                    alt={podcast.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors" />

                  {/* Play Button Trigger */}
                  <button
                    onClick={() => setActiveVideoEmbed(podcast.embedUrl)}
                    aria-label={`Play podcast: ${podcast.title}`}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#c9a84c] text-[#0d1b3e] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                      <Play size={20} fill="currentColor" className="ml-0.5" />
                    </div>
                  </button>

                  {/* Video Badge */}
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-white text-[11px] font-semibold bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    <Video size={12} className="text-[#c9a84c]" />
                    <span>Watch Episode</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 text-base line-clamp-2 leading-snug group-hover:text-[#c9a84c] transition-colors">
                      {podcast.title}
                    </h3>

                    {podcast.description ? (
                      <p className="text-gray-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                        {podcast.description}
                      </p>
                    ) : (
                      <p className="text-gray-400 text-xs mt-2 italic">
                        In-depth legal conversation with Advocate Tushar Garg.
                      </p>
                    )}
                  </div>

                  {/* Footer Actions: Play Directly & Watch on YouTube */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2 text-xs">
                    <button
                      onClick={() => setActiveVideoEmbed(podcast.embedUrl)}
                      className="font-bold text-[#0d1b3e] hover:text-[#c9a84c] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Play size={13} fill="currentColor" />
                      <span>Play Video</span>
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
            ))}
          </div>
        )}

        {/* Bottom CTA for View All Podcasts */}
        {!loading && podcasts.length > 0 && (
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/podcast"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0d1b3e] text-[#c9a84c] font-bold text-xs uppercase tracking-wider shadow-md w-full justify-center"
            >
              <span>View All Podcasts</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        )}

      </div>

      {/* Embedded Player Modal for Frictionless Playback on Site */}
      {activeVideoEmbed && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideoEmbed(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoEmbed(null)}
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#c9a84c] hover:text-[#0d1b3e] text-white flex items-center justify-center transition-colors"
              aria-label="Close video player"
            >
              <X size={20} />
            </button>

            {/* Responsive 16:9 Iframe */}
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`${activeVideoEmbed}&autoplay=1`}
                title="Podcast Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

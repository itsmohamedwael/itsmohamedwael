"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

interface ProjectVideoProps {
  src: string;
  poster: string;
  title: string;
  aspectRatio?: "video" | "portrait" | "square";
  className?: string;
  autoPlayInView?: boolean;
}

export function ProjectVideo({
  src,
  poster,
  title,
  aspectRatio = "video",
  className = "",
  autoPlayInView = true,
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Viewport IntersectionObserver: autonomous play/pause management
  useEffect(() => {
    if (!autoPlayInView || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (!video) return;

          if (entry.isIntersecting) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // Browsers block unmuted autoplay; ensure muted
                video.muted = true;
                setIsMuted(true);
                video.play().then(() => setIsPlaying(true)).catch(() => {});
              });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [autoPlayInView]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Aspect ratio classes
  const aspectClass =
    aspectRatio === "portrait"
      ? "aspect-[9/16] max-h-[580px]"
      : aspectRatio === "square"
      ? "aspect-square"
      : "aspect-video";

  return (
    <div
      ref={containerRef}
      className={`group relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#14110e] shadow-2xl transition-all duration-500 hover:border-emerald-400/30 ${aspectClass} ${className}`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        loop
        muted={isMuted}
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        aria-label={`Showcase video for ${title}`}
      />

      {/* Subtle vignette gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-40" />

      {/* Media Controls Bar (bottom right) */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-emerald-300 focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
        </button>
      </div>

      {/* Video Live Status Indicator */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 backdrop-blur-md">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isPlaying ? "bg-emerald-400 animate-pulse" : "bg-stone-500"
          }`}
        />
        <span className="font-mono text-[9px] uppercase tracking-widest text-stone-300">
          {isPlaying ? "Live Reel" : "Paused"}
        </span>
      </div>
    </div>
  );
}

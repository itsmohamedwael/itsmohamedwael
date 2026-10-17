"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
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
  autoPlayInView = false, // default to hover/click play to prevent decode lag!
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth hover-to-play with instant cleanup
  const handleMouseEnter = () => {
    setIsHovered(true);
    const video = videoRef.current;
    if (video) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
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
    e.preventDefault();
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const aspectClass =
    aspectRatio === "portrait"
      ? "aspect-[9/14] max-h-[480px]"
      : aspectRatio === "square"
      ? "aspect-square"
      : "aspect-video";

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative w-full overflow-hidden rounded-xl border border-[#242220] bg-[#141312] transition-colors duration-300 hover:border-[#3a3836] ${aspectClass} ${className}`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        muted={isMuted}
        loop
        preload="metadata"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        aria-label={`${title} showcase video`}
      />

      {/* Play/Pause overlay indicator when not playing */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-opacity cursor-pointer"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dedad5] text-[#0c0b0a] shadow-lg transition-transform hover:scale-110">
            <Play className="h-5 w-5 fill-current ml-0.5" />
          </div>
        </div>
      )}

      {/* Floating Controls Bar */}
      <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
        <button
          type="button"
          onClick={togglePlay}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#141312]/90 border border-[#242220] text-[#dedad5] hover:text-white"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 fill-current ml-0.5" />}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#141312]/90 border border-[#242220] text-[#dedad5] hover:text-white"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
        </button>
      </div>
    </div>
  );
}

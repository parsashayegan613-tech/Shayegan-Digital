"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ParallaxImage({
  src,
  alt,
  priority = false,
  className = "",
  imageClassName = "object-top",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current || !imageWrapperRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const viewHeight = window.innerHeight;
          
          // Only animate if visible in the viewport
          if (rect.top <= viewHeight && rect.bottom >= 0) {
            const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
            // Parallax shift from -12% to +12%
            const yShift = (progress - 0.5) * 24; 
            
            // Note: The scale(1.15) prevents the image edges from showing during the parallax shift
            imageWrapperRef.current.style.transform = `translate3d(0, ${yShift}%, 0) scale(1.15)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Trigger immediately to set initial position
    onScroll();
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden w-full h-full ${className}`}>
      <div 
        ref={imageWrapperRef} 
        className="absolute inset-0 w-full h-full will-change-transform origin-center transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
        style={{ transform: "scale(1.15)" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover ${imageClassName}`}
          sizes="(max-width: 1024px) 100vw, 80vw"
          unoptimized={true}
        />
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none transition-colors duration-500 group-hover:bg-black/[0.02]" />
      </div>
    </div>
  );
}

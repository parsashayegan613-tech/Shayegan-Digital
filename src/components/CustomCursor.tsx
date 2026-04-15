"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const blendRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const blend = blendRef.current;
    if (!dot || !blend) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let bx = mx;
    let by = my;

    // Track target scale for smooth lerp
    let targetScale = 1;
    let currentScale = 1;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let raf: number;
    const loop = () => {
      // Dot follows instantly
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;

      // Blend circle follows with lerp
      bx += (mx - bx) * 0.12;
      by += (my - by) * 0.12;
      currentScale += (targetScale - currentScale) * 0.12;
      blend.style.transform = `translate(${bx}px, ${by}px) translate(-50%, -50%) scale(${currentScale})`;

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // --- Hover detection ---
    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const el = target.closest("a, button, .hc, .acc-head, .testi-btn, .testi-dot");
      const blendTarget = target.closest(".cursor-blend");

      if (blendTarget) {
        // Big headlines: expand blend circle massively
        targetScale = 8;
        dot.style.opacity = "0";
        blend.classList.add("blend-active");
      } else if (el) {
        // Interactive elements: shrink cursor
        targetScale = 0.5;
        dot.style.opacity = "1";
        blend.classList.remove("blend-active");
        document.body.classList.add("c-hover");
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const el = target.closest("a, button, .hc, .acc-head, .testi-btn, .testi-dot");
      const blendTarget = target.closest(".cursor-blend");

      if (blendTarget || el) {
        targetScale = 1;
        dot.style.opacity = "1";
        blend.classList.remove("blend-active");
        document.body.classList.remove("c-hover");
      }
    };

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    // Hide cursor when leaving window
    const handleLeave = () => {
      dot.style.opacity = "0";
      blend.style.opacity = "0";
    };
    const handleEnter = () => {
      dot.style.opacity = "1";
      blend.style.opacity = "1";
    };
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    <>
      {/* Tiny tracking dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[8px] h-[8px] bg-[var(--ink)] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      {/* Blend-mode circle — expands on headline hover */}
      <div
        ref={blendRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] rounded-full border border-[var(--ink)]/30 pointer-events-none z-[9998] transition-[width,height,border-color] duration-0 blend-circle"
        style={{ willChange: "transform" }}
      />
    </>
  );
}

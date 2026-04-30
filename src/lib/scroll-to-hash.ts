"use client";

type LenisScroller = {
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { duration?: number; immediate?: boolean; offset?: number }
  ) => void;
};

function getLenisScroller(): LenisScroller | undefined {
  const maybeLenis = (window as unknown as { lenis?: unknown }).lenis;

  if (
    maybeLenis &&
    typeof maybeLenis === "object" &&
    "scrollTo" in maybeLenis &&
    typeof maybeLenis.scrollTo === "function"
  ) {
    return maybeLenis as LenisScroller;
  }

  return undefined;
}

export function scrollToHash(hash: string) {
  if (typeof window === "undefined" || !hash.startsWith("#")) {
    return false;
  }

  const id = decodeURIComponent(hash.slice(1));

  if (!id) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return true;
  }

  const target = document.getElementById(id);

  if (!target) {
    return false;
  }

  const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;

  if (window.location.hash === hash) {
    window.history.replaceState(null, "", nextUrl);
  } else {
    window.history.pushState(null, "", nextUrl);
  }

  const targetRect = target.getBoundingClientRect();
  const scrollMarginTop = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
  const targetTop =
    target.dataset.scrollAlign === "center"
      ? Math.max(0, targetRect.top + window.scrollY - ((window.innerHeight - targetRect.height) / 2))
      : targetRect.top + window.scrollY - scrollMarginTop;
  const lenis = getLenisScroller();

  if (lenis) {
    lenis.scrollTo(targetTop, { duration: 1.1 });
    return true;
  }

  window.scrollTo({ top: targetTop, left: 0, behavior: "smooth" });
  return true;
}

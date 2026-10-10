import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToLocation(hash = "") {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (hash) {
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) {
      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
      return;
    }
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
}

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => scrollToLocation(hash));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, search, hash]);

  useEffect(() => {
    const handleInternalNavigation = (event) => {
      const link = event.target.closest?.("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      window.setTimeout(() => {
        scrollToLocation(url.hash);
      }, 0);
    };

    document.addEventListener("click", handleInternalNavigation);
    return () => document.removeEventListener("click", handleInternalNavigation);
  }, []);

  return null;
}

export default ScrollToTop;

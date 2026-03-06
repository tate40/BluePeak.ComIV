import { useEffect, useRef } from "react";

/**
 * Hook: useScrollAnimation
 * Adds IntersectionObserver-based fade-up animations.
 * Elements with class "fade-up" gain class "visible" when they enter the viewport.
 */
export function useScrollAnimation(rootMargin = "0px 0px -60px 0px") {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { rootMargin, threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [rootMargin]);

  return containerRef;
}

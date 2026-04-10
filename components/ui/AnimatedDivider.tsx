"use client";
import { useRef, useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Gold hairline divider that animates from 0 → full width on scroll entry.
 * Falls back to instant display when prefers-reduced-motion is set.
 */
export default function AnimatedDivider({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setInView(true);
      return;
    }
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [prefersReduced]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        background: "linear-gradient(90deg, transparent, #C8A97E, transparent)",
        height: "1px",
        width: inView ? "100%" : "0%",
        transition: prefersReduced ? "none" : "width 600ms ease-out",
      }}
    />
  );
}

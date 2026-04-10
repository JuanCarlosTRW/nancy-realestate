"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  threshold?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  textAlign?: React.CSSProperties["textAlign"];
}

/**
 * Lightweight SplitText — uses Framer Motion + IntersectionObserver.
 * Replaces the GSAP premium SplitText that requires Club GSAP.
 */
export default function SplitText({
  text,
  className = "",
  delay = 40,
  animateBy = "words",
  threshold = 0.3,
  tag: Tag = "h2",
  textAlign = "center",
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const segments = animateBy === "words" ? text.split(" ") : text.split("");

  if (prefersReduced) {
    return (
      <Tag className={className} style={{ textAlign }}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={`${className} flex flex-wrap`}
      style={{ textAlign, justifyContent: textAlign === "center" ? "center" : "flex-start" }}
    >
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: (i * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block", willChange: "transform, opacity" }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </Tag>
  );
}

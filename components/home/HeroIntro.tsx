"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Cinematic intro overlay that plays once on page load.
 * Text fades in, holds briefly, then the entire curtain lifts
 * to reveal the main hero section underneath.
 */
export default function HeroIntro() {
  const [show, setShow] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("heroIntroSeen");
    }
    return true;
  });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setShow(false);
      return;
    }
    if (!show) return;
    // Total intro duration: text appears over ~2s, holds for ~1.2s, then exits
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("heroIntroSeen", "1");
    }, 3200);
    return () => clearTimeout(timer);
  }, [prefersReduced, show]);

  // Lock scroll while intro is visible
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="hero-intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Warm vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 30%, rgba(28,23,18,0.6) 100%)",
            }}
          />

          {/* Centered text content */}
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[11px] md:text-[12px] tracking-label uppercase font-medium text-goldLight/70 mb-8"
            >
              Nancy Musselman
            </motion.p>

            {/* Main tagline - line 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display font-light text-white leading-[1.05]"
              style={{ fontSize: "clamp(36px, 7vw, 80px)" }}
            >
              Born Here.
            </motion.h1>

            {/* Main tagline - line 2 */}
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display font-light text-gold leading-[1.05] italic"
              style={{ fontSize: "clamp(36px, 7vw, 80px)" }}
            >
              Built for This.
            </motion.h1>

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="gold-divider w-16 mx-auto mt-8 origin-center"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="text-white/50 text-[14px] md:text-[16px] font-light mt-6 tracking-wide"
            >
              Dallas Real Estate
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

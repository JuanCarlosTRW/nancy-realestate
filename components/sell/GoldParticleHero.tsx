"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHRASES = [
  "It Deserves a Strategy.",
  "It Deserves Real Attention.",
  "It Deserves Someone Who Cares.",
];

export default function GoldParticleHero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden flex items-end justify-center"
      style={{ background: "#1a1510", minHeight: "80vh" }}
    >
      {/* Gold particles — CSS animated */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${1 + (i % 3) * 0.8}px`,
              height: `${1 + (i % 3) * 0.8}px`,
              backgroundColor: "#C6A96C",
              opacity: 0.15 + (i % 4) * 0.05,
              left: `${(i * 4.1) % 100}%`,
              top: `${(i * 3.7) % 100}%`,
              animation: `goldFloat${i % 5} ${22 + (i % 5) * 4}s ease-in-out infinite`,
              animationDelay: `${(i * 1.3) % 10}s`,
            }}
          />
        ))}
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center 60%, rgba(198,169,108,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Hero content */}
      <div className="relative z-[2] w-full max-w-4xl text-center px-6 pb-[100px] md:pb-[200px] pt-32 md:pt-0">
        <p className="label mb-4 !text-gold">For Sellers</p>

        <h1
          className="font-display font-light text-white leading-[1.08] max-w-3xl mx-auto"
          style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
        >
          Your Home Deserves More Than a Sign in the Yard.
        </h1>

        {/* Rotating italic phrase */}
        <div
          className="relative mx-auto max-w-3xl"
          style={{ height: "clamp(90px, 14vw, 150px)", marginTop: "0.15em" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={phraseIndex}
              className="absolute inset-x-0 font-display italic text-gold"
              style={{
                fontSize: "clamp(36px, 5.5vw, 64px)",
                fontFamily: "var(--font-accent, 'Playfair Display', serif)",
                lineHeight: 1.08,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {PHRASES[phraseIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-[15px] md:text-[16px] font-light text-white/90 max-w-xl mx-auto leading-[1.7]">
          Honest pricing. Precise preparation. The kind of attention your home
          gets when it&apos;s not one of thirty listings.
        </p>
      </div>
    </div>
  );
}

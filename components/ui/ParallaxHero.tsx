"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxHeroProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  overlayOpacity?: number;
}

export default function ParallaxHero({
  imageSrc,
  imageAlt,
  children,
}: ParallaxHeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div
      ref={container}
      className="relative w-full overflow-hidden min-h-[85vh] md:min-h-screen"
    >
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 h-[130%] w-full" style={{ y }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic vignette overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(26, 21, 16, 0.4) 0%,
            rgba(26, 21, 16, 0.15) 30%,
            rgba(26, 21, 16, 0.2) 55%,
            rgba(26, 21, 16, 0.75) 100%
          )`,
        }}
      />

      {/* Part 2A: Radial spotlight darkening behind text zone for crisp readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `radial-gradient(
            ellipse at center bottom,
            rgba(20, 16, 12, 0.55) 0%,
            rgba(20, 16, 12, 0.25) 60%,
            transparent 100%
          )`,
        }}
      />

      {/* Content — pushed to bottom third for cinematic feel */}
      <div className="relative z-[2] flex h-full min-h-[85vh] md:min-h-screen w-full flex-col items-center justify-center px-6 text-center">
        {children}
      </div>
    </div>
  );
}

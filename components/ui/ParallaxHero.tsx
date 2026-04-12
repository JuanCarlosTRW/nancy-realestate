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
      className="relative w-full overflow-hidden min-h-[80vh] md:min-h-[90vh]"
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
            rgba(20, 16, 12, 0.3) 0%,
            rgba(20, 16, 12, 0.15) 30%,
            rgba(20, 16, 12, 0.2) 50%,
            rgba(20, 16, 12, 0.65) 100%
          )`,
        }}
      />

      {/* Part 2A: Radial spotlight darkening behind text zone for crisp readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `radial-gradient(
            ellipse 60% 50% at center 65%,
            rgba(18, 14, 10, 0.6) 0%,
            rgba(18, 14, 10, 0.3) 50%,
            transparent 100%
          )`,
        }}
      />

      {/* Content — pushed to bottom third for cinematic feel */}
      <div className="relative z-[2] flex h-full min-h-[80vh] md:min-h-[90vh] w-full flex-col items-center justify-center px-6 text-center">
        <div className="max-w-[700px] w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

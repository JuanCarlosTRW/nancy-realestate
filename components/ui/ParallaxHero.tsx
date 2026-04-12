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
  overlayOpacity = 0.5,
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
          className="object-cover object-center ken-burns"
        />
      </motion.div>

      {/* Bottom gradient for text readability — scaled by overlayOpacity */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            transparent 35%,
            rgba(20, 16, 12, ${0.4 * overlayOpacity}) 60%,
            rgba(20, 16, 12, ${0.8 * overlayOpacity}) 85%,
            rgba(20, 16, 12, ${0.92 * overlayOpacity}) 100%
          )`,
        }}
      />

      {/* Content — pushed to bottom third for cinematic feel */}
      <div className="relative z-[2] flex h-full min-h-[80vh] md:min-h-[90vh] w-full flex-col items-center justify-end pb-[100px] md:pb-[200px] px-6 text-center">
        <div className="max-w-[800px] w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

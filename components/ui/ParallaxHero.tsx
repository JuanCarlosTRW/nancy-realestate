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
  overlayOpacity = 0.55,
}: ParallaxHeroProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div
      ref={container}
      className="relative w-full overflow-hidden h-[50vh] md:h-[70vh]"
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

      {/* Warm dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(to bottom, rgba(28, 23, 18, ${overlayOpacity}), rgba(28, 23, 18, ${overlayOpacity + 0.1}))`,
        }}
      />

      {/* Content */}
      <div className="relative z-[2] flex h-full w-full flex-col items-center justify-center px-6 text-center">
        {children}
      </div>
    </div>
  );
}

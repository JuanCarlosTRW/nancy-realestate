"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { IMG } from "@/lib/constants";

export default function ParallaxShowcase() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="mx-2 mt-10 mb-20 overflow-hidden">
      <div
        ref={container}
        className="relative flex h-[80vh] items-center justify-center overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-20 text-white mix-blend-difference">
          <p className="md:w-[50vw] self-end font-display italic text-xl md:text-3xl">
            Beauty and quality need the right time to be conceived and realized
            — even in a market that's always in a hurry.
          </p>
          <p className="font-display text-5xl md:text-[7vw] uppercase leading-none">
            Elevated Living
          </p>
        </div>
        <div className="absolute inset-0 -top-[10vh] h-[120vh] w-full">
          <motion.div className="relative h-full w-full" style={{ y }}>
            <Image
              alt="Luxury interior"
              fill
              src={IMG.interior}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

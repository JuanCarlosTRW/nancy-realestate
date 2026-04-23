"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MinimalistHeroProps {
  mainText: string;
  readMoreLabel: string;
  readMoreHref: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: { part1: string; part2: string };
  locationText: string;
  className?: string;
}

/**
 * Minimalist editorial hero for the About page.
 *
 * Three-column composition:
 *   • Left  — short bio paragraph + read-more anchor
 *   • Center — portrait with a soft gold circle behind it
 *   • Right — oversized two-line display heading
 *
 * Sits below the global fixed Navigation; does not render its own nav.
 */
export default function MinimalistHero({
  mainText,
  readMoreLabel,
  readMoreHref,
  imageSrc,
  imageAlt,
  overlayText,
  locationText,
  className,
}: MinimalistHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full bg-warmWhite text-darkText",
        "md:min-h-[92vh] flex flex-col",
        "pt-24 md:pt-32 pb-10 md:pb-10",
        "px-6 md:px-12 lg:px-20 overflow-hidden",
        className
      )}
    >
      {/* Middle editorial grid */}
      <div className="flex-1 flex items-center">
        <div className="grid w-full grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
          {/* Left — bio text + read-more */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="md:col-span-3 order-3 md:order-1 mt-4 md:mt-0"
          >
            <p className="label !text-gold mb-4">About Nancy</p>
            <p
              className="font-light text-[15px] md:text-[16px] leading-[1.85]"
              style={{ color: "#2A211C" }}
            >
              {mainText}
            </p>
            <Link
              href={readMoreHref}
              className="group mt-8 inline-flex items-center gap-2 text-[12px] tracking-button uppercase font-medium text-gold hover:text-goldDark transition-all"
            >
              <span>{readMoreLabel}</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-500 group-hover:translate-x-1.5"
              />
            </Link>
          </motion.div>

          {/* Center — portrait with gold circle behind */}
          <div className="md:col-span-5 order-1 md:order-2 relative flex justify-center items-center">
            {/* Gold circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: "min(70vw, 420px)",
                height: "min(70vw, 420px)",
                background:
                  "radial-gradient(circle, rgba(200,169,126,0.55) 0%, rgba(200,169,126,0.35) 60%, rgba(200,169,126,0) 100%)",
              }}
              aria-hidden="true"
            />

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
              className="relative z-10"
              style={{
                width: "min(68vw, 400px)",
                aspectRatio: "4 / 5",
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 68vw, 400px"
                className="object-cover object-top rounded-[2px] shadow-warmLg"
              />
            </motion.div>
          </div>

          {/* Right — oversized display heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="md:col-span-4 order-2 md:order-3 text-center md:text-right"
          >
            <h1
              className="font-display font-light leading-[0.95] tracking-tight text-darkText"
              style={{ fontSize: "clamp(44px, 11vw, 140px)" }}
            >
              {overlayText.part1}
              <br />
              <span
                className="italic text-gold"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
              >
                {overlayText.part2}
              </span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Footer strip — location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
        className="mt-10 md:mt-6 flex items-center justify-between border-t border-gold/15 pt-6"
      >
        <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-medium text-mediumText">
          <MapPin size={12} className="text-gold" />
          <span>{locationText}</span>
        </div>
        <div className="text-[11px] tracking-[0.22em] uppercase font-medium text-gold/70">
          Est. Dallas
        </div>
      </motion.div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import BlurText from "@/components/BlurText";
import { IMG } from "@/lib/constants";

// The intro overlay takes ~3.2s before it starts exiting (~1.2s exit).
// Hero content should start animating around when the curtain begins lifting.
const INTRO_OFFSET = 3.4;

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-charcoal hero-noise">
      {/* Nancy photo background with parallax on desktop */}
      <div className="absolute inset-0 hero-parallax">
        <Image
          src={IMG.nancy}
          alt="Nancy Musselman, Dallas real estate agent"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        {/* Warm dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(28, 23, 18, 0.38)" }}
        />
        {/* Bottom fade for CTA legibility */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        {/* Warm vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(28,23,18,0.45) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: prefersReduced ? 0.2 : INTRO_OFFSET }}
          className="text-[11px] md:text-[12px] tracking-label uppercase font-medium text-goldLight mb-8"
        >
          Beam Real Estate · Dallas, Texas
        </motion.p>

        {/* Animated headline with BlurText */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: prefersReduced ? 0 : INTRO_OFFSET + 0.1 }}
          style={{ fontSize: "clamp(36px, 7vw, 84px)" }}
        >
          <BlurText
            text="Real Estate the Way It Should Be."
            delay={120}
            animateBy="words"
            direction="top"
            className="font-display font-light text-white leading-[1.02] justify-center"
          />
        </motion.div>

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: prefersReduced ? 1.0 : INTRO_OFFSET + 0.8 }}
          className="gold-divider w-20 mx-auto mt-10 origin-center"
        />

        <motion.p
          initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: prefersReduced ? 1.2 : INTRO_OFFSET + 1.0 }}
          className="text-white/85 text-[16px] md:text-[18px] font-light mt-10 max-w-xl mx-auto leading-[1.7]"
        >
          50+ years in Dallas. 22 years of professional precision. Now putting
          it all to work for you.
        </motion.p>

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: prefersReduced ? 1.5 : INTRO_OFFSET + 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12"
        >
          {/* Primary CTA with shiny effect */}
          <ShinyButton
            href="/contact"
            className="w-full sm:w-auto shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
          >
            Let&apos;s Talk
          </ShinyButton>
          <a
            href="#why-nancy"
            className="group inline-flex items-center gap-3 border border-white/50 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-goldLight text-white w-full sm:w-auto px-10 py-[18px] text-[11px] tracking-button uppercase font-medium rounded-[4px] transition-all duration-500 hover:gap-5 justify-center"
          >
            <span>See How I Help</span>
            <ArrowRight size={16} className="text-goldLight transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

    </section>
  );
}

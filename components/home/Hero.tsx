"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMG } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Nancy photo background */}
      <div className="absolute inset-0">
        <Image
          src={IMG.nancy}
          alt="Nancy Musselman, Dallas real estate agent"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        {/* Warm dark overlay per brief: rgba(28, 23, 18, 0.55) */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(28, 23, 18, 0.55)" }}
        />
        {/* Subtle bottom fade for CTA legibility */}
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
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] md:text-[12px] tracking-label uppercase font-medium text-goldLight mb-8"
        >
          Beam Real Estate · Dallas, Texas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display font-light text-white leading-[1.02]"
          style={{ fontSize: "clamp(44px, 7vw, 84px)" }}
        >
          Born Here.
          <br />
          <span className="italic text-goldLight">Built for This.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="gold-divider w-20 mx-auto mt-10 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-white/85 text-[16px] md:text-[18px] font-light mt-10 max-w-xl mx-auto leading-[1.7]"
        >
          50+ years in Dallas. 22 years reading people. Now putting it all to
          work for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-gold hover:bg-goldDark text-white px-10 py-[18px] text-[11px] tracking-button uppercase font-medium rounded-[4px] transition-all duration-500 hover:gap-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <a
            href="#why-nancy"
            className="group inline-flex items-center gap-3 border border-white/50 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-goldLight text-white px-10 py-[18px] text-[11px] tracking-button uppercase font-medium rounded-[4px] transition-all duration-500 hover:gap-5"
          >
            <span>How I Can Help</span>
            <ArrowRight size={16} className="text-goldLight transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[9px] tracking-label uppercase font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-goldLight to-transparent" />
      </div>
    </section>
  );
}

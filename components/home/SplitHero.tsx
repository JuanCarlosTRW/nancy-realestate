"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function SplitHero() {
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
      {/* ── Parallax background ──────────────────────────────────── */}
      <motion.div className="absolute inset-0 h-[130%] w-full" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="Warm staged living room interior in Dallas Texas"
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
      </motion.div>

      {/* ── Overlay — darker left for text, lighter right for photo ─ */}
      <div
        className="absolute inset-0 z-[1] hidden md:block"
        style={{
          background: `linear-gradient(
            to right,
            rgba(28, 23, 18, 0.85) 0%,
            rgba(28, 23, 18, 0.6) 40%,
            rgba(28, 23, 18, 0.25) 70%,
            rgba(28, 23, 18, 0.15) 100%
          )`,
        }}
      />
      {/* Mobile overlay — uniform */}
      <div
        className="absolute inset-0 z-[1] md:hidden"
        style={{ background: "rgba(28, 23, 18, 0.55)" }}
      />

      {/* ── Content wrapper ──────────────────────────────────────── */}
      <div className="relative z-[2] flex flex-col-reverse md:flex-row items-center md:items-stretch w-full min-h-[80vh] md:min-h-[90vh]">
        {/* ── Left column: Text + CTAs ───────────────────────────── */}
        <div className="w-full md:w-[55%] flex flex-col justify-center text-center md:text-left px-6 md:pl-16 lg:pl-24 md:pr-8 py-12 md:py-0">
          {/* Eyebrow */}
          <p
            className="text-[0.7rem] font-medium tracking-[0.25em] uppercase mb-5"
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              textShadow: "0 1px 8px rgba(0, 0, 0, 0.4)",
            }}
          >
            Dallas &middot; Fort Worth &middot; North Texas
          </p>

          {/* Signature name */}
          <p
            className="font-display italic text-gold mb-4"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
          >
            Nancy Musselman
          </p>

          {/* Headline */}
          <h1
            className="font-display font-light text-white"
            style={{
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
              lineHeight: 1.1,
              textShadow: "0 2px 16px rgba(0, 0, 0, 0.3)",
            }}
          >
            <span className="block">Your Next Chapter Starts</span>
            <span
              className="block italic text-gold"
              style={{
                fontFamily: "var(--font-accent, 'Playfair Display', serif)",
                fontSize: "clamp(2.8rem, 5.5vw, 4.6rem)",
              }}
            >
              With the Right Guide.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 text-[1rem] font-light max-w-xl leading-[1.7] mx-auto md:mx-0"
            style={{
              color: "rgba(255, 255, 255, 0.92)",
              textShadow: "0 1px 12px rgba(0, 0, 0, 0.4)",
            }}
          >
            Born and raised in DFW. Twenty-two years catching what others miss.
            Your home search deserves that kind of attention.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-[0.8rem] font-semibold tracking-[0.12em] uppercase bg-gold text-charcoal hover:bg-[#D4B87A] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(196,169,108,0.5)] transition-all duration-300"
              style={{
                borderRadius: "2px",
                padding: "16px 40px",
                boxShadow: "0 4px 24px rgba(196, 169, 108, 0.35)",
              }}
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/buy"
              className="inline-flex items-center justify-center text-[0.8rem] font-medium tracking-[0.12em] uppercase text-white hover:bg-white/5 hover:-translate-y-[2px] transition-all duration-300"
              style={{
                borderRadius: "2px",
                padding: "16px 36px",
                border: "1px solid rgba(255,255,255,0.7)",
              }}
            >
              See How I Help &rarr;
            </Link>
          </div>
        </div>

        {/* ── Right column: Nancy's cutout photo ─────────────────── */}
        <div className="relative w-full md:w-[45%] z-[3] flex items-end justify-center pt-24 md:pt-0">
          {/* Subtle warm glow behind Nancy */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[70%] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center bottom, rgba(198, 169, 108, 0.1) 0%, transparent 60%)",
            }}
          />
          <Image
            src="https://static.wixstatic.com/media/62f926_2b9b1c3435034377a4cf42c416fcb7c3~mv2.png"
            alt="Nancy Musselman, Dallas real estate agent"
            width={600}
            height={900}
            priority
            sizes="(max-width: 768px) 80vw, 40vw"
            className="relative h-[45vh] md:h-[75vh] w-auto object-contain object-bottom drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </div>
  );
}

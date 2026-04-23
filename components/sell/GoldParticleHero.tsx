"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#C8A97E"
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.018}
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{
              pathLength: 1,
              opacity: [0.25, 0.55, 0.25],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function GoldParticleHero() {
  return (
    <div
      className="relative w-full overflow-hidden flex items-end justify-center"
      style={{ background: "#1a1510", minHeight: "80vh" }}
    >
      {/* Animated SVG floating paths — crossed positions for depth */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center 60%, rgba(198,169,108,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Hero content */}
      <div className="relative z-[2] w-full max-w-4xl text-center px-6 pb-[100px] md:pb-[200px] pt-32 md:pt-0">
        <p className="label mb-4 !text-gold">For Sellers</p>

        <h1
          className="font-display font-light text-white leading-[1.08] max-w-3xl mx-auto"
          style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
        >
          Your Home Deserves More Than a Sign in the Yard
        </h1>

        <span
          className="block font-display italic text-gold mt-[0.15em]"
          style={{
            fontSize: "clamp(36px, 5.5vw, 64px)",
            fontFamily: "var(--font-accent, 'Playfair Display', serif)",
            lineHeight: 1.08,
          }}
        >
          It Deserves a Strategy.
        </span>
      </div>
    </div>
  );
}

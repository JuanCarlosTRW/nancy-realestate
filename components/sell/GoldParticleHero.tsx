"use client";

import { useEffect, useState, type ReactNode } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

interface Props {
  children: ReactNode;
}

export default function GoldParticleHero({ children }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: "#1a1510", minHeight: "80vh" }}
    >
      {/* Particle layer */}
      {ready && (
        <Particles
          id="sell-hero-particles"
          className="absolute inset-0 z-0"
          options={{
            fullScreen: false,
            fpsLimit: 60,
            particles: {
              number: { value: 40, density: { enable: true } },
              color: { value: "#C6A96C" },
              shape: { type: "circle" },
              opacity: {
                value: { min: 0.15, max: 0.3 },
              },
              size: {
                value: { min: 1, max: 3 },
              },
              move: {
                enable: true,
                speed: { min: 0.2, max: 0.5 },
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
              links: {
                enable: true,
                distance: 120,
                color: "#C6A96C",
                opacity: 0.06,
                width: 1,
              },
            },
            interactivity: {
              events: {
                onHover: { enable: false },
                onClick: { enable: false },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center 60%, rgba(198,169,108,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] flex items-end justify-center min-h-[80vh] md:min-h-[90vh] px-6 pb-[100px] md:pb-[200px]">
        <div className="w-full max-w-4xl text-center">{children}</div>
      </div>
    </div>
  );
}

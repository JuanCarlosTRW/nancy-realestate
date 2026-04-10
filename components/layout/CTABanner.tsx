"use client";
import { ShinyButton } from "@/components/ui/shiny-button";
import { SparklesCore } from "@/components/ui/sparkles";

export default function CTABanner({
  title = "Ready to Make Your Move?",
  subtitle = "Whether you have one question or you're ready to start today, reach out. No pressure, no sales pitch.",
  cta = "Let\u0027s Talk",
  href = "/contact",
}: {
  title?: string;
  subtitle?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      {/* Subtle gold radial warmth */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, rgba(200,169,126,0.22) 0%, rgba(28,23,18,0) 60%)",
        }}
      />

      {/* Sparkles background layer */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="nancy-cta-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#C8A97E"
          speed={1.5}
        />
      </div>

      {/* Content above sparkles */}
      <div className="relative z-10 container-x px-6 md:px-12 py-16 md:py-20 text-center">
        <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-6 leading-[1.1]">
          {title}
        </h2>
        <div className="gold-divider w-16 mx-auto mb-8" />
        <p className="max-w-xl mx-auto text-[15px] leading-[1.9] font-light text-white/75 mb-10">
          {subtitle}
        </p>
        <ShinyButton href={href}>
          {cta}
        </ShinyButton>
      </div>
    </section>
  );
}

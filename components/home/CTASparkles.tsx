"use client";
import { SparklesCore } from "@/components/ui/sparkles";

export default function CTASparkles() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <SparklesCore
        id="cta-sparkles"
        background="transparent"
        minSize={0.3}
        maxSize={1.2}
        particleDensity={50}
        className="w-full h-full"
        particleColor="#C8A97E"
        speed={1}
      />
    </div>
  );
}

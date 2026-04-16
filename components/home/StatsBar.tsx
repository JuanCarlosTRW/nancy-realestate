"use client";

import CountUp from "@/components/CountUp";
import Reveal from "@/components/ui/Reveal";

export default function StatsBar() {
  return (
    <section className="bg-charcoal px-6 md:px-12">
      <Reveal y={16}>
        <div className="container-x max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 py-12 md:py-14">
          <div className="flex-1 text-center">
            <p className="font-display font-light text-white leading-none" style={{ fontSize: "2.25rem" }}>
              <CountUp to={50} duration={2.5} className="font-display" />+ Years
            </p>
            <p className="mt-1 text-[0.65rem] tracking-[0.2em] uppercase font-normal text-white/60">
              Born &amp; Raised in DFW
            </p>
          </div>
          <div className="hidden md:block w-px h-10 bg-gold/30" />
          <div className="flex-1 text-center">
            <p className="font-display font-light text-white leading-none" style={{ fontSize: "2.25rem" }}>
              <CountUp to={22} duration={2.5} delay={0.3} className="font-display" /> Years
            </p>
            <p className="mt-1 text-[0.65rem] tracking-[0.2em] uppercase font-normal text-white/60">
              In Professional Contracts &amp; Details
            </p>
          </div>
          <div className="hidden md:block w-px h-10 bg-gold/30" />
          <div className="flex-1 text-center">
            <p className="font-display font-light text-white leading-none" style={{ fontSize: "2.25rem" }}>
              Every Detail
            </p>
            <p className="mt-1 text-[0.65rem] tracking-[0.2em] uppercase font-normal text-white/60">
              Raised Around Construction
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

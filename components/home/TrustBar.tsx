"use client";
import CountUp from "@/components/CountUp";

const STATS = [
  { number: 50, suffix: "+ Years", label: "in the DFW Metroplex" },
  { number: 22, suffix: " Years", label: "Professional Experience" },
  { text: "Beam Real Estate", label: "Licensed Agent · TX #844625" },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal border-y border-white/5">
      <div className="container-x px-6 md:px-12 py-12 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
          {STATS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-10 md:gap-4">
              <div className="text-center">
                <p className="font-display text-white text-2xl md:text-[28px] leading-none font-light">
                  {"number" in s && s.number !== undefined ? (
                    <>
                      <CountUp
                        to={s.number}
                        from={0}
                        duration={2.5}
                        delay={0.2}
                        className="font-display"
                      />
                      <span>{s.suffix}</span>
                    </>
                  ) : (
                    s.text
                  )}
                </p>
                <p className="text-[10px] tracking-label uppercase font-medium text-gold mt-3">
                  {s.label}
                </p>
              </div>
              {i < STATS.length - 1 && (
                <>
                  {/* Vertical divider on desktop */}
                  <div className="hidden md:block w-px h-14 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
                  {/* Horizontal divider on mobile */}
                  <div className="block md:hidden w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

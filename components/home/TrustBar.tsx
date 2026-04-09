const STATS = [
  { big: "50+ Years", small: "in the DFW Metroplex" },
  { big: "22 Years", small: "Professional Experience" },
  { big: "Beam Real Estate", small: "Licensed Agent · TX #844625" },
];

export default function TrustBar() {
  return (
    <section className="bg-charcoal border-y border-white/5">
      <div className="container-x px-6 md:px-12 py-12 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
          {STATS.map((s, i) => (
            <div key={s.big} className="flex items-center gap-10 md:gap-4">
              <div className="text-center">
                <p className="font-display text-white text-2xl md:text-[28px] leading-none font-light">
                  {s.big}
                </p>
                <p className="text-[10px] tracking-label uppercase font-medium text-gold mt-3">
                  {s.small}
                </p>
              </div>
              {i < STATS.length - 1 && (
                <div className="hidden md:block w-px h-14 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

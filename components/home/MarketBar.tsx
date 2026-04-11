import Reveal from "@/components/ui/Reveal";

const STATS = [
  { value: "7", label: "Dallas Neighborhoods Tracked" },
  { value: "22", label: "Years of Professional Experience" },
  { value: "50+", label: "Years Calling DFW Home" },
];

export default function MarketBar() {
  return (
    <section className="py-16 md:py-20 bg-bgSection">
      <div className="container-x px-6 md:px-12 lg:px-20">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center">
                {i > 0 && (
                  <div className="hidden md:block w-px h-[40px] bg-gold/30 mx-12 lg:mx-16" />
                )}
                <div className="text-center">
                  <p
                    className="font-display text-darkText leading-none font-light"
                    style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[12px] uppercase tracking-[0.15em] text-lightText mt-3 font-medium">
                    {s.label}
                  </p>
                </div>
                {i < STATS.length - 1 && (
                  <div className="md:hidden w-16 h-px bg-gold/20 mt-0" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

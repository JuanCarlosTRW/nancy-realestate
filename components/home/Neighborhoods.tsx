import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

type Hood = {
  name: string;
  descriptor: string;
  gradient: string;
  featured?: boolean;
};

// Warm Texas tones — layered CSS gradients, no stock photos.
const HOODS: Hood[] = [
  {
    name: "Bent Tree",
    descriptor: "Established luxury in North Dallas",
    featured: true,
    gradient:
      "radial-gradient(at 20% 20%, #C8A97E 0%, transparent 50%), radial-gradient(at 80% 80%, #8B4513 0%, transparent 55%), linear-gradient(135deg, #3A2A1A 0%, #1C1712 100%)",
  },
  {
    name: "Highland Park",
    descriptor: "Dallas' most prestigious address",
    gradient:
      "radial-gradient(at 70% 20%, #D4B896 0%, transparent 55%), radial-gradient(at 10% 90%, #A8845A 0%, transparent 60%), linear-gradient(135deg, #2C2218 0%, #1C1712 100%)",
  },
  {
    name: "Frisco",
    descriptor: "Fast-growing, family-friendly North Dallas",
    gradient:
      "radial-gradient(at 30% 70%, #C8A97E 0%, transparent 60%), radial-gradient(at 85% 15%, #5C4A38 0%, transparent 55%), linear-gradient(160deg, #2C2218 0%, #1C1712 100%)",
  },
  {
    name: "Plano",
    descriptor: "Suburban excellence with big-city access",
    gradient:
      "radial-gradient(at 15% 30%, #A8845A 0%, transparent 55%), radial-gradient(at 75% 80%, #D4B896 0%, transparent 55%), linear-gradient(120deg, #3A2A1A 0%, #1C1712 100%)",
  },
  {
    name: "Richardson",
    descriptor: "Diverse, walkable, underrated gem",
    gradient:
      "radial-gradient(at 60% 40%, #8B4513 0%, transparent 60%), radial-gradient(at 20% 85%, #C8A97E 0%, transparent 55%), linear-gradient(140deg, #2C2218 0%, #1C1712 100%)",
  },
  {
    name: "Uptown Dallas",
    descriptor: "Urban energy, walkable lifestyle",
    gradient:
      "radial-gradient(at 80% 30%, #D4B896 0%, transparent 55%), radial-gradient(at 25% 70%, #8B4513 0%, transparent 60%), linear-gradient(150deg, #2C2218 0%, #1C1712 100%)",
  },
];

export default function Neighborhoods() {
  return (
    <section className="section-pad bg-bgSection">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="label">Dallas Neighborhoods</p>
            <h2 className="h-display mt-4">
              The City I&apos;ve Called Home for{" "}
              <span className="italic text-gold">50+ Years</span>
            </h2>
            <p className="body-p mt-6">
              From Highland Park to Frisco, I know these streets — and the
              stories behind them.
            </p>
            <div className="gold-divider w-16 mx-auto mt-8" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {HOODS.map((n, i) => (
            <Reveal key={n.name} delay={(i % 3) * 0.08}>
              <article
                className="group relative h-[300px] md:h-[340px] overflow-hidden rounded-[2px] border border-bordr shadow-warm hover:shadow-warmLg transition-all duration-500 cursor-default"
                style={{ backgroundImage: n.gradient, backgroundSize: "cover" }}
              >
                {/* Grain texture for depth */}
                <div
                  className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

                {n.featured && (
                  <div className="absolute top-5 right-5 z-10 text-[9px] tracking-label uppercase font-medium text-charcoal bg-gold px-3 py-1.5 rounded-[2px]">
                    Featured Sale
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display font-light text-[30px] md:text-[32px] text-white leading-[1.1]">
                    {n.name}
                  </h3>
                  <div className="gold-divider w-8 mt-3" />
                  <p className="text-[11px] md:text-[12px] text-goldLight/95 font-light mt-3 leading-[1.5]">
                    {n.descriptor}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="text-center text-[14px] font-light text-mediumText mt-14">
            Looking for a specific area?{" "}
            <Link
              href="/contact"
              className="text-gold hover:text-goldDark underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition-all"
            >
              Let&apos;s talk →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

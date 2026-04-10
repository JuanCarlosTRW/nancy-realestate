import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

type Hood = {
  name: string;
  descriptor: string;
  img: string;
  featured?: boolean;
};

const HOODS: Hood[] = [
  {
    name: "Bent Tree",
    descriptor: "Established luxury in North Dallas",
    featured: true,
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
  },
  {
    name: "Highland Park",
    descriptor: "Dallas' most prestigious address",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    name: "Frisco",
    descriptor: "Fast-growing, family-friendly North Dallas",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&q=80",
  },
  {
    name: "Plano",
    descriptor: "Suburban excellence with big-city access",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  },
  {
    name: "Richardson",
    descriptor: "Diverse, walkable, underrated gem",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
  },
  {
    name: "Uptown Dallas",
    descriptor: "Urban energy, walkable lifestyle",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
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
              <article className="group relative h-[300px] md:h-[340px] overflow-hidden rounded-[2px] border border-bordr shadow-warm hover:shadow-warmLg transition-all duration-500 cursor-default">
                <Image
                  src={n.img}
                  alt={`${n.name} neighborhood`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {n.featured && (
                  <div className="absolute top-5 right-5 z-10 text-[9px] tracking-label uppercase font-medium text-charcoal bg-gold px-3 py-1.5 rounded-[2px]">
                    Featured Sale
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-7 z-10">
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

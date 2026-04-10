"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import TiltCard from "@/components/ui/TiltCard";

type Hood = {
  name: string;
  descriptor: string;
  img: string;
};

const HOODS: Hood[] = [
  {
    name: "North Dallas",
    descriptor: "Established neighborhoods with easy access to everything",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
  },
  {
    name: "Carrollton",
    descriptor: "Family-friendly with character and value",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  },
  {
    name: "Preston Hollow",
    descriptor: "One of Dallas's most sought-after addresses",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    name: "Frisco",
    descriptor: "Fast-growing, family-friendly North Dallas",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&q=80",
  },
  {
    name: "Flower Mound",
    descriptor: "Top-rated schools and a small-town feel",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
  },
  {
    name: "Grapevine",
    descriptor: "Historic charm with modern convenience",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    name: "Colleyville",
    descriptor: "Quiet luxury in the heart of DFW",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
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
              From North Dallas to Colleyville, I know these streets and the
              stories behind them.
            </p>
            <AnimatedDivider className="w-16 mx-auto mt-8" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {HOODS.slice(0, 4).map((n, i) => (
            <Reveal key={n.name} delay={(i % 4) * 0.08}>
              <TiltCard
                rotateAmplitude={6}
                scaleOnHover={1.03}
                className="h-[200px] sm:h-[280px] md:h-[340px]"
              >
                <article className="group relative w-full h-full overflow-hidden rounded-[2px] border border-bordr shadow-warm hover:shadow-warmLg transition-all duration-500 cursor-default">
                  <Image
                    src={n.img}
                    alt={`${n.name} neighborhood`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 z-10">
                    <h3 className="font-display font-light text-[24px] sm:text-[28px] md:text-[30px] text-white leading-[1.1]">
                      {n.name}
                    </h3>
                    <div className="w-8 h-px bg-gradient-to-r from-gold to-transparent mt-3" />
                    <p className="text-[11px] md:text-[12px] text-goldLight/95 font-light mt-3 leading-[1.5]">
                      {n.descriptor}
                    </p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-5 md:mt-6">
          {HOODS.slice(4).map((n, i) => (
            <Reveal key={n.name} delay={(i % 3) * 0.08}>
              <TiltCard
                rotateAmplitude={6}
                scaleOnHover={1.03}
                className="h-[200px] sm:h-[280px] md:h-[340px]"
              >
                <article className="group relative w-full h-full overflow-hidden rounded-[2px] border border-bordr shadow-warm hover:shadow-warmLg transition-all duration-500 cursor-default">
                  <Image
                    src={n.img}
                    alt={`${n.name} neighborhood`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 z-10">
                    <h3 className="font-display font-light text-[24px] sm:text-[30px] md:text-[32px] text-white leading-[1.1]">
                      {n.name}
                    </h3>
                    <div className="w-8 h-px bg-gradient-to-r from-gold to-transparent mt-3" />
                    <p className="text-[11px] md:text-[12px] text-goldLight/95 font-light mt-3 leading-[1.5]">
                      {n.descriptor}
                    </p>
                  </div>
                </article>
              </TiltCard>
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
              Let&apos;s talk
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

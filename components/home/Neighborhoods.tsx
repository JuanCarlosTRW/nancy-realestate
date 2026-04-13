"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

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
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    name: "Frisco",
    descriptor: "Fast-growing, family-friendly North Dallas",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&q=80",
  },
  {
    name: "Flower Mound",
    descriptor: "Lakeside living with a small-town feel",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80",
  },
  {
    name: "Grapevine",
    descriptor: "Historic charm with modern convenience",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
  },
];

function NeighborhoodCard({ hood }: { hood: Hood }) {
  return (
    <article className="group relative w-full h-full overflow-hidden cursor-default">
      <Image
        src={hood.img}
        alt={`${hood.name} neighborhood`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 40%, transparent 100%)",
        }}
      />
      {/* Gold bottom border on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
        <h3 className="font-display font-medium text-[22px] md:text-[24px] text-white leading-[1.1]">
          {hood.name}
        </h3>
        {/* Gold line between name and tagline — expands on hover */}
        <div className="w-[30px] group-hover:w-[60px] h-[2px] bg-gold mt-2 mb-2 transition-all duration-500" />
        <p className="text-[12px] text-white/80 font-light leading-[1.5] tracking-[0.02em]">
          {hood.descriptor}
        </p>
      </div>
    </article>
  );
}

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
            <p className="body-p mt-6 max-w-2xl mx-auto">
              From North Dallas to Flower Mound, I know these streets and the
              stories behind them.
            </p>
            <AnimatedDivider className="w-16 mx-auto mt-8" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {HOODS.map((n, i) => (
            <Reveal key={n.name} delay={i * 0.08}>
              <div className="h-[200px] sm:h-[240px] md:h-[300px]">
                <NeighborhoodCard hood={n} />
              </div>
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

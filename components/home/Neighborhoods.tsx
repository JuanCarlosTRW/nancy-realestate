"use client";
import Image from "next/image";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
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

function NeighborhoodCard({ hood }: { hood: Hood }) {
  return (
    <article className="group relative w-full h-full overflow-hidden rounded-[2px] border border-bordr shadow-warm hover:shadow-warmLg transition-all duration-500 cursor-default">
      <Image
        src={hood.img}
        alt={`${hood.name} neighborhood`}
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
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
        <h3 className="font-display font-light text-[20px] sm:text-[24px] md:text-[26px] text-white leading-[1.1]">
          {hood.name}
        </h3>
        <div className="w-8 h-px bg-gradient-to-r from-gold to-transparent mt-2" />
        <p className="text-[10px] md:text-[11px] text-goldLight/95 font-light mt-2 leading-[1.5]">
          {hood.descriptor}
        </p>
      </div>
    </article>
  );
}

export default function Neighborhoods() {
  return (
    <section className="bg-bgSection overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="label">Dallas Neighborhoods</p>
            <h2 className="h-display mt-4">
              The City I&apos;ve Called Home for{" "}
              <span className="italic text-gold">50+ Years</span>
            </h2>
            <p className="body-p mt-6 max-w-2xl mx-auto">
              From North Dallas to Colleyville, I know these streets and the
              stories behind them.
            </p>
            <AnimatedDivider className="w-16 mx-auto mt-8" />
          </>
        }
      >
        <div className="h-full w-full overflow-y-auto overflow-x-hidden p-3 md:p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {HOODS.slice(0, 4).map((n) => (
              <div key={n.name} className="h-[140px] sm:h-[180px] md:h-[200px]">
                <NeighborhoodCard hood={n} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-4">
            {HOODS.slice(4).map((n) => (
              <div key={n.name} className="h-[140px] sm:h-[180px] md:h-[200px]">
                <NeighborhoodCard hood={n} />
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] font-light text-mediumText mt-6">
            Looking for a specific area?{" "}
            <Link
              href="/contact"
              className="text-gold hover:text-goldDark underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition-all"
            >
              Let&apos;s talk
            </Link>
          </p>
        </div>
      </ContainerScroll>
    </section>
  );
}

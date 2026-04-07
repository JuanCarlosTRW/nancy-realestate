import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ListingCard from "@/components/listings/ListingCard";
import { LISTINGS } from "@/lib/constants";

export default function FeaturedListings() {
  const [featured, ...rest] = LISTINGS.slice(0, 3);

  return (
    <section className="section-pad bg-warmWhite">
      <Reveal>
        <div className="container-x text-center mb-16">
          <p className="label">Featured Properties</p>
          <h2 className="h-display mt-3">
            Current <span className="italic text-gold">Listings</span>
          </h2>
        </div>
      </Reveal>

      <div className="container-x grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Large featured card spans 2 cols on md+ */}
        <Reveal className="md:col-span-2">
          <article className="group bg-warmWhite border border-bordr transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <div className="relative h-[280px] md:h-[420px] overflow-hidden bg-bgSection">
              <Image
                src={featured.img}
                alt={featured.address}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute top-5 left-5 bg-gold text-white text-[10px] tracking-button uppercase font-semibold px-4 py-2">
                Just Listed
              </span>
            </div>
            <div className="p-8 md:p-10">
              <p className="font-display text-4xl text-gold">{featured.price}</p>
              <p className="font-display text-2xl md:text-3xl text-darkText mt-2">
                {featured.address}
              </p>
              <p className="text-[11px] tracking-label uppercase font-semibold text-lightText mt-1">
                {featured.hood}
              </p>
              <div className="flex gap-8 mt-6 pt-6 border-t border-bordr text-[13px] text-mediumText font-light">
                <span>{featured.beds} Beds</span>
                <span>{featured.baths} Baths</span>
                <span>{featured.sqft} Sqft</span>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Two stacked cards in right column */}
        <div className="flex flex-col gap-6 md:gap-8">
          {rest.map((l, i) => (
            <Reveal key={l.id} delay={0.1 + i * 0.1}>
              <ListingCard {...l} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <Button href="/listings" variant="outline">
          View All Listings
        </Button>
      </div>
    </section>
  );
}

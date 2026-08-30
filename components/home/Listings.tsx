import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

// Add new listings here — the grid handles one or several cards gracefully.
const LISTINGS = [
  {
    status: "Coming Soon",
    name: "Brookhaven Estates",
    facts: "4 Bedrooms · 3 Bathrooms · 2,288 Sq Ft",
    img: "/images/brookhaven-estates-coming-soon.jpg",
    width: 1215,
    height: 1186,
    alt: "Coming Soon — Brookhaven Estates: 4 bedrooms, 3 bathrooms, 2,288 square feet. Contact Nancy Musselman, REALTOR® at Clancy Realty — 214-797-8040 or Nmusselmanrealty@gmail.com.",
  },
];

export default function Listings() {
  return (
    <section
      className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-warmWhite"
      aria-labelledby="listings-heading"
    >
      <div className="container-x max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gold">
              Listings
            </p>
            <h2
              id="listings-heading"
              className="font-display font-normal text-darkText mt-4"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
            >
              Coming Soon{" "}
              <span
                className="italic text-gold"
                style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}
              >
                to the Market
              </span>
            </h2>
            <AnimatedDivider className="w-16 mx-auto mt-8" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 justify-items-center">
          {LISTINGS.map((listing, i) => (
            <Reveal key={listing.name} delay={i * 0.1}>
              <figure
                className="max-w-xl overflow-hidden border border-gold/[0.12] bg-[#FFFCF5] shadow-warm transition-all duration-500 hover:-translate-y-[6px] hover:border-gold/25 hover:shadow-warmLg"
                style={{ borderRadius: "4px" }}
              >
                <Image
                  src={listing.img}
                  alt={listing.alt}
                  width={listing.width}
                  height={listing.height}
                  sizes="(max-width: 768px) 100vw, 576px"
                  className="w-full h-auto"
                />
                <figcaption className="border-t border-bordr/60 px-6 py-5 text-center">
                  <p className="font-display text-[20px] text-darkText leading-[1.2]">
                    {listing.name}
                  </p>
                  <p className="mt-1 text-[11px] tracking-[0.15em] uppercase font-medium text-accent">
                    {listing.status} · {listing.facts}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p
            className="text-center text-[0.85rem] font-light mt-12"
            style={{ color: "#2A211C" }}
          >
            Want details before it hits the market?{" "}
            <Link
              href="/contact"
              className="text-gold hover:text-goldDark underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition-all"
            >
              Ask Nancy
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

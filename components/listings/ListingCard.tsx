import Image from "next/image";

interface Props {
  img: string;
  price: string;
  address: string;
  hood: string;
  beds: string;
  baths: string;
  sqft: string;
  status?: string;
}

export default function ListingCard({
  img,
  price,
  address,
  hood,
  beds,
  baths,
  sqft,
  status,
}: Props) {
  return (
    <article className="group bg-warmWhite border border-bordr transition-all duration-300 hover:-translate-y-1 hover:border-gold">
      <div className="relative h-[240px] overflow-hidden bg-bgSection">
        <Image
          src={img}
          alt={address}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {status && status !== "for-sale" && (
          <span className="absolute top-4 left-4 bg-charcoal text-white text-[10px] tracking-button uppercase font-semibold px-3 py-1.5">
            {status === "sold" ? "Sold" : "Coming Soon"}
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="font-display text-2xl text-gold">{price}</p>
        <p className="font-display text-xl text-darkText mt-1">{address}</p>
        <p className="text-[11px] tracking-label uppercase font-semibold text-lightText mt-1">
          {hood}
        </p>
        <div className="flex gap-5 mt-5 pt-5 border-t border-bordr text-[12px] text-mediumText font-light">
          <span>{beds} Beds</span>
          <span>{baths} Baths</span>
          <span>{sqft} Sqft</span>
        </div>
      </div>
    </article>
  );
}

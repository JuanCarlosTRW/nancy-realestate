import Button from "@/components/ui/Button";
import ListingCard from "@/components/listings/ListingCard";
import { LISTINGS } from "@/lib/constants";

export default function FeaturedListings() {
  return (
    <section className="section-pad bg-warmWhite">
      <div className="container-x text-center mb-16">
        <p className="label">Featured Properties</p>
        <h2 className="h-display mt-3">
          Current <span className="italic text-gold">Listings</span>
        </h2>
      </div>
      <div className="container-x grid grid-cols-1 md:grid-cols-3 gap-8">
        {LISTINGS.slice(0, 3).map((l) => (
          <ListingCard key={l.id} {...l} />
        ))}
      </div>
      <div className="text-center mt-16">
        <Button href="/listings" variant="outline">
          View All Listings
        </Button>
      </div>
    </section>
  );
}

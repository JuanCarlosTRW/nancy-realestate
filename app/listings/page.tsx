import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ListingFilters from "@/components/listings/ListingFilters";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Current Listings | Nancy Real Estate",
  description: "Browse current Dallas real estate listings with Nancy.",
};

export default function ListingsPage() {
  return (
    <>
      <PageHero
        label="Properties"
        titleStart="Current"
        titleAccent="Listings"
        subtitle="A curated selection across Dallas, Fort Worth, and North Texas."
      />
      <section className="section-pad bg-warmWhite">
        <div className="container-x">
          <ListingFilters />

          <div className="mt-20 border border-dashed border-bordr p-12 text-center bg-bgSection">
            <p className="text-[12px] tracking-button uppercase text-lightText">
              [Connect to MLS / IDX feed or manually add listings here]
            </p>
          </div>

          <div className="text-center mt-16">
            <p className="font-display text-3xl text-darkText mb-6">
              Don't see what you're looking for?
            </p>
            <Button href="/contact">Let's Talk</Button>
          </div>
        </div>
      </section>
    </>
  );
}

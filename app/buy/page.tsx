import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import CTABanner from "@/components/layout/CTABanner";
import Button from "@/components/ui/Button";
import { BUY_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Buying a Home in Dallas | Nancy Real Estate",
  description:
    "A calm, guided home-buying process from discovery to closing day across Dallas–Fort Worth.",
};

export default function BuyPage() {
  return (
    <>
      <PageHero
        label="For Buyers"
        titleStart="Find the Home You'll"
        titleAccent="Love Coming Back To"
        subtitle="A clear, calm process — from your first conversation to the moment you turn the key."
      />
      <ProcessSteps steps={BUY_STEPS} />
      <section className="section-pad bg-bgSection text-center">
        <p className="label">Local Knowledge</p>
        <h2 className="h-display mt-3">
          I Know Dallas <span className="italic text-gold">Inside Out</span>
        </h2>
        <p className="body-p max-w-xl mx-auto mt-6">
          Not sure where to start? Let's talk through neighborhoods, lifestyle,
          and what fits — no pressure, just guidance.
        </p>
        <div className="mt-10">
          <Button href="/contact">Schedule a Discovery Call</Button>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

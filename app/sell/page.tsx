import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import CTABanner from "@/components/layout/CTABanner";
import Button from "@/components/ui/Button";
import { SELL_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Selling Your Home in Dallas | Nancy Real Estate",
  description:
    "Strategic pricing, beautiful marketing, and full-service representation to maximize your sale.",
};

export default function SellPage() {
  return (
    <>
      <PageHero
        label="For Sellers"
        titleStart="Sell Your Home for"
        titleAccent="What It's Worth"
        subtitle="Strategic pricing and elevated marketing — built around your timeline and goals."
      />
      <ProcessSteps steps={SELL_STEPS} />
      <section
        className="section-pad text-center text-white"
        style={{ background: "#2A2A2A" }}
      >
        <p className="label">Free Consultation</p>
        <h2 className="h-display mt-3 text-white">
          Wondering What Your Home <span className="italic text-goldLight">Is Worth?</span>
        </h2>
        <p className="text-[15px] leading-[1.9] font-light text-white/80 max-w-xl mx-auto mt-6">
          Get a personalized market analysis based on real Dallas comparables —
          not an automated website estimate.
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="outline-white">
            Request Your Free Valuation
          </Button>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

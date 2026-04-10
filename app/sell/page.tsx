import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import BenefitCards from "@/components/ui/BenefitCards";

export const metadata: Metadata = {
  title: "Selling Your Home in Dallas | Nancy Musselman",
  description:
    "Sell your Dallas home with Nancy Musselman. Strategic pricing, presentation, and professional execution from a lifelong Dallasite.",
};

const STEPS = [
  {
    n: "01",
    title: "Home Walkthrough",
    body: "I will come to your home, assess it honestly, and tell you exactly what it is worth and what to do before listing. No sugarcoating. Just a clear plan to get you the best result.",
  },
  {
    n: "02",
    title: "Pricing Strategy",
    body: "Overpricing is the number one mistake sellers make. It does not attract better offers. It drives buyers away. I will price it right from day one to attract serious buyers fast.",
  },
  {
    n: "03",
    title: "Presentation",
    body: "From professional photos to listing copy, we will present your home in its best light. I will tell you exactly what to fix and what to skip. No wasted money on upgrades buyers will not notice.",
  },
  {
    n: "04",
    title: "Marketing & Exposure",
    body: "Your home goes on the MLS and gets in front of serious buyers actively searching in Dallas. I make sure the listing stands out, not just shows up.",
  },
  {
    n: "05",
    title: "Negotiate & Close",
    body: "When offers come in, I handle the negotiation so you get the best possible outcome. My background in accounting and HR means I manage the numbers and the people with equal precision.",
  },
];

const BENEFITS = [
  {
    icon: "Scale",
    title: "Honest Pricing Advice",
    body: "Not what you want to hear, but what the market will actually pay. That is how homes sell fast and above ask.",
  },
  {
    icon: "ClipboardCheck",
    title: "Detail-Oriented Prep Guidance",
    body: "I will tell you exactly what to fix and what to skip. No wasted money on upgrades that will not move the needle. Every dollar you spend on prep should come back at closing.",
  },
  {
    icon: "Shield",
    title: "Calm When It Counts",
    body: "Inspection surprises. Last-minute buyer demands. Appraisal issues. I have seen it all before, and I do not panic. I keep the deal moving and keep you informed without the drama.",
  },
];

export default function SellPage() {
  return (
    <>
      <PageHero
        label="For Sellers"
        titleStart="Sell Your Dallas Home With"
        titleAccent="Someone Who Knows Every Street"
        subtitle="Pricing strategy, presentation, and professional execution. I will handle it all."
      />

      {/* Visual */}
      <Reveal>
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
            alt="Luxury home interior staging"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warmWhite via-transparent to-warmWhite" />
        </div>
      </Reveal>

      {/* Process Steps */}
      <section className="section-pad bg-warmWhite">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="text-center mb-16">
              <p className="label">How It Works</p>
              <h2 className="h-display mt-4">
                The Selling <span className="italic text-gold">Process</span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
            </div>
          </Reveal>
          <div className="space-y-2">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 py-10 border-b border-bordr last:border-0 items-start">
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-gold/40 bg-bgSection">
                    <span className="font-display text-gold text-[20px] md:text-[22px]">
                      {s.n}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-[26px] md:text-[30px] text-darkText leading-tight">
                      {s.title}
                    </h3>
                    <p className="body-p mt-4 max-w-2xl">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Personal attention callout */}
      <Reveal>
        <div className="py-16 md:py-20 bg-warmWhite border-t border-bordr">
          <p className="container-x max-w-3xl text-center font-display italic text-[22px] md:text-[28px] text-darkText leading-[1.45]">
            Every home I list gets my full attention. I do not juggle 30 listings
            at once. When I represent your home, it gets the focus it deserves.
          </p>
        </div>
      </Reveal>

      {/* Benefits */}
      <section className="section-pad bg-bgSection">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="label">What Sellers Get</p>
              <h2 className="h-display mt-4">
                Working With{" "}
                <span className="italic text-gold">Nancy</span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
            </div>
          </Reveal>
          <BenefitCards benefits={BENEFITS} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-warmWhite text-center">
        <div className="container-x max-w-2xl">
          <h2 className="h-display">
            Thinking About{" "}
            <span className="italic text-gold">Selling?</span>
          </h2>
          <AnimatedDivider className="w-16 mx-auto mt-6" />
          <p className="body-p mt-8">
            Start with a no-pressure conversation. I&apos;ll tell you exactly
            where your home stands.
          </p>
          <div className="mt-10">
            <Button href="/contact">Get Your Home&apos;s Value</Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

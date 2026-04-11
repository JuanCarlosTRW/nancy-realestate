import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import InteractiveSplitSection from "@/components/ui/InteractiveSplitSection";

export const metadata: Metadata = {
  title: "Buying a Home in Dallas | Nancy Musselman",
  description:
    "Finding your Dallas home starts here. Work with Nancy Musselman, a Dallas agent with 50+ years in the DFW Metroplex.",
};

const STEPS = [
  {
    n: "01",
    title: "Let\u2019s Talk First",
    body: "Most buyers start by scrolling listings online for months. That is backwards. I start by understanding what actually matters to you \u2014 not just bedrooms and budget, but the street you want to live on, the commute you can tolerate, and the neighborhood that fits how your family actually lives. The more honest this conversation is, the fewer wrong houses we waste time on.",
  },
  {
    n: "02",
    title: "Get Pre-Approved",
    body: "In this market, a home you love will not wait for your financing to catch up. I will connect you with lenders I trust in the Dallas area so you are ready to move the same day you find the right one. Being pre-approved is not just smart \u2014 it is the difference between getting the house and watching someone else get it.",
  },
  {
    n: "03",
    title: "Tour Homes Together",
    body: "I do not just open doors and let you wander. I grew up around construction. I will point out the things you will not notice in photos \u2014 the water stain that means a roof problem, the slope in the floor that means foundation work, the renovation that looks beautiful but was done without permits. That is the difference between buying a home and buying a problem.",
  },
  {
    n: "04",
    title: "Make a Strong Offer",
    body: "The right offer is not just about price. It is about terms, timing, and knowing what the seller actually cares about. My background in HR taught me how to read people and negotiate situations where both sides feel good about the outcome. I will help you win the house without overpaying for it.",
  },
  {
    n: "05",
    title: "Close With Confidence",
    body: "Between the accepted offer and the keys in your hand, a hundred things can go sideways. Inspection issues, appraisal gaps, title problems, lender delays. I have spent twenty-two years managing complex, high-stakes situations where the details matter and the timeline is tight. From contract to close, nothing slips through on my watch.",
  },
];

const SPLIT_ITEMS = [
  {
    label: "Neighborhoods You Will Not Find on a Top-10 List",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Charming Dallas residential street",
    description:
      "I know Dallas neighborhoods that never make the best-of lists but should. The quiet streets with great schools, the blocks where values are climbing, the areas most agents overlook. Let me show you the ones that actually fit your life.",
    pullQuote:
      "The best neighborhoods are not always the most famous ones.",
  },
  {
    label: "Steady Under Pressure",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Calm professional interior",
    description:
      "My background in accounting and HR means I do not flinch when negotiations get tense. When a counteroffer comes in lower than expected or a deadline is tight, I keep a clear head so you can make confident decisions. That steadiness comes from two decades of navigating high-pressure professional situations.",
    pullQuote:
      "I am the calm in the room when everyone else is not.",
  },
  {
    label: "Honest About What You Are Looking At",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Home construction detail",
    description:
      "I was raised around construction. I will tell you the truth about a home. What is solid, what needs work, and what will cost you. No surprises after closing.",
    pullQuote: "I read the building, not just the listing.",
  },
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        label="For Buyers"
        titleStart="Finding Your Dallas Home"
        titleAccent="Starts Here"
        subtitle="The right home in the right neighborhood. I know this city well enough to help you find both."
      />

      {/* Visual */}
      <Reveal>
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200"
            alt="Modern luxury home exterior"
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
                The Buying <span className="italic text-gold">Process</span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
            </div>
          </Reveal>
          <div className="space-y-0">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-10 items-start">
                  <div className="flex flex-col items-center">
                    <span className="font-display text-[40px] md:text-[48px] text-gold/30 leading-none font-light select-none">
                      {s.n}
                    </span>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 bg-gold/15 mt-3 min-h-[40px]" />
                    )}
                  </div>
                  <div className="pb-10 md:pb-12">
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

      {/* What I Catch — micro-section */}
      <section className="py-16 md:py-20 bg-bgSection px-6 md:px-12">
        <div className="container-x max-w-[700px] text-center">
          <Reveal>
            <p className="label mb-8">The Details Matter</p>
            <p className="body-p text-[15px] leading-[1.8] text-mediumText">
              I grew up on job sites watching my family build homes from the
              ground up. That means when I walk through a property with you, I am
              not just looking at countertops and paint colors. I am checking the
              foundation, the roof line, the drainage, the electrical panel, the
              water heater age, and the quality of every renovation. I see the
              things that do not show up in listing photos &mdash; and the things
              that will show up on your inspection report.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Buyers Choose Nancy — Interactive Split */}
      <InteractiveSplitSection
        sectionLabel="Why Nancy"
        sectionTitle="Why Buyers Choose"
        sectionTitleAccent="to Work With Me"
        items={SPLIT_ITEMS}
      />

      {/* Buyer Testimonial */}
      <section className="section-pad bg-bgSection">
        <div className="container-x max-w-4xl">
          <Reveal>
            {/* PLACEHOLDER: Replace with real testimonial from Nancy */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-0 bg-warmWhite border border-bordr overflow-hidden">
              <div className="relative h-[260px] md:h-auto min-h-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                  alt="Preston Hollow home exterior"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <span className="block font-display text-[60px] text-gold/20 leading-none select-none -mb-2" aria-hidden="true">&ldquo;</span>
                <p className="font-display italic text-[20px] md:text-[22px] text-darkText leading-[1.5]">
                  We looked at over twenty homes before Nancy found the one. She knew exactly which streets to focus on and which to skip. That saved us months.
                </p>
                <div className="w-10 h-px bg-gold/30 mt-8" />
                <div className="mt-6">
                  <p className="text-[12px] tracking-button uppercase font-medium text-darkText">
                    The Richardson Family
                  </p>
                  <p className="text-[11px] tracking-label uppercase font-medium text-gold mt-1">
                    Bought in Preston Hollow
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-warmWhite text-center">
        <div className="container-x max-w-2xl">
          <h2 className="h-display">
            Ready to Start{" "}
            <span className="italic text-gold">Your Search?</span>
          </h2>
          <AnimatedDivider className="w-16 mx-auto mt-6" />
          <p className="body-p mt-8">
            Tell me the neighborhood. I will show you what no listing site will.
          </p>
          <p className="font-display italic text-[18px] text-goldLight mt-6">
            I will not show you a single home until I understand exactly what you are looking for.
          </p>
          <div className="mt-10">
            <Button href="/contact">Start Your Search</Button>
          </div>
        </div>
      </section>
    </>
  );
}
